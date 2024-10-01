const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  message: String,
  createdAt: Date
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;