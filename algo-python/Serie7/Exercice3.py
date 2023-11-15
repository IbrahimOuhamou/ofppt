#in the name of Allah
print("in the name of Allah")

def chif_number(num):
    i = 1
    while num > 10:
        i += 1
        num = num // 10
    return i
    #return len(str(num))

num = int(input("entrer un nombre: "))
print(num, "a", chif_number(num), "chiffres")
