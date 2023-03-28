import axios from "axios"; // 导入 axios
import { Message } from "element-ui"; // 使用 elementUI Message 做消息提醒
import store from '../store/index'//引入store，从而使用store中的token
 
// 创建 axios 实例
const request= axios.create({
    baseURL: "http://localhost:3000", // 公共接口
    withCredentials: true, // 跨域请求时发送Cookie
    timeout: 5000 // 请求超时时间
});
//request.interceptors.request.use(config=>{},error=>{})请求拦截器以及两个参数
request.interceptors.request.use(
    config => {
        //中间注入token，token一般存在vuex中(state)，所以就要在上面引入我们的store
            if(store.state.token){
                config.headers['Authorization'] = `Bearer ${store.state.token}`  
            }
        return config; //config是请求的配置信息，必须返回的
    },
    error => {
       return Promise.reject(error);//失败返回error
    }
);
//响应拦截器request.interceptors.response.use(response =>{}, error =>{})
request.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error && error.response) {
            switch (error.response.status) {
                case 400:
                    error.message = "错误请求";
                    break;
                case 401:
                    error.message = "未授权，请重新登录";
                    break;
                case 403:
                    error.message = "拒绝访问";
                    break;
                case 404:
                    error.message = "请求错误,未找到该资源";
                    window.location.href = "/NotFound";
                    break;
                case 405:
                    error.message = "请求方法未允许";
                    break;
                case 408:
                    error.message = "请求超时";
                    break;
                case 500:
                    error.message = "服务器端出错";
                    break;
                case 501:
                    error.message = "网络未实现";
                    break;
                case 502:
                    error.message = "网络错误";
                    break;
                case 503:
                    error.message = "服务不可用";
                    break;
                case 504:
                    error.message = "网络超时";
                    break;
                case 505:
                    error.message = "http版本不支持该请求";
                    break;
                default:
                    error.message = `连接错误：${error}`;
            }
        } else {
            if (JSON.stringify(error).includes("timeout")) {
                Message.error("服务器响应超时，请刷新当前页面。");
            }
            Message.error("连接服务器失败");
        }
 
        Message.error(error.message);
 
        return Promise.resolve(error.response);
    }
);
 
export default request;//导出