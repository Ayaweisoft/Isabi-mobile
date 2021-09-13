(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manage-questions-manage-questions-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-questions/manage-questions.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/manage-questions/manage-questions.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppManageQuestionsManageQuestionsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    \n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons> <div class=\"row d-flex justify-content-center\">\n      <img class=\"rounded-top\"  src=\"../../../assets/icon/Logoicon.png\">\n    </div> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-fab horizontal=\"end\" vertical=\"top\" slot=\"fixed\" edge>\n    <ion-fab-button (click)=\"addQuestion()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n\n  <div class=\"content \">\n    <ion-chip>\n      <h6 class=\"text-white\"> LIVE : {{liveQuestions}} questions </h6>\n    </ion-chip>\n\n    <div *ngIf=\"manage_section\">\n        <!-- select filter -->\n        <ion-item  *ngIf=\"showContent\">\n          <ion-label>Filter</ion-label>\n          <ion-select interface=\"popover\" (ngModelChange)=\"selectChange($event)\" [(ngModel)]=\"model.filterOptions\">\n            <ion-select-option value=\"economics\">Economics</ion-select-option>\n            <ion-select-option value=\"sport\">Sport</ion-select-option>\n            <ion-select-option value=\"movie\">Movie</ion-select-option>\n            <ion-select-option value=\"science\">Science</ion-select-option>\n            <ion-select-option value=\"history\">History</ion-select-option>\n            <ion-select-option value=\"politics\">Politics</ion-select-option>\n            <ion-select-option value=\"arts\">Art</ion-select-option>\n            <ion-select-option value=\"tourism\">Tourism</ion-select-option>\n          </ion-select>\n        </ion-item>\n \n          <ion-item >\n          <ion-input name=\"search\" #search placeholder=\"search question words\"  [(ngModel)]=\"model.search\"></ion-input> \n          <ion-button (click)=\"searchQst()\" [disabled]=\"!search.value\">search</ion-button>\n        </ion-item>\n\n     \n\n      <div *ngIf=\"showContent\">\n        <ion-item color=\"success\">\n          <ion-text class=\"font-weight-bold\"> Total :{{questionsOutPut?.length}} </ion-text>\n        </ion-item>\n\n        <ion-card  class=\"ion-padding\" color=\"success\" *ngFor=\"let item of questionsOutPut\">\n          <div class=\"row display-flex justify-content-center\">\n            <ion-checkbox *ngIf=\"item.status\" color=\"primary\" [checked]=\"item.status\"\n              (click)=\"changeStatusFalse(item._id, item.category)\"></ion-checkbox>\n\n            <ion-checkbox *ngIf=\"!item.status\" color=\"primary\" [checked]=\"item.status\"\n              (click)=\"changeStatusTrue(item._id, item.category)\"></ion-checkbox>\n            <ion-card-header class=\"text-left text-white\"> Display : {{item.status}} </ion-card-header>\n            <ion-card-header class=\"text-right text-white\"> Category : {{item.category}} </ion-card-header>\n          </div>\n          <ion-card-title class=\"text-white\">\n            <p><strong>Question :</strong> {{item.question}} </p>\n          </ion-card-title>\n          <ion-card-content> \n            <strong> option-1 :</strong> {{item.option1}}\n          </ion-card-content>\n          <ion-card-content>\n            <strong> option-2 :</strong> {{item.option2}}\n          </ion-card-content>\n          <ion-card-content>\n            <strong> option-3 :</strong> {{item.option3}}\n          </ion-card-content>\n          <ion-card-content>\n            <strong> option-4 :</strong> {{item.option4}}\n          </ion-card-content>\n          <ion-card-content>\n            <strong>Answer</strong> {{item.answer}}\n          </ion-card-content>\n          <ion-card-content>\n            <strong>Tip</strong> {{item.tip}}\n          </ion-card-content>\n          <div class=\"row d-flex\">\n            <ion-card-content class=\"col\">\n              <ion-icon name=\"create\" (click)=\"editQuestion(item._id)\" size=\"large\" color=\"primary\"></ion-icon>\n            </ion-card-content>\n            <ion-card-content class=\"col\">\n              <ion-icon name=\"trash\" (click)=\"deleteQestion(item._id, item.category)\" size=\"large\" color=\"danger\">\n              </ion-icon>\n            </ion-card-content>\n          </div>\n        </ion-card>\n\n      </div>\n\n      <!-- end page content -->\n      <div>\n\n\n\n\n        <!-- edit question form -->\n        <div *ngIf=\"showForm\">\n          <h6 class=\"text-center\">Edit question</h6>\n          <form class=\"mb-5\" #questionForm=\"ngForm\" (submit)=\"updateQuestion(questionForm, questionToEdit._id)\">\n            <ion-card color=\"success\">\n              <ion-item>\n                <ion-label>Question</ion-label>\n                <ion-textarea rows=\"6\" cols=\"20\" name=\"question\" [(ngModel)]=\"questionModel.question\"\n                  placeholder=\"Enter question here\" [value]=\"questionToEdit?.question\" clearOnEdit required=\"true\"\n                  spellcheck=\"true\"></ion-textarea>\n              </ion-item>\n            </ion-card>\n\n            <ion-card color=\"success\">\n              <ion-item>\n                <ion-label>Answer</ion-label>\n                <ion-textarea placeholder=\"Enter answer here...\" [value]=\"questionToEdit?.answer\" name=\"answer\"\n                  [(ngModel)]=\"questionModel.answer\" required=\"true\" spellcheck=\"true\"></ion-textarea>\n              </ion-item>\n            </ion-card>\n\n            <ion-card color=\"success\">\n              <ion-item>\n                <ion-label>Option-1</ion-label>\n                <ion-textarea placeholder=\"enter option 1\" name=\"option1\" [(ngModel)]=\"questionModel.option1\"\n                  required=\"true\" spellcheck=\"true\" [value]=\"questionToEdit?.option1\"></ion-textarea>\n              </ion-item>\n            </ion-card>\n\n            <ion-card color=\"success\">\n              <ion-item>\n                <ion-label>Opion-2</ion-label>\n                <ion-textarea placeholder=\"enter option 2\" name=\"option2\" [(ngModel)]=\"questionModel.option2\"\n                  required=\"true\" spellcheck=\"true\" [value]=\"questionToEdit?.option2\"></ion-textarea>\n              </ion-item>\n            </ion-card>\n\n            <ion-card color=\"success\">\n              <ion-item>\n                <ion-label>option-3</ion-label>\n                <ion-textarea placeholder=\"enter option 3\" name=\"option3\" [(ngModel)]=\"questionModel.option3\"\n                  required=\"true\" spellcheck=\"true\" [value]=\"questionToEdit?.option3\"></ion-textarea>\n              </ion-item>\n            </ion-card>\n\n            <ion-card clolor=\"success\">\n              <ion-item>\n                <ion-label>Option-4</ion-label>\n                <ion-textarea placeholder=\"enter option 4\" name=\"option4\" [(ngModel)]=\"questionModel.option4\"\n                  required=\"true\" spellcheck=\"true\" [value]=\"questionToEdit?.option4\"></ion-textarea>\n              </ion-item>\n            </ion-card>\n\n            <ion-card color=\"success\">\n              <ion-item>\n                <ion-label>Tip</ion-label>\n                <ion-textarea placeholder=\"enter tip here...\" name=\"tip\" [(ngModel)]=\"questionModel.tip\" required=\"true\"\n                  spellcheck=\"true\" [value]=\"questionToEdit?.tip\"></ion-textarea>\n              </ion-item>\n            </ion-card>\n\n            <div class=\"ion-text-center\">\n              <ion-button type=\"submit\" fill=\"outline\" color=\"success\">Submit</ion-button>\n            </div>\n          </form>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n   <!-- loader -->\n   <div *ngIf=\"loading\" class=\" \">\n    <div class=\"toast-container \">\n      <div class=\"lds-spinner\">\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div>\n\n        </div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n      </div>\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/manage-questions/manage-questions.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/manage-questions/manage-questions.module.ts ***!
      \*************************************************************/

    /*! exports provided: ManageQuestionsPageModule */

    /***/
    function srcAppManageQuestionsManageQuestionsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageQuestionsPageModule", function () {
        return ManageQuestionsPageModule;
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


      var _manage_questions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./manage-questions.page */
      "./src/app/manage-questions/manage-questions.page.ts");

      var routes = [{
        path: '',
        component: _manage_questions_page__WEBPACK_IMPORTED_MODULE_6__["ManageQuestionsPage"]
      }];

      var ManageQuestionsPageModule = function ManageQuestionsPageModule() {
        _classCallCheck(this, ManageQuestionsPageModule);
      };

      ManageQuestionsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_manage_questions_page__WEBPACK_IMPORTED_MODULE_6__["ManageQuestionsPage"]]
      })], ManageQuestionsPageModule);
      /***/
    },

    /***/
    "./src/app/manage-questions/manage-questions.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/manage-questions/manage-questions.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppManageQuestionsManageQuestionsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  background-image: url('app-bg.png');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.toast-container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  top: auto;\n  margin-bottom: 80px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.lds-spinner {\n  color: official;\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n\n.lds-spinner div {\n  transform-origin: 32px 32px;\n  -webkit-animation: lds-spinner 1.2s linear infinite;\n          animation: lds-spinner 1.2s linear infinite;\n}\n\n.lds-spinner div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  top: 3px;\n  left: 29px;\n  width: 5px;\n  height: 14px;\n  border-radius: 20%;\n  background: #02550d;\n}\n\n.lds-spinner div:nth-child(1) {\n  transform: rotate(0deg);\n  -webkit-animation-delay: -1.1s;\n          animation-delay: -1.1s;\n}\n\n.lds-spinner div:nth-child(2) {\n  transform: rotate(30deg);\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n}\n\n.lds-spinner div:nth-child(3) {\n  transform: rotate(60deg);\n  -webkit-animation-delay: -0.9s;\n          animation-delay: -0.9s;\n}\n\n.lds-spinner div:nth-child(4) {\n  transform: rotate(90deg);\n  -webkit-animation-delay: -0.8s;\n          animation-delay: -0.8s;\n}\n\n.lds-spinner div:nth-child(5) {\n  transform: rotate(120deg);\n  -webkit-animation-delay: -0.7s;\n          animation-delay: -0.7s;\n}\n\n.lds-spinner div:nth-child(6) {\n  transform: rotate(150deg);\n  -webkit-animation-delay: -0.6s;\n          animation-delay: -0.6s;\n}\n\n.lds-spinner div:nth-child(7) {\n  transform: rotate(180deg);\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n}\n\n.lds-spinner div:nth-child(8) {\n  transform: rotate(210deg);\n  -webkit-animation-delay: -0.4s;\n          animation-delay: -0.4s;\n}\n\n.lds-spinner div:nth-child(9) {\n  transform: rotate(240deg);\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n\n.lds-spinner div:nth-child(10) {\n  transform: rotate(270deg);\n  -webkit-animation-delay: -0.2s;\n          animation-delay: -0.2s;\n}\n\n.lds-spinner div:nth-child(11) {\n  transform: rotate(300deg);\n  -webkit-animation-delay: -0.1s;\n          animation-delay: -0.1s;\n}\n\n.lds-spinner div:nth-child(12) {\n  transform: rotate(330deg);\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n}\n\n@-webkit-keyframes lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes lds-spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlLXF1ZXN0aW9ucy9tYW5hZ2UtcXVlc3Rpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVHLG1DQUFBO0VBRUUsMkJBQUE7RUFDQSxzQkFBQTtFQUVDLDRCQUFBO0FBRk47O0FBS0E7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBRko7O0FBS0U7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRko7O0FBSUU7RUFDRSwyQkFBQTtFQUNBLG1EQUFBO1VBQUEsMkNBQUE7QUFESjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVFO0VBQ0UsdUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FBQ0o7O0FBQ0U7RUFDRSx3QkFBQTtFQUNBLDRCQUFBO1VBQUEsb0JBQUE7QUFFSjs7QUFBRTtFQUNFLHdCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQUdKOztBQURFO0VBQ0Usd0JBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FBSUo7O0FBRkU7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUFLSjs7QUFIRTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQU1KOztBQUpFO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FBT0o7O0FBTEU7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUFRSjs7QUFORTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQVNKOztBQVBFO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FBVUo7O0FBUkU7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUFXSjs7QUFURTtFQUNFLHlCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQVlKOztBQVZFO0VBQ0U7SUFDRSxVQUFBO0VBYUo7RUFYRTtJQUNFLFVBQUE7RUFhSjtBQUNGOztBQW5CRTtFQUNFO0lBQ0UsVUFBQTtFQWFKO0VBWEU7SUFDRSxVQUFBO0VBYUo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZS1xdWVzdGlvbnMvbWFuYWdlLXF1ZXN0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgLy8gIGJhY2tncm91bmQtY29sb3I6ICMwMDI4MTQ7XG4gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2FwcC1iZy5wbmdcIik7XG4gICAgXG4gICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXG4gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLy8gIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxuICB9XG5cbi50b2FzdC1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdG9wOiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gIH1cblxuICAubGRzLXNwaW5uZXIge1xuICAgIGNvbG9yOiBvZmZpY2lhbDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgfVxuICAubGRzLXNwaW5uZXIgZGl2IHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAzMnB4IDMycHg7XG4gICAgYW5pbWF0aW9uOiBsZHMtc3Bpbm5lciAxLjJzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICAubGRzLXNwaW5uZXIgZGl2OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzcHg7XG4gICAgbGVmdDogMjlweDtcbiAgICB3aWR0aDogNXB4O1xuICAgIGhlaWdodDogMTRweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMCU7XG4gICAgYmFja2dyb3VuZDogcmdiKDIsIDg1LCAxMyk7XG4gIH1cbiAgLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoMSkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTEuMXM7XG4gIH1cbiAgLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoMikge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xcztcbiAgfVxuICAubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XG4gIH1cbiAgLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoNCkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xuICB9XG4gIC5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuN3M7XG4gIH1cbiAgLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoNikge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC42cztcbiAgfVxuICAubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCg3KSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xuICB9XG4gIC5sZHMtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDgpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNHM7XG4gIH1cbiAgLmxkcy1zcGlubmVyIGRpdjpudGgtY2hpbGQoOSkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcbiAgfVxuICAubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCgxMCkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcbiAgfVxuICAubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCgxMSkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xcztcbiAgfVxuICAubGRzLXNwaW5uZXIgZGl2Om50aC1jaGlsZCgxMikge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgfVxuICBAa2V5ZnJhbWVzIGxkcy1zcGlubmVyIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIFxuXG4vLyBzcGlubmVyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/manage-questions/manage-questions.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/manage-questions/manage-questions.page.ts ***!
      \***********************************************************/

    /*! exports provided: ManageQuestionsPage */

    /***/
    function srcAppManageQuestionsManageQuestionsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageQuestionsPage", function () {
        return ManageQuestionsPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");

      var ManageQuestionsPage = /*#__PURE__*/function () {
        function ManageQuestionsPage(userService, menu, popoverController, alertController, router) {
          _classCallCheck(this, ManageQuestionsPage);

          this.userService = userService;
          this.menu = menu;
          this.popoverController = popoverController;
          this.alertController = alertController;
          this.router = router;
          this.allLive_section = false;
          this.search_section = false;
          this.manage_section = true;
          this.questionModel = {
            id: '',
            question: '',
            option1: '',
            category: '',
            option2: '',
            option3: '',
            option4: '',
            tip: '',
            answer: ''
          };
          this.model = {
            filterOptions: [],
            search: ''
          };
          this.getAllQuestions();
          this.getLiveQuestions();
        }

        _createClass(ManageQuestionsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loading = false;
            this.showContent = true;
            this.showForm = false;
            this.questionsOutPut = 0;
          }
        }, {
          key: "selectChange",
          value: function selectChange($event) {
            this.findByCategory($event);
          }
        }, {
          key: "getLiveQuestions",
          value: function getLiveQuestions() {
            var _this = this;

            this.userService.getLiveQuestionAmount().subscribe(function (res) {
              console.log(res);
              _this.liveQuestions = res['count'];
            });
          }
        }, {
          key: "getAllQuestions",
          value: function getAllQuestions() {
            var _this2 = this;

            this.loading = true;
            this.userService.getAllQuestions().subscribe(function (res) {
              _this2.loading = false;
              console.log(res);
              _this2.questionsOutPut = res['quesions'];
            }, function (err) {
              _this2.loading = false;
              console.log(err);
            });
          }
        }, {
          key: "deleteQestion",
          value: function deleteQestion(id, category) {
            this.presentAlertConfirm(id, category);
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm(id, category) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'DELETE QUESTION ?',
                        message: ' <strong class="text-danger"> Deleted question cannot be recovered</strong>!!!',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('cancle delete');
                          }
                        }, {
                          text: 'Yes',
                          cssClass: 'danger',
                          handler: function handler() {
                            _this3.loading = true;

                            _this3.userService.deleteQuestion(id).subscribe(function (res) {
                              _this3.loading = false;
                              console.log('response .. success delete');

                              _this3.findByCategory(category);
                            }, function (err) {
                              _this3.loading = false;

                              _this3.findByCategory(category);
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "findByCategory",
          value: function findByCategory(category) {
            var _this4 = this;

            this.loading = true;
            console.log(category); // console.log(this.catType);

            this.userService.findByCategory(category).subscribe(function (res) {
              _this4.loading = false;
              _this4.questionsOutPut = res['questions'];
              console.log(_this4.questionsOutPut);
            }, function (err) {
              _this4.loading = false;
              console.log(err);
            });
          }
        }, {
          key: "addQuestion",
          value: function addQuestion() {
            this.router.navigate(['/tabs/admin-upload']);
          }
        }, {
          key: "changeStatusTrue",
          value: function changeStatusTrue(id, category) {
            var _this5 = this;

            console.log('I CLICK TRUE', category);
            this.userService.changeQuestionStatusToTrue(id).subscribe(function (res) {
              _this5.findByCategory(category);
            });
          }
        }, {
          key: "changeStatusFalse",
          value: function changeStatusFalse(id, category) {
            var _this6 = this;

            console.log('I CLICK false');
            this.userService.changeQuestionStatusToFalse(id).subscribe(function (res) {
              _this6.findByCategory(category);
            });
          }
        }, {
          key: "editQuestion",
          value: function editQuestion(id) {
            var _this7 = this;

            this.showContent = false;
            this.showForm = true;
            this.loading = true;
            this.userService.getSingleQuestion(id).subscribe(function (res) {
              _this7.loading = false;
              _this7.questionToEdit = res['doc'];
              _this7.questionModel.question = _this7.questionToEdit.question;
              _this7.questionModel.category = _this7.questionToEdit.category;
              _this7.questionModel.answer = _this7.questionToEdit.answer;
              _this7.questionModel.option1 = _this7.questionToEdit.option1;
              _this7.questionModel.option2 = _this7.questionToEdit.option2;
              _this7.questionModel.option3 = _this7.questionToEdit.option3;
              _this7.questionModel.option4 = _this7.questionToEdit.option4;
              _this7.questionModel.tip = _this7.questionToEdit.tip;
              _this7.questionModel.id = _this7.questionToEdit._id;
            }, function (err) {
              _this7.loading = false;
              console.log(err);
            });
          }
        }, {
          key: "updateQuestion",
          value: function updateQuestion(form, id) {
            var _this8 = this;

            console.log(this.questionModel.id);
            this.userService.upDateQuestion(this.questionModel).subscribe(function (response) {
              _this8.showForm = false;
              _this8.showContent = true;
              console.log(response);

              _this8.findByCategory(_this8.questionModel.category);
            }, function (error) {
              console.log(error);
            });
          }
        }, {
          key: "searchQst",
          value: function searchQst() {
            var _this9 = this;

            console.log(this.model.search);
            var searchText = {
              text: this.model.search
            };
            this.loading = true;
            this.userService.searchQuestion(searchText).subscribe(function (res) {
              _this9.loading = false;
              console.log(res);
              _this9.questionsOutPut = res['questions'];
              console.log(_this9.questionsOutPut);
            }, function (err) {
              console.log(err);
            });
          }
        }]);

        return ManageQuestionsPage;
      }();

      ManageQuestionsPage.ctorParameters = function () {
        return [{
          type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      ManageQuestionsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-questions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./manage-questions.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/manage-questions/manage-questions.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./manage-questions.page.scss */
        "./src/app/manage-questions/manage-questions.page.scss"))["default"]]
      })], ManageQuestionsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=manage-questions-manage-questions-module-es5.js.map