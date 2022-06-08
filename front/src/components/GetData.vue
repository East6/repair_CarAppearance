<template>
  <div class="getdata">
    <!--<h2>{{ msg }}</h2>-->
    <p>
      コンポーネントの,GetDataからデータを取得中
      <p>{{data.title}}</p>
      <p>{{data.message}}</p>
      <br>
      <p>{{data.json_data}}</p>

      <div class="formgroup">
        <input type="number" v-model="data.id" /><!--v-modelの中に入れたのを引き継いで，doClickの処理ができるっぽい-->
        <button @click="doClick">Click</button>
      </div>

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
        id:0,
        json_data: null,
      })
      // axiosを用いて，データを取得している(非同期処理)_clickした時の処理を記述
      const doClick = ()=>{

        //getでカッコ内のデータを受け取った後に，thenを呼び出す(=>の後の内容が実行)らしい...
        //axiosでデータを受け取ると，json形式の場合，オブジェクトに変換してくれるらしい...
        /// data.json_data というオブジェクトの考え方????
        axios.get(url + data.id).then((result)=> {
          console.log(result.data)
          data.json_data = result.data
        }).catch((error)=> {//HTTPレスポンスとして，404 エラーコードが,帰ってくると，catch文の中が実行される
          data.message = "ERROR!"
          data.json_data = null
        })
      }
      return { data, doClick}
    },
  }
</script>