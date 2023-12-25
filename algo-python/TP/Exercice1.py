# بسم الله الرحمن الرحيم

print("بسم الله الرحمن الرحيم")


def greaters_sum(list):
    L = [0 for i in range(len(list))]

    for i in range(len(list)):
        for j in range(0, len(list)):
            if list[j] > list[i]:
                L[i] += 1

    return L


lista = [2**i for i in range(7)]
lista_tanya = greaters_sum(lista)

print(lista)
print(lista_tanya)

