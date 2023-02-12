<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "../components/header";
export default {
  name: "FilmsLayout",
  components: {
    Header,
  },
  created() {
    this.load(1000);
    this.$store.dispatch('loadRating',1000)
  },
};
</script>
