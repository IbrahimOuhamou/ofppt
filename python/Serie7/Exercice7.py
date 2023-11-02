# in the name of Allah

print("in the name of Allah")

def is_odd(num :int):
    return num % 2 != 0

def fact(num :int):
    if(num == 1):
        return num
    else:
        return num * fact(num - 1)

def func_S(num :int):
    if not is_odd(num) or num < 5:
        return -1
    
    result :int = 0

    for i in range(1, num + 1):
        result += 1 / fact(i)

    return result


u_num :int = int(input("please enter a number: "))

print("S(", u_num, ") = " ,func_S(u_num), sep = "")

