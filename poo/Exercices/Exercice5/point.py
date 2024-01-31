#in the name of Allah

class point_t():
    nb = 0
    def __init__(self, abs=0, ord=0):
        self.__abs = abs
        self.__ord = ord
        point_t.nb += 1

    def get_abs(self):
        return self.__abs

    def get_ord(self):
        return self.__ord

    def __str__(self):
        return "(" + str(self.__abs) + ", " + str(self.__ord) + ")"

    def __eq__(self, p):
        if self.__abs == p.get_abs() and self.__ord == p.get_ord():
            return True
        else:
            return False
            

