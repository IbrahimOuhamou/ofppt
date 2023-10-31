#بسم الله الرحمنالرحيم

print("in the name of Allah")

p: int = int(input("enter number: "))

summ = 0

for i in range(1, p):
    if p % i == 0:
        summ += i

if summ == p:
    print(p, "est un nombre parfait")
else:
    print(p, "n'est pas un nomber parfait")

