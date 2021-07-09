<template>
<div>

  <div>
    <v-layout>
    <v-flex >
      <v-card>
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
export default {
    name: 'shops',
    computed:{
         shopsHome() {
      return store.state.shops.shops_home;
    },
    }
}
</script>