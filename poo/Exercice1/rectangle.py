#in the name of Allah

class rectangle:
    """
    in the name of Allah
    rectangle class est un class
    """
    cp = 0
    def __init__(self, long1, larg1):
        self.long = long1
        self.larg = larg1
        rectangle.cp += 1

    def afficher(self):
        print("longueur =", self.long, "larfgueur =", self.larg)

    def perimetre(self):
        p = (self.long + self.larg) * 2
        print("le perimetre est:", p)

    def surface(self):
        s = self.long * self.larg
        return s

    def __str__(self):
        return "longueur: " + str(self.long) + " largueur: " + str(self.larg)
