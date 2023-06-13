const express = require('express')
const app = express()
const PORT = 3500
const patient = require('./routes/patient')


app.get('/', (request,response)=>{
    response.send(`It's Working...`)
})

app.use('/api/v1/patient', patient)


app.listen(PORT, console.log(`Server started running at http://localhost:${PORT}`))
