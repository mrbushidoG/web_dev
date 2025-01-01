<?php

/**
 * Basic path's
 */
define('ROOT_PATH', rtrim(dirname(__FILE__), DIRECTORY_SEPARATOR));
define('LIBS_PATH', ROOT_PATH . '/php_libs');

/**
 * Load file with functions required to validate form and send email
 */
include LIBS_PATH . '/contact_functions.php';

/**
 * Getting configuration
 */
$defaultConfig = getDefaultConfig();

$config = getConfig();

define('DEBUG', !!$config['debug']);

if (is_null(!$config['host']) || is_null(!$config['username']) || is_null(!$config['password'])) {
    if (!DEBUG) {
        sendResponse($config['errorMessage'], RESPONSE_STATUS_ERROR);
    } else {
        sendResponse('Unable to send message. Host, username or password are not set.', RESPONSE_STATUS_ERROR);
    }
    exit;
}

/**
 * Validate form
 */
$validateInfo = validateForm($config['fields'], $config['validateMessages'], $config['recaptcha']);
if (!$validateInfo) {
    if (!DEBUG) {
        sendResponse($config['errorMessage'], RESPONSE_STATUS_ERROR);
    } else {
        sendResponse('Unable to send message. Fields validation failed, check configuration file.', RESPONSE_STATUS_ERROR);
    }
    exit;
} else {
    if (!$validateInfo['result']) {
        sendResponse('', RESPONSE_STATUS_ERROR, $validateInfo['errors']);
        exit;
    }
}

/**
 * Prepare and send email content
 */
$content = getContent($config);

try {
    $result = sendMessage($config, $content['html'], $content['text']);
} catch (Exception $e) {
    $result = array(
        'status' => false,
        'message' => $e->getMessage()
    );
}

/**
 * Send back response
 */
if ($result['status']) {
    sendResponse($config['confirmationMessage'], RESPONSE_STATUS_SUCCESS);
    exit;
}

if (!DEBUG) {
    sendResponse($config['errorMessage'], RESPONSE_STATUS_ERROR);
} else {
    sendResponse('There was an error while sending message: <br>' . $result['message'], RESPONSE_STATUS_ERROR);
}
