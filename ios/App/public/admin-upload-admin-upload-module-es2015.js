(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-upload-admin-upload-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-upload/admin-upload.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin-upload/admin-upload.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <div class=\"row d-flex justify-content-center\">\n      <img class=\"rounded-top\" src=\"/assets/icon/Logoicon.png\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content fullscreen=\"true\"> \n<div class=\"content d-flex ion-justify-content-center\" >\n    <!-- <ion-tabs>\n        <ion-tab-bar slot=\"top\">\n          <ion-button (click)=\"presentNavigation()\" type=\"block\" size=\"large\">Navigation</ion-button>\n      \n        </ion-tab-bar>\n      </ion-tabs> -->\n\n\n  \n      <ion-col>\n\n    <ion-chip color=\"light\"><h3 class=\"text-center\"> Question Upload</h3> </ion-chip>\n    <ion-card>\n      <!-- select category -->\n      <ion-item color=\"medium\">\n       <ion-label>Caegories</ion-label> \n       <ion-select  (ngModelChange)=\"selectChange($event)\"  [(ngModel)]=\"model.mlistOptions\">\n         <ion-select-option value=\"economics\">Economics</ion-select-option>\n         <ion-select-option value=\"sport\">Sport</ion-select-option>\n         <ion-select-option value=\"movie\">Movie</ion-select-option>\n         <ion-select-option value=\"science\">Science</ion-select-option>\n         <ion-select-option value=\"history\">History</ion-select-option>\n         <ion-select-option value=\"politics\">Politics</ion-select-option>\n         <ion-select-option value=\"arts\">Art</ion-select-option>\n         <ion-select-option value=\"tourism\">Tourism</ion-select-option>\n       </ion-select>\n     </ion-item>\n\n    </ion-card>\n     <form #questionForm=\"ngForm\" (submit)=\"submit(questionForm)\"  >\n\n   <ion-item color=\"medium\" class=\"ion-margin\">\n     <ion-label position=\"floating\">Question</ion-label>\n     <ion-input rows=\"6\" cols=\"20\" name=\"question\" [(ngModel)]=\"questionModel.question\"\n      clearOnEdit required=\"true\" spellcheck=\"true\"></ion-input>\n   </ion-item>\n \n   <ion-item color=\"medium\" class=\"ion-margin\">\n     <ion-label position=\"floating\">Answer</ion-label>\n     <ion-input  name=\"answer\" [(ngModel)]=\"questionModel.answer\" \n      required=\"true\" spellcheck=\"true\"></ion-input>\n   </ion-item>\n \n   <ion-item color=\"medium\" class=\"ion-margin\">\n     <ion-label position=\"floating\">Option-1</ion-label>\n     <ion-input  name=\"option1\" [(ngModel)]=\"questionModel.option1\"\n     required=\"true\" spellcheck=\"true\"></ion-input>\n   </ion-item>\n   \n   <ion-item color=\"medium\" class=\"ion-margin\">\n     <ion-label position=\"floating\">Opion-2</ion-label>\n     <ion-input  name=\"option2\" [(ngModel)]=\"questionModel.option2\"\n      required=\"true\" spellcheck=\"true\"></ion-input>\n   </ion-item>\n \n   <ion-item color=\"medium\" class=\"ion-margin\">\n     <ion-label position=\"floating\">option-3</ion-label>\n     <ion-input  name=\"option3\" [(ngModel)]=\"questionModel.option3\"\n     required=\"true\" spellcheck=\"true\"></ion-input>\n   </ion-item>\n \n   <ion-item color=\"medium\" class=\"ion-margin\">\n     <ion-label position=\"floating\">Option-4</ion-label>\n     <ion-input  name=\"option4\" [(ngModel)]=\"questionModel.option4\"\n      required=\"true\" spellcheck=\"true\"></ion-input>\n   </ion-item>\n \n     \n   <ion-item color=\"medium\" class=\"ion-margin\">\n     <ion-label position=\"floating\">Tip</ion-label>\n     <ion-input   name=\"tip\" [(ngModel)]=\"questionModel.tip\"\n     required=\"true\" spellcheck=\"true\"></ion-input>\n   </ion-item>\n \n \n     <!-- loader -->\n     <div *ngIf=\"loading\" class=\" \">\n       <div class=\"toast-container \">\n           <div class=\"lds-roller\"><div></div><div></div><div></div><div></div>\n           <div></div><div></div><div></div><div></div></div>\n \n       </div>\n \n     </div>\n \n     \n     <ion-button type=\"submit\" color=\"success\">Submit</ion-button>\n   </form>\n      </ion-col>\n</div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/admin-upload/admin-upload.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/admin-upload/admin-upload.module.ts ***!
  \*****************************************************/
/*! exports provided: AdminUploadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUploadPageModule", function() { return AdminUploadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _admin_upload_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-upload.page */ "./src/app/admin-upload/admin-upload.page.ts");







