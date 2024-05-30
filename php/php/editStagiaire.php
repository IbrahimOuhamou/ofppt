<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>in the name of Allah</title>
</head>
<body>
    <?php
        $stagiaire = null;
        try {
            $connexion = new PDO("mysql:host=192.168.122.126;dbname=myDB;", "bismi_allah", "bismi_allah");
            //$connection = new PDO("mysql:host=localhost;dbname=myDB", "root");

            if(isset($_REQUEST['enregistrer'])) {
                $query = $connexion->prepare("UPDATE stagiaires SET nom=?, genre=?, marie=?, filiere=? WHERE cin=?");

                $query->bindValue(1, $_REQUEST['nom']);
                $query->bindValue(2, $_REQUEST['genre']);
                $query->bindValue(3, (isset($_REQUEST['marie']) ? 'marie':'celibataire'));

                $filieres = "";
                if(isset($_REQUEST['filiere'])) {
                    foreach($_REQUEST['filiere'] as $f) {
                        $filieres = $filieres . " " . $f;
                    }
                    $query->bindValue(4, $filieres);
                } else {
                    $query->bindValue(4, '');
                }

                $query->bindValue(5, $_REQUEST['cin']);
                $query->execute();
            }

            $query = $connexion->prepare('SELECT * FROM stagiaires WHERE cin=?');
            $query->bindValue(1, $_REQUEST['cin']);
            $query->execute();
            $stagiaire = $query->fetchAll()[0];
        } catch(Exception $e) {
            echo $e->getMessage();
        }
    ?>
    <form method="post">
        <pre>
            CIN:    <input type="text" name="cin" required value=<?php echo '"', $stagiaire['cin'], '"' ?>/>

            NOM:    <input type="text" name="nom" required value=<?php echo '"', $stagiaire['nom'], '"' ?>/>

            FILIERS: <input type="checkbox" name="filiere[]" value="full-stack" <?php if(strpos($stagiaire['filiere'], 'full-stack') !== false) echo 'checked' ?> /> Full Stack
                    <input type="checkbox" name="filiere[]" value="mobile" <?php if(strpos($stagiaire['filiere'], 'mobile') !== false) echo 'checked' ?>/> Mobile
                    <input type="checkbox" name="filiere[]" value="IA" <?php if(strpos($stagiaire['filiere'], 'IA') !== false) echo 'checked' ?>/> IA
                    <input type="checkbox" name="filiere[]" value="ARV" <?php if(strpos($stagiaire['filiere'], 'ARV') !== false) echo 'checked' ?>/> ARV

            PAYS:   <select name="pays" required>
                <option>Morocco</option>
                <option>Turkey</option>
                <option>Palestine</option>
            </select>


            GENRE:  <input type="radio" name="genre" value="male" <?php if($stagiaire['genre'] == 'male') echo 'checked' ?> /> Male
                    <input type="radio" name="genre" value="female" <?php if($stagiaire['genre'] == 'female') echo 'checked' ?> > Female 

            MARIE:  <input type="checkbox" name="marie" <?php if($stagiaire['marie'] == 'marie') echo 'checked' ?> />

            <input type="submit" name="enregistrer" value="enregistrer"/>
        </pre>
    </form>
</body>
</html>
