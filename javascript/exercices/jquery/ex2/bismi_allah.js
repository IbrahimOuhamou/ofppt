//بسم الله الرحمن الرحيم
//la ilaha illa Allah mohammed rassoul Allah

let bismi_allah_to_delete = [];

document.getElementById("bismi_allah_button1-1").onclick = function()
{
    $('#bismi_allah_ul').append('<li>' + ($('#bismi_allah_input').val()) + '</li>');
    $('li').on('click', function() { 
        $(this).css('background-color', 'yellow')
        $(this).addClass('supp')
    })
}

document.getElementById("bismi_allah_button1-2").onclick = function() {
    $('.supp').remove()
}

