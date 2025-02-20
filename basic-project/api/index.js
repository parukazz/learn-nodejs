const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())

// route / url / endpoint utama
app.get('/', (req, res) => {
  res.send('main')
})

app.get('/hello', (req, res) => {
  console.log({ urlParam: req.query })
  res.send('Hello World!')
})

app.post("/login", (req, res) => {
  console.log({requestFromOutside: req.body})
  res.send('login succes')
})

app.put("/username", (req, res) => {
  console.log({updateData: req.body})
  res.send('update success')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})