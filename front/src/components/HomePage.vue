<template>
  <div class="explain-Service">
    <h2>{{ msg }}</h2>
    <p>
      このサービスは車の外見の修理代を抑えたい人のための，直接修理工場を探すことができマージンを抑えることができるサービスです。
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