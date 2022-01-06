const app = Vue.createApp({
    data: () => ({
        now: '-'
    }),
    methods: {
        addItem: function() {
            console.log('onClick!')
            this.now = new Date().toLocaleString()
        }
    }
})
app.mount('#app')
