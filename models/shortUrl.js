const mongoose = require('mongoose')
const shortId = require('shortId')



const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },
    short: {
        type:String,
        required: true,
        default: shortId.generate()
    },
    clicks: {
        type: Number,
        required: true,
        default: 0,
    }
})

module.export = mongoose.model('ShortUrl', shortUrlSchema)