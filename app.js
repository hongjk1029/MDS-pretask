const express = require('express');

const app = express();

const port = 3000;


app.get('/', (req, res) => {
	  res.send('Hello World');
});


app.listen(port, () => {
	  console.log(`App listening at http://148.135.138.197/:${port}`);
});
