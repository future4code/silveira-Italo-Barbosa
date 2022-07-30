CREATE TABLE lamaro_prod(
        id VARCHAR(255) NOT NULL,
        nome VARCHAR(255) NOT NULL,
        data_criacao VARCHAR(255) NOT NULL,
        tag VARCHAR(255) NOT NULL,
        criadorId_produto VARCHAR(255) NOT NULL,
        FOREIGN KEY (criadorId_produto) REFERENCES lamaro_user(id)
    ) 
    ###
CREATE TABLE lamaro_user(
        id VARCHAR(255) NOT NULL,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        senha VARCHAR(255) NOT NULL
    )