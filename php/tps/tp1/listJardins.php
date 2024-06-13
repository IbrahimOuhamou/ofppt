<?
//بسم الله الرحمن الرحيم
//la ilaha illa Allah Mohammed Rassoul Allah

require('menu.php');

try {
    $connection = new PDO('mysql:host=192.168.122.126;dbname=tp_jardin', 'bismi_allah', 'bismi_allah');

    $query = $connection->prepare('SELECT * FROM Jardin WHERE NumJardinier=?');
    $query->bindValue(1, $_SESSION['user']['NumJardinier']);
    $query->execute();

    $list_jardin = $query->fetchAll(PDO::FETCH_ASSOC);

} catch(PDOException $e) {
    echo $e->getMessage();
}
?>

<!DOCTYPE html>
<!--بسم الله الرحمن الرحيم-->
<html>
<head>
    <meta charset="utf-8">
    <title>بسم الله الرحمن الرحيم</title>
</head>
<body>
    <p>بسم الله الرحمن الرحيم</p>
    <table border="1">
        <tr>
            <th>nom</th>
            <th>ville</th>
            <th>superficie</th>
        </tr>
        <tbody>
            <?php
                foreach ($list_jardin as $jardin) {
                    echo '<tr>';
                    echo '<td>' . $jardin['NomJardin']  . '</td>';
                    echo '<td>' . $jardin['ville']      . '</td>';
                    echo '<td>' . $jardin['superficie'] . '</td>';
                    echo '</tr>';
                }
            ?>
        </tbody>
    </table>
</body>
</html>

