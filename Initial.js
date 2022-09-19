console.log(document.URL)
console.log(document.images)
console.log(document.title="Modified by JS")

// Get Element By Id
var head=document.getElementById('main-header');
var itemm=document.getElementById('items-m');

head.style.border='solid 3px #000';
itemm.style.color="green"
itemm.style.fontWeight="bold"

// Get Element By Class
var lists = document.getElementsByClassName('list-group-item')
console.log(lists)
lists[2].style.backgroundColor = 'green'
for(let i=0;i<lists.length;i++)
{
    lists[i].style.fontWeight ="bold"
}