const express = require('express')
const app = express()
const PORT = 3500

app.get('/', (request,response)=>{
    response.send(`It's Working...`)
})


app.listen(PORT, console.log(`Server started running at http://localhost:${PORT}`))
