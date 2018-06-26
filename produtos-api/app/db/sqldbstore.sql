-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE database IF NOT EXISTS `dbstore` ;
USE `dbstore` ;

-- -----------------------------------------------------
-- Table `mydb`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbstore`.`clientes` (
  `id_cliente` INT NOT NULL AUTO_INCREMENT,
  `nome_user` VARCHAR(45) NOT NULL,
  `email_user` VARCHAR(45) NOT NULL,
  `senha_user` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_cliente`));

-- -----------------------------------------------------
-- Table `mydb`.`produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbstore`.`produtos` (
  `id_produtos` INT NOT NULL AUTO_INCREMENT,
  `descricao` VARCHAR(255) NULL,
  `preco_unit` DECIMAL(5,2) NULL,
  `qtd_est` DECIMAL NULL,
  `url_img` VARCHAR(255) NULL,
  PRIMARY KEY (`id_produtos`));


-- -----------------------------------------------------
-- Table `mydb`.`notas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbstore`.`notas` (
  `id_notas` INT NOT NULL AUTO_INCREMENT,
  `data_compra` DATE NOT NULL,
  `id_cliente` INT NOT NULL,
  `metodo_pagamento` VARCHAR(45) NULL,
  `status` varchar(55) not null,
  PRIMARY KEY (`id_notas`,`id_cliente`),
  foreign key(`id_cliente`) references clientes(`id_cliente`)
  );


-- -----------------------------------------------------
-- Table `mydb`.`endereco`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbstore`.`endereco` (
  `id_cliente` INT NOT NULL, 
  `rua` VARCHAR(45) NOT NULL,
  `logradouro` VARCHAR(45) NOT NULL,
  `numero` VARCHAR(45) NOT NULL,
  `cidade` VARCHAR(45) NOT NULL,
  `bairro` VARCHAR(45) NOT NULL,
  `estado` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_cliente`),
  foreign key (`id_cliente`) references clientes(`id_cliente`)
  );
  
-- -----------------------------------------------------
-- Table `mydb`.`itens_nota`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbstore`.`itens_nota` (
  `qtd` DECIMAL NOT NULL,
  `id_produtos` INT NOT NULL,
  `id_notas` INT NOT NULL,
   primary key(`id_produtos`, `id_notas`),
   foreign key (`id_produtos`) references produtos(`id_produtos`),
   foreign key (`id_notas`) references notas(`id_notas`)
  );
