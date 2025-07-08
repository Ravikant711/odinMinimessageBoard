const express = require('express');
const router = express.Router();
const { messages } = require('./index.js')

router.get('/new', (req, res) => {
  res.render('messageForm');
});

router.get('/message/:id', (req, res) => {
  const messageId = req.params.id;

  const findMessage = messages.find(item => Number(item.id) === Number(messageId));

  if (!findMessage) {
    res.status(404).send('Message is not found');
  }

  res.render('messageDetail', {title: 'Message detail', message: findMessage});
});

module.exports = router;