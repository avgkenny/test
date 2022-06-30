<template>
    <div class="card mx-auto" style="width: 18rem;">
        <slot name="gambar" >
  <img class="card-img-top" src="" alt="Card image cap" style="width: 60p%; box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75)">
        </slot>
  <div class="card-body">
    <slot name="judul">
    <h5 class="card-title">Judul</h5>
    </slot>
    <slot name="isi">
    <p class="card-text" style="margin-top: 50px;">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </slot>
    <a class="btn btn-danger"><router-link to="/firstproject">read more</router-link>
    </a>
  </div>
</div>
</template>
<script>
export default {
    name: "Card"
}
</script>
<style>
    
</style>