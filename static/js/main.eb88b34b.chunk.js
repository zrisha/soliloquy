(this.webpackJsonpsoliloquy=this.webpackJsonpsoliloquy||[]).push([[0],{148:function(e,t,n){},233:function(e,t){},242:function(e,t,n){},257:function(e,t,n){},258:function(e,t,n){},259:function(e,t,n){},261:function(e,t,n){},281:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"startThinkaloud",(function(){return y})),n.d(r,"queryLines",(function(){return T})),n.d(r,"nextLine",(function(){return O})),n.d(r,"triggerThought",(function(){return k})),n.d(r,"hoverThought",(function(){return b})),n.d(r,"endThinkaloud",(function(){return E})),n.d(r,"setConfig",(function(){return L}));var o=n(133),a=n(85),i=n.n(a),s=(n(148),n(0)),l=n.n(s),u=n(6),c=n.n(u),h=n(144),d=n(17),p=n(18),m=n(20),v=n(19),f=n(52),g=n(288);function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:"START_THINKALOUD",lineNum:e}}function T(e){return function(t,n){for(var r=n().thinkaloud.lineOrder,o=0;o<e.length;o++)for(var a=e[o],i=o,s=0;s<a.order.length;s++)if(a.order[s]===r)return void t({type:"SELECT_LINE",activeLine:i});t({type:"END_THINKALOUD"}),g.a.success("Activity Complete")}}function O(e){return e&&"user"===e?{type:"USER_NEXT_LINE"}:{type:"NEXT_LINE"}}function k(e){return{type:"TRIGGER_THOUGHT",thought:e}}function b(e){return{type:"HOVER_THOUGHT",thought:e}}function E(){return{type:"END_THINKALOUD"}}function L(e){return{type:"SET_CONFIG",data:e}}var N=n(140),j=n.n(N),_=(n(242),function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).htmlToReact=new j.a.Parser,r}return Object(p.a)(n,[{key:"render",value:function(){var e;return e=this.props.colorTA?"word colorTA":this.props.colored?"word colored":"word",this.htmlToReact.parse('<span class="'+e+'">'+this.props.children+" </span>")}}]),n}(s.Component));n(81);var w=function(e){var t,n;return t="title"===e.className?l.a.createElement("h2",null,e.children):e.children.split(" ").map((function(e,t){return l.a.createElement(_,{key:t},e)})),e.offText&&(n=l.a.createElement("span",{style:{visibility:"hidden"}},e.offText)),l.a.createElement("li",{key:e.lineKey,className:e.className},n," ",t)},x=n(141),A=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={coloredWord:null,tooltip:null},r}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.mounted=!0,this.colorWord()}},{key:"componentWillUnmount",value:function(){this.mounted=!1,this.setState({coloredWord:null,tooltip:null})}},{key:"renderWords",value:function(e){return this.props.thought?this.launchThought(this.props.thought):this.props.words.map((function(t,n){var r=e===n;return l.a.createElement(_,{colorTA:r,key:"word_"+n},t)}))}},{key:"colorWord",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.mounted){var t=this.props,n=t.words,r=t.wordDelay,o=t.commaDelay;if(e+1>n.length)return this.setState({coloredWord:null}),void this.queryThought();var a=new RegExp("[,\u2013.\u2014;:]"),i=a.test(n[e])&&e!==n.length-1?r+o:r;this.setState({coloredWord:e}),setTimeout(function(){return this.colorWord(e+1)}.bind(this),i)}}},{key:"queryThought",value:function(){var e=this;if(this.props.dataTA.tooltips){var t,n=this.props.dataTA.tooltips,r=Object(x.a)(n);try{var o=function(){var n=t.value;if(n.lnOrder===e.props.dataTA.lineOrder)return setTimeout((function(){e.props.triggerThought(n)}),600),{v:void 0}};for(r.s();!(t=r.n()).done;){var a=o();if("object"===typeof a)return a.v}}catch(i){r.e(i)}finally{r.f()}this.props.nextLine()}else this.props.nextLine()}},{key:"closeTT",value:function(){var e=this;setTimeout((function(){e.setState({tooltip:null})}),200)}},{key:"launchThought",value:function(){var e=this.props.thought.range,t=e[0]-1,n=2===e.length?e[1]-1:e[0]-1;return this.props.words.map((function(e,r){var o=!1;return r>=t&&r<=n&&(o=!0),l.a.createElement(_,{key:"word_"+r,colorTA:o},e)}))}},{key:"render",value:function(){var e=this.renderWords(this.state.coloredWord);return"title"===this.props.className&&(e=l.a.createElement("h2",null,e)),l.a.createElement("li",{className:this.props.className},e)}}]),n}(s.Component),S=A;var D=function(e){var t=!!e.offText&&l.a.createElement("span",{style:{visibility:"hidden"}},e.offText),n=e.children.split(" ").map((function(t,n){var r,o=e.thought.range,a=o[0]-1,i=2===o.length?o[1]-1:o[0]-1;return n>=a&&n<=i&&(r=!0),l.a.createElement(_,{key:"".concat(t,"_").concat(n),colored:r},t)}));return"title"===e.className?l.a.createElement("li",{key:e.lineKey,className:e.className},t," ",l.a.createElement("h2",null,n)):l.a.createElement("li",{key:e.lineKey,className:e.className},t," ",n)},U=n(54),I=n(50),C=n(286),H=n(285);function q(e){var t=0;return e.completed?t=100:e.lineOrder&&(t=Math.round(e.lineOrder/(e.maxLine+1)*100)),l.a.createElement("ul",{className:"menu"},l.a.createElement("li",null,l.a.createElement(C.a,{onClick:e.startThinkaloud,size:"small"},"Start \xa0 ",l.a.createElement(U.a,{icon:I.a}))),l.a.createElement("li",null,l.a.createElement(C.a,{disabled:null==e.thought,onClick:e.nextLine,size:"small"},"Next")),l.a.createElement("li",null,l.a.createElement(H.a,{percent:t,size:"small",style:{width:"125px"}})))}var M=n(35),R=n(51),W=n.n(R),z=(n(257),n(258),function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(e){var r;return Object(d.a)(this,n),(r=t.call(this,e)).state={thoughtClicked:!1},r.onClick=r.onClick.bind(Object(M.a)(r)),r.onHover=r.onHover.bind(Object(M.a)(r)),r.onMouseLeave=r.onMouseLeave.bind(Object(M.a)(r)),r.debouncedOnHover=W()(r.onHover,350),r}return Object(p.a)(n,[{key:"onClick",value:function(){this.lnOrder!==this.state.thoughtClicked&&(this.setState({thoughtClicked:this.lnOrder}),this.props.nextLine())}},{key:"onHover",value:function(e){this.props.hoverThought(e),this.hovered=!0}},{key:"onMouseLeave",value:function(){this.hovered&&(this.props.hoverThought(!1),this.hovered=!1),this.debouncedOnHover.cancel()}},{key:"renderThoughts",value:function(){var e=this;if(this.props.data){var t=this.props.data.linesTA.flatMap((function(e){return e.tooltips?e.tooltips:[]}));return(t=t.sort((function(e,t){return e.lnOrder>t.lnOrder?1:-1}))).map((function(t){if(t.lnOrder===e.props.thought)return e.lnOrder=t.lnOrder,l.a.createElement("li",{ref:e.thoughtRef,key:t.lnOrder,onClick:e.onClick,className:"active animate__animated animate__fadeIn"},t.content,l.a.createElement(U.a,{className:"next",icon:I.b}));if(t.lnOrder<e.props.lineOrder||e.props.completed){var n=e.props.hoveredThought&&e.props.hoveredThought.lnOrder===t.lnOrder?"hovered":"";return l.a.createElement("li",{key:t.lnOrder,onMouseEnter:function(){return e.debouncedOnHover(t)},onMouseLeave:e.onMouseLeave,className:n},t.content)}return l.a.createElement("li",{key:t.lnOrder,className:"upcoming"},l.a.createElement("span",{style:{visibility:"hidden"}},t.content))}))}}},{key:"render",value:function(){return l.a.createElement("ul",{className:"thoughts"},this.renderThoughts())}}]),n}(s.Component)),G=(n(259),n(260),n(284)),K=function(e){Object(m.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).startThinkaloud=function(){e.props.startThinkaloud(e.props.thinkaloud.data.startingLine)},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){window.soliloquy.start=this.startThinkaloud;var e=this.props.data.text,t=e.title,n=e.lines;this.lines=n.slice(),this.lines.unshift(t),this.props.setConfig(this.props.data),this.maxLine=this.getMaxLine(this.props.data)}},{key:"componentDidUpdate",value:function(e){e.thinkaloud.lineOrder!==this.props.thinkaloud.lineOrder&&this.props.thinkaloud.running&&this.props.queryLines(this.props.thinkaloud.data.linesTA)}},{key:"componentWillUnmount",value:function(){this.props.endThinkaloud()}},{key:"getMaxLine",value:function(e){var t=e.linesTA.flatMap((function(e){return e.order}));return Math.max.apply(Math,Object(h.a)(t))}},{key:"renderLines",value:function(){var e=this.props.thinkaloud,t=e.activeLine,n=e.lineOrder,r=e.hoveredThought,o=this.props.thinkaloud.data,a=o.linesTA,i=o.wordDelay,s=o.commaDelay,u=0;return this.lines.map(function(e,o){var c=this;if(""===e)return u++,l.a.createElement("li",{key:"break_"+u},"\xa0");var h=o-u,d=0===o?"title":"line",p=e.split(" ");return t===h?l.a.createElement(S,{className:d,key:"line_"+h,dataTA:{tooltips:a[h].tooltips,lineOrder:n},commaDelay:s,words:p,triggerThought:function(e){return c.props.triggerThought(e)},thought:this.props.thinkaloud.thought,wordDelay:i,nextLine:this.nextLine.bind(this)}):r&&a[h]&&a[h].order.includes(r.lnOrder)?l.a.createElement(D,{className:d,key:"line_"+h,thought:r},e):l.a.createElement(w,{className:d,key:"line_"+h},e)}.bind(this))}},{key:"nextLine",value:function(e){var t=this.props.thinkaloud.data.lineDelay;"user"===e?this.props.nextLine(e):setTimeout(this.props.nextLine.bind(this,e),t)}},{key:"render",value:function(){if(!this.props.thinkaloud||!this.props.thinkaloud.data)return null;var e=this.props.thinkaloud.thought?this.props.thinkaloud.thought.lnOrder:null;return l.a.createElement(G.a,{spinning:!this.props.thinkaloud.hasOwnProperty("data")},l.a.createElement("div",{id:"ThinkAloud"},l.a.createElement(q,{startThinkaloud:this.startThinkaloud,nextLine:this.nextLine.bind(this,"user"),thought:e,lineOrder:this.props.thinkaloud.lineOrder,maxLine:this.maxLine,completed:this.props.thinkaloud.completed}),l.a.createElement("div",{className:"content"},l.a.createElement("ul",{className:"poem"},this.renderLines()),l.a.createElement(z,{lineOrder:this.props.thinkaloud.lineOrder,completed:this.props.thinkaloud.completed,thought:e,data:this.props.thinkaloud.data,nextLine:this.nextLine.bind(this,"user"),hoverThought:this.props.hoverThought,hoveredThought:this.props.thinkaloud.hoveredThought}))))}}]),n}(s.Component);var P=Object(f.b)((function(e){return{thinkaloud:e.thinkaloud,params:e.params}}),r)(K),X=(n(261),n(21));function V(e){return new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(e)}function J(e){return e===Object(e)&&"[object Array]"!==Object.prototype.toString.call(e)}function B(e){try{e=JSON.parse(e)}catch(t){return!1}return"object"===typeof e&&null!==e&&e}var F=n(84),$=n.n(F),Q=n(287);var Y=Object(X.c)({thinkaloud:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LINEDATA":return Object.assign({},e,{lineData:t.lineData});case"USER_NEXT_LINE":case"NEXT_LINE":return Object.assign({},e,{lineOrder:e.lineOrder+1,thought:null});case"SELECT_LINE":return Object.assign({},e,{activeLine:t.activeLine});case"START_THINKALOUD":return Object.assign({},e,{lineOrder:t.lineNum,running:!0});case"END_THINKALOUD":return Object.assign({},e,{activeLine:null,running:!1,lineOrder:null,completed:!0});case"TRIGGER_THOUGHT":return Object.assign({},e,{thought:t.thought});case"HOVER_THOUGHT":return Object.assign({},e,{hoveredThought:t.thought});case"SET_CONFIG":return Object.assign({},e,{data:t.data});default:return e}},params:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return"SET_PARAMS"===t.type?t.params:e}}),Z=Y,ee={};window.soliloquy={},window.soliloquy.on=function(e,t){return ee[e]=t},window.soliloquy.onComplete=function(e){return ee.onComplete=e};var te=function(e){return function(t){return function(n){if(n){if("END_THINKALOUD"===n.type)ee.onComplete&&ee.onComplete({},e.getState());else ee[n.type]&&ee[n.type](n,e.getState());return ee.ALL&&ee.ALL(n,e.getState()),t(n)}}}},ne=n(56),re=function(e){return function(t){return function(n){if(n){var r,o=new Date(Date.now()).toISOString(),a=e.getState().params,i=a.actor,s=(a.auth,a.moreInfo);a.serverUrl;switch(n.type){case"START_THINKALOUD":r=ne.start;break;case"USER_NEXT_LINE":r=ne.nextLine;break;case"END_THINKALOUD":r=ne.complete}return r&&(r.actor=i,r.timestamp=o,r.object.moreInfo=s),t(n)}}}},oe=n(90);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(278),n(279),n(280),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.d;window.soliloquy.renderThinkAloud=function(){var e=Object(o.a)(i.a.mark((function e(t,n){var r,o,a,s,u,h,d=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=d.length>2&&void 0!==d[2]?d[2]:{},t&&n){e.next=4;break}return console.log("Missing parameter: renderThinkAloud requires DOM id and config"),e.abrupt("return");case 4:if("string"!==typeof n||!V(n)){e.next=18;break}return e.prev=5,e.next=8,$.a.get(n);case 8:a=e.sent,o=a.data,e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),g.a.error(e.t0.message),console.log(e.t0);case 16:e.next=19;break;case 18:"string"===typeof n?o=B(n):J(n)&&(o=n);case 19:if(o){e.next=22;break}return console.log("Error, config data not provided or invalid"),e.abrupt("return");case 22:if(s=document.getElementById(t)){e.next=26;break}return console.log("Error, target element not found to render the table"),e.abrupt("return");case 26:window.soliloquy.domTarget=s,r.name||(r.name=Object(Q.a)()),u=!0===r.logging?[oe.a,re,te]:[oe.a,te],h=Object(X.e)(Z,{params:r},X.a.apply(void 0,u)),c.a.render(l.a.createElement(f.a,{store:h},l.a.createElement(P,{data:o})),document.getElementById(t));case 31:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t,n){return e.apply(this,arguments)}}(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e){e.exports=JSON.parse('{"nextLine":{"actor":{"account":{"name":"","homePage":""},"objectType":"Agent"},"verb":{"id":"http://adlnet.gov/expapi/verbs/progressed","display":{"en-US":"progressed"}},"object":{"id":"http://closereading.org/soliloquy","definition":{"name":{"en-US":"Soliloquy"},"description":{"en-US":"Visualizes thoughts of reading"},"type":"http://activitystrea.ms/schema/1.0/application"},"objectType":"Activity"}},"start":{"actor":{"account":{"name":"","homePage":""},"objectType":"Agent"},"verb":{"id":"http://activitystrea.ms/schema/1.0/start","display":{"en":"started"}},"object":{"id":"http://closereading.org/soliloquy","definition":{"name":{"en-US":"Soliloquy"},"description":{"en-US":"Visualizes thoughts of reading"},"type":"http://activitystrea.ms/schema/1.0/application"},"objectType":"Activity"}},"complete":{"actor":{"account":{"name":"","homePage":""},"objectType":"Agent"},"verb":{"id":"http://adlnet.gov/expapi/verbs/completed","display":{"en-US":"completed"}},"object":{"id":"http://closereading.org/soliloquy","definition":{"name":{"en-US":"Soliloquy"},"description":{"en-US":"Visualizes thoughts of reading"},"type":"http://activitystrea.ms/schema/1.0/application"},"objectType":"Activity"}}}')},81:function(e,t,n){}},[[281,1,2]]]);
//# sourceMappingURL=main.eb88b34b.chunk.js.map