let textarray = [];
let charcount = document.querySelector("#charcount");
let remaining = document.querySelector("#remaining"); 
const maxlength = 10;
let input = document.querySelector("textarea");
input.addEventListener("input",()=>{
    if(textarray.length < maxlength){
        textarray = input.value.split('');
        charcount.innerText = `Total Characters:${textarray.length}`; 
        remaining.innerText = `Remaining:${maxlength-(textarray.length)}`; 
    }else{
        alert("You have the word limit");
        textarray = textarray.slice(0,maxlength);
        input.value = input.value.slice(0,maxlength);
        input.disabled = true;
    }
    console.log(textarray);
    
});     