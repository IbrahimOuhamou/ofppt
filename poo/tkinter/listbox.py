#in the name of Allah

import tkinter as tk

app = tk.Tk()

li = tk.Listbox(app)
li.place(x=10, y=10)

li.insert(tk.END, "la ilaha illa Allah")
li.insert(0, "in the name of Allah")
li.insert(tk.END, "Alah akbar")

li.config(selectmode="multiple")

def sel():
    print(li.curselection())
tk.Button(app, text="in the name of Allah", command=sel).place(x=0, y=0)

app.mainloop()

