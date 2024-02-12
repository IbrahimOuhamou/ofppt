#in the name of Allah

import tkinter as tk


app = tk.Tk()

label = tk.Label(app, text="la ilaha illa Allah")
label.place(x=0, y=10)

text = tk.Text(app, height=10, width=30)
text.place(x=100, y=10)

def text_clear():
    text.delete(0.0, tk.END)

tk.Button(app, text="la ilaha illa Allah", command=text_clear).place(x=100, y=180)

app.mainloop()


