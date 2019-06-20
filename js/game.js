let tools = [new Axe(), new Pickaxe(), new Shovel()];
let currentTool = null;
let keeper = null;
function pickTool() {
    for (let i = 0; i < tools.length; i++) {
        $(`#${tools[i].type}`).click(function () {
            // change current tool
            currentTool = tools[i];
            console.log(currentTool);
        });
    }
}
pickTool();


$(document).ready(function () {
    $(".tile").click(function (e) {
        console.log(`pressed tile- it's classes are: ${e.target.className}`);
        minechecker(e);
    });
});

// $(`.tile`).click(function () { minechecker(e) });
//  check if tool can mine. if true:
//  1) keep tile in storage()
// 2) mine the tile()

function minechecker(e) {
    // if current tool mutch his 'workOn' property
    if (this.currentTool.workesOn[0] === e.target.className || this.currentTool.workesOn[1] === e.target.data) {
        //  $('div').attr('class').split(' ').pop();
        keeper = e.target.attr('class').split(' ').pop();
        console.log(keeper);
        e.target.siblings().removeClass(keeper);
    }
};
// change the keeper class:
$("#keeper").addClass("keeper");
