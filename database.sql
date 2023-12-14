-- Crear la base de datos para la aplicación del sitio web de moda
CREATE DATABASE IF NOT EXISTS aplicacion_moda;

USE aplicacion_moda;

-- Tabla para categorías de ropa
CREATE TABLE categorias_ropa (
    id_categoria    INTEGER             NOT NULL    AUTO_INCREMENT,
    nombre_categoria VARCHAR(255)       NOT NULL,
    PRIMARY KEY     (id_categoria)
);

-- Tabla para inventario de ropa
CREATE TABLE inventario_ropa (
    id_ropa         INTEGER             NOT NULL    AUTO_INCREMENT,
    nombre_ropa     VARCHAR(255)        NOT NULL,
    talla           VARCHAR(10)         NOT NULL,
    color           VARCHAR(50)         NOT NULL,
    precio          DECIMAL(10, 2)      NOT NULL,
    fk_id_categoria INTEGER             NOT NULL,
    PRIMARY KEY     (id_ropa),
    FOREIGN KEY     (fk_id_categoria)   REFERENCES categorias_ropa(id_categoria)
);

-- Tabla para información de usuarios
CREATE TABLE usuarios (
    id_usuario      INTEGER             NOT NULL    AUTO_INCREMENT,
    nombre_usuario  VARCHAR(50)         NOT NULL,
    correo          VARCHAR(255)        NOT NULL,
    contraseña      VARCHAR(255)        NOT NULL, -- Nota: Almacena contraseñas cifradas en producción
    PRIMARY KEY     (id_usuario),
    UNIQUE KEY      (nombre_usuario),
    UNIQUE KEY      (correo)
);

-- Tabla para citas de usuarios
CREATE TABLE citas (
    id_cita         INTEGER             NOT NULL    AUTO_INCREMENT,
    fecha_cita      DATETIME            NOT NULL,
    fk_id_usuario   INTEGER             NOT NULL,
    PRIMARY KEY     (id_cita),
    FOREIGN KEY     (fk_id_usuario)     REFERENCES usuarios(id_usuario)
);

-- Inserción de datos en la tabla categorias_ropa
INSERT INTO categorias_ropa (nombre_categoria) VALUES
('Camisetas'),
('Pantalones'),
('Vestidos'),
('Chaquetas');

-- Inserción de datos en la tabla inventario_ropa
INSERT INTO inventario_ropa (nombre_ropa, talla, color, precio, fk_id_categoria) VALUES
('Camiseta Estampada', 'M', 'Blanca', 19.99, 1),
('Pantalón Vaquero', 'L', 'Azul', 39.99, 2),
('Vestido Floral', 'S', 'Rosa', 59.99, 3),
('Chaqueta de Cuero', 'XL', 'Negra', 79.99, 4);

-- Inserción de datos en la tabla usuarios
INSERT INTO usuarios (nombre_usuario, correo, contraseña) VALUES
('Usuario1', 'usuario1@example.com', 'contraseña1'),
('Usuario2', 'usuario2@example.com', 'contraseña2'),
('Usuario3', 'usuario3@example.com', 'contraseña3');

-- Inserción de datos en la tabla citas
INSERT INTO citas (fecha_cita, fk_id_usuario) VALUES
('2023-12-15 10:00:00', 1),
('2023-12-16 14:30:00', 2),
('2023-12-17 11:45:00', 3);
