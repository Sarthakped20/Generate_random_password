const passBox = document.getElementById("pass");
const length = 16;


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*90-=+<>,./?{}[]";

const allchar = upperCase + lowerCase  + number + symbol; 


function createPass(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];    

    while(length > password.length){
        password += allchar[Math.floor(Math.random() * allchar.length)]; 
    }
    passBox.value = password;
}


