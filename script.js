const passwordBox = document.getElementById('password');
const length = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbol = '@#$%^&*()_-+={}[]|<>/~';

const allChars = upperCase + lowerCase + symbol + numbers;

document.getElementById('genpassbutton').addEventListener('click', function(){
    let password = "";
    // password = password + upperCase[Math.floor(Math.random()*upperCase.length)];
    // password = password + lowerCase[Math.floor(Math.random()*lowerCase.length)];
    // password = password + numbers[Math.floor(Math.random()*numbers.length)];
    // password = password + symbol[Math.floor(Math.random()*symbol.length)];

    // console.log(password + allChars[Math.floor(Math.random()*allChars.length)]);
    while(length > password.length){
        password = password + allChars[Math.floor(Math.random()*allChars.length)];
         
    }
    passwordBox.value = password;
});

document.getElementById('copy').addEventListener('click', function(){
    passwordBox.select();
    document.execCommand("copy");
    
});

// function copyPassword(){
//     passwordBox.select();
//     document.execCommand("copy");
// }