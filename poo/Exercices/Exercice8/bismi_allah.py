#in the name of Allah

import tkinter as tk

print("in the name of Allah")

app = tk.Tk()

"""
label1 = tk.Label(app, text="Number1: ")
label2 = tk.Label(app, text="Number2: ")
label_result = tk.Label(app, text="Result: ")
entry1 = tk.Entry(app)
entry2 = tk.Entry(app)
entry_operation = tk.Entry(app)
"""

A = tk.Tk()
A.title("concatener")
A.geometry("300x400")
A.config(bg="red")

L1 = tk.Label(A, text="saisir votre nom", bg="red")
L1.place(x=10, y=20)
Z1 = tk.Entry(A)
Z1.place(x=90, y=20)

L1 = tk.Label(A, text="saisir votre prenom", bg="red")
L1.place(x=10, y=80)
Z2 = tk.Entry(A)
Z2.place(x=90, y=80)

L3 = tk.Label(A, text="Resultat", bg="red")
L3.place(x=10, y=160)
Z3 = tk.Entry(A)
Z3.place(x=90, y=16)
Z3.config(state="disabled")

def annuler():
    Z3.config(state="Normal")
    Z1.delete(0, len(Z1.get()))
    Z2.delete(0, len(Z2.get()))
    Z3.delete(0, len(Z3.get()))
    Z3.config(state="disabled")

but1 = tk.Buton(A, text="Effacer", command=annuler)
but1.place(x=90, y=120)

def concatener():
    a = Z1.get()
    b = Z2.get()
    c = a + " " + b
    Z3.config(state="normal")
    Z3.insert(0, c)
    Z3.config(state="disabled")

but2 = tk.Button(A, text="concatener", command=concatener)
but2.place(x=150, y=120)



A.mainloop()

