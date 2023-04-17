<?php

error_reporting(E_ALL);

$id = "C256592A10714D69BFB237649D2C8110";
$seller_id = "1097528";
$timestamp = time();
$hash_data = $id . $timestamp;
$sign = hash("sha256", $hash_data);
$send_data = array(
    "seller_id" => $seller_id,
    "sign" => $sign,
    "timestamp" => $timestamp
);
$headers = array("Content-Type: application/json");
$ch = curl_init("https://api.digiseller.ru/api/apilogin");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($send_data));
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
$result = curl_exec($ch);
curl_close($ch);
$response = json_decode($result, true);
print_r($response);


