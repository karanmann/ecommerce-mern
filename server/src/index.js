import express from 'express'

const PORT = 8080
const app = express()
const database = []

app.use(express.json())

app.use('/', (req, res) => {
  res.send('This is my API')
})


app.post('/products', (req, res) => {
  const productDetails = req.body
  database.push(productDetails)
  res.status(200)
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
