Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};exports.default=











makeMenuRegistry;var _helpers=require('./helpers');function makeMenuRegistry(){var menus=arguments.length>0&&arguments[0]!==undefined?arguments[0]:new Map();




function subscribe(instance){
var name=instance.getName();
if(menus.get(name)){
console.warn('incorrect usage of popup menu - menu with name '+name+' already exists');
}
menus.set(name,{name:name,instance:instance});
}




function unsubscribe(instance){
menus.delete(instance.getName());
}




function updateLayoutInfo(name){var layouts=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};
if(!menus.has(name)){
return;
}
var menu=_extends({},menus.get(name));
if(layouts.hasOwnProperty('triggerLayout')){
menu.triggerLayout=layouts.triggerLayout;
}
if(layouts.hasOwnProperty('optionsLayout')){
menu.optionsLayout=layouts.optionsLayout;
}
menus.set(name,menu);
}

function setOptionsCustomStyles(name,optionsCustomStyles){
if(!menus.has(name)){
return;
}
var menu=_extends({},menus.get(name),{optionsCustomStyles:optionsCustomStyles});
menus.set(name,menu);
}




function getMenu(name){
return menus.get(name);
}




function getAll(){
return(0,_helpers.iterator2array)(menus.values());
}

return{subscribe:subscribe,unsubscribe:unsubscribe,updateLayoutInfo:updateLayoutInfo,getMenu:getMenu,getAll:getAll,setOptionsCustomStyles:setOptionsCustomStyles};
}