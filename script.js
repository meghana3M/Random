let btn=document.getElementById('btn');
let output=document.getElementById('output');
let array = 
[
    '"The only way to do great work is to love what you do." - Steve Jobs',
    '"In the middle of difficulty lies opportunity." - Albert Einstein',
    '"Be the change that you wish to see in the world." - Mahatma Gandhi',
    '"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment." - Buddha',
    '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill',
];

btn.addEventListener('click', function(){
    var random = array[Math.floor(Math.random()*array.length)]
    output.innerHTML=random;
});  