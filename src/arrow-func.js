// arrow func

// arrow function expression

// tek satır yazdığımız için süslü parantezleri ve return yazmamıza gerek yok
/* const square = (num) => (num * num)
console.log(square(6)) */

/* window.isim = "ugurcan"
function tellName() {
    // windowu gösteriyor
    console.log(this)
    // window nesnesine ait olan ismi gösterir
    console.log(this.isim)
}
tellName() */

/* const person = {
    name: "ugur",
    tellName: function () {
        // nesneyi gösterir
        console.log(this)
        // nesneye bağlı olan ismi(ugur) gösterir
        console.log(this.name)
    }
}
console.log(person.tellName())

window.isim = "ugurcan"
const isimYaz = () => {
    // window nesnesini gosterir
    console.log(this)
    // window nesnesine bağlı olan property gösterir
    console.log(this.isim)
}
isimYaz()

window.text = "widow bla bla"

const kisi = {
    text: "bla bla",
    tellSomething: () => {
        // windowu gösterir
        console.log(this)
        // windowa bağlı olan texti gösterir
        console.log(this.text)
    }
}
console.log(kisi.tellSomething()) */
/* window.name = "arin"

const person = {
    name: "elis",
    tellName: function () {
        console.log(this)
        console.log(this.name)
        //anonim fonksiyon olduğu için windowu gösterir ve windowa ait ismi gösterir
        setTimeout(function () {
            console.log(this)
            console.log(this.name)
        }, 2000)
    }
}
console.log(person.tellName()) */

/* window.name = "arin"

const person = {
    name: "elis",
    // arrow function olduğu için windowu gösterir
    tellName: () => {
        console.log(this)
        console.log(this.name)
        //anonim fonksiyon olduğu için windowu gösterir ve windowa ait ismi gösterir
        setTimeout(() => {
            console.log(this)
            console.log(this.name)
        }, 2000)
    }
}
console.log(person.tellName()) */


/* window.name = "arin"
const person = {
    name: "elis",
    // person nesnesini gösterir
    tellName: function () {
        console.log(this)
        console.log(this.name)
        // normal fonksiyonun içinde kullanıldığı için person nesnesini gösterir
        setTimeout(() => {
            console.log(this)
            console.log(this.name)
        }, 2000)
    }
}
console.log(person.tellName()) */

window.year = 100

const myObj = {
    year: 2022,
    showYear1: function () {
        console.log(this.year, this)
    },
    // this year windowu verir arrow functionun kendine ait this i yok
    showYear2: () => console.log(this.year, this)
}
console.log(myObj.showYear1())
console.log(myObj.showYear2())


// CALL
window.name = "Ugurcan"
window.grade = 70
const student = {
    // objelere bağlı olan notu ve ismi yazdırır
    examResult: function () {
        return this.name + " " + this.grade
    },
    // window nesnesine bağlı olan ismi ve notu yazdırır
    examResArrow: () => {
        return this.name + " " + this.grade
    }
}

const student1 = {
    name: "Arin",
    grade: 80
}
const student2 = {
    name: "Elis",
    grade: 77
}

console.log(student.examResult.call(student1))
console.log(student.examResult.call(student2))
console.log(student.examResArrow.call(student2))
