<?php
require_once '../credentials.php';
require_once '../DatabaseConnection.php';

$database = new DatabaseConnection($dsn, $username, $password);
$database->connect();
$connection = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $product_name = $_POST['product_name'];
    $product_description = $_POST['product_description'];

    $query = "
    INSERT INTO products (name, description)
    VALUES (:name, :description)
  ";

    $statement = $database->prepare($query);
    $statement->bindParam(':name', $product_name);
    $statement->bindParam(':description', $product_description);
    $statement->execute();

    // Редирект на страницу админ-панели после добавления продукта
    header('Location: index.php');
    exit();
}