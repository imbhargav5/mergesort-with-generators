"use strict";var _regenerator=require("babel-runtime/regenerator");var _regenerator2=_interopRequireDefault(_regenerator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}module.exports=_regenerator2.default.mark(function combine(iter1,iter2){var i,j,res;return _regenerator2.default.wrap(function combine$(_context){while(1){switch(_context.prev=_context.next){case 0:i=iter1.next();j=iter2.next();_context.prev=2;case 3:if(!(!i.done||!j.done)){_context.next=30;break}if(!i.done){_context.next=12;break}_context.next=7;return j.value;case 7:return _context.delegateYield(iter2,"t0",8);case 8:res=_context.t0;return _context.abrupt("break",30);case 12:if(!j.done){_context.next=19;break}_context.next=15;return i.value;case 15:return _context.delegateYield(iter1,"t1",16);case 16:return _context.abrupt("break",30);case 19:if(!(i.value<=j.value)){_context.next=25;break}_context.next=22;return i.value;case 22:i=iter1.next();_context.next=28;break;case 25:_context.next=27;return j.value;case 27:j=iter2.next();case 28:_context.next=3;break;case 30:_context.next=35;break;case 32:_context.prev=32;_context.t2=_context["catch"](2);console.log(_context.t2);case 35:case"end":return _context.stop();}}},combine,this,[[2,32]])});