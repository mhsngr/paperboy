(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{182:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),i=n.n(c),o=n(21),s=n(8),l=(n(153),n(247)),d=n(14),j=n(10),u=n(17),h=n.n(u),b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return h.a.get("/api/feeds?id=".concat(e,"&q=").concat(t)).then((function(e){return e.data})).catch((function(e){return e}))},O=function(e,t,n,a){return h.a.get("/api/feeds?id=".concat(e,"&q=").concat(t,"&skip=").concat(n,"&limit=").concat(a)).then((function(e){return e.data})).catch((function(e){return e}))},f=function(e){var t=new URL(e);return"https://logo.clearbit.com/".concat(t.hostname)},m=function(e){var t=Date.now()-new Date(e);return Math.floor(t/31536e6)>0?"".concat(Math.floor(t/31536e6),"y"):Math.floor(t/6048e5)?"".concat(Math.floor(t/6048e5),"w"):Math.floor(t/864e5)?"".concat(Math.floor(t/864e5),"d"):Math.floor(t/36e5)?"".concat(Math.floor(t/36e5),"h"):Math.floor(t/6e4)?"".concat(Math.floor(t/6e4),"min"):Math.floor(t/1e3)?"".concat(Math.floor(t/1e3),"s"):void 0},x=function(e){return h.a.put("/api/feeds/item/".concat(e),{starred:!0}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},p=function(e){return h.a.put("/api/feeds/item/".concat(e),{starred:!1}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},g=function(){return h.a.get("/api/feeds/starred").then((function(e){return e.data})).catch((function(e){return e}))},v=function(e){return h.a.put("/api/feeds/item/".concat(e),{unread:!1}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},y=function(e){return h.a.put("/api/feeds/item/".concat(e),{unread:!0}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},k=function(e){return h.a.put("/api/feeds?id=".concat(e,"&unread=",!1)).then((function(e){return e.data})).catch((function(e){return e.response.data}))},C=function(e){return h.a.get("/api/feeds?id=".concat(e,"&unread=",!0)).then((function(e){return e.data})).catch((function(e){return e}))},w=n(4),S=n(219),N=n(13),I=n(248),_=n(242),R=n(243),T=n(51),U=n(231),F=n(225),M=n(228),P=n(121),z=n.n(P),D=n(240),E=n(184),W=n(226),L=n(223),H=n(227),B=n(59),Q=n.n(B),A=n(60),q=n.n(A),V=n(253),G=n(186),J=n(230),X=n(56),K=n.n(X),Y=n(229),Z=n(80),$=n.n(Z),ee=n(44),te=n.n(ee),ne=n(45),ae=n.n(ne),re=n(47),ce=n.n(re),ie=n(1),oe=Object(S.a)((function(e){return{feedItem:{padding:e.spacing(0,9,3,9)},feedItemHeading:{paddingBottom:e.spacing(1)},feedHeader:{display:"flex",justifyContent:"space-between",alignItems:"center"},itemTitle:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},toolbar:{paddingBottom:e.spacing(2)},highlight:{color:"inherit",backgroundColor:e.palette.primary.main}}}));function se(e){var t=oe(),n=Object(a.useState)(!1),r=Object(s.a)(n,2),c=r[0],i=r[1],o=function(){i(!c)};return Object(ie.jsxs)(ie.Fragment,{children:[c?Object(ie.jsxs)(E.a,{dense:!0,onClick:o,children:[Object(ie.jsx)(L.a,{}),e.unread?Object(ie.jsx)(V.a,{title:"Mark read",children:Object(ie.jsx)(F.a,{size:"small",onClick:function(){return e.handleMarkRead(e.item._id)},children:Object(ie.jsx)(te.a,{})})}):Object(ie.jsx)(V.a,{title:"Close",children:Object(ie.jsx)(F.a,{size:"small",children:Object(ie.jsx)(K.a,{})})})]}):Object(ie.jsxs)(E.a,{button:!0,dense:!0,children:[Object(ie.jsx)(W.a,{children:Object(ie.jsx)(V.a,{title:"Read later",children:e.starred?Object(ie.jsx)(F.a,{size:"small",onClick:function(){return e.handleUnstarItem(e.item._id)},children:Object(ie.jsx)(Q.a,{fontSize:"small",color:e.unread?"inherit":"disabled"})}):Object(ie.jsx)(F.a,{size:"small",onClick:function(){return e.handleStarItem(e.item._id)},children:Object(ie.jsx)(q.a,{fontSize:"small",color:e.unread?"inherit":"disabled"})})})}),Object(ie.jsx)(L.a,{onClick:o,primary:Object(ie.jsxs)("div",{className:t.feedHeader,children:[Object(ie.jsx)(T.a,{className:t.itemTitle,color:e.unread?"textPrimary":"textSecondary",children:Object(ie.jsx)(ce.a,{highlightClassName:t.highlight,searchWords:[e.searchQuery],autoEscape:!0,textToHighlight:e.item.title})}),Object(ie.jsx)(T.a,{variant:"caption",color:e.unread?"textPrimary":"textSecondary",children:m(e.item.isoDate)})]})})]}),Object(ie.jsx)(H.a,{in:c,timeout:"auto",unmountOnExit:!0,children:Object(ie.jsxs)(M.a,{component:"div",className:t.feedItem,children:[Object(ie.jsx)(T.a,{variant:"h5",color:e.unread?"textPrimary":"textSecondary",className:t.feedItemHeading,children:e.unread?Object(ie.jsx)(Y.a,{href:e.item.link,target:"_blank",rel:"noreferrer",color:"inherit",underline:"none",onClick:function(){return e.handleMarkRead(e.item._id)},children:Object(ie.jsx)(ce.a,{highlightClassName:t.highlight,searchWords:[e.searchQuery],autoEscape:!0,textToHighlight:e.item.title})}):Object(ie.jsx)(Y.a,{href:e.item.link,target:"_blank",rel:"noreferrer",color:"inherit",underline:"none",children:Object(ie.jsx)(ce.a,{highlightClassName:t.highlight,searchWords:[e.searchQuery],autoEscape:!0,textToHighlight:e.item.title})})}),e.item.author||e.item.creator?Object(ie.jsxs)(T.a,{variant:"subtitle2",paragraph:!0,children:[e.feedTitle," by ",e.item.author||e.item.creator,", ",new Date(e.item.isoDate).toLocaleString()," ",e.unread?"":Object(ie.jsx)(Y.a,{href:"#",color:"textSecondary",onClick:function(){return e.handleUnmarkRead(e.item._id)},children:"mark unread"})]}):Object(ie.jsxs)(T.a,{variant:"subtitle2",paragraph:!0,children:[e.feedTitle,", ",new Date(e.item.isoDate).toLocaleString()," ",e.unread?"":Object(ie.jsx)(Y.a,{href:"#",color:"textSecondary",onClick:function(){return e.handleUnmarkRead(e.item._id)},children:"mark unread"})]}),e.item.categories.length>0?Object(ie.jsxs)(T.a,{variant:"subtitle2",paragraph:!0,children:["Category: ",e.item.categories.join(", ")]}):Object(ie.jsx)(ie.Fragment,{}),Object(ie.jsxs)(J.a,{className:t.toolbar,children:[Object(ie.jsx)(V.a,{title:"Read later",children:e.starred?Object(ie.jsx)(G.a,{"aria-label":"read later",onClick:function(){return e.handleUnstarItem(e.item._id)},children:Object(ie.jsx)(Q.a,{})}):Object(ie.jsx)(G.a,{"aria-label":"read later",onClick:function(){return e.handleStarItem(e.item._id)},children:Object(ie.jsx)(q.a,{})})}),Object(ie.jsx)(G.a,{children:Object(ie.jsx)(ae.a,{})})]}),e.item["content:encoded"]||e.item.content?Object(ie.jsx)(T.a,{variant:"body1",paragraph:!0,dangerouslySetInnerHTML:{__html:$.a.sanitize(e.item["content:encoded"]||e.item.content)}}):Object(ie.jsx)(ie.Fragment,{}),e.unread?Object(ie.jsx)(G.a,{href:e.item.link,target:"_blank",rel:"noreferrer",variant:"outlined",fullWidth:!0,onClick:function(){return e.handleMarkRead(e.item._id)},children:"Visit Website"}):Object(ie.jsx)(G.a,{href:e.item.link,target:"_blank",rel:"noreferrer",variant:"outlined",fullWidth:!0,children:"Visit Website"})]})}),Object(ie.jsx)(U.a,{})]})}var le=n(126),de=n(234),je=n(119),ue=n.n(je),he=n(235),be=n(239),Oe=n(237),fe=n(238),me=n(236);function xe(e){var t=r.a.useState(null),n=Object(s.a)(t,2),a=n[0],c=n[1],i=r.a.useState(!1),o=Object(s.a)(i,2),l=o[0],d=o[1],j=function(){d(!1),c(null)};return Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(V.a,{title:"More options",children:Object(ie.jsx)(F.a,{onClick:function(e){c(e.currentTarget)},children:Object(ie.jsx)(ae.a,{})})}),Object(ie.jsx)(le.a,{anchorEl:a,getContentAnchorEl:null,keepMounted:!0,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},open:Boolean(a),onClose:function(){c(null)},children:Object(ie.jsxs)(de.a,{dense:!0,onClick:function(){d(!0)},children:[Object(ie.jsx)(W.a,{children:Object(ie.jsx)(ue.a,{fontSize:"small"})}),Object(ie.jsx)(L.a,{children:"Unfollow"})]})}),Object(ie.jsxs)(he.a,{open:l,onClose:j,children:[Object(ie.jsx)(me.a,{children:"Unfollow feed"}),Object(ie.jsx)(Oe.a,{children:Object(ie.jsxs)(fe.a,{children:["Do you really want to unfollow this feed?",Object(ie.jsx)("br",{}),e.feed.title]})}),Object(ie.jsxs)(be.a,{children:[Object(ie.jsx)(G.a,{onClick:j,color:"primary",autoFocus:!0,children:"Dismiss"}),Object(ie.jsx)(G.a,{onClick:function(){var t;(t=e.feed._id,h.a.delete("/api/feeds?id=".concat(t)).then((function(e){return e.data})).catch((function(e){return e}))).then((function(t){j(),e.setUserFeeds(t),e.setTitle("Paperboy"),e.history.push("/")})).catch((function(e){console.log(e)}))},color:"secondary",children:"Confirm"})]})]})]})}var pe=n(233),ge=n(87),ve=n.n(ge),ye=n(241),ke=n(88),Ce=n.n(ke),we=n(86),Se=Object(S.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},feedDetails:{paddingTop:e.spacing(2),maxWidth:"100%"},feedHeader:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},feedToolbar:{display:"flex"},feedList:{padding:0}}}));function Ne(e){var t=Se(),n=Object(a.useState)(null),r=Object(s.a)(n,2),c=r[0],i=r[1],l=Object(a.useState)(null),d=Object(s.a)(l,2),j=d[0],u=d[1],h=Object(a.useState)(null),f=Object(s.a)(h,2),m=f[0],w=f[1],S=Object(a.useState)(null),N=Object(s.a)(S,2),I=N[0],_=N[1],R=Object(a.useState)(!0),P=Object(s.a)(R,2),z=P[0],E=P[1],W=function(e){x(e).then((function(e){e.message?console.log(e.message):u(e)})).catch((function(e){console.log(e)}))},L=function(e){p(e).then((function(e){u(e)})).catch((function(e){console.log(e)}))},H=function(e){v(e).then((function(e){e.message?console.log(e.message):C(c._id).then((function(e){w(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},B=function(e){y(e).then((function(){C(c._id).then((function(e){w(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},Q=function(){_(null),E(!0),b(e.match.params.id,e.searchQuery).then((function(t){i(t),e.setTitle(t.title),C(t._id).then((function(n){w(n),g().then((function(n){u(n),O(t._id,e.searchQuery,0,e.itemPerPage).then((function(e){_(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))};return Object(a.useEffect)((function(){Q()}),[e.match.params.id,e.searchQuery]),I?Object(ie.jsxs)("div",{id:"feed",className:t.root,children:[Object(ie.jsxs)(M.a,{component:"div",className:t.feedDetails,children:[Object(ie.jsxs)("div",{className:t.feedHeader,children:[Object(ie.jsx)(T.a,{variant:"h4",children:Object(ie.jsx)(Y.a,{href:c.link,target:"_blank",rel:"noreferrer",color:"inherit",underline:"none",children:c.title})}),Object(ie.jsxs)("div",{className:t.feedToolbar,children:[0===m.length?Object(ie.jsx)(V.a,{title:"All Read",children:Object(ie.jsx)(F.a,{children:Object(ie.jsx)(ve.a,{})})}):Object(ie.jsx)(V.a,{title:"Mark as Read",children:Object(ie.jsx)(ye.a,{anchorOrigin:{vertical:"top",horizontal:"left"},badgeContent:m.length,color:"primary",overlap:"circle",max:999,children:Object(ie.jsx)(F.a,{onClick:function(){k(c._id).then((function(e){w(e)})).catch((function(e){console.log(e)}))},children:Object(ie.jsx)(te.a,{})})})}),Object(ie.jsx)(V.a,{title:"Refresh",children:Object(ie.jsx)(F.a,{onClick:function(){return Q()},children:Object(ie.jsx)(Ce.a,{})})}),Object(ie.jsx)(xe,Object(o.a)({feed:c,history:e.history,setUserFeeds:e.setUserFeeds},e))]})]}),c.description?Object(ie.jsx)(T.a,{variant:"subtitle1",children:c.description}):Object(ie.jsx)(ie.Fragment,{}),c.category?Object(ie.jsxs)(T.a,{variant:"subtitle2",paragraph:!0,children:["Category: ",c.category.join(", "),", ",c.feedItems," articles"]}):Object(ie.jsxs)(T.a,{variant:"subtitle2",paragraph:!0,children:[c.feedItems," articles"]})]}),Object(ie.jsx)(U.a,{}),Object(ie.jsx)(pe.a,{className:t.feedList,children:Object(ie.jsx)(we.a,{dataLength:I.length,next:function(){O(c._id,e.searchQuery,I.length,e.itemPerPage).then((function(e){0===e.length?E(!1):_(I.concat(e))})).catch((function(e){console.log(e)}))},hasMore:z,loader:Object(ie.jsx)(D.a,{}),scrollableTarget:"content",children:I.map((function(t){return Object(ie.jsx)(se,Object(o.a)({feedTitle:c.title,item:t,handleStarItem:W,handleUnstarItem:L,starred:j.includes(t._id),handleMarkRead:H,handleUnmarkRead:B,unread:m.includes(t._id)},e),t._id)}))})})]}):Object(ie.jsx)(D.a,{})}var Ie=n(29),_e=n(255),Re=n(187),Te=n(92),Ue=n.n(Te),Fe=n(254),Me=n(89),Pe=n.n(Me),ze=n(232),De=n(252),Ee=Object(S.a)((function(e){return{appBar:{position:"relative"},search:Object(j.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(N.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(N.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"100%"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},menuButton:{display:"flex",justifyContent:"center"}}})),We=r.a.forwardRef((function(e,t){return Object(ie.jsx)(Re.a,Object(o.a)({direction:"up",ref:t},e))}));function Le(e){var t=Ee(),n=Object(a.useState)(!1),c=Object(s.a)(n,2),i=c[0],o=c[1],l=Object(a.useState)(!1),j=Object(s.a)(l,2),u=j[0],b=j[1],O=Object(a.useState)(null),m=Object(s.a)(O,2),x=m[0],p=m[1],g=Object(a.useState)(null),v=Object(s.a)(g,2),y=v[0],k=v[1],C=Object(a.useState)(""),w=Object(s.a)(C,2),S=w[0],N=w[1],I=Object(a.useState)(""),T=Object(s.a)(I,2),U=T[0],M=T[1],P=Object(a.useState)(null),z=Object(s.a)(P,2),H=z[0],B=z[1],Q=r.a.useRef(),A=Object(d.g)(),q=function(){o(!0),b(!0),N(""),h.a.get("/api/feeds/all").then((function(e){return e.data})).catch((function(e){return e})).then((function(e){b(!1),p(e),k(e)})).catch((function(e){console.log(e)}))},G=function(){o(!1),B(null),M("")};return y?Object(ie.jsxs)("div",{children:[Object(ie.jsx)(V.a,{title:"Add new feed",placement:"right",children:Object(ie.jsxs)(E.a,{button:!0,onClick:q,children:[Object(ie.jsx)(W.a,{className:t.menuButton,children:Object(ie.jsx)(F.a,{edge:"start",color:"inherit","aria-label":"add new feed",children:Object(ie.jsx)(Ue.a,{})})}),Object(ie.jsx)(L.a,{primary:"Add new feed"})]})}),Object(ie.jsxs)(he.a,{fullScreen:!0,open:i,onClose:G,TransitionComponent:We,children:[Object(ie.jsx)(_.a,{className:t.appBar,children:Object(ie.jsxs)(R.a,{children:[Object(ie.jsx)(F.a,{edge:"start",color:"inherit",onClick:G,"aria-label":"close",children:Object(ie.jsx)(K.a,{})}),Object(ie.jsxs)("div",{className:t.search,ref:Q,children:[Object(ie.jsx)("div",{className:t.searchIcon,children:Object(ie.jsx)(Pe.a,{})}),Object(ie.jsx)(Fe.a,{placeholder:"Search or enter URL",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},value:S,onChange:function(e){N(e.target.value);var t=e.target.value?x.filter((function(t){return t.title.toLowerCase().includes(e.target.value.toLowerCase())||t.feedUrl.toLowerCase().includes(e.target.value.toLowerCase())})):x;k(t)},fullWidth:!0})]}),Object(ie.jsx)(F.a,{autoFocus:!0,color:"inherit",onClick:function(){var t;B(Q.current),b(!0),(t=S,h.a.post("/api/feeds",{url:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))).then((function(t){b(!1),t.message?M(t.message):(M(""),B(null),o(!1),e.updateUserFeeds(),A.push("/".concat(t._id)))})).catch((function(e){console.log(e)}))},children:Object(ie.jsx)(Ue.a,{})}),Object(ie.jsx)(ze.a,{id:"error-popover",open:!!U,anchorEl:H,onClose:function(){return M("")},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:Object(ie.jsx)(De.a,{severity:"error",children:U})})]})}),u?Object(ie.jsx)(D.a,{}):Object(ie.jsx)(pe.a,{children:y.map((function(e){return Object(ie.jsxs)(E.a,{button:!0,onClick:function(){return N(e.feedUrl)},children:[Object(ie.jsx)(W.a,{children:Object(ie.jsx)(_e.a,{variant:"rounded",src:f(e.link),alt:e.title})}),Object(ie.jsx)(L.a,{primary:e.title})]},e._id)}))})]})]}):Object(ie.jsx)(V.a,{title:"Add new feed",placement:"right",children:Object(ie.jsxs)(E.a,{button:!0,onClick:q,children:[Object(ie.jsx)(W.a,{className:t.menuButton,children:Object(ie.jsx)(F.a,{edge:"start",color:"inherit","aria-label":"add new feed",children:Object(ie.jsx)(Ue.a,{})})}),Object(ie.jsx)(L.a,{primary:"Add new feed"})]})})}var He=n(244),Be=n(120),Qe=n.n(Be),Ae=Object(S.a)((function(e){return{menuButton:{display:"flex",justifyContent:"center"},feedTitle:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}}));function qe(e){var t=Ae();return e.userFeeds?Object(ie.jsxs)(pe.a,{children:[Object(ie.jsx)(V.a,{title:"Read later",placement:"right",children:Object(ie.jsxs)(E.a,{button:!0,component:Ie.c,to:"/read-later",activeClassName:"Mui-selected",children:[Object(ie.jsx)(W.a,{className:t.menuButton,children:Object(ie.jsx)(F.a,{edge:"start",color:"inherit",children:Object(ie.jsx)(Qe.a,{})})}),Object(ie.jsx)(L.a,{primary:"Read later"})]})}),e.userFeeds.map((function(e){return Object(ie.jsx)(V.a,{title:e.title,placement:"right",children:Object(ie.jsxs)(E.a,{button:!0,component:Ie.c,to:"/".concat(e._id),activeClassName:"Mui-selected",children:[Object(ie.jsx)(He.a,{children:Object(ie.jsx)(_e.a,{variant:"rounded",src:f(e.link),alt:e.title})}),Object(ie.jsx)(L.a,{primary:e.title,className:t.feedTitle})]})},e._id)})),Object(ie.jsx)(Le,{updateUserFeeds:function(){return e.updateUserFeeds()},setUserFeeds:e.setUserFeeds})]}):Object(ie.jsx)(D.a,{})}var Ve=Object(S.a)((function(e){return{feedItem:{padding:e.spacing(0,9,3,9)},feedItemHeading:{paddingBottom:e.spacing(1)},itemHeader:{display:"flex",justifyContent:"space-between",alignItems:"center"},itemTitle:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},itemInfo:{display:"flex"},itemFeed:{whiteSpace:"nowrap",textAlign:"right"},itemAge:{textAlign:"right",width:e.spacing(6)},toolbar:{paddingBottom:e.spacing(2)},highlight:{color:"inherit",backgroundColor:e.palette.primary.main}}}));function Ge(e){var t=Ve(),n=Object(a.useState)(!1),r=Object(s.a)(n,2),c=r[0],i=r[1],o=function(){i(!c)};return Object(ie.jsxs)(ie.Fragment,{children:[c?Object(ie.jsxs)(E.a,{dense:!0,onClick:o,children:[Object(ie.jsx)(L.a,{}),e.unread?Object(ie.jsx)(V.a,{title:"Mark read",children:Object(ie.jsx)(F.a,{size:"small",onClick:function(){return e.handleMarkRead(e.item._id)},children:Object(ie.jsx)(te.a,{})})}):Object(ie.jsx)(V.a,{title:"Close",children:Object(ie.jsx)(F.a,{size:"small",children:Object(ie.jsx)(K.a,{})})})]}):Object(ie.jsxs)(E.a,{button:!0,dense:!0,children:[Object(ie.jsx)(W.a,{children:Object(ie.jsx)(V.a,{title:"Read later",children:e.starred?Object(ie.jsx)(F.a,{size:"small",onClick:function(){return e.handleUnstarItem(e.item._id)},children:Object(ie.jsx)(Q.a,{fontSize:"small",color:e.unread?"inherit":"disabled"})}):Object(ie.jsx)(F.a,{size:"small",onClick:function(){return e.handleStarItem(e.item._id)},children:Object(ie.jsx)(q.a,{fontSize:"small",color:e.unread?"inherit":"disabled"})})})}),Object(ie.jsx)(L.a,{onClick:o,primary:Object(ie.jsx)(ie.Fragment,{children:Object(ie.jsxs)("div",{className:t.itemHeader,children:[Object(ie.jsx)(T.a,{className:t.itemTitle,color:e.unread?"textPrimary":"textSecondary",children:Object(ie.jsx)(ce.a,{highlightClassName:t.highlight,searchWords:[e.searchQuery],autoEscape:!0,textToHighlight:e.item.title})}),Object(ie.jsxs)("div",{className:t.itemInfo,children:[Object(ie.jsx)("div",{className:t.itemFeed,children:Object(ie.jsx)(T.a,{variant:"caption",color:e.unread?"textPrimary":"textSecondary",children:e.item.feed.title})}),Object(ie.jsx)("div",{className:t.itemAge,children:Object(ie.jsx)(T.a,{variant:"caption",color:e.unread?"textPrimary":"textSecondary",children:m(e.item.isoDate)})})]})]})})})]}),Object(ie.jsx)(H.a,{in:c,timeout:"auto",unmountOnExit:!0,children:Object(ie.jsxs)(M.a,{component:"div",className:t.feedItem,children:[Object(ie.jsx)(T.a,{variant:"h5",color:e.unread?"textPrimary":"textSecondary",className:t.feedItemHeading,children:e.unread?Object(ie.jsx)(Y.a,{href:e.item.link,target:"_blank",rel:"noreferrer",color:"inherit",underline:"none",onClick:function(){return e.handleMarkRead(e.item._id)},children:Object(ie.jsx)(ce.a,{highlightClassName:t.highlight,searchWords:[e.searchQuery],autoEscape:!0,textToHighlight:e.item.title})}):Object(ie.jsx)(Y.a,{href:e.item.link,target:"_blank",rel:"noreferrer",color:"inherit",underline:"none",children:Object(ie.jsx)(ce.a,{highlightClassName:t.highlight,searchWords:[e.searchQuery],autoEscape:!0,textToHighlight:e.item.title})})}),e.item.author||e.item.creator?Object(ie.jsxs)(T.a,{variant:"subtitle2",paragraph:!0,children:[e.item.feed.title," by ",e.item.author||e.item.creator,", ",new Date(e.item.isoDate).toLocaleString()," ",e.unread?"":Object(ie.jsx)(Y.a,{href:"#",color:"textSecondary",onClick:function(){return e.handleUnmarkRead(e.item._id)},children:"mark unread"})]}):Object(ie.jsxs)(T.a,{variant:"subtitle2",paragraph:!0,children:[e.item.feed.title,", ",new Date(e.item.isoDate).toLocaleString()," ",e.unread?"":Object(ie.jsx)(Y.a,{href:"#",color:"textSecondary",onClick:function(){return e.handleUnmarkRead(e.item._id)},children:"mark unread"})]}),e.item.categories.length>0?Object(ie.jsxs)(T.a,{variant:"subtitle2",paragraph:!0,children:["Category: ",e.item.categories.join(", ")]}):Object(ie.jsx)(ie.Fragment,{}),Object(ie.jsxs)(J.a,{className:t.toolbar,children:[Object(ie.jsx)(V.a,{title:"Read later",children:e.starred?Object(ie.jsx)(G.a,{"aria-label":"read later",onClick:function(){return e.handleUnstarItem(e.item._id)},children:Object(ie.jsx)(Q.a,{})}):Object(ie.jsx)(G.a,{"aria-label":"read later",onClick:function(){return e.handleStarItem(e.item._id)},children:Object(ie.jsx)(q.a,{})})}),Object(ie.jsx)(G.a,{children:Object(ie.jsx)(ae.a,{})})]}),e.item["content:encoded"]||e.item.content?Object(ie.jsx)(T.a,{variant:"body1",paragraph:!0,dangerouslySetInnerHTML:{__html:$.a.sanitize(e.item["content:encoded"]||e.item.content)}}):Object(ie.jsx)(ie.Fragment,{}),e.unread?Object(ie.jsx)(G.a,{href:e.item.link,target:"_blank",rel:"noreferrer",variant:"outlined",fullWidth:!0,onClick:function(){return e.handleMarkRead(e.item._id)},children:"Visit Website"}):Object(ie.jsx)(G.a,{href:e.item.link,target:"_blank",rel:"noreferrer",variant:"outlined",fullWidth:!0,children:"Visit Website"})]})}),Object(ie.jsx)(U.a,{})]})}var Je=Object(S.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},feedDetails:{paddingTop:e.spacing(2),maxWidth:"100%"},feedHeader:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},feedToolbar:{display:"flex"},feedList:{padding:0}}}));function Xe(e){var t=Je(),n=Object(a.useState)(null),r=Object(s.a)(n,2),c=r[0],i=r[1],l=Object(a.useState)(null),d=Object(s.a)(l,2),j=d[0],u=d[1],h=Object(a.useState)(null),f=Object(s.a)(h,2),m=f[0],w=f[1],S=Object(a.useState)(null),N=Object(s.a)(S,2),I=N[0],_=N[1],R=Object(a.useState)(!0),P=Object(s.a)(R,2),z=P[0],E=P[1],W=function(e){x(e).then((function(e){e.message?console.log(e.message):u(e)})).catch((function(e){console.log(e)}))},L=function(e){p(e).then((function(e){u(e)})).catch((function(e){console.log(e)}))},H=function(e){v(e).then((function(e){e.message?console.log(e.message):C("starred").then((function(e){w(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},B=function(e){y(e).then((function(){C("starred").then((function(e){w(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},Q=function(){e.setTitle("Read later"),_(null),E(!0),b("starred",e.searchQuery).then((function(t){i(t),C("starred").then((function(t){w(t),g().then((function(t){u(t),O("starred",e.searchQuery,0,e.itemPerPage).then((function(e){_(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))};return Object(a.useEffect)((function(){Q()}),[e.match.params.id,e.searchQuery]),I?Object(ie.jsxs)("div",{className:t.root,children:[Object(ie.jsxs)(M.a,{component:"div",className:t.feedDetails,children:[Object(ie.jsxs)("div",{className:t.feedHeader,children:[Object(ie.jsx)(T.a,{variant:"h4",children:"Read later"}),Object(ie.jsxs)("div",{className:t.feedToolbar,children:[0===m.length?Object(ie.jsx)(V.a,{title:"All Read",children:Object(ie.jsx)(F.a,{children:Object(ie.jsx)(ve.a,{})})}):Object(ie.jsx)(V.a,{title:"Mark as Read",children:Object(ie.jsx)(ye.a,{anchorOrigin:{vertical:"top",horizontal:"left"},badgeContent:m.length,color:"primary",overlap:"circle",max:999,children:Object(ie.jsx)(F.a,{onClick:function(){k("starred").then((function(e){w(e)})).catch((function(e){console.log(e)}))},children:Object(ie.jsx)(te.a,{})})})}),Object(ie.jsx)(V.a,{title:"Refresh",children:Object(ie.jsx)(F.a,{onClick:function(){return Q()},children:Object(ie.jsx)(Ce.a,{})})}),Object(ie.jsx)(V.a,{title:"More options",children:Object(ie.jsx)(F.a,{children:Object(ie.jsx)(ae.a,{})})})]})]}),c.description?Object(ie.jsx)(T.a,{variant:"subtitle1",children:c.description}):Object(ie.jsx)(ie.Fragment,{}),c.category?Object(ie.jsxs)(T.a,{variant:"subtitle2",paragraph:!0,children:["Category: ",c.category.join(", "),", ",c.feedItems," articles"]}):Object(ie.jsxs)(T.a,{variant:"subtitle2",paragraph:!0,children:[c.feedItems," articles"]})]}),Object(ie.jsx)(U.a,{}),Object(ie.jsx)(pe.a,{className:t.feedList,children:Object(ie.jsx)(we.a,{dataLength:I.length,next:function(){O("starred",e.searchQuery,I.length,e.itemPerPage).then((function(e){0===e.length?E(!1):_(I.concat(e))})).catch((function(e){console.log(e)}))},hasMore:z,loader:Object(ie.jsx)(D.a,{}),scrollableTarget:"content",children:I.map((function(t){return Object(ie.jsx)(Ge,Object(o.a)({feedTitle:t.feed.title,item:t,handleStarItem:W,handleUnstarItem:L,starred:j.includes(t._id),handleMarkRead:H,handleUnmarkRead:B,unread:m.includes(t._id)},e),t._id)}))})})]}):Object(ie.jsx)(D.a,{})}var Ke=n(245),Ye=n(246),Ze=Object(S.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(4)}}}));function $e(e){var t=Ze(),n=Object(Ke.a)({target:e.contentRef.current,disableHysteresis:!0,threshold:100});return Object(ie.jsx)(Ye.a,{in:n,children:Object(ie.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:t.root,children:e.children})})}function et(e){var t=r.a.useState(null),n=Object(s.a)(t,2),a=n[0],c=n[1],i=function(){c(null)};return Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(V.a,{title:"Account",children:Object(ie.jsx)(F.a,{edge:"end",onClick:function(e){c(e.currentTarget)},color:"inherit",children:Object(ie.jsx)(_e.a,{src:" ",alt:e.user.username})})}),Object(ie.jsxs)(le.a,{anchorEl:a,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},id:"account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"center"},open:Boolean(a),onClose:i,children:[Object(ie.jsx)(de.a,{onClick:i,children:"Profile"}),Object(ie.jsx)(de.a,{onClick:function(){h.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data})).then((function(){e.setUser(null),e.history.push("/signin")})).catch((function(e){console.log(e)}))},children:"Sign Out"})]})]})}var tt=n(91),nt=n(122),at=n.n(nt),rt=n(123),ct=n.n(rt),it=n(249),ot=n(124),st=n.n(ot),lt=Object(S.a)((function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:300,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(j.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{padding:0,maxWidth:"100%"},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},search:Object(j.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(N.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(N.b)(e.palette.common.white,.25)},marginLeft:0,marginRight:e.spacing(1),width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(j.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function dt(e){var t=lt(),n=Object(tt.b)(),c=n.dark,i=n.toggleDark,j=Object(a.useState)(!1),u=Object(s.a)(j,2),b=u[0],O=u[1],f=Object(a.useState)("Paperboy"),m=Object(s.a)(f,2),x=m[0],p=m[1],g=Object(a.useState)([]),v=Object(s.a)(g,2),y=v[0],k=v[1],C=Object(a.useState)(""),S=Object(s.a)(C,2),N=S[0],P=S[1],D=r.a.useRef(),E=function(){h.a.get("/api/feeds").then((function(e){return e.data})).catch((function(e){return e})).then((function(e){k(e)})).catch((function(e){console.log(e)}))};return Object(a.useEffect)((function(){E()}),[]),Object(ie.jsxs)("div",{className:t.root,children:[Object(ie.jsx)(l.a,{}),Object(ie.jsx)(_.a,{className:t.appBar,children:Object(ie.jsxs)(R.a,{children:[Object(ie.jsx)(F.a,{edge:"start",color:"inherit",onClick:function(){b&&O(!1),b||O(!0)},className:t.menuButton,children:Object(ie.jsx)(z.a,{})}),Object(ie.jsx)(T.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:t.title,children:x}),Object(ie.jsxs)("div",{className:t.search,children:[Object(ie.jsx)("div",{className:t.searchIcon,children:Object(ie.jsx)(Pe.a,{})}),Object(ie.jsx)(Fe.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},value:N,onChange:function(e){P(e.target.value)}})]}),Object(ie.jsx)(V.a,{title:"Toggle dark mode",children:Object(ie.jsx)(F.a,{onClick:i,color:"inherit",children:c?Object(ie.jsx)(at.a,{}):Object(ie.jsx)(ct.a,{})})}),Object(ie.jsx)(et,Object(o.a)({},e))]})}),Object(ie.jsxs)(I.a,{className:t.drawer,variant:"permanent",classes:{paper:Object(w.a)(t.drawerPaper,!b&&t.drawerPaperClose)},open:b,children:[Object(ie.jsx)(R.a,{}),Object(ie.jsx)(qe,{userFeeds:y,setUserFeeds:k,updateUserFeeds:E}),Object(ie.jsx)(U.a,{})]}),Object(ie.jsxs)("main",{id:"content",className:t.content,ref:D,children:[Object(ie.jsx)(R.a,{id:"back-to-top-anchor"}),Object(ie.jsxs)(M.a,{className:t.container,children:[Object(ie.jsxs)(d.d,{children:[Object(ie.jsx)(d.b,{exact:!0,path:"/read-later",render:function(e){return Object(ie.jsx)(Xe,Object(o.a)({setTitle:p,searchQuery:N,itemPerPage:40},e))}}),Object(ie.jsx)(d.b,{exact:!0,path:"/:id",render:function(e){return Object(ie.jsx)(Ne,Object(o.a)({setTitle:p,setUserFeeds:k,searchQuery:N,itemPerPage:40},e))}})]}),Object(ie.jsx)($e,Object(o.a)(Object(o.a)({contentRef:D},e),{},{children:Object(ie.jsx)(it.a,{color:"primary",size:"small",children:Object(ie.jsx)(st.a,{})})}))]})]})]})}var jt=n(251),ut=n(93),ht=n(250),bt=n(90),Ot=n.n(bt),ft=Object(S.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://images.unsplash.com/photo-1541613569553-332a2574a508)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function mt(e){var t=ft(),n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(""),d=Object(s.a)(o,2),j=d[0],u=d[1],b=Object(a.useState)(""),O=Object(s.a)(b,2),f=O[0],m=O[1],x=Object(a.useState)(""),p=Object(s.a)(x,2),g=p[0],v=p[1];return Object(ie.jsxs)(ht.a,{container:!0,component:"main",className:t.root,children:[Object(ie.jsx)(l.a,{}),Object(ie.jsx)(ht.a,{item:!0,xs:!1,sm:4,md:7,className:t.image}),Object(ie.jsx)(ht.a,{item:!0,xs:12,sm:8,md:5,component:ut.a,elevation:6,square:!0,children:Object(ie.jsxs)("div",{className:t.paper,children:[Object(ie.jsx)(_e.a,{className:t.avatar,children:Object(ie.jsx)(Ot.a,{})}),Object(ie.jsx)(T.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(ie.jsxs)("form",{className:t.form,onSubmit:function(t){t.preventDefault(),function(e,t){return h.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))}(c,j).then((function(t){t.usernameError?(m(t.usernameError),v("")):t.passwordError?(m(""),v(t.passwordError)):(e.setUser(t),e.history.push("/"))}))},noValidate:!0,children:[Object(ie.jsx)(jt.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,value:c,onChange:function(e){return i(e.target.value)},error:!!f,helperText:f}),Object(ie.jsx)(jt.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:j,onChange:function(e){return u(e.target.value)},error:!!g,helperText:g}),Object(ie.jsx)(G.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign In"}),Object(ie.jsx)(ht.a,{container:!0,children:Object(ie.jsx)(ht.a,{item:!0,children:Object(ie.jsx)(Y.a,{component:Ie.b,to:"/signup",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]})})]})}var xt=Object(S.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function pt(e){var t=xt(),n=Object(a.useState)(""),r=Object(s.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(""),d=Object(s.a)(o,2),j=d[0],u=d[1],b=Object(a.useState)(""),O=Object(s.a)(b,2),f=O[0],m=O[1],x=Object(a.useState)(""),p=Object(s.a)(x,2),g=p[0],v=p[1],y=Object(a.useState)(""),k=Object(s.a)(y,2),C=k[0],w=k[1],S=Object(a.useState)(""),N=Object(s.a)(S,2),I=N[0],_=N[1];return Object(ie.jsxs)(M.a,{component:"main",maxWidth:"xs",children:[Object(ie.jsx)(l.a,{}),Object(ie.jsxs)("div",{className:t.paper,children:[Object(ie.jsx)(_e.a,{className:t.avatar,children:Object(ie.jsx)(Ot.a,{})}),Object(ie.jsx)(T.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(ie.jsxs)("form",{className:t.form,onSubmit:function(t){t.preventDefault(),j===f?function(e,t){return h.a.post("/api/auth/signup",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))}(c,j).then((function(t){t.usernameError?(v(t.usernameError),w("")):t.passwordError?(v(""),w(t.passwordError)):(e.setUser(t),e.history.push("/"))})):_("Passwords do not match")},noValidate:!0,children:[Object(ie.jsxs)(ht.a,{container:!0,spacing:2,children:[Object(ie.jsx)(ht.a,{item:!0,xs:12,children:Object(ie.jsx)(jt.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",value:c,onChange:function(e){return i(e.target.value)},error:!!g,helperText:g,autoFocus:!0})}),Object(ie.jsx)(ht.a,{item:!0,xs:12,children:Object(ie.jsx)(jt.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:j,onChange:function(e){return u(e.target.value)},error:!!C,helperText:C})}),Object(ie.jsx)(ht.a,{item:!0,xs:12,children:Object(ie.jsx)(jt.a,{variant:"outlined",required:!0,fullWidth:!0,name:"confirm",label:"Confirm",type:"password",id:"confirm",value:f,onChange:function(e){return m(e.target.value)},error:!!I,helperText:I})})]}),Object(ie.jsx)(G.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign Up"}),Object(ie.jsx)(ht.a,{container:!0,justify:"flex-end",children:Object(ie.jsx)(ht.a,{item:!0,children:Object(ie.jsx)(Y.a,{component:Ie.b,to:"/signin",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})}var gt=function(e){var t=r.a.useState(e.user),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(ie.jsxs)(ie.Fragment,{children:[Object(ie.jsx)(l.a,{}),Object(ie.jsx)(d.b,{path:"/",render:function(e){return a?Object(ie.jsx)(dt,Object(o.a)({setUser:c,user:a},e)):Object(ie.jsx)(d.a,{to:"/signin"})}}),Object(ie.jsx)(d.b,{exact:!0,path:"/signin",render:function(e){return Object(ie.jsx)(mt,Object(o.a)({setUser:c},e))}}),Object(ie.jsx)(d.b,{exact:!0,path:"/signup",render:function(e){return Object(ie.jsx)(pt,Object(o.a)({setUser:c},e))}})]})},vt=n(125),yt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,256)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},kt=Object(vt.a)(),Ct=Object(vt.a)({palette:{type:"dark"}});h.a.get("/api/auth/loggedin").then((function(e){var t=e.data;i.a.render(Object(ie.jsx)(tt.a,{lightTheme:kt,darkTheme:Ct,followSystem:"true",persist:"true",appId:"paperboy",children:Object(ie.jsx)(Ie.a,{children:Object(ie.jsx)(gt,{id:"paperboy",user:t})})}),document.getElementById("root"))})).catch((function(e){console.log(e)})),yt()}},[[182,1,2]]]);
//# sourceMappingURL=main.b301b661.chunk.js.map