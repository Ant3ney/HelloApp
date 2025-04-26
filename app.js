const express = require('express');
const app = express();
require('dotenv').config();

app.get('/', (req, res) => {
	res.send('Welcome to hello app');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
