<?php
include('connect.php');
$name = $_POST['name'];
$email = $_POST['email'];
$number =$_POST['number']; 


$name = stripcslashes($name);  
        $email = stripcslashes($email);  
        $number = stripcslashes($number); 
        $name = mysqli_real_escape_string($con, $name);  
        $email = mysqli_real_escape_string($con, $email);
        $number = mysqli_real_escape_string($con, $number);  
      
        $sql = "select *from login where name = '$name' , email = '$email' and number ='$number'";  
        $result = mysqli_query($con, $sql);  
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
        $count = mysqli_num_rows($result);  
          
        if($count == 1){  
            echo "<h1><center> Login successful </center></h1>";  
        }  
        else{  
            echo "<h1> Login failed. Invalid username or password.</h1>";  
        }     
?>

?>