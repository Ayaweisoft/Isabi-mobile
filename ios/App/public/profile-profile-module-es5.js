(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n      \n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      \n      <img class=\"rounded-top\"  src=\"../../../assets/icon/Logoicon.png\">\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n         \n<div class=\"content\">\n   <!-- content area -->\n   <ion-card class=\"content m-0 p-0\">\n      <ion-card-header class=\"text-center text-white\"> MY ACCOUNT</ion-card-header> \n      <ion-card-content>\n\n       \n\n        <ion-grid fixed>\n          <ion-row>\n            <ion-col size=\"1\"></ion-col>\n            <ion-col size=\"10\">\n\n\n<form *ngIf=\"userRecordNotAvalible\"  #profileForm ngform=\"profileForm\" name=\"form\" \n(submit)=\"createProfile(profileForm)\" class=\"text-center\" >\n<div class=\"m-3\">\n    <p class=\"text-danger text-center\">*Ensure you enter correct details. Records cannot be modified after update</p>\n  </div>\n\n  <ion-list>\n    \n\n<ion-item>\n<ion-label position=\"floating\">Fullname</ion-label>\n<ion-input #fullname name=\"fullname\" position=\"floating\"  [(ngModel)]=\"model.fullname\"\ntype=\"text\" required ></ion-input>\n</ion-item>\n<ion-item>\n<ion-label position=\"floating\">Email</ion-label>\n<ion-input #email name=\"email\" position=\"floating\"  [(ngModel)]=\"model.email\"\ntype=\"email\" required  [pattern]=\"emailRegex\"></ion-input>\n</ion-item>\n\n<ion-item>\n<ion-label>Nationality</ion-label>\n<ion-select #selectCountry name=\"selectCountry\" interface=\"popover\"  (ngModelChange)=\"selectChange($event)\" \n[(ngModel)]=\"setNationality.selectedOption\" name=\"nationality\" #nationality>\n<ion-select-option value=\"Afghanistan\">\tAfghanistan  </ion-select-option>\n<ion-select-option value=\"Aland Islands\">\t\tAland Islands  </ion-select-option>\n<ion-select-option value=\"Albania\">\t\tAlbania  </ion-select-option>\n<ion-select-option value=\"Algeria\">\t\t\tAlgeria  </ion-select-option>\n<ion-select-option value=\"American Samoa\">\tAmerican Samoa </ion-select-option>\n<ion-select-option value=\"Andorra\"> Andorra </ion-select-option>\n<ion-select-option value=\"Angola\"> Angola </ion-select-option>\n<ion-select-option value=\"Anguilla\"> Anguilla</ion-select-option>\n<ion-select-option value=\"Antarctica\">Antarctica</ion-select-option>\n<ion-select-option value=\"Antigua and Barbuda\">Antigua and Barbuda</ion-select-option>\n<ion-select-option value=\"Argentina\">Argentina</ion-select-option>\n<ion-select-option value=\"Armenia\">Armenia</ion-select-option>\n<ion-select-option value=\"Aruba\">Aruba</ion-select-option>\n<ion-select-option value=\"Australia\">Australia</ion-select-option>\n<ion-select-option value=\"Austria\">Austria</ion-select-option>\n<ion-select-option value=\"Azerbaijan\">Azerbaijan</ion-select-option>\n<ion-select-option value=\"Bahamas\">Bahamas</ion-select-option>\n<ion-select-option value=\"Bahrain\">Bahrain</ion-select-option>\n<ion-select-option value=\"Bangladesh\">Bangladesh</ion-select-option>\n<ion-select-option value=\"Barbados\">Barbados</ion-select-option>\n<ion-select-option value=\"Belarus\">Belarus</ion-select-option>\n<ion-select-option value=\"Belgium\">Belgium</ion-select-option>\n<ion-select-option value=\"Belize\">Belize</ion-select-option>\n<ion-select-option value=\"Republic of Benin\">Republic of Benin</ion-select-option>\n<ion-select-option value=\"Bermuda\">Bermuda</ion-select-option>\n<ion-select-option value=\"Bolivia\"> Bolivia</ion-select-option>\n<ion-select-option value=\"Netherland\">Netherland</ion-select-option>\n<ion-select-option value=\"Botswana\">Botswana</ion-select-option>\n<ion-select-option value=\"Brazil\">Brazil</ion-select-option>\n<ion-select-option value=\"Bulgaria\">Bulgaria</ion-select-option>\n<ion-select-option value=\"Burundi\">Burundi</ion-select-option>\n<ion-select-option value=\"Cambodia\">Cambodia</ion-select-option>\n<ion-select-option value=\"Canada\">Canada</ion-select-option>\n<ion-select-option value=\"Chad\">Chad</ion-select-option>\n<ion-select-option value=\" Chile\"> Chile</ion-select-option>\n<ion-select-option value=\"China\">China</ion-select-option>\n<ion-select-option value=\"Colombia\">Colombia</ion-select-option>\n<ion-select-option value=\"Costa Rica\">Costa Rica</ion-select-option>\n<ion-select-option value=\"Cote d'Ivoire\">Cote d'Ivoire</ion-select-option>\n<ion-select-option value=\"Croatia\">Croatia</ion-select-option>\n<ion-select-option value=\"Cuba\">Cuba</ion-select-option>\n<ion-select-option value=\"Curacao\">Curacao</ion-select-option>\n<ion-select-option value=\"Czech Republic\">Czech Republic</ion-select-option>\n<ion-select-option value=\"Congo\">Congo</ion-select-option>\n<ion-select-option value=\"Denmark\">Denmark</ion-select-option>\n<ion-select-option value=\"Ecuador\">Ecuador</ion-select-option>\n<ion-select-option value=\"Egypt\">Egypt</ion-select-option>\n<ion-select-option value=\"England\">England</ion-select-option>\n<ion-select-option value=\"Guinea\">Guinea</ion-select-option>\n<ion-select-option value=\"Estonia\">Estonia</ion-select-option>\n<ion-select-option value=\"Ethiopia\">Ethiopia</ion-select-option>\n<ion-select-option value=\"Finland\">Finland</ion-select-option>\n<ion-select-option value=\"Gambia\">Gambia</ion-select-option>\n<ion-select-option value=\"Germany\">Germany</ion-select-option>\n<ion-select-option value=\"Ghana\">Ghana</ion-select-option>\n<ion-select-option value=\"Honduras\">Honduras</ion-select-option>\n<ion-select-option value=\"Hong Kong\">Hong Kong</ion-select-option>\n<ion-select-option value=\"Hungary\">Hungary</ion-select-option>\n<ion-select-option value=\"Iceland\">Iceland</ion-select-option>\n<ion-select-option value=\"India\">India</ion-select-option>\n<ion-select-option value=\"Indonesia\">Indonesia</ion-select-option>\n<ion-select-option value=\"Iran\">Iran</ion-select-option>\n<ion-select-option value=\"Iraq\">Iraq</ion-select-option>\n<ion-select-option value=\"Ireland\">Ireland</ion-select-option>\n<ion-select-option value=\"Israel\">Israel</ion-select-option>\n<ion-select-option value=\"Italy\">Italy</ion-select-option>\n<ion-select-option value=\"Jamaica\">Jamaica</ion-select-option>\n<ion-select-option value=\"Japan\">Japan</ion-select-option>\n<ion-select-option value=\"Kazakhstan\">Kazakhstan</ion-select-option>\n<ion-select-option value=\"Kenya\">Kenya</ion-select-option>\n<ion-select-option value=\"Kuwait\">Kuwait</ion-select-option>\n<ion-select-option value=\"Latvia\">Latvia</ion-select-option>\n<ion-select-option value=\"Lebanon\">Lebanon</ion-select-option>\n<ion-select-option value=\"Lesotho\">Lesotho</ion-select-option>\n<ion-select-option value=\"Liberia\">Liberia</ion-select-option>\n<ion-select-option value=\"Libya\">Libya</ion-select-option>\n<ion-select-option value=\"Lithuania\">Lithuania</ion-select-option>\n<ion-select-option value=\"Luxembourg\">Luxembourg</ion-select-option>\n<ion-select-option value=\"Macedonia\">Macedonia</ion-select-option>\n<ion-select-option value=\"Madagascar\">Madagascar</ion-select-option>\n<ion-select-option value=\"Malawi\">Malawi</ion-select-option>\n<ion-select-option value=\"Malaysia\">Malaysia</ion-select-option>\n<ion-select-option value=\"Mali\">Mali</ion-select-option>\n<ion-select-option value=\"Malta\">Malta</ion-select-option>\n<ion-select-option value=\"Mauritania\">Mauritania</ion-select-option>\n<ion-select-option value=\"Mauritius\">Mauritius</ion-select-option>\n<ion-select-option value=\"Mexico\">Mexico</ion-select-option>\n<ion-select-option value=\"Moldova\">Moldova</ion-select-option>\n<ion-select-option value=\"Morocco\">Morocco</ion-select-option>\n<ion-select-option value=\"Mozambique\">Mozambique</ion-select-option>\n<ion-select-option value=\"Mozambique\">Mozambique</ion-select-option>\n<ion-select-option value=\"Namibia\">Namibia</ion-select-option>\n<ion-select-option value=\"Netherlands\">Netherlands</ion-select-option>\n<ion-select-option value=\"New Zealand\">New Zealand</ion-select-option>\n<ion-select-option value=\"Niger\">Niger</ion-select-option>\n<ion-select-option value=\"Nigeria\">Nigeria</ion-select-option>\n<ion-select-option value=\"Republic of Korea\">Republic of Korea</ion-select-option>\n<ion-select-option value=\"Norway\">Norway</ion-select-option>\n<ion-select-option value=\"Pakistan\">Pakistan</ion-select-option>\n<ion-select-option value=\"Panama\">Panama</ion-select-option>\n<ion-select-option value=\"Paraguay\">Paraguay</ion-select-option>\n<ion-select-option value=\"Philippines\">Philippines</ion-select-option>\n<ion-select-option value=\"Peru\">Peru</ion-select-option>\n<ion-select-option value=\"Philippines\">Philippines</ion-select-option>\n<ion-select-option value=\"Poland\">Poland</ion-select-option>\n<ion-select-option value=\"Portugal\">Portugal</ion-select-option>\n<ion-select-option value=\"Qatar\">Qatar</ion-select-option>\n<ion-select-option value=\"Congo\">Congo</ion-select-option>\n<ion-select-option value=\"Romania\">Romania</ion-select-option>\n<ion-select-option value=\"Russia\">Russia</ion-select-option>\n<ion-select-option value=\"Rwanda\">Rwanda</ion-select-option>\n<ion-select-option value=\"Scotland\">Scotland</ion-select-option>\n<ion-select-option value=\"Senegal\">Senegal</ion-select-option>\n<ion-select-option value=\"Serbia\">Serbia</ion-select-option>\n<ion-select-option value=\"Seychelles\">Seychelles</ion-select-option>\n<ion-select-option value=\"Sierra Leone\">Sierra Leone</ion-select-option>\n<ion-select-option value=\"Singapore\">Singapore</ion-select-option>\n<ion-select-option value=\"Slovakia\">Slovakia</ion-select-option>\n<ion-select-option value=\"Slovenia\">Slovenia</ion-select-option>\n<ion-select-option value=\"South Africa\">South Africa</ion-select-option>\n<ion-select-option value=\"South Korea\">South Korea</ion-select-option>\n<ion-select-option value=\"Sudan\">Sudan</ion-select-option>\n<ion-select-option value=\"Spain\">Spain</ion-select-option>\n<ion-select-option value=\"Sri Lanka\">Sri Lanka</ion-select-option>\n<ion-select-option value=\"Sudan\">Sudan</ion-select-option>\n<ion-select-option value=\"Swaziland\">Swaziland</ion-select-option>\n<ion-select-option value=\"Sweden\">Sweden</ion-select-option>\n<ion-select-option value=\"Switzerland\">Switzerland</ion-select-option>\n<ion-select-option value=\"Taiwan\">Taiwan</ion-select-option>\n<ion-select-option value=\"Tanzania\">Tanzania</ion-select-option>\n<ion-select-option value=\"Togo\">Togo</ion-select-option>\n<ion-select-option value=\"Tunisia\">Tunisia</ion-select-option>\n<ion-select-option value=\"Turkey\">Turkey</ion-select-option>\n<ion-select-option value=\"Uganda\">Uganda</ion-select-option>\n<ion-select-option value=\"Ukraine\">Ukraine</ion-select-option>\n<ion-select-option value=\"United Arab Emirates\">United Arab Emirates</ion-select-option>\n<ion-select-option value=\"USA\">USA</ion-select-option>\n<ion-select-option value=\"Uruguay\">Uruguay</ion-select-option>\n<ion-select-option value=\"Venezuela\">Venezuela</ion-select-option>\n<ion-select-option value=\"Vietnam\">Vietnam</ion-select-option>\n<ion-select-option value=\"Wales\">Wales</ion-select-option>\n<ion-select-option value=\"Zambia\">Zambia</ion-select-option>\n<ion-select-option value=\"Zimbabwe\">Zimbabwe</ion-select-option>\n</ion-select>\n</ion-item>\n\n\n<ion-item>\n<ion-label position=\"floating\">Bank</ion-label>\n<ion-input #bank name=\"bank\" position=\"floating\" [(ngModel)]=\"model.bank\"\ntype=\"text\" required  ></ion-input>\n</ion-item>\n\n<ion-item>\n<ion-label position=\"floating\">Bank Acount number</ion-label>\n<ion-input #bank_number name=\"bank_number\" position=\"floating\" [(ngModel)]=\"model.accountNumber\"\ntype=\"text\" required  ></ion-input>\n</ion-item>\n\n<ion-item>\n<ion-label position=\"floating\">Bank Acount name</ion-label>\n<ion-input #bank_acount_name name=\"bank_acount_number\" position=\"floating\" [(ngModel)]=\"model.accountName\"\ntype=\"text\" required  ></ion-input>\n</ion-item>\n\n<ion-button expand=\"full\" type=\"submit\" [disabled]=\"!bank.value || setNationality.selectedOption.length == 0\n|| !fullname.value || !bank_number.value \"\nclass=\"text-white\" color=\"success\" >Submit</ion-button> \n</ion-list>      \n</form>\n\n            </ion-col>\n            <ion-col size=\"1\"></ion-col>\n          </ion-row>\n        </ion-grid>\n\n\n\n<!-- display user record -->\n\n<ion-grid >\n  <ion-row>\n    <ion-col size=\"1\"></ion-col>\n    <ion-col size=\"10\">\n      <ion-item *ngIf=\"myProfile\"  class=\"text-uppercase\">\n        <ion-list>\n          <h6> FULLNAME : <p class=\"text-success\"> {{myProfile?.fullname}}</p>  </h6>\n       \n        <br>\n       \n          <h6> email : <p class=\"text-success\">{{myProfile?.email}}</p>  </h6>\n       \n        <br>\n        \n          <h6> nationality : <p class=\"text-success\"> {{myProfile?.nationality}}</p>  </h6>\n        \n        <br>\n       \n          <h6> bank : <p class=\"text-success\">{{myProfile?.bank}}</p>  </h6>\n        \n        <br>\n          <h6> bank user name : <p class=\"text-success\"> {{myProfile?.account_name}}</p>  </h6>\n        \n        <br>\n       \n          <h6> accountnumber : <p class=\"text-success\">{{myProfile?.acount_number}} </p> </h6>\n       \n        <br>\n        \n          <h6> created : <p class=\"text-success\"> {{myProfile?.date | date}}</p>  </h6>\n        </ion-list>\n      </ion-item>\n      \n    </ion-col>\n    <ion-col size=\"1\"></ion-col>\n  </ion-row>\n</ion-grid>\n\n  <!-- loader -->\n  <div *ngIf=\"loading\" class=\" \">\n    <div class=\"toast-container \">\n        <div class=\"lds-roller\"><div></div><div></div><div></div><div></div>\n        <div></div><div></div><div></div><div></div></div>\n    </div>\n  </div>\n\n\n      </ion-card-content>\n  </ion-card>\n</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/profile/profile.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.module.ts ***!
      \*******************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "./src/app/profile/profile.page.ts");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
      }];

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "./src/app/profile/profile.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/profile/profile.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  background-image: url('bg_main.png');\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.lds-roller {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n\n.lds-roller div {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 32px 32px;\n}\n\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #fdfffd;\n  margin: -3px 0 0 -3px;\n}\n\n.lds-roller div:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n\n.lds-roller div:nth-child(1):after {\n  top: 50px;\n  left: 50px;\n}\n\n.lds-roller div:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n\n.lds-roller div:nth-child(2):after {\n  top: 54px;\n  left: 45px;\n}\n\n.lds-roller div:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n\n.lds-roller div:nth-child(3):after {\n  top: 57px;\n  left: 39px;\n}\n\n.lds-roller div:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n\n.lds-roller div:nth-child(4):after {\n  top: 58px;\n  left: 32px;\n}\n\n.lds-roller div:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n\n.lds-roller div:nth-child(5):after {\n  top: 57px;\n  left: 25px;\n}\n\n.lds-roller div:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n\n.lds-roller div:nth-child(6):after {\n  top: 54px;\n  left: 19px;\n}\n\n.lds-roller div:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n\n.lds-roller div:nth-child(7):after {\n  top: 50px;\n  left: 14px;\n}\n\n.lds-roller div:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n\n.lds-roller div:nth-child(8):after {\n  top: 45px;\n  left: 10px;\n}\n\n@-webkit-keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.toast-container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  top: auto;\n  margin-bottom: 80px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQywyQkFBQTtFQUNBLHNCQUFBO0VBQ0MsNEJBQUE7QUFDTjs7QUFLQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZKOztBQUlFO0VBQ0Usd0VBQUE7VUFBQSxnRUFBQTtFQUNBLDJCQUFBO0FBREo7O0FBR0U7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFFRTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFDSjs7QUFDRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQUU7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBR0o7O0FBREU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQUlKOztBQUZFO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQUtKOztBQUhFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFNSjs7QUFKRTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFPSjs7QUFMRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBUUo7O0FBTkU7RUFDRSwrQkFBQTtVQUFBLHVCQUFBO0FBU0o7O0FBUEU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQVVKOztBQVJFO0VBQ0UsZ0NBQUE7VUFBQSx3QkFBQTtBQVdKOztBQVRFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QUFZSjs7QUFWRTtFQUNFLGdDQUFBO1VBQUEsd0JBQUE7QUFhSjs7QUFYRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBY0o7O0FBWkU7RUFDRSxnQ0FBQTtVQUFBLHdCQUFBO0FBZUo7O0FBYkU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQWdCSjs7QUFkRTtFQUNFO0lBQ0UsdUJBQUE7RUFpQko7RUFmRTtJQUNFLHlCQUFBO0VBaUJKO0FBQ0Y7O0FBdkJFO0VBQ0U7SUFDRSx1QkFBQTtFQWlCSjtFQWZFO0lBQ0UseUJBQUE7RUFpQko7QUFDRjs7QUFaRTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBY0YiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9iZ19tYWluLnBuZ1wiKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXG4gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcbiAgfVxuXG5cbiAgXG4vLyBsb2FkZXJcbi5sZHMtcm9sbGVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXYge1xuICAgIGFuaW1hdGlvbjogbGRzLXJvbGxlciAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMzJweCAzMnB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjphZnRlciB7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA2cHg7XG4gICAgaGVpZ2h0OiA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTMsIDI1NSwgMjUzKTtcbiAgICBtYXJnaW46IC0zcHggMCAwIC0zcHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4wMzZzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSk6YWZ0ZXIge1xuICAgIHRvcDogNTBweDtcbiAgICBsZWZ0OiA1MHB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMDcycztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpOmFmdGVyIHtcbiAgICB0b3A6IDU0cHg7XG4gICAgbGVmdDogNDVweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjEwOHM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XG4gICAgdG9wOiA1N3B4O1xuICAgIGxlZnQ6IDM5cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg0KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNDRzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCk6YWZ0ZXIge1xuICAgIHRvcDogNThweDtcbiAgICBsZWZ0OiAzMnB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMThzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSk6YWZ0ZXIge1xuICAgIHRvcDogNTdweDtcbiAgICBsZWZ0OiAyNXB4O1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNikge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMjE2cztcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyIHtcbiAgICB0b3A6IDU0cHg7XG4gICAgbGVmdDogMTlweDtcbiAgfVxuICAubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDcpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjI1MnM7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KTphZnRlciB7XG4gICAgdG9wOiA1MHB4O1xuICAgIGxlZnQ6IDE0cHg7XG4gIH1cbiAgLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4yODhzO1xuICB9XG4gIC5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCk6YWZ0ZXIge1xuICAgIHRvcDogNDVweDtcbiAgICBsZWZ0OiAxMHB4O1xuICB9XG4gIEBrZXlmcmFtZXMgbGRzLXJvbGxlciB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbiAgXG4gIFxuICAvLyAgIGxvYWRpbmdcbiAgLnRvYXN0LWNvbnRhaW5lcntcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA5OTk7XG4gIH1cbiAgXG4gICAiXX0= */";
      /***/
    },

    /***/
    "./src/app/profile/profile.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/profile/profile.page.ts ***!
      \*****************************************/

    /*! exports provided: ProfilePage */

    /***/
    function srcAppProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
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


      var _shared_account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/account.service */
      "./src/app/shared/account.service.ts");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(userService, menu, toastController, accountService) {
          _classCallCheck(this, ProfilePage);

          this.userService = userService;
          this.menu = menu;
          this.toastController = toastController;
          this.accountService = accountService;
          this.userRecordNotAvalible = false;
          this.loading = true;
          this.emailRegex = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/';
          this.model = {
            fullname: '',
            nationality: '',
            accountNumber: '',
            accountName: '',
            bank: '',
            email: ''
          };
          this.setNationality = {
            selectedOption: []
          };
          this.getMyProfile();
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "presentFailNetwork",
          value: function presentFailNetwork() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: 'No internet connection!!!'
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
          key: "createProfile",
          value: function createProfile(form) {
            var _this = this;

            this.loading = true;
            console.log(this.model);
            this.userService.saveUserProfile(this.model).subscribe(function (res) {
              console.log(res);
              _this.loading = false;

              _this.getMyProfile();
            }, function (err) {
              _this.loading = false;
              console.log(err);
            });
          }
        }, {
          key: "selectChange",
          value: function selectChange($event) {
            console.log($event);
            this.model.nationality = $event; // this.setNationality.selectedOption = $event;
          }
        }, {
          key: "getMyProfile",
          value: function getMyProfile() {
            var _this2 = this;

            this.userService.getUserProfile().subscribe(function (res) {
              _this2.loading = false;
              _this2.myProfile = res;
              console.log(_this2.myProfile);
              _this2.userRecordNotAvalible = false;
            }, function (err) {
              _this2.loading = false;
              _this2.userRecordNotAvalible = true;
            });
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _shared_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./profile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./profile.page.scss */
        "./src/app/profile/profile.page.scss"))["default"]]
      })], ProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map