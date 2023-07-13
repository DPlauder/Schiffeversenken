

class Overlay {
    constructor(size) {
        this.size = size;
        this.overlay = document.getElementById('content');

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
    checkClickCoords() {
        let row = ""
        let column = ""
        this.gameboard.addEventListener('click', (e) => {
            row = e.target;
            column = row.parentNode;
            row = parseInt(row.getAttribute("row"));
            column = parseInt(column.getAttribute("column"));
            const coords = [column, row];
            console.log(coords, typeof(coords));
            return coords
        })
    }
}

export { Overlay }
