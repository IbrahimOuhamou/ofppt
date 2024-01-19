#in the name of Allah

from livre import livre

if __name__ == '__main__':
    print("in the name of Allah")
    livre1 = livre('l1', 'a1', 200, 2012)
    livre1.afficher()
    print('type', livre1.type())

    livre2 = livre('l2', 'a2', 200, 2022)
    livre2.afficher()
    print('type', livre2.type())

    livre3 = livre('l3', 'a3', 200, 2032)
    livre3.afficher()
    print('type', livre3.type())

    livre4 = livre('l4', 'a4', 200, 2042)
    livre4.afficher()
    print('type', livre4.type())

    print('le nombre des instances est', livre1.compter())
    print('le nombre des instances est', livre.counter)


