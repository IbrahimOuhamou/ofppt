<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    
    <table border="1">
        <tr>
            <th>Cin</th> <th>Nom</th> <th>genre</th> <th>marie?</th> <th>filieres</th>
        </tr>
        <?php
            try {
                $connexion = new PDO("mysql:host=192.168.122.126;dbname=myDB;", "bismi_allah", "bismi_allah");
                //$connection = new PDO("mysql:host=localhost;dbname=myDB", "root", "");

                $query = $connexion->prepare("SELECT * FROM stagiaires");
                $query->execute();

                $stagiaires = $query->fetchAll();
                
                foreach($stagiaires as $s) {
                    echo '<tr> <td>', $s['cin'] ,'</td> <td>', $s['nom'] ,'</td> <td>', $s['genre'] ,'</td> <td>', $s['marie'] ,'</td> <td>', $s['filiere'], '</td> <td><a href="/php/supp_stag.php?cin=', $s['cin'], '">supprimer</a></td> <td><a href="/php/editStagiaire.php?cin=', $s['cin'], '">editer</a></td> </tr>';
                }

            } catch(Exception $e) {
                echo $e->getMessage();
            }
        ?>
    </table>
    
</body>
</html>
