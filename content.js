// Exemplo: mudar o fundo da página
document.body.style.backgroundColor = "black";

// Usando sua classe GameVisualization
class GameVisualization {
    constructor() {
        this.status = '';
    }
    updateStatus(newStatus) {
        this.status = newStatus;
        this.display();
    }
    display() {
        console.log(`Current Game Status: ${this.status}`);
    }
}

const gameViz = new GameVisualization();
gameViz.updateStatus("Extensão ativa dentro do site!");
