Object.defineProperty(exports,"__esModule",{value:true});exports.Menu=undefined;var _jsxFileName='src/Menu.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _index=require('./index');
var _ContextMenu=require('./renderers/ContextMenu');var _ContextMenu2=_interopRequireDefault(_ContextMenu);
var _helpers=require('./helpers');
var _logger=require('./logger');
var _MenuProvider=require('./MenuProvider');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var isRegularComponent=function isRegularComponent(c){return c.type!==_index.MenuOptions&&c.type!==_index.MenuTrigger;};
var isTrigger=function isTrigger(c){return c.type===_index.MenuTrigger;};
var isMenuOptions=function isMenuOptions(c){return c.type===_index.MenuOptions;};var

Menu=exports.Menu=function(_Component){_inherits(Menu,_Component);

function Menu(props){_classCallCheck(this,Menu);var _this=_possibleConstructorReturn(this,(Menu.__proto__||Object.getPrototypeOf(Menu)).call(this,
props));
_this._name=_this.props.name||(0,_helpers.makeName)();
_this._forceClose=false;var
ctx=props.ctx;
if(!(ctx&&ctx.menuActions)){
throw new Error("Menu component must be ancestor of MenuProvider");
}return _this;
}_createClass(Menu,[{key:'componentDidMount',value:function componentDidMount()

{
if(!this._validateChildren()){
return;
}
(0,_logger.debug)('subscribing menu',this._name);
this.props.ctx.menuRegistry.subscribe(this);
this.props.ctx.menuActions._notify();
}},{key:'componentDidUpdate',value:function componentDidUpdate(

prevProps){
if(this.props.name!==prevProps.name){
console.warn('Menu name cannot be changed');
}

var force=this._isOpen();
(0,_logger.debug)('component did update',this._name,force);
this.props.ctx.menuActions._notify(force);
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
(0,_logger.debug)('unsubscribing menu',this._name);
if(this._isOpen()){
this._forceClose=true;
this.props.ctx.menuActions._notify();
}
this.props.ctx.menuRegistry.unsubscribe(this);
}},{key:'open',value:function open()

{
return this.props.ctx.menuActions.openMenu(this._name);
}},{key:'close',value:function close()

{
return this.props.ctx.menuActions.closeMenu();
}},{key:'getName',value:function getName()

{
return this._name;
}},{key:'render',value:function render()

{var
style=this.props.style;
var children=this._reduceChildren();
return(
_react2.default.createElement(_reactNative.View,{style:style,__source:{fileName:_jsxFileName,lineNumber:70}},
children));


}},{key:'_reduceChildren',value:function _reduceChildren()

{var _this2=this;
return _react2.default.Children.toArray(this.props.children).reduce(function(r,child){
if(isTrigger(child)){
r.push(_react2.default.cloneElement(child,{
key:null,
menuName:_this2._name,
onRef:function onRef(t){return _this2._trigger=t;}}));

}
if(isRegularComponent(child)){
r.push(child);
}
return r;
},[]);
}},{key:'_isOpen',value:function _isOpen()

{
if(this._forceClose){
return false;
}
return this.props.hasOwnProperty('opened')?this.props.opened:this._opened;
}},{key:'_getTrigger',value:function _getTrigger()

{
return this._trigger;
}},{key:'_getOptions',value:function _getOptions()

{
return _react2.default.Children.toArray(this.props.children).find(isMenuOptions);
}},{key:'_getOpened',value:function _getOpened()

{
return this._opened;
}},{key:'_setOpened',value:function _setOpened(

opened){
this._opened=opened;
}},{key:'_validateChildren',value:function _validateChildren()

{
var children=_react2.default.Children.toArray(this.props.children);
var options=children.find(isMenuOptions);
if(!options){
console.warn('Menu has to contain MenuOptions component');
}
var trigger=children.find(isTrigger);
if(!trigger){
console.warn('Menu has to contain MenuTrigger component');
}
return options&&trigger;
}}]);return Menu;}(_react.Component);



Menu.propTypes={
name:_propTypes2.default.string,
renderer:_propTypes2.default.func,
rendererProps:_propTypes2.default.object,
onSelect:_propTypes2.default.func,
onOpen:_propTypes2.default.func,
onClose:_propTypes2.default.func,
opened:_propTypes2.default.bool,
onBackdropPress:_propTypes2.default.func};


Menu.defaultProps={
renderer:_ContextMenu2.default,
rendererProps:{},
onSelect:function onSelect(){},
onOpen:function onOpen(){},
onClose:function onClose(){},
onBackdropPress:function onBackdropPress(){}};


var MenuExternal=(0,_MenuProvider.withCtx)(Menu);
MenuExternal.debug=false;
MenuExternal.setDefaultRenderer=function(renderer){
Menu.defaultProps.renderer=renderer;
};
MenuExternal.setDefaultRendererProps=function(rendererProps){
Menu.defaultProps.rendererProps=rendererProps;
};exports.default=
MenuExternal;