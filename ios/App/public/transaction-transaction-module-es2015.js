(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transaction-transaction-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/transaction/transaction.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transaction/transaction.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n      \n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n        <div class=\"row d-flex justify-content-center\">\n          <img class=\"rounded-top\"  src=\"../../../assets/icon/Logoicon.png\">\n\n        </div>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n    <ion-fab [routerLink]=\"['/gamesection']\" vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n      <ion-fab-button  color=\"light\">\n        <ion-icon  name=\"logo-game-controller-b\"></ion-icon>\n      </ion-fab-button>\n    </ion-fab>\n\n<div class=\"\">\n  \n\n\n  <ion-card class=\" card text-white text-center\" *ngFor=\"let item of transaction; index as i\">\n    <ion-card-header class=\"text-white\"> {{item.date | date:'full'}} </ion-card-header>\n    <ion-card-content>\n      <ion-list class=\"text-dark\">\n\n     \n<p class=\"font-weight-bold\" *ngIf=\"item.amount\">₦{{item?.amount}} </p>\n        <p class=\"font-weight-bold\" *ngIf=\"item.mobile_amount\">₦{{item?.mobile_amount}} </p>\n        <p *ngIf=\"item.status =='success'\" class=\"text-success\"> status : {{item?.status}} </p>\n        <p *ngIf=\"item.status =='decline'\" class=\"text-danger\"> status : {{item?.status}} </p>\n        <p *ngIf=\"item.status =='cashout'\" class=\"text-warning\"> status : {{item?.status}} </p>\n        <p  *ngIf=\"item?.trax =='paid'\"  class=\"text-success\"> tansaction : {{item?.trax}} </p>\n        <p  *ngIf=\"item?.trax !='paid'\"> tansaction : {{item?.trax}} </p>\n\n        <p class=\"font-weight-bold\" *ngIf=\"item.amount\" >₦{{item?.amount}} </p>\n        <p class=\"font-weight-bold\" *ngIf=\"item.mobile_amount\"  >₦{{item?.mobile_amount}} </p>\n        <p> status : {{item?.status}} </p>\n        <p> tanx id{{item?.trax}} </p>\n         <p> {{item?.ref}} </p>\n      </ion-list>\n      \n    </ion-card-content>\n  </ion-card>\n\n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/transaction/transaction.module.ts":
/*!***************************************************!*\
  !*** ./src/app/transaction/transaction.module.ts ***!
  \***************************************************/
/*! exports provided: TransactionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPageModule", function() { return TransactionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _transaction_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transaction.page */ "./src/app/transaction/transaction.page.ts");







const routes = [
    {
        path: '',
        component: _transaction_page__WEBPACK_IMPORTED_MODULE_6__["TransactionPage"]
    }
];
let TransactionPageModule = class TransactionPageModule {
};
TransactionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_transaction_page__WEBPACK_IMPORTED_MODULE_6__["TransactionPage"]]
    })
], TransactionPageModule);



/***/ }),

/***/ "./src/app/transaction/transaction.page.scss":
/*!***************************************************!*\
  !*** ./src/app/transaction/transaction.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  background-color: #083a08;\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.card {\n  background-color: #083a08;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNhY3Rpb24vdHJhbnNhY3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVDLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQyw0QkFBQTtBQUROOztBQUlFO0VBQ0UseUJBQUE7QUFESiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9uL3RyYW5zYWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvaXNhYmktYmcuanBnXCIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4LCA1OCwgOCk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcbiAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxuICB9XG5cbiAgLmNhcmR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgsIDU4LCA4KTtcbiAgfVxuIl19 */");

/***/ }),

/***/ "./src/app/transaction/transaction.page.ts":
/*!*************************************************!*\
  !*** ./src/app/transaction/transaction.page.ts ***!
  \*************************************************/
/*! exports provided: TransactionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPage", function() { return TransactionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_shared_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/account.service */ "./src/app/shared/account.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let TransactionPage = class TransactionPage {
    constructor(accountService) {
        this.accountService = accountService;
        this.loading = true;
        this.getTransaction();
    }
    ngOnInit() {
    }
    getTransaction() {
        this.loading = true;
        this.accountService.myTransaction().subscribe(res => {
            this.loading = false;
            this.transaction = res['transaction'];
            console.log(res);
            console.log(this.transaction);
        }, err => {
            this.loading = false;
            console.log(err);
        });
    }
};
TransactionPage.ctorParameters = () => [
    { type: src_app_shared_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"] }
];
TransactionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-transaction',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./transaction.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/transaction/transaction.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./transaction.page.scss */ "./src/app/transaction/transaction.page.scss")).default]
    })
], TransactionPage);



/***/ })

}]);
//# sourceMappingURL=transaction-transaction-module-es2015.js.map