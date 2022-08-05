<template>
  <div class="register d-flex justify-content-center align-items-center flex-column">
    <div class="container d-flex justify-content-center align-items-center flex-column">
  <form class="form pb-3" action="https://cm-picknpayapi.herokuapp.com/register" method="POST">
    <div class="row">
      <div class="col-12 pt-5">
      <h2 class="display-3 pt-5 text-white">Register</h2>
      </div>
      <div class="col-12">
        <h4><label for="name">Name:</label></h4>
        </div>
        <div class="col-12">
          <input  name="firstname" type="text" placeHolder="Enter your First Name" class="form-control w-100 mx-auto" v-model="firstname">
        </div>
        </div>
        <div class="row">
        <div class="col-12">
          <h4><label for="surname">Surname:</label></h4>
        </div>
        <div class="col-12">
          <input name="lastname" type="text" placeHolder="Enter your Last Name" class="form-control w-100 mx-auto" v-model="surname">
        </div>
        </div>
        <div class="row">
        <div class="col-12">
          <h4><label for="email">Email:</label></h4>
        </div>
        <div class="col-12">
          <input name="email" type="email" placeHolder="Enter your Email" class="form-control w-100 mx-auto" v-model="email">
        </div>
        </div>
        <div class="row">
        <div class="col-12">
          <h4><label for="password">Password:</label></h4>
        </div>
        <div class="col-12">
          <input name="userpassword" type="text" placeHolder="Enter your Password" class="form-control w-100 mx-auto" v-model="password">
        </div>
        </div>
        <div class="row">
        <div class="col-12">
          <h4>
            <label for="gender">Gender:</label>
          </h4>
        </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <h5><input type="radio" value="female" name="gender">           Female</h5>
            </div>
          <div class="col-sm-4">
            <h5><input type="radio" value="male" name="gender">          Male</h5>
            </div>
          <div class="col-sm-4">
            <h5><input type="radio" value="other" name="gender">          Other</h5>
            </div>
            </div>
        <div class="col-12 pt-3">
          <button class="btn btn-success" type="submit">Register</button>
        </div>
        </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.register{
    background: 
  linear-gradient(
  rgba(0, 0, 0, 0.59),
  rgba(0, 0, 0, 0.59) 
  ),
  url('https://i.postimg.cc/TYBfHRZB/Healthy-Food-Doesnt-Have-To-Be-Expensive-1280x720.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: 100vh;
  color: white;
  padding: 10px;
}

.container{
  background: 
  linear-gradient(
  rgba(0, 0, 0, 0.59)
  ),
  url('https://i.postimg.cc/TYBfHRZB/Healthy-Food-Doesnt-Have-To-Be-Expensive-1280x720.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  color: white;
  padding: 50px;
}

select{
  height: 40px;

}

select:hover {
    background-color:  #257752 !important;
}

</style>