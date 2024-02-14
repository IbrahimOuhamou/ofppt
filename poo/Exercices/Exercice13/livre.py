#in the name of Allah

class livre_t():
    def __init__(self, code, titre, nom_auteur, date_edition, editeur, pages):
        self.code = code
        self.titre = titre
        self.nom_auteur = nom_auteur
        self.date_edition = date_edition
        self.editeur = editeur
        self.pages = pages

    def __str__(self):
        return "code " + self.code + "titre: " + self.titre + "nom d'auteur: " + self.nom_auteur + "date edition: " + self.date_edition + "editeur: " + self.editeur + "pages: " + self.pages



