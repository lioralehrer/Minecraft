function insert() {
    let world = $(".world");
    for (let i = 0; i < 1000; i++) {
        let tile = $("<div>");
        tile.addClass("tile");
        tile.attr("id",i);
        tile.css("background-image", 'url("images/cell/grass.png")');
        world.append(tile);

    }
}
insert();