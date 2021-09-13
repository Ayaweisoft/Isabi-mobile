(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["adminquery-adminquery-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/adminquery/adminquery.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminquery/adminquery.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminqueryAdminqueryPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-header>\n  <ion-toolbar>\n    \n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons> <div class=\"row d-flex justify-content-center\">\n      <img class=\"rounded-top\"  src=\"../../../assets/icon/Logoicon.png\">\n    </div> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n<div class=\"content\">\n<ion-col>\n    <form class=\"mt-5 form\" #loginForm \n    ngform=\"search\" name=\"form\"  (submit)=\"queryUser()\">\n    <h1  class=\"text-center text-white\">Search User</h1>\n    <div *ngIf=\"loading\"><ion-progress-bar type=\"indeterminate\"></ion-progress-bar></div>\n     <ion-item  class=\"text-input mb-2\">\n         <ion-label class=\"ml-3\" position=\"floating\">Enter username</ion-label>\n         <ion-input class=\"ml-3 \" type=\"text\" #username name=\"username\" clearInput [(ngModel)]=\"model.query\"\n           required=\"true\"  ></ion-input>\n           <ion-button slot=\"end\" size=\"large\" [disabled]=\"!username.value\" \n           type=\"submit\" color=\"success\" (submit)=\"queryUser()\"\n         ><ion-icon size=\"small\" color=\"light\" name=\"search\"></ion-icon> </ion-button>\n     </ion-item>\n   \n   \n   </form>\n  </ion-col>\n\n  <ion-col *ngIf=\"loading\" class=\"d-fllex justify-content-center row\">\n    <!-- Crescent -->\n    <div>\n      <ion-spinner name=\"crescent\" ></ion-spinner>\n    </div>\n    \n  </ion-col>\n\n \n\n  <ion-col *ngIf=\"userDetails\" >\n    <ion-card color=\"success\"  class=\" text-center\">\n      <ion-card-header>details</ion-card-header>\n      <ion-list>\n        <h4  class=\"font-weight-bold\">  {{userDetails.username}} </h4> <br>\n      </ion-list>\n\n      <ion-list>\n        <p>Balance : # {{userDetails.balance | number }} </p>\n      </ion-list>\n      <ion-list>\n        <p>Role :  {{userDetails.role }} </p>\n      </ion-list>\n      <ion-list>\n        <p>Phone : {{userDetails.phone }} </p>\n      </ion-list>\n      <ion-list>\n        <p>ID :  {{userDetails.user_id }} </p>\n      </ion-list>\n    </ion-card>\n  </ion-col>\n\n<ion-col *ngIf=\"profile\">\n  <ion-card color=\"success\" class=\" text-center\">\n    <ion-card-header>INFO</ion-card-header>\n    <ion-list>\n      <p> Name {{profile.fullname}}</p>\n    </ion-list>\n    <ion-list>\n      <p> Nationality {{profile.nationality}}</p>\n    </ion-list>\n     <ion-list>\n      <p> Account No :  {{profile.acount_number}}</p>\n     </ion-list>\n      <ion-list>\n        <p> Account Name :  {{profile.account_name}}</p>\n      </ion-list>\n      <ion-list>\n        <p> Bank : {{profile.bank}}</p>\n      </ion-list>\n      <ion-list>\n        <p> Email : {{profile.email}}</p>\n      </ion-list>\n   \n  </ion-card>\n\n</ion-col>\n\n\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/adminquery/adminquery.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/adminquery/adminquery.module.ts ***!
      \*************************************************/

    /*! exports provided: AdminqueryPageModule */

    /***/
    function srcAppAdminqueryAdminqueryModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminqueryPageModule", function () {
        return AdminqueryPageModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _adminquery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./adminquery.page */
      "./src/app/adminquery/adminquery.page.ts");

      var routes = [{
        path: '',
        component: _adminquery_page__WEBPACK_IMPORTED_MODULE_6__["AdminqueryPage"]
      }];

      var AdminqueryPageModule = function AdminqueryPageModule() {
        _classCallCheck(this, AdminqueryPageModule);
      };

      AdminqueryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_adminquery_page__WEBPACK_IMPORTED_MODULE_6__["AdminqueryPage"]]
      })], AdminqueryPageModule);
      /***/
    },

    /***/
    "./src/app/adminquery/adminquery.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/adminquery/adminquery.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminqueryAdminqueryPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  background-image: url('app-bg.png');\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\nform {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5xdWVyeS9hZG1pbnF1ZXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQywyQkFBQTtFQUVBLHNCQUFBO0VBQ0MsNEJBQUE7QUFBTjs7QUFJRztFQUNHLFVBQUE7QUFETiIsImZpbGUiOiJzcmMvYXBwL2FkbWlucXVlcnkvYWRtaW5xdWVyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2FwcC1iZy5wbmdcIik7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxuICAgIC8vICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcbiAgfVxuICBcbiAgXG4gICBmb3Jte1xuICAgICAgb3BhY2l0eTogMTsgXG4gICAgXG4gIFxuICAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/adminquery/adminquery.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/adminquery/adminquery.page.ts ***!
      \***********************************************/

    /*! exports provided: AdminqueryPage */

    /***/
    function srcAppAdminqueryAdminqueryPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminqueryPage", function () {
        return AdminqueryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_shared_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/account.service */
      "./src/app/shared/account.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _adminnavigation_adminnavigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../adminnavigation/adminnavigation.component */
      "./src/app/adminnavigation/adminnavigation.component.ts");

      var AdminqueryPage = /*#__PURE__*/function () {
        function AdminqueryPage(accountService, toastController, popoverController, alertController, loadingController) {
          _classCallCheck(this, AdminqueryPage);

          this.accountService = accountService;
          this.toastController = toastController;
          this.popoverController = popoverController;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.loading = false;
          this.model = {
            query: ''
          };
        }

        _createClass(AdminqueryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "queryUser",
          value: function queryUser() {
            var _this = this;

            this.loading = true;
            console.log(this.model.query);
            var obj = {
              user: this.model.query
            };
            this.accountService.queryUser(obj).subscribe(function (val) {
              _this.loading = false;
              _this.userDetails = val['userDetails'];
              _this.profile = val['profile'];
              console.log(_this.userDetails);
              console.log(_this.profile);
            }, function (err) {
              _this.loading = false;

              _this.presentToast();

              console.log(err);
            });
          }
        }, {
          key: "presentToast",
          value: function presentToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: "User not found! check spelling and caps",
                        position: 'middle',
                        duration: 3000
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
          key: "presentNavigation",
          value: function presentNavigation() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var popover;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.popoverController.create({
                        component: _adminnavigation_adminnavigation_component__WEBPACK_IMPORTED_MODULE_4__["AdminnavigationComponent"],
                        translucent: true
                      });

                    case 2:
                      popover = _context2.sent;
                      _context2.next = 5;
                      return popover.present();

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return AdminqueryPage;
      }();

      AdminqueryPage.ctorParameters = function () {
        return [{
          type: src_app_shared_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }];
      };

      AdminqueryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-adminquery',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./adminquery.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/adminquery/adminquery.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./adminquery.page.scss */
        "./src/app/adminquery/adminquery.page.scss"))["default"]]
      })], AdminqueryPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=adminquery-adminquery-module-es5.js.map