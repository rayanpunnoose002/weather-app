(this.webpackJsonpwheather=this.webpackJsonpwheather||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(5),a=c.n(r),i=(c(11),c(12),c(4)),j=c.n(i),d=c(6),l=c(2),h=(c(14),c(0));var b=function(e){var t=e.data;return void 0===t.name?(alert("please a valid city name"),null):Object(h.jsxs)("div",{className:"displayweather",children:[Object(h.jsxs)("div",{className:"maincard",children:[Object(h.jsxs)("span",{className:"cardtitle",children:[t.name," , ",t.sys.country,". Weather"]}),Object(h.jsxs)("span",{className:"cardsubtitle",children:["As of ",(new Date).toLocaleTimeString()]}),Object(h.jsxs)("h1",{children:[" ",Math.floor(t.main.temp-273.15),Object(h.jsx)("sup",{children:"o"})]}),Object(h.jsxs)("span",{className:"weather-description",children:[" ",t.weather[0].description]})]}),Object(h.jsxs)("div",{className:"weatherdetails",children:[Object(h.jsx)("div",{className:"section1",children:Object(h.jsxs)("table",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("h4",{children:"Humidity"})}),Object(h.jsx)("td",{children:Object(h.jsxs)("span",{children:[t.main.humidity," %"]})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("h4",{children:"Pressure"})}),Object(h.jsx)("td",{children:Object(h.jsxs)("span",{children:[t.main.pressure," hPa"]})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("h4",{children:"Visibility"})}),Object(h.jsx)("td",{children:Object(h.jsxs)("span",{children:[t.visibility/1e3," Km"]})})]})]})}),Object(h.jsx)("div",{className:"section2",children:Object(h.jsxs)("table",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("h4",{children:"Wind"})}),Object(h.jsx)("td",{children:Object(h.jsxs)("span",{children:[Math.floor(18*t.wind.speed/5)," km/hr"]})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("h4",{children:"Wind Direction"})}),Object(h.jsx)("td",{children:Object(h.jsxs)("span",{children:[t.wind.deg,Object(h.jsx)("sup",{children:"o"})," deg"]})})]})]})})]})]})};c(16);var o=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),a=Object(l.a)(r,2),i=a[0],o=a[1],u=Object(n.useState)(""),O=Object(l.a)(u,2),x=O[0],p=O[1],m="e7cdeac4b51b9d7bcb2908ed1df37098";function f(){return(f=Object(d.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault()," "!==i){e.next=5;break}alert("Enter city name"),e.next=9;break;case 5:return e.next=7,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(i,",").concat(x,"&APPID=").concat(m)).then((function(e){return e.json()})).then((function(e){return e}));case 7:c=e.sent,s({data:c});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(h.jsxs)("div",{className:"weather",children:[Object(h.jsx)("span",{className:"title",children:"PPP Weather"}),Object(h.jsx)("br",{}),Object(h.jsxs)("form",{children:[Object(h.jsx)("input",{type:"text",placeholder:"city",name:"city",onChange:function(e){return o(e.target.value)}}),"\xa0 \xa0 \xa0\xa0",Object(h.jsx)("input",{type:"text",placeholder:"Country",name:"country",onChange:function(e){return p(e.target.value)}}),Object(h.jsx)("button",{className:"getweather",onClick:function(e){return function(e){return f.apply(this,arguments)}(e)},children:"Submit"})]}),console.log(c.data),void 0!==c.data?Object(h.jsx)("div",{children:Object(h.jsx)(b,{data:c.data})}):null]})};var u=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(o,{})})},O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),r(e),a(e)}))};a.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(u,{})}),document.getElementById("root")),O()}],[[17,1,2]]]);
//# sourceMappingURL=main.8a808845.chunk.js.map