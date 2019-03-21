<template>
  <div class="right">
    <div class="value">{{count}}</div>
    <el-button type="danger" size="middle" @click="acDecrease(1)">减少</el-button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("count", {
      count: "value"
    })
  },
  methods: {
    acDecrease:function(){
     console.log(this.$store.dispatch('count/acDecrease',5));
    },
    ...mapActions({ decrease: "count/acDecrease" })
  }
};
</script>
<style scoped lang="scss">
$red: red;
.right {
  .value {
    color: $red;
    font-size: 20px;
  }
}
</style>
