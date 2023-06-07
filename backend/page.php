<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<a href="#openModal">Открыть модальное окно</a>
<div id="openModal" class="modal">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h3 class="modal-title">Заголовок</h3>
                <a href="#close" title="Close" class="close">×</a>
            </div>
            <div class="modal-body">
                <form id="emailForm" action="page.php" method="POST">
                    <input placeholder="E-mail, указанный при оплате" class="modal_wrapper_input" name="email">
                    <button type="submit" class="modal_wrapper_button">Продолжить</button>
                </form>
            </div>
        </div>
    </div>
</div>
</body>
</html>

<?php
require_once __DIR__ . "/vendor/autoload.php";
require_once __DIR__ . '/configuration.php';
require_once __DIR__ . '/functions.php';
require_once __DIR__ . '/credentials.php';
$body = "Предоставляем вам список ваших покупок:";
//var_dump(send_mail($mail_settings_porkbun, ['abcdefg1214489@gmail.com'], 'Test', $body ));

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

    if ($count > 0) {
        echo "Данные успешно высланы на вашу почту";
        var_dump(send_mail($mail_settings, ["$email"], 'Ваши покупки', $body));
    } else {
        echo 'Ошибка: Электронная почта не найдена в базе данных.';
    }
}

?>

