(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payouts-payouts-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/payouts/payouts.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payouts/payouts.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPayoutsPayoutsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-img class=\"rounded-top\"  src=\"../../assets/icon/Logoicon.png\"></ion-img>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"content\">\n    <ion-card class=\"pt-5\">\n      <div class=\"runner-up\" *ngFor=\"let item of leaderBoard; index as i\">\n        <ion-list class=\"grey lighten-4 p-2\">\n          <ion-row class=\" winner lighten-2 p-2\">\n            <ion-col> \n              <ion-icon color=\"success\" size=\"large\" name=\"person\"></ion-icon>\n              <ion-chip class=\"position green lighten-2 font-weight-bold  animated infinite rubberBand\"\n               > {{i + 1}} </ion-chip>\n            </ion-col>\n            <ion-col>\n              <h6 class=\" leader \"> {{item.user}} </h6>\n            </ion-col>\n            <ion-col>\n              <small class=\"time_display text-success font-weight-bold\n                                    \"> ELAPSED {{item.minutes}} min : {{item.seconds}} secs </small>\n            </ion-col>\n          </ion-row>\n          <ion-button expand=\"block\" (click)=\"payWinner(item.user_id, item._id)\">pay - {{item.user}} </ion-button>\n        </ion-list>\n       <br>\n      </div>\n    </ion-card>\n  \n  \n     <!-- loader -->\n     <div  *ngIf=\"loading\">\n      <div class=\"toast-container \">\n        <div class=\"lds-roller\">\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div>\n  \n  </div>\n  </ion-content> \n";
      /***/
    },

    /***/
    "./src/app/payouts/payouts.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/payouts/payouts.module.ts ***!
      \*******************************************/

    /*! exports provided: PayoutsPageModule */

    /***/
    function srcAppPayoutsPayoutsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PayoutsPageModule", function () {
        return PayoutsPageModule;
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


      var _payouts_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./payouts.page */
      "./src/app/payouts/payouts.page.ts");

      var routes = [{
        path: '',
        component: _payouts_page__WEBPACK_IMPORTED_MODULE_6__["PayoutsPage"]
      }];

      var PayoutsPageModule = function PayoutsPageModule() {
        _classCallCheck(this, PayoutsPageModule);
      };

      PayoutsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_payouts_page__WEBPACK_IMPORTED_MODULE_6__["PayoutsPage"]]
      })], PayoutsPageModule);
      /***/
    },

    /***/
    "./src/app/payouts/payouts.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/payouts/payouts.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPayoutsPayoutsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".lds-roller {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n\n.lds-roller div {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 32px 32px;\n}\n\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #fdfffd;\n  margin: -3px 0 0 -3px;\n}\n\n.lds-roller div:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n\n.lds-roller div:nth-child(1):after {\n  top: 50px;\n  left: 50px;\n}\n\n.lds-roller div:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n\n.lds-roller div:nth-child(2):after {\n  top: 54px;\n  left: 45px;\n}\n\n.lds-roller div:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n\n.lds-roller div:nth-child(3):after {\n  top: 57px;\n  left: 39px;\n}\n\n.lds-roller div:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n\n.lds-roller div:nth-child(4):after {\n  top: 58px;\n  left: 32px;\n}\n\n.lds-roller div:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n\n.lds-roller div:nth-child(5):after {\n  top: 57px;\n  left: 25px;\n}\n\n.lds-roller div:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n\n.lds-roller div:nth-child(6):after {\n  top: 54px;\n  left: 19px;\n}\n\n.lds-roller div:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n\n.lds-roller div:nth-child(7):after {\n  top: 50px;\n  left: 14px;\n}\n\n.lds-roller div:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n\n.lds-roller div:nth-child(8):after {\n  top: 45px;\n  left: 10px;\n}\n\n@-webkit-keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5b3V0cy9wYXlvdXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURKOztBQUdFO0VBQ0Usd0VBQUE7VUFBQSxnRUFBQTtFQUNBLDJCQUFBO0FBQUo7O0FBRUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFDRTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFFSjs7QUFBRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBR0o7O0FBREU7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBSUo7O0FBRkU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUtKOztBQUhFO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQU1KOztBQUpFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFPSjs7QUFMRTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFRSjs7QUFORTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBU0o7O0FBUEU7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FBVUo7O0FBUkU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQVdKOztBQVRFO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQVlKOztBQVZFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFhSjs7QUFYRTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFjSjs7QUFaRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBZUo7O0FBYkU7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBZ0JKOztBQWRFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFpQko7O0FBZkU7RUFDRTtJQUNFLHVCQUFBO0VBa0JKO0VBaEJFO0lBQ0UseUJBQUE7RUFrQko7QUFDRjs7QUF4QkU7RUFDRTtJQUNFLHVCQUFBO0VBa0JKO0VBaEJFO0lBQ0UseUJBQUE7RUFrQko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BheW91dHMvcGF5b3V0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGxvYWRlclxuLmxkcy1yb2xsZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdiB7XG4gICAgYW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAzMnB4IDMycHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDZweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogcmdiKDI1MywgMjU1LCAyNTMpO1xuICAgIG1hcmdpbjogLTNweCAwIDAgLTNweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjAzNnM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKTphZnRlciB7XG4gICAgdG9wOiA1MHB4O1xuICAgIGxlZnQ6IDUwcHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wNzJzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMik6YWZ0ZXIge1xuICAgIHRvcDogNTRweDtcbiAgICBsZWZ0OiA0NXB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMykge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTA4cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpOmFmdGVyIHtcbiAgICB0b3A6IDU3cHg7XG4gICAgbGVmdDogMzlweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE0NHM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KTphZnRlciB7XG4gICAgdG9wOiA1OHB4O1xuICAgIGxlZnQ6IDMycHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xOHM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KTphZnRlciB7XG4gICAgdG9wOiA1N3B4O1xuICAgIGxlZnQ6IDI1cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yMTZzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNik6YWZ0ZXIge1xuICAgIHRvcDogNTRweDtcbiAgICBsZWZ0OiAxOXB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNykge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjUycztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpOmFmdGVyIHtcbiAgICB0b3A6IDUwcHg7XG4gICAgbGVmdDogMTRweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjI4OHM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KTphZnRlciB7XG4gICAgdG9wOiA0NXB4O1xuICAgIGxlZnQ6IDEwcHg7XG4gIH1cbiAgQGtleWZyYW1lcyBsZHMtcm9sbGVyIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICAiXX0= */";
      /***/
    },

    /***/
    "./src/app/payouts/payouts.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/payouts/payouts.page.ts ***!
      \*****************************************/

    /*! exports provided: PayoutsPage */

    /***/
    function srcAppPayoutsPayoutsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PayoutsPage", function () {
        return PayoutsPage;
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


      var _shared_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/account.service */
      "./src/app/shared/account.service.ts");

      var PayoutsPage = /*#__PURE__*/function () {
        function PayoutsPage(accountServive, gameService) {
          _classCallCheck(this, PayoutsPage);

          this.accountServive = accountServive;
          this.gameService = gameService;
          this.getWinners();
        }

        _createClass(PayoutsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getWinners",
          value: function getWinners() {
            var _this = this;

            this.loading = true;
            this.accountServive.getWinners().subscribe(function (val) {
              _this.leaderBoard = val["document"];
              console.log(_this.leaderBoard);
              _this.loading = false;
            });
          }
        }, {
          key: "payWinner",
          value: function payWinner(id, fileID) {
            var _this2 = this;

            this.loading = true;
            console.log(id, fileID);
            var userDoc = {
              id: id,
              fileID: fileID
            };
            this.accountServive.payWinner(userDoc).subscribe(function (res) {
              console.log(res);
              _this2.loading = false;
              var msg = res['message'];

              _this2.gameService.presentToast(msg);

              _this2.getWinners();
            }, function (err) {
              _this2.loading = false;
              console.log(err);

              _this2.gameService.presentToast(err.error.message);
            });
          }
        }]);

        return PayoutsPage;
      }();

      PayoutsPage.ctorParameters = function () {
        return [{
          type: _shared_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
        }, {
          type: _shared_game_service_service__WEBPACK_IMPORTED_MODULE_1__["GameServiceService"]
        }];
      };

      PayoutsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-payouts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./payouts.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/payouts/payouts.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./payouts.page.scss */
        "./src/app/payouts/payouts.page.scss"))["default"]]
      })], PayoutsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=payouts-payouts-module-es5.js.map