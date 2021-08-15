let a = 0;
let b = document.getElementById("count-el");
let s = document.getElementById("previous-el");
function increment(){
 a+=1;
 b.textContent=a;
}
function save() {
let countstr = a + " - ";
s.textContent += countstr;
a = 0;
b.textContent = 0;
}




