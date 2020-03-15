function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"8eL3":function(t,e,n){"use strict";n.r(e);var r=n("ofXK"),a=n("tyNb"),i=n("3Pt+"),o=n("SxV6"),s=n("fXoL"),c=n("ej43"),l=n("XiUz"),u=n("Wp6s"),b=n("znSr"),f=n("wZkO"),d=n("kmnG"),p=n("qFsG"),m=n("bTqV"),g=n("f3yp");function h(t,e){1&t&&(s.Rb(0,"mat-error"),s.rc(1," The email and password were not recognised "),s.Qb())}function v(t,e){1&t&&s.Nb(0,"app-spinner")}var w,y,C=[{path:"",component:(w=function(){function t(e,n,r,a){_classCallCheck(this,t),this.formBuilder=e,this.route=n,this.router=r,this.authenticationService=a,this.loading=!1,this.submitted=!1,this.authenticationService.currentUserValue&&this.router.navigate(["/"])}return _createClass(t,[{key:"ngOnInit",value:function(){this.loginForm=this.formBuilder.group({username:["",[i.k.required,i.k.email]],password:["",i.k.required]}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}},{key:"onSubmit",value:function(){var t=this;this.submitted=!0,this.loginForm.invalid||(this.loading=!0,this.authenticationService.login(this.f.username.value,this.f.password.value).pipe(Object(o.a)()).subscribe((function(e){t.router.navigate([t.returnUrl])}),(function(e){t.loginInvalid=!0,t.loading=!1})))}},{key:"f",get:function(){return this.loginForm.controls}}]),t}(),w.\u0275fac=function(t){return new(t||w)(s.Mb(i.b),s.Mb(a.a),s.Mb(a.b),s.Mb(c.a))},w.\u0275cmp=s.Gb({type:w,selectors:[["app-login"]],decls:21,vars:5,consts:[["fxLayout","column","fxLayoutAlign","center center",1,"mat-card-wrapper"],["ngClass.gt-xs","card-gt-xs","ngClass.lt-sm","card-lt-sm",1,"mat-elevation-z4"],["mat-tab-nav-bar",""],["fxFlex","50%","mat-tab-link","","routerLink","/verification/login",3,"active"],["fxFlex","50%","mat-tab-link","","routerLink","/verification/signup",3,"active"],["fxLayout","column","fxLayoutAlign","center",1,"padding-16",3,"formGroup","ngSubmit"],[4,"ngIf"],[1,"full-width-input"],["formControlName","username","matInput","","placeholder","Email","required",""],["formControlName","password","matInput","","placeholder","Password","required","","type","password"],["color","primary","mat-raised-button","",1,"margin-top-10"]],template:function(t,e){1&t&&(s.Rb(0,"div",0),s.Rb(1,"mat-card",1),s.Rb(2,"mat-card-content"),s.Rb(3,"nav",2),s.Rb(4,"a",3),s.rc(5," Login "),s.Qb(),s.Rb(6,"a",4),s.rc(7," Sign Up "),s.Qb(),s.Qb(),s.Rb(8,"form",5),s.Zb("ngSubmit",(function(){return e.onSubmit()})),s.qc(9,h,2,0,"mat-error",6),s.Rb(10,"mat-form-field",7),s.Nb(11,"input",8),s.Rb(12,"mat-error"),s.rc(13," Please provide a valid email address "),s.Qb(),s.Qb(),s.Rb(14,"mat-form-field",7),s.Nb(15,"input",9),s.Rb(16,"mat-error"),s.rc(17," Please provide a valid password "),s.Qb(),s.Qb(),s.Rb(18,"button",10),s.rc(19,"Login"),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.Qb(),s.qc(20,v,1,0,"app-spinner",6)),2&t&&(s.Bb(4),s.fc("active",!0),s.Bb(2),s.fc("active",!1),s.Bb(2),s.fc("formGroup",e.loginForm),s.Bb(1),s.fc("ngIf",e.loginInvalid),s.Bb(11),s.fc("ngIf",e.loading))},directives:[l.c,l.b,u.a,b.a,u.b,f.b,a.d,l.a,f.a,i.l,i.g,i.d,r.j,d.b,i.a,p.a,i.f,i.c,i.j,d.a,m.a,g.a],styles:[".mat-card-wrapper[_ngcontent-%COMP%]{height:80vh;text-align:center;padding:8px}.card-gt-xs[_ngcontent-%COMP%]{width:50%}.card-lt-sm[_ngcontent-%COMP%]{width:95%}mat-form-field[_ngcontent-%COMP%]{display:block}mat-spinner[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%}"]}),w)}],k=((y=function t(){_classCallCheck(this,t)}).\u0275mod=s.Kb({type:y}),y.\u0275inj=s.Jb({factory:function(t){return new(t||y)},imports:[[a.e.forChild(C)],a.e]}),y),P=n("Xa2L"),x=n("YUcS"),_=n("PCNd");n.d(e,"LoginModule",(function(){return R}));var Q,R=((Q=function t(){_classCallCheck(this,t)}).\u0275mod=s.Kb({type:Q}),Q.\u0275inj=s.Jb({factory:function(t){return new(t||Q)},imports:[[r.b,k,i.i,u.c,P.a,d.d,p.b,m.b,x.a,_.a,f.c]]}),Q)}}]);