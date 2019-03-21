<template>
  <div class="left">
    <div class="value" @click="push">{{count}}</div>
    <el-button type="success" @click="add(2)">增加</el-button>
  </div>
</template>
<script>
import { mapGetters, mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  mounted: function() {
    console.log(this.count);
  },
  updated() {
    // alert(this.count);
  },
  computed: {
    ...mapState({
      ai: state => state.count
    }),
    ...mapGetters("count", {
      count: "value"
    })
  },
  methods: {
    // 使用辅助函数 mapMutations
    // ...mapMutations({
    //   add: "count/add"
    // }),
    add(step){
      console.log(this.$store.dispatch);
      // actions异步方式
      // this.$store.dispatch("count/acAdd",step);
      // mutations同步方式
      this.$store.commit("count/add",step);
    },
    // 手动添加路由
    push() {
      this.$router.push("/addedrouter");
    }
  }
};
</script>
<style scoped lang="scss">
$blue: blue;
.left {
  .value {
    color: $blue;
    font-size: 20px;
  }
}
</style>
