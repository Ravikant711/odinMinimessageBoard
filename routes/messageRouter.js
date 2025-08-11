const express = require('express');
const messageRouter = express.Router();
const messageController = require('../controllers/messageController');

// const messages = [
//   {
//     id: 0,
//     text: "Hi there!",
//     user: "Amando",
//     added: (new Date()).toLocaleString()
//   },
//   {
//     id: 1,
//     text: "Hello World!",
//     user: "Charles",
//     added: (new Date()).toLocaleString()
//   }
// ];

// router.get('/', (req, res) => {
//   res.render('index', {title: "Welcome to mini message board", messages: messages});
// });

// router.post('/new', (req, res) => {
//   const {authorName, messageText} = req.body;

//   if (!authorName || !messageText) {
//     res.status(404).send('Request not found');
//   }
//   const newId = messages.length > 0 ? messages[messages.length - 1].id + 1 : 1;
//   const now = new Date();
//   messages.push({id: newId, text: messageText, user: authorName, added: now.toLocaleString()});
//   // res.send('Author and messages added succesfully');
//   res.redirect('/');
// });

messageRouter.get('/', messageController.getMessagesBoard);
messageRouter.post('/new', messageController.createMessagesPost);
messageRouter.get('/new', messageController.newMessageForm);
messageRouter.get('/message/:id', messageController.openNewMesasge);

// module.exports = {messages, router};
module.exports = { messageRouter };