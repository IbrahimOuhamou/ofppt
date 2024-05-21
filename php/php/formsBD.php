<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>in the name of Allah</title>
</head>
<body>
    <?php
        if(isset($_REQUEST['enregistrer']))
        {
            try {
                $connexion = new PDO("mysql:host=192.168.122.126;dbname=myDB;", "bismi_allah", "bismi_allah");
                //$connection = new PDO("mysql:host=localhost;dbname=myDB", "root");

                $query = $connexion->prepare("INSERT INTO stagiaires values(?, ?, ?, ?, ?)");

                $query->bindValue(1, $_REQUEST['cin']);
                $query->bindValue(2, $_REQUEST['nom']);
                $query->bindValue(3, $_REQUEST['genre']);
                $query->bindValue(4, (isset($_REQUEST['marie']) ? 'marie':'celibataire'));

                $filieres = "";
                if(isset($_REQUEST['filiere']))
                {
                    foreach($_REQUEST['filiere'] as $f) {
                        $filieres = $filieres . " " . $f;
                    }
                }
                $query->bindValue(5, $filieres);

                $query->execute();
                echo '<p>stagiair ajouter avec success</p>';
            } catch(Exception $e) {
                echo $e->getMessage();
            }
        }
            /*
            if(isset($_REQUEST['filiere']))
            {
                foreach($_REQUEST['filiere'] as $f) {
                    echo '<li>' . $f . '</li>';
                }
            } else {
                echo '<li style="color:red;">aucune filiere</li>';
            }
            echo '</ol> </li>';
            echo '</ul>';
            */
    ?>
    <form>
        <pre>
            CIN:    <input type="text" name="cin" />

            NOM:    <input type="text" name="nom" />

           FILIERS: <input type="checkbox" name="filiere[]" value="full-stack" /> Full Stack
                    <input type="checkbox" name="filiere[]" value="mobile" /> Mobile
                    <input type="checkbox" name="filiere[]" value="IA" /> IA
                    <input type="checkbox" name="filiere[]" value="ARV" /> ARV

            PAYS:   <select name="pays">
                <option>Morocco</option>
                <option>Russia</option>
                <option>Palestine</option>
            </select>


            GENRE:  <input type="radio" name="genre" value="male" checked=""> Male
                    <input type="radio" name="genre" value="female"> Female 

            MARIE:  <input type="checkbox" name="marie" />

            <input type="submit" name="enregistrer" value="enregistrer" />
        </pre>
    </form>
</body>
</html>