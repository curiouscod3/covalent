function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{gNzS:function(n,e,t){"use strict";t.r(e);var a=t("ofXK"),c=t("tyNb"),i=t("d3UM"),r=t("NFeN"),s=t("FKr1"),o=t("iadO"),l=t("9X6E"),m=t("/OM5"),f=t("eTLM"),p=t("Q3DV"),u=t("fXoL"),b=t("7RBA"),d=t("AzUz");function h(n,e){if(1&n&&(u.Yb(0,"span"),u.Qc(1),u.Xb()),2&n){var t=u.kc(3).$implicit;u.Fb(1),u.Sc("Min length value: ",t.minLength,"")}}function g(n,e){if(1&n&&(u.Yb(0,"span"),u.Qc(1),u.Xb()),2&n){var t=u.kc(3).$implicit;u.Fb(1),u.Sc("Max length value: ",t.minLength,"")}}function y(n,e){if(1&n&&(u.Yb(0,"span"),u.Qc(1,"\n          "),u.Oc(2,h,2,1,"span",3),u.Qc(3,"\n          "),u.Oc(4,g,2,1,"span",3),u.Qc(5,"\n        "),u.Xb()),2&n){var t=u.kc().control;u.Fb(2),u.qc("ngIf",t.hasError("minlength")),u.Fb(2),u.qc("ngIf",t.hasError("maxlength"))}}function x(n,e){if(1&n&&(u.Qc(0,"\n        "),u.Oc(1,y,6,2,"span",3),u.Qc(2,"\n    ")),2&n){var t=e.control;u.Fb(1),u.qc("ngIf",t.touched||!t.pristine)}}function v(n,e){if(1&n&&(u.Qc(0,"\n    "),u.Oc(1,x,3,1,"ng-template",2),u.Qc(2,"\n  ")),2&n){var t=e.$implicit;u.Fb(1),u.qc("tdDynamicFormsError",t.name)}}var F,w=((F=function n(){_classCallCheck(this,n),this.textElements=[{name:"input",hint:"this is an input hint",type:m.b.Input,required:!1,flex:50},{name:"required-input",label:"Input Label",type:m.b.Input,required:!0,flex:50},{name:"text-length",label:"Text Length",type:m.b.Input,minLength:4,maxLength:12,flex:50},{name:"text",type:m.c.Text,required:!1,default:"Default",flex:50,disabled:!0},{name:"textarea",hint:"this is a textarea hint",type:m.b.Textarea,required:!1},{name:"required-password",label:"Password Label",type:m.b.Password,required:!0}]}).\u0275fac=function(n){return new(n||F)},F.\u0275cmp=u.Nb({type:F,selectors:[["dynamic-forms-demo"]],decls:4,vars:2,consts:[[3,"elements"],["ngFor","",3,"ngForOf"],[3,"tdDynamicFormsError"],[4,"ngIf"]],template:function(n,e){1&n&&(u.Yb(0,"td-dynamic-forms",0),u.Qc(1,"\n  "),u.Oc(2,v,3,1,"ng-template",1),u.Qc(3,"\n"),u.Xb()),2&n&&(u.qc("elements",e.textElements),u.Fb(2),u.qc("ngForOf",e.textElements))},directives:[b.a,a.s,d.c,a.t],styles:[""]}),F);t.d(e,"DynamicFormsDemoModule",(function(){return O}));var q,Q=Object(p.c)({overviewDemoComponent:w,id:"dynamic-forms"}),O=((q=function n(){_classCallCheck(this,n)}).\u0275mod=u.Rb({type:q}),q.\u0275inj=u.Qb({factory:function(n){return new(n||q)},providers:[],imports:[[a.c,i.b,r.b,s.j,o.c,l.a,m.a,f.a,c.f.forChild(Q)]]}),q)}}]);