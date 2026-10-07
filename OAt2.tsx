import { Produto } from "./At2";
import * as readline from "readline";
async function main() {

    const leia = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(pergunta: string): Promise<string> {
    return new Promise((resolve) => {
        leia.question(pergunta, resolve);
    });
}
    const nome = await perguntar("Digite o nome do produto: ");
    const preco = Number(await perguntar("Digite o preço do produto: "));

    if (preco < 0) {
        console.log("O preço não pode ser negativo.");
    } else {
        const ObjetoProduto = new Produto(nome, preco);

        ObjetoProduto.exibirInformacoes();
    }

    leia.close();
}

main();