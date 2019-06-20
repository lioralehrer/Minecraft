const HEIGHT = 30;
const WIDTH = 30;

function createEmptyTiles() {
    let world = $(".world");
    for (let i = 0; i < HEIGHT; i++) {
        let tilesRow = $("<div>");
        tilesRow.addClass("tiles-row");
        tilesRow.attr("id", `row${i}`);
        for (let j = 0; j < WIDTH; j++) {
            let tile = $("<div>");
            tile.addClass("tile");
            tile.attr("id", `x${j}y${i}`);
            tilesRow.append(tile);
        }
        world.append(tilesRow);
    }
}

function drawIndexes() {
    for (let i = 1; i < HEIGHT; i++) {
        let tile = $(`#x0y${i}`);
        tile.text(i);
    }
    for (let j = 0; j < WIDTH; j++) {
        let tile = $(`#x${j}y0`);
        tile.text(j);
    }

}

createEmptyTiles();
drawIndexes();

function createSquare(x, y, width, height, matter) {
    let leap = 0;
    for (let i = y; i < y + height; i++) {
        for (let j = x; j < x + width; j++) {
            $(`#x${j}y${i}`).addClass(matter);
        }
    }
}

createSquare(0, 20, 30, 10, "dirt"); //green earth
createSquare(4, 16, 3, 4, "wood"); //green earth

createSquare(18, 16, 3, 4, "rock");

