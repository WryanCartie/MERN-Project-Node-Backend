(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(11),c=a.n(n),r=a(12),l=a(8),o=a(0),s=a.n(o),i=a(15),u=a(19),m=a(14),p=(a(65),a(25)),d=a(13),f=a(20),E=(a(66),function(e){var t=Object(o.useRef)(),a=e.center,n=e.zoom;return Object(o.useEffect)((function(){new window.ol.Map({target:t.current.id,layers:[new window.ol.layer.Tile({source:new window.ol.source.OSM})],view:new window.ol.View({center:window.ol.proj.fromLonLat([a.lng,a.lat]),zoom:n})})}),[a,n]),s.a.createElement("div",{ref:t,className:"map ".concat(e.className),style:e.style,id:"map"})}),h=a(21),v=function(e){var t=Object(o.useContext)(m.a),a=Object(o.useState)(!1),n=Object(l.a)(a,2),v=n[0],w=n[1],b=Object(o.useState)(!1),O=Object(l.a)(b,2),k=O[0],C=O[1],g=Object(h.a)(),j=g.sendRequest,N=g.isLoading,_=g.error,y=g.clearError,D=function(e){e.preventDefault(),w(!1)},I=function(){var a=Object(r.a)(c.a.mark((function a(n){return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),C(!1),a.prev=2,a.next=5,j("".concat("https://mern-places-app-rest-backend.herokuapp.com/api","/places/").concat(e.id),"DELETE",null,{Authorization:"Bearer "+t.token});case 5:e.onDelete(e.id),a.next=10;break;case 8:a.prev=8,a.t0=a.catch(2);case 10:case"end":return a.stop()}}),a,null,[[2,8]])})));return function(e){return a.apply(this,arguments)}}(),L=function(e){e.preventDefault(),C(!1)};return s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,{error:_,onClear:y}),s.a.createElement(p.a,{show:v,onCancel:D,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:s.a.createElement(u.a,{onClick:D},"CLOSE")},s.a.createElement("div",{className:"map-container"},s.a.createElement(E,{center:e.coordinates,zoom:16}))),s.a.createElement(p.a,{show:k,onCancel:L,header:"Are you sure ?",footerClass:"place-item__modal-actions",footer:s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,{inverse:!0,onClick:L},"CANCEL"),s.a.createElement(u.a,{danger:!0,onClick:I},"CONFIRM"))},s.a.createElement("p",null," ","Are you sure you want to proceed with this action ? This action cannot be undone thereafter"," ")),s.a.createElement("li",{className:"place-item"},N&&s.a.createElement(d.a,{asOverlay:!0}),s.a.createElement(i.a,{className:"place-item__content"},s.a.createElement("div",{className:"place-item__image"},s.a.createElement("img",{src:"".concat("https://mern-places-app-rest-backend.herokuapp.com/","/").concat(e.image),alt:e.title})),s.a.createElement("div",{className:"place-item__info"},s.a.createElement("h2",null,e.title),s.a.createElement("h3",null,e.address),s.a.createElement("p",null,e.description)),s.a.createElement("div",{className:"place-item__actions"},s.a.createElement(u.a,{onClick:function(e){e.preventDefault(),w(!0)},inverse:!0},"VIEW ON MAP"," "),t.userId===e.creatorId&&s.a.createElement(u.a,{to:"/places/".concat(e.id)},"EDIT"),t.userId===e.creatorId&&s.a.createElement(u.a,{dange:!0,onClick:function(){C(!0)}},"DELETE")))))},w=(a(67),function(e){return 0===e.items.length?s.a.createElement("div",{className:"place-list center"},s.a.createElement(i.a,null,s.a.createElement("h2",null,"No places found. Maybe create a new place ?"),s.a.createElement(u.a,{to:"/places/new"},"Share Place"))):s.a.createElement("ul",{className:"place-list"},e.items.map((function(t){return s.a.createElement(v,{key:t.id,id:t.id,image:t.image,title:t.title,description:t.description,address:t.address,creatorId:t.creator,coordinates:t.location,onDelete:e.onDeletePlace})})))}),b=a(1);t.default=function(){var e=Object(b.h)().userId,t=Object(h.a)(),a=t.sendRequest,n=t.isLoading,i=t.error,u=t.clearError,m=Object(o.useState)([]),p=Object(l.a)(m,2),E=p[0],v=p[1];Object(o.useEffect)((function(){(function(){var t=Object(r.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("".concat("https://mern-places-app-rest-backend.herokuapp.com/api","/places/user/").concat(e));case 3:n=t.sent,v(n.places),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[a,e]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,{error:i,onClear:u}),n&&s.a.createElement("div",{className:"center"},s.a.createElement(d.a,null)),!n&&E&&s.a.createElement(w,{onDeletePlace:function(e){v((function(t){return t.filter((function(t){return t.id!==e}))}))},items:E}))}}}]);
//# sourceMappingURL=6.3ab39814.chunk.js.map