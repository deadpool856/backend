const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");

const router = Router({prefix:'/api/v1/articles'});


let articles =[
    {title:'hello article', fullText:'some text here to fill the body'},
    {title:'another article', fullText:'again here is some text here to fill'},
    {title:'coventry univesity', fullText:' some news anout coventry university'}


];



router.get('/', getAll);
router.post('/',bodyParser(),createArticle);

router.get('/:id([0-9]{1,})',getById);
router.put('/:id([0-9]{1,})', updateArticle);
router.del('/:id([0-9]{1,})',deleteArticle);

function getAll(cnx,next){
    cnx.body = articles;
}

function getById(cnx,next){
    let id = cnx.params.id;

    if ((id < articles.length+1)&&(id > 0)) {
        cnx.body = articles[id-1];
    }else{
        cnx.status = 404;
    }
}


function createArticle(cnx, next){
    let {title,fullText} ={title:title, fullText:fullText};
    articles.push(newArticle);
    cnx.status = 201;
    console.body = newArticle;
}


function updateArticle(cnx,next){

}


function deleteArticle(cnx,next){

}

module.exports = router;