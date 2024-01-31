#in the name of Allah

class point_t():
    def __init__(self, x=0, y=0):
        self.x = x
        self.y = y

    def __add__(self, p):
        x = self.x + p.x
        y = self.y + p.y
        return point_t(x, y)

    def __str__(self):
        return "(" + str(self.x) + ", " + str(self.y) + ")"


print("in the name of Allah")

vec2_1 = point_t(4, 18)
vec2_2 = point_t(-4, 18)
print(str(vec2_1 + vec2_2))

