const express = require("express")
const router = express.Router()
const client = require('./config')
const jwt = require("jsonwebtoken")
const url = require('url');
/** 
 * 
*/
router.post('/register',(req,res) => {
    const {username,password,email} = req.body;
    
    const sql = 'insert into userlist values(null,?,?,?)';
    const arr = [username,password,email]

    client.query(sql,arr,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
            if(result.affectedRows>0){
                res.send({
                    status:200,
                    result
                })
            }
            else{
                res.send({
                    status:401,
                    msg:'注册失败'
                })
            }           
        }
    })
})

router.post("/login",(req,res)=>{
    const{username,password} = req.body
    const sql = "select * from userlist where username=? and password=?"
    const arr = [username,password]
    client.query(sql,arr,(err,result)=>{
        if(err){
            console.log(err)
        }
        else {
            if(result.length>0){

                let token = jwt.sign({
                    username,
                    id:result[0].id
                },'somekeys')
                res.send({
                    status:200,
                    token,
                    username
                })
            }else{
                res.send({
                    status:401,
                    msg:'登录失败444',
                })

            }
        }
    })
})

// 商品查询
router.get("/backend/item/selectTbItemAllByPage",(req,res)=>{
    //const page = url.parse(req.url,true).query.page || 1;
    const url = require('url');
    const net = req.url
    const obj = url.parse(net,true,false)
    const page = Number(obj.query.page) || 1
    // 分页
    const sql = `select * from product order by id desc limit 10 offset ${(page-1)*10}`
    client.query(sql,null,(err,result)=>{
        if(result.length>0){
            res.send({
                status:200,
                result
            })
        }else{
            res.send({
                status:401,
                msg:'暂无数据'
            })
        }
    })
})

//总条数查询
router.get("/total",(req,res)=>{
    const sql = "select count(*) from product"
    client.query(sql,null,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            if(result.length>0){
                res.send({
                    status:200,
                    result
                })
            }else{
                res.send({
                    status:500,
                    msg:'暂无跟多数据'
                })
            }
        }
    })
})

//模糊查询
router.get('/search',(req,res)=>{
    const search = url.parse(req.url,true).query.search;
    const sql = "select * from product where concat(name,type,miaoshu) like '%"+search+"%'" 
    client.query(sql,null,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            if(result.length>0){ 
                res.send({
                    status:200,
                    result
                })
            }else{
                res.send({
                    status:500,
                    msg:'暂无数据'
                })
            }
        }
    })
})

// 添加商品
router.get('/backend/item/insertTbItem',(req,res)=>{
    const name = url.parse(req.url,true).query.name || '';
    const price = url.parse(req.url,true).query.price || '';
    const num = url.parse(req.url,true).query.num || '';
    const miaoshu = url.parse(req.url,true).query.miaoshu || '';
    const type = url.parse(req.url,true).query.type || '';
    const arr = [name,price,type,miaoshu,num]
    const sql = 'insert into product values(null,?,?,?,?,?)'
    client.query(sql,arr,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            if(result.affectedRows>0)
            {
                res.send({
                    status:200,
                    msg:'添加成功'
                })
            }else{
                res.send({
                    status:500,
                    msg:'添加失败'
                })
            }
        }
    })
})
//删除功能
router.get('/backend/item/deleteItemById',(req,res)=>{
    const id = url.parse(req.url,true).query.id;
    const sql = 'delete from product where id=?'
    const arr = [id]
    client.query(sql,arr,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            if(result.affectedRows>0){
                res.send({
                    status:200,
                    msg:'删除成功'
                })
            }else{
                res.send({
                    status:500,
                    msg:'删除失败'
                })
            }
        }
    })
  })
  //预更新
  router.get('/backend/item/preUpdateItem',(req,res)=>{
    const id = url.parse(req.url,true).query.id;
    const sql  = 'select * from product where id=?';
    client.query(sql,[id],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            if(result.length>0){
                res.send({
                    status:200,
                    result
                })
            }else{
                res.send({
                    status:500,
                    msg:'预更新失败'
                })
            }
        }
    })
  })

  //编辑产品数据提交
  router.get('/backend/item/UpdateTbItem',(req,res)=>{
    const id = url.parse(req.url,true).query.id;
    const name = url.parse(req.url,true).query.name || '';
    const price = url.parse(req.url,true).query.price || '';
    const num = url.parse(req.url,true).query.num || '';
    const miaoshu = url.parse(req.url,true).query.miaoshu || '';
    const type = url.parse(req.url,true).query.type || '';
    const sql = 'update product set name=?,price=?,type=?,miaoshu=?,num=? where id=?'
    const arr = [name,price,type,miaoshu,num,id]
    client.query(sql,arr,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            if(result.affectedRows>0){
                res.send({
                    status:200,
                    msg:'修改成功'
                })
            }else{
                res.send({
                    status:500,
                    msg:'修改失败'
                })
            }
        }
    })
  })

  //规格参数查询
  router.get("/backend/itemParam/selectItemParamAll",(req,res)=>{
    const page = url.parse(req.url,true).query.page || 1;
    const sql = `select * from params order by id desc limit 10 offset ${(page-1)*10}`
    client.query(sql,null,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            if(result.length>0){
                // 当时脑子抽了，不知道为什么就一直要传过去一个数组，而不是字符串
                // var newResult = {
                //     id:0,
                //     itemCatid:0,
                //     paramData:[]
                // }
                // var resultArr = []
                // result.forEach(element => {
                //     newResult.id = element.id
                //     newResult.itemCatid = element.itemCatid
                //     var arr = JSON.parse(element.paramData)
                //     newResult.paramData = arr
                //             // 每次循环重新赋值
                //     resultArr.push(JSON.parse(JSON.stringify(newResult))) 
                // });
                res.send({
                    status:200,
                    result:result
                })
            }else{
                res.send({
                    status:500,
                    msg:'查询失败'
                })
            }
        }
    })
  })

  //规格参数条数查询
  router.get("/totalParams",(req,res)=>{
    const sql = "select count(*) from params"
    client.query(sql,null,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            if(result.length>0){
                res.send({
                    status:200,
                    result
                })
            }else{
                res.send({
                    status:500,
                    msg:'暂无跟多数据'
                })
            }
        }
    })
  })
  //规格参数模糊查询
  router.get('/params/search',(req,res)=>{
    const search = url.parse(req.url,true).query.search;
    const sql = "select * from params where concat(paramData) like '%"+search+"%'" 
    client.query(sql,null,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            if(result.length>0){ 
                res.send({
                    status:200,
                    result
                })
            }else{
                res.send({
                    status:500,
                    msg:'暂无数据'
                })
            }
        }
    })
})
//规格参数添加
router.get("/backend/itemParam/insertItemParam",(req,res) => {
    const itemCatid = url.parse(req.url,true).query.itemCatid
    const paramsContent = url.parse(req.url,true).query.content
    var sql = "insert into params values (null,?,?)"
    client.query(sql,[itemCatid,paramsContent],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            if(result.affectedRows>0){
                res.send({
                    status:200,
                    msg:'添加成功'
                })
            }else{
                res.send({
                    status:500,
                    msg:'添加失败'
                })
            }
        }
    })
})

