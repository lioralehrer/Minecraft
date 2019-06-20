let tools = [new Axe(), new Pickaxe(), new Shovel()];
let currentTool = null;
let keeper = null;
let inventory = [];
let builder = $("#keeper");
// let classList = builder.attr("class").split(' ');



function pickTool() {
    for (let i = 0; i < tools.length; i++) {
        $(`#${tools[i].type}`).click(function () {
            currentTool = tools[i];
        });
    }
}
pickTool();

$("document").ready(function () {
    $(".tile").click(function (e) { mine(e) });
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



// $(`.tile`).click(function () { minechecker(e) });
// //  check if tool can mine. if true:
// //  1) keep tile in storage()
// // 2) mine the tile()

// $(".tile").click(function(){console.log("tile clicked!")});


// function minechecker(e) {
//     // if current tool mutch his 'workOn' property
//     if (this.currentTool.workesOn[0] === e.target.data || this.currentTool.workesOn[1] === e.target.data) {
//         //  $('div').attr('class').split(' ').pop();
//         keeper = e.target.attr('class').split(' ').pop();
//         console.log(keeper);
//         e.target.siblings().removeClass(keeper);
//     }
// };
// // change the keeper class:
// $("#keeper").addClass("keeper");
