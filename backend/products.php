<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    header("HTTP/1.1 200 OK");
    exit();
}

header("Content-Type: application/json");

require_once __DIR__ . '/credentials.php';
require_once __DIR__ . '/DatabaseConnection.php';

$database = new DatabaseConnection($dsn, $username, $password);
$database->connect();
$connection = $database->getConnection();

$query1 = "SELECT p.id, p.name, p.description, p.img FROM products p";

$stmt1 = $database->prepare($query1);
$stmt1->execute();
$result1 = $stmt1->fetchAll(PDO::FETCH_ASSOC);

$result = [];

foreach ($result1 as $row1) {
    $productId = $row1['id'];

    $query2 = "SELECT v.id, v.variant, v.price FROM variants v WHERE v.productId = :productId";

    $stmt2 = $database->prepare($query2);
    $stmt2->bindParam(':productId', $productId);
    $stmt2->execute();
    $result2 = $stmt2->fetchAll(PDO::FETCH_ASSOC);

    $row1['variants'] = $result2;
    $result[] = $row1;
}

echo json_encode($result);