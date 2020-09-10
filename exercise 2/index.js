let array = ['budi','sari','intan','indah','andi','toni'];
console.log(array)

let kelompok1 = array.slice(0,3).join();
let kelompok2 = array.slice(3,6).join();

console.log(`kelompok 1, ketua ${array[0]}`,kelompok1)
console.log(`kelompok 2, ketua ${array[3]}`,kelompok2)