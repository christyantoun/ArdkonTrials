<template>
<div>

  <div>
    <v-layout>
    <v-flex >
      <v-card style="border:1px;">
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
     
             v-for="shop in shopsHome" :key="shop.shop_id"
            >
  <shop-dets :shop = "shop"></shop-dets>
              </v-flex>
          </v-layout>
        </v-container>
        </v-card>
    </v-flex>
  </v-layout>
    </div>

</div>
</template>

<script>
import store from "@/store";
import ShopDets from './ShopDets'
export default { 
    name: 'shops',
    components:{
        ShopDets
    },
    computed:{
         shopsHome() {
      return store.state.shops.shops_home;
    },
    }
}
</script>