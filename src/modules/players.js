import {Board} from './board';

class Player{
    constructor(player = ""){
        this.player = player;
        this.board = new Board(this.player);
    }
}
export {Player}