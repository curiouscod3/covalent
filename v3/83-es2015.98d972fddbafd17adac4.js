(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{UAKV:function(e,t,o){"use strict";o.r(t);var s=o("ofXK"),c=o("REwh"),n=o("e4Sf"),i=o("tyNb"),a=o("fXoL"),l=o("MJ5V"),r=o("cCSU"),b=o("PWEM"),m=o("GvbB"),d=o("bTqV");let u=(()=>{class e{constructor(e){this._dialogService=e}showAlert(){this._dialogService.openAlert({title:"View More Clicked",message:"Actions can be useful for displaying a dialog to provide more information"})}}return e.\u0275fac=function(t){return new(t||e)(a.Tb(b.c))},e.\u0275cmp=a.Nb({type:e,selectors:[["message-demo-action"]],decls:3,vars:0,consts:[["label","Warning","sublabel","Click the button for details","icon","warning",1,"bgc-td-orange-100","tc-td-orange"],["td-message-actions","","mat-button","",3,"click"]],template:function(e,t){1&e&&(a.Yb(0,"td-message",0),a.Yb(1,"button",1),a.gc("click",(function(e){return t.showAlert()})),a.Qc(2,"View More"),a.Xb(),a.Xb())},directives:[m.a,d.b],styles:[""]}),e})(),g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Nb({type:e,selectors:[["message-demo-color"]],decls:2,vars:0,consts:[["label","Purple","sublabel","Color assigned via the input","color","purple","icon","error"],["label","Cyan","sublabel","Color assigned via classes","icon","error",1,"bgc-cyan-800","tc-cyan-100"]],template:function(e,t){1&e&&(a.Ub(0,"td-message",0),a.Ub(1,"td-message",1))},directives:[m.a],styles:["td-message[_ngcontent-%COMP%]{margin:5px}"]}),e})();var p=o("NFeN");let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Nb({type:e,selectors:[["message-demo-toggle-visibility"]],decls:12,vars:0,consts:[["color","primary","label","Manage visibility","sublabel","Click the button to hide message",1,"pad-sm","push-bottom"],["messageDemo",""],["td-message-actions","","mat-icon-button","",3,"click"],["mat-button","","color","accent",1,"push-top-sm","pull-bottom",3,"click"]],template:function(e,t){if(1&e){const e=a.Zb();a.Yb(0,"td-message",0,1),a.Qc(2,"\n  "),a.Yb(3,"button",2),a.gc("click",(function(t){return a.Hc(e),a.Ec(1).close()})),a.Qc(4,"\n    "),a.Yb(5,"mat-icon"),a.Qc(6,"cancel"),a.Xb(),a.Qc(7,"\n  "),a.Xb(),a.Qc(8,"\n"),a.Xb(),a.Qc(9,"\n"),a.Yb(10,"button",3),a.gc("click",(function(t){return a.Hc(e),a.Ec(1).toggle()})),a.Qc(11,"\n  Toggle Visibility\n"),a.Xb()}},directives:[m.a,d.b,p.a],styles:[""]}),e})();const y=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Nb({type:e,selectors:[["message-demo"]],decls:8,vars:8,consts:[[3,"demoId","demoTitle"]],template:function(e,t){1&e&&(a.Yb(0,"demo-component",0),a.Ub(1,"message-demo-basic"),a.Xb(),a.Yb(2,"demo-component",0),a.Ub(3,"message-demo-action"),a.Xb(),a.Yb(4,"demo-component",0),a.Ub(5,"message-demo-color"),a.Xb(),a.Yb(6,"demo-component",0),a.Ub(7,"message-demo-toggle-visibility"),a.Xb()),2&e&&(a.qc("demoId","message-demo-basic")("demoTitle","\nBasic"),a.Fb(2),a.qc("demoId","message-demo-card")("demoTitle","Message Action"),a.Fb(2),a.qc("demoId","message-demo-css")("demoTitle","Color Styling"),a.Fb(2),a.qc("demoId","message-demo-toggle-visibility")("demoTitle","Manage Visibility"))},directives:[l.a,r.a,u,g,f],styles:[""]}),e})()}];let v=(()=>{class e{}return e.\u0275mod=a.Rb({type:e}),e.\u0275inj=a.Qb({factory:function(t){return new(t||e)},imports:[[i.f.forChild(y)],i.f]}),e})();var w=o("Krbs"),h=o("Wp6s"),X=o("f0Cb");o.d(t,"MessageDemoModule",(function(){return k}));let k=(()=>{class e{}return e.\u0275mod=a.Rb({type:e}),e.\u0275inj=a.Qb({factory:function(t){return new(t||e)},imports:[[w.a,c.a,v,n.a,s.c,d.c,h.e,X.b,p.b]]}),e})()}}]);