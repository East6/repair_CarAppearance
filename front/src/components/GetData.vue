<template>
  <div class="getdata">
    <!--<h2>{{ msg }}</h2>-->
    <p>
      コンポーネントの,GetDataからデータを取得中
      <p>{{data.title}}</p>
      <p>{{data.message}}</p>
      <br>
      <p>{{data.json_data}}</p>
      上記のjsonデータを綺麗にすると以下のようになる<br>
      <table>
        <tr>
          <th>ID</th>
          <td>{{data.json_data ? data.json_data.id : "-"}} </td><!--何この書き方?!-->
        </tr>

        <tr>
          <th>Title</th>
          <td>{{data.json_data ? data.json_data.title : "-"}}</td>
        </tr>

        <tr>
          <th>Body</th>
          <td>{{data.json_data ? data.json_data.body : "-" }}</td>
        </tr>


      </table>
     

    </p>
  </div>
</template>

<script>
  import axios from "axios"
  import { reactive, onMounted } from "vue"

  const url = "https://jsonplaceholder.typicode.com/posts/"

  export default{
    setup(props){
      //data変数?にそれぞれ値を入れている(data.titleは「Axios」が表示)
      const data = reactive({
        title:"Axios",
        message:"this is axios sample.",
        json_data: null,
      })
      // axiosを用いて，データを取得している(非同期処理)
      const getData = ()=>{
        let id = 1 // jsonのidの番号
        //getでカッコ内のデータを受け取った後に，thenを呼び出す(=>の後の内容が実行)らしい...
        //axiosでデータを受け取ると，json形式の場合，オブジェクトに変換してくれるらしい...
        /// data.json_data というオブジェクトの考え方????
        axios.get(url + id).then((result)=> {
          console.log(result.data)
          data.json_data = result.data
        })
      }
      //OnMoutedは，コンポーネントがマウント(Detail_repair_CarApperance.vueで表示)された時に呼び出される，イベント
      onMounted(()=> {
        getData()
      })
      return { data, getData}
    },
  }
</script>