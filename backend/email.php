<?php
header("Access-Control-Allow-Headers: application/json");
header("Access-Control-Allow-Origin: http://localhost:5173");
// УДАЛИТЬ HEADERS'ы при деплое
require_once __DIR__ . "/vendor/autoload.php";
require_once __DIR__ . '/configuration.php';
require_once __DIR__ . '/functions.php';
require_once __DIR__ . '/credentials.php';
require_once __DIR__ . '/DatabaseConnection.php';


$database = new DatabaseConnection($dsn, $username, $password);
$database->connect();
$connection = $database->getConnection();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];

// Проверка наличия электронной почты в базе данных
    $query = 'SELECT COUNT(*) FROM `users` WHERE email = :email';
    $stmt = $database->prepare($query);
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    $count = $stmt->fetchColumn();

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Неверный e-mail";
    } elseif ($count > 0) {
        echo "Данные успешно высланы на вашу почту";
        send_mail($mail_settings, [$email], 'Ваши покупки', "Предоставляем вам список ваших покупок:");
    } else {
        echo 'Ошибка: Электронная почта не найдена в базе данных.';
    }
}