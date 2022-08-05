<template>
  <div
    class="login d-flex justify-content-center align-items-center flex-column"
  >
    <div
      class="container d-flex justify-content-center align-items-center flex-column"
    >
      <h2 class="display-2 text-white">Login</h2>
      <div class="form pb-3">
        <div class="row">
          <div class="col-12 fw-bold">
            <h2><label for="email">Email:</label></h2>
          </div>
          <div class="col-12">
            <input
              name="email"
              type="email"
              placeHolder="Enter your Email"
              class="form-control w-100 mx-auto"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h2><label for="password">Password:</label></h2>
          </div>
          <div class="col-12">
            <input
              name="password"
              type="text"
              placeHolder="Enter your Password"
              class="form-control w-100 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.login {
  background: linear-gradient(rgba(0, 0, 0, 0.59), rgba(0, 0, 0, 0.59)),
    url("https://i.postimg.cc/TYBfHRZB/Healthy-Food-Doesnt-Have-To-Be-Expensive-1280x720.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: 100vh;
  padding: 10px;
  color: white;
}

.container {
  background: linear-gradient(rgba(0, 0, 0, 0.59)),
    url("https://i.postimg.cc/TYBfHRZB/Healthy-Food-Doesnt-Have-To-Be-Expensive-1280x720.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  color: white;
  margin: 50px;
  padding: 50px;
}
</style>
