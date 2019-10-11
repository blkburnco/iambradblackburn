<?php
	require 'jsonwrapper.php';
	include_once (dirname(dirname(__FILE__)).'/CONFIG.php');
	if($_POST)
	{
	
		$to_Email   	= $contact_email;
		if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
		
			$output = json_encode(
			array(
				'type'=>'error', 
				'text' => 'Request must come from Ajax'
			));		
			die($output);
		} 
		
		if(!isset($_POST["userName"]) || !isset($_POST["userEmail"]) ||  !isset($_POST["userMessage"]))
		{
			$output = json_encode(array('type'=>'error', 'text' => 'Input fields are empty!'));
			die($output);
		}
		
		$user_Name        = filter_var($_POST["userName"], FILTER_SANITIZE_STRING);
		$user_Email       = filter_var($_POST["userEmail"], FILTER_SANITIZE_EMAIL);
		$user_Message     = filter_var($_POST["userMessage"], FILTER_SANITIZE_STRING);
		$user_Subject     = filter_var($_POST["userSubject"], FILTER_SANITIZE_STRING);
		if(strlen($user_Name)<4) 
		
		{
			$output = json_encode(array('type'=>'error', 'text' => 'Name is too short or empty!'));
			die($output);
		}
		if(!filter_var($user_Email, FILTER_VALIDATE_EMAIL))
		{
			$output = json_encode(array('type'=>'error', 'text' => 'Please enter a valid email!'));
			die($output);
		}
		
		if(strlen($user_Message)<5)
		{
			$output = json_encode(array('type'=>'error', 'text' => 'Too short message! Please enter something.'));
			die($output);
		}
		
		$headers = 'From: '.$user_Email.'' . "\r\n" .
		'Reply-To: '.$user_Email.'' . "\r\n" .
		'X-Mailer: PHP/' . phpversion();
		
		$sentMail = @mail($to_Email, $user_Subject, $user_Message .'  -'.$user_Name, $headers);
		
		if(!$sentMail)
		{
			$output = json_encode(array('type'=>'error', 'text' => 'Could not send mail! Please check your PHP mail configuration.'));
			die($output);
		}else{
			$output = json_encode(array('type'=>'message', 'text' => 'Hi '.$user_Name .' Thank you for your email'));
			die($output);
		}
	}
?>