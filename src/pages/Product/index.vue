<template>
  <div class="product">
    <ProductHeader/>
    <ProductList/>
    <DevidePage/>
    <ProductAdd/>
    <ProductEditor/>
  </div>
</template>

<script>
import ProductHeader from "./ProductHeader.vue";
import ProductList from "./ProductList.vue";
import DevidePage from "./DevidePage.vue"
import ProductAdd from "./ProductAdd.vue";
import ProductEditor from "./ProductEditor.vue";
export default {
    data(){
      return {
        
      }
    },
    components: { ProductList , DevidePage , ProductHeader , ProductAdd , ProductEditor},
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