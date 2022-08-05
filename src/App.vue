<template>
<Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>
import NavbarVue from './components/Navbar.vue';
import Navbar from './components/Navbar.vue';

export default{
    components: NavbarVue,
    components: { Navbar }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');

#app {
  font-family: 'Abel', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}


</style>
