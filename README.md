# Kindly JS

A simple JavaScript library for applications integrating with [Kindly](https://kindly.gitbooks.io/kindly/).

Just install it with npm:

`npm install kindly-js --save`

Ask the bot questions:

```javascript
var kindly = require('kindly-js');
kindly.API_KEY = "YOUR API KEY";
kindly.send({
    user_id: "abc123", // User/chat identifier
    message: "Message to bot", // What to ask bot
});
```

...and we'll `POST` the reply to the webhook you specified when [getting started](https://kindly.gitbooks.io/kindly/api/getting-started.html)  setting up the application.

For more, check out [the official Kindly documentation](https://kindly.gitbooks.io/kindly/).
