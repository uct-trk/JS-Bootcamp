// var, let, const

// let değişen değişebilen değişkenler için kullanılır 
// let genelde özel olarak değişmesini istediğimiz ifadelerde kullanırız
let age = 40;
age = 42
console.log(age)

// const letten farklı olarak tekrar değer atayamayız
const name = "ugurcan"
//name = "umit"
console.log(name)

let name1 = "Arin"
console.log(name1)


let str = ""
// let yerine const kullanırsak patlarız
for (let i = 0; i < 10; i++) {
    str = str.concat(i)
    console.log(str)
}


const myArr = [1, 2, 3]
console.log(myArr)
// arraydeki son elemanı kaldırdık
// değişmesinin sebebi hafızadaki yeri hala sabit biz sadece içerisindeki veriyi değiştirdik
// yani referans adresi hala aynı
myArr.pop()
console.log(myArr)

const student = {
    name: "Arin",
    age: 5
}
console.log(student)
student.name = "Elis"
console.log(student)



var age2 = 40
console.log(age2)
age2 = 42
console.log(age2)

// var global scope ve functional scope olarak çalışır
var x = 1;
console.log(x)
if (x == 1) {
    var x = 10;
    console.log(x)
}
console.log(x)

// let block scope olarak çalışır
// const block scope olarak çalışır
let y = 1;
console.log(y)
if (y == 1) {
    let y = 10;
    console.log(y)
}
console.log(y)

// HOISTING ddeğişkene atama yapmadan önce kullanmaktır
// kelime anlamı yukarı çekme yükseltme
// değişkenlerde undefined olur
console.log(a)
var a = 10;
console.log(a)

console.log(b)
let b = "ugur"
console.log(b)


console.log(c)
const c = "merhaba"
console.log(c)