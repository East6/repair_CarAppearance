<template>
  <div class="home">
    <HomePage msg="repair_CarAppearance_ 仮ホームページ" />
    <br>
    <router-link to="/List_repair_CarAppearance">修理工場一覧ページへ</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import HomePage from "@/components/HomePage.vue";

export default {
  name: "Home",
  components: {
    HomePage,
  },
};
</script>
