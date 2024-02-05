#in the name of Allah

import tkinter as tk

print("in the name of Allah")


app = tk.Tk()

label1 = tk.Label(app, text="la ilaha illa Allah")
label2 = tk.Label(app, text="wa Allah Akbar")
label3 = tk.Label(app, text="la ilaha illa Allah")
button = tk.Button(text="concatener")

def mon_concat():
    label3.config(text= label1.cget("text") + " " + label2.cget("text"))

button.config(command=mon_concat)

label1.pack()
label2.pack()
button.pack()
label3.pack()

app.mainloop()



