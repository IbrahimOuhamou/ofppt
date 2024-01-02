#بسم الله الرحمن الرحيم

print("بسم الله الرحمن الرحيم")

ch = "@"
while ch.isalpha() == False:
    ch = input("donner une chaine: ")

lowers = 0
uppers = 0
voyels_count = 0
voyels = "aeiouy"

for c in ch:
    if c.isupper():
        uppers += 1
    #if c.islower():
    else:
        lowers += 1

ch = ch.lower()

for c in ch:
    if c in voyels:
        voyels_count += 1

print("il'y a", uppers, "letters majuscules")
print("il'y a", lowers, "letters minuscules")
print("il'y a", voyels_count, "voyels")


