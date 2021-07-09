
<template>

  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  <shop-details id=1 name ='Local Shop' :details='shop_info'> </shop-details>
    <!-- <h1>
    {{shopsHome}}
  </h1> -->

  </div>
</template>
<script>
//the details data was accessed from the props in this case
// everything that has ':' we are binding it 
// @ is an alias to /src
import ShopDetails from "@/components/ShopDetails.vue";
import store from '@/store'

export default {
  name: "Home",
  components: {
  ShopDetails 
  },
  data: () => ({
  shop_info : {
    event_name : [],
    shop_category : "Snacks" , 
    shop_description: "Lebanese Local Produce"
  },
  form : {
    event_name : "Euro 2021 - ard ardkon"
  }
  }),
  method : {}, 
  computed : {
    // shopsHome() {
    //   return store.state.shops.shops_home;
    // }
  }, 
  mounted (){
    store.dispatch("shops/getShops", this.form);
  }, 
  created (){}
};
</script>
