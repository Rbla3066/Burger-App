CREATE SCHEMA `burger_db` ;
CREATE TABLE `burger_db`.`burgers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `devoured` TINYINT NOT NULL,
  `date` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC));
