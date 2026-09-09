class Cachorro implements Animal {  
    dormir(): void {
        console.log("O cachorro está dormindo.");
    }   

    caminhar(): void {
        console.log("O cachorro está caminhando.");
    }

    correr(): void {
        console.log("O cachorro está correndo.");
    }

    emitirSom(): void {
        console.log("AU AU!");
    }
}