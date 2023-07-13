
import {board} from './board'

class Overlay{
    constructor(){
        this.overlay = document.getElementById('content');

        this.gameboard = document.createElement('div');
        this.gameboard.classList.add('gameboard');
        this.overlay.appendChild(this.gameboard);
    }
    createBox(){
        const box = document.createElement('div');
        box.classList.add('box');
    }
}
