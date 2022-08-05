import { createStore } from 'vuex'

export default createStore({
  state: {
    products: null,
    product: null,
    user: null
  },
  getters: {
  },
  mutations: {
    setProducts(state, products){
      state.products = products
    },
    setProduct(state, product){
      state.product = product
    },
    setUser(state, user){
      state.user = user
    }          
  },
  actions: {
    getProducts(context){
        fetch('https://cm-picknpayapi.herokuapp.com/products')
        .then((res) => res.json())
        .then((data) => {context.commit('setProducts', data.products)})

    }
  },
  modules: {
  }
})
