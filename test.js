const kindly = require('./src/index');

kindly.API_KEY = 'MY API KEY';

kindly.send({
  user_id: 'USER ID',
  message: 'MESSAGE',
  exchange_id: '1234',
}).then((response) => {
  console.info(response);
}).catch((err) => {
  console.error(err);
});
