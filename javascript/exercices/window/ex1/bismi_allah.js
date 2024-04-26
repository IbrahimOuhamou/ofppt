//بسم الله الرحمن الرحيم
//la ilaha illa Allah mohammed rassoul Allah

document.getElementById("bismi_allah_button").onclick = function()
{
    let bismi_allah_login = document.getElementById("bismi_allah_login").value
    let bismi_allah_password = document.getElementById("bismi_allah_password").value
    if(bismi_allah_login == "bismi_allah" && bismi_allah_password == "bismi_allah")
    {
        let bismi_allah_window = window.open("valid.html", "", "")
        bismi_allah_window.document.write("login: " + bismi_allah_login + "<br>")
        bismi_allah_window.document.write("password: " + bismi_allah_password + "<br>")
    }
    else window.open("error.html", "", "")
}

