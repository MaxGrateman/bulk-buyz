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
                    <input placeholder="E-mail, указанный при оплате" class="modal_wrapper_input">
                    <button type="submit" class="modal_wrapper_button">Продолжить</button>
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

$body = "Здарова";
var_dump(send_mail($mail_settings, ['abcdefg1214489@gmail.com'], 'Test-letter', $body ));

?>

