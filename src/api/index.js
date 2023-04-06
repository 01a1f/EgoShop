import axios from 'axios'
import base from './base'

const api = {
    // 注册
    register(params){
        return axios.post(base.baseUrl + base.register,params)
    },
    login(params){
        return axios.post(base.baseUrl + base.login,params)
    },
    //商品列表
    selectTbItemAllByPage(params){
        return axios.get(base.baseUrl + base.selectTbItemAllByPage,{params})
    },
    //商品总条数
    total(){
        return axios.get(base.baseUrl + base.total)
    },
    //模糊查询
    search(params){
        return axios.get(base.baseUrl + base.search,{params})
    },
    //添加书籍
    insertTbItem(params){
        return axios.get(base.baseUrl + base.insertTbItem,{params})
    },
    //书籍删除
    deleteItemById(params){
        return axios.get(base.baseUrl + base.deleteItemById,{params})
    },
    //预更新
    preUpdateItem(params){
        return axios.get(base.baseUrl + base.preUpdateItem,{params})
    },
    //商品编辑
    UpdateTbItem(params){
        return axios.get(base.baseUrl + base.UpdateTbItem,{params})
    },
    //规格参数查询
    selectItemParamAll(params){
        return axios.get(base.baseUrl + base.selectItemParamAll,{params})
    },
    //参数条数总数
    totalParams(){
        return axios.get(base.baseUrl + base.totalParams)
    },
    //规格参数模糊查询
    paramsSearch(params){
        return axios.get(base.baseUrl + base.paramsSearch,{params})
    },
    //规格参数添加数据
    insertItemParam(params){
        return axios.get(base.baseUrl + base.insertItemParam,{params})
    },
    //规格参数删除
    paramsDelete(params){
        return axios.get(base.baseUrl + base.paramsDelete,{params})
    },
    selectContentCategory(params){
        return axios.get(base.baseUrl + base.selectContentCategory,{params})
    },
    //广告导航管理 添加子导航
    insertContentCategory(params){
        return axios.get(base.baseUrl + base.insertContentCategory,{params})
    },
    //广告导航管理 添加子导航
    updateContentCategory(params){
        return axios.get(base.baseUrl + base.updateContentCategory,{params})
    },
    deleteContentCategory(params){
        return axios.get(base.baseUrl + base.deleteContentCategory,{params})
    }
}

export default api