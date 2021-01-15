const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = express.Router()

const port = process.env.PORT || 3000
const app = express()
const public = express.static('public')

app.use(cors())
app.use(morgan('dev'))
app.use('/', router)
app.use(public)

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})
