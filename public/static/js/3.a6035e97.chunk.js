(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[3],{56:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(57);function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},57:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},58:function(e,t,a){"use strict";var n=a(22);a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return c})),a.d(t,"d",(function(){return l}));var r=function(){return{type:"REQUIRE"}},i=function(e){return{type:"MINLENGTH",val:e}},c=function(){return{type:"EMAIL"}},l=function(e,t){var a,r=!0,i=function(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,c=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw i}}}}(t);try{for(i.s();!(a=i.n()).done;){var c=a.value;"REQUIRE"===c.type&&(r=r&&e.trim().length>0),"MINLENGTH"===c.type&&(r=r&&e.trim().length>=c.val),"MAXLENGTH"===c.type&&(r=r&&e.trim().length<=c.val),"MIN"===c.type&&(r=r&&+e>=c.val),"MAX"===c.type&&(r=r&&+e<=c.val),"EMAIL"===c.type&&(r=r&&/^\S+@\S+\.\S+$/.test(e))}}catch(l){i.e(l)}finally{i.f()}return r}},59:function(e,t,a){"use strict";var n=a(8),r=a(56),i=a(0),c=a.n(i),l=a(58),u=(a(60),function(e,t){switch(t.type){case"CHANGE":return Object(r.a)(Object(r.a)({},e),{},{value:t.val,isValid:Object(l.d)(t.val,t.validators)});case"TOUCH":return Object(r.a)(Object(r.a)({},e),{},{isTouched:!0});default:return e}});t.a=function(e){var t=Object(i.useReducer)(u,{value:e.initialValue,isTouched:!1,isValid:e.initialValid}),a=Object(n.a)(t,2),r=a[0],l=a[1],o=e.id,s=e.onInput,d=r.isValid,p=r.value;Object(i.useEffect)((function(){s(o,p,d)}),[o,p,d,s]);var f=function(t){l({type:"CHANGE",val:t.target.value,validators:e.validators})},v=function(){l({type:"TOUCH"})},b="input"===e.element?c.a.createElement("input",{id:e.id,type:e.type,placeholder:e.placeholder,onChange:f,onBlur:v,value:r.value}):c.a.createElement("textarea",{id:e.id,rows:e.rows||3,onChange:f,onBlur:v,value:r.value});return c.a.createElement("div",{className:"form-control ".concat(!r.isValid&&r.isTouched&&"form-control--invalid")},c.a.createElement("label",{htmlFor:e.id},e.label),b,!r.isValid&&r.isTouched&&c.a.createElement("p",null,e.errorText))}},60:function(e,t,a){},61:function(e,t,a){"use strict";var n=a(8),r=a(57),i=a(56),c=a(0),l=function(e,t){switch(t.type){case"INPUT_CHANGE":var a=!0;for(var n in e.inputs)e.inputs[n]&&(a=n===t.inputId?a&&t.isValid:a&&e.inputs[n].isValid);return Object(i.a)(Object(i.a)({},e),{},{inputs:Object(i.a)(Object(i.a)({},e.inputs),{},Object(r.a)({},t.inputId,{value:t.value,isValid:t.isValid})),isValid:a});case"SET_DATA":return{inputs:t.inputs,isValid:t.formIsValid};default:return e}};t.a=function(e,t){var a=Object(c.useReducer)(l,{inputs:e,isValid:t}),r=Object(n.a)(a,2),i=r[0],u=r[1];return[i,Object(c.useCallback)((function(e,t,a){u({type:"INPUT_CHANGE",value:t,isValid:a,inputId:e})}),[]),Object(c.useCallback)((function(e,t){u({type:"SET_DATA",inputs:e,formIsValid:t})}),[])]}},62:function(e,t,a){"use strict";var n=a(8),r=a(0),i=a.n(r),c=a(19);a(63);t.a=function(e){var t=Object(r.useState)(),a=Object(n.a)(t,2),l=a[0],u=a[1],o=Object(r.useState)(),s=Object(n.a)(o,2),d=s[0],p=s[1],f=Object(r.useState)(!1),v=Object(n.a)(f,2),b=v[0],m=v[1],O=Object(r.useRef)();Object(r.useEffect)((function(){if(l){var e=new FileReader;e.onload=function(){p(e.result)},e.readAsDataURL(l)}}),[l]);return i.a.createElement("div",{className:"form-control"},i.a.createElement("input",{id:e.id,ref:O,style:{display:"none"},type:"file",accept:".jpg,.png,.jpeg",onChange:function(t){var a,n=b;t.target.files&&1===t.target.files.length?(a=t.target.files[0],u(a),m(!0),n=!0):(m(!1),n=!1),e.onInput(e.id,a,n)}}),i.a.createElement("div",{className:"image-upload ".concat(e.center&&"center")},i.a.createElement("div",{className:"image-upload__preview"},d&&i.a.createElement("img",{src:d,alt:"Preview"}),!d&&i.a.createElement("p",null,"Please pick an image.")),i.a.createElement(c.a,{type:"button",onClick:function(){O.current.click()}},"PICK IMAGE")),!b&&i.a.createElement("p",null,e.errorText))}},63:function(e,t,a){},64:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a.n(n),i=a(12),c=a(8),l=a(0),u=a.n(l),o=a(1),s=a(59),d=a(19),p=a(62),f=a(14),v=a(61),b=a(21),m=a(20),O=a(13),j=a(58);a(64);t.default=function(){var e=Object(l.useContext)(f.a),t=Object(o.g)(),a=Object(b.a)(),n=a.sendRequest,y=a.isLoading,E=a.error,h=a.clearError,g=Object(v.a)({title:{value:"",isValid:!1},description:{value:"",isValid:!1},address:{value:"",isValid:!1},image:{value:"",isValid:!1}},!1),I=Object(c.a)(g,2),T=I[0],w=I[1],V=function(){var a=Object(i.a)(r.a.mark((function a(i){var c;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return i.preventDefault(),a.prev=1,(c=new FormData).append("title",T.inputs.title.value),c.append("description",T.inputs.description.value),c.append("address",T.inputs.address.value),c.append("image",T.inputs.image.value),a.next=9,n("http://localhost:5000/api/places","POST",c,{Authorization:"Bearer "+e.token});case 9:t.push("/"),a.next=14;break;case 12:a.prev=12,a.t0=a.catch(1);case 14:case"end":return a.stop()}}),a,null,[[1,12]])})));return function(e){return a.apply(this,arguments)}}();return u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{error:E,onClear:h}),u.a.createElement("form",{className:"place-form",onSubmit:V},y&&u.a.createElement(O.a,{asOverlay:!0}),u.a.createElement(s.a,{id:"title",element:"input",type:"text",label:"Title",validators:[Object(j.c)()],errorText:"Please enter a valid title.",onInput:w}),u.a.createElement(s.a,{id:"description",element:"textarea",label:"Description",validators:[Object(j.b)(5)],errorText:"Please enter a valid description (at least 5 characters).",onInput:w}),u.a.createElement(s.a,{id:"address",element:"input",label:"Address",validators:[Object(j.c)()],errorText:"Please enter a valid address.",onInput:w}),u.a.createElement(p.a,{id:"image",center:!0,onInput:w,errorText:"Please enter a valid image!"}),u.a.createElement(d.a,{type:"submit",disabled:!T.isValid},"ADD PLACE")))}}}]);
//# sourceMappingURL=3.a6035e97.chunk.js.map