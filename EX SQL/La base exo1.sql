DROP DATABASE IF EXISTS  exo1;
CREATE DATABASE  exo1;
USE exo1;

CREATE TABLE  client1(

 cli_num            Int NOT NULL, 
 cli_nom          VARCHAR (50) NOT NULL,
 cli_adresse      VARCHAR (50) NOT NULL,
 cli_tel          VARCHAR (30) NOT NULL,
                  PRIMARY KEY (cli_num),
                  INDEX indexclient1  (cli_nom)

 );
 

CREATE TABLE  produit1(
 
 pro_num            Int NOT NULL,
 pro_libelle       VARCHAR (50) NOT NULL,
 pro_description  VARCHAR (50) NOT NULL,
 
                 PRIMARY KEY (pro_num )
         
         
   );
   
CREATE TABLE commande1(

						     com_num Int NOT NULL,
						     cli_num Int NOT NULL,
						     com_date DATETIME,
						     com_obs  VARCHAR (50) NOT NULL,
    PRIMARY KEY (com_num ),
    CONSTRAINT commande1 FOREIGN KEY (cli_num) REFERENCES client1 (cli_num)
    );
     
CREATE TABLE est_compose1(

					 com_num       Int NOT NULL,
					 pro_num       Int NOT NULL,
					 est_qte       Int NOT NULL,

 CONSTRAINT est_compose1 FOREIGN KEY (com_num) REFERENCES commande1(com_num),
 CONSTRAINT est_compose1 FOREIGN KEY (pro_num) REFERENCES produit1(pro_num)
 );
 
 
 
 
 