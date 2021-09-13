(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["playdemo-playdemo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/playdemo/playdemo.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/playdemo/playdemo.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar> \n    \n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    \n    <div class=\"row d-flex justify-content-center\">\n      <img class=\"rounded-top\"  src=\"../../../assets/icon/Logoicon.png\">\n      </div>\n  </ion-toolbar> \n</ion-header>\n\n<ion-content>\n<div  class=\"play-area content\"> \n\n\n  <ion-fab *ngIf=\"!gameOver\" vertical=\"top\" horizontal=\"center\" slot=\"fixed\">\n      <ion-fab-button color=\"success\">\n       <ion-row>\n         <h5 class=\"mt-2 p-3 font-weight-bold\">{{timeMinute}} : {{timeSeconds}} </h5>\n       </ion-row>\n      </ion-fab-button>\n    </ion-fab>\n\n\n    <!-- *ngFor=\"let item of accountService.leaderboard$; index as i\" -->\n       <!-- <div >\n                <ion-card-content>\n                  <ion-row>\n                    <ion-col  *ngFor=\"let item of accountService.leaderboardGameSection$\" >\n                        <ion-avatar>\n                            <img class=\"leaders\" src=\"../../assets/img/leader_icon.png\" alt=\"\">\n                          </ion-avatar><p class=\"font-weight-bold\">{{item.user}} </p><br>\n                     </ion-col>\n                  </ion-row>\n                </ion-card-content>\n      </div> -->\n\n \n\n    <ion-item-divider *ngIf=\"startGame\" >\n       \n          <ion-segment>\n            <div class=\"animated\" #correct>\n            <ion-label  class=\" font-weight-bold text-success\"> CORRECT : {{correctAns}}</ion-label>\n          </div>\n          </ion-segment>\n      \n        \n          <ion-segment >\n            <div class=\"animated\" #wrong >\n            <ion-label class=\"animated font-weight-bold text-danger\">WRONG : {{wrongAns}} </ion-label>\n          </div>\n          </ion-segment>\n        \n    </ion-item-divider>\n\n\n    <!-- question section -->\n    <ion-card color=\"success\" slot=\"fixed\" *ngIf=\"startGame\" class=\"m-0 play-area\" style=\"width: 100%;\" >\n        <div class=\"justify-content-right d-flex ml-2 \">\n                   <h3 class=\" font-weight-bold\" id=\"count\"> {{runningQuestion + 1}}/15 </h3>  <!-- Default Segment -->\n        \n        </div>\n         \n         <ion-card-title ><p class=\"m-4 \" >{{currentQuestion?.question}} </p></ion-card-title>\n         <!-- <ion-card-content class=\"text-left mb-5\">\n         </ion-card-content> -->\n         </ion-card>\n\n         <!-- select answer -->\n\n         <ion-card slot=\"fixed\"  class=\"p-2\" *ngIf=\"startGame\" color=\"light\">\n          <ion-button [color]=\"btnColor1\" expand=\"full\"  class=\"option mb-3\" [disabled]=\"disableClick\" \n          (click)=\"checkAnswer(currentQuestion?.option1, currentQuestion?.answer); getColor1()\" >\n            {{currentQuestion?.option1}} </ion-button>\n       \n           <ion-button  [color]=\"btnColor2\"  expand=\"full\" class=\"option mb-3\" [disabled]=\"disableClick\"\n            (click)=\"checkAnswer(currentQuestion?.option2, currentQuestion?.answer); getColor2()\">\n              {{currentQuestion?.option2}} </ion-button>\n       \n     \n           <ion-button [color]=\"btnColor3\" expand=\"full\"  class=\"option mb-3\" [disabled]=\"disableClick\"\n           (click)=\"checkAnswer(currentQuestion?.option3, currentQuestion.answer); getColor3() \">\n             {{currentQuestion?.option3}} </ion-button>\n       \n        \n           <ion-button [color]=\"btnColor4\" expand=\"full\"  class=\"option mb-3\" [disabled]=\"disableClick\" \n            (click)=\"checkAnswer(currentQuestion?.option4, currentQuestion.answer); getColor4()\">\n              {{currentQuestion?.option4}} </ion-button>\n       \n        </ion-card>\n\n\n         <div *ngIf=\"!loadingGame  && !startGame\" style=\"padding-top: 20%;\">\n          <ion-card class=\"p-3\">\n            <!-- select filter -->\n            <ion-item color=\"success\" >\n              <ion-label color=\"light\" class=\"text-center\">select your category</ion-label>\n              <ion-select select=\"success\" interface=\"popover\" (ngModelChange)=\"selectChange($event)\" \n              [(ngModel)]=\"model.filterOptions\">\n                <ion-select-option class=\"text-dark\" value=\"economics\">Economics</ion-select-option>\n                <ion-select-option color=\"success\" value=\"sport\">Sport</ion-select-option>\n                <ion-select-option color=\"success\" value=\"movie\">Movie</ion-select-option>\n                <ion-select-option color=\"success\" value=\"science\">Science</ion-select-option>\n                <ion-select-option color=\"success\" value=\"history\">History</ion-select-option>\n                <ion-select-option color=\"success\" value=\"politics\">Politics</ion-select-option>\n                <ion-select-option color=\"success\" value=\"arts\">Art</ion-select-option>\n                <ion-select-option  color=\"success\" value=\"tourism\">Tourism</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-card>\n\n            <div class=\"ion-text-center ion-padding\">\n              <ion-button   color=\"success\"\n              size=\"large\" color=\"success\"   *ngIf=\"!startGame\" (click)=\"startQuestion()\">\n                PLAY NOW !</ion-button>\n            </div>\n                <!-- <div class=\" text-center  p-2 mt-5 animated infinite\n                 shake  \" #info> \n                  <p class=\"info\"  *ngIf=\"!startGame\">15 correct questions can give 5k</p>\n                </div> -->\n         </div>\n\n\n   <br>\n        <!-- <div class=\"justify-content-center d-flex\" *ngIf=\"!startGame\">\n            <img src=\"../../assets/animation/animated-playgame.gif\" alt=\"\">\n        </div> -->\n\n      \n\n                     <!-- loader -->\n              <div *ngIf=\"loadingGame\" class=\" \">\n                <div class=\"toast-container \">\n                    <div class=\"lds-roller\"><div></div><div></div><div></div><div></div>\n                    <div></div><div></div><div></div><div></div></div>\n                </div>\n                <p style=\"margin-top: 30%;\" class=\"bg-dark  text-white text-center\"> preparing questions...</p>\n              </div>\n            </div>\n      \n</ion-content> \n");

/***/ }),

