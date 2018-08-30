Object.defineProperty(exports,"__esModule",{value:true});exports.MenuTrigger=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/MenuTrigger.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _logger=require('./logger.js');
var _helpers=require('./helpers');
var _MenuProvider=require('./MenuProvider');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

MenuTrigger=exports.MenuTrigger=function(_Component){_inherits(MenuTrigger,_Component);function MenuTrigger(){_classCallCheck(this,MenuTrigger);return _possibleConstructorReturn(this,(MenuTrigger.__proto__||Object.getPrototypeOf(MenuTrigger)).apply(this,arguments));}_createClass(MenuTrigger,[{key:'_onPress',value:function _onPress()

{
(0,_logger.debug)('trigger onPress');
this.props.onPress&&this.props.onPress();
this.props.ctx.menuActions.openMenu(this.props.menuName);
}},{key:'render',value:function render()

{var _this2=this;var _props=
this.props,disabled=_props.disabled,onRef=_props.onRef,text=_props.text,children=_props.children,style=_props.style,customStyles=_props.customStyles,menuName=_props.menuName,other=_objectWithoutProperties(_props,['disabled','onRef','text','children','style','customStyles','menuName']);
var onPress=function onPress(){return!disabled&&_this2._onPress();};var _makeTouchable=
(0,_helpers.makeTouchable)(customStyles.TriggerTouchableComponent),Touchable=_makeTouchable.Touchable,defaultTouchableProps=_makeTouchable.defaultTouchableProps;
return(
_react2.default.createElement(_reactNative.View,{ref:onRef,collapsable:false,style:customStyles.triggerOuterWrapper,__source:{fileName:_jsxFileName,lineNumber:21}},
_react2.default.createElement(Touchable,_extends({
onPress:onPress},
defaultTouchableProps,
customStyles.triggerTouchable,{__source:{fileName:_jsxFileName,lineNumber:22}}),

_react2.default.createElement(_reactNative.View,_extends({},other,{style:[customStyles.triggerWrapper,style],__source:{fileName:_jsxFileName,lineNumber:27}}),
text?_react2.default.createElement(_reactNative.Text,{style:customStyles.triggerText,__source:{fileName:_jsxFileName,lineNumber:28}},text):children))));




}}]);return MenuTrigger;}(_react.Component);



MenuTrigger.propTypes={
disabled:_propTypes2.default.bool,
text:_propTypes2.default.string,
onPress:_propTypes2.default.func,
customStyles:_propTypes2.default.object};


MenuTrigger.defaultProps={
disabled:false,
customStyles:{}};exports.default=


(0,_MenuProvider.withCtx)(MenuTrigger);