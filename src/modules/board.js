
import {Ships} from './ships'

class Board{
    constructor(ships = [2, 2, 3, 3, 3, 4, 4, 5]){
        this.ships_lenght = ships;
        this.grid = 10;
        this.board = [];
        this.createBoxes();
        this.placeShips()
        //this.getPlayerShipStartpoint()
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
    placeShips(){
        const startpoint = this.getPlayerShipStartpoint();
        const column = startpoint[0];
        const row = startpoint[1];
        this.board[column][row] = 'O';

    }

    getPlayerShipStartpoint(){
        let startpoint = [];
        let startColumn = [prompt('zeile')];
        startpoint.push(startColumn);
        let startRow = [prompt('reihe')];
        startpoint.push(startRow);
        return startpoint;
    }
    createComShips(){
    }

    
}
export {Board}

