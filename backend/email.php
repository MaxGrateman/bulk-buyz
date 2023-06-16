<?php
require_once __DIR__ . "/vendor/autoload.php";
require_once __DIR__ . '/configuration.php';
require_once __DIR__ . '/functions.php';
require_once __DIR__ . '/credentials.php';

try {
$database = new PDO($dsn, $username, $password);
$database->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
echo 'Ошибка подключения к базе данных: ' . $e->getMessage();
exit();
}

$emails = $database->query("SELECT * FROM `users`")->fetchAll(PDO::FETCH_ASSOC);

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
var_dump(send_mail($mail_settings, [$email], 'Ваши покупки', "Предоставляем вам список ваших покупок:"));
} else {
echo 'Ошибка: Электронная почта не найдена в базе данных.';
}
}