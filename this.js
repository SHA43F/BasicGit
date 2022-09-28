// 1)
// Fat arrow function

// let a = function(){
//     return 1
// }
let a = () => 1
console.log(a())

var add = (b,c) =>{
    return b*c
}
console.log(add(2,3))

var add =(...n) =>{
    return n
}
console.log(add(1,2,3,4,5))

// 2)
// 3)
class Student
{
    constructor(name,age,phNumber,marks)
    {
        this.name = name;
        this.age = age;
        this.phNumber = phNumber;
        this.marks = marks;
    }
    elig() {
        let eligiblity = (age) =>{
            const minAge = 22;
            const minMarks = 40;
            if(age>=minAge && this.marks>=minMarks)
            {
                console.log(this.name)
            }
        }
        eligiblity(this.age)
    }
}

let s1 = new Student('Hari',21,12345,39);
let s2 = new Student('Ram',22,23456,70);
let s3 = new Student('Sita',24,34567,80);
let s4 = new Student('Valmiki',35,45678,20);
let s5 = new Student('Lakshman',19,56789,40);
s1.elig();
s2.elig()
s3.elig()
s4.elig()
s5.elig()