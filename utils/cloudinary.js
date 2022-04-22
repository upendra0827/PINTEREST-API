require('dotenv').config()
const cloudinary = require('cloudinary')
cloudinary.config({
    cloudName: process.env.CLOUDINARY_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET
})

module.exports = { cloudinary }