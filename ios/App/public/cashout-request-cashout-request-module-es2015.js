(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cashout-request-cashout-request-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cashout-request/cashout-request.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cashout-request/cashout-request.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    \n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons> <div class=\"row d-flex justify-content-center\">\n      <img class=\"rounded-top\"  src=\"../../../assets/icon/Logoicon.png\">\n    </div> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n \n\n  <div class=\"content pt-5\">\n\n   \n      <h3 class=\"bg-dark text-center m-3 text-white\"> CASHOUT LIST</h3>\n      <ion-refresher #refresherRef (ionRefresh)=\"doRefresh($event)\" slot=\"fixed\" >\n        <ion-refresher-content>\n        </ion-refresher-content>\n      </ion-refresher>\n\n      <div *ngFor=\"let item of cashoutList ; index as i\">\n        <ion-list>\n          <ion-row class=\"pt-3\">\n            <ion-chip color=\"success\"> ₦{{item.amount}} </ion-chip>\n            <ion-chip color=\"success\">{{item.username}} </ion-chip>\n            <ion-button class=\"pl-5\" (click)=\"payout(item.amount, item.username, item._id)\" >PAYOUT </ion-button>\n          </ion-row>\n        </ion-list>\n      </div>\n    \n          <!-- loader -->\n   <div *ngIf=\"loading\">\n    <div class=\"toast-container \">\n      <div class=\"lds-roller\">\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n      </div>\n    </div>\n  </div>\n\n  </div>\n\n \n</ion-content> \n");

/***/ }),

/***/ "./src/app/cashout-request/cashout-request.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/cashout-request/cashout-request.module.ts ***!
  \***********************************************************/
/*! exports provided: CashoutRequestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashoutRequestPageModule", function() { return CashoutRequestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _cashout_request_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cashout-request.page */ "./src/app/cashout-request/cashout-request.page.ts");







const routes = [
    {
        path: '',
        component: _cashout_request_page__WEBPACK_IMPORTED_MODULE_6__["CashoutRequestPage"]
    }
];
let CashoutRequestPageModule = class CashoutRequestPageModule {
};
CashoutRequestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cashout_request_page__WEBPACK_IMPORTED_MODULE_6__["CashoutRequestPage"]]
    })
], CashoutRequestPageModule);



/***/ }),

