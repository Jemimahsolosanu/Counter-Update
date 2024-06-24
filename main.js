let Value= document.getElementById("num");
let buttons= document.querySelectorAll("button");
let Counter= 0

function updateCountValue(){
  if(Counter>0){
    Value.innerHTML=Counter;
    Value.style.color= "green";
  }else if(Counter<0){
    Value.innerHTML=Counter;
    Value.style.color= "red";
  }else{
    Value.innerHTML=Counter;
    Value.style.color= "black";
  }
}

buttons [0].addEventListener("click", ()=>{
  Counter++;
  updateCountValue();
});

buttons [1].addEventListener("click", ()=>{
  Counter--;
  updateCountValue();
});

buttons [2].addEventListener("click", ()=>{
  Counter=0;
  updateCountValue();
});