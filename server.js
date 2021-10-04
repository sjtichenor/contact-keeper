const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'welcome to contactkeepr api' }));

// define routes

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
