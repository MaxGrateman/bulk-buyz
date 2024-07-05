<?php
require_once '../credentials.php';
require_once '../DatabaseConnection.php';

$database = new DatabaseConnection($dsn, $username, $password);
$database->connect();
$connection = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $product_id = $_POST['product_id'];
    $variant_name = $_POST['variant_name'];
    $variant_price = $_POST['variant_price'];

    $query = "
    INSERT INTO variants (productId, variant, price)
    VALUES (:productId, :variant, :variantPrice)
  ";

    $statement = $database->prepare($query);
    $statement->bindParam(':productId', $product_id);
    $statement->bindParam(':variant', $variant_name);
    $statement->bindParam(':variantPrice', $variant_price);
    $statement->execute();

    // Редирект на страницу админ-панели после добавления варианта продукта
    header('Location: index.php');
    exit();
}