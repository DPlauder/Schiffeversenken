"use strict";

import './style.css'
import {Game} from './modules/game.js'

const init = () => {
    const newGame = new Game(); // if player needed add 1 or 2 strings
    console.log('p1', newGame);
    
    //player1.board.overlay.checkClickCoords()
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
