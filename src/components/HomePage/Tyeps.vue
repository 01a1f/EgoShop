<template>
  <div class="selection-component">
    <div class="selection-show">
        <span>{{ selecterData[currenIndex].value }}</span>
        <div class="arrow" @click="showList"></div>
    </div>
    <div class="selection-list" v-show="flag">
        <ul>
            <li v-for="(item,index) in selecterData" :key="index" @click="selectHandle(item)">
                {{ item.value }}
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            flag:false,
            currenIndex:0
        }
    },
    props:{
        selecterData:{
            type:Array,
            default:[
                {
                    value:'test',
                    id:0
                }
            ]
        }
    },
    methods:{
        showList(){
            this.flag = ! this.flag
        },
        selectHandle(value){
            this.currenIndex = value.id
            this.flag = false
        }
    }
}
</script>

<style scoped>
.selection-component {
    position: relative;
    display: inline-block;
}
.selection-show {
    border: 1px solid #e3e3e3;
    padding: 0 20px 0 10px;
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 25px;
    line-height: 25px;
    border-radius: 3px;
    background: #fff;
}
.selection-show .arrow {
    display: inline-block;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid #e3e3e3;
    width: 0;
    height: 0;
    margin-top: -1px;
    margin-left: 6px;
    margin-right: -14px;
    vertical-align: middle;
}
.selection-list {
    display: inline-block;
    position: absolute;
    left: 0;
    top: 25px;
    width: 100%;
    background: #fff;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    z-index: 5;
}
.selection-list li {
    padding: 5px 15px 5px 10px;
    border-left: 1px solid #e3e3e3;
    border-right: 1px solid #e3e3e3;
    cursor: pointer;
    background: #fff;
    /* // 多余文字变成省略号 */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.selection-list li:hover {
    background: #e3e3e3;
}
</style>