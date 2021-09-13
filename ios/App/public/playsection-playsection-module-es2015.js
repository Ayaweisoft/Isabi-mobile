(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["playsection-playsection-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/playsection/playsection.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/playsection/playsection.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar> \n      \n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      \n      <div class=\"row d-flex justify-content-center\">\n        <img class=\"rounded-top\"  src=\"../../../assets/icon/Logoicon.png\">\n        </div>\n    </ion-toolbar> \n  </ion-header>\n\n<ion-content>\n  <div  class=\"play-area content\"> \n\n  \n    <ion-fab *ngIf=\"!gameOver\" vertical=\"top\" horizontal=\"center\" slot=\"fixed\">\n        <ion-fab-button color=\"success\">\n         <ion-row>\n           <h5 class=\"mt-2 p-3 font-weight-bold\">{{timeMinute}} : {{timeSeconds}} </h5>\n         </ion-row>\n        </ion-fab-button>\n      </ion-fab>\n\n  \n      <!-- *ngFor=\"let item of accountService.leaderboard$; index as i\" -->\n         <!-- <div >\n                  <ion-card-content>\n                    <ion-row>\n                      <ion-col  *ngFor=\"let item of accountService.leaderboardGameSection$\" >\n                          <ion-avatar>\n                              <img class=\"leaders\" src=\"../../assets/img/leader_icon.png\" alt=\"\">\n                            </ion-avatar><p class=\"font-weight-bold\">{{item.user}} </p><br>\n                       </ion-col>\n                    </ion-row>\n                  </ion-card-content>\n        </div> -->\n  \n   \n\n      <ion-item-divider *ngIf=\"startGame\" >\n         \n            <ion-segment>\n              <div class=\"animated\" #correct>\n              <ion-label  class=\" font-weight-bold text-success\"> CORRECT : {{correctAns}}</ion-label>\n            </div>\n            </ion-segment>\n        \n          \n            <ion-segment >\n              <div class=\"animated\" #wrong >\n              <ion-label class=\"animated font-weight-bold text-danger\">WRONG : {{wrongAns}} </ion-label>\n            </div>\n            </ion-segment>\n          \n      </ion-item-divider>\n\n\n      <!-- question section -->\n      <ion-card slot=\"fixed\" *ngIf=\"startGame\" class=\"m-0 play-area\" style=\"width: 100%;\" >\n          <div class=\"justify-content-right d-flex ml-2 \">\n                     <h3 class=\" font-weight-bold\" id=\"count\"> {{runningQuestion + 1}}/15 </h3>  <!-- Default Segment -->\n          \n          </div>\n           \n           <ion-card-title ><p class=\"m-4 text-white\" >{{currentQuestion?.question}} </p></ion-card-title>\n           <!-- <ion-card-content class=\"text-left mb-5\">\n           </ion-card-content> -->\n           </ion-card>\n\n           <!-- select answer -->\n\n           <ion-card slot=\"fixed\"  class=\"p-2\" *ngIf=\"startGame\" color=\"light\">\n            <ion-button [color]=\"btnColor1\" expand=\"full\"  class=\"option mb-3\" [disabled]=\"disableClick\" \n            (click)=\"checkAnswer(currentQuestion?.option1, currentQuestion?.answer); getColor1()\" >\n              {{currentQuestion?.option1}} </ion-button>\n         \n             <ion-button  [color]=\"btnColor2\"  expand=\"full\" class=\"option mb-3\" [disabled]=\"disableClick\"\n              (click)=\"checkAnswer(currentQuestion?.option2, currentQuestion?.answer); getColor2()\">\n                {{currentQuestion?.option2}} </ion-button>\n         \n       \n             <ion-button [color]=\"btnColor3\" expand=\"full\"  class=\"option mb-3\" [disabled]=\"disableClick\"\n             (click)=\"checkAnswer(currentQuestion?.option3, currentQuestion.answer); getColor3() \">\n               {{currentQuestion?.option3}} </ion-button>\n         \n          \n             <ion-button [color]=\"btnColor4\" expand=\"full\"  class=\"option mb-3\" [disabled]=\"disableClick\" \n              (click)=\"checkAnswer(currentQuestion?.option4, currentQuestion.answer); getColor4()\">\n                {{currentQuestion?.option4}} </ion-button>\n         \n          </ion-card>\n \n\n           <div *ngIf=\"!loadingGame  && !startGame\" style=\"padding-top: 20%;\">\n            <ion-card class=\"p-3\">\n              <!-- select filter -->\n              <ion-item color=\"success\" >\n                <ion-label color=\"light\" class=\"text-center\">select your category</ion-label>\n                <ion-select select=\"success\" interface=\"popover\" (ngModelChange)=\"selectChange($event)\" \n                [(ngModel)]=\"model.filterOptions\">\n                  <ion-select-option class=\"text-dark\" value=\"economics\">Economics</ion-select-option>\n                  <ion-select-option color=\"success\" value=\"sport\">Sport</ion-select-option>\n                  <ion-select-option color=\"success\" value=\"movie\">Movie</ion-select-option>\n                  <ion-select-option color=\"success\" value=\"science\">Science</ion-select-option>\n                  <ion-select-option color=\"success\" value=\"history\">History</ion-select-option>\n                  <ion-select-option color=\"success\" value=\"politics\">Politics</ion-select-option>\n                  <ion-select-option color=\"success\" value=\"arts\">Art</ion-select-option>\n                  <ion-select-option  color=\"success\" value=\"tourism\">Tourism</ion-select-option>\n                </ion-select>\n              </ion-item>\n            </ion-card>\n\n              <div class=\"ion-text-center ion-padding\">\n                <ion-button   color=\"success\"\n                size=\"large\" color=\"success\"   *ngIf=\"!startGame\" (click)=\"startQuestion()\">\n                  PLAY NOW !</ion-button>\n              </div>\n                  <!-- <div class=\" text-center  p-2 mt-5 animated infinite\n                   shake  \" #info> \n                    <p class=\"info\"  *ngIf=\"!startGame\">15 correct questions can give 5k</p>\n                  </div> -->\n           </div>\n \n \n     <br>\n          <!-- <div class=\"justify-content-center d-flex\" *ngIf=\"!startGame\">\n              <img src=\"../../assets/animation/animated-playgame.gif\" alt=\"\">\n          </div> -->\n\n          <div *ngIf=\"low_balance\"  class=\" \">\n              <div class=\"toast-container mb-5\">\n                <ion-chip>\n                  <!-- <ion-icon name=\"hand\" color=\"danger\"></ion-icon> -->\n                  <ion-label class=\"font-weight-bold text-danger\"> YOUR ACCOUNT IS LOW! CLICK HERE  </ion-label> <br>\n                  <ion-icon [routerLink]=\"['/account']\"  size=\"large\" name=\"wallet\" color=\"success\"></ion-icon>\n                </ion-chip>\n              </div>\n            </div>\n\n                       <!-- loader -->\n                <div *ngIf=\"loadingGame\" class=\" \">\n                  <div class=\"toast-container \">\n                      <div class=\"lds-roller\"><div></div><div></div><div></div><div></div>\n                      <div></div><div></div><div></div><div></div></div>\n                  </div>\n                  <p style=\"margin-top: 30%;\" class=\"bg-dark  text-white text-center\"> preparing questions...</p>\n                </div>\n              </div>\n        \n</ion-content> \n");

/***/ }),

