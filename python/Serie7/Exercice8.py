# in the name of Allah

print("in the name of Allah")

def U(num):
    if (num == 1) or (num == 2):
        return 1
    print(U(num - 1), U(num - 2), ":", num -1, num -2)
    return U(num - 1) + U(num -2)

num = int(input("enter a number: "))

print("U", num, "=", U(num))

