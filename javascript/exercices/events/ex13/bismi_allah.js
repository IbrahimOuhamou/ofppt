//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah

function bismi_allah_abs(x)
{
    return x > 0 ? x : -x;
}

document.getElementById("button1").onclick = function()
{
    document.getElementById("result1").innerHTML = "alhamd li Allah valeur absolue: " + bismi_allah_abs(parseInt(document.getElementById("input1").value));
}

document.getElementById("button2").onclick = function()
{
    document.getElementById("result2").innerHTML = "alhamd li Allah somme des valeurs absolues: " + (bismi_allah_abs(parseInt(document.getElementById("input2-1").value)) + bismi_allah_abs(parseInt(document.getElementById("input2-2").value)));
}

document.getElementById("button3").onclick = function()
{
    let result = 0;
    switch(document.getElementById("bismi_allah_select").value)
    {
        case '+':
            result = parseInt(document.getElementById("input3-1").value) + parseInt(document.getElementById("input3-2").value);
            break;
        case '-':
            result = parseInt(document.getElementById("input3-1").value) - parseInt(document.getElementById("input3-2").value);
            break;
        case '/':
            result = parseInt(document.getElementById("input3-1").value) / parseInt(document.getElementById("input3-2").value);
            break;
        case '*':
            result = parseInt(document.getElementById("input3-1").value) * parseInt(document.getElementById("input3-2").value);
            break;
    }
    document.getElementById("result3").innerHTML = "alhamd li Allah resultat: " + result
}

