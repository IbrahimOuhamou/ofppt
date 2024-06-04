<?php
    //بسم الله الرحمن الرحيم
    session_set_cookie_params(60 * 60 * 4);
    session_start();
    include 'menu.php';
//INSERT INTO Jardinier(NomJardinier, prenom, date_embauche, login, mdp) VALUES (?, ?, ?, ?, ?)
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
</body>
</html>
