//بسم الله الرحمن الرحيم
//la ilaha illa Allah mohammed rassoul Allah

let bismi_allah_str_arr_len = prompt("donner une chaine pour conter leur mots").split(" ").length
alert("il a " + bismi_allah_str_arr_len + " mots")

function count(str, char)
{
    let count = 0;
    for(const c of str)
    {
        if(c === char) count++;
    }
    return count;
}

bismi_allah_str = ""
while (bismi_allah_str.length<3)
{
    bismi_allah_str = prompt("assalamo alaykom\nenter a string please\n(plus de 3 characters)");
}

bismi_allah_p = document.getElementById("bismi_allah_p")
bismi_allah_p.innerHTML += "<br>";

for(let i=0; i<bismi_allah_str.length; i++)
{
    bismi_allah_p.innerHTML += bismi_allah_str.substring(0, i+1) + "<br/>";
}

document.getElementById("bismi_allah_button").onclick = function()
{

}

