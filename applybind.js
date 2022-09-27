// 1
function shouldCalled()
{
    console.log('Funcion Called');
}
shouldCalled.call();

// 4
const student = {age:20};
function printAge()
{
    return this.age;
}
console.log("Returning Student Age:"+printAge.call(student));

//2
function applyAge(addAge)
{
    return this.age+addAge;
}
const addAge=[10]
console.log("Using apply: "+applyAge.apply(student, addAge));

//3
const returnBind = applyAge.bind(student);
console.log("Using bind: "+returnBind(addAge))