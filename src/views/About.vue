
<template>

  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png" />
  <shops> </shops>
    <!-- <h1>
    {{shopsHome}}
  </h1> -->

  </div>
</template>
<script>
//the details data was accessed from the props in this case
// everything that has ':' we are binding it 
// @ is an alias to /src
import Shops from "@/components/Shops.vue";
import store from '@/store'


export default {
  name: "About",
  components: {
  Shops
  },
  data: () => ({
  shop_specs : {
    shop_country : "",
    shop_title : "" , 
    shop_img_src: "", 
    shop_city : ""
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
