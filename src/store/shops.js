import axios from "axios";

const actions = {
  showLocation({ commit }, data) {
    commit("SHOW_LOCATION", data);
  },

  async getShops({ commit }, data) {
    return axios
      .post("https://techard.net/Get-Shops?basics=EventManagement", data)
      .then((response) => {
        if (response.data.message === "Success") {
          commit("SHOPS_HOME", response.data.data.shops_home);
          commit("SHOPS_DELIVERY", response.data.data.shops_delivery);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const shops = {
  namespaced: true, // we can call it elsewhere by its name
  mutations: {
    SHOW_LOCATION(state, data) {
      state.shop_location = data;
    },
    SHOPS_HOME(state, data) {
      for (let i = 0; i < data.length; i++) {
        state.shops_home.push(data[i]);
      }
    },
    SHOPS_DELIVERY(state, data) {
      for (let i = 0; i < data.length; i++) {
        state.shops_delivery.push(data[i]);
      }
    },
  }, // to change the state - it saves what was changed
  actions, // call API and mutations with it
  getters: {}, //to get and manipulate the mutations
  // bas njib array men api we cant assign we can either push or assign an empty array ma fina to assign an array with empty information
  state: () => ({
    shops_home: [],
    shops_delivery: [],
    shop_name: "christy",
    shop_location: "",
  }),
};

export default shops;
