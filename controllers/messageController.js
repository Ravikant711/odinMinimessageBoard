const db = require('../db/queries');

async function getMessagesBoard(req, res) {
  try {
    //getting messages from getAllmessages()
    const messages = await db.getAllmessages();
    
    res.render('index', {title: "Welcome to mini message board", messages: messages});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}

async function createMessagesPost(req, res) {
  try {
    const {authorName, messageText} = req.body;

    if (!authorName || !messageText) {
      res.status(404).send('Request not found');
    }

    await db.insertMessages(authorName, messageText);
    res.redirect('/')
  } catch (error) {
    console.error('Error creating messages', err);
    res.status(500).send('Internal server error');
  }
}

function newMessageForm(req, res) {
  res.render('messageForm');
}

async function openNewMesasge(req, res) {
  try {
    const messageId = req.params.id;
    const openMessage = await db.findMessage(Number(messageId));
    
    if (!openMessage) {
      res.status(404).send('Message is not found');
    }

    res.render('messageDetail', {title: 'Message detail', message: openMessage});
  } catch (error) {
    console.error('Error finding messages', err);
    res.status(500).send('Internal server error');
  }
}

module.exports = {
  getMessagesBoard,
  createMessagesPost,
  newMessageForm,
  openNewMesasge
}