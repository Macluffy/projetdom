let div = document.querySelector(".divlast")

let btnW = document.querySelector(".b1")
btnW.addEventListener("click",()=>{
    div.style.backgroundColor="gray"
})

let btnR = document.querySelector(".b2")
btnR.addEventListener("click",()=>{
    div.style.backgroundColor="red"
})

let btnG = document.querySelector(".b3")
btnG.addEventListener("click",()=>{
    div.style.backgroundColor="green"
})

let btnB = document.querySelector(".b4")
btnB.addEventListener("click",()=>{
    div.style.backgroundColor="blue"
})

let btnborder = document.querySelector(".b5")
btnborder.addEventListener("click",()=>{
    div.style.border="3px solid black"
})

let btnpointiller = document.querySelector(".b6")
btnpointiller.addEventListener("click",()=>{
    div.style.border="1px dashed black"
})

let btn1px = document.querySelector(".b7")
btn1px.addEventListener("click",()=>{
    div.style.border="1px solid black"
})

let btntop = document.querySelector(".b8")
btntop.addEventListener("click",()=>{
    div.style.borderTop="4px solid red"
})

let btntop2 = document.querySelector(".b9")
btntop2.addEventListener("click",()=>{
    div.style.borderTop="8px solid red"
})

let btntop3 = document.querySelector(".b10")
btntop3.addEventListener("click",()=>{
    div.style.borderTop="16px solid red"
})

let btninput1 = document.querySelector(".b11")

btninput1.addEventListener("click",()=>{
    div.style.backgroundColor=btninput1.value
})

let btninput2 = document.querySelector(".b13")
btninput2.addEventListener("click",()=>{
    div.style.border=`solid black ${btninput2.value}px`
})

let btninput3 = document.querySelector(".b14")
btninput3.addEventListener("click",()=>{
    div.style.borderTop=`solid black ${btninput3.value}px`
})

let btninput4 = document.querySelector(".b15")
btninput4.addEventListener("click",()=>{
    div.style.borderRight=`solid black ${btninput4.value}px`
})

let btninput5 = document.querySelector(".b16")
btninput5.addEventListener("click",()=>{
    div.style.borderBottom=`solid black ${btninput5.value}px`
})
let btninput6 = document.querySelector(".b17")
btninput6.addEventListener("click",()=>{
    div.style.borderLeft=`solid black ${btninput6.value}px`
})

let btninput7 = document.querySelector(".b18")
btninput7.addEventListener("click",()=>{
    div.style.borderRadius=` ${btninput7.value}%`
})

let btninput8 = document.querySelector(".b19")
btninput8.addEventListener("click",()=>{
    div.style.borderTopLeftRadius=` ${btninput8.value}%`
})


let btninput9 = document.querySelector(".b20")
btninput9.addEventListener("click",()=>{
    div.style.borderTopRightRadius=` ${btninput9.value}%`
})


let btninput10 = document.querySelector(".b21")
btninput10.addEventListener("click",()=>{
    div.style.borderBottomLeftRadius=` ${btninput10.value}%`
})


let btninput11 = document.querySelector(".b22")
btninput11.addEventListener("click",()=>{
    div.style.borderBottomRightRadius=` ${btninput11.value}%`
})


