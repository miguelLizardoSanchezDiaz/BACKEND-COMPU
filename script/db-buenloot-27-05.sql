-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: buenlootdb
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `almacenamiento`
--

DROP TABLE IF EXISTS `almacenamiento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `almacenamiento` (
  `almacenamientoId` int NOT NULL AUTO_INCREMENT,
  `almacenamientoDescripcion` varchar(100) DEFAULT NULL,
  `almacenamientoEstado` bit(1) DEFAULT NULL,
  PRIMARY KEY (`almacenamientoId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `almacenamiento`
--

LOCK TABLES `almacenamiento` WRITE;
/*!40000 ALTER TABLE `almacenamiento` DISABLE KEYS */;
INSERT INTO `almacenamiento` VALUES (1,'1 TB',_binary ''),(2,'2 TB',_binary ''),(3,'500 GB',_binary ''),(4,'128 GB',_binary ''),(5,'256 GB',_binary ''),(6,'64 GB',_binary '');
/*!40000 ALTER TABLE `almacenamiento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `categoriaId` int NOT NULL AUTO_INCREMENT,
  `categoriaCodigo` varchar(50) DEFAULT NULL,
  `categoriaPadreId` int DEFAULT NULL,
  `categoriaImgUrl` varchar(150) DEFAULT NULL,
  `categoriaDescripcion` varchar(150) DEFAULT NULL,
  `categoriaOfertaDescripcion` varchar(100) DEFAULT NULL,
  `categoriaIcon` varchar(150) DEFAULT NULL,
  `categoriaEstado` bit(1) DEFAULT NULL,
  `categoriaSoloNavBar` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`categoriaId`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'100',NULL,'https://lh3.googleusercontent.com/d/1oOt2SDKKO9x7oApKnnMpvU-E_Y4QWdEu','Tienda','A todo 50%','fa-save',_binary '',1),(2,'101',NULL,'https://lh3.googleusercontent.com/d/1oOt2SDKKO9x7oApKnnMpvU-E_Y4QWdEu','Almacenamiento','A todo 50%','CiHardDrive',_binary '',0),(3,'102',NULL,'https://lh3.googleusercontent.com/d/1oOt2SDKKO9x7oApKnnMpvU-E_Y4QWdEu','Laptops','A todo 50%','PiLaptop',_binary '',0),(4,'103',NULL,'https://lh3.googleusercontent.com/d/1oOt2SDKKO9x7oApKnnMpvU-E_Y4QWdEu','Impresoras','A todo 50%','PiPrinter',_binary '',0),(5,'104',12,'http://www.image.com/demo.jpg','PC Gamer','A todo 50%','fa-save',_binary '',0),(6,'105',NULL,'https://lh3.googleusercontent.com/d/1oOt2SDKKO9x7oApKnnMpvU-E_Y4QWdEu','Ideales para ti','A todo 50%','MdOutlineStarBorder',_binary '',0),(7,'106',NULL,'https://lh3.googleusercontent.com/d/1oOt2SDKKO9x7oApKnnMpvU-E_Y4QWdEu','Blog','A todo 50%','fa-save',_binary '',1),(8,'107',NULL,'https://lh3.googleusercontent.com/d/1oOt2SDKKO9x7oApKnnMpvU-E_Y4QWdEu','Monitores','A todo 50%','CgScreen',_binary '',0),(9,'108',NULL,'https://lh3.googleusercontent.com/d/1oOt2SDKKO9x7oApKnnMpvU-E_Y4QWdEu','PC Componentes','A todo 50%','GoCpu',_binary '',0),(10,'109',NULL,'https://lh3.googleusercontent.com/d/1oOt2SDKKO9x7oApKnnMpvU-E_Y4QWdEu','Periféricos','A todo 50%','BsMouse2',_binary '',0),(11,'110',NULL,'https://lh3.googleusercontent.com/d/1oOt2SDKKO9x7oApKnnMpvU-E_Y4QWdEu','Tablets',NULL,'AiOutlineTablet',_binary '',0),(12,'111',NULL,'https://lh3.googleusercontent.com/d/1oOt2SDKKO9x7oApKnnMpvU-E_Y4QWdEu','Zona Gamer',NULL,'GrGamepad',_binary '',0),(13,'112',2,'http://www.image.com/demo.jpg','Disco Duro HDD',NULL,'fa-save',_binary '',0),(14,'113',2,'http://www.image.com/demo.jpg','SSD',NULL,'fa-save',_binary '',0),(15,'114',2,'http://www.image.com/demo.jpg','M.2 SATA',NULL,'fa-save',_binary '',0),(16,'115',2,'http://www.image.com/demo.jpg','M.2 NVME',NULL,'fa-save',_binary '',0),(17,'116',2,'http://www.image.com/demo.jpg','Disco duro externo',NULL,'fa-save',_binary '',0),(18,'117',4,'http://www.image.com/demo.jpg','Impresora Tinta',NULL,'fa-save',_binary '',0),(19,'118',4,'http://www.image.com/demo.jpg','Impresora Toners',NULL,'fa-save',_binary '',0),(20,'119',4,'http://www.image.com/demo.jpg','Impresora Térmica',NULL,'fa-save',_binary '',0),(21,'120',4,'http://www.image.com/demo.jpg','Impresoras 3D',NULL,'fa-save',_binary '',0),(22,'121',4,'http://www.image.com/demo.jpg','Cartuchos de tinta',NULL,'fa-save',_binary '',0),(23,'122',4,'http://www.image.com/demo.jpg','Accesorios',NULL,'fa-save',_binary '',0),(24,'123',3,'http://www.image.com/demo.jpg','Oficina y/o Hogar',NULL,'fa-save',_binary '',0),(25,'124',3,'http://www.image.com/demo.jpg','Arquitectura e Ingeniería',NULL,'fa-save',_binary '',0),(26,'125',3,'http://www.image.com/demo.jpg','Diseño Gráfico',NULL,'fa-save',_binary '',0),(27,'126',3,'http://www.image.com/demo.jpg','Edición de Video',NULL,'fa-save',_binary '',0),(28,'127',3,'http://www.image.com/demo.jpg','Gamer',NULL,'fa-save',_binary '',0),(29,'128',8,'http://www.image.com/demo.jpg','Monitores Gamer',NULL,'fa-save',_binary '',0),(30,'129',8,'http://www.image.com/demo.jpg','Monitores de Escritorio',NULL,'fa-save',_binary '',0),(31,'130',8,'http://www.image.com/demo.jpg','Monitores Profesionales',NULL,'fa-save',_binary '',0),(32,'131',8,'http://www.image.com/demo.jpg','Accesorios para monitores (Racks)',NULL,'fa-save',_binary '',0),(33,'132',9,'http://www.image.com/demo.jpg','Fuentes de poder',NULL,'fa-save',_binary '',0),(34,'133',9,'http://www.image.com/demo.jpg','Memorias ram',NULL,'fa-save',_binary '',0),(35,'134',9,'http://www.image.com/demo.jpg','Procesadores',NULL,'fa-save',_binary '',0),(36,'135',9,'http://www.image.com/demo.jpg','Tarjetas de video',NULL,'fa-save',_binary '',0),(37,'136',10,'http://www.image.com/demo.jpg','Teclados y mouse',NULL,'fa-save',_binary '',0),(38,'137',10,'http://www.image.com/demo.jpg','Cámaras Web',NULL,'fa-save',_binary '',0),(39,'138',10,'http://www.image.com/demo.jpg','Audífonos',NULL,'fa-save',_binary '',0),(40,'139',10,'http://www.image.com/demo.jpg','Sillas',NULL,'fa-save',_binary '',0),(41,'140',12,'http://www.image.com/demo.jpg','Mouse Gamer',NULL,'fa-save',_binary '',0),(42,'141',12,'http://www.image.com/demo.jpg','Micrófono Gamer',NULL,'fa-save',_binary '',0),(43,'142',12,'http://www.image.com/demo.jpg','Teclado Gamer',NULL,'fa-save',_binary '',0),(44,'143',12,'http://www.image.com/demo.jpg','Sillas Gamer',NULL,'fa-save',_binary '',0),(45,'144',6,NULL,'Ofertas',NULL,NULL,_binary '',0),(46,'145',6,NULL,'Novedades',NULL,NULL,_binary '',0),(47,'146',6,NULL,'Más Vendidos',NULL,NULL,_binary '',0);
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direccion`
--

DROP TABLE IF EXISTS `direccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `direccion` (
  `direccionId` int NOT NULL AUTO_INCREMENT,
  `direccionDepartamento` varchar(150) DEFAULT NULL,
  `direccionProvincia` varchar(150) DEFAULT NULL,
  `direccionDistrito` varchar(150) DEFAULT NULL,
  `direccionNombre` varchar(250) DEFAULT NULL,
  `direccionReferencia` varchar(250) DEFAULT NULL,
  `direccionTipo` varchar(50) DEFAULT NULL,
  `usuarioId` int NOT NULL,
  PRIMARY KEY (`direccionId`),
  KEY `FKdireccion484522` (`usuarioId`),
  CONSTRAINT `FKdireccion484522` FOREIGN KEY (`usuarioId`) REFERENCES `usuario` (`usuarioId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direccion`
--

LOCK TABLES `direccion` WRITE;
/*!40000 ALTER TABLE `direccion` DISABLE KEYS */;
/*!40000 ALTER TABLE `direccion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `graficos`
--

DROP TABLE IF EXISTS `graficos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `graficos` (
  `graficosId` int NOT NULL AUTO_INCREMENT,
  `graficosDescripcion` varchar(100) DEFAULT NULL,
  `graficosEstado` bit(1) DEFAULT NULL,
  PRIMARY KEY (`graficosId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `graficos`
--

LOCK TABLES `graficos` WRITE;
/*!40000 ALTER TABLE `graficos` DISABLE KEYS */;
/*!40000 ALTER TABLE `graficos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marca`
--

DROP TABLE IF EXISTS `marca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marca` (
  `marcaId` int NOT NULL AUTO_INCREMENT,
  `marcaDescripcion` varchar(100) DEFAULT NULL,
  `marcaEstado` bit(1) DEFAULT NULL,
  `marcaUrlImg` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`marcaId`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marca`
--

LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca` DISABLE KEYS */;
INSERT INTO `marca` VALUES (1,'Dell',_binary '','http://www.image.com/demo.jpg'),(2,'Canon',_binary '','http://www.image.com/demo.jpg'),(3,'Epson',_binary '','http://www.image.com/demo.jpg'),(4,'ASUS',_binary '','http://www.image.com/demo.jpg'),(5,'Acer',_binary '','http://www.image.com/demo.jpg'),(6,'Samsung',_binary '','http://www.image.com/demo.jpg'),(7,'Corsair',_binary '','http://www.image.com/demo.jpg'),(8,'Kingston',_binary '','http://www.image.com/demo.jpg'),(9,'Intel',_binary '','http://www.image.com/demo.jpg'),(10,'AMD',_binary '','http://www.image.com/demo.jpg'),(11,'Apple',_binary '','http://www.image.com/demo.jpg'),(12,'NVIDIA',_binary '','http://www.image.com/demo.jpg'),(13,'AMD',_binary '','http://www.image.com/demo.jpg'),(14,'MSI',_binary '','http://www.image.com/demo.jpg'),(15,'Logitech',_binary '','http://www.image.com/demo.jpg'),(16,'Razer',_binary '','http://www.image.com/demo.jpg'),(17,'Corsair',_binary '','http://www.image.com/demo.jpg'),(18,'Secretlab',_binary '','http://www.image.com/demo.jpg'),(19,'Sony',_binary '','http://www.image.com/demo.jpg'),(20,'Bose',_binary '','http://www.image.com/demo.jpg');
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modeloprocesador`
--

DROP TABLE IF EXISTS `modeloprocesador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modeloprocesador` (
  `modeloProcesadorId` int NOT NULL AUTO_INCREMENT,
  `modeloProcesadorDescripcion` varchar(100) DEFAULT NULL,
  `modeloProcesadorEstado` bit(1) DEFAULT NULL,
  PRIMARY KEY (`modeloProcesadorId`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modeloprocesador`
