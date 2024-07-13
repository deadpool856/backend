//My blog api
//set up the application and its router

const Koa =require("koa")
const app = new Koa();

const special = require('./routes/special.js')
const articles = require('./routes/articles.js')
const user = require('./routes/users.js')
const articleviews =require("./routes/articleviews.js")
const categories = require("./routes/categories.js")
const comments = require("./routes/comments.js")
const likes = require("./routes/likes.js")
const pins = require("./routes/pins.js")

app.use(pins.routes());
app.use(categories.routes());
app.use(special.routes());
app.use(articles.routes());
app.use(user.routes());
app.use(articleviews.routes());
app.use(comments.routes());
app.use(likes.routes());

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});