const db = require('../db/queries');

async function getAllMessages(req, res) {
    const messages = await db.getAllMessages();
    res.render('index', {
        title: 'Mini message board',
        messages: messages,
    });
}

function getForm(req, res) {
    res.render('form');
}

async function postNewMessage(req, res) {
    await db.insertMessage(req.body.messageText, req.body.messageUsername, (Date.now() / 1000.0));
    res.redirect('/');
}

async function getMessage(req, res) {
    const message = await db.selectId(Number(req.params.id)+1);
    res.render('message-details', {
        message: message[0],
    });
}

module.exports = {
    getAllMessages,
    getForm,
    postNewMessage,
    getMessage,
}