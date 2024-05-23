<!DOCTYPE html>
<!--بسم الله الرحمن الرحيم-->

<?php
    $departemets_list = [];
    try {
        $connexion = new PDO('mysql:host=192.168.122.126;dbname=myDB;', 'bismi_allah', 'bismi_allah');
        
        $query = $connexion->prepare('SELECT * FROM Departements');
        $query->execute();
        $departemets_list = $query->fetchAll();

        if( isset($_REQUEST['matricule']) ) {
            $query = $connexion->prepare('INSERT INTO Employes VALUES (?, ?, ?, ?)');
            $query->bindValue(1, $_REQUEST['matricule']);
            $query->bindValue(2, $_REQUEST['nom']);
            $query->bindValue(3, $_REQUEST['genre']);
            $query->bindValue(4, $_REQUEST['department']);

            $query->execute();
        }

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
        <form method="post" action="#">
            Matricule: <input type="text" name="matricule"/> <br/>
            Nom: <input type="text" name="nom" /> <br/>
            Genre:  Homme <input type="radio" name="genre" value="homme" />
                    Femme <input type="radio" name="genre" value="femme" />
            <br/>
            <select name="department">
                <?php
                    foreach ($departemets_list as $dept) {
                        echo '<option value="' . $dept['numDept'] . '">' . $dept['nomDept'] . '</option>';
                    }
                ?>
            </select>
            <br/>
            <button type="reset">Annuler</button>
            <button type="submit" value="ajouter">ajouter</button>
        </form>
    </body>
</html>
