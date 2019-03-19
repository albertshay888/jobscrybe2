(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{215:function(e,t,a){e.exports=a(388)},368:function(e,t){},388:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(32),o=a.n(i),s=a(7),l=a(8),c=a(10),u=a(9),m=a(11),p=a(394),d=(a(87),a(12)),h=a(60),g=a.n(h),f=a(52),b=a.n(f),E=a(82),v=a.n(E),y=a(81),j=a.n(y),w=a(15),O=a.n(w),C=a(18),x=a(13),S=a.n(x),k=a(33),I=a(5),R=a.n(I),N=a(26),L=a.n(N),W=a(25),B=a.n(W),A=a(17),D=a.n(A),F=a(34),J=a.n(F),T={getJobs:function(e){return J.a.get("http://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=".concat(e.search,"&location=").concat(e.location))},getSavedJobs:function(){return J.a.get("/api/jobs")},deleteJobs:function(e){return J.a.delete("/api/jobs/"+e)},saveJob:function(e){return J.a.post("/api/jobs/".concat(e.user),e)},addResume:function(e){return console.log(e),J.a.post("/api/saveResume",e)},logout:function(){return J.a.get("/logout")},getResumes:function(e){return J.a.get("/api/resume/"+e)},deleteResume:function(e){return J.a.delete("/api/resume/"+e)},calculateAlgo:function(e){return console.log("running algorithm"),console.log(e),J.a.post("/api/algo/",e)},signUp:function(e){return J.a.post("/api/signup/",e)},logIn:function(e){return J.a.post("/api/login/",e)}},U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={search:"",location:"",jobs:[]},a.handleChange=function(e){console.log(e.target.name);var t=e.target.value,n=e.target.name;"password"===n&&(t=t.substring(0,15)),a.setState(Object(C.a)({},n,t))},a.handleSubmit=function(e){e.preventDefault(),a.state.search?T.getJobs({search:a.state.search,location:a.state.location}).then(function(e){console.log(e.data),a.setState({jobs:e.data}),a.props.grabJobs(a.state.jobs)}).catch(function(e){console.log(e)}):alert("Please enter keywords")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props;return r.a.createElement(n.Fragment,null,r.a.createElement(S.a,{container:!0,spacing:12,justify:"flex-end"},r.a.createElement(S.a,{item:!0,xs:7},r.a.createElement(L.a,{fullWidth:!0,margin:"normal"},r.a.createElement(k.d,{htmlFor:"search"},"\ud83d\udd0d Job Title, Keywords, or Company "),r.a.createElement(B.a,{value:this.state.search,onChange:this.handleChange,id:"search",name:"search",autoFocus:!0}))),r.a.createElement(S.a,{item:!0,xs:1}),r.a.createElement(S.a,{item:!0,xs:2},r.a.createElement(L.a,{fullWidth:!0,margin:"normal"},r.a.createElement(k.d,{htmlFor:"location"},"Location"),r.a.createElement(B.a,{value:this.state.location,onChange:this.handleChange,id:"location",name:"location"}))),r.a.createElement(S.a,{item:!0,xs:2},r.a.createElement(D.a,{onClick:this.handleSubmit,type:"submit",variant:"contained",color:"primary",className:e.submit},"Search"))))}}]),t}(r.a.Component),G=Object(d.withStyles)(function(e){return{paper:{marginTop:8*e.spacing.unit}}})(U),P=a(30),M=a.n(P),H=a(38),_=a.n(H),q=a(42),z=a.n(q),V=a(59),Y=a.n(V),K=a(47),X=a.n(K),Q=a(74),Z=a.n(Q),$=a(78),ee=a.n($),te=a(76),ae=a.n(te),ne=a(77),re=a.n(ne),ie=a(75),oe=a.n(ie),se=a(83),le=a.n(se),ce=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:a.props.user,jobInfo:a.props.jobInfo},a.saveJob=function(){T.saveJob(a.state)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(D.a,{color:"primary",onClick:this.saveJob},r.a.createElement(le.a,null),"SAVE")}}]),t}(r.a.Component),ue=a(28),me=a.n(ue),pe=a(58),de=a.n(pe),he=a(57),ge=a.n(he),fe=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selected:{},resumes:[]},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(C.a)({},n,r))},a.calculateAlgo=function(e){T.calculateAlgo(e).then(function(t){console.log(e)})},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state.selected),a.state.selected?a.calculateAlgo(a.state):alert("Select a resume")},a.getResumes=function(e){T.getResumes(e).then(function(e){a.setState({resumes:e.data})})},a.handleChange=function(e){a.setState(Object(C.a)({},e.target.name,e.target.value)),a.setState({hold:e.target.value}),console.log(a.state.hold)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getResumes(this.props.user)}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("form",{className:e.root,autoComplete:"off"},r.a.createElement(S.a,{container:!0},r.a.createElement(S.a,{item:!0,sm:9},r.a.createElement(L.a,{fullWidth:!0,className:e.formControl},r.a.createElement(me.a,{htmlFor:"selected"},"Resume"),r.a.createElement(ge.a,{value:this.state.selected,onChange:this.handleChange,inputProps:{name:"selected",id:"resume"}},this.state.resumes.map(function(e){return r.a.createElement(de.a,{value:e},e.title)})))),r.a.createElement(S.a,{item:!0,sm:2},r.a.createElement(D.a,{onClick:this.calculateAlgo,color:"primary"},"Jobify"))))}}]),t}(r.a.Component),be=Object(d.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing.unit,minWidth:120},selectEmpty:{marginTop:2*e.spacing.unit}}})(fe),Ee=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,user:a.props.user},a.grabResume=function(e){a.setState({resume:e})},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{variant:"contained",color:"primary",onClick:this.handleClickOpen},"View Posting"),r.a.createElement(Z.a,{fullWidth:"true",maxWidth:"xl",open:this.state.open,onClose:this.handleClose,"aria-labelledby":"max-width-dialog-title"},r.a.createElement(oe.a,{id:"max-width-dialog-title"},this.props.jobInfo.title),r.a.createElement(ae.a,null,r.a.createElement(re.a,null,r.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:this.props.jobInfo.description}}),"How to apply:",r.a.createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:this.props.jobInfo.how_to_apply}}))),r.a.createElement(ee.a,null,r.a.createElement(k.c,{container:!0,spacing:6},r.a.createElement(k.c,{item:!0,sm:6},r.a.createElement(be,{user:this.props.user,jobInfo:this.props.jobInfo,grabResume:this.grabResume})),r.a.createElement(k.c,{item:!0,sm:2},r.a.createElement(ce,{user:this.props.user,jobInfo:this.props.jobInfo})),r.a.createElement(k.c,{item:!0,sm:2},r.a.createElement(D.a,{onClick:this.handleClose,color:"primary"},"Close"))))))}}]),t}(r.a.Component),ve=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){this.props.classes;return r.a.createElement(_.a,null,r.a.createElement(z.a,null,r.a.createElement(O.a,{gutterBottom:!0,variant:"h5",component:"h2",align:"left"},this.props.jobInfo.title),r.a.createElement(O.a,{gutterBottom:!0,variant:"h6",align:"left"},this.props.jobInfo.company),r.a.createElement(Y.a,{component:"img",className:"companyImage",image:this.props.jobInfo.company_logo}),r.a.createElement(O.a,{align:"left"},this.props.jobInfo.location),r.a.createElement(O.a,{align:"left"},this.props.jobInfo.created_at)),r.a.createElement(X.a,null,r.a.createElement(Ee,{jobInfo:this.props.jobInfo,user:this.props.user})))}}]),t}(r.a.Component),ye=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,null),r.a.createElement("main",null,r.a.createElement("div",{className:R()(e.layout,e.cardGrid)},r.a.createElement(S.a,{container:!0,spacing:40},this.props.jobs.map(function(e){return r.a.createElement(S.a,{item:!0,key:e,xs:12,sm:12,md:12,lg:12},r.a.createElement(ve,{jobInfo:e}))})))))}}]),t}(r.a.Component),je=Object(d.withStyles)(function(e){return{appBar:{position:"relative"},icon:{marginRight:2*e.spacing.unit},heroUnit:{backgroundColor:e.palette.background.paper},heroContent:{maxWidth:600,margin:"0 auto",padding:"".concat(8*e.spacing.unit,"px 0 ").concat(6*e.spacing.unit,"px")},heroButtons:{marginTop:4*e.spacing.unit},layout:Object(C.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),cardGrid:{padding:"".concat(8*e.spacing.unit,"px 0")},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:6*e.spacing.unit}}})(ye),we=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={jobs:[]},a.resetState=function(){a.setState({jobs:[]})},a.grabJobs=function(e){a.setState({jobs:e}),console.log(a.state.jobs)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.resetState()}},{key:"render",value:function(){var e=this.props.classes;this.state.value;return r.a.createElement(n.Fragment,{className:e.heroUnit},r.a.createElement(S.a,{container:!0,spacing:24},r.a.createElement("div",{className:e.heroUnit},r.a.createElement("div",{className:e.heroContent},r.a.createElement(O.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Search"),r.a.createElement(O.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0},"Look for jobs in your area"))),r.a.createElement(S.a,{item:!0,xs:12},this.state.jobs.length?r.a.createElement(je,{jobs:this.state.jobs}):r.a.createElement(G,{grabJobs:this.grabJobs}))))}}]),t}(r.a.Component),Oe=Object(d.withStyles)(function(e){return{heroContent:{maxWidth:600,margin:"0 auto",padding:"".concat(8*e.spacing.unit,"px 0 ").concat(6*e.spacing.unit,"px")},layout:Object(C.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"})}})(we),Ce=a(37),xe=a.n(Ce);var Se=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,description:"",title:"",resumeBody:""},a.handleSubmit=function(e){e.preventDefault(),a.state.resumeBody?(console.log(a.props.user),T.addResume({title:a.state.title,description:a.state.description,body:a.state.resumeBody,user:a.props.user,date:Date.now}).then(function(e){console.log(e),200===e.status&&console.log("resume added!")}).catch(function(e){return console.log(e)}),a.setState({description:"",title:"",resumeBody:""})):alert("You can't save a blank resume!")},a.handleOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.handleInputChange=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(C.a)({},n,t))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(D.a,{variant:"contained",className:"primaryButton","font-weight":"bold",color:"primary",height:"40px",onClick:this.handleOpen},"Copy / Paste one here"),r.a.createElement(xe.a,{"aria-labelledby":"title","aria-describedby":"modal-body",open:this.state.open,onClose:this.handleClose},r.a.createElement("div",{style:{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")},className:e.paper},r.a.createElement(S.a,{container:!0,spacing:8,alignItems:"flex-end"},r.a.createElement(S.a,{item:!0,sm:12},r.a.createElement(L.a,null,r.a.createElement(me.a,{htmlFor:"title"},"Title"),r.a.createElement(B.a,{fullWidth:!0,value:this.state.title,onChange:this.handleInputChange,id:"title",name:"title"}))),r.a.createElement(S.a,{item:!0,sm:12},r.a.createElement(L.a,{fullWidth:!0},r.a.createElement(me.a,{htmlFor:"description"},"Description"),r.a.createElement(B.a,{fullWidth:!0,value:this.state.description,onChange:this.handleInputChange,id:"description",name:"description"}))),r.a.createElement(S.a,{item:!0,md:12},r.a.createElement("form",null,r.a.createElement(O.a,{component:"label",variant:"h6",align:"center"},"Copy / Paste your resume here"),r.a.createElement("textarea",{name:"resumeBody",rows:"20",cols:"50",value:this.state.resumeBody,onChange:this.handleInputChange}))),r.a.createElement(S.a,{item:!0,md:12},r.a.createElement(D.a,{variant:"outlined",color:"primary",fullWidth:!0,onClick:this.handleSubmit},"Save to my Resumes"))))))}}]),t}(r.a.Component),ke=Object(d.withStyles)(function(e){return{paper:{position:"absolute",width:75*e.spacing.unit,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:4*e.spacing.unit,outline:"none"}}})(Se),Ie=a(79),Re=a.n(Ie),Ne=a(80),Le=a.n(Ne),We=a(43),Be=a.n(We),Ae=a(111),De=a.n(Ae),Fe=a(156),Je=a.n(Fe),Te=a(155),Ue=a.n(Te);var Ge=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={expanded:!1},a.handleExpandClick=function(){a.setState(function(e){return{expanded:!e.expanded}})},a.handleResumeDelete=function(e){T.deleteResume(e).then(function(e){return a.getResumes()})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(_.a,{className:t.resume},r.a.createElement(Re.a,{action:r.a.createElement(Be.a,null,r.a.createElement(Ue.a,null)),title:this.props.title,subheader:this.props.date}),r.a.createElement(z.a,null,r.a.createElement(O.a,{component:"p"},this.props.description)),r.a.createElement(X.a,{className:t.actions,disableActionSpacing:!0},r.a.createElement(Be.a,{"aria-label":"Add to favorites"},r.a.createElement(le.a,null)),r.a.createElement(D.a,{size:"small",padding:"190px",variant:"outlined"},"Edit"),r.a.createElement(D.a,{size:"small",variant:"outlined",onClick:function(){return e.handleResumeDelete(t._id)}},"Delete"),r.a.createElement(Be.a,{className:R()(t.expand,Object(C.a)({},t.expandOpen,this.state.expanded)),onClick:this.handleExpandClick,"aria-expanded":this.state.expanded,"aria-label":"Show more"},r.a.createElement(Je.a,null))),r.a.createElement(Le.a,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0},r.a.createElement(z.a,null,r.a.createElement(O.a,{paragraph:!0},this.props.body))))}}]),t}(r.a.Component),Pe=Object(d.withStyles)(function(e){return{card:{maxWidth:400},media:{height:0,paddingTop:"56.25%"},actions:{display:"flex"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:De.a[500]}}})(Ge),Me=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={resumes:[]},a.getResumes=function(e){T.getResumes(e).then(function(e){a.setState({resumes:e.data})})},a.handleDeleteResume=function(e){T.deleteResume(e).then(function(e){return a.getResumes()}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(C.a)({},n,r))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getResumes()}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,null),r.a.createElement("main",null,r.a.createElement("div",{className:e.heroUnit},r.a.createElement("div",{className:e.heroContent},r.a.createElement(O.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Your Resumes"),r.a.createElement(O.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0},"Use the space below to organize your personalized resumes"),r.a.createElement("div",{className:e.heroButtons},r.a.createElement(S.a,{container:!0,spacing:16,justify:"center"},r.a.createElement(S.a,{item:!0},r.a.createElement(D.a,{disabled:!0,variant:"contained",color:"primary"},"Upload a resume here")),r.a.createElement(S.a,{item:!0},r.a.createElement(ke,{user:this.props.user,reloadResumes:this.getResumes})))))),r.a.createElement("div",{className:R()(e.layout,e.cardGrid)},r.a.createElement(S.a,{container:!0,spacing:40},this.state.resumes.length?this.state.resumes.map(function(e){return r.a.createElement(S.a,{item:!0,key:e,sm:6,md:4},r.a.createElement(Pe,{key:e._id,title:e.title,description:e.description,body:e.body,date:e.date}))}):r.a.createElement(S.a,{item:!0},r.a.createElement(O.a,{variant:"h4",color:"inherit"},"No resumes to be found, upload one above to get started"))))))}}]),t}(r.a.Component),He=Object(d.withStyles)(function(e){return{appBar:{position:"relative"},icon:{marginRight:2*e.spacing.unit},heroContent:{maxWidth:600,margin:"0 auto",padding:"".concat(8*e.spacing.unit,"px 0 ").concat(6*e.spacing.unit,"px")},heroButtons:{marginTop:4*e.spacing.unit},layout:Object(C.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),cardGrid:{padding:"".concat(8*e.spacing.unit,"px 0")},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:6*e.spacing.unit}}})(Me),_e=(a(368),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleLogout=function(){var e=this;T.logout().then(function(t){200===t.status&&(console.log("success"),e.props.logoutHandler())})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.handleLogout()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Thank you for your patronage"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\udc14")))}}]),t}(n.Component)),qe=a(157),ze=a.n(qe),Ve=(r.a.Component,function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={jobs:[]},a.getSavedJobs=function(){T.getSavedJobs().then(function(e){console.log(e.data),a.setState({jobs:e.data})})},a.handleJobDelete=function(e){T.deleteJobs(e).then(function(e){return a.getSavedJobs()})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getSavedJobs()}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,null),r.a.createElement("main",null,r.a.createElement("div",{className:t.heroUnit},r.a.createElement("div",{className:t.heroContent},r.a.createElement(O.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Saved Jobs"),r.a.createElement(O.a,{variant:"h6",align:"center",color:"textSecondary",paragraph:!0},"Below you can find all the jobs that you've saved"),r.a.createElement("div",{className:t.heroButtons},r.a.createElement(S.a,{container:!0,spacing:16,justify:"center"})))),r.a.createElement("div",{className:R()(t.layout,t.cardGrid)},r.a.createElement(S.a,{container:!0,spacing:40},this.state.jobs.length?this.state.jobs.map(function(t){return r.a.createElement(S.a,{item:!0,xs:12},r.a.createElement(ve,{user:e.props.user,jobInfo:t}))}):r.a.createElement(O.a,{variant:"h4",color:"inherit"},"couldn't find any saved jobs, search and save some above")))))}}]),t}(r.a.Component)),Ye=Object(d.withStyles)(function(e){return{appBar:{position:"relative"},icon:{marginRight:2*e.spacing.unit},heroContent:{maxWidth:600,margin:"0 auto",padding:"".concat(8*e.spacing.unit,"px 0 ").concat(6*e.spacing.unit,"px")},heroButtons:{marginTop:4*e.spacing.unit},layout:Object(C.a)({width:"auto",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(1100+3*e.spacing.unit*2),{width:1100,marginLeft:"auto",marginRight:"auto"}),cardGrid:{padding:"".concat(8*e.spacing.unit,"px 0")},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:6*e.spacing.unit}}})(Ve),Ke=a(84),Xe=a.n(Ke);function Qe(e){return r.a.createElement(O.a,{class:"navbar-fixed",position:"fixed",component:"div",style:{padding:24}},e.children)}function Ze(e){return r.a.createElement(j.a,Object.assign({component:"a",onClick:function(e){return e.preventDefault()}},e))}var $e=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:0},a.handleChange=function(e,t){a.setState({value:t})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.value;return r.a.createElement("div",{class:"navbar-fixed"},r.a.createElement("nav",null,r.a.createElement("div",{class:"nav-wrapper",position:"fixed",className:e},r.a.createElement(v.a,{position:"fixed",variant:"fullWidth",value:t,onChange:this.handleChange},r.a.createElement("img",{position:"fixed",width:"16%",src:Xe.a,href:"../pages/Search"}),r.a.createElement(Ze,{position:"fixed",label:"Search",href:"../pages/Search"}),r.a.createElement(Ze,{position:"fixed",label:"My Resumes",href:"../pages/MyResumes"}),r.a.createElement(Ze,{position:"fixed",label:"Saved",href:"../SavedJobs"}),r.a.createElement(Ze,{position:"fixed",label:"Logout",href:"Logout"})),0===t&&r.a.createElement(Qe,null," ",r.a.createElement("img",null)),1===t&&r.a.createElement(Qe,null," ",r.a.createElement(Oe,null)),2===t&&r.a.createElement(Qe,null," ",r.a.createElement(He,{user:this.props.user})),3===t&&r.a.createElement(Qe,null," ",r.a.createElement(Ye,{user:this.props.user})," "),4===t&&r.a.createElement(Qe,null,r.a.createElement(_e,{logoutHandler:this.props.logoutHandler})))))}}]),t}(r.a.Component),et=Object(d.withStyles)(function(e){return{root:{flexGrow:1}}})($e),tt=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{position:!0,fixed:!0,className:e.root},r.a.createElement(g.a,{position:"static",color:"black"},r.a.createElement(b.a,null,r.a.createElement(et,{logoutHandler:this.props.logoutHandler,user:this.props.user}))))}}]),t}(r.a.Component),at=Object(d.withStyles)({root:{flexGrow:1}})(tt),nt=a(48),rt=a.n(nt),it=a(53),ot=a.n(it),st=a(35),lt=a.n(st),ct=a(6),ut=a.n(ct);var mt=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,email:"",password:""},a.handleOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.handleInputChange=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(C.a)({},n,t))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state.email,a.state.password),a.state.email&&a.state.password?(T.signUp({email:a.state.email,password:a.state.password}).then(function(e){console.log(e),200===e.status&&a.props.history.push("/")}).catch(function(e){return console.log(e)}),a.setState({email:"",password:""})):alert("Fields are incomplete, please enter your name and password")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(D.a,{required:!0,fullWidth:!0,variant:"contained",color:"primary",onClick:this.handleOpen},"SIGN UP"),r.a.createElement(xe.a,{"aria-labelledby":"email","aria-describedby":"modal-body",open:this.state.open,onClose:this.handleClose},r.a.createElement("div",{style:{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")},className:e.paper},r.a.createElement(S.a,{container:!0,spacing:8,alignItems:"flex-end"},r.a.createElement(S.a,{item:!0,sm:12},r.a.createElement(L.a,{fullWidth:!0},r.a.createElement(me.a,{htmlFor:"email"},"Email"),r.a.createElement(B.a,{fullWidth:!0,value:this.state.email,onChange:this.handleInputChange,id:"email",name:"email"}))),r.a.createElement(S.a,{item:!0,sm:12},r.a.createElement(L.a,{fullWidth:!0},r.a.createElement(me.a,{htmlFor:"password"},"Password"),r.a.createElement(B.a,{fullWidth:!0,value:this.state.password,onChange:this.handleInputChange,id:"password",name:"password",type:"password"}))),r.a.createElement(S.a,{item:!0,md:12},r.a.createElement(D.a,{variant:"outlined",color:"primary",type:"submit",required:!0,fullWidth:!0,onClick:this.handleSubmit},"SIGN UP"))))))}}]),t}(r.a.Component),pt=Object(d.withStyles)(function(e){return{main:Object(C.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{position:"absolute",width:75*e.spacing.unit,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],outline:"none",marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(mt),dt=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",user:""},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state.email,a.state.password),a.state.email&&a.state.password?T.logIn({email:a.state.email,password:a.state.password}).then(function(e){a.setState({email:"",password:"",user:e.data._id}),a.props.getUser(a.state.user),a.props.loginHandler()}):alert("Fields are incomplete, please enter your name and password")},a.handleInputChange=function(e){var t=e.target.value,n=e.target.name;"password"===n&&(t=t.substring(0,15)),a.setState(Object(C.a)({},n,t))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("main",{className:e.main},r.a.createElement(M.a,null),r.a.createElement(lt.a,{className:e.paper},r.a.createElement("img",{width:"60%",padding:"100px",src:Xe.a,align:"center",alt:"Logo"}),r.a.createElement(O.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form},r.a.createElement(L.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(me.a,{htmlFor:"email"},"Type your email address here"),r.a.createElement(B.a,{value:this.state.email,onChange:this.handleInputChange,id:"email",name:"email",autoComplete:"email",autoFocus:!0})),r.a.createElement(L.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(me.a,{htmlFor:"password"},"Password"),r.a.createElement(B.a,{value:this.state.password,onChange:this.handleInputChange,name:"password",type:"password",id:"password",autoComplete:"current-password"})),r.a.createElement(rt.a,{control:r.a.createElement(ot.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(D.a,{onClick:this.handleSubmit,type:"submit",required:!0,fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"LOGIN")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(pt,null)," ")))}}]),t}(r.a.Component),ht=ut()(function(e){return{main:Object(C.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit},submit:{marginTop:3*e.spacing.unit}}})(dt);var gt=a(158),ft=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!0,isLoggedIn:!1,user:""},a.getUser=function(e){a.setState({user:e})},a.changeLogin=function(){a.state.isLoggedIn?(a.setState({isLoggedIn:!1}),a.setState({user:""})):a.setState({isLoggedIn:!0})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.state.isLoggedIn?r.a.createElement(at,{logoutHandler:this.changeLogin,user:this.state.user}):r.a.createElement(ht,{loginHandler:this.changeLogin,getUser:this.getUser})}}]),t}(r.a.Component),bt=Object(d.withStyles)(function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(gt.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(C.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:7*e.spacing.unit},e.breakpoints.up("sm"),{width:9*e.spacing.unit}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,padding:3*e.spacing.unit,height:"100vh",overflow:"auto"},chartContainer:{marginLeft:-22},tableContainer:{height:320},h5:{marginBottom:2*e.spacing.unit}}})(ft),Et=a(112),vt=a.n(Et),yt=a(393),jt=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleInputChange=function(e){var t=e.target.value,n=e.target.name;"password"===n&&(t=t.substring(0,15)),a.setState(Object(C.a)({},n,t))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state.email,a.state.password),a.state.email&&a.state.password?(T.signUp({email:a.state.email,password:a.state.password}).then(function(e){console.log(e),200===e.status&&a.props.history.push("/")}).catch(function(e){return console.log(e)}),a.setState({email:"",password:""})):alert("Fields are incomplete, please enter your name and password")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("main",{className:e.main},r.a.createElement(M.a,null),r.a.createElement(lt.a,{className:e.paper},r.a.createElement(k.a,{className:e.avatar},r.a.createElement(vt.a,null)),r.a.createElement(O.a,{width:"100%",component:"h1",variant:"h5"},"Sign Up"),r.a.createElement("form",{className:e.form},r.a.createElement(L.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(me.a,{htmlFor:"email"},"Email Address"),r.a.createElement(B.a,{value:this.state.email,onChange:this.handleInputChange,id:"email",name:"email",autoComplete:"email",autoFocus:!0})),r.a.createElement(L.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(me.a,{htmlFor:"password"},"Password"),r.a.createElement(B.a,{value:this.state.password,onChange:this.handleInputChange,name:"password",type:"password",id:"password",autoComplete:"current-password"})),r.a.createElement(rt.a,{control:r.a.createElement(ot.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(k.b,{onClick:this.handleSubmit,required:!0,fullWidth:!0,variant:"contained",color:"primary"},"Sign Up")),r.a.createElement(O.a,{variant:"body1"},"Already have an account? Sign in ",r.a.createElement(yt.a,{to:"/"},"here"))))}}]),t}(r.a.Component),wt=(ut()(function(e){return{main:Object(C.a)({width:"auto",display:"block",marginLeft:3*e.spacing.unit,marginRight:3*e.spacing.unit},e.breakpoints.up(400+3*e.spacing.unit*2),{width:400,marginLeft:"auto",marginRight:"auto"}),paper:{marginTop:8*e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing.unit}}})(jt),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(bt,{id:"main-dash"})))}}]),t}(n.Component));o.a.render(r.a.createElement(wt,null),document.getElementById("root"))},84:function(e,t,a){e.exports=a.p+"static/media/logo.7fd6f3b6.svg"},87:function(e,t,a){}},[[215,2,1]]]);
//# sourceMappingURL=main.b18ae679.chunk.js.map