<template>
  <div class="add">
    我是手动添加的router,叫做add
  </div>
</template>

<script>

export default {
  name: "Add",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  components:{
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add{
    width:100%;
    color:red;
}
</style>
