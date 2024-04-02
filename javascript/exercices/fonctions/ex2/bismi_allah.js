//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah

let num1 = parseInt(prompt("dooner num1"));
let num2 = parseInt(prompt("dooner num2"));


function pgcd(a, b)
{
    let pgcd = 0;
    let min = b;
    if(b > a)
    {
        min = a;
    }

    for(i = min; i>0; i--)
    {
        if(a % i === 0 && b % i === 0)
        {
            return i;
        }
    }
}

alert("pgcd(" + num1 + ", " + num2 + ") == " + pgcd(num1, num2));
