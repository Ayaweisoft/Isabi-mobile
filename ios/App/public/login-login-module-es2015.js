(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <section class=\"ion-padding logo\">\n          <img src=\"assets/img/ISABI LOGO GREEN.png\"\n               alt=\"isabi logo\"\n               title=\"isabi logo\" />\n        </section>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-xs=\"12\"\n               size-sm=\"10\"\n               offset-md=\"1\"\n               size-md=\"6\"\n               offset-md=\"3\"\n               size-lg=\"4\"\n               offset-lg=\"4\">\n        <form class=\"form\"\n              #loginForm=\"ngForm\"\n              name=\"form\"\n              (submit)=\"login(loginForm)\">\n          <!-- username -->\n          <div class=\"utility\">\n            <div class=\"text-input\">\n              <ion-input autofocus\n                         type=\"text\"\n                         class=\"pl-4 pr-2\"\n                         placeholder=\"Username or Phone\"\n                         #emailUser=\"ngModel\"\n                         name=\"number\"\n                         clearInput\n                         [(ngModel)]=\"model.number\"\n                         autocomplete=\"off\"\n                         minlength=\"11\"\n                         required=\"true\">\n                <ion-icon class=\"mr-2\"\n                          name=\"person-outline\"></ion-icon>\n              </ion-input>\n            </div>\n\n            <div *ngIf=\"emailUser.dirty && emailUser.errors\"\n                 class=\"text-center\">\n              <small class=\"text-danger \">phone number or email is required</small>\n            </div>\n          </div>\n\n          <div class=\"utility\">\n            <div class=\"text-input\">\n              <ion-input type=\"password\"\n                         class=\"pl-4 pr-2\"\n                         input\n                         placeholder=\"Password\"\n                         #emailUser=\"ngModel\"\n                         name=\"password\"\n                         minlength=\"6\"\n                         [(ngModel)]=\"model.password\"\n                         clearInput\n                         required=\"true\">\n                <ion-icon class=\"mr-2\"\n                          name=\"lock-closed-outline\"></ion-icon>\n              </ion-input>\n            </div>\n\n            <div *ngIf=\"emailUser.dirty && emailUser.errors\"\n                 class=\"text-center\">\n              <small class=\"text-danger \">password is required</small>\n            </div>\n          </div>\n\n\n          <ion-text class=\"ion-float-right forgot-password\"\n                    [routerLink]=\"['/forgetpassword']\">Forgot password?\n          </ion-text>\n\n          <ion-button class=\"login\"\n                      shape=\"round\"\n                      [disabled]=\"!loginForm.valid\"\n                      (submit)=\"login(loginForm)\"\n                      expand=\"block\"\n                      type=\"submit\">Login</ion-button>\n\n          <div *ngIf=\"loading\">\n            <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n          </div>\n        </form>\n\n        <ion-row>\n          <ion-col class=\"sign-up\"\n                   size=\"12\">\n            <p class=\"text-dark\">Don't have account?\n              <ion-label (click)=\"register()\"\n                         class=\"font-weight-bold text-dark\">Sign up\n              </ion-label>\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center mt-5\">\n        <ion-label>Sign in with</ion-label>\n        <ion-row>\n          <ion-col class=\"social-icons\"\n                   size-xs=\"6\"\n                   offset-xs=\"3\"\n                   size-sm=\"6\"\n                   offset-sm=\"3\"\n                   size-md=\"3\"\n                   offset-md=\"4.5\"\n                   size-lg=\"2\"\n                   offset-lg=\"5\">\n            <div>\n              <img src=\"/assets/img/Facebook_Logo.png\"\n                   alt=\"facebook logo\" />\n            </div>\n            <div>\n              <img src=\"assets/img/google-plus-logo.png\"\n                   alt=\"google plus logo\" />\n            </div>\n            <div>\n              <img src=\"assets/img/twitter--logo.png\"\n                   alt=\"twitter logo\" />\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div *ngIf=\"loading\"\n       class=\"\">\n    <div class=\"toast-container\">\n      <div class=\"lds-roller\"></div>\n    </div>\n  </div>\n\n  <!-- fab button with options on click -->\n  <!-- <ion-fab horizontal=\"start\"\n           vertical=\"bottom\"\n           slot=\"fixed\">\n    <ion-fab-button color=\"success\">\n      <ion-icon name=\"alert\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-button color=\"success\"\n                  size=\"small\">\n        <a class=\" info text-white\"\n           [routerLink]=\"['/testimonials']\">\n          <ion-icon name=\"trophy\"></ion-icon> TESTIMONIALS\n        </a>\n      </ion-button>\n      <ion-button color=\"success\"\n                  size=\"small\">\n        <a class=\" info text-white\"\n           [routerLink]=\"['/howtoplay']\">\n          <ion-icon name=\"logo-game-controller-a\"></ion-icon> HOW TO PLAY\n        </a>\n      </ion-button>\n      <ion-button color=\"success\"\n                  size=\"small\">\n        <a class=\" info text-white\"\n           [routerLink]=\"['/contactus']\">\n          <ion-icon name=\"chatbubbles\"></ion-icon> CONTACT US\n        </a>\n      </ion-button>\n      <ion-button color=\"success\"\n                  size=\"small\">\n        <a class=\"info text-white \"\n           href=\"https:/i-sabi.com/faq/\">\n          <ion-icon name=\"help\"></ion-icon> FAQ\n        </a>\n      </ion-button>\n      <ion-button color=\"success\"\n                  size=\"small\">\n        <a class=\"info text-white \"\n           href=\"https:/i-sabi.com/privacy-policy-2/\">\n          <ion-icon name=\"list\"></ion-icon> POLICY\n        </a>\n      </ion-button>\n    </ion-fab-list>\n  </ion-fab> -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: var(--ion-color-primary-contrast);\n}\nion-content .logo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 3rem;\n  margin-bottom: 2rem;\n}\nion-content form {\n  min-height: 250px;\n}\nion-content .utility {\n  margin-bottom: 1.2rem;\n}\nion-content .text-input {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 35px;\n}\nion-content .forgot-password {\n  color: var(--ion-color-primary);\n  font-size: 0.8rem;\n  margin-bottom: 2rem;\n}\nion-content .login ion-button {\n  --background: var(--ion-color-primary);\n}\nion-content .sign-up {\n  text-align: center;\n  font-size: 0.9rem;\n  margin-top: 2rem;\n}\nion-content .social-icons {\n  display: flex;\n  justify-content: space-evenly;\n}\nion-content .social-icons img {\n  height: 30px;\n  width: 30px;\n}\n.toast-container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  top: auto;\n  margin-bottom: 80px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsK0NBQUE7QUFDRDtBQUNDO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFFQztFQUNDLGlCQUFBO0FBQUY7QUFHQztFQUNDLHFCQUFBO0FBREY7QUFJQztFQUNDLDBDQUFBO0VBQ0EsbUJBQUE7QUFGRjtBQUtDO0VBQ0MsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7QUFNQztFQUNDLHNDQUFBO0FBSkY7QUFPQztFQUNDLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxGO0FBUUM7RUFDQyxhQUFBO0VBQ0EsNkJBQUE7QUFORjtBQVFFO0VBQ0MsWUFBQTtFQUNBLFdBQUE7QUFOSDtBQVlBO0VBQ0MsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFURCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcblx0LS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG5cblx0LmxvZ28ge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRtYXJnaW4tdG9wOiAzcmVtO1xuXHRcdG1hcmdpbi1ib3R0b206IDJyZW07XG5cdH1cblxuXHRmb3JtIHtcblx0XHRtaW4taGVpZ2h0OiAyNTBweDtcblx0fVxuXG5cdC51dGlsaXR5IHtcblx0XHRtYXJnaW4tYm90dG9tOiAxLjJyZW07XG5cdH1cblxuXHQudGV4dC1pbnB1dCB7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdGJvcmRlci1yYWRpdXM6IDM1cHg7XG5cdH1cblxuXHQuZm9yZ290LXBhc3N3b3JkIHtcblx0XHRjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdGZvbnQtc2l6ZTogMC44cmVtO1xuXHRcdG1hcmdpbi1ib3R0b206IDJyZW07XG5cdH1cblxuXHQubG9naW4gaW9uLWJ1dHRvbiB7XG5cdFx0LS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cdH1cblxuXHQuc2lnbi11cCB7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogMC45cmVtO1xuXHRcdG1hcmdpbi10b3A6IDJyZW07XG5cdH1cblxuXHQuc29jaWFsLWljb25zIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG5cdFx0aW1nIHtcblx0XHRcdGhlaWdodDogMzBweDtcblx0XHRcdHdpZHRoOiAzMHB4O1xuXHRcdH1cblx0fVxufVxuXG4vLyBsb2FkaW5nXG4udG9hc3QtY29udGFpbmVyIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0dG9wOiBhdXRvO1xuXHRtYXJnaW4tYm90dG9tOiA4MHB4O1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0Ym90dG9tOiAwO1xuXHR6LWluZGV4OiA5OTk7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_game_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/game-service.service */ "./src/app/shared/game-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");







// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
let LoginPage = class LoginPage {
    constructor(loadingController, fb, alertController, toastController, gameService, router, userService) {
        this.loadingController = loadingController;
        this.fb = fb;
        this.alertController = alertController;
        this.toastController = toastController;
        this.gameService = gameService;
        this.router = router;
        this.userService = userService;
        this.phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        this.model = {
            number: '',
            password: ''
        };
    }
    ngOnInit() {
        this.loading = false;
    }
    presentFailNetwork() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'No internet connection!!!',
                duration: 2000
            });
            toast.present();
        });
    }
    login(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('login fire');
            this.loading = true;
            this.userService.login(this.model).subscribe(response => {
                this.userService.setToken(response['token']);
                this.userService.loadBalance();
                console.log('RESPONSE FROM LOGIN');
                localStorage.setItem('user_id', response['doc']['user_id']);
                localStorage.setItem('appUser', response['doc']['username']);
                localStorage.setItem('user-role', response['doc']['role']);
                this.loading = false;
                this.router.navigate(['/tabs/gamesection']);
            }, error => {
                this.loading = false;
                let errorMessage = '';
                let message = error.error;
                if (error.error) {
                    const message = error.error;
                    this.gameService.presentToast(message);
                    console.log('LOGIN ERROR');
                    console.log(error.statusText);
                }
                else {
                    const messageErr = error.statusText;
                    this.gameService.presentToast(messageErr);
                    console.log('server error');
                }
                // this.loginToast(message);
            });
        });
    }
    register() {
        this.router.navigate(['/register']);
    }
    presentAlertConfirm(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Ooops!',
                message: ` <strong class="text-danger"> ${msg}</strong>`,
                buttons: [{
                        text: 'Try again',
                        handler: () => {
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _shared_game_service_service__WEBPACK_IMPORTED_MODULE_1__["GameServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map