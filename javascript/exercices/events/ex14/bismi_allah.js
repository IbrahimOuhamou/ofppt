//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah

document.getElementById("bismi_allah_button1").onclick = function() {
    document.getElementById("bismi_allah_p1").innerHTML = "= " + (parseInt(document.getElementById("bismi_allah_input1-1").value) + parseInt(document.getElementById("bismi_allah_input1-2").value))
}


document.getElementById("bismi_allah_button2").onclick = function() {
    let bismi_allah_input1 = document.getElementById("bismi_allah_input2-1")
    let bismi_allah_input2 = document.getElementById("bismi_allah_input2-2")
    let bismi_allah_value = bismi_allah_input1.value
    bismi_allah_input1.value = bismi_allah_input2.value
    bismi_allah_input2.value = bismi_allah_value
}

document.getElementById("bismi_allah_button3").onclick = function() {
    let bismi_allah_nom = document.getElementById("bismi_allah_input3").value.split(" ");
    document.getElementById("bismi_allah_p3-1").innerHTML = "Nom: " + bismi_allah_nom[0]
    document.getElementById("bismi_allah_p3-2").innerHTML = "Prenom: " + bismi_allah_nom[1]
    
}

