<?php
    //بسم الله الرحمن الرحيم
    session_set_cookie_params(60 * 60 * 4);
    session_start();
    include 'menu.php';
?>
<!DOCTYPE html>
<!--بسم الله الرحمن الرحيم-->
<html>
<head>
    <meta charset="utf-8">
</head>
<body>
    <?php menu(); ?>
    <p>بسم الله الرحمن الرحيم</p>
    <p>assalamo alaykom <?php echo $_SESSION['user']['NomJardinier'];?></p>
</body>
</html>
