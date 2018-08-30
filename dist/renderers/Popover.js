Object.defineProperty(exports,"__esModule",{value:true});exports.styles=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/renderers/Popover.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.
































































































































































computeProperties=computeProperties;var _reactNative=require('react-native');var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _constants=require('../constants.js');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}var popoverPadding=7;var anchorSize=15;var anchorHyp=Math.sqrt(anchorSize*anchorSize+anchorSize*anchorSize);var anchorOffset=(anchorHyp+anchorSize)/2-popoverPadding;function axisNegativeSideProperties(_ref){var oDim=_ref.oDim,tPos=_ref.tPos;return{position:tPos-oDim};}function axisPositiveSideProperties(_ref2){var tPos=_ref2.tPos,tDim=_ref2.tDim;return{position:tPos+tDim-anchorSize};}function centeringProperties(_ref3){var oDim=_ref3.oDim,wDim=_ref3.wDim,tPos=_ref3.tPos,tDim=_ref3.tDim;var center=Math.round(tPos+tDim/2);var leftOffset=oDim/2-center;var rightOffset=center+oDim/2-wDim;return{center:center,leftOffset:leftOffset,rightOffset:rightOffset};}function axisCenteredPositionProperties(options){var oDim=options.oDim,wDim=options.wDim;var _centeringProperties=centeringProperties(options),center=_centeringProperties.center,leftOffset=_centeringProperties.leftOffset,rightOffset=_centeringProperties.rightOffset;if(leftOffset>0||rightOffset>0){if(leftOffset<rightOffset){return{offset:rightOffset,position:wDim-oDim};}if(rightOffset<leftOffset){return{offset:-leftOffset,position:0};}}return{offset:0,position:center-oDim/2};}function getCenteringPrice(options){var _centeringProperties2=centeringProperties(options),leftOffset=_centeringProperties2.leftOffset,rightOffset=_centeringProperties2.rightOffset;return Math.max(0,leftOffset)+Math.max(0,rightOffset);}function getTopPrice(hOptions,vOptions){var centerOffset=getCenteringPrice(vOptions);var sideOffset=Math.max(0,hOptions.oDim-hOptions.tPos);return centerOffset+sideOffset;}function getBottomPrice(hOptions,vOptions){var centerOffset=getCenteringPrice(vOptions);var sideOffset=Math.max(0,hOptions.tPos+hOptions.tDim+hOptions.oDim-hOptions.wDim);return centerOffset+sideOffset;}function getLeftPrice(hOptions,vOptions){var centerOffset=getCenteringPrice(hOptions);var sideOffset=Math.max(0,vOptions.oDim-vOptions.tPos);return centerOffset+sideOffset;}function getRightPrice(hOptions,vOptions){var centerOffset=getCenteringPrice(hOptions);var sideOffset=Math.max(0,vOptions.tPos+vOptions.tDim+vOptions.oDim-vOptions.wDim);return centerOffset+sideOffset;}function getStartPosKey(isRTL){return isRTL?'right':'left';}function topProperties(hOptions,vOptions,isRTL){var centered=axisCenteredPositionProperties(vOptions);var side=axisNegativeSideProperties(hOptions);return{position:_defineProperty({top:side.position},getStartPosKey(isRTL),centered.position),offset:centered.offset,placement:'top'};}function bottomProperties(hOptions,vOptions,isRTL){var centered=axisCenteredPositionProperties(vOptions);var side=axisPositiveSideProperties(hOptions);return{position:_defineProperty({top:side.position},getStartPosKey(isRTL),centered.position),offset:centered.offset,placement:'bottom'};}function rightProperties(hOptions,vOptions,isRTL){var centered=axisCenteredPositionProperties(hOptions);var side=axisPositiveSideProperties(vOptions);return{position:_defineProperty({top:centered.position},getStartPosKey(isRTL),side.position),offset:centered.offset,placement:'right'};}function leftProperties(hOptions,vOptions,isRTL){var centered=axisCenteredPositionProperties(hOptions);var side=axisNegativeSideProperties(vOptions);return{position:_defineProperty({top:centered.position},getStartPosKey(isRTL),side.position),offset:centered.offset,placement:'left'};}var propertiesByPlacement={top:topProperties,bottom:bottomProperties,left:leftProperties,right:rightProperties};function computeProperties(_ref4,

placement,
preferredPlacement,
isRTL)
{var windowLayout=_ref4.windowLayout,triggerLayout=_ref4.triggerLayout,optionsLayout=_ref4.optionsLayout;var
wX=windowLayout.x,wY=windowLayout.y,wWidth=windowLayout.width,wHeight=windowLayout.height;var
tX=triggerLayout.x,tY=triggerLayout.y,tHeight=triggerLayout.height,tWidth=triggerLayout.width;var
oHeight=optionsLayout.height,oWidth=optionsLayout.width;
var hOptions={
oDim:oHeight+popoverPadding*2,
wDim:wHeight,
tPos:tY-wY,
tDim:tHeight};

var vOptions={
oDim:oWidth+popoverPadding*2,
wDim:wWidth,
tPos:tX-wX,
tDim:tWidth};

if(placement!=='auto'&&propertiesByPlacement[placement]){
return propertiesByPlacement[placement](hOptions,vOptions,isRTL);
}

var prices={
top:getTopPrice(hOptions,vOptions),
bottom:getBottomPrice(hOptions,vOptions),
right:getRightPrice(hOptions,vOptions),
left:getLeftPrice(hOptions,vOptions)};

var bestPrice=Object.values(prices).sort(function(a,b){return a-b;})[0];
var bestPlacement=prices[preferredPlacement]===bestPrice?
preferredPlacement:
Object.keys(prices).find(function(pl){return prices[pl]===bestPrice;});

return propertiesByPlacement[bestPlacement](hOptions,vOptions,isRTL);
}var

