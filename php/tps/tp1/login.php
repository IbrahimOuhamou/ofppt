<?php
    //بسم الله الرحمن الرحيم
    session_set_cookie_params(60 * 60 * 4);
    session_start();
    try {
        if(isset($_REQUEST['button_login'])) {
            $connection = new PDO("mysql:host=192.168.122.126;dbname=tp_jardin;", 'bismi_allah', 'bismi_allah');
            $query = $connection->prepare('SELECT * FROM Jardinier WHERE login=? AND mdp=?');

            $query->bindValue(1, $_REQUEST['input_login']);
            $query->bindValue(2, $_REQUEST['input_mdp']);

            $query->execute();
            $jardinier = $query->fetch();
            $_SESSION['user'] = $jardinier;
            header('location:maitre.php');
        }
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
//INSERT INTO Jardinier(NomJardinier, prenom, date_embauche, login, mdp) VALUES (?, ?, ?, ?, ?)
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
        Login: <input name="input_login"><br/>
        Mot De Pass: <input name="input_mdp"><br/>
        <button type="submit" name="button_login">bismi Allah</button>
    </form>
</body>
</html>
