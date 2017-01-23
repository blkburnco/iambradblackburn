<?php
	require 'jsonwrapper.php';
	include_once (dirname(dirname(__FILE__)).'/CONFIG.php');
	$response = null;
	if (isset($_POST["action"])) {
	   $action = $_POST["action"];
		switch ($action) {
			case "Initialize": {
				$mainData = array();
				$mainData["Start_Date"] = $start_date;
				$mainData["Backgrounds"] = $backgrounds;
				$response = $mainData;
			}
			break;
			default: {
					$response = "Invalid action is set! Action is: " . $action;
				}
		}
	}
	if (isset($response) && !empty($response) && !is_null($response)) {
		echo '{"ResponseData":' . json_encode($response) . '}';
	}
?>
