(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <section class=\"ion-padding logo\">\n          <img src=\"assets/img/ISABI LOGO GREEN.png\"\n               alt=\"isabi logo\"\n               title=\"isabi logo\" />\n        </section>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size-xs=\"10\"\n               offset-xs=\"1\"\n               size-sm=\"8\"\n               offset-sm=\"2\"\n               size-md=\"6\"\n               offset-md=\"3\"\n               size-lg=\"4\"\n               offset-lg=\"4\">\n        <form class=\"form\"\n              #signUpForm=\"ngForm\"\n              name=\"signUpForm\"\n              (submit)=\"register()\">\n\n          <div *ngIf=\"loading\">\n            <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n          </div>\n\n          <!-- username and validation -->\n          <div class=\"utility\">\n            <div class=\"text-input\">\n              <ion-input class=\"pl-4 pr-2\"\n                         #username=\"ngModel\"\n                         placeholder=\"Username\"\n                         name=\"username\"\n                         position=\"floating\"\n                         [(ngModel)]=\"model.username\"\n                         type=\"text\"\n                         required\n                         ngControl=\"title\">\n                <ion-icon class=\"mr-2\"\n                          name=\"person-outline\"></ion-icon>\n              </ion-input>\n            </div>\n\n            <div *ngIf=\"username.dirty && username.errors\"\n                 class=\" text-danger text-center\">\n              <small class=\"text-danger \">username is required</small>\n            </div>\n          </div>\n\n\n          <!-- email and validation\n          TO DO - implement validation for email field -->\n\n          <div class=\"utility\">\n            <div class=\"text-input\">\n              <ion-input class=\"pl-4 pr-2\"\n                         placeholder=\"example@mail.com\"\n                         name=\"email\"\n                         [(ngModel)]=\"model.email\"\n                         position=\"floating\"\n                         type=\"email\"\n                         required\n                         ngControl=\"title\">\n                <ion-icon class=\"mr-2\"\n                          name=\"mail-outline\"></ion-icon>\n              </ion-input>\n            </div>\n          </div>\n          <!-- <div *ngIf=\"email.dirty && email.errors\"\n               class=\" text-danger text-center\">\n            <small class=\"text-danger \"\n                   *ngIf=\"password?.errors.invalid\">email is required</small>\n          </div> -->\n\n          <!-- phone number and validation -->\n\n          <div class=\"utility\">\n            <div class=\"text-input\">\n              <ion-input class=\"pl-4 pr-2\"\n                         #number=\"ngModel\"\n                         name=\"number\"\n                         [(ngModel)]=\"model.number\"\n                         placeholder=\"Phone\"\n                         type=\"text\"\n                         required\n                         minlength=\"11\"\n                         [pattern]=\"phoneRegex\"\n                         ngControl=\"title\">\n                <ion-icon class=\"mr-2\"\n                          name=\"phone-portrait-outline\"></ion-icon>\n              </ion-input>\n            </div>\n\n\n            <div *ngIf=\"number.dirty && number.errors\"\n                 class=\"text-center\">\n              <small class=\"text-danger \"\n                     *ngIf=\"number?.errors.required\">phone is required</small>\n            </div>\n          </div>\n\n          <!-- password and validation -->\n          <div class=\"utility\">\n            <div class=\"text-input\">\n              <ion-input class=\"pl-4 pr-2\"\n                         #password=\"ngModel\"\n                         name=\"password\"\n                         placeholder=\"Password\"\n                         position=\"floating\"\n                         [(ngModel)]=\"model.password\"\n                         type=\"password\"\n                         required\n                         ngControl=\"title\"\n                         minlength=\"6\">\n                <ion-icon class=\"mr-2\"\n                          name=\"lock-closed-outline\"></ion-icon>\n              </ion-input>\n            </div>\n\n            <div *ngIf=\"password.dirty && password.errors\"\n                 class=\" text-danger text-center\">\n              <small class=\"text-danger \"\n                     *ngIf=\"password?.errors.invalid\">password is required</small>\n              <small class=\"text-danger \"\n                     *ngIf=\"password?.errors.minlength\">password must be at least 6 characters</small>\n            </div>\n          </div>\n\n          <div *ngIf=\"password.dirty && password.value !== conf_password.value\"\n               class=\" text-center\">\n            <small class=\"text-danger \">password not matched</small>\n          </div>\n\n          <div class=\"text-input\">\n            <ion-input class=\"pl-4 pr-2\"\n                       #conf_password=\"ngModel\"\n                       placeholder=\"Confirm password\"\n                       name=\"password\"\n                       position=\"floating\"\n                       [(ngModel)]=\"model.conf_password\"\n                       type=\"password\"\n                       required\n                       ngControl=\"title\"\n                       minlength=\"6\">\n              <ion-icon class=\"mr-2\"\n                        name=\"lock-closed-outline\"></ion-icon>\n            </ion-input>\n          </div>\n\n\n          <ion-row>\n            <ion-col class=\"d-flex align-items-center ion-margin-top\">\n              <ion-checkbox class=\"mr-2\"\n                            mode=\"ios\"\n                            disabled=\"false\"></ion-checkbox>\n              <a [routerLink]=\"['/privacypolicy']\">\n                <ion-label>Privacy Policy, Terms & Conditions</ion-label>\n              </a>\n            </ion-col>\n          </ion-row>\n\n          <div class=\"signup-block\">\n            <ion-button class=\"login\"\n                        shape=\"round\"\n                        [disabled]=\"!signUpForm.valid && password.value == true\"\n                        expand=\"block\"\n                        type=\"submit\">Sign up</ion-button>\n          </div>\n        </form>\n\n        <div class=\"ion-text-center mt-5 login\">\n          <p class=\"text-dark\">Already have an account?\n            <a [routerLink]=\"['/login']\"\n               class=\"font-weight-bold text-dark\">Login</a>\n          </p>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col class=\"ion-text-center mt-3\">\n        <ion-label>Sign up with</ion-label>\n        <ion-row>\n          <ion-col class=\"social-icons\"\n                   size-xs=\"6\"\n                   offset-xs=\"3\"\n                   size-sm=\"6\"\n                   offset-sm=\"3\"\n                   size-md=\"3\"\n                   offset-md=\"4.5\"\n                   size-lg=\"2\"\n                   offset-lg=\"5\">\n            <div>\n              <img src=\"/assets/img/Facebook_Logo.png\"\n                   alt=\"facebook logo\" />\n            </div>\n            <div>\n              <img src=\"assets/img/google-plus-logo.png\"\n                   alt=\"google plus logo\" />\n            </div>\n            <div>\n              <img src=\"assets/img/twitter--logo.png\"\n                   alt=\"twitter logo\" />\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- loader -->\n  <div *ngIf=\"loading\"\n       class=\" \">\n    <div class=\"toast-container \">\n      <div class=\"lds-roller\"> </div>\n    </div>\n  </div>\n\n  <!-- fab button with options on click -->\n  <!-- <ion-fab horizontal=\"start\"\n             vertical=\"bottom\"\n             slot=\"fixed\">\n      <ion-fab-button color=\"success\">\n        <ion-icon name=\"alert\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-list side=\"top\">\n        <ion-button color=\"success\">\n          <a class=\" info text-white\"\n             [routerLink]=\"['/testimonials']\">\n            <ion-icon name=\"trophy\"></ion-icon> TESTIMONIALS\n          </a>\n        </ion-button>\n        <ion-button color=\"success\">\n          <a class=\" info text-white\"\n             [routerLink]=\"['/howtoplay']\">\n            <ion-icon name=\"logo-game-controller-a\"></ion-icon> HOW TO PLAY\n          </a>\n        </ion-button>\n        <ion-button color=\"success\">\n          <a class=\" info text-white\"\n             [routerLink]=\"['/contactus']\">\n            <ion-icon name=\"chatbubbles\"></ion-icon> CONTACT US\n          </a>\n        </ion-button>\n        <ion-button color=\"success\">\n          <a class=\"info text-white  \"\n             href=\"https:/i-sabi.com/faq/\">\n            <ion-icon name=\"help\"></ion-icon> FAQ\n          </a>\n        </ion-button>\n        <ion-button color=\"success\">\n          <a class=\"info text-white  \"\n             href=\"https:/i-sabi.com/privacy-policy-2/\">\n            <ion-icon name=\"list\"></ion-icon> POLICY\n          </a>\n        </ion-button>\n      </ion-fab-list>\n    </ion-fab> -->\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/register/register-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/register/register-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: RegisterPageRoutingModule */

    /***/
    function srcAppRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
        return RegisterPageRoutingModule;
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


      var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register.page */
      "./src/app/register/register.page.ts");

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
      }];

      var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
        _classCallCheck(this, RegisterPageRoutingModule);
      };

      RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], RegisterPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/register/register.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/register/register.module.ts ***!
      \*********************************************/

    /*! exports provided: RegisterPageModule */

    /***/
    function srcAppRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
        return RegisterPageModule;
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


      var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./register-routing.module */
      "./src/app/register/register-routing.module.ts");
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register.page */
      "./src/app/register/register.page.ts");

      var RegisterPageModule = function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      };

      RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
      })], RegisterPageModule);
      /***/
    },

    /***/
    "./src/app/register/register.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/register/register.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: var(--ion-color-primary-contrast);\n}\nion-content .logo {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 3rem;\n  margin-bottom: 2rem;\n}\nion-content form {\n  min-height: 250px;\n}\nion-content .utility {\n  margin-bottom: 1.2rem;\n}\nion-content .text-input {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 35px;\n}\nion-content .forgot-password {\n  color: var(--ion-color-primary);\n  font-size: 0.8rem;\n  margin-bottom: 2rem;\n}\nion-content .signup-block {\n  margin-top: 3rem;\n}\nion-content .login ion-label {\n  cursor: pointer;\n}\nion-content .social-icons {\n  display: flex;\n  justify-content: space-evenly;\n}\nion-content .social-icons img {\n  height: 30px;\n  width: 30px;\n}\n.toast-container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  top: auto;\n  margin-bottom: 80px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsK0NBQUE7QUFDRDtBQUNDO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFFQztFQUNDLGlCQUFBO0FBQUY7QUFHQztFQUNDLHFCQUFBO0FBREY7QUFJQztFQUNDLDBDQUFBO0VBQ0EsbUJBQUE7QUFGRjtBQUtDO0VBQ0MsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7QUFNQztFQUNDLGdCQUFBO0FBSkY7QUFPQztFQUNDLGVBQUE7QUFMRjtBQVFDO0VBQ0MsYUFBQTtFQUNBLDZCQUFBO0FBTkY7QUFRRTtFQUNDLFlBQUE7RUFDQSxXQUFBO0FBTkg7QUFZQTtFQUNDLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBVEQiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG5cdC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuXG5cdC5sb2dvIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0bWFyZ2luLXRvcDogM3JlbTtcblx0XHRtYXJnaW4tYm90dG9tOiAycmVtO1xuXHR9XG5cblx0Zm9ybSB7XG5cdFx0bWluLWhlaWdodDogMjUwcHg7XG5cdH1cblxuXHQudXRpbGl0eSB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMS4ycmVtO1xuXHR9XG5cblx0LnRleHQtaW5wdXQge1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblx0XHRib3JkZXItcmFkaXVzOiAzNXB4O1xuXHR9XG5cblx0LmZvcmdvdC1wYXNzd29yZCB7XG5cdFx0Y29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblx0XHRmb250LXNpemU6IDAuOHJlbTtcblx0XHRtYXJnaW4tYm90dG9tOiAycmVtO1xuXHR9XG5cblx0LnNpZ251cC1ibG9jayB7XG5cdFx0bWFyZ2luLXRvcDogM3JlbTtcblx0fVxuXG5cdC5sb2dpbiBpb24tbGFiZWwge1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcblx0fVxuXG5cdC5zb2NpYWwtaWNvbnMge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cblx0XHRpbWcge1xuXHRcdFx0aGVpZ2h0OiAzMHB4O1xuXHRcdFx0d2lkdGg6IDMwcHg7XG5cdFx0fVxuXHR9XG59XG5cbi8vIGxvYWRpbmdcbi50b2FzdC1jb250YWluZXIge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR0b3A6IGF1dG87XG5cdG1hcmdpbi1ib3R0b206IDgwcHg7XG5cdGxlZnQ6IDA7XG5cdHJpZ2h0OiAwO1xuXHRib3R0b206IDA7XG5cdHotaW5kZXg6IDk5OTtcbn1cblxuLy8gbmV3IHN0eWxlcyBhYm92ZVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/register/register.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/register/register.page.ts ***!
      \*******************************************/

    /*! exports provided: RegisterPage */

    /***/
    function srcAppRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
        return RegisterPage;
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


      var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/user.service */
      "./src/app/shared/user.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _services_logic_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/logic.service */
      "./src/app/services/logic.service.ts");

      var RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(userService, logicService, gameService, router) {
          _classCallCheck(this, RegisterPage);

          this.userService = userService;
          this.logicService = logicService;
          this.gameService = gameService;
          this.router = router;
          this.phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
          this.model = {
            number: '',
            password: '',
            email: '',
            username: '',
            conf_password: ''
          };

          if (this.userService.networkDisconnet) {// this.presentFailNetwork();
          }
        }

        _createClass(RegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "register",
          value: function register() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.loading = true;
                      console.log(this.model);
                      this.userService.registerUser(this.model).subscribe(function (response) {
                        _this.loading = false;
                        var message = "Registraion successful!";

                        _this.logicService.presentSucess('success', 'registration successful', 'continue');
                      }, function (error) {
                        _this.loading = false;
                        console.log(error);
                        var message = error.error;

                        _this.gameService.presentToast(message);
                      });

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return RegisterPage;
      }();

      RegisterPage.ctorParameters = function () {
        return [{
          type: _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _services_logic_service__WEBPACK_IMPORTED_MODULE_5__["LogicService"]
        }, {
          type: _shared_game_service_service__WEBPACK_IMPORTED_MODULE_1__["GameServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./register.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./register.page.scss */
        "./src/app/register/register.page.scss"))["default"]]
      })], RegisterPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=register-register-module-es5.js.map