#in the name of Allah

from salarie import salarie

if __name__ == '__main__':
    print("in the name of Allah")
    S1 = salarie(1919, 'status', 'service', 'tazi', 999.9)
    print("")
    S1.affichage()
    print("")
    print("le salaire de", S1._nom, "est", S1.calcule_salaire())
