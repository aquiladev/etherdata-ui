(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5477:function(e,t,a){e.exports=a(5800)},5492:function(e,t,a){},5800:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(36),c=a.n(i),s=a(244),l=a.n(s),o=a(257),u=a(107),m=a.n(u),p=a(37),d=a(5805),g=(a(5492),a(246)),f=a.n(g);var h=a(29),v=a(247),E=a(34),b=a(7),O=a(9),j=a.n(O),y=a(22),k=a(25),w=a(27),F=a(21),T=a(26),N=a(258),x=function(e){function t(e,a,n){var r;return Object(k.a)(this,t),(r=Object(w.a)(this,Object(F.a)(t).call(this))).message=e,r.details=a,r.code=n,r}return Object(T.a)(t,e),t}(Object(N.a)(Error));function C(e){if(e.response){var t=e.response.data&&e.response.data.message||"Unknown Error",a=e.response.data&&e.response.data.details||[];a=a.reduce(function(e,t){return e[t.field]=t.message,e},{});var n=e.response.data&&e.response.data.code||void 0;throw new x(t,a,n)}throw e}function S(e,t){return I.apply(this,arguments)}function I(){return(I=Object(y.a)(j.a.mark(function e(t,a){var n,r;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.get("/api/v0.1/blocks/stat?filter=".concat(a));case 3:return n=e.sent,r=n.data,e.abrupt("return",r||[]);case 8:e.prev=8,e.t0=e.catch(0),C(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}))).apply(this,arguments)}var P,B="BLOCKS_STAT_REQUEST",_="BLOCKS_STAT_RECEIVE",A="BLOCKS_STAT_FILTER_MUTATE";function L(){return function(){var e=Object(y.a)(j.a.mark(function e(t,a,n){var r,i,c,s;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a(),i=r.blocks,c=i.stat.filter,i.stat[c].isFetching||i.stat[c].didInvalidate){e.next=4;break}return e.abrupt("return");case 4:return t({type:B,filter:c}),e.next=7,S(n,c);case 7:s=e.sent,t({type:_,filter:c,items:s});case 9:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}()}var R=0,M=30,K={stat:(P={},Object(b.a)(P,R,{isFetching:!1,didInvalidate:!0,items:[]}),Object(b.a)(P,M,{isFetching:!1,didInvalidate:!0,items:[]}),Object(b.a)(P,"filter",M),P)};function D(e){return U.apply(this,arguments)}function U(){return(U=Object(y.a)(j.a.mark(function e(t){var a,n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.get("/api/v0.1/contracts/obsolescence");case 3:return a=e.sent,n=a.data,e.abrupt("return",n||[]);case 8:e.prev=8,e.t0=e.catch(0),C(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}))).apply(this,arguments)}function z(e){return W.apply(this,arguments)}function W(){return(W=Object(y.a)(j.a.mark(function e(t){var a,n;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.get("/api/v0.1/contracts/deployment");case 3:return a=e.sent,n=a.data,e.abrupt("return",n||[]);case 8:e.prev=8,e.t0=e.catch(0),C(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}))).apply(this,arguments)}var G="CONTRACTS_OBSOLESCENCE_REQUEST",J="CONTRACTS_OBSOLESCENCE_RECEIVE",Y="CONTRACTS_DEPLOYMENTS_REQUEST",Q="CONTRACTS_DEPLOYMENTS_RECEIVE";var V={obsolescence:{isFetching:!1,didInvalidate:!0,items:[]},deployments:{isFetching:!1,didInvalidate:!0,items:[]}};function H(e,t){return $.apply(this,arguments)}function $(){return($=Object(y.a)(j.a.mark(function e(t,a){var n,r;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.get("/api/v0.1/tokens/usage?filter=".concat(a));case 3:return n=e.sent,r=n.data,e.abrupt("return",r||[]);case 8:e.prev=8,e.t0=e.catch(0),C(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}))).apply(this,arguments)}var q,X="TOKENS_USAGE_REQUEST",Z="TOKENS_USAGE_RECEIVE",ee="TOKENS_USAGE_FILTER_MUTATE";function te(){return function(){var e=Object(y.a)(j.a.mark(function e(t,a,n){var r,i,c,s;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a(),i=r.tokens,c=i.usage.filter,i.usage[c].isFetching||i.usage[c].didInvalidate){e.next=4;break}return e.abrupt("return");case 4:return t({type:X,filter:c}),e.next=7,H(n,c);case 7:s=e.sent,t({type:Z,filter:c,items:s});case 9:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}()}var ae=0,ne=30,re=365,ie={usage:(q={},Object(b.a)(q,ae,{isFetching:!1,didInvalidate:!0,items:[]}),Object(b.a)(q,ne,{isFetching:!1,didInvalidate:!0,items:[]}),Object(b.a)(q,re,{isFetching:!1,didInvalidate:!0,items:[]}),Object(b.a)(q,"filter",ne),q)};function ce(e,t){return se.apply(this,arguments)}function se(){return(se=Object(y.a)(j.a.mark(function e(t,a){var n,r;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.get("/api/v0.1/miners/stat?filter=".concat(a));case 3:return n=e.sent,r=n.data,e.abrupt("return",r||[]);case 8:e.prev=8,e.t0=e.catch(0),C(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}))).apply(this,arguments)}var le,oe="MINERS_STAT_REQUEST",ue="MINERS_STAT_RECEIVE",me="MINERS_STAT_FILTER_MUTATE";function pe(){return function(){var e=Object(y.a)(j.a.mark(function e(t,a,n){var r,i,c,s;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=a(),i=r.miners,c=i.stat.filter,i.stat[c].isFetching||i.stat[c].didInvalidate){e.next=4;break}return e.abrupt("return");case 4:return t({type:oe,filter:c}),e.next=7,ce(n,c);case 7:s=e.sent,t({type:ue,filter:c,items:s});case 9:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}()}var de=0,ge=30,fe=365,he={stat:(le={},Object(b.a)(le,de,{isFetching:!1,didInvalidate:!0,items:[]}),Object(b.a)(le,ge,{isFetching:!1,didInvalidate:!0,items:[]}),Object(b.a)(le,fe,{isFetching:!1,didInvalidate:!0,items:[]}),Object(b.a)(le,"filter",ge),le)};var ve=Object(h.c)({blocks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object.assign({},e,{stat:Object(E.a)({},e.stat,Object(b.a)({},t.filter,{isFetching:!0,didInvalidate:!1}))});case _:return Object.assign({},e,{stat:Object(E.a)({},e.stat,Object(b.a)({},t.filter,{isFetching:!1,didInvalidate:!1,items:t.items}))});case A:return Object.assign({},e,{stat:Object(E.a)({},e.stat,{filter:t.value})});default:return e}},contracts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object.assign({},e,{obsolescence:{isFetching:!0,didInvalidate:!1}});case J:return Object.assign({},e,{obsolescence:{isFetching:!1,didInvalidate:!1,items:t.contracts}});case Y:return Object.assign({},e,{deployments:{isFetching:!0,didInvalidate:!1}});case Q:return Object.assign({},e,{deployments:{isFetching:!1,didInvalidate:!1,items:t.contracts}});default:return e}},tokens:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object.assign({},e,{usage:Object(E.a)({},e.usage,Object(b.a)({},t.filter,{isFetching:!0,didInvalidate:!1}))});case Z:return Object.assign({},e,{usage:Object(E.a)({},e.usage,Object(b.a)({},t.filter,{isFetching:!1,didInvalidate:!1,items:t.items}))});case ee:return Object.assign({},e,{usage:Object(E.a)({},e.usage,{filter:t.value})});default:return e}},miners:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return Object.assign({},e,{stat:Object(E.a)({},e.stat,Object(b.a)({},t.filter,{isFetching:!0,didInvalidate:!1}))});case ue:return Object.assign({},e,{stat:Object(E.a)({},e.stat,Object(b.a)({},t.filter,{isFetching:!1,didInvalidate:!1,items:t.items}))});case me:return Object.assign({},e,{stat:Object(E.a)({},e.stat,{filter:t.value})});default:return e}}});var Ee=a(5803),be=a(5804),Oe=a(3),je=a.n(Oe),ye=a(248),ke=a.n(ye),we=a(250),Fe=a.n(we),Te=a(150),Ne=a.n(Te),xe=a(23),Ce=a.n(xe);var Se=je()(function(e){return{appBar:{position:"relative"}}})(function(e){var t=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ke.a,null),r.a.createElement(Fe.a,{position:"absolute",color:"default",className:t.appBar},r.a.createElement(Ne.a,null,r.a.createElement(Ce.a,{variant:"h6",color:"inherit",noWrap:!0},"Etherdata"))))}),Ie=a(68),Pe=a.n(Ie);var Be=je()(function(e){return{footer:{textAlign:"center",paddingTop:3*e.spacing.unit,paddingBottom:2*e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.footer},r.a.createElement("div",null,"Etherdata is a Analytics Platform for Ethereum"),r.a.createElement("div",null,r.a.createElement("span",null,"\xa9")," ",(new Date).getFullYear()," Okami Lab | ",r.a.createElement(Pe.a,{href:"https://github.com/okamilab/etherdata-ui"},"GitHub")))});var _e=je()(function(e){return{layout:Object(b.a)({width:"auto",marginLeft:2*e.spacing.unit,marginRight:2*e.spacing.unit},e.breakpoints.up(600+2*e.spacing.unit*2),{width:1e3,marginLeft:"auto",marginRight:"auto"})}})(function(e){var t=e.classes,a=e.children;return r.a.createElement(n.Fragment,null,r.a.createElement(Se,null),r.a.createElement("main",{className:t.layout},a),r.a.createElement(Be,null))}),Ae=a(33),Le=a.n(Ae),Re=a(48),Me=a.n(Re),Ke=a(5802),De=a(31),Ue=a(45),ze=a(70),We=a.n(ze),Ge=a(55),Je=a(69),Ye=a.n(Je),Qe=a(109),Ve=a.n(Qe),He=a(85),$e=a.n(He),qe=a(53),Xe=a.n(qe),Ze=a(54),et=a.n(Ze),tt=a(111),at=a.n(tt),nt=a(58),rt=a.n(nt),it=a(84),ct=a.n(it),st=a(108),lt=a.n(st);function ot(e){return lt()(e).format("MMM D YY")}function ut(e){return e}var mt=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(w.a)(this,Object(F.a)(t).call(this,e))).state={tabs:[]},a.selectTab=a.selectTab.bind(Object(Ge.a)(a)),a}return Object(T.a)(t,e),Object(De.a)(t,[{key:"componentDidMount",value:function(){this.setState({tabs:[{id:0,title:"Blocks",dataKey:"c",selected:!0,color:"#DB4437",format:ut},{id:1,title:"Difficulty",dataKey:"a_d",selected:!1,color:"#F6BF26",format:function(e){return e+"G"}},{id:2,title:"Transactions",dataKey:"tx_c",selected:!1,color:"#0F9D58",format:function(e){return e/1e3+"K"}},{id:3,title:"Gas",dataKey:"g_u",selected:!1,color:"#1A73E8",format:function(e){return e/1e9+"B"}},{id:4,title:"Size",dataKey:"s",selected:!1,color:"#9E9E9E",format:function(e){return(e/Math.pow(1024,2)).toFixed(1)+"M"}}]})}},{key:"selectTab",value:function(e){var t=this.state.tabs;this.setState({tabs:t.map(function(t){return t.id===e?Object(E.a)({},t,{selected:!t.selected}):t})})}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.items;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a.panel},this.state.tabs.map(function(t){var n=t.selected?{background:t.color}:null;return r.a.createElement("div",{key:t.id,className:a.tab,style:n,onClick:function(){e.selectTab(t.id)}},t.title)})),r.a.createElement(Ye.a,{width:"99%",height:320},r.a.createElement(Ve.a,{data:n,margin:{bottom:20}},r.a.createElement(Xe.a,{dataKey:"d",tickFormatter:ot,height:20,style:{fontSize:10}}),this.state.tabs.map(function(e){return e.selected?r.a.createElement(et.a,{key:e.id,yAxisId:e.id,orientation:"left",stroke:e.color,tickFormatter:e.format,width:40,style:{fontSize:10}}):null}),r.a.createElement(at.a,{vertical:!1,strokeDasharray:"3 3"}),r.a.createElement(rt.a,null),this.state.tabs.map(function(e){return e.selected?r.a.createElement($e.a,{key:e.id,type:"monotone",dataKey:e.dataKey,dot:{r:0},stroke:e.color,yAxisId:e.id}):null}),r.a.createElement(ct.a,null))))}}]),t}(n.Component),pt=je()(function(e){var t;return{panel:{marginBottom:25,display:"flex",flexDirection:"row"},tab:(t={cursor:"pointer",padding:e.spacing.unit,opacity:.7},Object(b.a)(t,e.breakpoints.up(500+3*e.spacing.unit*2),{padding:2*e.spacing.unit}),Object(b.a)(t,e.breakpoints.up(700+3*e.spacing.unit*2),{padding:3*e.spacing.unit}),t)}})(mt),dt=a(152),gt=a.n(dt),ft=a(151),ht=a.n(ft);var vt=function(e){var t=e.options,a=e.filter,n=e.onChange;return r.a.createElement(ht.a,{value:a,onChange:function(e){return n(+e.target.value)},name:"filter"},t.map(function(e){return r.a.createElement(gt.a,{value:e.key,key:e.key},e.value)}))},Et=function(e){function t(){return Object(k.a)(this,t),Object(w.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(De.a)(t,[{key:"render",value:function(){var e=this.props,t=e.dispatch,a=e.classes,n=e.filter,i=e.items;if(e.isFetching)return r.a.createElement("div",null,"Loading...");if(!i||0===i.length)return r.a.createElement("div",null,"No data");return r.a.createElement(r.a.Fragment,null,r.a.createElement(pt,{items:i}),r.a.createElement(We.a,{className:a.divider}),r.a.createElement(vt,{options:[{key:30,value:"Last 30 days"},{key:0,value:"All time"}],filter:n,onChange:function(e){t(function(e){return function(){var t=Object(y.a)(j.a.mark(function t(a){return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a({type:A,value:e}),a(L());case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}(e))}}))}}]),t}(n.Component),bt=Object(h.d)(Object(p.b)(function(e){var t=(e.blocks.stat||{filter:30}).filter,a=e.blocks.stat[t]||{isFetching:!1,items:[]},n=a.isFetching,r=void 0===n||n,i=a.items;return{filter:t,items:void 0===i?[]:i,isFetching:r}}),Object(Ue.withJob)({work:function(e){return(0,e.dispatch)(L())},LoadingComponent:function(){return r.a.createElement("div",null,"Loading...")},error:function(){return r.a.createElement("p",null,"Error")}}),je()(function(e){return{divider:{marginBottom:e.spacing.unit}}}))(Et);var Ot=je()(function(e){return{paper:Object(b.a)({marginTop:3*e.spacing.unit,marginBottom:3*e.spacing.unit,padding:2*e.spacing.unit},e.breakpoints.up(600+3*e.spacing.unit*2),{marginTop:e.spacing.unit,marginBottom:4*e.spacing.unit,padding:3*e.spacing.unit}),paperTop:Object(b.a)({},e.breakpoints.up(600+3*e.spacing.unit*2),{marginTop:4*e.spacing.unit,marginBottom:4*e.spacing.unit,padding:3*e.spacing.unit}),link:{color:"inherit",textDecoration:"none",padding:"40px 0"}}})(function(e){var t=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Le.a,{className:t.paper+" "+t.paperTop},r.a.createElement(bt,null)),r.a.createElement(Me.a,{container:!0,spacing:24},r.a.createElement(Me.a,{item:!0,xs:6,sm:4},r.a.createElement(Ke.a,{to:"/contracts",className:t.link},r.a.createElement(Le.a,{className:t.paper},r.a.createElement(Ce.a,{variant:"h6",color:"inherit",noWrap:!0},"Contracts")))),r.a.createElement(Me.a,{item:!0,xs:6,sm:4},r.a.createElement(Ke.a,{to:"/tokens",className:t.link},r.a.createElement(Le.a,{className:t.paper},r.a.createElement(Ce.a,{variant:"h6",color:"inherit",noWrap:!0},"Tokens")))),r.a.createElement(Me.a,{item:!0,xs:6,sm:4},r.a.createElement(Ke.a,{to:"/miners",className:t.link},r.a.createElement(Le.a,{className:t.paper},r.a.createElement(Ce.a,{variant:"h6",color:"inherit",noWrap:!0},"Miners"))))))}),jt=a(253),yt=a.n(jt),kt=a(254);var wt=je()(function(e){return{nav:{marginTop:4*e.spacing.unit,marginBottom:2*e.spacing.unit},link:{color:"inherit",textDecoration:"none",padding:"40px 0"}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.nav},r.a.createElement(Ke.a,{to:"/",className:t.link},r.a.createElement(yt.a,{variant:"contained"},r.a.createElement(kt.a,null),"Go Home")))}),Ft=a(255),Tt=a.n(Ft),Nt=a(153),xt=a.n(Nt);function Ct(e){return e/1e3+"K"}function St(e){var t=e.classes,a=e.active,n=e.label,i=e.payload;return a&&n?r.a.createElement("div",{className:t.tooltip},"".concat(n," week(s): ").concat(i[0].value)):null}var It=function(e){function t(){return Object(k.a)(this,t),Object(w.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(De.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.items;if(!a||0===a.length)return r.a.createElement("div",null,"No data");var n=a.map(function(e,t){return{w:t+1,c:e}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce.a,{variant:"h6",color:"inherit",noWrap:!0},"Contract obsolescence"),r.a.createElement(Ce.a,{variant:"subtitle2",className:t.subtitle+" "+t.mb2},"The chart shows how long smart contracts are used. Contracts with at least one transaction are in count."),r.a.createElement(Ye.a,{width:"99%",height:420},r.a.createElement(Tt.a,{data:n,margin:{bottom:20}},r.a.createElement(Xe.a,{dataKey:"w",height:20,style:{fontSize:10}}),r.a.createElement(et.a,{tickFormatter:Ct,width:40,style:{fontSize:10}}),r.a.createElement(xt.a,{dataKey:"c",fill:"#4285F4"}),r.a.createElement(rt.a,{content:r.a.createElement(St,{classes:t})}))))}}]),t}(n.Component),Pt=Object(h.d)(Object(p.b)(function(e){var t=e.contracts.obsolescence||{isFetching:!0,items:[]};return{isFetching:t.isFetching,items:t.items}}),Object(Ue.withJob)({work:function(e){return(0,e.dispatch)(function(){var e=Object(y.a)(j.a.mark(function e(t,a,n){var r;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:G}),e.next=3,D(n);case 3:r=e.sent,t({type:J,contracts:r});case 5:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}())},LoadingComponent:function(){return r.a.createElement("div",null,"Loading...")},error:function(){return r.a.createElement("p",null,"Error")}}),je()(function(e){return{tooltip:{background:"#fff",border:"1px solid #e0e0e0",padding:10},subtitle:{color:"#0000008a",fontSize:14},mb2:{marginBottom:2*e.spacing.unit}}}))(It),Bt=a(156),_t=a.n(Bt);function At(e){return lt()(e).format("MMM D YY")}function Lt(e){return e/1e3+"K"}var Rt=function(e){function t(){return Object(k.a)(this,t),Object(w.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(De.a)(t,[{key:"render",value:function(){var e=this.props,t=e.cx,a=e.cy,n=e.payload;return r.a.createElement("circle",{cx:t,cy:a,r:1,stroke:n.l,fill:n.l})}}]),t}(r.a.Component),Mt=function(e){function t(){return Object(k.a)(this,t),Object(w.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(De.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.data;return a&&0!==a.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce.a,{variant:"h6",color:"inherit",noWrap:!0},"Contract deployments"),r.a.createElement(Ce.a,{variant:"subtitle2",className:t.subtitle+" "+t.mb2},"The chart shows amount of deployed contracts weekly. It displays ",r.a.createElement("span",{className:t.anomaly},"anomalies")," using Iglewicz and Hoaglin's method."),r.a.createElement(Ye.a,{width:"99%",height:320},r.a.createElement(Ve.a,{data:a,margin:{bottom:20}},r.a.createElement(Xe.a,{dataKey:"d",tickFormatter:At,height:20,style:{fontSize:10}}),r.a.createElement(et.a,{tickFormatter:Lt,orientation:"left",stroke:"#9E9E9E",width:40,style:{fontSize:10}}),r.a.createElement(at.a,{vertical:!1,strokeDasharray:"3 3"}),r.a.createElement(rt.a,null),r.a.createElement($e.a,{type:"monotone",dataKey:"c",stroke:"#ccc",isAnimationActive:!1,dot:r.a.createElement(Rt,null)}),r.a.createElement(ct.a,null)))):r.a.createElement("div",null,"No data")}}]),t}(n.Component),Kt=je()(function(e){return{subtitle:{color:"#0000008a",fontSize:14},mb2:{marginBottom:2*e.spacing.unit},anomaly:{color:"#f00"}}})(Mt),Dt=function(e){function t(){return Object(k.a)(this,t),Object(w.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(De.a)(t,[{key:"render",value:function(){var e=this.props.data;if(!e||!e.length)return r.a.createElement("div",null,"N/A");var t=e.map(function(t,a){return a>0?100*(t-e[a-1])/e[a-1]:0}).reduce(function(e,t){return e+t});return r.a.createElement(r.a.Fragment,null,parseFloat(t/e.length).toFixed(2),"%")}}]),t}(n.Component),Ut=function(e){function t(){return Object(k.a)(this,t),Object(w.a)(this,Object(F.a)(t).apply(this,arguments))}return Object(T.a)(t,e),Object(De.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.items;if(!a||0===a.length)return r.a.createElement("div",null,"No data");var n=_t.a.indexOfOutliers(a.map(function(e){return e.c}),_t.a.outlierMethod.MAD,2),i=a.map(function(e,t){var a=n.includes(t)?"#f00":"#222";return Object(E.a)({},e,{l:a})}),c=a.filter(function(e,t){return!n.includes(t)}).map(function(e){return e.c});return r.a.createElement(Me.a,{container:!0,spacing:24},r.a.createElement(Me.a,{item:!0,xs:12,sm:9},r.a.createElement(Le.a,{className:t.paper},r.a.createElement(Kt,{data:i}))),r.a.createElement(Me.a,{item:!0,xs:12,sm:3},r.a.createElement(Le.a,{className:t.paper},r.a.createElement(Ce.a,{variant:"h6",color:"inherit",noWrap:!0},"Growth Rate"),r.a.createElement("div",{className:t.block},r.a.createElement("h3",{className:t.anomaly},r.a.createElement(Dt,{data:a.map(function(e){return e.c}),className:t.anomaly})),r.a.createElement("div",{className:t.subtitle},"Average growth rate including anomalies")),r.a.createElement("div",{className:t.block},r.a.createElement("h3",null,r.a.createElement(Dt,{data:c})),r.a.createElement("div",{className:t.subtitle},"Average growth rate")))))}}]),t}(n.Component),zt=Object(h.d)(Object(p.b)(function(e){var t=e.contracts.deployments||{isFetching:!0,items:[]};return{isFetching:t.isFetching,items:t.items}}),Object(Ue.withJob)({work:function(e){return(0,e.dispatch)(function(){var e=Object(y.a)(j.a.mark(function e(t,a,n){var r;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:Y}),e.next=3,z(n);case 3:r=e.sent,t({type:Q,contracts:r});case 5:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}())},LoadingComponent:function(){return r.a.createElement("div",null,"Loading...")},error:function(){return r.a.createElement("p",null,"Error")}}),je()(function(e){return{paper:Object(b.a)({marginTop:3*e.spacing.unit,marginBottom:3*e.spacing.unit,padding:2*e.spacing.unit},e.breakpoints.up(600+3*e.spacing.unit*2),{marginTop:e.spacing.unit,marginBottom:4*e.spacing.unit,padding:3*e.spacing.unit}),anomaly:{color:"#f00"},block:{marginBottom:3*e.spacing.unit,textAlign:"center"}}}))(Ut);var Wt=je()(function(e){return{paper:Object(b.a)({marginTop:3*e.spacing.unit,marginBottom:3*e.spacing.unit,padding:2*e.spacing.unit},e.breakpoints.up(600+3*e.spacing.unit*2),{marginTop:4*e.spacing.unit,marginBottom:4*e.spacing.unit,padding:3*e.spacing.unit})}})(function(e){var t=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(wt,null),r.a.createElement(Le.a,{className:t.paper},r.a.createElement(Pt,null)),r.a.createElement(zt,null))}),Gt=a(112),Jt=a.n(Gt),Yt=a(114),Qt=a.n(Yt),Vt=a(39),Ht=a.n(Vt),$t=a(113),qt=a.n($t),Xt=a(72),Zt=a.n(Xt),ea=a(115),ta=a.n(ea),aa=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(w.a)(this,Object(F.a)(t).call(this,e))).handleChangePage=function(e,t){a.setState({page:t})},a.state={page:0,rowsPerPage:10},a.handleChangePage=a.handleChangePage.bind(Object(Ge.a)(a)),a}return Object(T.a)(t,e),Object(De.a)(t,[{key:"render",value:function(){var e=this.props,t=e.dispatch,a=e.isFetching,n=e.items,i=e.classes,c=e.filter,s=this.state,l=s.page,o=s.rowsPerPage;return a?r.a.createElement("div",null,"Loading..."):n&&0!==n.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce.a,{variant:"h6",color:"inherit",noWrap:!0},"Most used tokens"),r.a.createElement(Jt.a,null,r.a.createElement(qt.a,null,r.a.createElement(Zt.a,null,r.a.createElement(Ht.a,{className:i.cell},"Token"),r.a.createElement(Ht.a,{className:i.cell},"Transfers"))),r.a.createElement(Qt.a,null,n.slice(l*o,l*o+o).map(function(e,t){return r.a.createElement(Zt.a,{key:t,className:i.row},r.a.createElement(Ht.a,{component:"th",scope:"row",className:i.cell},r.a.createElement(Pe.a,{href:"https://etherscan.io/address/"+e.a,color:"inherit",target:"_blank",rel:"noopener"},e.n||e.a)),r.a.createElement(Ht.a,{className:i.cell},e.tf_c))}))),r.a.createElement(ta.a,{component:"div",count:n.length,rowsPerPage:o,rowsPerPageOptions:[o],page:l,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage}),r.a.createElement(We.a,{className:i.divider}),r.a.createElement(vt,{options:[{key:30,value:"Last 30 days"},{key:365,value:"Last year"},{key:0,value:"All time"}],filter:c,onChange:function(e){t(function(e){return function(){var t=Object(y.a)(j.a.mark(function t(a){return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a({type:ee,value:e}),a(te());case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}(e))}})):r.a.createElement("div",null,"No data")}}]),t}(n.Component),na=Object(h.d)(Object(p.b)(function(e){var t=(e.tokens.usage||{filter:30}).filter,a=e.tokens.usage[t]||{isFetching:!1,items:[]},n=a.isFetching,r=void 0===n||n,i=a.items;return{filter:t,items:void 0===i?[]:i,isFetching:r}}),Object(Ue.withJob)({work:function(e){return(0,e.dispatch)(te())},LoadingComponent:function(){return r.a.createElement("div",null,"Loading...")},error:function(){return r.a.createElement("p",null,"Error")}}),je()(function(e){return{row:{height:36},cell:{padding:0},divider:{marginBottom:e.spacing.unit}}}))(aa);var ra=je()(function(e){return{paper:Object(b.a)({marginTop:3*e.spacing.unit,marginBottom:3*e.spacing.unit,padding:2*e.spacing.unit},e.breakpoints.up(600+3*e.spacing.unit*2),{marginTop:e.spacing.unit,marginBottom:4*e.spacing.unit,padding:3*e.spacing.unit}),paperTop:Object(b.a)({},e.breakpoints.up(600+3*e.spacing.unit*2),{marginTop:4*e.spacing.unit,marginBottom:4*e.spacing.unit,padding:3*e.spacing.unit})}})(function(e){var t=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(wt,null),r.a.createElement(Le.a,{className:t.paper+" "+t.paperTop},r.a.createElement(na,null)))}),ia=function(e){function t(e){var a;return Object(k.a)(this,t),(a=Object(w.a)(this,Object(F.a)(t).call(this,e))).handleChangePage=function(e,t){a.setState({page:t})},a.state={page:0,rowsPerPage:10},a.handleChangePage=a.handleChangePage.bind(Object(Ge.a)(a)),a}return Object(T.a)(t,e),Object(De.a)(t,[{key:"render",value:function(){var e=this.props,t=e.dispatch,a=e.isFetching,n=e.items,i=e.classes,c=e.filter,s=this.state,l=s.page,o=s.rowsPerPage;return a?r.a.createElement("div",null,"Loading..."):n&&0!==n.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce.a,{variant:"h6",color:"inherit",noWrap:!0},"Top miners"),r.a.createElement(Jt.a,null,r.a.createElement(qt.a,null,r.a.createElement(Zt.a,null,r.a.createElement(Ht.a,{className:i.cell},"Miner"),r.a.createElement(Ht.a,{className:i.cell},"Blocks"))),r.a.createElement(Qt.a,null,n.slice(l*o,l*o+o).map(function(e,t){return r.a.createElement(Zt.a,{key:t,className:i.row},r.a.createElement(Ht.a,{component:"th",scope:"row",className:i.cell},r.a.createElement(Pe.a,{href:"https://etherscan.io/address/"+e.a,color:"inherit",target:"_blank",rel:"noopener"},e.a)),r.a.createElement(Ht.a,{className:i.cell},e.b))}))),r.a.createElement(ta.a,{component:"div",count:n.length,rowsPerPage:o,rowsPerPageOptions:[o],page:l,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage}),r.a.createElement(We.a,{className:i.divider}),r.a.createElement(vt,{options:[{key:30,value:"Last 30 days"},{key:365,value:"Last year"},{key:0,value:"All time"}],filter:c,onChange:function(e){t(function(e){return function(){var t=Object(y.a)(j.a.mark(function t(a){return j.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a({type:me,value:e}),a(pe());case 2:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}(e))}})):r.a.createElement("div",null,"No data")}}]),t}(n.Component),ca=Object(h.d)(Object(p.b)(function(e){var t=(e.miners.stat||{filter:30}).filter,a=e.miners.stat[t]||{isFetching:!1,items:[]},n=a.isFetching,r=void 0===n||n,i=a.items;return{filter:t,items:void 0===i?[]:i,isFetching:r}}),Object(Ue.withJob)({work:function(e){return(0,e.dispatch)(pe())},LoadingComponent:function(){return r.a.createElement("div",null,"Loading...")},error:function(){return r.a.createElement("p",null,"Error")}}),je()(function(e){return{row:{height:36},cell:{padding:0},divider:{marginBottom:e.spacing.unit}}}))(ia);var sa=je()(function(e){return{paper:Object(b.a)({marginTop:3*e.spacing.unit,marginBottom:3*e.spacing.unit,padding:2*e.spacing.unit},e.breakpoints.up(600+3*e.spacing.unit*2),{marginTop:4*e.spacing.unit,marginBottom:4*e.spacing.unit,padding:3*e.spacing.unit})}})(function(e){var t=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(wt,null),r.a.createElement(Le.a,{className:t.paper},r.a.createElement(ca,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.config();var la=function(e,t){var a=h.d,n=[v.a.withExtraArgument(t)],r=[h.a.apply(void 0,n)];return Object(h.e)(ve,e,a.apply(void 0,r))}({},f.a.create({baseURL:"https://ethertest-func.azurewebsites.net"}));c.a.render(r.a.createElement(o.AppContainer,null,r.a.createElement(d.a,null,r.a.createElement(u.HelmetProvider,null,r.a.createElement(p.a,{store:la},r.a.createElement(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{titleTemplate:"Etherdata - %s"}),r.a.createElement(_e,null,r.a.createElement(Ee.a,null,r.a.createElement(be.a,{exact:!0,path:"/",component:Ot}),r.a.createElement(be.a,{exact:!0,path:"/contracts",component:Wt}),r.a.createElement(be.a,{exact:!0,path:"/tokens",component:ra}),r.a.createElement(be.a,{exact:!0,path:"/miners",component:sa}))))},null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5477,1,2]]]);
//# sourceMappingURL=main.1d94a731.chunk.js.map