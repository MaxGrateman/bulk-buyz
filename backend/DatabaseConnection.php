<?php
require_once __DIR__ . "/vendor/autoload.php";

class DatabaseConnection extends PDO
{
    private string $dsn;
    private string $username;
    private string $password;
    private ?PDO $connection;

    public function __construct(string $dsn, string $username, string $password)
    {
        parent::__construct($dsn, $username, $password);
        $this->dsn = $dsn;
        $this->username = $username;
        $this->password = $password;
        $this->connection = null;
    }

    public function connect(): void
    {
        try {
            $this->connection = new PDO($this->dsn, $this->username, $this->password);
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo 'Ошибка подключения к базе данных: ' . $e->getMessage();
            exit();
        }
    }

    public function getConnection(): ?PDO
    {
        return $this->connection;
    }
}