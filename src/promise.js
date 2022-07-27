// promise
// asenkron işlemin sonucunu temsil eden js nesnesidir

/* const books = [
    {
        name: "Pinball 1973",
        autohor: "Haruki Murakami"
    },
    {
        name: "Özgğrlük",
        author: "Zygmunt Bauman"
    },
    {
        name: "Türkiye'de Çağdaşlaşma",
        author: "Niyazi Berkez"
    }
]

const listboks = () => {
    books.map((book, index) => {
        console.log(book, index)
    })
}

const addNewBook = (newBook, callback) => {
    books.push(newBook)
    callback()
}

addNewBook({
    name: "Berlin Hatıralarım",
    author: "Hüsrev Gerede"
}, listboks) */

/* const promise1 = new Promise((resolve, reject) => {
    // işlem başarılı olduğu zaman prmiseden resolve donusu gelir
    //resolve('data')

    // basarısız durumda
    reject("hata")
})
console.log(promise1) */

/* promise1.then(function (value) {
    console.log(value)
}) */

// basarılı olduğu durumda then üzerinden dataya ulaştık
/* promise1.then((value) => {
    console.log(value)
    // hatalı olduğu durumda catch ile hatayı gördük
}).catch((err) => {
    console.log(err)
    // her durumda bize bir sonucun dönmesini istiyorsak finally yazabiliriz
}).finally(() => {
    console.log("Çalış köle")
}) */

/* const promise2 = new Promise((resolve, rejected) => {
    resolve()

    // rejected()
})
// then metodu optional olarak iki tane parametre alabilir
// ilk durum resolve olduğunda ikinci durum rejected olduğunda
promise2.then(() => {
    console.log("Veriler alındı")
}, () => {
    console.log("Veriler alınamadı")
}
) */

/* const books = [
    {
        name: "Pinball 1973",
        autohor: "Haruki Murakami"
    },
    {
        name: "Özgğrlük",
        author: "Zygmunt Bauman"
    },
    {
        name: "Türkiye'de Çağdaşlaşma",
        author: "Niyazi Berkez"
    }
]

const listboks = () => {
    books.map((book, index) => {
        console.log(book, index)
    })
}


const addNewBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook)
        resolve(books)
    })
    return promise1
}

addNewBook({
    name: "Berlin Hatıralarım",
    author: "Hüsrev Gerede"
}).then(() => {
    console.log("Yeni Liste")
    listboks()
}).catch((err) => {
    console.log(err)
}) */

const addTwoNumbers = (number1, number2) => {
    const promise2 = new Promise((ressolve, reject) => {
        const sum = number1 + number2;
        (typeof number1 !== 'number' || typeof number2 !== 'number')
            ? reject('2 sayı girmeniz gerekir') : ressolve(sum)
    })
    return promise2
}
addTwoNumbers(4, 8).then((value) => {
    console.log('Toplam: ' + value)
}).catch((err) => {
    console.log(err)
})