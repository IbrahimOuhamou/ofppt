<!DOCTYPE html>
<!--in the name of Allah-->
<html>
<head>
    <title>in the name of Allah</title>
    <style>
    .dev
    {
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    </style>
</head>
<body>
    <p>in the name of Allah</p>
    <p><?php echo date('y/m/d h:i:sa'); ?></p>
    <p><?php echo date('Ha'); ?></p>

    <div class="dev">
        <h1>arithmetic</h1>
        <?php $var1=12; $var2=0; ?>
        <p><b>var1 =</b> <?php echo "$var1";?></p>
        <p><b>var2 =</b> <?php echo $var2;?></p>
        <p><b>var1 + var2 = </b> <?php echo $var1 + $var2; ?></p>
        <p><b>var1 - var2 = </b> <?php echo $var1 - $var2; ?></p>
        <p><b>var1 * var2 = </b> <?php echo $var1 * $var2; ?></p>
        <p><b>var1 / var2 = </b> <?php if(0 !== $var2){echo $var1 / $var2;}else{echo 'machi ila kant 0';} ?></p>
        <p><b>var1 / var2 = </b> <?php echo 0!==$var2 ? $var1 * $var2 : 'machi ila kant 0'; ?></p>
    </div>

    <div class="dev">
        <h1>tp condition</h1>
        <p>Assalamo Alaykom c'est le <?php $hour = (int)date('H'); if($hour > 16){echo 'apres midi';}elseif($hour > 12){echo 'midi';}elseif($hour > 7){echo 'matin';}?></p>
    </div>
</body>
</html>
