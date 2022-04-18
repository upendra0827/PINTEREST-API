const express = require('express')
const pinterestRoutes = require('./src/pinterest/routes')

const app = express()
// const port = 3000

const port = process.env.port || 3300;
app.listen(port, () => {
  console.log("Server is running in PORT : ", port);
});


app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello world")
})

app.use('/api/v1/pinterest', pinterestRoutes)

app.listen(port, () => {
    console.log(`app listening on ${port}`)
})