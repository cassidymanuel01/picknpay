<template>
  <div class="singleProduct d-flex justify-content-center align-items-center flex-column">
    <div class="container d-flex justify-content-center align-items-center flex-column">
                <div class="row pt-5 ps-5 gap-2">
                    <div class="col-5 rounded">
                <img src="https://i.postimg.cc/wvX7vzyT/ripe-red-strawberries.jpg" class="img-fluid border border-2 border-white rounded">
                </div>
                    <div class="col-5 d-flex justify-content-center align-items-center flex-column bg-white text-black border border-2 border-white rounded">
                <h1>product name</h1>
                <p>description</p>
                <p>price</p>
                <button class="rounded bg-success text-white">add to cart</button>
            </div>
        </div>
            </div>
        </div>
</template>

<script>
export default {

}
</script>

<style>

.singleProduct{
    background: linear-gradient(rgba(0, 0, 0, 0.59), rgba(0, 0, 0, 0.59)),
    url("https://i.postimg.cc/TYBfHRZB/Healthy-Food-Doesnt-Have-To-Be-Expensive-1280x720.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  height: 100vh;
  color: white;
}

.container{
  background: linear-gradient(rgba(0, 0, 0, 0.59)),
    url("https://i.postimg.cc/TYBfHRZB/Healthy-Food-Doesnt-Have-To-Be-Expensive-1280x720.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  color: white;
}

.img-fluid{
  height: 100%;
    width: 100%;
    object-fit: cover;
    overflow-x: hidden;
    border-radius: 20px;
  transition: all 1s ease;
}

</style>