let jobs =[
    'frontEnd',
    'backEnd',
    'fullStackDev',
    'UiDesigner',
    'UxDesigner',
    'devOps'
];

jobs.forEach(job=> {
    console.log(job);
});

console.log(jobs.length)


// let node = document.createElement('LI');
// let textNode = document.createTextNode(jobs[0]);
// node.appendChild(textNode);
// let ulList = document.getElementById('myList');
// ulList.appendChild(node);


// console.log(ulList)
// console.log(node)

for (let i=0; i<jobs.length; i++){
    let node = document.createElement('LI');
    let textNode = document.createTextNode(jobs[i]);
    node.appendChild(textNode);
    let ulList = document.getElementById('myList');
    ulList.appendChild(node);
}




// for (let i=0; i = jobs.length; i++){
//     let textNode = document.createTextNode(jobs[i]);
//     node.appendChild(textNode);
// }

