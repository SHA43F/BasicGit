let itemVal = document.getElementById('addForm')
let items = document.getElementById('items')
let filt = document.getElementById('filter')

itemVal.addEventListener('submit', additem)
items.addEventListener('click', delVal)
filt.addEventListener('keyup', filtval)

function additem(e)
{
    e.preventDefault();
    let inputStr = document.getElementById('item').value
    let inputDesc = document.getElementById('descript').value
    let newItem = document.createElement('li')
    newItem.className = 'list-group-item'
    newItem.appendChild(document.createTextNode(inputStr+ ' '+inputDesc));
    items.appendChild(newItem)
    let deleteBtn = document.createElement('button')
    deleteBtn.className = "btn btn-danger btn-sm float-right delete"
    deleteBtn.innerText = 'X'
    newItem.appendChild(deleteBtn)
    let editBtn = document.createElement('button')
    editBtn.className = "btn btn-edit btn-sm float-right edit"
    editBtn.innerText = "Edit"
    editBtn.style.backgroundColor = 'green'
    editBtn.style.borderColor = 'green'
    editBtn.style.color = 'white'
    editBtn.style.marginRight = '5px'
    newItem.appendChild(editBtn)
    
}

function delVal(e)
{
    if(e.target.classList.contains('delete'))
    {
        let newItem = e.target.parentElement;
        items.removeChild(newItem);
    }
    
}

function filtval(e)
{
    let txt = e.target.value.toLowerCase();
    let itemtxt = document.getElementsByTagName('li')
    Array.from(itemtxt).forEach(function(item)
    {
        let itemString =item.firstChild.textContent;
        if(itemString.toLowerCase().indexOf(txt)!=-1)
        {
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none'
        }
    });
}