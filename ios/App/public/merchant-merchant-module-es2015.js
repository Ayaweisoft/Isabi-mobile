(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["merchant-merchant-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/merchant.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/merchant.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"gamesection\"></ion-back-button>\n    </ion-buttons>\n    <div class=\"row d-flex justify-content-center\">\n      <img class=\"rounded-top\" src=\"../../../assets/icon/Logoicon.png\" />\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"content\">\n    <ion-col>\n      <div>\n        <ion-card class=\"d-flex text justify-content-center text-white\">\n          <h3>₦ {{accountService.accountBalance | number}}</h3>\n          <div #bal class=\"animated pl-5\" (click)=\"reloadBalance()\">\n            <ion-icon name=\"wallet\" size=\"large\"></ion-icon>refresh\n          </div>\n        </ion-card>\n      </div>\n    </ion-col>\n\n    <ion-col>\n      <div>\n        <ion-card class=\"d-flex text justify-content-center text-white\">\n          <ion-card class=\"border-light text-white\">\n            <ion-card-title class=\"text-white\"> Transfer</ion-card-title>\n            <ion-card-content>0</ion-card-content>\n          </ion-card>\n\n          <ion-card class=\"border-light text-white\">\n            <ion-card-title class=\" text-white\"> Success</ion-card-title>\n            <ion-card-content>0</ion-card-content>\n          </ion-card>\n        </ion-card>\n      </div>\n    </ion-col>\n\n    <ion-col>\n      <ion-card>\n        <ion-card-title>\n          <ion-card-content>\n            <form class=\" form\" #tranferForm ngform=\"transferForm\" name=\"form\" (submit)=\"transferMoney()\">\n              <h1 class=\"text-center font-weight-bold text-white mb-4\">\n                Tranfer fund\n              </h1>\n              <div *ngIf=\"loading\">\n                <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n              </div>\n              <div class=\"text-input mb-2\">\n                <ion-label class=\"ml-3\" position=\"floating\">Username</ion-label>\n                <ion-input class=\"ml-3\" type=\"text\" #username name=\"username\" clearInput [(ngModel)]=\"model.username\"\n                  autocomplete=\"off\" required=\"true\"></ion-input>\n              </div>\n\n              <div class=\"text-input mb-2\">\n                <ion-label class=\"ml-3\" position=\"floating\">Confirm username</ion-label>\n                <ion-input  class=\"ml-3\" type=\"text\" input #username_conf name=\"username_conf\"\n                  [(ngModel)]=\"model.conf_username\" required=\"true\">\n                </ion-input>\n              </div>\n              <div class=\"text-input mb-2\">\n                <ion-label class=\"ml-3\" position=\"floating\">Amount</ion-label>\n                <ion-input  class=\"ml-3\" type=\"number\" input #amount name=\"amount\"\n                  [(ngModel)]=\"model.amount\" required=\"true\">\n                </ion-input>\n              </div>\n\n              <div class=\"justify-content-center row pt-2\">\n                <ion-button size=\"small\" [disabled]=\"!username.value || !username_conf.value || !amount.value\" \n                 type=\"submit\" color=\"light\" (submit)=\"transferMoney()\">\n                  <p style=\"color: #00351a;\" class=\"font-weight-bold\">Send</p>\n                </ion-button>\n              </div>\n            </form>\n          </ion-card-content>\n        </ion-card-title>\n      </ion-card>\n    </ion-col>\n\n       <!-- loader -->\n       <div *ngIf=\"loading\" class=\" \">\n        <div class=\"toast-container \">\n            <div class=\"lds-roller\"><div></div><div></div><div></div><div></div>\n            <div></div><div></div><div></div><div></div></div>\n        </div>\n      </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/merchant/merchant.module.ts":
/*!*********************************************!*\
  !*** ./src/app/merchant/merchant.module.ts ***!
  \*********************************************/
/*! exports provided: MerchantPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantPageModule", function() { return MerchantPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _merchant_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./merchant.page */ "./src/app/merchant/merchant.page.ts");







const routes = [
    {
        path: '',
        component: _merchant_page__WEBPACK_IMPORTED_MODULE_6__["MerchantPage"]
    }
];
let MerchantPageModule = class MerchantPageModule {
};
MerchantPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_merchant_page__WEBPACK_IMPORTED_MODULE_6__["MerchantPage"]]
    })
], MerchantPageModule);



/***/ }),

