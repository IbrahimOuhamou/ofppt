<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bismi Allah</title>
</head>
<body>
 
    <h1>tableau assossiative</h1>
    <?php
        $stagiaire = [  "cin" => "AN1002",
                        "nom" => "Mohammed",
                        "age" => 25,
                        "date_inscription" => date('D M Y')];

        echo 'taille du tableau ' . count($stagiaire);
        echo "<br />l'age est: " . $stagiaire['age'];
        echo "<br />date_inscription est: " . $stagiaire['date_inscription'];

        // changer l'age
        $stagiaire['age'] = 3;
        echo "<br />l'age est: " . $stagiaire['age'];

        // ajouter un new element
        $stagiaire['groupe'] = "DEV101";
        echo '<pre>';
        //print_r($stagiaire);
        echo '</pre>';

        //parcour
        echo '<ul>';
        foreach($stagiaire as $cle => $valeur)
        {
            echo '<li>', $cle, ': ', $valeur, '</li>';
        }
        echo '</ul>';

        //le tri tableau assossiatif
        ksort($stagiaire);
        echo '<ul>';
        foreach($stagiaire as $cle => $valeur)
        {
            echo '<li>', $cle, ': ', $valeur, '</li>';
        }
        echo '</ul>';

        //supprimer la case de cle 'date_inscription'
        unset($stagiaire['date_inscription']);
        echo '<ul>';
        foreach($stagiaire as $cle => $valeur)
        {
            echo '<li>', $cle, ': ', $valeur, '</li>';
        }
        echo '</ul>';

        echo $stagiaire['date_inscription']

    ?>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
</body>
</html>