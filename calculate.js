let name1=prompt('please Tell your name');
let soulmate=prompt('Hyy handsome tell me your love name');

alert(`Hy welcome let's see your soulmate how much love with you`);

console.log(name1);
let rnumber=Math.random();

console.log(rnumber)

let amount=rnumber*100;

let loveamount=Math.round(amount)



if(loveamount>=90 && loveamount<=100){
   alert(`hyy you are very lucky`)
}
else if(loveamount>=80 && loveamount<=89){
   alert(`${name1} and ${soulmate} your love % is ${loveamount} and you both made for each other`)
}
else if(loveamount>=50 && loveamount<=79){
    alert(`${name1} and ${soulmate} your love % is ${loveamount} and your love is ok ok`)
}
else{
    alert(`hy ${name1} no one loves you go and do hard work`)
}
console.log(loveamount)

