(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admintransfer-admintransfer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admintransfer/admintransfer.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admintransfer/admintransfer.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n      <ion-img class=\"rounded-top\"  src=\"../../assets/icon/Logoicon.png\"></ion-img>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <ion-fab  vertical=\"top\" horizontal=\"center\" slot=\"fixed\">\n    <ion-button (click)=\"presentNavigation()\" type=\"block\" size=\"large\">Navigation</ion-button>\n  </ion-fab>\n \n\n  <div class=\"content pt-5\">\n      <!-- loader -->\n      <div *ngIf=\"loading\" class=\" \">\n          <div class=\"toast-container \">\n              <div class=\"lds-roller\"><div></div><div></div><div></div><div></div>\n              <div></div><div></div><div></div><div></div></div>\n          </div>\n        </div>\n\n        <ion-card class=\"card\" *ngFor=\"let item of manualTransfer\">\n<<<<<<< HEAD\n          <ion-header><h1 class=\"text-center text-white\"> ₦ {{item?.amount}} </h1> </ion-header>\n=======\n          <ion-header><h1 class=\"text-center text-white\"> ₦ {{item.mobile_amount}} </h1> </ion-header>\n          \n>>>>>>> fd6babf481a5f38dfc239a92a203c70c9de79f13\n          <ion-list>\n            <h6>{{item.username}} </h6>\n            <h6>status : {{item.status}} </h6>\n            <h6>ID:{{item.account_id}} </h6>\n            <h6>{{item.date | date:'full'}} </h6>\n            <h6>{{item.trax}} </h6>\n            <ion-col>\n              <ion-row>\n            <ion-button color=\"success\"(click)=\"confirmUser(item._id)\" > CONFIRM</ion-button>\n            <ion-button color=\"danger\"(click)=\"declineAlert(item._id, item.amount, item.username)\" > DECLINE</ion-button>\n          </ion-row>\n          </ion-col>\n          </ion-list>\n        </ion-card>\n        <!-- <ion-card  class=\"text-white mt-5 p-3 bg-dark text-center\">\n          <ion-card-content>No manual transfer has been made. </ion-card-content>\n        </ion-card> -->\n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/admintransfer/admintransfer.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/admintransfer/admintransfer.module.ts ***!
  \*******************************************************/
/*! exports provided: AdmintransferPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmintransferPageModule", function() { return AdmintransferPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _admintransfer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admintransfer.page */ "./src/app/admintransfer/admintransfer.page.ts");







const routes = [
    {
        path: '',
        component: _admintransfer_page__WEBPACK_IMPORTED_MODULE_6__["AdmintransferPage"]
    }
];
let AdmintransferPageModule = class AdmintransferPageModule {
};
AdmintransferPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_admintransfer_page__WEBPACK_IMPORTED_MODULE_6__["AdmintransferPage"]]
    })
], AdmintransferPageModule);



/***/ }),

