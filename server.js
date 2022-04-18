const express = require('express')
const pinterestRoutes = require('./src/pinterest/routes')

const app = express()
// const port = 3000

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
  console.log("Server is running in PORT : ", PORT);
});


app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello world")
})

app.use('/api/v1/pinterest', pinterestRoutes)

app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`)
})