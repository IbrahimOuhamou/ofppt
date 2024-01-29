#in the name of Allah

class pokimon():
    def __init__(self, nom, poids):
        self.nom = nom
        self.poids = poids

class pokimon_sportif(pokimon):
    def __init__(self, nom, poids, n_pattes, freq_cardique):
        pokimon.__init__(self, nom, poids)
        self.n_pattes = n_pattes
        self.freq_cardique = freq_cardiqu
    #self.vitesse = pself.oids * tself.aille * 3

class pokimon_casanier(pokimon):
    def __init__(self, nom, poids, n_pattes, taille, regarde_temps):
        pokimon.__init__(self, nom, poids)
        self.n_pattes = n_pattes
        self.taille = taille
        self.regarde_temps = regard_temps
    #self.vitesse = self.n_pattes * self.taille * 3

class pokimon_mer(pokimon):
    def __init__(self, nom, poids, nageoire):
        pokimon.__init__(self, nom, poids)
        self.nageoire = nageoire
    #self.vitesse = self.poids / 25 * self.nageoire

