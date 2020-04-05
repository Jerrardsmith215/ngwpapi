// Declarations
const cors = require('cors');
const express = require('express');
const WPAPI = require('wpapi');
const server = express();

// server variables/middleware
const port = process.ENV || 3000; 
const parser = express.json();

server.use(
    cors(),
    parser
    );

// GET request handler
server.get('/', (req, res) => {
	const wp = new WPAPI ({ endpoint: 'http://wordpress.org/news/wp-json/'});
	wp.posts()
		.perPage(20)
		.then(data => {
			res
				.json(data);
	});
});

// activate server
server.listen(port, () => {
    console.log(`Server Started on port ${port}`); 
});