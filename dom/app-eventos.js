new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    methods: {
        exibirAlerta: function () {
            alert('Valor: '+this.valor)
        },
        setValor: function() {
            this.valor = event.target.value
        }
    }
})