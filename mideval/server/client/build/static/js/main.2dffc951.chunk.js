(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],[,,,,,,,,function(e,n,t){e.exports=t(16)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(7),c=t.n(r),i=(t(13),t(1)),l=t(2),s=t(4),u=t(3),d=t(5),f=(t(14),t(15),function(e){function n(){var e;return Object(i.a)(this,n),(e=Object(s.a)(this,Object(u.a)(n).call(this))).state={error:null,isLoaded:!1,data:[]},e}return Object(d.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/ml/recommend").then((function(e){return e.json()})).then((function(n){var t;console.log(n),t=n||[],e.setState({isLoaded:!0,data:t},(function(){return console.log("Customers fetched...",n)}))}),(function(n){e.setState({isLoaded:!0,error:n})}))}},{key:"render",value:function(){return this.state.error?o.a.createElement("div",null,"Error in loading"):this.state.isLoaded?o.a.createElement("div",null,o.a.createElement("h2",null,"Customers"),o.a.createElement("ul",null,this.state.data.map((function(e){return o.a.createElement("li",{key:e.id},e.productId," ",e.customerId)})))):o.a.createElement("div",null,"Loading ...")}}]),n}(a.Component)),m=function(e){function n(){return Object(i.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{action:"/api/addCustomer",method:"POST"},o.a.createElement("input",{type:"file",accept:"image/*",capture:"camera"}),o.a.createElement("input",{name:"fname",placeholder:"name"}),o.a.createElement("input",{name:"lname",placeholder:"name"}),o.a.createElement("button",{type:"submit"},"Add"))}}]),n}(a.Component),h=function(e){function n(){return Object(i.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("nav",{class:"nav justify-content-center"},o.a.createElement("a",{class:"nav-link",href:"/"},"Automate"),o.a.createElement("a",{class:"nav-link",href:"/"},"Camera"),o.a.createElement("a",{class:"nav-link",href:"/"},"Signout"))}}]),n}(a.Component),p=function(e){function n(){return Object(i.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement(h,null)),o.a.createElement(m,null),o.a.createElement(f,null))}}]),n}(a.Component),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,n){navigator.serviceWorker.register(e).then((function(e){console.log("sw is registered"),e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(p,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");v?(!function(e,n){fetch(e).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):b(n,e)}))}else console.log("wont register sw current env:","production")}()}],[[8,1,2]]]);
//# sourceMappingURL=main.2dffc951.chunk.js.map