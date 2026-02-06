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
gameViz.render(); // ou qualquer método que faça sentido
