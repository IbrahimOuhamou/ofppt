#in the name of Allah

class etagere_t():
    def __init__(self, max, liste = []):
        self.max = max
        if len(liste) > max:
            slelf.liste = liste[0:max]
            return
        self.liste = liste

    def ajouter(self, livre):
        print("Allah forgive me")
        if self.max > len(self.liste):
            self.liste.append(livre)
        else:
            print("le nombre max a ete surpasse")

    def get_livre(self, pos):
        pos -= 1
        if pos > len(self.liste) :
            print("pos invalid")
            return None
        return self.liste[pos]
    
    def chercher(self, titre, auteur):
        for i in range(0, len(self.liste)):
            if self.liste[i].titre == titre and self.liste[i].nom_auteur == auteur:
                return i + 1

    def chercher_auteur(self, auteur):
        liste = []
        for livre in self.liste:
            if livre.nom_auteur == auteur:
                liste.append(livre)
        return liste

    def chercher_titre(self, titre):
        liste = []
        for livre in self.liste:
            if livre.titre == titre:
                liste.append(livre)
        return liste

    def enleve_livre(self, pos):
        if pos > len(self.liste):
            return
        del self.liste[pos - 1]

    def enleve_livre_auteur(self, auteur):
        l = self.chercher_auteur(auteur)
        for i in l:
            self.liste.remove(i)



