#in the name of Allah

import tkinter as tk

app = tk.Tk()

tk.Entry()

label_name = tk.Label(app, text="nom")
label_name.place(x=10, y=0)
entry_name = tk.Entry(app)
entry_name.place(x=100, y=0)

label_password = tk.Label(app, text="mot de pass")
label_password.place(x=10, y=20)
entry_password = tk.Entry(app)
entry_password.place(x=100, y=20)

button_clear = tk.Button(app, text="affacer")
button_clear.place(x=100, y=40)

button_connect = tk.Button(app, text="connect")
button_connect.place(x=180, y=40)

text_zone = tk.Text(app, width=30, height=10)
text_zone.place(x=100, y=70)

def clear():
    entry_name.delete(0, tk.END)
    entry_password.delete(0, tk.END)

def connect():
    if entry_name.get() == "" or entry_password.get() == "":
        return
    text_zone.insert(tk.INSERT, "Votre login: " + entry_name.get() + "\nVotre mot de pass: " + entry_password.get() + "\n")

button_clear.config(command=clear)
button_connect.config(command=connect)

app.mainloop()

