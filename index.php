<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Hello World!</title>
</head>
<body>
    <h1>Hello World!</h1>
<?php 
    $mysql = new mysqli("localhost", "root", "root", "Hero");
    $mysql->query("SET NAMES utf8");
    if($mysql->connect_error) {
        echo 'Error Number: ' . $mysql->connect_errno . <br>
        echo 'Error: ' . $mysql->connect_error;
    }
$mysql->close();
?>
</body>
</html>