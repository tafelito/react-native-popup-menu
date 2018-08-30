
var _reactNative=require('react-native');

if(!_reactNative.Platform.select){
_reactNative.Platform.select=function(obj){return obj[_reactNative.Platform.OS];};
}