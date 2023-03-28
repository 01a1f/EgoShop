import router from "./index.js";
import store from '../store/index'

router.beforeEach((to,from,next)=>{
    if(to.meta.isLogin){
        let token = store.state.login.user.token
        //let token = false
        if(token){
            next()
        }else{
            next({
                name:'Login'
            })
        }
    }else{
        next()
    }
})