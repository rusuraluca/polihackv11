(this.webpackJsonpvideo=this.webpackJsonpvideo||[]).push([[0],{1346:function(e,t,a){},1554:function(e,t,a){},1555:function(e,t,a){},1557:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(25),o=a.n(r),c=a(77),l=a(78),s=a(81),d=a(80),u=a(258),m=a(156),h=a.n(m),g=a(221),f=a(222),v=a.n(f),p=a(223),E=a.n(p),b=a(259);var y=function(e){var t=e.utilizatori,a=["Ce descoperire crezi c\u0103 ar schimba complet via\u021ba oamenilor?","Ce \xeenseamn\u0103 pentru tine adev\u0103rata fericire?","Ce vrei s\u0103 realizezi \xeen viitor?","Ce-\u021bi place s\u0103 faci \xeen timpul liber? ","Ce ai schimba la via\u021ba ta \u0219i de ce?","Ce crezi despre tot ceea ce se \xeent\xe2mpl\u0103 acum \xeen jurul nostru \u0219i cum ne va influen\u021ba asta \xeen viitor?","Dac\u0103 ai avea puterea s\u0103 schimbi ceva \xeen lume, care ar fi acesta?","Care este cea mai relaxant\u0103 situa\u021bie \xeen care te-ai putea afla?","E\u0219ti ceea ce \u021bi-ai dorit s\u0103 fii?"," Cine e\u0219ti tu atunci nu te vede nimeni?","Dac\u0103 ai putea s\u0103 te \xeentorci \xeen trecut, ce ai schimba la acesta?","Unde ai vrea s\u0103 locuie\u0219ti \u0219i de ce?","Crezi \xeen talent sau \xeen munc\u0103 continu\u0103? Care dintre acestea crezi c\u0103 te ajut\u0103 mai mult s\u0103 realizezi ceea ce \xee\u021bi dore\u0219ti?","Care este cel mai frumos lucru care \u021bi s-a \xeent\xe2mplat luna aceasta? Vorbe\u0219te-mi despre el.","\xce\u021bi place s\u0103 cite\u0219ti c\u0103r\u021bi? Ce impact au asupra ta?"],r=Object(n.useState)(a[0]),o=Object(b.a)(r,2),c=o[0],l=o[1],s=function(){var e,n;for(console.log(t),e=0;e<=14;e++)c==a[e]&&(n=e);n<=13?l(a[n+1]):console.log("final")};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"indiv"},i.a.createElement("div",{className:"intrebari group"},i.a.createElement("div",{className:"intrebaridiv "},i.a.createElement("div",{className:"intrebare1"},i.a.createElement("span",{className:"intrebarespan"},c)),i.a.createElement("button",{className:"buttonnext",onClick:function(){s(),document.querySelector(".buttonnext").classList.add("active"),document.querySelector(".intrebarespan").classList.add("active2"),setTimeout((function(){document.querySelector(".buttonnext").classList.remove("active"),document.querySelector(".intrebarespan").classList.remove("active2")}),600)}},"Next")))))},w=a(1588),S=a(1583),C=a(1584),k=a(1585),x=a(237),N=a.n(x),O=a(238),j=a.n(O),M=a(240),D=a.n(M),A=a(241),T=a.n(A),F=a(239),L=a.n(F),V=a(242),U=a.n(V),z=a(1586),H=(a(1344),a(1589)),q=a(85),W=(a(1345),a(1346),{}),P={iceServers:[{urls:"stun:stun.l.google.com:19302"}]},J=null,B=null,R=0,I=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getPermissions=Object(g.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.mediaDevices.getUserMedia({video:!0}).then((function(){return n.videoAvailable=!0})).catch((function(){return n.videoAvailable=!1}));case 3:navigator.mediaDevices.getDisplayMedia?n.setState({screenAvailable:!0}):n.setState({screenAvailable:!1}),(n.videoAvailable||n.audioAvailable)&&navigator.mediaDevices.getUserMedia({video:n.videoAvailable,audio:n.audioAvailable}).then((function(e){window.localStream=e,n.localVideoref.current.srcObject=e})).then((function(e){})).catch((function(e){return console.log(e)})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),n.getMedia=function(){n.setState({video:n.videoAvailable,audio:n.audioAvailable},(function(){n.getUserMedia(),n.connectToSocketServer()}))},n.getUserMedia=function(){if(n.state.video&&n.videoAvailable||n.state.audio&&n.audioAvailable)navigator.mediaDevices.getUserMedia({video:n.state.video,audio:n.state.audio}).then(n.getUserMediaSuccess).then((function(e){})).catch((function(e){return console.log(e)}));else try{n.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(e){}},n.getUserMediaSuccess=function(e){try{window.localStream.getTracks().forEach((function(e){return e.stop()}))}catch(i){console.log(i)}window.localStream=e,n.localVideoref.current.srcObject=e;var t=function(e){if(e===B)return"continue";W[e].addStream(window.localStream),W[e].createOffer().then((function(t){W[e].setLocalDescription(t).then((function(){J.emit("signal",e,JSON.stringify({sdp:W[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var a in W)t(a);e.getTracks().forEach((function(e){return e.onended=function(){n.setState({video:!1,audio:!1},(function(){try{n.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(i){console.log(i)}window.localStream=function(){var e;return new MediaStream([(e=n).black.apply(e,arguments),n.silence()])}(),n.localVideoref.current.srcObject=window.localStream;var e=function(e){W[e].addStream(window.localStream),W[e].createOffer().then((function(t){W[e].setLocalDescription(t).then((function(){J.emit("signal",e,JSON.stringify({sdp:W[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var t in W)e(t)}))}}))},n.getDislayMedia=function(){n.state.screen&&navigator.mediaDevices.getDisplayMedia&&navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0}).then(n.getDislayMediaSuccess).then((function(e){})).catch((function(e){return console.log(e)}))},n.getDislayMediaSuccess=function(e){try{window.localStream.getTracks().forEach((function(e){return e.stop()}))}catch(i){console.log(i)}window.localStream=e,n.localVideoref.current.srcObject=e;var t=function(e){if(e===B)return"continue";W[e].addStream(window.localStream),W[e].createOffer().then((function(t){W[e].setLocalDescription(t).then((function(){J.emit("signal",e,JSON.stringify({sdp:W[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var a in W)t(a);e.getTracks().forEach((function(e){return e.onended=function(){n.setState({screen:!1},(function(){try{n.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(i){console.log(i)}window.localStream=function(){var e;return new MediaStream([(e=n).black.apply(e,arguments),n.silence()])}(),n.localVideoref.current.srcObject=window.localStream,n.getUserMedia()}))}}))},n.gotMessageFromServer=function(e,t){var a=JSON.parse(t);e!==B&&(a.sdp&&W[e].setRemoteDescription(new RTCSessionDescription(a.sdp)).then((function(){"offer"===a.sdp.type&&W[e].createAnswer().then((function(t){W[e].setLocalDescription(t).then((function(){J.emit("signal",e,JSON.stringify({sdp:W[e].localDescription}))})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)})),a.ice&&W[e].addIceCandidate(new RTCIceCandidate(a.ice)).catch((function(e){return console.log(e)})))},n.changeCssVideos=function(e){var t="30%";30*e.offsetWidth/100<300&&(t="300px");var a=String(100/R)+"%",n="";0===R||1===R?(n="100%",a="100%"):2===R?(n="45%",a="100%"):3===R||4===R?(n="35%",a="50%"):n=String(100/R)+"%";for(var i=e.querySelectorAll("video"),r=0;r<i.length;++r)i[r].style.minWidth=t,i[r].style.minHeight="40%",i[r].style.setProperty("width",n),i[r].style.setProperty("height",a);return{minWidth:t,minHeight:"40%",width:n,height:a}},n.connectToSocketServer=function(){(J=v.a.connect("https://video.sebastienbiollo.com",{secure:!0})).on("signal",n.gotMessageFromServer),J.on("connect",(function(){J.emit("join-call",window.location.href),B=J.id,J.on("chat-message",n.addMessage),J.on("user-left",(function(e){var t=document.querySelector('[data-socket="'.concat(e,'"]'));if(null!==t){R--,t.parentNode.removeChild(t);var a=document.getElementById("main");n.changeCssVideos(a)}})),J.on("user-joined",(function(e,t){if(t.forEach((function(e){if(W[e]=new RTCPeerConnection(P),W[e].onicecandidate=function(t){null!=t.candidate&&J.emit("signal",e,JSON.stringify({ice:t.candidate}))},W[e].onaddstream=function(a){var i=document.querySelector('[data-socket="'.concat(e,'"]'));if(null!==i)i.srcObject=a.stream;else{R=t.length;var r=document.getElementById("main"),o=n.changeCssVideos(r),c=document.createElement("video"),l={minWidth:o.minWidth,minHeight:o.minHeight,maxHeight:"100%",margin:"10px",borderStyle:"solid",borderColor:"#bdbdbd",objectFit:"fill"};for(var s in l)c.style[s]=l[s];c.style.setProperty("width",o.width),c.style.setProperty("height",o.height),c.setAttribute("data-socket",e),c.srcObject=a.stream,c.autoplay=!0,c.playsinline=!0,r.appendChild(c)}},void 0!==window.localStream&&null!==window.localStream)W[e].addStream(window.localStream);else{window.localStream=function(){var e;return new MediaStream([(e=n).black.apply(e,arguments),n.silence()])}(),W[e].addStream(window.localStream)}})),e===B){var a=function(e){if(e===B)return"continue";try{W[e].addStream(window.localStream)}catch(t){}W[e].createOffer().then((function(t){W[e].setLocalDescription(t).then((function(){J.emit("signal",e,JSON.stringify({sdp:W[e].localDescription}))})).catch((function(e){return console.log(e)}))}))};for(var i in W)a(i)}}))}))},n.silence=function(){var e=new AudioContext,t=e.createOscillator(),a=t.connect(e.createMediaStreamDestination());return t.start(),e.resume(),Object.assign(a.stream.getAudioTracks()[0],{enabled:!1})},n.black=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width,a=void 0===t?640:t,n=e.height,i=void 0===n?480:n,r=Object.assign(document.createElement("canvas"),{width:a,height:i});r.getContext("2d").fillRect(0,0,a,i);var o=r.captureStream();return Object.assign(o.getVideoTracks()[0],{enabled:!1})},n.handleVideo=function(){return n.setState({video:!n.state.video},(function(){return n.getUserMedia()}))},n.handleAudio=function(){return n.setState({audio:!n.state.audio},(function(){return n.getUserMedia()}))},n.handleScreen=function(){return n.setState({screen:!n.state.screen},(function(){return n.getDislayMedia()}))},n.handleEndCall=function(){try{n.localVideoref.current.srcObject.getTracks().forEach((function(e){return e.stop()}))}catch(e){}window.location.href="/"},n.openChat=function(){return n.setState({showModal:!0,newmessages:0})},n.closeChat=function(){return n.setState({showModal:!1})},n.handleMessage=function(e){return n.setState({message:e.target.value})},n.addMessage=function(e,t,a){n.setState((function(a){return{messages:[].concat(Object(u.a)(a.messages),[{sender:t,data:e}])}})),a!==B&&n.setState({newmessages:n.state.newmessages+1})},n.handleUsername=function(e){return n.setState({username:e.target.value})},n.sendMessage=function(){J.emit("chat-message",n.state.message,n.state.username),n.setState({message:"",sender:n.state.username})},n.copyUrl=function(){var e=window.location.href;if(navigator.clipboard)navigator.clipboard.writeText(e).then((function(){z.b.success("Link copied to clipboard!")}),(function(){z.b.error("Failed to copy")}));else{var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy"),z.b.success("Link copied to clipboard!")}catch(a){z.b.error("Failed to copy")}document.body.removeChild(t)}},n.connect=function(){return n.setState({askForUsername:!1},(function(){return n.getMedia()}))},n.isChrome=function(){var e=(navigator&&(navigator.userAgent||"")).toLowerCase(),t=(navigator&&(navigator.vendor||"")).toLowerCase();return null!==(/google inc/.test(t)?e.match(/(?:chrome|crios)\/(\d+)/):null)},n.localVideoref=i.a.createRef(),n.videoAvailable=!1,n.audioAvailable=!1,n.state={video:!1,audio:!1,screen:!1,showModal:!1,screenAvailable:!1,messages:[],message:"",newmessages:0,askForUsername:!0,username:E.a.internet.userName()},W={},n.getPermissions(),n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return!1===this.isChrome()?i.a.createElement("div",{style:{background:"white",width:"30%",height:"auto",padding:"20px",minWidth:"400px",textAlign:"center",margin:"auto",marginTop:"50px",justifyContent:"center"}},i.a.createElement("h1",null,"Sorry, this works only with Google Chrome")):i.a.createElement("div",null,!0===this.state.askForUsername?i.a.createElement("div",null," ",i.a.createElement("div",{style:{background:"white",width:"30%",height:"auto",padding:"20px",minWidth:"400px",textAlign:"center",margin:"auto",marginTop:"50px",justifyContent:"center"}},i.a.createElement("p",{style:{margin:0,fontWeight:"bold",paddingRight:"50px"}},"Set your username"),i.a.createElement(w.a,{placeholder:"Username",value:this.state.username,onChange:function(t){return e.handleUsername(t)}}),i.a.createElement(S.a,{variant:"contained",color:"primary",onClick:this.connect,style:{margin:"20px"}},"Connect")),i.a.createElement("div",{style:{justifyContent:"center",textAlign:"center",paddingTop:"40px"}},i.a.createElement("video",{id:"my-video",ref:this.localVideoref,autoPlay:!0,muted:!0,style:{borderStyle:"solid",borderColor:"#bdbdbd",objectFit:"fill",width:"50%",height:"auto"}}))):i.a.createElement("div",{className:"tot"},i.a.createElement(q.a,{show:this.state.showModal,onHide:this.closeChat,style:{zIndex:"999999"}},i.a.createElement(q.a.Header,{closeButton:!0},i.a.createElement(q.a.Title,null,"Chat Room")),i.a.createElement(q.a.Body,{style:{overflow:"auto",overflowY:"auto",height:"400px",textAlign:"left"}},this.state.messages.length>0?this.state.messages.map((function(e,t){return i.a.createElement("div",{key:t,style:{textAlign:"left"}},i.a.createElement("p",{style:{wordBreak:"break-all"}},i.a.createElement("b",null,e.sender),": ",e.data))})):i.a.createElement("p",null,"No message yet")),i.a.createElement(q.a.Footer,{className:"div-send-msg"},i.a.createElement(w.a,{placeholder:"Message",value:this.state.message,onChange:function(t){return e.handleMessage(t)}}),i.a.createElement(S.a,{variant:"contained",color:"primary",onClick:this.sendMessage},"Send"))),i.a.createElement("div",{className:"container"},i.a.createElement("div",{style:{paddingTop:"20px"}},i.a.createElement(w.a,{className:"inputlink",value:window.location.href,disable:"true"}),i.a.createElement(S.a,{style:{backgroundColor:"#3f51b5",color:"whitesmoke",marginLeft:"20px",marginTop:"10px",width:"120px",fontSize:"10px"},onClick:function(){e.copyUrl()}},"Copy invite link")),i.a.createElement(y,null),i.a.createElement(H.a,{id:"main",className:"flex-container",style:{padding:0}},i.a.createElement("video",{id:"my-video",ref:this.localVideoref,autoPlay:!0,muted:!0,style:{borderStyle:"solid",borderColor:"#bdbdbd",margin:"10px",objectFit:"fill",width:"100%",height:"100%"}})),i.a.createElement("div",{className:"btn-down",style:{backgroundColor:"whitesmoke",color:"whitesmoke",textAlign:"center"}},i.a.createElement(C.a,{style:{color:"#424242"},onClick:function(t){e.handleVideo()}},!0===this.state.video?i.a.createElement(N.a,null):i.a.createElement(j.a,null)),i.a.createElement(C.a,{style:{color:"#f44336"},onClick:this.handleEndCall},i.a.createElement(L.a,null)),i.a.createElement(C.a,{style:{color:"#424242"},onClick:function(t){e.handleAudio(),t.preventDefault()}},!0===this.state.audio?i.a.createElement(D.a,null):i.a.createElement(T.a,null)),i.a.createElement(k.a,{badgeContent:this.state.newmessages,max:999,color:"secondary",onClick:this.openChat},i.a.createElement(C.a,{style:{color:"#424242"},onClick:this.openChat},i.a.createElement(U.a,null)))))))}}]),a}(n.Component),G=a(64),Y=a(1587),$=(a(1554),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){return n.setState({url:e.target.value})},n.join=function(){if(""!==n.state.url){var e=n.state.url.split("/");window.location.href="/".concat(e[e.length-1])}else{e=Math.random().toString(36).substring(2,7);window.location.href="/".concat(e)}},n.state={url:""},n}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("body",null,i.a.createElement("div",{className:"is-boxed has-animations"},i.a.createElement("div",{className:"body-wrap boxed-container"},i.a.createElement(Y.a,null,i.a.createElement(Y.a.Brand,null,"Logo")),i.a.createElement("main",null,i.a.createElement("section",{className:"hero"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"hero-inner"},i.a.createElement("div",{className:"hero-copy"},i.a.createElement("h1",{className:"hero-title mt-0",style:{fontSize:"50px"}},"Dating is now on videocall"),i.a.createElement("br",null),i.a.createElement("p",{className:"hero-paragraph"},"Now with dating while distancing on most singles\u2019 minds, doing a ",i.a.createElement("b",null,"VIDEO CALL DATE")," before deciding to meet someone is the new norm and this app is the place for that."),i.a.createElement("br",null),i.a.createElement("h4",{className:"hero-title mt-0"}," The perfect date is only one click away from you and the person you want to date "),i.a.createElement(S.a,{class:"button button-primary",style:{fontSize:"20px"},onClick:this.join},"Go on the date already"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null)),i.a.createElement("div",{className:"hero-media"},i.a.createElement("div",{className:"header-illustration"},i.a.createElement("img",{className:"header-illustration-image asset-light",src:"dist/images/header-illustration-light.svg",alt:"Header illustration"})),i.a.createElement("div",{className:"hero-media-illustration"},i.a.createElement("img",{className:"hero-media-illustration-image asset-light",src:"dist/images/hero-media-illustration-light.svg",alt:"Hero media illustration"})),i.a.createElement("div",{className:"hero-media-container"},i.a.createElement("img",{className:"hero-media-image asset-light",src:"dist/images/hero-media-light.svg",alt:"Hero media"}))))),i.a.createElement("div",{className:"features-header text-center"},i.a.createElement("h2",{className:"section-title"},"How does video call dating work?"),i.a.createElement("p",{className:"section-paragraph"},"Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation."),i.a.createElement("div",{className:"features-image"},i.a.createElement("img",{className:"features-illustration asset-light",src:"dist/images/features-illustration-light.svg",alt:"Feature illustration"}),i.a.createElement("img",{className:"features-box asset-light",src:"dist/images/features-box-light.svg",alt:"Feature box"}),i.a.createElement("img",{className:"features-illustration asset-light",src:"dist/images/features-illustration-top-light.svg",alt:"Feature illustration top"})),i.a.createElement("div",{className:"features-header text-center"},i.a.createElement("div",{class:"features-wrap"},i.a.createElement("div",{class:"feature-inner"},i.a.createElement("div",{class:"feature-icon"},i.a.createElement("img",{class:"asset-light",src:"dist/images/feature-01-light.svg",alt:"Feature 01"})),i.a.createElement("div",{class:"feature-content"},i.a.createElement("h3",{class:"feature-title mt-0"},"1. Press the button to start your date"),i.a.createElement("p",{class:"text-sm mb-0"},"Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui."))),i.a.createElement("br",null),i.a.createElement("div",{class:"feature-inner"},i.a.createElement("div",{class:"feature-icon"},i.a.createElement("img",{class:"asset-light",src:"dist/images/feature-02-light.svg",alt:"Feature 02"})),i.a.createElement("div",{class:"feature-content"},i.a.createElement("h3",{class:"feature-title mt-0"},"2. Write your name, accept using your mic & video"),i.a.createElement("p",{class:"text-sm mb-0"},"Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui."))),i.a.createElement("br",null),i.a.createElement("div",{class:"feature-inner"},i.a.createElement("div",{class:"feature-icon"},i.a.createElement("img",{class:"asset-light",src:"dist/images/feature-03-light.svg",alt:"Feature 03"})),i.a.createElement("div",{class:"feature-content"},i.a.createElement("h3",{class:"feature-title mt-0"},"3. Send the link to your date and start answering the questions together"),i.a.createElement("p",{class:"text-sm mb-0"},"Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui.")))))),i.a.createElement("div",null))),i.a.createElement("div",{style:{backgroundColor:"#F0F0F0"}},i.a.createElement(G.f,{color:"blue",className:"font-small pt-4 mt-4"},i.a.createElement(G.e,{fluid:!0,className:"text-center text-md-left"},i.a.createElement(G.l,null,i.a.createElement(G.d,{md:"3"}),i.a.createElement(G.d,{md:"6"},i.a.createElement("h5",{className:"title"},"Footer Content"),i.a.createElement("p",null,"Here you can use rows and columns here to organize your footer content.")),i.a.createElement(G.d,{md:"3"}))),i.a.createElement("div",{className:"footer-copyright text-center py-3"},i.a.createElement(G.e,{fluid:!0},"\xa9 ",(new Date).getFullYear()," Copyright")))))))}}]),a}(n.Component)),K=a(62),Q=a(28),X=(a(1555),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(K.a,null,i.a.createElement(Q.c,null,i.a.createElement(Q.a,{path:"/",exact:!0,component:$}),i.a.createElement(Q.a,{path:"/:url",component:I}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},266:function(e,t,a){e.exports=a(1557)},293:function(e,t){}},[[266,1,2]]]);
//# sourceMappingURL=main.0ae79401.chunk.js.map