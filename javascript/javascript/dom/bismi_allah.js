//in the name of Allah
//la ilaha illa Allah Mohammed Rassoul Allah

let bismi_allah = document.getElementById("bismi_allah")
if (bismi_allah == document.getElementsByTagName("p")[0])
{
    alert("la ilaha illa Allah Mohammed Rassoul Allah")
}
else
{
    alert(document.getElementsByTagName("p"))
}

if (bismi_allah == document.getElementsByClassName("bismi_allah")[0])
{
    alert("la ilaha illa Allah Mohammed Rassoul Allah")
}
else
{
    alert(document.getElementsByClassName("bismi_allah"))
}

document.querySelector("p").style.color = "green";
document.querySelector("div > p").style.color = "purple";

