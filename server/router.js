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
    const sql = `select * from product order by id desc limit 10 offset ${(page-1)*10}`
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
                    msg:'查询失败'
                })
            }
        }
    })
  })

module.exports = router
