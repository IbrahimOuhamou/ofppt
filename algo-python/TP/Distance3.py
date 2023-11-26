#in the name of Allah

print("in the name of Allah")

remp = 0

def remplir(T):
    n = int(input("donner la taille du tableau: "))
    T.clear()
    for i in range(0, n):
        p = int(input("entrer un valeur: "))
        T.append(p)
    return n



def afficher(T, n):
    if(remp == 0):
        print("remplir le tableau: ")
        remplir(T)
    for i in range(0, n):
        print(T[i], end=" ")
    print("")

def menu_show():
    print("        MENU        ")

    choice = 0

    while choice > 8 or choice < 1:
        print("1. Remplir tableau")
        print("2. Afficher tableau")
        print("3. Recherche Min")
        print("4. Recherche Max")
        print("5. Tri par insertion")
        print("6. Tri par selection")
        print("7. Tri par permutaion")
        print("8. Quitter")
        choice = int(input("Entrer votre choix:(1-8) "))

    return choice

def search_min(T, n):
    if (remp == 0):
        print("remplir le tableau: ")
        remplir(T)
    min = T[0]
    for i in range(0, n):
        if T[i] < min:
            min = T[i]
    print("min = ", min)

def search_max(T, n):
    if (remp == 0):
        print("remplir le tableau: ")
        remplir(T)
    max = T[0]
    for i in range(0, n):
        if T[i] > max:
            max = T[i]
    print("max = ", max)

def insertion(T, n):
    for i in range(1, n):
        tmp = T[i]
        j = i - 1
        while(j > 0 and T[j] > tmp):
            T[j + 1] = T[j]
            j -= 1
        T[j + 1] = tmp

def selection(T, n):
    for i in range(0, n):
        min = i
        for j in range(i, n):
            if(T[j] < T[min]):
                min = j

        tmp = T[i]
        T[i] = T[min]
        T[min] = tmp


T = []
taille = 0
choice = menu_show()
while choice < 8 and choice > 0 :
    if choice == 1:
        taille = remplir(T)
        remp = 1
    elif choice == 2:
        afficher(T, taille)
    elif choice == 3:
        search_min(T, taille)
    elif choice == 4:
        search_max(T, taille)
    elif choice == 5:
        insertion(T, taille)
    elif choice == 6:
        selection(T, taille)
    elif choice == 7:
        permutation(T, taille)
    elif choice == 8:
        break

    choice = menu_show()

print("au revoir")

