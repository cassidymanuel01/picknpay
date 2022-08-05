<template>
  <div class="home">
    <div id="box" class="d-flex justify-content-center align-items-center flex-column">
      <h2 class="display-5 fw-bold">Welcome to</h2>
      <h1 id="name" class="display-1">Pick n Pay</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',

}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');

.home{
  background: url('https://i.postimg.cc/TYBfHRZB/Healthy-Food-Doesnt-Have-To-Be-Expensive-1280x720.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: 100vh;
  color: white;
}

#name{
  font-family: 'Black Han Sans', sans-serif;
  color: white;
  font-weight: 100;
}

#box{
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.33);
}

</style>
