(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-play-admin-play-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-play/admin-play.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-play/admin-play.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminPlayAdminPlayPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-img class=\"rounded-top\"  src=\"../../assets/icon/Logoicon.png\"></ion-img>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab  vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n    <ion-button (click)=\"presentNavigation()\" type=\"block\" size=\"large\">Navigation</ion-button>\n  </ion-fab>\n<div class=\"content\">\n\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"success\">\n     <ion-row>\n       <h5 class=\"mt-2 p-3 font-weight-bold\">{{timeMinute}} : {{timeSeconds}} </h5>\n     </ion-row>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-item-divider *ngIf=\"startGame\" >\n         \n    <ion-segment>\n      <div class=\"animated\" #correct>\n      <ion-label  class=\" font-weight-bold text-success\"> CORRECT : {{correctAns}}</ion-label>\n    </div>\n    </ion-segment>\n\n  \n    <ion-segment >\n      <div class=\"animated\" #wrong >\n      <ion-label class=\"animated font-weight-bold text-danger\">WRONG : {{wrongAns}} </ion-label>\n    </div>\n    </ion-segment>\n</ion-item-divider>\n\n<ion-card *ngIf=\"startGame\" class=\"m-0 play-area\" style=\"width: 100%;\" >\n  <div class=\"justify-content-right d-flex ml-2 \">\n             <h3 class=\" font-weight-bold\" id=\"count\"> {{runningQuestion + 1}} </h3>  <!-- Default Segment -->\n  \n  </div>\n   \n   <ion-card-title><p class=\"m-4 text-white\">{{currentQuestion?.question}} </p></ion-card-title>\n   <ion-card-content class=\"text-left mb-5\">\n  \n       <ion-button color=\"success\"  expand=\"full\"  class=\"option mb-3\" [disabled]=\"disableClick\" \n        (click)=\"checkAnswer(currentQuestion?.option1, currentQuestion?.answer);\">\n          {{currentQuestion?.option1}} </ion-button>\n     \n         <ion-button color=\"success\" expand=\"full\" class=\"option mb-3\" [disabled]=\"disableClick\"\n          (click)=\"checkAnswer(currentQuestion?.option2, currentQuestion?.answer); \">\n            {{currentQuestion?.option2}} </ion-button>\n    \n         <ion-button  color=\"success\" expand=\"full\"  class=\"option mb-3\" [disabled]=\"disableClick\"\n         (click)=\"checkAnswer(currentQuestion?.option3, currentQuestion.answer); \">\n           {{currentQuestion?.option3}} </ion-button>\n      \n         <ion-button color=\"success\" expand=\"full\"  class=\"option mb-3\" [disabled]=\"disableClick\" \n          (click)=\"checkAnswer(currentQuestion?.option4, currentQuestion.answer); \">\n            {{currentQuestion?.option4}} </ion-button> <br>\n            \n            <ion-text class=\"text-white text-center\"> answer :{{currentQuestion?.answer}} </ion-text> <br>\n            <ion-text class=\"text-white text-center\"> category :{{currentQuestion?.category}} </ion-text>\n   </ion-card-content>\n  <ion-row>\n    <ion-button size=\"small\"  (click)=\"previousQst()\">prev</ion-button> \n    <ion-button size=\"small\" (click)=\"nextQuestion()\">next</ion-button>\n    <ion-button size=\"small\" color=\"danger\" (click)=\"cancelGame()\">Stop</ion-button>\n  </ion-row>\n   </ion-card>\n\n   \n   <div *ngIf=\"!loadingGame\" style=\"padding-top: 40%;\">\n    <ion-button expand=\"block\" \n      size=\"large\" color=\"success\"  *ngIf=\"!startGame\" (click)=\"startQuestion()\">\n        PLAY NOW !</ion-button>\n        <div class=\" text-center  p-2 mt-5 animated infinite\n         shake  \" #info> \n          <p class=\"info\"  *ngIf=\"!startGame\">15 correct questions equal to 50k</p>\n        </div>\n </div>\n\n          <!-- loader -->\n          <div *ngIf=\"loadingGame\" class=\" \">\n            <div class=\"toast-container \">\n                <div class=\"lds-roller\"><div></div><div></div><div></div><div></div>\n                <div></div><div></div><div></div><div></div></div>\n            </div>\n            <p class=\"bg-dark text-white text-center\"> preparing questions</p>\n          </div>\n\n        </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/admin-play/admin-play.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/admin-play/admin-play.module.ts ***!
      \*************************************************/

    /*! exports provided: AdminPlayPageModule */

    /***/
    function srcAppAdminPlayAdminPlayModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminPlayPageModule", function () {
        return AdminPlayPageModule;
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


      var _admin_play_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./admin-play.page */
      "./src/app/admin-play/admin-play.page.ts");

      var routes = [{
        path: '',
        component: _admin_play_page__WEBPACK_IMPORTED_MODULE_6__["AdminPlayPage"]
      }];

      var AdminPlayPageModule = function AdminPlayPageModule() {
        _classCallCheck(this, AdminPlayPageModule);
      };

      AdminPlayPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_admin_play_page__WEBPACK_IMPORTED_MODULE_6__["AdminPlayPage"]]
      })], AdminPlayPageModule);
      /***/
    },

    /***/
    "./src/app/admin-play/admin-play.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/admin-play/admin-play.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminPlayAdminPlayPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  background-image: url('app-bg.png');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.nominated {\n  background-image: linear-gradient(red, yellow, green);\n}\n\n.image_icon {\n  width: 100px;\n  height: 100px;\n  display: flex;\n}\n\n.play-record {\n  background-color: #edeebb;\n  color: #056836;\n}\n\n.lds-roller {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n\n.lds-roller div {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 32px 32px;\n}\n\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #0c6d14;\n  margin: -3px 0 0 -3px;\n}\n\n.lds-roller div:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n\n.lds-roller div:nth-child(1):after {\n  top: 50px;\n  left: 50px;\n}\n\n.lds-roller div:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n\n.lds-roller div:nth-child(2):after {\n  top: 54px;\n  left: 45px;\n}\n\n.lds-roller div:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n\n.lds-roller div:nth-child(3):after {\n  top: 57px;\n  left: 39px;\n}\n\n.lds-roller div:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n\n.lds-roller div:nth-child(4):after {\n  top: 58px;\n  left: 32px;\n}\n\n.lds-roller div:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n\n.lds-roller div:nth-child(5):after {\n  top: 57px;\n  left: 25px;\n}\n\n.lds-roller div:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n\n.lds-roller div:nth-child(6):after {\n  top: 54px;\n  left: 19px;\n}\n\n.lds-roller div:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n\n.lds-roller div:nth-child(7):after {\n  top: 50px;\n  left: 14px;\n}\n\n.lds-roller div:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n\n.lds-roller div:nth-child(8):after {\n  top: 45px;\n  left: 10px;\n}\n\n@-webkit-keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.toast-container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  top: auto;\n  margin-bottom: 80px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tcGxheS9hZG1pbi1wbGF5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVLLG1DQUFBO0VBRUUsMkJBQUE7RUFDQSxzQkFBQTtFQUVDLDRCQUFBO0FBSlI7O0FBTUk7RUFDRSxxREFBQTtBQUhOOztBQUtJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBRlI7O0FBT0k7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFKTjs7QUFTSTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQU5SOztBQVFNO0VBQ0Usd0VBQUE7VUFBQSxnRUFBQTtFQUNBLDJCQUFBO0FBTFI7O0FBT007RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFKUjs7QUFNTTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFIUjs7QUFLTTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBRlI7O0FBSU07RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBRFI7O0FBR007RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUFSOztBQUVNO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQUNSOztBQUNNO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFFUjs7QUFBTTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFHUjs7QUFETTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBSVI7O0FBRk07RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FBS1I7O0FBSE07RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQU1SOztBQUpNO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQU9SOztBQUxNO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFRUjs7QUFOTTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFTUjs7QUFQTTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBVVI7O0FBUk07RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBV1I7O0FBVE07RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQVlSOztBQVZNO0VBQ0U7SUFDRSx1QkFBQTtFQWFSO0VBWE07SUFDRSx5QkFBQTtFQWFSO0FBQ0Y7O0FBbkJNO0VBQ0U7SUFDRSx1QkFBQTtFQWFSO0VBWE07SUFDRSx5QkFBQTtFQWFSO0FBQ0Y7O0FBUkk7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQVVOIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tcGxheS9hZG1pbi1wbGF5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uY29udGVudHtcbiAgICAvLyAgYmFja2dyb3VuZC1jb2xvcjogIzAwMjgxNDtcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy8vYXBwLWJnLnBuZ1wiKTtcbiAgICAgIFxuICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXG4gICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIC8vICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxuICAgIH1cbiAgICAubm9taW5hdGVke1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJlZCwgeWVsbG93LCBncmVlbik7XG4gICAgfVxuICAgIC5pbWFnZV9pY29ue1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICBcbiAgICBcbiAgICAucGxheS1yZWNvcmR7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZWJiO1xuICAgICAgY29sb3I6cmdiKDUsIDEwNCwgNTQpO1xuICAgICAgLy8gY29sb3I6ICNlN2YwZTA7XG4gICAgfVxuICAgIFxuICAgIC8vIGxvYWRlclxuICAgIC5sZHMtcm9sbGVyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgICBoZWlnaHQ6IDY0cHg7XG4gICAgICB9XG4gICAgICAubGRzLXJvbGxlciBkaXYge1xuICAgICAgICBhbmltYXRpb246IGxkcy1yb2xsZXIgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAzMnB4IDMycHg7XG4gICAgICB9XG4gICAgICAubGRzLXJvbGxlciBkaXY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDZweDtcbiAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDEyLCAxMDksIDIwKTtcbiAgICAgICAgbWFyZ2luOiAtM3B4IDAgMCAtM3B4O1xuICAgICAgfVxuICAgICAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMDM2cztcbiAgICAgIH1cbiAgICAgIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSk6YWZ0ZXIge1xuICAgICAgICB0b3A6IDUwcHg7XG4gICAgICAgIGxlZnQ6IDUwcHg7XG4gICAgICB9XG4gICAgICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wNzJzO1xuICAgICAgfVxuICAgICAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKTphZnRlciB7XG4gICAgICAgIHRvcDogNTRweDtcbiAgICAgICAgbGVmdDogNDVweDtcbiAgICAgIH1cbiAgICAgIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMykge1xuICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjEwOHM7XG4gICAgICB9XG4gICAgICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpOmFmdGVyIHtcbiAgICAgICAgdG9wOiA1N3B4O1xuICAgICAgICBsZWZ0OiAzOXB4O1xuICAgICAgfVxuICAgICAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KSB7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTQ0cztcbiAgICAgIH1cbiAgICAgIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCk6YWZ0ZXIge1xuICAgICAgICB0b3A6IDU4cHg7XG4gICAgICAgIGxlZnQ6IDMycHg7XG4gICAgICB9XG4gICAgICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xOHM7XG4gICAgICB9XG4gICAgICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpOmFmdGVyIHtcbiAgICAgICAgdG9wOiA1N3B4O1xuICAgICAgICBsZWZ0OiAyNXB4O1xuICAgICAgfVxuICAgICAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KSB7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjE2cztcbiAgICAgIH1cbiAgICAgIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNik6YWZ0ZXIge1xuICAgICAgICB0b3A6IDU0cHg7XG4gICAgICAgIGxlZnQ6IDE5cHg7XG4gICAgICB9XG4gICAgICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpIHtcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNTJzO1xuICAgICAgfVxuICAgICAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KTphZnRlciB7XG4gICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgbGVmdDogMTRweDtcbiAgICAgIH1cbiAgICAgIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCkge1xuICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjI4OHM7XG4gICAgICB9XG4gICAgICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpOmFmdGVyIHtcbiAgICAgICAgdG9wOiA0NXB4O1xuICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgfVxuICAgICAgQGtleWZyYW1lcyBsZHMtcm9sbGVyIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgICAgIFxuICAgIC8vICAgbG9hZGluZ1xuICAgIC50b2FzdC1jb250YWluZXJ7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICB0b3A6IGF1dG87XG4gICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgei1pbmRleDogOTk5O1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAiXX0= */";
      /***/
    },

    /***/
    "./src/app/admin-play/admin-play.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/admin-play/admin-play.page.ts ***!
      \***********************************************/

    /*! exports provided: AdminPlayPage */

    /***/
    function srcAppAdminPlayAdminPlayPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminPlayPage", function () {
        return AdminPlayPage;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _adminnavigation_adminnavigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../adminnavigation/adminnavigation.component */
      "./src/app/adminnavigation/adminnavigation.component.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _shared_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/user.service */
      "./src/app/shared/user.service.ts");
      /* harmony import */


      var _shared_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared/account.service */
      "./src/app/shared/account.service.ts");

      var AdminPlayPage = /*#__PURE__*/function () {
        function AdminPlayPage(alertController, popoverController, router, userService, accountService) {
          _classCallCheck(this, AdminPlayPage);

          this.alertController = alertController;
          this.popoverController = popoverController;
          this.router = router;
          this.userService = userService;
          this.accountService = accountService;
          this.startGame = false;
          this.correcQuestion = 0;
          this.wrongQuestion = 0;
          this.timeMinute = 0;
          this.timeSeconds = 0;
          this.loadingGame = false;
          this.correctAns = 0;
          this.wrongAns = 0;
          this.disableClick = false;
          this.low_balance = false;
          this.GameTimeMinute = 0;
          this.GameTimeSeconds = 0;
        }

        _createClass(AdminPlayPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.getQuestionForGame();
            this.runningQuestion = 0;
            setTimeout(function () {
              _this.info.nativeElement.classList.remove('infinite');
            }, 8000);
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
                        component: _adminnavigation_adminnavigation_component__WEBPACK_IMPORTED_MODULE_3__["AdminnavigationComponent"],
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
          key: "getQuestionForGame",
          value: function getQuestionForGame() {
            var _this2 = this;

            this.loadingGame = true;
            this.userService.getAllLiveQuestions().subscribe(function (res) {
              _this2.gameQuestions = res['questions'];
              _this2.lastQuestion = _this2.gameQuestions.length - 1;
              _this2.loadingGame = false;
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "gameisOver",
          value: function gameisOver() {
            this.GameTimeMinute = this.timeMinute;
            this.GameTimeSeconds = this.timeSeconds;
            this.gameOver = true;
            this.startGame = false;
            var minutes = 4 - this.timeMinute;
            var seconds = 60 - this.timeSeconds;
            this.presentResult(minutes, seconds, this.correctAns);
          }
        }, {
          key: "checkAnswer",
          value: function checkAnswer(selection, correctAnswer) {
            var _this3 = this;

            this.disableClick = true;

            if (selection == correctAnswer) {
              this.correct.nativeElement.classList.add('heartBeat');
              this.correctAns = this.correctAns + 1;
            } else {
              this.wrongAns = this.wrongAns + 1;
              this.wrong.nativeElement.classList.add('wobble');
            } // tslint:disable-next-line: align


            setTimeout(function () {
              _this3.nextQuestion();
            }, 1000);
          }
        }, {
          key: "startQuestion",
          value: function startQuestion() {
            this.loadingGame = true;
            this.startGame = true;
            this.currentQuestion = this.gameQuestions[this.runningQuestion];
            this.startTimer();
            this.loadingGame = false;
          }
        }, {
          key: "renderQuestion",
          value: function renderQuestion() {
            this.startGame = true;
            this.disableClick = false;
            this.currentQuestion = this.gameQuestions[this.runningQuestion];
          }
        }, {
          key: "nextQuestion",
          value: function nextQuestion() {
            this.wrong.nativeElement.classList.remove('wobble');
            this.correct.nativeElement.classList.remove('heartBeat');

            if (this.runningQuestion < this.lastQuestion) {
              this.runningQuestion++;
              this.renderQuestion();
            } else {
              this.startGame = false;
              this.gameOver = true; // no more question!
            }
          }
        }, {
          key: "previousQst",
          value: function previousQst() {
            this.runningQuestion--;
            this.renderQuestion();
          }
        }, {
          key: "renderProgress",
          value: function renderProgress() {
            for (var qIndex = 0; qIndex <= this.lastQuestion; qIndex++) {
              this.progress = qIndex;
            }
          }
        }, {
          key: "startTimer",
          value: function startTimer() {
            var _this4 = this;

            // COUNTDOWN IN SECONDS
            // EXAMPLE - 5 MINS = 5 X 60 = 300 SECS
            var counter = 15000; // Start if not past end date

            if (counter > 0) {
              var ticker = setInterval(function () {
                // Stop if passed end time
                counter--;

                if (counter == 0 || _this4.gameOver) {
                  clearInterval(ticker);

                  _this4.gameisOver();

                  counter = 0;
                }

                var secs = counter;
                var mins = Math.floor(secs / 60); // 1 min = 60 secs

                secs -= mins * 60;
                _this4.timeMinute = mins;
                _this4.timeSeconds = secs;

                if (_this4.gameOver) {
                  console.log('time is stoped');
                  clearInterval(ticker);
                } else {
                  console.warn('not yet time...');
                }
              }, 1000);
            }
          }
        }, {
          key: "presentResult",
          value: function presentResult(min, secs, correct) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: ' GAME RESULT',
                        message: "<h1>Score  ".concat(correct, "/ ").concat(this.gameQuestions.length, "</h1>  <br>\n                <h6 class=\"text-success\">Elapsed ").concat(min, " min , ").concat(secs, " secs"),
                        buttons: [{
                          text: 'OK',
                          cssClass: 'success',
                          handler: function handler(val) {
                            console.log('ok');
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
          key: "cancelGame",
          value: function cancelGame() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        header: 'EXIT GAME',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'danger',
                          handler: function handler(blah) {
                            console.log('cancel amount input');
                          }
                        }, {
                          text: 'Confirm',
                          cssClass: 'success',
                          handler: function handler(val) {
                            _this5.gameisOver();
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

        return AdminPlayPage;
      }();

      AdminPlayPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _shared_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]
        }];
      };

      AdminPlayPage.propDecorators = {
        info: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['info', {
            "static": false
          }]
        }],
        correct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['correct', {
            "static": false
          }]
        }],
        wrong: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['wrong', {
            "static": false
          }]
        }]
      };
      AdminPlayPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-admin-play',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./admin-play.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-play/admin-play.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./admin-play.page.scss */
        "./src/app/admin-play/admin-play.page.scss"))["default"]]
      })], AdminPlayPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=admin-play-admin-play-module-es5.js.map