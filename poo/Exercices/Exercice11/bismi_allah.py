#in the name of Allah

import tkinter as tk
import PIL

print("in the name of Allah")

login_window = tk.Tk()
login_window.geometry("400x200")

login_label_name = tk.Label(login_window, text="nom:")
login_label_name.place(x=20, y=20)
login_entry_name = tk.Entry(login_window)
login_entry_name.place(x=80, y=20)

login_label_password = tk.Label(login_window, text="mot de pass:")
login_label_password.place(x=0, y=40)
login_entry_password = tk.Entry(login_window)
login_entry_password.place(x=80, y=40)

login_button_clear = tk.Button(login_window, text="effacer")
login_button_clear.place(x=80, y=60)
login_button_connect = tk.Button(login_window, text="Se connecter")
login_button_connect.place(x=150, y=60)

def clear():
    login_entry_name.delete(0, tk.END)
    login_entry_password.delete(0, tk.END)

def connect():
    if login_entry_name.get() != "User" or login_entry_password.get() != "123":
        tk.Label(login_window, text="mot de pass incorrect", fg="red").place(x=80, y=90)
        return
    print("alhamdo li Allah")
    login_window.destroy()

    window = tk.Tk()
    window.title("la ilaha illa Allah")
    tk.Label(window, text="assalamo alaykom User").place(x=50, y=50)
    window.mainloop()

login_button_clear.config(command=clear)
login_button_connect.config(command=connect)

login_window.mainloop()


