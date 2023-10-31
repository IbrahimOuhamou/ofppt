#بسم الله الرحمنالرحيم

print("in the name of Allah")

import math


p: int = int(input("enter number: "))

counter: int = 0

for i in range(2, int(math.sqrt(p)) + 1):
    if p % i == 0:
        counter += 1
        break

if counter == 0:
    print(p, "est premier")
else:
    print(p, "n'est pas premier")

