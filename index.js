//My blog api
//set up the application and its router

const Koa =require("koa")
const app = new Koa();

const special = require('./routes/special.js')
const articles = require('./routes/articles.js')


app.use(special.routes());
app.use(articles.routes());



app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});