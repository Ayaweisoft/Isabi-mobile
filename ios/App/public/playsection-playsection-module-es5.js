(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["playsection-playsection-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/playsection/playsection.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/playsection/playsection.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPlaysectionPlaysectionPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n\n    <div class=\"row d-flex justify-content-center\">\n      <img class=\"rounded-top logo\"\n           src=\"assets/img/ISABI LOGO GREEN.png\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"play-area content\">\n\n\n    <ion-fab *ngIf=\"!gameOver\"\n             vertical=\"top\"\n             horizontal=\"center\"\n             slot=\"fixed\">\n      <ion-fab-button color=\"success\">\n        <ion-row>\n          <h5 class=\"mt-2 p-3 font-weight-bold\">{{timeMinute}} : {{timeSeconds}} </h5>\n        </ion-row>\n      </ion-fab-button>\n    </ion-fab>\n\n\n    <!-- *ngFor=\"let item of accountService.leaderboard$; index as i\" -->\n    <!-- <div >\n                  <ion-card-content>\n                    <ion-row>\n                      <ion-col  *ngFor=\"let item of accountService.leaderboardGameSection$\" >\n                          <ion-avatar>\n                              <img class=\"leaders\" src=\"../../assets/img/leader_icon.png\" alt=\"\">\n                            </ion-avatar><p class=\"font-weight-bold\">{{item.user}} </p><br>\n                       </ion-col>\n                    </ion-row>\n                  </ion-card-content>\n        </div> -->\n\n\n\n    <ion-item-divider *ngIf=\"startGame\">\n\n      <ion-segment>\n        <div class=\"animated\"\n             #correct>\n          <ion-label class=\" font-weight-bold text-success\"> CORRECT : {{correctAns}}</ion-label>\n        </div>\n      </ion-segment>\n\n\n      <ion-segment>\n        <div class=\"animated\"\n             #wrong>\n          <ion-label class=\"animated font-weight-bold text-danger\">WRONG : {{wrongAns}} </ion-label>\n        </div>\n      </ion-segment>\n\n    </ion-item-divider>\n\n\n    <!-- question section -->\n    <ion-card slot=\"fixed\"\n              *ngIf=\"startGame\"\n              class=\"m-0 play-area\"\n              style=\"width: 100%;\">\n      <div class=\"justify-content-right d-flex ml-2 \">\n        <h3 class=\" font-weight-bold\"\n            id=\"count\"> {{runningQuestion + 1}}/15 </h3> <!-- Default Segment -->\n\n      </div>\n\n      <ion-card-title>\n        <p class=\"m-4 text-white\">{{currentQuestion?.question}} </p>\n      </ion-card-title>\n      <!-- <ion-card-content class=\"text-left mb-5\">\n           </ion-card-content> -->\n    </ion-card>\n\n    <!-- select answer -->\n\n    <ion-card slot=\"fixed\"\n              class=\"p-2\"\n              *ngIf=\"startGame\"\n              color=\"light\">\n      <ion-button [color]=\"btnColor1\"\n                  expand=\"full\"\n                  class=\"option mb-3\"\n                  [disabled]=\"disableClick\"\n                  (click)=\"checkAnswer(currentQuestion?.option1, currentQuestion?.answer); getColor1()\">\n        {{currentQuestion?.option1}} </ion-button>\n\n      <ion-button [color]=\"btnColor2\"\n                  expand=\"full\"\n                  class=\"option mb-3\"\n                  [disabled]=\"disableClick\"\n                  (click)=\"checkAnswer(currentQuestion?.option2, currentQuestion?.answer); getColor2()\">\n        {{currentQuestion?.option2}} </ion-button>\n\n\n      <ion-button [color]=\"btnColor3\"\n                  expand=\"full\"\n                  class=\"option mb-3\"\n                  [disabled]=\"disableClick\"\n                  (click)=\"checkAnswer(currentQuestion?.option3, currentQuestion.answer); getColor3() \">\n        {{currentQuestion?.option3}} </ion-button>\n\n\n      <ion-button [color]=\"btnColor4\"\n                  expand=\"full\"\n                  class=\"option mb-3\"\n                  [disabled]=\"disableClick\"\n                  (click)=\"checkAnswer(currentQuestion?.option4, currentQuestion.answer); getColor4()\">\n        {{currentQuestion?.option4}} </ion-button>\n\n    </ion-card>\n\n\n    <div *ngIf=\"!loadingGame  && !startGame\"\n         style=\"padding-top: 20%;\">\n      <ion-card class=\"p-3\">\n        <!-- select filter -->\n        <ion-item color=\"success\">\n          <ion-label color=\"light\"\n                     class=\"text-center\">select your category</ion-label>\n          <ion-select select=\"success\"\n                      interface=\"popover\"\n                      (ngModelChange)=\"selectChange($event)\"\n                      [(ngModel)]=\"model.filterOptions\">\n            <ion-select-option class=\"text-dark\"\n                               value=\"economics\">Economics</ion-select-option>\n            <ion-select-option color=\"success\"\n                               value=\"sport\">Sport</ion-select-option>\n            <ion-select-option color=\"success\"\n                               value=\"movie\">Movie</ion-select-option>\n            <ion-select-option color=\"success\"\n                               value=\"science\">Science</ion-select-option>\n            <ion-select-option color=\"success\"\n                               value=\"history\">History</ion-select-option>\n            <ion-select-option color=\"success\"\n                               value=\"politics\">Politics</ion-select-option>\n            <ion-select-option color=\"success\"\n                               value=\"arts\">Art</ion-select-option>\n            <ion-select-option color=\"success\"\n                               value=\"tourism\">Tourism</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-card>\n\n      <div class=\"ion-text-center ion-padding\">\n        <ion-button color=\"success\"\n                    size=\"large\"\n                    color=\"success\"\n                    *ngIf=\"!startGame\"\n                    (click)=\"startQuestion()\">\n          PLAY NOW !</ion-button>\n      </div>\n      <!-- <div class=\" text-center  p-2 mt-5 animated infinite\n                   shake  \" #info> \n                    <p class=\"info\"  *ngIf=\"!startGame\">15 correct questions can give 5k</p>\n                  </div> -->\n    </div>\n\n\n    <br>\n    <!-- <div class=\"justify-content-center d-flex\" *ngIf=\"!startGame\">\n              <img src=\"../../assets/animation/animated-playgame.gif\" alt=\"\">\n          </div> -->\n\n    <div *ngIf=\"low_balance\"\n         class=\" \">\n      <div class=\"toast-container mb-5\">\n        <ion-chip>\n          <!-- <ion-icon name=\"hand\" color=\"danger\"></ion-icon> -->\n          <ion-label class=\"font-weight-bold text-danger\"> YOUR ACCOUNT IS LOW! CLICK HERE </ion-label> <br>\n          <ion-icon [routerLink]=\"['/account']\"\n                    size=\"large\"\n                    name=\"wallet\"\n                    color=\"success\"></ion-icon>\n        </ion-chip>\n      </div>\n    </div>\n\n    <!-- loader -->\n    <div *ngIf=\"loadingGame\"\n         class=\" \">\n      <div class=\"toast-container \">\n        <div class=\"lds-roller\">\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n      <p style=\"margin-top: 30%;\"\n         class=\"bg-dark  text-white text-center\"> preparing questions...</p>\n    </div>\n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/playsection/playsection.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/playsection/playsection.module.ts ***!
      \***************************************************/

    /*! exports provided: PlaysectionPageModule */

    /***/
    function srcAppPlaysectionPlaysectionModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlaysectionPageModule", function () {
        return PlaysectionPageModule;
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


      var _playsection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./playsection.page */
      "./src/app/playsection/playsection.page.ts");

      var routes = [{
        path: '',
        component: _playsection_page__WEBPACK_IMPORTED_MODULE_6__["PlaysectionPage"]
      }];

      var PlaysectionPageModule = function PlaysectionPageModule() {
        _classCallCheck(this, PlaysectionPageModule);
      };

      PlaysectionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_playsection_page__WEBPACK_IMPORTED_MODULE_6__["PlaysectionPage"]]
      })], PlaysectionPageModule);
      /***/
    },

    /***/
    "./src/app/playsection/playsection.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/playsection/playsection.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPlaysectionPlaysectionPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header img {\n  width: 70px;\n  height: 30px;\n  padding: 5px 0;\n}\n\n.option {\n  border-radius: 10px #000;\n  font-weight: bold;\n  color: #f7f7f7;\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n\n.info {\n  color: white;\n  text-shadow: 1px 1px 2px #057009, 0 0 25px #04921c, 0 0 5px darkblue;\n}\n\n.content {\n  background-image: url('bg.png');\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.play-area {\n  background-color: #00351a;\n  color: #fff;\n}\n\n.icon-bar {\n  width: 100%;\n  background-color: #555;\n  display: flex;\n  overflow: auto;\n}\n\n.play-area-header {\n  background-color: #006633;\n  color: #fff;\n}\n\n#count {\n  border: 10px;\n  border-color: #000;\n}\n\n.toast-container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  top: auto;\n  margin-bottom: 80px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n}\n\n.lds-roller {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n\n.lds-roller div {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 32px 32px;\n}\n\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #fbfdfc;\n  margin: -3px 0 0 -3px;\n}\n\n.lds-roller div:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n\n.lds-roller div:nth-child(1):after {\n  top: 50px;\n  left: 50px;\n}\n\n.lds-roller div:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n\n.lds-roller div:nth-child(2):after {\n  top: 54px;\n  left: 45px;\n}\n\n.lds-roller div:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n\n.lds-roller div:nth-child(3):after {\n  top: 57px;\n  left: 39px;\n}\n\n.lds-roller div:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n\n.lds-roller div:nth-child(4):after {\n  top: 58px;\n  left: 32px;\n}\n\n.lds-roller div:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n\n.lds-roller div:nth-child(5):after {\n  top: 57px;\n  left: 25px;\n}\n\n.lds-roller div:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n\n.lds-roller div:nth-child(6):after {\n  top: 54px;\n  left: 19px;\n}\n\n.lds-roller div:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n\n.lds-roller div:nth-child(7):after {\n  top: 50px;\n  left: 14px;\n}\n\n.lds-roller div:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n\n.lds-roller div:nth-child(8):after {\n  top: 45px;\n  left: 10px;\n}\n\n@-webkit-keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n#nominated {\n  color: white;\n  text-shadow: 2px 2px 4px #000000;\n}\n\n#correct {\n  color: #12e784;\n  text-align: center;\n  text-shadow: 1px 1px 1px #025807;\n}\n\n#wrong {\n  color: #fc6b6b;\n  text-align: center;\n  text-shadow: 1px 1px 2px #740303;\n}\n\n.leaders {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheXNlY3Rpb24vcGxheXNlY3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQUY7O0FBSUE7RUFDQyx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUREOztBQUlBO0VBQ0MsWUFBQTtFQUNBLG9FQUFBO0FBREQ7O0FBS0E7RUFDQywrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUZEOztBQUtBO0VBQ0MseUJBQUE7RUFDQSxXQUFBO0FBRkQ7O0FBSUE7RUFDQyxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUREOztBQUlBO0VBQ0MseUJBQUE7RUFDQSxXQUFBO0FBREQ7O0FBS0E7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7QUFGRDs7QUFNQTtFQUNDLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBSEQ7O0FBT0E7RUFDQyxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFKRDs7QUFNQTtFQUNDLHdFQUFBO1VBQUEsZ0VBQUE7RUFDQSwyQkFBQTtBQUhEOztBQUtBO0VBQ0MsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBRkQ7O0FBSUE7RUFDQyxnQ0FBQTtVQUFBLHdCQUFBO0FBREQ7O0FBR0E7RUFDQyxTQUFBO0VBQ0EsVUFBQTtBQUFEOztBQUVBO0VBQ0MsZ0NBQUE7VUFBQSx3QkFBQTtBQUNEOztBQUNBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7QUFFRDs7QUFBQTtFQUNDLGdDQUFBO1VBQUEsd0JBQUE7QUFHRDs7QUFEQTtFQUNDLFNBQUE7RUFDQSxVQUFBO0FBSUQ7O0FBRkE7RUFDQyxnQ0FBQTtVQUFBLHdCQUFBO0FBS0Q7O0FBSEE7RUFDQyxTQUFBO0VBQ0EsVUFBQTtBQU1EOztBQUpBO0VBQ0MsK0JBQUE7VUFBQSx1QkFBQTtBQU9EOztBQUxBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7QUFRRDs7QUFOQTtFQUNDLGdDQUFBO1VBQUEsd0JBQUE7QUFTRDs7QUFQQTtFQUNDLFNBQUE7RUFDQSxVQUFBO0FBVUQ7O0FBUkE7RUFDQyxnQ0FBQTtVQUFBLHdCQUFBO0FBV0Q7O0FBVEE7RUFDQyxTQUFBO0VBQ0EsVUFBQTtBQVlEOztBQVZBO0VBQ0MsZ0NBQUE7VUFBQSx3QkFBQTtBQWFEOztBQVhBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7QUFjRDs7QUFaQTtFQUNDO0lBQ0MsdUJBQUE7RUFlQTtFQWJEO0lBQ0MseUJBQUE7RUFlQTtBQUNGOztBQXJCQTtFQUNDO0lBQ0MsdUJBQUE7RUFlQTtFQWJEO0lBQ0MseUJBQUE7RUFlQTtBQUNGOztBQWJBO0VBQ0MsWUFBQTtFQUNBLGdDQUFBO0FBZUQ7O0FBYkE7RUFDQyxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQWdCRDs7QUFkQTtFQUNDLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBaUJEOztBQWRBO0VBQ0MsWUFBQTtBQWlCRCIsImZpbGUiOiJzcmMvYXBwL3BsYXlzZWN0aW9uL3BsYXlzZWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuXHRpbWcge1xuXHRcdHdpZHRoOiA3MHB4O1xuXHRcdGhlaWdodDogMzBweDtcblx0XHRwYWRkaW5nOiA1cHggMDtcblx0fVxufVxuXG4ub3B0aW9uIHtcblx0Ym9yZGVyLXJhZGl1czogMTBweCAjMDAwO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Y29sb3I6ICNmN2Y3Zjc7XG5cdG1hcmdpbi10b3A6IDdweDtcblx0bWFyZ2luLWJvdHRvbTogN3B4O1xufVxuXG4uaW5mbyB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0dGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYig1LCAxMTIsIDkpLCAwIDAgMjVweCByZ2IoNCwgMTQ2LCAyOCksXG5cdFx0MCAwIDVweCBkYXJrYmx1ZTtcbn1cblxuLmNvbnRlbnQge1xuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvYmcucG5nJyk7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4ucGxheS1hcmVhIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMzUxYTtcblx0Y29sb3I6ICNmZmY7XG59XG4uaWNvbi1iYXIge1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzU1NTtcblx0ZGlzcGxheTogZmxleDtcblx0b3ZlcmZsb3c6IGF1dG87XG59XG5cbi5wbGF5LWFyZWEtaGVhZGVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwNjYzMztcblx0Y29sb3I6ICNmZmY7XG5cdC8vIGNvbG9yOiAjZTdmMGUwO1xufVxuXG4jY291bnQge1xuXHRib3JkZXI6IDEwcHg7XG5cdGJvcmRlci1jb2xvcjogIzAwMDtcbn1cblxuLy8gLy8gICBsb2FkaW5nXG4udG9hc3QtY29udGFpbmVyIHtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0dG9wOiBhdXRvO1xuXHRtYXJnaW4tYm90dG9tOiA4MHB4O1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0Ym90dG9tOiAwO1xuXHR6LWluZGV4OiA5OTk7XG59XG5cbi8vIGxvYWRlclxuLmxkcy1yb2xsZXIge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6IDY0cHg7XG5cdGhlaWdodDogNjRweDtcbn1cbi5sZHMtcm9sbGVyIGRpdiB7XG5cdGFuaW1hdGlvbjogbGRzLXJvbGxlciAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGU7XG5cdHRyYW5zZm9ybS1vcmlnaW46IDMycHggMzJweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjphZnRlciB7XG5cdGNvbnRlbnQ6ICcgJztcblx0ZGlzcGxheTogYmxvY2s7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDZweDtcblx0aGVpZ2h0OiA2cHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0YmFja2dyb3VuZDogcmdiKDI1MSwgMjUzLCAyNTIpO1xuXHRtYXJnaW46IC0zcHggMCAwIC0zcHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpIHtcblx0YW5pbWF0aW9uLWRlbGF5OiAtMC4wMzZzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKTphZnRlciB7XG5cdHRvcDogNTBweDtcblx0bGVmdDogNTBweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMikge1xuXHRhbmltYXRpb24tZGVsYXk6IC0wLjA3MnM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpOmFmdGVyIHtcblx0dG9wOiA1NHB4O1xuXHRsZWZ0OiA0NXB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKSB7XG5cdGFuaW1hdGlvbi1kZWxheTogLTAuMTA4cztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMyk6YWZ0ZXIge1xuXHR0b3A6IDU3cHg7XG5cdGxlZnQ6IDM5cHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpIHtcblx0YW5pbWF0aW9uLWRlbGF5OiAtMC4xNDRzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KTphZnRlciB7XG5cdHRvcDogNThweDtcblx0bGVmdDogMzJweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSkge1xuXHRhbmltYXRpb24tZGVsYXk6IC0wLjE4cztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSk6YWZ0ZXIge1xuXHR0b3A6IDU3cHg7XG5cdGxlZnQ6IDI1cHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpIHtcblx0YW5pbWF0aW9uLWRlbGF5OiAtMC4yMTZzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KTphZnRlciB7XG5cdHRvcDogNTRweDtcblx0bGVmdDogMTlweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNykge1xuXHRhbmltYXRpb24tZGVsYXk6IC0wLjI1MnM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpOmFmdGVyIHtcblx0dG9wOiA1MHB4O1xuXHRsZWZ0OiAxNHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KSB7XG5cdGFuaW1hdGlvbi1kZWxheTogLTAuMjg4cztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCk6YWZ0ZXIge1xuXHR0b3A6IDQ1cHg7XG5cdGxlZnQ6IDEwcHg7XG59XG5Aa2V5ZnJhbWVzIGxkcy1yb2xsZXIge1xuXHQwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdH1cblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcblx0fVxufVxuI25vbWluYXRlZCB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0dGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICMwMDAwMDA7XG59XG4jY29ycmVjdCB7XG5cdGNvbG9yOiByZ2IoMTgsIDIzMSwgMTMyKTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggIzAyNTgwNztcbn1cbiN3cm9uZyB7XG5cdGNvbG9yOiByZ2IoMjUyLCAxMDcsIDEwNyk7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dGV4dC1zaGFkb3c6IDFweCAxcHggMnB4ICM3NDAzMDM7XG59XG5cbi5sZWFkZXJzIHtcblx0aGVpZ2h0OiA1MHB4O1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/playsection/playsection.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/playsection/playsection.page.ts ***!
      \*************************************************/

    /*! exports provided: PlaysectionPage */

    /***/
    function srcAppPlaysectionPlaysectionPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlaysectionPage", function () {
        return PlaysectionPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _components_fail_game_fail_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../components/fail-game/fail-game.component */
      "./src/app/components/fail-game/fail-game.component.ts");
      /* harmony import */


      var _components_congrats_congrats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../components/congrats/congrats.component */
      "./src/app/components/congrats/congrats.component.ts");
      /* harmony import */


      var src_app_shared_game_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/game-service.service */
      "./src/app/shared/game-service.service.ts");
      /* harmony import */


      var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/user.service */
      "./src/app/shared/user.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _shared_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../shared/account.service */
      "./src/app/shared/account.service.ts");
      /* harmony import */


      var _services_behavour_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../services/behavour.service */
      "./src/app/services/behavour.service.ts"); // import { NativeAudio } from '@ionic-native/native-audio';


      var PlaysectionPage = /*#__PURE__*/function () {
        function PlaysectionPage(userService, gameService, accountService, alertController, modalController, behaviorService, // private nativeAudio: NativeAudio,
        router) {
          _classCallCheck(this, PlaysectionPage);

          this.userService = userService;
          this.gameService = gameService;
          this.accountService = accountService;
          this.alertController = alertController;
          this.modalController = modalController;
          this.behaviorService = behaviorService;
          this.router = router;
          this.startGame = false;
          this.correcQuestion = 0;
          this.wrongQuestion = 0;
          this.runningQuestion = 0;
          this.timeMinute = 0;
          this.timeSeconds = 0;
          this.loadingGame = false;
          this.correctAns = 0;
          this.wrongAns = 0;
          this.disableClick = false;
          this.low_balance = false;
          this.btnColor1 = "success";
          this.btnColor2 = "success";
          this.btnColor3 = "success";
          this.btnColor4 = "success";
          this.GameTimeMinute = 0;
          this.GameTimeSeconds = 0;
          this.model = {
            filterOptions: []
          }; // setTimeout(()=> {
          //   this.info.nativeElement.classList.remove('infinite');
          // }, 12000);
        }

        _createClass(PlaysectionPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.behaviorService.getGameAmount().subscribe(function (amount) {
              console.log('see AMount', amount);
              _this.currentGameAmount = amount;

              if (amount === null) {
                _this.getRemoteAmount();
              }
            });
          }
        }, {
          key: "getRemoteAmount",
          value: function getRemoteAmount() {
            var _this2 = this;

            console.log('getting remote amoutn');
            this.loadingGame = true;
            this.gameService.getGameAmount().subscribe(function (res) {
              var _a, _b;

              if ((_a = res.data) === null || _a === void 0 ? void 0 : _a.amount) {
                _this2.behaviorService.setGameAmount((_b = res.data) === null || _b === void 0 ? void 0 : _b.amount);
              }

              _this2.loadingGame = false;
            }, function (err) {
              _this2.loadingGame = false;
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.gameService.getAdminDate();
            this.getQuestionForGame();
            console.log('will enter');
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // this.gameQuestions.unsubscribe();
            this.QuestionSub = '';
            this.playCategory = '';
            this.loadBalanceSub = '';
            this.deductSub = '';
            this.timeSeconds = 0;
            this.timeMinute = 0;
            clearInterval(this.timerTicker);
          }
        }, {
          key: "getColor1",
          value: function getColor1() {
            this.btnColor1 = 'light';
          }
        }, {
          key: "getColor2",
          value: function getColor2() {
            this.btnColor2 = 'light';
          }
        }, {
          key: "getColor3",
          value: function getColor3() {
            this.btnColor3 = 'light';
          }
        }, {
          key: "getColor4",
          value: function getColor4() {
            this.btnColor4 = 'light';
          }
        }, {
          key: "getQuestionForGame",
          value: function getQuestionForGame() {
            var _this3 = this;

            this.loadingGame = true;
            this.QuestionSub = this.userService.getRandomQuestionsForGame().subscribe(function (res) {
              _this3.gameQuestions = res['questions'];
              _this3.lastQuestion = _this3.gameQuestions.length - 1;
              _this3.loadingGame = false;
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "selectChange",
          value: function selectChange($event) {
            this.playByCategory($event);
          }
        }, {
          key: "playByCategory",
          value: function playByCategory(category) {
            var _this4 = this;

            this.loadingGame = true;
            this.playCategory = this.userService.playByCategory(category).subscribe(function (res) {
              _this4.loadingGame = false;
              _this4.gameQuestions = res['questions'];
              _this4.lastQuestion = _this4.gameQuestions.length - 1;
            });
          }
        }, {
          key: "gameisOver",
          value: function gameisOver() {
            var _this5 = this;

            this.GameTimeMinute = this.timeMinute;
            this.GameTimeSeconds = this.timeSeconds;
            this.gameOver = true;
            this.loadingGame = true;
            this.startGame = false;
            var minutes = 3 - this.timeMinute;
            var seconds = 60 - this.timeSeconds;
            var correct_qst = this.correctAns;
            var wrong_qst = this.wrongAns; // this.presentResult(minutes, seconds, correct_qst);

            if (correct_qst === 15) {
              this.presentCongratsModal(minutes, seconds, correct_qst);
            } else {
              this.presentFailedModal(minutes, seconds, correct_qst);
            }

            var record = {
              minutes: minutes,
              seconds: seconds,
              correct_qst: correct_qst,
              wrong_qst: wrong_qst
            };
            this.userService.postQuestionRecord(record).subscribe(function (res) {
              _this5.loadingGame = false;
              console.log('record submitted..');
              _this5.gameOver = null;
              _this5.disableClick = false;
              _this5.loadingGame = false;
              _this5.startGame = false;
              _this5.runningQuestion = 0;
              _this5.playCategory = '';
              _this5.loadBalanceSub = '';
              _this5.deductSub = '';
              _this5.timeSeconds = 0;
              _this5.timeMinute = 0;
              clearInterval(_this5.timerTicker);
            });
          }
        }, {
          key: "checkAnswer",
          value: function checkAnswer(selection, correctAnswer) {
            var _this6 = this;

            this.disableClick = true;

            if (selection == correctAnswer) {
              this.correct.nativeElement.classList.add('heartBeat');
              this.correctAns = this.correctAns + 1;
            } else {
              this.wrongAns = this.wrongAns + 1;
              this.wrong.nativeElement.classList.add('wobble');
            } // tslint:disable-next-line: align


            setTimeout(function () {
              _this6.nextQuestion();
            }, 1000);
          }
        }, {
          key: "startQuestion",
          value: function startQuestion() {
            var _this7 = this;

            this.loadingGame = true;
            this.loadBalanceSub = this.accountService.loadBalanceForCalculation().subscribe(function (res) {
              var UserBalance = res['balance'];

              if (UserBalance < _this7.currentGameAmount) {
                _this7.low_balance = true;
                setTimeout(function () {
                  _this7.low_balance = false;
                }, 7000);
                _this7.loadingGame = false;
              } else {
                _this7.deductSub = _this7.accountService.deductGameAmountFromAccount().subscribe(function (res) {
                  console.log('PAY RES', res);

                  _this7.accountService.loadMyBalance();

                  _this7.startGame = true;
                  _this7.currentQuestion = _this7.gameQuestions[_this7.runningQuestion];

                  _this7.startTimer();

                  _this7.loadingGame = false;
                }, function (error) {
                  console.log('ERROR', error);
                });
              }
            }, function (err) {
              console.error(err);
              _this7.loadingGame = false;
            });
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
            this.btnColor1 = 'success';
            this.btnColor2 = 'success';
            this.btnColor3 = 'success';
            this.btnColor4 = 'success';
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
          key: "renderProgress",
          value: function renderProgress() {
            for (var qIndex = 0; qIndex <= this.lastQuestion; qIndex++) {
              this.progress = qIndex;
            }
          }
        }, {
          key: "startTimer",
          value: function startTimer() {
            var _this8 = this;

            // COUNTDOWN IN SECONDS
            // EXAMPLE - 5 MINS = 5 X 60 = 300 SECS
            var counter = 240; // Start if not past end date

            if (counter > 0) {
              this.timerTicker = setInterval(function () {
                // Stop if passed end time
                counter--;

                if (counter == 0 || _this8.gameOver) {
                  clearInterval(_this8.timerTicker);

                  _this8.gameisOver();

                  counter = 0;
                }

                var secs = counter;
                var mins = Math.floor(secs / 60); // 1 min = 60 secs

                secs -= mins * 60;
                _this8.timeMinute = mins;
                _this8.timeSeconds = secs;

                if (_this8.gameOver) {
                  clearInterval(_this8.timerTicker);
                } else {}
              }, 1000);
            }
          }
        }, {
          key: "gameOverToleaderboard",
          value: function gameOverToleaderboard() {
            this.gameOver = undefined;
            this.correctAns = 0;
            this.wrongAns = 0;
            this.router.navigate(['/leaderboard']);
          }
        }, {
          key: "gameOverToRecords",
          value: function gameOverToRecords() {
            this.gameOver = undefined;
            this.correctAns = 0;
            this.wrongAns = 0;
            this.router.navigate(['/myrecord']);
          }
        }, {
          key: "presentCongratsModal",
          value: function presentCongratsModal(minutes, seconds, correctQuestion) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal, data;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _components_congrats_congrats_component__WEBPACK_IMPORTED_MODULE_2__["CongratsComponent"],
                        componentProps: {
                          minutes: minutes,
                          seconds: seconds,
                          correctQuestion: correctQuestion
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      _context.next = 7;
                      return modal.onDidDismiss();

                    case 7:
                      data = _context.sent;

                    case 8:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentFailedModal",
          value: function presentFailedModal(minutes, seconds, correctQuestion) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal, data;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log('QSTTT', correctQuestion);
                      _context2.next = 3;
                      return this.modalController.create({
                        component: _components_fail_game_fail_game_component__WEBPACK_IMPORTED_MODULE_1__["FailGameComponent"],
                        componentProps: {
                          minutes: minutes,
                          seconds: seconds,
                          correctQuestion: correctQuestion
                        }
                      });

                    case 3:
                      modal = _context2.sent;
                      _context2.next = 6;
                      return modal.present();

                    case 6:
                      _context2.next = 8;
                      return modal.onDidDismiss();

                    case 8:
                      data = _context2.sent;

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentResult",
          value: function presentResult(min, secs, correct) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this9 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        header: ' GAME RESULT',
                        message: "<h1>Score  ".concat(correct, "/15</h1>  <br>\n              <h4 class=\"text-success\">Elapsed ").concat(min, " min , ").concat(secs, " secs</h4>"),
                        buttons: [{
                          text: 'OK',
                          cssClass: 'success',
                          handler: function handler(val) {
                            _this9.router.navigate(['/tabs/gamesection']);
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                      setTimeout(function () {
                        _this9.router.navigate(['/tabs/gamesection']);

                        alert.dismiss();
                      }, 3000);

                    case 6:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return PlaysectionPage;
      }();

      PlaysectionPage.ctorParameters = function () {
        return [{
          type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: src_app_shared_game_service_service__WEBPACK_IMPORTED_MODULE_3__["GameServiceService"]
        }, {
          type: _shared_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _services_behavour_service__WEBPACK_IMPORTED_MODULE_9__["BehavourService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      PlaysectionPage.propDecorators = {
        info: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
          args: ['info', {
            "static": false
          }]
        }],
        correct: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
          args: ['correct', {
            "static": false
          }]
        }],
        wrong: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
          args: ['wrong', {
            "static": false
          }]
        }]
      };
      PlaysectionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-playsection',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./playsection.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/playsection/playsection.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./playsection.page.scss */
        "./src/app/playsection/playsection.page.scss"))["default"]]
      })], PlaysectionPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=playsection-playsection-module-es5.js.map