const axios = require('axios');

module.exports = {
  API_HOST: 'https://bot.kindly.ai',
  API_KEY: null,
  send: function send(data) {
    return axios.post(`${this.API_HOST}/api/v1/send`, {
      api_key: this.API_KEY,
      user_id: data.user_id,
      message: data.message,
      exchange_id: data.exchange_id,
    });
  },
};
