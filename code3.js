gdjs.EndgameLostCode = {};
gdjs.EndgameLostCode.GDScreenObjects1= [];
gdjs.EndgameLostCode.GDScreenObjects2= [];

gdjs.EndgameLostCode.conditionTrue_0 = {val:false};
gdjs.EndgameLostCode.condition0IsTrue_0 = {val:false};
gdjs.EndgameLostCode.condition1IsTrue_0 = {val:false};


gdjs.EndgameLostCode.eventsList0 = function(runtimeScene) {

{


gdjs.EndgameLostCode.condition0IsTrue_0.val = false;
{
gdjs.EndgameLostCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.EndgameLostCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Splash Screen", false);
}}

}


};

gdjs.EndgameLostCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndgameLostCode.GDScreenObjects1.length = 0;
gdjs.EndgameLostCode.GDScreenObjects2.length = 0;

gdjs.EndgameLostCode.eventsList0(runtimeScene);
return;

}

gdjs['EndgameLostCode'] = gdjs.EndgameLostCode;
