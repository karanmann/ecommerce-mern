import express from 'express'
import data from './data/data.js'

const PORT = 8080
const app = express()

app.get('/api/products', (req, res) => {
  res.send(data.products)
})

app.use('/', (req, res) => {
  res.send('Server is Ready')
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
