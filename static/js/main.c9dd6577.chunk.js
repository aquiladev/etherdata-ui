(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{235:function(e,t,a){e.exports=a(590)},240:function(e,t,a){},590:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(22),c=a.n(i),s=(a(240),a(51)),o=a(52),l=a(56),u=a(53),m=a(55),p=a(24),d=a(34),h=a(220),g=a.n(h),f=a(7),b=a.n(f),k=a(233),E=a.n(k),v=a(234),y=a.n(v),w=a(54),j=a.n(w),O=a(131),B=a.n(O),P=a(67),N=a.n(P),x=a(68),T=a.n(x),D=a(130),S=a.n(D),F=a(137),C=a.n(F),K=a(90),z=a.n(K),M=a(221),_=a(224),A=a.n(_),I=a(225),L=a.n(I),W=a(127),G=a.n(W),R=a(128),Y=a.n(R),J=a(129),q=a.n(J),H=a(228),$=a.n(H),Q=a(126),U=a.n(Q),V=a(132),X=a(222),Z=a.n(X);function ee(e){return Z()(e).format("MMM D YY")}function te(e){return e}var ae=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={tabs:[]},a.selectTab=a.selectTab.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({tabs:[{id:0,title:"Blocks",dataKey:"c",selected:!0,color:"#DB4437",format:te},{id:1,title:"Difficulty",dataKey:"a_d",selected:!1,color:"#F6BF26",format:function(e){return e+"G"}},{id:2,title:"Transactions",dataKey:"tx_c",selected:!1,color:"#0F9D58",format:function(e){return e/1e3+"K"}},{id:3,title:"Gas",dataKey:"g_u",selected:!1,color:"#1A73E8",format:function(e){return e/1e9+"B"}},{id:4,title:"Size",dataKey:"s",selected:!1,color:"#9E9E9E",format:function(e){return(e/Math.pow(1024,2)).toFixed(1)+"M"}}]})}},{key:"selectTab",value:function(e){var t=this.state.tabs;this.setState({tabs:t.map(function(t){return t.id!==e?t:Object(M.a)({},t,{selected:!t.selected})})})}},{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.data;return n&&0!==n.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(V.unstable_Box,{display:"flex",flexDirection:"row",className:a.box},this.state.tabs.map(function(t){var n=t.selected?{background:t.color}:null;return r.a.createElement(V.unstable_Box,{key:t.id,className:a.tab,style:n,onClick:function(){e.selectTab(t.id)}},t.title)})),r.a.createElement(A.a,{width:"99%",height:320},r.a.createElement(L.a,{data:n,margin:{bottom:20}},r.a.createElement(Y.a,{dataKey:"d",tickFormatter:ee,height:20,style:{fontSize:10}}),this.state.tabs.map(function(e){return e.selected?r.a.createElement(q.a,{key:e.id,yAxisId:e.id,orientation:"left",stroke:e.color,tickFormatter:e.format,width:40,style:{fontSize:10}}):null}),r.a.createElement($.a,{vertical:!1,strokeDasharray:"3 3"}),r.a.createElement(U.a,null),this.state.tabs.map(function(e){return e.selected?r.a.createElement(G.a,{key:e.id,type:"monotone",dataKey:e.dataKey,dot:{r:0},stroke:e.color,yAxisId:e.id}):null})))):r.a.createElement("div",null,"No data")}}]),t}(n.Component),ne=b()(function(e){var t;return{tab:(t={padding:e.spacing.unit,opacity:.7},Object(d.a)(t,e.breakpoints.up(500+3*e.spacing.unit*2),{padding:2*e.spacing.unit}),Object(d.a)(t,e.breakpoints.up(700+3*e.spacing.unit*2),{padding:3*e.spacing.unit}),t),box:{marginBottom:25}}})(ae),re=a(229),ie=a.n(re),ce=a(231),se=a.n(ce),oe=a(57),le=a.n(oe),ue=a(230),me=a.n(ue),pe=a(136),de=a.n(pe),he=a(232),ge=a.n(he),fe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChangePage=function(e,t){a.setState({page:t})},a.state={page:0,rowsPerPage:10},a.handleChangePage=a.handleChangePage.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.classes,n=this.state,i=n.page,c=n.rowsPerPage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie.a,null,r.a.createElement(me.a,null,r.a.createElement(de.a,null,r.a.createElement(le.a,{className:a.cell},"Token"),r.a.createElement(le.a,{className:a.cell},"Transfers"))),r.a.createElement(se.a,null,t.slice(i*c,i*c+c).map(function(e,t){return r.a.createElement(de.a,{key:t,className:a.row},r.a.createElement(le.a,{component:"th",scope:"row",className:a.cell},r.a.createElement(z.a,{href:"https://etherscan.io/address/"+e.a,color:"inherit",target:"_blank",rel:"noopener"},e.n||e.a)),r.a.createElement(le.a,{className:a.cell},e.tf_c))}))),r.a.createElement(ge.a,{component:"div",count:t.length,rowsPerPage:c,rowsPerPageOptions:[c],page:i,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage}))}}]),t}(n.Component),be=b()(function(e){return{row:{height:36},cell:{padding:0}}})(fe);g.a.config();var ke=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={blocks30:[],blocks:[],tokens30:[],tokens365:[],tokens:[],filter:30},a.filter=a.filter.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"init",value:function(){var e=this;fetch("".concat("https://ethertest.azurewebsites.net","/api/v0.1/blocks/stat30"),{mode:"cors"}).then(function(e){return e.json()}).then(function(t){e.setState({blocks30:t}),fetch("".concat("https://ethertest.azurewebsites.net","/api/v0.1/blocks/stat"),{mode:"cors"}).then(function(e){return e.json()}).then(function(t){return e.setState({blocks:t})})}),fetch("".concat("https://ethertest.azurewebsites.net","/api/v0.1/tokens/usage30"),{mode:"cors"}).then(function(e){return e.json()}).then(function(t){e.setState({tokens30:t}),fetch("".concat("https://ethertest.azurewebsites.net","/api/v0.1/tokens/usage365"),{mode:"cors"}).then(function(e){return e.json()}).then(function(t){return e.setState({tokens365:t})}),fetch("".concat("https://ethertest.azurewebsites.net","/api/v0.1/tokens/usage"),{mode:"cors"}).then(function(e){return e.json()}).then(function(t){return e.setState({tokens:t})})})}},{key:"componentDidMount",value:function(){this.init()}},{key:"filter",value:function(e){this.setState({filter:e.target.value})}},{key:"getBlocks",value:function(){var e=this.state,t=e.filter,a=e.blocks,n=e.blocks30;switch(t){case 0:case 365:var r=a;if(t){var i=new Date,c=(new Date).setDate(i.getDate()-t);r=a.filter(function(e){return new Date(e.d)>=c})}return r;default:return n}}},{key:"getTokens",value:function(){var e=this.state,t=e.filter,a=e.tokens,n=e.tokens30,r=e.tokens365;switch(t){case 0:return a;case 365:return r;default:return n}}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null),r.a.createElement(y.a,{position:"absolute",color:"default",className:e.appBar},r.a.createElement(B.a,null,r.a.createElement(N.a,{variant:"h6",color:"inherit",noWrap:!0},"Etherdata"))),r.a.createElement("main",{className:e.layout},r.a.createElement(j.a,{className:e.paper+" "+e.paperTop},r.a.createElement("span",{className:e.filter},"Filter"),r.a.createElement(S.a,{value:this.state.filter,onChange:this.filter,name:"filter"},r.a.createElement(T.a,{value:30},"Last 30 days"),r.a.createElement(T.a,{value:365},"Last year"),r.a.createElement(T.a,{value:0},"All time"))),r.a.createElement(j.a,{className:e.paper},r.a.createElement(ne,{data:this.getBlocks()})),r.a.createElement(C.a,{container:!0,spacing:24},r.a.createElement(C.a,{item:!0,xs:12,sm:6},r.a.createElement(j.a,{className:e.paper},r.a.createElement(N.a,{variant:"h6",color:"inherit",noWrap:!0},"Most used tokens"),r.a.createElement(be,{data:this.getTokens()}))))),r.a.createElement("div",{className:e.footer},r.a.createElement("div",null,"Etherdata is a Analytics Platform for Ethereum"),r.a.createElement("div",null,r.a.createElement("span",null,"\xa9")," ",(new Date).getFullYear()," Etherdata | ",r.a.createElement(z.a,{href:"https://github.com/aquiladev/etherdata-ui"},"GitHub"))))}}]),t}(n.Component),Ee=b()(function(e){return{appBar:{position:"relative"},layout:Object(d.a)({width:"auto",marginLeft:2*e.spacing.unit,marginRight:2*e.spacing.unit},e.breakpoints.up(600+2*e.spacing.unit*2),{width:1e3,marginLeft:"auto",marginRight:"auto"}),paper:Object(d.a)({marginTop:3*e.spacing.unit,marginBottom:3*e.spacing.unit,padding:2*e.spacing.unit},e.breakpoints.up(600+3*e.spacing.unit*2),{marginTop:e.spacing.unit,marginBottom:4*e.spacing.unit,padding:3*e.spacing.unit}),paperTop:Object(d.a)({},e.breakpoints.up(600+3*e.spacing.unit*2),{marginTop:4*e.spacing.unit,marginBottom:4*e.spacing.unit,padding:3*e.spacing.unit}),filter:{paddingRight:15},footer:{textAlign:"center",paddingTop:3*e.spacing.unit,paddingBottom:2*e.spacing.unit}}})(ke);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[235,2,1]]]);
//# sourceMappingURL=main.c9dd6577.chunk.js.map