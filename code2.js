gdjs.EndgameWonCode = {};
gdjs.EndgameWonCode.GDScreenObjects1= [];
gdjs.EndgameWonCode.GDScreenObjects2= [];

gdjs.EndgameWonCode.conditionTrue_0 = {val:false};
gdjs.EndgameWonCode.condition0IsTrue_0 = {val:false};
gdjs.EndgameWonCode.condition1IsTrue_0 = {val:false};


gdjs.EndgameWonCode.eventsList0 = function(runtimeScene) {

{


gdjs.EndgameWonCode.condition0IsTrue_0.val = false;
{
gdjs.EndgameWonCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.EndgameWonCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Splash Screen", false);
}}

}


};

gdjs.EndgameWonCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndgameWonCode.GDScreenObjects1.length = 0;
gdjs.EndgameWonCode.GDScreenObjects2.length = 0;

gdjs.EndgameWonCode.eventsList0(runtimeScene);
return;

}

gdjs['EndgameWonCode'] = gdjs.EndgameWonCode;
