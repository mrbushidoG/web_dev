<?php
// Configuration file that I used in demo page. Of course credentials are changed :)
return array(

	'host' => 'mail.example.com',
	'username' => 'noreply@example.com',
	'password' => 'super-secret-password',
	'port' => 587,
	'encryption' => 'tls',

	'toEmail' => 'noreply@example.com',

	'recaptcha' => array(
		'enabled' => true,
		'site_key' => 'YOUR_SITE_KEY',
		'secret_key' => 'YOUR_SECRET_KEY'
	),

	'fields' => array(
		'name' => array(
			'label' => 'Name',
			'required' => true
		),
		'email' => array(
			'label' => 'E-mail',
			'required' => true,
			'is_email' => true
		),
		'message' => array(
			'label' => 'Message',
			'required' => true
		)
	)
);
