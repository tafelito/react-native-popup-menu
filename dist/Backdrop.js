Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/Backdrop.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _constants=require('./constants');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var

Backdrop=function(_Component){_inherits(Backdrop,_Component);

function Backdrop(){var _ref;_classCallCheck(this,Backdrop);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var _this=_possibleConstructorReturn(this,(_ref=Backdrop.__proto__||Object.getPrototypeOf(Backdrop)).call.apply(_ref,[this].concat(
args)));
_this.fadeAnim=new _reactNative.Animated.Value(0.001);return _this;
}_createClass(Backdrop,[{key:'open',value:function open()

{var _this2=this;
return new Promise(function(resolve){
_reactNative.Animated.timing(_this2.fadeAnim,{
duration:_constants.OPEN_ANIM_DURATION,
toValue:1,
useNativeDriver:true}).
start(resolve);
});
}},{key:'close',value:function close()

{var _this3=this;
return new Promise(function(resolve){
_reactNative.Animated.timing(_this3.fadeAnim,{
duration:_constants.CLOSE_ANIM_DURATION,
toValue:0,
useNativeDriver:true}).
start(resolve);
});
}},{key:'render',value:function render()

{var _props=
this.props,onPress=_props.onPress,style=_props.style;
return(
_react2.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:onPress,__source:{fileName:_jsxFileName,lineNumber:36}},
_react2.default.createElement(_reactNative.Animated.View,{style:[styles.fullscreen,{opacity:this.fadeAnim}],__source:{fileName:_jsxFileName,lineNumber:37}},
_react2.default.createElement(_reactNative.View,{style:[styles.fullscreen,style],__source:{fileName:_jsxFileName,lineNumber:38}}))));



}}]);return Backdrop;}(_react.Component);



Backdrop.propTypes={
onPress:_propTypes2.default.func.isRequired};


var styles=_reactNative.StyleSheet.create({
fullscreen:{
opacity:0,
position:'absolute',
top:0,
left:0,
bottom:0,
right:0}});exports.default=



Backdrop;