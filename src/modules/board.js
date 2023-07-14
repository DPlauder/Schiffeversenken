
import { Ships } from './ships.js'
import { Overlay } from './overlay.js';

class Board {
    //ships = [2, 2, 3, 3, 3, 4, 4, 5]
    constructor(player = "", grid = 10, ships = [2, 2, 3, 3, 3, 4, 4, 5]) {
        this.ships_length = ships;
        this.player = player;
        this.grid = grid;
        this.board = [];
        this.ships = new Ships();
        this.shipCount = 0;
        this.overlay = new Overlay(this.grid, this.player);
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
                //Input Human Player       
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
                if (shipCoordinates) {
                    this.placeShip(shipCoordinates);
                    shipPlaced = true;
                    this.ships.addShip(shipCoordinates)
                    this.shipCount += 1;
                } else {
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
            this.board[column][row] = "O";
        }
    }

    checkAllShipsPlaced() {
        //console.log('test');
        if (this.shipCount === this.ships_length.length) {
            console.log("All ships placed on the board.");
        }
    }
    checkHit(column, row) {
        if (this.board[column][row] === "O") {
            this.board[column][row] = "X";
            console.log('Hit');
            this.ships.updateShip(column, row);
            return true
        } else if (this.board[column][row] === "X" || this.board[column][row] === "M") {
            console.log('Already Shot There');
            return false
        }
        else {
            console.log('Miss');
            this.board[column][row] = "M";
            return true
        }
    }
    checkGameOver() {
        if (this.ships.allShipsDestroyed() === true) {
            console.log('Alle Schiffe versenkt');
            return true
        } else {
            return false
        }
    }
}
export { Board }

