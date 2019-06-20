let tools = [new Axe(), new Pickaxe(), new Shovel(), new Builder()];
let currentTool = null;
let keeper = null;
// let build = null;
let inventory = [];
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
    }
    
}
    
//     function work(e) {
//         let matter = e.target.className.split(' ').pop();
//         if (currentTool !== null) {
//             if (currentTool.worksOn[0] === matter) {
//                 keeper = matter;
//                 $(e.target).removeClass(matter);
//             } else {
//                 if (currentTool.worksOn[1] === matter) {
//                     keeper = matter;
//                     $(e.target).removeClass(matter);
//                 }
//             }
//             if (currentTool.type === "builder") {
//                 building(e);
//             }

//             else {
//                 build = keeper;
//                 $(e.target).removeClass(keeper);
//                 $("#builder").addClass(keeper);
//             };

//         };
//     }
//     function building(e) {
//         $(e.target).addClass(build);
//         $("#builder").removeClass(build);
//         build = null;
//     }
// }
    //  } 

    //     if (keeper !== null && keeper === matter && currentTool.worksOn[0] === matter) {
    //         inventory.push(keeper);            
    //         console.log(inventory);
    //         let lastMatter = inventory[inventory.length - 1];
    //         console.log("lastMatter is " + lastMatter);

    //         $("#keeper").addClass(lastMatter);
    //     }

    // };
    // });
    
    // $("#keeper").addClass("keeper");
