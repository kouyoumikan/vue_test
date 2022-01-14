const app = Vue.createApp({
    el: '#app',
    data: () => ({ // データの初期値
        isLarge: true, // spanクラスの文字サイズを大きくするか判定
        hasError: true, // 文字色を変更するか判定

        // 配列構文によるクラスとスタイルの共存データバインディング
        largeClass: 'large',
        dangerClass: 'text-danger',

        // クラスの条件に三項演算子を使用した処理
        largeClass2: {
            'large': true,
            'bg-gray': true
        },
        dangerClass2: {
            'text-danger': true
        },

        // オブジェクトデータを利用
        classObject: {
            large: true,
            'text-danger': true
        },

    }),

    watch : { // 監視プロパティ（監視データ変更時はコンソールにnew値とold値を表示する処理）
        

    },

    methods: { // メソッド
        

    },

});
app.mount('#app')