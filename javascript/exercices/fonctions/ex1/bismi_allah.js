//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah

let num = parseInt(prompt("dooner n"));

function carre(n)
{
    return n*n;
}

alert(num + "^2 == " + carre(num));

function factoriel(n)
{
    let result = 1;
    for(i=1; i<=n; i++)
    {
        result *= i;
    }
    return result
}

alert(num + "! == " + factoriel(num));


