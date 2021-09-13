(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-leaderbord-admin-leaderbord-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-leaderbord/admin-leaderbord.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-leaderbord/admin-leaderbord.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminLeaderbordAdminLeaderbordPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    \n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons> <div class=\"row d-flex justify-content-center\">\n      <img class=\"rounded-top\"  src=\"../../../assets/icon/Logoicon.png\">\n    </div> \n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content> \n\n  <ion-card class=\" card text-white text-center\" *ngFor=\"let item of leaderBoard; index as i\">\n    <!-- <ion-card-header class=\"text-white\"> {{item?.Date | date:'full'}} </ion-card-header> -->\n    <ion-card-content>\n      <ion-list class=\"text-dark\">\n        <ion-row class=\" winner lighten-2 p-2\" [ngClass]=\"{'bg-danger': i+1 > 5}\">\n        <ion-chip class=\"position green lighten-2 font-weight-bold\"\n                    [ngClass]=\"{' animated infinite rubberBand': i+1 < 6}\"> {{i + 1}} </ion-chip>\n        <p class=\"font-weight-bold\">{{item?.Date | date:'full'}} </p>\n        <p class=\"font-weight-bold\">{{item?.user}} </p>\n        <p> Enlapsed  {{item?.minutes}}: {{item?.seconds}} </p>\n        </ion-row>\n      </ion-list>\n      <ion-button size=\"small\" color=\"danger\" (click)=\"presentAlertConfirm(item._id)\">Delete</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n    <!-- loader -->\n    <div  *ngIf=\"loading\">\n      <div class=\"toast-container \">\n        <div class=\"lds-roller\">\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/admin-leaderbord/admin-leaderbord.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/admin-leaderbord/admin-leaderbord.module.ts ***!
      \*************************************************************/

    /*! exports provided: AdminLeaderbordPageModule */

    /***/
    function srcAppAdminLeaderbordAdminLeaderbordModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminLeaderbordPageModule", function () {
        return AdminLeaderbordPageModule;
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


      var _admin_leaderbord_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin-leaderbord.page */
      "./src/app/admin-leaderbord/admin-leaderbord.page.ts");

      var routes = [{
        path: '',
        component: _admin_leaderbord_page__WEBPACK_IMPORTED_MODULE_6__["AdminLeaderbordPage"]
      }];

      var AdminLeaderbordPageModule = function AdminLeaderbordPageModule() {
        _classCallCheck(this, AdminLeaderbordPageModule);
      };

      AdminLeaderbordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_admin_leaderbord_page__WEBPACK_IMPORTED_MODULE_6__["AdminLeaderbordPage"]]
      })], AdminLeaderbordPageModule);
      /***/
    },

    /***/
    "./src/app/admin-leaderbord/admin-leaderbord.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/admin-leaderbord/admin-leaderbord.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminLeaderbordAdminLeaderbordPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  background-image: url('app-bg.png');\n  background-image: url('app-bg.png');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.nominated {\n  background-image: linear-gradient(red, yellow, green);\n}\n\n.image_icon {\n  width: 100px;\n  height: 100px;\n  display: flex;\n}\n\n.play-record {\n  background-color: #edeebb;\n  color: #056836;\n}\n\n.lds-roller {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n\n.lds-roller div {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 32px 32px;\n}\n\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #0c6d14;\n  margin: -3px 0 0 -3px;\n}\n\n.lds-roller div:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n\n.lds-roller div:nth-child(1):after {\n  top: 50px;\n  left: 50px;\n}\n\n.lds-roller div:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n\n.lds-roller div:nth-child(2):after {\n  top: 54px;\n  left: 45px;\n}\n\n.lds-roller div:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n\n.lds-roller div:nth-child(3):after {\n  top: 57px;\n  left: 39px;\n}\n\n.lds-roller div:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n\n.lds-roller div:nth-child(4):after {\n  top: 58px;\n  left: 32px;\n}\n\n.lds-roller div:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n\n.lds-roller div:nth-child(5):after {\n  top: 57px;\n  left: 25px;\n}\n\n.lds-roller div:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n\n.lds-roller div:nth-child(6):after {\n  top: 54px;\n  left: 19px;\n}\n\n.lds-roller div:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n\n.lds-roller div:nth-child(7):after {\n  top: 50px;\n  left: 14px;\n}\n\n.lds-roller div:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n\n.lds-roller div:nth-child(8):after {\n  top: 45px;\n  left: 10px;\n}\n\n@-webkit-keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.toast-container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  top: auto;\n  margin-bottom: 80px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tbGVhZGVyYm9yZC9hZG1pbi1sZWFkZXJib3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVLLG1DQUFBO0VBQ0EsbUNBQUE7RUFFRSwyQkFBQTtFQUNBLHNCQUFBO0VBRUMsNEJBQUE7QUFKUjs7QUFNSTtFQUNFLHFEQUFBO0FBSE47O0FBS0k7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUFGUjs7QUFPSTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUpOOztBQVNJO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBTlI7O0FBUU07RUFDRSx3RUFBQTtVQUFBLGdFQUFBO0VBQ0EsMkJBQUE7QUFMUjs7QUFPTTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUpSOztBQU1NO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQUhSOztBQUtNO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFGUjs7QUFJTTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFEUjs7QUFHTTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBQVI7O0FBRU07RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBQ1I7O0FBQ007RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUVSOztBQUFNO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQUdSOztBQURNO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFJUjs7QUFGTTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QUFLUjs7QUFITTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBTVI7O0FBSk07RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBT1I7O0FBTE07RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQVFSOztBQU5NO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQVNSOztBQVBNO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFVUjs7QUFSTTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFXUjs7QUFUTTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBWVI7O0FBVk07RUFDRTtJQUNFLHVCQUFBO0VBYVI7RUFYTTtJQUNFLHlCQUFBO0VBYVI7QUFDRjs7QUFuQk07RUFDRTtJQUNFLHVCQUFBO0VBYVI7RUFYTTtJQUNFLHlCQUFBO0VBYVI7QUFDRjs7QUFSSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBVU4iLCJmaWxlIjoic3JjL2FwcC9hZG1pbi1sZWFkZXJib3JkL2FkbWluLWxlYWRlcmJvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5jb250ZW50e1xuICAgIC8vICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyODE0O1xuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nLy9hcHAtYmcucG5nXCIpO1xuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2FwcC1iZy5wbmdcIik7XG4gICAgICBcbiAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxuICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAvLyAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcbiAgICB9XG4gICAgLm5vbWluYXRlZHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZWQsIHllbGxvdywgZ3JlZW4pO1xuICAgIH1cbiAgICAuaW1hZ2VfaWNvbntcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgXG4gICAgXG4gICAgLnBsYXktcmVjb3Jke1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWViYjtcbiAgICAgIGNvbG9yOnJnYig1LCAxMDQsIDU0KTtcbiAgICAgIC8vIGNvbG9yOiAjZTdmMGUwO1xuICAgIH1cbiAgICBcbiAgICAvLyBsb2FkZXJcbiAgICAubGRzLXJvbGxlciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogNjRweDtcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgfVxuICAgICAgLmxkcy1yb2xsZXIgZGl2IHtcbiAgICAgICAgYW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMzJweCAzMnB4O1xuICAgICAgfVxuICAgICAgLmxkcy1yb2xsZXIgZGl2OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiA2cHg7XG4gICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigxMiwgMTA5LCAyMCk7XG4gICAgICAgIG1hcmdpbjogLTNweCAwIDAgLTNweDtcbiAgICAgIH1cbiAgICAgIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSkge1xuICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjAzNnM7XG4gICAgICB9XG4gICAgICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpOmFmdGVyIHtcbiAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICBsZWZ0OiA1MHB4O1xuICAgICAgfVxuICAgICAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMDcycztcbiAgICAgIH1cbiAgICAgIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMik6YWZ0ZXIge1xuICAgICAgICB0b3A6IDU0cHg7XG4gICAgICAgIGxlZnQ6IDQ1cHg7XG4gICAgICB9XG4gICAgICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMDhzO1xuICAgICAgfVxuICAgICAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XG4gICAgICAgIHRvcDogNTdweDtcbiAgICAgICAgbGVmdDogMzlweDtcbiAgICAgIH1cbiAgICAgIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCkge1xuICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE0NHM7XG4gICAgICB9XG4gICAgICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpOmFmdGVyIHtcbiAgICAgICAgdG9wOiA1OHB4O1xuICAgICAgICBsZWZ0OiAzMnB4O1xuICAgICAgfVxuICAgICAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KSB7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMThzO1xuICAgICAgfVxuICAgICAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KTphZnRlciB7XG4gICAgICAgIHRvcDogNTdweDtcbiAgICAgICAgbGVmdDogMjVweDtcbiAgICAgIH1cbiAgICAgIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNikge1xuICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjIxNnM7XG4gICAgICB9XG4gICAgICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyIHtcbiAgICAgICAgdG9wOiA1NHB4O1xuICAgICAgICBsZWZ0OiAxOXB4O1xuICAgICAgfVxuICAgICAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KSB7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjUycztcbiAgICAgIH1cbiAgICAgIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNyk6YWZ0ZXIge1xuICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgIGxlZnQ6IDE0cHg7XG4gICAgICB9XG4gICAgICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpIHtcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yODhzO1xuICAgICAgfVxuICAgICAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KTphZnRlciB7XG4gICAgICAgIHRvcDogNDVweDtcbiAgICAgICAgbGVmdDogMTBweDtcbiAgICAgIH1cbiAgICAgIEBrZXlmcmFtZXMgbGRzLXJvbGxlciB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXG4gICAgICBcbiAgICAvLyAgIGxvYWRpbmdcbiAgICAudG9hc3QtY29udGFpbmVye1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgdG9wOiBhdXRvO1xuICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHotaW5kZXg6IDk5OTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgIl19 */";
      /***/
    },

    /***/
    "./src/app/admin-leaderbord/admin-leaderbord.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/admin-leaderbord/admin-leaderbord.page.ts ***!
      \***********************************************************/

    /*! exports provided: AdminLeaderbordPage */

    /***/
    function srcAppAdminLeaderbordAdminLeaderbordPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminLeaderbordPage", function () {
        return AdminLeaderbordPage;
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

      var AdminLeaderbordPage = /*#__PURE__*/function () {
        function AdminLeaderbordPage(popoverController, toastController, accountServive, alertController) {
          _classCallCheck(this, AdminLeaderbordPage);

          this.popoverController = popoverController;
          this.toastController = toastController;
          this.accountServive = accountServive;
          this.alertController = alertController;
          this.loading = false;
          this.getLeaderBoard();
        }

        _createClass(AdminLeaderbordPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
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
                        component: _adminnavigation_adminnavigation_component__WEBPACK_IMPORTED_MODULE_4__["AdminnavigationComponent"],
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
          key: "getLeaderBoard",
          value: function getLeaderBoard() {
            var _this = this;

            this.loading = true;
            this.accountServive.getLeaderboard().subscribe(function (val) {
              _this.leaderBoard = val['document'];
              _this.loading = false;
              console.log(_this.leaderBoard);
            });
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Confirm Settlement!',
                        message: 'Settlement will delete this user from the leaderboard!!!',
                        inputs: [{
                          name: 'docID',
                          value: id,
                          type: 'password',
                          disabled: true
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Okay',
                          handler: function handler(val) {
                            _this2.loading = true;
                            console.log('Confirm Okay', val.docID);

                            _this2.accountServive.settleLeader(val.docID).subscribe(function (res) {
                              _this2.loading = false;
                              console.log(res);

                              _this2.presentSuccessToast();

                              _this2.getLeaderBoard();
                            }, function (error) {
                              _this2.loading = false;
                              console.log(error);
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentSuccessToast",
          value: function presentSuccessToast() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        message: 'Record deleted sucessfully!!',
                        position: 'middle',
                        duration: 3000
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return AdminLeaderbordPage;
      }();

      AdminLeaderbordPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: src_app_shared_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      };

      AdminLeaderbordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-admin-leaderbord',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./admin-leaderbord.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-leaderbord/admin-leaderbord.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./admin-leaderbord.page.scss */
        "./src/app/admin-leaderbord/admin-leaderbord.page.scss"))["default"]]
      })], AdminLeaderbordPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=admin-leaderbord-admin-leaderbord-module-es5.js.map