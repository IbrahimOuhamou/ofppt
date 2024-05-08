//بسم الله الرحمن الرحيم
//la ilaha illa Allah mohammed rassoul Allah

function bismi_allah_clicked() {
    this.selected = !this.selected

    if(this.selected) {
        this.style.backgroundColor = "green"
    } else {
        this.style.backgroundColor = "lightblue"
    }
}

document.getElementById("bismi_allah_button1").onclick = function()
{
    let parent = document.getElementById("bismi_allah_ul")
    let bismi_allah_li = document.createElement("li")
    bismi_allah_li.innerHTML = document.getElementById("bismi_allah_input").value
    document.getElementById("bismi_allah_input").value = "";

    bismi_allah_li.selected = false
    bismi_allah_li.onclick = bismi_allah_clicked
    bismi_allah_li.parent = parent

    parent.appendChild(bismi_allah_li)
}

document.getElementById("bismi_allah_button2").onclick = function()
{
    //let bismi_allah_lis = 
    for (bismi_allah_li of document.getElementsByTagName("li")) {
        if(bismi_allah_li.selected) {
            bismi_allah_li.parent.removeChild(bismi_allah_li)
        }
    }
}

