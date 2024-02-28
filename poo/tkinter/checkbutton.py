#in the name of Allah

print("in the name of Allah")

import tkinter as tk

app = tk.Tk()

app.geometry("500x300")
app.title("bismi Allah")

label_language = tk.Label(app, text="langage: ")
label_language.place(x=10, y=10)

def fonction():
    res=""
    if int_var_1.get() == 1:
        res += "Python"
    if int_var_2.get() == 1:
        res += "Java"
    print("Vous aver selectioneer:", res)

int_var_1 = tk.IntVar()
int_var_2 = tk.IntVar()
check_button_1 = tk.Checkbutton(app, text="Python", variable=int_var_1)
check_button_2 = tk.Checkbutton(app, text="Java", variable=int_var_2)
check_button_1.place(x=100, y=10)
check_button_2.place(x=100, y=60)

button_1 = tk.Button(app, text="Valider", command=fonction)
button_1.place(x=260, y=140)

app.mainloop()

