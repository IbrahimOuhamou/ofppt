# in the name of Allah

print("in the name of Allah")

def m_factoriel(num :int):
    num = int(num)

    result :int = 1
    for i in range(num, 0, -1):
        result *= i

    return result

u_num :int = int(input("enter a number: "))
print(u_num, "! =", m_factoriel(u_num))

