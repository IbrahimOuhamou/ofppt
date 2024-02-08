#in the name of Allah

import tkinter as tk

print("in the name of Allah")

app = tk.Tk()
app.title("calculatrice")
app.geometry("300x300")

label1 = tk.Label(app, text="number1:")
label1.place(x=20, y=30)
entry1 = tk.Entry(app)
entry1.place(x=100, y=30)

label_operation = tk.Label(app, text="operation")
label_operation.place(x=20, y=50)
entry_operation = tk.Entry(app)
entry_operation.place(x=160, y=50, width=20)

label2 = tk.Label(app, text="number2:")
label2.place(x=20, y=80)
entry2 = tk.Entry(app)
entry2.place(x=100, y=80)

label_result = tk.Label(app, text="result")
label_result.place(x=20, y=120)
entry_result = tk.Entry(app, state="disabled")
entry_result.place(x=100, y=120)

app.mainloop()


