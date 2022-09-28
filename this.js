//---------------------this Keyword----------------------//
this.num = 10

this.value = {
    num : 20,
    returns()
    {
        console.log("Value's num:"+this.num);
    }
}

let value2 = {
    num : 30,
    returns()
    {
        console.log("Value2's num:"+this.num)
    }
}

const funValue = function()
{
    console.log("Functional this.num: "+this.num)
}

const funValue2 = function()
{
    const innerFun = () =>
    {
        console.log("Inner Functional this.num: "+this.num)
    }
    innerFun()
}
    

console.log("this.num: "+this.num)

console.log("this.value.num: "+this.value.num)

this.value.returns()

value2.returns()

funValue.call(this)
funValue.call(this.value)
funValue.call(value2)
funValue2.call(this)











// class Student
// {
//     static count=0
//     constructor(name,age,phNumber,marks)
//     {
//         this.name = name;
//         this.age = age;
//         this.phNumber = phNumber;
//         this.marks = marks;
//         Student.count++
//     }
//     elig(m) {
//         if(m>=40)
//         {
//             console.log(`${this.name} is eligible.`)
//         }
//         else
//         {
//             console.log(`${this.name} is not eligible.`) 
//         }
//     }
//     static studentCount()
//     {
//         console.log("Students Count: "+Student.count)
//     }
// }

// let s1 = new Student('Hari',21,12345,39);
// let s2 = new Student('Ram',22,23456,70);
// let s3 = new Student('Sita',24,34567,80);
// let s4 = new Student('Valmiki',35,45678,20);
// let s5 = new Student('Lakshman',19,56789,40);
// s1.elig()
// s2.elig()
// s3.elig()
// s4.elig()
// s5.elig()
// Student.studentCount()