const routes = [
    {
        path: '',
        component: _admin_upload_page__WEBPACK_IMPORTED_MODULE_6__["AdminUploadPage"]
    }
];
let AdminUploadPageModule = class AdminUploadPageModule {
};
AdminUploadPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_admin_upload_page__WEBPACK_IMPORTED_MODULE_6__["AdminUploadPage"]]
    })
], AdminUploadPageModule);



/***/ }),

/***/ "./src/app/admin-upload/admin-upload.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/admin-upload/admin-upload.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".content {\n  background-image: url('app-bg.png');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.rounded-top {\n  width: 200px;\n  height: 50px;\n  padding-bottom: 13px;\n  padding-top: 13px;\n}\n\nion-toolbar {\n  margin-top: 20px;\n}\n\n.lds-roller {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n\n.lds-roller div {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 32px 32px;\n}\n\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #0c6d14;\n  margin: -3px 0 0 -3px;\n}\n\n.lds-roller div:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n\n.lds-roller div:nth-child(1):after {\n  top: 50px;\n  left: 50px;\n}\n\n.lds-roller div:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n\n.lds-roller div:nth-child(2):after {\n  top: 54px;\n  left: 45px;\n}\n\n.lds-roller div:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n\n.lds-roller div:nth-child(3):after {\n  top: 57px;\n  left: 39px;\n}\n\n.lds-roller div:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n\n.lds-roller div:nth-child(4):after {\n  top: 58px;\n  left: 32px;\n}\n\n.lds-roller div:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n\n.lds-roller div:nth-child(5):after {\n  top: 57px;\n  left: 25px;\n}\n\n.lds-roller div:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n\n.lds-roller div:nth-child(6):after {\n  top: 54px;\n  left: 19px;\n}\n\n.lds-roller div:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n\n.lds-roller div:nth-child(7):after {\n  top: 50px;\n  left: 14px;\n}\n\n.lds-roller div:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n\n.lds-roller div:nth-child(8):after {\n  top: 45px;\n  left: 10px;\n}\n\n@-webkit-keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.toast-container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  top: auto;\n  margin-bottom: 80px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4tdXBsb2FkL2FkbWluLXVwbG9hZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFRyxtQ0FBQTtFQUVFLDJCQUFBO0VBQ0Esc0JBQUE7RUFFQyw0QkFBQTtBQUpOOztBQU1BO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBT0E7RUFDSSxnQkFBQTtBQUpKOztBQWFBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBVko7O0FBWUU7RUFDRSx3RUFBQTtVQUFBLGdFQUFBO0VBQ0EsMkJBQUE7QUFUSjs7QUFXRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQVJKOztBQVVFO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQVBKOztBQVNFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFOSjs7QUFRRTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFMSjs7QUFPRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBSko7O0FBTUU7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBSEo7O0FBS0U7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUZKOztBQUlFO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQURKOztBQUdFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFBSjs7QUFFRTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QUFDSjs7QUFDRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQUU7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBR0o7O0FBREU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUlKOztBQUZFO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQUtKOztBQUhFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFNSjs7QUFKRTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFPSjs7QUFMRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBUUo7O0FBTkU7RUFDRTtJQUNFLHVCQUFBO0VBU0o7RUFQRTtJQUNFLHlCQUFBO0VBU0o7QUFDRjs7QUFmRTtFQUNFO0lBQ0UsdUJBQUE7RUFTSjtFQVBFO0lBQ0UseUJBQUE7RUFTSjtBQUNGOztBQUpBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQU1GIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4tdXBsb2FkL2FkbWluLXVwbG9hZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmNvbnRlbnR7XG4gIC8vICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAyODE0O1xuICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9hcHAtYmcucG5nXCIpO1xuICAgIFxuICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxuICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC8vICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcbiAgfVxuLnJvdW5kZWQtdG9we1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgcGFkZGluZy10b3A6IDEzcHg7XG4gICBcbn1cblxuaW9uLXRvb2xiYXJ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLy8gLmNvbnRlbnR7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLnBuZ1wiKTtcbiAgIFxuLy8gfVxuXG4vLyBsb2FkZXJcbi5sZHMtcm9sbGVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXYge1xuICAgIGFuaW1hdGlvbjogbGRzLXJvbGxlciAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMzJweCAzMnB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA2cHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6IHJnYigxMiwgMTA5LCAyMCk7XG4gICAgbWFyZ2luOiAtM3B4IDAgMCAtM3B4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMDM2cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpOmFmdGVyIHtcbiAgICB0b3A6IDUwcHg7XG4gICAgbGVmdDogNTBweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjA3MnM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKTphZnRlciB7XG4gICAgdG9wOiA1NHB4O1xuICAgIGxlZnQ6IDQ1cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xMDhzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMyk6YWZ0ZXIge1xuICAgIHRvcDogNTdweDtcbiAgICBsZWZ0OiAzOXB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTQ0cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpOmFmdGVyIHtcbiAgICB0b3A6IDU4cHg7XG4gICAgbGVmdDogMzJweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE4cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDUpOmFmdGVyIHtcbiAgICB0b3A6IDU3cHg7XG4gICAgbGVmdDogMjVweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjIxNnM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KTphZnRlciB7XG4gICAgdG9wOiA1NHB4O1xuICAgIGxlZnQ6IDE5cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yNTJzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNyk6YWZ0ZXIge1xuICAgIHRvcDogNTBweDtcbiAgICBsZWZ0OiAxNHB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjg4cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpOmFmdGVyIHtcbiAgICB0b3A6IDQ1cHg7XG4gICAgbGVmdDogMTBweDtcbiAgfVxuICBAa2V5ZnJhbWVzIGxkcy1yb2xsZXIge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG5cbiAgXG4vLyAgIGxvYWRpbmdcbi50b2FzdC1jb250YWluZXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRvcDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuXG5cbiAiXX0= */");

/***/ }),

