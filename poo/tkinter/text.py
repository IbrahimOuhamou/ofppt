#in the name of Allah

import tkinter as tk


app = tk.Tk()

label = tk.Label(app, text="la ilaha illa Allah")
label.place(x=0, y=10)

text = tk.Text(app, height=10, width=30)
text.place(x=100, y=10)


app.mainloop()


