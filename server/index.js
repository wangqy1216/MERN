var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');

var postRoutes = require('./routes/posts.js');

const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://new-user:tRMZz7RiTc1JecGf@cluster0.o28kv.mongodb.net/MERN?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect( CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
                .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
                .catch((e) => console.log(error.message));

mongoose.set('useFindAndModify', false);

