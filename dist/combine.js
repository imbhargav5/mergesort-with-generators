"use strict";var _regenerator=require("babel-runtime/regenerator");var _regenerator2=_interopRequireDefault(_regenerator);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}module.exports=_regenerator2.default.mark(function combine(iter1,iter2){var i,j;return _regenerator2.default.wrap(function combine$(_context){while(1){switch(_context.prev=_context.next){case 0:i=iter1.next();j=iter2.next();_context.prev=2;case 3:if(!(!i.done||!j.done)){_context.next=29;break}if(!i.done){_context.next=11;break}_context.next=7;return j.value;case 7:return _context.delegateYield(iter2,"t0",8);case 8:return _context.abrupt("break",29);case 11:if(!j.done){_context.next=18;break}_context.next=14;return i.value;case 14:return _context.delegateYield(iter1,"t1",15);case 15:return _context.abrupt("break",29);case 18:if(!(i.value<=j.value)){_context.next=24;break}_context.next=21;return i.value;case 21:i=iter1.next();_context.next=27;break;case 24:_context.next=26;return j.value;case 26:j=iter2.next();case 27:_context.next=3;break;case 29:_context.next=34;break;case 31:_context.prev=31;_context.t2=_context["catch"](2);console.log(_context.t2);case 34:case"end":return _context.stop();}}},combine,this,[[2,31]])});