/***/ "./src/app/admintransfer/admintransfer.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/admintransfer/admintransfer.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  background-image: url('app-bg.png');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.card {\n  background-color: #083a08;\n}\n\n.lds-roller {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n\n.lds-roller div {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 32px 32px;\n}\n\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #063a06;\n  margin: -3px 0 0 -3px;\n}\n\n.lds-roller div:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n\n.lds-roller div:nth-child(1):after {\n  top: 50px;\n  left: 50px;\n}\n\n.lds-roller div:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n\n.lds-roller div:nth-child(2):after {\n  top: 54px;\n  left: 45px;\n}\n\n.lds-roller div:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n\n.lds-roller div:nth-child(3):after {\n  top: 57px;\n  left: 39px;\n}\n\n.lds-roller div:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n\n.lds-roller div:nth-child(4):after {\n  top: 58px;\n  left: 32px;\n}\n\n.lds-roller div:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n\n.lds-roller div:nth-child(5):after {\n  top: 57px;\n  left: 25px;\n}\n\n.lds-roller div:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n\n.lds-roller div:nth-child(6):after {\n  top: 54px;\n  left: 19px;\n}\n\n.lds-roller div:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n\n.lds-roller div:nth-child(7):after {\n  top: 50px;\n  left: 14px;\n}\n\n.lds-roller div:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n\n.lds-roller div:nth-child(8):after {\n  top: 45px;\n  left: 10px;\n}\n\n@-webkit-keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW50cmFuc2Zlci9hZG1pbnRyYW5zZmVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVHLG1DQUFBO0VBQ0UsMkJBQUE7RUFDQSxzQkFBQTtFQUNDLDRCQUFBO0FBQU47O0FBR0E7RUFDSSx5QkFBQTtBQUFKOztBQUtBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRko7O0FBSUU7RUFDRSx3RUFBQTtVQUFBLGdFQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUFKOztBQUVFO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQUNKOztBQUNFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFFSjs7QUFBRTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFHSjs7QUFERTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBSUo7O0FBRkU7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBS0o7O0FBSEU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQU1KOztBQUpFO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQU9KOztBQUxFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFRSjs7QUFORTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QUFTSjs7QUFQRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBVUo7O0FBUkU7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBV0o7O0FBVEU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQVlKOztBQVZFO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQWFKOztBQVhFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFjSjs7QUFaRTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFlSjs7QUFiRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBZ0JKOztBQWRFO0VBQ0U7SUFDRSx1QkFBQTtFQWlCSjtFQWZFO0lBQ0UseUJBQUE7RUFpQko7QUFDRjs7QUF2QkU7RUFDRTtJQUNFLHVCQUFBO0VBaUJKO0VBZkU7SUFDRSx5QkFBQTtFQWlCSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWRtaW50cmFuc2Zlci9hZG1pbnRyYW5zZmVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICAvLyAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjgxNDtcbiAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvYXBwLWJnLnBuZ1wiKTtcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcbiAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxuICB9XG5cbi5jYXJke1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4LCA1OCwgOCk7XG4gIH1cblxuICBcbi8vIGxvYWRlclxuLmxkcy1yb2xsZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdiB7XG4gICAgYW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAzMnB4IDMycHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDZweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogcmdiKDYsIDU4LCA2KTtcbiAgICBtYXJnaW46IC0zcHggMCAwIC0zcHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wMzZzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSk6YWZ0ZXIge1xuICAgIHRvcDogNTBweDtcbiAgICBsZWZ0OiA1MHB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMDcycztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpOmFmdGVyIHtcbiAgICB0b3A6IDU0cHg7XG4gICAgbGVmdDogNDVweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjEwOHM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XG4gICAgdG9wOiA1N3B4O1xuICAgIGxlZnQ6IDM5cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNDRzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCk6YWZ0ZXIge1xuICAgIHRvcDogNThweDtcbiAgICBsZWZ0OiAzMnB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMThzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSk6YWZ0ZXIge1xuICAgIHRvcDogNTdweDtcbiAgICBsZWZ0OiAyNXB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjE2cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyIHtcbiAgICB0b3A6IDU0cHg7XG4gICAgbGVmdDogMTlweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjI1MnM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KTphZnRlciB7XG4gICAgdG9wOiA1MHB4O1xuICAgIGxlZnQ6IDE0cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yODhzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCk6YWZ0ZXIge1xuICAgIHRvcDogNDVweDtcbiAgICBsZWZ0OiAxMHB4O1xuICB9XG4gIEBrZXlmcmFtZXMgbGRzLXJvbGxlciB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbiAgIl19 */");

/***/ }),

/***/ "./src/app/admintransfer/admintransfer.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/admintransfer/admintransfer.page.ts ***!
  \*****************************************************/
/*! exports provided: AdmintransferPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmintransferPage", function() { return AdmintransferPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/account.service */ "./src/app/shared/account.service.ts");
/* harmony import */ var _adminnavigation_adminnavigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../adminnavigation/adminnavigation.component */ "./src/app/adminnavigation/adminnavigation.component.ts");





let AdmintransferPage = class AdmintransferPage {
    constructor(accountService, toastController, alertController, popoverController) {
        this.accountService = accountService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.popoverController = popoverController;
        this.loading = true;
        this.getManualList();
    }
    ngOnInit() {
    }
    getManualList() {
        this.accountService.getManualTransactions().subscribe(res => {
            this.loading = false;
            this.manualTransfer = res['trans'];
            console.log(this.manualTransfer);
        });
    }
    confirmUser(id) {
        this.loading = true;
        console.log(id);
        this.accountService.confirmTransaction(id).subscribe(res => {
            this.loading = false;
            this.getManualList();
        }, err => {
            this.loading = false;
            console.log(err);
            this.getManualList();
        });
    }
    presentNavigation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _adminnavigation_adminnavigation_component__WEBPACK_IMPORTED_MODULE_4__["AdminnavigationComponent"],
                translucent: true
            });
            return yield popover.present();
        });
    }
    declineAlert(id, amount, username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Decline Transaction!',
                message: `Message <strong> ${amount}</strong>!!! <br>
              Username : ${username}`,
                buttons: [
                    {
                        text: 'CANCEL',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Cancel');
                        }
                    }, {
                        text: 'DECLINE',
                        handler: () => {
                            console.log('Confirm Okay');
                            this.accountService.declineTransaction(id).subscribe(res => {
                                let message = 'Transaction declined';
                                console.log(res);
                                this.getManualList();
                                this.presentToast(message);
                            }, err => { this.loading = false; this.getManualList(); });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentToast(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                position: 'middle',
                duration: 3000
            });
            toast.present();
        });
    }
};
AdmintransferPage.ctorParameters = () => [
    { type: _shared_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"] }
];
AdmintransferPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-admintransfer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admintransfer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admintransfer/admintransfer.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admintransfer.page.scss */ "./src/app/admintransfer/admintransfer.page.scss")).default]
    })
], AdmintransferPage);



/***/ })

}]);
//# sourceMappingURL=admintransfer-admintransfer-module-es2015.js.map