var axios = require('axios');

module.exports = {
    API_KEY: null,
    send: function(data) {
        axios.post('https://bot.kindly.ai/api/v1/send', {
            api_key:        this.API_KEY,
            user_id:        data.user_id,
            message:        data.message,
            exchange_id:    data.exchange_id,
        }).catch(function(err) {});
    }
}
