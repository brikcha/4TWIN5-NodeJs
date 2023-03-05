const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  pseudo: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Chat = mongoose.model('Chat', chatSchema);

  