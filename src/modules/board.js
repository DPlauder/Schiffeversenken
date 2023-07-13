
import { Ships } from './ships'

class Board {
    //ships = [2, 2, 3, 3, 3, 4, 4, 5]
    constructor(ships = [2, 2, 3, 3, 3, 4, 4, 5]) {
        this.ships_length = ships;
        //this.player = "";
        this.grid = 10;
        this.board = [];
        this.ships = new Ships();
        this.shipCount = 0;
        this.createBoxes();
    }
    createBoxes() {
        for (let i = 0; i < this.grid; i++) {
            let row = [];
            for (let j = 0; j < this.grid; j++) {
                row.push(j);
            }
            this.board.push(row);
        }
        this.getShipStartpoint();
    }
    getShipStartpoint() {
        for (let i = 0; i < this.ships_length.length; i++) {
            const shipLength = this.ships_length[i];
            let shipPlaced = false;
        
            while (!shipPlaced) {
              let startpoint = [];
              let column = null;
              let row = null;
        
              if (this.player) {
                column = [prompt('zeile')];
                row = [prompt('reihe')];
              } else {
                column = Math.floor(Math.random() * 10);
                row = Math.floor(Math.random() * (10 - shipLength));
              }
        
              startpoint.push(column);
              startpoint.push(row);
        
              const shipCoordinates = this.createFullShip(startpoint, shipLength);
              if (shipCoordinates && this.placeShip(shipCoordinates)) {
                this.placeShip(shipCoordinates);
                shipPlaced = true;
                this.ships.addShip(shipCoordinates)
                this.shipCount += 1;
              } else{
                    console.log("Platzieren nicht möglich");
              }
            }
          }
          this.checkAllShipsPlaced();
        }
    createFullShip(startpoint, shipLength) {
        let column = parseInt(startpoint[0]);
        let row = parseInt(startpoint[1]);
        const shipCoordinates = [];
        for (let i = 0; i < shipLength; i++) {
            if (this.board[column][row] === "O") {
              return null;
            }
            let cords = [column, row];
            shipCoordinates.push(cords);
            row += 1;
          }
          
          return shipCoordinates
    }
    placeShip(shipCordinates) {
        //console.log(shipCordinates);
        for (let i = 0; i < shipCordinates.length; i++) {
            const column = shipCordinates[i][0];
            const row = shipCordinates[i][1];
            if (this.board[column][row] === "O") {               
                return false;
            } else {
                this.board[column][row] = "O";
            }
        }
        return true
    }

    checkAllShipsPlaced() {
        //console.log('test');
        if (this.shipCount === this.ships_length.length) {
            console.log("All ships placed on the board.");
        }
    }
    checkHit(column, row) {
        if (this.board[column][row] === "O") {
            console.log('Hit');
            this.board[column][row] = "X";

        } else if (this.board[column][row] === "X" || this.board[column][row] === "M") {
            console.log('Already Shot There');
        }
        else {
            console.log('Miss');
            this.board[column][row] = "M";
        }
    }
}
export { Board }

