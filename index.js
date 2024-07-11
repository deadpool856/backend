//My blog api
//set up the application and its router

const Koa =require("koa")
const Router =require("koa-router")
const articles = require('./routes/articles.js')

const app = new Koa();
const router = new Router();

router.get('/api/v1', welcomeApi);
app.use(router.routes());

function welcomeApi(ctx, next){
    ctx.body ={
        message :"Welcome to the blog API! this is the private url pls do not share"

    }
}


app.use(articles.routes());
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});