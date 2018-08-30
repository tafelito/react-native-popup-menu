Object.defineProperty(exports,"__esModule",{value:true});exports.MenuOption=undefined;var _jsxFileName='src/MenuOption.js';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _logger=require('./logger');
var _helpers=require('./helpers');
var _MenuProvider=require('./MenuProvider');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var


MenuOption=exports.MenuOption=function(_Component){_inherits(MenuOption,_Component);function MenuOption(){_classCallCheck(this,MenuOption);return _possibleConstructorReturn(this,(MenuOption.__proto__||Object.getPrototypeOf(MenuOption)).apply(this,arguments));}_createClass(MenuOption,[{key:'_onSelect',value:function _onSelect()

{var
value=this.props.value;
var onSelect=this.props.onSelect||this._getMenusOnSelect();
var shouldClose=onSelect(value)!==false;
(0,_logger.debug)('select option',value,shouldClose);
if(shouldClose){
this.props.ctx.menuActions.closeMenu();
}
}},{key:'_getMenusOnSelect',value:function _getMenusOnSelect()

{
var menu=this.props.ctx.menuActions._getOpenedMenu();
return menu.instance.props.onSelect;
}},{key:'_getCustomStyles',value:function _getCustomStyles()

{

var menu=this.props.ctx.menuActions._getOpenedMenu()||{};var
optionsCustomStyles=menu.optionsCustomStyles;
return _extends({},
optionsCustomStyles,
this.props.customStyles);

}},{key:'render',value:function render()

{var _this2=this;var _props=
this.props,text=_props.text,disabled=_props.disabled,disableTouchable=_props.disableTouchable,children=_props.children,style=_props.style;
var customStyles=this._getCustomStyles();
if(text&&_react2.default.Children.count(children)>0){
console.warn("MenuOption: Please don't use text property together with explicit children. Children are ignored.");
}
if(disabled){
var disabledStyles=[defaultStyles.optionTextDisabled,customStyles.optionText];
return(
_react2.default.createElement(_reactNative.View,{style:[defaultStyles.option,customStyles.optionWrapper,style],__source:{fileName:_jsxFileName,lineNumber:45}},
text?_react2.default.createElement(_reactNative.Text,{style:disabledStyles,__source:{fileName:_jsxFileName,lineNumber:46}},text):children));


}
var rendered=
_react2.default.createElement(_reactNative.View,{style:[defaultStyles.option,customStyles.optionWrapper,style],__source:{fileName:_jsxFileName,lineNumber:51}},
text?_react2.default.createElement(_reactNative.Text,{style:customStyles.optionText,__source:{fileName:_jsxFileName,lineNumber:52}},text):children);


if(disableTouchable){
return rendered;
}else
{var _makeTouchable=
(0,_helpers.makeTouchable)(customStyles.OptionTouchableComponent),Touchable=_makeTouchable.Touchable,defaultTouchableProps=_makeTouchable.defaultTouchableProps;
return(
_react2.default.createElement(Touchable,_extends({
onPress:function onPress(){return _this2._onSelect();}},
defaultTouchableProps,
customStyles.optionTouchable,{__source:{fileName:_jsxFileName,lineNumber:61}}),

rendered));


}
}}]);return MenuOption;}(_react.Component);


MenuOption.propTypes={
disabled:_propTypes2.default.bool,
disableTouchable:_propTypes2.default.bool,
onSelect:_propTypes2.default.func,
text:_propTypes2.default.string,
value:_propTypes2.default.any,
customStyles:_propTypes2.default.object};


MenuOption.defaultProps={
disabled:false,
disableTouchable:false,
customStyles:{}};


var defaultStyles=_reactNative.StyleSheet.create({
option:{
padding:5,
backgroundColor:'transparent'},

optionTextDisabled:{
color:'#ccc'}});exports.default=



(0,_MenuProvider.withCtx)(MenuOption);