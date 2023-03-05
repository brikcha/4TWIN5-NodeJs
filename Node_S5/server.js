const app = require('./app')


const port = 3000;

// Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});