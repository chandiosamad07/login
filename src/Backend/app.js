const exprees = require('exprees')
const collection = require('./mongo')
const cors = require('cors')
const app = exprees()
app.use(exprees.json())
app.use(express.urlencoded({extends:true}))
app.use(cors())