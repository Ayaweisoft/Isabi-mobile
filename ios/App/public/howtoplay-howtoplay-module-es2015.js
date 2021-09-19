(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["howtoplay-howtoplay-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/howtoplay/howtoplay.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/howtoplay/howtoplay.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"gamesection\" routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n   <div class=\"row d-flex justify-content-center\">\n    <img [routerLink]=\"['/gamesection']\"  class=\"rounded-top\" src=\"../../assets/icon/Logoicon.png\">\n   </div>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div class=\"content text-white\">\n\n      <h3 class=\"main text-center p-5 font-weight-bold\">HOW TO PLAY I-SABI</h3>\n\n  <ion-card class=\"text-center text-white pb-3 \">\n    <div class=\"d-flex justify-content-center row mb-2\">\n      <img class=\"image_icon\" width=\"250\" height=\"50%\" src=\"../../assets/how_to_play/plus_icon.jpg\" alt=\"\">\n\n    </div>\n    <h5>Create Account </h5>\n    <p>Click on sign up then input the required information needed I.e phone / username / password/\n      confirm password. Click submit.\n      NB cross check your details properly before submitting.</p>\n  </ion-card>\n\n  <ion-card class=\"text-center text-white pb-3 \">\n    <div class=\"d-flex justify-content-center row mb-2\">\n      <img class=\"image_icon\" width=\"250\" height=\"50%\" src=\"../../assets/how_to_play/wallet.jpg\" alt=\"\">\n    </div>\n    <h5>Credit Account </h5>\n    <p>Click on the account section. Click on the enter amount free space.\n      First you have to input the amount intended to credit your i-sabi wallet with.\n      Click on the preferred payment model.</p>\n  </ion-card>\n\n  <ion-card class=\"text-center text-white pb-3 \">\n    <div class=\"d-flex justify-content-center row mb-2\">\n      <img class=\"image_icon\" width=\"250\" height=\"50%\" src=\"../../assets/how_to_play/game_pad.png\" alt=\"\">\n    </div>\n    <h5>I-sabi Live Session </h5>\n    <p>i-sabi live session starts from 6am - 6pm every Saturday, make sure you are logged in to participate.</p>\n    <p>Each game session cost two hundred naira (200)</p>\n  </ion-card>\n\n  <ion-card class=\"text-center text-white pb-3 \">\n    <div class=\"d-flex justify-content-center row mb-2\">\n      <img class=\"image_icon\" width=\"250\" height=\"50%\" src=\"../../assets/how_to_play/network_bar.png\" alt=\"\">\n\n    </div>\n    <h5>Stay Connected</h5>\n    <p>Stay connected when games are on. Make sure that your\n       network or wifi is connected properly so you do not get interrupted during game play. </p>\n  </ion-card>\n\n  <ion-card class=\"text-center text-white pb-3 \">\n    <div class=\"d-flex justify-content-center row mb-2\">\n      <img class=\"image_icon\" width=\"250\" height=\"50%\" src=\"../../assets/how_to_play/question_mark.png\" alt=\"\">\n\n    </div>\n    <h5>How Much Do You Know?</h5>\n    <p>Endeavour to answer 15 question correctly under 4\n       minutes and you stand the chance of winning 5k cash price. </p>\n  </ion-card>\n\n  <ion-card class=\"text-center text-white pb-3 \">\n    <div class=\"d-flex justify-content-center row mb-2\">\n      <img class=\"image_icon\" width=\"250\" height=\"50%\" src=\"../../assets/how_to_play/cash_hand.png\" alt=\"\">\n    </div>\n    <h5>I-sabi Cash Prize</h5>\n    <p>Top five winners on our leaderboard get paid a sum of five thousand naira  (5,000) \n      after every Saturday game play.\n    </p>\n  </ion-card>\n\n  <ion-card class=\"text-center text-white pb-3 \">\n    <div class=\"d-flex justify-content-center row mb-2\">\n      <img class=\"image_icon\" width=\"250\" height=\"50%\" src=\"../../assets/how_to_play/bulb.png\" alt=\"\">\n    </div>\n    <h5>Clue Tips </h5>\n    <p>Clue tip gives insight to the questions for next game to be played.\n       They role from 6:02pm Saturday to the next week Saturday by 5:59am.\n    </p>\n  </ion-card>\n\n  <ion-card class=\"text-center text-white pb-3 \">\n    <div class=\"d-flex justify-content-center row mb-2\">\n      <img class=\"image_icon\" width=\"250\" height=\"50%\" src=\"../../assets/how_to_play/bulb.png\" alt=\"\">\n    </div>\n    <h5>Leaderboard </h5>\n    <p>The leaderboard displays everyone that answers their questions correctly. The top five players will\n      be rewarded as the winners for the week.\n    </p>\n  </ion-card>\n\n  \n</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/howtoplay/howtoplay.module.ts":
/*!***********************************************!*\
  !*** ./src/app/howtoplay/howtoplay.module.ts ***!
  \***********************************************/
/*! exports provided: HowtoplayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowtoplayPageModule", function() { return HowtoplayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _howtoplay_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./howtoplay.page */ "./src/app/howtoplay/howtoplay.page.ts");







const routes = [
    {
        path: '',
        component: _howtoplay_page__WEBPACK_IMPORTED_MODULE_6__["HowtoplayPage"]
    }
];
let HowtoplayPageModule = class HowtoplayPageModule {
};
HowtoplayPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_howtoplay_page__WEBPACK_IMPORTED_MODULE_6__["HowtoplayPage"]]
    })
], HowtoplayPageModule);



