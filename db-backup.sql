-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: LBartolini.mysql.pythonanywhere-services.com    Database: LBartolini$default
-- ------------------------------------------------------
-- Server version	5.7.33-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `tr`
--

DROP TABLE IF EXISTS `tr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tr` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descrizione` varchar(80) DEFAULT NULL,
  `giorno` smallint(6) DEFAULT NULL,
  `mese` smallint(6) DEFAULT NULL,
  `anno` smallint(6) DEFAULT NULL,
  `importo` float(64,2) DEFAULT NULL,
  `ricarica` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=220 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tr`
--

LOCK TABLES `tr` WRITE;
/*!40000 ALTER TABLE `tr` DISABLE KEYS */;
INSERT INTO `tr` VALUES (7,'Ricarica lug ago',18,7,2019,336.90,1),(8,'Prelievo',18,7,2019,50.00,0),(9,'Abbonamento stadio',22,7,2019,151.00,0),(10,'Prelievo',22,7,2019,20.00,0),(18,'Gioco da tavolo',22,7,2019,27.96,0),(19,'Spesa nonna',25,7,2019,3.06,0),(20,'Netflix',17,8,2019,7.99,0),(21,'Corso deep learning',27,8,2019,9.99,0),(22,'Spesa coop',29,8,2019,2.58,0),(23,'Prelievo',1,9,2019,20.00,0),(24,'Spesa',3,9,2019,3.44,0),(25,'Ricarica sett ottobre',10,9,2019,200.00,1),(26,'Prelievo',11,9,2019,20.00,0),(27,'Altro',12,9,2019,20.00,0),(28,'Felpa levis',13,9,2019,70.00,0),(29,'Spesa',13,9,2019,5.98,0),(30,'Netflix',19,9,2019,7.99,0),(31,'Benzina',21,9,2019,10.00,0),(32,'Ricarica cellulare',9,10,2019,5.00,0),(33,'Prelievo',12,10,2019,20.00,0),(34,'Ricarica nov dicembre',14,10,2019,200.00,1),(35,'Scarpe af1 mid',16,10,2019,103.95,0),(36,'Netflix',19,10,2019,7.99,0),(37,'Prelievo',26,10,2019,20.00,0),(38,'Ricarica cellulare',8,11,2019,10.00,0),(39,'prelievo',14,11,2019,20.00,0),(40,'netflix',19,11,2019,7.99,0),(41,'spesa',23,11,2019,11.15,0),(42,'pranzo coop',26,11,2019,2.08,0),(43,'pranzo coop',3,12,2019,2.17,0),(44,'ricarica cellulare',9,12,2019,5.00,0),(45,'prelievo',15,12,2019,20.00,0),(46,'netflix',19,12,2019,7.99,0),(47,'prelievo',27,12,2019,20.00,0),(48,'ricarica gen febb',28,12,2019,250.00,1),(49,'prelievo',31,12,2019,40.00,0),(50,'cappello dolly noire',3,1,2020,15.00,0),(51,'ricarica cellulare',8,1,2020,10.00,0),(52,'biglietto autobus',8,1,2020,1.50,0),(53,'biglietto autobus',11,1,2020,1.50,0),(54,'prelievo',11,1,2020,30.00,0),(55,'burger king',12,1,2020,2.00,0),(56,'biglietto bus',15,1,2020,1.50,0),(57,'prelievo',18,1,2020,20.00,0),(58,'netflix',19,1,2020,7.99,0),(59,'biglietto autobus',20,1,2020,1.50,0),(60,'biglietto autobus',21,1,2020,1.50,0),(61,'pranzo coop',3,2,2020,3.03,0),(62,'pranzo coop',4,2,2020,3.43,0),(63,'prelievo',8,2,2020,40.00,0),(64,'merenda coop',8,2,2020,1.86,0),(65,'ricarica cellulare',9,2,2020,5.00,0),(66,'netflix',19,2,2020,7.99,0),(67,'auricolari',21,2,2020,0.01,0),(68,'prelievo',22,2,2020,20.00,0),(70,'ricarica mar apr',1,3,2020,200.22,1),(71,'xiaomi miband 4',3,3,2020,30.48,0),(72,'ricarica cellulare',9,3,2020,10.00,0),(73,'netflix',19,3,2020,7.99,0),(74,'benzina mamma',19,3,2020,8.05,0),(75,'ricarica cellulare',9,4,2020,10.00,0),(77,'hearts of iron 4',14,4,2020,8.19,0),(78,'netflix',19,4,2020,7.99,0),(79,'ram 16gb',5,5,2020,82.99,0),(80,'ricarica cellulare',9,5,2020,5.00,0),(81,'ac origins',16,5,2020,4.99,0),(82,'netflix',19,5,2020,7.99,0),(83,'prelievo',23,5,2020,40.00,0),(84,'ricarica mag giugno',2,6,2020,200.00,1),(85,'ricarica cellulare',9,6,2020,10.00,0),(86,'cuffie babbo',13,6,2020,10.00,0),(87,'prelievo',17,6,2020,40.00,0),(88,'pantaloncini fiorentina',18,6,2020,22.50,0),(89,'mc',18,6,2020,7.89,0),(90,'netflix',19,6,2020,7.99,0),(91,'prelievo',19,6,2020,20.00,0),(92,'spesa',22,6,2020,10.69,0),(93,'prelievo',27,6,2020,20.00,0),(94,'benzina',28,6,2020,5.01,0),(95,'spesa nonna',30,6,2020,11.87,0),(96,'biglietti treno',3,7,2020,29.10,0),(97,'ricarica lug ago',4,7,2020,300.00,1),(98,'prelievo',5,7,2020,40.00,0),(99,'pranzo',6,7,2020,3.90,0),(100,'pranzo',7,7,2020,6.11,0),(101,'ricarica cellulare',8,7,2020,5.00,0),(102,'prelievo',8,7,2020,70.00,0),(103,'tassa soggiorno albergo',12,7,2020,12.60,0),(104,'libro game',12,7,2020,20.80,0),(105,'spesa nonna',16,7,2020,8.70,0),(106,'netflix',19,7,2020,7.99,0),(107,'prelievo',22,7,2020,40.00,0),(108,'benzina',26,7,2020,10.00,0),(109,'prelievo',3,8,2020,50.00,0),(110,'spesa nonna',4,8,2020,12.11,0),(111,'pantaloni',6,8,2020,17.40,0),(112,'ricarica cellulare',8,8,2020,10.00,0),(113,'spesa',11,8,2020,10.76,0),(114,'netflix',19,8,2020,7.99,0),(115,'mc donalds',25,8,2020,3.00,0),(116,'benzina',26,8,2020,10.00,0),(117,'ricarica sett ott',27,8,2020,200.00,1),(118,'spesa',29,8,2020,11.53,0),(119,'mc donalds',3,9,2020,6.70,0),(120,'luca ravenna live',4,9,2020,20.81,0),(121,'ricarica cellulare',8,9,2020,10.00,0),(122,'spesa coop',15,9,2020,13.57,0),(123,'maglia bati',16,9,2020,93.00,0),(124,'treno sesto',17,9,2020,1.50,0),(125,'netflix',19,9,2020,7.99,0),(126,'prelievo',26,9,2020,20.00,0),(127,'ricarica nov dic',5,10,2020,200.00,1),(128,'prelievo',7,10,2020,50.00,0),(129,'ricarica cellulare',9,10,2020,5.00,0),(130,'turbo boost switcher pro',16,10,2020,10.35,0),(131,'ricarica per giubbotto',17,10,2020,200.00,1),(132,'bomber alpha industries',17,10,2020,170.00,0),(133,'netflix',19,10,2020,7.99,0),(134,'fidget cube',22,10,2020,10.67,0),(135,'merenda coop',23,10,2020,3.38,0),(136,'prelievo',24,10,2020,40.00,0),(137,'pranzo coop',26,10,2020,3.77,0),(138,'aperitivo marcello',7,11,2020,6.00,0),(139,'colazione marcello',8,11,2020,2.50,0),(140,'ricarica cellulare',10,11,2020,10.00,0),(141,'ebay 750ti',10,11,2020,54.70,1),(142,'Squad',11,11,2020,30.96,0),(143,'prelievo',12,11,2020,40.00,0),(144,'netflix',19,11,2020,7.99,0),(146,'bonifico Absolute',24,11,2020,350.00,1),(147,'adattatore vga',24,11,2020,7.99,0),(149,'prelievo',26,11,2020,20.00,0),(150,'bollettino maturità',26,11,2020,13.59,0),(151,'tassa ebay',3,12,2020,5.14,0),(152,'prelievo',4,12,2020,60.00,0),(153,'merenda centro',7,12,2020,4.00,0),(154,'ricarica cellulare',8,12,2020,10.00,0),(155,'7 wonders duel',14,12,2020,24.90,0),(156,'libro veronesi',16,12,2020,13.30,0),(157,'bracciale amberta',17,12,2020,14.49,0),(158,'netflix',19,12,2020,7.99,0),(159,'prelievo',28,12,2020,40.00,0),(160,'cioccolata calda',28,12,2020,4.50,0),(161,'bsm',6,1,2021,10.00,0),(163,'Ricarica cellulare',8,1,2021,5.00,0),(164,'Earth2',8,1,2021,2.55,0),(165,'Eu4',12,1,2021,2.69,0),(166,'Prelievo',16,1,2021,20.00,0),(167,'Merenda',22,1,2021,1.38,0),(168,'Colazione marcello',24,1,2021,2.50,0),(169,'Netflix',19,1,2021,7.99,0),(170,'Ricarica gen-feb',30,1,2021,200.00,1),(171,'Mouse g305',31,1,2021,43.99,0),(172,'Prelievo',31,1,2021,40.00,0),(173,'Merenda coop',5,2,2021,1.38,0),(174,'Eataly',6,2,2021,13.10,0),(175,'Ricarica cellulare',7,2,2021,10.00,0),(176,'Wargroove',10,2,2021,2.99,0),(177,'Ricarica cell mamma',10,2,2021,20.00,0),(178,'Netflix',19,2,2021,7.99,0),(179,'Prelievo',4,3,2021,40.00,0),(180,'Merenda coop',5,3,2021,1.56,0),(181,'Ricarica cellulare',8,3,2021,5.00,0),(182,'Mc',13,3,2021,1.00,0),(183,'Ground branch',16,3,2021,24.99,0),(184,'Fucile',18,3,2021,85.00,1),(185,'Fifa 21',19,3,2021,25.69,0),(186,'Ricarica cellulare',9,4,2021,10.00,0),(187,'Ripetizioni PayPal',7,4,2021,40.00,1),(188,'Company of heroes 2',10,4,2021,3.17,0),(189,'Ripetizioni cheru',14,4,2021,15.00,1),(190,'Dlc coh2',15,4,2021,4.43,0),(191,'Benzina',18,4,2021,5.00,0),(192,'Merenda coop',23,4,2021,1.58,0),(193,'Netflix',19,4,2021,7.99,0),(194,'Merenda coop',30,4,2021,2.95,0),(195,'Prelievo',30,4,2021,20.00,0),(196,'Coca mc donalds',1,5,2021,2.00,0),(197,'Spesa coop',3,5,2021,12.01,0),(198,'Ripetizioni gob',4,5,2021,30.00,1),(199,'Tassa paypal',4,5,2021,1.00,0),(200,'Coop',19,3,2021,1.58,0),(201,'Netflix',19,3,2021,7.99,0),(202,'Quota carta superflash',26,2,2021,26.90,0),(203,'Aggiornamento saldo',4,5,2021,0.11,1),(204,'Coop',7,5,2021,3.92,0),(205,'Eataly',8,5,2021,4.20,0),(206,'Ricarica cellulare',9,5,2021,10.00,0),(207,'Poke',12,5,2021,11.10,0),(208,'Ricarica mar-aprile',13,5,2021,300.00,1),(209,'Drink',15,5,2021,6.00,0),(210,'Cena deliveroo',16,5,2021,40.20,0),(211,'Merenda coop',21,5,2021,3.09,0),(212,'Micro sd 64gb',22,5,2021,11.99,0),(213,'Benzina',23,5,2021,5.00,0),(214,'Case raspberry',23,5,2021,10.99,0),(215,'Netflix',19,5,2021,7.99,0),(216,'Ripetizioni',26,5,2021,40.00,1),(217,'Merenda coop',28,5,2021,4.09,0),(218,'Pants easymarket',1,6,2021,71.84,0),(219,'Pranzo viareggio',2,6,2021,6.00,0);
/*!40000 ALTER TABLE `tr` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-05 16:13:19
