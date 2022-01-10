const app = Vue.createApp({
    
    data: () => ({ // データの初期値
        items: null, // APIから取得した検索結果のデータを格納
        keyword: '', // ユーザーが検索した検索キーワードを格納
        message: '', // ユーザーに表示するメッセージを格納

    }),

    mounted : function() {

    },

    methods: { // メソッド
        

    },

    watch : { // 監視プロパティ（監視データ変更時はコンソールにnew値とold値を表示する処理）
        

    },

    // computed: { // 算出プロパティ（getterとsetter）
        
    // },

});
app.mount('#app')