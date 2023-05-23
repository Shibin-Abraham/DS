/********** Bubble Sort **********/

let button = document.querySelector(".input-area button")

let flag=true;

button.addEventListener("click",()=>{
 if(flag===false){
  location.reload(true)
 }
 let inputArea = document.querySelector(".input-area input")
 let arrString = inputArea.value.split(" ")
 let arrNumber = []
 let outputArea = document.querySelector(".output-area")
 
 for (let i = 0; i < arrString.length;i++) {
  let div = document.createElement("div")
  div.className = "output-box"
  div.setAttribute("id", i)
  div.innerHTML = arrString[i]
  outputArea.appendChild(div)
  arrNumber.push(parseInt(arrString[i]))
 }
 for(let i=0;i<arrNumber.length;i++){
  if(isNaN(arrNumber[i])){
    alert("Please enter valid inputs")
    location.reload(true)
    break
  }
 }
 function delay(ms){
  return new Promise(resolve=>{
   setTimeout(()=>{
    resolve('')
   }, ms)
  })
 }
 async function swap(first,second){
  await delay(500)
  let temp=second.innerHTML
  second.innerHTML=first.innerHTML
  first.innerHTML=temp
  await delay(500)
 }
async function printfy(){
  let current
  let next
  for(let i=0;i<arrNumber.length-1;i++){
   for(let j=0;j<=arrNumber.length-i-1;j++){
    if(j!=0){
     current = document.getElementById(j-1)
     current.classList.remove("next")
     current.classList.add("current")
     next = document.getElementById(j)
     if(parseInt(current.innerHTML)>parseInt(next.innerHTML)){
      swap(current, next)
     }
     next.classList.add("next")
     if(j==arrNumber.length-i-1){
      next.style.background="#3CA61B"
     }
     if(i==arrNumber.length-2){
      current.style.background="#3CA61B"
     }
    }else{
     current = document.getElementById(j)
     next = document.getElementById(j+1)
     current.classList.add("current")
     if(parseInt(current.innerHTML)>parseInt(next.innerHTML)){
      swap(current, next)
     }
     next.classList.add("next")
    }
   await delay(600)
   current.classList.remove("current")
  }
 }
}
printfy()
flag = false
}) 
