Object.defineProperty(exports,"__esModule",{value:true});exports.computePosition=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/renderers/MenuOutside.js';var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}

var computePosition=exports.computePosition=function computePosition(_ref){var windowLayout=_ref.windowLayout;return{
top:windowLayout.height,
left:windowLayout.width};};



var MenuOutside=function MenuOutside(props){var
style=props.style,children=props.children,layouts=props.layouts,other=_objectWithoutProperties(props,['style','children','layouts']);
var position=computePosition(layouts);
return(
_react2.default.createElement(_reactNative.View,_extends({},other,{style:[styles.options,style,position],collapsable:false,__source:{fileName:_jsxFileName,lineNumber:14}}),
children));


};

var styles=_reactNative.StyleSheet.create({
options:{
position:'absolute'}});exports.default=



MenuOutside;