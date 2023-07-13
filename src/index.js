"use strict";

//import './style.css'; 
import {Board} from './modules/board';

const playGame = () => {

}


const init = () => {
    const test = new Board();
    console.log(test);
    test.checkHit(1, 1);
    test.checkHit(2, 1);
    test.checkHit(3, 1);
    test.checkHit(3, 2);
    test.checkHit(3, 3);
    test.checkHit(3, 4);
    test.checkHit(3, 5);
    test.checkHit(3, 1);
}

init()
