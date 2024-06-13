<?php
//بسم الله الرحمن الرحيم
session_set_cookie_params(60 * 60 * 4);
session_start();
if(!isset($_SESSION['user'])) header('location:login.php');

function menu() {
    echo '<a href="/bismi_allah.php">acceuil</a> <a href="/login.php">login</a> <a href="/register.php">register</a>';
    if (isset($_SESSION['user'])) {
        echo ' <a href="/disconnect.php">disconnect</a> <a href="/listJardins.php">votre jardins</a>';
    }
}
?>

