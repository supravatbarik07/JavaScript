let no1=prompt(`please enter your first number`)
let operation=prompt('please enter what opration what you want');
let no2=prompt(`please enter the second number`);

let ran=Math.random();

let obj={
    "+":"*",
    "-":"/",
    "*":"-",
    "/":"+"
}

if(ran>0.1){
   alert(`The result you want is ${eval(`${no1} ${operation} ${no2}`)}`);
}
else{
    operation =obj[operation]
    alert(`The result you want is ${eval(`${no1} ${operation} ${no2}`)}`);
}