#in the name of Allah
print("in the name of Allah")

def func(n, p):
    s=0
    for i in range(0, n+1):
        s += i**p
    return s

num = int(input("entrer un nombre: "))
pnum = int(input("entrer un nombre: "))
print("S", pnum, "(", num, ")=  ", func(num, pnum), sep="")
