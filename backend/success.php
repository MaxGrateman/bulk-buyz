<?php
$secret = 'dee2bfba085c4bd05e951e5d7162586c';
$array = array(

    $secret,
    $desc = $_POST['desc'],
    $currency = $_POST['currency'],
    $shop = $_POST['shop'],
    $payment_id = $_POST['payment_id'],
    $amount = $_POST['amount']

);
$sign = md5(implode('|', $array));

if ($sign != $_POST['sign']) {
    die('Подпись не совпадает.');
}
header('Location: https://chat.digiseller.ru/asp/start.asp?fr=g&user=1097528&service=1&shop=1&lang=ru-RU');