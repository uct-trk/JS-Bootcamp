let cart = [
    { id: 1, productName: "Telefon", quantity: 3, unitPrice: 4000 },
    { id: 2, productName: "Bardak", quantity: 2, unitPrice: 10 },
    { id: 3, productName: "Kalem", quantity: 5, unitPrice: 3 },
    { id: 4, productName: "Şarj Cihazı", quantity: 1, unitPrice: 100 },
    { id: 5, productName: "Kitap", quantity: 2, unitPrice: 30 },
    { id: 6, productName: "Pot", quantity: 8, unitPrice: 20 },
]



function addToCart(sepet) {
    sepet.push({ id: 7, productName: "Cuzdan", quantity: 1, unitPrice: 220 })
}
addToCart(cart);
// referans tipte olduğu için consolda eklenilende gözükür
console.log(cart)

//map arrayın içerisindeki elemanları tek tek dolaşıyor
cart.map((product, index) => {
    console.log(product.productName + " : " + product.unitPrice * product.quantity)
})

//filter fonksiyonu filtreleme sonucunda bize yeni bir array döndürür
let quantityOver2 = cart.filter((product, index) => (product.quantity > 2)
)
console.log(quantityOver2)

// reduce fonksiyonu toplama işlemi yapmamızı sağlıyor sıfır acc nin başlangıç değeridir
let total = cart.reduce((acc,product) => acc+product.unitPrice * product.quantity,0)
console.log(total)

let sayi = 10;
function sayiTopla(number) {
    number += 1;
}
sayiTopla(sayi);
// değer tip olduğu için 10 yazar
console.log(sayi)