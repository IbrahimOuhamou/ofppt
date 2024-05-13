//بسم الله الرحمن الرحيم
//la ilaha illa Allah mohammed rassoul Allah

document.getElementById("bismi_allah_button").onclick = function() {
    let row = document.createElement("tr")
    document.getElementById("bismi_allah_table").appendChild(row)

    let bismi_allah_nom = document.createElement("td")
    bismi_allah_nom.innerHTML = document.getElementById("bismi_allah_input_nom").value
    document.getElementById("bismi_allah_input_nom").value = ""
    row.appendChild(bismi_allah_nom)

    let bismi_allah_prenom = document.createElement("td")
    bismi_allah_prenom.innerHTML = document.getElementById("bismi_allah_input_prenom").value
    document.getElementById("bismi_allah_input_prenom").value = ""
    row.appendChild(bismi_allah_prenom)

    let bismi_allah_age = document.createElement("td")
    bismi_allah_age.innerHTML = document.getElementById("bismi_allah_input_age").value
    document.getElementById("bismi_allah_input_age").value = ""
    row.appendChild(bismi_allah_age)

    let bismi_allah_filiere = document.createElement("td")
    bismi_allah_filiere.innerHTML = document.getElementById("bismi_allah_input_filiere").value
    document.getElementById("bismi_allah_input_filiere").value = ""
    row.appendChild(bismi_allah_filiere)
}

