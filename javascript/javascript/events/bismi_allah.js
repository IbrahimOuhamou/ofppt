//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah

let bismi_allah_interval = null;

document.getElementById("bismi_allah").onclick = function() {
    setTimeout(() => {
        alert("بسم الله الرحمن الرحيم")
    }, 2000);

    bismi_allah_interval = setInterval(() => {
        document.getElementById("bismi_allah_p").innerHTML = "بسم الله الرحمن الرحيم" + "<br/>" + Math.floor(Math.random() * 100)
    }, 1000);
}

document.getElementById("bismi_allah2").onclick = function() {
    clearInterval(bismi_allah_interval)
}