/***/ }),

/***/ "./src/app/howtoplay/howtoplay.page.scss":
/*!***********************************************!*\
  !*** ./src/app/howtoplay/howtoplay.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  background-image: url('app-bg.png');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.nominated {\n  background-image: linear-gradient(red, yellow, green);\n}\n\n.image_icon {\n  width: 100px;\n  height: 100px;\n  display: flex;\n}\n\n.play-record {\n  background-color: #edeebb;\n  color: #056836;\n}\n\n.lds-roller {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n\n.lds-roller div {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 32px 32px;\n}\n\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #0c6d14;\n  margin: -3px 0 0 -3px;\n}\n\n.lds-roller div:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n\n.lds-roller div:nth-child(1):after {\n  top: 50px;\n  left: 50px;\n}\n\n.lds-roller div:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n\n.lds-roller div:nth-child(2):after {\n  top: 54px;\n  left: 45px;\n}\n\n.lds-roller div:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n\n.lds-roller div:nth-child(3):after {\n  top: 57px;\n  left: 39px;\n}\n\n.lds-roller div:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n\n.lds-roller div:nth-child(4):after {\n  top: 58px;\n  left: 32px;\n}\n\n.lds-roller div:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n\n.lds-roller div:nth-child(5):after {\n  top: 57px;\n  left: 25px;\n}\n\n.lds-roller div:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n\n.lds-roller div:nth-child(6):after {\n  top: 54px;\n  left: 19px;\n}\n\n.lds-roller div:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n\n.lds-roller div:nth-child(7):after {\n  top: 50px;\n  left: 14px;\n}\n\n.lds-roller div:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n\n.lds-roller div:nth-child(8):after {\n  top: 45px;\n  left: 10px;\n}\n\n@-webkit-keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.toast-container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  top: auto;\n  margin-bottom: 80px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG93dG9wbGF5L2hvd3RvcGxheS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSyxtQ0FBQTtFQUVFLDJCQUFBO0VBQ0Esc0JBQUE7RUFFQyw0QkFBQTtBQUpSOztBQU1JO0VBQ0UscURBQUE7QUFITjs7QUFLSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUZSOztBQU9JO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBSk47O0FBU0k7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFOUjs7QUFRTTtFQUNFLHdFQUFBO1VBQUEsZ0VBQUE7RUFDQSwyQkFBQTtBQUxSOztBQU9NO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBSlI7O0FBTU07RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBSFI7O0FBS007RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUZSOztBQUlNO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQURSOztBQUdNO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFBUjs7QUFFTTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFDUjs7QUFDTTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBRVI7O0FBQU07RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBR1I7O0FBRE07RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUlSOztBQUZNO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtBQUtSOztBQUhNO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFNUjs7QUFKTTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFPUjs7QUFMTTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBUVI7O0FBTk07RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBU1I7O0FBUE07RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQVVSOztBQVJNO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQVdSOztBQVRNO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFZUjs7QUFWTTtFQUNFO0lBQ0UsdUJBQUE7RUFhUjtFQVhNO0lBQ0UseUJBQUE7RUFhUjtBQUNGOztBQW5CTTtFQUNFO0lBQ0UsdUJBQUE7RUFhUjtFQVhNO0lBQ0UseUJBQUE7RUFhUjtBQUNGOztBQVJJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFVTiIsImZpbGUiOiJzcmMvYXBwL2hvd3RvcGxheS9ob3d0b3BsYXkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5jb250ZW50e1xuICAgIC8vICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyODE0O1xuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nLy9hcHAtYmcucG5nXCIpO1xuICAgICAgXG4gICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcbiAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgLy8gIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXG4gICAgfVxuICAgIC5ub21pbmF0ZWR7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmVkLCB5ZWxsb3csIGdyZWVuKTtcbiAgICB9XG4gICAgLmltYWdlX2ljb257XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgIFxuICAgIFxuICAgIC5wbGF5LXJlY29yZHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVlYmI7XG4gICAgICBjb2xvcjpyZ2IoNSwgMTA0LCA1NCk7XG4gICAgICAvLyBjb2xvcjogI2U3ZjBlMDtcbiAgICB9XG4gICAgXG4gICAgLy8gbG9hZGVyXG4gICAgLmxkcy1yb2xsZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgIH1cbiAgICAgIC5sZHMtcm9sbGVyIGRpdiB7XG4gICAgICAgIGFuaW1hdGlvbjogbGRzLXJvbGxlciAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGU7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDMycHggMzJweDtcbiAgICAgIH1cbiAgICAgIC5sZHMtcm9sbGVyIGRpdjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogNnB4O1xuICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTIsIDEwOSwgMjApO1xuICAgICAgICBtYXJnaW46IC0zcHggMCAwIC0zcHg7XG4gICAgICB9XG4gICAgICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wMzZzO1xuICAgICAgfVxuICAgICAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKTphZnRlciB7XG4gICAgICAgIHRvcDogNTBweDtcbiAgICAgICAgbGVmdDogNTBweDtcbiAgICAgIH1cbiAgICAgIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMikge1xuICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjA3MnM7XG4gICAgICB9XG4gICAgICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpOmFmdGVyIHtcbiAgICAgICAgdG9wOiA1NHB4O1xuICAgICAgICBsZWZ0OiA0NXB4O1xuICAgICAgfVxuICAgICAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTA4cztcbiAgICAgIH1cbiAgICAgIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMyk6YWZ0ZXIge1xuICAgICAgICB0b3A6IDU3cHg7XG4gICAgICAgIGxlZnQ6IDM5cHg7XG4gICAgICB9XG4gICAgICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNDRzO1xuICAgICAgfVxuICAgICAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KTphZnRlciB7XG4gICAgICAgIHRvcDogNThweDtcbiAgICAgICAgbGVmdDogMzJweDtcbiAgICAgIH1cbiAgICAgIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSkge1xuICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE4cztcbiAgICAgIH1cbiAgICAgIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSk6YWZ0ZXIge1xuICAgICAgICB0b3A6IDU3cHg7XG4gICAgICAgIGxlZnQ6IDI1cHg7XG4gICAgICB9XG4gICAgICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpIHtcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yMTZzO1xuICAgICAgfVxuICAgICAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KTphZnRlciB7XG4gICAgICAgIHRvcDogNTRweDtcbiAgICAgICAgbGVmdDogMTlweDtcbiAgICAgIH1cbiAgICAgIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNykge1xuICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjI1MnM7XG4gICAgICB9XG4gICAgICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpOmFmdGVyIHtcbiAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICBsZWZ0OiAxNHB4O1xuICAgICAgfVxuICAgICAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KSB7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjg4cztcbiAgICAgIH1cbiAgICAgIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCk6YWZ0ZXIge1xuICAgICAgICB0b3A6IDQ1cHg7XG4gICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICB9XG4gICAgICBAa2V5ZnJhbWVzIGxkcy1yb2xsZXIge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIFxuICAgICAgXG4gICAgLy8gICBsb2FkaW5nXG4gICAgLnRvYXN0LWNvbnRhaW5lcntcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHRvcDogYXV0bztcbiAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICB6LWluZGV4OiA5OTk7XG4gICAgfVxuICAgIFxuICAgIFxuICAgICJdfQ== */");

/***/ }),

/***/ "./src/app/howtoplay/howtoplay.page.ts":
/*!*********************************************!*\
  !*** ./src/app/howtoplay/howtoplay.page.ts ***!
  \*********************************************/
/*! exports provided: HowtoplayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowtoplayPage", function() { return HowtoplayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HowtoplayPage = class HowtoplayPage {
    constructor() { }
    ngOnInit() {
    }
};
HowtoplayPage.ctorParameters = () => [];
HowtoplayPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-howtoplay',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./howtoplay.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/howtoplay/howtoplay.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./howtoplay.page.scss */ "./src/app/howtoplay/howtoplay.page.scss")).default]
    })
], HowtoplayPage);



/***/ })

}]);
//# sourceMappingURL=howtoplay-howtoplay-module-es2015.js.map