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

        $num = rand(0, 200);
        $num0 = $num;
        $rest = '';

        while($num != 0)
        {
            $rest = $num % 2 . $rest;
            //$num = floor($num/2);
            $num = (int)($num/2);
        }
        echo $num0 . ' en binaire est ' . ($num0==0 ? '0' : $rest) . '<br>';
    ?>
</body>
</html>

