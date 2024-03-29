//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah

let n = parseInt(prompt("donner n"));
let answer = "1";

for(i = 2; i <= n; i++)
{
    if(n % i === 0)
    {
        answer += " " + i;
    }
}

alert("les diviseurs de " + n + " sont:\n" + answer);
