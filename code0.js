gdjs.Splash_32ScreenCode = {};
gdjs.Splash_32ScreenCode.GDScreenObjects1= [];
gdjs.Splash_32ScreenCode.GDScreenObjects2= [];

gdjs.Splash_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Splash_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Splash_32ScreenCode.condition1IsTrue_0 = {val:false};


gdjs.Splash_32ScreenCode.eventsList0 = function(runtimeScene) {

{


gdjs.Splash_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Splash_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Splash_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


};

gdjs.Splash_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Splash_32ScreenCode.GDScreenObjects1.length = 0;
gdjs.Splash_32ScreenCode.GDScreenObjects2.length = 0;

gdjs.Splash_32ScreenCode.eventsList0(runtimeScene);
return;

}

gdjs['Splash_32ScreenCode'] = gdjs.Splash_32ScreenCode;
