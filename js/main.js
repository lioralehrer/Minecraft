function createEmptyTiles() {
    let world = $(".world");
    for (let i = 0; i < 1000; i++) {
        let tile = $("<div>");
        tile.addClass("tile");
        tile.attr("id", `m${i}`);
        world.append(tile);

    }
}
createEmptyTiles();

function createEarth() {
    for (let i = 600; i < 1000; i++) {
        $(`#m${i}`).css("background-image", 'url("images/tiles/grass-earth.png")');
        $(`#m${i}`).data("name", "dirt");
    }

}

function createStem() {
    let line = 40;
    let width = 3;
    let height = 5;

    let leap = 0;
    for (let i = 427; i < 427+(height * line); i += line) {
        console.log(i);
        for (let j = 0; j < width; j++) {
            $(`#m${i + j}`).css("background-image", 'url("images/tiles/gold.png")');
        }
    }
}

createEarth();
createStem();
