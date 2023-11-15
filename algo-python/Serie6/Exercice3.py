# in the name of Allah

print("in the name of Allah")

n: int = int(input("donner le nombre: "))
result: int = 0

for i in range(1, n+1, 2):
    result += i

print("la somme des primiers entirers impaires est:", result)
