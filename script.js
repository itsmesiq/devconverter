let moneyCov = {
    get_in() {
        let select = document.getElementById('moedaInicial');
        let value = select.options[select.selectedIndex].value;
        return value;
    },
    get_out(){
        let select = document.getElementById('converterPara');
        let value = select.options[select.selectedIndex].value;
        return value;
    },
    mul(){
        const possibilidades = {
            'real->dolar':{
                fator: 0.20,
                currency: 'USD'
            },
            'real->euro':{
                fator:0.18,
                currency: 'EUR'
            },
            'dolar->real':{
                fator: 5.12,
                currency: 'BRL'
            },
            'dolar->euro':{
                fator: 0.92,
                currency: 'EUR'
            },
            'euro->real':{
                fator: 5.54,
                currency: 'BRL'
            },
            'euro->dolar':{
                fator: 1.09,
                currency: 'USD'
            },
        };

        const opcaoSelecionada = `${this.get_in()}->${this.get_out()}`;
        console.log(opcaoSelecionada);
        const parametros = possibilidades[opcaoSelecionada];

        if (!parametros){
            alert('Não implementado');
            return;
        }

        const valorEntrada = (parseFloat(document.getElementById('valorInicial').value));
        const valorSaida = valorEntrada * parametros.fator;
        console.log(valorSaida);

        alert(valorSaida.toLocaleString('pt-br',{
            style: 'currency',
            currency: parametros.currency
        }));
    },
}

let bitcoinCov = {
    get_in() {
        let select = document.getElementById('moedaInicial');
        let value = select.options[select.selectedIndex].value;
        return value;
    },

    get_out(){
        let value = 'bitcoin';
        return value;
    },

    mul(){
        const possibilidades = {
            'real->bitcoin':{
                fator:0.0000082,
                currency: 'BRL'
            },
            'dolar->bitcoin':{
                fator:0.000042,
                currency: 'USD'
            },
            'euro->bitcoin':{
                fator:0.000046,
                currency: 'EUR'
            },
        };

        const opcaoSelecionada = `${this.get_in()}->${this.get_out()}`;
        console.log(opcaoSelecionada);
        const parametros = possibilidades[opcaoSelecionada];

        const valorEntrada = (parseFloat(document.getElementById('valorInicial').value));
        const valorSaida = valorEntrada * parametros.fator;
        console.log(valorSaida);

        alert(valorSaida.toLocaleString('pt-br',{
            style: 'currency',
            currency: parametros.currency
        }));
    },

}