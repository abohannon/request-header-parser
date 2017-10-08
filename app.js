// User story: I can get the IP address, language, and operating system for my browser

const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/public`));

app.set('trust proxy');

app.get('/whoami', (req, res) => {
  const ipv4 = req.headers['x-forwarded-for'] || req.connection.remoteAddress || request.socket.remoteAddress || request.connection.socket.remoteAddress;
  const lang = req.headers['accept-language'].split(',')[0];
  const software = req.headers['user-agent'].split(/[\()]+/)[1];
  res.json({
    'ip address': ipv4,
    'language': lang,
    'software': software
  });
})

app.listen(port, () => {
  console.log(`Server is up on ${port}`)
});
