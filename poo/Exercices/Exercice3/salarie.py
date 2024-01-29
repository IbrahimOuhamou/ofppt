#in the name of Allah

class salarie():
    _matricule = None
    _status = None
    _service = None
    _nom = None
    _salaire = None
    
    def __init__(self, matricule, status, service, nom, salaire):
        self._matricule = matricule
        self._status = status
        self._service = service
        self._nom = nom
        self._salaire = salaire

    def calcule_salaire(self):
        return self._salaire * 12

    def affichage(self):
        print("matricule :", self._matricule)
        print("status :", self._status)
        print("service :", self._service)
        print("nom :", self._nom)
        print("salaire :", self._salaire)

