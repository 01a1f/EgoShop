<template>
  <div class="params">
    <pubHeader :searchHandle="$api.paramsSearch"/>
    <ParamsList/>
    <commenDevidePageVue :total="total"/>
    <ParamsAdd/>
  </div>
</template>

<script>
import ParamsList from './ParamsList.vue';
import commenDevidePageVue from '@/components/commenDevidePage.vue'
import pubHeader from '@/components/pubHeader.vue';
import ParamsAdd from './paramsAdd.vue';
export default {
  data(){
    return {
      total:0
    }
  },
  components:{ParamsList,commenDevidePageVue,pubHeader,ParamsAdd},
  mounted(){
    this.$api.totalParams().then(res=>{
      this.total = res.data.result[0]["count(*)"]
    })
  }
  
}
</script>

<style scoped>
.params {
  width: 1200px;
  margin: 0 auto;
}
</style>