#in the name of Allah

from classes import person, etudiant

if __name__ == "__main__":
    e1 = etudiant(10000, 'rbati', 'A3712', 2000, 13, 17)
    e1.afficher()
    e1.respirer()
    print(e1.nom, "a", e1.n_cellules, "cellules")

