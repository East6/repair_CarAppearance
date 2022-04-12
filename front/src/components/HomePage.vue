<template>
  <div class="explain-Service">
    <h2>{{ msg }}</h2>
    <p>
      車の外見を修理したい人が，修理代を抑えるために，<b> <font color="Orange">直接</font> </b>修理工場を探すことができるサービスです。
    </p>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>