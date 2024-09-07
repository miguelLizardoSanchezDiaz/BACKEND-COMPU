create database buenlootdb;
use buenlootdb;
CREATE TABLE almacenamiento (almacenamientoId int(11) NOT NULL AUTO_INCREMENT, almacenamientoDescripcion varchar(100), almacenamientoEstado bit(1), PRIMARY KEY (almacenamientoId));
CREATE TABLE categoria (categoriaId int(10) NOT NULL AUTO_INCREMENT, categoriaCodigo varchar(50), categoriaPadreId int(11), categoriaImgUrl varchar(150), categoriaDescripcion varchar(150), categoriaOfertaDescripcion varchar(100), categoriaIcon varchar(150), categoriaEstado bit(1), PRIMARY KEY (categoriaId));
CREATE TABLE direccion (direccionId int(11) NOT NULL AUTO_INCREMENT, direccionDepartamento varchar(150), direccionProvincia varchar(150), direccionDistritito varchar(150), direccionNombre varchar(250), direccionReferencia varchar(250), direccionTipo varchar(50), usuarioId int(11) NOT NULL, PRIMARY KEY (direccionId));
CREATE TABLE graficos (graficosId int(11) NOT NULL AUTO_INCREMENT, graficosDescripcion varchar(100), graficosEstado bit(1), PRIMARY KEY (graficosId));
CREATE TABLE marca (marcaId int(11) NOT NULL AUTO_INCREMENT, marcaDescripcion varchar(100), marcaEstado bit(1), marcaUrlImg varchar(200), PRIMARY KEY (marcaId));
CREATE TABLE modeloProcesador (modeloProcesadorId int(11) NOT NULL AUTO_INCREMENT, modeloProcesadorDescripcion varchar(100), modeloProcesadorEstado bit(1), PRIMARY KEY (modeloProcesadorId));
CREATE TABLE pedido (pedidoID int(11) NOT NULL AUTO_INCREMENT, pedidoFecha datetime NULL, pedidoFechaEnvio datetime NULL, pedidoMetodoPago varchar(150), pedidoSubtotal decimal(10, 2), pedidoDescuentoPorcentaje decimal(10, 2), pedidoCostoEnvio decimal(10, 2), pedidoTotal decimal(10, 2), pedidoRecogidaTienda bit(1), pedidoDespachadoPor varchar(150), pedidoTipoEntrega varchar(50), pedidoDepartamento varchar(150), pedidoProvincia varchar(150), pedidoDistrito varchar(150), pedidoDireccion varchar(250), usuarioId int(11) NOT NULL, PRIMARY KEY (pedidoID));
CREATE TABLE producto (productoId int(11) NOT NULL AUTO_INCREMENT, productoSku varchar(100), productoNombre varchar(200), productoDescripcion varchar(255), productoEstado bit(1), productoPrecio decimal(10, 2), productoPrecioAnterior decimal(10, 2), productoStock bit(1), productoDescuentoPorcentaje decimal(10, 2), productoStockActual decimal(10, 2), marcaId int(11), categoriaId int(10), modeloProcesadorId int(11), almacenamientoId int(11), graficosId int(11), ramId int(11), PRIMARY KEY (productoId));
CREATE TABLE productoImagen (productoImagenId int(11) NOT NULL AUTO_INCREMENT, productoImagenImgUrl varchar(200), productoImagenEstado bit(1), productoId int(11) NOT NULL, PRIMARY KEY (productoImagenId));
CREATE TABLE ram (ramId int(11) NOT NULL AUTO_INCREMENT, ramDescripcion varchar(100), ramEstado bit(1), PRIMARY KEY (ramId));
CREATE TABLE usuario (usuarioId int(11) NOT NULL AUTO_INCREMENT, usuarioEmail varchar(150), usuarioPassword varchar(256), usuarioEstado bit(1), usuarioNombres varchar(250), usuarioApellidos varchar(250), usuarioDni varchar(7), usuarioRuc varchar(11), usuarioRazonSocial varchar(150), usuarioTipoDocumento varchar(20), usuarioTelefono1 varchar(20), usuarioTelefono2 varchar(150), PRIMARY KEY (usuarioId));
ALTER TABLE pedido ADD CONSTRAINT FKpedido438242 FOREIGN KEY (usuarioId) REFERENCES usuario (usuarioId);
ALTER TABLE direccion ADD CONSTRAINT FKdireccion484522 FOREIGN KEY (usuarioId) REFERENCES usuario (usuarioId);
ALTER TABLE productoImagen ADD CONSTRAINT FKproductoIm904955 FOREIGN KEY (productoId) REFERENCES producto (productoId);
ALTER TABLE producto ADD CONSTRAINT FKproducto92963 FOREIGN KEY (ramId) REFERENCES ram (ramId);
ALTER TABLE producto ADD CONSTRAINT FKproducto335806 FOREIGN KEY (graficosId) REFERENCES graficos (graficosId);
ALTER TABLE producto ADD CONSTRAINT FKproducto329515 FOREIGN KEY (almacenamientoId) REFERENCES almacenamiento (almacenamientoId);
ALTER TABLE producto ADD CONSTRAINT FKproducto43637 FOREIGN KEY (modeloProcesadorId) REFERENCES modeloProcesador (modeloProcesadorId);
ALTER TABLE producto ADD CONSTRAINT FKproducto275491 FOREIGN KEY (categoriaId) REFERENCES categoria (categoriaId);
ALTER TABLE producto ADD CONSTRAINT FKproducto920403 FOREIGN KEY (marcaId) REFERENCES marca (marcaId);

