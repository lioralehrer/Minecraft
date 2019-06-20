let tools = [new Axe(), new Pickaxe(), new Shovel()];
let currentTool = null;
let keeper = null;
function pickTool() {
    for (let i = 0; i < tools.length; i++) {
        $(`#${tools[i].type}`).click(function () {
            currentTool = tools[i];
            console.log(currentTool);

        });
    }
}
pickTool();
$("document").ready(function () {
    $(".tile").click(function (e) { minechecker(e) });

    //  check if tool can mine. if true:
    //  1) keep tile in storage()
    // 2) mine the tile()
    function minechecker(e) {
        let matter = e.target.className.split(' ').pop();
        console.log(matter);
        console.log(currentTool.worksOn);
        if (currentTool !== null) {
            if (currentTool.worksOn === matter){
                keeper = matter;
            
            // } else{
            //     if(currentTool.worksOn[1] === matterClass) {
            //         keeper = matter;            
            //     }
            }
            
            $(e.target).removeClass(keeper);

    }

};
console.log(keeper);
// change the keeper class:
$("#keeper").addClass(keeper);
});
