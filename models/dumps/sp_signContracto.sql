CREATE DEFINER=`root`@`localhost` 
PROCEDURE `new_signcontract`(
IN `name` VARCHAR(255),
IN `birth` DATE, 
IN `birth_place` VARCHAR(255), 
IN `cpf` VARCHAR(14), 
IN `rg_number` VARCHAR(14),
IN `rg_organ` VARCHAR(255) ,
IN `rg_uf` CHAR(2), 
IN `email` VARCHAR(255),
IN `cell_phone` VARCHAR(13),
IN `cep` VARCHAR(8),
IN `district` VARCHAR(8), 
IN `city` VARCHAR(255),
IN `uf` CHAR(2),
IN `public_pace` VARCHAR(255), 
IN `number` INT, 
IN `adjunct` VARCHAR(255),
IN `agreementId` INT,
IN `title` VARCHAR(255),
IN `context` TEXT, 
IN `contractorSign` TEXT 
)
BEGIN
	select name;
END