

CREATE TABLE client_wirecard(
    id VARCHAR(255) PRIMARY KEY
)

CREATE TABLE buys_wirecard(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,    
    cpf BIGINT UNIQUE NOT NULL
)

CREATE TABLE payment_wirecard(
    id VARCHAR(255) PRIMARY KEY,
    client_id VARCHAR(255) NOT NULL,
    buy_id VARCHAR(255) NOT NULL,
    amount FLOAT NOT NULL,
    type ENUM("CARTÃO DE CRÉDITO", "BOLETO") NOT NULL,
    status ENUM ("A PAGAR", "PAGO") NOT NULL DEFAULT "A PAGAR",
    boleto_number BIGINT UNIQUE,
    FOREIGN KEY (buy_id) REFERENCES buys_wirecard(id),
    FOREIGN KEY (client_id) REFERENCES client_wirecard(id),
)

CREATE TABLE card_wirecard(
    id VARCHAR(255) PRIMARY KEY,
    buy_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (buy_id) REFERENCES buys_wirecard(id),
    card_number BIGINT NOT NULL,
    card_holder VARCHAR(255) NOT NULL,
    card_expiration_date DATE NOT NULL,
    card_cvv INT NOT NULL 
)

