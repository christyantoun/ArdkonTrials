<template>

 <div>
     <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="444"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      :src="shop.shop_img_src"
    ></v-img>

    <v-card-title>
     <h1> {{ shop.shop_title }} </h1>
    </v-card-title>

    <v-card-text>
      <v-row
        class="mx-0"
      >
        <div style="
      width= 100px;
      height= 100px;
      background= green;
      border-radius: 50%"
        ></div>

        <div class="grey--text ms-4">
          {{shop.shop_status}}
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
       {{shop.shop_small_description}}
      </div>

      <div>{{shop.shop_country}}, {{shop.shop_city}}</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title></v-card-title>

    <v-card-actions>
      <v-btn
        color="deep-blue lighten-1"
        text
        @click="reserve"
      >
        Show Menu
      </v-btn>
    </v-card-actions>
  </v-card>
 </div>
</template>
<script>
import store from "@/store";
export default {
  name: "shop-dets",
  props: {
    // prop is used for when we re calling a component to send data
    shop: Object,
  },
  data: () => ({
  }),
  methods: {
  },
  computed: {
    shopsHome() {
      return store.state.shops.shops_home;
    },
    shopsDelivery() {
      return store.state.shops.shops_delivery;
    },
  },
  mounted() {
  },
  created() {
  },
};
</script>
