#in the name of Allah

import tkinter as tk


print("in the name of Allah")

app = tk.Tk()

entry = tk.Entry()
button_insert = tk.Button(text="inna li Allah wa inna ilayhi raji3on, ")
button_delete = tk.Button(text="la ilaha illa Allah")

def m_insert():
    entry.insert(0, "inna li Allah wa inna ilayhi raji3on, ")

def m_delete():
    c = entry.get()
    entry.delete(0, len(c))
    

entry.pack()
button_insert.pack()
button_delete.pack()

button_insert.config(command=m_insert)
button_delete.config(command=m_delete)

app.mainloop()


