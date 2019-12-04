import {Pexeso} from "../js/pexeso.js";

export class PexesoGUI {


    constructor(container, rows, columns, bombs = null) {
        this.container = container;
        this.game = new Pexeso(rows, columns, ["😀", "☺️", "😀", "☺️", "🎅🏻", "🎅🏻"]);
    }


    render() {

    }

    draw() {
        //this._clear();

        const container = document.createElement('div');
        const header = document.createElement('h2');
        const smallHeader  = document.createElement('h3');
        for (let i = 0; i < length; i++) {
            
        }

        this.game.fields;



        container.appendChild(abc);


        this.container.appendChild(container)

    }
}


