let tools = [new Axe(), new Pickaxe(), new Shovel(), new Builder()];
let currentTool = null;
let keeper = null;
let matter;
let inventory = [];
let builder = $("#builder");
let lastMatter = null;



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
                buildTile(e);
            }
        }
    };
    function minecraft(e) {
        let matter = e.target.className.split(' ').pop();
        let tileIndexY = e.target.id.split("y").pop();
        let tileIndexX = e.target.id.split("x")[1].split("y").shift();
       
        if (canMine(tileIndexX, tileIndexY)) {
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
                $("#inventory-list").text(inventory.join(" "));
                lastMatter = inventory[inventory.length - 1];
                builder.removeClass();
                builder.addClass(" build-tile  tool " + lastMatter);
            }
        }

    }

    function buildTile(e) {
        let empty = e.target.className.split(' ').pop();
        let tileIndexY = e.target.id.split("y").pop();
        let tileIndexX = e.target.id.split("x")[1].split("y").shift();
   
        if ((empty === "tile") && (canBuild(tileIndexX, tileIndexY))) {
            let stick = inventory.pop();
            $("#inventory-list").text(inventory.join(" "));
            $(e.target).addClass(stick);
            lastMatter = inventory[inventory.length - 1];
            builder.removeClass();
            builder.addClass(" build-tile  tool " + lastMatter);
        }

    };


});

