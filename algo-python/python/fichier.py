#بسم الله الرحمن الرحيم

print("بسم الله الرحمن الرحيم")


fichier = open("bismi_allah.txt", "w")
fichier.write("bismi Allah\n")
fichier.write("la ila illa Allah\n")
fichier.write("subhan Allah\n")
fichier.close()

fichier =  open("bismi_allah.txt", "r")
print("*************************le contenu du fichier est***********************")
for line in fichier:
    print(line, end="")
print("******************************fin de fichier*****************************")
fichier.close()

fichier = open("bismi_allah.txt", "a")
fichier.write("bismi Allah\n")
fichier.write("la ila illa Allah\n")
fichier.write("subhan Allah\n")
fichier.close()

fichier = open("data", "w")
fichier.write("Ahmed Omani 24 DEV3000\n")
fichier.write("Simo Imrani 19 DEV26000\n")
fichier.write("Aymen Rahmani 25 DEV34\n")
fichier.close()

data_list = []
fichier = open("data", "r")
#data_list = fichier.read().split("\n")
data_list = fichier.readlines()
for i in range(len(data_list)):
    data_list[i] = data_list[i].split(" ")
print(data_list)
fichier.close()

