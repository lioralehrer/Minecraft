let tools = [new Axe(), new Pickaxe(), new Shovel()];
let currentTool = null;
let keeper = null;
let inventory = [];
let builder = $("#keeper");
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
        let matter = e.target.className.split(' ').pop();
        if (currentTool !== null) {
            if (currentTool.worksOn[0] === matter) {
                keeper = matter;
                $(e.target).removeClass(matter);
            } else {
                if (currentTool.worksOn[1] === matter) {
                    keeper = matter;
                    $(e.target).removeClass(matter);
                }
            }
        }

        if (keeper !== null && keeper === matter && (currentTool.worksOn[0] === matter || currentTool.worksOn[1] === matter)) {
            inventory.push(keeper);
            console.log(inventory);
            let lastMatter = inventory[inventory.length - 1];
            console.log("lastMatter is " + lastMatter);
            builder.removeClass();
            builder.addClass(" build-tile  tool "+lastMatter);
        }
             
    };


});

