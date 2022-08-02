-- Active: 1655156833385@@35.226.146.116@3306@silveira-21814689-italo-barbosa
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY, 
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);



SELECT * FROM User;

CREATE TABLE labook_post (
    id VARCHAR(255) PRIMARY KEY,
    photo VARCHAR(255),
    description VARCHAR(255),
    creation_date DATE,
    type ENUM ("COMMON", "EVENT") DEFAULT "COMMON",
    FOREIGN KEY (creatorId_post) REFERENCES User(id)
);

SELECT * FROM labook_post

