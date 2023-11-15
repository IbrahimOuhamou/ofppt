#in the name of Allah
print("in the name of Allah")

def m_pgcd(a, b):
    if(0 >= a or 0 >= b):
        return 0
    i = 1
    while(i <= a and i<= b):
        if (a % i == 0) and (b % i == 0):
            pgcd = i
        i += 1
    return pgcd

x = int(input("enter fisrt number:"))
y = int(input("enter second number:"))

print("le pgcd de", x, "et", y, "est:", m_pgcd(x, y))

