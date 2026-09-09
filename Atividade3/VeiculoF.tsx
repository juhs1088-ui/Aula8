import { Veiculo } from "./Veiculo";

export class Ferrari implements Veiculo {

    ligar(): void {
        console.log("A Ferrari foi ligada.");
    }

    desligar(): void {
        console.log("A Ferrari foi desligada.");
    }

    manobrar(): void {
        console.log("A Ferrari está manobrando.");
    }

    engatar(): void {
        console.log("A marcha foi engatada.");
    }

    acelerar(): void {
        console.log("A Ferrari está acelerando.");
    }

    frear(): void {
        console.log("A Ferrari está freando.");
    }
}