
import {Ships} from './ships'

class Board{
    constructor(ships = [2, 2, 3, 3, 3, 4, 4, 5]){
        this.ships_lenght = ships;
        this.grid = 10;
        this.board = [];
        this.createBoxes();
    }
    createBoxes(){
        for(let i = 0; i < this.grid; i++){
            let row = [];
            for(let j = 0; j < this.grid; j++){
                row.push(j);                
            }
            this.board.push(row);            
        }
    }
    createPlayerShips(){
        for(let i = 0; i < this.ships_lenght.length; i++){
        const ship = new Ships(startpoint, this.ships_lenght[i]);
        }
    }
    createComShips(){

    }

    
}
export {Board}

