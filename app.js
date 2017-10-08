// User story: I can get the IP address, language, and operating system for my browser

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/public`));

app.get('/whoami', (req, res) => {
  console.log('connection', req.ip)
  res.json({
    'ip address': req.ip,
    'language': req.headers['accept-language'],
    'software': req.headers['user-agent']
  });
})

app.listen(port, () => {
  console.log(`Server is up on ${port}`)
});
