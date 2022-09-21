let form = document.querySelector('#my-form')
let inpName = document.querySelector('#name');
let inpEmail = document.querySelector('#email');
let msg = document.querySelector('.msg');
let listVals = document.querySelector('#users')
let itemIndex = 1

form.addEventListener('submit', addNE)
function addNE(e)
{
    e.preventDefault();
    if(inpName.value === '' || inpEmail.value === '')
    {
        msg.innerHTML = 'Please fill the above fields.';
        msg.classList.add('error')
        setTimeout(() => msg.remove(), 3000);
    }
    else
    {
        let lis = document.createElement('li')
        lis.appendChild(document.createTextNode(`${inpName.value} : ${inpEmail.value}`))
        listVals.appendChild(lis)
        localStorage.setItem(`item ${itemIndex}`, `${inpName.value} : ${inpEmail.value}`)
        itemIndex+=1;
        inpName.value = ''
        inpEmail.value = ''
    }
}
