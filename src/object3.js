// new object syntax

// 1- Shorthand Properties
// eğer key ve value aynı isme sahipse tek olarak yazarsakta çalışır
let name = "ugur", age = 5;
/* const myObj = {
    name:name, 
    age:age 
} */
const myObj = {
    name,
    age
}
console.log(myObj)

// 2- Computed Propery Names
let prop = "surname"
let prop1 = "name"
let myObject = {
    // yeni yontemle direkt içerisine ekleyebiliyoruz
    [prop]: "turk"
}

// bracket notationun içerisine name geliyor
myObject[prop1] = "arin"
console.log(myObject)


// 3- Short Method Syntax
const person = {
    name: "Ali",
    surname: "Tyson",
    age: 60,
    // kısa yolu bu şekilde
    fullName() {
        return this.name + " " + this.surname
    }
}
console.log(person)
console.log(person.fullName())

// 4- Object destructing
// nesne parçalama bir objenin içerisindeki değerleri değişkenlere atamak için kullanırız
const personel = {
    isim: "Ali",
    surname: "Tyson",
    yas: 60,
    // kısa yolu bu şekilde
    fullName() {
        return this.isim + " " + this.surname
    }
}
let { isim, surname, yas } = personel
console.log(isim, surname, yas)

// 5- Spread Operator in Object Literals

const books = [
    {
        title: "Kırmızı Pazartesi",
        author: "Haruki Murakami",
        pageNum: 296,
        imageURL: "https://i.idefix.com/cache/600x600-0/originals/0000000064101-1.jpg",
        topic: "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor."
    },
    {
        title: "Şeker Portakalı",
        author: "Jose Muro de Vasconselos",
        pageNum: 200,
        imageURL: "https://i.idefix.com/cache/600x600-0/originals/0000000064031-1.jpg",
        topic: "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor."
    },
    {
        title: "En Uzun Yüzyıl",
        author: "İlber Ortaylı",
        pageNum: 296,
        imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001744876001-1.jpg",
        topic: "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor."
    },
    {
        title: "Dracula",
        author: "Bram Stoker",
        pageNum: 200,
        imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001828853001-1.jpg",
        topic: "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor."
    },
    {
        title: "Karamazov Kardeşler",
        author: "Fyodor Mihayloviç Dostoyevski",
        pageNum: 200,
        imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001803800001-1.jpg",
        topic: "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor."
    },
    {
        title: "Sultanın Korsanları",
        author: "Emrah Safa Gürcan",
        pageNum: 296,
        imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001780787001-1.jpg",
        topic: "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor."
    }
]

console.log(books)
// destructuring örneği
for (let { title, author } of books) {
    console.log(title + " : " + author)
}

// Spread Operator in Object Literals (...)
// spread opearatoru sayesinde var olan nesnenin özelliklerini kopyalamada veya birleştirmede kullanırız

/* const personelOld = {
    isim: "Ali",
    surname: "Tyson",
    yas: 60,
    // kısa yolu bu şekilde
    fullName() {
        return this.isim + " " + this.surname
    }
}
let personelNew = { ...personelOld }
console.log(personelNew) */

/* let myObj1 = { name: "Arin", age: 6 }
let myObj2 = { jon: "Student", gender: "female" }
let mergedObj = { ...myObj, school: "Primary School", myObj2 }
console.log(mergedObj) */

// 6- Rest Operatoru

/* const personelBox = {
    i: "Ali",
    s: "Tyson",
    y: 60,
    // kısa yolu bu şekilde
    fullName() {
        return this.isim + " " + this.surname
    }
} */
// geri kalan propertileri rest şeklinde aldık
/* let { i, ...rest } = personelBox;
console.log(rest) */

// 7- Object Values - Object Entries

const personelNew = {
    isim: "Ali",
    surname: "Tyson",
    yas: 60,
    // kısa yolu bu şekilde
    fullName() {
        return this.isim + " " + this.surname
    }
}

// keyleri array olarak döner
console.log(Object.keys(personelNew))

// valueleri array şeklinde döner
console.log(Object.values(personelNew))

// Object entries key ve value çiftini ikili array şeklinde yazdırıyor
console.log(Object.entries(personelNew))