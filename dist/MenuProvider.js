Object.defineProperty(exports,"__esModule",{value:true});exports.withCtx=exports.PopupMenuContext=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/MenuProvider.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');

var _withContext=require('./with-context');
var _menuRegistry=require('./menuRegistry');var _menuRegistry2=_interopRequireDefault(_menuRegistry);
var _MenuPlaceholder=require('./MenuPlaceholder');var _MenuPlaceholder2=_interopRequireDefault(_MenuPlaceholder);
var _helpers=require('./helpers');
var _logger=require('./logger.js');
var _MenuOutside=require('./renderers/MenuOutside');var _MenuOutside2=_interopRequireDefault(_MenuOutside);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var defaultOptionsContainerRenderer=function defaultOptionsContainerRenderer(options){return options;};
var layoutsEqual=function layoutsEqual(a,b){return(
a===b||a&&b&&a.width===b.width&&a.height===b.height);};


var isFunctional=function isFunctional(Component){return!Component.prototype.render;};

if(!_react2.default.forwardRef){
throw new Error('This version of popup-menu requires RN 0.55+. Check our compatibility table.');
}
var PopupMenuContext=exports.PopupMenuContext=(0,_react.createContext)({});
var withCtx=exports.withCtx=(0,_withContext.withContext)(PopupMenuContext,"ctx");


var instanceCount=0;var

