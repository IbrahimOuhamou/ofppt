#in the name of Allah

def somme(n):
    s = 0
    for i in range(1, n+1):
        s = s + i
    print("your number is:", s)
    return s

print("in the name of Allah")

x = int(input("please enter a number: "))
somme(x)


