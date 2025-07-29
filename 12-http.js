const http = require('http');
//req-incoming request
//res-what we send back

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to Our Home page')
  }
  if (req.url === '/about') {
    res.end('Here is our short story')
  }
  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find page you are looking for</p>
    <a href="/">back home</a>
    `)
})
server.listen(5000)