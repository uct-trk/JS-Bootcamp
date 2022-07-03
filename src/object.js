// object
// person nesnesinin 6 tane propertisi vardır
// nesneyle ilişkili fonksiyonlara method denir
// this burada oluşturulan nesneyi refere eder
const person = {
    name: "John",
    surname: "Doe",
    age: 40,
    languages: ["Turkish", "English", "Spanish"],
    fullName: function () {
        return this.name + " " + this.surname
    },
    address: {
        city: "Antalya",
        district: "Muratpaşa"
    }
}
console.log(person)

// Object Literal
// en çok kullanılan nesne oluşturma yöntemidir

// dot notation
// dot notation ile nesnemizdeki ilgili valueye erişebiliriz
console.log(person.name)
console.log(person.fullName())

// yeni bir property oluşturduk
person.job = "Developer"
console.log(person.job)

// bracket notation
console.log(person["name"])
console.log(person["age"])
console.log(person["fullName"]())

person.education = {};
person.education.university = "Uludağ"
person.education.primarySchool = "Süleyman Cura"
console.log(person)

// constructor yapıcı methot fonksiyon
// constroctor fonksiyonu kullanarak js nesnesi oluşturabiliriz
/* function Person(name, surname, age) {
    const obj = {};
    obj.name = name;
    obj.surname = surname;
    obj.age = age;
    obj.fullName = function () {
        return obj.name + " " + obj.surname
    }

    return obj;
} */

// this current objecte referans verir
// parametrelerden gelen değerler sağ tarfata
// sol taraftakiler keylerdir
function Person(name, surname, age) {
    console.log(this)
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function () {
        return this.name + " " + this.surname
    }
    console.log(this)
}

// person1 nesnemizi oluşturduk
const person1 = new Person("Uğurcan", "Türk", 27)
//const person2 = new Person("Ricardo","Quaresma",40)
console.log(person1)
//console.log(person2)

// Object Constructor
// js in kendisinde olan constructor fonksiyonu
const personNew = new Object()
personNew.name = "Ahmet"
personNew.lastName = "Doe"
personNew.age = 35
personNew.fullName = function () {
    console.log(this + " this ?")
    return this.name + " " + this.lastName
}
console.log(personNew)
console.log(personNew.fullName())

// Object.create() methodu ile nesne oluşturmak
// yeni nesne oluştururken eski nesneyi kullanacağız
const personel = {
    name: "John",
    surname: "Doe",
    age: 40,
    languages: ["Turkish", "English", "Spanish"],
    fullName: function () {
        return this.name + " " + this.surname
    },
    address: {
        city: "Antalya",
        district: "Muratpaşa"
    }
}
console.log(personel)
// parametre olarak daha önce oluşturulan nesneyi al
const arin = Object.create(personel)
arin.name = "arin"
arin.surname = "software"
arin.age = 5
console.log(arin)
console.log(arin.fullName())