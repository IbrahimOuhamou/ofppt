//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah

//document.getElementById("bismi_allah_")

let t1 = [];
document.getElementById("bismi_allah_button1").onclick = function()
{
    t1.push(document.getElementById("bismi_allah_input1").value);
    let paragraph = '';

    let i_min = 0;
    for (let i = 0; i < t1.length; i++)
    {
        if(t1[i] < t1[i_min])
        {
            i_min = i;
        }
        paragraph += t1[i] + " | ";
    }


    document.getElementById("bismi_allah_p").innerHTML = "alhamdo li allah valeurs du tableau: " + paragraph;
    document.getElementById("bismi_allah_rsult1-1").innerHTML = "alhamdo li allah min index est: " + i_min;
    document.getElementById("bismi_allah_rsult1-2").innerHTML = "alhamdo li allah min valeur est: " + t1[i_min];
    document.getElementById("bismi_allah_input1").value = "";
}


