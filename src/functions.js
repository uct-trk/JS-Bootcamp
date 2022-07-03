// fonksiyonlar
// js de fonksiyonlarda birer nesnedir
// function declaration
// function declaration hoisted olarak çalışabilir
console.log(square(6))
function square(num) { // fonsiyonun içerisindeki parametre yani fonksiyonu oluştururken kullandığımız değişken
    return num * num
}
console.log(square)
console.log(square(6)) // () parantez invoke etmemizi sağlıyor. Çalıştırırken arguman olarak adlandırılır


// function expression
// eğer function declerationu değişkene atıyorsak function expression oluşturmuş oluyoruz
// fuction declerationda hoisted yoktur
const karesi = function karesi(sayi) { // fonksiyon ismi opsiyoneldir kullanmasakta olur
    return sayi * sayi
}
console.log(karesi(4))

const sq = function (sayi) {
    return sayi * sayi
}
console.log(sq(4))

// function expression function declerationdan daha fazla kullanılır
// sebebi değişkene atıyoruz ve değişkene istediğimiz gibi davranabiliyoruz ve artık o değişkenin ismi first class function oluyor
// fonksiyonun değişkene atanabilmesinin avantajı değişken gibi davranabiliyoruz

const myArr = [6, "Arin", function () { console.log("Array Element") }]
myArr[2]() // fonksiyonu çalıştırabiliyoruz
console.log(myArr)

const myObj = {
    age: 5,
    name: "Arin",
    func: function () { console.log("Object Element") }
}
myObj.func()
console.log(myObj)
console.log(20 + function () { return 10 }()) // iife fonksiyonu

// first class fonksiyonun en buyuk avantajı bir fonksiyonu baska bir fonksiyona arguman olarak alabiliriz
const addFive = function (num, fonk) {
    console.log(num + fonk)
}
const fonk = function (number) {
    return number;
}
addFive(2, fonk(5))

const myFunc = function (num) {
    return function toDouble() {
        console.log(num * 2)
    }
}
myFunc(8)()

// IIFE
// immediately invocable function expression
// oluşturulur oluşturulmaz çalışan fonksiyondur
const toplam = function () {
    console.log(5 + 22)
}()

