"use strict";

//import './style.css'; 
import {Board} from './modules/board';

const init = () => {
    const test = new Board();
    console.log(test);
    test.checkHit(1, 1);
    test.checkHit(2, 1);
    test.checkHit(3, 1);
    test.checkHit(4, 1);
}

init()
