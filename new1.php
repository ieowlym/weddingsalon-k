<?php
session_start();

//header('location:contact.php');

$con = mysqli_connect('localhost', 'root', '');
mysqli_select_db($con, 'WeddingSalon');

$name = $_POST['name'];
$phonen = $_POST['phone'];
$mail = $_POST['E-mail'];
$id = $_POST['id'];
$address = $_POST['address'];

$sss = " select * from `SignUp` where Name  = '$name'";
$result = mysqli_query($con, $sss);
$num = mysqli_num_rows($result);
if($num == 1){
    echo "Usermame already exist";
}
else{
    $reg = "insert into `SignUp` (Name, PhoneNUmber, Email, ID, Address) values ('$name', '$phonen', '$mail','$id', '$address')";
    mysqli_query($con, $reg);
	header('location:login.php');
    echo "User succesfully added";
}
?>
