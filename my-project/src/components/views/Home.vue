<template>
  <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8" style="background:white; min-height:500px;">
      <img v-bind:src="gambar" style="height: 200px; width: 200px;" />

      <div v-html="datadiri"></div>
    
      <div class="mx-2 col-md-12" style="padding-top: 50px; padding-bottom: 2rem;">
        <h3 style="font-weight: bold;">Tabel Blog</h3>
        <div style="margin-bottom: 20px;">
          <input style="margin-bottom: 20px;" type="text" class="form-control"
          placeholder="Judul" v-model="judul">
          <code>{{judul}}</code>
          <input style="margin-bottom: 20px;" type="text" class="form-control"
          placeholder="Isi" v-model="isi">
          <button class="btn btn-success" v-on:click="addpost()">Add Post</button>
        </div>
        <table class="table table-info table-striped">
          <tbody>
            <tr>
              <th>Judul</th>
              <th>Isi</th>
              <th></th>
            </tr>
            <tr v-for="(post, index) in posts" :key="post.judul">
              <td style="font-weight: bold; width: 200px; text-align: left;">{{post.judul}} {{index}}</td>
              <td style="text-align: justify;">{{post.isi}}</td>
              <td style="text-align: center;">
                <button class="btn btn-danger" v-on:click="remove(index)">Hapus</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <ModalDeleteConfirmation v-on:close="deleteconfirmation($event)" />
  
      <div style="margin-top: 50px;">
      <h3>coba fungsi</h3>
      <table class="table table-striped" style="font-weight: bold; text-align:left;">
      <tbody>
        <tr>
          <td style="width:150px;">angka pertama</td>
          <td style="width:1px;">:</td>
          <td>{{angka_pertama}}</td>
        </tr>
        <tr>
          <td style="width:150px;">angka kedua</td>
          <td style="width:1px;">:</td>
          <td>{{angka_kedua}}</td>
        </tr>
        <td style="width:150px;">hasil penjumlahan</td>
        <td style="width:1px;">:</td>
        <td>{{hasil}}</td>
      </tbody>
      </table>
      </div>


      <div style="margin-top:50px;"><h3>Component Blog</h3></div>
      <div class="row">
      <Card>
        <template v-slot:judul>
          <h3 class="card-title">My first project</h3>
        </template>
        <template v-slot:gambar>
          <img style="width: 100%; height: 100%;" src="@/assets/ponyo.png">
        </template>
        <template v-slot:isi>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque in neque a? Dolore minima harum eum. Iusto minus, quos dolorem suscipit consequatur sequi, nesciunt soluta reiciendis, distinctio hic reprehenderit laudantium?</p>
        </template>
      </Card>
      </div>
    </div>
    <div class="col-md-2"></div>
  </div>
</template>

<script>
  import Card from '@/components/slots/Card.vue'
  import ModalDeleteConfirmation from '@/components/modal/ModalDeleteConfirmation.vue'
  import $ from 'jquery/src/jquery.js'
  import axios from 'axios'
  
  
 
export default {
  name: "App",
  components: {
    Card,
    ModalDeleteConfirmation
  },
  methods: {
    penjumlahan: function(){
      this.hasil = (this.angka_pertama + this.angka_kedua);

      console.log(`${this.angka_pertama} + ${this.angka_kedua} = ${this.hasil}`);
    },
    deleteconfirmation(value) {
      if (value === true) {
        this.posts.pop()
      } else {
        $("modalDeleteConfirmation").modal("hide")
      }
    },
    remove: function(INDEX){
      this.selectedPost = {index:INDEX, data:this.posts[INDEX]};
      $("#modalDeleteConfirmation").modal("show");
    },
    inputJudul: function(event){
      this.judul = event.target.value;
    },
    inputIsi: function(event){
      this.isi = event.target.value;
    },
    addpost: function(){
      let data = {};
      data.judul = this.judul;
      data.isi = this.isi;
      this.posts.push(data);
    }
  },
  data() {
    return {
      selectedPost:{
        data:{
          judul:'',
          isi:''
        }
      },
     
        judul:"",
        isi:"",

      posts: [
        { id: 0, judul: "judul", isi:"lorem,ipsum"},
        { id: 1, judul: "judul", isi:"lorem,ipsum"},
        { id: 2, judul: "judul", isi:"lorem,ipsum"},
        ],
      angka_pertama:1,
      angka_kedua:5,
      hasil:0,
      message: '',
      gambar : require("@/assets/vector.jpg"),
      datadiri:
        "<h1>haloo nama saya Danang</h1></br><h3>Saya tinggal di kota Malang</h3>",

    };
  },
  mounted() {
    this.penjumlahan();
    console.log(axios);
  //   axios.get("https://localhost:8000/api/getpost").then((Response) => {
  //     console.log(Response);
  //   });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
