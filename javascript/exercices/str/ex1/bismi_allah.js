//بسم الله الرحمن الرحيم
//la ilaha illa Allah mohammed rassoul Allah

bismi_allah_str = prompt("assalamo alaykom\nenter a string please");

bismi_allah_p = document.getElementById("bismi_allah_p")


for(let i=0; i<bismi_allah_str.length; i++)
{
    bismi_allah_p.innerHTML += bismi_allah_str.substring(0, i+1) + "<br/>";
}

