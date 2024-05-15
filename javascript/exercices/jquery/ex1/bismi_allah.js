//بسم الله الرحمن الرحيم
//la ilaha illa Allah mohammed rassoul Allah

let bismi_allah_span = document.getElementById("bismi_allah_span")

document.getElementById("bismi_allah_color").onchange = function() {
    bismi_allah_span.style.backgroundColor = this.value;
}

document.getElementById("bismi_allah_width").onchange = function() {
    bismi_allah_span.style.width = this.value + "px";
}

document.getElementById("bismi_allah_height").onchange = function() {
    bismi_allah_span.style.height = this.value + "px";
    alert(bismi_allah_span.style.height)
}

