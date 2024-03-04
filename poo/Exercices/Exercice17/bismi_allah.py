#in the name of Allah

print("in the name of Allah")

import tkinter as tk

window = tk.Tk()
window.geometry("300x300")

menu_text = ['Poisson', 'Salade', 'Fromage', 'Dessert', 'Cafe', 'Jus']
menu_intvars = []
menu_checkbuttons = []
for i in range(len(menu_text)):
    menu_intvars.insert(i, tk.IntVar())
for i in range(len(menu_text)):
    menu_checkbuttons.insert(i, tk.Checkbutton(window, text=menu_text[i], variable=menu_intvars[i]))
    menu_checkbuttons[i].place(x = 20 + 90*(i%2), y = 30 + 20*i - (20 * (i % 2)))

text = tk.Text(window, height=10, width=10)
text.place(x=200, y=20)


def raz():
    text.delete(0.0, tk.END)
    #for var in menu_intvars:
        #var.set(0)
    for var in menu_checkbuttons:
        var.deselect()
        

def ok():
    text.delete(0.0, tk.END)
    for i in range(len(menu_text)):
        if(menu_intvars[i].get() == 1):
            text.insert(tk.INSERT, menu_text[i] + "\n")

def fermer():
    window.destroy()

tk.Button(window, text="RAZ", command=raz).place(x=20, y=200)
#tk.Button(window, text="OK", command=ok).place(x=100, y=200)
for button in menu_checkbuttons:
    button.config(command=ok)
tk.Button(window, text="fermer", command=fermer).place(x=200, y=200)

window.mainloop()


