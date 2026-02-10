
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btn=document.getElementById("gp")
let p1=document.getElementById("st");
let p2=document.getElementById("nd");

btn.addEventListener("click",function(){
    let ps="";
    for(let i=1;i<=8;i++){
        let x=Math.floor(Math.random()*40);
        ps+=characters[x];
    }
    p1.textContent=ps;
});
