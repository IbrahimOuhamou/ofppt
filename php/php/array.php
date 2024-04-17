<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <p>in the name of Allah</p>
    <p>Tableau indexe</p>

    <?php
        $tab = array(12, 134);
        $tab[2] = 69;
        
        //utiliser la fonction array_push()
        array_push($tab, "nous somme DEV101");

        echo "<ul>";
        for($i = 0; $i < count($tab); $i++)
        {
            if(isset($tab[$i]))
            {
                echo "<li>" . $tab[$i] . "</li>";
            }
        }
        //parcouri un tableau avec foreach
        echo '<br>';
        sort()
        foreach($tab as $v)
        {
            echo "<li>" . $v . "</li>";
        }
        echo "</ul>";
    ?>
</body>
</html>