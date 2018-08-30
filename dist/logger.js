Object.defineProperty(exports,"__esModule",{value:true});exports.debug=undefined;var _index=require('./index');var _index2=_interopRequireDefault(_index);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}




var debug=exports.debug=function debug(){var _console;for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}
_index2.default.debug&&(_console=console).log.apply(_console,['react-native-popup-menu'].concat(args));
};