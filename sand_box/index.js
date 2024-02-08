

const PI = 3.14159
let radius;
let circumference;


    
document.getElementById("mySubmit").onclick = function(){
    radius = Number(document.getElementById("myText").value);
    circumference = 2 * PI * radius;
    document.getElementById("myH1").innerText = `Answer: ${circumference} cm`;
}

// https://www.youtube.com/watch?v=lfmg-EJ8gm4&t=2044s&ab_channel=BroCode
// time: 52.40