const mongoose = require('mongoose')

const shortUrlSchema = new mongoose.Schema({
    full: {
        type:String
    }
})