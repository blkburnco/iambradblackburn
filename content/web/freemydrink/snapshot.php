<?php
if($_POST['iwidth'] == "" || $_POST['iwidth'] == "" || $_POST['iwidth'] == ""){
	echo "This file will only work when you call to it from the swf file, sorry!";
	exit();
}

//This script doesn't actually store a file, but only shows the image. If you want it to store the image, then uncomment the line at the bottom of this page.
	$string="";
	if(!function_exists("imagecreate")) die("Sorry, you don't seem to have the right php version.");
	//Capture Post data
	$data = explode(",", addslashes($_POST['img']));
	$width = addslashes($_POST['iwidth']);
	$height = addslashes($_POST['iheight']);
	//Allocate image
	$image=(function_exists("imagecreatetruecolor"))?imagecreatetruecolor( $width ,$height ):imagecreate( $width ,$height );
	imagefill($image, 0, 0, 0xFFFFFF);
	$i = 0;
	for($x=0; $x<=$width; $x++){
		for($y=0; $y<=$height; $y++){
			$r = hexdec("0X".substr( $data[$i] , 0 , 2 )); 
			$g = hexdec("0x".substr( $data[$i] , 2 , 2 )); 
			$b = hexdec("0x".substr( $data[$i] , 4 , 2 ));
			$color = imagecolorallocate($image, $r, $g, $b);
			imagesetpixel ( $image , $x , $y , $color );
			$i++;
		}
	}
	header("Content-Type: image/jpeg");
	//show image. free memory
	imagejpeg($image,'',100);
	//uncomment the line below to store the image as an actual jpg file.
	//imagejpeg($image,'file.jpg',100); 
	imagedestroy( $image );	
?>
