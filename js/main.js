// const HEIGHT = 30;
// const WIDTH = 30;

const WORLD_WIDTH = "600px"
const TILE_SIZE = "20px"
const HEIGHT = 30;
const WIDTH = 30;

$(".world").css("width", WORLD_WIDTH);
$(".tile").css("width", WORLD_WIDTH);

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

function createSquare(x, y, width, height, matter) {
    // console.log(`createSquare(${x}, ${y}, ${width}, ${height}, ${matter})`);
    for (let i = y; i < y + height; i++) {
        for (let j = x; j < x + width; j++) {
            $(`#x${j}y${i}`)
                .removeClass()
                .addClass(`tile ${matter}`);
        }
    }
}

function createTriangle(startX, startY, crossHeight, direction, matter) {
    let sign = (direction.toLowerCase() === "right") ? 1 : -1;
    for (let i = 0; i < crossHeight; i++) {
        // console.log(`createSquare(${startX + i}, ${startY + i}, 1, ${startY + i}, ${matter})`);
        createSquare(startX + (sign * i), startY - i, 1, i + 1, matter);
    }
}

function canBuild(x, y) {
    let x1 = x - 1;
    let y1 = y - 1;
    for (let i = y1; i < y1 + 3; i++) {
        for (let j = x1; j < x1 + 3; j++) {
            let neighbourTile = $(`#x${j}y${i}`);
            console.log(`neighbourTile = ${neighbourTile}`);
            console.log(`neighbourTile.className = ${neighbourTile.className}`);
            console.log(`neighbourTile.attr("class") = ${neighbourTile.attr("class")}`);
            if ((neighbourTile.attr("class") !== "tile") && ((i !== y) && (j !== x))) {
                return true;
            }
        }
    }
    return false;
}


createEmptyTiles();
drawIndexes();

//earth:
createSquare(0, 20, 30, 10, "dirt");

//rocks and gold inside the ground:
createTriangle(11, 22, 3, "left", "rock");
createTriangle(19, 26, 4, "left", "rock");
createSquare(11, 23, 1, 3, "rock");
createSquare(14, 20, 2, 2, "rock");
createSquare(9, 25, 2, 1, "gold");
createSquare(15, 26, 2, 2, "gold");
createSquare(20, 26, 1, 1, "gold");
createSquare(14, 27, 1, 1, "dirt");
createSquare(16, 26, 2, 2, "dirt");

//mountain:
createTriangle(17, 18, 12, "right", "dirt");
createTriangle(22, 13, 5, "right", "grass");
createTriangle(25, 10, 4, "right", "grass");
createTriangle(17, 18, 5, "right", "grass");
createTriangle(18, 18, 4, "right", "dirt");
createSquare(29, 7, 1, 12, "dirt");
createSquare(29, 7, 1, 2, "grass");
createSquare(0, 19, 30, 1, "grass");
createSquare(17, 19, 13, 1, "dirt");
createTriangle(18, 17, 4, "right", "grass");
createSquare(20, 17, 2, 1, "dirt");

//tree:
createSquare(0, 11, 9, 4, "leaf");
createSquare(2, 15, 1, 1, "leaf");
createSquare(6, 15, 2, 1, "leaf");
createSquare(5, 15, 1, 2, "leaf");
createTriangle(7, 10, 5, "left", "leaf");
createTriangle(3, 10, 3, "left", "leaf");
createSquare(3, 15, 2, 4, "wood");

//cloud:
createTriangle(7, 4, 3, "right", "cloud");
createSquare(10, 2, 2, 3, "cloud");
createSquare(10, 3, 6, 3, "cloud");
createSquare(16, 4, 1, 1, "cloud");