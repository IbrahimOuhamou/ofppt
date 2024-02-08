#in the name of Allah

import tkinter as tk

print("in the name of Allah")

app = tk.Tk()
app.title("calculatrice")
app.geometry("300x300")

label_number1 = tk.Label(app, text="number1:")
label_number1.place(x=20, y=30)
entry_number1 = tk.Entry(app)
entry_number1.place(x=100, y=30)

entry_operation = tk.Entry(app)
entry_operation.place(x=160, y=55, width=20)

label_number2 = tk.Label(app, text="number2:")
label_number2.place(x=20, y=80)
entry_number2 = tk.Entry(app)
entry_number2.place(x=100, y=80)

button_clear = tk.Button(app, text="effacer")
button_clear.place(x=100, y=105)
button_calculate = tk.Button(app, text="calculer")
button_calculate.place(x=180, y=105)

label_result = tk.Label(app, text="result")
label_result.place(x=20, y=140)
entry_result = tk.Entry(app, state="disabled")
entry_result.place(x=100, y=140)

def clear():
    entry_number1.delete(0, tk.END)
    entry_number2.delete(0, tk.END)
    entry_operation.delete(0, tk.END)
    entry_result.config(state="normal")
    entry_result.delete(0, tk.END)
    entry_result.config(state="disabled")

def calculate():
    n1 = int(entry_number1.get())
    n2 = int(entry_number2.get())
    operation = entry_operation.get()
    result = 0
    
    if operation == "**":
        result = n1 ** n2
    elif operation == "*":
        result = n1 * n2
    elif operation == "//":
        result = n1 // n2
    elif operation == "/":
        result = n1 / n2
    elif operation == "-":
        result = n1 - n2
    elif operation == "+":
        result = n1 + n2

    entry_result.config(state="normal")
    entry_result.delete(0, tk.END)
    entry_result.insert(0, result)
    entry_result.config(state="disabled")

def validate_insert(char):
    return char.isdigit()
validation = app.register(validate_insert)

entry_number1.config(validate="key" ,validatecommand=(validation, '%S'))
entry_number2.config(validate="key" ,validatecommand=(validation, '%S'))

button_clear.config(command=clear)
button_calculate.config(command=calculate)


app.mainloop()


