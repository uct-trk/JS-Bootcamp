export class BaseLogger {
    Log(data) {
        console.log("Default Logger" + data)
    }
}

export class ElasticLogger extends BaseLogger {
    Log(data) {
        console.log("Logged to Elastic" + data)
    }
}

export class MongoLogger extends BaseLogger {
    Log(data) {
        console.log("Logged to Mongo" + data)
    }
}