#بسم الله الرحمن الرحيم

print("in the name of Allah")

list = [2, -3, 2424, 52, 42, 4]
S = 0

for i in range(len(list)):
    S = S + list[i]

print("La somme est:", S)

S = 0
for i in list:
    S = S + i
print("La somme est:", S)

print("la taille de la list est: ", len(list))
print("list:", list)
list.append(7)
print("la taille de la list est: ", len(list))
print("list:", list)

print("insert 3458 at list[0]")
list.insert(0, 3458)
print("list:", list)

print("remove 3458 from list")
list.remove(3458)
print("list:", list)

print("pop(2)")
list.pop(2)
print("list:", list)

print("the list has", list.count(8), "'8's")

T = list.copy()
print("T:", T)

print("gonna reverse")
list.reverse()
print("list:", list)

T.clear()
list.clear()

list = [5, 43, 53, 53, 22, 222, 5552, 9]

print("list:", list)
print("list[2:]", list[2:])
print("list[:2]", list[:2])
print("list[-2:]", list[-2:])

squares= []
for x in range(10):
    squares.append(x**2)
print("squares:", squares)

squares = [x**2 for x in range(10)]
print("squares:", squares)
squares.clear()

print("\n\n******************2d list****************\n\n")

list = [[2, 3, 46, 28], [53, -3, 3, 3]]
for i in range(len(list)):
    for j in range(len(list[i])):
        print(list[i][j], end=" ")
    print("")

list = [[i ** j for j in range(3)] for i in range (4)]
for i in range(len(list)):
    for j in range(len(list[i])):
        print(list[i][j], end=" ")
    print("")

