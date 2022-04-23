const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello first time node installing')
});

const users = [
    { id: 1, name: 'myself', email: 'myself@gmail.com', phone: '015555212156' },
    { id: 2, name: 'yourself', email: 'yourself@gmail.com', phone: '015546545556' },
    { id: 3, name: 'themself', email: 'themself@gmail.com', phone: '01555156556' },
    { id: 4, name: 'himself', email: 'himself@gmail.com', phone: '056455455556' },
    { id: 5, name: 'herself', email: 'herself@gmail.com', phone: '0156465455556' },
    { id: 6, name: 'weself', email: 'weself@gmail.com', phone: '015555551516' }
]

app.get('/users', (req, res) => {
    res.send(users);
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('port listen', port);
})