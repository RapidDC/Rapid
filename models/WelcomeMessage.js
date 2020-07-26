const mongoose = require('mongoose');

const WelcomeMessageSchema = new mongoose.Schema({
    guild: String,
    title: String,
    gif_link: String,
    text: String,
    channel_name: String,
});

module.exports = mongoose.model('WelcomeMessage',WelcomeMessageSchema);