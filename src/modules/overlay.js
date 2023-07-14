

class Overlay {
    constructor(size, player) {
        this.size = size;
        this.overlay = document.getElementById('content');
        console.log(player);
        this.gameboard = document.createElement('div');
        this.gameboard.classList.add('gameboard');
        this.overlay.appendChild(this.gameboard);
        this.createBox();
    }
    createBox() {
        for (let i = 0; i < this.size; i++) {
            const gridColumn = document.createElement('div');
            gridColumn.classList.add('column');
            gridColumn.setAttribute("column", i);
            for (let j = 0; j < this.size; j++) {
                const box = document.createElement('div')
                box.classList.add('row');
                box.setAttribute("row", j);

                gridColumn.appendChild(box);
            }

            this.gameboard.appendChild(gridColumn);
        }
    }
    checkClickCoords(e) {
        let row = e.target;
        let column = row.parentNode;            
        row = parseInt(row.getAttribute("row"));
        column = parseInt(column.getAttribute("column"));
        const coords = [column, row];
        return coords
    }
}

export { Overlay }
