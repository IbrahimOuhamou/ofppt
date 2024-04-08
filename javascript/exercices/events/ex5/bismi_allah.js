//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");

img1.onclick = function(){select_img(this.src)};
img1.onmouseover = function(){this.style.opacity = 1};
img1.onmouseout = function(){this.style.opacity = 0.5};
img2.onclick = function(){select_img(this.src)};
img2.onmouseover = function(){this.style.opacity = 1};
img2.onmouseout = function(){this.style.opacity = 0.5};
img3.onclick = function(){select_img(this.src)};
img3.onmouseover = function(){this.style.opacity = 1};
img3.onmouseout = function(){this.style.opacity = 0.5};

function select_img(src)
{
    document.getElementById("img0").src = src;
    document.getElementById("img0").style.opacity = 1;
}

