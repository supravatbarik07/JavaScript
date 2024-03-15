// const x=[1,2,3,4,5,6,7]

// for (let index = 0; index < x.length; index++) {
//     const element = x[index];
//     console.log(element);
// }

// x.forEach((value,index,arr) => {
//     console.log(value,index,arr); //value returns array value , index returns index of vallue,arr returns hole array
// });

// const xy={
//     a:90,
//     b:56,
//     c:89
// }

// for (const key in xy) {
//     if (xy.hasOwnProperty.call(xy, key)) {//only returns object own property.
//         const element = xy[key];
//         console.log(element);
//     }
// }

// for (const value of x) {
//     console.log(value);  //it returns each element one by one.
// }


const arr=[2,3,15,7,8,10]
const newArray=[]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];     
    newArray.push(element**2);   //it push the result into new array
}
console.log(newArray)

/* it can use instaed of classical for loop*/
const newArr=arr.map((i)=>{
    return i**2;    
})
console.log(newArr);

const greaterThenSeven=(i)=>{
    if(i>7){
        return true;
    }
    return false;
}
console.log(newArray.filter(greaterThenSeven))//it can use for giving conditions to the array elements.


let arr1=[2,6,8,3,9,4]

const add=(x,y)=>{
    return x*y
}
/**it is returns a single value
 * 
 */
console.log(arr1.reduce(add));


console.log(Array.from('supravat'));//it convert any object into array.