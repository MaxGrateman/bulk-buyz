<?php
require_once '../credentials.php';
require_once '../DatabaseConnection.php';

$database = new DatabaseConnection($dsn, $username, $password);
$database->connect();
$connection = $database->getConnection();

$query = "SELECT id, name  FROM products";

$statement = $database->prepare($query);
$statement->execute();
$products = $statement->fetchAll(PDO::FETCH_ASSOC);

foreach ($products as $product) {
    echo "<option value=\"{$product['id']}\">{$product['name']}</option>";
}