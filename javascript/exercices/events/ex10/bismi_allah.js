//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah


document.getElementById("bismi_allah_button").onclick = function()
{
    if(document.bismi_allah.bismi_allah1.checked && document.bismi_allah.bismi_allah2.checked && !document.bismi_allah.bismi_allah3.checked && document.bismi_allah.bismi_allah4.checked)
    {
        alert("alhamdo li Allah answer was correct")
    }
    else
    {
        alert("answer not correct")
    }
}



