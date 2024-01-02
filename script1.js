//to compare 2 objects
let obj1={name:"Person 1",age:5}
let obj2={age:5, name:"Person 1"}
console.log(JSON.stringify(obj2))
if(JSON.stringify(obj1) == JSON.stringify(obj2)){
    console.log("yes")
}else{
    console.log("no");
}