--

LOCK TABLES `modeloprocesador` WRITE;
/*!40000 ALTER TABLE `modeloprocesador` DISABLE KEYS */;
INSERT INTO `modeloprocesador` VALUES (1,'Intel Core i9-13900K',_binary ''),(2,'Intel Xeon Gold 6230',_binary ''),(3,'AMD Ryzen 9 7950X',_binary ''),(4,'AMD Ryzen 7 7700X',_binary ''),(5,'Apple M1 Ultra',_binary ''),(6,'Apple M2 Pro',_binary '');
/*!40000 ALTER TABLE `modeloprocesador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedido`
--

DROP TABLE IF EXISTS `pedido`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedido` (
  `pedidoID` int NOT NULL AUTO_INCREMENT,
  `pedidoFecha` datetime DEFAULT NULL,
  `pedidoFechaEnvio` datetime DEFAULT NULL,
  `pedidoMetodoPago` varchar(150) DEFAULT NULL,
  `pedidoSubtotal` decimal(10,2) DEFAULT NULL,
  `pedidoDescuentoPorcentaje` decimal(10,2) DEFAULT NULL,
  `pedidoCostoEnvio` decimal(10,2) DEFAULT NULL,
  `pedidoTotal` decimal(10,2) DEFAULT NULL,
  `pedidoRecogidaTienda` bit(1) DEFAULT NULL,
  `pedidoDespachadoPor` varchar(150) DEFAULT NULL,
  `pedidoTipoEntrega` varchar(50) DEFAULT NULL,
  `pedidoDepartamento` varchar(150) DEFAULT NULL,
  `pedidoProvincia` varchar(150) DEFAULT NULL,
  `pedidoDistrito` varchar(150) DEFAULT NULL,
  `pedidoDireccion` varchar(250) DEFAULT NULL,
  `usuarioId` int NOT NULL,
  PRIMARY KEY (`pedidoID`),
  KEY `FKpedido438242` (`usuarioId`),
  CONSTRAINT `FKpedido438242` FOREIGN KEY (`usuarioId`) REFERENCES `usuario` (`usuarioId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedido`
--

LOCK TABLES `pedido` WRITE;
/*!40000 ALTER TABLE `pedido` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedido` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pedidodetalle`
--

DROP TABLE IF EXISTS `pedidodetalle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidodetalle` (
  `pedidoDetalleId` int NOT NULL AUTO_INCREMENT,
  `pedidoDetalleCantidad` decimal(10,2) DEFAULT NULL,
  `pedidoDetallePrecioUnitario` decimal(10,2) DEFAULT NULL,
  `pedidoDetalleImporte` decimal(10,2) DEFAULT NULL,
  `pedidoID` int NOT NULL,
  `productoproductoId` int NOT NULL,
  PRIMARY KEY (`pedidoDetalleId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidodetalle`
--

LOCK TABLES `pedidodetalle` WRITE;
/*!40000 ALTER TABLE `pedidodetalle` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidodetalle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `productoId` int NOT NULL AUTO_INCREMENT,
  `productoSku` varchar(100) DEFAULT NULL,
  `productoNombre` varchar(200) DEFAULT NULL,
  `productoDescripcion` varchar(255) DEFAULT NULL,
  `productoEstado` bit(1) DEFAULT NULL,
  `productoPrecio` decimal(10,2) DEFAULT NULL,
  `productoPrecioAnterior` decimal(10,2) DEFAULT NULL,
  `productoStock` bit(1) DEFAULT NULL,
  `productoDescuentoPorcentaje` decimal(10,2) DEFAULT NULL,
  `productoStockActual` decimal(10,2) DEFAULT NULL,
  `marcaId` int DEFAULT NULL,
  `categoriaId` int DEFAULT NULL,
  `modeloProcesadorId` int DEFAULT NULL,
  `almacenamientoId` int DEFAULT NULL,
  `graficosId` int DEFAULT NULL,
  `ramId` int DEFAULT NULL,
  `productoImgUrlPrincipal` varchar(250) DEFAULT NULL,
  `productoEspecificaciones` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`productoId`),
  KEY `FKproducto92963` (`ramId`),
  KEY `FKproducto335806` (`graficosId`),
  KEY `FKproducto329515` (`almacenamientoId`),
  KEY `FKproducto43637` (`modeloProcesadorId`),
  KEY `FKproducto275491` (`categoriaId`),
  KEY `FKproducto920403` (`marcaId`),
  CONSTRAINT `FKproducto275491` FOREIGN KEY (`categoriaId`) REFERENCES `categoria` (`categoriaId`),
  CONSTRAINT `FKproducto329515` FOREIGN KEY (`almacenamientoId`) REFERENCES `almacenamiento` (`almacenamientoId`),
  CONSTRAINT `FKproducto335806` FOREIGN KEY (`graficosId`) REFERENCES `graficos` (`graficosId`),
  CONSTRAINT `FKproducto43637` FOREIGN KEY (`modeloProcesadorId`) REFERENCES `modeloprocesador` (`modeloProcesadorId`),
  CONSTRAINT `FKproducto920403` FOREIGN KEY (`marcaId`) REFERENCES `marca` (`marcaId`),
  CONSTRAINT `FKproducto92963` FOREIGN KEY (`ramId`) REFERENCES `ram` (`ramId`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,'A1B2C','Laptop HP Core i7','Descripción de producto Lorem ippusmmsadasd Descripción de producto Lorem ippusmmsadasd Descripción de producto Lorem ippusmmsadasd',_binary '',1200.00,1500.00,_binary '',20.00,10.00,1,3,NULL,NULL,NULL,NULL,'https://lh3.googleusercontent.com/d/1ltQeU2KNFILjFdS4GHreG2jBXdCl4b4_','[ \"colección de productos: procesadores Intel Core\", \"Segmento Vertical: Escritorio\", \"Procesador: Core i5\" ]'),(2,'D3E4F','Mouse Gamer Logitech','Lorem ipsum dolor sit amet.',_binary '',50.00,70.00,_binary '',28.57,50.00,1,10,NULL,NULL,NULL,NULL,'https://lh3.googleusercontent.com/d/1cVFjH6On50boKf7HEKBmx3jWLZcMQeLW',NULL),(3,'G5H6I','Monitor Dell 24\"','Lorem ipsum dolor sit amet.',_binary '',200.00,250.00,_binary '',20.00,30.00,1,8,NULL,NULL,NULL,NULL,'https://lh3.googleusercontent.com/d/1cVFjH6On50boKf7HEKBmx3jWLZcMQeLW',NULL),(4,'J7K8L','Teclado Mecánico Corsair','Lorem ipsum dolor sit amet.',_binary '',80.00,100.00,_binary '',20.00,40.00,1,10,NULL,NULL,NULL,NULL,'https://lh3.googleusercontent.com/d/1PKHZ-VdAS2j2qbmEC-wjYpTqmAPgZmFn',NULL),(5,'M9N0O','Disco Duro Externo 1TB','Lorem ipsum dolor sit amet.',_binary '',60.00,75.00,_binary '',20.00,20.00,1,9,NULL,NULL,NULL,NULL,'https://lh3.googleusercontent.com/d/1cVFjH6On50boKf7HEKBmx3jWLZcMQeLW',NULL),(6,'P1Q2R','Memoria RAM 16GB','Lorem ipsum dolor sit amet.',_binary '',100.00,120.00,_binary '',16.67,25.00,1,9,NULL,NULL,NULL,NULL,'https://lh3.googleusercontent.com/d/1cVFjH6On50boKf7HEKBmx3jWLZcMQeLW',NULL),(7,'HP123','LAPTOP HP','Lorem Impusem sdcsdcdcv',_binary '',5000.00,8000.00,_binary '',10.00,10.00,1,3,NULL,NULL,NULL,NULL,'https://lh3.googleusercontent.com/d/1ltQeU2KNFILjFdS4GHreG2jBXdCl4b4_','[ \"colección de productos: procesadores Intel Core\", \"Segmento Vertical: Escritorio\", \"Procesador: Core i5\" ]'),(8,'KITY400','Mouse Hello Kitty rosado','Mouse ergonómico y minimalista',_binary '',200.00,210.00,_binary '',10.00,10.00,8,12,NULL,NULL,NULL,NULL,'https://lh3.googleusercontent.com/d/1cVFjH6On50boKf7HEKBmx3jWLZcMQeLW',NULL),(10,'AABC','Mouse Hello Kitty rosado','Mouse ergonómico y minimalista',_binary '',200.00,210.00,_binary '',10.00,10.00,8,12,NULL,NULL,NULL,NULL,'https://lh3.googleusercontent.com/d/1cVFjH6On50boKf7HEKBmx3jWLZcMQeLW',NULL),(11,'ASKL','Mouse Hello Kitty rosado','Mouse ergonómico y minimalista',_binary '',200.00,210.00,_binary '',10.00,10.00,8,12,NULL,NULL,NULL,NULL,'https://lh3.googleusercontent.com/d/1cVFjH6On50boKf7HEKBmx3jWLZcMQeLW',NULL),(12,'SDDL','Mouse Hello Kitty rosado','Mouse ergonómico y minimalista',_binary '',200.00,210.00,_binary '',10.00,10.00,8,12,NULL,NULL,NULL,NULL,'https://lh3.googleusercontent.com/d/1cVFjH6On50boKf7HEKBmx3jWLZcMQeLW',NULL),(13,'ASPL','Mouse Hello Kitty rosado','Mouse ergonómico y minimalista',_binary '',200.00,210.00,_binary '',10.00,10.00,8,12,NULL,NULL,NULL,NULL,'https://lh3.googleusercontent.com/d/1cVFjH6On50boKf7HEKBmx3jWLZcMQeLW',NULL),(14,'ASSHDL','Mouse Kinstong estilo pantera','Ut vestibulum libero sit amet velit pharetra, sit amet elementum nulla varius. Pellentesque et felis ut turpis iaculis fringilla non vel lectus',_binary '',50.00,210.00,_binary '',10.00,3.00,NULL,12,NULL,NULL,NULL,NULL,'https://lh3.googleusercontent.com/d/1cVFjH6On50boKf7HEKBmx3jWLZcMQeLW',NULL),(15,'KLALKA','Mouse Kinstong estilo pantera','Ut vestibulum libero sit amet velit pharetra, sit amet elementum nulla varius. Pellentesque et felis ut turpis iaculis fringilla non vel lectus',_binary '',50.00,210.00,_binary '',10.00,1.00,NULL,12,NULL,NULL,NULL,NULL,'https://lh3.googleusercontent.com/d/1cVFjH6On50boKf7HEKBmx3jWLZcMQeLW',NULL),(16,'SDJKL','Mouse Kinstong estilo pantera','Ut vestibulum libero sit amet velit pharetra, sit amet elementum nulla varius. Pellentesque et felis ut turpis iaculis fringilla non vel lectus',_binary '',50.00,210.00,_binary '',10.00,4.00,NULL,12,NULL,NULL,NULL,NULL,'https://lh3.googleusercontent.com/d/1cVFjH6On50boKf7HEKBmx3jWLZcMQeLW',NULL),(17,'FLOFLO','Pc Gamer Dinámico Strike Kingtone Temática de Counter Strike','Ut vestibulum libero sit amet velit pharetra, sit amet elementum nulla varius. Pellentesque et felis ut turpis iaculis fringilla non vel lectus',_binary '',150.00,210.00,_binary '',10.00,10.00,5,5,NULL,NULL,NULL,NULL,'https://lh3.googleusercontent.com/d/1R4L0A9-oxhC_Y40u5HFmk9aO3A0FlnQE',NULL),(19,'KLOK','Auriculares Gaming Razer Kraken','Auriculares con sonido envolvente 7.1 y micrófono ajustable.',_binary '',89.99,99.99,_binary '',5.00,25.00,NULL,12,NULL,NULL,NULL,NULL,'https://http2.mlstatic.com/D_NQ_NP_854658-MLA44772246855_022021-O.webp','[ \"Tipo: Auriculares\", \"Sonido: 7.1 Surround\", \"Micrófono: Retráctil y ajustable\", \"Conexión: USB\" ]'),(20,'GAME01','Auriculares Ergonomicas Razer Kraken','Auriculares con sonido envolvente 7.1 y micrófono ajustable.',_binary '',89.99,99.99,_binary '',5.00,25.00,NULL,12,NULL,NULL,NULL,NULL,'https://http2.mlstatic.com/D_NQ_NP_854658-MLA44772246855_022021-O.webp','[\"Tipo: Auriculares\", \"Sonido: 7.1 Surround\", \"Micrófono: Retráctil y ajustable\", \"Conexión: USB\"]'),(21,'FKLA','Auriculares Ergonomicas Razer Kraken','Auriculares con sonido envolvente 7.1 y micrófono ajustable.',_binary '',89.99,99.99,_binary '',5.00,25.00,NULL,12,NULL,NULL,NULL,NULL,'https://http2.mlstatic.com/D_NQ_NP_854658-MLA44772246855_022021-O.webp','[\"Tipo: Auriculares\", \"Sonido: 7.1 Surround\", \"Micrófono: Retráctil y ajustable\", \"Conexión: USB\"]'),(22,'SASA','Auriculares Ergonomicas Razer Kraken','Auriculares con sonido envolvente 7.1 y micrófono ajustable.',_binary '',89.99,99.99,_binary '',5.00,25.00,NULL,12,NULL,NULL,NULL,NULL,'https://http2.mlstatic.com/D_NQ_NP_854658-MLA44772246855_022021-O.webp','[\"Tipo: Auriculares\", \"Sonido: 7.1 Surround\", \"Micrófono: Retráctil y ajustable\", \"Conexión: USB\"]'),(23,'PALG','Auriculares Ergonomicas Razer Kraken','Auriculares con sonido envolvente 7.1 y micrófono ajustable.',_binary '',89.99,99.99,_binary '',5.00,25.00,NULL,12,NULL,NULL,NULL,NULL,'https://http2.mlstatic.com/D_NQ_NP_854658-MLA44772246855_022021-O.webp','[\"Tipo: Auriculares\", \"Sonido: 7.1 Surround\", \"Micrófono: Retráctil y ajustable\", \"Conexión: USB\"]'),(24,'IOSD','Auriculares Ergonomicas Razer Kraken','Auriculares con sonido envolvente 7.1 y micrófono ajustable.',_binary '',89.99,99.99,_binary '',5.00,25.00,NULL,12,NULL,NULL,NULL,NULL,'https://http2.mlstatic.com/D_NQ_NP_854658-MLA44772246855_022021-O.webp','[\"Tipo: Auriculares\", \"Sonido: 7.1 Surround\", \"Micrófono: Retráctil y ajustable\", \"Conexión: USB\"]'),(25,'ERDA','Auriculares Ergonomicas Razer Kraken','Auriculares con sonido envolvente 7.1 y micrófono ajustable.',_binary '',89.99,99.99,_binary '',5.00,25.00,NULL,5,NULL,NULL,NULL,NULL,'https://http2.mlstatic.com/D_NQ_NP_854658-MLA44772246855_022021-O.webp','[\"Tipo: Auriculares\", \"Sonido: 7.1 Surround\", \"Micrófono: Retráctil y ajustable\", \"Conexión: USB\"]'),(26,'WFGBG','Auriculares Ergonomicas Razer Kraken','Auriculares con sonido envolvente 7.1 y micrófono ajustable.',_binary '',89.99,99.99,_binary '',5.00,25.00,NULL,5,NULL,NULL,NULL,NULL,'https://http2.mlstatic.com/D_NQ_NP_854658-MLA44772246855_022021-O.webp','[\"Tipo: Auriculares\", \"Sonido: 7.1 Surround\", \"Micrófono: Retráctil y ajustable\", \"Conexión: USB\"]');
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productoimagen`
--

DROP TABLE IF EXISTS `productoimagen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productoimagen` (
  `productoImagenId` int NOT NULL AUTO_INCREMENT,
  `productoImagenImgUrl` varchar(200) DEFAULT NULL,
  `productoImagenEstado` bit(1) DEFAULT NULL,
  `productoId` int NOT NULL,
  PRIMARY KEY (`productoImagenId`),
  KEY `FKproductoIm904955` (`productoId`),
  CONSTRAINT `FKproductoIm904955` FOREIGN KEY (`productoId`) REFERENCES `producto` (`productoId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productoimagen`
--

LOCK TABLES `productoimagen` WRITE;
/*!40000 ALTER TABLE `productoimagen` DISABLE KEYS */;
INSERT INTO `productoimagen` VALUES (1,'https://lh3.googleusercontent.com/d/1y9PjhOedmCcgdd8Jpj8Vy1yuyx-knIbg',_binary '',1),(2,'https://lh3.googleusercontent.com/d/1y9PjhOedmCcgdd8Jpj8Vy1yuyx-knIbg',_binary '',7);
/*!40000 ALTER TABLE `productoimagen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ram`
--

DROP TABLE IF EXISTS `ram`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ram` (
  `ramId` int NOT NULL AUTO_INCREMENT,
  `ramDescripcion` varchar(100) DEFAULT NULL,
  `ramEstado` bit(1) DEFAULT NULL,
  PRIMARY KEY (`ramId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ram`
--

LOCK TABLES `ram` WRITE;
/*!40000 ALTER TABLE `ram` DISABLE KEYS */;
/*!40000 ALTER TABLE `ram` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slider`
--

DROP TABLE IF EXISTS `slider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `slider` (
  `sliderId` int NOT NULL AUTO_INCREMENT,
  `sliderXsUrl` varchar(250) DEFAULT NULL,
  `sliderLgUrl` varchar(250) DEFAULT NULL,
  `sliderCabeceraXsUrl` varchar(250) DEFAULT NULL,
  `sliderCabeceraLgUrl` varchar(250) DEFAULT NULL,
  `sliderBodyXsUrl` varchar(250) DEFAULT NULL,
  `sliderBodyLgUrl` varchar(250) DEFAULT NULL,
  `sliderEstado` bit(1) DEFAULT NULL,
  PRIMARY KEY (`sliderId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slider`
--

LOCK TABLES `slider` WRITE;
/*!40000 ALTER TABLE `slider` DISABLE KEYS */;
INSERT INTO `slider` VALUES (1,'https://lh3.googleusercontent.com/d/1rvPc7NZCA9xo6m2MXUCCfs-8SGcG1_Jl','https://lh3.googleusercontent.com/d/1Z-c3QlJrr06-8R4AP7OK90UkCtCkuTmB','https://lh3.googleusercontent.com/d/1IHQXVQ8Y2UB5SLiU878xN7L7TN-TZEq0',NULL,'https://lh3.googleusercontent.com/d/1TBx4oWau3hxdyDYWCoodKh6khFiMyp4F','https://lh3.googleusercontent.com/d/1TBx4oWau3hxdyDYWCoodKh6khFiMyp4F',_binary '');
/*!40000 ALTER TABLE `slider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `usuarioId` int NOT NULL AUTO_INCREMENT,
  `usuarioEmail` varchar(150) DEFAULT NULL,
  `usuarioPassword` varchar(256) DEFAULT NULL,
  `usuarioEstado` bit(1) DEFAULT NULL,
  `usuarioNombres` varchar(250) DEFAULT NULL,
  `usuarioApellidos` varchar(250) DEFAULT NULL,
  `usuarioDni` varchar(7) DEFAULT NULL,
  `usuarioRuc` varchar(11) DEFAULT NULL,
  `usuarioRazonSocial` varchar(150) DEFAULT NULL,
  `usuarioTipoDocumento` varchar(20) DEFAULT NULL,
  `usuarioTelefono1` varchar(20) DEFAULT NULL,
  `usuarioTelefono2` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`usuarioId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-27 22:55:22
