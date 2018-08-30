Object.defineProperty(exports,"__esModule",{value:true});exports.makeName=exports.measure=undefined;var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/helpers.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.


























makeTouchable=makeTouchable;exports.



















lo=lo;exports.






















iterator2array=iterator2array;exports.













deprecatedComponent=deprecatedComponent;var _react=require('react');var _react2=_interopRequireDefault(_react);var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var measure=exports.measure=function measure(ref){return new Promise(function(resolve){ref.measure(function(x,y,width,height,pageX,pageY){resolve({x:pageX,y:pageY,width:width,height:height});});});};var makeName=exports.makeName=function(){var nextID=1;return function(){return'menu-'+nextID++;};}();function makeTouchable(TouchableComponent){var Touchable=TouchableComponent||_reactNative.Platform.select({android:_reactNative.TouchableNativeFeedback,ios:_reactNative.TouchableHighlight,default:_reactNative.TouchableHighlight});var defaultTouchableProps={};if(Touchable===_reactNative.TouchableHighlight){defaultTouchableProps={underlayColor:'rgba(0, 0, 0, 0.1)'};}return{Touchable:Touchable,defaultTouchableProps:defaultTouchableProps};}function includes(arr,value){return arr.indexOf(value)>-1;}function lo(object){for(var _len=arguments.length,excluding=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){excluding[_key-1]=arguments[_key];}var exc=Array.from(excluding);function isObject(obj){return obj===Object(obj);}function withoutPrivate(obj){if(!isObject(obj))return obj;var res={};for(var property in obj){if(obj.hasOwnProperty(property)){if(!property.startsWith('_')&&!includes(exc,property)){res[property]=withoutPrivate(obj[property]);}}}return res;}return withoutPrivate(object);}function iterator2array(it){var arr=[];for(var next=it.next();!next.done;next=it.next()){arr.push(next.value);}return arr;}function deprecatedComponent(message){var methods=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];
return function deprecatedComponentHOC(Component){
return function(_React$Component){_inherits(DeprecatedComponent,_React$Component);
function DeprecatedComponent(){var _ref;for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2];}_classCallCheck(this,DeprecatedComponent);var _this=_possibleConstructorReturn(this,(_ref=DeprecatedComponent.__proto__||Object.getPrototypeOf(DeprecatedComponent)).call.apply(_ref,[this].concat(
args)));_this.










onRef=function(ref){return _this.ref=ref;};methods.forEach(function(name){_this[name]=function(){var _this$ref;return _this.ref&&(_this$ref=_this.ref)[name].apply(_this$ref,arguments);};});return _this;}_createClass(DeprecatedComponent,[{key:'render',value:function render(){return _react2.default.createElement(Component,_extends({},this.props,{ref:this.onRef,__source:{fileName:_jsxFileName,lineNumber:97}}));}},{key:'componentDidMount',value:function componentDidMount()

{
console.warn(message);
}}]);return DeprecatedComponent;}(_react2.default.Component);

};
}