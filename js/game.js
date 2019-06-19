let tools = [new Axe(),new Pickaxe(),new Shovel() ];
let currentTool = null;

function pickTool(){
 for (let i=0; i<tools.length;i++){
     $(`#${tools[i].type}`).click( function(){
        // change current tool
        currentTool = tools[i].type;
        console.log(currentTool);
     });
 }
}
pickTool();