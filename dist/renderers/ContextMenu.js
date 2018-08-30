Object.defineProperty(exports,"__esModule",{value:true});exports.styles=exports.computePosition=exports.fitPositionIntoSafeArea=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/renderers/ContextMenu.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _constants=require('../constants');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}

var axisPosition=function axisPosition(oDim,wDim,tPos,tDim){

if(oDim>wDim){
return 0;
}

if(tPos+oDim<=wDim){
return tPos;
}

if(tPos+tDim-oDim>=0){
return tPos+tDim-oDim;
}

var pos=Math.round(tPos+tDim/2-oDim/2);

if(pos<0){
return 0;
}

if(pos+oDim>wDim){
return wDim-oDim;
}

return pos;
};

function fit(pos,len,minPos,maxPos){
if(pos===undefined){
return undefined;
}
if(pos+len>maxPos){
pos=maxPos-len;
}
if(pos<minPos){
pos=minPos;
}
return pos;
}

var fitPositionIntoSafeArea=exports.fitPositionIntoSafeArea=function fitPositionIntoSafeArea(position,layouts){var
windowLayout=layouts.windowLayout,safeAreaLayout=layouts.safeAreaLayout,optionsLayout=layouts.optionsLayout;
if(!safeAreaLayout){
return position;
}var
saX=safeAreaLayout.x,saY=safeAreaLayout.y,saHeight=safeAreaLayout.height,saWidth=safeAreaLayout.width;var
oHeight=optionsLayout.height,oWidth=optionsLayout.width;var
wWidth=windowLayout.width;var
top=position.top,left=position.left,right=position.right;
top=fit(top,oHeight,saY,saY+saHeight);
left=fit(left,oWidth,saX,saX+saWidth);
right=fit(right,oWidth,wWidth-saX-saWidth,saX);
return{top:top,left:left,right:right};
};

var computePosition=exports.computePosition=function computePosition(layouts,isRTL){var
windowLayout=layouts.windowLayout,triggerLayout=layouts.triggerLayout,optionsLayout=layouts.optionsLayout;var
wX=windowLayout.x,wY=windowLayout.y,wWidth=windowLayout.width,wHeight=windowLayout.height;var
tX=triggerLayout.x,tY=triggerLayout.y,tHeight=triggerLayout.height,tWidth=triggerLayout.width;var
oHeight=optionsLayout.height,oWidth=optionsLayout.width;
var top=axisPosition(oHeight,wHeight,tY-wY,tHeight);
var left=axisPosition(oWidth,wWidth,tX-wX,tWidth);
var start=isRTL?'right':'left';
var position=_defineProperty({top:top},start,left);
return fitPositionIntoSafeArea(position,layouts);
};var

ContextMenu=function(_React$Component){_inherits(ContextMenu,_React$Component);

function ContextMenu(props){_classCallCheck(this,ContextMenu);var _this=_possibleConstructorReturn(this,(ContextMenu.__proto__||Object.getPrototypeOf(ContextMenu)).call(this,
props));
_this.state={
scaleAnim:new _reactNative.Animated.Value(0.1)};return _this;

}_createClass(ContextMenu,[{key:'componentDidMount',value:function componentDidMount()

{
_reactNative.Animated.timing(this.state.scaleAnim,{
duration:_constants.OPEN_ANIM_DURATION,
toValue:1,
easing:_reactNative.Easing.out(_reactNative.Easing.cubic),
useNativeDriver:true}).
start();
}},{key:'close',value:function close()

{var _this2=this;
return new Promise(function(resolve){
_reactNative.Animated.timing(_this2.state.scaleAnim,{
duration:_constants.CLOSE_ANIM_DURATION,
toValue:0,
easing:_reactNative.Easing.in(_reactNative.Easing.cubic),
useNativeDriver:true}).
start(resolve);
});
}},{key:'render',value:function render()

{var _props=
this.props,style=_props.style,children=_props.children,layouts=_props.layouts,other=_objectWithoutProperties(_props,['style','children','layouts']);
var animation={
transform:[{scale:this.state.scaleAnim}],
opacity:this.state.scaleAnim};

var position=computePosition(layouts,_reactNative.I18nManager.isRTL);
return(
_react2.default.createElement(_reactNative.Animated.View,_extends({},other,{style:[styles.options,style,animation,position],__source:{fileName:_jsxFileName,lineNumber:109}}),
children));


}}]);return ContextMenu;}(_react2.default.Component);exports.default=ContextMenu;




ContextMenu.computePosition=computePosition;
ContextMenu.fitPositionIntoSafeArea=fitPositionIntoSafeArea;

var styles=exports.styles=_reactNative.StyleSheet.create({
options:{
position:'absolute',
borderRadius:2,
backgroundColor:'white',
width:_reactNative.PixelRatio.roundToNearestPixel(200),


shadowColor:'black',
shadowOpacity:0.3,
shadowOffset:{width:3,height:3},
shadowRadius:4,


elevation:5}});