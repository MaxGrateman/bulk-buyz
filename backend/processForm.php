<?php
header("Access-Control-Allow-Headers: application/json");
header("Access-Control-Allow-Origin: http://localhost:5173");

require_once __DIR__ . '/credentials.php';
require_once __DIR__ . '/DatabaseConnection.php';

$database = new DatabaseConnection($dsn, $username, $password);
$database->connect();
$connection = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $selectedProduct = $_POST['product'];

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $query = "INSERT INTO users (email, name, variant, price, time) VALUES (:email, 'Test', :selectedProduct, '228', NOW())";
        $stmt = $database->prepare($query);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':selectedProduct', $selectedProduct);
        $stmt->execute();
        $count = $stmt->rowCount();
        if ($count > 0) {
            echo "E-mail записан в БД";
        } else {
            echo "Произошла ошибка при записи в БД";
        }
    } else {
        echo 'Некорректный адрес электронной почты';
    }
}