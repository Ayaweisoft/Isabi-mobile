(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-users-manage-users-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-users/manage-users.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-users/manage-users.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    \n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons> <div class=\"row d-flex justify-content-center\">\n      <img class=\"rounded-top\"  src=\"../../../assets/icon/Logoicon.png\">\n    </div> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"content text-white\">\n\n    <ion-segment >\n    <ion-segment-button [routerLink]=\"['/tabs/gamesection']\">\n      <ion-label ><ion-icon color=\"light\"   name=\"home\"></ion-icon> </ion-label>\n    </ion-segment-button>\n    <ion-segment-button  [routerLink]=\"['/tabs/manage-questions']\">\n      <ion-label >  <ion-icon s color=\"light\"  name=\"help\"></ion-icon> </ion-label>\n    </ion-segment-button>\n    <ion-segment-button  [routerLink]=\"['/tabs/payouts']\">\n      <ion-label ><ion-icon  color=\"light\"  name=\"wallet\"></ion-icon> </ion-label>\n    </ion-segment-button>\n    <ion-segment-button  [routerLink]=\"['/tabs/admin-account']\">\n      <ion-label><ion-icon  color=\"light\"   name=\"people\"></ion-icon></ion-label>\n    </ion-segment-button>\n  </ion-segment>\n    <!-- content -->\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/manage-users/manage-users.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/manage-users/manage-users.module.ts ***!
  \*****************************************************/
/*! exports provided: ManageUsersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUsersPageModule", function() { return ManageUsersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _manage_users_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-users.page */ "./src/app/manage-users/manage-users.page.ts");







const routes = [
    {
        path: '',
        component: _manage_users_page__WEBPACK_IMPORTED_MODULE_6__["ManageUsersPage"]
    }
];
let ManageUsersPageModule = class ManageUsersPageModule {
};
ManageUsersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_manage_users_page__WEBPACK_IMPORTED_MODULE_6__["ManageUsersPage"]]
    })
], ManageUsersPageModule);



/***/ }),

/***/ "./src/app/manage-users/manage-users.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/manage-users/manage-users.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  background-image: url('app-bg.png');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLXVzZXJzL21hbmFnZS11c2Vycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSyxtQ0FBQTtFQUVFLDJCQUFBO0VBQ0Esc0JBQUE7RUFFQyw0QkFBQTtBQUZSIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlLXVzZXJzL21hbmFnZS11c2Vycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgICAvLyAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjgxNDtcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9hcHAtYmcucG5nXCIpO1xuICAgICAgXG4gICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcbiAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgLy8gIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXG4gICAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/manage-users/manage-users.page.ts":
/*!***************************************************!*\
  !*** ./src/app/manage-users/manage-users.page.ts ***!
  \***************************************************/
/*! exports provided: ManageUsersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageUsersPage", function() { return ManageUsersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ManageUsersPage = class ManageUsersPage {
    constructor() { }
    ngOnInit() {
    }
};
ManageUsersPage.ctorParameters = () => [];
ManageUsersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-users',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./manage-users.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-users/manage-users.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./manage-users.page.scss */ "./src/app/manage-users/manage-users.page.scss")).default]
    })
], ManageUsersPage);



/***/ })

}]);
//# sourceMappingURL=manage-users-manage-users-module-es2015.js.map