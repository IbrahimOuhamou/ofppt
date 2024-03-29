//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah


let bismi_allah_min = parseInt(prompt("donner un valeur"));
let bismi_allah_var = bismi_allah_min;

while(bismi_allah_var !== -1)
{
    if(bismi_allah_var < bismi_allah_min) bismi_allah_min = bismi_allah_var;
    bismi_allah_var = parseInt(prompt("donner un autre valeur"));
}

alert("le plus petit nombre est: " + bismi_allah_min);

