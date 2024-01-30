#in the name of Allah

class pokimon():
    def __init__(self, nom, poids):
        self.nom = nom
        self.poids = poids
    def vitesse(self):
        pass
    def __str__(self):
        return "je suis le pokimon " + str(self.nom) + " mon poids est " + str(self.poids) + "kg"

class pokimon_sportif(pokimon):
    def __init__(self, nom, poids, n_pattes, freq_cardique):
        pokimon.__init__(self, nom, poids)
        self.n_pattes = n_pattes
        self.freq_cardique = freq_cardique
    def vitesse(self):
        return self.poids * self.taille * 3
    def __str__(self):
        return pokimon.__str__(self) + " mon nombre des pattes est " + str(self.n_pattes) + " ma frequance cardique est " + str(self.freq_cardique) + " ma vitesse est " + str(self.vitesse())

class pokimon_casanier(pokimon):
    def __init__(self, nom, poids, n_pattes, taille, regarde_temps):
        pokimon.__init__(self, nom, poids)
        self.n_pattes = n_pattes
        self.taille = taille
        self.regarde_temps = regard_temps
    def vitesse(self):
        return self.n_pattes * self.taille * 3
    def __str__(self):
        return pokimon.__str__(self) + " mon nombre des pattes est " + str(self.n_pattes) + " ma taille est " + str(self.taille) + "m mon temps de regard " + str(self.regarde_temps) + " ma vitesse est " + str(self.vitesse())

class pokimon_mer(pokimon):
    def __init__(self, nom, poids, nageoire):
        pokimon.__init__(self, nom, poids)
        self.nageoire = nageoire
    def vitesse(self):
        return self.poids / 25 * self.nageoire
    def __str__(self):
        return pokimon.__str__(self) + " mon nombre des pattes est " + str(self.n_pattes) + " nageoire " + str(self.nageoire) + " ma vitesse est " + str(self.vitesse())

