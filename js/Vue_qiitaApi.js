const app = Vue.createApp({
    el: '#app',
    data: () => ({ // データの初期値
        items: null, // APIから取得した検索結果のデータを格納
        keyword: '', // ユーザーが検索した検索キーワードを格納
        message: '', // ユーザーに表示するメッセージを格納

    }),

    watch : { // 監視プロパティ（監視データ変更時はコンソールにnew値とold値を表示する処理）
        keyword: function(newKeyword, oldKeyword) {
            console.log(newKeyword)

            this.message = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }

    },

    mounted : function() {
        // 初期実行動作。el読み込み前のタイミングで以下処理を実行する。
        // this.keyword = 'JavaScript'
        // this.getAnswer()

        this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
    },

    methods: { // メソッド
        getAnswer: function() { // APIからデータを取得
            if(this.keyword === '') { // キーワードが空文字の場合、itemsにnullを返す処理
                console.log('空文字')
                this.items = null
                //２回目以降の検索時にメッセージを空にする
                this.message = ""
                return
            }

            this.message = 'loading...'

            //Vueインスタンスを格納する変数を定義
            const vm = this

            // リクエスト条件を定義 { 1ページ表示、表示件数は20件、検索クエリはキーワードの入力値}
            const params = { page: 1, pre_page: 20, query: this.keyword }

            //axiosのgetメソッドでAPIをたたく
            axios.get('https://qiita.com/api/v2/items', params)
                .then(function(response) { // 取得したparamsのresponseの値をコンソールに表示する処理
                    //console.log(response) // データ取得できたか確認用
                    this.item = res.data // itemプロパティに取得データを格納
                    vm.items = message.data
                })
                .catch(function(error) { // エラー発生時の処理
                    vm.message = 'Error!' + error
                })
                .finally(function() { // 通信が完了したらLoadingの表示をクリア
                    vm.message = ''
                })

            // else { // ユーザーがitemsに入力している場合
            //     this.message = 'loading...'

            //     const vm = this
            //     // { 検索結果ページを１ページ取得、 １ページあたりの表示件数、検索キーワード}
            //     const params = { page: 1, pre_page: 20, query: this.keyword }
            //     axios.get('https://qiita.com/api/items', { params })
            //         .then(function(response) { // 取得したparamsのresponseの値をコンソールに表示する処理
            //             // console.log(response)
            //             vm.items = message.data
            //         })
            //         .catch(function(error) { // 処理エラーの場合はエラーメッセージを表示する処理
            //             vm.message = 'Error!' + error
            //         })
            //         .finally(function() { // 処理完了時はメッセージをからにする処理
            //             vm.message = ''
            //         })
            // }
        }

    },

    // watch : { // 監視プロパティ（監視データ変更時はコンソールにnew値とold値を表示する処理）
    //     keyword: function(newKeyword, oldKeyword) {
    //         console.log(newKeyword)
    //     }

    // },

    // computed: { // 算出プロパティ（getterとsetter）
        
    // },

});
app.mount('#app')