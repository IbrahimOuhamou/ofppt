#in the name of Allah

import tkinter as tk

app = tk.Tk()

app.geometry("400x100")
app.config(bg="purple")

def color_change():
    if int_var_color.get() == 1:
        app.config(bg="red")
    if int_var_color.get() == 2:
        app.config(bg="green")
    if int_var_color.get() == 3:
        app.config(bg="blue")

def fonction():
    print("in the name of Allah")
    if int_var_checkbox.get() == 1:
        app.geometry("400x200")
    else:
        app.config(bg="purple")
        app.geometry("400x100")


int_var_checkbox = tk.IntVar()
check_button = tk.Checkbutton(app, text="Afficher les couleurs", variable=int_var_checkbox, command=fonction)
check_button.place(x=0, y=0)


int_var_color = tk.IntVar()
radio1 = tk.Radiobutton(app, text="rouge", variable=int_var_color, value=1, command=color_change)
radio2 = tk.Radiobutton(app, text="vert", variable=int_var_color, value=2, command=color_change)
radio3 = tk.Radiobutton(app, text="bleu", variable=int_var_color, value=3, command=color_change)
radio1.place(x=0, y=100)
radio2.place(x=70, y=100)
radio3.place(x=140, y=100)

def qui():
    app.destroy()

tk.Button(app, text="quitter", command=app.destroy).place(x=100, y=50)

app.mainloop()

