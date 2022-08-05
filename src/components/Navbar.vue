<template>
  <nav >
    <div class="row gap-2 d-flex justify-content-center">
        <div class="col-sm-2">
            <router-link to="/">Home          <i class="bi bi-house"></i></router-link>
            </div>
        <div class="col-sm-2">
            <router-link to="/allProducts">All Products          <i class="bi bi-cart-fill"></i></router-link>
            </div>
        <div class="col-sm-2">
            <router-link to="/login">Login          <i class="bi bi-person"></i></router-link>
            </div>
        <div class="col-sm-2">
            <router-link to="/register">Register          <i class="bi bi-person-fill"></i></router-link>
            </div>
            <!-- <div class="col-sm-2">
                <router-link>Cart           <i class="bi bi-bag-check-fill"></i></router-link>
            </div> -->
    </div>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>

nav {
  padding: 10px;
  position: fixed;
  background-color: white ;
  width: 100%;
  z-index: 10;
}

nav a {
  font-weight: bold;
  color: black;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #257752;
}

nav a:hover {
  color: #257752;
}


</style>
