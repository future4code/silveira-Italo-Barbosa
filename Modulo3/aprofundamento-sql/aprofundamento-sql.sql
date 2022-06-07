SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor SET name = "Moacyr Franco" WHERE id = "123";

UPDATE Actor SET name = "Italo", birth_date = "2006/12/23" WHERE id = "003";

UPDATE Actor SET name = "JULIANA PÃES" WHERE name = "Juliana Paes";

UPDATE Actor SET name = "Italo", birth_date = "2022-05-18", salary = 950000, gender = "male" WHERE id = "005";

UPDATE Actor SET name = "Italo souza" WHERE id = "009";

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor WHERE gender = "female";

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

SELECT COUNT(*), gender FROM Actor GROUP BY gender;

SELECT id, name FROM Actor ORDER BY name DESC;

SELECT * FROM Actor ORDER BY salary;

SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

SELECT AVG(salary), gender FROM Actor GROUP BY gender;

ALTER TABLE Filmes ADD playing_limit_date DATE;

SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Filmes CHANGE imdb rating FLOAT;

UPDATE Filmes SET playing_limit_date = "2022-11-28" WHERE id = "001";

UPDATE Filmes SET playing_limit_date = "2006-09-12" WHERE id = "002";

DELETE FROM Filmes WHERE id = "002";

UPDATE Filmes SET sinopse = "tam" WHERE id = "2";

