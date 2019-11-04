const express = require('express')
const app = express()

app.use(express.static('dist'))
app.get('/', (req, res) => res.sendFile(__dirname+'/dist/index.html'))

app.listen(80, () => console.log('Elliotts website is running on port 80!'))
