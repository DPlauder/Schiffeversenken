import {Board} from './board';

class Player{
    constructor(player = ""){
        this.player = player;
        this.human = false;
        this.board = new Board(this.player);
        this.checkHuman();
    }
    checkHuman(){
        if(this.player){
            this.human = true
        }
    }
}
export {Player}