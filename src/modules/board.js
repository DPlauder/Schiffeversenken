
import {Ships} from './ships'

class Board{
    //ships = [2, 2, 3, 3, 3, 4, 4, 5]
    constructor(ships = [2, 2, 3, 3, 3, 4, 4, 5]){
        this.ships_length = ships;
        //this.player = "";
        this.grid = 10;
        this.board = [];
        this.ships = new Ships();
        this.shipCount = 0;
        this.createBoxes();
    }
    createBoxes(){
        this.board = [];
        this.shipCount = 0;
        this.ships.clearShips();
        for(let i = 0; i < this.grid; i++){        
            let row = [];   
            for(let j = 0; j < this.grid; j++){
                row.push(j);                
            }
            this.board.push(row);            
        }
        this.getShipStartpoint();
    }
    getShipStartpoint(){       
        for(let i = 0; i < this.ships_length.length; i++){ 
            let startpoint = [];
            let column = null;
            let row = null;
            if(this.shipCount < this.ships_length.length){
                if (this.player){
                    column = [prompt('zeile')];
                    row = [prompt('reihe')];
                } else {
                    column = Math.floor(Math.random() * 10 );
                    row = Math.floor(Math.random() * (10 - this.ships_length[i]));
                }           
                startpoint.push(column);       
                startpoint.push(row);
                const shipLenght = this.ships_length[i]
                //console.log(column, row);
                this.createFullShip(startpoint, shipLenght);
            }
        }
        this.checkAllShipsPlaced()
    }
    createFullShip(startpoint, shipLenght){
        let column = parseInt(startpoint[0]);
        let row = parseInt(startpoint[1]);
        const shipCordinates = [];
        for(let i = 0; i < shipLenght; i++){
            let cords = [column, row]; 
            shipCordinates.push(cords);
            row += 1;           
        }
        console.log('fulship', shipCordinates);
        this.placeShip(shipCordinates);       
    }
    placeShip(shipCordinates){
        //console.log(shipCordinates);
        for(let i = 0; i < shipCordinates.length; i++) {
            const column = shipCordinates[i][0];
            const row = shipCordinates[i][1];
            if(this.board[column][row] === "O"){
                console.log("Platzieren nicht möglich");               
                this.removeShip(i); // nicht fertig...ersetzt das neue board erstellen
                return;
            } else {
                this.board[column][row] = "O";               
            }                      
        }
        this.ships.addShip(shipCordinates)
        this.shipCount += 1; 
        //console.log(this.shipCount);
    }

    checkAllShipsPlaced() {
        //console.log('test');
        if (this.shipCount === this.ships_length.length) {
          console.log("All ships placed on the board.");
        }
    }
    checkHit(column, row){
        if(this.board[column][row] === "O"){
            console.log('Hit');
            this.board[column][row] = "X";
            
        } else if(this.board[column][row] === "X" || this.board[column][row] === "M") {
            console.log('Already Shot There');
        }
        else {
            console.log('Miss');
            this.board[column][row] = "M";
        }
    }
}
export {Board}

