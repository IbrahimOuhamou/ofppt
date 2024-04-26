//بسم الله الرحمن الرحيم
//la ilaha illa Allah mohammed rassoul Allah

let bismi_allah_p = document.getElementById("bismi_allah_p")

document.getElementById("bismi_allah_button").onclick = function()
{
    let bismi_allah_a = parseInt(document.getElementById("bismi_allah_input_a").value)
    let bismi_allah_b = parseInt(document.getElementById("bismi_allah_input_b").value)
    let bismi_allah_c = parseInt(document.getElementById("bismi_allah_input_c").value)

    if(bismi_allah_a === 0) return

    let delta = Math.pow(bismi_allah_b, 2) - (4 * bismi_allah_a * bismi_allah_c)
    if(delta < 0) bismi_allah_p.innerHTML = "NONE"
    else if(delta === 0) bismi_allah_p.innerHTML = "x == " + ((-bismi_allah_b) / 2 * bismi_allah_a)
    else if(delta > 0) bismi_allah_p.innerHTML = "x1 == " + (((-bismi_allah_b) + Math.sqrt(delta)) / 2 * bismi_allah_a) + "<br>x2 == " + (((-bismi_allah_b) - Math.sqrt(delta)) / 2 * bismi_allah_a)
    else bismi_allah_p.innerHTML = "bismi Allah"
}



