gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1= [];
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2= [];
gdjs.Untitled_32sceneCode.GDBrick3Objects1= [];
gdjs.Untitled_32sceneCode.GDBrick3Objects2= [];
gdjs.Untitled_32sceneCode.GDBrick4Objects1= [];
gdjs.Untitled_32sceneCode.GDBrick4Objects2= [];
gdjs.Untitled_32sceneCode.GDBrick1Objects1= [];
gdjs.Untitled_32sceneCode.GDBrick1Objects2= [];
gdjs.Untitled_32sceneCode.GDDirt2Objects1= [];
gdjs.Untitled_32sceneCode.GDDirt2Objects2= [];
gdjs.Untitled_32sceneCode.GDDirt3Objects1= [];
gdjs.Untitled_32sceneCode.GDDirt3Objects2= [];
gdjs.Untitled_32sceneCode.GDDirt1Objects1= [];
gdjs.Untitled_32sceneCode.GDDirt1Objects2= [];
gdjs.Untitled_32sceneCode.GDDirt4Objects1= [];
gdjs.Untitled_32sceneCode.GDDirt4Objects2= [];
gdjs.Untitled_32sceneCode.GDGrass1Objects1= [];
gdjs.Untitled_32sceneCode.GDGrass1Objects2= [];
gdjs.Untitled_32sceneCode.GDBrick2Objects1= [];
gdjs.Untitled_32sceneCode.GDBrick2Objects2= [];
gdjs.Untitled_32sceneCode.GDGrass2Objects1= [];
gdjs.Untitled_32sceneCode.GDGrass2Objects2= [];
gdjs.Untitled_32sceneCode.GDGrass4Objects1= [];
gdjs.Untitled_32sceneCode.GDGrass4Objects2= [];
gdjs.Untitled_32sceneCode.GDGrass5Objects1= [];
gdjs.Untitled_32sceneCode.GDGrass5Objects2= [];
gdjs.Untitled_32sceneCode.GDGrass6Objects1= [];
gdjs.Untitled_32sceneCode.GDGrass6Objects2= [];
gdjs.Untitled_32sceneCode.GDGrass7Objects1= [];
gdjs.Untitled_32sceneCode.GDGrass7Objects2= [];
gdjs.Untitled_32sceneCode.GDGrass3Objects1= [];
gdjs.Untitled_32sceneCode.GDGrass3Objects2= [];
gdjs.Untitled_32sceneCode.GDGround1Objects1= [];
gdjs.Untitled_32sceneCode.GDGround1Objects2= [];
gdjs.Untitled_32sceneCode.GDGrass8Objects1= [];
gdjs.Untitled_32sceneCode.GDGrass8Objects2= [];
gdjs.Untitled_32sceneCode.GDGround4Objects1= [];
gdjs.Untitled_32sceneCode.GDGround4Objects2= [];
gdjs.Untitled_32sceneCode.GDGround3Objects1= [];
gdjs.Untitled_32sceneCode.GDGround3Objects2= [];
gdjs.Untitled_32sceneCode.GDNew3DModelObjects1= [];
gdjs.Untitled_32sceneCode.GDNew3DModelObjects2= [];
gdjs.Untitled_32sceneCode.GDTransparentLightJoystickObjects1= [];
gdjs.Untitled_32sceneCode.GDTransparentLightJoystickObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects2= [];
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects1= [];
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects2= [];
gdjs.Untitled_32sceneCode.GDNewLightObjects1= [];
gdjs.Untitled_32sceneCode.GDNewLightObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.adMob.setupBanner("ca-app-pub-3429854448962877/5490057410", "", false);
}{gdjs.adMob.setTestMode(true);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithGoldFrame"), gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects1[k] = gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("New3DModel"), gdjs.Untitled_32sceneCode.GDNew3DModelObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDNew3DModelObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBrick3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBrick3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBrick4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBrick4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBrick1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBrick1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDDirt2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDDirt2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDDirt3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDDirt3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDDirt1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDDirt1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDDirt4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDDirt4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrass1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrass1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBrick2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBrick2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrass2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrass2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrass4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrass4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrass5Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrass5Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrass6Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrass6Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrass7Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrass7Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrass3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrass3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGround1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGround1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrass8Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrass8Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGround4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGround4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGround3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGround3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNew3DModelObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTransparentLightJoystickObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTransparentLightJoystickObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewLightObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewLightObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNew3DBoxObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBrick3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBrick3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBrick4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBrick4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBrick1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBrick1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDDirt2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDDirt2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDDirt3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDDirt3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDDirt1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDDirt1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDDirt4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDDirt4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrass1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrass1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDBrick2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDBrick2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrass2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrass2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrass4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrass4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrass5Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrass5Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrass6Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrass6Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrass7Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrass7Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrass3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrass3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGround1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGround1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGrass8Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGrass8Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGround4Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGround4Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDGround3Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDGround3Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNew3DModelObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNew3DModelObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTransparentLightJoystickObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTransparentLightJoystickObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRedButtonWithGoldFrameObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewLightObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewLightObjects2.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
