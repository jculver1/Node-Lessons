const express = require('express')
const app = express() //making express app
const port = 3000

let dogs = [{
    id: 1,
    name: 'jeff'
}]
app.use(express.static('public'))

app.get('/cats', (req, res) => {
    console.log('request:', req)
    res.send('Cats rule!')
})

app.get('/dogs', (req, res) => {
   // res.send('Dogs are cool too, sometimes!')
    res.send(dogs[1])
})

app.post('/dogs', (req, res) => {
    res.send('ehh try again!')
})

//

app.use(function (req, res, next) {
    console.log(err.stack)
    res.status(500).send("Sorry can't find that!")
    //using 500 error - internal server error
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))