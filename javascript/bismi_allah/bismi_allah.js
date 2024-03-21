//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah

document.write(6 + 6);
document.getElementById("bismi_allah").innerHTML = "la ilaha illa Allah mohammed rassoul Allah";
alert(5 + 6);
console.log("la ilaha illa Allah mohammed rassoul Allah");

window.alert("la ilaha illa Allah mohammed rassoul Allah");
let bismi_allah_var = window.prompt("what text you want?");
window.alert(bismi_allah_var);

let variable1 = parseInt(prompt("donner un valeur"));
let variable2 = parseInt(prompt("donner un autre valeur"));

alert(variable1 + " + " + variable2 + " == " + (variable1 + variable2));
alert(variable1 + " - " + variable2 + " == " + (variable1 - variable2));
alert(variable1 + " * " + variable2 + " == " + (variable1 * variable2));
alert(variable1 + " / " + variable2 + " == " + (variable1 / variable2));
alert(variable1 + " % " + variable2 + " == " + (variable1 % variable2));

if(variable1 > variable2)
{
    alert(variable1 + " > " + variable2)
}
else
{
    alert(variable1 + " < " + variable2)
}

if(variable1 > 5)
{
    alert(variable1 + " > 5")
}
else
{
    alert(variable1 + " < 5")
}

let moyenne = parseInt(prompt("donner le moyenne"));
if(moyenne < 0 || moyenne > 20)
{
    alert('moyenne invalide');
}
else if(16 <= moyenne)
{
    alert('Tres bien');
}
else if(14 <= moyenne)
{
    alert('Bien');
}
else if(12 <= moyenne)
{
    alert('Assez bien');
}
else if(10 <= moyenne)
{
    alert('Passable');
}

