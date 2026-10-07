class Produto {
    private nome: string;
    private preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    exibirInformacoes(): void {
        console.log("\n Informações do Produto");
        console.log("Nome: " + this.nome);
        console.log("Preço: R$ " + this.preco);
    }
}

