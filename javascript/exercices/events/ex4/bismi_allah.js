//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah

document.getElementById('bismi_allah').onselect = function()
{
    alert('la ilaha illa Allah mohammed rassoul Allah');
    let selected_text = this.value.substr(this.selectionStart, this.selectionEnd);
    alert("you have selected '" + selected_text + "'");
}

