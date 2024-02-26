#in the name of Allah

import tkinter as tk
import re

print("in the name of Allah")

regex_name = "^[A-Z]{1}[a-zA-Z0-9_.-]{2,9}$"
regex_tel = "(06|07)[0-9]{8}"
regex_email = "^[a-zA-Z]+[a-zA-Z0-9_.-]+@[a-zA-Z]+[a-zA-Z_.-]+\.[a-zA-Z]{1,3}$"

login_window = tk.Tk()
login_window.geometry("400x200")

login_label_name = tk.Label(login_window, text="nom:")
login_label_name.place(x=0, y=20)
login_entry_name = tk.Entry(login_window)
login_entry_name.place(x=80, y=20)

login_label_email = tk.Label(login_window, text="email: ")
login_label_email.place(x=0, y=40)
login_entry_email = tk.Entry(login_window)
login_entry_email.place(x=80, y=40)

login_label_telephoone = tk.Label(login_window, text="telephoone: ")
login_label_telephoone.place(x=0, y=60)
login_entry_telephoone = tk.Entry(login_window)
login_entry_telephoone.place(x=80, y=60)

login_button_clear = tk.Button(login_window, text="effacer")
login_button_clear.place(x=80, y=100)
login_button_connect = tk.Button(login_window, text="Se connecter")
login_button_connect.place(x=150, y=100)

def clear():
    login_entry_name.delete(0, tk.END)
    login_entry_email.delete(0, tk.END)
    login_entry_telephoone.delete(0, tk.END)

def connect():
    valid = True
    if not re.search(regex_name, login_entry_name.get()):
        tk.Label(login_window, text="nom invalid", fg="red").place(x=250, y=20)
        valid = False
    if not re.search(regex_email, login_entry_email.get()):
        tk.Label(login_window, text="email invalid", fg="red").place(x=250, y=40)
        valid = False
    if not re.search(regex_tel, login_entry_telephoone.get()):
        tk.Label(login_window, text="telephone inavalid", fg="red").place(x=250, y=60)
        valid = False
    if not valid:
        return
    print("alhamdo li Allah")
    name = login_entry_name.get()
    login_window.destroy()

    window = tk.Tk()
    window.title("la ilaha illa Allah")
    tk.Label(window, text="assalamo alaykom " + name).place(x=50, y=50)
    window.mainloop()

login_button_clear.config(command=clear)
login_button_connect.config(command=connect)

login_window.mainloop()


