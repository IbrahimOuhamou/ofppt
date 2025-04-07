-- بسم الله الرحمن الرحيم
-- la ilaha illa Allah Mohammed Rassoul Allah

CREATE FUNCTION getSolde(id_compte) RETURNS INT
BEGIN
    DECLARE return_value INT;
    SELECT Solde INTO return_value FROM COMPTE WHERE Num_Compte = id_compte;
    RETURN return_value;
END \\

