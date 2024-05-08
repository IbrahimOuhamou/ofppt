//بسم الله الرحمن الرحيم
//la ilaha illa Allah mohammed rassoul Allah

function bismi_allah()
{
    let parent = document.getElementById("bismi_allah_div")
    let bismi_allah_p = document.createElement("p")
    bismi_allah_p.innerHTML = "la ilaha illa Allah Mohammed Rassoul Allah"
    bismi_allah_p.onclick = function() {
        //this.style.color = "green"
        //parent.removeChild(this)
        let bismi_allah_h1 = document.createElement("h1")
        bismi_allah_h1.innerHTML = "بسم الله الرحمن الرحيم"
        parent.replaceChild(bismi_allah_h1, this)
    }
    parent.appendChild(bismi_allah_p)
}

