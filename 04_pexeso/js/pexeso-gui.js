import {Pexeso} from "../js/pexeso.js";

export class PexesoGUI {


    constructor(container, rows, columns, bombs = null) {
        this.container = container;
        this.game = new Pexeso(["🐻", "🐻️", "🐢", "🐢", "🦊", "🦊", "🐳", "🐳", "🦉", "🦉"]);
    }


    render() {

    }

    draw() {
        //this._clear();

        const container = document.createElement('div');
        const header = document.createElement('h2');
        const smallHeader  = document.createElement('h3');

        for (let i = 0; i < this.game.game.length; i++) {
            const item = document.createElement('div');
            item.className = "item";
            item.innerText = this.game.game[i];
            container.appendChild(item);

            //this.game.selectedTile(i);

        }

        this.game.fields;


        this.container.appendChild(container)

    }
    
}


