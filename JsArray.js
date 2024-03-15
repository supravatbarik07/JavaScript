// let arr=['supravat',24,'Odisha','india',
// fruit={
//     mango:23,
//     banana:20
// },
// function add(){
//  console.log("hii");
//  return add;
// }
// ] 
// // this.add();
// console.log(arr); //to print te array elements.

// console.log(arr.length)//array length.
// console.log(arr[0])//retrive element by index number.

let fun=[1,2,3,4,57,90]

fun.pop(); //remove only last element

console.log(fun);

fun.push('supo');//it add an element after last element.

console.log(fun);

fun.shift();//its remove only first element of array 

console.log(fun);

fun.unshift('supra');//its add element at index position 0.

console.log(fun);

delete fun[2];//it deleted the passing index value element, but still memory allocated to this index element

console.log(fun);

fun.sort();//it sort the elemnt of the array in alphabetically order.

console.log(fun);

let fun1=[1,2,4,6];
let fun2=[3,7,8];
let fun3=[5,9,0];

let concat1=fun1.concat(fun2,fun3)//it concat the array elemnts but not changed the element alphabetically

console.log(concat1)

console.log(fun1)

fun1.splice(1,2)// first no shows the index no and 2nd one is how many numbers you want to add . 

console.log(fun1)

fun1.splice(1,1,89,9)//first no indicates the index no from which position you want to remove and 2nd one is how many numbers you want to remove . 3rd and 4th are added in the removed  index place.

console.log(fun1)

  

 console.log(fun1.slice(1));  //it returns from position 1 all element

const n=[2,3,4,9,5]

console.log(n.slice(2))//it returns element from index which is passed 

console.log(n.slice(1,3))//it returns element from first index  to before last index which is passed 

console.log(n.reverse())//it reverse the array.

