#بسم الله الرحمن الرحيم

print("بسم الله الرحمن الرحيم")

ch = 'بسم الله الرحمن الرحيم'

for i in range(len(ch)):
    print(ch[i], end='')
print()
for char in ch:
    print(char, end='')

print()
print(ch[4:])
print(ch[:9])
print(ch[4:9])
ch = ch[:3] + ch[4:]
print(ch)

print("ه is at index", ch.index('ه'))
print("ل a", ch.count('ل'), "de reccurences")
print("'الله', starts at index", ch.find("الله"))

print(ch.isalpha())
print(ch.isdigit())
print(ch.isspace())
print(ch.isupper())
print(ch.islower())

print("************list******************")
list = ['a', 'b', 'c', 'd', 'e']
ch = ':'.join(list)
print(ch)

ch = "a;b;c;a;b;c"
list = ch.split(';')
print(list)
del list
print(list("bismiAllah"))

