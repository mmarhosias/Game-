
class Game {
    constructor () {

    }
    start() {

    }
}

window.onload = () => {
    nav();
    startLoop();
    setInterval(() => {
        if (panel === "game") {
            game.game = new Game();
            game.game.start();
            panel = "game process";
        }
    }, 500)
};