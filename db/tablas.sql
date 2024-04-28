-- Active: 1698945600332@@127.0.0.1@5432@postgres@public

create table tbl_animal 
(
    id serial PRIMARY KEY,
    nombre varchar(250), 
    sonido varchar(20)
);

CREATE TABLE Personas (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    fecha DATE
);

-- Crear la tabla Teléfono
CREATE TABLE Telefono (
    id SERIAL PRIMARY KEY,
    numero_telefono VARCHAR(15),
    id_persona INT,
    FOREIGN KEY (id_persona) REFERENCES Personas(id)
);

select * from tbl_animal;