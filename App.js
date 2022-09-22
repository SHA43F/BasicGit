let inpName=document.getElementById('name')
let inpValue=document.getElementById('value')
let sub=document.getElementById('sub')

sub.addEventListener('click', submitNodes)
function submitNodes(e)
{
    e.preventDefault();
    let obj = {name: inpName.value, value: inpValue.value}
    let obj_serial = JSON.stringify(obj)
    localStorage.setItem(obj.name+obj.value, obj_serial)
    inpName.value = ""
    inpValue.value = ""
}
Object.keys(localStorage).forEach((key) => 
{
    let keyes = localStorage.getItem(key);
    let vals = JSON.parse(keyes);
    let li_items = document.getElementById('lists');
    let lists = `<li>${vals.name} ${vals.value}</li>`;
    li_items.innerHTML += lists;
});