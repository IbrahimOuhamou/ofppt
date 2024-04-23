//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah

document.f1.bismi_allah_button.onclick = function()
{
    alert(document.f1.s1.value)
}

document.f1.bismi_allah_textarea.onclick = function()
{
    alert(this.value)
}

let bismi_allah_arr = [];
for(let i=0; i<10; i++)
{
    bismi_allah_arr[i] = [i+1, i+2, i+3]
}

for(let i=0; i<bismi_allah_arr.length; i++)
{}

let p2 = document.getElementById("p2");
for(sub_arr of bismi_allah_arr)
{
    for(v2 of sub_arr)
    {
        p2.innerHTML += v2 + " |";
    }
    p2.innerHTML += "<br>";
}

