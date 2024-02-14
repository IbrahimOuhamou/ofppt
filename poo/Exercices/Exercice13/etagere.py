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
        if self.max < pos:
            return None
        return self.liste[pos]


