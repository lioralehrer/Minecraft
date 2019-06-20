let tools = [new Axe(), new Pickaxe(), new Shovel()];
let currentTool = null;
let keeper = null;
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
            } else {
                if (currentTool.worksOn[1] === matter) {
                    keeper = matter;
                }
            }
            $(e.target).removeClass(keeper);
        }
        $("#keeper").addClass(keeper);
    };
});