/***/ "./src/app/cashout-request/cashout-request.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/cashout-request/cashout-request.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  background-image: url('app-bg.png');\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  position: fixed;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\nh1 {\n  color: #396;\n  font-weight: 100;\n  font-size: 40px;\n  margin: 40px 0px 20px;\n}\n\n#clockdiv {\n  font-family: sans-serif;\n  color: #fdfcfc;\n  display: inline-block;\n  font-weight: bold;\n  text-align: center;\n  font-size: 35px;\n}\n\n#clockdiv > div {\n  padding: 5px;\n  border-radius: 3px;\n  background: #cae2dd;\n  display: inline-block;\n}\n\n#clockdiv div > span {\n  padding: 15px;\n  border-radius: 3px;\n  display: inline-block;\n}\n\n.smalltext {\n  padding-top: 5px;\n  font-size: 16px;\n}\n\n.toast-container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  top: auto;\n  margin-bottom: 80px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n}\n\n.lds-roller {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n\n.lds-roller div {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 32px 32px;\n}\n\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #fdfffd;\n  margin: -3px 0 0 -3px;\n}\n\n.lds-roller div:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n\n.lds-roller div:nth-child(1):after {\n  top: 50px;\n  left: 50px;\n}\n\n.lds-roller div:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n\n.lds-roller div:nth-child(2):after {\n  top: 54px;\n  left: 45px;\n}\n\n.lds-roller div:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n\n.lds-roller div:nth-child(3):after {\n  top: 57px;\n  left: 39px;\n}\n\n.lds-roller div:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n\n.lds-roller div:nth-child(4):after {\n  top: 58px;\n  left: 32px;\n}\n\n.lds-roller div:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n\n.lds-roller div:nth-child(5):after {\n  top: 57px;\n  left: 25px;\n}\n\n.lds-roller div:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n\n.lds-roller div:nth-child(6):after {\n  top: 54px;\n  left: 19px;\n}\n\n.lds-roller div:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n\n.lds-roller div:nth-child(7):after {\n  top: 50px;\n  left: 14px;\n}\n\n.lds-roller div:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n\n.lds-roller div:nth-child(8):after {\n  top: 45px;\n  left: 10px;\n}\n\n@-webkit-keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FzaG91dC1yZXF1ZXN0L2Nhc2hvdXQtcmVxdWVzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDRyxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0MsMkJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQyw0QkFBQTtBQUFOOztBQU1FO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBSE47O0FBS0s7RUFDRyx1QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRlI7O0FBS0k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBRlI7O0FBSUk7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxxQkFBQTtBQUZSOztBQUlJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBRFI7O0FBSUU7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUROOztBQU1FO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSEo7O0FBS0U7RUFDRSx3RUFBQTtVQUFBLGdFQUFBO0VBQ0EsMkJBQUE7QUFGSjs7QUFJRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQURKOztBQUdFO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQUFKOztBQUVFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFDSjs7QUFDRTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFFSjs7QUFBRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBR0o7O0FBREU7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBSUo7O0FBRkU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUtKOztBQUhFO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQU1KOztBQUpFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFPSjs7QUFMRTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QUFRSjs7QUFORTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBU0o7O0FBUEU7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBVUo7O0FBUkU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQVdKOztBQVRFO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQVlKOztBQVZFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFhSjs7QUFYRTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFjSjs7QUFaRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBZUo7O0FBYkU7RUFDRTtJQUNFLHVCQUFBO0VBZ0JKO0VBZEU7SUFDRSx5QkFBQTtFQWdCSjtBQUNGOztBQXRCRTtFQUNFO0lBQ0UsdUJBQUE7RUFnQko7RUFkRTtJQUNFLHlCQUFBO0VBZ0JKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXNob3V0LXJlcXVlc3QvY2FzaG91dC1yZXF1ZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuIC5jb250ZW50e1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYXBwLWJnLnBuZ1wiKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXG4gICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxuICB9XG4gIFxuICAvLyAgdGltZXIgc3R5bGVzXG4gIFxuICAvLyB0aW1lciBzdHlsZXNcbiAgaDF7IFxuICAgICAgY29sb3I6ICMzOTY7IFxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDsgXG4gICAgICBmb250LXNpemU6IDQwcHg7IFxuICAgICAgbWFyZ2luOiA0MHB4IDBweCAyMHB4OyBcbiAgICB9IFxuICAgICAjY2xvY2tkaXZ7IFxuICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgXG4gICAgICAgIGNvbG9yOiByZ2IoMjUzLCAyNTIsIDI1Mik7IFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDsgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDsgXG4gICAgfSBcbiAgXG4gICAgI2Nsb2NrZGl2ID4gZGl2eyBcbiAgICAgICAgcGFkZGluZzogNXB4OyBcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4OyBcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDIwMiwgMjI2LCAyMjEpOyBcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcbiAgICB9IFxuICAgICNjbG9ja2RpdiBkaXYgPiBzcGFueyBcbiAgICAgICAgcGFkZGluZzogMTVweDsgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDsgXG4gICAgICAvLyAgIGJhY2tncm91bmQ6ICMwMDgxNkE7IFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IFxuICAgIH0gXG4gICAgLnNtYWxsdGV4dHsgXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7IFxuICAgICAgICBmb250LXNpemU6IDE2cHg7IFxuICAgIH0gXG4gICAgLy8gICBsb2FkaW5nXG4gIC50b2FzdC1jb250YWluZXJ7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB0b3A6IGF1dG87XG4gICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgei1pbmRleDogOTk5O1xuICAgIH1cbiAgXG4gICAgXG4gIC8vIGxvYWRlclxuICAubGRzLXJvbGxlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2IHtcbiAgICBhbmltYXRpb246IGxkcy1yb2xsZXIgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDMycHggMzJweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNnB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjUzLCAyNTUsIDI1Myk7XG4gICAgbWFyZ2luOiAtM3B4IDAgMCAtM3B4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMDM2cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpOmFmdGVyIHtcbiAgICB0b3A6IDUwcHg7XG4gICAgbGVmdDogNTBweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjA3MnM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKTphZnRlciB7XG4gICAgdG9wOiA1NHB4O1xuICAgIGxlZnQ6IDQ1cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMDhzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMyk6YWZ0ZXIge1xuICAgIHRvcDogNTdweDtcbiAgICBsZWZ0OiAzOXB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTQ0cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpOmFmdGVyIHtcbiAgICB0b3A6IDU4cHg7XG4gICAgbGVmdDogMzJweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE4cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpOmFmdGVyIHtcbiAgICB0b3A6IDU3cHg7XG4gICAgbGVmdDogMjVweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjIxNnM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KTphZnRlciB7XG4gICAgdG9wOiA1NHB4O1xuICAgIGxlZnQ6IDE5cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNTJzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNyk6YWZ0ZXIge1xuICAgIHRvcDogNTBweDtcbiAgICBsZWZ0OiAxNHB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjg4cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpOmFmdGVyIHtcbiAgICB0b3A6IDQ1cHg7XG4gICAgbGVmdDogMTBweDtcbiAgfVxuICBAa2V5ZnJhbWVzIGxkcy1yb2xsZXIge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/cashout-request/cashout-request.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/cashout-request/cashout-request.page.ts ***!
  \*********************************************************/
/*! exports provided: CashoutRequestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashoutRequestPage", function() { return CashoutRequestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_game_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/game-service.service */ "./src/app/shared/game-service.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _shared_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../shared/account.service */ "./src/app/shared/account.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let CashoutRequestPage = class CashoutRequestPage {
    constructor(accountService, gameService, popoverController) {
        this.accountService = accountService;
        this.gameService = gameService;
        this.popoverController = popoverController;
        this.loading = false;
        this.cashoutRequest();
    }
    ngOnInit() {
    }
    doRefresh(refresher) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Begin async operation');
            yield this.cashoutRequest();
            this.refresherRef.complete();
        });
    }
    cashoutRequest() {
        console.log('fire cashout');
        this.loading = true;
        this.accountService.cashoutOutRequest().subscribe(res => {
            console.log(res);
            this.loading = false;
            this.cashoutList = res['document'];
        });
    }
    payout(amount, user, id) {
        let userObj = { amount: amount, user: user, fileID: id };
        this.accountService.payCashout(userObj).subscribe(res => {
            let msg = "payout success!";
            this.gameService.presentToast(msg);
            this.cashoutRequest();
        }, err => {
            this.gameService.presentToast(err.error.message);
        });
    }
};
CashoutRequestPage.ctorParameters = () => [
    { type: _shared_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] },
    { type: _shared_game_service_service__WEBPACK_IMPORTED_MODULE_1__["GameServiceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }
];
CashoutRequestPage.propDecorators = {
    refresherRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['refresherRef', { static: false },] }]
};
CashoutRequestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-cashout-request',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cashout-request.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cashout-request/cashout-request.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cashout-request.page.scss */ "./src/app/cashout-request/cashout-request.page.scss")).default]
    })
], CashoutRequestPage);



/***/ })

}]);
//# sourceMappingURL=cashout-request-cashout-request-module-es2015.js.map