(this.webpackJsonpisearch=this.webpackJsonpisearch||[]).push([[0],{58:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),s=a(21),i=a.n(s),o=(a(58),a(19)),l=a.n(o),j=a(20),d=a(10),b=a(87),u=a(95),h=a(93),p=a(94),x=a(88),O=a(47),m=(a(60),O.a.initializeApp({apiKey:"AIzaSyBK8C2q5gHNzDoRNLvtN4vYtAvmAQpyHZY",authDomain:"auth-developement-7c577.firebaseapp.com",databaseURL:"https://auth-developement-7c577.firebaseio.com",projectId:"auth-developement-7c577",storageBucket:"auth-developement-7c577.appspot.com",messagingSenderId:"81976145361",appId:"1:81976145361:web:8caca953f8ac8c1ca5dcf0"})),v=m.auth(),f=r.a.createContext();function g(){return Object(c.useContext)(f)}function y(e){var t=e.children,a=Object(c.useState)(),r=Object(d.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(!0),l=Object(d.a)(o,2),j=l[0],b=l[1];Object(c.useEffect)((function(){return v.onAuthStateChanged((function(e){i(e),b(!1)}))}),[]);var u={currentUser:s,login:function(e,t){v.signInWithEmailAndPassword(e,t)},signup:function(e,t){return v.createUserWithEmailAndPassword(e,t)},logout:function(){return v.signOut()}};return Object(n.jsx)(f.Provider,{value:u,children:!j&&t})}var w=a(7),N=a(15);function k(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),r=g().signup,s=Object(c.useState)(""),i=Object(d.a)(s,2),o=i[0],O=i[1],m=Object(c.useState)(!1),v=Object(d.a)(m,2),f=v[0],y=v[1],k=Object(w.g)();function S(){return(S=Object(j.a)(l.a.mark((function n(c){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c.preventDefault(),t.current.value===a.current.value){n.next=3;break}return n.abrupt("return",O("Passwords do not match"));case 3:return n.prev=3,O(""),y(!0),n.next=8,r(e.current.value,t.current.value);case 8:k.push("/"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),O("Failed to create an account");case 14:y(!1);case 15:case"end":return n.stop()}}),n,null,[[3,11]])})))).apply(this,arguments)}return Object(n.jsx)(b.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(n.jsxs)("div",{className:"w-100",style:{maxWidth:"400px"},children:[Object(n.jsx)(u.a,{children:Object(n.jsxs)(u.a.Body,{children:[Object(n.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),o&&Object(n.jsx)(h.a,{variant:"danger",children:o}),Object(n.jsxs)(p.a,{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(n.jsxs)(p.a.Group,{id:"email",children:[Object(n.jsx)(p.a.Label,{children:"Email"}),Object(n.jsx)(p.a.Control,{type:"email",ref:e,required:!0})]}),Object(n.jsxs)(p.a.Group,{id:"password",children:[Object(n.jsx)(p.a.Label,{children:"Password"}),Object(n.jsx)(p.a.Control,{type:"password",ref:t,required:!0})]}),Object(n.jsxs)(p.a.Group,{id:"password-confirm",children:[Object(n.jsx)(p.a.Label,{children:"Confirm Password"}),Object(n.jsx)(p.a.Control,{type:"password",ref:a,required:!0})]}),Object(n.jsx)(x.a,{disabled:f,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(n.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(n.jsx)(N.b,{to:"/login",children:"Log in"})]})]})})}var S=a(89),C=a(90),L=a(51),R=a(91);var A=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),a=t[0],r=t[1],s=g(),i=s.currentUser,o=s.logout,b=w.g;function u(){return(u=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(""),e.prev=1,e.next=4,o();case 4:b.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),r("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg  navbar-dark bg-dark fixed-top",children:[Object(n.jsx)(N.b,{className:"navbar-brand",to:"/",children:i.email}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup",children:Object(n.jsxs)("div",{className:"navbar-nav",children:[Object(n.jsxs)(N.b,{className:"nav-link font",to:"/",children:["Home ",Object(n.jsx)("span",{className:"sr-only",children:"(current)"})]}),Object(n.jsx)(N.b,{className:"nav-link font",to:"/movies",children:"Movies"}),Object(n.jsx)(N.b,{className:"nav-link font",to:"/tvshows",children:"Tv Shows"}),Object(n.jsx)(N.b,{className:"nav-link font",to:"/profile",children:"Profile"}),Object(n.jsx)(x.a,{variant:"link",onClick:function(){return u.apply(this,arguments)},children:"Log Out"})]})})]}),Object(n.jsx)("div",{children:a&&Object(n.jsx)(h.a,{variant:"danger",children:a})})]})},G=a(18),T=a.n(G);function I(){var e=Object(c.useState)({method:"GET",url:"https://unogsng.p.rapidapi.com/search",params:{type:"movie",genrelist:"",orderby:"rating",limit:"1",countrylist:"78",audio:"english",end_year:"2020"},headers:{"x-rapidapi-key":"5e9e13d657msh2ecfdba1d3174a8p16d1d0jsnc4a8d3b9ee77","x-rapidapi-host":"unogsng.p.rapidapi.com"}}),t=Object(d.a)(e,2),a=t[0];t[1];return Object(c.useEffect)((function(){T.a.request(a).then((function(e){console.log(e.data)})).catch((function(e){console.error(e)}))})),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(A,{}),Object(n.jsx)(b.a,{className:"d-flex align-items-center justify-content-center mt-5",style:{minHeight:"100vh"},children:Object(n.jsx)("div",{className:"w-100",style:{maxWidth:"800px"},children:Object(n.jsx)(S.a,{children:Object(n.jsxs)(C.a,{children:[Object(n.jsx)(L.a,{md:6,children:Object(n.jsxs)(p.a,{style:{maxWidth:"400px"},children:[Object(n.jsx)(p.a.Group,{children:Object(n.jsxs)(p.a.Row,{children:[Object(n.jsx)(p.a.Label,{column:"lg",lg:2,children:"Genre"}),Object(n.jsx)(L.a,{xs:7,children:Object(n.jsx)(p.a.Control,{size:"lg",as:"select",placeholder:"Large text"})})]})}),Object(n.jsx)("br",{}),Object(n.jsx)("fieldset",{children:Object(n.jsxs)(p.a.Group,{as:C.a,children:[Object(n.jsx)(p.a.Label,{as:"legend",column:"lg",lg:2,children:"Type"}),Object(n.jsxs)(L.a,{sm:10,children:[Object(n.jsx)(p.a.Check,{type:"radio",label:"Movies",name:"formHorizontalRadios",id:"formHorizontalRadios1"}),Object(n.jsx)(p.a.Check,{type:"radio",label:"Tv Shows",name:"formHorizontalRadios",id:"formHorizontalRadios2"})]})]})}),Object(n.jsx)("br",{}),Object(n.jsx)(p.a.Group,{children:Object(n.jsxs)(p.a.Row,{children:[Object(n.jsx)(p.a.Label,{column:"lg",lg:2,children:"IMDB Rating"}),Object(n.jsx)(L.a,{xs:7,children:Object(n.jsx)(p.a.Control,{size:"lg",as:"select"})})]})}),Object(n.jsx)("br",{}),Object(n.jsx)(p.a.Group,{children:Object(n.jsxs)(p.a.Row,{children:[Object(n.jsx)(p.a.Label,{column:"lg",lg:2,children:"Start Year"}),Object(n.jsx)(L.a,{xs:7,children:Object(n.jsx)(p.a.Control,{size:"lg",as:"input"})})]})}),Object(n.jsx)(x.a,{variant:"primary",className:"w-100",children:"Generate!"})]})}),Object(n.jsx)(L.a,{md:6,children:Object(n.jsx)(R.a,{style:{display:"none"},children:Object(n.jsxs)(u.a,{children:[Object(n.jsx)(u.a.Img,{variant:"top",src:"https://www.placehold.it/200x200"}),Object(n.jsxs)(u.a.Body,{children:[Object(n.jsx)(u.a.Title,{children:"Card title"}),Object(n.jsx)(u.a.Text,{children:"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."})]})]})})})]})})})})]})}function M(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=g().login,r=Object(c.useState)(""),s=Object(d.a)(r,2),i=s[0],o=s[1],O=Object(c.useState)(!1),m=Object(d.a)(O,2),v=m[0],f=m[1],y=Object(w.g)();function k(){return(k=Object(j.a)(l.a.mark((function n(c){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),n.prev=1,o(""),f(!0),n.next=6,a(e.current.value,t.current.value);case 6:y.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),o("Failed to log in");case 12:f(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}return Object(n.jsx)(b.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(n.jsxs)("div",{className:"w-100",style:{maxWidth:"400px"},children:[Object(n.jsx)(u.a,{children:Object(n.jsxs)(u.a.Body,{children:[Object(n.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),i&&Object(n.jsx)(h.a,{variant:"danger",children:i}),Object(n.jsxs)(p.a,{onSubmit:function(e){return k.apply(this,arguments)},children:[Object(n.jsxs)(p.a.Group,{id:"email",children:[Object(n.jsx)(p.a.Label,{children:"Email"}),Object(n.jsx)(p.a.Control,{type:"email",ref:e,required:!0})]}),Object(n.jsxs)(p.a.Group,{id:"password",children:[Object(n.jsx)(p.a.Label,{children:"Password"}),Object(n.jsx)(p.a.Control,{type:"password",ref:t,required:!0})]}),Object(n.jsx)(x.a,{disabled:v,className:"w-100",type:"submit",children:"Log In"})]})]})}),Object(n.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an Account? ",Object(n.jsx)(N.b,{to:"/signup",children:"Sign Up"})]})]})})}var E=a(24),H=a(25),z=a(27),D=a(26),q=a(92);function P(e){return Object(n.jsx)(b.a,{className:"mt-5",children:Object(n.jsxs)(q.a,{striped:!0,bordered:!0,hover:!0,children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{}),Object(n.jsx)("th",{children:"Title"}),Object(n.jsx)("th",{children:"Year Released"}),Object(n.jsx)("th",{children:"IMBD Score"}),Object(n.jsx)("th",{children:"Description"})]})}),Object(n.jsx)("tbody",{children:e.results.map((function(t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("img",{src:t.poster,style:{maxHeight:"200px"},className:"w-100",alt:""})}),Object(n.jsx)("td",{children:t.title}),Object(n.jsx)("td",{children:t.year}),Object(n.jsx)("td",{children:t.imdbrating}),Object(n.jsxs)("td",{children:[t.synopsis,Object(n.jsx)(x.a,{onClick:e.handleSave,children:"Save"})," "]})]},t.id)}))})]})})}var B=function(e){Object(z.a)(a,e);var t=Object(D.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={movies:[],title:"",year:"",imdbrating:"",synopsis:""},e.componentDidMount=function(){e.getMovies()},e.getMovies=function(){T.a.request({method:"GET",url:"https://unogsng.p.rapidapi.com/search",params:{type:"movie",orderby:"rating",limit:"100",countrylist:"78",audio:"english",end_year:"2020"},headers:{"x-rapidapi-key":"5e9e13d657msh2ecfdba1d3174a8p16d1d0jsnc4a8d3b9ee77","x-rapidapi-host":"unogsng.p.rapidapi.com"}}).then((function(t){return e.setState({movies:t.data.results})})).catch((function(e){console.error(e)}))},e.handleSave=function(){T()({url:"/",method:"POST",data:e.state.movies}).then((function(){console.log("Data has been sent to the server"),e.getMovies()})).catch((function(e){console.log(e),console.log("Internal server error")}))},e}return Object(H.a)(a,[{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(A,{}),Object(n.jsx)(P,{handleSave:this.handleSave,results:this.state.movies})]})}}]),a}(r.a.Component),F=function(e){Object(z.a)(a,e);var t=Object(D.a)(a);function a(){var e;Object(E.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={shows:[]},e}return Object(H.a)(a,[{key:"componentDidMount",value:function(){var e=this;T.a.request({method:"GET",url:"https://unogsng.p.rapidapi.com/search",params:{type:"series",orderby:"rating",limit:"100",countrylist:"78",audio:"english",end_year:"2020"},headers:{"x-rapidapi-key":"5e9e13d657msh2ecfdba1d3174a8p16d1d0jsnc4a8d3b9ee77","x-rapidapi-host":"unogsng.p.rapidapi.com"}}).then((function(t){return e.setState({shows:t.data.results})})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(A,{}),Object(n.jsx)(P,{results:this.state.shows})]})}}]),a}(r.a.Component),U=function(){return T.a.get("/api/profile")};function W(){var e=Object(c.useState)(),t=Object(d.a)(e,2),a=(t[0],t[1]);return Object(c.useEffect)((function(){U().then((function(e){return a(e.data)})).catch((function(e){return console.log(e)}))}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(A,{}),Object(n.jsx)("br",{}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"hello world"})})]})}var Y=a(29),_=a(52);function J(e){var t=e.component,a=Object(_.a)(e,["component"]),c=g().currentUser;return Object(n.jsx)(w.b,Object(Y.a)(Object(Y.a)({},a),{},{render:function(e){return c?Object(n.jsx)(t,Object(Y.a)({},e)):Object(n.jsx)(w.a,{to:"/login"})}}))}var K=function(){return Object(n.jsx)(N.a,{children:Object(n.jsx)(y,{children:Object(n.jsxs)(w.d,{children:[Object(n.jsx)(J,{exact:!0,path:"/",component:I}),Object(n.jsx)(J,{exact:!0,path:"/movies",component:B}),Object(n.jsx)(J,{exact:!0,path:"/tvshows",component:F}),Object(n.jsx)(J,{exact:!0,path:"/profile",component:W}),Object(n.jsx)(w.b,{path:"/signup",component:k}),Object(n.jsx)(w.b,{path:"/login",component:M})]})})})};a(84);i.a.render(Object(n.jsx)(K,{}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.064fe66c.chunk.js.map