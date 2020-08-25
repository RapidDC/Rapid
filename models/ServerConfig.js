const mongoose = require('mongoose');

const ServerConfigSchema = new mongoose.Schema({
    guild: String,
    antispam: Boolean,
    joinedAt: Intl,
});

module.exports = mongoose.model('ServerConfig',ServerConfigSchema);