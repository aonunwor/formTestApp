const express = require('express');
const dotenv = require('dotenv');
const routes = require("./routes/index");
// const cors = require("cors");

const app = express();
//const port = 8080;

app.use(express.json());

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }));

app.use('/api/students', routes);


app.get("/", (req, res) => {
    //res.json({ message: "Welcome to NodeJs test application." });
    res.render('index');
  })
  
  // Set viewws
  // app.set('views', './views')
  app.set('view engine', 'ejs')

  const connectDB = require('./config/db');
  
  // Load Config
  dotenv.config({ path: './config/config.env' });
  
  connectDB();
  

  app.post('/api/students', (req, res) => {
    return res.redirect('');
  })

  // Routes
  // app.use('/', require('./routes/index'));

  // Routes with controller
  // require("./routes/index")(app);
  
  // set port, listen for requests
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });






// app.listen(port, () => {
//     console.log(`server is listening on port ${port}...`);
// });