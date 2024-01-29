#in the name of Allah

class etre_vivant():
    def __init__(self, n_cellules):
        self.n_cellules = n_cellules
    def respirer(self):
        print("respirer")


class person():
    def __init__(self, nom1, cin1, date_naissance1):
        self.nom = nom1
        self.cin = cin1
        self.date_naissance = date_naissance1

    def afficher(self):
        print(self.nom, self.cin, self.date_naissance)

    def age(self):
        a = 2024 - self.date_naissance
        return a

class etudiant(etre_vivant, person):
    def __init__(self, n_cellules, nom1, cin1, date_naissance1, note1, note2):
        #super().__init__(nom1, cin1, date_naissance1):
        person.__init__(self, nom1, cin1, date_naissance1)
        etre_vivant.__init__(self, n_cellules)
        self.note1 = note1
        self.note2 = note2

    def afficher(self):
        super().afficher()
        #person.afficher(self)
        print(self.note1, self.note2)

