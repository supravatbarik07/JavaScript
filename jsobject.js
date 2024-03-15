let obj={
    'name':"supravat",
    'age':24,
    'address':'Odisha',
    "Bike_Collection" :['R15','ZMR','m14'],
    about : function (){
        console.log(`hy ${this.name} your age is ${this.age},you are from ${this.address} and you have Bike collection like ${this.Bike_Collection[2]} `);
    }
}
obj.Bike_Collection[3]='rc100'
obj.about();
console.log(obj);
console.log(obj['age']);
for (const key in obj) {
        const element1 = obj[key];
        console.log(key,element1); //retuns key value pair
}
for (const key in obj) {
    console.log(key);//only returns key
}
for (const i of 'supravat') {
    console.log(i);
}

// let a=20;
// let b=30;

function add(a,b){
   return a+b;
}

result =add(20,30);
console.log(result);

function sub(add){
   
}
