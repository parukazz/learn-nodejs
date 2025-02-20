const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./db')
const response = require('./response')

// route / url / endpoint utama
app.use(bodyParser.json())

// app.get('/', (req, res) => {
//   const query = 'SELECT * FROM users'
//   db.query(query, (err, rs) => {
//     // result from query
//     response(200, rs, "Get All Users", res)
//   })
// })
//
// app.get('/find', (req, res) => {
//   console.log(`find id: `, req.query.id)
//   const query = `SELECT name FROM users WHERE id = ${req.query.id}`
//   db.query(query, (err, rs) => {
//     response(200, rs, "Get User Name", res)
//   })
// })
//
// app.post("/login", (req, res) => {
//   console.log({requestFromOutside: req.body})
//   res.send('login succes')
// })
//
// app.put("/username", (req, res) => {
//   console.log({updateData: req.body})
//   res.send('update success')
// })

app.get("/", (req, res) => {
  response(200, "Data", "Good", res)
})

app.get("/books", (req, res) => {
  res.send("Book List")
})

app.get("/books/:isbn", (req, res) => {
  const isbn = req.params.isbn
  res.send(`Specific Book by ID ${isbn}`)
})

app.post("/books", (req, res) => {
  res.send("POSTED")
})

app.put("/books", (req, res) => {
  res.send("PUT")
})

app.delete("/books", (req, res) => {
  res.send("DELETE")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})