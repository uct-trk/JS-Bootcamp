export default class UserService {

    constructor(loggerService){
        this.users = []
        this.loggerService = loggerService
    }

    // bu fonksiyonlar clasın içinde gruplandı
    add(user) {
        this.users.push(user)
        this.loggerService.Log(user)
    }

    list() {
       return this.users
    }

    getById(id) {
       return this.users.find(u=> u.id === id)
    }

}