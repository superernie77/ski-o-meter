const express = require('express');

const app = express();

app.use(express.static('./dist/ski-o-meter'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/ski-o-meter/' }
);
});

app.listen(process.env.PORT || 8080);
