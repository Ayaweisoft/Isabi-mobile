(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-events-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppEventsEventsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <div class=\"row d-flex justify-content-center\">\n      <img class=\"rounded-top\"\n           src=\"assets/img/ISABI LOGO GREEN.png\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-xs=\"12\"\n               size-sm=\"12\"\n               size-md=\"8\"\n               offset-md=\"2\"\n               size-lg=\"6\"\n               offset-lg=\"3\">\n        <ion-card color=\"light\"\n                  *ngFor=\"let item of allEvent\">\n          <img [src]=\"item.image_url\">\n\n          <div class=\"ion-text-center\">\n            <ion-title mode=\"md\"\n                       class=\"text-uppercase font-weight-bold\">{{item.eventName}}</ion-title>\n            <ion-text>{{item.aboutEvent}} </ion-text>\n\n            <small>{{item.type}} </small>\n\n            <ion-icon *ngIf=\"userService.getRole() == 'ADMIN'\"\n                      (click)=\"handleDelete(item)\"\n                      name=\"trash\">\n            </ion-icon>\n          </div>\n\n          <div class=\"row d-flex justify-content-center\">\n            <ion-button (click)=\"insideEvent(item)\">ENTER\n            </ion-button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- loader -->\n  <div *ngIf=\"loading\"\n       class=\" \">\n    <div class=\"toast-container \">\n      <div class=\"lds-roller\">\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/events/events.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/events/events.module.ts ***!
      \*****************************************/

    /*! exports provided: EventsPageModule */

    /***/
    function srcAppEventsEventsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsPageModule", function () {
        return EventsPageModule;
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


      var _events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./events.page */
      "./src/app/events/events.page.ts");

      var routes = [{
        path: '',
        component: _events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"]
      }];

      var EventsPageModule = function EventsPageModule() {
        _classCallCheck(this, EventsPageModule);
      };

      EventsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
        declarations: [_events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"]]
      })], EventsPageModule);
      /***/
    },

    /***/
    "./src/app/events/events.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/events/events.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppEventsEventsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header img {\n  width: 70px;\n  height: 30px;\n  padding: 5px 0;\n}\n\nion-card img {\n  height: 90%;\n  width: 100%;\n  -o-object-fit: fill;\n     object-fit: fill;\n}\n\nion-card ion-title {\n  font-size: 0.8rem;\n  margin-top: 8px;\n}\n\nion-card ion-icon {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: 10px;\n  border-radius: 50%;\n  color: red;\n}\n\nion-card .row ion-button {\n  border-radius: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL2V2ZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFBRjs7QUFLQztFQUNDLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7S0FBQSxnQkFBQTtBQUZGOztBQUtDO0VBQ0MsaUJBQUE7RUFDQSxlQUFBO0FBSEY7O0FBTUM7RUFDQyxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBSkY7O0FBT0M7RUFDQyxtQkFBQTtFQUNBLG1CQUFBO0FBTEYiLCJmaWxlIjoic3JjL2FwcC9ldmVudHMvZXZlbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuXHRpbWcge1xuXHRcdHdpZHRoOiA3MHB4O1xuXHRcdGhlaWdodDogMzBweDtcblx0XHRwYWRkaW5nOiA1cHggMDtcblx0fVxufVxuXG5pb24tY2FyZCB7XG5cdGltZyB7XG5cdFx0aGVpZ2h0OiA5MCU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0b2JqZWN0LWZpdDogZmlsbDtcblx0fVxuXG5cdGlvbi10aXRsZSB7XG5cdFx0Zm9udC1zaXplOiAwLjhyZW07XG5cdFx0bWFyZ2luLXRvcDogOHB4O1xuXHR9XG5cblx0aW9uLWljb24ge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDA7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC43KTtcblx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRjb2xvcjogcmVkO1xuXHR9XG5cblx0LnJvdyBpb24tYnV0dG9uIHtcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/events/events.page.ts":
    /*!***************************************!*\
      !*** ./src/app/events/events.page.ts ***!
      \***************************************/

    /*! exports provided: EventsPage */

    /***/
    function srcAppEventsEventsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventsPage", function () {
        return EventsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _shared_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../shared/event.service */
      "./src/app/shared/event.service.ts");
      /* harmony import */


      var _shared_game_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../shared/game-service.service */
      "./src/app/shared/game-service.service.ts");
      /* harmony import */


      var _shared_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./../shared/user.service */
      "./src/app/shared/user.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var EventsPage = /*#__PURE__*/function () {
        function EventsPage(router, gameService, eventService, userService, alertController) {
          _classCallCheck(this, EventsPage);

          this.router = router;
          this.gameService = gameService;
          this.eventService = eventService;
          this.userService = userService;
          this.alertController = alertController;
          this.allEvent = [];
          this.loading = true;
        }

        _createClass(EventsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllevent();
          }
        }, {
          key: "getAllevent",
          value: function getAllevent() {
            var _this = this;

            this.eventService.getAllEvent().subscribe(function (res) {
              console.log(res);
              _this.allEvent = res['event'];
              _this.loading = false;
            }, function (err) {
              _this.loading = false;

              _this.userService.longToast(err.error.msg);

              console.log('error getting event', err);
            });
          }
        }, {
          key: "insideEvent",
          value: function insideEvent(event) {
            switch (event.type) {
              case 'VOTING':
                this.router.navigate(["/tabs/inside-event", event._id]);
                break;

              case 'TICKETING':
                this.router.navigate(["/tabs/inside-ticketing", event._id]);
                break;

              case 'FORM-SALES':
                this.router.navigate(["/tabs/form-sales", event._id]);
                break;

              default:
                break;
            }
          }
        }, {
          key: "handleDelete",
          value: function handleDelete(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: 'Confirm!',
                        message: "Delete <strong>".concat(event.aboutEvent, " </strong>!!!"),
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Okay',
                          handler: function handler() {
                            _this2.loading = true;

                            _this2.eventService.deleteEvent(event._id).subscribe(function (res) {
                              _this2.loading = false;

                              _this2.userService.generalToast(res['msg'], 2000);

                              _this2.getAllevent();
                            }, function (err) {
                              _this2.loading = false;

                              _this2.userService.generalAlert(err.error.msg);
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
        }]);

        return EventsPage;
      }();

      EventsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _shared_game_service_service__WEBPACK_IMPORTED_MODULE_3__["GameServiceService"]
        }, {
          type: _shared_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]
        }, {
          type: _shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]
        }];
      };

      EventsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
        selector: 'app-events',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./events.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./events.page.scss */
        "./src/app/events/events.page.scss"))["default"]]
      })], EventsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=events-events-module-es5.js.map