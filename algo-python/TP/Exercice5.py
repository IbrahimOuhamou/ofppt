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

def admis(file):
    admis = open("admis.txt", "w")
    file_lines = file.readlines()
    for i in range(len(file_lines)):
        file_lines[i] = file_lines[i].split(";")
    for data in file_lines:
        if data[4] == 'admi\n':
            #admis.write(";".join(data))
            admis.write(data[0]+";"+data[1]+";"+data[2]+";"+data[3]+"\n")
    admis.close()


data = open("concours.txt", "w")

n = int(input("donner le nombre des eleves: "))
for i in range(n):
    saisir(data)
data.close()

print("\n********file content*****")
data = open("concours.txt", "r")
lines = data.readlines()
print(lines)
data.close()
print("********file end*********")

admis(open("concours.txt", "r"))

