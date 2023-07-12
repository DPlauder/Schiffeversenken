

class Ships{
    constructor(){
        this.ships = [];
    }
    addShip(coordinates){
        const ship = {
            coordinates: coordinates,
            sunk: false,
        };
        this.ships.push(ship);
    }
    clearShips(){
        this.ships = [];
    }
}
export {Ships}

