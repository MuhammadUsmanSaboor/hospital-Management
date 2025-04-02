
const express = require('express');
const routes = require('./routes/routes'); // Looks for routes.js in same directory

const app = express();
app.use(express.json());

app.use('/api', routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
