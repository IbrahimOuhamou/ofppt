# in the name of Allah

print("in the name of Allah")

def is_cubic(num):
    temp_num = num
    sum = 0

    while temp_num != 0:
        sum += (temp_num % 10) ** 3
        temp_num = temp_num // 10

    if sum == num:
        return 1
    else:
        return 0


u_num = int(input("enter a number: "))
print("la resultat de la fonction est: ", end="")
if is_cubic(u_num) == 1:
    print("cubique")
else:
    print("pas cubique")


