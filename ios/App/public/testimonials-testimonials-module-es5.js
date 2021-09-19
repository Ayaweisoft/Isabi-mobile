(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["testimonials-testimonials-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/testimonials/testimonials.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/testimonials/testimonials.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTestimonialsTestimonialsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"gamesection\"></ion-back-button>\n    </ion-buttons>\n    <ion-img [routerLink]=\"['/gamesection']\"  class=\"rounded-top\" src=\"../../assets/icon/Logoicon.png\"></ion-img>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"content\">\n\n\n     <p class=\" bg-dark m-5 text-center text-white\"> Testimonials</p>\n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/testimonials/testimonials.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/testimonials/testimonials.module.ts ***!
      \*****************************************************/

    /*! exports provided: TestimonialsPageModule */

    /***/
    function srcAppTestimonialsTestimonialsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestimonialsPageModule", function () {
        return TestimonialsPageModule;
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


      var _testimonials_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./testimonials.page */
      "./src/app/testimonials/testimonials.page.ts");

      var routes = [{
        path: '',
        component: _testimonials_page__WEBPACK_IMPORTED_MODULE_6__["TestimonialsPage"]
      }];

      var TestimonialsPageModule = function TestimonialsPageModule() {
        _classCallCheck(this, TestimonialsPageModule);
      };

      TestimonialsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_testimonials_page__WEBPACK_IMPORTED_MODULE_6__["TestimonialsPage"]]
      })], TestimonialsPageModule);
      /***/
    },

    /***/
    "./src/app/testimonials/testimonials.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/testimonials/testimonials.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppTestimonialsTestimonialsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  background-image: url('app-bg.png');\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.icon-bar {\n  width: 100%;\n  background-color: #555;\n  display: flex;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdGltb25pYWxzL3Rlc3RpbW9uaWFscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNDLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQyw0QkFBQTtBQUNOOztBQUNFO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RpbW9uaWFscy90ZXN0aW1vbmlhbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy8vYXBwLWJnLnBuZ1wiKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxuICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXG4gIH1cbiAgLmljb24tYmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/testimonials/testimonials.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/testimonials/testimonials.page.ts ***!
      \***************************************************/

    /*! exports provided: TestimonialsPage */

    /***/
    function srcAppTestimonialsTestimonialsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TestimonialsPage", function () {
        return TestimonialsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var TestimonialsPage = /*#__PURE__*/function () {
        function TestimonialsPage() {
          _classCallCheck(this, TestimonialsPage);
        }

        _createClass(TestimonialsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TestimonialsPage;
      }();

      TestimonialsPage.ctorParameters = function () {
        return [];
      };

      TestimonialsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-testimonials',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./testimonials.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/testimonials/testimonials.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./testimonials.page.scss */
        "./src/app/testimonials/testimonials.page.scss"))["default"]]
      })], TestimonialsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=testimonials-testimonials-module-es5.js.map