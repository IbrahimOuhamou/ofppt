#بسم الله الرحمن الرحيم

print("بسم الله الرحمن الرحيم")

def saisir(file):
    file.write(input("donner le CIN: "))
    file.write(";")
    file.write(input("donner le nom: "))
    file.write(";")
    file.write(input("donner le prenom: "))
    file.write(";")
    file.write(input("donner l'age: "))
    file.write(";")
    file.write(input("donner la decision (admi, refuse, ajourne): "))
    file.write('\n')

def admis():
    file = open("concours.txt", "r")
    admis = open("admis.txt", "w")
    file_lines = file.readlines()
    for i in range(len(file_lines)):
        file_lines[i] = file_lines[i].split(";")
    for data in file_lines:
        if data[4] == 'admi\n':
            #admis.write(";".join(data))
            admis.write(data[0]+";"+data[1]+";"+data[2]+";"+data[3]+"\n")
    admis.close()

def attente():
    file = open("admis.txt", "r")
    attents = open("attente.txt", "w")
    file_lines = file.readlines()
    for i in range(len(file_lines)):
        file_lines[i] = file_lines[i].split(";")
    for data in file_lines:
        age = int(data[3][:-1])
        if age > 30:
            attents.write(";".join(data))
    file.close()
    attents.close()

data = open("concours.txt", "w")

n = int(input("donner le nombre des eleves: "))
for i in range(n):
    saisir(data)
data.close()

admis()
attente()

