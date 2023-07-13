

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
    removeShip(index){
        this.ships.splice(index, 1);
    }
}
export {Ships}

