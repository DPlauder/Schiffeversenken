
//import {board} from './board'

class Overlay{
    constructor(size){
        this.size = size * size;
        this.overlay = document.getElementById('content');

        this.gameboard = document.createElement('div');
        this.gameboard.classList.add('gameboard');
        this.overlay.appendChild(this.gameboard);
        this.createBox();
    }
    createBox(){
        for(let i = 0; i < this.size; i++){
            const box = document.createElement('div');
            box.classList.add('box');
            this.gameboard.appendChild(box);
        }
    }
    checkClick(){

    }
}

export {Overlay}
