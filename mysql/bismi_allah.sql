-- in the name of Allah

CREATE DATABASE IF NOT EXISTS bismi_allah_db;

USE bismi_allah_db;

CREATE TABLE IF NOT EXISTS bismi_allah_table( id INT PRIMARY KEY AUTO_INCREMENT,
								nom VARCHAR(21));

INSERT INTO bismi_allah_table (nom) VALUES  ("la ilaha illa Allah"),
											("Allah akbar");

select * from bismi_allah_table;
