const { Router } = require('express');

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    res.render('index', { title: 'Mini Message Board', messages: messages});
});

indexRouter.get('/new', (req, res) => {
    res.render('form');
});

indexRouter.post('/new', (req, res) => {
    messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date() });
    res.redirect('/');
})

indexRouter.get('/message-details/:id', (req, res) => {
    res.render('message-details', { message: messages[req.params.id] });
})

module.exports = indexRouter;