import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null
  },
  getters: {
  },
  mutations: {
    setProducts(state, products){
      state.products = products
  }
  },
  actions: {
    getProducts(){
        fetch('https://cm-picknpayapi.herokuapp.com/products')
        .then((res) => res.json())
        .then((data) => {context.commit('setProducts', data.products)})

    }
  },
  modules: {
  }
})