/***/ "./src/app/merchant/merchant.page.scss":
/*!*********************************************!*\
  !*** ./src/app/merchant/merchant.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  background-image: url('app-bg.png');\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\nform {\n  opacity: 1;\n}\n\n.lds-roller {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n\n.lds-roller div {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 32px 32px;\n}\n\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #fdfffd;\n  margin: -3px 0 0 -3px;\n}\n\n.lds-roller div:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n\n.lds-roller div:nth-child(1):after {\n  top: 50px;\n  left: 50px;\n}\n\n.lds-roller div:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n\n.lds-roller div:nth-child(2):after {\n  top: 54px;\n  left: 45px;\n}\n\n.lds-roller div:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n\n.lds-roller div:nth-child(3):after {\n  top: 57px;\n  left: 39px;\n}\n\n.lds-roller div:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n\n.lds-roller div:nth-child(4):after {\n  top: 58px;\n  left: 32px;\n}\n\n.lds-roller div:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n\n.lds-roller div:nth-child(5):after {\n  top: 57px;\n  left: 25px;\n}\n\n.lds-roller div:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n\n.lds-roller div:nth-child(6):after {\n  top: 54px;\n  left: 19px;\n}\n\n.lds-roller div:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n\n.lds-roller div:nth-child(7):after {\n  top: 50px;\n  left: 14px;\n}\n\n.lds-roller div:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n\n.lds-roller div:nth-child(8):after {\n  top: 45px;\n  left: 10px;\n}\n\n@-webkit-keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.info {\n  -webkit-text-decoration: underline #fffefe;\n          text-decoration: underline #fffefe;\n}\n\n.toast-container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  top: auto;\n  margin-bottom: 80px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n}\n\n.text-input {\n  border-radius: 12px;\n  height: 4em;\n  border: 2px solid #fdfcfc;\n  scroll-margin-bottom: 10%;\n  color: #fff;\n}\n\n#snackbar {\n  visibility: hidden;\n  min-width: 250px;\n  margin-left: -125px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  bottom: 30px;\n  font-size: 17px;\n}\n\n#snackbar {\n  visibility: visible;\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVyY2hhbnQvbWVyY2hhbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQywyQkFBQTtFQUNBLHNCQUFBO0VBQ0MsNEJBQUE7QUFDTjs7QUFHRztFQUNHLFVBQUE7QUFBTjs7QUFLRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUlFO0VBQ0Usd0VBQUE7VUFBQSxnRUFBQTtFQUNBLDJCQUFBO0FBREo7O0FBR0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFFRTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFDSjs7QUFDRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQUU7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBR0o7O0FBREU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUlKOztBQUZFO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQUtKOztBQUhFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFNSjs7QUFKRTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFPSjs7QUFMRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBUUo7O0FBTkU7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FBU0o7O0FBUEU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQVVKOztBQVJFO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQVdKOztBQVRFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFZSjs7QUFWRTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFhSjs7QUFYRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBY0o7O0FBWkU7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBZUo7O0FBYkU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQWdCSjs7QUFkRTtFQUNFO0lBQ0UsdUJBQUE7RUFpQko7RUFmRTtJQUNFLHlCQUFBO0VBaUJKO0FBQ0Y7O0FBdkJFO0VBQ0U7SUFDRSx1QkFBQTtFQWlCSjtFQWZFO0lBQ0UseUJBQUE7RUFpQko7QUFDRjs7QUFkRTtFQUNFLDBDQUFBO1VBQUEsa0NBQUE7QUFnQko7O0FBWkU7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQWVGOztBQVhNO0VBRUUsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFhUjs7QUFGTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFLUjs7QUFGTTtFQUNFLG1CQUFBO0VBQ0EsaURBQUE7RUFDQSx5Q0FBQTtBQUtSOztBQUZNO0VBQ0U7SUFBTSxTQUFBO0lBQVcsVUFBQTtFQU92QjtFQU5NO0lBQUksWUFBQTtJQUFjLFVBQUE7RUFVeEI7QUFDRjs7QUFSTTtFQUNFO0lBQU0sU0FBQTtJQUFXLFVBQUE7RUFZdkI7RUFYTTtJQUFJLFlBQUE7SUFBYyxVQUFBO0VBZXhCO0FBQ0Y7O0FBYk07RUFDRTtJQUFNLFlBQUE7SUFBYyxVQUFBO0VBaUIxQjtFQWhCTTtJQUFJLFNBQUE7SUFBVyxVQUFBO0VBb0JyQjtBQUNGOztBQWxCTTtFQUNFO0lBQU0sWUFBQTtJQUFjLFVBQUE7RUFzQjFCO0VBckJNO0lBQUksU0FBQTtJQUFXLFVBQUE7RUF5QnJCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tZXJjaGFudC9tZXJjaGFudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nLy9hcHAtYmcucG5nXCIpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXG4gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcbiAgfVxuXG4gIFxuICAgZm9ybXtcbiAgICAgIG9wYWNpdHk6IDE7IFxuICAgfVxuICBcbiAgIFxuICAvLyBsb2FkZXJcbiAgLmxkcy1yb2xsZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdiB7XG4gICAgYW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAzMnB4IDMycHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDZweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1MywgMjU1LCAyNTMpO1xuICAgIG1hcmdpbjogLTNweCAwIDAgLTNweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjAzNnM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKTphZnRlciB7XG4gICAgdG9wOiA1MHB4O1xuICAgIGxlZnQ6IDUwcHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wNzJzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMik6YWZ0ZXIge1xuICAgIHRvcDogNTRweDtcbiAgICBsZWZ0OiA0NXB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMykge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTA4cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpOmFmdGVyIHtcbiAgICB0b3A6IDU3cHg7XG4gICAgbGVmdDogMzlweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE0NHM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KTphZnRlciB7XG4gICAgdG9wOiA1OHB4O1xuICAgIGxlZnQ6IDMycHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xOHM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KTphZnRlciB7XG4gICAgdG9wOiA1N3B4O1xuICAgIGxlZnQ6IDI1cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yMTZzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNik6YWZ0ZXIge1xuICAgIHRvcDogNTRweDtcbiAgICBsZWZ0OiAxOXB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNykge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjUycztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpOmFmdGVyIHtcbiAgICB0b3A6IDUwcHg7XG4gICAgbGVmdDogMTRweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjI4OHM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KTphZnRlciB7XG4gICAgdG9wOiA0NXB4O1xuICAgIGxlZnQ6IDEwcHg7XG4gIH1cbiAgQGtleWZyYW1lcyBsZHMtcm9sbGVyIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgLmluZm97XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIHJnYigyNTUsIDI1NCwgMjU0KTtcbiAgfVxuICBcbiAgLy8gICBsb2FkaW5nXG4gIC50b2FzdC1jb250YWluZXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogOTk5O1xuICB9XG4gIFxuICAgICAgLy8gaW5wdXRcbiAgICAgIC50ZXh0LWlucHV0e1xuICAgICAgICAvLyBvcGFjaXR5OiAwLjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTJweDtcbiAgICAgICAgaGVpZ2h0OiA0ZW07XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTMsIDI1MiwgMjUyKTtcbiAgICAgICAgc2Nyb2xsLW1hcmdpbi1ib3R0b206IDEwJTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gIFxuICBcbiAgICAgIC5pbnB1dHtcbiAgICAgICAgLy8gY29sb3I6ICNmZmY7XG4gICAgICB9XG4gIFxuICAgICAgXG4gIFxuICAgXG4gICAgICAjc25hY2tiYXIge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTI1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIGJvdHRvbTogMzBweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAjc25hY2tiYXIge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xuICAgICAgICBhbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgICAgIGZyb20ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9IFxuICAgICAgICB0byB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cbiAgICAgIH1cbiAgICAgIFxuICAgICAgQGtleWZyYW1lcyBmYWRlaW4ge1xuICAgICAgICBmcm9tIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fVxuICAgICAgICB0byB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cbiAgICAgIH1cbiAgICAgIFxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVvdXQge1xuICAgICAgICBmcm9tIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fSBcbiAgICAgICAgdG8ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XG4gICAgICB9XG4gICAgICBcbiAgICAgIEBrZXlmcmFtZXMgZmFkZW91dCB7XG4gICAgICAgIGZyb20ge2JvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9XG4gICAgICAgIHRvIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fVxuICAgICAgfVxuICAgICAgIl19 */");

