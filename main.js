(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'fourth';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _second_second_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./second/second.component */ "./src/app/second/second.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"],
                _second_second_component__WEBPACK_IMPORTED_MODULE_8__["SecondComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([
                    { path: '', pathMatch: 'full', redirectTo: 'index' },
                    { path: 'index', component: _index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"] },
                    { path: 'second', component: _second_second_component__WEBPACK_IMPORTED_MODULE_8__["SecondComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n.container{\r\n    width: 100%;\r\n}\r\n#option{\r\n    padding: 20px;\r\n  \r\n    \r\n}\r\nselect{\r\n    margin-left:35%;\r\n    width: 25%;\r\n}\r\n.page1,.page2{\r\n    text-align: justify;\r\n}\r\nh2{\r\n    text-align: center;\r\n}\r\n#image1{\r\n    width:100%;\r\n    height: 300px;   \r\n}\r\n#nature{\r\n    width:100%;\r\n    height: 300px;\r\n    border:2px solid black; \r\n    -webkit-filter: blur(5px); \r\n            filter: blur(5px);  \r\n}\r\n#nature:hover{\r\n    -webkit-filter:blur(0px);\r\n            filter:blur(0px);\r\n}\r\n#one{\r\n    width: 90%;\r\n    \r\n}\r\n#two{\r\n    width: 80%;\r\n}\r\n#three{\r\n    width: 70%;\r\n}\r\n#four{\r\n    width: 60%;\r\n}\r\n#five{\r\n    width: 50%;\r\n}\r\n.card{\r\n    width: 350px;\r\n}\r\n.card-img-top{\r\n    width: 100%;\r\n}\r\n#c1{ \r\n    border:2px solid  darkblue;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7OztBQUdqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7QUFDZDtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBaUI7WUFBakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx3QkFBZ0I7WUFBaEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxVQUFVOztBQUVkO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksMEJBQTBCOztBQUU5QiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiNvcHRpb257XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gIFxyXG4gICAgXHJcbn1cclxuc2VsZWN0e1xyXG4gICAgbWFyZ2luLWxlZnQ6MzUlO1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG4ucGFnZTEsLnBhZ2Uye1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5oMntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jaW1hZ2Uxe1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMzAwcHg7ICAgXHJcbn1cclxuI25hdHVyZXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCBibGFjazsgXHJcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTsgIFxyXG59XHJcbiNuYXR1cmU6aG92ZXJ7XHJcbiAgICBmaWx0ZXI6Ymx1cigwcHgpO1xyXG59XHJcblxyXG4jb25le1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIFxyXG59XHJcbiN0d297XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcbiN0aHJlZXtcclxuICAgIHdpZHRoOiA3MCU7XHJcbn1cclxuI2ZvdXJ7XHJcbiAgICB3aWR0aDogNjAlO1xyXG59XHJcblxyXG4jZml2ZXtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuLmNhcmR7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbn1cclxuLmNhcmQtaW1nLXRvcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiNjMXsgXHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICBkYXJrYmx1ZTtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div id=\"c1\" class=\"container\">\n    <div class=\"row\">\n      <div  id=\"option\" class=\"col-lg-12 col-md-12 col-sm-12 text-center bg-primary\">\n       <h4>SELECT THE OPTION</h4>\n      \n        <select name=\"para1\" #para1=\"ngModel\" ngModel class=\"form-control\" (change)=\"add(para1.value)\" placeholder=\"select\">\n          <option value=1>page1</option>\n          <option value=2>page2</option>\n        </select>\n      </div>\n    </div>\n  </div>\n  <div class=\"container\">\n  <div class=\"row\" *ngIf=\"pages==1\">\n<div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n  <div class=\"page1\">\n    <br>\n    <br>\n  <h2>FIRST PAGE</h2>\n  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n  <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all,<br> both look and taste. Do not hesitate to contact us.</p>\n  </div>\n  </div>\n  \n  \n  \n  <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n    <br>\n    <br>\n    <img  id=\"image1\" src=\"assets/img/pg1.jpg\">\n</div>\n<br>\n<br>\n\n<div class=\"row\">\n<div class=\"col-lg-6 col-md-6 col-sm-12\">\n  <br>\n    <br>\n    <div class=\"progress\">\n        <div id=\"one\" class=\"progress-bar bg-success progress-bar-striped\">Kerala</div>\n      </div>\n      <br>\n      <div class=\"progress\">\n          <div id=\"two\" class=\"progress-bar bg-primary progress-bar-striped\">Tamilnadu</div>\n        </div>\n        <br>\n        <div class=\"progress\">\n            <div id=\"three\" class=\"progress-bar bg-warning progress-bar-striped\">Andhra</div>\n          </div>\n          <br>\n          <div class=\"progress\">\n              <div id=\"four\" class=\"progress-bar bg-danger progress-bar-striped\">karnataka</div>\n            </div>\n            <br>\n            <div class=\"progress\">\n                <div id=\"five\" class=\"progress-bar bg-secondary progress-bar-striped\">Telugana</div>\n              </div>\n              <br>\n\n              </div>\n              <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <br>\n                <br>\n                <p>In this progress bar defined how many percentage of Tamilnadu,Kerala,Andhra,Karnataka,Delhi.The first one the kerala progress says the  Kerala should be learned 90%.The second one the Tamilnadu Progress says Tamilnadu hold be learned 80%.</p>\n                <p>The third one Andhra progress says Andhra learned 70%.The fourth one Karnataka progress says Karnataka should be learned in 60%.The last one Telugana progress Says Telugana should be learned 50%.</p>\n              </div>\n\n\n\n  </div>\n\n  \n\n  \n    <div class=\"row\">\n\n      <div class=\"col-lg-3 col-md-3 col-sm-12\">\n       \n        <img id=\"nature\" src=\"assets/img/image1.jpg\">\n      </div>\n      <div  class=\"col-lg-3 col-md-3 col-sm-12\">\n          <img id=\"nature\" src=\"assets/img/image2.jpg\">\n        </div>\n        <div class=\"col-lg-3 col-md-3 col-sm-12\">\n            <img id=\"nature\" src=\"assets/img/image3.jpg\">\n          </div>\n          <div class=\"col-lg-3 col-md-3 col-sm-12\">\n              <img id=\"nature\" src=\"assets/img/image4.jpg\">\n            </div>\n    </div>\n  </div>\n  \n  \n\n\n\n\n<div class=\"row\" *ngIf=\"pages==2\">\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n      <div class=\"page2\">\n        <br>\n        <br>\n        <h2>SECOND PAGE </h2>\n      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n      <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all,<br> both look and taste. Do not hesitate to contact us.</p>\n      </div>\n      </div>\n      <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n        <br>\n        <br>\n          <img id=\"image1\" src=\"assets/img/pg2.jpg\">\n          </div>\n    \n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5 mb-5\">\n          <div class=\"card\">\n              <img class=\"card-img-top\" src=\"assets/img/burger1.jpg\" alt=\"Card image\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">BURGER1</h4>\n                <p class=\"card-text\">\"It's really exciting to hone in on beef because we know that Americans love burgers. It's one of the most favorite foods in our country, and taking a closer look at what is and isn't happening when it comes to responsible antibiotic use</p>\n               \n              </div>\n            </div>\n      </div>\n\n      <div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5 mb-5\">\n        \n          <div class=\"card\">\n              <img class=\"card-img-top\" src=\"assets/img/burger2.jpg\" alt=\"Card image\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">BURGER2</h4>\n                <p class=\"card-text\">This type of burger because we know that Americans love burgers. It's one of the most favorite foods in our country, and taking a closer look at what is and isn't happening when it comes to responsible antibiotic use</p>\n               \n              </div>\n            </div>\n      </div>\n\n      <div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-5 mb-5\">\n          <div class=\"card\">\n              <img class=\"card-img-top\" src=\"assets/img/burger3.jpg\" alt=\"Card image\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">BURGER3</h4>\n                <p class=\"card-text\"> we know that Americans love burgers. It's one of the most favorite foods in our country, and taking a closer look at what is and isn't happening when it comes to responsible antibiotic use and taking a closer look . </p>\n               \n              </div>\n            </div>\n      </div>\n    </div>\n</div>\n</div>\n\n\n\n\n\n\n\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
        this.pages = 1;
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent.prototype.add = function (d) {
        this.pages = d;
        console.log(this.pages);
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/second/second.component.css":
/*!*********************************************!*\
  !*** ./src/app/second/second.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY29uZC9zZWNvbmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/second/second.component.html":
/*!**********************************************!*\
  !*** ./src/app/second/second.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/second/second.component.ts":
/*!********************************************!*\
  !*** ./src/app/second/second.component.ts ***!
  \********************************************/
/*! exports provided: SecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondComponent", function() { return SecondComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SecondComponent = /** @class */ (function () {
    function SecondComponent() {
    }
    SecondComponent.prototype.ngOnInit = function () {
    };
    SecondComponent.prototype.myFunction = function (vijay) {
        this.pages = vijay;
        console.log(this.pages);
    };
    SecondComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-second',
            template: __webpack_require__(/*! ./second.component.html */ "./src/app/second/second.component.html"),
            styles: [__webpack_require__(/*! ./second.component.css */ "./src/app/second/second.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SecondComponent);
    return SecondComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\angular\fourth\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map