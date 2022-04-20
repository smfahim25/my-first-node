const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Look mama i send it');
});

const users = [
    { name: 'Fahim', email: 'fahim@gmail.com', id: 1 },
    { name: 'Rakib', email: 'rakib@gmail.com', id: 1 },
    { name: 'Hasan', email: 'hasan@gmail.com', id: 1 },
    { name: 'Akash', email: 'akash@gmail.com', id: 1 }
];

app.get('/users', (req, res) => {
    res.send(users);
});
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});
app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('lisenting to port', port);
});