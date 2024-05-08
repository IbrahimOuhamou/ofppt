<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>in the name of Allah</title>
</head>
<body>
    <?php
        if(isset($_REQUEST['enregistrer']))
        {
            echo '<ul>';
            echo '<li>' . $_REQUEST['enregistrer']  . '</li>';
            echo '<li>' . $_REQUEST['cin']  . '</li>';
            echo '<li>' . $_REQUEST['nom']  . '</li>';
            echo '<li>' . $_REQUEST['pays'] . '</li>';
            echo '<li>' . $_REQUEST['genre'] . '</li>';
            echo '<li>' ,  isset($_REQUEST['marie']) ? 'marie':'non marie' , '</li>';
            echo '<li> filiere: <ol>';
            if(isset($_REQUEST['filiere']))
            {
                foreach($_REQUEST['filiere'] as $f) {
                    echo '<li>' . $f . '</li>';
                }
            } else {
                echo '<li style="color:red;">aucune filiere</li>';
            }
            echo '</ol> </li>';
            echo '</ul>';
        }
    ?>
    <form>
        <pre>
            CIN:    <input type="text" name="cin" />

            NOM:    <input type="text" name="nom" />

           FILIERS: <input type="checkbox" name="filiere[]" value="full-stack" /> Full Stack
                    <input type="checkbox" name="filiere[]" value="mobile" /> Mobile
                    <input type="checkbox" name="filiere[]" value="IA" /> IA
                    <input type="checkbox" name="filiere[]" value="ARV" /> ARV

            PAYS:   <select name="pays">
                <option>Morocco</option>
                <option>Russia</option>
                <option>Palestine</option>
            </select>


            GENRE:  <input type="radio" name="genre" value="male" checked=""> Male
                    <input type="radio" name="genre" value="female"> Female 

            MARIE:  <input type="checkbox" name="marie" />

            <input type="submit" name="enregistrer" value="enregistrer" />
        </pre>
    </form>
</body>
</html>