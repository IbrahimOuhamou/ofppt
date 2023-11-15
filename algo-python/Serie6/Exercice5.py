# in the name of Allah

print("in the name of Allah")

n: int = int(input("donner un nombre: "))
result: int = 1

for i in range(1, n + 1):
    result *= i

print(n, "! = ", result, sep="")