/***/ "./src/app/playsection/playsection.module.ts":
/*!***************************************************!*\
  !*** ./src/app/playsection/playsection.module.ts ***!
  \***************************************************/
/*! exports provided: PlaysectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaysectionPageModule", function() { return PlaysectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _playsection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playsection.page */ "./src/app/playsection/playsection.page.ts");







const routes = [
    {
        path: '',
        component: _playsection_page__WEBPACK_IMPORTED_MODULE_6__["PlaysectionPage"]
    }
];
let PlaysectionPageModule = class PlaysectionPageModule {
};
PlaysectionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_playsection_page__WEBPACK_IMPORTED_MODULE_6__["PlaysectionPage"]]
    })
], PlaysectionPageModule);



/***/ }),

/***/ "./src/app/playsection/playsection.page.scss":
/*!***************************************************!*\
  !*** ./src/app/playsection/playsection.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".option {\n  border-radius: 10px #000;\n  font-weight: bold;\n  color: #f7f7f7;\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n\n.info {\n  color: white;\n  text-shadow: 1px 1px 2px #057009, 0 0 25px #04921c, 0 0 5px darkblue;\n}\n\n.content {\n  background-image: url('bg.png');\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.play-area {\n  background-color: #00351a;\n  color: #fff;\n}\n\n.icon-bar {\n  width: 100%;\n  background-color: #555;\n  display: flex;\n  overflow: auto;\n}\n\n.play-area-header {\n  background-color: #006633;\n  color: #fff;\n}\n\n#count {\n  border: 10px;\n  border-color: #000;\n}\n\n.toast-container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  top: auto;\n  margin-bottom: 80px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n}\n\n.lds-roller {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n\n.lds-roller div {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 32px 32px;\n}\n\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #fbfdfc;\n  margin: -3px 0 0 -3px;\n}\n\n.lds-roller div:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n\n.lds-roller div:nth-child(1):after {\n  top: 50px;\n  left: 50px;\n}\n\n.lds-roller div:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n\n.lds-roller div:nth-child(2):after {\n  top: 54px;\n  left: 45px;\n}\n\n.lds-roller div:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n\n.lds-roller div:nth-child(3):after {\n  top: 57px;\n  left: 39px;\n}\n\n.lds-roller div:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n\n.lds-roller div:nth-child(4):after {\n  top: 58px;\n  left: 32px;\n}\n\n.lds-roller div:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n\n.lds-roller div:nth-child(5):after {\n  top: 57px;\n  left: 25px;\n}\n\n.lds-roller div:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n\n.lds-roller div:nth-child(6):after {\n  top: 54px;\n  left: 19px;\n}\n\n.lds-roller div:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n\n.lds-roller div:nth-child(7):after {\n  top: 50px;\n  left: 14px;\n}\n\n.lds-roller div:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n\n.lds-roller div:nth-child(8):after {\n  top: 45px;\n  left: 10px;\n}\n\n@-webkit-keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n#nominated {\n  color: white;\n  text-shadow: 2px 2px 4px #000000;\n}\n\n#correct {\n  color: #12e784;\n  text-align: center;\n  text-shadow: 1px 1px 1px #025807;\n}\n\n#wrong {\n  color: #fc6b6b;\n  text-align: center;\n  text-shadow: 1px 1px 2px #740303;\n}\n\n.leaders {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheXNlY3Rpb24vcGxheXNlY3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0Usd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLRTtFQUNFLFlBQUE7RUFDQSxvRUFBQTtBQUZKOztBQUtFO0VBQ0UsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQywyQkFBQTtFQUNBLHNCQUFBO0VBQ0MsNEJBQUE7QUFGTjs7QUFLRTtFQUNFLHlCQUFBO0VBQ0UsV0FBQTtBQUZOOztBQUlBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQURGOztBQUtFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0FBRko7O0FBUUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVVBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUEY7O0FBU0E7RUFDRSx3RUFBQTtVQUFBLGdFQUFBO0VBQ0EsMkJBQUE7QUFORjs7QUFRQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUxGOztBQU9BO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQUpGOztBQU1BO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFIRjs7QUFLQTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFGRjs7QUFJQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBREY7O0FBR0E7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBQUY7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNBO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQUVGOztBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFHRjs7QUFEQTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QUFJRjs7QUFGQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBS0Y7O0FBSEE7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBTUY7O0FBSkE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQU9GOztBQUxBO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQVFGOztBQU5BO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFTRjs7QUFQQTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFVRjs7QUFSQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBV0Y7O0FBVEE7RUFDRTtJQUNFLHVCQUFBO0VBWUY7RUFWQTtJQUNFLHlCQUFBO0VBWUY7QUFDRjs7QUFsQkE7RUFDRTtJQUNFLHVCQUFBO0VBWUY7RUFWQTtJQUNFLHlCQUFBO0VBWUY7QUFDRjs7QUFWQTtFQUNFLFlBQUE7RUFDQSxnQ0FBQTtBQVlGOztBQVZBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFhRjs7QUFYQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBY0Y7O0FBWEE7RUFDRSxZQUFBO0FBY0YiLCJmaWxlIjoic3JjL2FwcC9wbGF5c2VjdGlvbi9wbGF5c2VjdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG4gIC5vcHRpb257XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAjMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiNmN2Y3Zjc7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgfVxuXG4gIC5pbmZve1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiKDUsIDExMiwgOSksIDAgMCAyNXB4IHJnYig0LCAxNDYsIDI4KSwgMCAwIDVweCBkYXJrYmx1ZTtcbiAgfVxuIFxuICAuY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JnLnBuZ1wiKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxuICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXG4gIH1cblxuICAucGxheS1hcmVhe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDM1MWE7XG4gICAgICBjb2xvcjojZmZmO1xufVxuLmljb24tYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ucGxheS1hcmVhLWhlYWRlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNjYzMztcbiAgY29sb3I6I2ZmZjtcbiAgLy8gY29sb3I6ICNlN2YwZTA7XG59XG5cbiAgI2NvdW50e1xuICAgIGJvcmRlcjogMTBweDtcbiAgICBib3JkZXItY29sb3I6ICMwMDA7XG4gIH1cbiAgXG5cblxuLy8gLy8gICBsb2FkaW5nXG4udG9hc3QtY29udGFpbmVye1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0b3A6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuXG4vLyBsb2FkZXJcbi5sZHMtcm9sbGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG4ubGRzLXJvbGxlciBkaXYge1xuICBhbmltYXRpb246IGxkcy1yb2xsZXIgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAzMnB4IDMycHg7XG59XG4ubGRzLXJvbGxlciBkaXY6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogcmdiKDI1MSwgMjUzLCAyNTIpO1xuICBtYXJnaW46IC0zcHggMCAwIC0zcHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wMzZzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKTphZnRlciB7XG4gIHRvcDogNTBweDtcbiAgbGVmdDogNTBweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjA3MnM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpOmFmdGVyIHtcbiAgdG9wOiA1NHB4O1xuICBsZWZ0OiA0NXB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMTA4cztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMyk6YWZ0ZXIge1xuICB0b3A6IDU3cHg7XG4gIGxlZnQ6IDM5cHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNDRzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KTphZnRlciB7XG4gIHRvcDogNThweDtcbiAgbGVmdDogMzJweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE4cztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSk6YWZ0ZXIge1xuICB0b3A6IDU3cHg7XG4gIGxlZnQ6IDI1cHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yMTZzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KTphZnRlciB7XG4gIHRvcDogNTRweDtcbiAgbGVmdDogMTlweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNykge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjI1MnM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpOmFmdGVyIHtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiAxNHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjg4cztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCk6YWZ0ZXIge1xuICB0b3A6IDQ1cHg7XG4gIGxlZnQ6IDEwcHg7XG59XG5Aa2V5ZnJhbWVzIGxkcy1yb2xsZXIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuI25vbWluYXRlZHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggIzAwMDAwMDtcbn1cbiNjb3JyZWN0e1xuICBjb2xvcjogcmdiKDE4LCAyMzEsIDEzMik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMwMjU4MDc7XG59XG4jd3Jvbmd7XG4gIGNvbG9yOiByZ2IoMjUyLCAxMDcsIDEwNyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4ICM3NDAzMDM7XG59XG5cbi5sZWFkZXJze1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cblxuICBcbiAgICJdfQ== */");

