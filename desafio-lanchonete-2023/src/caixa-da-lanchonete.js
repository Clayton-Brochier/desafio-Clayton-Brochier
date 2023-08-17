class CaixaDaLanchonete {
    constructor() {

        const cardapio = {
            //Definir itens do cardapio
            itens: [
                { codigo: "cafe", descricao: "Café", valor: 3.00 },
                { codigo: "chantily", descricao: "Chantily (extra do Café)", valor: 1.50 },
                { codigo: "suco", descricao: "Suco Natural", valor: 6.20 },
                { codigo: "sanduiche", descricao: "Sanduíche", valor: 6.50 },
                { codigo: "queijo", descricao: "Queijo (extra do Sanduíche)", valor: 2.00 },
                { codigo: "salgado", descricao: "Salgado", valor: 7.25 },
                { codigo: "combo1", descricao: "1 Suco e 1 Sanduíche", valor: 9.50 },
                { codigo: "combo2", descricao: "1 Café e 1 Sanduíche", valor: 7.50 }
            ],

            selecionarItem: function (itemCodigo, quantidade) {
                var itemSelecionado = this.itens.find(item => item.codigo === itemCodigo);
                return itemSelecionado ? { item: itemSelecionado, quantidade: quantidade } : null;       
            },


            calcularValorDaCompra: function (metodoDePagamento, itens) {
                if (itens.length === 0) {
                    return ("Não há itens no carrinho de compra!");
                  }
                var valorTotal = 0;

                for (var i = 0; i < itens.length; i++) {
                    var item = itens[i].item;
                    var quantidade = itens[i].quantidade;

                    if(!item){
                        return("Item inválido");
                    }

                    if (quantidade === 0) {
                        return ("Quantidade inválida!");
                      }

                    if (item.codigo === "chantily" || item.codigo === "queijo") {
                        var itemPrincipalCodigo = item.codigo === "chantily" ? "cafe" : "sanduiche";
                        var itemPrincipalSelecionado = this.itens.find(item => item.codigo === itemPrincipalCodigo);

                        if (!itemPrincipalSelecionado) {
                            return ("Item extra não pode ser pedido sem o principal.");
                        }
                    }

                    valorTotal += item.valor * quantidade;
                }
                if (!metodoPagamento || (metodoDePagamento !== "dinheiro" && metodoDePagamento !== "credito" && metodoDePagamento !== "debito")) {
                    return ("Forma de pagamento inválida!");
                  }

                if (metodoDePagamento === "dinheiro") {
                    valorTotal *= 0.95; // Aplica desconto de 5% para pagamento em dinheiro
                } else if (metodoDePagamento === "credito") {
                    valorTotal *= 1.03; // Aplica aumento de 3% para pagamento no crédito
                }
                var valorFormatado = "R$ " + valorTotal.toFixed(2).replace('.', ',');
                return ("Total a pagar R$ " + valorFormatado);
            }
        }

    }  
};

export { CaixaDaLanchonete };
