(this.webpackJsonpfinanzapp=this.webpackJsonpfinanzapp||[]).push([[0],{125:function(e,t,a){},129:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),i=a.n(c),o=(a(125),a(106)),s=a(14),l=a(33),d=a(78),j=a(8),u="SHOW_SUCCESS_DIALOG",b="SHOW_ERROR_DIALOG",p="CHANGE_BALANCE",O="CHANGE_AMOUNT_INCOME",x="CHANGE_AMOUNT_EXPENSES",h="CHANGE_DATA_TEMP";function m(e){return{type:u,payload:e}}function f(e){return{type:b,payload:e}}function g(e){return{type:h,payload:e}}var v={typeIncome:[{id:1,description:"Salario"},{id:2,description:"Otros"}],typeExpenses:[{id:1,description:"Hogar"},{id:2,description:"Servicios"},{id:3,description:"Despensa"},{id:4,description:"Otros"}],income:[{id:1,amount:3e3,description:"Salario Abril 2021",category:1,date:"30/04/2021 15:00"},{id:2,amount:1e3,description:"Consultor\xeda de Aplicaciones M\xf3viles",category:2,date:"03/05/2021 20:00"}],expenses:[{id:1,description:"Reparaci\xf3n tuberia",amount:100,category:1,date:"03/05/2021"},{id:2,description:"Pago de Telefon\xeda",amount:100,category:2,date:"03/05/2021"},{id:3,description:"Compras en Tottus",amount:182.3,category:3,date:"03/05/2021"}]},y={dataSuccessDialog:{open:!1,title:"\xa1Bien!",description:"La operaci\xf3n se ha realizado con \xe9xito.",fnSuccess:function(){}},dataErrorDialog:{open:!1,title:"\xa1Oops!",description:"Ocurrio un error inesperado.",fnError:function(){}},amountBalance:0,amountIncome:0,amountExpenses:0,dataTemp:v},C=Object(d.a)({global:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(j.a)(Object(j.a)({},e),{},{dataSuccessDialog:t.payload});case b:return Object(j.a)(Object(j.a)({},e),{},{dataErrorDialog:t.payload});case p:return Object(j.a)(Object(j.a)({},e),{},{amountBalance:t.payload});case O:return Object(j.a)(Object(j.a)({},e),{},{amountIncome:t.payload});case x:return Object(j.a)(Object(j.a)({},e),{},{amountExpenses:t.payload});case h:return Object(j.a)(Object(j.a)({},e),{},{dataTemp:t.payload});default:return e}}}),S=Object(d.b)(C),E=a(28),k=a(13),T=a(107),D=(a(129),a(197)),A=a(198),w=a(199),B=a(206),I=a(109),N=a(200),F=a(186),M=a(105),R=a(193),G=a(207),z=a(201),_=a(192),L=a(202),P=a(196),W=a(26),U=a(36),H=a(75),q=a.n(H),K=a(93),V=a.n(K),J=a(74),X=a.n(J),Z=a(92),Q=a.n(Z),Y=a(95),$=a.n(Y),ee=a(94),te=a.n(ee),ae=a(96),ne=a.n(ae),re=a(97),ce=a.n(re),ie=a(98),oe=a.n(ie),se=a(99),le=a.n(se),de=a(138),je=a(183),ue=a(185),be=a(184),pe=a(210),Oe=a(2);var xe=function(e){return Object(Oe.jsxs)(de.a,{children:[Object(Oe.jsx)(je.a,{children:Object(Oe.jsx)(pe.a,{style:{color:"white",backgroundColor:"#3f51b5"},children:e.iconAvatar})}),Object(Oe.jsx)(be.a,{primary:e.textPrimary,secondary:e.textSecondary}),Object(Oe.jsx)(ue.a,{children:Object(Oe.jsx)(F.a,{edge:"end","aria-label":"",onClick:function(){return e.callback()},children:e.iconAction})})]},e.id)},he=function(e,t,a){return t=void 0===t?"":t,a=void 0===a?0:a,(e=parseFloat(e)).toFixed(a).replace(/./g,(function(e,t,a){return t>0&&"."!==e&&(a.length-t)%3===0?","+e:e}))+" "+t},me=function(e){var t=e.split("-");return"".concat(t[2],"/").concat(t[1],"/").concat(t[0]," 00:00")},fe=a(49),ge=a(194),ve=a(209),ye=a(187),Ce=a(195),Se=a(190),Ee=a(191),ke=a(189),Te=a(188),De=a(205),Ae={marginTop:"8px",marginBottom:"8px"},we=r.a.forwardRef((function(e,t){return Object(Oe.jsx)(ye.a,Object(j.a)({direction:"up",ref:t},e))}));var Be=Object(l.b)((function(e){return{dataSuccessDialog:e.global.dataSuccessDialog,dataErrorDialog:e.global.dataErrorDialog,dataTemp:e.global.dataTemp}}))((function(e){var t=e.open,a=e.onClose,r=e.type,c=Object(W.a)(),i=Object(Te.a)(c.breakpoints.down("xs")),o=Object(fe.b)(),s=o.handleSubmit,l=o.control,d=o.reset,u=Object(n.useState)(""),b=Object(k.a)(u,2),p=b[0],O=(b[1],Object(n.useState)("")),x=Object(k.a)(O,2),h=x[0],f=(x[1],Object(n.useState)("")),y=Object(k.a)(f,2),C=y[0],S=(y[1],Object(n.useState)("")),T=Object(k.a)(S,2),D=T[0],A=(T[1],function(t,a){var n,r=e.dataTemp,c=e.type;n={open:!0,title:"\xa1Bien!",description:"Se agreg\xf3 un movimiento a tus ".concat("income"===c?"ingresos.":"gastos."),fnSuccess:function(){var a=r[c];a.push({id:I(r[c]),description:t.description,amount:parseInt(t.amount),date:t.date}),function(t){(0,e.dispatch)(g(t))}(Object(j.a)(Object(j.a)({},r),{},Object(E.a)({},c,a))),w()}},(0,e.dispatch)(m(n))}),w=function(){a(),B()},B=function(){d({description:"",amount:"",category:"",date:""})},I=function(e){var t=e.sort((function(e,t){return e.id-t.id}));return t[t.length-1].id+1};return Object(Oe.jsxs)(ve.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,TransitionComponent:we,keepMounted:!0,fullScreen:i,open:t,onClose:a,"aria-labelledby":"responsive-dialog-title",children:[Object(Oe.jsxs)(ke.a,{id:"responsive-dialog-title",children:["Nuevo ","income"===r?"ingreso":"gasto"]}),Object(Oe.jsxs)(Se.a,{children:[Object(Oe.jsxs)(Ee.a,{children:["Este movimiento se agregar\xe1 a tus ","income"===r?"ingresos":"gastos"]}),Object(Oe.jsxs)("form",{onSubmit:s((function(e,t){var a=Object(j.a)(Object(j.a)({},e),{},{date:me(e.date)});A(a)})),children:[Object(Oe.jsx)(fe.a,{name:"description",control:l,defaultValue:p,value:p,render:function(e){var t=e.field,a=t.onChange,n=t.value,r=e.fieldState.error;return Object(Oe.jsx)(De.a,{style:Ae,label:"Descripci\xf3n",name:"description",variant:"outlined",autoFocus:!0,fullWidth:!0,value:n,onChange:a,error:!!r,helperText:r?r.message:null})},rules:{required:"Este campo es obligatorio.",maxLength:{value:100,message:"El texto no debe ser mayor a 100 caracteres."}}}),Object(Oe.jsx)(fe.a,{name:"amount",control:l,defaultValue:C,value:C,render:function(e){var t=e.field,a=t.onChange,n=t.value,r=e.fieldState.error;return Object(Oe.jsx)(De.a,{style:Ae,label:"Monto",name:"amount",variant:"outlined",fullWidth:!0,type:"number",value:n,onChange:a,error:!!r,helperText:r?r.message:null})},rules:{required:"Este campo es obligatorio.",min:{value:0,message:"El valor m\xednimo es 0"}}}),Object(Oe.jsx)(fe.a,{name:"category",control:l,defaultValue:h,value:h,render:function(e){var t=e.field,a=t.onChange,n=t.value,c=e.fieldState.error;return Object(Oe.jsxs)(De.a,{style:Ae,label:"Categor\xeda",name:"category",variant:"outlined",fullWidth:!0,select:!0,value:n,onChange:a,error:!!c,helperText:c?c.message:null,children:[Object(Oe.jsx)(R.a,{value:"",children:Object(Oe.jsx)("em",{children:"Selecciona una opci\xf3n"})}),"income"===r?v.typeIncome.map((function(e){return Object(Oe.jsx)(R.a,{value:e.id,children:e.description},e.id)})):v.typeExpenses.map((function(e){return Object(Oe.jsx)(R.a,{value:e.id,children:e.description},e.id)}))]})},rules:{required:"Este campo es obligatorio."}}),Object(Oe.jsx)(fe.a,{name:"date",control:l,defaultValue:D,value:D,render:function(e){var t=e.field,a=t.onChange,n=t.value,r=e.fieldState.error;return Object(Oe.jsx)(De.a,{style:Ae,label:"Fecha",name:"date",type:"date",variant:"outlined",fullWidth:!0,InputLabelProps:{shrink:!0},value:n,onChange:a,error:!!r,helperText:r?r.message:null})},rules:{required:"Este campo es obligatorio."}}),Object(Oe.jsx)(ge.a,{type:"submit",id:"btnSubmit",style:{display:"none"},children:"Signup"})]})]}),Object(Oe.jsxs)(Ce.a,{children:[Object(Oe.jsx)(ge.a,{onClick:w,children:"Cancelar"}),Object(Oe.jsx)(ge.a,{onClick:function(){var e;e="btnSubmit",document.getElementById(e).click()},variant:"contained",color:"primary",children:"Registar"})]})]})})),Ie=Object(P.a)((function(e){return{root:{flexGrow:1},rootGridList:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper},gridList:{flexWrap:"nowrap",transform:"translateZ(0)"},fab:{position:"absolute",bottom:e.spacing(3),right:e.spacing(2)}}}));function Ne(e){var t=e.children,a=e.value,n=e.index,r=Object(T.a)(e,["children","value","index"]);return Object(Oe.jsx)("div",Object(j.a)(Object(j.a)({role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},r),{},{children:a===n&&Object(Oe.jsx)(B.a,{p:3,children:Object(Oe.jsx)(U.a,{children:t})})}))}function Fe(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Me=function(e){var t;switch(e){case 1:t=Object(Oe.jsx)(Q.a,{});break;default:t=Object(Oe.jsx)(X.a,{})}return t},Re=function(e){var t;switch(e){case 1:t=Object(Oe.jsx)(V.a,{});break;case 2:t=Object(Oe.jsx)(te.a,{});break;case 3:t=Object(Oe.jsx)($.a,{});break;default:t=Object(Oe.jsx)(X.a,{})}return t};var Ge=Object(l.b)((function(e){return{dataTemp:e.global.dataTemp}}))((function(e){var t=e.dataTemp,a=Ie(),n=(Object(W.a)(),r.a.useState(0)),c=Object(k.a)(n,2),i=c[0],o=c[1],s=function(e){var t=e.income,a=e.expenses,n=t.reduce((function(e,t){return e+t.amount}),0),r=a.reduce((function(e,t){return e+t.amount}),0);return{totalIncome:n,totalExpenses:r,balance:n-r}}(t),l=s.balance,d=s.totalIncome,u=s.totalExpenses,b=r.a.useState(null),p=Object(k.a)(b,2),O=p[0],x=p[1],h=Boolean(O),m=r.a.useState(!1),f=Object(k.a)(m,2),v=f[0],y=f[1],C=r.a.useState(""),S=Object(k.a)(C,2),T=S[0],B=S[1],P=function(){y(!0)},H=function(){x(null)},K=function(e){H(),B(e),P()},V=function(t,a){var n,r=e.dataTemp,c=r[t].filter((function(e){return e.id!==a})),i=Object(j.a)(Object(j.a)({},r),{},Object(E.a)({},t,c));n=i,(0,e.dispatch)(g(n))};return Object(Oe.jsxs)("div",{className:a.root,style:{padding:"2rem",height:"100%"},children:[Object(Oe.jsx)(D.a,{container:!0,justify:"center",alignItems:"center",spacing:2,style:{marginTop:"3rem"},children:Object(Oe.jsx)(D.a,{item:!0,children:Object(Oe.jsx)(I.a,{style:{borderRadius:"10px"},children:Object(Oe.jsx)(A.a,{className:"cards",style:{borderRadius:"10px"},children:Object(Oe.jsxs)(w.a,{children:[Object(Oe.jsxs)("div",{style:{display:"inline-flex"},children:[Object(Oe.jsx)(ne.a,{color:"primary"}),Object(Oe.jsx)(U.a,{variant:"h6",color:"primary",children:Object(Oe.jsx)("b",{children:"Balance"})})]}),Object(Oe.jsx)(U.a,{variant:"h4",color:"primary",children:Object(Oe.jsxs)("b",{children:[he(l,"USD",2)," "]})}),Object(Oe.jsxs)("div",{style:{display:"inline-flex",marginTop:"10px",width:"250px",justifyContent:"space-between"},children:[Object(Oe.jsxs)("div",{className:"div-ingresos",children:[Object(Oe.jsx)(U.a,{color:"primary",children:Object(Oe.jsx)("b",{children:he(d,"USD",2)})}),Object(Oe.jsxs)("div",{style:{display:"inline-flex"},children:[Object(Oe.jsx)(ce.a,{color:"primary"}),Object(Oe.jsx)(U.a,{color:"primary",children:Object(Oe.jsx)("b",{children:"Ingresos"})})]})]}),Object(Oe.jsxs)("div",{className:"div-egresos",children:[Object(Oe.jsx)(U.a,{color:"error",children:Object(Oe.jsx)("b",{children:he(u,"USD",2)})}),Object(Oe.jsxs)("div",{style:{display:"inline-flex"},children:[Object(Oe.jsx)(oe.a,{color:"error"}),Object(Oe.jsx)(U.a,{color:"error",children:Object(Oe.jsx)("b",{children:"Gastos"})})]})]})]})]})})})})}),Object(Oe.jsx)(D.a,{container:!0,justify:"center",alignItems:"center",spacing:2,style:{marginTop:"1rem"},children:Object(Oe.jsx)(D.a,{item:!0,children:Object(Oe.jsx)(I.a,{style:{borderRadius:"10px"},children:Object(Oe.jsxs)(A.a,{className:"cards",style:{borderRadius:"10px"},children:[Object(Oe.jsx)(N.a,{action:Object(Oe.jsxs)(Oe.Fragment,{children:[Object(Oe.jsx)(F.a,{"aria-label":"options","aria-controls":"menuMovements","aria-haspopup":"true",onClick:function(e){x(e.currentTarget)},color:"inherit",children:Object(Oe.jsx)(le.a,{})}),Object(Oe.jsxs)(M.a,{id:"menuMovements",anchorEl:O,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:h,onClose:H,children:[Object(Oe.jsx)(R.a,{onClick:function(){return K("income")},children:"Agregar ingreso"}),Object(Oe.jsx)(R.a,{onClick:function(){return K("expenses")},children:"Agregar gasto"})]})]}),title:"Movimientos"}),Object(Oe.jsxs)(w.a,{children:[Object(Oe.jsxs)(G.a,{value:i,onChange:function(e,t){o(t)},indicatorColor:"primary",textColor:"primary",centered:!0,children:[Object(Oe.jsx)(z.a,Object(j.a)({label:"Ingresos"},Fe(0))),Object(Oe.jsx)(z.a,Object(j.a)({label:"Gastos"},Fe(1)))]}),Object(Oe.jsx)(Ne,{value:i,index:0,children:Object(Oe.jsx)(_.a,{children:t.income.map((function(e){return Object(Oe.jsxs)(r.a.Fragment,{children:[Object(Oe.jsx)(xe,{iconAvatar:Me(e.category),textPrimary:"".concat(e.description),textSecondary:"".concat(he(e.amount,"USD",2)," - ").concat(e.date),iconAction:Object(Oe.jsx)(q.a,{}),callback:function(){return V("income",e.id)}}),Object(Oe.jsx)(L.a,{})]},e.id)}))})}),Object(Oe.jsx)(Ne,{value:i,index:1,children:Object(Oe.jsx)(_.a,{children:t.expenses.map((function(e){return Object(Oe.jsxs)(r.a.Fragment,{children:[Object(Oe.jsx)(xe,{iconAvatar:Re(e.category),textPrimary:"".concat(e.description),textSecondary:"".concat(he(e.amount,"USD",2)," - ").concat(e.date),iconAction:Object(Oe.jsx)(q.a,{}),callback:function(){return V("expenses",e.id)}}),Object(Oe.jsx)(L.a,{})]},e.id)}))})})]})]})})})}),Object(Oe.jsx)(Be,{open:v,onOpen:P,onClose:function(){y(!1)},type:T})]})})),ze=a(100),_e=Object(ze.a)(),Le=a(203),Pe=a(204),We=a(101),Ue=a.n(We),He=a(102),qe=a.n(He),Ke=Object(P.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function Ve(){var e=Ke(),t=r.a.useState(!0),a=Object(k.a)(t,2),n=a[0],c=(a[1],r.a.useState(null)),i=Object(k.a)(c,2),o=i[0],s=i[1],l=Boolean(o),d=function(){s(null)};return Object(Oe.jsx)("div",{className:e.root,children:Object(Oe.jsx)(Le.a,{position:"static",children:Object(Oe.jsxs)(Pe.a,{children:[Object(Oe.jsx)(F.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(Oe.jsx)(Ue.a,{})}),Object(Oe.jsx)(U.a,{variant:"h6",className:e.title,children:"FinanzApp"}),n&&Object(Oe.jsxs)("div",{children:[Object(Oe.jsx)(F.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit",children:Object(Oe.jsx)(qe.a,{})}),Object(Oe.jsxs)(M.a,{id:"menu-appbar",anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:d,children:[Object(Oe.jsx)(R.a,{onClick:d,children:"Profile"}),Object(Oe.jsx)(R.a,{onClick:d,children:"My account"})]})]})]})})})}var Je=a(103),Xe=a.n(Je),Ze=r.a.forwardRef((function(e,t){return Object(Oe.jsx)(ye.a,Object(j.a)({direction:"up",ref:t},e))}));var Qe=Object(l.b)((function(e){return{dataSuccessDialog:e.global.dataSuccessDialog}}))((function(e){var t=e.dataSuccessDialog,a=t.open,n=t.title,r=t.description,c=t.fnSuccess;return Object(Oe.jsxs)(ve.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,TransitionComponent:Ze,open:a,onClose:c,"aria-labelledby":"responsive-dialog-title",children:[Object(Oe.jsxs)(Se.a,{style:{textAlign:"center"},children:[Object(Oe.jsx)(Xe.a,{style:{color:"#5db35d",fontSize:"3rem"}}),Object(Oe.jsx)(U.a,{variant:"h6",style:{color:"#5db35d"},children:Object(Oe.jsx)("b",{children:n})}),Object(Oe.jsx)(Ee.a,{style:{marginTop:"12px"},children:Object(Oe.jsx)("b",{children:r})})]}),Object(Oe.jsx)(Ce.a,{style:{justifyContent:"center",marginBottom:"10px"},children:Object(Oe.jsx)(ge.a,{onClick:function(){var t=e.dispatch,a=e.dataSuccessDialog;t(m(Object(j.a)(Object(j.a)({},a),{},{open:!1,fnSuccess:function(){}}))),c()},variant:"contained",fullWidth:!0,style:{backgroundColor:"#5db35d",color:"#fff"},children:"Continuar"})})]})})),Ye=a(104),$e=a.n(Ye),et=r.a.forwardRef((function(e,t){return Object(Oe.jsx)(ye.a,Object(j.a)({direction:"up",ref:t},e))}));var tt=Object(l.b)((function(e){return{dataErrorDialog:e.global.dataErrorDialog}}))((function(e){var t=e.dataErrorDialog,a=t.open,n=t.title,r=t.description,c=t.fnError;return Object(Oe.jsxs)(ve.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,TransitionComponent:et,open:a,onClose:c,"aria-labelledby":"responsive-dialog-title",children:[Object(Oe.jsxs)(Se.a,{style:{textAlign:"center"},children:[Object(Oe.jsx)($e.a,{style:{color:"#e86039",fontSize:"3rem"}}),Object(Oe.jsx)(U.a,{variant:"h6",style:{color:"#e86039"},children:Object(Oe.jsx)("b",{children:n})}),Object(Oe.jsx)(Ee.a,{style:{marginTop:"12px"},children:Object(Oe.jsx)("b",{children:r})})]}),Object(Oe.jsx)(Ce.a,{style:{justifyContent:"center",marginBottom:"10px"},children:Object(Oe.jsx)(ge.a,{onClick:function(){var t=e.dispatch,a=e.dataErrorDialog;t(f(Object(j.a)(Object(j.a)({},a),{},{open:!1,fnError:function(){}}))),c()},variant:"contained",fullWidth:!0,style:{backgroundColor:"#e86039",color:"#fff"},children:"OK"})})]})}));var at=function(){return Object(Oe.jsxs)(Oe.Fragment,{children:[Object(Oe.jsx)("header",{style:{position:"fixed",width:"100%"},children:Object(Oe.jsx)(Ve,{})}),Object(Oe.jsxs)(l.a,{store:S,children:[Object(Oe.jsx)(o.a,{basename:"/finanzapp",history:_e,children:Object(Oe.jsx)(s.c,{children:Object(Oe.jsx)(s.a,{path:"/",exact:!0,component:Ge})})}),Object(Oe.jsx)(Qe,{}),Object(Oe.jsx)(tt,{})]})]})},nt=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,212)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(Oe.jsx)(at,{}),document.getElementById("root")),nt()}},[[136,1,2]]]);
//# sourceMappingURL=main.4b2c5a73.chunk.js.map