# in the name of Allah

print("in the name of Allah")

note = float(input("donner la moyenne: "))


if note < 0 or note > 20:
    print("note invalid")
elif 16 <= note:
    print("tres bien")
elif 14 <= note:
    print("Bien")
elif 12 <= note:
    print("Assez bien")
elif 10 <= note:
    print("Passable")
else:
    print("non passable")
