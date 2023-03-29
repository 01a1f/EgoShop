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
    }

}

export default api