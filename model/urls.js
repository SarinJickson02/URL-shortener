const mongoose = require('mongoose')

const UrlsSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String,
    required: true,
  },

})

module.exports = mongoose.model('Urls', UrlsSchema)