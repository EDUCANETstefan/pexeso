export class Pexeso {

    constructor(game) {
        this.game = game;
        this._shuffle();
        this.onclick();
    }

    selectedTile() {

    }

    _shuffle() {
        this.game.sort(() => Math.random() - 0.5);
    }

    onclick = function() {
        item.setAttribute("style", "font-size: 120%;");
        otocit++;
        console.log(otocit);
    }



}