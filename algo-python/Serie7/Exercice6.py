# in the name of Allah

print("in the name of Allah")

def m_factoriel(num):
    num = int(num)

    result = 1
    for i in range(num, 0, -1):
        result *= i

    return result

u_num = int(input("enter a number: "))
print(u_num, "! =", m_factoriel(u_num))