/***/ }),

/***/ "./src/app/playsection/playsection.page.ts":
/*!*************************************************!*\
  !*** ./src/app/playsection/playsection.page.ts ***!
  \*************************************************/
/*! exports provided: PlaysectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaysectionPage", function() { return PlaysectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_fail_game_fail_game_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/fail-game/fail-game.component */ "./src/app/components/fail-game/fail-game.component.ts");
/* harmony import */ var _components_congrats_congrats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/congrats/congrats.component */ "./src/app/components/congrats/congrats.component.ts");
/* harmony import */ var src_app_shared_game_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/game-service.service */ "./src/app/shared/game-service.service.ts");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/account.service */ "./src/app/shared/account.service.ts");
/* harmony import */ var _services_behavour_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/behavour.service */ "./src/app/services/behavour.service.ts");










// import { NativeAudio } from '@ionic-native/native-audio';
let PlaysectionPage = class PlaysectionPage {
    constructor(userService, gameService, accountService, alertController, modalController, behaviorService, 
    // private nativeAudio: NativeAudio,
    router) {
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
        };
        // setTimeout(()=> {
        //   this.info.nativeElement.classList.remove('infinite');
        // }, 12000);
    }
    ngOnInit() {
        this.behaviorService.getGameAmount().subscribe(amount => {
            console.log('see AMount', amount);
            this.currentGameAmount = amount;
            if (amount === null) {
                this.getRemoteAmount();
            }
        });
    }
    getRemoteAmount() {
        console.log('getting remote amoutn');
        this.loadingGame = true;
        this.gameService.getGameAmount().subscribe(res => {
            this.behaviorService.setGameAmount(res.data.amount);
            this.loadingGame = false;
        }, err => {
            this.loadingGame = false;
        });
    }
    ionViewWillEnter() {
        this.gameService.getAdminDate();
        this.getQuestionForGame();
        console.log('will enter');
    }
    ngOnDestroy() {
        // this.gameQuestions.unsubscribe();
        this.QuestionSub = '';
        this.playCategory = '';
        this.loadBalanceSub = '';
        this.deductSub = '';
        this.timeSeconds = 0;
        this.timeMinute = 0;
        clearInterval(this.timerTicker);
    }
    getColor1() {
        this.btnColor1 = 'light';
    }
    getColor2() {
        this.btnColor2 = 'light';
    }
    getColor3() {
        this.btnColor3 = 'light';
    }
    getColor4() {
        this.btnColor4 = 'light';
    }
    getQuestionForGame() {
        this.loadingGame = true;
        this.QuestionSub = this.userService.getRandomQuestionsForGame().subscribe(res => {
            this.gameQuestions = res['questions'];
            this.lastQuestion = this.gameQuestions.length - 1;
            this.loadingGame = false;
        }, err => {
            console.log(err);
        });
    }
    selectChange($event) {
        this.playByCategory($event);
    }
    playByCategory(category) {
        this.loadingGame = true;
        this.playCategory = this.userService.playByCategory(category).subscribe(res => {
            this.loadingGame = false;
            this.gameQuestions = res['questions'];
            this.lastQuestion = this.gameQuestions.length - 1;
        });
    }
    gameisOver() {
        this.GameTimeMinute = this.timeMinute;
        this.GameTimeSeconds = this.timeSeconds;
        this.gameOver = true;
        this.loadingGame = true;
        this.startGame = false;
        const minutes = (3 - this.timeMinute);
        const seconds = (60 - this.timeSeconds);
        let correct_qst = this.correctAns;
        let wrong_qst = this.wrongAns;
        // this.presentResult(minutes, seconds, correct_qst);
        if (correct_qst === 15) {
            this.presentCongratsModal(minutes, seconds, correct_qst);
        }
        else {
            this.presentFailedModal(minutes, seconds, correct_qst);
        }
        const record = { minutes, seconds, correct_qst, wrong_qst };
        this.userService.postQuestionRecord(record).subscribe(res => {
            this.loadingGame = false;
            console.log('record submitted..');
            this.gameOver = null;
            this.disableClick = false;
            this.loadingGame = false;
            this.startGame = false;
            this.runningQuestion = 0;
            this.playCategory = '';
            this.loadBalanceSub = '';
            this.deductSub = '';
            this.timeSeconds = 0;
            this.timeMinute = 0;
            clearInterval(this.timerTicker);
        });
    }
    checkAnswer(selection, correctAnswer) {
        this.disableClick = true;
        if (selection == correctAnswer) {
            this.correct.nativeElement.classList.add('heartBeat');
            this.correctAns = this.correctAns + 1;
        }
        else {
            this.wrongAns = this.wrongAns + 1;
            this.wrong.nativeElement.classList.add('wobble');
        }
        // tslint:disable-next-line: align
        setTimeout(() => {
            this.nextQuestion();
        }, 1000);
    }
    startQuestion() {
        this.loadingGame = true;
        this.loadBalanceSub = this.accountService.loadBalanceForCalculation().subscribe(res => {
            const UserBalance = res['balance'];
            if (UserBalance < this.currentGameAmount) {
                this.low_balance = true;
                setTimeout(() => {
                    this.low_balance = false;
                }, 7000);
                this.loadingGame = false;
            }
            else {
                this.deductSub = this.accountService.deductGameAmountFromAccount().subscribe((res) => {
                    console.log('PAY RES', res);
                    this.accountService.loadMyBalance();
                    this.startGame = true;
                    this.currentQuestion = this.gameQuestions[this.runningQuestion];
                    this.startTimer();
                    this.loadingGame = false;
                }, error => { console.log('ERROR', error); });
            }
        }, err => {
            console.error(err);
            this.loadingGame = false;
        });
    }
    renderQuestion() {
        this.startGame = true;
        this.disableClick = false;
        this.currentQuestion = this.gameQuestions[this.runningQuestion];
    }
    nextQuestion() {
        this.btnColor1 = 'success';
        this.btnColor2 = 'success';
        this.btnColor3 = 'success';
        this.btnColor4 = 'success';
        this.wrong.nativeElement.classList.remove('wobble');
        this.correct.nativeElement.classList.remove('heartBeat');
        if (this.runningQuestion < this.lastQuestion) {
            this.runningQuestion++;
            this.renderQuestion();
        }
        else {
            this.startGame = false;
            this.gameOver = true;
            // no more question!
        }
    }
    renderProgress() {
        for (let qIndex = 0; qIndex <= this.lastQuestion; qIndex++) {
            this.progress = qIndex;
        }
    }
    startTimer() {
        // COUNTDOWN IN SECONDS
        // EXAMPLE - 5 MINS = 5 X 60 = 300 SECS
        let counter = 240;
        // Start if not past end date
        if (counter > 0) {
            this.timerTicker = setInterval(() => {
                // Stop if passed end time
                counter--;
                if (counter == 0 || this.gameOver) {
                    clearInterval(this.timerTicker);
                    this.gameisOver();
                    counter = 0;
                }
                let secs = counter;
                const mins = Math.floor(secs / 60); // 1 min = 60 secs
                secs -= mins * 60;
                this.timeMinute = mins;
                this.timeSeconds = secs;
                if (this.gameOver) {
                    clearInterval(this.timerTicker);
                }
                else {
                }
            }, 1000);
        }
    }
    gameOverToleaderboard() {
        this.gameOver = undefined;
        this.correctAns = 0;
        this.wrongAns = 0;
        this.router.navigate(['/leaderboard']);
    }
    gameOverToRecords() {
        this.gameOver = undefined;
        this.correctAns = 0;
        this.wrongAns = 0;
        this.router.navigate(['/myrecord']);
    }
    presentCongratsModal(minutes, seconds, correctQuestion) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _components_congrats_congrats_component__WEBPACK_IMPORTED_MODULE_2__["CongratsComponent"],
                componentProps: { minutes, seconds, correctQuestion }
            });
            yield modal.present();
            const data = yield modal.onDidDismiss();
            //  this.router.navigate(['/tabs/gamesection']);
        });
    }
    presentFailedModal(minutes, seconds, correctQuestion) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('QSTTT', correctQuestion);
            const modal = yield this.modalController.create({
                component: _components_fail_game_fail_game_component__WEBPACK_IMPORTED_MODULE_1__["FailGameComponent"],
                componentProps: { minutes, seconds, correctQuestion }
            });
            yield modal.present();
            const data = yield modal.onDidDismiss();
        });
    }
    presentResult(min, secs, correct) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: ' GAME RESULT',
                message: `<h1>Score  ${correct}/15</h1>  <br>
              <h4 class="text-success">Elapsed ${min} min , ${secs} secs</h4>`,
                buttons: [{
                        text: 'OK',
                        cssClass: 'success',
                        handler: (val) => {
                            this.router.navigate(['/tabs/gamesection']);
                        }
                    }
                ]
            });
            yield alert.present();
            setTimeout(() => {
                this.router.navigate(['/tabs/gamesection']);
                alert.dismiss();
            }, 3000);
        });
    }
};
PlaysectionPage.ctorParameters = () => [
    { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_shared_game_service_service__WEBPACK_IMPORTED_MODULE_3__["GameServiceService"] },
    { type: _shared_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _services_behavour_service__WEBPACK_IMPORTED_MODULE_9__["BehavourService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
PlaysectionPage.propDecorators = {
    info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['info', { static: false },] }],
    correct: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['correct', { static: false },] }],
    wrong: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['wrong', { static: false },] }]
};
PlaysectionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-playsection',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./playsection.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/playsection/playsection.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./playsection.page.scss */ "./src/app/playsection/playsection.page.scss")).default]
    })
], PlaysectionPage);



/***/ })

}]);
//# sourceMappingURL=playsection-playsection-module-es2015.js.map