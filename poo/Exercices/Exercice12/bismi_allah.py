#in the name of Allah

import tkinter as tk

app = tk.Tk()

tk.Entry()

label_name = tk.Label(app, text="nom")
label_name.place(x=10, y=5)
entry_name = tk.Entry(app)
entry_name.place(x=60, y=5)

label_password = tk.Label(app, text="mot de pass")
label_password.place(x=10, y=5)
entry_password = tk.Entry(app)
entry_password.place(x=60, y=5)

app.mainloop()

