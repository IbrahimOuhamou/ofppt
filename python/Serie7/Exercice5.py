# in the name of Allah

print("in the name of Allah")

def is_cubic(num):
    num_str = str(num)

    sum = 0

    for i in range(0, len(num_str)):
        sum += int(num_str[i]) ** 3

    if sum == num:
        return 1
    else:
        return 0


u_num = int(input("enter a number: "))
print("la resultat de la fonction est:", is_cubic(u_num))


