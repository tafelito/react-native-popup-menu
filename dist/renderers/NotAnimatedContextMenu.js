Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/renderers/NotAnimatedContextMenu.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');

var _ContextMenu=require('./ContextMenu');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var




NotAnimatedContextMenu=function(_React$Component){_inherits(NotAnimatedContextMenu,_React$Component);function NotAnimatedContextMenu(){_classCallCheck(this,NotAnimatedContextMenu);return _possibleConstructorReturn(this,(NotAnimatedContextMenu.__proto__||Object.getPrototypeOf(NotAnimatedContextMenu)).apply(this,arguments));}_createClass(NotAnimatedContextMenu,[{key:'render',value:function render()

{var _props=
this.props,style=_props.style,children=_props.children,layouts=_props.layouts,other=_objectWithoutProperties(_props,['style','children','layouts']);
var position=(0,_ContextMenu.computePosition)(layouts);
return(
_react2.default.createElement(_reactNative.View,_extends({},other,{style:[_ContextMenu.styles.options,style,position],__source:{fileName:_jsxFileName,lineNumber:15}}),
children));


}}]);return NotAnimatedContextMenu;}(_react2.default.Component);exports.default=NotAnimatedContextMenu;