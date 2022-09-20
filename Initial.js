let itemVal = document.getElementById('addForm')
let items = document.getElementById('items')

itemVal.addEventListener('submit', additem)
items.addEventListener('click', delVal)

function additem(e)
{
    e.preventDefault();
    let inputStr = document.getElementById('item').value
    let newItem = document.createElement('li')
    newItem.className = 'list-group-item'
    newItem.appendChild(document.createTextNode(inputStr));
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