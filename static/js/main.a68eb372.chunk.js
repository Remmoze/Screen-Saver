(this.webpackJsonpscreensaver=this.webpackJsonpscreensaver||[]).push([[0],{130:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(38),o=n.n(r),c=n(87),s=n(195),l=n(182),h=n(6),u=n(185),d=n(17),f=n(180),b=n(181),g=n(193),j=n(72),p=n(183),v=n(200),m=n(99),x=n.n(m),O=n(198),w=n(190),y=n(184),C=n(194),S=n(191),k=n(97),D=n.n(k),M=n(199),F=n(179),I=n(201),R=n(96),L=n.n(R),P=n(189),B=n(187),G=n(175),U=n(174),E=n(15),X=n(16),Y=n(3),A=function(e,t){return function(n){e((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(Y.a)({},t,n))}))}},H=function(e){return function(t){var n=t.setSelf,a=t.onSet,i=localStorage.getItem(e);null!==i&&n(JSON.parse(i)),a((function(t,n,a){a?localStorage.removeItem(e):localStorage.setItem(e,JSON.stringify(t))}))}},T=Object(X.b)({key:"Colors",default:["#FF0000","#FFA500","#FFFF00","#008000","#0000FF","#4B0082","#EE82EE"],effects:[H("Colors")]}),W=function(){var e=Object(X.c)(T),t=Object(h.a)(e,2),n=t[0],a=t[1];return{colors:n,addColor:function(e){return a((function(t){return[].concat(Object(E.a)(t),[e])}))},setColorByIndex:function(e,t){a((function(n){var a=Object(E.a)(n);return a[e]=t,a}))},deleteColorByIndex:function(e){n.length<2||a((function(t){var n=Object(E.a)(t);return n.splice(e,1),n}))}}},N=n(1),z=function(e,t,n,a){!function(e){var t=(new Option).style;return t.color=e,""!==t.color}(n)?a(!0):(a(!1),e(t,n))},q=function(e){var t=e.color,n=e.index,i=e.blockDelete,r=W(),o=r.deleteColorByIndex,c=r.setColorByIndex,s=Object(a.useState)(!1),l=Object(h.a)(s,2),u=l[0],d=l[1];return Object(N.jsxs)(B.a,{disablePadding:!0,children:[Object(N.jsx)(U.a,{ml:1,mr:1,sx:{width:70,height:25,backgroundColor:t,border:2,borderColor:"#aaaaaa",borderRadius:2,"&:hover":{backgroundColor:t,opacity:[.8,.8,.8]}}}),Object(N.jsx)(G.a,{children:Object(N.jsx)(P.a,{onChange:function(e){var t=e.target;return z(c,n,t.value,d)},id:"standard-basic",variant:"standard",color:u?"error":"primary",defaultValue:t})}),Object(N.jsx)(v.a,{disabled:i,onClick:function(){return o(n)},children:Object(N.jsx)(L.a,{})})]})},J=function(){var e=W(),t=e.colors,n=e.addColor;return Object(N.jsxs)(g.a,{item:!0,mt:-1,children:[Object(N.jsxs)(g.a,{container:!0,direction:"row",alignItems:"center",children:[Object(N.jsx)(g.a,{item:!0,children:"Colors"}),Object(N.jsx)(g.a,{item:!0,children:Object(N.jsx)(v.a,{disabled:t.length>=9,onClick:function(){return n("#"+Math.floor(16777215*Math.random()).toString(16).toUpperCase())},children:Object(N.jsx)(D.a,{})})})]}),Object(N.jsx)(M.a,{sx:{width:"100%",bgcolor:"#00000050",borderRadius:3},children:Object(N.jsx)(S.a,{children:t.map((function(e,n){return Object(N.jsxs)(I.a,{children:[0!==n&&Object(N.jsx)(F.a,{}),Object(N.jsx)(q,{blockDelete:t.length<2,color:e,index:n})]},e)}))})})]})},V=n(188),_=function(e){var t=e.value,n=e.label,a=e.onChange,i=e.min,r=e.max,o=e.step,c=e.color;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(g.a,{item:!0,children:n}),Object(N.jsx)(g.a,{item:!0,children:Object(N.jsx)(V.a,{sx:{color:c},onChange:function(e,t){return a(t)},value:t,min:i,max:r,step:o,valueLabelDisplay:"off"})})]})},K=Object(X.b)({key:"Blinking",default:{speed:100},effects:[H("Blinking")]}),Q=function(){var e=Object(X.c)(K),t=Object(h.a)(e,2),n=t[0],a=t[1];return{blinking:n,setSpeed:A(a,"speed")}},Z=function(){var e=Q(),t=e.blinking,n=e.setSpeed;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(_,{value:t.speed,label:"Speed",min:1,max:100,step:1,onChange:n,color:t.speed>20?"auto":"red"}),Object(N.jsx)(J,{})]})},$=function(e){var t=e.value,n=e.label,a=e.onChange;return Object(N.jsxs)(g.a,{mt:-1,ml:-1.5,item:!0,children:[Object(N.jsx)(u.a,{checked:t,onChange:function(e,t){return a(t)}}),Object(N.jsx)(j.a,{mt:1,sx:{display:"inline"},children:n})]})},ee=Object(X.b)({key:"Dots",default:{curve:0,speed:50,count:100,showDots:!0,showGrid:!1,maxDistance:120},effects:[H("Dots")]}),te=function(){var e=Object(X.c)(ee),t=Object(h.a)(e,2),n=t[0],a=t[1];return{dots:n,setCurve:A(a,"curve"),setSpeed:A(a,"speed"),setCount:A(a,"count"),setShowDots:A(a,"showDots"),setShowGrid:A(a,"showGrid"),setMaxDistance:A(a,"maxDistance")}},ne=function(){var e=te(),t=e.dots,n=e.setCurve,a=e.setSpeed,i=e.setCount,r=e.setShowDots,o=e.setShowGrid,c=e.setMaxDistance;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(_,{value:t.speed,label:"Speed - "+t.speed+" pixels/s",min:1,max:50,step:1,onChange:function(e){return a(e)}}),Object(N.jsx)(_,{value:t.count,label:"Count - "+t.count,min:0,max:250,step:1,onChange:function(e){return i(e)}}),Object(N.jsx)(_,{value:t.maxDistance,label:"Max distance - "+t.maxDistance+" pixels",min:100,max:200,step:1,onChange:function(e){return c(e)}}),Object(N.jsx)(_,{value:t.curve,label:"Curvature",min:0,max:300,step:1,onChange:function(e){return n(e)}}),Object(N.jsx)($,{value:t.showDots,label:"Show Dots",onChange:function(e){return r(e)}}),Object(N.jsx)($,{value:t.showGrid,label:"Show Grid",onChange:function(e){return o(e)}})]})},ae=Object(X.b)({key:"Gradient",default:{speed:100,rotation:5*Math.PI/8},effects:[H("Gradient")]}),ie=function(){var e=Object(X.c)(ae),t=Object(h.a)(e,2),n=t[0],a=t[1];return{gradient:n,setSpeed:A(a,"speed"),setRotation:A(a,"rotation")}},re=function(){var e,t=ie(),n=t.gradient,a=t.setSpeed,i=t.setRotation;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(_,{value:n.speed,label:"Speed",min:1,max:100,step:1,onChange:function(e){return a(e)},color:n.speed>20?"auto":"red"}),Object(N.jsx)(_,{value:n.rotation,label:"Rotation - "+(e=n.rotation,"".concat(e.toFixed(2)," rad / ").concat((180*e/Math.PI).toFixed(2)," degrees")),min:0,max:2*Math.PI,step:.01,onChange:function(e){return i(e)}}),Object(N.jsx)(J,{})]})},oe=n(202),ce=function(e){var t=e.onChange,n=Object(a.useState)(null),i=Object(h.a)(n,2),r=i[0],o=i[1],c=Object(a.useRef)(null);return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("input",{ref:c,type:"file",accept:"image/*",onChange:function(e){var n=e.target.files[0],a=URL.createObjectURL(n);null!==r&&URL.revokeObjectURL(r),o(a),t(a)},hidden:!0}),Object(N.jsx)(oe.a,{onClick:function(){c.current&&c.current.click()},variant:"outlined",children:"Upload image"})]})},se=n.p+"static/media/city.ea63c51b.jpg",le=Object(X.b)({key:"Image",default:{imageUrl:se,speedX:-3,speedY:0,scale:!0,clampX:!1,clampY:!1},effects:[H("Image")]}),he=function(){var e=Object(X.c)(le),t=Object(h.a)(e,2),n=t[0],a=t[1];return{image:n,setImageUrl:A(a,"imageUrl"),setSpeedX:A(a,"speedX"),setSpeedY:A(a,"speedY"),setScale:A(a,"scale"),setClampX:A(a,"clampX"),setClampY:A(a,"clampY")}},ue=function(){var e=he(),t=e.image,n=e.setImageUrl,a=e.setSpeedX,i=e.setSpeedY,r=e.setScale,o=e.setClampX,c=e.setClampY;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(_,{value:t.speedX,label:"SpeedX "+t.speedX,min:-10,max:10,step:1,onChange:function(e){return a(e)}}),Object(N.jsx)(_,{value:t.speedY,label:"SpeedY "+t.speedY,min:-10,max:10,step:1,onChange:function(e){return i(e)}}),Object(N.jsx)($,{value:t.scale,label:"Scale to fit",onChange:function(e){return r(e)}}),Object(N.jsx)($,{value:t.clampX,label:"Clamp X",onChange:function(e){return o(e)}}),Object(N.jsx)($,{value:t.clampY,label:"Clamp Y",onChange:function(e){return c(e)}}),Object(N.jsx)(ce,{onChange:function(e){return n(e)}})]})},de=Object(X.b)({key:"Particles",default:{imageUrl:se,speed:1,scale:!0},effects:[H("Particles")]}),fe=function(){var e=Object(X.c)(de),t=Object(h.a)(e,2),n=t[0],a=t[1];return{particles:n,setImageUrl:A(a,"imageUrl"),setSpeed:A(a,"speed"),setScale:A(a,"scale")}},be=function(){var e=fe(),t=e.particles,n=e.setImageUrl,a=e.setSpeed,i=e.setScale;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(_,{value:t.speed,label:"SpeedX "+t.speed,min:-10,max:10,step:1,onChange:function(e){return a(e)}}),Object(N.jsx)($,{value:t.scale,label:"Scale to fit",onChange:function(e){return i(e)}}),Object(N.jsx)(ce,{onChange:function(e){return n(e)}})]})},ge=Object(X.b)({key:"Radial",default:{speed:100},effects:[H("Radial")]}),je=function(){var e=Object(X.c)(ge),t=Object(h.a)(e,2),n=t[0],a=t[1];return{radial:n,setSpeed:A(a,"speed")}},pe=function(){var e=je(),t=e.radial,n=e.setSpeed;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(_,{value:t.speed,label:"Speed",min:1,max:100,step:1,onChange:n,color:t.speed>20?"auto":"red"}),Object(N.jsx)(J,{})]})},ve=Object(X.b)({key:"Synth",default:{floorHeight:3/4,numberOfLines:30},effects:[H("Synth")]}),me=function(){var e=Object(X.c)(ve),t=Object(h.a)(e,2),n=t[0],a=t[1];return{synth:n,setFloorHeight:A(a,"floorHeight"),setNumberOfLines:A(a,"numberOfLines")}},xe=function(){var e=me(),t=e.synth,n=e.setFloorHeight,a=e.setNumberOfLines;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(_,{value:100*t.floorHeight,label:"Floor height: "+(100*t.floorHeight).toFixed(0),min:30,max:85,step:1,onChange:function(e){return n(e/100)}}),Object(N.jsx)(_,{value:t.numberOfLines,label:"Number of lines: "+t.numberOfLines,min:20,max:60,step:1,onChange:function(e){return a(e)}})]})},Oe=[{name:"Dots",component:Object(N.jsx)(ne,{})},{name:"Blinking",component:Object(N.jsx)(Z,{})},{name:"Gradient",component:Object(N.jsx)(re,{})},{name:"Image",component:Object(N.jsx)(ue,{})},{name:"Radial",component:Object(N.jsx)(pe,{})},{name:"Synthwave",component:Object(N.jsx)(xe,{})},{name:"Particles",component:Object(N.jsx)(be,{})}],we=Object(X.b)({key:"Config",default:{mode:"Synthwave",debug:!1},effects:[H("Config")]}),ye=function(){var e=Object(X.c)(we),t=Object(h.a)(e,2),n=t[0],a=t[1];return{config:n,setMode:A(a,"mode"),setDebug:A(a,"debug")}},Ce=function(){var e=ye(),t=e.config,n=e.setMode;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(g.a,{item:!0,mb:1,children:Object(N.jsxs)(O.a,{fullWidth:!0,children:[Object(N.jsx)(w.a,{children:"Display mode"}),Object(N.jsx)(y.a,{value:t.mode,label:"Display mode",onChange:function(e){var t=e.target;return n(t.value)},children:Oe.map((function(e){return Object(N.jsx)(C.a,{value:e.name,children:e.name},e.name)}))})]})}),Oe.find((function(e){return e.name===t.mode})).component]})},Se=function(){var e=function(){var e=Object(X.d)(K),t=Object(X.d)(ee),n=Object(X.d)(ae),a=Object(X.d)(le),i=Object(X.d)(de),r=Object(X.d)(ge),o=Object(X.d)(ve),c=Object(X.d)(T);return function(){e(),t(),n(),a(),i(),r(),o(),c()}}();return Object(N.jsxs)(g.a,{container:!0,spacing:2,sx:{padding:2},children:[Object(N.jsxs)(g.a,{container:!0,item:!0,direction:"row",justifyContent:"center",alignItems:"center",children:[Object(N.jsx)(j.a,{gutterBottom:!0,variant:"h5",mb:0,mr:1,children:"Settings"}),Object(N.jsx)(p.a,{title:"Reset Settings",placement:"right",arrow:!0,children:Object(N.jsx)(v.a,{pb:5,onClick:e,children:Object(N.jsx)(x.a,{})})})]}),Object(N.jsx)(g.a,{container:!0,item:!0,direction:"column",children:Object(N.jsx)(Ce,{})})]})},ke=function(){return Object(N.jsx)(f.a,{sx:{position:"absolute",top:7,left:7,width:"100%",maxWidth:350,backgroundColor:"#101020a0",borderRadius:3},children:Object(N.jsx)(Se,{})})},De=i.a.forwardRef((function(e,t){return Object(N.jsx)("div",Object(d.a)(Object(d.a)({ref:t},e),{},{children:Object(N.jsx)(ke,{})}))})),Me=function(e){var t=e.active;return Object(N.jsx)(b.a,{timeout:{enter:300,exit:1e3},easing:{enter:"cubic-bezier(0, 0.5, 1, 1)"},direction:"right",in:t,appear:!1,mountOnEnter:!0,unmountOnExit:!0,children:Object(N.jsx)(De,{})})},Fe=function(){var e=Object(a.useState)({width:window.innerWidth,height:window.innerHeight}),t=Object(h.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){function e(){i({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n},Ie=function(){return{config:ye().config,colors:W().colors,blinking:Q().blinking,dots:te().dots,gradient:ie().gradient,image:he().image,particles:fe().particles,radial:je().radial,synth:me().synth}},Re=0,Le=function(e){var t=Object(a.useRef)(null),n=Ie();return Object(a.useEffect)((function(){var a,i=t.current.getContext("2d");return function t(){Re++,e(i,Re,n),a=window.requestAnimationFrame(t)}(),function(){return window.cancelAnimationFrame(a)}}),[e,n]),t},Pe=function(e){return Math.sqrt(Math.pow(e.width,2)+Math.pow(e.height,2))/2},Be=function(e,t){return 2*e/t.length},Ge=function(e,t){return e/t*1.5},Ue=function(e,t){var n=Pe(e);return n+Be(n,t)},Ee=function(e,t,n){for(var a=0;a<n.length;a++){var i=(a+t)%n.length/n.length;e.addColorStop(i,n[a])}return e},Xe=function(e,t,n){var a=function(e,t){var n=e.canvas,a=n.width/2-t,i=n.height/2,r=n.width,o=n.height/2+t;return e.createLinearGradient(a,i,r,o)}(e,function(e,t){var n=Pe(e);return n*Be(n,t)}(e.canvas,t.colors)),i=Ge(n,t.blinking.speed);return Ee(a,i,t.colors)},Ye=n(14),Ae=n(19),He=n(20),Te=function(){function e(t,n){Object(Ae.a)(this,e),this.x=t,this.y=n}return Object(He.a)(e,[{key:"add",value:function(e){this.x+=e.x,this.y+=e.y}},{key:"limit",value:function(e){this.x=(this.x+e.width)%e.width,this.y=(this.y+e.height)%e.height}}]),e}(),We=function(){function e(t,n,a){Object(Ae.a)(this,e),this.pos=new Te(t,n),this.vel=new Te(0,0),this.angle=Math.random()*Math.PI*2,this.setVelocity(50),this.color=a||"#000000"}return Object(He.a)(e,[{key:"setVelocity",value:function(e){e/=1e3/60,this.vel.x=e*Math.cos(this.angle),this.vel.y=e*Math.sin(this.angle)}},{key:"getBezier",value:function(e){return[this.pos.x+e*Math.cos(this.angle),this.pos.y+e*Math.sin(this.angle)]}},{key:"update",value:function(e){this.pos.add(this.vel),this.pos.limit(e)}},{key:"render",value:function(e){e.fillStyle=this.color,e.beginPath(),e.arc(this.pos.x,this.pos.y,4,0,2*Math.PI),e.fill()}}]),e}();var Ne=function(e){return new We(e.width*Math.random(),e.height*Math.random(),function(e,t,n){var a,i,r,o=Math.floor(6*e),c=6*e-o,s=n*(1-t),l=n*(1-c*t),h=n*(1-(1-c)*t);switch(o%6){default:case 0:a=n,i=h,r=s;break;case 1:a=l,i=n,r=s;break;case 2:a=s,i=n,r=h;break;case 3:a=s,i=l,r=n;break;case 4:a=h,i=s,r=n;break;case 5:a=n,i=s,r=l}var u=function(e){var t=Math.floor(e).toString(16);return t.length<2&&(t="0"+t),t};return"#"+u(255*a)+u(255*i)+u(255*r)}(Math.random(),1,1))},ze=function(){function e(t,n,a,i){Object(Ae.a)(this,e),this.x=t,this.y=n,this.width=a,this.height=i,this.dots=[]}return Object(He.a)(e,[{key:"intersects",value:function(e){return e.x>=this.x&&e.y>=this.y&&e.x<this.x+this.width&&e.y<this.y+this.height}}]),e}(),qe=function(){function e(t,n){Object(Ae.a)(this,e),this.cells=[],this.maxDistance=n/1.5*Math.sqrt(2),this.rows=0,this.columns=0,this.init(t)}return Object(He.a)(e,[{key:"init",value:function(e){this.cells=[],this.columns=Math.ceil(e.width/this.maxDistance),this.rows=Math.ceil(e.height/this.maxDistance);for(var t=0;t<this.rows*this.columns;t++){var n=t%this.columns*this.maxDistance,a=Math.floor(t/this.columns)*this.maxDistance,i=Math.min(n+this.maxDistance,e.width)-n,r=Math.min(a+this.maxDistance,e.height)-a;this.cells.push(new ze(n,a,i,r))}}},{key:"populate",value:function(e){var t,n=Object(Ye.a)(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;this.addDot(a)}}catch(i){n.e(i)}finally{n.f()}}},{key:"addDot",value:function(e){var t=Math.floor(e.pos.x/this.maxDistance),n=Math.floor(e.pos.y/this.maxDistance),a=this.cells[n*this.columns+t];a?a.dots.push(e):console.error("Dot did not get populated. Could not find a cell.",e,n,t)}},{key:"removeDot",value:function(e){var t=this.getCell(Math.floor(e.pos.x/this.maxDistance),Math.floor(e.pos.y/this.maxDistance));t.dots.splice(t.dots.indexOf(e),1)}},{key:"getCell",value:function(e,t){return this.cells[t*this.columns+e]}},{key:"getCoordsByIndex",value:function(e){return{x:e%this.columns,y:Math.floor(e/this.columns)}}},{key:"getCellNeighbours",value:function(e){var t=this.getCoordsByIndex(e),n=t.x,a=t.y,i=[],r=n+1<this.columns,o=a+1<this.rows;return r&&(i.push(this.getCell(n+1,a)),a>0&&i.push(this.getCell(n+1,a-1))),o&&i.push(this.getCell(n,a+1)),r&&o&&i.push(this.getCell(n+1,a+1)),i}},{key:"update",value:function(){for(var e=0;e<this.cells.length;e++)for(var t=this.cells[e],n=0;n<t.dots.length;n++){var a=t.dots[n];t.intersects(a.pos)||(t.dots.splice(t.dots.indexOf(a),1),this.addDot(a))}}}]),e}(),Je=[],Ve=null,_e=function(e,t,n,a,i){var r=Math.sqrt(Math.pow(n.pos.x-t.pos.x,2)+Math.pow(n.pos.y-t.pos.y,2));if(!(r>a)){var o=Math.floor(255-255*r/a).toString(16).padStart(2,"0"),c=e.createLinearGradient(t.pos.x,t.pos.y,n.pos.x,n.pos.y);c.addColorStop(0,t.color+o),c.addColorStop(1,n.color+o),e.strokeStyle=c,e.lineWidth=4*(1-r/a+.2),e.lineCap="round",i?Qe(e,t,n,r,a,i):Ke(e,t,n)}},Ke=function(e,t,n){e.beginPath(),e.moveTo(t.pos.x,t.pos.y),e.lineTo(n.pos.x,n.pos.y),e.stroke()},Qe=function(e,t,n,a,i,r){e.beginPath(),e.moveTo(t.pos.x,t.pos.y),e.bezierCurveTo.apply(e,Object(E.a)(t.getBezier(a/i*r)).concat(Object(E.a)(n.getBezier(a/i*r)),[n.pos.x,n.pos.y])),e.stroke()},Ze=0,$e=0,et=function(e,t,n){Je.length!==t.count&&function(e,t){if(Je.length>t.count){for(var n=Je.length-1;n>t.count-1;n--)Ve.removeDot(Je[n]);Je.length=t.count}else for(var a=Je.length;a<t.count;a++){var i=Ne(e.canvas);Je.push(i),null!==Ve&&Ve.addDot(i)}}(e,t),Ze!==t.speed&&(Je.map((function(e){return e.setVelocity(t.speed)})),Ze=t.speed),(n||$e!==t.maxDistance)&&((Ve=new qe(e.canvas,t.maxDistance)).populate(Je),$e=t.maxDistance)},tt=function(e,t,n){var a=e.canvas,i=Ue(a,t.colors),r=function(e,t,n){var a=e.canvas,i=Math.cos(-t+Math.PI)*n+a.width/2,r=Math.sin(-t+Math.PI)*n+a.height/2,o=Math.cos(-t)*n+a.width/2,c=Math.sin(-t)*n+a.height/2;return e.createLinearGradient(i,r,o,c)}(e,t.gradient.rotation,i),o=Ge(n,t.gradient.speed);return Ee(r,o,t.colors)},nt=n(50),at=null,it=new Image,rt=0,ot=0,ct=1,st=1,lt="",ht=function(e,t,n,a){var i=n.floorHeight*t.height,r=a%100/100,o=t.width/n.numberOfLines,c=t.height/n.numberOfLines;e.fillStyle="#280A24",e.fillRect(0,i,t.width,t.height);var s=function(e,t,n){var a=e.createLinearGradient(t.width/2,n,t.width/2,t.height);return a.addColorStop(0,"#C9B170"),a.addColorStop(.5,"#AE635F"),a.addColorStop(1,"#BD0477"),a}(e,t,i);e.strokeStyle=s,function(e,t,n,a){var i=a.floorHeight,r=a.amount,o=a.scaleX,c=a.scaleY;e.filter="blur(1px) drop-shadow(0px 0px 4px #BD0477)",e.lineWidth=3,e.beginPath();for(var s=0;s<r;s++){var l=s/r*-4+1;e.moveTo(l+o*s+o*n,i);var h=o*s*2-t.width/2;e.lineTo(l+h+2*o*n,t.height)}e.stroke(),e.lineWidth=2,e.beginPath();for(var u=2*(c-i/r),d=0;d<r/2;d++)e.moveTo(0,i+u*d),e.lineTo(t.width,i+u*d);e.stroke(),e.filter="none"}(e,t,r,{floorHeight:i,amount:n.numberOfLines,scaleX:o,scaleY:c})},ut=function(e,t,n,a){var i=function(e,t){var n=e.createLinearGradient(t.width/2,0,t.width/2,t.height);return n.addColorStop(0,"black"),n.addColorStop(.05,"#100284"),n.addColorStop(.1,"#1103AD"),n.addColorStop(.4,"#370CBC"),n.addColorStop(.5,"#4B11C4"),n.addColorStop(.7,"#841EDA"),n}(e,t);e.fillStyle=i,e.fillRect(0,0,t.width,t.height);var r=function(e,t){var n=e.width/4;return{x:e.width/2-n/2,y:t*(e.height-.2*n)-n/2,width:n,height:n}}(t,n.floorHeight);!function(e,t){e.filter="blur(3px)",e.fillStyle=function(e,t){var n=e.createLinearGradient(t.x+t.width/2,t.y,t.x+t.width/2,t.y+t.height);return n.addColorStop(0,"#EC07A8"),n.addColorStop(.2,"#F683A4"),n.addColorStop(.4,"#F683A4"),n.addColorStop(.7,"#FEF9D3"),n.addColorStop(1,"#FEF9D3"),n}(e,t),e.beginPath(),e.arc(t.x+t.width/2,t.y+t.height/2,t.width/2,0,2*Math.PI),e.fill(),e.filter="none"}(e,r),e.fillStyle=i,function(e,t,n){e.filter="blur(1px)";for(var a=n%100/100,i=0;i<20;i++){var r=30*i+30*a,o=30*Math.pow(r/t.height,2);e.fillRect(t.x-10,t.y+10+r,t.width+20,o)}e.filter="none"}(e,r,a),function(e,t){e.globalCompositeOperation="hard-light",e.filter="blur(100px)",e.fillStyle=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"A0",a=e.createLinearGradient(t.x+t.width/2,t.y,t.x+t.width/2,t.y+t.height);return a.addColorStop(0,"#A9071F"+n),a.addColorStop(.2,"#C81023"+n),a.addColorStop(.4,"#CF002F"+n),a.addColorStop(.7,"#E80358"+n),a.addColorStop(1,"#D2065D"+n),a}(e,t,"80"),e.beginPath(),e.arc(t.x+t.width/2,t.y+t.height/2,t.width/2,0,2*Math.PI),e.fill(),e.filter="none",e.globalCompositeOperation="source-over"}(e,r)},dt=n.p+"static/media/house_sample.f6a686d9.png",ft=null,bt=96,gt=384,jt=null,pt=function(e){for(var t=e.getImageData(0,0,bt,gt),n=t.data,a=0;a<n.length;a+=4){var i=[n[a],n[a+1],n[a+2]];255===i[0]&&255===i[1]&&255===i[2]&&(n[a+0]=0,n[a+1]=0,n[a+2]=0,n[a+3]=0)}e.putImageData(t,0,0)},vt=function(e){return new Promise((function(t){var n=new Image;n.src=e,n.onload=function(){return t(n)}}))},mt=function(){var e=document.createElement("canvas"),t=e.getContext("2d");e.width=bt,e.height=gt;var n=function(e){var t=e.createLinearGradient(bt/2,0,bt/2,gt);return t.addColorStop(0,"red"),t.addColorStop(1,"blue"),t}(t);t.fillStyle=n;for(var a=[],i=0;i<jt.width/bt;i++)t.fillRect(0,0,bt,gt),t.drawImage(jt,i*bt,0,bt,gt,0,0,bt,gt),pt(t),a.push(e.toDataURL());!function(e){var t=e.map(vt);Promise.all(t).then((function(e){ft=Object(E.a)(e)}))}(a)},xt=null,Ot=0,wt=function(e){for(var t=0;t<e;t++)xt.push(Math.floor(Math.random()*(ft.length+1))-1)},yt=0,Ct=function(e,t,n,a){if(null==jt)return(jt=new Image).src=dt,void(jt.onload=mt);if(null!==ft){var i;i=n.numberOfLines+1,Ot!==i&&(null===xt?(xt=[],wt(i)):Ot<i?wt(i-Ot):xt=xt.slice(0,i),Ot=i);var r=t.width/n.numberOfLines,o=a%100/100,c=n.floorHeight*t.height;(function(e){var t=Math.abs(yt-e)>.9;return yt=e,t})(o)&&xt.unshift(xt.pop()),function(e,t,n,a){for(var i=t,r=gt/bt*i,o=0;o<xt.length;o++){var c=xt[o];if(-1!==c){var s=ft[c];e.drawImage(s,0,0,bt,gt,(o-1)*t+t*a,n-r,i+1,r)}}}(e,r,c,o)}},St="",kt={width:0,height:0},Dt={Blinking:function(e,t,n){e.fillStyle=Xe(e,t,n),e.fillRect(0,0,e.canvas.width,e.canvas.height)},Dots:function(e,t,n,a){var i=t.dots;et(e,i,a),e.fillStyle="#000",e.fillRect(0,0,e.canvas.width,e.canvas.height);var r,o=Object(Ye.a)(Je);try{for(o.s();!(r=o.n()).done;){var c=r.value;c.update(e.canvas),i.showDots&&c.render(e)}}catch(b){o.e(b)}finally{o.f()}if(Ve.update(),i.showGrid)for(var s=0;s<Ve.cells.length;s++){var l=Ve.cells[s],h=l.x,u=l.y,d=l.width,f=l.height;e.lineWidth=2,e.strokeStyle="red",e.strokeRect(h,u,d,f)}e.fillStyle="#000000",e.lineWidth=2,function(e,t,n){for(var a=0;a<Ve.cells.length;a++)for(var i=Ve.cells[a],r=Ve.getCellNeighbours(a),o=0;o<i.dots.length;o++){for(var c=i.dots[o],s=o;s<i.dots.length;s++){var l=i.dots[s];_e(e,c,l,t,n)}for(var h=0;h<r.length;h++)for(var u=r[h],d=0;d<u.dots.length;d++){var f=u.dots[d];_e(e,c,f,t,n)}}}(e,i.maxDistance,i.curve)},Gradient:function(e,t,n){e.fillStyle=tt(e,t,n),e.fillRect(0,0,e.canvas.width,e.canvas.height)},Image:function(e,t){var n=t.image,a=n.imageUrl,i=Object(nt.a)(n,["imageUrl"]);a!==lt&&((it=new Image).onload=function(){!function(e,t){console.log("new pattern"),at=e.createPattern(t,"repeat")}(e,it)},it.src=a,lt=a),null!==at&&function(e,t){var n=t.speedX,a=t.speedY,i=t.scale,r=t.clampX,o=t.clampY;e.fillStyle="black",e.fillRect(0,0,e.canvas.width,e.canvas.height),e.fillStyle=at,n&&(rt+=n),a&&(ot+=a),i?(ct=e.canvas.width<=it.width?r?it.width/e.canvas.width:1:e.canvas.width/it.width,st=e.canvas.height<=it.height?o?it.height/e.canvas.height:1:e.canvas.height/it.height,e.setTransform(ct,0,0,st,rt,ot),e.fillRect(-rt/ct,-ot/st,e.canvas.width,e.canvas.height),e.resetTransform()):(e.translate(rt,ot),e.fillRect(-rt,-ot,e.canvas.width,e.canvas.height),e.translate(-rt,-ot))}(e,i)},Particles:function(e,t){t.imageUrl,Object(nt.a)(t,["imageUrl"]);!function(e){var t=e.canvas;e.fillStyle="green",e.fillRect(0,0,t.width,t.height)}(e)},Radial:function(e,t,n){e.fillStyle=function(e,t,n){var a=e.canvas,i=function(e,t){var n=e.canvas;return e.createRadialGradient(n.width/2,n.height/2,0,n.width/2,n.height/2,t)}(e,Ue(a,t.colors)),r=Ge(n,t.radial.speed);return Ee(i,r,t.colors)}(e,t,n),e.fillRect(0,0,e.canvas.width,e.canvas.height)},Synthwave:function(e,t,n){var a=[e,e.canvas,t.synth,n];ut.apply(void 0,a),Ct.apply(void 0,a),e.globalAlpha=.9,ht.apply(void 0,a),e.globalAlpha=1}},Mt=function(e,t,n){var a=function(e,t){var n=e.canvas;if(St!==t){St=t;var a=n.width;n.width=0,n.width=a}var i=n.width!==kt.width||n.height!==kt.height;return i&&(kt.width=n.width,kt.height=n.height),i}(e,n.config.mode);(function(e){var t=e.canvas;e.fillStyle="black",e.fillRect(0,0,t.width,t.height),e.font="48px courier",e.textAlign="center",e.fillStyle="white",e.fillText("No input",t.width/2,t.height/2)}(e),n.config.mode in Dt)&&(0,Dt[n.config.mode])(e,n,t,a);n.config.debug&&function(e,t){var n=e.canvas;e.fillStyle="#ffffffa0",e.beginPath(),e.arc(n.width-80-10,n.height-80-10,80*Math.pow(Math.sin(.05*t),2),0,2*Math.PI),e.fill()}(e,t)},Ft=function(){var e=Fe(),t=e.width,n=e.height,a=Le(Mt);return Object(N.jsx)("canvas",{ref:a,width:t,height:n})},It=function(){return Object(N.jsx)(Ft,{})},Rt=function(){var e=Object(a.useState)(!0),t=Object(h.a)(e,2),n=t[0],i=t[1];return Object(N.jsxs)("div",{children:[Object(N.jsx)(u.a,{sx:{position:"absolute",bottom:7,left:7},checked:n,onChange:function(e){var t=e.target;return i(t.checked)}}),Object(N.jsx)(Me,{active:n}),Object(N.jsx)(It,{})]})},Lt=Object(c.a)({palette:{mode:"dark"},spacing:8}),Pt=function(){return Object(N.jsx)(i.a.StrictMode,{children:Object(N.jsx)(X.a,{children:Object(N.jsxs)(s.a,{theme:Lt,children:[Object(N.jsx)(l.a,{}),Object(N.jsx)(Rt,{})]})})})};o.a.render(Object(N.jsx)(Pt,{}),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.a68eb372.chunk.js.map