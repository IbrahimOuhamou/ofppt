#in the name of Allah

print("in the name of Allah")

import tkinter as tk
app = tk.Tk()

def fonction():
    res = ""
    if var.get() == 1:
        res += "Python "
    if var.get() == 2:
        res += "Java "
    if var.get() == 3:
        res += "PHP "
    print("vous avez selectionner:", res)

var = tk.IntVar() # tk.StringVar() pour utuliser "chaine"
radio1 = tk.Radiobutton(app, text="Python", variable=var, value=1)
radio1.place(x=20, y=20)
radio2 = tk.Radiobutton(app, text="Java", variable=var, value=2)
radio2.place(x=20, y=60)
radio3 = tk.Radiobutton(app, text="PHP", variable=var, value=3)
radio3.place(x=20, y=100)

button1 = tk.Button(app, text="valider", command=fonction)
button1.place(x=35, y=150)

app.mainloop()

