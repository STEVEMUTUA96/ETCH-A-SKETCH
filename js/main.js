

const btn1 = document.querySelector(".btn1");
const btn2=document.querySelector(".btn2");
const btn3=document.querySelector(".btn3");
const btn4=document.querySelector(".btn4");
const gridElement = document.querySelector(".grid");

var coloMode ="#000000";

btn2.addEventListener("click",function(e){
    coloMode = "#000000";
    createGrid(16);
})


btn3.addEventListener("click",function(e){
    coloMode = "#000000";
   })


btn4.addEventListener("click",function(e){
    coloMode = " ";
})

btn1.addEventListener("click",myInput);
function myInput() {
    var input = prompt("Please enter gridSize from 16 to 100", "16");
    if (input != null) {
        if(input >=16 && input <= 100){
        createGrid(input) 
        } 
        else{myInput()}    
    }
  }

function createGrid(length){
    const cellNumber = length **2;
    gridElement.innerHTML=" ";
    for(var i=0 ;i <cellNumber; i++){
        const cellElement =document.createElement("div");
        cellElement.classList.add("box");
        gridElement.appendChild(cellElement);
    }
    
  
    
    let boxs = document.querySelectorAll(".box");
    boxs.forEach(box => {
        box.addEventListener("mouseover",function(e){
            if(coloMode=="#000000"){
                e.target.style.backgroundColor ="#000000";
            }else{
                 e.target.style.backgroundColor =getRandomColor();
            }
         })
    })
}




function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  createGrid(16);