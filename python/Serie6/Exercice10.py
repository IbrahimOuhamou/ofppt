#بسم الله الرحمنالرحيم

print("in the name of Allah")

n = int(input("enter un nombre: "))



"""
* * * * *
 * * * *
  * * *
   * *
    *
*****
 ****
  ***
   **
    *
"""

for i in range(n, 0, -1):
    print(" " * (n - i), end = "")
    print("* " * i)

for i in range(2, n + 1):
    print(" " * (n - i), end = "")
    print("* " * i)
