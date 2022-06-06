USE `silveira-21814689-italo-barbosa`;

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);


INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-05-23", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Juliana paes",
  1200000,
  "1963-05-23", 
  "female"
);

SELECT id, name from Actor WHERE gender = "female";

SELECT id, name from Actor WHERE salary = "Tony Ramos";

SELECT id, name, salary from Actor WHERE salary < 500000;
SELECT id, name from Actor WHERE salary = "Tony Ramos";

SELECT id, name from Actor WHERE id = "002";

SELECT * FROM Actor
WHERE (name LIKE "A%" ) AND salary > 350000;

SELECT * FROM Actor
WHERE (name LIKE "G%" and name LIKE "g%" );

SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
  
  SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;
  
  
  CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    sinopse VARCHAR (255) NOT NULL,
    release_date DATE NOT NULL,
    imdb VARCHAR(6) NOT NULL
);

INSERT INTO Filmes (id, name, sinopse, release_date, imdb)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006/01/06", 
  "7"
);

INSERT INTO Filmes (id, name, sinopse, release_date, imdb)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012/12/27", 
  "10"
);

INSERT INTO Filmes (id, name, sinopse, release_date, imdb)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017/11/02", 
  "8"
);

INSERT INTO Filmes (id, name, sinopse, release_date, imdb)
VALUES(
  "004", 
  "Auto da Compadecida",
  "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
  "2000/09/10", 
  "8,6"
);

SELECT id, name from Filmes WHERE id = "002";
SELECT id, name from Filmes WHERE name = "Auto da Compadecida";
SELECT id, name, sinopse FROM Filmes WHERE imdb > 7;
SELECT * FROM Filmes
WHERE (sinopse LIKE "Vida%");
SELECT * FROM Filmes
WHERE (sinopse LIKE "Doce" OR name Like "Doce%");

SELECT id, name from Filmes WHERE release_date > "2000/09/09";

SELECT * FROM MOVIE
WHERE release_date < "2022-06-06" AND (name LIKE "Doce%" OR sinopse LIKE "Doce%") AND imdb > 7;


