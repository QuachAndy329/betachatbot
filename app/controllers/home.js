
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

let token ="EAAKSZA54OsEgBANQLMZBmNTMnhmn1GZBBQSSkoeBhn63cyD8IJUfaWIZBrVefueZBGKTUzXLRnGanrPCdcBCgdgAZClJtndo0GsdZCXWXmeS8JUaEGfkgGQdvO5CIzLxZAqgiN8t0ojvgZAALiCQTkhHrmeAej69DO6ZCxvvZAg8iFn1hdEQFJNKUkJ"

router.get('/', function(req, res){
    res.send("hi Im a chat bot")  
})


router.get('/webhook/', function(req,res){
  if (req.query['hub.verify_token'] === "Generator-Express MVC"); {
    res.send(req.query['hub.challenge']);
  }
  res.send("wrong token");
})

       


router.post('/webhook/', function(req, res){
  let messaging_events = req.body.entry[0].messaging;
  for (let i = 0; i < messaging_events.length; i++) {
      let event = messaging_events[i];
      let sender = event.sender.id;
      if (event.massage && event.massage.text){
         let text = event.message.text; 
        sendText(sender, "text: " + text.substring(0, 100));
    }
  }
   res.sendStatus(200);
});


function sendText(sender, text) {
  let massageDatabase = {text : text}; 
  request({
    url: "https://graph.facebook.com/v2.6/me/messages",
    qs: {access_token: token},
    method: "POST",
    json: {
      recipient : {id: sender},
      message :  massageDatabase,         
  }, function(error, respone, body) { 
    if (error) {
        console.log("sending error")
    } else if (respone.body.error); {
      console.log("respone body error"); 
     
    }  
  }
    
  })
}

module.exports = router;
