//in the name of Allah
//la ilaha illa Allah mohammed rassoul Allah

let str = "assalamo alaykom wa rahmato Allah wa barakatoho";

let c = str.charAt(1);
let x = indexOf('m');
x = indexOf('m', 2);
x = lastIndexOf('m');

let min_salam = str.substring(0, 16);

str = str.toUpperCase();
str = str.toLowerCase();
let salam_arr = Array.from(str);
//["a", "s", "s", ... ,"h", "o"]
let salam_words = str.split(" ")
//["assalamo", "alaykom", ... "wa", "barakatoho"]


