import {Estudante} from "./At3";
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
    const nome = await perguntar("Digite o nome do estudante: ");
    const nota1 = Number(await perguntar("Digite a primeira nota: "));
    const nota2 = Number(await perguntar("Digite a segunda nota: "));

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        console.log("As notas devem estar entre 0 e 10.");
    } else {
        const ObjetoEstudante = new Estudante(nome, nota1, nota2);

        ObjetoEstudante.exibirInformacoes();
    }

    leia.close();
}

main();