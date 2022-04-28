<template>
  <div class="detail_reapir_CarApperance">
    <h1>仮_板金塗装屋さん(車の外見の修理工場)の<b>詳細</b>ページ</h1>
  </div>
  <br>
  <GetData /><!-- 左のタグを入れたところに，コンポーネント情報が表示されるらしい-->
</template>

<script>
import GetData from "@/components/GetData.vue";

export default{
  name: "Goal_get-JsonAPI",
  components: {
    GetData,
  },
};

</script>