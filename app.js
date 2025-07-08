const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

//importing index and new route
const {router: indexRouter} = require('./routes/index.js');
const newRouter = require('./routes/new.js');

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));

app.use(indexRouter);
app.use(newRouter);

app.listen(PORT, () => {
  console.log(`Server start listening at http://localhost:${PORT}`);
});