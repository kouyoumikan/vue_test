const app = Vue.createApp({
    el: "#app",
    data: () => ({
        newItem: '',
        todos: [],
        now: "00:00:00"
    }),
    methods: {
        addItem: function() {
            console.log('onClick!')

            //未入力ならタスク追加なし
            if(this.newItem === '') return

            let todo = {
                item: this.newItem
            }

            //入力文字のタスク追加
            this.todos.push(todo)
            //入力文字をクリア
            this.newItem = ''
        },
        time: function(e) { 
            var date = new Date(); //インスタンスを生成

            //日付と現在時刻のみ取得
            this.now = new Date().toLocaleString();
            
            //現在時刻のみ取得
            // this.now = date.getHours() + ":"
            // + date.getMinutes() + ":" +
            // date.getSeconds();
          }
    }
});
app.mount('#app')