INSERT INTO producto (productoSku,productoNombre,productoDescripcion,productoEstado)
VALUES ('12345'
,'Mouse Redragon Griffin M607 RGB Negro'
,'El Griffin tiene un calce perfecto en la mano, con relieves curvilíneos y textura honeycomb sobre sus costados izquierdo y derecho, dando un posicionamiento y agarre cómodos'
,1);
INSERT INTO producto (productoSku,productoNombre,productoDescripcion,productoEstado)
VALUES ('k83474'
,'Audífonos Gamer Redragon Zeus X Wireless'
,'El Griffin tiene un calce perfecto en la mano, con relieves curvilíneos y textura honeycomb sobre sus costados izquierdo y derecho, dando un posicionamiento y agarre cómodos'
,1);


INSERT INTO producto (productoSku,productoNombre,productoDescripcion,productoEstado)
VALUES ('12345'
,'Mouse Redragon Griffin M607 RGB Negro'
,'El Griffin tiene un calce perfecto en la mano, con relieves curvilíneos y textura honeycomb sobre sus costados izquierdo y derecho, dando un posicionamiento y agarre cómodos'
,1);
INSERT INTO producto (productoSku,productoNombre,productoDescripcion,productoEstado)
VALUES ('k83474'
,'Audífonos Gamer Redragon Zeus X Wireless'
,'El Griffin tiene un calce perfecto en la mano, con relieves curvilíneos y textura honeycomb sobre sus costados izquierdo y derecho, dando un posicionamiento y agarre cómodos'
,1);


SELECT * FROM categoria;

insert into categoria(categoriaCodigo,categoriaPadreId,categoriaImgUrl,categoriaDescripcion)
values ('101',null,'http://www.image.com/demo.jpg','LAPTOP');

select * from marca;

insert into marca(marcaDescripcion,marcaEstado,marcaUrlImg)
values ('HP',1,'#');

insert into marca(marcaDescripcion,marcaEstado,marcaUrlImg)
values ('LENOVO',1,'#');

insert into modeloProcesador(modeloProcesadorDescripcion,modeloProcesadorEstado)
values ('INTEL CORE I7 9na',1);

insert into graficos(graficosDescripcion,graficosEstado)
values ('INTEL PRATHICS ISIS X',1);

insert into ram(ramDescripcion,ramEstado)
values ('64GB',1);


CREATE TABLE slider (sliderId int(11) NOT NULL AUTO_INCREMENT, sliderXsUrl varchar(250), sliderLgUrl varchar(250), sliderCabeceraXsUrl varchar(250), sliderCabeceraLgUrl varchar(250), sliderBodyXsUrl varchar(250), sliderBodyLgUrl varchar(250), sliderEstado bit(1), PRIMARY KEY (sliderId));
CREATE TABLE pedidoDetalle (pedidoDetalleId int(11) NOT NULL AUTO_INCREMENT, pedidoDetalleCantidad decimal(10, 2), pedidoDetallePrecioUnitario decimal(10, 2), pedidoDetalleImporte decimal(10, 2), pedidoID int(11) NOT NULL, productoproductoId int(11) NOT NULL, PRIMARY KEY (pedidoDetalleId));

select * from slider;
select * from pedidoDetalle;

ALTER TABLE buenlootdb.direccion
CHANGE COLUMN direccionDistritito direccionDistrito VARCHAR(255);

