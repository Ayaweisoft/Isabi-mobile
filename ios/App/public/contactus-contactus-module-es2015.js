(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contactus-contactus-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"gamesection\" routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <div class=\"row d-flex justify-content-center\">\n      <img class=\"rounded-top\"  src=\"../../../assets/icon/Logoicon.png\">\n      </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"content\">\n\n    <!-- <p class=\" bg-dark m-5 text-center text-white\"> contact us</p> -->\n\n    \n  \n    <ion-card class=\"bg-light\">\n      <ion-card-content>\n        <ion-row>\n          <ion-icon name=\"mail\" size=\"large\" color=\"success\"></ion-icon> <h1>support@i-sabi.com</h1>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n    <ion-card class=\"bg-light\">\n      <ion-card-content>\n        <ion-row>\n          <ion-icon name=\"call\" size=\"large\" color=\"success\"></ion-icon> <h1 > +2348133416863</h1>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n    <ion-card class=\"bg-light\">\n      <ion-card-content>\n        <ion-row>\n          <ion-icon name=\"logo-whatsapp\" size=\"large\" color=\"success\"></ion-icon> <h1 > +2347016790989</h1>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n    <ion-card class=\"bg-light\">\n      <a href=\"https://www.facebook.com/ISABIofficial/\">\n      <ion-card-content>\n        <ion-row>\n          <ion-icon name=\"logo-facebook\" size=\"large\" color=\"info\"></ion-icon> <h1 class=\"pl-2\" >join i-sabi winners group</h1>\n        </ion-row>\n      </ion-card-content>\n    </a>\n    </ion-card>\n\n    <ion-card class=\"bg-light\">\n      <a href=\"https://twitter.com/isabi_ng\">\n      <ion-card-content>\n        <ion-row>\n          <ion-icon name=\"logo-twitter\" size=\"large\" color=\"tertiary\"></ion-icon> <h1 class=\"text-info\" >follow i-sabi winners </h1>\n        </ion-row>\n      </ion-card-content>\n    </a>\n    </ion-card>\n      <!-- message-->\n      <!-- <div *ngIf=\"sms_section\" style=\"padding-top: 40px;\">\n        <form #smsform id=\"smsform\" name=\"youtubeform\" (submit)=\"submitSms(smsform)\">\n          <ion-item >\n            <textarea rows=\"5\" cols=\"40\" placeholder=\"Enter sms here...\" #sms name=\"sms\" [(ngModel)]=\"model.sms\" placeholder=\"Enter sms here\" ></textarea>\n           </ion-item>\n           <ion-button type=\"submit\" [disabled]=\"!sms.value\"> SEND</ion-button>\n          </form>\n        </div> -->\n        <!-- messages -->\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/contactus/contactus.module.ts":
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.module.ts ***!
  \***********************************************/
/*! exports provided: ContactusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPageModule", function() { return ContactusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _contactus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contactus.page */ "./src/app/contactus/contactus.page.ts");







const routes = [
    {
        path: '',
        component: _contactus_page__WEBPACK_IMPORTED_MODULE_6__["ContactusPage"]
    }
];
let ContactusPageModule = class ContactusPageModule {
};
ContactusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_contactus_page__WEBPACK_IMPORTED_MODULE_6__["ContactusPage"]]
    })
], ContactusPageModule);



/***/ }),

/***/ "./src/app/contactus/contactus.page.scss":
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  background-image: url('app-bg.png');\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNDLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQyw0QkFBQTtBQUNOIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nLy9hcHAtYmcucG5nXCIpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXG4gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/contactus/contactus.page.ts":
/*!*********************************************!*\
  !*** ./src/app/contactus/contactus.page.ts ***!
  \*********************************************/
/*! exports provided: ContactusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPage", function() { return ContactusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactusPage = class ContactusPage {
    constructor() { }
    ngOnInit() {
    }
};
ContactusPage.ctorParameters = () => [];
ContactusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contactus',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contactus.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contactus.page.scss */ "./src/app/contactus/contactus.page.scss")).default]
    })
], ContactusPage);



/***/ })

}]);
//# sourceMappingURL=contactus-contactus-module-es2015.js.map