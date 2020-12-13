const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors('*'))

app.get('/emp',(request,response)=> {
    
    
    const statement = 'select * from emp'
    db.query(statement,(error,result)=>{
        if(error)
        {
            response.send({status:'error'})
        }
        else
        {
            response.send({status:'success',data:result})
        }
    })
})

app.listen(4001,'0.0.0.0', () =>
{
    console.log(`server  started on port 4001`)
})