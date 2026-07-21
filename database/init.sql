CREATE DATABASE IF NOT EXISTS foodexpress;

USE foodexpress;

CREATE TABLE IF NOT EXISTS food_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    image VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    total_amount DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    food_id INT,
    quantity INT,
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (food_id) REFERENCES food_items(id)
);

INSERT INTO food_items (name, category, price, image)
VALUES
('Chicken Biryani','Biryani',249,'biryani.jpg'),
('Veg Pizza','Pizza',349,'pizza.jpg'),
('Cheese Burger','Burger',199,'burger.jpg'),
('White Sauce Pasta','Pasta',229,'pasta.jpg'),
('Chocolate Cake','Dessert',149,'dessert.jpg'),
('Mojito','Drinks',99,'drink.jpg');