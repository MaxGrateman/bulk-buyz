<!DOCTYPE html>
<html>
<head>
    <title>Админ-панель</title>
    <link rel="stylesheet" href="admin_panel.css">
</head>
<body>
<div class="container">
    <h1>Админ-панель</h1>

    <div class="section">
        <h2>Добавить продукт</h2>
        <form action="insert_product.php" method="post">
            <label for="product_name">Название продукта:</label>
            <input type="text" id="product_name" name="product_name" required>

            <label for="product_description">Описание продукта:</label>
            <textarea id="product_description" name="product_description" required></textarea>

            <input type="submit" value="Добавить продукт">
        </form>
    </div>

    <div class="section">
        <h2>Добавить вариант продукта</h2>
        <form action="insert_variant.php" method="post">
            <label for="product_select">Выберите продукт:</label>
            <select id="product_select" name="product_id" required>
                <?php include 'get_products_list.php'; ?>
            </select>

            <label for="variant_name">Название варианта:</label>
            <input type="text" id="variant_name" name="variant_name" required>

            <label for="variant_price">Цена варианта:</label>
            <input type="number" id="variant_price" name="variant_price" required>

            <input type="submit" value="Добавить вариант">
        </form>
    </div>

    <div class="section">
        <h2>Список продуктов</h2>
        <ul>
            <?php include 'get_products_list.php'; ?>
        </ul>
    </div>
</div>

<script src="admin_panel.js"></script>
</body>
</html>