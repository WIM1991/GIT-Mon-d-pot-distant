DROP DATABASE IF EXISTS informations;

CREATE DATABASE informations; 

USE informations; 

CREATE TABLE stagiaires  (

				   sta_id INT              NOT NULL,
				   sta_nom VARCHAR(50)     NOT NULL,
				   sta_prenom VARCHAR(50)  NOT NULL,
				   sta_adresse VARCHAR(50) NOT NULL,
				   sta_tel VARCHAR(30)     NOT NULL,
    
    CONSTRAINT stagiaires_PK PRIMARY KEY (sta_id)
);

CREATE TABLE formations (
    form_code INT                NOT NULL ,
    form_duree_heure INT          NOT NULL,
    form_libelle VARCHAR(50)      NOT NULL,
    form_description VARCHAR(50)  NOT NULL,

    CONSTRAINT formations_PK PRIMARY KEY (form_code)
);

CREATE TABLE form_stagiaires (

     form_code Int NOT NULL,stagiaires
     sta_id INT NOT NULL,
 
 FOREIGN KEY (sta_id) REFERENCES stagiaires (sta_id) ,
 FOREIGN KEY (form_code) REFERENCES formations (form_code) ,
 );
 