const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dbUri = require('./dbConfig')
const employeeRoute = require('./routes/employee.route')


const app = express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 3000

//mongoose conection
// mongoose.Promise = global.Promise;
mongoose.connect(dbUri.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database sucessfully connected')
}, err => console.log("Database could not conncted" + err))
//

app.use('/api', employeeRoute)

app.listen(PORT, () => {
    console.log(`server is up and running at http://localhost/${PORT}`)
})