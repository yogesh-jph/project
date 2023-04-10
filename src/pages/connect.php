<?php

$host="localhost";
$user="root";
$password="";
$db_name="try";

$con=mysqli_connect( 'localhost','root','','try');
if(mysqli_connect_errno()){

    die('Connection failed : '.mysqli_connect_error());
}


?>