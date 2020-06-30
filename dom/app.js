new Vue({
    el: '#desafio',
    data: {
        nome: 'Bruno Costa Gonçalves',
        idade: 28,
        img: 'https://pics.me.me/pero-que-linda-morena-32464976.png'
    },
    methods: {
        randNumero: function () {
            return Math.random()
        }
    }
})