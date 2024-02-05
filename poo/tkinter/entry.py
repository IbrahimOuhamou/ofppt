#in the name of Allah

import tkinter as tk


print("in the name of Allah")

app = tk.Tk()

entry = tk.Entry()
button_insert = tk.Button(text="inna li Allah wa inna ilayhi raji3on, ")
button_delete = tk.Button(text="la ilaha illa Allah")
button_afficher = tk.Button(text="afficher")

def m_insert():
    entry.insert(0, "inna li Allah wa inna ilayhi raji3on, ")

def m_delete():
    c = entry.get()
    entry.delete(0, len(c))
    
def m_afficher():
    label = tk.Label(app, text=entry.get())
    label.pack()

entry.pack()
button_insert.pack()
button_delete.pack()
button_afficher.pack()

button_insert.config(command=m_insert)
button_delete.config(command=m_delete)
button_afficher.config(command=m_afficher)

app.mainloop()


