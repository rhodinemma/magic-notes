//declaring dependencies
const express = require('express');
const path = require('path');
const app = express();

//serving static file using express
app.get('/',(req, res)=>{
	res.sendFile(path.join(__dirname + '/index.html'));
});

//creating server
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
	console.log(`Server running on port ${port}`);
});