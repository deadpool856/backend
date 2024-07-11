const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const model = require('../models/articles');


const router = Router({prefix:'/api/v1/articles'});

router.get('/', getAll);
router.post('/',bodyParser(),createArticle);
router.get('/:id([0-9]{1,})',getById);
router.put('/:id([0-9]{1,})', bodyParser(), updateArticle);
router.del('/:id([0-9]{1,})',deleteArticle);

async function getAll(ctx){
    let articles = await model.getAll();
    if (articles.length){
        ctx.body = articles;
    }
   
}


async function getById(ctx) {
    let id = ctx.params.id;
    let article = await model.getById(id);
    if (article.length) {
        ctx.body = article [0];
    }
}

async function createArticle(ctx) {
   const body = ctx.request.body;
   let result = await model.add(body);
   if (result){
    ctx.status = 201;
    ctx.body = {ID: result.insertId}
   }
}

async function updateArticle(ctx) {
    const id = ctx.params.id;
    const body = ctx.request.body;
    let result = await model.update(id, body);
    if (result) {
        ctx.body = {message: 'Article updated successfully'};
    } else {
        ctx.status = 500;
        ctx.body = {error: 'Failed to update article'};
    }

}

async function deleteArticle(cnx, next) {
    const id = ctx.params.id;
    let result = await model.delete(id);
    if (result) {
        ctx.status = 204; // No content
    } else {
        ctx.status = 500;
        ctx.body = {error: 'Failed to delete article'};
    }
}


module.exports = router;