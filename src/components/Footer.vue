<template>
  <footer>
    <div class="row d-flex justify-content-center align-items-center flex-column vh-50">
        <h4>Footer Heading</h4>
    <div class="row gap-1">
      <div class="col-md-3">
        <router-link><i class="bi bi-instagram"></i></router-link>
      </div>
      <div class="col-md-3">
        <router-link><i class="bi bi-facebook"></i></router-link>
      </div>
      <div class="col-md-3">
        <router-link><i class="bi bi-twitter"></i></router-link>
      </div>
      <div class="col-md-3">
        <router-link><i class="bi bi-reddit"></i></router-link>
      </div>
      <div class="col-md-3">
        <router-link><i class="bi bi-yelp"></i></router-link>
      </div>
    </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>

footer{
  
}

footer a {
  font-weight: bold;
  color: black;
  text-decoration: none;
  background-color: white;
}

footer a:hover {
  color: #257752;
}
</style>
