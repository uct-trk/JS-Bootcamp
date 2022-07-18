// Class 1 
// js classları ozel bir js functionudur
// constructor function
function Person(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    /* this.fullName = fullName; */
}

// full nameyı prototypa ekliyoruz
Person.prototype.fullName = function () {
    return this.name + " " + this.surname
}

Person.prototype.friends = ["Ela", "Ruzgar"]

// nesne oluşturduk
const arin = new Person("Arin", "Çekiç", 5)
const elis = new Person("Elis", "Çekiç", 3)

console.log(arin)
console.log(elis)
console.log(arin.fullName())
console.log(elis.fullName())
console.log(arin.friends)
console.log(elis.friends)

arin.friends.push("Çınar")
console.log(arin.friends)

// elisin arkadaşlarına da eklendi
// sebebi friends prototyptan geldiği için
// iste bu noktada classlara ihtiyacımız oluyor
console.log(elis.friends)

// class nasıl oluşturulur
// class denilen şey özel bir fonksiyondur

// constructor bir classın içindeki methottur
// constructor methodu nesne oluşturmak için çalışan methottur
// class decleration ornegı
class Kisi {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.friends = ["Ela", "Ruzgar"]
    }
    // classta oluşturlan methot prototypta gorunuyor
    tamIsim() {
        return this.name + " " + this.surname
    }
}
const ugur = new Kisi("Ugurcan", "Turk", 27)
const umit = new Kisi("Umit", "Turk", 25)
console.log(ugur)
console.log(ugur.tamIsim())
console.log(umit)
console.log(umit.tamIsim())
// sadece ugur arkadaşına mehmet eklenecektir class kullanmamın avantajı burada ortaya çıkıyor
// nesne prototypında hepsine mehmet ismini ekleyeceği için kullanım için avantaj sağlamaz
console.log(ugur.friends.push("Mehmet"))

// class expression ornegi
const Insan = class {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.friends = ["Ela", "Ruzgar", "Oruc"]
    }
    tamIsim() {
        return this.name + " " + this.surname
    }
}

const yeniKisi = new Insan("Ali", "Türk", 30)
console.log(yeniKisi.friends)