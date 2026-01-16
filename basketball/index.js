let homeScore=document.getElementById("hss")
let guestScore=document.getElementById("gss")
let hpoint=0
let gpoint=0

let hb1=document.getElementById("hs1")
let hb2=document.getElementById("hs2")
let hb3=document.getElementById("hs3")
let gb1=document.getElementById("gs1")
let gb2=document.getElementById("gs2")
let gb3=document.getElementById("gs3")

hb1.addEventListener("click",function(){
    hpoint+=1
    homeScore.textContent=hpoint
})

hb2.addEventListener("click",function(){
    hpoint+=2
    homeScore.textContent=hpoint
})

hb3.addEventListener("click",function(){
    hpoint+=3
    homeScore.textContent=hpoint
})

gb1.addEventListener("click",function(){
    gpoint+=1
    guestScore.textContent=gpoint
})

gb2.addEventListener("click",function(){
    gpoint+=2
    guestScore.textContent=gpoint
})
gb3.addEventListener("click",function(){
    gpoint+=3
    guestScore.textContent=gpoint
})
