let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());
//let myNewDate=new Date(2023,0,23);
let myNewDate=new Date("02-10-2007");
console.log(myNewDate)
let helloTime=Date.now()
console.log(helloTime)
console.log(myNewDate.getTime())
let newDate=new Date()
console.log(newDate.getMonth()+1)
console.log(newDate.getDate())
console.log(newDate.getDay())
console.log(newDate.getFullYear())
newDate.toLocaleString('default', {
    weekday:"long"
})