/***/ "./src/app/admin-upload/admin-upload.page.ts":
/*!***************************************************!*\
  !*** ./src/app/admin-upload/admin-upload.page.ts ***!
  \***************************************************/
/*! exports provided: AdminUploadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminUploadPage", function() { return AdminUploadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _adminnavigation_adminnavigation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../adminnavigation/adminnavigation.component */ "./src/app/adminnavigation/adminnavigation.component.ts");
/* harmony import */ var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let AdminUploadPage = class AdminUploadPage {
    constructor(userService, toastController, popoverController, alertController) {
        this.userService = userService;
        this.toastController = toastController;
        this.popoverController = popoverController;
        this.alertController = alertController;
        this.questionModel = {
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
            mlistOptions: []
        };
    }
    ngOnInit() {
        this.loading = false;
    }
    presentNavigation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _adminnavigation_adminnavigation_component__WEBPACK_IMPORTED_MODULE_1__["AdminnavigationComponent"],
                translucent: true
            });
            return yield popover.present();
        });
    }
    submit(form) {
        this.loading = true;
        console.log(form.value);
        console.log(this.questionModel);
        this.questionModel.question = form.value.question;
        this.questionModel.answer = form.value.answer;
        this.questionModel.option1 = form.value.option1;
        this.questionModel.option2 = form.value.option2;
        this.questionModel.option3 = form.value.option3;
        this.questionModel.option4 = form.value.option4;
        this.questionModel.tip = form.value.tip;
        this.userService.postQuestion(this.questionModel).subscribe(response => {
            this.loading = false;
            console.log(response);
            this.resetForm();
            this.presentToast();
        }, err => {
            this.loading = false;
            console.log(err);
            this.presentFail(err.error.message);
        });
    }
    resetForm() {
        this.questionModel.category = '';
        this.questionModel.question = '';
        this.questionModel.answer = '';
        this.questionModel.option1 = '';
        this.questionModel.option2 = '';
        this.questionModel.option3 = '';
        this.questionModel.option4 = '';
        this.questionModel.tip = '';
    }
    presentFail(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Ooops!',
                message: ` <strong class="font-weight-bold text-danger text-center"> ${msg}</strong>`,
                buttons: [{
                        text: 'Retry',
                        handler: () => {
                            console.log('Confirm Okay');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Submitted successfully...',
                duration: 4000,
                position: "middle"
            });
            toast.present();
        });
    }
    selectChange($event) {
        this.questionModel.category = $event;
    }
};
AdminUploadPage.ctorParameters = () => [
    { type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
AdminUploadPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin-upload',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./admin-upload.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin-upload/admin-upload.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./admin-upload.page.scss */ "./src/app/admin-upload/admin-upload.page.scss")).default]
    })
], AdminUploadPage);



/***/ })

}]);
//# sourceMappingURL=admin-upload-admin-upload-module-es2015.js.map