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

// Example usage:
const gameViz = new GameVisualization();
// gameViz.updateStatus('Game Started!');