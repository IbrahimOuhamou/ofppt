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
        $num = 5;
        $tmp = $num;
        $result = '';
        while($tmp != 0)
        {
            $result = $result . $tmp % 2;
            $tmp = (int)($tmp/2);
        }
        echo $num . ' en binaire est ' . $result . '<br>';
    ?>
</body>
</html>

