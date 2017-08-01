var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');

router.get('/', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
});

token ="EAAKSZA54OsEgBANQLMZBmNTMnhmn1GZBBQSSkoeBhn63cyD8IJUfaWIZBrVefueZBGKTUzXLRnGanrPCdcBCgdgAZClJtndo0GsdZCXWXmeS8JUaEGfkgGQdvO5CIzLxZAqgiN8t0ojvgZAALiCQTkhHrmeAej69DO6ZCxvvZAg8iFn1hdEQFJNKUkJ"


router.post('/webhook/', function(req, res){
  let messaging_events = req.body.entry[0].messaging_events;
  for (let i = 0; i < messaging_events.length; i++) {
      let event = messaging_events[i];
      let sender = event.sender.id;
      if (event.massage && event.massage.text){
         let text = even.message.text
        sendText(sender, "text: " + text.substring(0,100));
    }
  }
   res.sendStatus(200);
});

// stop for 10 sec ok?
function sendText(sender, text) {
  let massageDatabase = {text: text}
  request({
    url: "https://graph.facebook.com/v2.6/me/messages",
    qs: {access_token, token},
    method: 'POST'
  })
}

module.exports = router;