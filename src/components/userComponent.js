import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("user component yüklendi")

let logger1 = new MongoLogger()
let userService = new UserService(logger1)

// User classında constructor oluşturduk
// constructordan gelen verilere göre içini dolduruyoruz
let user1 = new User(1,"Ugur","Turk","Antalya");
let user2 = new User(2,"Umit","Turk","Bursa");

userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))

let customer = {
    id:1,
    firstName:"Ugurcan"
}
customer.lastName = "TÜRK"
// prototyping
console.log(customer.lastName)