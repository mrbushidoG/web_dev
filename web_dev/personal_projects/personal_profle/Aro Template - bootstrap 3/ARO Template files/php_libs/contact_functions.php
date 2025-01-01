<?php

/**
 * Load PHPMailer autoloader
 */
include LIBS_PATH . '/PHPMailer/PHPMailerAutoload.php';

/**
 * Ajax response statuses
 */
define("RESPONSE_STATUS_SUCCESS", true);
define("RESPONSE_STATUS_ERROR", false);

/**
* Loading configuration.
* Allowed configuration files: 
* - contact-config.php
* - contact-config.ini.php
* - contact-config.ini
*/
function getConfig(){
	
	$filename = 'contact-config';
	
	$config = false;
	
	if(file_exists(ROOT_PATH . '/' . $filename . '.php')){
		$config = include ROOT_PATH . '/' . $filename . '.php';
	}
	else if(file_exists(ROOT_PATH . '/' . $filename . '.ini.php')){
		$config = parse_ini_file(ROOT_PATH . '/' . $filename . '.ini.php');
	}
	else if(file_exists(ROOT_PATH . '/' . $filename . '.ini')){
		$config = parse_ini_file(ROOT_PATH . '/' . $filename . '.ini');
	}
	
	$config = array_merge(getDefaultConfig(), $config);
	
	if(is_null($config['fromEmail'])){
		$config['fromEmail'] = $config['username'];
	}
	if(is_null($config['toEmail'])){
		$config['toEmail'] = $config['username'];
	}
	
	return $config;
}

/**
 * Default configuration
 * @return array
 */
function getDefaultConfig(){
	
	return array(
		'host' => null,
		'username' => null,
		'password' => null,
	
		'fromEmail' => null,
		'fromName' => null,
		'toEmail' => null,
		'toName' => null,
		
		'subject' => 'Message from my website',
		'messagePrefix' => '',
		'messageSuffix' => '',
		
		'encryption' => 'tls',
		'port' => 587,

		'debug' => false,
		
		'confirmationMessage' => 'Message was send.',
		'errorMessage' => 'There was a problem while sendig a message, please try again later or contact with my by phone or skype.',
		'validateMessages' => array(
			'required' => 'This field is required.',
			'is_email' => 'This is not a valid e-mail address',
			'recaptcha' => 'reCAPTCHA failed'
		),

		'recaptcha' => array(
			'enabled' => false,
			'site_key' => '',
			'secret_key' => ''
		),

		'fields' => array()
	);	
}

/**
* Getting param from POST
*/
function getParam($name, $default = null){
	$value = (array_key_exists($name, $_POST)) ? $_POST[$name] : $default;
	
	return paramFilter($value);
}

/**
* Filtering value
*/
function paramFilter($value){
	return htmlspecialchars($value);
}

/**
* Preparing reponse
*/
function sendResponse($message, $status, $invalidFields = array()){
	
	$response = array(
		'status' => ($status == RESPONSE_STATUS_SUCCESS) ? 'success' : 'error',
		'message' => $message
	);
	
	if($invalidFields){
		$response['invalidFields'] = $invalidFields;
	}
	
	header('Content-Type: application/json;charset=utf-8');
	echo json_encode($response);
	exit;
}

/*
 * Compile text - replace shortcode on field value sended by form
 */
function compileText($text){
	$matches = array();
	
	preg_match_all('/{([a-z0-9_\-]?)}/i', $text, $matches);
	
	if($matches){
		$fields = $matches[1];
		
		$patterns = array();
		$values = array();
		
		foreach($fields as $field){
			$patterns[] = '/{' . $field . '}/i';
			$values[] = getParam($field, '');
		}
		
		$text = preg_replace($patterns, $values, $text);
	}
	
	return $text;
}

/*
 * Validate form fields
 */
function validateForm($fieldsConfig, $messages, $reCAPTCHA){
	if(!is_array($fieldsConfig)){
		return false;
	}

	$errors = array();

	if($reCAPTCHA['enabled']){
		if(!checkReCaptcha($reCAPTCHA['secret_key'])){
			$errors['recaptcha'] = $messages['recaptcha'];
		}
	}

	foreach($_POST as $field => $value){

		if(array_key_exists($field, $fieldsConfig) && is_array($fieldsConfig[$field])){
				
			if(array_key_exists('required', $fieldsConfig[$field]) && $fieldsConfig[$field]['required'] && !$value){
				$errors[$field] = $messages['required'];
			}
			else if(array_key_exists('is_email', $fieldsConfig[$field]) && $fieldsConfig[$field]['is_email'] && !filter_var($value, FILTER_VALIDATE_EMAIL)){
				$errors[$field] = $messages['is_email'];
			}
		}
	}
	
	return array(
		'result' => (count($errors) == 0),
		'errors' => $errors
	);
}

