
import { Player } from './players.js'

class Game{
    constructor(player1 = "", player2 = ""){
        this.player1 = new Player(player1);
        this.player2 = new Player(player2);
        this.currentPlayer = this.player1;
        this.p1Win = false;
        this.p2Win = false;
        this.shotsFired();
    }
    shotsFired(){
        //console.log('shots');
        while(this.p1Win === false && this.p2Win === false){
            let column = "";
            let row = "";
            let nextround = false;
            if(this.currentPlayer === this.player1){
                console.log('p1 dran');
                if(this.player1.human){
                    column = prompt('column shot');
                    row = prompt('shot');
                }else{
                    column = Math.floor(Math.random() * 10);
                    row = Math.floor(Math.random() * 10);                   
                }
                nextround = this.player1.board.checkHit(column, row);
                if(nextround){
                    this.currentPlayer = this.player2; 
                    this.p2Win = this.player2.board.checkGameOver()
                }    
            } else{
                console.log('p2 dran');
                if(this.player2.human){
                    column = prompt('column shot');
                    row = prompt('shot');
                }else{
                    column = Math.floor(Math.random() * 10);
                    row = Math.floor(Math.random() * 10);
                }
                nextround = this.player2.board.checkHit(column, row);
                if(nextround){
                    this.currentPlayer = this.player1; 
                    this.p1Win = this.player1.board.checkGameOver()
                }
            }
        }
        if(this.p1Win === true){
            console.log('p2 gewonnen');
        } else if(this.p2Win === true){
            console.log('p1 gewonnen');
        }
    }
}
export {Game}