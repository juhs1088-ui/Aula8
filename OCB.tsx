import {ContaBancaria} from "./CB2";  
import * as readline from "readline";

const leia = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(pergunta: string): Promise<string> {
    return new Promise((resolve) => {
        leia.question(pergunta, resolve);
    });
}

async function main() {
    const nome = await perguntar("Digite o nome: ");
    const saldo = Number(await perguntar("Digite o saldo da conta: "));
    const deposito = Number(await perguntar("Digite o valor do depósito: "));

    const ObjetoContaBancaria = new ContaBancaria(nome, saldo, deposito);

    ObjetoContaBancaria.mostrarDados();

    const saldoFinal = saldo + deposito;

    console.log("Saldo após o depósito: R$ " + saldoFinal);

    leia.close();
}

main();