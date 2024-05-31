//بسم الله الرحمن الرحيم
//la ilaha illa Allah Mohammed Rassoul Allah


enregister() {
    if(!validerForm()) {
        alert("valider lo formulaire!")
        return
    }

    let row = document.createElement("tr")

    let nom = document.createElement("td")
    nom.innerHTML = document.getElementById("input_nom").value
    row.appendChild(nom)

    let prenom = document.createElement("td")
    prenom.innerHTML = document.getElementById("input_prenom").value
    row.appendChild(prenom)

    let age = document.createElement("td")
    age.innerHTML = document.getElementById("input_age").value
    row.appendChild(age)

    let sexe = document.createElement("td")
    sexe.innerHTML = document.getElementById("input_sexe_homme").checked ? 'homme' : 'femme'
    row.appendChild(sexe)

    let pays = document.createElement("td")
    pays.innerHTML = document.getElementById("select_pays").value
    row.appendChild(pays)

    document.getElementById("enregitrers_table").appendChild(row)
}
document.getElementById("button_enregister").onclick = enregistrer

function validerForm() {
    if(document.getElementById("input_nom").value == "" || !/[a-zA-Z]/.test(document.getElementById("input_nom").value)) return false
    if(document.getElementById("input_prenom").value == "") return false
    if(document.getElementById("input_age").value == "") return false
    if(document.getElementById("input_sexe_femme").checked == document.getElementById("input_sexe_homme").checked) return false

    if(document.getElementById("input_checkbox_marathon").checked || document.getElementById("input_checkbox_natation").checked || document.getElementById("input_checkbox_sprint").checked || document.getElementById("input_checkbox_saut").checked)

    return true
}

document.onkeydown = function(event) {
    if (event.key === 'Escape') {
        window.close()
    }

    if (event.key === 'Enter') {
        enregistrer()
    }
}

