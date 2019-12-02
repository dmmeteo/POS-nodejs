const express = require('express');

// Load environment variables
require('dotenv').config();

const app = express();

if (process.env.NODE_ENV === 'production') {
  // TODO
  console.log('Production mode enabled!');
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
