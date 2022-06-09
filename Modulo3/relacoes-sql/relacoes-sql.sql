SET SQL_SAFE_UPDATES = 0;
CREATE TABLE imdb (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    Filmes_id VARCHAR(255),
    FOREIGN KEY (Filmes_id) REFERENCES Filmes(id)
);

INSERT INTO imdb (id, comment, rate, Filmes_id) 
VALUES ("003", "No minimo estranho, eu recomendo!", 7, "003");

INSERT INTO imdb (id, comment, rate, Filmes_id) 
VALUES ("002", "hmm!", 8, "002");

select id, name from Filmes;

DELETE FROM Filmes WHERE id = "003";

ALTER TABLE Filmes DROP COLUMN imdb;

CREATE TABLE elenco (
		Filmes_id VARCHAR(255),
		Actor_id VARCHAR(255),
    FOREIGN KEY (Filmes_id) REFERENCES Filmes(id),
    FOREIGN KEY (Actor_id) REFERENCES Actor(id)
);

INSERT INTO elenco(Filmes_id, Actor_id)
VALUES(
		"003",
    "003"
);
INSERT INTO elenco(Filmes_id, Actor_id)
VALUES(
		"001",
    "001"
);
INSERT INTO elenco(Filmes_id, Actor_id)
VALUES(
		"004",
    "004"
);

INSERT INTO elenco(Filmes_id, Actor_id)
VALUES(
		"002",
    "002"
);
select id, name from Actor;

DELETE FROM Actor WHERE id = "003";

SELECT * FROM Filmes INNER JOIN imdb ON Filmes.id = imdb.Filmes_id;

SELECT Filmes.id as Filmes_id, imdb.rate as imdb FROM Filmes Filmes
INNER JOIN imdb imdb ON Filmes.id = imdb.Filmes_id;


