
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// let cn=characters.length;
// console.log(cn)

let btn=document.getElementById("gp")
let p1=document.getElementById("st");
let p2=document.getElementById("nd");

btn.addEventListener("click",function(){
    let ps="";
    for(let i=1;i<=12;i++){
        let x=Math.floor(Math.random()*91);
        ps+=characters[x];
    }
    p1.textContent=ps;
    let ps2="";
    for(let i=1;i<=12;i++){
        let x=Math.floor(Math.random()*91);
        ps2+=characters[x];
    }
    p2.textContent=ps2;
    
});
