<template>
  <div class="counter-component">
    <div class="counter-btn" @click="minEvent"> - </div>
    <div class="counter-show">
        <input type="text" v-model="counter" @click="keyEvent">
    </div>
    <div class="counter-btn" @click="addEvent"> + </div>

  </div>
</template>

<script>
export default {
    name:'Counter',
    data(){
        return {
            counter:1
        }
    },
    props:{
        counterObj:{
            type:Object,
            default:{
                min:1,
                max:1
            }
        }
    },
    methods:{
        minEvent(){
            if(this.counter<=this.counterObj.min)
            {
                return;
            }
            this.counter--
        },
        addEvent(){
            if(this.counter>=this.counterObj.max)
            {
                return;
            }
            this.counter++
        },
        keyEvent(){
            var fix;
            if(typeof this.counter === 'string')
            {
                fix = Number(this.counter.replace(/\D/g,""))
            }
            else {
                fix = 1
            }
            if(fix<=1 || fix>100){
                fix = 1
            }
            this.counter = fix
        }
    }
}
</script>

<style scoped>
.counter-component {
    position: relative;
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;
}
.counter-show {
    float: left;
}
.counter-show input {
    border: none;
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    height: 25px;
    line-height: 25px;
    width: 30px;
    outline: none;
    text-indent: 4px;
}
.counter-btn {
    border: 1px solid #e3e3e3;
    float: left;
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    cursor: pointer;
}
.counter-btn:hover {
    border-color: #4fc08d;
    background: #4fc08d;
    color: #fff;
}
</style>