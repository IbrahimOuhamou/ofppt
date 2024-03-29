//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah

let p = parseInt(prompt("donner p"));
let premier = true;

for(i = 2; i < p; i++)
{
    if(p % i === 0)
    {
        premier = false;
        break;
    }
}

if(premier)
{
    alert(p + " est premier");
}
else
{
    alert(p + " n'est pas premier");
}

