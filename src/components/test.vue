<template>
  <div>
    <button id="el" class="btn btn-success">Кнопка</button>
  </div>
</template>
<script>
export default {
  name: "test",
  updated() {
  this.el.click();
                alert("Был клик");  
  },
  data() {
    return {
        el:null
    };
  },
  methods: {
    fun() {
      // Получим наш параграф
      this.el = document.getElementById("el");

      setTimeout(function () {
      

      }, 5000);
    },
  },
};
</script>
