#in the name of Allah

print("in the name of Allah")

import csv
import json

class person_t():
    def __init__(self, nom, prenom, age):
        self.nom = nom
        self.prenom = prenom
        self.age = age

    def __str__(self):
        return self.nom + ";" + self.prenom + ";" + str(self.age)


f = open("bismi_allah.txt", "w")

for i in range(10):
    f.write("bismi allah;la iaha illa Allah;Allah akbar\n")
f.close()

f = open("bismi_allah.txt", "r")
print("le contenue de fichier")
print("========================================read()=========================================")
print(f.read(), end="")
print("=======================================================================================")
f.close()

f = open("bismi_allah.txt", "r")
print("======================================readline()=======================================")
print(f.readline(), end="")
print("=======================================================================================")
f.close()

f = open("bismi_allah.txt", "r")
print("=====================================readlines()=======================================")
print(f.readlines())
print("=======================================================================================")
f.close()

print()
print("***************************************************************************************")
print("***************************************************************************************")
print()

person_1 = person_t("Ibrahim", "Ayoubi", 18)
person_2 = person_t("Hassan", "nwar", 20)
person_3 = person_t("Ahmed", "zrek", 19)

f = open("person_t.txt", "w")
f.write(str(person_1) + "\n")
f.write(str(person_2) + "\n")
f.write(str(person_3) + "\n")
f.close()

print("=======================================================================================")
f = open("person_t.txt", "r")
print(f.read(), end="")
f.close()
print("=======================================================================================")


print("***************************************************************************************")
print("**************************************CSV files****************************************")
print("***************************************************************************************")

f = open("bismi_allah.csv", "w")
csv_writer = csv.writer(f, delimiter=";")
csv_writer.writerow(person_1.__str__().split(";"))
csv_writer.writerow(person_2.__str__().split(";"))
csv_writer.writerow(person_3.__str__().split(";"))
f.close()

f = open("bismi_allah.csv", "r")
csv_reader = csv.reader(f, delimiter=";")
for line in csv_reader:
    print(line)
f.close()

print("***************************************************************************************")
print("*************************************JSON files****************************************")
print("***************************************************************************************")

dictionaire = {"bismi allah":"in the name of Allah", "la ilaha illa Allah":"there is no diety worthy of worship exept of Allah"}
f = open("bismi_allah.json", "w")
ch = json.dumps(dictionaire)
f.write(ch)
f.close()

f = open("bismi_allah.json", "r")
x = json.loads(f.read())
print(x)
f.close()

