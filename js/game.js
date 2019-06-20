let tools = [new Axe(), new Pickaxe(), new Shovel(), new Builder()];
let currentTool = null;
let keeper = null;
let matter;
let inventory = [];
let builder = $("#builder");
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

    $(".tile").click(work);
    function work(e) {
        if (currentTool !== null) {
            if (currentTool.type !== "builder") {
                minecraft(e);
            }
            else {
                // console.log("inside work>else buildTile");
                buildTile(e);
            }
        }
    };
    function minecraft(e) {
        let matter = e.target.className.split(' ').pop();
        if (currentTool.worksOn[0] === matter) {
            keeper = matter;
            $(e.target).removeClass(matter);
        } else {
            if (currentTool.worksOn[1] === matter) {
                keeper = matter;
                $(e.target).removeClass(matter);
            }
        }
        if (keeper !== null && keeper === matter && (currentTool.worksOn[0] === matter || currentTool.worksOn[1] === matter)) {
            inventory.push(keeper);
            console.log(inventory);
            lastMatter = inventory[inventory.length - 1];
            console.log("lastMatter is " + lastMatter);
            builder.removeClass();
            builder.addClass(" build-tile  tool " + lastMatter);
        }

    }
    function buildTile(e) {
        console.log("inside work>else buildTile");
        let empty = e.target.className.split(' ').pop();
        if (empty === "tile") {
            let stick= inventory.pop();
            $(e.target).addClass(stick);
            // $(e.target).addClass(inventory.pop());
            // $(e.target).addClass(lastMatter);
            // inventory.pop();
            lastMatter = inventory[inventory.length - 1];
            builder.removeClass();
            builder.addClass(" build-tile  tool " + lastMatter);
        }

    }
});


