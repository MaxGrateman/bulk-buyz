<?php
ini_set("display_errors", 1);
error_reporting(E_ALL);

$home_url = "http://localhost:63342/bulkbuyz/backend/api/config/core.php";

$page = $_GET["page"] ?? 1;

$records_per_page = 5;

$from_record_num = ($records_per_page * $page) - $records_per_page;