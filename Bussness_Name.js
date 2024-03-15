let num=Math.random();

let first,second,third;

//0 0.33 0.66 1

if (num >0 && num<0.33){
    first='crazy'
}
else if(num>=0.33 && num<0.66){
    first='Amazing'
}
else{
    first='fire'
}

if (num >0 && num<0.33){
    second='Engine'
}
else if(num>=0.33 && num<0.66){
    second='Foods'
}
else{
    second='Garments'
}
if (num >0 && num<0.33){
    third='Bros'
}
else if(num>=0.33 && num<0.66){
    third='Limited'
}
else{third
    third='Hub'
}
console.log(`Hyy this is your Bussness name ${first} ${second} ${third}`);