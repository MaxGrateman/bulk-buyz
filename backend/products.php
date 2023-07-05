<?php
header("Access-Control-Allow-Headers: application/json");
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json"); // Устанавливаем заголовок Content-Type

require_once __DIR__ . '/credentials.php';
require_once __DIR__ . '/DatabaseConnection.php';

$database = new DatabaseConnection($dsn, $username, $password);
$database->connect();
$connection = $database->getConnection();

$query = 'SELECT * FROM products';
$statement = $database->prepare($query);
$statement->execute();

$products = [];

while ($product = $statement->fetch(PDO::FETCH_ASSOC)) {
    $products[] = $product;
}

echo json_encode($products);