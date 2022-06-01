<template>
  <div class="getdata">
    <!--<h2>{{ msg }}</h2>-->
    <p>
      コンポーネントの,GetDataからデータを取得中
      <p>{{data.title}}</p>
      <p>{{data.message}}</p>
      <p>{{data.mydata}}</p>
    </p>
  </div>
</template>

<script>
  import axios from "axios"
  import { reactive, onMounted } from "vue"

  const url = "/test_data.txt"

  export default{
    setup(props){
      //data変数?にそれぞれ値を入れている(data.titleは「Axios」が表示)
      const data = reactive({
        title:"Axios",
        message:"this is axios sample.",
        mydata: "",
      })
      // axiosを用いて，データを取得している
      const getData = async()=>{
        let result = await axios.get(url)
        data.mydata = result.data
      }
      //OnMoutedは，コンポーネントがマウント(Detail_repair_CarApperance.vueで表示)された時に呼び出される，イベント
      onMounted(()=> {
        getData()
      })
      return { data, getData}
    },
  }
</script>