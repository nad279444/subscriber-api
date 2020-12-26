const  express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()



const app = express()
mongoose.connect(process.env.DATABASE_URL,{ useUnifiedTopology: true },{ useNewUrlParser: true })
const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open',() => console.log('connected to database'))



app.use(express.json())

const subscribersRouter = require('./routes/subscribers') 
app.use('/subscribers',subscribersRouter)


app.listen(3000,() => {
    console.log('server is listening on port 3000')
})


