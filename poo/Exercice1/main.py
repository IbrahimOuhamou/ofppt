#in the name of Allah

from rectangle import rectangle

if __name__ == '__main__':
    print("in the name of Allah")
    r1 = rectangle(20, 40);
    r1.afficher()
    r1.perimetre()
    print("la surface est:", r1.surface())

    print(r1)
    print("*************************doc******************************")
    print(rectangle.__doc__)
    print("*********************fonctions****************************")
    print(dir(r1))
    print(str(r1))

