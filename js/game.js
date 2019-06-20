let tools = [new Axe(), new Pickaxe(), new Shovel(), new Builder()];
let currentTool = null;
let keeper = null;
let build = null;
function pickTool() {
    for (let i = 0; i < tools.length; i++) {
        $(`#${tools[i].type}`).click(function () {
            currentTool = tools[i];
        });
    }
}
pickTool();
$("document").ready(function () {
    $(".tile").click(function (e) { work(e) });
    function work(e) {
        let matter = e.target.className.split(' ').pop();
        if (currentTool !== null) {
            if (currentTool.worksOn[0] === matter) {
                keeper = matter;
            } else {
                if (currentTool.worksOn[1] === matter) {
                    keeper = matter;
                }
            }
            if (currentTool.type === "builder") {
                building(e);
            }

            else {
                build = keeper;
                $(e.target).removeClass(keeper);
                $("#builder").addClass(keeper);
            };

        };
    }
    function building(e) {
        $(e.target).addClass(build);
        $("#builder").removeClass(build);
        build = null;
    }
});
