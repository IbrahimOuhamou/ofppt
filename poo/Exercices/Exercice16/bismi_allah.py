#in the name of Allah

print("in the name of Allah")
print("may allah forgive us")

import tkinter as tk

app = tk.Tk()

int_var = tk.IntVar()

tk.Label(app, text="nombre1:").place(x=10, y=20)
tk.Label(app, text="nombre2:").place(x=10, y=40)
tk.Label(app, text="resultat").place(x=10, y=60)
entry_1 = tk.Entry(app)
entry_1.place(x=80, y=20)
entry_2 = tk.Entry(app)
entry_2.place(x=80, y=40)
entry_3 = tk.Entry(app)
entry_3.place(x=80, y=60)

def activate():
    okbutton.config(state="normal")

tk.Radiobutton(app, text="Addition",       variable=int_var, value=1, command=activate).place(x=250, y=20)
tk.Radiobutton(app, text="Soustraction",   variable=int_var, value=2, command=activate).place(x=250, y=45)
tk.Radiobutton(app, text="Multiplucation", variable=int_var, value=3, command=activate).place(x=250, y=70)
tk.Radiobutton(app, text="Division",       variable=int_var, value=4, command=activate).place(x=250, y=95)

def clear():
    entry_1.delete(0, tk.END)
    entry_2.delete(0, tk.END)
    entry_3.delete(0, tk.END)

def calcule():
    print("la ilaha illa Allah")
    a = entry_1.get()
    b = entry_2.get()
    if not a.isdigit() or not b.isdigit():
        print("non valid")
        return
    a=int(a)
    b=int(b)
    entry_3.delete(0, tk.END)
    if int_var.get() == 1:
        entry_3.insert(0, a+b)
    if int_var.get() == 2:
        entry_3.insert(0, a-b)
    if int_var.get() == 3:
        entry_3.insert(0, a*b)
    if int_var.get() == 4 and b != 0:
        entry_3.insert(0, a/b)


tk.Button(app, text="Remise a blanc", command=clear).place(x=5, y=100)
okbutton = tk.Button(app, text="OK", command=calcule, state="disabled")
okbutton.place(x=180, y=100)

app.mainloop()

