//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah


document.getElementById("bismi_allah_button").onclick = function()
{
    for(i=0; i<3; i++)
    {
        if(document.bismi_allah.bismi_allah[i].checked)
        {
            alert("votre choix est " + (i+1))
            break
        }
    }
}



