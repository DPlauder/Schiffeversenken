"use strict";

import './style.css'
import {Player} from './modules/players'
//import {Board} from './modules/board';

const playGame = () => {

}


const init = () => {
    const player1 = new Player();
    const player2 = new Player();
    console.log('p1', player1);
    console.log('p2', player2);
    
    player1.board.overlay.checkClickCoords()
    /*
    player1.board.checkHit(1, 1);
    player1.board.checkHit(2, 1);
    player1.board.checkHit(3, 1);
    player1.board.checkHit(3, 2);
    player1.board.checkHit(3, 3);
    player1.board.checkHit(3, 4);
    player1.board.checkHit(3, 5);
    player1.board.checkHit(3, 1);
    */
    
}

init()
