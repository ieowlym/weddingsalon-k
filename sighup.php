<?php
session_start();
$con = mysqli_connect('localhost', 'root', '');
mysqli_select_db($con, 'WeddingSalon');
$name = $_POST['name'];
$id = $_POST['id'];
$sss =  "select * from SignUp where Name = '$name' && ID = '$id'";
$result = mysqli_query($con, $sss);
$num = mysqli_num_rows($result);
if($num == 1){
    $_SESSION['Name'] = $name;
    header('location:Din.php');
}
else{
      header('location:Login.php');
}
?>
