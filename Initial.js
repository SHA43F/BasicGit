// console.log(document.URL)
// console.log(document.images)
// console.log(document.title="Modified by JS")

// // Get Element By Id
// var head=document.getElementById('main-header');
// var itemm=document.getElementById('items-m');

// head.style.border='solid 3px #000';
// itemm.style.color="green"
// itemm.style.fontWeight="bold"

// // Get Element By Class
// var lists = document.getElementsByClassName('list-group-item')
// console.log(lists)
// lists[2].style.backgroundColor = 'green'
// for(let i=0;i<lists.length;i++)
// {
//     lists[i].style.fontWeight ="bold"
// }

// //New list item added with different class name
// let list2 = document.getElementsByClassName('new-list-item');

// list2[0].style.color = 'blue'
// list2[0].style.fontSize = '20px'

// //Get Element By Tag name

// var lis_tag = document.getElementsByTagName('li')

// lis_tag[4].style.alignSelf = 'center'

// //Query Selector
// let secList = document.querySelector('.list-group-item:nth-child(2)');
// let triList = document.querySelector('.list-group-item:nth-child(3)');

// secList.style.backgroundColor = 'green'
// triList.style.color = 'transparent'

// //Query Selector All

// let secListAll = document.querySelectorAll('.list-group-item');
// let oddListAll = document.querySelectorAll('.list-group-item:nth-child(odd)');

// secListAll[1].style.color = 'green';
// for(let i=0;i<oddListAll.length;i++)
// {
//     oddListAll[i].style.backgroundColor = 'green'
// }

// Traversing the DOM
let trav = document.querySelector('#items')
console.log(trav.parentElement)

console.log(trav.lastChild)
console.log(trav.lastElementChild.style.color = 'red')

console.log(trav.firstChild)
console.log(trav.firstElementChild.style.color = 'blue')

console.log(trav.nextSibling)
console.log(trav.nextElementSibling)

console.log(trav.previousSibling)
console.log(trav.previousElementSibling.style.backgroundColor = 'green')

//Creating a new Element
let elem = document.createElement('div');

elem.className = 'heads'
elem.id = 'hhdd'
elem.setAttribute('title', 'hello-title');

let elemVal = document.createTextNode('HELLO')

elem.appendChild(elemVal);

let headNode = document.querySelector('header .container');
let h1 = document.querySelector('header h1')
headNode.insertBefore(elem, h1)

let hells = document.createElement('div')
hells.className = 'he'
console.log(hells)

