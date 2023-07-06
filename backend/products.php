<?php
header("Access-Control-Allow-Headers: application/json");
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json");

require_once __DIR__ . '/credentials.php';
require_once __DIR__ . '/DatabaseConnection.php';

$database = new DatabaseConnection($dsn, $username, $password);
$database->connect();
$connection = $database->getConnection();

$query = "
    SELECT p.id, p.name, p.description, p.img,
        CONCAT('[', GROUP_CONCAT(
            JSON_OBJECT(
                'id', v.id,
                'variant', v.variant,
                'price', v.price
            )
        ), ']') AS variants
    FROM products p
    LEFT JOIN variants v ON p.id = v.productId
    GROUP BY p.id, p.name, p.description, p.img
";

$statement = $database->prepare($query);
$statement->execute();

$result = $statement->fetchAll(PDO::FETCH_ASSOC);

foreach ($result as &$row) {
    $row['variants'] = json_decode($row['variants']);
}
echo json_encode($result);