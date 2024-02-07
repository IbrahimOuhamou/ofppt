#in the name of Allah

class Auteur():
    counter = 0
    def __init__(self, id, nom, annee):
        Auteur.counter += 1
        self.__id = id
        self.nom = nom
        self.annee = annee


    def get_id(self):
        return self.id
    def set_id(self, id):
        self.__id = id

    @property
    def id(self):
        """The id property."""
        return self.__id
    @id.setter
    def id(self, id):
        self.__id = id




