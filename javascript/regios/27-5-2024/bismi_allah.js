//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah

let bismi_allah_donnees = {
    "consoles": [
        { 'ref': 'Nintendo Switch Oled', 'prix': 4500, 'manette': 1, 'image': 'images/img1.jpg'},
        { 'ref': 'PS 1', 'prix': 500, 'manette': 1, 'image': 'images/img2.jpg'},
        { 'ref': 'PS 2', 'prix': 1000, 'manette': 1, 'image': 'images/img3.jpg'},
        { 'ref': 'PS 3', 'prix': 1500, 'manette': 1, 'image': 'images/img4.jpg'},
        { 'ref': 'PS 4', 'prix': 3000, 'manette': 1, 'image': 'images/img5.jpg'},
        { 'ref': 'PS 5', 'prix': 4500, 'manette': 1, 'image': 'images/img6.jpg'},
    ]
}

{
    let bismi_allah_consoles = document.getElementById("bismi_allah_consoles")
    for (const bismi_allah_console of bismi_allah_donnees["consoles"]) {
        let bismi_allah_opt = document.createElement("option")
        bismi_allah_opt.innerHTML = bismi_allah_console['ref']
        bismi_allah_consoles.appendChild(bismi_allah_opt)
    }
}

function bismi_allah_calculer_prix() {
    let bismi_allah_table = document.getElementById('bismi_allah_table')
    let bismi_allah_prix = 0
    for(let i=1; i<bismi_allah_table.children.length; i++) {
        bismi_allah_prix += parseInt(bismi_allah_table.children[i].children[1].innerHTML) * parseInt(bismi_allah_table.children[i].children[2].innerHTML)
    }
    document.getElementById('bismi_allah_prix').innerHTML = 'PRIX: ' + bismi_allah_prix
    document.getElementById('bismi_allah_prix_ttc').innerHTML = 'PRIX: ' + (bismi_allah_prix * 1.2)
}

function bismi_allah_supp() {
    document.getElementById('bismi_allah_table').removeChild(this.parentElement.parentElement)
    bismi_allah_calculer_prix()
}

document.getElementById("bismi_allah_button").onclick = function() {
    let bismi_allah_consoles = document.getElementById("bismi_allah_consoles")
    let bismi_allah_table = document.getElementById('bismi_allah_table')
    let bismi_allah_input = document.getElementById('bismi_allah_input')


    {
        let bismi_allah_row = document.createElement('tr')
        let bismi_allah_console = bismi_allah_donnees["consoles"][bismi_allah_consoles.selectedIndex]

        let bismi_allah_ref = document.createElement('td')
        bismi_allah_ref.innerHTML = bismi_allah_console['ref']
        bismi_allah_row.appendChild(bismi_allah_ref)

        let bismi_allah_prix = document.createElement('td')
        bismi_allah_prix.innerHTML = bismi_allah_console['prix']
        bismi_allah_row.appendChild(bismi_allah_prix)

        let bismi_allah_quantite = document.createElement('td')
        bismi_allah_quantite.innerHTML = bismi_allah_input.value
        bismi_allah_row.appendChild(bismi_allah_quantite)

        let bismi_allah_manette = document.createElement('td')
        bismi_allah_manette.innerHTML = bismi_allah_console['manette']
        bismi_allah_row.appendChild(bismi_allah_manette)

        let bismi_allah_image = document.createElement('td')
        bismi_allah_image.innerHTML = bismi_allah_console['image']
        bismi_allah_row.appendChild(bismi_allah_image)

        let bismi_allah_button_td = document.createElement('td')
        let bismi_allah_button_supp = document.createElement('button')
        bismi_allah_button_supp.innerHTML = "supprimer"
        bismi_allah_button_supp.onclick = bismi_allah_supp
        bismi_allah_button_td.appendChild(bismi_allah_button_supp)
        bismi_allah_row.appendChild(bismi_allah_button_td)

        bismi_allah_table.appendChild(bismi_allah_row)
    }
   
    bismi_allah_input.value = 0
    bismi_allah_calculer_prix()
}

function bismi_allah_to_json() {
    let bismi_allah_table = document.getElementById('bismi_allah_table')
    let bismi_allah_json = []
    for(let i=1; i<bismi_allah_table.children.length; i++) {
        obj = {'ref': '', 'prix': 0, 'quantite': 0, 'manette': '', 'image': ''}

        obj['ref'] = bismi_allah_table.children[i].children[0].innerHTML
        obj['prix'] = bismi_allah_table.children[i].children[1].innerHTML
        obj['quantite'] = bismi_allah_table.children[i].children[2].innerHTML
        obj['manette'] = bismi_allah_table.children[i].children[3].innerHTML
        obj['image'] = bismi_allah_table.children[i].children[4].innerHTML

        bismi_allah_json.push(obj)
    }
    console.log(bismi_allah_json)
}

