(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _board_of_the_day_board_of_the_day_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board-of-the-day/board-of-the-day.component */ "./src/app/board-of-the-day/board-of-the-day.component.ts");






const routes = [
    { path: '', component: _board_of_the_day_board_of_the_day_component__WEBPACK_IMPORTED_MODULE_3__["BoardOfTheDayComponent"] },
    { path: 'my-boards', component: _board_board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AppComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.loginUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AppComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.user_info["picture"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AppComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.user_info["name"]);
} }
function AppComponent_li_15_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_li_15_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(auth) {
        this.auth = auth;
        this.title = 'Sudoku Solver Capstone';
        this.loginUrl = '';
    }
    ngOnInit() {
        this.auth.check_token_fragment();
        this.user_info = this.auth.getUserInfo();
        this.loginUrl = this.auth.getLoginUrl();
        console.log(this.loginUrl);
    }
    logout() {
        this.auth.logout();
        this.user_info = null;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 18, vars: 4, consts: [[1, "container"], ["href", "#", 1, "logo"], ["href", "#", "routerLink", "/"], ["href", "my-boards", "routerLink", "/my-boards"], [4, "ngIf"], [3, "href"], ["alt", "", 3, "src"], ["href", "", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sudoku Solver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Board of the Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "My Boards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_li_12_Template, 3, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_li_13_Template, 2, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_li_14_Template, 3, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_li_15_Template, 3, 0, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.user_info);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user_info);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user_info);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user_info);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./board/board.component */ "./src/app/board/board.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _board_of_the_day_board_of_the_day_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./board-of-the-day/board-of-the-day.component */ "./src/app/board-of-the-day/board-of-the-day.component.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _board_board_component__WEBPACK_IMPORTED_MODULE_5__["BoardComponent"],
        _board_of_the_day_board_of_the_day_component__WEBPACK_IMPORTED_MODULE_7__["BoardOfTheDayComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _board_board_component__WEBPACK_IMPORTED_MODULE_5__["BoardComponent"],
                    _board_of_the_day_board_of_the_day_component__WEBPACK_IMPORTED_MODULE_7__["BoardOfTheDayComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/board-of-the-day/board-of-the-day.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/board-of-the-day/board-of-the-day.component.ts ***!
  \****************************************************************/
/*! exports provided: BoardOfTheDayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardOfTheDayComponent", function() { return BoardOfTheDayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _board_board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../board/board */ "./src/app/board/board.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function BoardOfTheDayComponent_table_10_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardOfTheDayComponent_table_10_tr_1_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r5.board_of_the_day.board[i_r4][0] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardOfTheDayComponent_table_10_tr_1_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r7.board_of_the_day.board[i_r4][1] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardOfTheDayComponent_table_10_tr_1_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r8.board_of_the_day.board[i_r4][2] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardOfTheDayComponent_table_10_tr_1_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r9.board_of_the_day.board[i_r4][3] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardOfTheDayComponent_table_10_tr_1_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r10.board_of_the_day.board[i_r4][4] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardOfTheDayComponent_table_10_tr_1_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r11.board_of_the_day.board[i_r4][5] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardOfTheDayComponent_table_10_tr_1_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r12.board_of_the_day.board[i_r4][6] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardOfTheDayComponent_table_10_tr_1_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r13.board_of_the_day.board[i_r4][7] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardOfTheDayComponent_table_10_tr_1_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r14.board_of_the_day.board[i_r4][8] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", i_r4, "-0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.setClass(0, i_r4))("ngModel", ctx_r2.board_of_the_day.board[i_r4][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", i_r4, "-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.setClass(1, i_r4))("ngModel", ctx_r2.board_of_the_day.board[i_r4][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", i_r4, "-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.setClass(2, i_r4))("ngModel", ctx_r2.board_of_the_day.board[i_r4][2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", i_r4, "-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.setClass(3, i_r4))("ngModel", ctx_r2.board_of_the_day.board[i_r4][3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", i_r4, "-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.setClass(4, i_r4))("ngModel", ctx_r2.board_of_the_day.board[i_r4][4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", i_r4, "-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.setClass(5, i_r4))("ngModel", ctx_r2.board_of_the_day.board[i_r4][5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", i_r4, "-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.setClass(6, i_r4))("ngModel", ctx_r2.board_of_the_day.board[i_r4][6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", i_r4, "-7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.setClass(7, i_r4))("ngModel", ctx_r2.board_of_the_day.board[i_r4][7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", i_r4, "-8");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.setClass(8, i_r4))("ngModel", ctx_r2.board_of_the_day.board[i_r4][8]);
} }
function BoardOfTheDayComponent_table_10_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function BoardOfTheDayComponent_table_10_Template_table_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.changed($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BoardOfTheDayComponent_table_10_tr_1_Template, 19, 27, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.board_size);
} }
function BoardOfTheDayComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardOfTheDayComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.saveBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save Board");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BoardOfTheDayComponent {
    constructor(_http, auth) {
        this._http = _http;
        this.auth = auth;
        this.board_size = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let payload = this.auth.getPayload();
        if (payload == null) {
            return;
        }
        this.isAdmin = payload["permissions"].includes("add:sudoku-of-the-day");
    }
    ngOnInit() {
        // Initialize empty board
        this.board_of_the_day = _board_board__WEBPACK_IMPORTED_MODULE_1__["Board"].getBlankBoard();
        this.user_message = "";
        // Display the board of the day
        this.displayBoardOfTheDay();
    }
    // Set shading
    setClass(column, row) {
        let myClasses = {
            grey_cell: (2 < row && row <= 5) || (2 < column && column <= 5),
            white_cell: (2 < row && row <= 5) && (2 < column && column <= 5)
        };
        return myClasses;
    }
    // Fetch the board of the day
    displayBoardOfTheDay() {
        let response = this._http.getBoardOfTheDay(this.auth.getToken());
        response.subscribe(value => {
            // Ensure board of the day is available
            if (value == null) {
                this.user_message = "Board of the day unavailable.";
            }
            // Set board object
            this.board_of_the_day = JSON.parse(JSON.stringify(new _board_board__WEBPACK_IMPORTED_MODULE_1__["Board"](value["board_id"], value["board_json"], value["board_json_solved"], value["board_json"])));
        }, error => console.log("error: " + error), () => console.log("complete"));
    }
    // Reset the board to the original
    resetBoard() {
        this.board_of_the_day.board = JSON.parse(JSON.stringify(this.board_of_the_day.board_original));
    }
    // Administrator's ability to change the board of the day
    saveBoard() {
        let board = this.sanitizeBoardData();
        let userInfo = this.auth.getUserInfo();
        if (userInfo == null) {
            this.user_message = "Problem with login. Please log out and back in.";
            return;
        }
        let response = this._http.saveBoardOfTheDay(board, userInfo, this.auth.getToken());
        response.subscribe(value => {
            this.user_message = "Saved!";
        }, error => console.log("error: " + error), () => console.log("complete"));
    }
    // Sanitize board data; ensure that all input is the same format
    sanitizeBoardData() {
        let newBoard = JSON.parse(JSON.stringify(this.board_of_the_day));
        for (let row = 0; row < Object.keys(newBoard.board).length; row++) {
            for (let column = 0; column < newBoard.board[row].length; column++) {
                const element = newBoard.board[row][column];
                if (typeof element == "string") {
                    newBoard.board[row][column] = parseInt(element);
                }
                else {
                    newBoard.board[row][column] = element;
                }
            }
        }
        return newBoard;
    }
    // Detect keyboard input in order to
    changed(event) {
        let sanitizeBoard = this.sanitizeBoardData();
        if (JSON.stringify(sanitizeBoard.board) ==
            JSON.stringify(sanitizeBoard.board_solved)) {
            this.user_message = "Solved! Congratulations";
        }
        else {
            this.user_message = "Not solved yet...";
        }
    }
}
BoardOfTheDayComponent.ɵfac = function BoardOfTheDayComponent_Factory(t) { return new (t || BoardOfTheDayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
BoardOfTheDayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardOfTheDayComponent, selectors: [["app-board-of-the-day"]], decls: 15, vars: 3, consts: [[1, "container"], [3, "keyup", 4, "ngIf"], [3, "click"], [3, "click", 4, "ngIf"], [3, "keyup"], [4, "ngFor", "ngForOf"], [3, "id", "ngClass", "ngModel", "ngModelChange"]], template: function BoardOfTheDayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Board of the Day");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The Board Of The Day is a fun and easy sudoku puzzle that cannot be saved but will automatically notify you once it has been successfully completed.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BoardOfTheDayComponent_table_10_Template, 2, 1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardOfTheDayComponent_Template_button_click_12_listener() { return ctx.resetBoard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Reset Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BoardOfTheDayComponent_button_14_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user_message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.board_of_the_day);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["table[_ngcontent-%COMP%] {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  position: relative;\n  width: auto;\n  margin: 2em;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  text-align: center;\n  margin: 5%;\n}\n\ninput[_ngcontent-%COMP%] {\n  background: white;\n  width: 70px;\n  height: 50px;\n  text-align: center;\n  font-size: 1.5rem;\n  border: none;\n}\n\n.saved_user_board[_ngcontent-%COMP%] {\n  background: white;\n  width: 35px;\n  height: 25px;\n  text-align: center;\n  font-size: 0.75rem;\n  border: none;\n}\n\n.saved_user_board_li[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.center[_ngcontent-%COMP%] {\n  background: #c8c8c8;\n}\n\n.grey_cell[_ngcontent-%COMP%] {\n  background: gainsboro;\n}\n\n.white_cell[_ngcontent-%COMP%] {\n  background: white;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 60px;\n  position: relative;\n  margin: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3JkYW5odXVzL0RvY3VtZW50cy9MZWFybmluZy9VZGFjaXR5L2Z1bGxfc3RhY2tfd2ViX2RldmVsb3Blci9jYXBzdG9uZV9zdWRva3Vfc29sdmVyL2Zyb250ZW5kL3NyYy9hcHAvYm9hcmQtb2YtdGhlLWRheS9ib2FyZC1vZi10aGUtZGF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ib2FyZC1vZi10aGUtZGF5L2JvYXJkLW9mLXRoZS1kYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUVBLFVBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQUY7O0FER0E7RUFDRSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7QUNBRjs7QURHQTtFQUNJLHFCQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtBQ0FKOztBREdBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2JvYXJkLW9mLXRoZS1kYXkvYm9hcmQtb2YtdGhlLWRheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDJlbTtcbn1cblxudGQsIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvLyBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogNSU7XG59XG5cbmlucHV0IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnNhdmVkX3VzZXJfYm9hcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnNhdmVkX3VzZXJfYm9hcmRfbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5jZW50ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2IoMjAwLCAyMDAsIDIwMCk7XG59XG5cbi5ncmV5X2NlbGwge1xuICAgIGJhY2tncm91bmQ6IHJnYigyMjAsIDIyMCwgMjIwKTtcbn1cblxuLndoaXRlX2NlbGwge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDJlbTtcbn1cbiIsInRhYmxlIHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDJlbTtcbn1cblxudGQsIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDUlO1xufVxuXG5pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5zYXZlZF91c2VyX2JvYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5zYXZlZF91c2VyX2JvYXJkX2xpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uY2VudGVyIHtcbiAgYmFja2dyb3VuZDogI2M4YzhjODtcbn1cblxuLmdyZXlfY2VsbCB7XG4gIGJhY2tncm91bmQ6IGdhaW5zYm9ybztcbn1cblxuLndoaXRlX2NlbGwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAyZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardOfTheDayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-board-of-the-day',
                templateUrl: './board-of-the-day.component.html',
                styleUrls: ['./board-of-the-day.component.scss']
            }]
    }], function () { return [{ type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/board/board.component.ts":
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/app/board/board.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







function BoardComponent_table_1_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardComponent_table_1_tr_1_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r8.board.board[i_r7][0] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardComponent_table_1_tr_1_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r7 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r10.board.board[i_r7][1] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardComponent_table_1_tr_1_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r7 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r11.board.board[i_r7][2] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardComponent_table_1_tr_1_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r7 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r12.board.board[i_r7][3] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardComponent_table_1_tr_1_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r7 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r13.board.board[i_r7][4] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardComponent_table_1_tr_1_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r7 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r14.board.board[i_r7][5] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardComponent_table_1_tr_1_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r7 = ctx.index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r15.board.board[i_r7][6] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardComponent_table_1_tr_1_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r7 = ctx.index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r16.board.board[i_r7][7] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardComponent_table_1_tr_1_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r7 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r17.board.board[i_r7][8] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setClass(0, i_r7))("ngModel", ctx_r5.board.board[i_r7][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setClass(1, i_r7))("ngModel", ctx_r5.board.board[i_r7][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setClass(2, i_r7))("ngModel", ctx_r5.board.board[i_r7][2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setClass(3, i_r7))("ngModel", ctx_r5.board.board[i_r7][3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setClass(4, i_r7))("ngModel", ctx_r5.board.board[i_r7][4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setClass(5, i_r7))("ngModel", ctx_r5.board.board[i_r7][5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setClass(6, i_r7))("ngModel", ctx_r5.board.board[i_r7][6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setClass(7, i_r7))("ngModel", ctx_r5.board.board[i_r7][7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.setClass(8, i_r7))("ngModel", ctx_r5.board.board[i_r7][8]);
} }
function BoardComponent_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function BoardComponent_table_1_Template_table_keyup_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.changed($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BoardComponent_table_1_tr_1_Template, 19, 18, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.board_size);
} }
function BoardComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.newBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Board");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BoardComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.resetBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reset Board");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BoardComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.saveBoard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Save Board");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BoardComponent_div_10_ul_3_tr_3_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardComponent_div_10_ul_3_tr_3_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const i_r31 = ctx.index; const board_item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (board_item_r27.board[i_r31][0] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardComponent_div_10_ul_3_tr_3_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const i_r31 = ctx.index; const board_item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (board_item_r27.board[i_r31][1] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardComponent_div_10_ul_3_tr_3_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const i_r31 = ctx.index; const board_item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (board_item_r27.board[i_r31][2] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardComponent_div_10_ul_3_tr_3_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const i_r31 = ctx.index; const board_item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (board_item_r27.board[i_r31][3] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardComponent_div_10_ul_3_tr_3_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const i_r31 = ctx.index; const board_item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (board_item_r27.board[i_r31][4] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardComponent_div_10_ul_3_tr_3_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const i_r31 = ctx.index; const board_item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (board_item_r27.board[i_r31][5] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardComponent_div_10_ul_3_tr_3_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const i_r31 = ctx.index; const board_item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (board_item_r27.board[i_r31][6] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardComponent_div_10_ul_3_tr_3_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const i_r31 = ctx.index; const board_item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (board_item_r27.board[i_r31][7] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BoardComponent_div_10_ul_3_tr_3_Template_input_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const i_r31 = ctx.index; const board_item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return (board_item_r27.board[i_r31][8] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r31 = ctx.index;
    const board_item_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r29.setClass(0, i_r31))("ngModel", board_item_r27.board[i_r31][0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r29.setClass(1, i_r31))("ngModel", board_item_r27.board[i_r31][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r29.setClass(2, i_r31))("ngModel", board_item_r27.board[i_r31][2]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r29.setClass(3, i_r31))("ngModel", board_item_r27.board[i_r31][3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r29.setClass(4, i_r31))("ngModel", board_item_r27.board[i_r31][4]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r29.setClass(5, i_r31))("ngModel", board_item_r27.board[i_r31][5]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r29.setClass(6, i_r31))("ngModel", board_item_r27.board[i_r31][6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r29.setClass(7, i_r31))("ngModel", board_item_r27.board[i_r31][7]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r29.setClass(8, i_r31))("ngModel", board_item_r27.board[i_r31][8]);
} }
function BoardComponent_div_10_ul_3_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_div_10_ul_3_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const i_r28 = ctx.index; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r52.getBoard(i_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BoardComponent_div_10_ul_3_tr_3_Template, 19, 18, "tr", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_div_10_ul_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const i_r28 = ctx.index; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r54.deleteBoard(i_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Delete Board");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r26.board_size);
} }
function BoardComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Saved Boards");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BoardComponent_div_10_ul_3_Template, 6, 1, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.user_boards);
} }
class BoardComponent {
    constructor(_http, auth) {
        this._http = _http;
        this.auth = auth;
        this.board_size = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
    ngOnInit() {
        // Initialize empty board
        this.board = _board__WEBPACK_IMPORTED_MODULE_1__["Board"].getBlankBoard();
        this.user_message = "";
        // If the user is logged in and user_boards is empty, attempt loading
        // the user's boards.
        if (this.auth.getUserInfo() != null && this.user_boards == null) {
            this.displayUserBoards();
        }
    }
    // Set shading
    setClass(column, row) {
        let myClasses = {
            grey_cell: (2 < row && row <= 5) || (2 < column && column <= 5),
            white_cell: (2 < row && row <= 5) && (2 < column && column <= 5)
        };
        return myClasses;
    }
    // Solve the sudoku puzzle
    solveRandomBoard() {
        this.user_message = "not implemented";
    }
    solveBoard() {
        this.board.board = JSON.parse(JSON.stringify(this.board.board_solved));
    }
    // Retrieve a new board for the user to solve
    newBoard() {
        // TODO(jordanhuus): remove hard code
        let response = this._http.getNewBoard("easy", this.auth.getUserInfo(), this.auth.getToken());
        response.subscribe(value => {
            this.board = new _board__WEBPACK_IMPORTED_MODULE_1__["Board"](value["board_id"], value["board_json"], value["board_json_solved"], value["board_json"]);
            // Display all user boards
            this.displayUserBoards(value["board_id"]);
        }, error => console.log("error: " + error), () => console.log("complete"));
    }
    // Display the original version after initially created
    resetBoard() {
        this.board.board = JSON.parse(JSON.stringify(this.board.board_original));
    }
    // Save this.board's progress
    saveBoard() {
        let board = this.sanitizeBoardData();
        let userInfo = this.auth.getUserInfo();
        if (userInfo == null) {
            this.user_message = "Problem with login. Please log out and back in.";
            return;
        }
        let response = this._http.saveBoard(board, userInfo, this.auth.getToken());
        response.subscribe(value => {
            this.user_message = "Saved!";
            // Display list of user boards
            this.user_boards = [];
            for (let i = 0; i < Object.keys(value["user_boards"]).length; i++) {
                const element = value["user_boards"][i];
                let newBoard = new _board__WEBPACK_IMPORTED_MODULE_1__["Board"](element["board_id"], element["board_json"], element["board_json_solved"], element["board_json"]);
                this.user_boards.push(newBoard);
            }
        }, error => console.log("error: " + error), () => console.log("complete"));
    }
    // Sanitize board data; ensure that all input is the same format
    sanitizeBoardData() {
        let newBoard = JSON.parse(JSON.stringify(this.board));
        for (let row = 0; row < Object.keys(newBoard.board).length; row++) {
            for (let column = 0; column < newBoard.board[row].length; column++) {
                const element = newBoard.board[row][column];
                if (typeof element == "string") {
                    newBoard.board[row][column] = parseInt(element);
                }
                else {
                    newBoard.board[row][column] = element;
                }
            }
        }
        return newBoard;
    }
    // Detect keyboard input in order to
    changed(event) {
        let sanitizeBoard = this.sanitizeBoardData();
        if (JSON.stringify(sanitizeBoard.board) ==
            JSON.stringify(sanitizeBoard.board_solved)) {
            this.user_message = "Solved! Congratulations";
        }
        else {
            this.user_message = "Not solved yet...";
        }
    }
    // Get a specific board from the server
    getBoard(i) {
        this.board = JSON.parse(JSON.stringify(new _board__WEBPACK_IMPORTED_MODULE_1__["Board"](this.user_boards[i].id, this.user_boards[i].board, this.user_boards[i].board_solved, this.user_boards[i].board)));
    }
    // Display all of the user's saved boards
    displayUserBoards(main_board_id = null) {
        let response = this._http.getUserBoards(this.auth.getUserInfo(), this.auth.getToken());
        response.subscribe(value => {
            // User has no saved boards
            if (value == null || value == "") {
                return;
            }
            // Display the main board based on ID - or - random (unspecified) board
            let chosen_board_index = 0;
            if (main_board_id != null) {
                for (let i = 0; i < Object.keys(value).length; i++) {
                    if (value[i].board_id == main_board_id) {
                        chosen_board_index = i;
                    }
                }
            }
            // Retrieve user's baord data
            this.board = JSON.parse(JSON.stringify(new _board__WEBPACK_IMPORTED_MODULE_1__["Board"](value[chosen_board_index]["board_id"], value[chosen_board_index]["board_json"], value[chosen_board_index]["board_json_solved"], value[chosen_board_index]["board_json"])));
            // Display list of user boards
            this.user_boards = [];
            for (let i = 0; i < Object.keys(value).length; i++) {
                const element = value[i];
                let newBoard = new _board__WEBPACK_IMPORTED_MODULE_1__["Board"](element["board_id"], element["board_json"], element["board_json_solved"], element["board_json"]);
                this.user_boards.push(newBoard);
            }
        }, error => console.log("error: " + error), () => console.log("complete"));
    }
    deleteBoard(i) {
        // DELETE request
        let response = this._http.deleteBoard(this.board, this.auth.getToken());
        response.subscribe(value => {
            this.user_message = "";
            // Display list of user boards
            this.user_boards = [];
            for (let i = 0; i < Object.keys(value).length; i++) {
                const element = value[i];
                let newBoard = new _board__WEBPACK_IMPORTED_MODULE_1__["Board"](element["board_id"], element["board_json"], element["board_json_solved"], element["board_json"]);
                this.user_boards.push(newBoard);
            }
        }, error => console.log("error: " + error), () => console.log("complete"));
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], decls: 11, vars: 6, consts: [[1, "container"], [3, "keyup", 4, "ngIf"], [3, "click"], [3, "click", 4, "ngIf"], ["class", "container", 4, "ngIf"], [3, "keyup"], [4, "ngFor", "ngForOf"], [3, "ngClass", "ngModel", "ngModelChange"], ["class", "saved_user_board_li", 4, "ngFor", "ngForOf"], [1, "saved_user_board_li"], ["disabled", "", 1, "saved_user_board", 3, "ngClass", "ngModel", "ngModelChange"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BoardComponent_table_1_Template, 2, 1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_3_listener() { return ctx.solveBoard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Solve");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BoardComponent_button_5_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BoardComponent_button_6_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BoardComponent_button_7_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BoardComponent_div_10_Template, 4, 1, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.board);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.payload);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.payload);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.payload);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user_message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user_boards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["table[_ngcontent-%COMP%] {\n  font-family: arial, sans-serif;\n  border-collapse: collapse;\n  position: relative;\n  width: auto;\n  margin: 2em;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd;\n  text-align: center;\n  margin: 5%;\n}\n\ninput[_ngcontent-%COMP%] {\n  background: white;\n  width: 70px;\n  height: 50px;\n  text-align: center;\n  font-size: 1.5rem;\n  border: none;\n}\n\n.saved_user_board[_ngcontent-%COMP%] {\n  background: white;\n  width: 35px;\n  height: 25px;\n  text-align: center;\n  font-size: 0.75rem;\n  border: none;\n}\n\n.saved_user_board_li[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.center[_ngcontent-%COMP%] {\n  background: #c8c8c8;\n}\n\n.grey_cell[_ngcontent-%COMP%] {\n  background: gainsboro;\n}\n\n.white_cell[_ngcontent-%COMP%] {\n  background: white;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 60px;\n  position: relative;\n  margin: 2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb3JkYW5odXVzL0RvY3VtZW50cy9MZWFybmluZy9VZGFjaXR5L2Z1bGxfc3RhY2tfd2ViX2RldmVsb3Blci9jYXBzdG9uZV9zdWRva3Vfc29sdmVyL2Zyb250ZW5kL3NyYy9hcHAvYm9hcmQvYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxVQUFBO0FDQUY7O0FER0E7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7QUNBRjs7QURHQTtFQUNFLG1CQUFBO0FDQUY7O0FER0E7RUFDSSxxQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7QUNBSjs7QURHQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9ib2FyZC9ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDJlbTtcbn1cblxudGQsIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvLyBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogNSU7XG59XG5cbmlucHV0IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnNhdmVkX3VzZXJfYm9hcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDM1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnNhdmVkX3VzZXJfYm9hcmRfbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5jZW50ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2IoMjAwLCAyMDAsIDIwMCk7XG59XG5cbi5ncmV5X2NlbGwge1xuICAgIGJhY2tncm91bmQ6IHJnYigyMjAsIDIyMCwgMjIwKTtcbn1cblxuLndoaXRlX2NlbGwge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDJlbTtcbn1cbiIsInRhYmxlIHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IDJlbTtcbn1cblxudGQsIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDUlO1xufVxuXG5pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5zYXZlZF91c2VyX2JvYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5zYXZlZF91c2VyX2JvYXJkX2xpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uY2VudGVyIHtcbiAgYmFja2dyb3VuZDogI2M4YzhjODtcbn1cblxuLmdyZXlfY2VsbCB7XG4gIGJhY2tncm91bmQ6IGdhaW5zYm9ybztcbn1cblxuLndoaXRlX2NlbGwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuYnV0dG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAyZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-board',
                templateUrl: './board.component.html',
                styleUrls: ['./board.component.scss']
            }]
    }], function () { return [{ type: _services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/board/board.ts":
/*!********************************!*\
  !*** ./src/app/board/board.ts ***!
  \********************************/
/*! exports provided: Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
class Board {
    constructor(id, board, board_solved, board_original) {
        this.id = id;
        this.board = board;
        this.board_solved = board_solved;
        this.board_original = board_original;
    }
    format() {
        return {
            "id": this.id,
            "board": this.board,
            "board_solved": this.board_solved,
            "board_original": this.board_original
        };
    }
    // Returns a blank board Object
    static getBlankBoard() {
        let blankBoard = new Board(0, {
            0: [null, null, null, null, null, null, null, null, null],
            1: [null, null, null, null, null, null, null, null, null],
            2: [null, null, null, null, null, null, null, null, null],
            3: [null, null, null, null, null, null, null, null, null],
            4: [null, null, null, null, null, null, null, null, null],
            5: [null, null, null, null, null, null, null, null, null],
            6: [null, null, null, null, null, null, null, null, null],
            7: [null, null, null, null, null, null, null, null, null],
            8: [null, null, null, null, null, null, null, null, null],
        }, {
            0: [null, null, null, null, null, null, null, null, null],
            1: [null, null, null, null, null, null, null, null, null],
            2: [null, null, null, null, null, null, null, null, null],
            3: [null, null, null, null, null, null, null, null, null],
            4: [null, null, null, null, null, null, null, null, null],
            5: [null, null, null, null, null, null, null, null, null],
            6: [null, null, null, null, null, null, null, null, null],
            7: [null, null, null, null, null, null, null, null, null],
            8: [null, null, null, null, null, null, null, null, null],
        }, {
            0: [null, null, null, null, null, null, null, null, null],
            1: [null, null, null, null, null, null, null, null, null],
            2: [null, null, null, null, null, null, null, null, null],
            3: [null, null, null, null, null, null, null, null, null],
            4: [null, null, null, null, null, null, null, null, null],
            5: [null, null, null, null, null, null, null, null, null],
            6: [null, null, null, null, null, null, null, null, null],
            7: [null, null, null, null, null, null, null, null, null],
            8: [null, null, null, null, null, null, null, null, null],
        });
        return blankBoard;
    }
}


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");



const JWTS_LOCAL_KEY = 'JWTS_LOCAL_KEY';
const JWTS_ACTIVE_INDEX_KEY = 'JWTS_ACTIVE_INDEX_KEY';
class AuthService {
    constructor() { }
    // invoked in app.component on load
    check_token_fragment() {
        // parse the fragment
        const fragment = window.location.hash.substr(1).split('&')[0].split('=');
        // check if the fragment includes the access token
        if (fragment[0] === 'access_token') {
            // add the access token to the jwt
            this.token = fragment[1];
            // save jwts to localstore
            this.set_jwt();
        }
    }
    set_jwt() {
        localStorage.setItem(JWTS_LOCAL_KEY, this.token);
        if (this.token) {
            this.decodeJWT(this.token);
        }
    }
    decodeJWT(token) {
        const jwtservice = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
        this.payload = jwtservice.decodeToken(token);
        return this.payload;
    }
    getPayload() {
        return this.payload;
    }
    getToken() {
        return "bearer " + this.token;
    }
    logout() {
        this.token = '';
        this.payload = null;
        this.set_jwt();
    }
    getLoginUrl() {
        let link = 'https://';
        link += 'jordan-flask-authentication-practice.auth0.com';
        link += '/authorize?';
        link += 'audience=' + 'sudoku-api' + '&';
        link += 'response_type=token&';
        link += 'client_id=' + 'hTHs2lbL26VDIPLLzFffuWhsoJItrYDG' + '&';
        link += 'redirect_uri=' + 'http://localhost:4200/';
        return link;
    }
    getUserInfo() {
        if (this.payload != null) {
            return this.payload["http://www.jordanhuus.com/user_info"];
        }
        else {
            return null;
        }
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class HttpService {
    constructor(http) {
        this.http = http;
        this.solve_url = "http://127.0.0.1:8000";
    }
    // Post request to solve the sudoku puzzle
    solveBoard(board) {
        let httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
        let body = {
            "board": board
        };
        return this.http.post(this.solve_url + "/solve-board", JSON.stringify(body), httpOptions);
    }
    // Post request to solve the sudoku puzzle
    getNewBoard(difficulty, userInfo, token) {
        let httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        let body = {
            "difficulty": difficulty,
            "user_info": userInfo
        };
        return this.http.post(this.solve_url + "/board-new", JSON.stringify(body), httpOptions);
    }
    // Save the current boards progress
    saveBoard(board, userInfo, token) {
        let httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        let body = {
            "board_id": board.id,
            "board_json": board.board,
            "user_info": userInfo
        };
        return this.http.patch(this.solve_url + "/board-save", JSON.stringify(body), httpOptions);
    }
    // Save the current boards progress
    saveBoardOfTheDay(board, userInfo, token) {
        let httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        let body = {
            "board_id": board.id,
            "board_json": board.board,
            "user_info": userInfo
        };
        return this.http.patch(this.solve_url + "/board-of-the-day-save", JSON.stringify(body), httpOptions);
    }
    getUserBoards(userInfo, token) {
        let httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.get(this.solve_url + "/board-get-user/" + userInfo["id"], httpOptions);
    }
    deleteBoard(board, token) {
        let httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.delete(this.solve_url + "/board-delete/" + board.id, httpOptions);
    }
    getBoardOfTheDay(token) {
        let httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.get(this.solve_url + "/board-of-the-day", httpOptions);
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jordanhuus/Documents/Learning/Udacity/full_stack_web_developer/capstone_sudoku_solver/frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map