const express = require('express')
const pinterestRoutes = require('./src/pinterest/routes')

const app = express()
// const port = 3000
const { cloudinary } = require('./utils/cloudinary')
app.use(express.json({
    limit: '50mb'
}))
app.use(express.urlencoded({
    limit: '50mb', extended: true
}))

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server is running in PORT : ", PORT);
});


app.use(express.json())

app.post('/api/upload', async (req, res) => {
  try {
      const fileStr = req.body.data
      const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
          upload_preset: 'dev_setups',
      })
      console.log(uploadedResponse)
      res.json({ msg: 'yayayaya' })
  } catch (err) {
      console.log(err)
      res.status(500).json({ err: 'something went wrong' })
  } 
})


app.use(function (req, res, next) {
  const corsWhiteList = ['http://localhost:3001', "https://project-pinterest-api.herokuapp.com"]

  if (corsWhiteList.indexOf(req.headers.origin) !== -1) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  }
  // Pass to next layer of middleware
  next();
});


app.get("/", (req, res) => {
    res.send("hello world")
})

app.use('/api/v1/pinterest', pinterestRoutes)
