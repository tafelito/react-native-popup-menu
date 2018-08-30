Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName="src/with-context.js";var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();exports.

withContext=withContext;var _react=require("react");var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function withContext(Context){var propName=arguments.length>1&&arguments[1]!==undefined?arguments[1]:"context";
return function wrap(Component){var
EnhanceContext=function(_React$Component){_inherits(EnhanceContext,_React$Component);function EnhanceContext(){_classCallCheck(this,EnhanceContext);return _possibleConstructorReturn(this,(EnhanceContext.__proto__||Object.getPrototypeOf(EnhanceContext)).apply(this,arguments));}_createClass(EnhanceContext,[{key:"render",value:function render()
{var _props=
this.props,forwardedRef=_props.forwardedRef,rest=_objectWithoutProperties(_props,["forwardedRef"]);

return(
_react2.default.createElement(Context.Consumer,{__source:{fileName:_jsxFileName,lineNumber:10}},
function(value){var _custom;
var custom=(_custom={},_defineProperty(_custom,
propName,value),_defineProperty(_custom,"ref",
forwardedRef),_custom);

return _react2.default.createElement(Component,_extends({},custom,rest,{__source:{fileName:_jsxFileName,lineNumber:16}}));
}));


}}]);return EnhanceContext;}(_react2.default.Component);


var name=Component.displayName||Component.name||"Component";
var consumerName=
Context.Consumer.displayName||
Context.Consumer.name||
"Context.Consumer";

function enhanceForwardRef(props,ref){
return _react2.default.createElement(EnhanceContext,_extends({},props,{forwardedRef:ref,__source:{fileName:_jsxFileName,lineNumber:30}}));
}

enhanceForwardRef.displayName="enhanceContext-"+consumerName+"("+name+")";

var FC=_react2.default.forwardRef(enhanceForwardRef);
FC.defaultProps=Component.defaultProps;
FC.propTypes=Component.propTypes;
return FC;
};
}