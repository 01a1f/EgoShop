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
    insertTbItem(params){
        return axios.get(base.baseUrl + base.insertTbItem,{params})
    },
    deleteItemById(params){
        return axios.get(base.baseUrl + base.deleteItemById,{params})
    },
    preUpdateItem(params){
        return axios.get(base.baseUrl + base.preUpdateItem,{params})
    }

}

export default api