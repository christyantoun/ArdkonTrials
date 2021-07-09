<template>
  <div>

    <h1>Shop Information {{ id }} : {{ name }}</h1>
    <h2>{{ details.shop_description }}</h2>
    <p>
      {{ details.shop_category }}
    </p>
    <p>
      {{ description }}
    </p>
    <div v-for="item in items" :key="item.itemName">
      {{ itemName }}
    
    
    </div>
        <div v-for="shop in shopsHome" :key="shop.shop_id">
     <h1> {{ shop.shop_title }} </h1>
    </div>
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


    <div style="width: 50vh">
      <div v-if="showingEx === true">
        <button @click="HideEx">On</button>
        <h1>Off</h1>
      </div>
    </div>
    <div>
      <div v-if="showingEx === false">
        <button @click="DisplayEx">Off</button>
        <h1>On</h1>
      </div>
    </div>
    <p>{{ shopsHome }}</p>
    <p>{{ shopsDelivery }}</p>
    <p>{{ shopLocation }}</p>
    <button @click="show">Show</button>
    <button @click="remove">delete</button>
    <div v-if="showing === true">
      <h1>Hello</h1>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import ShopDets from './ShopDets.vue'
export default {
  name: "shop-details",
  components:{ShopDets},
  props: {
    // prop is used for when we re calling a component to send data
    id: Number,
    name: String,
    details: Object,
  },
  data: () => ({
    description: "",
    items: [
      {
        itemName: "Item1",
        itemDetails: "Item1Details",
      },
      {
        itemName: "Item2",
        itemDetails: "Item2Details",
      },
      {
        itemName: "Item3",
        itemDetails: "Item3Details",
      },
    ],
    showing: false,
    showingEx: true,
  }),
  methods: {
    show() {
      store.dispatch("shops/showLocation", "asdhsjahdl");
      this.showing = true;
      this.description = "hello this is text";
    },
    textFunc() {
      this.description = "randoooom";
    },
    remove() {
      this.showing = false;
      store.dispatch("shops/showLocation", "");
    },
    DisplayEx() {
      this.showingEx = true;
    },
    HideEx() {
      this.showingEx = false;
    },
  },
  computed: {
    // function with return
    shopLocation() {
      return store.state.shops.shop_location;
    },
    shopsHome() {
      return store.state.shops.shops_home;
    },
    shopsDelivery() {
      return store.state.shops.shops_delivery;
    },
  },
  mounted() {
    // event on page load
    this.show();
    //store.state.shops.shop_location
  },
  created() {
    this.textFunc();
  },
};
</script>
