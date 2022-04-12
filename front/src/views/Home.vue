<template>
  <div class="home">
    <HomePage msg="repair_CarAppearance_ 仮ホームページ" />
    <br>
    <router-link to="/Detail_repair_CarApperance">修理工場<b>詳細</b>ページへ</router-link>
  </div>
  <br>
  <router-link to="/List_repair_CarAppearance">修理工場一覧ページへ</router-link>
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
