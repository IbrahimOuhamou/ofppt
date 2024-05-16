//بسم الله الرحمن الرحيم
//la ilaha illa Allah mohammed rassoul Allah

let bismi_allah_to_delete = [];

document.getElementById("bismi_allah_button1-1").onclick = function()
{
    $('#bismi_allah_ul').append('<li>' + ($('#bismi_allah_input').val()) + '</li>');
    $('li').on('click', function() { 
        $(this).toggleClass('supp')
    })
    $('#bismi_allah_input').val('')
}

document.getElementById("bismi_allah_button1-2").onclick = function() {
    $('.supp').remove()
}

document.getElementById("bismi_allah_button2-start").onclick = function() {
    $('ul>li:first').toggleClass('supp')
}

document.getElementById("bismi_allah_button2-end").onclick = function() {
    $('ul>li:last').toggleClass('supp')
}

