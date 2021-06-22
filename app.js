const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const methodOverride = require('method-override');
const Post = require('./models/Post');
const postController = require('./controllers/postController');
const pageController = require('./controllers/pageController');

const app = express();

//Database Connection
mongoose.connect('mongodb+srv://ceren:2AqkwzJEbvzkYvh5@cluster0.xobqv.mongodb.net/cleanblog-db?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
}).then(() => {
  console.log('DB CONNECTED!');
}).catch((err) => {
  console.log(err);
})


//Template Engine
app.set("view engine", "ejs");


//Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method', {
  methods: ['POST', 'GET']
}
));

app.get("/about", pageController.getAboutPage);
app.get("/add_post", pageController.getAddPage);
app.get('/posts/edit/:id', pageController.getEditPage);

app.get('/', postController.getAllPosts );
app.post('/posts', postController.createPost);
app.get("/posts/:id", postController.getPost);
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});
