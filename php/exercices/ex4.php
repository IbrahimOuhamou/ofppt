<!DOCTYPE html>
<!--in the name of Allah-->
<html lang="en">
<head>
    <title>in the name of Allah</title>
    <meta charset="UTF-8">
    <link href="bismi_allah.css" rel="stylesheet">
</head>
<body>
    <p>in the name of Allah</p>
    <?php
        $min = 3;
        $max = 6;
        for ($i=$min; $i <= $max; $i++)
        { 
            echo "<h2> table de multiplucation de $i: </h2>";
            for ($ii=1; $ii < 9; $ii++)
            {
                echo "$i * $ii == " . $i * $ii . '<br>';
            }
        }
    ?>
</body>
</html>

