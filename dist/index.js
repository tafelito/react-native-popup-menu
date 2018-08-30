Object.defineProperty(exports,"__esModule",{value:true});exports.withMenuContext=exports.renderers=exports.MenuTrigger=exports.MenuOptions=exports.MenuOption=exports.MenuContext=exports.MenuProvider=exports.Menu=exports.default=undefined;require("./polyfills");
var _helpers=require("./helpers");

var _Menu=require("./Menu");var _Menu2=_interopRequireDefault(_Menu);
var _MenuProvider=require("./MenuProvider");var _MenuProvider2=_interopRequireDefault(_MenuProvider);
var _MenuOption=require("./MenuOption");var _MenuOption2=_interopRequireDefault(_MenuOption);
var _MenuOptions=require("./MenuOptions");var _MenuOptions2=_interopRequireDefault(_MenuOptions);
var _MenuTrigger=require("./MenuTrigger");var _MenuTrigger2=_interopRequireDefault(_MenuTrigger);

var _ContextMenu=require("./renderers/ContextMenu");var _ContextMenu2=_interopRequireDefault(_ContextMenu);
var _NotAnimatedContextMenu=require("./renderers/NotAnimatedContextMenu");var _NotAnimatedContextMenu2=_interopRequireDefault(_NotAnimatedContextMenu);
var _SlideInMenu=require("./renderers/SlideInMenu");var _SlideInMenu2=_interopRequireDefault(_SlideInMenu);
var _Popover=require("./renderers/Popover");var _Popover2=_interopRequireDefault(_Popover);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
var renderers={ContextMenu:_ContextMenu2.default,SlideInMenu:_SlideInMenu2.default,NotAnimatedContextMenu:_NotAnimatedContextMenu2.default,Popover:_Popover2.default};

var MenuContext=(0,_helpers.deprecatedComponent)(
"MenuContext is deprecated and it might be removed in future releases, use MenuProvider instead.",
["openMenu","toggleMenu","closeMenu","isMenuOpen"])(
_MenuProvider2.default);exports.


default=_Menu2.default;exports.
Menu=_Menu2.default;exports.
MenuProvider=_MenuProvider2.default;exports.
MenuContext=MenuContext;exports.
MenuOption=_MenuOption2.default;exports.
MenuOptions=_MenuOptions2.default;exports.
MenuTrigger=_MenuTrigger2.default;exports.
renderers=renderers;exports.
withMenuContext=_MenuProvider.withCtx;