function insert() {
    let world = $(".world");
    for (let i = 0; i < 900; i++) {
        let tile = $("<div>");
        tile.addClass("tile");
        tile.attr("id",i);
        tile.css("background-image", 'url("/images/cell/gold.png")');
        world.append(tile);

    }
}
insert();