//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah

let bismi_allah_interval = null
let bismi_allah_temps = 10

document.getElementById("bismi_allah_button").onclick = function() {
    bismi_allah_temps = 10
    bismi_allah_interval = setInterval(() => {
        bismi_allah_temps -= 1;
        document.getElementById("bismi_allah_h1").innerHTML = "bismi Allah: " + bismi_allah_temps + " seconds restantes"
    }, 1000);

    setTimeout(() => {
        clearInterval(bismi_allah_interval)
        document.getElementById("bismi_allah_h1").innerHTML = "alhamdo li Allah!"
    }, 10000);
}

