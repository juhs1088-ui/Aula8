export class ContaBancaria {
    nome: string;
    Saldo: number;
    Deposito: number;

    constructor(nome: string, saldo: number, deposito: number) {
        this.nome = nome;
        this.Saldo = saldo;
        this.Deposito = deposito;
    }

    mostrarDados(): void {
        console.log("\n Dados da Conta ");
        console.log("Nome: " + this.nome);
        console.log("Saldo da conta: " + this.Saldo);
        console.log("Valor do depósito: R$ " + this.Deposito);
    }
}