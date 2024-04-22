//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah

let t1 = [];
document.getElementById("bismi_allah_button1").onclick = function()
{
    t1.push(document.getElementById("bismi_allah_input1").value);
    let paragraph = '';

    let i_min = 0;
    let i_max = 0;
    for (let i = 0; i < t1.length; i++)
    {
        if(t1[i] < t1[i_min])
        {
            i_min = i;
        }
        if(t1[i] > t1[i_max])
        {
            i_max = i;
        }
        paragraph += t1[i] + " | ";
    }

    document.getElementById("bismi_allah_p1").innerHTML = "alhamdo li allah valeurs du tableau: " + paragraph;
    document.getElementById("bismi_allah_rsult1-1").innerHTML = "alhamdo li allah min index est: " + i_min;
    document.getElementById("bismi_allah_rsult1-2").innerHTML = "alhamdo li allah min valeur est: " + t1[i_min];
    document.getElementById("bismi_allah_rsult1-3").innerHTML = "alhamdo li allah max index est: " + i_max;
    document.getElementById("bismi_allah_rsult1-4").innerHTML = "alhamdo li allah max valeur est: " + t1[i_max];
    document.getElementById("bismi_allah_input1").value = "";
}

let t2 = [];
let t2_result = [];
document.getElementById("bismi_allah_button2-1").onclick = function()
{
    t2.push(parseInt(document.getElementById("bismi_allah_input2").value));
    document.getElementById("bismi_allah_input2").value = '';
}

document.getElementById("bismi_allah_button2-2").onclick = function()
{
    for(let i = 0; i < t2.length; i++)
    {
        let result = 0;
        for(let j = i+1; j<t2.length; j++)
        {
            if(t2[j] > t2[i])
            {
                result += 1;
            }
        }
        t2_result[i] = result;
    }

    let paragraph = "";
    for (let i = 0; i<t2.length; i++)
    {
        paragraph += t2[i] + " : " + t2_result[i] + "<br/>";
    }

    //paragraph += t2[i] + " | ";
    document.getElementById("bismi_allah_p2").innerHTML = paragraph;
}

