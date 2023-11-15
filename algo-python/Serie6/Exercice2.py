# in the name of Allah

print("in the name of Allah")

n = int(input("entrer le nombre du nombres: "))

result: int = 0

for i in range(1, n+1):
    result += i

print("la somme des", n, "premiers chiffres est:", result)
