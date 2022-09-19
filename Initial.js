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

//Query Selector
let secList = document.querySelector('.list-group-item:nth-child(2)');
let triList = document.querySelector('.list-group-item:nth-child(3)');

secList.style.backgroundColor = 'green'
triList.style.color = 'transparent'