//规格参数删除的接口
router.get('/params/delete',(req,res)=>{
    const id = url.parse(req.url,true).query.id;
    const sql = 'delete from params where id=?'
    const arr = [id]
    client.query(sql,arr,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            if(result.affectedRows>0){
                res.send({
                    status:200,
                    msg:'删除成功'
                })
            }else{
                res.send({
                    status:500,
                    msg:'删除失败'
                })
            }
        }
    })
  })
  //广告导航管理  查询
  router.get("/content/selectContentCategory",(req,res)=>{
    const id = url.parse(req.url,true).query.id || 1;
    const sql = 'select * from content where id=?'
    client.query(sql,[id],(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            if(result.length>0){
                res.send({
                    status:200,
                    result
                })
            }else{
                res.send({
                    status:500,
                    msg:'暂无数据'
                })
            }
        }
    })
  })

  //广告导航管理 添加子导航
  router.get('/content/insertContentCategory',(req,res)=>{
    const cid = url.parse(req.url,true).query.cid
    const name = url.parse(req.url,true).query.name
    const currentId = Math.floor(Math.random() * 10000)
    const sql = "insert into content values (?,?,?)"
    client.query(sql,[cid,name,currentId],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            if(result.affectedRows > 0){
                res.send({
                    status:200,
                    msg:'添加成功'
                })
            }else{
                res.send({
                    status:500,
                    msg:'添加失败'
                })
            }
        }
    })
  })
//   广告导航管理，修改导航
    router.get('/content/updateContentCategory',(req,res)=>{
        const cid = url.parse(req.url,true).query.cid
        const name = url.parse(req.url,true).query.name
        const sql  = 'update content set name=? where cid=?'
        client.query(sql,[name,cid],(err,result)=>{
            if(err){
                console.log(err)
            }else{
                if(result.affectedRows>0){
                    res.send({
                        status:200,
                        msg:'修改成功'
                    })
                }else{
                    res.send({
                        status:500,
                        msg:'修改失败'
                    })
                }
            }
        })
    })
//   广告导航管理，删除导航
router.get('/content/deleteContentCategory',(req,res)=>{
    const cid = url.parse(req.url,true).query.cid
    const sql  = 'delete from content where cid=?'
    client.query(sql,[cid],(err,result)=>{
        if(err){
            console.log(err)
        }else{
            if(result.affectedRows>0){
                res.send({
                    status:200,
                    msg:'删除成功'
                })
            }else{
                res.send({
                    status:500,
                    msg:'删除失败'
                })
            }
        }
    })
})
module.exports = router
