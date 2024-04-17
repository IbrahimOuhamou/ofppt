<!DOCTYPE html>
<!--in the name of Allah-->
<html lang="en">
<head>
    <title>in the name of Allah</title>
    <meta charset="UTF-8">
</head>
<body>
    <p>in the name of Allah</p>
    <?php
        $n = rand(2, 20);
        $arr = [];
        for($i = 0; $i < $n; $i++)
        {
            $arr[$i] = rand(-100, 100);
        }
        sort($arr);
        print_r($arr);
    ?>
</body>
</html>

