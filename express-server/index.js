// The commands were:
// npm init -y
// npm install express axios body-parser

// npm install cors (when I used react, I had to add it)

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors'); // for React to work on a port other than 3000

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Route to handle sentiment analysis request
app.post('/analyze-sentiment', async (req, response) => {
    try {
        const { text } = req.body;

        if (!text) {
            return response.status(400).json({ error: "Missing 'text' field" });
        }

        // Call Flask API
        const res = await axios.post('http://127.0.0.1:5000/predict', { text });

        // Return response to user
        response.json(res.data);
    } catch (error) {
        response.status(500).json({ error: "Error connecting to sentiment analysis service" });
    }
});

// Starting the server here
app.listen(port, () => {
    console.log(`Express server running on port ${port}`);
});

// node .
// or node index.js