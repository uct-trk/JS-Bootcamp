// Objects - part II

// js prototypın inheritance yontemini kullanarak ortak ozellikleri prototypta toplamaya calışır bir nesneyi baska bir nesneden turetmeye çalışır

const person = {
    name: "John",
    surname: "Doe",
    age: 40,
    fullName: function () {
        return this.name + " " + this.surname
    }
}
console.log(person)
console.log(person.name)
console.log(person.fullName())
// person nesnesini oluşturduğum zaman bunu prototype object tir
// object nesnesine ait olan tüm metotların aynısını person nesnesinde kullanabiliriz
// metotları Object nesnesinde inherit ediyor
console.log(person.toString())
console.log(person.hasOwnProperty("name"))

// OBJECT nesnemiz var + name,surname,age,fullName ----> person

const myObj = {}
console.log(myObj)
console.log(myObj.toString())
// OBJECT ---> myObj



function Person(name, surname, age) {
    this.name = name
    this.surname = surname
    this.age = age
    this.fullName = function () {
        return this.name + " " + this.surname
    }
}
const person1 = new Person("Uğurcan", "Türk", 27)
console.log(person1)
console.log(person1.toString())
// person1 in prototypı persondır
console.log(person1.__proto__)
// OBJECT + name,surname,age ----> person1 ---> arin


const elis = new Person("Elis", "Çekiç", 4)
console.log(elis)
elis.job = "child"
console.log(elis.job)
// OBJECT +  NAME,SURNAME,AGE,FULLNAME ---> Person + job ----> elis 

// nesnedeki toString methodunu değiştirdik
elis.toString = function () {
    return "ELISSSS"
}
console.log(elis.toString())


function Person1(name, surname, age) {
    this.name = name
    //this.surname = surname
    this.age = age
    /*  this.fullName = function () {
         return this.name + " " + this.surname
     } */
}
// soy isimler ortak olduğu için bu şekilde olusturabiliriz
Person.prototype.fullName = function () {
    return this.name + " " + this.surname
}
Person.prototype.surname = "Turk"
const ugur = new Person1("Ugurcan", "Turk", 27)
const umit = new Person1("Umit Yasar", "Turk", 26)
// fullname ve surname prototypin içine gitti
// çünkü iki nesne için de ortak olduğu için koyduk
console.log(ugur)
console.log(umit)


// inheritance bir nesnenin özelliğinin farklı nesneler tarafından kullanılmasına denir
const personel = {
    name: "XXXXXX",
    surname: "XXXXX",
    age: 0,
    fullName: function () {
        return this.name + " " + this.surname
    }
}
const x = Object.create(personel)
// boş gözükür ama personel propertyleri miras alır
console.log(x)
console.log(x.__proto__)

