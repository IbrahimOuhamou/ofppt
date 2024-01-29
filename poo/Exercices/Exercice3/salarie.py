#in the name of Allah

class salarie():
    __matricule = None
    __status = None
    __service = None
    __nom = None
    __salaire = None
    
    def __init__(self, matricule, status, service, nom, salaire):
        self.__matricule = matricule
        self.__status = status
        self.__service = service
        self.__nom = nom
        self.__salaire = salaire

    def calcule_salaire(self):
        return self.__salaire * 12

    def affichage(self):
        print("matricule :", self.__matricule)
        print("status :", self.__status)
        print("service :", self.__service)
        print("nom :", self.__nom)
        print("salaire :", self.__salaire)

    def get_salaire(self, s):
        self.__salaire = s

    def get_nom(self):
        return self.__nom

