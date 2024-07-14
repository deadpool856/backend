const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const auth = require('../controllers/auth');

const router = Router({prefix:'/api/v1'});

router.get('/', publicAPI);
router.get('/private',auth, privateAPi);

function publicAPI(ctx)
    {
        ctx.body = {message: 'PUBLIC PAGE: You requested a new message URL (root) of the API'}
    }

function privateAPi(ctx){
    const user = ctx.staaate.user;
    ctx.body = {message: `Hello ${user.username} you registered on ${user.dataRegistered}`}
}

module.exports=router;