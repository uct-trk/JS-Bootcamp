// Js single thread olarak çalışır (O anki çalışan kod parçacığı)
// js senkron olarak çalışır (sıalı bir şekilde işlemlerin yapılması)

/* const func1 = () => {
    console.log("Func 1 Console Log 1");
    console.log("Func 1 Console Log 2");
    alert("Alert Message")
}
const func2 = () => {
    console.log("Func 2 Console Log 1");
    console.log("Func 2 Console Log 2");
} */
/* func1()
func2() */

/* let x = 10;
console.log("1. data " + x)

setTimeout(() => {
    x = x + 5
}, 1000)
// 1 sn beklemeden direkt 2. veriyide 1. aynısı yapar
// bu gibi sorunlarla karşılaşmamak için asenkron işlemlere başvururuz
console.log("2. data " + x)

x = x + 5
console.log("3. data " + x) */

// Call Stack
// fonksiyonların çalışma sırasını gösterir

/* function func1() {
    console.log("1. fonksiyon")
    func2()
    console.log("tekrar 1. fonksiyon")
}
function func2() {
    console.log("2. fonksiyon")
    func3()
    console.log("tekrar 2. fonksiyon")
}
function func3() {
    console.log("3. fonksiyon")
}
func1() */

/* function sum(x, y) {
    return x + y
}
function average(x, y) {
    return sum(x, y) / 2
}
let x = average(6, 8)
console.log(x) */

/* function task(message) {
    let n = 10000000000
    while (n > 0) {
        n--
    }
    console.log(message)
}

console.log('1')
setTimeout(() => {
    console.log('2')
}, 1000)

console.log('3')

console.log('4')

task("işlem tamamlandı")

setTimeout(() => {
    console.log('5')
}, 2000)

task("işlem tamamlandı 2") */

// Callback
// js in asenkron çalışmak için bulduğu çözüm
// bize bir işin tamamlandığını veya iş tamamlandığında kendine ait iş olan veya kendine ait tanımlanmış iş olarak gösterilir
// bir eventin sonucunda yapılmasını istediğimiz fonksiyonlardır
/* const myName = () => {
    console.log("Benım adım ugurcan")
}
// 3 sn geçtikten sonra call back fonksiyonunu çağır
// başka bir fonksiyona arguman olarak geliyor
setTimeout(myName, 3000) */

/* const btn = document.querySelector("button")

btn.addEventListener('click', () => {
    alert("You clicked me")
    let pElem = document.createElement('p')
    pElem.textContent = "This is a newly-added paragraph"
    document.body.appendChild(pElem)
}) */

const books = [
    {
        name: "Pinball 1973",
        autohor: "Haruki Murakami"
    },
    {
        name: "Özgğrlük",
        author: "Zygmunt Bauman"
    },
    {
        name: "Türkiye'de Çağdaşlaşma",
        author: "Niyazi Berkez"
    }
]

const listboks = () => {
    books.map((book, index) => {
        console.log(book, index)
    })
}

// call back fonksiyon olarak ekledikten sonra listeleme yapmamızı sağlıyor
const addNewBook = (newBook, callback) => {
    books.push(newBook)
    callback()
}

addNewBook({
    name: "Berlin Hatıralarım",
    author: "Hüsrev Gerede"
}, listboks)

