#in the name of Allah

class livre:
    counter = 0
    def __init__(self, titre, auteur, prix, annee):
        self.titre = titre
        self.auteur = auteur 
        self.prix = prix
        self.annee = annee
        livre.counter += 1

    def compter(self):
        return livre.counter

    def afficher(self):
        print('titre:', self.titre)
        print('auteur:', self.auteur)
        print('prix:', self.prix)
        print('annee:', self.annee)

    def type(self):
        if self.prix < 100:
            return 1
        elif self.prix <= 500:
            return 2
        else:
            return 3

