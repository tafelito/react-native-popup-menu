Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/MenuPlaceholder.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _reactNative=require('react-native');
var _Backdrop=require('./Backdrop');var _Backdrop2=_interopRequireDefault(_Backdrop);
var _logger=require('./logger.js');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

MenuPlaceholder=function(_Component){_inherits(MenuPlaceholder,_Component);
function MenuPlaceholder(props){_classCallCheck(this,MenuPlaceholder);var _this=_possibleConstructorReturn(this,(MenuPlaceholder.__proto__||Object.getPrototypeOf(MenuPlaceholder)).call(this,
props));
_this.state={};return _this;
}_createClass(MenuPlaceholder,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate()

{

return!this.props.ctx._isMenuClosing;
}},{key:'render',value:function render()

{var _props=
this.props,ctx=_props.ctx,backdropStyles=_props.backdropStyles;
var shouldRenderMenu=ctx.isMenuOpen()&&ctx._isInitialized();
(0,_logger.debug)('MenuPlaceholder should render',shouldRenderMenu);
if(!shouldRenderMenu){
return null;
}
return(
_react2.default.createElement(_reactNative.View,{style:styles.placeholder,__source:{fileName:_jsxFileName,lineNumber:25}},
_react2.default.createElement(_Backdrop2.default,{
onPress:ctx._onBackdropPress,
style:backdropStyles,
ref:ctx.onBackdropRef,__source:{fileName:_jsxFileName,lineNumber:26}}),


ctx._makeOptions()));



}}]);return MenuPlaceholder;}(_react.Component);exports.default=MenuPlaceholder;


var styles=_reactNative.StyleSheet.create({
placeholder:{
position:'absolute',
top:0,
left:0,
right:0,
bottom:0}});