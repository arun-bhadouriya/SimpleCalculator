// const { clear } = require("console")

let questionInp= document.getElementById('questionInp')
let answerInp= document.getElementById('ansInp')
let btn1= document.getElementById('btn-1')
let btn2= document.getElementById('btn-2')
let btn3= document.getElementById('btn-3')
let btn4= document.getElementById('btn-4')
let btn5= document.getElementById('btn-5')
let btn6=document.getElementById('btn-6')
let btn7=document.getElementById('btn-7')
let btn8=document.getElementById('btn-8')
let btn9=document.getElementById('btn-9')
let btnClear = document.getElementById('btn-clear')
let btnBack= document.getElementById('btn-back')
let btnAns= document.getElementById('btn-ans')
let btnMinus= document.getElementById('btnminus')
let btnPlus=document.getElementById('btnplus')
let btnMultiply=document.getElementById('btnmultiply')
let btnDivide=document.getElementById('btndivide')
let btnModulo=document.getElementById('btnmodulo')

// btn1.onclick =function(){
//     // console.log('clicked')
//     if(questionInp.value=="") questionInp.value="1"
//     else questionInp.value+="1"
// }

// btn2.onclick =function(){
//     // console.log('clicked')
//     if(questionInp.value=="") questionInp.value="2"
//     else questionInp.value+="2"
// }

// btn3.onclick =function(){
//     // console.log('clicked')
//     if(questionInp.value=="") questionInp.value="3"
//     else questionInp.value+="3"
// }

// btn4.onclick =function(){
//     // console.log('clicked')
//     if(questionInp.value=="") questionInp.value="4"
//     else questionInp.value+="4"
// }

// btn5.onclick =function(){
//     // console.log('clicked')
//     if(questionInp.value=="") questionInp.value="5"
//     else questionInp.value+="5"
// }
// btn6.onclick =function(){
//     // console.log('clicked')
//     if(questionInp.value=="") questionInp.value="6"
//     else questionInp.value+="6"
// }
// btn7.onclick =function(){
//     // console.log('clicked')
//     if(questionInp.value=="") questionInp.value="7"
//     else questionInp.value+="7"
// }
// btn8.onclick =function(){
//     // console.log('clicked')
//     if(questionInp.value=="") questionInp.value="8"
//     else questionInp.value+="8"
// }
// btn9.onclick =function(){
//     // console.log('clicked')
//     if(questionInp.value=="") questionInp.value="9"
//     else questionInp.value+="9"
// }

function back(){
    let length=questionInp.value.length
    questionInp.value=questionInp.value.slice(0,length-1)
    answerInp.value=""
}

function Clear(){
    questionInp.value=""
    answerInp.value=""
}

function Ans(){
    let ans=eval(questionInp.value)
    if(ans==undefined) answerInp.value=""
    else answerInp.value=ans
}

document.getElementById("calculator").addEventListener("click",(e)=>{
    console.log(e)
    console.log(e.path[0].textContent)
    if(e.path[0].textContent=="clear"){
    //    console.log("clicked clear from addeventlistenrer")
        Clear()
    }
    else if(e.path[0].textContent=="Ans"){
        // console.log("clicked ans from addeventlistenrer")
         Ans()
    }
    else if(e.path[0].textContent=="back"){
        back()
    }
    else{
        questionInp.value+=e.path[0].innerHTML
    }
})

window.addEventListener("keydown", function(e) {
    console.log(e)
    if (e.keyCode == 13)  {
        let ans=eval(questionInp.value)
        if(ans==undefined) answerInp.value=""
        else answerInp.value=ans
    }
    if(e.keyCode == 8){
        let length=questionInp.value.length
        if(document.activeElement.tagName!="INPUT"){
            questionInp.value=questionInp.value.slice(0,length-1)
        }
        answerInp.value=""
    }
    if(e.key=="+" || e.key=="-" || e.key=="*" || e.key=="/"|| e.key=="%" ||e.keyCode>=96 && e.keyCode<=105){
        console.log(e.key+"\n")
        questionInp.value+=e.key
    }
})

// btnModulo.onclick=()=>{
//     if(questionInp.value=="") questionInp.value=""
//      questionInp.value+="%"
// }

// btnMinus.onclick=()=>{
//     if(questionInp.value=="") questionInp.value=""
//      questionInp.value+="-"
// }

// btnPlus.onclick=()=>{
//     if(questionInp.value=="") questionInp.value=""
//      questionInp.value+="+"
// }

// btnDivide.onclick= ()=>{
//     if(questionInp.value="")questionInp.value=""
//      questionInp.value+="/"
// }

// btnMultiply.onclick=function(){
//     if(questionInp.value="") questionInp.value=""
//     questionInp.value+="*"
// }




