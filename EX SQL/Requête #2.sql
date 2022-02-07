 DROP DATABASE IF EXISTS  hilton ;
 CREATE DATABASE  hilton ;
 USE hilton ;
 
 
 
 CREATE TABLE station (
 
		                  	num_station_id	      INT  NOT NULL    AUTO_INCREMENT ,
									nom_station 		   VARCHAR(50) NOT NULL, 
							      PRIMARY KEY (num_station_id)
                  );
                  
                  
                  
 CREATE TABLE hotel (
 	                       num_hotel               INT  NOT NULL  AUTO_INCREMENT ,
								  capacite_hotel          INT  NOT NULL,
								  categorie_hotel         INT  NOT NULL, 
							 	  num_station_id           INT NOT NULL, 
								  nom_hotel               VARCHAR(50) NOT NULL, 
								  adresse_hotel           VARCHAR(50) NOT NULL, 
								
									     
									          PRIMARY KEY (num_hotel),
												 FOREIGN KEY (num_station_id) REFERENCES station (num_station_id)
					);
								 

 
 CREATE  TABLE chambre (
								 capacité_chambre INT NOT NULL,
								 type_chambre  INT NOT NULL,
								 num_chambre_id INT  NOT NULL AUTO_INCREMENT ,
								 num_hotel INT  NOT NULL ,
								 
								 PRIMARY KEY (num_chambre_id),
								 FOREIGN KEY (num_hotel) REFERENCES  hotel (num_hotel)
								 
						);
						 

             
CREATE TABLE    clien ( 

						adresse_clien  VARCHAR(50) NOT NULL,
						nom_clien     VARCHAR(50) NOT NULL,
						prenom_clien  VARCHAR(50) NOT NULL,
						num_clien_id  INT  NOT NULL  AUTO_INCREMENT ,


                  PRIMARY KEY(num_clien_id)
						);chambre
						
CREATE TABLE reservation(

             date_reservation DATETIME  NOT NULL,
             date_debut       DATETIME     NOT NULL,
             date_fin         DATETIME      NOT NULL,
             prix_total       DECIMAL     NOT NULL,
            num_clien_id       INT      NOT NULL ,
				montant_arrhes     DECIMAL     NOT NULL,
				num_chambre_id       INT  NOT NULL, 
             
             
               FOREIGN KEY (num_chambre_id) REFERENCES chambre (num_chambre_id),
					FOREIGN KEY (num_clien_id)   REFERENCES  clien (num_clien_id)
               
					);

 