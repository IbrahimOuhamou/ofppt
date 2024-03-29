//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah

let n = parseInt(prompt("dooner num1"));

let num_digits = 0;


let temp = n;
do
{
    temp = temp / 10;
    num_digits += 1;
} while (temp > 1);

alert(n + " a " + num_digits + " chiffres");


