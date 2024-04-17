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
        foreach($tab as $v)
        {
            echo "<li>" . $v . "</li>";
        }
        echo "</ul>";

        //declaration d'un tableau avec []
        $colors = ["red", "green", "yellow"];

        array_push($colors, "brown");

        echo "<ol>";
        foreach($colors as $c)
        {
            echo "<li>" . $c . "</li>";
        }
        echo "</ol>";

        //correction d'exercice
        $n = rand(2, 20);
        $arr = [];
        for($i = 0; $i < $n; $i++)
        {
            array_push($arr, rand(-100, 100));
        }

        echo "n == " . $n . "<br>";
        foreach($arr as $v)
        {
            echo " / " . $v;
        }
        echo '<br>';
        rsort($arr);
        echo "tableau apres le tri <br />";
        foreach($arr as $v)
        {
            echo " / " . $v;
        }
    ?>
</body>
</html>
