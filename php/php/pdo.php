<?php
//بسم الله الرحمن الرحيم
//la ilaha illa Allah Mohammed Rassoul Allah

echo "بسم الله الرحمن الرحيم\n";

$connexion = new PDO('mysql:dbname=bismi_allah_db;host=192.168.122.126', 'bismi_allah', 'bismi_allah');


$bismi_allah_users = $connexion->query("SELECT * FROM bismi_allah_users");

var_dump($bismi_allah_users);
var_dump($connexion->query("SELECT * FROM bismi_allah_users"));

