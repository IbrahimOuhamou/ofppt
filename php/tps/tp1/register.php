<?php
    //بسم الله الرحمن الرحيم
    session_set_cookie_params(60 * 60 * 4);
    session_start();
    try {
        if(isset($_REQUEST['button_login'])) {
            $connection = new PDO("mysql:host=192.168.122.126;dbname=tp_jardin;", 'bismi_allah', 'bismi_allah');
            $query = $connection->prepare('INSERT INTO Jardinier(NomJardinier, prenom, date_embauche, login, mdp) VALUES (?, ?, ?, ?, ?)');

            $query->bindValue(1, $_REQUEST['input_nom']);
            $query->bindValue(2, $_REQUEST['input_prenom']);
            $query->bindValue(3, $_REQUEST['input_date_embauche']);
            $query->bindValue(4, $_REQUEST['input_login']);
            $query->bindValue(5, $_REQUEST['input_mdp']);

            $query->execute();
            header('location:login.php');
        }
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
//
?>
<!DOCTYPE html>
<!--بسم الله الرحمن الرحيم-->
<html>
<head>
    <meta charset="utf-8">
</head>
<body>
    <p>بسم الله الرحمن الرحيم</p>
    <form method="post" action="#">
        Nom: <input name="input_nom"><br/>
        Preom: <input name="input_prenom"><br/>
        Date Emauche: <input name="input_date_embauche"><br/>
        Login: <input name="input_login"><br/>
        Mot De Pass: <input name="input_mdp"><br/>
        <button type="submit" name="button_login">bismi Allah</button>
    </form>
</body>
</html>
