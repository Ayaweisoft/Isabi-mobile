(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myrecord-myrecord-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/myrecord/myrecord.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myrecord/myrecord.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMyrecordMyrecordPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <div class=\"row d-flex justify-content-center\">\n      <img class=\"rounded-top\"\n           src=\"assets/img/ISABI LOGO GREEN.png\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <!-- content area -->\n  <div class=\"\">\n    <!-- loader -->\n    <div *ngIf=\"loading\"\n         class=\" \">\n      <div class=\"toast-container \">\n        <div class=\"lds-roller\">\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div>\n\n    <ion-item class=\"text-center font-weight-bold\">\n      <ion-badge color=\"success\"\n                 class=\"text-center\">GAME LIST</ion-badge>\n      <ion-badge color=\"success\">{{gameRecord?.length}} </ion-badge>\n    </ion-item>\n    <div *ngFor=\"let item of gameRecord; index as i\"\n         class=\"content\">\n      <ion-card class=\" text-center  play-record\">\n        <!-- text-center  play-record animated fadeInLeft delay-{{i}}s -->\n        <div class=\"d-flex\">\n          <ion-list-header class=\"font-weight-bold  justify-content-left\">\n            {{i + 1}} </ion-list-header>\n          <ion-row class=\"font-weight-bold justify-content-center\">\n            {{item.Date | date:'shortDate' }},{{item.Date | date: 'mediumTime'}}</ion-row>\n          <ion-row>\n            <ion-button [disabled]=\"item.correct_qst == 15\"\n                        color=\"light\"\n                        (click)=\"deleteRecord(item._id)\"\n                        class=\"justify-content-right\">\n              <ion-icon color=\"danger\"\n                        size=\"large\"\n                        name=\"trash\"></ion-icon>\n            </ion-button>\n\n          </ion-row>\n        </div>\n\n        <ion-list class=\"font-weight-bold\"> ENLAPSED {{item.minutes}} , min {{item.seconds}} seconds </ion-list>\n        <ion-list *ngIf=\"item.correct_qst == 15;\"\n                  class=\"font-weight-bold text-danger nominated\"> NOMININATED !</ion-list>\n\n        <ion-row class=\"d-flex justify-content-center\">\n          <p class=\"text-success \">\n            <ion-icon size=\"large\"\n                      name=\"checkmark\"></ion-icon> {{item.correct_qst}}\n          </p>\n\n          <p class=\"text-danger \">\n            <ion-icon color=\"danger\"\n                      size=\"large\"\n                      name=\"close-circle-outline\"></ion-icon> {{item.wrong_qst}}\n          </p>\n        </ion-row>\n\n      </ion-card>\n    </div>\n\n    <!-- end content area -->\n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/myrecord/myrecord.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/myrecord/myrecord.module.ts ***!
      \*********************************************/

    /*! exports provided: MyrecordPageModule */

    /***/
    function srcAppMyrecordMyrecordModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyrecordPageModule", function () {
        return MyrecordPageModule;
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


      var _myrecord_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./myrecord.page */
      "./src/app/myrecord/myrecord.page.ts");

      var routes = [{
        path: '',
        component: _myrecord_page__WEBPACK_IMPORTED_MODULE_6__["MyrecordPage"]
      }];

      var MyrecordPageModule = function MyrecordPageModule() {
        _classCallCheck(this, MyrecordPageModule);
      };

      MyrecordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_myrecord_page__WEBPACK_IMPORTED_MODULE_6__["MyrecordPage"]]
      })], MyrecordPageModule);
      /***/
    },

    /***/
    "./src/app/myrecord/myrecord.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/myrecord/myrecord.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppMyrecordMyrecordPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  background-image: url('app-bg.png');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.nominated {\n  background-image: linear-gradient(red, yellow, green);\n}\n\n.play-record {\n  background-color: #edeebb;\n  color: #056836;\n}\n\n.lds-roller {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n\n.lds-roller div {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 32px 32px;\n}\n\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #0c6d14;\n  margin: -3px 0 0 -3px;\n}\n\n.lds-roller div:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n\n.lds-roller div:nth-child(1):after {\n  top: 50px;\n  left: 50px;\n}\n\n.lds-roller div:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n\n.lds-roller div:nth-child(2):after {\n  top: 54px;\n  left: 45px;\n}\n\n.lds-roller div:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n\n.lds-roller div:nth-child(3):after {\n  top: 57px;\n  left: 39px;\n}\n\n.lds-roller div:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n\n.lds-roller div:nth-child(4):after {\n  top: 58px;\n  left: 32px;\n}\n\n.lds-roller div:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n\n.lds-roller div:nth-child(5):after {\n  top: 57px;\n  left: 25px;\n}\n\n.lds-roller div:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n\n.lds-roller div:nth-child(6):after {\n  top: 54px;\n  left: 19px;\n}\n\n.lds-roller div:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n\n.lds-roller div:nth-child(7):after {\n  top: 50px;\n  left: 14px;\n}\n\n.lds-roller div:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n\n.lds-roller div:nth-child(8):after {\n  top: 45px;\n  left: 10px;\n}\n\n@-webkit-keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.toast-container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  top: auto;\n  margin-bottom: 80px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlyZWNvcmQvbXlyZWNvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUMsbUNBQUE7RUFFRSwyQkFBQTtFQUNBLHNCQUFBO0VBRUMsNEJBQUE7QUFKSjs7QUFNQTtFQUNFLHFEQUFBO0FBSEY7O0FBTUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFIRjs7QUFRQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUxKOztBQU9FO0VBQ0Usd0VBQUE7VUFBQSxnRUFBQTtFQUNBLDJCQUFBO0FBSko7O0FBTUU7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFISjs7QUFLRTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFGSjs7QUFJRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBREo7O0FBR0U7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBQUo7O0FBRUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUNKOztBQUNFO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQUVKOztBQUFFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFHSjs7QUFERTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFJSjs7QUFGRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBS0o7O0FBSEU7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FBTUo7O0FBSkU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQU9KOztBQUxFO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQVFKOztBQU5FO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFTSjs7QUFQRTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFVSjs7QUFSRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBV0o7O0FBVEU7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBWUo7O0FBVkU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQWFKOztBQVhFO0VBQ0U7SUFDRSx1QkFBQTtFQWNKO0VBWkU7SUFDRSx5QkFBQTtFQWNKO0FBQ0Y7O0FBcEJFO0VBQ0U7SUFDRSx1QkFBQTtFQWNKO0VBWkU7SUFDRSx5QkFBQTtFQWNKO0FBQ0Y7O0FBVEE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQVdGIiwiZmlsZSI6InNyYy9hcHAvbXlyZWNvcmQvbXlyZWNvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5jb250ZW50e1xuLy8gIGJhY2tncm91bmQtY29sb3I6ICMwMDI4MTQ7XG4gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy8vYXBwLWJnLnBuZ1wiKTtcbiAgXG4gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxuICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgLy8gIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcbn1cbi5ub21pbmF0ZWR7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZWQsIHllbGxvdywgZ3JlZW4pO1xufVxuXG4ucGxheS1yZWNvcmR7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVlYmI7XG4gIGNvbG9yOnJnYig1LCAxMDQsIDU0KTtcbiAgLy8gY29sb3I6ICNlN2YwZTA7XG59XG5cbi8vIGxvYWRlclxuLmxkcy1yb2xsZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdiB7XG4gICAgYW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAzMnB4IDMycHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDZweDtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogcmdiKDEyLCAxMDksIDIwKTtcbiAgICBtYXJnaW46IC0zcHggMCAwIC0zcHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wMzZzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSk6YWZ0ZXIge1xuICAgIHRvcDogNTBweDtcbiAgICBsZWZ0OiA1MHB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMDcycztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpOmFmdGVyIHtcbiAgICB0b3A6IDU0cHg7XG4gICAgbGVmdDogNDVweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjEwOHM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XG4gICAgdG9wOiA1N3B4O1xuICAgIGxlZnQ6IDM5cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNDRzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCk6YWZ0ZXIge1xuICAgIHRvcDogNThweDtcbiAgICBsZWZ0OiAzMnB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMThzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSk6YWZ0ZXIge1xuICAgIHRvcDogNTdweDtcbiAgICBsZWZ0OiAyNXB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjE2cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyIHtcbiAgICB0b3A6IDU0cHg7XG4gICAgbGVmdDogMTlweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjI1MnM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KTphZnRlciB7XG4gICAgdG9wOiA1MHB4O1xuICAgIGxlZnQ6IDE0cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yODhzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCk6YWZ0ZXIge1xuICAgIHRvcDogNDVweDtcbiAgICBsZWZ0OiAxMHB4O1xuICB9XG4gIEBrZXlmcmFtZXMgbGRzLXJvbGxlciB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cblxuICBcbi8vICAgbG9hZGluZ1xuLnRvYXN0LWNvbnRhaW5lcntcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA5OTk7XG59XG5cblxuIl19 */";
      /***/
    },

    /***/
    "./src/app/myrecord/myrecord.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/myrecord/myrecord.page.ts ***!
      \*******************************************/

    /*! exports provided: MyrecordPage */

    /***/
    function srcAppMyrecordMyrecordPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyrecordPage", function () {
        return MyrecordPage;
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


      var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/user.service */
      "./src/app/shared/user.service.ts");
      /* harmony import */


      var _shared_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/account.service */
      "./src/app/shared/account.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");

      var MyrecordPage = /*#__PURE__*/function () {
        function MyrecordPage(userService, accountService, menu, toastController, router) {
          _classCallCheck(this, MyrecordPage);

          this.userService = userService;
          this.accountService = accountService;
          this.menu = menu;
          this.toastController = toastController;
          this.router = router;
          this.loading = false;
          this.getRecord();
        }

        _createClass(MyrecordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log('RECORD INIT FIRES');
          }
        }, {
          key: "gotoGame",
          value: function gotoGame() {
            this.router.navigate(['game']);
          }
        }, {
          key: "presentToast",
          value: function presentToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: "".concat(msg),
                        position: 'middle',
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
          key: "getRecord",
          value: function getRecord() {
            var _this = this;

            this.loading = true;
            this.userService.getGameRecord().subscribe(function (response) {
              _this.gameRecord = response;
              _this.loading = false;
              console.log(_this.gameRecord);
            });
          }
        }, {
          key: "deleteRecord",
          value: function deleteRecord(id) {
            var _this2 = this;

            this.loading = true;
            this.userService.deleteGameRecord(id).subscribe(function (res) {
              _this2.getRecord();

              _this2.loading = false;
              var msg = 'record deleted successful!';

              _this2.presentToast(msg);
            }, function (err) {
              _this2.loading = false;
              var msg = 'error deleting record!';

              _this2.presentToast(msg);

              _this2.getRecord();
            });
          }
        }]);

        return MyrecordPage;
      }();

      MyrecordPage.ctorParameters = function () {
        return [{
          type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _shared_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      MyrecordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-myrecord',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./myrecord.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/myrecord/myrecord.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./myrecord.page.scss */
        "./src/app/myrecord/myrecord.page.scss"))["default"]]
      })], MyrecordPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=myrecord-myrecord-module-es5.js.map