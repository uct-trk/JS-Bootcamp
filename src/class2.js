// Class part 2
/* class Person {
    // constructor metodu temelde 2 işe yarıyor
    // classtan faydalanıp yeni bir obje oluşturduğumuzda
    // 1- Hafızda yeni bir obje(nesne) oluşturuyor
    // 2- this anahtar kelimesini o objeye bağlıyor
    constructor(name, surname, age) {
        this.name = name
        this.surname = surname
        this.age = age
    }
    // Class içerisinde fonksiyon oluşturduğumuz zaman prototypın içerisinde yer alır
    fullName() {
        return this.name + " " + this.surname
    }

    // belli metotların ve ozelliklerin yazlnızca o classa ait olmasını istediğimiz zaman kullanırız
    // static showName = "Person"
    static staMethod() {
        console.log("Static method is working")
    }
}
console.log(typeof Person)
const ugur = new Person("Ugur", "Turk", 27)
const elis = new Person("Elis", "Çekiç", 5)
console.log(ugur)

console.log(ugur.fullName()) */

// hata verir
// console.log(ugur.showName)
// hata verir
// console.log(ugur.staMethod())

// sadece bu class ta kullanılabilen methodu kullandık
// console.log(Person.staMethod())

// neden bizim class a ihtiyacımız olsun ?
// en temel sebebi problemi parçalara ayırmak bizim işimizi çok kolaylaştırır
// classlar nesnelerin şablonudur

class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    fullName() {
        return this.name + " " + this.age
    }
}

// persondan inherit(miras) aldık
class Engineer extends Person {
    constructor(name, surname, age, job) {
        // super sayesinde propertyleri super(parent) classından alırız
        super(name, surname, age)
        this.job = job
    }
    getMoney() {
        console.log("Earn Money")
    }
}

const arin = new Person("Arin", "Çekiç", 5)
console.log(arin)

const ugurcan = new Engineer("Ugurcan", "Turk", 27, "Developer")
console.log(ugurcan)
console.log(ugurcan.getMoney())
// true
console.log(arin instanceof Person)

// true
console.log(ugurcan instanceof Person)

// false
console.log(arin instanceof Engineer)

class ExtendedArray extends Array {
    // var olan array elemanını karıştırıyor
    shuffle() {
        this.sort(() => Math.random() - 0.5);
    }
}

let myArr = new ExtendedArray(1, 2, 3, 4, 5);
console.log(myArr)
myArr.shuffle()
console.log(myArr)