const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const model = require('../models/users');


const router = Router({prefix:'/api/v1/users'});

router.get('/', getAll);
router.post('/',bodyParser(),createUser);
router.get('/:id([0-9]{1,})',getById);
router.put('/:id([0-9]{1,})', bodyParser(), updateUser);
router.del('/:id([0-9]{1,})',deleteUser);

async function getAll(ctx){
    let users = await model.getAll();
    if (users.length){
        ctx.body = users;
    }
   
}


async function getById(ctx) {
    let id = ctx.params.id;
    let user = await model.getById(id);
    if (user.length) {
        ctx.body = user [0];
    }
}

async function createUser(ctx) {
   const body = ctx.request.body;
   let result = await model.add(body);
   if (result){
    ctx.status = 201;
    ctx.body = {ID: result.insertId}
   }
}

async function updateUser(ctx) {
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

async function deleteUser(ctx) {
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