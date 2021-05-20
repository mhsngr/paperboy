(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{184:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),i=n.n(r),o=n(19),s=n(8),l=(n(155),n(251)),d=n(14),j=n(10),u=n(17),h=n.n(u),b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return h.a.get("/api/feeds?id=".concat(e,"&q=").concat(t)).then((function(e){return e.data})).catch((function(e){return e}))},m=function(e,t,n,a){return h.a.get("/api/feeds?id=".concat(e,"&q=").concat(t,"&skip=").concat(n,"&limit=").concat(a)).then((function(e){return e.data})).catch((function(e){return e}))},O=function(e){var t=new URL(e);return"https://logo.clearbit.com/".concat(t.hostname)},f=function(e){var t=Date.now()-new Date(e);return Math.floor(t/31536e6)>0?"".concat(Math.floor(t/31536e6),"y"):Math.floor(t/6048e5)?"".concat(Math.floor(t/6048e5),"w"):Math.floor(t/864e5)?"".concat(Math.floor(t/864e5),"d"):Math.floor(t/36e5)?"".concat(Math.floor(t/36e5),"h"):Math.floor(t/6e4)?"".concat(Math.floor(t/6e4),"min"):Math.floor(t/1e3)?"".concat(Math.floor(t/1e3),"s"):void 0},x=function(e){return h.a.put("/api/feeds/item/".concat(e),{starred:!0}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},p=function(e){return h.a.put("/api/feeds/item/".concat(e),{starred:!1}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},g=function(){return h.a.get("/api/feeds/starred").then((function(e){return e.data})).catch((function(e){return e}))},v=function(e){return h.a.put("/api/feeds/item/".concat(e),{unread:!1}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},y=function(e){return h.a.put("/api/feeds/item/".concat(e),{unread:!0}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},k=function(e){return h.a.put("/api/feeds?id=".concat(e,"&unread=",!1)).then((function(e){return e.data})).catch((function(e){return e.response.data}))},w=function(e){return h.a.get("/api/feeds?id=".concat(e,"&unread=",!0)).then((function(e){return e.data})).catch((function(e){return e}))},C=n(4),S=n(223),N=n(13),I=n(252),T=n(246),_=n(247),R=n(51),F=n(235),U=n(230),P=n(226),M=n(123),W=n.n(M),D=n(118),E=n.n(D),z=n(1),L=Object(S.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},welcome:{paddingTop:e.spacing(2),maxWidth:"100%"},heading:{paddingBottom:e.spacing(1)},addNew:{paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));function B(e){var t=L();return Object(a.useEffect)((function(){e.setTitle("Paperboy")}),[]),Object(z.jsx)("div",{className:t.root,children:Object(z.jsxs)(P.a,{component:"div",className:t.welcome,children:[Object(z.jsx)(R.a,{variant:"h3",className:t.heading,children:"Welcome to Paperboy"}),e.userFeeds.length?Object(z.jsx)(z.Fragment,{}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(R.a,{variant:"h4",children:"You follow no feeds yet"}),Object(z.jsxs)(R.a,{variant:"h4",className:t.addNew,children:[Object(z.jsx)(E.a,{})," Click to add new feed"]})]})]})})}var H=n(244),A=n(186),Q=n(231),q=n(228),V=n(232),G=n(61),J=n.n(G),X=n(62),Y=n.n(X),K=n(259),Z=n(188),$=n(234),ee=n(58),te=n.n(ee),ne=n(233),ae=n(86),ce=n.n(ae),re=n(44),ie=n.n(re),oe=n(45),se=n.n(oe),le=n(47),de=n.n(le),je=Object(S.a)((function(e){return{feedItem:{padding:e.spacing(0,9,3,9)},feedItemHeading:{paddingBottom:e.spacing(1)},feedHeader:{display:"flex",justifyContent:"space-between",alignItems:"center"},itemTitle:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},toolbar:{paddingBottom:e.spacing(2)},highlight:{color:"inherit",backgroundColor:e.palette.primary.main}}}));function ue(e){var t=je(),n=Object(a.useState)(!1),c=Object(s.a)(n,2),r=c[0],i=c[1],o=function(){i(!r)};return Object(z.jsxs)(z.Fragment,{children:[r?Object(z.jsxs)(A.a,{dense:!0,onClick:o,children:[Object(z.jsx)(q.a,{}),e.unread?Object(z.jsx)(K.a,{title:"Mark read",children:Object(z.jsx)(U.a,{size:"small",onClick:function(){return e.handleMarkRead(e.item._id)},children:Object(z.jsx)(ie.a,{})})}):Object(z.jsx)(K.a,{title:"Close",children:Object(z.jsx)(U.a,{size:"small",children:Object(z.jsx)(te.a,{})})})]}):Object(z.jsxs)(A.a,{button:!0,dense:!0,children:[Object(z.jsx)(Q.a,{children:Object(z.jsx)(K.a,{title:"Read later",children:e.starred?Object(z.jsx)(U.a,{size:"small",onClick:function(){return e.handleUnstarItem(e.item._id)},children:Object(z.jsx)(J.a,{fontSize:"small",color:e.unread?"inherit":"disabled"})}):Object(z.jsx)(U.a,{size:"small",onClick:function(){return e.handleStarItem(e.item._id)},children:Object(z.jsx)(Y.a,{fontSize:"small",color:e.unread?"inherit":"disabled"})})})}),Object(z.jsx)(q.a,{onClick:o,primary:Object(z.jsxs)("div",{className:t.feedHeader,children:[Object(z.jsx)(R.a,{className:t.itemTitle,color:e.unread?"textPrimary":"textSecondary",children:Object(z.jsx)(de.a,{highlightClassName:t.highlight,searchWords:[e.searchQuery],autoEscape:!0,textToHighlight:e.item.title})}),Object(z.jsx)(R.a,{variant:"caption",color:e.unread?"textPrimary":"textSecondary",children:f(e.item.isoDate)})]})})]}),Object(z.jsx)(V.a,{in:r,timeout:"auto",unmountOnExit:!0,children:Object(z.jsxs)(P.a,{component:"div",className:t.feedItem,children:[Object(z.jsx)(R.a,{variant:"h5",color:e.unread?"textPrimary":"textSecondary",className:t.feedItemHeading,children:e.unread?Object(z.jsx)(ne.a,{href:e.item.link,target:"_blank",rel:"noreferrer",color:"inherit",underline:"none",onClick:function(){return e.handleMarkRead(e.item._id)},children:Object(z.jsx)(de.a,{highlightClassName:t.highlight,searchWords:[e.searchQuery],autoEscape:!0,textToHighlight:e.item.title})}):Object(z.jsx)(ne.a,{href:e.item.link,target:"_blank",rel:"noreferrer",color:"inherit",underline:"none",children:Object(z.jsx)(de.a,{highlightClassName:t.highlight,searchWords:[e.searchQuery],autoEscape:!0,textToHighlight:e.item.title})})}),e.item.author||e.item.creator?Object(z.jsxs)(R.a,{variant:"subtitle2",paragraph:!0,children:[e.feedTitle," by ",e.item.author||e.item.creator,", ",new Date(e.item.isoDate).toLocaleString()," ",e.unread?"":Object(z.jsx)(ne.a,{href:"#",color:"textSecondary",onClick:function(){return e.handleUnmarkRead(e.item._id)},children:"mark unread"})]}):Object(z.jsxs)(R.a,{variant:"subtitle2",paragraph:!0,children:[e.feedTitle,", ",new Date(e.item.isoDate).toLocaleString()," ",e.unread?"":Object(z.jsx)(ne.a,{href:"#",color:"textSecondary",onClick:function(){return e.handleUnmarkRead(e.item._id)},children:"mark unread"})]}),e.item.categories.length>0?Object(z.jsxs)(R.a,{variant:"subtitle2",paragraph:!0,children:["Category: ",e.item.categories.join(", ")]}):Object(z.jsx)(z.Fragment,{}),Object(z.jsxs)($.a,{className:t.toolbar,children:[Object(z.jsx)(K.a,{title:"Read later",children:e.starred?Object(z.jsx)(Z.a,{"aria-label":"read later",onClick:function(){return e.handleUnstarItem(e.item._id)},children:Object(z.jsx)(J.a,{})}):Object(z.jsx)(Z.a,{"aria-label":"read later",onClick:function(){return e.handleStarItem(e.item._id)},children:Object(z.jsx)(Y.a,{})})}),Object(z.jsx)(Z.a,{children:Object(z.jsx)(se.a,{})})]}),e.item["content:encoded"]||e.item.content?Object(z.jsx)(R.a,{variant:"body1",paragraph:!0,dangerouslySetInnerHTML:{__html:ce.a.sanitize(e.item["content:encoded"]||e.item.content)}}):Object(z.jsx)(z.Fragment,{}),e.unread?Object(z.jsx)(Z.a,{href:e.item.link,target:"_blank",rel:"noreferrer",variant:"outlined",fullWidth:!0,onClick:function(){return e.handleMarkRead(e.item._id)},children:"Visit Website"}):Object(z.jsx)(Z.a,{href:e.item.link,target:"_blank",rel:"noreferrer",variant:"outlined",fullWidth:!0,children:"Visit Website"})]})}),Object(z.jsx)(F.a,{})]})}var he=n(128),be=n(238),me=n(120),Oe=n.n(me),fe=n(239),xe=n(243),pe=n(241),ge=n(242),ve=n(240);function ye(e){var t=c.a.useState(null),n=Object(s.a)(t,2),a=n[0],r=n[1],i=c.a.useState(!1),o=Object(s.a)(i,2),l=o[0],d=o[1],j=function(){d(!1),r(null)};return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(K.a,{title:"More options",children:Object(z.jsx)(U.a,{onClick:function(e){r(e.currentTarget)},children:Object(z.jsx)(se.a,{})})}),Object(z.jsx)(he.a,{anchorEl:a,getContentAnchorEl:null,keepMounted:!0,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},open:Boolean(a),onClose:function(){r(null)},children:Object(z.jsxs)(be.a,{dense:!0,onClick:function(){d(!0)},children:[Object(z.jsx)(Q.a,{children:Object(z.jsx)(Oe.a,{fontSize:"small"})}),Object(z.jsx)(q.a,{children:"Unfollow"})]})}),Object(z.jsxs)(fe.a,{open:l,onClose:j,children:[Object(z.jsx)(ve.a,{children:"Unfollow feed"}),Object(z.jsx)(pe.a,{children:Object(z.jsxs)(ge.a,{children:["Do you really want to unfollow this feed?",Object(z.jsx)("br",{}),e.feed.title]})}),Object(z.jsxs)(xe.a,{children:[Object(z.jsx)(Z.a,{onClick:j,color:"primary",autoFocus:!0,children:"Dismiss"}),Object(z.jsx)(Z.a,{onClick:function(){var t;(t=e.feed._id,h.a.delete("/api/feeds?id=".concat(t)).then((function(e){return e.data})).catch((function(e){return e}))).then((function(t){j(),e.setUserFeeds(t),e.setTitle("Paperboy"),e.history.push("/")})).catch((function(e){console.log(e)}))},color:"secondary",children:"Confirm"})]})]})]})}var ke=n(237),we=n(89),Ce=n.n(we),Se=n(245),Ne=n(90),Ie=n.n(Ne),Te=n(88),_e=Object(S.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},feedDetails:{paddingTop:e.spacing(2),maxWidth:"100%"},feedHeader:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},feedToolbar:{display:"flex"},feedList:{padding:0}}}));function Re(e){var t=_e(),n=Object(a.useState)(null),c=Object(s.a)(n,2),r=c[0],i=c[1],l=Object(a.useState)(null),d=Object(s.a)(l,2),j=d[0],u=d[1],h=Object(a.useState)(null),O=Object(s.a)(h,2),f=O[0],C=O[1],S=Object(a.useState)(null),N=Object(s.a)(S,2),I=N[0],T=N[1],_=Object(a.useState)(!0),M=Object(s.a)(_,2),W=M[0],D=M[1],E=function(e){x(e).then((function(e){e.message?console.log(e.message):u(e)})).catch((function(e){console.log(e)}))},L=function(e){p(e).then((function(e){u(e)})).catch((function(e){console.log(e)}))},B=function(e){v(e).then((function(e){e.message?console.log(e.message):w(r._id).then((function(e){C(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},A=function(e){y(e).then((function(){w(r._id).then((function(e){C(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},Q=function(){T(null),D(!0),b(e.match.params.id,e.searchQuery).then((function(t){i(t),e.setTitle(t.title),w(t._id).then((function(n){C(n),g().then((function(n){u(n),m(t._id,e.searchQuery,0,e.itemPerPage).then((function(e){T(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))};return Object(a.useEffect)((function(){Q()}),[e.match.params.id,e.searchQuery]),I?Object(z.jsxs)("div",{id:"feed",className:t.root,children:[Object(z.jsxs)(P.a,{component:"div",className:t.feedDetails,children:[Object(z.jsxs)("div",{className:t.feedHeader,children:[Object(z.jsx)(R.a,{variant:"h4",children:Object(z.jsx)(ne.a,{href:r.link,target:"_blank",rel:"noreferrer",color:"inherit",underline:"none",children:r.title})}),Object(z.jsxs)("div",{className:t.feedToolbar,children:[0===f.length?Object(z.jsx)(K.a,{title:"All Read",children:Object(z.jsx)(U.a,{children:Object(z.jsx)(Ce.a,{})})}):Object(z.jsx)(K.a,{title:"Mark as Read",children:Object(z.jsx)(Se.a,{anchorOrigin:{vertical:"top",horizontal:"left"},badgeContent:f.length,color:"primary",overlap:"circle",max:999,children:Object(z.jsx)(U.a,{onClick:function(){k(r._id).then((function(e){C(e)})).catch((function(e){console.log(e)}))},children:Object(z.jsx)(ie.a,{})})})}),Object(z.jsx)(K.a,{title:"Refresh",children:Object(z.jsx)(U.a,{onClick:function(){return Q()},children:Object(z.jsx)(Ie.a,{})})}),Object(z.jsx)(ye,Object(o.a)({feed:r,history:e.history,setUserFeeds:e.setUserFeeds},e))]})]}),r.description?Object(z.jsx)(R.a,{variant:"subtitle1",children:r.description}):Object(z.jsx)(z.Fragment,{}),r.category?Object(z.jsxs)(R.a,{variant:"subtitle2",paragraph:!0,children:["Category: ",r.category.join(", "),", ",r.feedItems," articles"]}):Object(z.jsxs)(R.a,{variant:"subtitle2",paragraph:!0,children:[r.feedItems," articles"]})]}),Object(z.jsx)(F.a,{}),Object(z.jsx)(ke.a,{className:t.feedList,children:Object(z.jsx)(Te.a,{dataLength:I.length,next:function(){m(r._id,e.searchQuery,I.length,e.itemPerPage).then((function(e){0===e.length?D(!1):T(I.concat(e))})).catch((function(e){console.log(e)}))},hasMore:W,loader:Object(z.jsx)(H.a,{}),scrollableTarget:"content",children:I.map((function(t){return Object(z.jsx)(ue,Object(o.a)({feedTitle:r.title,item:t,handleStarItem:E,handleUnstarItem:L,starred:j.includes(t._id),handleMarkRead:B,handleUnmarkRead:A,unread:f.includes(t._id)},e),t._id)}))})})]}):Object(z.jsx)(H.a,{})}var Fe=n(28),Ue=n(261),Pe=n(189),Me=n(68),We=n.n(Me),De=n(260),Ee=n(91),ze=n.n(Ee),Le=n(236),Be=n(258),He=Object(S.a)((function(e){return{appBar:{position:"relative"},search:Object(j.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(N.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(N.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"100%"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},menuButton:{display:"flex",justifyContent:"center"}}})),Ae=c.a.forwardRef((function(e,t){return Object(z.jsx)(Pe.a,Object(o.a)({direction:"up",ref:t},e))}));function Qe(e){var t=He(),n=Object(a.useState)(!1),r=Object(s.a)(n,2),i=r[0],o=r[1],l=Object(a.useState)(!1),j=Object(s.a)(l,2),u=j[0],b=j[1],m=Object(a.useState)(null),f=Object(s.a)(m,2),x=f[0],p=f[1],g=Object(a.useState)(null),v=Object(s.a)(g,2),y=v[0],k=v[1],w=Object(a.useState)(""),C=Object(s.a)(w,2),S=C[0],N=C[1],I=Object(a.useState)(""),R=Object(s.a)(I,2),F=R[0],P=R[1],M=Object(a.useState)(null),W=Object(s.a)(M,2),D=W[0],E=W[1],L=c.a.useRef(),B=Object(d.g)(),V=function(){o(!0),b(!0),N(""),h.a.get("/api/feeds/all").then((function(e){return e.data})).catch((function(e){return e})).then((function(e){b(!1),p(e),k(e)})).catch((function(e){console.log(e)}))},G=function(){o(!1),E(null),P("")},J=function(){var t;E(L.current),b(!0),(t=S,h.a.post("/api/feeds",{url:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))).then((function(t){b(!1),t.message?P(t.message):(P(""),E(null),o(!1),e.updateUserFeeds(),B.push("/".concat(t._id)))})).catch((function(e){console.log(e)}))};return y?Object(z.jsxs)("div",{children:[Object(z.jsx)(K.a,{title:"Add new feed",placement:"right",children:Object(z.jsxs)(A.a,{button:!0,onClick:V,children:[Object(z.jsx)(Q.a,{className:t.menuButton,children:Object(z.jsx)(U.a,{edge:"start",color:"inherit",children:Object(z.jsx)(We.a,{})})}),Object(z.jsx)(q.a,{primary:"Add new feed"})]})}),Object(z.jsxs)(fe.a,{fullScreen:!0,open:i,onClose:G,TransitionComponent:Ae,children:[Object(z.jsx)(T.a,{className:t.appBar,children:Object(z.jsxs)(_.a,{children:[Object(z.jsx)(U.a,{edge:"start",color:"inherit",onClick:G,children:Object(z.jsx)(te.a,{})}),Object(z.jsxs)("div",{className:t.search,ref:L,children:[Object(z.jsx)("div",{className:t.searchIcon,children:Object(z.jsx)(ze.a,{})}),Object(z.jsx)(De.a,{placeholder:"Search or enter URL",classes:{root:t.inputRoot,input:t.inputInput},value:S,onChange:function(e){N(e.target.value);var t=e.target.value?x.filter((function(t){return t.title.toLowerCase().includes(e.target.value.toLowerCase())||t.feedUrl.toLowerCase().includes(e.target.value.toLowerCase())})):x;k(t)},fullWidth:!0,autofocus:!0})]}),u?Object(z.jsx)(U.a,{disabled:!0,color:"inherit",onClick:J,children:Object(z.jsx)(We.a,{})}):Object(z.jsx)(U.a,{color:"inherit",onClick:J,children:Object(z.jsx)(We.a,{})}),Object(z.jsx)(Le.a,{id:"error-popover",open:!!F,anchorEl:D,onClose:function(){return P("")},anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:Object(z.jsx)(Be.a,{severity:"error",children:F})})]})}),u?Object(z.jsx)(H.a,{}):Object(z.jsx)(ke.a,{children:y.map((function(e){return Object(z.jsxs)(A.a,{button:!0,onClick:function(){return N(e.feedUrl)},children:[Object(z.jsx)(Q.a,{children:Object(z.jsx)(Ue.a,{variant:"rounded",src:O(e.link),alt:e.title})}),Object(z.jsx)(q.a,{primary:e.title})]},e._id)}))})]})]}):Object(z.jsx)(K.a,{title:"Add new feed",placement:"right",children:Object(z.jsxs)(A.a,{button:!0,onClick:V,children:[Object(z.jsx)(Q.a,{className:t.menuButton,children:Object(z.jsx)(U.a,{edge:"start",color:"inherit",children:Object(z.jsx)(We.a,{})})}),Object(z.jsx)(q.a,{primary:"Add new feed"})]})})}var qe=n(248),Ve=n(122),Ge=n.n(Ve),Je=n(121),Xe=n.n(Je),Ye=Object(S.a)((function(e){return{menuButton:{display:"flex",justifyContent:"center"},feedTitle:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}}));function Ke(e){var t=Ye();return e.userFeeds?Object(z.jsxs)(ke.a,{children:[Object(z.jsx)(K.a,{title:"All feeds",placement:"right",children:Object(z.jsxs)(A.a,{button:!0,component:Fe.c,to:"/all",activeClassName:"Mui-selected",children:[Object(z.jsx)(Q.a,{className:t.menuButton,children:Object(z.jsx)(U.a,{edge:"start",color:"inherit",children:Object(z.jsx)(Xe.a,{})})}),Object(z.jsx)(q.a,{primary:"All feeds"})]})}),Object(z.jsx)(K.a,{title:"Read later",placement:"right",children:Object(z.jsxs)(A.a,{button:!0,component:Fe.c,to:"/read-later",activeClassName:"Mui-selected",children:[Object(z.jsx)(Q.a,{className:t.menuButton,children:Object(z.jsx)(U.a,{edge:"start",color:"inherit",children:Object(z.jsx)(Ge.a,{})})}),Object(z.jsx)(q.a,{primary:"Read later"})]})}),e.userFeeds.map((function(e){return Object(z.jsx)(K.a,{title:e.title,placement:"right",children:Object(z.jsxs)(A.a,{button:!0,component:Fe.c,to:"/".concat(e._id),activeClassName:"Mui-selected",children:[Object(z.jsx)(qe.a,{children:Object(z.jsx)(Ue.a,{variant:"rounded",src:O(e.link),alt:e.title})}),Object(z.jsx)(q.a,{primary:e.title,className:t.feedTitle})]})},e._id)})),Object(z.jsx)(Qe,{updateUserFeeds:function(){return e.updateUserFeeds()},setUserFeeds:e.setUserFeeds})]}):Object(z.jsx)(H.a,{})}var Ze=Object(S.a)((function(e){return{feedItem:{padding:e.spacing(0,9,3,9)},feedItemHeading:{paddingBottom:e.spacing(1)},itemHeader:{display:"flex",justifyContent:"space-between",alignItems:"center"},itemTitle:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},itemInfo:{display:"flex"},itemFeed:{whiteSpace:"nowrap",textAlign:"right"},itemAge:{textAlign:"right",width:e.spacing(6)},toolbar:{paddingBottom:e.spacing(2)},highlight:{color:"inherit",backgroundColor:e.palette.primary.main}}}));function $e(e){var t=Ze(),n=Object(a.useState)(!1),c=Object(s.a)(n,2),r=c[0],i=c[1],o=function(){i(!r)};return Object(z.jsxs)(z.Fragment,{children:[r?Object(z.jsxs)(A.a,{dense:!0,onClick:o,children:[Object(z.jsx)(q.a,{}),e.unread?Object(z.jsx)(K.a,{title:"Mark read",children:Object(z.jsx)(U.a,{size:"small",onClick:function(){return e.handleMarkRead(e.item._id)},children:Object(z.jsx)(ie.a,{})})}):Object(z.jsx)(K.a,{title:"Close",children:Object(z.jsx)(U.a,{size:"small",children:Object(z.jsx)(te.a,{})})})]}):Object(z.jsxs)(A.a,{button:!0,dense:!0,children:[Object(z.jsx)(Q.a,{children:Object(z.jsx)(K.a,{title:"Read later",children:e.starred?Object(z.jsx)(U.a,{size:"small",onClick:function(){return e.handleUnstarItem(e.item._id)},children:Object(z.jsx)(J.a,{fontSize:"small",color:e.unread?"inherit":"disabled"})}):Object(z.jsx)(U.a,{size:"small",onClick:function(){return e.handleStarItem(e.item._id)},children:Object(z.jsx)(Y.a,{fontSize:"small",color:e.unread?"inherit":"disabled"})})})}),Object(z.jsx)(q.a,{onClick:o,primary:Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)("div",{className:t.itemHeader,children:[Object(z.jsx)(R.a,{className:t.itemTitle,color:e.unread?"textPrimary":"textSecondary",children:Object(z.jsx)(de.a,{highlightClassName:t.highlight,searchWords:[e.searchQuery],autoEscape:!0,textToHighlight:e.item.title})}),Object(z.jsxs)("div",{className:t.itemInfo,children:[Object(z.jsx)("div",{className:t.itemFeed,children:Object(z.jsx)(R.a,{variant:"caption",color:e.unread?"textPrimary":"textSecondary",children:e.item.feed.title})}),Object(z.jsx)("div",{className:t.itemAge,children:Object(z.jsx)(R.a,{variant:"caption",color:e.unread?"textPrimary":"textSecondary",children:f(e.item.isoDate)})})]})]})})})]}),Object(z.jsx)(V.a,{in:r,timeout:"auto",unmountOnExit:!0,children:Object(z.jsxs)(P.a,{component:"div",className:t.feedItem,children:[Object(z.jsx)(R.a,{variant:"h5",color:e.unread?"textPrimary":"textSecondary",className:t.feedItemHeading,children:e.unread?Object(z.jsx)(ne.a,{href:e.item.link,target:"_blank",rel:"noreferrer",color:"inherit",underline:"none",onClick:function(){return e.handleMarkRead(e.item._id)},children:Object(z.jsx)(de.a,{highlightClassName:t.highlight,searchWords:[e.searchQuery],autoEscape:!0,textToHighlight:e.item.title})}):Object(z.jsx)(ne.a,{href:e.item.link,target:"_blank",rel:"noreferrer",color:"inherit",underline:"none",children:Object(z.jsx)(de.a,{highlightClassName:t.highlight,searchWords:[e.searchQuery],autoEscape:!0,textToHighlight:e.item.title})})}),e.item.author||e.item.creator?Object(z.jsxs)(R.a,{variant:"subtitle2",paragraph:!0,children:[e.item.feed.title," by ",e.item.author||e.item.creator,", ",new Date(e.item.isoDate).toLocaleString()," ",e.unread?"":Object(z.jsx)(ne.a,{href:"#",color:"textSecondary",onClick:function(){return e.handleUnmarkRead(e.item._id)},children:"mark unread"})]}):Object(z.jsxs)(R.a,{variant:"subtitle2",paragraph:!0,children:[e.item.feed.title,", ",new Date(e.item.isoDate).toLocaleString()," ",e.unread?"":Object(z.jsx)(ne.a,{href:"#",color:"textSecondary",onClick:function(){return e.handleUnmarkRead(e.item._id)},children:"mark unread"})]}),e.item.categories.length>0?Object(z.jsxs)(R.a,{variant:"subtitle2",paragraph:!0,children:["Category: ",e.item.categories.join(", ")]}):Object(z.jsx)(z.Fragment,{}),Object(z.jsxs)($.a,{className:t.toolbar,children:[Object(z.jsx)(K.a,{title:"Read later",children:e.starred?Object(z.jsx)(Z.a,{"aria-label":"read later",onClick:function(){return e.handleUnstarItem(e.item._id)},children:Object(z.jsx)(J.a,{})}):Object(z.jsx)(Z.a,{"aria-label":"read later",onClick:function(){return e.handleStarItem(e.item._id)},children:Object(z.jsx)(Y.a,{})})}),Object(z.jsx)(Z.a,{children:Object(z.jsx)(se.a,{})})]}),e.item["content:encoded"]||e.item.content?Object(z.jsx)(R.a,{variant:"body1",paragraph:!0,dangerouslySetInnerHTML:{__html:ce.a.sanitize(e.item["content:encoded"]||e.item.content)}}):Object(z.jsx)(z.Fragment,{}),e.unread?Object(z.jsx)(Z.a,{href:e.item.link,target:"_blank",rel:"noreferrer",variant:"outlined",fullWidth:!0,onClick:function(){return e.handleMarkRead(e.item._id)},children:"Visit Website"}):Object(z.jsx)(Z.a,{href:e.item.link,target:"_blank",rel:"noreferrer",variant:"outlined",fullWidth:!0,children:"Visit Website"})]})}),Object(z.jsx)(F.a,{})]})}var et=Object(S.a)((function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},feedDetails:{paddingTop:e.spacing(2),maxWidth:"100%"},feedHeader:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},feedToolbar:{display:"flex"},feedList:{padding:0}}}));function tt(e){var t=et(),n=Object(a.useState)(null),c=Object(s.a)(n,2),r=c[0],i=c[1],l=Object(a.useState)(null),d=Object(s.a)(l,2),j=d[0],u=d[1],h=Object(a.useState)(null),O=Object(s.a)(h,2),f=O[0],C=O[1],S=Object(a.useState)(null),N=Object(s.a)(S,2),I=N[0],T=N[1],_=Object(a.useState)(!0),M=Object(s.a)(_,2),W=M[0],D=M[1],E=function(e){x(e).then((function(e){e.message?console.log(e.message):u(e)})).catch((function(e){console.log(e)}))},L=function(e){p(e).then((function(e){u(e)})).catch((function(e){console.log(e)}))},B=function(t){v(t).then((function(t){t.message?console.log(t.message):w(e.id).then((function(e){C(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},A=function(t){y(t).then((function(){w(e.id).then((function(e){C(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))},Q=function(){e.setTitle(e.title),T(null),D(!0),b(e.id,e.searchQuery).then((function(t){i(t),w(e.id).then((function(t){C(t),g().then((function(t){u(t),m(e.id,e.searchQuery,0,e.itemPerPage).then((function(e){T(e)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))};return Object(a.useEffect)((function(){Q()}),[e.title,e.searchQuery]),I?0===I.length?Object(z.jsx)(z.Fragment,{}):Object(z.jsxs)("div",{className:t.root,children:[Object(z.jsxs)(P.a,{component:"div",className:t.feedDetails,children:[Object(z.jsxs)("div",{className:t.feedHeader,children:[Object(z.jsx)(R.a,{variant:"h4",children:e.title}),Object(z.jsxs)("div",{className:t.feedToolbar,children:[0===f.length?Object(z.jsx)(K.a,{title:"All Read",children:Object(z.jsx)(U.a,{children:Object(z.jsx)(Ce.a,{})})}):Object(z.jsx)(K.a,{title:"Mark as Read",children:Object(z.jsx)(Se.a,{anchorOrigin:{vertical:"top",horizontal:"left"},badgeContent:f.length,color:"primary",overlap:"circle",max:999,children:Object(z.jsx)(U.a,{onClick:function(){k(e.id).then((function(e){C(e)})).catch((function(e){console.log(e)}))},children:Object(z.jsx)(ie.a,{})})})}),Object(z.jsx)(K.a,{title:"Refresh",children:Object(z.jsx)(U.a,{onClick:function(){return Q()},children:Object(z.jsx)(Ie.a,{})})}),Object(z.jsx)(K.a,{title:"More options",children:Object(z.jsx)(U.a,{children:Object(z.jsx)(se.a,{})})})]})]}),r.description?Object(z.jsx)(R.a,{variant:"subtitle1",children:r.description}):Object(z.jsx)(z.Fragment,{}),r.category?Object(z.jsxs)(R.a,{variant:"subtitle2",paragraph:!0,children:["Category: ",r.category.join(", "),", ",r.feedItems," articles"]}):Object(z.jsxs)(R.a,{variant:"subtitle2",paragraph:!0,children:[r.feedItems," articles"]})]}),Object(z.jsx)(F.a,{}),Object(z.jsx)(ke.a,{className:t.feedList,children:Object(z.jsx)(Te.a,{dataLength:I.length,next:function(){m(e.id,e.searchQuery,I.length,e.itemPerPage).then((function(e){0===e.length?D(!1):T(I.concat(e))})).catch((function(e){console.log(e)}))},hasMore:W,loader:Object(z.jsx)(H.a,{}),scrollableTarget:"content",children:I.map((function(t){return Object(z.jsx)($e,Object(o.a)({feedTitle:t.feed.title,item:t,handleStarItem:E,handleUnstarItem:L,starred:j.includes(t._id),handleMarkRead:B,handleUnmarkRead:A,unread:f.includes(t._id)},e),t._id)}))})})]}):Object(z.jsx)(H.a,{})}var nt=n(249),at=n(250),ct=Object(S.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(4)}}}));function rt(e){var t=ct(),n=Object(nt.a)({target:e.contentRef.current,disableHysteresis:!0,threshold:100});return Object(z.jsx)(at.a,{in:n,children:Object(z.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:t.root,children:e.children})})}function it(e){var t=c.a.useState(null),n=Object(s.a)(t,2),a=n[0],r=n[1],i=function(){r(null)};return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(K.a,{title:"Account",children:Object(z.jsx)(U.a,{edge:"end",onClick:function(e){r(e.currentTarget)},color:"inherit",children:Object(z.jsx)(Ue.a,{src:" ",alt:e.user.username})})}),Object(z.jsxs)(he.a,{anchorEl:a,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},id:"account-menu",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"center"},open:Boolean(a),onClose:i,children:[Object(z.jsx)(be.a,{onClick:i,children:"Profile"}),Object(z.jsx)(be.a,{onClick:function(){h.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data})).then((function(){e.setUser(null),e.history.push("/signin")})).catch((function(e){console.log(e)}))},children:"Sign Out"})]})]})}var ot=n(93),st=n(124),lt=n.n(st),dt=n(125),jt=n.n(dt),ut=n(253),ht=n(126),bt=n.n(ht),mt=Object(S.a)((function(e){var t;return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:300,height:"100vh",overflow:"auto",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:(t={height:"100vh",overflow:"auto",overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},Object(j.a)(t,e.breakpoints.up("sm"),{width:e.spacing(9)}),Object(j.a)(t,"&::-webkit-scrollbar",{width:"2px"}),t),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{padding:0,maxWidth:"100%"},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},search:Object(j.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(N.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(N.b)(e.palette.common.white,.25)},marginLeft:0,marginRight:e.spacing(1),width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(j.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function Ot(e){var t=mt(),n=Object(ot.b)(),r=n.dark,i=n.toggleDark,j=Object(a.useState)(!1),u=Object(s.a)(j,2),b=u[0],m=u[1],O=Object(a.useState)("Paperboy"),f=Object(s.a)(O,2),x=f[0],p=f[1],g=Object(a.useState)([]),v=Object(s.a)(g,2),y=v[0],k=v[1],w=Object(a.useState)(""),S=Object(s.a)(w,2),N=S[0],M=S[1],D=c.a.useRef(),E=function(){h.a.get("/api/feeds").then((function(e){return e.data})).catch((function(e){return e})).then((function(e){k(e)})).catch((function(e){console.log(e)}))};return Object(a.useEffect)((function(){E()}),[]),Object(z.jsxs)("div",{className:t.root,children:[Object(z.jsx)(l.a,{}),Object(z.jsx)(T.a,{className:t.appBar,children:Object(z.jsxs)(_.a,{children:[Object(z.jsx)(U.a,{edge:"start",color:"inherit",onClick:function(){b&&m(!1),b||m(!0)},className:t.menuButton,children:Object(z.jsx)(W.a,{})}),Object(z.jsx)(R.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:t.title,children:x}),Object(z.jsxs)("div",{className:t.search,children:[Object(z.jsx)("div",{className:t.searchIcon,children:Object(z.jsx)(ze.a,{})}),Object(z.jsx)(De.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},value:N,onChange:function(e){M(e.target.value)}})]}),Object(z.jsx)(K.a,{title:"Toggle dark mode",children:Object(z.jsx)(U.a,{onClick:i,color:"inherit",children:r?Object(z.jsx)(lt.a,{}):Object(z.jsx)(jt.a,{})})}),Object(z.jsx)(it,Object(o.a)({},e))]})}),Object(z.jsxs)(I.a,{className:t.drawer,variant:"permanent",classes:{paper:Object(C.a)(t.drawerPaper,!b&&t.drawerPaperClose)},open:b,children:[Object(z.jsx)(_.a,{}),Object(z.jsx)(Ke,{userFeeds:y,setUserFeeds:k,updateUserFeeds:E}),Object(z.jsx)(F.a,{})]}),Object(z.jsxs)("main",{id:"content",className:t.content,ref:D,children:[Object(z.jsx)(_.a,{id:"back-to-top-anchor"}),Object(z.jsxs)(P.a,{className:t.container,children:[Object(z.jsxs)(d.d,{children:[Object(z.jsx)(d.b,{exact:!0,path:"/all",render:function(e){return Object(z.jsx)(tt,Object(o.a)({setTitle:p,id:"all",title:"All feeds",searchQuery:N,itemPerPage:40},e))}}),Object(z.jsx)(d.b,{exact:!0,path:"/read-later",render:function(e){return Object(z.jsx)(tt,Object(o.a)({setTitle:p,id:"starred",title:"Read later",searchQuery:N,itemPerPage:40},e))}}),Object(z.jsx)(d.b,{exact:!0,path:"/:id",render:function(e){return Object(z.jsx)(Re,Object(o.a)({setTitle:p,setUserFeeds:k,searchQuery:N,itemPerPage:40},e))}}),Object(z.jsx)(d.b,{exact:!0,path:"/",render:function(e){return Object(z.jsx)(B,Object(o.a)({setTitle:p,userFeeds:y,user:e.user},e))}})]}),Object(z.jsx)(rt,Object(o.a)(Object(o.a)({contentRef:D},e),{},{children:Object(z.jsx)(ut.a,{color:"primary",size:"small",children:Object(z.jsx)(bt.a,{})})}))]})]})]})}var ft=n(257),xt=n(69),pt=n(254),gt=n(92),vt=n.n(gt),yt=n(255),kt=n(256),wt=Object(S.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://images.unsplash.com/photo-1541613569553-332a2574a508)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center",display:"flex",flexDirection:"column",alignItems:"flex-end"},card:{margin:e.spacing(16,4)},welcome:{padding:e.spacing(2),display:"flex",flexDirection:"column",alignItems:"flex-end"},heading:{marginBottom:e.spacing(1)},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Ct(e){var t=wt(),n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(""),d=Object(s.a)(o,2),j=d[0],u=d[1],b=Object(a.useState)(""),m=Object(s.a)(b,2),O=m[0],f=m[1],x=Object(a.useState)(""),p=Object(s.a)(x,2),g=p[0],v=p[1];return Object(z.jsxs)(pt.a,{container:!0,component:"main",className:t.root,children:[Object(z.jsx)(l.a,{}),Object(z.jsx)(pt.a,{item:!0,xs:!1,sm:4,md:7,className:t.image,children:Object(z.jsx)(yt.a,{className:t.card,children:Object(z.jsx)(kt.a,{children:Object(z.jsxs)("div",{className:t.welcome,children:[Object(z.jsx)(R.a,{component:"h1",variant:"h5",children:"Welcome to"}),Object(z.jsx)(R.a,{component:"h1",variant:"h2",className:t.heading,children:"Paperboy"}),Object(z.jsx)(R.a,{component:"h1",variant:"h4",className:t.heading,children:"News feed reader and aggreagtor"})]})})})}),Object(z.jsx)(pt.a,{item:!0,xs:12,sm:8,md:5,component:xt.a,elevation:6,square:!0,children:Object(z.jsxs)("div",{className:t.paper,children:[Object(z.jsx)(Ue.a,{className:t.avatar,children:Object(z.jsx)(vt.a,{})}),Object(z.jsx)(R.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(z.jsxs)("form",{className:t.form,onSubmit:function(t){t.preventDefault(),function(e,t){return h.a.post("/api/auth/login",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))}(r,j).then((function(t){t.usernameError?(f(t.usernameError),v("")):t.passwordError?(f(""),v(t.passwordError)):(e.setUser(t),e.history.push("/"))}))},noValidate:!0,children:[Object(z.jsx)(ft.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0,value:r,onChange:function(e){return i(e.target.value)},error:!!O,helperText:O}),Object(z.jsx)(ft.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:j,onChange:function(e){return u(e.target.value)},error:!!g,helperText:g}),Object(z.jsx)(Z.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign In"}),Object(z.jsx)(pt.a,{container:!0,children:Object(z.jsx)(pt.a,{item:!0,children:Object(z.jsx)(ne.a,{component:Fe.b,to:"/signup",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]})})]})}var St=Object(S.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function Nt(e){var t=St(),n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(""),d=Object(s.a)(o,2),j=d[0],u=d[1],b=Object(a.useState)(""),m=Object(s.a)(b,2),O=m[0],f=m[1],x=Object(a.useState)(""),p=Object(s.a)(x,2),g=p[0],v=p[1],y=Object(a.useState)(""),k=Object(s.a)(y,2),w=k[0],C=k[1],S=Object(a.useState)(""),N=Object(s.a)(S,2),I=N[0],T=N[1];return Object(z.jsxs)(P.a,{component:"main",maxWidth:"xs",children:[Object(z.jsx)(l.a,{}),Object(z.jsxs)("div",{className:t.paper,children:[Object(z.jsx)(Ue.a,{className:t.avatar,children:Object(z.jsx)(vt.a,{})}),Object(z.jsx)(R.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(z.jsxs)("form",{className:t.form,onSubmit:function(t){t.preventDefault(),j===O?function(e,t){return h.a.post("/api/auth/signup",{username:e,password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))}(r,j).then((function(t){t.usernameError?(v(t.usernameError),C("")):t.passwordError?(v(""),C(t.passwordError)):(e.setUser(t),e.history.push("/"))})):T("Passwords do not match")},noValidate:!0,children:[Object(z.jsxs)(pt.a,{container:!0,spacing:2,children:[Object(z.jsx)(pt.a,{item:!0,xs:12,children:Object(z.jsx)(ft.a,{variant:"outlined",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",value:r,onChange:function(e){return i(e.target.value)},error:!!g,helperText:g,autoFocus:!0})}),Object(z.jsx)(pt.a,{item:!0,xs:12,children:Object(z.jsx)(ft.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",value:j,onChange:function(e){return u(e.target.value)},error:!!w,helperText:w})}),Object(z.jsx)(pt.a,{item:!0,xs:12,children:Object(z.jsx)(ft.a,{variant:"outlined",required:!0,fullWidth:!0,name:"confirm",label:"Confirm",type:"password",id:"confirm",value:O,onChange:function(e){return f(e.target.value)},error:!!I,helperText:I})})]}),Object(z.jsx)(Z.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:t.submit,children:"Sign Up"}),Object(z.jsx)(pt.a,{container:!0,justify:"flex-end",children:Object(z.jsx)(pt.a,{item:!0,children:Object(z.jsx)(ne.a,{component:Fe.b,to:"/signin",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})}var It=function(e){var t=c.a.useState(e.user),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(l.a,{}),Object(z.jsx)(d.b,{path:"/",render:function(e){return a?Object(z.jsx)(Ot,Object(o.a)({setUser:r,user:a},e)):Object(z.jsx)(d.a,{to:"/signin"})}}),Object(z.jsx)(d.b,{exact:!0,path:"/signin",render:function(e){return Object(z.jsx)(Ct,Object(o.a)({setUser:r},e))}}),Object(z.jsx)(d.b,{exact:!0,path:"/signup",render:function(e){return Object(z.jsx)(Nt,Object(o.a)({setUser:r},e))}})]})},Tt=n(127),_t=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,262)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},Rt=Object(Tt.a)({palette:{type:"light",primary:{main:"#2e7d59"}}}),Ft=Object(Tt.a)({palette:{type:"dark",primary:{main:"#2e7d59"}}});h.a.get("/api/auth/loggedin").then((function(e){var t=e.data;i.a.render(Object(z.jsx)(ot.a,{lightTheme:Rt,darkTheme:Ft,followSystem:"true",persist:"true",appId:"paperboy",children:Object(z.jsx)(Fe.a,{children:Object(z.jsx)(It,{id:"paperboy",user:t})})}),document.getElementById("root"))})).catch((function(e){console.log(e)})),_t()}},[[184,1,2]]]);
//# sourceMappingURL=main.c3bba5e2.chunk.js.map