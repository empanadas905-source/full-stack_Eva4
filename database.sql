CREATE DATABASE IF NOT EXISTS clinica_db;
USE clinica_db;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

INSERT INTO usuarios (username, password) VALUES 
('admin@clinica.com', 'admin123'),
('medico@clinica.com', 'medico123');

CREATE TABLE IF NOT EXISTS pacientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    rut VARCHAR(12) NOT NULL UNIQUE,
    edad INT NOT NULL,
    prevision VARCHAR(50) NOT NULL
);

INSERT INTO pacientes (nombre, rut, edad, prevision) VALUES
('Juan Pérez', '12.345.678-9', 35, 'Fonasa'),
('María Jofre', '18.765.432-1', 28, 'Isapre');