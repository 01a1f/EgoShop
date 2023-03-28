<template>
  <div class="product">
    <ProductHeader/>
    <ProductList/>
    <DevidePage/>
    <ProductAdd/>
  </div>
</template>

<script>
import ProductHeader from "./ProductHeader.vue";
import ProductList from "./ProductList.vue";
import DevidePage from "./DevidePage.vue"
import ProductAdd from "./ProductAdd.vue";
export default {
    data(){
      return {
        
      }
    },
    components: { ProductList , DevidePage , ProductHeader , ProductAdd},
    methods:{
      
    }
}
</script>

<style scoped>
.product {
  width: 1200px;
    margin: 10px auto;
}
</style>