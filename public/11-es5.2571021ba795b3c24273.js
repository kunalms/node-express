function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{tpnC:function(t,e,n){"use strict";n.r(e);var a,i,r=n("ofXK"),s=n("tyNb"),o=n("3Pt+"),c=n("SxV6"),u=function t(e,n,a,i,r){_classCallCheck(this,t),this.username=i,this.email=e,this.firstname=n,this.lastname=a,this.password=r},l=n("fXoL"),f=n("ej43"),h=n("qfBg"),d=n("rDax"),m=n("+rOU"),p=n("FKr1"),b=n("bTqV"),_=n("XNiG"),v=n("IzEk"),k=n("1G5W"),y=n("R0Ic"),g=n("u47x"),w=n("nLfN"),C=n("itXk"),O=n("GyhO"),j=n("HDdC"),x=n("7o/Q"),B=function(){function t(e){_classCallCheck(this,t),this.total=e}return _createClass(t,[{key:"call",value:function(t,e){return e.subscribe(new R(t,this.total))}}]),t}(),R=function(t){function e(t,n){var a;return _classCallCheck(this,e),(a=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this,t))).total=n,a.count=0,a}return _inherits(e,t),_createClass(e,[{key:"_next",value:function(t){++this.count>this.total&&this.destination.next(t)}}]),e}(x.a),S=n("Kj3r"),P=n("lJxs"),A=n("JX91"),M=n("8LU1"),I=new Set,Q=((i=function(){function t(e){_classCallCheck(this,t),this._platform=e,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):q}return _createClass(t,[{key:"matchMedia",value:function(t){return this._platform.WEBKIT&&function(t){if(!I.has(t))try{a||((a=document.createElement("style")).setAttribute("type","text/css"),document.head.appendChild(a)),a.sheet&&(a.sheet.insertRule("@media ".concat(t," {.fx-query-test{ }}"),0),I.add(t))}catch(e){console.error(e)}}(t),this._matchMedia(t)}}]),t}()).\u0275fac=function(t){return new(t||i)(l.Vb(w.a))},i.\u0275prov=Object(l.Ib)({factory:function(){return new i(Object(l.Vb)(w.a))},token:i,providedIn:"root"}),i);function q(t){return{matches:"all"===t||""===t,media:t,addListener:function(){},removeListener:function(){}}}var E,L=((E=function(){function t(e,n){_classCallCheck(this,t),this._mediaMatcher=e,this._zone=n,this._queries=new Map,this._destroySubject=new _.a}return _createClass(t,[{key:"ngOnDestroy",value:function(){this._destroySubject.next(),this._destroySubject.complete()}},{key:"isMatched",value:function(t){var e=this;return N(Object(M.a)(t)).some((function(t){return e._registerQuery(t).mql.matches}))}},{key:"observe",value:function(t){var e=this,n=N(Object(M.a)(t)).map((function(t){return e._registerQuery(t).observable})),a=Object(C.a)(n);return(a=Object(O.a)(a.pipe(Object(v.a)(1)),a.pipe((function(t){return t.lift(new B(1))}),Object(S.a)(0)))).pipe(Object(P.a)((function(t){var e={matches:!1,breakpoints:{}};return t.forEach((function(t){e.matches=e.matches||t.matches,e.breakpoints[t.query]=t.matches})),e})))}},{key:"_registerQuery",value:function(t){var e=this;if(this._queries.has(t))return this._queries.get(t);var n=this._mediaMatcher.matchMedia(t),a={observable:new j.a((function(t){var a=function(n){return e._zone.run((function(){return t.next(n)}))};return n.addListener(a),function(){n.removeListener(a)}})).pipe(Object(A.a)(n),Object(P.a)((function(e){return{query:t,matches:e.matches}})),Object(k.a)(this._destroySubject)),mql:n};return this._queries.set(t,a),a}}]),t}()).\u0275fac=function(t){return new(t||E)(l.Vb(Q),l.Vb(l.z))},E.\u0275prov=Object(l.Ib)({factory:function(){return new E(Object(l.Vb)(Q),Object(l.Vb)(l.z))},token:E,providedIn:"root"}),E);function N(t){return t.map((function(t){return t.split(",")})).reduce((function(t,e){return t.concat(e)})).map((function(t){return t.trim()}))}function V(t,e){if(1&t){var n=l.Sb();l.Rb(0,"div",1),l.Rb(1,"button",2),l.Zb("click",(function(){return l.kc(n),l.cc().action()})),l.rc(2),l.Qb(),l.Qb()}if(2&t){var a=l.cc();l.Bb(2),l.sc(a.data.action)}}function z(t,e){}var D,T,U,F,G=Math.pow(2,31)-1,W=function(){function t(e,n){var a=this;_classCallCheck(this,t),this._overlayRef=n,this._afterDismissed=new _.a,this._afterOpened=new _.a,this._onAction=new _.a,this._dismissedByAction=!1,this.containerInstance=e,this.onAction().subscribe((function(){return a.dismiss()})),e._onExit.subscribe((function(){return a._finishDismiss()}))}return _createClass(t,[{key:"dismiss",value:function(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}},{key:"dismissWithAction",value:function(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete())}},{key:"closeWithAction",value:function(){this.dismissWithAction()}},{key:"_dismissAfter",value:function(t){var e=this;this._durationTimeoutId=setTimeout((function(){return e.dismiss()}),Math.min(t,G))}},{key:"_open",value:function(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}},{key:"_finishDismiss",value:function(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}},{key:"afterDismissed",value:function(){return this._afterDismissed.asObservable()}},{key:"afterOpened",value:function(){return this.containerInstance._onEnter}},{key:"onAction",value:function(){return this._onAction.asObservable()}}]),t}(),J=new l.q("MatSnackBarData"),K=function t(){_classCallCheck(this,t),this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"},X=((D=function(){function t(e,n){_classCallCheck(this,t),this.snackBarRef=e,this.data=n}return _createClass(t,[{key:"action",value:function(){this.snackBarRef.dismissWithAction()}},{key:"hasAction",get:function(){return!!this.data.action}}]),t}()).\u0275fac=function(t){return new(t||D)(l.Mb(W),l.Mb(J))},D.\u0275cmp=l.Gb({type:D,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-simple-snackbar"],decls:3,vars:2,consts:[["class","mat-simple-snackbar-action",4,"ngIf"],[1,"mat-simple-snackbar-action"],["mat-button","",3,"click"]],template:function(t,e){1&t&&(l.Rb(0,"span"),l.rc(1),l.Qb(),l.qc(2,V,3,1,"div",0)),2&t&&(l.Bb(1),l.sc(e.data.message),l.Bb(1),l.fc("ngIf",e.hasAction))},directives:[r.j,b.a],styles:[".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}\n"],encapsulation:2,changeDetection:0}),D),Z={snackBarState:Object(y.l)("state",[Object(y.i)("void, hidden",Object(y.j)({transform:"scale(0.8)",opacity:0})),Object(y.i)("visible",Object(y.j)({transform:"scale(1)",opacity:1})),Object(y.k)("* => visible",Object(y.e)("150ms cubic-bezier(0, 0, 0.2, 1)")),Object(y.k)("* => void, * => hidden",Object(y.e)("75ms cubic-bezier(0.4, 0.0, 1, 1)",Object(y.j)({opacity:0})))])},H=((U=function(t){function e(t,n,a,i){var r;return _classCallCheck(this,e),(r=_possibleConstructorReturn(this,_getPrototypeOf(e).call(this)))._ngZone=t,r._elementRef=n,r._changeDetectorRef=a,r.snackBarConfig=i,r._destroyed=!1,r._onExit=new _.a,r._onEnter=new _.a,r._animationState="void",r.attachDomPortal=function(t){return r._assertNotAttached(),r._applySnackBarClasses(),r._portalOutlet.attachDomPortal(t)},r._role="assertive"!==i.politeness||i.announcementMessage?"off"===i.politeness?null:"status":"alert",r}return _inherits(e,t),_createClass(e,[{key:"attachComponentPortal",value:function(t){return this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachComponentPortal(t)}},{key:"attachTemplatePortal",value:function(t){return this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachTemplatePortal(t)}},{key:"onAnimationEnd",value:function(t){var e=t.fromState,n=t.toState;if(("void"===n&&"void"!==e||"hidden"===n)&&this._completeExit(),"visible"===n){var a=this._onEnter;this._ngZone.run((function(){a.next(),a.complete()}))}}},{key:"enter",value:function(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.detectChanges())}},{key:"exit",value:function(){return this._animationState="hidden",this._onExit}},{key:"ngOnDestroy",value:function(){this._destroyed=!0,this._completeExit()}},{key:"_completeExit",value:function(){var t=this;this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(v.a)(1)).subscribe((function(){t._onExit.next(),t._onExit.complete()}))}},{key:"_applySnackBarClasses",value:function(){var t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach((function(e){return t.classList.add(e)})):t.classList.add(e)),"center"===this.snackBarConfig.horizontalPosition&&t.classList.add("mat-snack-bar-center"),"top"===this.snackBarConfig.verticalPosition&&t.classList.add("mat-snack-bar-top")}},{key:"_assertNotAttached",value:function(){if(this._portalOutlet.hasAttached())throw Error("Attempting to attach snack bar content after content is already attached")}}]),e}(m.a)).\u0275fac=function(t){return new(t||U)(l.Mb(l.z),l.Mb(l.l),l.Mb(l.h),l.Mb(K))},U.\u0275cmp=l.Gb({type:U,selectors:[["snack-bar-container"]],viewQuery:function(t,e){var n;1&t&&l.oc(m.c,!0),2&t&&l.ic(n=l.ac())&&(e._portalOutlet=n.first)},hostAttrs:[1,"mat-snack-bar-container"],hostVars:2,hostBindings:function(t,e){1&t&&l.Eb("@state.done",(function(t){return e.onAnimationEnd(t)})),2&t&&(l.Cb("role",e._role),l.vc("@state",e._animationState))},features:[l.yb],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,e){1&t&&l.qc(0,z,0,0,"ng-template",0)},directives:[m.c],styles:[".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}\n"],encapsulation:2,data:{animation:[Z.snackBarState]}}),U),Y=((T=function t(){_classCallCheck(this,t)}).\u0275mod=l.Kb({type:T}),T.\u0275inj=l.Jb({factory:function(t){return new(t||T)},imports:[[d.c,m.h,r.b,b.b,p.d],p.d]}),T),$=new l.q("mat-snack-bar-default-options",{providedIn:"root",factory:function(){return new K}}),tt=((F=function(){function t(e,n,a,i,r,s){_classCallCheck(this,t),this._overlay=e,this._live=n,this._injector=a,this._breakpointObserver=i,this._parentSnackBar=r,this._defaultConfig=s,this._snackBarRefAtThisLevel=null}return _createClass(t,[{key:"openFromComponent",value:function(t,e){return this._attach(t,e)}},{key:"openFromTemplate",value:function(t,e){return this._attach(t,e)}},{key:"open",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,a=Object.assign(Object.assign({},this._defaultConfig),n);return a.data={message:t,action:e},a.announcementMessage||(a.announcementMessage=t),this.openFromComponent(X,a)}},{key:"dismiss",value:function(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}},{key:"ngOnDestroy",value:function(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}},{key:"_attachSnackBarContainer",value:function(t,e){var n=new m.g(e&&e.viewContainerRef&&e.viewContainerRef.injector||this._injector,new WeakMap([[K,e]])),a=new m.d(H,e.viewContainerRef,n),i=t.attach(a);return i.instance.snackBarConfig=e,i.instance}},{key:"_attach",value:function(t,e){var n=Object.assign(Object.assign(Object.assign({},new K),this._defaultConfig),e),a=this._createOverlay(n),i=this._attachSnackBarContainer(a,n),r=new W(i,a);if(t instanceof l.L){var s=new m.i(t,null,{$implicit:n.data,snackBarRef:r});r.instance=i.attachTemplatePortal(s)}else{var o=this._createInjector(n,r),c=new m.d(t,void 0,o),u=i.attachComponentPortal(c);r.instance=u.instance}return this._breakpointObserver.observe("(max-width: 599.99px) and (orientation: portrait)").pipe(Object(k.a)(a.detachments())).subscribe((function(t){var e=a.overlayElement.classList;t.matches?e.add("mat-snack-bar-handset"):e.remove("mat-snack-bar-handset")})),this._animateSnackBar(r,n),this._openedSnackBarRef=r,this._openedSnackBarRef}},{key:"_animateSnackBar",value:function(t,e){var n=this;t.afterDismissed().subscribe((function(){n._openedSnackBarRef==t&&(n._openedSnackBarRef=null),e.announcementMessage&&n._live.clear()})),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe((function(){t.containerInstance.enter()})),this._openedSnackBarRef.dismiss()):t.containerInstance.enter(),e.duration&&e.duration>0&&t.afterOpened().subscribe((function(){return t._dismissAfter(e.duration)})),e.announcementMessage&&this._live.announce(e.announcementMessage,e.politeness)}},{key:"_createOverlay",value:function(t){var e=new d.b;e.direction=t.direction;var n=this._overlay.position().global(),a="rtl"===t.direction,i="left"===t.horizontalPosition||"start"===t.horizontalPosition&&!a||"end"===t.horizontalPosition&&a,r=!i&&"center"!==t.horizontalPosition;return i?n.left("0"):r?n.right("0"):n.centerHorizontally(),"top"===t.verticalPosition?n.top("0"):n.bottom("0"),e.positionStrategy=n,this._overlay.create(e)}},{key:"_createInjector",value:function(t,e){return new m.g(t&&t.viewContainerRef&&t.viewContainerRef.injector||this._injector,new WeakMap([[W,e],[J,t.data]]))}},{key:"_openedSnackBarRef",get:function(){var t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel},set:function(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}}]),t}()).\u0275fac=function(t){return new(t||F)(l.Vb(d.a),l.Vb(g.f),l.Vb(l.r),l.Vb(L),l.Vb(F,12),l.Vb($))},F.\u0275prov=Object(l.Ib)({factory:function(){return new F(Object(l.Vb)(d.a),Object(l.Vb)(g.f),Object(l.Vb)(l.o),Object(l.Vb)(L),Object(l.Vb)(F,12),Object(l.Vb)($))},token:F,providedIn:Y}),F),et=n("XiUz"),nt=n("Wp6s"),at=n("znSr"),it=n("wZkO"),rt=n("kmnG"),st=n("qFsG"),ot=n("f3yp");function ct(t,e){1&t&&(l.Rb(0,"mat-error"),l.rc(1," The email and password were not recognised "),l.Qb())}function ut(t,e){1&t&&(l.Rb(0,"mat-error"),l.rc(1," password and confirm password fields don't match "),l.Qb())}function lt(t,e){1&t&&(l.Rb(0,"mat-error"),l.rc(1," Passwords do not match "),l.Qb())}function ft(t,e){1&t&&l.Nb(0,"app-spinner")}var ht,dt,mt=[{path:"",component:(ht=function(){function t(e,n,a,i,r,s){_classCallCheck(this,t),this.formBuilder=e,this.route=n,this.router=a,this.authenticationService=i,this.userService=r,this._snackBar=s,this.loading=!1,this.submitted=!1,this.checkPasswords=function(t){var e=t.get("password"),n=t.get("confirmPassword");if(""!==e.value&&""!==n.value)return e.value===n.value?null:{notSame:!0}},this.authenticationService.currentUserValue&&this.router.navigate(["/"])}return _createClass(t,[{key:"ngOnInit",value:function(){this.signUpForm=this.formBuilder.group({email:["",[o.k.required,o.k.email]],firstName:[""],lastName:[""],username:["",o.k.required],password:["",o.k.required],confirmPassword:["",o.k.required]},{validators:this.checkPasswords}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"}},{key:"onSubmit",value:function(){var t=this;if(this.submitted=!0,!this.signUpForm.invalid){this.loading=!0;var e=new u(this.f.email.value,this.f.firstName.value,this.f.lastName.value,this.f.username.value,this.f.password.value);this.userService.createUser(e).pipe(Object(c.a)()).subscribe((function(e){t._snackBar.open("User Creation was successful, please login to continue.","dismiss",{duration:5e3,verticalPosition:"top"}),t.router.navigate(["/verification/login"])}),(function(e){t.loginInvalid=!0,t.loading=!1}))}}},{key:"f",get:function(){return this.signUpForm.controls}}]),t}(),ht.\u0275fac=function(t){return new(t||ht)(l.Mb(o.b),l.Mb(s.a),l.Mb(s.b),l.Mb(f.a),l.Mb(h.a),l.Mb(tt))},ht.\u0275cmp=l.Gb({type:ht,selectors:[["app-sign-up"]],decls:36,vars:7,consts:[["fxLayout","row","fxLayoutAlign","center center",1,"mat-card-wrapper"],["ngClass.gt-xs","card-gt-xs","ngClass.lt-sm","card-lt-sm",1,"mat-elevation-z4"],["mat-tab-nav-bar",""],["fxFlex","50%","mat-tab-link","","routerLink","/verification/login",3,"active"],["fxFlex","50%","mat-tab-link","","routerLink","/verification/signup",3,"active"],["fxLayout","column","fxLayoutAlign","center",1,"padding-16",3,"formGroup","ngSubmit"],[4,"ngIf"],[1,"full-width-input"],["formControlName","email","matInput","","placeholder","Email","required",""],["fxLayout","row","fxLayoutGap","10px"],["fxFlex","calc(50% - 5px)",1,"full-width-input"],["formControlName","firstName","matInput","","placeholder","First name"],["formControlName","lastName","matInput","","placeholder","Last name"],["formControlName","username","matInput","","placeholder","User name","required",""],["formControlName","password","matInput","","placeholder","Password","required","","type","password"],["formControlName","confirmPassword","matInput","","placeholder","Confirm Password","required","","type","password"],["color","primary","mat-raised-button","",1,"margin-top-10"]],template:function(t,e){1&t&&(l.Rb(0,"div",0),l.Rb(1,"mat-card",1),l.Rb(2,"mat-card-content"),l.Rb(3,"nav",2),l.Rb(4,"a",3),l.rc(5," Login "),l.Qb(),l.Rb(6,"a",4),l.rc(7," Sign Up "),l.Qb(),l.Qb(),l.Rb(8,"form",5),l.Zb("ngSubmit",(function(){return e.onSubmit()})),l.qc(9,ct,2,0,"mat-error",6),l.qc(10,ut,2,0,"mat-error",6),l.Rb(11,"mat-form-field",7),l.Nb(12,"input",8),l.Rb(13,"mat-error"),l.rc(14," Please provide a valid email address "),l.Qb(),l.Qb(),l.Rb(15,"div",9),l.Rb(16,"mat-form-field",10),l.Nb(17,"input",11),l.Qb(),l.Rb(18,"mat-form-field",10),l.Nb(19,"input",12),l.Qb(),l.Qb(),l.Rb(20,"mat-form-field",7),l.Nb(21,"input",13),l.Rb(22,"mat-error"),l.rc(23," Please provide a username. "),l.Qb(),l.Qb(),l.Rb(24,"mat-form-field",7),l.Nb(25,"input",14),l.Rb(26,"mat-error"),l.rc(27," Please provide a valid password "),l.Qb(),l.Qb(),l.Rb(28,"mat-form-field",7),l.Nb(29,"input",15),l.Rb(30,"mat-error"),l.rc(31," Please re type the password "),l.Qb(),l.qc(32,lt,2,0,"mat-error",6),l.Qb(),l.Rb(33,"button",16),l.rc(34,"Sign Up"),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.qc(35,ft,1,0,"app-spinner",6)),2&t&&(l.Bb(4),l.fc("active",!1),l.Bb(2),l.fc("active",!0),l.Bb(2),l.fc("formGroup",e.signUpForm),l.Bb(1),l.fc("ngIf",e.loginInvalid),l.Bb(1),l.fc("ngIf",null==e.signUpForm.errors?null:e.signUpForm.errors.notSame),l.Bb(22),l.fc("ngIf",e.signUpForm.hasError("notSame")),l.Bb(3),l.fc("ngIf",e.loading))},directives:[et.c,et.b,nt.a,at.a,nt.b,it.b,s.d,et.a,it.a,o.l,o.g,o.d,r.j,rt.b,o.a,st.a,o.f,o.c,o.j,rt.a,et.d,b.a,ot.a],styles:[".mat-card-wrapper[_ngcontent-%COMP%]{height:90vh;text-align:center;padding:8px}.card-gt-xs[_ngcontent-%COMP%]{width:50%}.card-lt-sm[_ngcontent-%COMP%]{width:95%}mat-form-field[_ngcontent-%COMP%]{display:block}mat-spinner[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%}"]}),ht)}],pt=((dt=function t(){_classCallCheck(this,t)}).\u0275mod=l.Kb({type:dt}),dt.\u0275inj=l.Jb({factory:function(t){return new(t||dt)},imports:[[s.e.forChild(mt)],s.e]}),dt),bt=n("PCNd"),_t=n("YUcS");n.d(e,"SignUpModule",(function(){return kt}));var vt,kt=((vt=function t(){_classCallCheck(this,t)}).\u0275mod=l.Kb({type:vt}),vt.\u0275inj=l.Jb({factory:function(t){return new(t||vt)},imports:[[r.b,pt,nt.c,o.i,rt.d,bt.a,b.b,st.b,_t.a,it.c,Y]]}),vt)}}]);