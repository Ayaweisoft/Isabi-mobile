(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-account-admin-account-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-account/admin-account.page.html":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-account/admin-account.page.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminAccountAdminAccountPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    \n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons> <div class=\"row d-flex justify-content-center\">\n      <img class=\"rounded-top\"  src=\"../../../assets/icon/Logoicon.png\">\n    </div> \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-segment scrollable=\"true\" value=\"app_date\" (ionChange)=\"segmentChanged($event)\">\n  <ion-segment-button value=\"app_date\">\n    <ion-icon name=\"calendar\"></ion-icon>\n    <ion-label>App date</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"sms\">\n    <ion-icon name=\"mail\"></ion-icon>\n    <ion-label>Sms</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"video_link\">\n    <ion-icon name=\"play\"></ion-icon>\n        <ion-label>Video link</ion-label>\n  </ion-segment-button>\n  <ion-segment-button [routerLink]=\"['/tabs/admin-event']\"  value=\"create_event\">\n    <ion-icon name=\"information-circle\"></ion-icon>\n        <ion-label>Event</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"game_amount\">\n    <ion-icon name=\"game-controller\"></ion-icon>\n        <ion-label>Amount</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value=\"promo_code\">\n    <ion-icon name=\"cash\"></ion-icon>\n        <ion-label>Promo</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n<ion-content>\n\n\n\n  <!-- [routerLink]=\"['/tabs/admin-event']\" -->\n\n    <br>\n    <ion-badge class=\"text-center\">{{gameService.applicationDate}} </ion-badge>\n    \n    <div *ngIf=\" segment ==='app_date'\" style=\"background-color: darkgreen; border: 3px black;\" class=\"p-5 \">\n      <form #dateform name=\"dateform\" (submit)=\"submitDate(dateform)\">\n        <ion-item>\n            <ion-label  class=\"ml-3\"  \n             position=\"floating\">enter date in format</ion-label>\n          <ion-input #setdate name=\"setdate\" [(ngModel)]=\"model.date\" placeholder=\"jan 5, 2019 06:00:00\"></ion-input>\n         </ion-item>\n         <ion-button type=\"submit\"> <ion-icon name=\"checkmark\" size=\"large\"></ion-icon> </ion-button>\n        </form>\n\n         <!-- <p class=\"text-white text-center font-weight-bold\">jan 5, 2019 06:00:00</p> -->\n         <ion-button size=\"large\" [disabled]=\"!setdate.value\"\n          (click)=\"activateDate()\">ACTIVATE </ion-button>\n    </div>\n\n\n    <!-- video form -->\n    <div *ngIf=\" segment === 'video_link'\">\n    <form #youtubeform name=\"youtubeform\" (submit)=\"submityoutubeLink(youtubeform)\">\n      <ion-item>\n          <ion-label  class=\"ml-3\"  \n           position=\"floating\">enter date in format</ion-label>\n        <ion-input #youtubeUrl name=\"youtubeUrl\" [(ngModel)]=\"model.youtubeUrl\" placeholder=\"https://.....\"></ion-input>\n       </ion-item>\n       <ion-button type=\"submit\"> submit youtube link </ion-button>\n      </form>\n    </div>\n      <!-- end video form -->\n\n      <!-- sms section -->\n      <div *ngIf=\" segment === 'sms'\" style=\"padding-top: 40px;\">\n        <form #smsform id=\"smsform\" name=\"youtubeform\" (submit)=\"submitSms(smsform)\">\n          <ion-item >\n            <textarea rows=\"5\" cols=\"40\" placeholder=\"Enter sms here...\" #sms name=\"sms\" [(ngModel)]=\"model.sms\" placeholder=\"Enter sms here\" ></textarea>\n           </ion-item>\n           <ion-button type=\"submit\" [disabled]=\"!sms.value\"> SEND</ion-button>\n          </form>\n        </div>\n        <!-- end sms section -->\n\n        <div *ngIf=\"segment === 'game_amount'\">\n\n          <h3>Amount : {{currentAmount | currency:'₦'}} </h3>\n          <ion-card color=\"success\"> \n            <ion-item class=\"p-5\">\n              <ion-label position=\"floating\" >Game session amount</ion-label>\n              <ion-input  [(ngModel)]=\"amountModel.amount\" type=\"number\" ></ion-input>\n            </ion-item>\n\n            <div class=\"ion-text-center\">\n              <ion-button [disabled]=\"!amountModel.amount\" (click)=\"submitGameAmount()\">\n                Submit\n              </ion-button>\n            </div>\n          </ion-card>\n        </div>\n\n        <!--  proo code -->\n        <div *ngIf=\"segment === 'promo_code'\">\n\n          <ion-grid fixed>\n            <ion-row>\n              <ion-col size=\"10\" offset=\"1\">\n\n                <ion-card color=\"success\"> \n                  <ion-item class=\"p-1\">\n                    <ion-label position=\"floating\" > amount</ion-label>\n                    <ion-input  [(ngModel)]=\"promoCode.amount\" type=\"number\" ></ion-input>\n                  </ion-item>\n                  <ion-item class=\"p-1\">\n                    <ion-label position=\"floating\" > code</ion-label>\n                    <ion-input  [(ngModel)]=\"promoCode.promoCode\" type=\"text\" ></ion-input>\n                  </ion-item>\n                  <ion-item class=\"p-1\">\n                    <ion-label position=\"floating\" > slot</ion-label>\n                    <ion-input  [(ngModel)]=\"promoCode.promoSlot\" type=\"number\" ></ion-input>\n                  </ion-item>\n                  <!-- <ion-item class=\"p-1\">\n                    <ion-label position=\"floating\" > code </ion-label>\n                    <ion-input  [(ngModel)]=\"promoCode.promoCode\" type=\"number\" ></ion-input>\n                 \n                  </ion-item> -->\n                  <ion-item>\n                    <ion-label>start </ion-label>\n                    <ion-input  [(ngModel)]=\"promoCode.startDate\" type=\"date\" ></ion-input>\n                  </ion-item>\n                  <ion-item>\n                    <ion-label>end </ion-label>\n                    <ion-input  [(ngModel)]=\"promoCode.endDate\" type=\"date\" ></ion-input>\n                  </ion-item>\n      \n                  <div class=\"ion-text-center\">\n                    <ion-button [disabled]=\"!promoCode.promoCode\" (click)=\"submitPromo()\">\n                      Submit\n                    </ion-button>\n                  </div>\n                </ion-card>\n\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        \n        </div>\n       \n\n    <div *ngIf=\"loading\">\n      <ion-spinner slot=\"middle\"></ion-spinner>\n      <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n      <p class=\"p-5 bg-dark text-white\">loading </p>\n    </div>\n\n\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/admin-account/admin-account.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/admin-account/admin-account.module.ts ***!
      \*******************************************************/

    /*! exports provided: AdminAccountPageModule */

    /***/
    function srcAppAdminAccountAdminAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminAccountPageModule", function () {
        return AdminAccountPageModule;
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


      var _admin_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin-account.page */
      "./src/app/admin-account/admin-account.page.ts");

      var routes = [{
        path: '',
        component: _admin_account_page__WEBPACK_IMPORTED_MODULE_6__["AdminAccountPage"]
      }];

      var AdminAccountPageModule = function AdminAccountPageModule() {
        _classCallCheck(this, AdminAccountPageModule);
      };

      AdminAccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_admin_account_page__WEBPACK_IMPORTED_MODULE_6__["AdminAccountPage"]]
      })], AdminAccountPageModule);
      /***/
    },

    /***/
    "./src/app/admin-account/admin-account.page.scss":
    /*!*******************************************************!*\
      !*** ./src/app/admin-account/admin-account.page.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminAccountAdminAccountPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#smsform {\n  width: calc(100% - 10px);\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tYWNjb3VudC9hZG1pbi1hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluLWFjY291bnQvYWRtaW4tYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc21zZm9ybSB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4vLyAuY29udGVudHtcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltZy9hcHAtYmcucG5nXCIpO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcbi8vICAgICAgcG9zaXRpb246IGZpeGVkO1xuLy8gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXG4vLyAgIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/admin-account/admin-account.page.ts":
    /*!*****************************************************!*\
      !*** ./src/app/admin-account/admin-account.page.ts ***!
      \*****************************************************/

    /*! exports provided: AdminAccountPage */

    /***/
    function srcAppAdminAccountAdminAccountPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminAccountPage", function () {
        return AdminAccountPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _shared_game_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../shared/game-service.service */
      "./src/app/shared/game-service.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _adminnavigation_adminnavigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../adminnavigation/adminnavigation.component */
      "./src/app/adminnavigation/adminnavigation.component.ts");
      /* harmony import */


      var _services_behavour_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/behavour.service */
      "./src/app/services/behavour.service.ts");
      /* harmony import */


      var _services_logic_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/logic.service */
      "./src/app/services/logic.service.ts");

      var AdminAccountPage = /*#__PURE__*/function () {
        function AdminAccountPage(gameService, router, logicService, behaviorService, popoverController) {
          _classCallCheck(this, AdminAccountPage);

          this.gameService = gameService;
          this.router = router;
          this.logicService = logicService;
          this.behaviorService = behaviorService;
          this.popoverController = popoverController;
          this.segment = 'app_date';
          this.loading = false;
          this.amountModel = {
            amount: null,
            admin: 'ADMIN'
          };
          this.model = {
            activate: '',
            date: '',
            sms: '',
            youtubeUrl: ''
          };
          this.promoCode = {
            amount: null,
            startDate: null,
            endDate: null,
            promoCode: '',
            promoSlot: null
          };
        }

        _createClass(AdminAccountPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.behaviorService.getGameAmount().subscribe(function (amount) {
              _this.currentAmount = amount;
            });
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged($event) {
            console.log('event...', $event);
            this.segment = $event.detail.value;
          }
        }, {
          key: "selectedDate",
          value: function selectedDate(event) {
            console.log(event);
          }
        }, {
          key: "submitDate",
          value: function submitDate(form) {
            console.log(this.model.date);
          }
        }, {
          key: "submitSms",
          value: function submitSms(form) {
            var _this2 = this;

            console.log(this.model.sms);
            var sms = {
              sms: this.model.sms
            };
            this.gameService.sendSms(sms).subscribe(function (res) {
              console.log(res);
              var message = res['message'];

              _this2.gameService.presentToast(message);
            });
          }
        }, {
          key: "activateDate",
          value: function activateDate() {
            var _this3 = this;

            var adminDate = this.model.date;
            this.loading = true;
            this.gameService.setAdminDate(adminDate).subscribe(function (res) {
              _this3.loading = false;

              _this3.gameService.getAdminDate();

              _this3.router.navigateByUrl('/tabs/gamesection');
            }, function (err) {
              _this3.loading = false;
            });
          }
        }, {
          key: "submityoutubeLink",
          value: function submityoutubeLink(link) {
            var _this4 = this;

            this.loading = true;
            var body = {
              "link": this.model.youtubeUrl
            };
            console.log(body);
            this.gameService.setYoutubeDate(body).subscribe(function (res) {
              _this4.loading = false;
              console.log(res);
            }, function (err) {
              _this4.loading = false;
              console.log(err);
            });
          }
        }, {
          key: "presentNavigation",
          value: function presentNavigation() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var popover;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.popoverController.create({
                        component: _adminnavigation_adminnavigation_component__WEBPACK_IMPORTED_MODULE_5__["AdminnavigationComponent"],
                        translucent: true
                      });

                    case 2:
                      popover = _context.sent;
                      _context.next = 5;
                      return popover.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "createContestant",
          value: function createContestant(form) {
            console.log(form);
          }
        }, {
          key: "submitGameAmount",
          value: function submitGameAmount() {
            var _this5 = this;

            this.loading = true;
            this.gameService.setGameAmount(this.amountModel).subscribe(function (res) {
              console.log('res ', res);
              _this5.loading = false;

              _this5.behaviorService.setGameAmount(res.data.amount);

              _this5.amountModel.amount = undefined;
            }, function (err) {
              console.log(err);
              _this5.loading = false;
            });
          }
        }, {
          key: "submitPromo",
          value: function submitPromo() {
            var _this6 = this;

            this.loading = true;
            this.gameService.savePromo(this.promoCode).subscribe(function (res) {
              _this6.loading = false;

              _this6.logicService.presentAlert('Success ', 'promo code has beend saved successfully.');
            }, function (err) {
              _this6.loading = false;

              _this6.logicService.presentAlert('error ', 'error saving promo code');
            });
          }
        }]);

        return AdminAccountPage;
      }();

      AdminAccountPage.ctorParameters = function () {
        return [{
          type: _shared_game_service_service__WEBPACK_IMPORTED_MODULE_2__["GameServiceService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_logic_service__WEBPACK_IMPORTED_MODULE_7__["LogicService"]
        }, {
          type: _services_behavour_service__WEBPACK_IMPORTED_MODULE_6__["BehavourService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }];
      };

      AdminAccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./admin-account.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-account/admin-account.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./admin-account.page.scss */
        "./src/app/admin-account/admin-account.page.scss"))["default"]]
      })], AdminAccountPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=admin-account-admin-account-module-es5.js.map