function checkReCaptcha($secret_key){
	$verifySite = 'https://www.google.com/recaptcha/api/siteverify';
	$params = array(
		'secret' => $secret_key,
		'response' => $_POST['g-recaptcha-response'],
		'ip_address' => $_SERVER['REMOTE_ADDR']
	);

	$link = $verifySite . '?' . http_build_query($params);

	$response = file_get_contents($link);

	if($response){
		$json = json_decode($response);
		if($json && property_exists($json, 'success')){
			return $json->success;
		}
	}

	return false;
}

/*
 * Get field label
 */
function getFieldLabel($field, $fieldsConfig){
	if(is_array($fieldsConfig) && array_key_exists($field, $fieldsConfig) 
		&& is_array($fieldsConfig[$field]) && array_key_exists('label', $fieldsConfig[$field])){
			
		return $fieldsConfig[$field]['label'];
	}
	return $field;
}

/*
 * Get field value
 */
function getFieldValue($field, $value, $fieldsConfig){
	if(is_array($fieldsConfig) && array_key_exists($field, $fieldsConfig) 
		&& is_array($fieldsConfig[$field]) && array_key_exists('values', $fieldsConfig[$field]) 
		&& is_array($fieldsConfig[$field]['values']) && array_key_exists($value, $fieldsConfig[$field]['values'])){
			
		return $fieldsConfig[$field]['values'][$value];
	}
	return $value;
}

/*
 * Prepare e-mail content
 */
function getContent($config){
		
	$contentHtml = '';
	$contentText = '';

	foreach($_POST as $field => $value){

		if(in_array($field, array('g-recaptcha-response', 'hiddenRecaptcha'))){
			continue;
		}

		$label = getFieldLabel($field, $config['fields']);
		$value = getFieldValue($field, $value, $config['fields']);

		$contentHtml .= '<tr><td style="width: 30%;"><strong>';
		$contentHtml .= $label . ':';
		$contentHtml .= '</strong></td><td style="width: 70%">';
		$contentHtml .= $value;
		$contentHtml .= '</td></tr>';
		
		$contentText .= strip_tags($label) . ':';
		$contentText .= strip_tags($value) .PHP_EOL;
	}

	$messagePrefixHTML = '';
	$messagePrefixText = '';
	if($config['messagePrefix']){
		
		$prefix = compileText($config['messagePrefixHTML']);
		
		$messagePrefixHTML = '<tr><td colspan="2">';
		$messagePrefixHTML .= $prefix;
		$messagePrefixHTML .= '<tr></td>';
		
		$messagePrefixText = strip_tags($prefix);
	}

	$messageSuffixHTML = '';
	$messageSuffixText = '';
	if($config['messageSuffix']){
		
		$sufix = compileText($config['messageSuffixHTML']);
		
		$messageSuffixHTML = '<tr><td colspan="2">';
		$messageSuffixHTML .= $sufix;
		$messageSuffixHTML .= '<tr></td>';
		
		$messageSuffixText = strip_tags($sufix);
	}

	$bodyHTML = <<<MAIL_BODY
	<body style="font-family: Arial; background: #ffffff; font-size: 12px;margin: 0 auto; width: 100%; padding: 0; line-height:20px;">
		<table width="100%" bgcolor="#fff" cellpadding="0" cellspacing="0" border="0" align="center">
			<tr>
				<td>
					<table width="600" cellpadding="0" cellspacing="0" border="0" align="left">
					{$messagePrefixHTML}
					{$contentHtml}
					{$messageSuffixHTML}
					</table>
				</td>
			</tr>
		</table>
	</body>
MAIL_BODY;

	$bodyText = $messagePrefixText . PHP_EOL;
	$bodyText .= $contentText . PHP_EOL;
	$bodyText .= $messageSuffixText;

	
	return array(
		'html' => $bodyHTML,
		'text' => $bodyText
	);
}

/*
 * Send message
 */
function sendMessage($config, $contentHtml, $contetText){

	$mail = new PHPMailer;
	$mail->isSMTP();
	$mail->Host = $config['host'];
	$mail->SMTPAuth = true;
	$mail->Username = $config['username'];
	$mail->Password = $config['password'];
	$mail->SMTPSecure = $config['encryption'];
	$mail->Port = $config['port'];
	$mail->isHTML(true);
	
	if($config['phpCertificateFix']){
		$mail->SMTPOptions = array(
			'ssl' => array(
				'verify_peer' => false,
				'verify_peer_name' => false,
				'allow_self_signed' => true
			)
		);
	}

	$mail->Subject = compileText($config['subject']);

	$mail->setFrom($config['fromEmail'], $config['fromName']);
	$mail->addAddress($config['toEmail'], $config['toName']);

	$mail->Body    = $contentHtml;
	$mail->AltBody = $contetText;

	$result = array(
		'status' => false,
		'message' => ''
	);
	if(!$mail->send()){
		$result['message'] = $mail->ErrorInfo;
	}
	else{
		$result['status'] = true;
	}

	return $result;
}