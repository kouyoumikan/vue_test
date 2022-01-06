const app = Vue.createApp({
    el: "#app",
    data: () => ({
        now: "00:00:00"
    }),
    methods: {
        addItem: function() {
            console.log('onClick!')
            
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
