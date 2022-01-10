const app = Vue.createApp({
    el: "#app",
    data: () => ({ // データの初期値
        newItem: '',
        todos: [],
        now: "00:00:00",

        // 算出プロパティ
        basePrice: 100,

        // 監視プロパティ
        message: 'Hello!',

        // 単位変換（km と m の値）
        km: 0,
        m: 0,

        // deepオプション（監視プロパティwatchのオプション）
        colors: [
            { name: 'Red' },
            { name: 'Green '},
            { name: 'Blue' },
        ],

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
        },

        // deepオプション（監視プロパティwatchのオプション）
        onClick: function(event) {
            // ボタン押下後、colorsの指定した値を変更
            this.colors[1].name = 'White'
        },

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
        },

        // 単位変換（km と m の値）
        km:function(value) {
            console.log(value)
            this.km = value
            this.m = value * 1000
        },
        m:function(value) {
            console.log(value)
            this.km = value / 1000
            this.m = value 
        },

        // deepオプション（監視プロパティwatchのオプション）
        colors: {
            handler : function(newValue, oldValue) {
                console.log('new: %s, old: %s', newValue, oldValue)
                console.log('Update!')
            },
            // コンソープを表示できるようにdeepをtrue
            deep: true
        }

    },
});
app.mount('#app')
