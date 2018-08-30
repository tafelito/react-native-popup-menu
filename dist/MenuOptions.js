Object.defineProperty(exports,"__esModule",{value:true});exports.MenuOptions=undefined;var _jsxFileName='src/MenuOptions.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _MenuProvider=require('./MenuProvider');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

MenuOptions=exports.MenuOptions=function(_React$Component){_inherits(MenuOptions,_React$Component);function MenuOptions(){_classCallCheck(this,MenuOptions);return _possibleConstructorReturn(this,(MenuOptions.__proto__||Object.getPrototypeOf(MenuOptions)).apply(this,arguments));}_createClass(MenuOptions,[{key:'updateCustomStyles',value:function updateCustomStyles(

_props){var
customStyles=_props.customStyles;
var menu=this.props.ctx.menuActions._getOpenedMenu();

if(!menu)return;
var menuName=menu.instance.getName();
this.props.ctx.menuRegistry.setOptionsCustomStyles(menuName,customStyles);
}},{key:'componentDidMount',value:function componentDidMount()

{
this.updateCustomStyles(this.props);
}},{key:'componentDidUpdate',value:function componentDidUpdate()

{
this.updateCustomStyles(this.props);
}},{key:'render',value:function render()

{var _props2=
this.props,customStyles=_props2.customStyles,style=_props2.style,children=_props2.children;
return(
_react2.default.createElement(_reactNative.View,{style:[customStyles.optionsWrapper,style],__source:{fileName:_jsxFileName,lineNumber:28}},
children));


}}]);return MenuOptions;}(_react2.default.Component);


MenuOptions.propTypes={
customStyles:_propTypes2.default.object,
renderOptionsContainer:_propTypes2.default.func,
optionsContainerStyle:_propTypes2.default.oneOfType([
_propTypes2.default.object,
_propTypes2.default.number,
_propTypes2.default.array])};



MenuOptions.defaultProps={
customStyles:{}};exports.default=


(0,_MenuProvider.withCtx)(MenuOptions);