MenuProvider=function(_Component){_inherits(MenuProvider,_Component);

function MenuProvider(props){_classCallCheck(this,MenuProvider);var _this=_possibleConstructorReturn(this,(MenuProvider.__proto__||Object.getPrototypeOf(MenuProvider)).call(this,
props));_this.













_handleBackButton=function(){var
backHandler=_this.props.backHandler;
(0,_logger.debug)('_handleBackButton called',backHandler);


if(backHandler===true){
if(_this.isMenuOpen()){
_this.closeMenu();
return true;
}
}


if(typeof backHandler==='function'){
return backHandler(_this);
}

return false;
};_this.























































































































































































onBackdropRef=function(r){
_this.backdropRef=r;
};_this.

onOptionsRef=function(r){
_this.optionsRef=r;
};_this.

_onPlaceholderRef=function(r){return _this._placeholderRef=r;};_this.








_onBackdropPress=function(){
(0,_logger.debug)('on backdrop press');
var menu=_this._getOpenedMenu();
if(menu){
menu.instance.props.onBackdropPress();
}
_this.closeMenu();
};_this.












































_onLayout=function(_ref){var layout=_ref.nativeEvent.layout;
if(layoutsEqual(_this._ownLayout,layout)){
return;
}
_this._ownLayout=layout;
(0,_logger.debug)('context layout has changed',_this._ownLayout);
if(!_this.isMenuOpen()){
return;
}var _this$_getOpenedMenu=
_this._getOpenedMenu(),instance=_this$_getOpenedMenu.instance;
var trigger=instance._getTrigger();
(0,_helpers.measure)(trigger).then(function(triggerLayout){
(0,_logger.debug)('got trigger measurements after context layout change',triggerLayout);
_this._menuRegistry.updateLayoutInfo(instance.getName(),{triggerLayout:triggerLayout});

_this._notify(true);
});
};_this.

_onSafeAreaLayout=function(_ref2){var layout=_ref2.nativeEvent.layout;
if(layoutsEqual(_this._safeAreaLayout,layout)){
return;
}
_this._safeAreaLayout=layout;
(0,_logger.debug)('safeArea layout has changed',_this._safeAreaLayout);
if(!_this.isMenuOpen()){
return;
}
_this._notify(true);
};_this._menuRegistry=(0,_menuRegistry2.default)();_this._isMenuClosing=false;var menuActions={openMenu:function openMenu(name){return _this.openMenu(name);},closeMenu:function closeMenu(){return _this.closeMenu();},toggleMenu:function toggleMenu(name){return _this.toggleMenu(name);},isMenuOpen:function isMenuOpen(){return _this.isMenuOpen();},_getOpenedMenu:function _getOpenedMenu(){return _this._getOpenedMenu();},_notify:function _notify(force){return _this._notify(force);}};_this.menuCtx={menuRegistry:_this._menuRegistry,menuActions:menuActions};return _this;}_createClass(MenuProvider,[{key:'componentDidMount',value:function componentDidMount(){if(_reactNative.BackHandler){_reactNative.BackHandler.addEventListener('hardwareBackPress',this._handleBackButton);}else{var backHandler=this.props.backHandler;if(backHandler===true||typeof backHandler==='function'){console.warn('backHandler prop cannot be used if BackHandler is not present (RN >= 0.44 required)');}}var _props=this.props,customStyles=_props.customStyles,skipInstanceCheck=_props.skipInstanceCheck;if(customStyles.menuContextWrapper){console.warn('menuContextWrapper custom style is deprecated and it might be removed in future releases, use menuProviderWrapper instead.');}if(!skipInstanceCheck){instanceCount++;}if(instanceCount>1){console.warn('In most cases you should not have more MenuProviders in your app (see API documentation). In other cases use skipInstanceCheck prop.');}}},{key:'componentWillUnmount',value:function componentWillUnmount(){(0,_logger.debug)('unmounting menu provider');if(_reactNative.BackHandler){_reactNative.BackHandler.removeEventListener('hardwareBackPress',this._handleBackButton);}var skipInstanceCheck=this.props.skipInstanceCheck;if(!skipInstanceCheck){instanceCount--;}}},{key:'isMenuOpen',value:function isMenuOpen(){return!!this._getOpenedMenu();}},{key:'openMenu',value:function openMenu(name){var menu=this._menuRegistry.getMenu(name);if(!menu){console.warn('menu with name '+name+' does not exist');return Promise.resolve();}(0,_logger.debug)('open menu',name);menu.instance._setOpened(true);return this._notify();}},{key:'closeMenu',value:function closeMenu(){(0,_logger.debug)('close menu');this._menuRegistry.getAll().filter(function(menu){return menu.instance._getOpened();}).forEach(function(menu){return menu.instance._setOpened(false);});return this._notify();}},{key:'_invalidateTriggerLayouts',value:function _invalidateTriggerLayouts(){var _this2=this;this._menuRegistry.getAll().filter(function(menu){return!menu.instance._isOpen();}).forEach(function(menu){_this2._menuRegistry.updateLayoutInfo(menu.name,{triggerLayout:undefined});});}},{key:'_beforeClose',value:function _beforeClose(menu){var _this3=this;(0,_logger.debug)('before close',menu.name);var hideMenu=this.optionsRef&&this.optionsRef.close&&this.optionsRef.close()||Promise.resolve();var hideBackdrop=this.backdropRef&&this.backdropRef.close();this._invalidateTriggerLayouts();this._isMenuClosing=true;return Promise.all([hideMenu,hideBackdrop]).then(function(){_this3._isMenuClosing=false;}).catch(function(err){_this3._isMenuClosing=false;throw err;});}},{key:'toggleMenu',value:function toggleMenu(name){var menu=this._menuRegistry.getMenu(name);if(!menu){console.warn('menu with name '+name+' does not exist');return Promise.resolve();}(0,_logger.debug)('toggle menu',name);if(menu.instance._getOpened()){return this.closeMenu();}else{return this.openMenu(name);}}},{key:'_notify',value:function _notify(forceUpdate){var _this4=this;var NULL={};var prev=this.openedMenu||NULL;var next=this._menuRegistry.getAll().find(function(menu){return menu.instance._isOpen();})||NULL;this.openedMenu=next===NULL?undefined:next;if(!forceUpdate&&!this._isRenderNeeded(prev,next)){return Promise.resolve();}(0,_logger.debug)('notify: next menu:',next.name,' prev menu:',prev.name);var afterSetState=undefined;var beforeSetState=function beforeSetState(){return Promise.resolve();};if(prev.name!==next.name){if(prev!==NULL&&!prev.instance._isOpen()){beforeSetState=function beforeSetState(){return _this4._beforeClose(prev).then(function(){return prev.instance.props.onClose();});};}if(next!==NULL){next.instance.props.onOpen();afterSetState=function afterSetState(){return _this4._initOpen(next);};}}return beforeSetState().then(function(){if(!_this4._placeholderRef){(0,_logger.debug)('setState ignored - maybe the context was unmounted');return;}_this4._placeholderRef.setState({openedMenuName:_this4.openedMenu&&_this4.openedMenu.name},afterSetState);(0,_logger.debug)('notify ended');});}},{key:'_isRenderNeeded',value:function _isRenderNeeded(prev,next){if(prev===next){(0,_logger.debug)('_isRenderNeeded: skipping - no change');return false;}if(prev.name!==next.name){return true;}var triggerLayout=next.triggerLayout,optionsLayout=next.optionsLayout;if(!triggerLayout||!optionsLayout){(0,_logger.debug)('_isRenderNeeded: skipping - no trigger or options layout');return false;}return true;}},{key:'render',value:function render(){var _props2=this.props,style=_props2.style,customStyles=_props2.customStyles;(0,_logger.debug)('render menu',this.isMenuOpen(),this._ownLayout);return _react2.default.createElement(PopupMenuContext.Provider,{value:this.menuCtx,__source:{fileName:_jsxFileName,lineNumber:217}},_react2.default.createElement(_reactNative.View,{style:styles.flex1,onLayout:this._onLayout,__source:{fileName:_jsxFileName,lineNumber:218}},_react2.default.createElement(_reactNative.View,{style:[styles.flex1,customStyles.menuContextWrapper,customStyles.menuProviderWrapper,style],__source:{fileName:_jsxFileName,lineNumber:219}},this.props.children),_react2.default.createElement(_reactNative.SafeAreaView,{style:styles.safeArea,pointerEvents:'box-none',__source:{fileName:_jsxFileName,lineNumber:227}},_react2.default.createElement(_reactNative.View,{style:styles.flex1,collapsable:false,pointerEvents:'box-none',onLayout:this._onSafeAreaLayout,__source:{fileName:_jsxFileName,lineNumber:231}}),_react2.default.createElement(_MenuPlaceholder2.default,{ctx:this,backdropStyles:customStyles.backdrop,ref:this._onPlaceholderRef,__source:{fileName:_jsxFileName,lineNumber:236}}))));}},{key:'_getOpenedMenu',value:function _getOpenedMenu(){var name=this._placeholderRef&&this._placeholderRef.state.openedMenuName;var menu=name?this._menuRegistry.getMenu(name):undefined;(0,_logger.debug)('_getOpenedMenu',name,!!menu);return menu;}},{key:'_isInitialized',value:function _isInitialized(){return!!this._ownLayout;}},{key:'_initOpen',value:function _initOpen(menu){var _this5=this;(0,_logger.debug)('opening',menu.name);var trigger=menu.instance._getTrigger();(0,_helpers.measure)(trigger).then(function(triggerLayout){(0,_logger.debug)('got trigger measurements',triggerLayout);_this5._menuRegistry.updateLayoutInfo(menu.name,{triggerLayout:triggerLayout});_this5.backdropRef&&_this5.backdropRef.open();_this5._notify();});}},{key:'_onOptionsLayout',value:function _onOptionsLayout(e,name,isOutside){var optionsLayout=e.nativeEvent.layout;optionsLayout.isOutside=isOutside;(0,_logger.debug)('got options layout',optionsLayout);this._menuRegistry.updateLayoutInfo(name,{optionsLayout:optionsLayout});this._notify();}},{key:'_makeOptions',value:function _makeOptions(){var _this6=this;var _getOpenedMenu2=this._getOpenedMenu(),instance=_getOpenedMenu2.instance,triggerLayout=_getOpenedMenu2.triggerLayout,optionsLayout=_getOpenedMenu2.optionsLayout;var options=instance._getOptions();var _instance$props=instance.props,renderer=_instance$props.renderer,rendererProps=_instance$props.rendererProps;var windowLayout=this._ownLayout;var safeAreaLayout=this._safeAreaLayout;var _options$props=options.props,optionsContainerStyle=_options$props.optionsContainerStyle,renderOptionsContainer=_options$props.renderOptionsContainer,customStyles=_options$props.customStyles;var optionsRenderer=renderOptionsContainer||defaultOptionsContainerRenderer;var isOutside=!triggerLayout||!optionsLayout;var onLayout=function onLayout(e){return _this6._onOptionsLayout(e,instance.getName(),isOutside);};var style=[optionsContainerStyle,customStyles.optionsContainer];var layouts={windowLayout:windowLayout,triggerLayout:triggerLayout,optionsLayout:optionsLayout,safeAreaLayout:safeAreaLayout};var props=_extends({},rendererProps,{style:style,onLayout:onLayout,layouts:layouts});var optionsType=isOutside?_MenuOutside2.default:renderer;if(!isFunctional(optionsType)){props.ref=this.onOptionsRef;}return _react2.default.createElement(optionsType,props,optionsRenderer(options));}}]);return MenuProvider;}(_react.Component);exports.default=MenuProvider;



MenuProvider.propTypes={
customStyles:_propTypes2.default.object,
backHandler:_propTypes2.default.oneOfType([_propTypes2.default.bool,_propTypes2.default.func]),
skipInstanceCheck:_propTypes2.default.bool};


MenuProvider.defaultProps={
customStyles:{},
backHandler:false,
skipInstanceCheck:false};


var styles=_reactNative.StyleSheet.create({
flex1:{
flex:1},

safeArea:{
position:'absolute',
top:0,
left:0,
right:0,
bottom:0}});