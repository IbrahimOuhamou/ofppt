<?php
//بسم الله الرحمن الرحيم
function menu() {
    echo '<a href="/bismi_allah.php">acceuil</a> <a href="/login.php">login</a> <a href="/register.php">register</a>';
    if (isset($_SESSION['user'])) {
        echo ' <a href="/disconnect.php">disconnect</a> <a href="/listJardins.php">votre jardins</a>';
    }
}
?>

