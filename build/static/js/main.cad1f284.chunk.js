(this["webpackJsonpscrimba-cart"]=this["webpackJsonpscrimba-cart"]||[]).push([[0],{10:function(e,t,a){e.exports=a(22)},15:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),o=(a(15),a(1)),u=Object(o.b)((function(e){return{amount:e.amount}}))((function(e){var t=e.amount;return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-center"},r.a.createElement("h3",null,"ReduxPractice"),r.a.createElement("div",{className:"nav-container"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z"})),r.a.createElement("div",{className:"amount-container"},r.a.createElement("p",{className:"total-amount"},t)))))})),m=Object(o.b)(null,(function(e,t){var a=t.id,n=t.amount;return{remove:function(){return e(function(e){return{type:"REMOVE",payload:{id:e}}}(a))},increase:function(){return e(function(e){return{type:"INCREASE",payload:{id:e}}}(a))},decrease:function(){return e(function(e,t){return{type:"DECREASE",payload:{id:e,amount:t}}}(a,n))}}}))((function(e){var t=e.img,a=e.title,n=e.price,c=e.amount,l=e.remove,o=e.increase,u=e.decrease;return r.a.createElement("div",{className:"cart-item"},r.a.createElement("img",{src:t,alt:a}),r.a.createElement("div",null,r.a.createElement("h4",null,a),r.a.createElement("h4",{className:"item-price"},"$",n),r.a.createElement("button",{onClick:function(){return l()},className:"remove-btn"},"remove")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return o()},className:"amount-btn"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"}))),r.a.createElement("p",{className:"amount"},c),r.a.createElement("button",{onClick:function(){return 1===c?l():u()},className:"amount-btn"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))))})),i=Object(o.b)((function(e){return{cart:e.cart,total:e.total}}))((function(e){var t=e.cart,a=void 0===t?[]:t,c=e.total,l=e.dispatch;return Object(n.useEffect)((function(){l({type:"GET_TOTALS"})})),0===a.length?r.a.createElement("section",{className:"cart"},r.a.createElement("header",null,r.a.createElement("h2",null,"your bag"),r.a.createElement("h4",{className:"empty-cart"},"is currently empty"))):r.a.createElement("section",{className:"cart"},r.a.createElement("header",null,r.a.createElement("h2",null,"your bag")),r.a.createElement("article",null,a.map((function(e){return r.a.createElement(m,Object.assign({key:e.id},e))}))),r.a.createElement("footer",null,r.a.createElement("hr",null),r.a.createElement("div",{className:"cart-total"},r.a.createElement("h4",null,"total ",r.a.createElement("span",null,"$",c))),r.a.createElement("button",{onClick:function(){return l({type:"CLEAR_CART"})},className:"btn clear-btn"},"clear cart")))})),s=a(4),E=a(2),p={cart:[{id:1,title:"Samsung Galaxy S7",price:23.99,img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368215/phone-2_ohtt5s.png",amount:1},{id:2,title:"google pixel ",price:20.99,img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1583371867/phone-1_gvesln.png",amount:1},{id:3,title:"Xiaomi Redmi Note 2",price:19.99,img:"https://res.cloudinary.com/diqqf3eq2/image/upload/v1583368224/phone-3_h2s6fo.png",amount:1}],amount:0,total:0};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;if("CLEAR_CART"===t.type)return Object(E.a)({},e,{cart:[]});if("INCREASE"===t.type){var a=e.cart.map((function(e){return e.id===t.payload.id?Object(E.a)({},e,{amount:e.amount+1}):e}));return Object(E.a)({},e,{cart:a})}if("DECREASE"===t.type){var n=e.cart.map((function(e){return e.id===t.payload.id?Object(E.a)({},e,{amount:e.amount-1}):e}));return Object(E.a)({},e,{cart:n})}if("REMOVE"===t.type)return Object(E.a)({},e,{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});if("GET_TOTALS"===t.type){var r=e.cart.reduce((function(e,t){var a=t.price,n=t.amount,r=a*n;return e.amount+=n,e.total+=r,e}),{amount:0,total:0}),c=r.total,l=r.amount;return c=parseFloat(c.toFixed(2)),Object(E.a)({},e,{total:c,amount:l})}return e},v=Object(s.b)(d,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var f=function(){return r.a.createElement(o.a,{store:v},r.a.createElement(u,null),r.a.createElement(i,null))};l.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.cad1f284.chunk.js.map