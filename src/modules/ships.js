
import {Board} from './board'

class Ships{
    constructor(){
        this.ships = [];
    }  
    addShip(coordinates){
        const ship = {
            coordinates: coordinates,
            sunk: false,
            length: coordinates.length,
        };
        this.ships.push(ship);
    }
    updateShip(column, row){
        for(let i = 0; i < this.ships.length; i++){
            const ship = this.ships[i];
            const hit = ship.coordinates.findIndex((coords) => coords[0] === column && coords[1] === row);
                if(hit !== -1) {
                    ship.length -= 1;
                    if(ship.length === 0){
                        ship.sunk = true;
                        console.log("Ship destroyed");
                    }
                return;
                }
        }
    }
    allShipsDestroyed(){
        return this.ships.every((ship) => ship.sunk);
    }
}
export {Ships}

