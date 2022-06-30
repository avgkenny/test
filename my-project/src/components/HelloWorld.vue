<template>
<navbar />
<router-view></router-view>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

export default {
  name: "App",
  components: {
    Navbar,
  },
  methods: {},
  data() {},
  mounted() {},
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