/***/ "./src/app/playdemo/playdemo.module.ts":
/*!*********************************************!*\
  !*** ./src/app/playdemo/playdemo.module.ts ***!
  \*********************************************/
/*! exports provided: PlaydemoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaydemoPageModule", function() { return PlaydemoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _playdemo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./playdemo.page */ "./src/app/playdemo/playdemo.page.ts");







const routes = [
    {
        path: '',
        component: _playdemo_page__WEBPACK_IMPORTED_MODULE_6__["PlaydemoPage"]
    }
];
let PlaydemoPageModule = class PlaydemoPageModule {
};
PlaydemoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_playdemo_page__WEBPACK_IMPORTED_MODULE_6__["PlaydemoPage"]]
    })
], PlaydemoPageModule);



/***/ }),

/***/ "./src/app/playdemo/playdemo.page.scss":
/*!*********************************************!*\
  !*** ./src/app/playdemo/playdemo.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  background-image: url('bg.png');\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.option {\n  border: #000;\n  border-width: 2px;\n  background-color: #034d1b;\n  margin-top: 7px;\n  margin-bottom: 7px;\n}\n\n#count {\n  border: 10px;\n  border-color: #000;\n}\n\n.toast-container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  top: auto;\n  margin-bottom: 80px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n}\n\n.lds-roller {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n\n.lds-roller div {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 32px 32px;\n}\n\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #0c6d14;\n  margin: -3px 0 0 -3px;\n}\n\n.lds-roller div:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n\n.lds-roller div:nth-child(1):after {\n  top: 50px;\n  left: 50px;\n}\n\n.lds-roller div:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n\n.lds-roller div:nth-child(2):after {\n  top: 54px;\n  left: 45px;\n}\n\n.lds-roller div:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n\n.lds-roller div:nth-child(3):after {\n  top: 57px;\n  left: 39px;\n}\n\n.lds-roller div:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n\n.lds-roller div:nth-child(4):after {\n  top: 58px;\n  left: 32px;\n}\n\n.lds-roller div:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n\n.lds-roller div:nth-child(5):after {\n  top: 57px;\n  left: 25px;\n}\n\n.lds-roller div:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n\n.lds-roller div:nth-child(6):after {\n  top: 54px;\n  left: 19px;\n}\n\n.lds-roller div:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n\n.lds-roller div:nth-child(7):after {\n  top: 50px;\n  left: 14px;\n}\n\n.lds-roller div:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n\n.lds-roller div:nth-child(8):after {\n  top: 45px;\n  left: 10px;\n}\n\n@-webkit-keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n#nominated {\n  color: white;\n  text-shadow: 2px 2px 4px #000000;\n}\n\n.content {\n  background-image: url('bg_main.png');\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.play-area {\n  background-color: #edeebb;\n  color: #737a5f;\n  border-radius: 7px;\n}\n\n.play-area-header {\n  background-color: #006633;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWRlbW8vcGxheWRlbW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQywyQkFBQTtFQUNBLHNCQUFBO0VBQ0MsNEJBQUE7QUFBSjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBSEY7O0FBUUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFMRjs7QUFPQTtFQUNFLHdFQUFBO1VBQUEsZ0VBQUE7RUFDQSwyQkFBQTtBQUpGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBSEY7O0FBS0E7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBRkY7O0FBSUE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQURGOztBQUdBO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQUFGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFDRjs7QUFDQTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFFRjs7QUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBR0Y7O0FBREE7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBSUY7O0FBRkE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUtGOztBQUhBO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtBQU1GOztBQUpBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFPRjs7QUFMQTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFRRjs7QUFOQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBU0Y7O0FBUEE7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBVUY7O0FBUkE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQVdGOztBQVRBO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQVlGOztBQVZBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFhRjs7QUFYQTtFQUNFO0lBQ0UsdUJBQUE7RUFjRjtFQVpBO0lBQ0UseUJBQUE7RUFjRjtBQUNGOztBQXBCQTtFQUNFO0lBQ0UsdUJBQUE7RUFjRjtFQVpBO0lBQ0UseUJBQUE7RUFjRjtBQUNGOztBQVhBO0VBQ0UsWUFBQTtFQUNBLGdDQUFBO0FBYUY7O0FBVkE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0MsMkJBQUE7RUFDQSxzQkFBQTtFQUNDLDRCQUFBO0FBYUo7O0FBWEE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQWNGOztBQVpBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBZUEiLCJmaWxlIjoic3JjL2FwcC9wbGF5ZGVtby9wbGF5ZGVtby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250ZW50e1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JnLnBuZ1wiKTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcbiAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXG59XG5cbiAgLm9wdGlvbntcbiAgICBib3JkZXI6ICMwMDA7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMsIDc3LCAyNyk7XG4gICAgbWFyZ2luLXRvcDogN3B4O1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgfVxuXG4gICNjb3VudHtcbiAgICBib3JkZXI6IDEwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDAwO1xuICB9XG4gIFxuXG5cbi8vIC8vICAgbG9hZGluZ1xuLnRvYXN0LWNvbnRhaW5lcntcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA5OTk7XG59XG5cblxuLy8gbG9hZGVyXG4ubGRzLXJvbGxlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2IHtcbiAgYW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMzJweCAzMnB4O1xufVxuLmxkcy1yb2xsZXIgZGl2OmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJnYigxMiwgMTA5LCAyMCk7XG4gIG1hcmdpbjogLTNweCAwIDAgLTNweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjAzNnM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpOmFmdGVyIHtcbiAgdG9wOiA1MHB4O1xuICBsZWZ0OiA1MHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMDcycztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMik6YWZ0ZXIge1xuICB0b3A6IDU0cHg7XG4gIGxlZnQ6IDQ1cHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMDhzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XG4gIHRvcDogNTdweDtcbiAgbGVmdDogMzlweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCkge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjE0NHM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpOmFmdGVyIHtcbiAgdG9wOiA1OHB4O1xuICBsZWZ0OiAzMnB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMThzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KTphZnRlciB7XG4gIHRvcDogNTdweDtcbiAgbGVmdDogMjVweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNikge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjIxNnM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyIHtcbiAgdG9wOiA1NHB4O1xuICBsZWZ0OiAxOXB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuMjUycztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNyk6YWZ0ZXIge1xuICB0b3A6IDUwcHg7XG4gIGxlZnQ6IDE0cHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yODhzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KTphZnRlciB7XG4gIHRvcDogNDVweDtcbiAgbGVmdDogMTBweDtcbn1cbkBrZXlmcmFtZXMgbGRzLXJvbGxlciB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG59XG5cbiNub21pbmF0ZWR7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4ICMwMDAwMDA7XG59XG5cbi5jb250ZW50e1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2JnX21haW4ucG5nXCIpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcbiAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXG59XG4ucGxheS1hcmVhe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZWJiO1xuICBjb2xvcjogIzczN2E1ZjtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xufVxuLnBsYXktYXJlYS1oZWFkZXJ7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NjMzO1xuY29sb3I6I2ZmZjtcbi8vIGNvbG9yOiAjZTdmMGUwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/playdemo/playdemo.page.ts":
/*!*******************************************!*\
  !*** ./src/app/playdemo/playdemo.page.ts ***!
  \*******************************************/
