<?php 

return array(
	// These three options must be set.
	'host' => 'example.com',
	'username' => 'username@example.com',
	'password' => 'password',
	
	// These are optional.
	'fromEmail' => 'username@example.com', // if not set the username option will be used instead.
	'fromName' => 'My Website Name', 
	'toEmail' => 'username@example.com', // if not set the username option will be used instead.
	'toName' => 'John Smith',
	
	'subject' => 'Message from my website', // Message subject. You can set here a field value inserting in it braces {field_name}.
	'messagePrefix' => '', // content added before table with sended data. You can set here a field value inserting in it braces {field_name}.
	'messageSuffix' => '',// content added after table with sended data. You can set here a field value inserting in it braces {field_name}.
	
	'encryption' => 'tls', // Enable TLS encryption, `ssl` also accepted
	'port' => 587, // CP port to connect to
	'phpCertificateFix' => false, // for more information about it please see this page: https://github.com/PHPMailer/PHPMailer/wiki/Troubleshooting#php-56-certificate-verification-failure

	'debug' => false, // debug mode, with more detailed messages

	'confirmationMessage' => 'Message was send.', // Message showed to user while successfull 
	'errorMessage' => 'There was a problem while sendig a message, please try again later or contact with my by phone or skype.', // Message showed when something goes wrong.
	
	// Validation messages.
	'validateMessages' => array(
		'required' => 'This field is required.',
		'is_email' => 'This is not a valid e-mail address',
		'recaptcha' => 'reCAPTCHA failed'
	),

	// reCAPTCHA settings
	'recaptcha' => array(
		'enabled' => false,
		'site_key' => '',
		'secret_key' => ''
	),
	
	// Contact form fields. 
	// If not set validation by php will not work. 
	// Here you can set an label of field name placed in message.
	'fields' => array(
		// key is field name
		'name' => array(
			'label' => 'Name', // Label of field replaced in messege.
			'required' => true, // Additional required validation.
		),
		'email' => array(
			'label' => 'E-mail',
			'required' => true,
			'is_email' => true // Additional email filter.
		),
		'message' => array(
			'label' => 'Message',
			'required' => true
		)
	)
);
