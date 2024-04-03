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

        $num = rand(1, 13);
        $a = rand(1, 15);
        $b = rand(1, 15);
        
        for($i=min($b, $a); $i<=max($b, $a); $i++)
        {
            $result = $num * $i ;
            echo "$num * $i = $result <br>";
        }

    ?>
</body>
</html>

