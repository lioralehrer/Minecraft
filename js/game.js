let tools = [new Axe(), new Pickaxe(), new Shovel(), new BuildTile()];
let currentTool = null;
let keeper = null;
let inventory = [];
let builder = $("#buildTile");
let matter= null;
// let classList = builder.attr("class").split(' ');



$("document").ready(function () {

    function pickTool() {
        for (let i = 0; i < tools.length; i++) {
            $(`#${tools[i].type}`).click(function () {
                currentTool = tools[i];
            });
        }
    }
    pickTool();

    $(".tile").click(mine);

    function mine(e) {
        matter = e.target.className.split(' ').pop();
        if ((currentTool !== null) && (currentTool.type !== BuildTile))   {
           
            if (currentTool.worksOn[0] === matter ) {
                keeper = matter;
                $(e.target).removeClass(matter);
            } else {
                if (currentTool.worksOn[1] === matter) {
                    keeper = matter;
                    $(e.target).removeClass(matter);
                }
            }
        }

        if (keeper !== null && keeper === matter
            && (currentTool.worksOn[0] === matter || currentTool.worksOn[1] === matter
                && currentTool.type !== BuildTile)) {
            inventory.push(keeper);
            console.log(inventory);
            // let lastMatter = inventory[inventory.length - 1];
            // console.log("lastMatter is " + lastMatter);
            builder.removeClass();
            builder.addClass(" buildTile  tool " + keeper);
        }

        if (currentTool.type === BuildTile) {
            if (currentTool.worksOn[0] === matter) {
                $(e.target).addClass(keeper);
            }
        }

    };




});


