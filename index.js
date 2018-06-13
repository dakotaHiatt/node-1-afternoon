const express = require('express');
const bodyParser = require('body-parser')
let mc = require('./server/controllers/messages_controller')
const app = express();
const port = 3000;

app.use(bodyParser.json())

app.post('/api/messages/', mc.create)
app.get('/api/messages', mc.read)
app.put('/api/messages/:id', mc.update)
app.delete('/api/messages/:id', mc.delete)

app.listen(port , () => console.log('listening on port', port));