/*! exports provided: PlaydemoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaydemoPage", function() { return PlaydemoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_demo_questions_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/demo-questions.service */ "./src/app/shared/demo-questions.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _shared_game_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/game-service.service */ "./src/app/shared/game-service.service.ts");
/* harmony import */ var _shared_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/account.service */ "./src/app/shared/account.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_congrats_congrats_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/congrats/congrats.component */ "./src/app/components/congrats/congrats.component.ts");
/* harmony import */ var _components_fail_game_fail_game_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/fail-game/fail-game.component */ "./src/app/components/fail-game/fail-game.component.ts");










let PlaydemoPage = class PlaydemoPage {
    constructor(userService, gameService, accountService, alertController, modalController, demoQuestionsService, 
    // private nativeAudio: NativeAudio,
    router) {
        this.userService = userService;
        this.gameService = gameService;
        this.accountService = accountService;
        this.alertController = alertController;
        this.modalController = modalController;
        this.demoQuestionsService = demoQuestionsService;
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
        this.gameQuestions = this.demoQuestionsService.demoQuestions;
        this.lastQuestion = this.gameQuestions.length - 1;
        this.loadingGame = false;
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
        // this.userService.postQuestionRecord(record).subscribe(
        //     res => {
        //       this.loadingGame = false;
        //       console.log('record submitted..');
        //       this.gameOver = null;
        //       this.disableClick = false;
        //       this.loadingGame = false;
        //       this.startGame = false;
        //       this.runningQuestion = 0;
        //       this.playCategory = '';
        //       this.loadBalanceSub = '';
        //       this.deductSub = '';
        //       this.timeSeconds = 0;
        //       this.timeMinute = 0;
        //       clearInterval(this.timerTicker);
        //         }
        //   );
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
        this.startGame = true;
        this.currentQuestion = this.gameQuestions[this.runningQuestion];
        this.startTimer();
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
                component: _components_congrats_congrats_component__WEBPACK_IMPORTED_MODULE_8__["CongratsComponent"],
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
                component: _components_fail_game_fail_game_component__WEBPACK_IMPORTED_MODULE_9__["FailGameComponent"],
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
PlaydemoPage.ctorParameters = () => [
    { type: _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _shared_game_service_service__WEBPACK_IMPORTED_MODULE_4__["GameServiceService"] },
    { type: _shared_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _shared_demo_questions_service__WEBPACK_IMPORTED_MODULE_1__["DemoQuestionsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
PlaydemoPage.propDecorators = {
    info: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['info', { static: false },] }],
    correct: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['correct', { static: false },] }],
    wrong: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: ['wrong', { static: false },] }]
};
PlaydemoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-playdemo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./playdemo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/playdemo/playdemo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./playdemo.page.scss */ "./src/app/playdemo/playdemo.page.scss")).default]
    })
], PlaydemoPage);



/***/ })

}]);
//# sourceMappingURL=playdemo-playdemo-module-es2015.js.map