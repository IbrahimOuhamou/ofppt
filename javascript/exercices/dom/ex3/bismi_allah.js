//بسم الله الرحمن الرحيم
//la ilaha illa Allah mohammed rassoul Allah

let bismi_allah_to_delete = [];

function bismi_allah_clicked() {
    this.selected = !this.selected

    if(this.selected) {
        this.style.backgroundColor = "green"
        bismi_allah_to_delete.push(this)
        this.index = bismi_allah_to_delete.len
    } else {
        this.style.backgroundColor = "lightblue"
        bismi_allah_to_delete[this.index] = null
    }
}

document.getElementById("bismi_allah_button1").onclick = function()
{
    if(document.getElementById("bismi_allah_input").value == "") return

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
    for (bismi_allah_li of bismi_allah_to_delete) {
        if(null === bismi_allah_li) continue;
        if(bismi_allah_li.selected) {
            bismi_allah_li.parent.removeChild(bismi_allah_li)
        }
    }
    bismi_allah_to_delete = []
}

