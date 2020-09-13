var express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
app.listen(PORT, function() {
    console.log('App listening on PORT ' + 'http://localhost:' + PORT);
  });