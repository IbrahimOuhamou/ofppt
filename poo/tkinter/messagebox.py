#in the name of Allah

print("in the name of Allah")

import tkinter as tk
from tkinter import messagebox

window = tk.Tk()

messagebox.showwarning("la ilaha illa Allah", "la ilaha illa Allah")
messagebox.showerror("la ilaha illa Allah", "la ilaha illa Allah")
if(messagebox.askokcancel("la ilaha illa Allah", "la ilaha illa Allah")):
    print(messagebox.askyesnocancel("la ilaha illa Allah", "la ilaha illa Allah"))

window.mainloop()

