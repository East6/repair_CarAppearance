# エレベータピッチ
- 「車の外見にかかる修理代が高い」を解決したい
- 「車両保険に入っていない人向け」向けの，
- 「紹介手数料を発生させずに，料金を抑えることができる」
- 「repair_CarAppearance」です。
- これは「車の外見の修理工場を探すこと」ができ，
- 「グーネットピット」とは違って，
- 「気軽な評価からの信用度を確認する機能」が備わっています。

# スクラム流れ_ver3(20220329)
- 一週間一スプリント
  > 軌道修正を柔軟にするために

- 平日毎日
  - 1日3時間を開発時間とする
    > どのくらいタスクが進むかを予想できるから
    > 進み具合(ベロシティを決めれるから)
    
    - ゴール
      - スプリントレビュー(発表)までに
      - 完成の定義を

  - Daily スクラムを実施(毎日やる)
    - １日の始まりに[15min]
      > 今日やることの意識づけ 
      - 進捗の報告をする
        - スプリントゴールを達成するために
          - 昨日やったこと
          - 今日やること
          - 障害はあるか？
  
    - **日の終わりにもやる**[15min]
      - 進捗の報告をする
        > 明日やることを意識することで，明日モチベーションを保つために 
        - スプリントゴールを達成するために
          - 今日やったこと
          - 明日予定のこと
          - (障害はあるか?) 

- 開発(3h)以外で
  - バックログリファインメント{仮_1h}
    > ユーザにとっての価値を見直したい
  
    - 具体的にやること
      - 適度なタスク粒度に分解する
        - スプリントプランニングの見積もり時間を元に！
          - すべきこと(機能的なこと)を把握
        - 見積もり時間が大きかったら，何をやるか分かっていない
          - 分解
      - 完成の定義を仮決め(POとメンバー間での合意のため)する
        > 意識付けをして取り組むために
        > 曖昧なままではなく，何を持ってOKとするか？
 
      - バックログをを随時変更
        - 優先度変更
        - 新しく追加
        - 材料
          - 市場を調べたりする時間だったり？！
            - 親に聞いたりしたり！！

  - スプリントプランニング{仮_1h} 
    - 具体的にやること
      - 見積もり時間
        - 大まかな見積もり
          - **見積もり時間を儲けるための基準を設ける**
            > 成長したら，ベロシティ(一スプリントでできるタスク数)も変わるはずだし！ 
        - なぜその見積もりをしたのかを出す
          - すべきこと(機能的なこと)を把握
            - 実現できるようにするために，どういうことをすればいいか調べる
            - 設計？する
              - 図に書いたら破りそう
      - 完成の定義を本決定
        - 1スプリントで，できることを！
        - 案例
          - 動作して，検証可能でないといけない！
          - 本番環境へのデプロイ

  - スプリントレビュー
    > 実際に，進捗報告(デモ)をすることで，進捗を客観的に判断する
    > より良いものを作るための材料とする(フィードバックより)
    > 振り返り(スプリントレトロスペクティブ)にもつながるはず

    - スプリントの終わりに設ける
    - 関西の定義が終わっていると想定した段階
    - 具体的にやること
      - 進捗報告(PO,開発者目線)
        - 具体例
          - 実際に動くものが変わらない場合
            - 進捗報告
              - 実現したいこと(プロダクトバックログ)のために，この機能を追加しました。
          - 関西の定義で動くものとしていた場合！
            - デモする
              - どういうストーリ(想定)で，サービスを使うとこうなるよ！
      - ステークホルダー(利用者)目線
        - フィードバックをする
          - 発表を聞いて(感じたことや，プラスαの意見)
          - 実際に利用してみて

  - スプリントレトロスペクティブ(改善){15min}
    > 振り返りをして，やり方をより良いものにしていく
    
    - よかったこと
    - 改善点
    - 次やること