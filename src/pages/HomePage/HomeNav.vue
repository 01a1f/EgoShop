<template>  
          <div class="index-left-block">
              <h2>全部产品</h2>
              <div v-for="(product,index) in productList" :key="index">
                <h3>{{ product.title }}</h3>
                <ul>
                    <li v-for="(item,index) in product.list" :key="index">
                        <a :href="item.url">{{ item.name }}</a>
                        <span class="hot-tag" v-if="item.hot">HOT</span>
                    </li>
                </ul>
              </div>
          </div>
</template>

<script>
export default {
    data(){
        return {
            productList:[
                {
                    title:"手机应用类",
                    list:[
                        {
                            id:1,
                            name:"91助手",
                            url:"http://ikun.com",
                            hot:true
                        },
                        {
                            id:2,
                            name:"92助手",
                            url:"http://ikun.com",
                            hot:false
                        },
                        {
                            id:3,
                            name:"93助手",
                            url:"http://ikun.com",
                            hot:false
                        },
                        {
                            id:4,
                            name:"94助手",
                            url:"http://ikun.com",
                            hot:false
                        }
                    ]
                },
                {
                    title:"PC产品类",
                    list:[
                        {
                            id:1,
                            name:"p1助手",
                            url:"http://ikun.com",
                            hot:true
                        },
                        {
                            id:2,
                            name:"p2助手",
                            url:"http://ikun.com",
                            hot:false
                        },
                        {
                            id:3,
                            name:"p3助手",
                            url:"http://ikun.com",
                            hot:false
                        },
                        {
                            id:4,
                            name:"p4助手",
                            url:"http://ikun.com",
                            hot:false
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>
    
    .index-left-block {
        margin: 15px;
        background: #fff;
        box-shadow: 0 0 1px #ddd;
    }
    .index-left-block .hr {
        margin-bottom: 20px;
        height: 1px;
        width: 100%;
        background: #ddd;
    }
    .index-left-block h2 {
        background: #4fc08d;
        color: #fff;
        padding: 10px 15px;
        margin-bottom: 20px;
    }
    .index-left-block h3 {
        padding: 0 15px 5px 15px;
        font-weight: bold;
        color: #222;
    }
    .index-left-block ul {
        padding: 10px 15px;
    }
    .index-left-block li {
        padding: 5px;
    }
    .hot-tag {
        background: red;
        color: #fff;
    }
</style>