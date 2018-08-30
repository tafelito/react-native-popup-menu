Object.defineProperty(exports,"__esModule",{value:true});exports.computePosition=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src/renderers/SlideInMenu.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactNative=require("react-native");
var _constants=require("../constants");
var _logger=require("../logger");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var computePosition=exports.computePosition=function computePosition(layouts){
(0,_logger.debug)("computePosition",layouts);var
windowLayout=layouts.windowLayout,optionsLayout=layouts.optionsLayout;var
wHeight=windowLayout.height;var
oHeight=optionsLayout.height;
var top=wHeight-oHeight;
var left=0,
right=0;
var position={top:top,left:left,right:right};


return position;
};var

SlideInMenu=function(_React$Component){_inherits(SlideInMenu,_React$Component);
function SlideInMenu(props){_classCallCheck(this,SlideInMenu);var _this=_possibleConstructorReturn(this,(SlideInMenu.__proto__||Object.getPrototypeOf(SlideInMenu)).call(this,
props));
_this.state={
slide:new _reactNative.Animated.Value(0)};return _this;

}_createClass(SlideInMenu,[{key:"componentDidMount",value:function componentDidMount()

{
_reactNative.Animated.timing(this.state.slide,{
duration:_constants.OPEN_ANIM_DURATION,
toValue:1,
easing:_reactNative.Easing.out(_reactNative.Easing.cubic),
useNativeDriver:true}).
start();
}},{key:"close",value:function close()

{var _this2=this;
return new Promise(function(resolve){
_reactNative.Animated.timing(_this2.state.slide,{
duration:_constants.CLOSE_ANIM_DURATION,
toValue:0,
easing:_reactNative.Easing.in(_reactNative.Easing.cubic),
useNativeDriver:true}).
start(resolve);
});
}},{key:"render",value:function render()

{var _props=
this.props,style=_props.style,children=_props.children,layouts=_props.layouts,other=_objectWithoutProperties(_props,["style","children","layouts"]);var
oHeight=layouts.optionsLayout.height;
var animation={
transform:[
{
translateY:this.state.slide.interpolate({
inputRange:[0,1],
outputRange:[oHeight,0]})}]};




var position=computePosition(layouts);
return(
_react2.default.createElement(_reactNative.Animated.View,_extends({
style:[styles.options,style,animation,position]},
other,{__source:{fileName:_jsxFileName,lineNumber:63}}),

children));


}}]);return SlideInMenu;}(_react2.default.Component);exports.default=SlideInMenu;


var styles=_reactNative.StyleSheet.create({
options:{
position:"absolute",
backgroundColor:"white",


shadowColor:"black",
shadowOpacity:0.3,
shadowOffset:{width:3,height:3},
shadowRadius:4,


elevation:5}});