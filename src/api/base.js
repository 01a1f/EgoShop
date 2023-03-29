const base = {
    baseUrl:"http://localhost:3000",
    register:"/api/register",
    login:"/api/login",
    selectTbItemAllByPage:'/api/backend/item/selectTbItemAllByPage',
    total:'/api/total',//商品总条数
    search:'/api/search',//模糊查询
    insertTbItem:'/api/backend/item/insertTbItem',//商品添加
    deleteItemById:'/api/backend/item/deleteItemById',//商品删除
    preUpdateItem:'/api/backend/item/preUpdateItem',//预更新
    UpdateTbItem:'/api/backend/item/UpdateTbItem',//编辑产品提交
    selectItemParamAll:'/api/backend/itemParam/selectItemParamAll' //规格参数查询
}
export default base;