CREATE DATABASE IF NOT EXISTS cratos_db;

USE cratos_db;
SET SQL_SAFE_UPDATES = 0;

CREATE TABLE IF NOT EXISTS Users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  apellido1 VARCHAR(255) NOT NULL,
  apellido2 VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  contrasena VARCHAR(255) NOT NULL
);

select * from users;
delete from users;
