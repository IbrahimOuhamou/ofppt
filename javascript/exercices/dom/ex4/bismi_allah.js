//بسم الله الرحمن الرحيم
//la ilaha illa Allah mohammed rassoul Allah

let bismi_allah_span = document.getElementById("bismi_allah_span")

document.getElementById("bismi_allah_color").onchange = function() {
    bismi_allah_span.style.backgroundColor = this.value;
}

document.getElementById("bismi_allah_width").onchange = function() {
    alert(bismi_allah_span.width)
    bismi_allah_span.width = this.value;
}

document.getElementById("bismi_allah_height").onchange = function() {
    bismi_allah_span.height = this.value;
}

