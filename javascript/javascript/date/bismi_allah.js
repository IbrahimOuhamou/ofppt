//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah

let bismi_allah_p = document.getElementById("bismi_allah_p");
let date = new Date();

bismi_allah_p.innerHTML = "date dliom '" + date + "'<br>"
bismi_allah_p.innerHTML += "jour de la semaine '" + date.getDay() + "' jour du mois '" + date.getDate() + "'<br>"
bismi_allah_p.innerHTML += "num du mois '" + date.getMonth() + "' annee '" + date.getFullYear() + "'<br>"
bismi_allah_p.innerHTML += "heures '" + date.getHours() + "' hours '" + date.getMinutes() + "'<br>"

