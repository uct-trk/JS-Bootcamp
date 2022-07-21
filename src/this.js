// this
// bir fonksiyonun nasıl çağırıldığına bağlı olarak değişen söz konusu nesnedir
// 1- objeye bağlı olan fonksiyon durumu çağırıldığı zaman o anki söz konusu olan objeye referans verir
// diğer durumlarda global objecte(window) referans verir

// window nesnesini gösterir
console.log(this == window)
console.log(this)
console.log(this.location)

//const name = "Ugurcan"
// ugurcan ı gösterir
//console.log(name)
// this.name ugi yi gösterir
//console.log(this.name)

// function decleration 
// window nesnesine referans verir
function func1() {
    // window nesneye property olarak eklendi
    //this.name = "ugi"
    console.log(this)
}
//func1()

// window nesnesine referans verir
const func2 = function () {
    // window nesneye property olarak eklendi
    // this.age = 40;
    console.log(this)
}
//func2()


// aşağıdakilerde this ler o an oluşturulmuş nesneyi refer eder

function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function () {
        return this.name + " " + this.surname
    }
}
const ugurcan = new Person("Ugurcan", "Türk", 27)
const gurcan = new Person("Gurcan", "Çekiç", 40)
console.log(ugurcan)
console.log(gurcan)

class Kisi {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    fullName() {
        return this.name + " " + this.surname
    }
}

const ugi = new Kisi("Ugi", "Trk", 20)
console.log(ugi.fullName())
console.log(ugi)

const arin = {
    name: "Arin",
    age: 5,
    surname: "Çekiç",
    fullName: function () {
        // this ait olduğu nesneyi refer eder
        return this.name + " " + this.surname
    },

    mother: {
        name: "Ayşe",
        surname: "Çekiç",
        age: 30,
        fullName: function () {
            // this ait olduğu(mother) nesnesini refer eder
            return this.name + " " + this.surname
        }
    }
}
console.log(arin.fullName())
console.log(arin.mother.fullName())

const elis = {
    name: "Elis",
    funcy: function () {
        // elis nesnesini referans veriyor true döner
        console.log(this == elis)
    }
}
console.log(elis.funcy())
const funcy2 = elis.funcy
// window objecti referans eder
console.log(func2())

const uct = {
    name: "UCT",
    funcUct: function () {
        // uct nesnesini referans veriyor true döner
        console.log(this == uct)
        // kendi basına çalışan ananim fonksiyon
        // kendi basına calısan anonım fonksiyonun this i global nesnedir
        setTimeout(function () {
            // window nesnesini refer ederceği için uct nesnesini refer etmez windowu eder
            // false doner
            console.log(this == uct)
            // true doner
            console.log(this == window)
        }, 2000);
    }
}
console.log(uct.funcUct())