console.log("Hello Ugurcan");

// JS Type safe değildir

let dolarBugun = 9.30

let dolarDun = 9.20
{
    let dolarDun1 = 9.50
    {
        console.log(dolarBugun + " bugun")
        console.log(dolarDun1)
    }
}
console.log(dolarDun)


const euroDun = 20
//euroDun = 22; consta tekrar değer atayamayız
console.log(euroDun)

// birden fazla veriyi aynı değişkende kullanmak için arraylerden yararlanıyoruz
let konutKredileri = ["Konut kredisi", "Emlak konut kredisi", "Kamu konut kredisi", ["a", "b", "c"], 27]
console.log(konutKredileri)

// gerçekte verileri apilerden çekeriz
//let users = getUsersFromApi();

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    const item = `<li>${konutKredileri[i]}</li>`;
    console.log(item)
}

console.log("</ul>")
