<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>in the name of Allah</title>
</head>
<body>
    <?php
        echo $_REQUEST['cin'];
    ?>
    <form>
        <pre>
            CIN:    <input type="text" name="cin" />

            NOM:    <input type="text" name="nom" />

            PAYS:   <select name="pays">
                <option>Morocco</option>
                <option>Russia</option>
                <option>Palestine</option>
            </select>

            <button type="submit" name="enregistrer">enregistrer</button>
        </pre>
    </form>
</body>
</html>