select * from slider;
insert into slider(sliderXsUrl,sliderLgUrl,sliderEstado)
values ('http://www.image.com/demo.jpg','http://www.image.com/demo.jpg', 1);

select * from producto;
INSERT INTO producto (productoSku, productoNombre, productoDescripcion, productoEstado, productoPrecio, productoPrecioAnterior, productoStock, productoDescuentoPorcentaje, productoStockActual)
VALUES 
('A1B2C', 'Laptop HP Core i7', 'Lorem ipsum dolor sit amet.', 1, 1200, 1500, 1, 20, 10),
('D3E4F', 'Mouse Gamer Logitech', 'Lorem ipsum dolor sit amet.', 1, 50, 70, 1, 28.57, 50),
('G5H6I', 'Monitor Dell 24"', 'Lorem ipsum dolor sit amet.', 1, 200, 250, 1, 20, 30),
('J7K8L', 'Teclado Mecánico Corsair', 'Lorem ipsum dolor sit amet.', 1, 80, 100, 1, 20, 40),
('M9N0O', 'Disco Duro Externo 1TB', 'Lorem ipsum dolor sit amet.', 1, 60, 75, 1, 20, 20),
('P1Q2R', 'Memoria RAM 16GB', 'Lorem ipsum dolor sit amet.', 1, 100, 120, 1, 16.67, 25);

SELECT * FROM categoria;
INSERT INTO categoria(categoriaCodigo,categoriaPadreId,categoriaImgUrl, categoriaDescripcion)
VALUES 
('500',null,'http://www.image.com/demo.jpg','descripcion de categoria demo-1'),
('120',null,'http://www.image.com/demo.jpg','descripcion de categoria demo-2'),
('330',null,'http://www.image.com/demo.jpg','descripcion de categoria demo-3'),
('200',null,'http://www.image.com/demo.jpg','descripcion de categoria demo-4');


select * from slider;

insert into slider(sliderXsUrl,sliderLgUrl,sliderEstado)
values 
('http://www.image.com/demo.jpg','http://www.image.com/demo.jpg', 1),
('http://www.image.com/demo1.jpg','http://www.image.com/demo.jpg', 1),
('http://www.image.com/demo1.jpg','http://www.image.com/demo.jpg', 1),
('http://www.image.com/demo2.jpg','http://www.image.com/demo.jpg', 1),
('http://www.image.com/demo3.jpg','http://www.image.com/demo.jpg', 1);

select * from categoria;
select * from producto;

update producto set categoriaId=1 where productoId=1;
update producto set categoriaId=2 where productoId=2;

select categoriaId from producto;


INSERT INTO producto (productoSku,productoNombre,productoDescripcion,productoEstado,categoriaId)
VALUES ('HP123'
,'LAPTOP HP'
,'El Griffin tiene un calce perfecto en la mano, con relieves curvilíneos y textura honeycomb sobre sus costados izquierdo y derecho, dando un posicionamiento y agarre cómodos'
,1
,2
);

SELECT * FROM producto where categoriaId=2;

select * from categoria;
/**
----------------------------------
INSERT Y LIMPIEZA DE CATEGORIAS 
----------------------------------
**/
/*1 .AGREGAR CAMPO SOLONAVBAR*/
ALTER TABLE categoria ADD COLUMN categoriaSoloNavBar TINYINT(1) DEFAULT 0;

/*2 DESACTIVAR DELETE*/
SET SQL_SAFE_UPDATES = 0;

/*3 INSERT DE CATEGORIAS*/
delete from producto;
delete from categoria;

/*4. INSERT DE CATEGORIAS*/
insert into categoria(categoriaCodigo,categoriaPadreId,categoriaImgUrl,categoriaDescripcion,categoriaIcon,categoriaSoloNavBar)
values 
('100',null,'http://www.image.com/demo.jpg','Tienda','fa-save',1),
('101',null,'http://www.image.com/demo.jpg','Almacenamiento','fa-save',0),
('102',null,'http://www.image.com/demo.jpg','Laptops','fa-save',0),
('103',null,'http://www.image.com/demo.jpg','Impresoras','fa-save',0),
('104',null,'http://www.image.com/demo.jpg','PC Gamer','fa-save',0),
('105',null,'http://www.image.com/demo.jpg','Ideales para ti','fa-save',0),
('106',null,'http://www.image.com/demo.jpg','Blog','fa-save',1);

/*4 ACTIVAR DELETE Y MODO SEGURO*/
SET SQL_SAFE_UPDATES = 1;



