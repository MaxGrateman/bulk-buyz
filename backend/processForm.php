<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Headers: Content-Type");
require_once __DIR__ . '/credentials.php';
require_once __DIR__ . '/DatabaseConnection.php';

$database = new DatabaseConnection($dsn, $username, $password);
$database->connect();
$connection = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] === 'POST' && filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $amount = $_POST['quantity'];
    $payment = $_POST['totalPrice'];
    $shop = '6288';
    $currency = 'RUB';
    $desc = 'Test (don\'t pay)';
    $secret = 'dee2bfba085c4bd05e951e5d7162586c';
    $array = array($amount, $payment, $shop, $currency, $desc, $secret);
    $sign = md5(implode('|', $array));

    header("Location: https://payok.io/pay?amount=$amount&payment=$payment&desc=$desc&shop=$shop&currency=$currency&sign=$sign");
    die();
} else {
    http_response_code(400);
}

//  if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
//        $query = "INSERT INTO users (email, name, variant, price, time) VALUES (:email, 'Test', :selectedProduct, '228', NOW())";
//        $stmt = $database->prepare($query);
//        $stmt->bindParam(':email', $email);
//        $stmt->bindParam(':selectedProduct', $selectedProduct);
//        $stmt->execute();
//        $count = $stmt->rowCount();
//        if ($count > 0) {
//            echo "E-mail записан в БД";
//        } else {
//            echo "Произошла ошибка при записи в БД";
//        }
//    } else {
//        echo 'Некорректный адрес электронной почты';
//    }
//}