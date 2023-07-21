<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");
require_once __DIR__ . '/credentials.php';
require_once __DIR__ . '/DatabaseConnection.php';

$database = new DatabaseConnection($dsn, $username, $password);
$database->connect();
$connection = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] === 'POST' && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $amount = $_POST['totalPrice'];
    $payment = substr(hash('sha256', openssl_random_pseudo_bytes(20)), '-10');
    $shop = '6288';
    $currency = 'RUB';
    $desc = $_POST['cardName'] . " в количестве: " . $_POST['quantity'];
    $secret = 'dee2bfba085c4bd05e951e5d7162586c';
    $array = array($amount, $payment, $shop, $currency, $desc, $secret);
    $sign = md5(implode('|', $array));

    $redirectUrl = "https://payok.io/pay?amount=$amount&payment=$payment&desc=$desc&shop=$shop&currency=$currency&sign=$sign";

    header('Content-Type: application/json');
    echo json_encode(['redirectUrl' => $redirectUrl]);
} else {
    http_response_code(400);
}