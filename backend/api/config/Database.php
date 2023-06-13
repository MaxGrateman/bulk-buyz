<?php

class Database
{
    private string $host = "ttddffxz.beget.tech";
    private string $db_name = "ttddffxz_main";
    private string $username = "ttddffxz_main";
    private string $password = "r8Wq%GIzdN&S1kaP";
    public ?PDO $connection;

    public function getConnection() :object
    {
        $this->connection = null;

        try {
            $this->connection = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->connection->exec("SET NAMES utf8");
        } catch (PDOException $e) {
            echo "Ошибка подключения: " . $e->getMessage();
        }

        return $this->connection;
    }

    public function getEmail() :array
    {
       return $this->getConnection()->query("SELECT `email` FROM users")->fetchAll(PDO::FETCH_ASSOC);
    }

}

$database = new Database();
$result = $database->getEmail();
var_dump($result);


