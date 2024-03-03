#in the name of Allah

print("in the name of Allah")

class my_exception(Exception):
    def __init__(self, msg):
        self.Msg = msg
    def __str__(self):
        return str(self.Msg)

a = int(input("donner a: "))
b = int(input("donner b: "))

try:
    print("a/b ==", a/b)
except my_exception as e:
    print(type(e))

print("fin de program")

