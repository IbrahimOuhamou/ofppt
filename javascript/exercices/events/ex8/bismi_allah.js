//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah

document.getElementById("bismi_allah_button").onclick = function()
{
    alert("بسم الله الرحمن الرحيم")
    let age = document.getElementById("bismi_allah_age").value
    if(age < 0 || age > 100)
    {
        alert("Vous ne pouvez pas avoir " + age + " ans")
        return
    }
    let name = document.getElementById("bismi_allah_name").value
    alert("السلام عليكم " + name)
}

