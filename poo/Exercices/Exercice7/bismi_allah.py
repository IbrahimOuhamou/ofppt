#in the name of Allah

import tkinter as tk


print("in the name of Allah")


app = tk.Tk()

label1 = tk.Label(text="Zone 1:")
label1.grid(column = 0, row = 0)
entry1 = tk.Entry()
entry1.grid(column = 1, row = 0)

label2 = tk.Label(text="Zone 2:")
label2.grid(column = 0, row = 1)
entry2 = tk.Entry()
entry2.grid(column = 1, row = 1)

label3 = tk.Label(text="Resultat")
label3.grid(column = 0, row = 2)
label4 = tk.Label(text="")
label4.grid(column = 1, row = 2)

button_clear = tk.Button(text="remise a blac")
button_clear.grid(column = 0, row=3)
button_concatener = tk.Button(text="concatener")
button_concatener.grid(column = 1, row=3)

def m_clear():
    c = entry1.get()
    entry1.delete(0, len(c))
    c = entry2.get()
    entry2.delete(0, len(c))
    label4.config(text="")

def m_concatener():
    label4.config(text= entry1.get() + entry2.get())

button_clear.config(command=m_clear)
button_concatener.config(command=m_concatener)

app.mainloop()


