-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

USE ecommerce_db;

CREATE TABLE Category (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    category_name VARCHAR(255) NOT NULL
);

CREATE TABLE Product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL DEFAULT 10,
    category_id INT,
    FOREIGN KEY (category_id)
    REFERENCES Category(id)
);

CREATE TABLE Tag (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tag_name VARCHAR(255) NOT NULL
);

CREATE TABLE Product_Tag (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT NOT NULL,
    tag_id INT NOT NULL,
    FOREIGN KEY (product_id)
    REFERENCES Product(id),
    FOREIGN KEY (tag_id)
    REFERENCES Tag(id)
);