Popover=function(_React$Component){_inherits(Popover,_React$Component);

function Popover(props){_classCallCheck(this,Popover);var _this=_possibleConstructorReturn(this,(Popover.__proto__||Object.getPrototypeOf(Popover)).call(this,
props));
_this.state={
scaleAnim:new _reactNative.Animated.Value(0.1)};return _this;

}_createClass(Popover,[{key:'componentDidMount',value:function componentDidMount()

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








this.props,style=_props.style,children=_props.children,layouts=_props.layouts,anchorStyle=_props.anchorStyle,preferredPlacement=_props.preferredPlacement,userPlacement=_props.placement,other=_objectWithoutProperties(_props,['style','children','layouts','anchorStyle','preferredPlacement','placement']);
var isRTL=_reactNative.I18nManager.isRTL;
var animation={
transform:[{scale:this.state.scaleAnim}],
opacity:this.state.scaleAnim};var _computeProperties=

computeProperties(
layouts,
userPlacement,
preferredPlacement,
isRTL),position=_computeProperties.position,placement=_computeProperties.placement,offset=_computeProperties.offset;

return(
_react2.default.createElement(_reactNative.Animated.View,{
style:[
styles.animated,
animation,
position,
getContainerStyle({placement:placement,isRTL:isRTL})],

pointerEvents:'box-none',__source:{fileName:_jsxFileName,lineNumber:252}},

_react2.default.createElement(_reactNative.View,{
style:[
styles.anchor,
dynamicAnchorStyle({placement:placement,offset:offset,isRTL:isRTL}),
anchorStyle],__source:{fileName:_jsxFileName,lineNumber:261}}),


_react2.default.createElement(_reactNative.View,_extends({},other,{style:[styles.options,style],__source:{fileName:_jsxFileName,lineNumber:268}}),
children)));



}}]);return Popover;}(_react2.default.Component);exports.default=Popover;



Popover.propTypes={
anchorStyle:_propTypes2.default.oneOfType([
_propTypes2.default.object,
_propTypes2.default.number,
_propTypes2.default.array]),

placement:_propTypes2.default.oneOf(['auto','top','right','bottom','left']),
preferredPlacement:_propTypes2.default.oneOf(['top','right','bottom','left'])};


Popover.defaultProps={
preferredPlacement:'top',
placement:'auto'};


var getContainerStyle=function getContainerStyle(_ref5){var placement=_ref5.placement,isRTL=_ref5.isRTL;return{
left:{
flexDirection:isRTL?'row':'row-reverse'},

right:{
flexDirection:isRTL?'row-reverse':'row'},

top:{
flexDirection:'column-reverse'},

bottom:{
flexDirection:'column'}}[

placement];};

var dynamicAnchorStyle=function dynamicAnchorStyle(_ref6){var _ref7,_ref8;var offset=_ref6.offset,placement=_ref6.placement,isRTL=_ref6.isRTL;
var start=getStartPosKey(isRTL);
switch(placement){
case'right':
return{
top:offset,
transform:[
{translateX:anchorOffset},
{rotate:'45deg'}]};


case'left':
return{
top:offset,
transform:[
{translateX:-anchorOffset},
{rotate:'45deg'}]};


case'top':
return _ref7={},_defineProperty(_ref7,
start,offset),_defineProperty(_ref7,'transform',
[
{translateY:-anchorOffset},
{rotate:'45deg'}]),_ref7;


case'bottom':
return _ref8={},_defineProperty(_ref8,
start,offset),_defineProperty(_ref8,'transform',
[
{translateY:anchorOffset},
{rotate:'45deg'}]),_ref8;}



};

var styles=exports.styles=_reactNative.StyleSheet.create({
animated:{
padding:popoverPadding,
backgroundColor:'transparent',
position:'absolute',
alignItems:'center'},

options:{
borderRadius:2,
minWidth:anchorHyp,
minHeight:anchorHyp,
backgroundColor:'white',


shadowColor:'black',
shadowOpacity:0.3,
shadowOffset:{width:3,height:3},
shadowRadius:4,


elevation:5},

anchor:{
width:anchorSize,
height:anchorSize,
backgroundColor:'white',
elevation:5}});