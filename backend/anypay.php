<?php

$API_ID = "27DC4DE59FE7A9D1AE";
$API_KEY = "S769IfdUc3yL4YjL0GsQf8H48R94ZSaYGtaKRgl";

var_dump(getCreatePayment('10989', '150', 'RUB', 'Test', 'qiwi', 'ttddff@inbox.ru'));

function getBalance(): string
{
    global $API_ID, $API_KEY;

    $sign = hash("sha256", "balance$API_ID$API_KEY");
    $url = "https://anypay.io/api/balance/$API_ID?sign=$sign";
    return file_get_contents($url);
}

function getRates(): string
{
    global $API_ID, $API_KEY;

    $sign = hash("sha256", "rates$API_ID$API_KEY");
    $url = "https://anypay.io/api/rates/$API_ID?sign=$sign";
    return file_get_contents($url);
}

function getCommissions($project_id): string
{
    global $API_ID, $API_KEY;

    $sign = hash("sha256", "commissions$API_ID{$project_id}$API_KEY");
    $url = "https://anypay.io/api/commissions/$API_ID?project_id=$project_id&sign=$sign";
    return file_get_contents($url);
}

function getCreatePayment($project_id, $amount, $currency, $desc, $method, $email): array
{
    global $API_ID, $API_KEY;

    $pay_id = getLastPayId($project_id);

    $sign = hash("sha256", "create-payment$API_ID{$project_id}{$pay_id}{$amount}{$currency}{$desc}{$method}$API_KEY");
    $url = "https://anypay.io/api/create-payment/$API_ID?project_id=$project_id&pay_id=$pay_id&amount=$amount&currency=$currency&desc=$desc&method=$method&email=$email&sign=$sign";
    $response = file_get_contents($url);

    return json_decode($response, true);

}

function getPayments($project_id): string
{
    global $API_ID, $API_KEY;

    $sign = hash("sha256", "payments$API_ID$project_id$API_KEY");
    $url = "https://anypay.io/api/payments/$API_ID?project_id=$project_id&sign=$sign";
    return file_get_contents($url);
}

function getPayout($payout_id, $payout_type, $amount, $wallet)
{
    global $API_ID, $API_KEY;

    $sign = hash("sha256", "create-payout$API_ID$payout_id$payout_type$amount$wallet$API_KEY");
    $url = "https://anypay.io/api/create-payout/$API_ID?payout_id=$payout_id&payout_type=$payout_type&amount=$amount&wallet=$wallet&sign=$sign";
    return file_get_contents($url);
}
// Добавить описание нужно будет

function getPayouts(): string
{
    global $API_ID, $API_KEY;
    $sign = hash("sha256", "payouts$API_ID$API_KEY");
    $url = "https://anypay.io/api/payouts/$API_ID?sign=$sign";
    return file_get_contents($url);
}

function getIpNotification(): string
{
    global $API_ID, $API_KEY;

    $sign = hash("sha256", "ip-notification$API_ID$API_KEY");
    $url = "https://anypay.io/api/ip-notification/$API_ID?sign=$sign";
    return file_get_contents($url);
}

function checkPay($project_id, $comment)
{
    $json_dump = json_decode(getPayments($project_id), true);
    $current_pay = $json_dump["result"]["payments"];

    foreach ($current_pay as $payment) {
        if ($payment["desc"] == $comment && $payment["status"] == "paid") {
            return [true, $payment["profit"]];
        }
    }

    return [false, []];
}
// Не закончена

function getLastPayId($project_id) {
    $json_dump = json_decode(getPayments($project_id), true);
    $current_pay = $json_dump["result"]["payments"];

    foreach ($current_pay as $payment) {
        return $payment['pay_id'] + 1;
    }
    return null; // Возвращаем значение по умолчанию, если не удалось получить pay_id
}
// Нужно будет дописать/подкорректировать