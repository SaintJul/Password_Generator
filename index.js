const passwordBtn = document.getElementById("password-btn");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const password3 = document.getElementById("password3");
const password4 = document.getElementById("password4");

const characters = ["a","b","c","d","e","f","g",'h',"i","j","k","l",
"m","n","o","p","q","r","s","t","u","v","w","x","y","z",1,2,3
,4,5,6,7,8,9,"~","!","@","#","$","%","^","&","*","(",")",
"-","_","=","+",",","<",">",".","/","?","[","{","]","}",`"\"`]

passwordBtn.addEventListener("click", function(){   
   password1.textContent = randomPassword();
   password2.textContent = randomPassword();
   password3.textContent = randomPassword();
   password4.textContent = randomPassword();
    
})

function capitalize(num){
    let pick2 = Math.floor(Math.random()*2);
    if (num < 26){
       return  pick2 === 0? (characters[num]).toUpperCase(): characters[num];
    }else{
        return characters[num];
    }
}

function randomPassword(length = 15){    
    let password = ""
    for(let count = 0; count < length; count++){
        let ranNum = Math.floor(Math.random()*61);        
        password += capitalize(ranNum);
    }
    return password;
    
}
