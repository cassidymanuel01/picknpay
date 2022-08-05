<template>
  <div class="allProducts pt-5 ">
    <div class="container pt-5 ">
      <h2 class="display-2 pb-3 pt-5">Products</h2>
      <div class="row">
        <div class="col-md-3 pb-5" v-for="product in products" :key="product">
      <div class="card">
        <h1>{{product.prodName}}</h1>
        <div class="card-body">
          <div class="row">
            <div class="col-12"><img :src="product.prodUrl" class="img-fluid border border-2 border-white rounded"></div>
            <div class="col-12"><p class="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. At quaerat id fugit minus recusandae. Placeat delectus dolores sunt eos consequatur esse et porro, perferendis nisi dolorum! Dolor mollitia maxime dolorum. Voluptates earum adipisci unde ipsum soluta et, ullam blanditiis, mollitia doloremque nesciunt eaque expedita enim, nihil harum modi illo ipsa!</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    this.$store.dispatch('getProducts')
  },
  computed:{
    products(){
      return this.$store.state.products
    }
  }
}
</script>

<style scoped>

.allProducts {
  background: linear-gradient(rgba(0, 0, 0, 0.59), rgba(0, 0, 0, 0.59)),
    url("https://i.postimg.cc/TYBfHRZB/Healthy-Food-Doesnt-Have-To-Be-Expensive-1280x720.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  color: white;
    display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.container {
  background: linear-gradient(rgba(0, 0, 0, 0.59)),
    url("https://i.postimg.cc/TYBfHRZB/Healthy-Food-Doesnt-Have-To-Be-Expensive-1280x720.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  color: white;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

h1{
  color: black;
}


</style>