/***/ }),

/***/ "./src/app/merchant/merchant.page.ts":
/*!*******************************************!*\
  !*** ./src/app/merchant/merchant.page.ts ***!
  \*******************************************/
/*! exports provided: MerchantPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantPage", function() { return MerchantPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_game_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/game-service.service */ "./src/app/shared/game-service.service.ts");
/* harmony import */ var src_app_shared_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/account.service */ "./src/app/shared/account.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let MerchantPage = class MerchantPage {
    constructor(accountService, gameService) {
        this.accountService = accountService;
        this.gameService = gameService;
        this.loading = false;
        this.model = {
            username: '',
            conf_username: '',
            amount: null
        };
    }
    ngOnInit() {
    }
    reloadBalance() {
        this.accountService.loadMyBalance();
        this.bal.nativeElement.classList.add('rubberBand');
        setTimeout(() => {
            this.bal.nativeElement.classList.remove('rubberBand');
        }, 2000);
    }
    transferMoney() {
        if (this.model.username != this.model.conf_username) {
            console.log('user not matched');
            let msg = 'incorrect input, cross-check input!';
            this.gameService.presentToast(msg);
        }
        else {
            console.log(this.model);
            this.loading = true;
            this.accountService.merchantTransfer(this.model).subscribe(res => {
                console.log(res);
                let msg = res['msg'];
                this.gameService.presentToast(msg);
                this.accountService.loadMyBalance();
                this.loading = false;
            }, err => {
                this.loading = false;
                let msg = err.error.msg;
                this.gameService.presentToast(msg);
                console.log(err);
            });
        }
        console.log(this.model);
    }
};
MerchantPage.ctorParameters = () => [
    { type: src_app_shared_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] },
    { type: _shared_game_service_service__WEBPACK_IMPORTED_MODULE_1__["GameServiceService"] }
];
MerchantPage.propDecorators = {
    bal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['bal', { static: false },] }]
};
MerchantPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-merchant',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./merchant.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/merchant/merchant.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./merchant.page.scss */ "./src/app/merchant/merchant.page.scss")).default]
    })
], MerchantPage);



/***/ })

}]);
//# sourceMappingURL=merchant-merchant-module-es2015.js.map