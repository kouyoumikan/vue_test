const app = Vue.createApp({
    el: "#app",
    data: () => ({
        newItem: '',
        todos: [],
        now: "00:00:00",

        // 算出プロパティ
        basePrice: 100,

        // 監視プロパティ
        message: 'Hello!'
    }),
    methods: {
        addItem: function() { //タスクアイテム
            console.log('onClick!')

            //未入力ならタスク追加なし
            if(this.newItem === '') return

            let todo = {
                item: this.newItem,
                isDone: false
            }

            //入力文字のタスク追加
            this.todos.push(todo)
            //入力文字をクリア
            this.newItem = ''
        },
        deleteItem: function(index) { // 削除ボタン
            console.log('onDelete!')
            console.log('onIndex!')

            // 個別にタスクの削除
            this.todos.splice(index, 1)
        },
        time: function(e) {  //日付と現在時刻
            var date = new Date(); //インスタンスを生成

            //日付と現在時刻のみ取得
            this.now = new Date().toLocaleString();
            
            //現在時刻のみ取得
            // this.now = date.getHours() + ":"
            // + date.getMinutes() + ":" +
            // date.getSeconds();
        },

        // 算出プロパティ（キャッシュなし）
        methodsNumber: function() {
            return Math.random()
        }
    },

    computed: { // 算出プロパティ（getterとsetter）
        taxIncludedPrice : {
            get: function() {
                return this.basePrice * 1.1
            },
            set: function() {
                this.basePrice = value / 1.1
            }
        },

        // 算出プロパティ（キャッシュ有り）
        computedNumber: function() {
            return Math.random()
        }
    },

    watch : { // 監視プロパティ（監視データ変更時はコンソールにnew値とold値を表示する処理）
        message: function(newValue, oldValue) {
            console.log('new: %s, old: %s', newValue, oldValue)
        }
    },
});
app.mount('#app')
