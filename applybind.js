let multiplyForTwo = function (x,y)
{
    console.log(x*y)
}
let multiplyForThree = function (x)
{
    return function (y)
    {
        console.log(x*y)
    }
}
var multiplyByTwo = multiplyForTwo.bind(this,2);
multiplyByTwo(5);
var multiplyByThree = multiplyForThree(3);
multiplyByThree(5);