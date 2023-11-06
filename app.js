const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "Carousel" folder
app.use('/wishes/surprise', express.static(path.join(__dirname, 'Carousel')));

// Serve static files from the root directory
app.use(express.static(__dirname));

// Define a route to serve your index.html
app.get('/wishes', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Define a route to serve another HTML page from the "Carousel" folder
app.get('/wishes/surprise', (req, res) => {
    res.sendFile(path.join(__dirname, 'Carousel', 'index.html'));
});

const port = process.env.PORT || 3000; // You can specify a port number
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
