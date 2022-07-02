import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("user component yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

// User classında constructor oluşturduk
// constructordan gelen verilere göre içini dolduruyoruz
//let user1 = new User(1, "Ugur", "Turk", "Antalya", "27");
//let user2 = new User(2, "Umit", "Turk", "Bursa", "30");

//userService.add(user1)
//userService.add(user2)

//console.log(userService.listCustomers())
//console.log(userService.getCustomersById(2))

let customer = {
    id: 1,
    firstName: "Ugurcan"
}
customer.lastName = "TÜRK"
// prototyping
//console.log(customer.lastName)

console.log("------------------------------------------")
userService.load()

let customerToAdd = new Customer(3, "Polat", "Alemdar", "İstanbul", 45, 159357)
// prototyping yaparak type ekledik
customerToAdd.type = "customer"
let customerToAdd2 = new Customer(4, "Memati", "Bas", "İstanbul", 45, 159357)
customerToAdd2.type = "customer"
userService.add(customerToAdd)
userService.add(customerToAdd2)
console.log(userService.listCustomers())
console.log(userService.getCustomersById(4))
console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())
