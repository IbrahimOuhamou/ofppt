-- بسم الله الرحمن الرحيم
-- la ilaha illa Allah Mohammed Rassoul Allah

CREATE DATABASE IF NOT EXISTS MaBase;

use MaBase;


DROP TABLE IF EXISTS Employes;
CREATE TABLE Employes (
	empl_id INT,
	nom VARCHAR(100),
	prenom VARCHAR(100),
	age INT,
	salaire DECIMAL(10, 2)
);

DROP TABLE IF EXISTS Division;

CREATE TABLE Division(
	div_id INT PRIMARY KEY,
	nom VARCHAR(100),
	NbrEmp INT,
	empl_id INT,
	FOREIGN KEY (empl_id) REFERENCES Employes(empl_id)
);

INSERT INTO Employes (empl_id, nom, prenom, age, salaire) VALUES 
	(1, 'Dupont', 'Jean', 30, 2500.00),
	(2, 'Dup', 'Ali', 25, 5000.00);

ALTER TABLE Division ADD COLUMN adresse VARCHAR(255);

-- ALTER TABLE Division ADD CONSTRAINT fk_division FOREIGN KEY (empl_id) REFERENCES Employes(id);
-- ALTER TABLE Division ADD CONSTRAINT fk_division FOREIGN KEY (empl_id) REFERENCES Employes(id);


ALTER TABLE Employes ADD CONSTRAINT check_age CHECK (age >= 18);

SELECT * FROM Division;
SELECT * FROM Employes;

