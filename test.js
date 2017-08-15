var kindly = require('./src/index');

kindly.API_KEY = "MY API KEY";

kindly.send({
    user_id: "USER ID",
    message: "MESSAGE",
    exchange_id: "1234",
});

console.log(kindly);
