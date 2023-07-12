

class Ships{
    constructor(column, row,  ship_length){
        this.ships_lenght = ship_length;
        this.column = parseInt(column);
        this.row  = parseInt(row);
        this.sunk = false;
        this.coordinates = [];
    }
}
export {Ships}

