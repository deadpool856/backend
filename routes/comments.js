const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const model = require('../models/comments');


const router = Router({prefix:'/api/v1/comments'});

router.get('/', getAll);
router.post('/',bodyParser(),createComments);
router.get('/:id([0-9]{1,})',getById);
router.put('/:id([0-9]{1,})', bodyParser(), updateComments);
router.del('/:id([0-9]{1,})',deleteComments);

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

async function createComments(ctx) {
   const body = ctx.request.body;
   let result = await model.add(body);
   if (result){
    ctx.status = 201;
    ctx.body = {ID: result.insertId}
   }
}

async function updateComments(ctx) {
    const id = ctx.params.id;
    const body = ctx.request.body;
    let result = await model.update(id, body);
    if (result) {
        ctx.body = {message: 'Comment updated successfully'};
    } else {
        ctx.status = 500;
        ctx.body = {error: 'Failed to update comments'};
    }

}

async function deleteComments(cnx, next) {
    const id = ctx.params.id;
    let result = await model.delete(id);
    if (result) {
        ctx.status = 204; // No content
    } else {
        ctx.status = 500;
        ctx.body = {error: 'Failed to delete Comments'};
    }
}


module.exports = router;