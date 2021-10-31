(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <section class=\"ion-padding logo\">\n          <img src=\"assets/img/ISABI LOGO GREEN.png\"\n               alt=\"isabi logo\"\n               title=\"isabi logo\" />\n        </section>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-xs=\"10\"\n               offset-xs=\"1\"\n               size-sm=\"8\"\n               offset-sm=\"2\"\n               size-md=\"6\"\n               offset-md=\"3\"\n               size-lg=\"4\"\n               offset-lg=\"4\">\n        <form class=\"form\"\n              #loginForm=\"ngForm\"\n              name=\"form\"\n              (submit)=\"login(loginForm)\">\n          <!-- username -->\n          <div class=\"utility\">\n            <div class=\"text-input\">\n              <ion-input autofocus\n                         type=\"text\"\n                         class=\"pl-4 pr-2\"\n                         placeholder=\"Email or Phone\"\n                         #emailUser=\"ngModel\"\n                         name=\"number\"\n                         clearInput\n                         [(ngModel)]=\"model.number\"\n                         autocomplete=\"off\"\n                         minlength=\"11\"\n                         required=\"true\">\n                <ion-icon class=\"mr-2\"\n                          name=\"person-outline\"></ion-icon>\n              </ion-input>\n            </div>\n\n            <div *ngIf=\"emailUser.dirty && emailUser.errors\"\n                 class=\"text-center\">\n              <small class=\"text-danger \">phone number or email is required</small>\n            </div>\n          </div>\n\n          <div class=\"utility\">\n            <div class=\"text-input\">\n              <ion-input type=\"password\"\n                         class=\"pl-4 pr-2\"\n                         input\n                         placeholder=\"Password\"\n                         #password=\"ngModel\"\n                         name=\"password\"\n                         minlength=\"6\"\n                         [(ngModel)]=\"model.password\"\n                         clearInput\n                         required=\"true\">\n                <ion-icon class=\"mr-2\"\n                          name=\"lock-closed-outline\"></ion-icon>\n              </ion-input>\n            </div>\n\n            <div *ngIf=\"password.dirty && password.errors\"\n                 class=\"text-center\">\n              <small class=\"text-danger \">password is required</small>\n            </div>\n          </div>\n\n\n          <a class=\"ion-float-right forgot-password\"\n             [routerLink]=\"['/forgetpassword']\">Forgot password?\n          </a>\n\n          <ion-button class=\"login\"\n                      shape=\"round\"\n                      [disabled]=\"!loginForm.valid\"\n                      (submit)=\"login(loginForm)\"\n                      expand=\"block\"\n                      type=\"submit\">Login</ion-button>\n\n          <div *ngIf=\"loading\">\n            <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n          </div>\n        </form>\n\n        <ion-row>\n          <ion-col class=\"sign-up\"\n                   size=\"12\">\n            <p class=\"text-dark\">Don't have account?\n              <ion-label (click)=\"register()\"\n                         class=\"font-weight-bold text-dark\">Sign up\n              </ion-label>\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center mt-5\">\n        <ion-label>Sign in with</ion-label>\n        <ion-row>\n          <ion-col class=\"social-icons\"\n                   size-xs=\"6\"\n                   offset-xs=\"3\"\n                   size-sm=\"6\"\n                   offset-sm=\"3\"\n                   size-md=\"3\"\n                   offset-md=\"4.5\"\n                   size-lg=\"2\"\n                   offset-lg=\"5\">\n            <div>\n              <img src=\"/assets/img/Facebook_Logo.png\"\n                   alt=\"facebook logo\" />\n            </div>\n            <div>\n              <img src=\"assets/img/google-plus-logo.png\"\n                   alt=\"google plus logo\" />\n            </div>\n            <div>\n              <img src=\"assets/img/twitter--logo.png\"\n                   alt=\"twitter logo\" />\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div *ngIf=\"loading\"\n       class=\"\">\n    <div class=\"toast-container\">\n      <div class=\"lds-roller\"></div>\n    </div>\n  </div>\n\n  <!-- fab button with options on click -->\n  <!-- <ion-fab horizontal=\"start\"\n           vertical=\"bottom\"\n           slot=\"fixed\">\n    <ion-fab-button color=\"success\">\n      <ion-icon name=\"alert\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-button color=\"success\"\n                  size=\"small\">\n        <a class=\" info text-white\"\n           [routerLink]=\"['/testimonials']\">\n          <ion-icon name=\"trophy\"></ion-icon> TESTIMONIALS\n        </a>\n      </ion-button>\n      <ion-button color=\"success\"\n                  size=\"small\">\n        <a class=\" info text-white\"\n           [routerLink]=\"['/howtoplay']\">\n          <ion-icon name=\"logo-game-controller-a\"></ion-icon> HOW TO PLAY\n        </a>\n      </ion-button>\n      <ion-button color=\"success\"\n                  size=\"small\">\n        <a class=\" info text-white\"\n           [routerLink]=\"['/contactus']\">\n          <ion-icon name=\"chatbubbles\"></ion-icon> CONTACT US\n        </a>\n      </ion-button>\n      <ion-button color=\"success\"\n                  size=\"small\">\n        <a class=\"info text-white \"\n           href=\"https:/i-sabi.com/faq/\">\n          <ion-icon name=\"help\"></ion-icon> FAQ\n        </a>\n      </ion-button>\n      <ion-button color=\"success\"\n                  size=\"small\">\n        <a class=\"info text-white \"\n           href=\"https:/i-sabi.com/privacy-policy-2/\">\n          <ion-icon name=\"list\"></ion-icon> POLICY\n        </a>\n      </ion-button>\n    </ion-fab-list>\n  </ion-fab> -->\n\n  <!-- loader -->\n  <div *ngIf=\"loading\"\n       class=\" \">\n    <div class=\"toast-container \">\n      <div class=\"lds-roller\">\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/login/login-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: LoginPageRoutingModule */

    /***/
    function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
        return LoginPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
      }];

      var LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LoginPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/login/login.module.ts":
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /*! exports provided: LoginPageModule */

    /***/
    function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
        return LoginPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login-routing.module */
      "./src/app/login/login-routing.module.ts");
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login.page */
      "./src/app/login/login.page.ts");

      var LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
      })], LoginPageModule);
      /***/
    },

    /***/
    "./src/app/login/login.page.scss":
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url(\"/assets/img/bg.png1\");\n  --background-repeat: no-repeat;\n  --background-size: contain;\n}\nion-content .logo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 3rem;\n  margin-bottom: 2rem;\n}\nion-content form {\n  min-height: 250px;\n}\nion-content .utility {\n  margin-bottom: 1.2rem;\n}\nion-content .text-input {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 35px;\n}\nion-content .forgot-password {\n  color: var(--ion-color-primary);\n  font-size: 0.8rem;\n  margin-bottom: 2rem;\n}\nion-content .login ion-button {\n  --background: var(--ion-color-primary);\n}\nion-content .sign-up {\n  text-align: center;\n  font-size: 0.9rem;\n  margin-top: 2rem;\n}\nion-content .sign-up ion-label {\n  cursor: pointer;\n}\nion-content .social-icons {\n  display: flex;\n  justify-content: space-evenly;\n}\nion-content .social-icons img {\n  height: 30px;\n  width: 30px;\n}\n.toast-container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  top: auto;\n  margin-bottom: 80px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msd0NBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0FBQ0Q7QUFDQztFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBRUM7RUFDQyxpQkFBQTtBQUFGO0FBR0M7RUFDQyxxQkFBQTtBQURGO0FBSUM7RUFDQywwQ0FBQTtFQUNBLG1CQUFBO0FBRkY7QUFLQztFQUNDLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUhGO0FBTUM7RUFDQyxzQ0FBQTtBQUpGO0FBT0M7RUFDQyxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFMRjtBQU9FO0VBQ0MsZUFBQTtBQUxIO0FBU0M7RUFDQyxhQUFBO0VBQ0EsNkJBQUE7QUFQRjtBQVNFO0VBQ0MsWUFBQTtFQUNBLFdBQUE7QUFQSDtBQWFBO0VBQ0MsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFWRCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcblx0LS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1nL2JnLnBuZzEnKTtcblx0LS1iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHQtLWJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblxuXHQubG9nbyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdG1hcmdpbi10b3A6IDNyZW07XG5cdFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcblx0fVxuXG5cdGZvcm0ge1xuXHRcdG1pbi1oZWlnaHQ6IDI1MHB4O1xuXHR9XG5cblx0LnV0aWxpdHkge1xuXHRcdG1hcmdpbi1ib3R0b206IDEuMnJlbTtcblx0fVxuXG5cdC50ZXh0LWlucHV0IHtcblx0XHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cdFx0Ym9yZGVyLXJhZGl1czogMzVweDtcblx0fVxuXG5cdC5mb3Jnb3QtcGFzc3dvcmQge1xuXHRcdGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cdFx0Zm9udC1zaXplOiAwLjhyZW07XG5cdFx0bWFyZ2luLWJvdHRvbTogMnJlbTtcblx0fVxuXG5cdC5sb2dpbiBpb24tYnV0dG9uIHtcblx0XHQtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblx0fVxuXG5cdC5zaWduLXVwIHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Zm9udC1zaXplOiAwLjlyZW07XG5cdFx0bWFyZ2luLXRvcDogMnJlbTtcblxuXHRcdGlvbi1sYWJlbCB7XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0fVxuXHR9XG5cblx0LnNvY2lhbC1pY29ucyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcblxuXHRcdGltZyB7XG5cdFx0XHRoZWlnaHQ6IDMwcHg7XG5cdFx0XHR3aWR0aDogMzBweDtcblx0XHR9XG5cdH1cbn1cblxuLy8gbG9hZGluZ1xuLnRvYXN0LWNvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHRvcDogYXV0bztcblx0bWFyZ2luLWJvdHRvbTogODBweDtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG5cdGJvdHRvbTogMDtcblx0ei1pbmRleDogOTk5O1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/login/login.page.ts":
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /*! exports provided: LoginPage */

    /***/
    function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
        return LoginPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _shared_game_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../shared/game-service.service */
      "./src/app/shared/game-service.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _shared_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared/user.service */
      "./src/app/shared/user.service.ts"); // import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


      var LoginPage = /*#__PURE__*/function () {
        function LoginPage(loadingController, fb, alertController, toastController, gameService, router, userService) {
          _classCallCheck(this, LoginPage);

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

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loading = false;
          }
        }, {
          key: "presentFailNetwork",
          value: function presentFailNetwork() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: 'No internet connection!!!',
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "login",
          value: function login(form) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log('login fire');
                      this.loading = true;
                      this.userService.login(this.model).subscribe(function (response) {
                        _this.userService.setToken(response['token']);

                        _this.userService.loadBalance();

                        _this.loading = false;

                        _this.router.navigate(['/tabs/gamesection']);
                      }, function (err) {
                        _this.loading = false;

                        _this.gameService.presentToast(err.error.message);

                        console.log('LOGIN ERROR', err.error.message); // this.loginToast(message);
                      });

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "register",
          value: function register() {
            this.router.navigate(['/register']);
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        header: 'Ooops!',
                        message: " <strong class=\"text-danger\"> ".concat(msg, "</strong>"),
                        buttons: [{
                          text: 'Try again',
                          handler: function handler() {
                            console.log('Confirm Okay');
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return LoginPage;
      }();

      LoginPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _shared_game_service_service__WEBPACK_IMPORTED_MODULE_1__["GameServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _shared_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }];
      };

      LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./login.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./login.page.scss */
        "./src/app/login/login.page.scss"))["default"]]
      })], LoginPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=login-login-module-es5.js.map