/*
-----------------------------
INSERTAR Y LIMPIAR SLIDER
-----------------------------
*/
select * from slider;
/*1 DESACTIVAR DELETE*/
SET SQL_SAFE_UPDATES = 0;

/*2. Limpiar data*/
delete from slider;

/*3 insertar data*/
insert into slider(sliderXsUrl,sliderLgUrl,sliderEstado)
values 
('https://img.freepik.com/premium-psd/cybercore-smartphone-studio_23-2151601799.jpg','https://static.vecteezy.com/system/resources/previews/014/762/255/non_2x/video-games-outline-colored-illustration-gamer-banner-vector.jpg', 1);

/*
-----------------------------
AGREGAR CAMPO PARA GUARDAR IMAGEN PRINCIPAL
-----------------------------
*/
select * from producto;

ALTER TABLE producto
ADD COLUMN productoImgUrlPrincipal VARCHAR(250) DEFAULT NULL;

update producto set productoImgUrlPrincipal='https://promart.vteximg.com.br/arquivos/ids/7190913-444-444/image-86bf339451bc4bb9b8fd1d819e1bdda4.jpg?v=638234145444330000'
where productoId > 0;

/*
-----------------------------
CREAR Ó ACTUALIZAR IMÁGENES
-----------------------------
*/
-- SLIDER
insert into slider(sliderXsUrl,sliderLgUrl,sliderCabeceraXsUrl, sliderCabeceraLgUrl, sliderBodyXsUrl, sliderBodyLgUrl, sliderEstado) 
values 
('https://lh3.googleusercontent.com/d/1rvPc7NZCA9xo6m2MXUCCfs-8SGcG1_Jl', -- mobile
 'https://lh3.googleusercontent.com/d/1Z-c3QlJrr06-8R4AP7OK90UkCtCkuTmB', -- desktop
 'https://lh3.googleusercontent.com/d/1IHQXVQ8Y2UB5SLiU878xN7L7TN-TZEq0', -- cabecera xs
  null, -- cabecera lg
  'https://lh3.googleusercontent.com/d/1TBx4oWau3hxdyDYWCoodKh6khFiMyp4F', -- body xs
  'https://lh3.googleusercontent.com/d/1TBx4oWau3hxdyDYWCoodKh6khFiMyp4F', -- body lg
  1);
  

SELECT * FROM slider;
 
/*
-----------------------------
AGREGAR CAMPO PARA GUARDAR ESPECIFICACIONES DEL PRODUCTO
-----------------------------
*/
ALTER TABLE producto
ADD COLUMN productoEspecificaciones VARCHAR(300);

-- Ejemplo de inserción para productoEspecificaciones
UPDATE producto
SET productoEspecificaciones = '[ "colección de productos: procesadores Intel Core", "Segmento Vertical: Escritorio", "Procesador: Core i5" ]'
WHERE productoId = 7;


/*
-----------------------------
ACTUALIZACIÓN DE IMÁGENES
-----------------------------
*/

-- Productos demo (cualquiera de los dos links)
UPDATE producto
SET productoImgUrlPrincipal = 'https://lh3.googleusercontent.com/d/1ltQeU2KNFILjFdS4GHreG2jBXdCl4b4_'
WHERE id = 1; 

UPDATE producto
SET productoImgUrlPrincipal = 'https://lh3.googleusercontent.com/d/1cVFjH6On50boKf7HEKBmx3jWLZcMQeLW'
WHERE id = 2; 

UPDATE producto
SET productoImgUrlPrincipal = 'https://lh3.googleusercontent.com/d/1Y-Uw4S69SzPQy6-QnN-FbQ3o3CikDoJA'
WHERE id = 3; 

UPDATE producto
SET productoImgUrlPrincipal = 'https://lh3.googleusercontent.com/d/1PKHZ-VdAS2j2qbmEC-wjYpTqmAPgZmFn'
WHERE id = 4; 

-- slider categoria demo
UPDATE categoria
SET categoriaImgUrl = 'https://lh3.googleusercontent.com/d/1oOt2SDKKO9x7oApKnnMpvU-E_Y4QWdEu'
WHERE id = 1; -- ID_DE_LA_CATEGORIA

-- comprobación de productos asociados a subcategorias 
SELECT * FROM producto WHERE categoriaId = (SELECT categoriaId FROM categoria WHERE categoriaCodigo = '111');

-- filtrar categorias que no tienen marcas
SELECT c.categoriaId, c.categoriaDescripcion, c.categoriaCodigo
FROM categoria c
LEFT JOIN producto p ON c.categoriaId = p.categoriaId
WHERE p.marcaId IS NULL;