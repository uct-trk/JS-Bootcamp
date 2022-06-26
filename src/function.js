// Eğer parametreye değer göndermezsek default değer yazar
function addToCart(product = "ELMA", quantity = 20) {
    console.log(product + " Sepete eklendi! " + quantity + " adet")
}
addToCart() // bellekte bişey oluşturmadığı için undefined yazar yani tanımlı olmayan demek
addToCart("Kahve")
addToCart("Çay", 10)
addToCart("Kola")


// değişkene fonksiyon atıyoruz arrow func
let sayHello = () => {
    console.log("Merhaba Dünya")
}
sayHello()

// değişkene fonksiyon atıyoruz decleration func
let sayHello2 = function () {
    console.log("Merhaba Dunya 2")
}
sayHello2()

function addToCart2(productName, quantity, unitPrice) {

}
addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
addToCart2("Limon", 3, 15)

// obje key ve value den oluşur
let product1 = {
    productName: "Elma",
    quantity: 5,
    unitPrice: 10
}
let product2 = {
    productName: "Elma",
    quantity: 5,
    unitPrice: 10
}
let product3 = {
    productName: "Elma",
    quantity: 5,
    unitPrice: 10
}
// değişkenler ikiye ayrılır değer ve referans olarak
// primitive olanlar değer tiptir
// objeler arrayler referans tiptir
// product2 nin referans numarası product3 ile aynı oluyor(bellekteki numaraları)
product2 = product3;
product2.productName = "Karpuz";
console.log(product3.productName + " ornek")
function addToCart3(product) {
    console.log(product.productName + " eklendi " + product.quantity + " adet " + "Fiyatı: " + product.unitPrice)
}
addToCart3(product1)


// değer tiptir
let sayi1 = 10
let sayi2 = 20

sayi1 = sayi2
sayi1 = 100
console.log(sayi2) // sayı2 20 olarak yazdıracaktır değer ipte olduğu için

function addToCart4(products) {
    console.log(products)
}
let products = [
    {
        productName: "Elma",
        quantity: 5,
        unitPrice: 10
    },
    {
        productName: "Armut",
        quantity: 5,
        unitPrice: 10
    },
    {
        productName: "Karpuz",
        quantity: 5,
        unitPrice: 10
    },
]
addToCart4(products)

// rest operatoru yazılan rakamları dizide toplar
// rest oeratoru fonksiyonun son parametresi olmalıdır aksi halde hata alırız
function add(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
}

add(20, 30, 40, 50)

// spread kullanarak arrayın ıcındeki sayıları ayırdık ve en buyuk değeri bulduk
let numbers = [20, 30, 70, 150, 600, 120]
console.log(Math.max(...numbers))


// destructuring
// Destructuring bir obje veya bir array içinden her bir elemanın alınıp bir değişken içine kaydedilmesi.
let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri, marmaraSehirleri, karadenizSehirleri]] = [{ name: "ic anadolu", population: "20M" }, { name: "marmara", population: "30M" }, { name: "karadeniz", pupulation: "25M" }, [
    ["Ankara", "Konya"], ["İstanbul", "Bursa"], ["Sinop", "Trabzon"],
]]
console.log(icAnadolu.name)
console.log(marmara.population)
console.log(karadeniz)
console.log(icAnadoluSehirleri)
console.log(marmaraSehirleri)
console.log(karadenizSehirleri)
