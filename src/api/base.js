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
    selectItemParamAll:'/api/backend/itemParam/selectItemParamAll', //规格参数查询
    totalParams:'/api/totalParams',//规格参数总条数查询
    paramsSearch:'/api/params/search',// 规格参数模糊查询
    insertItemParam:'/api/backend/itemParam/insertItemParam',//规格参数添加数据
    paramsDelete:'/api/params/delete',//规格参数删除
    selectContentCategory:'/api/content/selectContentCategory',//广告导航查询
    insertContentCategory:'/api/content/insertContentCategory',//广告导航 添加子导航
    updateContentCategory:'/api/content/updateContentCategory', //广告导航 修改分类
    deleteContentCategory:'/api/content/deleteContentCategory'//广告导航 删除分类
}
export default base;