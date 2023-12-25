#بسم الله الرحمن الرحيم

print("بسم الله الرحمن الرحيم")

dict = {'key':'value', 'key1':'value1', 'key2':'valu2', 'key3':'value3'}
print(dict)

dict["key1"] = 'value11'
for elm in dict:
    print(elm)
    print(dict[elm])

for elm in dict.keys():
    print(elm)


for value in dict.items():
    print(value)


