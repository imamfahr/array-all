let a = ['Math','English','Programming'];
let b = ['Geography','Spanish','Programming'];

let arrCheck = [];

a.forEach((num,index)=>{
    if(a[index]==b[index]){
        arrCheck.push(true)
    }
    else{
        arrCheck.push(false)
    }
})

console.log(arrCheck)