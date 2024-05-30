<!DOCTYPE html>
<!--بسم الله الرحمن الرحيم-->

<?php
    try {
        $connexion = new PDO('mysql:host=192.168.122.126;dbname=myDB;', 'bismi_allah', 'bismi_allah');

        $query = $connexion->prepare('DELETE FROM stagiaires WHERE cin=?');
        $query->bindValue(1, $_REQUEST['cin']);
        $query->execute();

        header("location:/php/listStagiaires.php");
    } catch(Exception $e) {
        echo $e->getMessage();
    }
?>

<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>bismi Allah</title>
    </head>
    <body>
        <p>بسم الله الرحمن الرحيم</p>
        <p>alhamdo li Allah deleted user with cin: <?php echo $_REQUEST['cin'] ?></p>
        <p><a href="/php/listStagiaires.php">list des stagiaires</a></p>
    </body>
</html>
