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
    console.log(`createSquare(${x}, ${y}, ${width}, ${height}, ${matter})`);
    for (let i = y; i < y + height; i++) {
        for (let j = x; j < x + width; j++) {
            $(`#x${j}y${i}`)
                .removeClass()
                .addClass(`tile ${matter}`);
        }
    }
}

createSquare(0, 20, 30, 10, "dirt"); //green earth
// createSquare(3, 15, 3, 4, "wood");



// createSquare(17, 18, 1, 1, "rock");
// createSquare(18, 17, 1, 2, "rock");
// createSquare(19, 16, 1, 3, "rock");
// createSquare(20, 15, 1, 4, "rock");
// createSquare(21, 14, 1, 5, "rock");
// createSquare(22, 13, 1, 6, "rock");
// createSquare(23, 12, 1, 7, "rock");
// createSquare(24, 11, 1, 8, "rock");
// createSquare(25, 10, 1, 9, "rock");

// let crossHeight = 12; 
// let startX = 17;
// let startY = 18;

// let crossWidth = 12;
// let endX = 28;
// let endY = 7;
// for(let i = 0; i < crossHeight; i++) {
//     console.log(`createSquare(${startX + i}, ${startY + i}, 1, ${i}, "rock")`);
//     createSquare(startX + i, startY + i, 1, i, "rock");
// }

// function createTriangle(startX, startY, crossHeight, matter) {
// for(let i = 0; i < crossHeight; i++) {
//     console.log(`creating dirt: createSquare(${startX + i}, ${startY + i}, 1, ${startY + i}, "dirt")`);
//     createSquare(startX + i, startY - i, 1,  i + 1, matter);
// }
// }

function createTriangle(startX, startY, crossHeight, direction, matter) {
    let sign = (direction.toLowerCase() === "right") ? 1 : -1;
for(let i = 0; i < crossHeight; i++) {
    console.log(`createSquare(${startX + i}, ${startY + i}, 1, ${startY + i}, ${matter})`);
    createSquare(startX + (sign * i) , startY - i, 1,  i + 1, matter);
}
}

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


//tree:
createSquare(0, 11, 9, 4, "leaf");
createSquare(2, 15, 1, 1, "leaf");
createSquare(6, 15, 2, 1, "leaf");
createTriangle(7, 10, 5, "left", "leaf");
createTriangle(3, 10, 3, "left", "leaf");
createSquare(3, 15, 3, 4, "wood");

//cloud:
createTriangle(7, 4, 3, "right", "cloud");
createSquare(10, 2, 2, 3, "cloud");
createSquare(10, 3, 6, 3, "cloud");
createSquare(16, 4, 1, 1, "cloud");