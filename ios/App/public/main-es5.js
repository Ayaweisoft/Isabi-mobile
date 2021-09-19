(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
      var map = {
        "./admin-account/admin-account.module": ["./src/app/admin-account/admin-account.module.ts", "admin-account-admin-account-module"],
        "./admin-leaderbord/admin-leaderbord.module": ["./src/app/admin-leaderbord/admin-leaderbord.module.ts", "admin-leaderbord-admin-leaderbord-module"],
        "./admin-play/admin-play.module": ["./src/app/admin-play/admin-play.module.ts", "admin-play-admin-play-module"],
        "./admin-upload/admin-upload.module": ["./src/app/admin-upload/admin-upload.module.ts", "admin-upload-admin-upload-module"],
        "./adminquery/adminquery.module": ["./src/app/adminquery/adminquery.module.ts", "adminquery-adminquery-module"],
        "./admintransfer/admintransfer.module": ["./src/app/admintransfer/admintransfer.module.ts", "admintransfer-admintransfer-module"],
        "./cashout-request/cashout-request.module": ["./src/app/cashout-request/cashout-request.module.ts", "cashout-request-cashout-request-module"],
        "./contactus/contactus.module": ["./src/app/contactus/contactus.module.ts", "contactus-contactus-module"],
        "./events/events.module": ["./src/app/events/events.module.ts", "events-events-module"],
        "./howtoplay/howtoplay.module": ["./src/app/howtoplay/howtoplay.module.ts", "howtoplay-howtoplay-module"],
        "./leaderboard/leaderboard.module": ["./src/app/leaderboard/leaderboard.module.ts", "leaderboard-leaderboard-module"],
        "./manage-questions/manage-questions.module": ["./src/app/manage-questions/manage-questions.module.ts", "manage-questions-manage-questions-module"],
        "./manage-users/manage-users.module": ["./src/app/manage-users/manage-users.module.ts", "manage-users-manage-users-module"],
        "./merchant/merchant.module": ["./src/app/merchant/merchant.module.ts", "merchant-merchant-module"],
        "./myrecord/myrecord.module": ["./src/app/myrecord/myrecord.module.ts", "myrecord-myrecord-module"],
        "./payouts/payouts.module": ["./src/app/payouts/payouts.module.ts", "payouts-payouts-module"],
        "./playdemo/playdemo.module": ["./src/app/playdemo/playdemo.module.ts", "playdemo-playdemo-module"],
        "./playsection/playsection.module": ["./src/app/playsection/playsection.module.ts", "playsection-playsection-module"],
        "./profile/profile.module": ["./src/app/profile/profile.module.ts", "profile-profile-module"],
        "./testimonials/testimonials.module": ["./src/app/testimonials/testimonials.module.ts", "testimonials-testimonials-module"],
        "./transaction/transaction.module": ["./src/app/transaction/transaction.module.ts", "transaction-transaction-module"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return __webpack_require__.e(ids[1]).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/adminnavigation/adminnavigation.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/adminnavigation/adminnavigation.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAdminnavigationAdminnavigationComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <div>\n    <ion-list>\n      <ion-tab-button  [routerLink]=\"['/gamesection']\" >\n        <ion-icon size=\"large\" name=\"home\"></ion-icon>\n        <ion-label>Home</ion-label>\n      </ion-tab-button>\n    </ion-list>\n    <ion-list>\n      <ion-tab-button  [routerLink]=\"['/manage-questions']\"  >\n        <ion-icon size=\"large\" name=\"help\"></ion-icon>\n        <ion-label>Manage Questions</ion-label>\n      </ion-tab-button>\n    </ion-list>\n    <ion-list>\n      <ion-tab-button   [routerLink]=\"['/admintransfer']\" routerLinkActive=\"router-link-active\" >\n        <ion-icon size=\"large\"  name=\"swap\"></ion-icon>\n        <ion-label>Transfer</ion-label>\n      </ion-tab-button>\n    </ion-list>\n    <ion-list>\n      <ion-tab-button   [routerLink]=\"['/payouts']\" routerLinkActive=\"router-link-active\" >\n        <ion-icon size=\"large\"  name=\"wallet\"></ion-icon>\n        <ion-label>Payouts</ion-label>\n      </ion-tab-button>\n    </ion-list> \n    <ion-list>\n      <ion-tab-button   [routerLink]=\"['/adminquery']\">\n        <ion-icon size=\"large\"  name=\"search\"></ion-icon>\n        <ion-label>Search</ion-label>\n      </ion-tab-button>\n    </ion-list>\n    <ion-list>\n      <ion-tab-button   [routerLink]=\"['/cashout-request']\">\n        <ion-icon size=\"large\"  name=\"cash\"></ion-icon>\n        <ion-label>Cash-out Request</ion-label>\n      </ion-tab-button>\n    </ion-list>\n    <ion-list>\n      <ion-tab-button   [routerLink]=\"['/admin-play']\">\n        <ion-icon size=\"large\"  name=\"logo-game-controller-a\"></ion-icon>\n        <ion-label>Play Game</ion-label>\n      </ion-tab-button>\n    </ion-list>\n    <ion-list>\n      <ion-tab-button   [routerLink]=\"['/admin-leaderbord']\">\n        <ion-icon size=\"large\"  name=\"trophy\"></ion-icon>\n        <ion-label>Leaderboard</ion-label>\n      </ion-tab-button>\n    </ion-list> \n    <ion-list>\n      <ion-tab-button   [routerLink]=\"['/admin-account']\">\n        <ion-icon  size=\"large\"  name=\"settings\"></ion-icon>\n        <ion-label>Settings</ion-label>\n      </ion-tab-button>\n    </ion-list>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-menu contentId=\"main-content\"\n            type=\"overlay\">\n    <ion-header>\n      <ion-toolbar>\n        <div class=\"menu\">\n          <ion-title mode=\"md\">Menu</ion-title>\n\n          <ion-item lines=\"none\"><span class=\"mt-3 mr-2\"> Username: </span>\n            <ion-text class=\"font-weight-bold mt-3\">{{accountService.appUser}}</ion-text>\n          </ion-item>\n\n          <!-- <ion-item lines=\"none\">UserId: ({{accountService.user_id}}) </ion-item> -->\n\n          <ion-item lines=\"none\"><span class=\"mr-2\"> Balance: </span>\n            <ion-badge> ₦ {{accountService.accountBalance | number}} </ion-badge>\n            <ion-icon slot=\"end\"\n                      #bal\n                      class=\"animated\"\n                      (click)=\"reloadBalance()\"\n                      name=\"refresh\">refresh</ion-icon>\n          </ion-item>\n        </div>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list color=\"light\"\n                class=\"drawer-list\">\n        <ion-menu-toggle auto-hide=\"false\"\n                         *ngFor=\"let p of appPages\">\n          <ion-item tappable\n                    color=\"light\"\n                    [routerDirection]=\"'root'\"\n                    [routerLink]=\"[p.url]\"\n                    routerLinkActive=\"router-link-active\">\n            <ion-icon slot=\"start\"\n                      [name]=\"p.icon\"></ion-icon>\n            <ion-label>\n              {{p.title}}\n            </ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle *ngIf=\"userService.getRole() === 'MERCHANT'\"\n                         [routerLink]=\"['/merchant']\">\n          <ion-item color=\"light\">\n            <ion-icon name=\"cash\"></ion-icon>\n            <ion-label class=\"ml-4\">MERCHANT</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <!-- <ion-menu-toggle (click)=\"rateYourApp()\">\n                <ion-item color=\"secondary\" >\n                <ion-icon name=\"thumbs-up\"></ion-icon>\n                <ion-label  class=\"ml-4\">RATE MY APP</ion-label>\n              </ion-item>\n            </ion-menu-toggle> -->\n        <!-- <ion-menu-toggle>\n                <ion-item color=\"secondary\" (click)=\"userService.logout()\" >\n                <ion-icon name=\"power\"></ion-icon>\n                <ion-label  class=\"ml-4\">LOGOUT</ion-label>\n              </ion-item>\n            </ion-menu-toggle> -->\n\n        <ion-item>\n          <ion-icon slot=\"start\"\n                    name=\"moon-outline\"></ion-icon>\n          <ion-label>\n            Dark Mode\n          </ion-label>\n          <ion-toggle [(ngModel)]=\"dark\"></ion-toggle>\n        </ion-item>\n\n        <ion-menu-toggle>\n          <ion-item color=\"light\"\n                    tappable\n                    (click)=\"userService.logout()\">\n            <ion-icon slot=\"start\"\n                      name=\"power\"></ion-icon>\n            <ion-label> LOGOUT</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n\n      <ion-list color=\"light\"\n                id=\"labels-list\"\n                *ngIf=\"userService.getRole() == 'ADMIN'\">\n        <ion-list-header class=\"text-center\">Admin</ion-list-header>\n        <ion-menu-toggle>\n          <ion-item color=\"success\"\n                    color=\"light\"\n                    *ngFor=\"let label of labels\"\n                    lines=\"full\">\n            <ion-icon slot=\"start\"\n                      [name]=\"label.icon\"></ion-icon>\n            <ion-label tappable\n                       [routerLink]=\"label.url\">{{ label.title }}</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n\n</ion-app>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/account.component.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/account.component.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsAccountAccountComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <div class=\"row d-flex justify-content-center\">\n      <img class=\"rounded-top\" src=\"../../../assets/icon/Logoicon.png\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"1\"></ion-col>\n      <ion-col size=\"10\">\n        <!-- grid content -->\n\n\n\n        <script src=\"https://code.jquery.com/jquery-1.12.4.min.js\"></script>\n        <script src=\"https://js.paystack.co/v1/paystack.js\"></script>\n\n\n        <div>\n          <ion-card class=\"text-center\">\n            <ion-card-header color=\"success\" class=\"font-weight-bold text-white\"> PAYMENT</ion-card-header>\n            <ion-card-content>\n              <h2 class=\"text-center m-2\">{{appUsername}}</h2>\n              <!-- <img class=\"banks\" src=\"../../../assets/img/banks.png\" alt=\"\"> -->\n              <div class=\"col p-5 d-flex justify-content-center\">\n                <img class=\"wallet\" src=\"assets/icon/wallet_icon.png\">\n              </div>\n\n              <h3 class=\"text-center mb-5 font-weight-bold\">\n                BALANCE <ion-chip color=\"dark\" outline>\n                  <h3 class=\"m-2\"> {{accountService.accountBalance | currency:' ₦ '}}</h3>\n                </ion-chip>\n              </h3>\n\n\n              <ion-row class=\"d-flex justify-content-center\">\n                <!-- pay now -->\n                <div *ngIf=\"!showPaymentButtons\" class=\"pr-4 row d-flex justify-content-center\">\n                  <ion-button (click)=\"enterAmountInput()\" color=\"success\">DEPOSIT</ion-button>\n                </div>\n                <div *ngIf=\"!showPaymentButtons\" class=\" pl-4 row d-flex justify-content-center\">\n                  <ion-button (click)=\"enterCashoutAmount()\" color=\"success\">CASHOUT</ion-button>\n\n                </div>\n              </ion-row>\n\n              <!-- <ion-list>\n                                <ion-item *ngFor=\"let item of scheduled\">\n                                  <ion-label text-wrap>\n                                    {{item.id}} {{item.title}}\n                                    <p>Trigger : {{item.trigger | json}}</p>\n                                  </ion-label>\n                                  \n                                </ion-item>\n                              </ion-list> -->\n\n\n\n\n              <div *ngIf=\"showPaymentButtons\">\n\n\n                <ion-chip *ngIf=\"showPaymentButtons\">\n                  <h5 class=\"text-center font-weight-bold\">I want to pay ₦ {{model.amount}} </h5>\n                </ion-chip> <br>\n\n\n                <!-- *ngIf=\"model?.amount > 99\" -->\n           \n\n                <!-- break line -->\n                <hr>\n                <ion-card class=\"green darken-3\">\n                  <small class=\"text-center text-white\"> Banks transafer/ Cards / ussd</small>\n                  <ion-row>\n                    <ion-col class=\"d-flex justify-content-center\">\n               \n                      <!-- public_key=\"FLWPUBK_TEST-32c34a10b25063883487eb99f916159a-X\" [amount]='model.amount' currency='NGN' -->\n\n                          <flutterwave-make-payment  \n                          public_key=\"FLWPUBK-b804fc96c1eb9fa18b814b41a86cfb45-X\" [amount]='model.amount' currency='NGN'\n                          payment_options=\"card\" text=\"PAY NOW\" [customer]=\"customerDetails\" [customizations]=\"customizations\"\n                          [tx_ref]=\"reference\" (callback)=\"makePaymentCallback($event)\" (close)=\"closedPaymentModal()\">\n                          <img src=\"../../../assets/banks/visa.gif\">\n                        </flutterwave-make-payment>\n        \n                    </ion-col>\n\n           \n                  </ion-row>\n                </ion-card>\n              </div>\n            </ion-card-content>\n\n          </ion-card>\n        </div>\n\n    <ion-card color=\"light\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item color=\"light\" class=\"d-flex justify-content-center p-3\">\n            <ion-label color=\"success\" position=\"floating\">promo code</ion-label>\n            <ion-input #promo type=\"text\"></ion-input>\n          </ion-item>\n          <div class=\"ion-text-center\">\n            <ion-button [disabled]=\"loading\" color=\"success\" [disabled]=\"!promo.value\"\n              (click)=\"submitProCode(promo.value)\">\n              <div *ngIf=\"!loading\">submit </div>\n              <ion-spinner *ngIf=\"loading\" name=\"crescent\"></ion-spinner>\n            </ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n\n        <div>\n          <ion-card class=\"text-center\">\n            <ion-card-header color=\"success\" class=\"font-weight-bold text-white \"> ACCOUNT</ion-card-header>\n            <ion-card-content>\n              <div class=\"col p-5 d-flex justify-content-center\">\n                <img class=\"wallet\" src=\"assets/icon/profile_icon.png\">\n              </div>\n              <h4 color=\"success\" class=\"text-center fint-weight-bold\"> UPDATE YOUR INFORMATION</h4>\n              <ion-button color=\"success\" (click)=\"profileSection()\">UPDATE</ion-button>\n            </ion-card-content>\n          </ion-card>\n        </div>\n\n      </ion-col>\n      <ion-col size=\"1\"></ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-event/admin-event.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-event/admin-event.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsAdminEventAdminEventComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    \n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons> <div class=\"row d-flex justify-content-center\">\n      <img class=\"rounded-top\"  src=\"../../../assets/icon/Logoicon.png\">\n    </div> \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content ion-padding>\n\n  <ion-grid >\n    <ion-row>\n      <ion-col sizeSm=\"12\" sizeXs=\"12\" sizeLg=\"8\" offsetLg=\"2\" sizeMd=\"10\"  offsetMd=\"1\">\n\n        <ion-card  color=\"light\">\n          <form #eventForm=\"ngForm\" name=\"eventform\" (submit)=\"eventForm.valid && submitEvent()\">\n            <h5 class=\"ion-text-center\">CREATE EVENT</h5>\n        \n            \n            <ion-col>\n              <ion-item>\n                <div  class=\"text-input \">\n                  <ion-label position=\"floating\" color=\"primary\">event name</ion-label>\n                  <ion-input  type=\"text\" #eventName=\"ngModel\" name=\"eventName\" \n                  [(ngModel)]=\"eventModel.eventName\" required=\"true\"></ion-input>\n              </div>\n            </ion-item>\n            </ion-col>\n        \n            <ion-col>\n              <!-- select options -->\n              <ion-card>\n                <ion-item color=\"light\">\n                <ion-label class=\"text-center\" color=\"primary\">select event type</ion-label>\n                <ion-select select=\"success\" interface=\"popover\" name=\"type\"\n                 (ngModelChange)=\"eventType($event)\"  [(ngModel)]=\"eventModel.type\" >\n               <ion-select-option  value=\"VOTING\">VOTING</ion-select-option>\n               <ion-select-option  value=\"TICKETTING\">TICKETTING</ion-select-option>\n               <ion-select-option  value=\"FORM-SALES\">FORM-SALES</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <small *ngIf=\"eventName.value && !eventModel.type\" class=\"text-center text-danger\">select event type</small>\n            </ion-card>\n             </ion-col>\n        \n             <ion-col>\n              <ion-item>\n                <div  class=\"text-input \">\n                  <ion-label position=\"floating\" color=\"primary\">event image url</ion-label>\n                  <ion-input  type=\"text\" #image_url=\"ngModel\" name=\"image_url\" \n                  [(ngModel)]=\"eventModel.image_url\" required=\"true\"></ion-input>\n              </div>\n            </ion-item>\n            </ion-col>\n        \n             <ion-col>\n              <ion-item>\n                <div  class=\"text-input \">\n                  <ion-label position=\"floating\" color=\"primary\">company name</ion-label>\n                  <ion-input  type=\"text\" #companyName=\"ngModel\" name=\"companyName\" \n                  [(ngModel)]=\"eventModel.companyName\" required=\"true\"></ion-input>\n              </div>\n            </ion-item>\n            </ion-col>\n        \n             <ion-col>\n              <ion-item>\n                <div  class=\"text-input \">\n                  <ion-label position=\"floating\" color=\"primary\">address</ion-label>\n                  <ion-input  type=\"text\" #address=\"ngModel\" name=\"address\" \n                  [(ngModel)]=\"eventModel.address\" required=\"true\"></ion-input>\n              </div>\n            </ion-item>\n            </ion-col>\n        \n             <ion-col>\n              <ion-item>\n                <div  class=\"text-input \">\n                  <ion-label position=\"floating\" color=\"primary\">contacty number</ion-label>\n                  <ion-input  type=\"text\" #contactNumber=\"ngModel\" name=\"contactNumber\" \n                  [(ngModel)]=\"eventModel.contactNumber\" required=\"true\"></ion-input>\n              </div>\n            </ion-item>\n            </ion-col>\n        \n             <ion-col>\n              <ion-item>\n                <div  class=\"text-input \">\n                  <ion-label position=\"floating\" color=\"primary\">about event</ion-label>\n                  <ion-input  type=\"text\" #aboutEvent=\"ngModel\" name=\"aboutEvent\" \n                  [(ngModel)]=\"eventModel.aboutEvent\" required=\"true\"></ion-input>\n              </div>\n            </ion-item>\n            </ion-col>\n        \n            <ion-row>\n              \n             <ion-col>\n              <ion-item>\n                <div  class=\"text-input \">\n                  <ion-label position=\"floating\" color=\"primary\">cost per vote</ion-label>\n                  <ion-input  type=\"text\" #costPerVote=\"ngModel\" name=\"costPerVote\" \n                  [(ngModel)]=\"eventModel.costPerVote\"></ion-input>\n              </div>\n            </ion-item>\n            </ion-col>\n        \n               \n            <ion-col>\n              <ion-item>\n                <div  class=\"text-input \">\n                  <ion-label position=\"floating\" color=\"primary\">number of slot</ion-label>\n                  <ion-input  type=\"text\" #numberOfSlot=\"ngModel\" name=\"numberOfSlot\" \n                  [(ngModel)]=\"eventModel.numberOfSlot\"></ion-input>\n              </div>\n            </ion-item>\n            </ion-col> \n        \n            <ion-col>\n              <ion-item>\n                <div  class=\"text-input \">\n                  <ion-label position=\"floating\" color=\"primary\">i-sabi sharing ratio</ion-label>\n                  <ion-input  type=\"text\" #sharingRatio_isabi=\"ngModel\" name=\"sharingRatio_isabi\" \n                  [(ngModel)]=\"eventModel.sharingRatio_isabi\"></ion-input>\n              </div>\n            </ion-item>\n            </ion-col>\n        \n            <ion-col>\n              <ion-item>\n                <div  class=\"text-input \">\n                  <ion-label position=\"floating\" color=\"primary\">company's sharing ratio</ion-label>\n                  <ion-input  type=\"text\" #sharingRatio_company=\"ngModel\" name=\"sharingRatio_company\" \n                  [(ngModel)]=\"eventModel.sharingRatio_company\"></ion-input>\n              </div>\n            </ion-item>\n            </ion-col>\n            </ion-row>\n        \n            <ion-col>\n              <ion-item>\n                <div  class=\"text-input \">\n                  <ion-label position=\"floating\" color=\"primary\">account number</ion-label>\n                  <ion-input  type=\"text\" #accountNumber=\"ngModel\" name=\"accountNumber\" \n                  [(ngModel)]=\"eventModel.accountNumber\"></ion-input>\n              </div>\n            </ion-item>\n            </ion-col>\n        \n           <ion-row>\n            <ion-col>\n              <ion-item>\n                <div  class=\"text-input \">\n                  <ion-label position=\"floating\" color=\"primary\">account name</ion-label>\n                  <ion-input  type=\"text\" #accountName=\"ngModel\" name=\"accountName\" \n                  [(ngModel)]=\"eventModel.accountName\"></ion-input>\n              </div>\n            </ion-item>\n            </ion-col>\n        \n            <ion-col>\n              <ion-item>\n                <div  class=\"text-input \">\n                  <ion-label position=\"floating\" color=\"primary\">bank name</ion-label>\n                  <ion-input  type=\"text\" #bankname=\"ngModel\" name=\"bankname\" \n                  [(ngModel)]=\"eventModel.bankname\"></ion-input>\n              </div>\n            </ion-item>\n            </ion-col>\n           </ion-row>\n        \n            <ion-button (click)=\"submitEvent()\" *ngIf=\"eventModel.type  && eventForm.valid\">submit</ion-button>\n        \n          </form>\n        </ion-card>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/congrats/congrats.component.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/congrats/congrats.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsCongratsCongratsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"ion-padding\">\n  <ion-icon size=\"large\" (click)=\"dismissModal()\" slot=\"end\" name=\"close\"></ion-icon>\n \n </div>\n \n <ion-content>\n \n   <div class=\"content\">\n \n   <ion-grid fixed class=\"mt-5\">\n     <ion-row class=\"ion-justify-content-center\">\n       <ion-col size=\"8\">\n         \n         <div class=\"text-center\">\n           <img src=\"/assets/img/congrants_image.jpg\"  width=\"250\" alt=\"\">\n         </div>\n \n         <ion-list>\n           <ion-item class=\"ion-padding\" color=\"light\">\n             <ion-label>Elapsed </ion-label>\n             <div slot=\"end\" >  <strong>{{minutes}} </strong> min, <strong>{{seconds}} </strong> seconds  </div>\n             <div></div>\n           </ion-item>\n \n           <ion-item class=\"ion-padding\" color=\"light\">\n             <ion-label>Correct Questions </ion-label>\n             <div slot=\"end\"> <strong>{{correctQuestion}}/15 </strong> </div>\n           </ion-item>\n         </ion-list>\n \n         <ion-row class=\"ion-justify-content-center\">\n           <ion-button (click)=\"dismissModal()\" expand=\"block\" fill=\"outline\" color=\"dark\">\n            close\n           </ion-button>\n           <ion-button (click)=\"playAgain()\" expand=\"block\" fill=\"outline\" color=\"success\">\n             play \n           </ion-button>\n         </ion-row>\n         \n       </ion-col>\n     </ion-row>\n   </ion-grid>\n   </div>\n \n </ion-content>\n ";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fail-game/fail-game.component.html":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fail-game/fail-game.component.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsFailGameFailGameComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<div class=\"ion-padding\">\n <ion-icon size=\"large\" (click)=\"dismissModal()\" slot=\"end\" name=\"close\"></ion-icon>\n\n</div>\n\n<ion-content>\n\n  <div class=\"content\">\n\n  <ion-grid fixed class=\"mt-5\">\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size=\"8\">\n        \n        <div class=\"text-center\">\n          <!-- <img src=\"/assets/img/congrants_image.jpg\"  width=\"250\" alt=\"\"> -->\n          <img src=\"../../../assets/img/very_sorry.png\"  width=\"250\" alt=\"\">\n        </div>\n\n        <ion-list>\n          <ion-item class=\"ion-padding\" color=\"light\">\n            <ion-label>Elapsed </ion-label>\n            <div slot=\"end\" >  <strong>{{minutes}} </strong> min, <strong>{{seconds}} </strong> seconds  </div>\n            <div></div>\n          </ion-item>\n\n          <ion-item class=\"ion-padding\" color=\"light\">\n            <ion-label>Correct Questions </ion-label>\n            <div slot=\"end\"> <strong>{{correctQuestion}}/15 </strong> </div>\n          </ion-item>\n        </ion-list>\n\n        <ion-row class=\"ion-justify-content-center\">\n          <ion-button (click)=\"dismissModal()\" expand=\"block\" fill=\"outline\" color=\"dark\">\n           close\n          </ion-button>\n          <ion-button (click)=\"playAgain()\" expand=\"block\" fill=\"outline\" color=\"success\">\n            play \n          </ion-button>\n        </ion-row>\n        \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgetpassword/forgetpassword.component.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgetpassword/forgetpassword.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsForgetpasswordForgetpasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-xs=\"12\"\n               size-sm=\"12\"\n               size-md=\"6\"\n               offset-md=\"3\"\n               size-lg=\"4\"\n               offset-lg=\"4\">\n\n        <!-- <form *ngIf=\"showNumberForm\"\n              #passwordForm\n              ngform=\"passwordForm\"\n              name=\"form\"\n              (submit)=\"submitNumber(passwordForm)\">\n          <h5 class=\"text-center font-weight-bold mb-4\">FORGET PASSWORD</h5>\n\n          <div *ngIf=\"loading\">\n            <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n          </div>\n\n          <div class=\"mb-2\">\n            <ion-label class=\"ml-3\">Phone</ion-label>\n            <div class=\"text-input\">\n              <ion-input type=\"number\"\n                         class=\"pl-4 pr-2\"\n                         #number\n                         name=\"number\"\n                         placeholder=\"enter phone number\"\n                         clearInput\n                         [(ngModel)]=\"model.number\"\n                         autocomplete=\"off\"\n                         minlength=\"11\"\n                         required=\"true\"></ion-input>\n            </div>\n          </div>\n\n          <div class=\"justify-content-center row pt-2\">\n            <ion-button shape=\"round\"\n                        type=\"submit\"\n                        (submit)=\"submitNumber(passwordForm)\">SUBMIT\n            </ion-button>\n          </div>\n        </form> -->\n\n        <!-- loader -->\n        <div *ngIf=\"loading\"\n             class=\" \">\n          <div class=\"toast-container \">\n            <div class=\"lds-roller\">\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n              <div></div>\n            </div>\n          </div>\n        </div>\n\n\n        <!-- reset password input *ngIf=\"allowReset\" -->\n        <form class=\"mt-5\"\n              #newPasswordForm\n              ngform=\"newPasswordForm\"\n              name=\"form\"\n              (submit)=\"submitNewPassword(newPasswordForm)\">\n          <h5 class=\"text-center font-weight-bold text-white mb-4\">ENTER NEW PASSWORD</h5>\n          <div *ngIf=\"loading\">\n            <ion-progress-bar type=\"indeterminate\"></ion-progress-bar>\n          </div>\n\n          <div class=\"mb-2\">\n\n            <ion-label>New Password</ion-label>\n            <div class=\"text-input\">\n              <ion-input class=\"ml-3\"\n                         type=\"password\"\n                         #new_password\n                         name=\"new_password\"\n                         [(ngModel)]=\"model.newPassword\"\n                         autocomplete=\"off\"\n                         required=\"true\">\n                <ion-icon (click)=\"new_password.type=new_password.type=='password'?'text':'password'\"\n                          size=\"medium\"\n                          name=\"eye\"></ion-icon>\n\n              </ion-input>\n            </div>\n          </div>\n\n\n\n          <div class=\"mb-2\">\n            <div class=\"text-input mb-2\">\n              <ion-label>Confirm Password</ion-label>\n              <ion-input class=\"ml-3\"\n                         type=\"password\"\n                         #confirm_password\n                         name=\"confirm_password\"\n                         [(ngModel)]=\"model.confirmPassword\"\n                         autocomplete=\"off\"\n                         required=\"true\">\n                <ion-icon (click)=\"confirm_password.type=confirm_password.type=='password'?'text':'password'\"\n                          size=\"medium\"\n                          name=\"eye\"></ion-icon>\n              </ion-input>\n            </div>\n          </div>\n\n\n\n          <div class=\"mt-4\">\n            <ion-button type=\"submit\"\n                        color=\"light\"\n                        (submit)=\"submitNewPassword(newPasswordForm)\"> CONFIRM</ion-button>\n          </div>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gamesection/gamesection.component.html":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/gamesection/gamesection.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsGamesectionGamesectionComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<!--  -->\n\n\n<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <div class=\"row d-flex justify-content-center\">\n      <img class=\"rounded-top\" src=\"../../../assets/icon/Logoicon.png\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"content\">\n    <!-- content area -->\n    <div class=\" m-0\">\n      <div class=\"resp-container game-over-section m-0\">\n        <ion-card color=\"success\" class=\" d-flex justify-content-center m-0\">\n          <div id=\"clockdiv\">\n            <ion-row>\n              <ion-row>\n                <div>\n                  <span class=\"days\" id=\"day\">{{gameService.timeDays }} </span>\n                  <div class=\"smalltext\">DAY</div>\n                </div>\n              </ion-row>\n              <ion-row>\n                <div>\n                  <span class=\"hours\" id=\"hour\">{{gameService.timeHours}} </span>\n                  <div class=\"smalltext\">HR</div>\n                </div>\n              </ion-row>\n              <ion-row>\n                <div>\n                  <span class=\"minutes\" id=\"minute\">{{gameService.timeMinute}} </span>\n                  <div class=\"smalltext\">MIN</div>\n                </div>\n              </ion-row>\n              <ion-row>\n                <div>\n                  <span class=\"seconds\" id=\"second\">{{gameService.timeSeconds}} </span>\n                  <div class=\"smalltext\">SEC</div>\n                </div>\n              </ion-row>\n            </ion-row>\n          </div>\n        </ion-card>\n      </div>\n    </div>\n\n  \n    <ion-grid fixed>\n      <ion-row>\n        <ion-col size=\"1\"></ion-col>\n        <ion-col size=\"10\">\n          <div class=\" mt-3 game-live\" >\n            <ion-card  color=\"success\"  class=\"d-flex m-0 justify-content-center\">\n              <h1 class=\"text-white text-center animated infinite bounce slower\">LIVE!</h1>\n            </ion-card>\n      \n            <ion-list>\n              <ion-button size=\"large\" expand=\"block\" color=\"success\" [routerLink]=\"['/tabs/playsection']\" routerDirection=\"forward\">\n                <ion-icon class=\"mr-3 \" name=\"game-controller\"></ion-icon> CONTINUE TO GAME\n              </ion-button>\n      \n              <ion-button size=\"large\" expand=\"block\" color=\"success\" [routerLink]=\"['/tabs/leaderboard']\" routerDirection=\"backward\">\n                <ion-icon class=\"mr-3\" name=\"trophy\" routerDirection=\"forward\"></ion-icon> LEADERBOARD\n              </ion-button>\n      \n              <ion-button size=\"large\" expand=\"block\" color=\"success\" [routerLink]=\"['/tabs/myrecord']\" routerDirection=\"forward\">\n                <ion-icon class=\"mr-3\" name=\"list\"></ion-icon> MY RECORD(S)\n              </ion-button>\n            </ion-list>\n            <!-- <img class=\"pt-5\" id=\"fiftyk\" src=\"../../assets/animation/50k.png\" width=\"50\"  alt=\"\">\n              <button  (click)=\"doMagic()\">magic</button> -->\n      \n          </div>\n             \n        </ion-col>\n        <ion-col size=\"1\"></ion-col>\n      </ion-row>\n    </ion-grid>\n\n      <div class=\"game-tip\">  \n        <ion-row>\n            <ion-col  class=\"d-flex justify-content-center\" size=\"4\"> <ion-icon  size=\"large\" (click)=\"clickSlidePrevious()\" color=\"dark\" name=\"arrow-back\"></ion-icon></ion-col>\n          <ion-col  class=\"d-flex justify-content-center\" size=\"4\"><ion-button outline shape=\"round\" >CLUE TIPS</ion-button></ion-col>\n          <ion-col  class=\"d-flex justify-content-center\" size=\"4\"><ion-icon (click)=\"clickSlidetoNext()\" size=\"large\" color=\"dark\" name=\"arrow-forward\"></ion-icon></ion-col>\n        </ion-row>\n          <!-- <ion-card-header class=\"text-center  green darken-4 text-white\">\n            \n            \n          </ion-card-header> -->\n\n          <!-- <ion-row class=\"d-flex justify-content-center\">\n            <ion-button class=\"success\" size=\"small\" (click)=\"presentNotice()\"> click here for more information!\n            </ion-button>\n          </ion-row> -->\n          <ion-slides #mySlider>\n            <ion-slide *ngFor=\"let item of gameService?.gameTipArray\">\n              <div slot=\"fixed \" class=\"p-3\">\n                <ion-text class=\"  text-dark\">{{item.tip}}</ion-text>\n              </div>\n            </ion-slide>\n          </ion-slides>\n\n      </div>\n\n     \n\n\n    <!-- loader -->\n    <div *ngIf=\"loading\">\n      <div class=\"toast-container \">\n        <div class=\"lds-roller\">\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div>\n    <!-- end content area -->\n  </div>\n\n\n</ion-content>\n\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <div class=\"row d-flex justify-content-center\">\n      <img class=\"rounded-top\" src=\"../../../assets/icon/Logoicon.png\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inside-event-add-user/inside-event-add-user.component.html":
    /*!*****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inside-event-add-user/inside-event-add-user.component.html ***!
      \*****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsInsideEventAddUserInsideEventAddUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-button color=\"light\" (click)=\"closeModal()\">\n    <button >\n      <ion-icon color=\"danger\" name=\"close\"></ion-icon>\n    </button>\n  </ion-button>\n</ion-header>\n\n<ion-content>\n \n  <form #eventForm=\"ngForm\" name=\"eventform\" (submit)=\"eventForm.valid && submitUser()\">\n    <h5 class=\"ion-text-center\">CREATE NEW CONTESTANT</h5>\n\n    <div class=\"ion-text-center ion-padding\">\n      <img *ngIf=\"contesttModel.image_url\" [src]=\"contesttModel.image_url\"  alt=\"image\">\n    </div>\n<!--  -->\n      <ion-item color=\"light\">\n          <ion-label position=\"floating\">fullname </ion-label>\n          <ion-input  type=\"text\" #fullname=\"ngModel\" name=\"fullname\" \n          [(ngModel)]=\"contesttModel.fullname\" required=\"true\"></ion-input>\n    </ion-item>\n    \n      <ion-item color=\"light\">\n          <ion-label position=\"floating\">nickname </ion-label>\n          <ion-input  type=\"text\" #nickname=\"ngModel\" name=\"nickname\" \n          [(ngModel)]=\"contesttModel.nickname\" required=\"true\"></ion-input>\n    </ion-item>\n\n      <ion-item color=\"light\">\n          <ion-label position=\"floating\">user image url</ion-label>\n          <ion-input  type=\"text\" #image_url=\"ngModel\" name=\"image_url\" \n          [(ngModel)]=\"contesttModel.image_url\" required=\"true\"></ion-input>\n    </ion-item>\n  \n   <div class=\"ion-text-center\">\n    <ion-button (click)=\"submitUser()\" >create</ion-button>\n   </div>\n  \n\n  </form>\n  \n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inside-event/inside-event.component.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/inside-event/inside-event.component.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsInsideEventInsideEventComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <div class=\"row d-flex justify-content-center\">\n      <img class=\"rounded-top\"\n           src=\"assets/img/ISABI LOGO GREEN.png\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-fab *ngIf=\"userService.getRole() == 'ADMIN'\"\n           (click)=\"addUser()\"\n           vertical=\"top\"\n           horizontal=\"end\"\n           slot=\"fixed\">\n    <ion-fab-button color=\"success\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n  <ion-title mode=\"md\"\n             class=\"text-center text-uppercase ion-margin-top\">CONTESTANTS</ion-title>\n\n  <ion-row>\n    <ion-col size-xs=\"12\"\n             size-sm=\"12\"\n             size-md=\"6\"\n             offset-md=\"3\"\n             size-lg=\"12\"\n             offset-lg=\"3\">\n      <ion-searchbar type=\"text\"\n                     [(ngModel)]=\"searchModel.name\"\n                     name=\"search\"\n                     debounce=\"500\"\n                     (ionChange)=\"getItems()\"></ion-searchbar>\n    </ion-col>\n  </ion-row>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\"\n               size-lg=\"3\"\n               size-md=\"4\"\n               size-xs=\"6\"\n               size-sm=\"6\"\n               size-xl=\"3\"\n               *ngFor=\"let item of contestant\"\n               index\n               as\n               i>\n        <ion-card class=\"text-center font-weight-bold pb-2 ion-no-margin\">\n          <!-- <ion-icon name=\"swap\"></ion-icon> {{item.vote_count | number}}  -->\n          <ion-icon *ngIf=\"userService.getRole() == 'ADMIN'\"\n                    (click)=\"deleteContestant(item)\"\n                    name=\"trash\"></ion-icon>\n          <img [src]=\"item.image_url\">\n\n          <small> 00{{item.my_code}} </small>\n          <small> {{item.fullname}} </small>\n          <div> {{item.nickname}} </div>\n\n          <div>\n            <ion-label> <strong>{{item.vote_count | number}} vote(s) </strong></ion-label>\n            <ion-button (click)=\"voteNow(item.event_id,item._id,item.image_url,\n            item.nickname,item.my_code, item.fullname)\"\n                        size=\"small\"\n                        color=\"primary\">vote now</ion-button>\n          </div>\n\n          <div class=\"ion-text-center\">\n            <input readonly type=\"text\"  [value]=\"personalLink +'/'+'web-voting/'+ item._id \" #userinput size=\"35\">\n            <ion-button color=\"dark\"  size=\"small\" (click)=\"copyInputMessage(userinput)\" value=\"click to copy\" >Copy link</ion-button>\n          \n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- loader -->\n  <div *ngIf=\"loading\"\n       class=\" \">\n    <div class=\"toast-container \">\n      <div class=\"lds-roller\">\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n        <div></div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-live/not-live.component.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-live/not-live.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsNotLiveNotLiveComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: black;\"></ion-menu-button>\n    </ion-buttons>\n    <div class=\"row d-flex justify-content-center\">\n      <img class=\"rounded-top\"\n           src=\"../../../assets/icon/Logoicon.png\">\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"content\">\n    <!-- content area -->\n    <div class=\" m-0\">\n      <div class=\"resp-container game-over-section m-0\">\n        <ion-card class=\" d-flex justify-content-center card\">\n          <div id=\"clockdiv\">\n            <ion-row>\n              <ion-row>\n                <div>\n                  <span class=\"days\"\n                        id=\"day\">{{gameService.timeDays }} </span>\n                  <div class=\"smalltext\">DAY</div>\n                </div>\n              </ion-row>\n              <ion-row>\n                <div>\n                  <span class=\"hours\"\n                        id=\"hour\">{{gameService.timeHours}} </span>\n                  <div class=\"smalltext\">HR</div>\n                </div>\n              </ion-row>\n              <ion-row>\n                <div>\n                  <span class=\"minutes\"\n                        id=\"minute\">{{gameService.timeMinute}} </span>\n                  <div class=\"smalltext\">MIN</div>\n                </div>\n              </ion-row>\n              <ion-row>\n                <div>\n                  <span class=\"seconds\"\n                        id=\"second\">{{gameService.timeSeconds}} </span>\n                  <div class=\"smalltext\">SEC</div>\n                </div>\n              </ion-row>\n            </ion-row>\n          </div>\n        </ion-card>\n      </div>\n    </div>\n\n    <ion-card>\n      <iframe controls\n              width=\"100%\"\n              height=\"250\"\n              src=\"https://www.youtube.com/embed/1aY0xA6allA\"\n              frameborder=\"0\"></iframe>\n    </ion-card>\n    <!-- <ion-card  color=\"success\" *ngIf=\"gameNotLive\" class=\"m-0 d-flex justify-content-center\"> -->\n    <!-- <iframe width=\"500\" height=\"200\" #video_link class=\"m-0 \" src=\"https://www.youtube.com/embed/1aY0xA6allA\" frameborder=\"0\"></iframe> -->\n    <!-- src=\"https://www.youtube.com/embed/1aY0xA6allA\" -->\n    <!-- [src]='safeVideo' -->\n    <!-- </ion-card> -->\n\n\n\n    <div class=\"game-tip\">\n      <ion-row>\n        <ion-col class=\"d-flex justify-content-center\"\n                 size=\"4\">\n          <ion-icon size=\"large\"\n                    (click)=\"clickSlidePrevious()\"\n                    color=\"light\"\n                    name=\"arrow-back\"></ion-icon>\n        </ion-col>\n        <ion-col class=\"d-flex justify-content-center\"\n                 size=\"4\">\n          <ion-button outline\n                      shape=\"round\">CLUE TIPS</ion-button>\n        </ion-col>\n        <ion-col class=\"d-flex justify-content-center\"\n                 size=\"4\">\n          <ion-icon (click)=\"clickSlidetoNext()\"\n                    size=\"large\"\n                    color=\"light\"\n                    name=\"arrow-forward\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <!-- <ion-card-header class=\"text-center  green darken-4 text-white\">\n            \n            \n          </ion-card-header> -->\n\n      <!-- <ion-row class=\"d-flex justify-content-center\">\n            <ion-button class=\"success\" size=\"small\" (click)=\"presentNotice()\"> click here for more information!\n            </ion-button>\n          </ion-row> -->\n      <ion-slides #mySlider>\n        <ion-slide *ngFor=\"let item of gameService?.gameTipArray\">\n          <div slot=\"fixed \"\n               class=\"p-3\">\n            <ion-text class=\"  text-white\">{{item.tip}}</ion-text>\n          </div>\n        </ion-slide>\n      </ion-slides>\n\n    </div>\n\n\n\n\n    <!-- loader -->\n    <div *ngIf=\"loading\">\n      <div class=\"toast-container \">\n        <div class=\"lds-roller\">\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div>\n    <!-- end content area -->\n  </div>\n\n\n  <!-- <ion-fab horizontal=\"start\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button color=\"success\">\n      <ion-icon name=\"more\"></ion-icon>\n    </ion-fab-button>\n    <ion-fab-list side=\"top\">\n      <ion-button color=\"light\">\n        <a style=\"color:#00351a;\" [routerLink]=\"['/testimonials']\">\n          <ion-icon name=\"trophy\"></ion-icon> TESTIMONIALS\n        </a>\n      </ion-button>\n      <ion-button color=\"light\">\n        <a style=\"color:#00351a;\" [routerLink]=\"['/howtoplay']\">\n          <ion-icon name=\"logo-game-controller-a\"></ion-icon> HOW TO PLAY\n        </a>\n      </ion-button>\n      <ion-button color=\"light\">\n        <a style=\"color:#00351a;\" [routerLink]=\"['/contactus']\">\n          <ion-icon name=\"chatbubbles\"></ion-icon> CONTACT US\n        </a>\n      </ion-button>\n      <ion-button color=\"light\">\n        <a style=\"color:#00351a;\" href=\"https:/i-sabi.com/privacy-policy-2/\">\n          <ion-icon name=\"list\"></ion-icon> POLICY\n        </a>\n      </ion-button>\n      <ion-button color=\"light\">\n        <a style=\"color:#00351a;\" href=\"https:/i-sabi.com/faq/\">\n          <ion-icon name=\"help\"></ion-icon> FAQ\n        </a>\n      </ion-button>\n    </ion-fab-list>\n  </ion-fab> -->\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/tabs.component.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/tabs.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsTabsTabsComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n  <ion-tab-bar color=\"success\"\n               slot=\"bottom,top\">\n    <ion-tab-button tab=\"events\">\n      <ion-icon name=\"list\"></ion-icon>\n      <ion-label>Events</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"gamesection\">\n      <ion-icon name=\"log-in\"></ion-icon>\n      <ion-label>Game</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"leaderboard\">\n      <ion-icon name=\"trophy\"></ion-icon>\n      <ion-label>Leaderboard</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vote-now/vote-now.component.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vote-now/vote-now.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsVoteNowVoteNowComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-button color=\"light\" (click)=\"closeModal()\">\n    <button >\n      <ion-icon color=\"danger\" name=\"close\"></ion-icon>\n    </button>\n  </ion-button>\n</ion-header>\n<ion-content>\n\n  <ion-card color=\"success\" class=\"ion-padding ion-margin-top ion-text-center\">\n    <ion-card-subtitle> cost per vote is {{properties.cost | currency:'₦'}} </ion-card-subtitle>\n    <ion-card-subtitle> Balance {{accountService.accountBalance | currency:'₦'}} </ion-card-subtitle>\n\n    <ion-row>\n      <ion-col>\n    <ion-card-title>00{{properties.my_code}} </ion-card-title>\n      </ion-col>\n      <ion-col>\n    <ion-card-title>{{properties.nickname}} </ion-card-title>\n      </ion-col>\n    </ion-row>\n    <ion-card-content>\n      <div>\n        <img class=\"image\" width=\"250\" height=\"250\"  [src]=\"properties.image_url\">\n      </div>\n    <ion-chip class=\"ion-text-bold\" color=\"light\">{{properties.fullname}} </ion-chip>\n\n      <div>enter value</div>\n      <ion-row>\n        <ion-col>\n         <ion-button color=\"light\" size=\"small\" (click)=\"remove()\"> <ion-icon name=\"remove\"></ion-icon></ion-button>\n        </ion-col>\n        <ion-col>\n         <ion-item color=\"light\">\n          <ion-input #purchase type=\"number\" name=\"purchase\" [(ngModel)]=\"properties.purchase\"></ion-input>\n         </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-button color=\"light\" size=\"small\" (click)=\"add()\"><ion-icon name=\"add\"></ion-icon></ion-button>\n\n        </ion-col>\n      </ion-row>\n      <p class=\"font-weight-bold text-center\">\n         {{properties.purchase * properties.cost | currency:'₦'}} </p>\n      <ion-button [disabled]=\"properties.purchase < 1\" (click)=\"finalize()\" color=\"light\"[disabled]=\"\" >finalize</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n\n    <!-- loader -->\n    <div *ngIf=\"loading\" class=\" \">\n      <div class=\"toast-container \">\n        <div class=\"lds-roller\">\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/web-voting/web-voting.component.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/web-voting/web-voting.component.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsWebVotingWebVotingComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-content>\n\n\n\n  <ion-row>\n    <ion-col sizeSm=\"12\" sizeXs=\"12\" sizeLg=\"8\" offsetLg=\"2\" sizeMd=\"10\"  offsetMd=\"1\">\n\n\n      <ion-card *ngIf=\"properties?.fullname\" color=\"success\" class=\" mt-5 ion-padding ion-margin-top ion-text-center\">\n        <ion-card-subtitle> cost per vote is {{properties.cost | currency:'₦'}} </ion-card-subtitle>\n    \n        <ion-row>\n          <ion-col>\n        <ion-card-title>00{{properties.my_code}} </ion-card-title>\n          </ion-col>\n          <ion-col>\n        <ion-card-title>{{properties.nickname}} </ion-card-title>\n          </ion-col>\n        </ion-row>\n        <ion-card-content>\n          <div>\n            <img class=\"image\" width=\"250\" height=\"250\"  [src]=\"properties.image_url\">\n          </div>\n        <ion-chip class=\"ion-text-bold\" color=\"light\">{{properties.fullname}} </ion-chip>\n    \n          <div>enter value</div>\n          <ion-row>\n            <ion-col>\n             <ion-button color=\"light\" size=\"small\" (click)=\"remove()\"> <ion-icon name=\"remove\"></ion-icon></ion-button>\n            </ion-col>\n            <ion-col>\n             <ion-item color=\"light\">\n              <ion-input #purchase type=\"number\" name=\"purchase\" [(ngModel)]=\"properties.purchase\"></ion-input>\n             </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-button color=\"light\" size=\"small\" (click)=\"add()\"><ion-icon name=\"add\"></ion-icon></ion-button>\n    \n            </ion-col>\n          </ion-row>\n          <p class=\"font-weight-bold text-center\">\n             {{properties.purchase * properties.cost | currency:'₦'}} </p>\n          <ion-button [disabled]=\"properties.purchase < 1\" (click)=\"finalize()\" color=\"light\"[disabled]=\"\" >finalize</ion-button>\n        </ion-card-content>\n      </ion-card>\n\n      </ion-col>\n      </ion-row>\n\n\n\n\n  <div *ngIf=\"loading\" \n  class=\" \">\n<div class=\"toast-container \">\n <div class=\"lds-roller\">\n   <div></div>\n   <div></div>\n   <div></div>\n   <div></div>\n   <div></div>\n   <div></div>\n   <div></div>\n   <div></div>\n </div>\n</div>\n</div>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/privacy-policy/privacy-policy.component.html":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/privacy-policy/privacy-policy.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPrivacyPolicyPrivacyPolicyComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-xs=\"10\"\n               offset-xs=\"1\"\n               size-sm=\"8\"\n               offset-sm=\"2\"\n               size-md=\"6\"\n               offset-md=\"3\"\n               size-lg=\"6\"\n               offset-lg=\"3\">\n        <ion-title class=\"text-center ion-margin-top ion-margin-bottom\"\n                   mode=\"md\">Privacy Policy, Terms and Conditions</ion-title>\n        <section>\n          <h3>Terms and Conditions</h3>\n          <p class=\"ion-text-justify\">These terms and conditions shall be valid for all services offered by I-sabi (in its entirety covering all of its platforms; Mobile app, Desktop app, Web app and Website).\n            By using I-sabi services, you are bound by the following terms and conditions;\n            The general terms and conditions\n            The trivia terms and conditions\n            The privacy policy\n            Deposit, Credits and Refunds terms\n            Withdrawal terms\n            I-sabi services terms</p>\n        </section>\n\n        <section>\n          <h3>Definition of terms</h3>\n          <p class=\"ion-text-justify\">Users: A person, account holder who utilizes I-sabi services irrespective of the platform. Users also referred to as “you”, “them”.\n            Clients: A subset of users who utilize I-sabi services as a business owner. Services referring to e-voting, e-ticketing, event management with an exclusion of I-sabi Trivia.\n            Credit Units: A deposit made to users’ I-sabi account (clients excluded) for utilizing I-sabi services.\n            We: Refers to I-sabi as a product of Ayaweisoft.</p>\n        </section>\n\n        <section>\n          <h3>Amendment of terms and conditions</h3>\n          <p class=\"ion-text-justify\">UI-sabi and its parent company reserves the irrevocable, sole right to review and amend its terms and conditions after periodically as the case may be.</p>\n        </section>\n\n        <section>\n          <h3>General Terms and conditions</h3>\n          <p class=\"ion-text-justify\">By accessing the I-sabi services and agreeing to the terms and conditions, you accept that you are fully aware of the contents there in as defined and are bound by it.\n            Users, accounts are not transferrable as complications arising from misuse of accounts shall be at the risk of the user.\n            I-sabi shall not be held liable for any malpractice carried out by users. Malpractice defined as but not limited to; Wrong deposits, Wrong user data as supplied by users, Misapplication of allotted credit units\n            I-sabi shall not be liable for any loss emanating from a user-controlled fault or from faults beyond the control of I-sabi</p>\n        </section>\n\n        <section>\n          <h3>I-sabi Trivia Terms</h3>\n          <p class=\"ion-text-justify\">The I-sabi Saturday live show, referred to in these terms as Trivia shall hold only on Saturdays within the hours of 6:00am to 6:00pm\n            Monetary prizes as advertised can only be won during the validity period of the Trivia\n            The trivia is only available to users who have a predetermined number of credit units which are only valid per game.\n            I-sabi shall not be held liable for losses arising from network fluctuations/failure.\n            The winners (who shall be ten in number, pending upward review) shall be the top ten on the leaderboard at the end of the validity period of the trivia, who, however have to answer all given questions in a singular game, correctly within\n            a\n            specified\n            period of time.\n            Users are entitled to multiple tries (as their credit unit would permit) but only their best time shall appear on the leaderboard.\n            The user with the best time shall have a cash reward of ten thousand naira while the nine users who follow shall have five thousand naira each subject to review with time.\n            Winners can be called at any time for the purpose of testimonial to the authenticity of I-sabi.\n            I-sabi reserves the right to set questions from any field of study which it deems fit and also randomize such questions as it deems necessary and reserves the right of citation.</p>\n        </section>\n\n        <section>\n          <h3>Deposits, Credits and Refunds</h3>\n          <p class=\"ion-text-justify\">Users, deposit shall be made only to channels specified by I-sabi, I-sabi shall not be liable for any wrong deposits.\n            Users will only be credited when deposits have been confirmed. Credit units are only valid on the I-sabi platform and cannot be remonetized.\n            Users are not entitled to refunds.\n            Clients are entitled to refunds; however, this is only valid for any period of time earlier than three weeks to the agreed date of execution of their project.\n            Clients may be provided with alternative channels of deposit as prescribed by I-sabi\n            Any failed transaction shall be duly reported to users’ financial institution for reversal\n            The minimum deposit by users shall be five hundred naira.</p>\n        </section>\n\n        <section>\n          <h3>Withdrawals</h3>\n          <p class=\"ion-text-justify\">Winners of the Trivia shall be credited via bank accounts which they provide\n            Any loss of money arising from users’ end shall be at the expense of such user\n            Any failed transaction resulting from I-sabi and its financial institution shall be handled by I-sabi and upon rectification, the user credited.\n            Clients who own monetary accounts with I-sabi are entitled to withdrawals, however, clients and users shall bear the cost associated with such withdrawals and deposits. Client and user cannot withdraw bonuses or promo unit alloyed by\n            i-sabi.\n            They are\n            required to only use the units to gain access to services on the platform.</p>\n        </section>\n\n        <section>\n          <h3>I-sabi Services</h3>\n          <p class=\"ion-text-justify\">Through its platforms, I-sabi shall provide (but is not limited to) the following services; E-voting, E-ticketing, Trivia.\n            I-sabi shall service its clients with data which they provide and shall not be held responsible for any misleading information.\n            Clients shall have monetary accounts with I-sabi to be able to use its services\n            Users shall access I-sabi services with credit units, at a rate of one naira per credit unit, I-sabi shall not be responsible for any misapplication of credit units.\n            Clients shall have a duly signed contractile agreement with I-sabi to access its services\n            The terms of the services required by a client shall be made available in the form of a typewritten contract which must be duly signed by all parties involved without which any service promised shall be void.\n            I-sabi is only obligated to fulfilling agreements contained in such signed contracts.\n            i-sabi shall not be represented by any third party except with an express permission presented in the form of a duly signed and stamped document.\n            Every contract between I-sabi and its clients are taken with an agreement of non-disclosure\n            I-sabi reserves the right to have as many clients as it deems necessary and cannot face any litigation for supplying multiple clients with similar services.\n            All complaints shall be directed to I-sabi for rectification as any complaint directed to a third party without the consent of I-sabi shall be seen as an act of defamation and shall be liable for litigation.\n            The services I-sabi offers shall be reviewed by the parent company as necessary.</p>\n        </section>\n\n        <section>\n          <h3>Modifications, Updates to our platform</h3>\n          <p class=\"ion-text-justify\">I-sabi may from time to time provide enhancements or improvements to features, functionality of the platforms which may include patches, bug\\fixes, updates, updates and other modifications.\n            Updates may modify or delete certain featured as necessary I-SABI reserves the right to modify, update, discontinue or suspend, temporarily or permanently any of its platforms or any of its services without liability to you.</p>\n        </section>\n\n        <section>\n          <h3>Copyright infringement Notice</h3>\n          <p class=\"ion-text-justify\">If you are a copyright owner or such owner’s urgent and believe any material on our platforms or service we offer constitutes an infringement on your copyright, please contact us setting forth the following\n            information.\n            Physical or electronic signature of the copyright owner or a person authorized to act on his behalf.\n            Identification of the material that is claimed to be infringing.</p>\n        </section>\n\n        <section>\n          <h3>Your contact information</h3>\n          <p class=\"ion-text-justify\">Statement by you that you have a good faith belief that any of the materials is not authorized by the copyright owner.\n            The statement that the information in the notification is accurate and under penalty of perjury, you are authorized to act on behalf of the owner.\n\n            Intellectual Property\n            I-sabi platforms and its features, contents, functionality and rendered services are owned by the Ayaweisoft company limited, and is protected by Nigeria and international copyright, trademark, patent, trade secret and other intellectual\n            property or\n            proprietary right laws. These materials may not be copied, modified, reproduced, downloaded or distributed in anyway; in whole or in part; without the express prior written permission of i-sabi, unless and except as is expressly product\n            in\n            these T&C.\n            Any unauthorized used of the material is prohibited.</p>\n        </section>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/splash/splash.component.html":
    /*!************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/splash/splash.component.html ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSplashSplashComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n  <ion-slides #mySlider\n              pager=\"true\"\n              [options]=\"slideOpts\">\n    <ion-slide class=\"slide-one\">\n      <img src=\"assets/img/Splash.png\"\n           alt=\"\">\n    </ion-slide>\n\n    <ion-slide class=\"slide-one\">\n      <img src=\"assets/img/Splash.png\"\n           alt=\"\">\n    </ion-slide>\n\n    <ion-slide class=\"slide-two\">\n      <img src=\"assets/img/isabi video.png\"\n           alt=\"\">\n      <div>\n        <ion-title class=\"ion-margin-bottom ion-margin-top\"\n                   color=\"primary\"\n                   mode=\"md\">Digital TV</ion-title>\n        <ion-text class=\"pl-2 pr-2\">You can stream live Events with our Digital TV <br>and also see clue tips for our trivia games.</ion-text>\n      </div>\n    </ion-slide>\n\n    <ion-slide class=\"slide-three\">\n      <img src=\"assets/img/isabi social.png\"\n           alt=\"\">\n      <div>\n        <ion-title class=\"ion-margin-bottom ion-margin-top\"\n                   color=\"primary\"\n                   mode=\"md\">Social</ion-title>\n        <ion-text class=\"pl-2 pr-2\">Get connected with millions of i-sabi users all<br>over the world with our Social media feature.</ion-text>\n      </div>\n    </ion-slide>\n\n    <ion-slide class=\"slide-four\">\n      <img src=\"assets/img/isabi game.png\"\n           alt=\"\">\n      <div>\n        <ion-title class=\"ion-margin-bottom ion-margin-top\"\n                   color=\"primary\"\n                   mode=\"md\">Game</ion-title>\n        <ion-text class=\"pl-2 pr-2\">Take on the i-sabi trivia quiz games and stand<br>to win awesome cash prizes.</ion-text>\n      </div>\n    </ion-slide>\n\n    <ion-slide class=\"slide-five\">\n      <img src=\"assets/img/ISABI APP ONBOARDING4.png\"\n           alt=\"\">\n      <div>\n        <ion-title class=\"ion-margin-bottom ion-margin-top\"\n                   color=\"primary\"\n                   mode=\"md\">Events</ion-title>\n        <ion-text class=\"pl-2 pr-2\">Get to know about your favorite Events<br>and also purchase your tickets.</ion-text>\n        <div>\n          <ion-button class=\"mt-5\">Get Started</ion-button>\n        </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  <ion-buttons>\n    <ion-button (click)=\"clickSlidePrevious()\">Prev</ion-button>\n    <ion-button (click)=\"clickSlidetoNext()\">Next</ion-button>\n  </ion-buttons>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/adminnavigation/adminnavigation.component.scss":
    /*!****************************************************************!*\
      !*** ./src/app/adminnavigation/adminnavigation.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppAdminnavigationAdminnavigationComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlubmF2aWdhdGlvbi9hZG1pbm5hdmlnYXRpb24uY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/adminnavigation/adminnavigation.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/adminnavigation/adminnavigation.component.ts ***!
      \**************************************************************/

    /*! exports provided: AdminnavigationComponent */

    /***/
    function srcAppAdminnavigationAdminnavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminnavigationComponent", function () {
        return AdminnavigationComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var AdminnavigationComponent = /*#__PURE__*/function () {
        function AdminnavigationComponent() {
          _classCallCheck(this, AdminnavigationComponent);
        }

        _createClass(AdminnavigationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminnavigationComponent;
      }();

      AdminnavigationComponent.ctorParameters = function () {
        return [];
      };

      AdminnavigationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adminnavigation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./adminnavigation.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/adminnavigation/adminnavigation.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./adminnavigation.component.scss */
        "./src/app/adminnavigation/adminnavigation.component.scss"))["default"]]
      })], AdminnavigationComponent);
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./privacy-policy/privacy-policy.component */
      "./src/app/privacy-policy/privacy-policy.component.ts");
      /* harmony import */


      var _auth_game_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth/game.guard */
      "./src/app/auth/game.guard.ts");
      /* harmony import */


      var _components_not_live_not_live_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/not-live/not-live.component */
      "./src/app/components/not-live/not-live.component.ts");
      /* harmony import */


      var _components_gamesection_gamesection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/gamesection/gamesection.component */
      "./src/app/components/gamesection/gamesection.component.ts");
      /* harmony import */


      var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/tabs/tabs.component */
      "./src/app/components/tabs/tabs.component.ts");
      /* harmony import */


      var _components_inside_event_inside_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/inside-event/inside-event.component */
      "./src/app/components/inside-event/inside-event.component.ts");
      /* harmony import */


      var _components_admin_event_admin_event_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/admin-event/admin-event.component */
      "./src/app/components/admin-event/admin-event.component.ts");
      /* harmony import */


      var _merchant_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./merchant.guard */
      "./src/app/merchant.guard.ts");
      /* harmony import */


      var _adminnavigation_adminnavigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./adminnavigation/adminnavigation.component */
      "./src/app/adminnavigation/adminnavigation.component.ts");
      /* harmony import */


      var _components_forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/forgetpassword/forgetpassword.component */
      "./src/app/components/forgetpassword/forgetpassword.component.ts");
      /* harmony import */


      var _auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./auth/admin.guard */
      "./src/app/auth/admin.guard.ts");
      /* harmony import */


      var _components_account_account_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/account/account.component */
      "./src/app/components/account/account.component.ts");
      /* harmony import */


      var _auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./auth/authguard.guard */
      "./src/app/auth/authguard.guard.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _components_web_voting_web_voting_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/web-voting/web-voting.component */
      "./src/app/components/web-voting/web-voting.component.ts");

      var routes = [{
        path: '',
        redirectTo: 'tabs/gamesection',
        pathMatch: 'full'
      }, {
        path: 'tabs',
        component: _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_5__["TabsComponent"],
        children: [{
          path: 'gamesection',
          component: _components_gamesection_gamesection_component__WEBPACK_IMPORTED_MODULE_4__["GamesectionComponent"],
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"], _auth_game_guard__WEBPACK_IMPORTED_MODULE_2__["GameGuard"]]
        }, {
          path: 'game-not-live',
          component: _components_not_live_not_live_component__WEBPACK_IMPORTED_MODULE_3__["NotLiveComponent"],
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"]]
        }, {
          path: 'not-live',
          component: _components_not_live_not_live_component__WEBPACK_IMPORTED_MODULE_3__["NotLiveComponent"],
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"]]
        }, {
          path: 'events',
          loadChildren: './events/events.module#EventsPageModule',
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"]]
        }, {
          path: 'admin-event',
          component: _components_admin_event_admin_event_component__WEBPACK_IMPORTED_MODULE_7__["AdminEventComponent"],
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"], _auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]]
        }, {
          path: 'leaderboard',
          loadChildren: './leaderboard/leaderboard.module#LeaderboardPageModule',
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"]]
        }, {
          path: 'account',
          component: _components_account_account_component__WEBPACK_IMPORTED_MODULE_12__["AccountComponent"],
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"]]
        }, {
          path: 'playdemo',
          loadChildren: './playdemo/playdemo.module#PlaydemoPageModule',
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"]]
        }, {
          path: 'profile',
          loadChildren: './profile/profile.module#ProfilePageModule',
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"]]
        }, {
          path: 'myrecord',
          loadChildren: './myrecord/myrecord.module#MyrecordPageModule',
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"]]
        }, {
          path: 'playsection',
          loadChildren: './playsection/playsection.module#PlaysectionPageModule',
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"], _auth_game_guard__WEBPACK_IMPORTED_MODULE_2__["GameGuard"]]
        }, {
          path: 'transaction',
          loadChildren: './transaction/transaction.module#TransactionPageModule',
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"]]
        }, //  admin routes
        {
          path: 'admin-upload',
          loadChildren: './admin-upload/admin-upload.module#AdminUploadPageModule',
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"], _auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]]
        }, {
          path: 'manage-users',
          loadChildren: './manage-users/manage-users.module#ManageUsersPageModule',
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"], _auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]]
        }, {
          path: 'manage-questions',
          loadChildren: './manage-questions/manage-questions.module#ManageQuestionsPageModule',
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"], _auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]]
        }, {
          path: 'payouts',
          loadChildren: './payouts/payouts.module#PayoutsPageModule',
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"], _auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]]
        }, {
          path: 'admin-account',
          loadChildren: './admin-account/admin-account.module#AdminAccountPageModule',
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"], _auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]]
        }, {
          path: 'adminquery',
          loadChildren: './adminquery/adminquery.module#AdminqueryPageModule',
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"], _auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]]
        }, {
          path: 'admintransfer',
          loadChildren: './admintransfer/admintransfer.module#AdmintransferPageModule',
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"], _auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]]
        }, {
          path: 'admin-play',
          loadChildren: './admin-play/admin-play.module#AdminPlayPageModule',
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"], _auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]]
        }, {
          path: 'merchant',
          loadChildren: './merchant/merchant.module#MerchantPageModule',
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"], _merchant_guard__WEBPACK_IMPORTED_MODULE_8__["MerchantGuard"]]
        }, {
          path: 'cashout-request',
          loadChildren: './cashout-request/cashout-request.module#CashoutRequestPageModule',
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"], _auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]]
        }, {
          path: 'inside-event/:id',
          component: _components_inside_event_inside_event_component__WEBPACK_IMPORTED_MODULE_6__["InsideEventComponent"],
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"]]
        }, {
          path: 'admin-leaderbord',
          loadChildren: './admin-leaderbord/admin-leaderbord.module#AdminLeaderbordPageModule',
          canActivate: [_auth_authguard_guard__WEBPACK_IMPORTED_MODULE_13__["AuthguardGuard"], _auth_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]]
        }]
      }, {
        path: 'howtoplay',
        loadChildren: './howtoplay/howtoplay.module#HowtoplayPageModule'
      }, {
        path: 'admin-navigation',
        component: _adminnavigation_adminnavigation_component__WEBPACK_IMPORTED_MODULE_9__["AdminnavigationComponent"]
      }, {
        path: 'testimonials',
        loadChildren: './testimonials/testimonials.module#TestimonialsPageModule'
      }, {
        path: 'privacypolicy',
        component: _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_1__["PrivacyPolicyComponent"]
      }, {
        path: 'contactus',
        loadChildren: './contactus/contactus.module#ContactusPageModule'
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | register-register-module */
          "register-register-module").then(__webpack_require__.bind(null,
          /*! ./register/register.module */
          "./src/app/register/register.module.ts")).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | login-login-module */
          "login-login-module").then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "./src/app/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'forgetpassword',
        component: _components_forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_10__["ForgetpasswordComponent"]
      }, {
        path: 'web-voting/:id',
        component: _components_web_voting_web_voting_component__WEBPACK_IMPORTED_MODULE_16__["WebVotingComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_14__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_15__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".menu {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n}\n.menu ion-text,\n.menu span {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRDtBQUNDOztFQUVDLGVBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IHtcblx0bWFyZ2luLXRvcDogMjBweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuXHRpb24tdGV4dCxcblx0c3BhbiB7XG5cdFx0Zm9udC1zaXplOiAxNXB4O1xuXHR9XG59XG5cbi8vIGlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbi8vICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4vLyAgIC0tcGFkZGluZy1lbmQ6IDhweDtcbi8vICAgLS1wYWRkaW5nLXRvcDogMjBweDtcbi8vICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbi8vIH1cblxuLy8gaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuLy8gICBwYWRkaW5nOiAyMHB4IDA7XG4vLyB9XG5cbi8vIGlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbi8vICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbi8vIH1cblxuLy8gaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuLy8gaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuLy8gICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4vLyB9XG5cbi8vIGlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuLy8gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbi8vIH1cblxuLy8gaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuLy8gICBmb250LXNpemU6IDIycHg7XG4vLyAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbi8vICAgbWluLWhlaWdodDogMjBweDtcbi8vIH1cblxuLy8gaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbi8vICAgZm9udC1zaXplOiAxNnB4O1xuXG4vLyAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbi8vICAgY29sb3I6ICM3NTc1NzU7XG5cbi8vICAgbWluLWhlaWdodDogMjZweDtcbi8vIH1cblxuLy8gaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuLy8gICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4vLyAgIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcbi8vIH1cblxuLy8gaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuLy8gICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG4vLyB9XG5cbi8vIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbi8vICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbi8vIH1cblxuLy8gaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuLy8gICBjb2xvcjogIzYxNmU3ZTtcbi8vIH1cblxuLy8gaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbi8vICAgZm9udC13ZWlnaHQ6IDUwMDtcbi8vIH1cblxuLy8gaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbi8vICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbi8vIH1cblxuLy8gaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbi8vICAgcGFkZGluZzogMjBweCAwIDAgMDtcbi8vIH1cblxuLy8gaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbi8vICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4vLyAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4vLyB9XG5cbi8vIGlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4vLyAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbi8vICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbi8vICAgLS1taW4taGVpZ2h0OiA1MHB4O1xuLy8gfVxuXG4vLyBpb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuLy8gICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuLy8gfVxuXG4vLyBpb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuLy8gICBmb250LXNpemU6IDI0cHg7XG4vLyAgIGNvbG9yOiAjNzM4NDlhO1xuLy8gfVxuXG4vLyBpb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbi8vICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuLy8gfVxuXG4vLyBpb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuLy8gaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbi8vICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuLy8gfVxuXG4vLyBpb24tbWVudS5pb3MgaW9uLW5vdGUge1xuLy8gICBtYXJnaW4tYm90dG9tOiA4cHg7XG4vLyB9XG5cbi8vIGlvbi1ub3RlIHtcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBmb250LXNpemU6IDE2cHg7XG5cbi8vICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuLy8gfVxuXG4vLyBpb24taXRlbS5zZWxlY3RlZCB7XG4vLyAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbi8vIH1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _shared_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./shared/account.service */
      "./src/app/shared/account.service.ts");
      /* harmony import */


      var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/user.service */
      "./src/app/shared/user.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/ngx/index.js");
      /* harmony import */


      var _splash_splash_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./splash/splash.component */
      "./src/app/splash/splash.component.ts");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/ngx/index.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, statusBar, alertCtrl, splashScreen, ModalController, userService, accountService) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.statusBar = statusBar;
          this.alertCtrl = alertCtrl;
          this.splashScreen = splashScreen;
          this.ModalController = ModalController;
          this.userService = userService;
          this.accountService = accountService;
          this.showSplash = true;
          this.authenticate = false;
          this.appPages = [{
            title: 'EVENTS',
            url: '/tabs/events',
            icon: 'star-outline'
          }, {
            title: 'PLAY GAME',
            url: '/tabs/gamesection',
            icon: 'game-controller'
          }, {
            title: 'ACCOUNT',
            url: '/tabs/account',
            icon: 'wallet'
          }, {
            title: 'LEADERBOARD',
            url: '/tabs/leaderboard',
            icon: 'trophy'
          }, {
            title: 'PLAY DEMO',
            url: '/tabs/playdemo',
            icon: 'game-controller'
          }, {
            title: 'MY RECORD',
            url: '/tabs/myrecord',
            icon: 'list'
          }, {
            title: 'TRANSACTION',
            url: '/tabs/transaction',
            icon: 'card'
          }];
          this.dark = false;
          this.labels = [{
            title: 'UPLOAD QUESTIONS',
            url: '/tabs/admin-upload',
            icon: 'add'
          }, {
            title: 'CASHOUT REQUESTS',
            url: '/tabs/cashout-request',
            icon: 'cash'
          }, {
            title: 'MANAGE USERS',
            url: '/tabs/manage-users',
            icon: 'person'
          }, {
            title: 'MANAGE QUESTIONS',
            url: '/tabs/manage-questions',
            icon: 'help'
          }, {
            title: 'PAYOUT RECORD',
            url: '/tabs/payouts',
            icon: 'cash'
          }, {
            title: 'ADMIN ACCOUNT',
            url: '/tabs/admin-account',
            icon: 'wallet'
          }, {
            title: 'ADMIN SEARCH',
            url: '/tabs/adminquery',
            icon: 'search'
          }, {
            title: 'ADMIN LEADERBOARD',
            url: '/tabs/admin-leaderbord',
            icon: 'trophy'
          }, {
            title: 'ADMIN PLAY',
            url: '/tabs/admin-play',
            icon: 'play'
          }];
          this.presentSplash();
          this.initializeApp();
        } // rateYourApp(){
        //   this.appRate.preferences.storeAppURL = {
        //     // ios: '<app_id>',
        //     // android: 'market://details?id=<ayawiesoft.swagasoft>',
        //     windows: 'ms-windows-store://review/?ProductId=<store_id>'
        //   }
        // }


        _createClass(AppComponent, [{
          key: "reloadBalance",
          value: function reloadBalance() {
            var _this = this;

            this.accountService.loadMyBalance();
            this.bal.nativeElement.classList.add('rubberBand');
            setTimeout(function () {
              _this.bal.nativeElement.classList.remove('rubberBand');
            }, 2000);
          }
        }, {
          key: "initializeApp",
          value: function initializeApp() {
            var _this2 = this;

            this.platform.ready().then(function () {
              // Okay, so the platform is ready and our plugins are available.
              // Here you can do any higher level native things you might need.
              // this.localNotifications.on('trigger').subscribe( res => {
              //   console.log('alert Trigger 2', res );
              //   let msg = res.data ? res.data.mydata : '';
              //   this.showAlert(res.title, res.text);
              // });
              _this2.statusBar.show(); // this.splashScreen.hide();
              // timer(5000).subscribe(()=> this.showSplash = false);

            });
          }
        }, {
          key: "presentSplash",
          value: function presentSplash() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.ModalController.create({
                        component: _splash_splash_component__WEBPACK_IMPORTED_MODULE_6__["SplashComponent"],
                        cssClass: 'modal-fullscreen'
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

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
          key: "showAlert",
          value: function showAlert(title, msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        header: title,
                        message: msg
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
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_7__["StatusBar"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _shared_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]
        }];
      };

      AppComponent.propDecorators = {
        bal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['bal', {
            "static": false
          }]
        }],
        nav: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['nav', {
            "static": false
          }]
        }]
      };
      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./privacy-policy/privacy-policy.component */
      "./src/app/privacy-policy/privacy-policy.component.ts");
      /* harmony import */


      var _shared_demo_questions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/demo-questions.service */
      "./src/app/shared/demo-questions.service.ts");
      /* harmony import */


      var _components_fail_game_fail_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/fail-game/fail-game.component */
      "./src/app/components/fail-game/fail-game.component.ts");
      /* harmony import */


      var _components_congrats_congrats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/congrats/congrats.component */
      "./src/app/components/congrats/congrats.component.ts");
      /* harmony import */


      var _auth_game_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth/game.guard */
      "./src/app/auth/game.guard.ts");
      /* harmony import */


      var _components_not_live_not_live_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/not-live/not-live.component */
      "./src/app/components/not-live/not-live.component.ts");
      /* harmony import */


      var _components_gamesection_gamesection_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/gamesection/gamesection.component */
      "./src/app/components/gamesection/gamesection.component.ts");
      /* harmony import */


      var _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/tabs/tabs.component */
      "./src/app/components/tabs/tabs.component.ts");
      /* harmony import */


      var _components_vote_now_vote_now_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/vote-now/vote-now.component */
      "./src/app/components/vote-now/vote-now.component.ts");
      /* harmony import */


      var _components_inside_event_add_user_inside_event_add_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/inside-event-add-user/inside-event-add-user.component */
      "./src/app/components/inside-event-add-user/inside-event-add-user.component.ts");
      /* harmony import */


      var _components_inside_event_inside_event_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/inside-event/inside-event.component */
      "./src/app/components/inside-event/inside-event.component.ts");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/header/header.component */
      "./src/app/components/header/header.component.ts");
      /* harmony import */


      var _components_admin_event_admin_event_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/admin-event/admin-event.component */
      "./src/app/components/admin-event/admin-event.component.ts");
      /* harmony import */


      var _shared_event_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./shared/event.service */
      "./src/app/shared/event.service.ts");
      /* harmony import */


      var _merchant_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./merchant.guard */
      "./src/app/merchant.guard.ts");
      /* harmony import */


      var _adminnavigation_adminnavigation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./adminnavigation/adminnavigation.component */
      "./src/app/adminnavigation/adminnavigation.component.ts");
      /* harmony import */


      var _components_forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/forgetpassword/forgetpassword.component */
      "./src/app/components/forgetpassword/forgetpassword.component.ts");
      /* harmony import */


      var _auth_admin_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./auth/admin.guard */
      "./src/app/auth/admin.guard.ts");
      /* harmony import */


      var _components_account_account_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/account/account.component */
      "./src/app/components/account/account.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _splash_splash_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./splash/splash.component */
      "./src/app/splash/splash.component.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _shared_user_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./shared/user.service */
      "./src/app/shared/user.service.ts");
      /* harmony import */


      var _auth_authguard_guard__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./auth/authguard.guard */
      "./src/app/auth/authguard.guard.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./auth/auth-interceptor */
      "./src/app/auth/auth-interceptor.ts");
      /* harmony import */


      var _shared_account_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./shared/account.service */
      "./src/app/shared/account.service.ts");
      /* harmony import */


      var _shared_game_service_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./shared/game-service.service */
      "./src/app/shared/game-service.service.ts");
      /* harmony import */


      var _game_pipe__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./game.pipe */
      "./src/app/game.pipe.ts");
      /* harmony import */


      var _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./pipes/safe-url.pipe */
      "./src/app/pipes/safe-url.pipe.ts");
      /* harmony import */


      var _services_logic_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./services/logic.service */
      "./src/app/services/logic.service.ts");
      /* harmony import */


      var _services_behavour_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./services/behavour.service */
      "./src/app/services/behavour.service.ts");
      /* harmony import */


      var flutterwave_angular_v3__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! flutterwave-angular-v3 */
      "./node_modules/flutterwave-angular-v3/__ivy_ngcc__/flutterwave-angular-v3.js");
      /* harmony import */


      var _components_web_voting_web_voting_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! ./components/web-voting/web-voting.component */
      "./src/app/components/web-voting/web-voting.component.ts"); // import { Facebook , FacebookOriginal} from '@ionic-native/facebook';


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_20__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_27__["AppComponent"], _game_pipe__WEBPACK_IMPORTED_MODULE_36__["GamePipe"], _components_account_account_component__WEBPACK_IMPORTED_MODULE_19__["AccountComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"], _adminnavigation_adminnavigation_component__WEBPACK_IMPORTED_MODULE_16__["AdminnavigationComponent"], _components_admin_event_admin_event_component__WEBPACK_IMPORTED_MODULE_13__["AdminEventComponent"], _components_forgetpassword_forgetpassword_component__WEBPACK_IMPORTED_MODULE_17__["ForgetpasswordComponent"], _components_inside_event_inside_event_component__WEBPACK_IMPORTED_MODULE_11__["InsideEventComponent"], _components_inside_event_add_user_inside_event_add_user_component__WEBPACK_IMPORTED_MODULE_10__["InsideEventAddUserComponent"], _components_vote_now_vote_now_component__WEBPACK_IMPORTED_MODULE_9__["VoteNowComponent"], _components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__["TabsComponent"], _components_gamesection_gamesection_component__WEBPACK_IMPORTED_MODULE_7__["GamesectionComponent"], _components_not_live_not_live_component__WEBPACK_IMPORTED_MODULE_6__["NotLiveComponent"], _components_web_voting_web_voting_component__WEBPACK_IMPORTED_MODULE_41__["WebVotingComponent"], _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_37__["SafeResourceUrlPipe"], _components_congrats_congrats_component__WEBPACK_IMPORTED_MODULE_4__["CongratsComponent"], _components_fail_game_fail_game_component__WEBPACK_IMPORTED_MODULE_3__["FailGameComponent"], _privacy_policy_privacy_policy_component__WEBPACK_IMPORTED_MODULE_1__["PrivacyPolicyComponent"], _splash_splash_component__WEBPACK_IMPORTED_MODULE_23__["SplashComponent"]],
        entryComponents: [_components_inside_event_add_user_inside_event_add_user_component__WEBPACK_IMPORTED_MODULE_10__["InsideEventAddUserComponent"], _components_vote_now_vote_now_component__WEBPACK_IMPORTED_MODULE_9__["VoteNowComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_31__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_32__["HttpClientModule"], flutterwave_angular_v3__WEBPACK_IMPORTED_MODULE_40__["FlutterwaveModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_24__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_28__["AppRoutingModule"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_20__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_20__["CUSTOM_ELEMENTS_SCHEMA"]],
        providers: [{
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_32__["HTTP_INTERCEPTORS"],
          useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_33__["AuthInterceptor"],
          multi: true
        }, _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_26__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_25__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_26__["StatusBar"], _shared_event_service__WEBPACK_IMPORTED_MODULE_14__["EventService"], _shared_demo_questions_service__WEBPACK_IMPORTED_MODULE_2__["DemoQuestionsService"], // AppRate,
        _shared_user_service__WEBPACK_IMPORTED_MODULE_29__["UserService"], _services_logic_service__WEBPACK_IMPORTED_MODULE_38__["LogicService"], _services_behavour_service__WEBPACK_IMPORTED_MODULE_39__["BehavourService"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_25__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_24__["IonicRouteStrategy"]
        }, _shared_user_service__WEBPACK_IMPORTED_MODULE_29__["UserService"], _shared_account_service__WEBPACK_IMPORTED_MODULE_34__["AccountService"], _auth_admin_guard__WEBPACK_IMPORTED_MODULE_18__["AdminGuard"], _auth_authguard_guard__WEBPACK_IMPORTED_MODULE_30__["AuthguardGuard"], _shared_game_service_service__WEBPACK_IMPORTED_MODULE_35__["GameServiceService"], _merchant_guard__WEBPACK_IMPORTED_MODULE_15__["MerchantGuard"], _auth_game_guard__WEBPACK_IMPORTED_MODULE_5__["GameGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_27__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/auth/admin.guard.ts":
    /*!*************************************!*\
      !*** ./src/app/auth/admin.guard.ts ***!
      \*************************************/

    /*! exports provided: AdminGuard */

    /***/
    function srcAppAuthAdminGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminGuard", function () {
        return AdminGuard;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/user.service */
      "./src/app/shared/user.service.ts");

      var AdminGuard = /*#__PURE__*/function () {
        function AdminGuard(userService, router) {
          _classCallCheck(this, AdminGuard);

          this.userService = userService;
          this.router = router;
        }

        _createClass(AdminGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            this.userRole = this.userService.getRole();
            console.log('INSIDE ADMIN CANACTIVATE', this.userRole);
            var admin = 'ADMIN';

            if (this.userRole !== admin) {
              this.router.navigateByUrl('/tabs/gamesection');
              this.userService.deleteToken();
              return false;
            }

            return true;
          }
        }]);

        return AdminGuard;
      }();

      AdminGuard.ctorParameters = function () {
        return [{
          type: _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AdminGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AdminGuard);
      /***/
    },

    /***/
    "./src/app/auth/auth-interceptor.ts":
    /*!******************************************!*\
      !*** ./src/app/auth/auth-interceptor.ts ***!
      \******************************************/

    /*! exports provided: AuthInterceptor */

    /***/
    function srcAppAuthAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/user.service */
      "./src/app/shared/user.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor(userService, router) {
          _classCallCheck(this, AuthInterceptor);

          this.userService = userService;
          this.router = router;
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this3 = this;

            if (req.headers.get('NoAuth')) {
              return next.handle(req.clone());
            } else {
              var clonereq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
              });
              return next.handle(clonereq).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (event) {}, function (err) {
                if (err.error.auth == false) {
                  _this3.router.navigateByUrl('/login');
                }
              }));
            }
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor.ctorParameters = function () {
        return [{
          type: _shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])()], AuthInterceptor);
      /***/
    },

    /***/
    "./src/app/auth/authguard.guard.ts":
    /*!*****************************************!*\
      !*** ./src/app/auth/authguard.guard.ts ***!
      \*****************************************/

    /*! exports provided: AuthguardGuard */

    /***/
    function srcAppAuthAuthguardGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthguardGuard", function () {
        return AuthguardGuard;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/user.service */
      "./src/app/shared/user.service.ts");

      var AuthguardGuard = /*#__PURE__*/function () {
        function AuthguardGuard(userService, router) {
          _classCallCheck(this, AuthguardGuard);

          this.userService = userService;
          this.router = router;
        }

        _createClass(AuthguardGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            if (!this.userService.isLogedIn()) {
              this.router.navigateByUrl('/login');
              this.userService.deleteToken();
              return false;
            }

            return true;
          }
        }]);

        return AuthguardGuard;
      }();

      AuthguardGuard.ctorParameters = function () {
        return [{
          type: _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      AuthguardGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], AuthguardGuard);
      /***/
    },

    /***/
    "./src/app/auth/game.guard.ts":
    /*!************************************!*\
      !*** ./src/app/auth/game.guard.ts ***!
      \************************************/

    /*! exports provided: GameGuard */

    /***/
    function srcAppAuthGameGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameGuard", function () {
        return GameGuard;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");

      var GameGuard = /*#__PURE__*/function () {
        function GameGuard(router) {
          _classCallCheck(this, GameGuard);

          this.router = router;
        }

        _createClass(GameGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            this.gameLive = localStorage.getItem('GAMELIVE');
            console.log('INSIDE live', this.gameLive);
            var admin = 'ADMIN';

            if (this.gameLive !== 'true') {
              this.router.navigateByUrl('/tabs/not-live');
              return false;
            }

            return true;
          }
        }]);

        return GameGuard;
      }();

      GameGuard.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      GameGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], GameGuard);
      /***/
    },

    /***/
    "./src/app/components/account/account.component.scss":
    /*!***********************************************************!*\
      !*** ./src/app/components/account/account.component.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsAccountAccountComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  background-image: url('bg.png');\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.wallet {\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUMsMkJBQUE7RUFDQSxzQkFBQTtFQUNDLDRCQUFBO0FBRk47O0FBUUU7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUxOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmNvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9iZy5wbmdcIik7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC8vIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcbiAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxuICB9XG5cbiAgLmJhbmtzIHtcbiAgICAvLyAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAud2FsbGV0IHtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICB9XG5cbiAgIl19 */";
      /***/
    },

    /***/
    "./src/app/components/account/account.component.ts":
    /*!*********************************************************!*\
      !*** ./src/app/components/account/account.component.ts ***!
      \*********************************************************/

    /*! exports provided: AccountComponent */

    /***/
    function srcAppComponentsAccountAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountComponent", function () {
        return AccountComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _shared_game_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../shared/game-service.service */
      "./src/app/shared/game-service.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/user.service */
      "./src/app/shared/user.service.ts");
      /* harmony import */


      var src_app_shared_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/account.service */
      "./src/app/shared/account.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_logic_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/logic.service */
      "./src/app/services/logic.service.ts");
      /* harmony import */


      var flutterwave_angular_v3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! flutterwave-angular-v3 */
      "./node_modules/flutterwave-angular-v3/__ivy_ngcc__/flutterwave-angular-v3.js"); // import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';


      var AccountComponent = /*#__PURE__*/function () {
        function AccountComponent(router, userService, accountService, gameSevice, platform, logicService, // private localNotifications: LocalNotifications,
        flutterwave, alertController, toastController, modalController) {
          _classCallCheck(this, AccountComponent);

          this.router = router;
          this.userService = userService;
          this.accountService = accountService;
          this.gameSevice = gameSevice;
          this.platform = platform;
          this.logicService = logicService;
          this.flutterwave = flutterwave;
          this.alertController = alertController;
          this.toastController = toastController;
          this.modalController = modalController;
          this.showPaymentButtons = false;
          this.customerDetails = {
            name: this.userService.getUsername(),
            email: this.userService.getEmail(),
            phone_number: ''
          };
          this.customizations = {
            logo: 'https://flutterwave.com/images/logo-colored.svg'
          };
          this.model = {
            amount: null,
            cashout: '',
            username: ''
          };
          this.RaveOptions = {
            PBFPubKey: 'FLWPUBK_TEST-0e44fc52fddf09104dc7aa889c085b11-X',
            customer_email: 'swagasoft@gmail.com',
            custom_description: 'i-sabi credit',
            amount: 500000,
            currency: 'NGN',
            customer_phone: '09026464646',
            txref: '238485458496'
          };
          this.accountService.loadMyBalance();
          console.log('REF2', this.reference);
        }

        _createClass(AccountComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.generateRef();
            console.log('REF', this.reference);
            console.log('trans ref');
            this.appUsername = localStorage.getItem('appUser');
            this.model.username = this.appUsername;
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // this.paymentDoneSub = '';
            this.model = {
              amount: null,
              cashout: '',
              username: ''
            };
          }
        }, {
          key: "makePaymentCallback",
          value: function makePaymentCallback(response) {
            var _this4 = this;

            console.log("RESULT", response);

            if (response.status == "successful") {
              this.generateReference();
              response.date = Date.now();
              response.account_id = this.userService.getAuthId();
              response.ref = response.flw_ref;
              response.username = this.userService.getUsername();
              response.user_id = this.userService.getAuthId();
              response.transaction = response.tx_ref;
              this.paymentDoneSub = this.userService.postTransaction(response).subscribe(function (res) {
                console.log('new balance', res);

                _this4.logicService.presentAlert('Thank you', 'your account has been credited successfully. reload if not reflect.');

                _this4.accountService.loadMyBalance();

                _this4.generateRef();
              }, function (err) {
                _this4.generateRef();

                _this4.accountService.loadMyBalance();
              });
              this.flutterwave.closePaymentModal();
            } else {
              console.log('data');
              this.logicService.presentAlert('failed', 'your transactions has failed, please try again');
            }
          }
        }, {
          key: "closedPaymentModal",
          value: function closedPaymentModal() {
            this.generateReference();
            console.log('payment is closed');
            this.model.amount = null;
          }
        }, {
          key: "generateReference",
          value: function generateReference() {
            var date = new Date();
            this.reference = date.getTime().toString();
          }
        }, {
          key: "submitProCode",
          value: function submitProCode(promo) {
            var _this5 = this;

            this.loading = true;
            console.log(promo);
            var data = {
              promoCode: promo
            };
            this.accountService.activatePromo(data).subscribe(function (data) {
              console.log(data);
              _this5.loading = false;

              _this5.logicService.presentAlert('success', 'your account has been credited');

              _this5.accountService.loadMyBalance();
            }, function (err) {
              _this5.loading = false;

              _this5.logicService.presentAlert('not fount', err.error.message);

              console.log(err);
            });
          }
        }, {
          key: "showNotiAlert",
          value: function showNotiAlert(header, sub, msg) {
            this.alertController.create({
              header: header,
              subHeader: sub,
              message: msg,
              buttons: ['ok']
            }).then(function (alert) {
              return alert.present();
            });
          }
        }, {
          key: "paymentCancel",
          value: function paymentCancel() {
            this.showPaymentButtons = false;
            this.generateRef(); // this.amountInput = null;
          }
        }, {
          key: "generateRef",
          value: function generateRef() {
            this.reference = "".concat(Math.ceil(Math.random() * 10e13));
          }
        }, {
          key: "paymentDone",
          value: function paymentDone(process) {
            var _this6 = this;

            this.showPaymentButtons = false;
            process.username = this.appUsername;
            process.amount = this.model.amount;
            this.paymentDoneSub = this.userService.postTransaction(process).subscribe(function (res) {
              _this6.accountService.loadMyBalance();

              _this6.generateRef();
            }, function (err) {
              _this6.generateRef();

              _this6.accountService.loadMyBalance();
            });
            console.log(process);
          }
        }, {
          key: "profileSection",
          value: function profileSection() {
            this.router.navigate(['/tabs/profile']);
          }
        }, {
          key: "payNow",
          value: function payNow() {
            console.log('pay now is clicked..', this.reference);
          }
        }, {
          key: "mobileTransfer",
          value: function mobileTransfer() {
            console.log(this.model.amount.valueOf());
            this.showAlert();
          }
        }, {
          key: "showAlert",
          value: function showAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this7 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        header: 'MOBILE TRANSFER',
                        message: "Add this id (".concat(this.accountService.user_id, ")\n    to your mobile transfer info. <br> after a successful transfer click OK.\n             <p><h6 class=\" font-weight-bold\">Account Number: 3585745013</h6></p>\n             <p><h6  class=\"font-weight-bold\">Bank : FCMB </h6></p>\n             <p><h6  class=\" fiont-weight-bold\">Account Name : Ayaweisoft </h6></p>\n             <p> <h4 class=\" fiont-weight-bold\"> Amount : \u20A6 ").concat(this.model.amount, "</h4></p>"),
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            _this7.showPaymentButtons = false;

                            _this7.generateRef();
                          }
                        }, {
                          text: 'Okay',
                          handler: function handler() {
                            _this7.showPaymentButtons = false;
                            var process = {
                              username: _this7.appUsername,
                              amount: _this7.model.amount,
                              status: 'processing',
                              trxref: _this7.reference,
                              account_id: _this7.accountService.user_id,
                              transaction: ' manual transfer'
                            };
                            process.username = _this7.appUsername;
                            console.log('Confirm Okay', process);

                            _this7.userService.postManualTrans(process).subscribe(function (res) {
                              console.log(res);

                              _this7.presentSucess();
                            }, function (err) {
                              console.log(err);
                            });
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
        }, {
          key: "presentSucess",
          value: function presentSucess() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.showPaymentButtons = false;
                      _context4.next = 3;
                      return this.toastController.create({
                        message: 'Your account will be updated shortly.',
                        position: 'middle',
                        duration: 4000
                      });

                    case 3:
                      toast = _context4.sent;
                      toast.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "enterAmountInput",
          value: function enterAmountInput() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this8 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        header: 'ENTER AMOUNT',
                        inputs: [{
                          name: 'amount',
                          type: 'text',
                          placeholder: 'Enter amount'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'danger',
                          handler: function handler(blah) {
                            console.log('cancel amount input');

                            _this8.generateRef();
                          }
                        }, {
                          text: 'Confirm',
                          cssClass: 'success',
                          handler: function handler(val) {
                            console.log(val.amount);
                            _this8.showPaymentButtons = true;
                            _this8.model.amount = val.amount;
                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "presentAmountInput",
          value: function presentAmountInput() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this9 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertController.create({
                        header: 'ENTER AMOUNT',
                        inputs: [{
                          name: 'amount',
                          type: 'text',
                          placeholder: 'example 2000'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Okay',
                          handler: function handler(value) {
                            console.log('Confirm Okay', value);
                            _this9.model.amount = value.amount;

                            _this9.payNow();
                          }
                        }]
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          } // cashout

        }, {
          key: "enterCashoutAmount",
          value: function enterCashoutAmount() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this10 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.alertController.create({
                        header: 'ENTER CASHOUT',
                        inputs: [{
                          name: 'amount',
                          type: 'text',
                          placeholder: 'Enter amount'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'danger',
                          handler: function handler(blah) {
                            console.log('cashout is canceled');
                          }
                        }, {
                          text: 'Confirm',
                          cssClass: 'success',
                          handler: function handler(val) {
                            _this10.model.cashout = val.amount;
                            var userCashout = parseInt(_this10.model.cashout);

                            if (userCashout < 500) {
                              var msg = "cashout must be greater that 500!";

                              _this10.gameSevice.presentToast(msg);
                            } else {
                              _this10.accountService.cashout(_this10.model).subscribe(function (res) {
                                console.log(res);

                                _this10.accountService.loadMyBalance();

                                _this10.cashoutSuccess();
                              }, function (err) {
                                console.log(err);

                                _this10.gameSevice.presentToast(err.error.message);
                              });
                            }
                          }
                        }]
                      });

                    case 2:
                      alert = _context7.sent;
                      _context7.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "cashoutSuccess",
          value: function cashoutSuccess() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var alert;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.alertController.create({
                        header: 'CASHOUT SUCCESSFUL',
                        message: "your cashout of \u20A6".concat(this.model.cashout, " was successful"),
                        buttons: [{
                          text: 'Ok',
                          cssClass: 'success',
                          handler: function handler() {
                            console.log('ok');
                          }
                        }]
                      });

                    case 2:
                      alert = _context8.sent;
                      _context8.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return AccountComponent;
      }();

      AccountComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: src_app_shared_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountService"]
        }, {
          type: _shared_game_service_service__WEBPACK_IMPORTED_MODULE_1__["GameServiceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: src_app_services_logic_service__WEBPACK_IMPORTED_MODULE_7__["LogicService"]
        }, {
          type: flutterwave_angular_v3__WEBPACK_IMPORTED_MODULE_8__["Flutterwave"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }];
      };

      AccountComponent.propDecorators = {
        firstName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        lastName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        middleInitial: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      AccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./account.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/account/account.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./account.component.scss */
        "./src/app/components/account/account.component.scss"))["default"]]
      })], AccountComponent);
      /***/
    },

    /***/
    "./src/app/components/admin-event/admin-event.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/components/admin-event/admin-event.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsAdminEventAdminEventComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4tZXZlbnQvYWRtaW4tZXZlbnQuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/components/admin-event/admin-event.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/admin-event/admin-event.component.ts ***!
      \*****************************************************************/

    /*! exports provided: AdminEventComponent */

    /***/
    function srcAppComponentsAdminEventAdminEventComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminEventComponent", function () {
        return AdminEventComponent;
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


      var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../shared/user.service */
      "./src/app/shared/user.service.ts");
      /* harmony import */


      var _shared_event_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../shared/event.service */
      "./src/app/shared/event.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var AdminEventComponent = /*#__PURE__*/function () {
        function AdminEventComponent(eventService, userService, router) {
          _classCallCheck(this, AdminEventComponent);

          this.eventService = eventService;
          this.userService = userService;
          this.router = router;
          this.isLinear = false;
          this.loading = false;
          this.eventModel = {
            eventName: '',
            type: '',
            image_url: '',
            companyName: '',
            address: '',
            contactNumber: '',
            aboutEvent: '',
            bankname: '',
            costPerVote: '',
            numberOfSlot: '',
            sharingRatio_isabi: '',
            sharingRatio_company: '',
            accountNumber: '',
            accountName: ''
          };
        }

        _createClass(AdminEventComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submitEvent",
          value: function submitEvent() {
            var _this11 = this;

            console.log(this.eventModel);
            this.eventService.submitEvent(this.eventModel).subscribe(function (res) {
              console.log('event submitted successful!');

              _this11.userService.shortToast(res['msg']);

              _this11.resetForm();

              setTimeout(function () {
                _this11.router.navigateByUrl('/tabs/events');
              }, 2000);
            }, function (err) {
              console.log('error submitting event.');

              _this11.userService.shortToast(err.error.msg);
            });
          }
        }, {
          key: "eventType",
          value: function eventType(event) {
            console.log(event);
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.eventModel = {
              eventName: '',
              type: '',
              image_url: '',
              companyName: '',
              address: '',
              contactNumber: '',
              aboutEvent: '',
              bankname: '',
              costPerVote: '',
              numberOfSlot: '',
              sharingRatio_isabi: '',
              sharingRatio_company: '',
              accountNumber: '',
              accountName: ''
            };
          }
        }]);

        return AdminEventComponent;
      }();

      AdminEventComponent.ctorParameters = function () {
        return [{
          type: _shared_event_service__WEBPACK_IMPORTED_MODULE_3__["EventService"]
        }, {
          type: _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      AdminEventComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-admin-event',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./admin-event.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-event/admin-event.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./admin-event.component.scss */
        "./src/app/components/admin-event/admin-event.component.scss"))["default"]]
      })], AdminEventComponent);
      /***/
    },

    /***/
    "./src/app/components/congrats/congrats.component.scss":
    /*!*************************************************************!*\
      !*** ./src/app/components/congrats/congrats.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsCongratsCongratsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  background-image: url('congratulation.png');\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb25ncmF0cy9jb25ncmF0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQywyQkFBQTtFQUNBLHNCQUFBO0VBQ0MsNEJBQUE7QUFETiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29uZ3JhdHMvY29uZ3JhdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2NvbmdyYXR1bGF0aW9uLnBuZ1wiKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gcG9zaXRpb246IGZpeGVkO1xuICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IFxuICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXG4gIH1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/congrats/congrats.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/components/congrats/congrats.component.ts ***!
      \***********************************************************/

    /*! exports provided: CongratsComponent */

    /***/
    function srcAppComponentsCongratsCongratsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CongratsComponent", function () {
        return CongratsComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");

      var CongratsComponent = /*#__PURE__*/function () {
        function CongratsComponent(modalController, router) {
          _classCallCheck(this, CongratsComponent);

          this.modalController = modalController;
          this.router = router;
          this.result = {
            minutes: this.minutes,
            seconds: this.seconds,
            correctQuestion: this.correctQuestion
          };
        }

        _createClass(CongratsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.minutes, this.seconds, this.correctQuestion);
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.modalController.dismiss();
            this.router.navigate(['/tabs/gamesection']);
          }
        }, {
          key: "playAgain",
          value: function playAgain() {
            this.modalController.dismiss();
            this.router.navigate(['/tabs/playsection']);
          }
        }]);

        return CongratsComponent;
      }();

      CongratsComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      CongratsComponent.propDecorators = {
        minutes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        seconds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        correctQuestion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      CongratsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-congrats',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./congrats.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/congrats/congrats.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./congrats.component.scss */
        "./src/app/components/congrats/congrats.component.scss"))["default"]]
      })], CongratsComponent);
      /***/
    },

    /***/
    "./src/app/components/fail-game/fail-game.component.scss":
    /*!***************************************************************!*\
      !*** ./src/app/components/fail-game/fail-game.component.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsFailGameFailGameComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  background-image: url('congratulation.png');\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mYWlsLWdhbWUvZmFpbC1nYW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksMkNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUVDLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQyw0QkFBQTtBQUhOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mYWlsLWdhbWUvZmFpbC1nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5jb250ZW50e1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmcucG5nXCIpO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvY29uZ3JhdHVsYXRpb24ucG5nXCIpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XG4gICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXG4gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyBcbiAgfVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/fail-game/fail-game.component.ts":
    /*!*************************************************************!*\
      !*** ./src/app/components/fail-game/fail-game.component.ts ***!
      \*************************************************************/

    /*! exports provided: FailGameComponent */

    /***/
    function srcAppComponentsFailGameFailGameComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FailGameComponent", function () {
        return FailGameComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var FailGameComponent = /*#__PURE__*/function () {
        function FailGameComponent(modalController, router) {
          _classCallCheck(this, FailGameComponent);

          this.modalController = modalController;
          this.router = router;
          this.result = {
            minutes: this.minutes,
            seconds: this.seconds,
            correctQuestion: this.correctQuestion
          };
        }

        _createClass(FailGameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.minutes, this.seconds, this.correctQuestion);
          }
        }, {
          key: "dismissModal",
          value: function dismissModal() {
            this.modalController.dismiss();
            this.router.navigate(['/tabs/gamesection']);
          }
        }, {
          key: "playAgain",
          value: function playAgain() {
            this.modalController.dismiss();
            this.router.navigate(['/tabs/playsection']);
          }
        }]);

        return FailGameComponent;
      }();

      FailGameComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      FailGameComponent.propDecorators = {
        minutes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        seconds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        correctQuestion: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      FailGameComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-fail-game',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./fail-game.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fail-game/fail-game.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./fail-game.component.scss */
        "./src/app/components/fail-game/fail-game.component.scss"))["default"]]
      })], FailGameComponent);
      /***/
    },

    /***/
    "./src/app/components/forgetpassword/forgetpassword.component.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/components/forgetpassword/forgetpassword.component.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsForgetpasswordForgetpasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "form .text-input {\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 35px;\n}\n\n.lds-roller {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n\n.lds-roller div {\n  -webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 32px 32px;\n}\n\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #fdfffd;\n  margin: -3px 0 0 -3px;\n}\n\n.lds-roller div:nth-child(1) {\n  -webkit-animation-delay: -0.036s;\n          animation-delay: -0.036s;\n}\n\n.lds-roller div:nth-child(1):after {\n  top: 50px;\n  left: 50px;\n}\n\n.lds-roller div:nth-child(2) {\n  -webkit-animation-delay: -0.072s;\n          animation-delay: -0.072s;\n}\n\n.lds-roller div:nth-child(2):after {\n  top: 54px;\n  left: 45px;\n}\n\n.lds-roller div:nth-child(3) {\n  -webkit-animation-delay: -0.108s;\n          animation-delay: -0.108s;\n}\n\n.lds-roller div:nth-child(3):after {\n  top: 57px;\n  left: 39px;\n}\n\n.lds-roller div:nth-child(4) {\n  -webkit-animation-delay: -0.144s;\n          animation-delay: -0.144s;\n}\n\n.lds-roller div:nth-child(4):after {\n  top: 58px;\n  left: 32px;\n}\n\n.lds-roller div:nth-child(5) {\n  -webkit-animation-delay: -0.18s;\n          animation-delay: -0.18s;\n}\n\n.lds-roller div:nth-child(5):after {\n  top: 57px;\n  left: 25px;\n}\n\n.lds-roller div:nth-child(6) {\n  -webkit-animation-delay: -0.216s;\n          animation-delay: -0.216s;\n}\n\n.lds-roller div:nth-child(6):after {\n  top: 54px;\n  left: 19px;\n}\n\n.lds-roller div:nth-child(7) {\n  -webkit-animation-delay: -0.252s;\n          animation-delay: -0.252s;\n}\n\n.lds-roller div:nth-child(7):after {\n  top: 50px;\n  left: 14px;\n}\n\n.lds-roller div:nth-child(8) {\n  -webkit-animation-delay: -0.288s;\n          animation-delay: -0.288s;\n}\n\n.lds-roller div:nth-child(8):after {\n  top: 45px;\n  left: 10px;\n}\n\n@-webkit-keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.toast-container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  top: auto;\n  margin-bottom: 80px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n}\n\n#snackbar {\n  visibility: hidden;\n  min-width: 250px;\n  margin-left: -125px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  bottom: 30px;\n  font-size: 17px;\n}\n\n#snackbar {\n  visibility: visible;\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0;\n  }\n  to {\n    bottom: 30px;\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1;\n  }\n  to {\n    bottom: 0;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JnZXRwYXNzd29yZC9mb3JnZXRwYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLDBDQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFLQTtFQUNDLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZEOztBQUlBO0VBQ0Msd0VBQUE7VUFBQSxnRUFBQTtFQUNBLDJCQUFBO0FBREQ7O0FBR0E7RUFDQyxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFBRDs7QUFFQTtFQUNDLGdDQUFBO1VBQUEsd0JBQUE7QUFDRDs7QUFDQTtFQUNDLFNBQUE7RUFDQSxVQUFBO0FBRUQ7O0FBQUE7RUFDQyxnQ0FBQTtVQUFBLHdCQUFBO0FBR0Q7O0FBREE7RUFDQyxTQUFBO0VBQ0EsVUFBQTtBQUlEOztBQUZBO0VBQ0MsZ0NBQUE7VUFBQSx3QkFBQTtBQUtEOztBQUhBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7QUFNRDs7QUFKQTtFQUNDLGdDQUFBO1VBQUEsd0JBQUE7QUFPRDs7QUFMQTtFQUNDLFNBQUE7RUFDQSxVQUFBO0FBUUQ7O0FBTkE7RUFDQywrQkFBQTtVQUFBLHVCQUFBO0FBU0Q7O0FBUEE7RUFDQyxTQUFBO0VBQ0EsVUFBQTtBQVVEOztBQVJBO0VBQ0MsZ0NBQUE7VUFBQSx3QkFBQTtBQVdEOztBQVRBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7QUFZRDs7QUFWQTtFQUNDLGdDQUFBO1VBQUEsd0JBQUE7QUFhRDs7QUFYQTtFQUNDLFNBQUE7RUFDQSxVQUFBO0FBY0Q7O0FBWkE7RUFDQyxnQ0FBQTtVQUFBLHdCQUFBO0FBZUQ7O0FBYkE7RUFDQyxTQUFBO0VBQ0EsVUFBQTtBQWdCRDs7QUFkQTtFQUNDO0lBQ0MsdUJBQUE7RUFpQkE7RUFmRDtJQUNDLHlCQUFBO0VBaUJBO0FBQ0Y7O0FBdkJBO0VBQ0M7SUFDQyx1QkFBQTtFQWlCQTtFQWZEO0lBQ0MseUJBQUE7RUFpQkE7QUFDRjs7QUFiQTtFQUNDLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBZUQ7O0FBWkE7RUFDQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBZUQ7O0FBWkE7RUFDQyxtQkFBQTtFQUNBLGlEQUFBO0VBQ0EseUNBQUE7QUFlRDs7QUFaQTtFQUNDO0lBQ0MsU0FBQTtJQUNBLFVBQUE7RUFlQTtFQWJEO0lBQ0MsWUFBQTtJQUNBLFVBQUE7RUFlQTtBQUNGOztBQVpBO0VBQ0M7SUFDQyxTQUFBO0lBQ0EsVUFBQTtFQWNBO0VBWkQ7SUFDQyxZQUFBO0lBQ0EsVUFBQTtFQWNBO0FBQ0Y7O0FBWEE7RUFDQztJQUNDLFlBQUE7SUFDQSxVQUFBO0VBYUE7RUFYRDtJQUNDLFNBQUE7SUFDQSxVQUFBO0VBYUE7QUFDRjs7QUFWQTtFQUNDO0lBQ0MsWUFBQTtJQUNBLFVBQUE7RUFZQTtFQVZEO0lBQ0MsU0FBQTtJQUNBLFVBQUE7RUFZQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3JnZXRwYXNzd29yZC9mb3JnZXRwYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xuXHQudGV4dC1pbnB1dCB7XG5cdFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXHRcdGJvcmRlci1yYWRpdXM6IDM1cHg7XG5cdH1cbn1cblxuLy8gbG9hZGVyXG4ubGRzLXJvbGxlciB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR3aWR0aDogNjRweDtcblx0aGVpZ2h0OiA2NHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2IHtcblx0YW5pbWF0aW9uOiBsZHMtcm9sbGVyIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcblx0dHJhbnNmb3JtLW9yaWdpbjogMzJweCAzMnB4O1xufVxuLmxkcy1yb2xsZXIgZGl2OmFmdGVyIHtcblx0Y29udGVudDogJyAnO1xuXHRkaXNwbGF5OiBibG9jaztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR3aWR0aDogNnB4O1xuXHRoZWlnaHQ6IDZweDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRiYWNrZ3JvdW5kOiByZ2IoMjUzLCAyNTUsIDI1Myk7XG5cdG1hcmdpbjogLTNweCAwIDAgLTNweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSkge1xuXHRhbmltYXRpb24tZGVsYXk6IC0wLjAzNnM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpOmFmdGVyIHtcblx0dG9wOiA1MHB4O1xuXHRsZWZ0OiA1MHB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKSB7XG5cdGFuaW1hdGlvbi1kZWxheTogLTAuMDcycztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMik6YWZ0ZXIge1xuXHR0b3A6IDU0cHg7XG5cdGxlZnQ6IDQ1cHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDMpIHtcblx0YW5pbWF0aW9uLWRlbGF5OiAtMC4xMDhzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XG5cdHRvcDogNTdweDtcblx0bGVmdDogMzlweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCkge1xuXHRhbmltYXRpb24tZGVsYXk6IC0wLjE0NHM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpOmFmdGVyIHtcblx0dG9wOiA1OHB4O1xuXHRsZWZ0OiAzMnB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KSB7XG5cdGFuaW1hdGlvbi1kZWxheTogLTAuMThzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KTphZnRlciB7XG5cdHRvcDogNTdweDtcblx0bGVmdDogMjVweDtcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNikge1xuXHRhbmltYXRpb24tZGVsYXk6IC0wLjIxNnM7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyIHtcblx0dG9wOiA1NHB4O1xuXHRsZWZ0OiAxOXB4O1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KSB7XG5cdGFuaW1hdGlvbi1kZWxheTogLTAuMjUycztcbn1cbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNyk6YWZ0ZXIge1xuXHR0b3A6IDUwcHg7XG5cdGxlZnQ6IDE0cHg7XG59XG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpIHtcblx0YW5pbWF0aW9uLWRlbGF5OiAtMC4yODhzO1xufVxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg4KTphZnRlciB7XG5cdHRvcDogNDVweDtcblx0bGVmdDogMTBweDtcbn1cbkBrZXlmcmFtZXMgbGRzLXJvbGxlciB7XG5cdDAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcblx0fVxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuXHR9XG59XG5cbi8vICAgbG9hZGluZ1xuLnRvYXN0LWNvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHRvcDogYXV0bztcblx0bWFyZ2luLWJvdHRvbTogODBweDtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG5cdGJvdHRvbTogMDtcblx0ei1pbmRleDogOTk5O1xufVxuXG4jc25hY2tiYXIge1xuXHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdG1pbi13aWR0aDogMjUwcHg7XG5cdG1hcmdpbi1sZWZ0OiAtMTI1cHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG5cdGNvbG9yOiAjZmZmO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDJweDtcblx0cGFkZGluZzogMTZweDtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR6LWluZGV4OiAxO1xuXHRsZWZ0OiA1MCU7XG5cdGJvdHRvbTogMzBweDtcblx0Zm9udC1zaXplOiAxN3B4O1xufVxuXG4jc25hY2tiYXIge1xuXHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xuXHQtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xuXHRhbmltYXRpb246IGZhZGVpbiAwLjVzLCBmYWRlb3V0IDAuNXMgMi41cztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVpbiB7XG5cdGZyb20ge1xuXHRcdGJvdHRvbTogMDtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG5cdHRvIHtcblx0XHRib3R0b206IDMwcHg7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG5cdGZyb20ge1xuXHRcdGJvdHRvbTogMDtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG5cdHRvIHtcblx0XHRib3R0b206IDMwcHg7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZW91dCB7XG5cdGZyb20ge1xuXHRcdGJvdHRvbTogMzBweDtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cdHRvIHtcblx0XHRib3R0b206IDA7XG5cdFx0b3BhY2l0eTogMDtcblx0fVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVvdXQge1xuXHRmcm9tIHtcblx0XHRib3R0b206IDMwcHg7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXHR0byB7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdG9wYWNpdHk6IDA7XG5cdH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/forgetpassword/forgetpassword.component.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/components/forgetpassword/forgetpassword.component.ts ***!
      \***********************************************************************/

    /*! exports provided: ForgetpasswordComponent */

    /***/
    function srcAppComponentsForgetpasswordForgetpasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgetpasswordComponent", function () {
        return ForgetpasswordComponent;
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


      var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/user.service */
      "./src/app/shared/user.service.ts");
      /* harmony import */


      var _shared_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../shared/account.service */
      "./src/app/shared/account.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

      var ForgetpasswordComponent = /*#__PURE__*/function () {
        function ForgetpasswordComponent(accountService, http, alertController, router, toastController, userService) {
          _classCallCheck(this, ForgetpasswordComponent);

          this.accountService = accountService;
          this.http = http;
          this.alertController = alertController;
          this.router = router;
          this.toastController = toastController;
          this.userService = userService;
          this.showPasswordEdit = false;
          this.showNumberForm = true;
          this.showOTPInput = false;
          this.confirmOTP = false;
          this.userOtpInput = 0;
          this.loading = false;
          this.allowReset = false; // noAuthHeader = headers: new HttpHeaders({NoAuth: 'True'});

          this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]().set('Content-Type', 'application/json').set('Access-Control-Allow-Origin', '*');
          this.model = {
            number: '',
            userOtpConfirm: '',
            newPassword: '',
            confirmPassword: ''
          };
        }

        _createClass(ForgetpasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submitNumber",
          value: function submitNumber(form) {
            var _this12 = this;

            this.loading = true;
            this.userService.confirmNumber(this.model.number).subscribe(function (res) {
              _this12.loading = false;

              _this12.showPasswordInput();

              _this12.otpFromServer = res['otp'];
              _this12.phoneFromServer = res['phone'];
              console.log(_this12.otpFromServer);
              console.log(_this12.phoneFromServer);
              _this12.showNumberForm = false;
              _this12.showOTPInput = true;
            }, function (err) {
              _this12.loading = false;

              _this12.noUserFound();

              console.log(err.error);
            });
          } // alert input for reset password

        }, {
          key: "showPasswordInput",
          value: function showPasswordInput() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this13 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.alertController.create({
                        header: 'ENTER OTP SENT TO YOU',
                        inputs: [{
                          name: 'otp',
                          type: 'number',
                          placeholder: 'enter otp'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('password reset cancel');
                          }
                        }, {
                          text: 'Confirm',
                          handler: function handler(data) {
                            _this13.allowResetpasswordIfTrue(data.otp);

                            console.log(' clecked ok.....', data.otp);
                          }
                        }]
                      });

                    case 2:
                      alert = _context9.sent;
                      _context9.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "allowResetpasswordIfTrue",
          value: function allowResetpasswordIfTrue(userOtp) {
            if (userOtp === this.otpFromServer) {
              console.log('UNLUCK PASSWORD API');
              this.allowReset = true;
            } else {
              var msg = 'The supplied OTP is invalid';
              this.presentToast(msg);
              this.showNumberForm = true;
              console.log('otp is not correct..');
            }
          }
        }, {
          key: "noUserFound",
          value: function noUserFound() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var toast;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.toastController.create({
                        message: "User with 0".concat(this.model.number, " not found"),
                        position: 'middle',
                        duration: 3000
                      });

                    case 2:
                      toast = _context10.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "submitNewPassword",
          value: function submitNewPassword(password) {
            var _this14 = this;

            console.log(this.model.newPassword);
            console.log(this.model.confirmPassword);

            if (this.model.newPassword === this.model.confirmPassword) {
              console.log('user can submit password');
              this.userService.resetPassword(this.model).subscribe(function (response) {
                console.log(response);

                _this14.router.navigate(['/login']);

                var msg = 'Successful!!! you can login with your new password';

                _this14.presentToast(msg);
              }, function (error) {
                console.log(error);
              });
            } else {
              console.log('password not match');
              var msg = 'password not match';
              this.presentToast(msg);
            }
          }
        }, {
          key: "presentToast",
          value: function presentToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var toast;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.toastController.create({
                        message: msg,
                        position: 'middle',
                        duration: 2000
                      });

                    case 2:
                      toast = _context11.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          }
        }]);

        return ForgetpasswordComponent;
      }();

      ForgetpasswordComponent.ctorParameters = function () {
        return [{
          type: _shared_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }, {
          type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }];
      };

      ForgetpasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-forgetpassword',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./forgetpassword.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/forgetpassword/forgetpassword.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./forgetpassword.component.scss */
        "./src/app/components/forgetpassword/forgetpassword.component.scss"))["default"]]
      })], ForgetpasswordComponent);
      /***/
    },

    /***/
    "./src/app/components/gamesection/gamesection.component.scss":
    /*!*******************************************************************!*\
      !*** ./src/app/components/gamesection/gamesection.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsGamesectionGamesectionComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".content {\n  background-image: url('bg.png');\n  height: 100%;\n  width: 100%;\n  background-position: center;\n  position: fixed;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n\n.animate {\n  width: 50px;\n  height: 50px;\n  background-color: #9898c9;\n  padding: 20px;\n}\n\n.rounded-top {\n  display: flex;\n  align-content: center;\n  width: 100px;\n  height: 30px;\n}\n\n.resp-container {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: auto;\n}\n\nh1 {\n  color: #396;\n  font-weight: 100;\n  font-size: 40px;\n  margin: 40px 0px 20px;\n}\n\n#clockdiv {\n  font-family: sans-serif;\n  color: #fdfcfc;\n  display: inline-block;\n  font-weight: bold;\n  text-align: center;\n  font-size: 30px;\n}\n\n#clockdiv > div {\n  padding: 5px;\n  border-radius: 3px;\n  background: #cae2dd;\n  display: inline-block;\n}\n\n#clockdiv div > span {\n  padding: 15px;\n  border-radius: 3px;\n  display: inline-block;\n}\n\n.smalltext {\n  padding-top: 5px;\n  font-size: 12px;\n}\n\n.toast-container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  top: auto;\n  margin-bottom: 80px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lc2VjdGlvbi9nYW1lc2VjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUVHLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQywyQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNDLDRCQUFBO0FBRE47O0FBSUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtBQURKOztBQVFFO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFMTjs7QUFVRTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVBOOztBQWFFO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBVk47O0FBWUs7RUFDRyx1QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBVFI7O0FBWUk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBVFI7O0FBV0k7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSxxQkFBQTtBQVRSOztBQVdJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBUlI7O0FBV0U7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQVJOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9nYW1lc2VjdGlvbi9nYW1lc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuIC5jb250ZW50e1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYXBwLWJnLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnLnBuZ1wiKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjsgXG4gICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxuICB9XG4gIFxuICAuYW5pbWF0ZXtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MiwgMTUyLCAyMDEpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbiAgXG4gIC5yb3V0ZXItbGluay1hY3RpdmV7XG4gIFxuICBcbiAgfVxuICAucm91bmRlZC10b3B7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gIH1cbiAgXG4gIFxuICBcbiAgLnJlc3AtY29udGFpbmVyIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBcbiAgLy8gIHRpbWVyIHN0eWxlc1xuICBcbiAgLy8gdGltZXIgc3R5bGVzXG4gIGgxeyBcbiAgICAgIGNvbG9yOiAjMzk2OyBcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7IFxuICAgICAgZm9udC1zaXplOiA0MHB4OyBcbiAgICAgIG1hcmdpbjogNDBweCAwcHggMjBweDsgXG4gICAgfSBcbiAgICAgI2Nsb2NrZGl2eyBcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IFxuICAgICAgICBjb2xvcjogcmdiKDI1MywgMjUyLCAyNTIpOyBcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgICAgICBmb250LXNpemU6IDMwcHg7IFxuICAgIH0gXG4gIFxuICAgICNjbG9ja2RpdiA+IGRpdnsgXG4gICAgICAgIHBhZGRpbmc6IDVweDsgXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDsgXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYigyMDIsIDIyNiwgMjIxKTsgXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXG4gICAgfSBcbiAgICAjY2xvY2tkaXYgZGl2ID4gc3BhbnsgXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7IFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7IFxuICAgICAgLy8gICBiYWNrZ3JvdW5kOiAjMDA4MTZBOyBcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyBcbiAgICB9IFxuICAgIC5zbWFsbHRleHR7IFxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4OyBcbiAgICAgICAgZm9udC1zaXplOiAxMnB4OyBcbiAgICB9IFxuICAgIC8vICAgbG9hZGluZ1xuICAudG9hc3QtY29udGFpbmVye1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgdG9wOiBhdXRvO1xuICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgXG4gICAiXX0= */";
      /***/
    },

    /***/
    "./src/app/components/gamesection/gamesection.component.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/components/gamesection/gamesection.component.ts ***!
      \*****************************************************************/

    /*! exports provided: GamesectionComponent */

    /***/
    function srcAppComponentsGamesectionGamesectionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GamesectionComponent", function () {
        return GamesectionComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var src_app_shared_game_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/game-service.service */
      "./src/app/shared/game-service.service.ts");
      /* harmony import */


      var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/user.service */
      "./src/app/shared/user.service.ts");
      /* harmony import */


      var src_app_shared_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/account.service */
      "./src/app/shared/account.service.ts");

      var GamesectionComponent = /*#__PURE__*/function () {
        function GamesectionComponent(gameService, userService, http, loadingController, alertController, toastController, accountService, platform, menu, sanitizer, router) {
          _classCallCheck(this, GamesectionComponent);

          this.gameService = gameService;
          this.userService = userService;
          this.http = http;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.toastController = toastController;
          this.accountService = accountService;
          this.platform = platform;
          this.menu = menu;
          this.sanitizer = sanitizer;
          this.router = router;
          this.low_balance = false;
          this.loading = false;
          this.versionCode = 4.1;
          this.gameNotLive = true;
          this.gameLive = false;
        }

        _createClass(GamesectionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      this.appUser = localStorage.getItem('appUser');
                      _context12.next = 3;
                      return this.gameService.getAdminDate();

                    case 3:
                      _context12.next = 5;
                      return this.loadBalance();

                    case 5:
                      this.autoSlide();

                    case 6:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {//  this.checkingInterval
          }
        }, {
          key: "autoSlide",
          value: function autoSlide() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var _this15 = this;

              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      setInterval(function () {
                        _this15.gameService.slideCounter = _this15.gameService.gameTipArray.length;
                        _this15.gameService.slideCounter--;

                        _this15.mySlider.slideNext(3000, true);
                      }, 9000);

                    case 1:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13);
            }));
          }
        }, {
          key: "clickSlidetoNext",
          value: function clickSlidetoNext() {
            console.log('slide to next');
            this.mySlider.slideNext();
          }
        }, {
          key: "clickSlidePrevious",
          value: function clickSlidePrevious() {
            console.log('slide to previous');
            this.mySlider.slidePrev();
          }
        }, {
          key: "loadBalance",
          value: function loadBalance() {
            this.accountService.loadMyBalance();
          }
        }]);

        return GamesectionComponent;
      }();

      GamesectionComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_game_service_service__WEBPACK_IMPORTED_MODULE_6__["GameServiceService"]
        }, {
          type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: src_app_shared_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      GamesectionComponent.propDecorators = {
        mySlider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['mySlider', {
            "static": false
          }]
        }],
        box: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['box', {
            "static": false
          }]
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['items', {
            "static": false
          }]
        }],
        video_link: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['video_link', {
            "static": false
          }]
        }]
      };
      GamesectionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gamesection',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./gamesection.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gamesection/gamesection.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./gamesection.component.scss */
        "./src/app/components/gamesection/gamesection.component.scss"))["default"]]
      })], GamesectionComponent);
      /***/
    },

    /***/
    "./src/app/components/header/header.component.scss":
    /*!*********************************************************!*\
      !*** ./src/app/components/header/header.component.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/components/header/header.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ctorParameters = function () {
        return [];
      };

      HeaderComponent.propDecorators = {
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./header.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./header.component.scss */
        "./src/app/components/header/header.component.scss"))["default"]]
      })], HeaderComponent);
      /***/
    },

    /***/
    "./src/app/components/inside-event-add-user/inside-event-add-user.component.scss":
    /*!***************************************************************************************!*\
      !*** ./src/app/components/inside-event-add-user/inside-event-add-user.component.scss ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsInsideEventAddUserInsideEventAddUserComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "form {\n  padding: 50px;\n  margin-top: 15%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnNpZGUtZXZlbnQtYWRkLXVzZXIvaW5zaWRlLWV2ZW50LWFkZC11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5zaWRlLWV2ZW50LWFkZC11c2VyL2luc2lkZS1ldmVudC1hZGQtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XG4gICAgcGFkZGluZzogNTBweDtcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/inside-event-add-user/inside-event-add-user.component.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/components/inside-event-add-user/inside-event-add-user.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: InsideEventAddUserComponent */

    /***/
    function srcAppComponentsInsideEventAddUserInsideEventAddUserComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InsideEventAddUserComponent", function () {
        return InsideEventAddUserComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../shared/user.service */
      "./src/app/shared/user.service.ts");
      /* harmony import */


      var _shared_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../shared/event.service */
      "./src/app/shared/event.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

      var InsideEventAddUserComponent = /*#__PURE__*/function () {
        function InsideEventAddUserComponent(modalController, navParams, eventService, userService) {
          _classCallCheck(this, InsideEventAddUserComponent);

          this.modalController = modalController;
          this.navParams = navParams;
          this.eventService = eventService;
          this.userService = userService;
          this.contesttModel = {
            event_id: '',
            fullname: '',
            nickname: '',
            image_url: ''
          };
          console.log('id', navParams.get('event_id'));
          this.contesttModel.event_id = navParams.get('event_id');
        }

        _createClass(InsideEventAddUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalController.dismiss();
          }
        }, {
          key: "submitUser",
          value: function submitUser() {
            var _this16 = this;

            console.log(this.contesttModel);
            this.eventService.createContestTant(this.contesttModel).subscribe(function (res) {
              _this16.closeModal();

              _this16.userService.shortToast(res['msg']);
            }, function (err) {
              _this16.userService.longToast(err.error.msg);
            });
          }
        }]);

        return InsideEventAddUserComponent;
      }();

      InsideEventAddUserComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"]
        }, {
          type: _shared_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]
        }, {
          type: _shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      };

      InsideEventAddUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inside-event-add-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./inside-event-add-user.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inside-event-add-user/inside-event-add-user.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./inside-event-add-user.component.scss */
        "./src/app/components/inside-event-add-user/inside-event-add-user.component.scss"))["default"]]
      })], InsideEventAddUserComponent);
      /***/
    },

    /***/
    "./src/app/components/inside-event/inside-event.component.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/components/inside-event/inside-event.component.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsInsideEventInsideEventComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header img {\n  width: 70px;\n  height: 30px;\n  padding: 5px 0;\n}\n\nion-icon[name=trash] {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  background-color: rgba(0, 0, 0, 0.7);\n  padding: 10px;\n  border-radius: 50%;\n  color: red;\n}\n\nion-card img {\n  height: 230px;\n  width: 100%;\n  -o-object-fit: fill;\n     object-fit: fill;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnNpZGUtZXZlbnQvaW5zaWRlLWV2ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNDO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQUY7O0FBSUE7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBREQ7O0FBS0M7RUFDQyxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0tBQUEsZ0JBQUE7QUFGRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5zaWRlLWV2ZW50L2luc2lkZS1ldmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuXHRpbWcge1xuXHRcdHdpZHRoOiA3MHB4O1xuXHRcdGhlaWdodDogMzBweDtcblx0XHRwYWRkaW5nOiA1cHggMDtcblx0fVxufVxuXG5pb24taWNvbltuYW1lPSd0cmFzaCddIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDVweDtcblx0cmlnaHQ6IDVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC43KTtcblx0cGFkZGluZzogMTBweDtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRjb2xvcjogcmVkO1xufVxuXG5pb24tY2FyZCB7XG5cdGltZyB7XG5cdFx0aGVpZ2h0OiAyMzBweDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRvYmplY3QtZml0OiBmaWxsO1xuXHR9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/components/inside-event/inside-event.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/components/inside-event/inside-event.component.ts ***!
      \*******************************************************************/

    /*! exports provided: InsideEventComponent */

    /***/
    function srcAppComponentsInsideEventInsideEventComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InsideEventComponent", function () {
        return InsideEventComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _vote_now_vote_now_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../vote-now/vote-now.component */
      "./src/app/components/vote-now/vote-now.component.ts");
      /* harmony import */


      var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/user.service */
      "./src/app/shared/user.service.ts");
      /* harmony import */


      var _inside_event_add_user_inside_event_add_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../inside-event-add-user/inside-event-add-user.component */
      "./src/app/components/inside-event-add-user/inside-event-add-user.component.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_shared_event_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/event.service */
      "./src/app/shared/event.service.ts");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var src_app_services_logic_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/logic.service */
      "./src/app/services/logic.service.ts");

      var InsideEventComponent = /*#__PURE__*/function () {
        function InsideEventComponent(route, modalController, logicService, eventService, userService, alertController) {
          _classCallCheck(this, InsideEventComponent);

          this.route = route;
          this.modalController = modalController;
          this.logicService = logicService;
          this.eventService = eventService;
          this.userService = userService;
          this.alertController = alertController;
          this.loading = true;
          this.contestant = [];
          this.contestantData = [];
          this.costPerVote = null;
          this.personalLink = src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].webVotingUrl;
          this.searchModel = {
            name: ''
          };
        }

        _createClass(InsideEventComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.route.params.subscribe(function (params) {
              _this17.eventId = params['id'];
            });
            console.log('inside event');
            this.getAllContentant();
          }
        }, {
          key: "initializeItems",
          value: function initializeItems() {
            this.contestant = this.contestantData;
          }
        }, {
          key: "copyInputMessage",
          value: function copyInputMessage(inputElement) {
            inputElement.select();
            document.execCommand('copy');
            inputElement.setSelectionRange(0, 0);
            this.logicService.presentToast('text  coppied');
          }
        }, {
          key: "getItems",
          value: function getItems() {
            // Reset items back to all of the items
            this.initializeItems(); // set val to the value of the searchbar

            var val = this.searchModel.name;
            console.log(val); // if the value is an empty string don't filter the items

            if (val && val.trim() != '') {
              // this.isItemAvailable = true;
              this.contestant = this.contestant.filter(function (item) {
                console.log(item);
                return item.nickname.indexOf(val) > -1;
              });
            }
          }
        }, {
          key: "getAllContentant",
          value: function getAllContentant() {
            var _this18 = this;

            console.log('getting contestant');
            this.eventService.getAllContestant(this.eventId).subscribe(function (res) {
              console.log(res);
              _this18.loading = false;
              _this18.contestant = res['contestant'];
              _this18.contestantData = _this18.contestant;
              _this18.costPerVote = res['cost_per_vote'];
            }, function (err) {
              _this18.loading = false;
              console.log(err);

              _this18.userService.longToast(err.error.msg);
            });
          }
        }, {
          key: "addUser",
          value: function addUser() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _this19 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      console.log(this.eventId);
                      _context14.next = 3;
                      return this.modalController.create({
                        component: _inside_event_add_user_inside_event_add_user_component__WEBPACK_IMPORTED_MODULE_3__["InsideEventAddUserComponent"],
                        componentProps: {
                          event_id: this.eventId
                        }
                      });

                    case 3:
                      modal = _context14.sent;
                      modal.onDidDismiss().then(function () {
                        // load all event
                        _this19.getAllContentant();
                      });
                      _context14.next = 7;
                      return modal.present();

                    case 7:
                      return _context14.abrupt("return", _context14.sent);

                    case 8:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "voteNow",
          value: function voteNow(event_id, contestant_id, image_url, nickname, my_code, fullname) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var _this20 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.modalController.create({
                        component: _vote_now_vote_now_component__WEBPACK_IMPORTED_MODULE_1__["VoteNowComponent"],
                        componentProps: {
                          event_id: event_id,
                          contestant_id: contestant_id,
                          image_url: image_url,
                          nickname: nickname,
                          my_code: my_code,
                          cost_per_vote: this.costPerVote,
                          fullname: fullname
                        }
                      });

                    case 2:
                      modal = _context15.sent;
                      modal.onDidDismiss().then(function () {
                        // load all event
                        _this20.getAllContentant();
                      });
                      _context15.next = 6;
                      return modal.present();

                    case 6:
                      return _context15.abrupt("return", _context15.sent);

                    case 7:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "deleteContestant",
          value: function deleteContestant(contestant) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var _this21 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.alertController.create({
                        header: 'Confirm!',
                        message: "Delete <strong>".concat(contestant.nickname, " </strong>!!!"),
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
                            console.log('Confirm Okay', contestant);
                            _this21.loading = true;

                            _this21.eventService.deleteContestant(contestant._id).subscribe(function (res) {
                              _this21.loading = false;

                              _this21.userService.generalToast(res['msg'], 2000);

                              _this21.getAllContentant();
                            }, function (err) {
                              _this21.loading = false;

                              _this21.userService.generalAlert(err.error.msg);
                            });
                          }
                        }]
                      });

                    case 2:
                      alert = _context16.sent;
                      _context16.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }]);

        return InsideEventComponent;
      }();

      InsideEventComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: src_app_services_logic_service__WEBPACK_IMPORTED_MODULE_9__["LogicService"]
        }, {
          type: src_app_shared_event_service__WEBPACK_IMPORTED_MODULE_7__["EventService"]
        }, {
          type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }];
      };

      InsideEventComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-inside-event',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./inside-event.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/inside-event/inside-event.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./inside-event.component.scss */
        "./src/app/components/inside-event/inside-event.component.scss"))["default"]]
      })], InsideEventComponent);
      /***/
    },

    /***/
    "./src/app/components/not-live/not-live.component.scss":
    /*!*************************************************************!*\
      !*** ./src/app/components/not-live/not-live.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsNotLiveNotLiveComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".card {\n  background: #396;\n}\n\n.rounded-top {\n  display: flex;\n  align-content: center;\n  width: 100px;\n  height: 30px;\n}\n\n.resp-container {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: auto;\n}\n\nh1 {\n  color: #396;\n  font-weight: 100;\n  font-size: 40px;\n  margin: 40px 0px 20px;\n}\n\n#clockdiv {\n  font-family: sans-serif;\n  color: #fdfcfc;\n  display: inline-block;\n  font-weight: bold;\n  text-align: center;\n  font-size: 30px;\n}\n\n#clockdiv > div {\n  padding: 5px;\n  border-radius: 3px;\n  background: #cae2dd;\n  display: inline-block;\n}\n\n#clockdiv div > span {\n  padding: 15px;\n  border-radius: 3px;\n  display: inline-block;\n}\n\n.smalltext {\n  padding-top: 5px;\n  font-size: 12px;\n}\n\n.toast-container {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  top: auto;\n  margin-bottom: 80px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ub3QtbGl2ZS9ub3QtbGl2ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdCQUFBO0FBQ0Q7O0FBRUE7RUFDQyxhQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNEOztBQUVBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Q7O0FBS0E7RUFDQyxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFGRDs7QUFJQTtFQUNDLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFERDs7QUFJQTtFQUNDLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUFERDs7QUFHQTtFQUNDLGFBQUE7RUFDQSxrQkFBQTtFQUVBLHFCQUFBO0FBREQ7O0FBR0E7RUFDQyxnQkFBQTtFQUNBLGVBQUE7QUFBRDs7QUFHQTtFQUNDLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBQUQiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25vdC1saXZlL25vdC1saXZlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuXHRiYWNrZ3JvdW5kOiAjMzk2O1xufVxuXG4ucm91bmRlZC10b3Age1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1jb250ZW50OiBjZW50ZXI7XG5cdHdpZHRoOiAxMDBweDtcblx0aGVpZ2h0OiAzMHB4O1xufVxuXG4ucmVzcC1jb250YWluZXIge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IGF1dG87XG59XG5cbi8vICB0aW1lciBzdHlsZXNcblxuLy8gdGltZXIgc3R5bGVzXG5oMSB7XG5cdGNvbG9yOiAjMzk2O1xuXHRmb250LXdlaWdodDogMTAwO1xuXHRmb250LXNpemU6IDQwcHg7XG5cdG1hcmdpbjogNDBweCAwcHggMjBweDtcbn1cbiNjbG9ja2RpdiB7XG5cdGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuXHRjb2xvcjogcmdiKDI1MywgMjUyLCAyNTIpO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMzBweDtcbn1cblxuI2Nsb2NrZGl2ID4gZGl2IHtcblx0cGFkZGluZzogNXB4O1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGJhY2tncm91bmQ6IHJnYigyMDIsIDIyNiwgMjIxKTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuI2Nsb2NrZGl2IGRpdiA+IHNwYW4ge1xuXHRwYWRkaW5nOiAxNXB4O1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdC8vICAgYmFja2dyb3VuZDogIzAwODE2QTtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnNtYWxsdGV4dCB7XG5cdHBhZGRpbmctdG9wOiA1cHg7XG5cdGZvbnQtc2l6ZTogMTJweDtcbn1cbi8vICAgbG9hZGluZ1xuLnRvYXN0LWNvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHRvcDogYXV0bztcblx0bWFyZ2luLWJvdHRvbTogODBweDtcblx0bGVmdDogMDtcblx0cmlnaHQ6IDA7XG5cdGJvdHRvbTogMDtcblx0ei1pbmRleDogOTk5O1xuXHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/components/not-live/not-live.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/components/not-live/not-live.component.ts ***!
      \***********************************************************/

    /*! exports provided: NotLiveComponent */

    /***/
    function srcAppComponentsNotLiveNotLiveComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotLiveComponent", function () {
        return NotLiveComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! animejs */
      "./node_modules/animejs/lib/anime.es.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_shared_game_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/game-service.service */
      "./src/app/shared/game-service.service.ts");
      /* harmony import */


      var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/user.service */
      "./src/app/shared/user.service.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var src_app_shared_account_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/account.service */
      "./src/app/shared/account.service.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");

      var NotLiveComponent = /*#__PURE__*/function () {
        function NotLiveComponent(gameService, userService, http, loadingController, alertController, toastController, accountService, platform, menu, sanitizer, router) {
          _classCallCheck(this, NotLiveComponent);

          this.gameService = gameService;
          this.userService = userService;
          this.http = http;
          this.loadingController = loadingController;
          this.alertController = alertController;
          this.toastController = toastController;
          this.accountService = accountService;
          this.platform = platform;
          this.menu = menu;
          this.sanitizer = sanitizer;
          this.router = router;
          this.low_balance = false;
          this.loading = false;
          this.slideCounter = 0;
        }

        _createClass(NotLiveComponent, [{
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.gameService.getAdminDate();
            console.log('will enter');
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            console.log('did enter');
          }
        }, {
          key: "ionViewCanEnter",
          value: function ionViewCanEnter() {
            console.log('can enter');
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loadBalance();
            this.appUser = localStorage.getItem('appUser');
            this.getYoutubeLink(); // this.doMagic();

            this.gameService.getGameTip();
            this.autoSlide();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log('on desotry');
            clearInterval(this.gameTime);
          }
        }, {
          key: "autoSlide",
          value: function autoSlide() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var _this22 = this;

              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      setInterval(function () {
                        _this22.gameService.slideCounter = _this22.gameService.gameTipArray.length;
                        _this22.gameService.slideCounter--;

                        _this22.mySlider.slideNext(3000, true);

                        console.log('slide to prev', _this22.gameService.slideCounter);
                      }, 9000);

                    case 1:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17);
            }));
          }
        }, {
          key: "presentNotice",
          value: function presentNotice() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var alert;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.alertController.create({
                        header: 'Notice!',
                        cssClass: 'success',
                        message: "<h6> Game will be live this saturday 6AM to 6PM...!</h6>  <br>\n               Click continue to study clue tips against saturday's game sessions.",
                        buttons: [{
                          text: 'continue',
                          cssClass: 'success',
                          handler: function handler(val) {
                            console.log('close notice');
                          }
                        }]
                      });

                    case 2:
                      alert = _context18.sent;
                      _context18.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "doMagic",
          value: function doMagic() {
            Object(animejs__WEBPACK_IMPORTED_MODULE_1__["default"])({
              targets: '#fiftyk',
              translateX: {
                value: 250,
                duration: 800
              },
              rotate: {
                value: 360,
                duration: 1800,
                easing: 'easeInOutSine'
              },
              scale: {
                value: 2,
                duration: 1600,
                delay: 800,
                easing: 'easeInOutQuart'
              },
              delay: 250
            });
          }
        }, {
          key: "clickSlidetoNext",
          value: function clickSlidetoNext() {
            console.log('slide to next');
            this.mySlider.slideNext();
          }
        }, {
          key: "clickSlidePrevious",
          value: function clickSlidePrevious() {
            console.log('slide to previous');
            this.mySlider.slidePrev();
          }
        }, {
          key: "getYoutubeLink",
          value: function getYoutubeLink() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var _this23 = this;

              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      this.gameService.getYoutubeLink().subscribe(function (res) {
                        var youtubeVideo = res['doc']['link'];
                        console.log('link', youtubeVideo);
                        _this23.safeVideo = _this23.sanitizer.bypassSecurityTrustResourceUrl(youtubeVideo);
                      }, function (err) {
                        _this23.userService.generalToast('youtube url not found!', 2000);
                      });

                    case 1:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "loadBalance",
          value: function loadBalance() {
            this.accountService.loadMyBalance();
          }
        }]);

        return NotLiveComponent;
      }();

      NotLiveComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_game_service_service__WEBPACK_IMPORTED_MODULE_4__["GameServiceService"]
        }, {
          type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: src_app_shared_account_service__WEBPACK_IMPORTED_MODULE_7__["AccountService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }];
      };

      NotLiveComponent.propDecorators = {
        mySlider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['mySlider', {
            "static": false
          }]
        }],
        box: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['box', {
            "static": false
          }]
        }],
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['items', {
            "static": false
          }]
        }],
        video_link: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['video_link', {
            "static": false
          }]
        }]
      };
      NotLiveComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-not-live',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./not-live.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/not-live/not-live.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./not-live.component.scss */
        "./src/app/components/not-live/not-live.component.scss"))["default"]]
      })], NotLiveComponent);
      /***/
    },

    /***/
    "./src/app/components/tabs/tabs.component.scss":
    /*!*****************************************************!*\
      !*** ./src/app/components/tabs/tabs.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsTabsTabsComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-tab-button {\n  color: var --ion-color-dark;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YWJzL3RhYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQywyQkFBQTtBQUNEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YWJzL3RhYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGFiLWJ1dHRvbiB7XG5cdGNvbG9yOiB2YXIgKC0taW9uLWNvbG9yLWRhcmspO1xufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/components/tabs/tabs.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/components/tabs/tabs.component.ts ***!
      \***************************************************/

    /*! exports provided: TabsComponent */

    /***/
    function srcAppComponentsTabsTabsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsComponent", function () {
        return TabsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var TabsComponent = /*#__PURE__*/function () {
        function TabsComponent() {
          _classCallCheck(this, TabsComponent);
        }

        _createClass(TabsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TabsComponent;
      }();

      TabsComponent.ctorParameters = function () {
        return [];
      };

      TabsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tabs.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tabs/tabs.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tabs.component.scss */
        "./src/app/components/tabs/tabs.component.scss"))["default"]]
      })], TabsComponent);
      /***/
    },

    /***/
    "./src/app/components/vote-now/vote-now.component.scss":
    /*!*************************************************************!*\
      !*** ./src/app/components/vote-now/vote-now.component.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsVoteNowVoteNowComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".image {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100px;\n  height: 100px;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92b3RlLW5vdy92b3RlLW5vdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0tBQUEsaUJBQUE7RUFDSixZQUFBO0VBQ0EsYUFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdm90ZS1ub3cvdm90ZS1ub3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2V7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG53aWR0aDogMTAwcHg7XG5oZWlnaHQ6IDEwMHB4O1xuLy8gYWxpZ24tc2VsZjogY2VudGVyO1xubWFyZ2luLWxlZnQ6IGF1dG87XG5tYXJnaW4tcmlnaHQ6IGF1dG87XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/components/vote-now/vote-now.component.ts":
    /*!***********************************************************!*\
      !*** ./src/app/components/vote-now/vote-now.component.ts ***!
      \***********************************************************/

    /*! exports provided: VoteNowComponent */

    /***/
    function srcAppComponentsVoteNowVoteNowComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VoteNowComponent", function () {
        return VoteNowComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/user.service */
      "./src/app/shared/user.service.ts");
      /* harmony import */


      var src_app_shared_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/event.service */
      "./src/app/shared/event.service.ts");
      /* harmony import */


      var _shared_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../shared/account.service */
      "./src/app/shared/account.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

      var VoteNowComponent = /*#__PURE__*/function () {
        function VoteNowComponent(modalController, navParams, accountService, eventService, userService) {
          var _this24 = this;

          _classCallCheck(this, VoteNowComponent);

          this.modalController = modalController;
          this.navParams = navParams;
          this.accountService = accountService;
          this.eventService = eventService;
          this.userService = userService;
          this.loading = false;
          this.properties = {
            event_id: '',
            contestant_id: '',
            image_url: '',
            nickname: '',
            my_code: '',
            cost: null,
            purchase: 0,
            fullname: ''
          };
          accountService.loadMyBalance();
          console.log(navParams.get('event_id'));
          this.properties.event_id = navParams.get('event_id');
          this.properties.contestant_id = navParams.get('contestant_id');
          this.properties.image_url = navParams.get('image_url');
          this.properties.nickname = navParams.get('nickname');
          this.properties.my_code = navParams.get('my_code');
          this.properties.cost = navParams.get('cost_per_vote');
          this.properties.fullname = navParams.get('fullname');
          setTimeout(function () {
            console.log(_this24.properties);
          }, 3000);
        }

        _createClass(VoteNowComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "closeModal",
          value: function closeModal() {
            this.modalController.dismiss();
          }
        }, {
          key: "add",
          value: function add() {
            this.properties.purchase++;
          }
        }, {
          key: "remove",
          value: function remove() {
            this.properties.purchase--;
          }
        }, {
          key: "finalize",
          value: function finalize() {
            var _this25 = this;

            var balance = this.accountService.accountBalance;
            var costPerVate = this.properties.purchase * this.properties.cost;
            var totalCost = balance - costPerVate;

            if (totalCost > 1) {
              console.log('we can bid for this');
              this.loading = true;
              this.eventService.submitVote(this.properties).subscribe(function (res) {
                _this25.loading = false;

                _this25.userService.shortToast(res['msg']);

                _this25.closeModal();
              }, function (err) {
                _this25.loading = false;

                _this25.userService.longToast(err.error.msg);
              });
            } else {
              this.userService.longToast('balance is to low!');
              console.log('balance to low for this purchase');
            }
          }
        }]);

        return VoteNowComponent;
      }();

      VoteNowComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]
        }, {
          type: _shared_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
        }, {
          type: src_app_shared_event_service__WEBPACK_IMPORTED_MODULE_2__["EventService"]
        }, {
          type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
        }];
      };

      VoteNowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-vote-now',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./vote-now.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vote-now/vote-now.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./vote-now.component.scss */
        "./src/app/components/vote-now/vote-now.component.scss"))["default"]]
      })], VoteNowComponent);
      /***/
    },

    /***/
    "./src/app/components/web-voting/web-voting.component.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/components/web-voting/web-voting.component.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsWebVotingWebVotingComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2ViLXZvdGluZy93ZWItdm90aW5nLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/components/web-voting/web-voting.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/components/web-voting/web-voting.component.ts ***!
      \***************************************************************/

    /*! exports provided: WebVotingComponent */

    /***/
    function srcAppComponentsWebVotingWebVotingComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebVotingComponent", function () {
        return WebVotingComponent;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var src_app_services_logic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/logic.service */
      "./src/app/services/logic.service.ts");
      /* harmony import */


      var src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/user.service */
      "./src/app/shared/user.service.ts");

      var WebVotingComponent = /*#__PURE__*/function () {
        function WebVotingComponent(userService, router, activateRoute, logicService) {
          _classCallCheck(this, WebVotingComponent);

          this.userService = userService;
          this.router = router;
          this.activateRoute = activateRoute;
          this.logicService = logicService;
          this.properties = {
            event_id: '',
            contestant_id: '',
            image_url: '',
            nickname: '',
            my_code: '',
            cost: null,
            purchase: 0,
            fullname: ''
          };
        }

        _createClass(WebVotingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this26 = this;

            this.loading = true;
            this.activateRoute.queryParams.subscribe(function (params) {
              _this26.contestanId = _this26.activateRoute.snapshot.params['id'];

              if (_this26.contestanId) {
                var data = {
                  id: _this26.contestanId
                };

                _this26.userService.getContestantById(data).subscribe(function (contestant) {
                  console.log(contestant);
                  _this26.loading = false;
                  _this26.properties.contestant_id = contestant['contestant']._id;
                  _this26.properties.event_id = contestant['contestant'].event_id;
                  _this26.properties.fullname = contestant['contestant'].fullname;
                  _this26.properties.image_url = contestant['contestant'].image_url;
                  _this26.properties.my_code = contestant['contestant'].my_code;
                  _this26.properties.nickname = contestant['contestant'].nickname;
                  _this26.properties.cost = contestant['cost_per_vote'];
                }, function (err) {
                  _this26.loading = false;

                  _this26.logicService.presentAlert('Error getting contestant', ' it could be cause by connection error, check your connection and try again');

                  console.log(err);
                });
              }
            });
          }
        }, {
          key: "add",
          value: function add() {
            this.properties.purchase++;
          }
        }, {
          key: "remove",
          value: function remove() {
            this.properties.purchase--;
          }
        }, {
          key: "finalize",
          value: function finalize() {//  final submission here
          }
        }]);

        return WebVotingComponent;
      }();

      WebVotingComponent.ctorParameters = function () {
        return [{
          type: src_app_shared_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_logic_service__WEBPACK_IMPORTED_MODULE_3__["LogicService"]
        }];
      };

      WebVotingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-web-voting',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./web-voting.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/web-voting/web-voting.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./web-voting.component.scss */
        "./src/app/components/web-voting/web-voting.component.scss"))["default"]]
      })], WebVotingComponent);
      /***/
    },

    /***/
    "./src/app/game.pipe.ts":
    /*!******************************!*\
      !*** ./src/app/game.pipe.ts ***!
      \******************************/

    /*! exports provided: GamePipe */

    /***/
    function srcAppGamePipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GamePipe", function () {
        return GamePipe;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var GamePipe = /*#__PURE__*/function () {
        function GamePipe() {
          _classCallCheck(this, GamePipe);
        }

        _createClass(GamePipe, [{
          key: "transform",
          value: function transform(value) {
            return null;
          }
        }]);

        return GamePipe;
      }();

      GamePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'game'
      })], GamePipe);
      /***/
    },

    /***/
    "./src/app/merchant.guard.ts":
    /*!***********************************!*\
      !*** ./src/app/merchant.guard.ts ***!
      \***********************************/

    /*! exports provided: MerchantGuard */

    /***/
    function srcAppMerchantGuardTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MerchantGuard", function () {
        return MerchantGuard;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/user.service */
      "./src/app/shared/user.service.ts");

      var MerchantGuard = /*#__PURE__*/function () {
        function MerchantGuard(userService, router) {
          _classCallCheck(this, MerchantGuard);

          this.userService = userService;
          this.router = router;
        }

        _createClass(MerchantGuard, [{
          key: "canActivate",
          value: function canActivate(next, state) {
            this.userRole = this.userService.getRole();
            console.log('INSIDE ADMIN CANACTIVATE', this.userRole);
            var merchant = 'MERCHANT';

            if (this.userRole !== merchant) {
              this.router.navigateByUrl('/gamesection');
              this.userService.deleteToken();
              return false;
            }

            return true;
          }
        }]);

        return MerchantGuard;
      }();

      MerchantGuard.ctorParameters = function () {
        return [{
          type: _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      MerchantGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], MerchantGuard);
      /***/
    },

    /***/
    "./src/app/pipes/safe-url.pipe.ts":
    /*!****************************************!*\
      !*** ./src/app/pipes/safe-url.pipe.ts ***!
      \****************************************/

    /*! exports provided: SafeResourceUrlPipe */

    /***/
    function srcAppPipesSafeUrlPipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SafeResourceUrlPipe", function () {
        return SafeResourceUrlPipe;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

      var SafeResourceUrlPipe = /*#__PURE__*/function () {
        function SafeResourceUrlPipe(domSanitizer) {
          _classCallCheck(this, SafeResourceUrlPipe);

          this.domSanitizer = domSanitizer;
        }

        _createClass(SafeResourceUrlPipe, [{
          key: "transform",
          value: function transform(url) {
            return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
          }
        }]);

        return SafeResourceUrlPipe;
      }();

      SafeResourceUrlPipe.ctorParameters = function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }];
      };

      SafeResourceUrlPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'safeResourceUrl'
      })], SafeResourceUrlPipe);
      /***/
    },

    /***/
    "./src/app/privacy-policy/privacy-policy.component.scss":
    /*!**************************************************************!*\
      !*** ./src/app/privacy-policy/privacy-policy.component.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPrivacyPolicyPrivacyPolicyComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/privacy-policy/privacy-policy.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/privacy-policy/privacy-policy.component.ts ***!
      \************************************************************/

    /*! exports provided: PrivacyPolicyComponent */

    /***/
    function srcAppPrivacyPolicyPrivacyPolicyComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrivacyPolicyComponent", function () {
        return PrivacyPolicyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var PrivacyPolicyComponent = /*#__PURE__*/function () {
        function PrivacyPolicyComponent() {
          _classCallCheck(this, PrivacyPolicyComponent);
        }

        _createClass(PrivacyPolicyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PrivacyPolicyComponent;
      }();

      PrivacyPolicyComponent.ctorParameters = function () {
        return [];
      };

      PrivacyPolicyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-privacy-policy',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./privacy-policy.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/privacy-policy/privacy-policy.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./privacy-policy.component.scss */
        "./src/app/privacy-policy/privacy-policy.component.scss"))["default"]]
      })], PrivacyPolicyComponent);
      /***/
    },

    /***/
    "./src/app/services/behavour.service.ts":
    /*!**********************************************!*\
      !*** ./src/app/services/behavour.service.ts ***!
      \**********************************************/

    /*! exports provided: BehavourService */

    /***/
    function srcAppServicesBehavourServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BehavourService", function () {
        return BehavourService;
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


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var BehavourService = /*#__PURE__*/function () {
        function BehavourService() {
          _classCallCheck(this, BehavourService);

          this.gameAmount = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        }

        _createClass(BehavourService, [{
          key: "setGameAmount",
          value: function setGameAmount(amount) {
            this.gameAmount.next(amount);
          }
        }, {
          key: "getGameAmount",
          value: function getGameAmount() {
            return this.gameAmount;
          }
        }]);

        return BehavourService;
      }();

      BehavourService.ctorParameters = function () {
        return [];
      };

      BehavourService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], BehavourService);
      /***/
    },

    /***/
    "./src/app/services/logic.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/services/logic.service.ts ***!
      \*******************************************/

    /*! exports provided: LogicService */

    /***/
    function srcAppServicesLogicServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LogicService", function () {
        return LogicService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

      var LogicService = /*#__PURE__*/function () {
        function LogicService(alertController, toastController) {
          _classCallCheck(this, LogicService);

          this.alertController = alertController;
          this.toastController = toastController;
        }

        _createClass(LogicService, [{
          key: "presentSucess",
          value: function presentSucess(header, msg, psitiveBtbText) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var resolveFunction, promise, toast;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      promise = new Promise(function (resolve) {
                        resolveFunction = resolve;
                      });
                      _context20.next = 3;
                      return this.toastController.create({
                        header: "".concat(header),
                        message: "".concat(msg),
                        position: 'bottom',
                        duration: 3000,
                        buttons: [{
                          text: "".concat(psitiveBtbText),
                          side: 'start',
                          icon: 'flash',
                          handler: function handler() {
                            return resolveFunction(true);
                          }
                        }]
                      });

                    case 3:
                      toast = _context20.sent;
                      toast.present();

                    case 5:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }, {
          key: "presentToast",
          value: function presentToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var toast;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return this.toastController.create({
                        message: msg,
                        duration: 2000
                      });

                    case 2:
                      toast = _context21.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "alertDialog",
          value: function alertDialog(head, msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var resolveFunction, promise, alert;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      promise = new Promise(function (resolve) {
                        resolveFunction = resolve;
                      });
                      _context22.next = 3;
                      return this.alertController.create({
                        header: head,
                        message: msg,
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel'
                        }, {
                          text: 'Continue',
                          handler: function handler() {
                            return resolveFunction(true);
                          }
                        }]
                      });

                    case 3:
                      alert = _context22.sent;
                      _context22.next = 6;
                      return alert.present();

                    case 6:
                      return _context22.abrupt("return", promise);

                    case 7:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(header, message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var alert;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _context23.next = 2;
                      return this.alertController.create({
                        header: "".concat(header),
                        message: "".concat(message),
                        buttons: [{
                          text: 'Okay',
                          handler: function handler() {
                            console.log('Confirm Okay');
                          }
                        }]
                      });

                    case 2:
                      alert = _context23.sent;
                      _context23.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this);
            }));
          }
        }]);

        return LogicService;
      }();

      LogicService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      LogicService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], LogicService);
      /***/
    },

    /***/
    "./src/app/shared/account.service.ts":
    /*!*******************************************!*\
      !*** ./src/app/shared/account.service.ts ***!
      \*******************************************/

    /*! exports provided: AccountService */

    /***/
    function srcAppSharedAccountServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountService", function () {
        return AccountService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");

      var AccountService = /*#__PURE__*/function () {
        function AccountService(http, router) {
          _classCallCheck(this, AccountService);

          this.http = http;
          this.router = router;
          this.accountBalance = null;
          this.noAuthHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              NoAuth: "True"
            })
          };
          this.AuthHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set("Authorization", "Bearer ".concat(localStorage.getItem("token")))
          };
        }

        _createClass(AccountService, [{
          key: "loadMyBalance",
          value: function loadMyBalance() {
            var _this27 = this;

            console.log("GETTING BALANCE");
            this.getLeaderGameSection();
            this.appUser = localStorage.getItem("appUser");
            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + "/get-account-balance").subscribe(function (value) {
              _this27.accountBalance = value["balance"];

              _this27.getLeaderboard();

              _this27.user_id = localStorage.getItem("user_id");
              _this27.appUsername = localStorage.getItem("appUser");
            });
          }
        }, {
          key: "getLeaderboard",
          value: function getLeaderboard() {
            // this.getLeaderGameSection();
            // tslint:disable-next-line: align
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + "/get-leaderboard");
          }
        }, {
          key: "getWinners",
          value: function getWinners() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + "/get-winners");
          }
        }, {
          key: "activatePromo",
          value: function activatePromo(promo) {
            return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/activate-promo', promo);
          }
        }, {
          key: "merchantTransfer",
          value: function merchantTransfer(username) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/merchant-transfer', username);
          }
        }, {
          key: "getLeaderGameSection",
          value: function getLeaderGameSection() {
            var _this28 = this;

            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + "/get-leaderboard-game-section").subscribe(function (value) {
              _this28.leaderboardGameSection$ = value["document"];
            });
          }
        }, {
          key: "loadBalanceForCalculation",
          value: function loadBalanceForCalculation() {
            this.loadMyBalance();
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + "/get-account-balance");
          }
        }, {
          key: "deductGameAmountFromAccount",
          value: function deductGameAmountFromAccount() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + "/deduct-game-amount");
          }
        }, {
          key: "myTransaction",
          value: function myTransaction() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + "/get-my-transaction");
          }
        }, {
          key: "getManualTransactions",
          value: function getManualTransactions() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + "/get-manual-transactions");
          }
        }, {
          key: "cashout",
          value: function cashout(amount) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/user-cashout', amount);
          }
        }, {
          key: "confirmTransaction",
          value: function confirmTransaction(accountId) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + "/confirm-transaction".concat(accountId));
          }
        }, {
          key: "cashoutOutRequest",
          value: function cashoutOutRequest() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/cash-out-request');
          }
        }, {
          key: "declineTransaction",
          value: function declineTransaction(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + "/decline-transaction".concat(id));
          }
        }, {
          key: "settleLeader",
          value: function settleLeader(id) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + "/settle-leader".concat(id));
          }
        }, {
          key: "queryUser",
          value: function queryUser(username) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + "/query-username", username);
          }
        }, {
          key: "payWinner",
          value: function payWinner(user_doc) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/pay-winner', user_doc);
          }
        }, {
          key: "payCashout",
          value: function payCashout(user) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiBaseUrl + '/pay-cashout', user);
          }
        }]);

        return AccountService;
      }();

      AccountService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      AccountService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root"
      })], AccountService);
      /***/
    },

    /***/
    "./src/app/shared/demo-questions.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/shared/demo-questions.service.ts ***!
      \**************************************************/

    /*! exports provided: DemoQuestionsService */

    /***/
    function srcAppSharedDemoQuestionsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DemoQuestionsService", function () {
        return DemoQuestionsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var DemoQuestionsService = function DemoQuestionsService() {
        _classCallCheck(this, DemoQuestionsService);

        this.demoQuestions = [{
          question: 'How many valves does a trumpet have?',
          answer: 'Three',
          option1: 'Four',
          option2: 'Three',
          option3: 'Eight',
          option4: 'Seven'
        }, {
          question: "The vertical stripes of Nigeria's flag are: ",
          answer: 'Green/White/Green',
          option1: 'Green/White/Red',
          option2: 'Red/Green/White',
          option3: 'White/Green/White',
          option4: 'Green/White/Green'
        }, {
          question: "The Punch, Thisday, and Nigerian Tribune are long-standing popular Nigerian what? ",
          answer: 'Newspaper',
          option1: 'Movies',
          option2: 'Newspaper',
          option3: 'Politics',
          option4: 'None'
        }, {
          question: "Nigeria's international telephone country code is: ",
          answer: '234',
          option1: '234',
          option2: '502',
          option3: '235',
          option4: '342'
        }, {
          question: "What is Nigeria's official language? ",
          answer: 'English',
          option1: 'Hausa',
          option2: 'English',
          option3: 'Yoruba',
          option4: 'Igbo'
        }, {
          question: "In the 2010s Nigeria's population is approximately how many million: ",
          answer: '174',
          option1: '17',
          option2: '174',
          option3: '211',
          option4: '251'
        }, {
          question: "Nigeria is named after a: ",
          answer: 'River',
          option1: 'People',
          option2: 'Lake',
          option3: 'Mountain',
          option4: 'River'
        }, {
          question: "The national animal emblem of Nigeria is an: ",
          answer: 'Eagle',
          option1: 'Elephant',
          option2: 'Eagle',
          option3: 'Elk',
          option4: 'Earwig'
        }, {
          question: "Nigeria's internet country top level domain is:",
          answer: '.ng',
          option1: '.ni',
          option2: '.nr',
          option3: '.ng',
          option4: '.ne'
        }, {
          question: "Chappal Waddi is Nigeria's:",
          answer: 'Highest mountain',
          option1: 'Highest mountain',
          option2: 'Oldest church',
          option3: 'Longest river',
          option4: 'Biggest lake'
        }, {
          question: "Enugu, Kano Pillars, Heartland, and Lobi Stars are famous Nigerian:",
          answer: 'Football clubs',
          option1: 'TV Soaps',
          option2: 'National parks',
          option3: 'Football clubs',
          option4: ' Biggest lake'
        }, {
          question: "Nigeria is divided into how many geopolitical zones?",
          answer: '6',
          option1: '12',
          option2: '6',
          option3: '4',
          option4: '7'
        }, {
          question: " What was the first capital city in Nigeria?",
          answer: 'Calabar',
          option1: 'Lagos',
          option2: 'Abuja',
          option3: 'Calabar',
          option4: 'Akure'
        }, {
          question: "What is the name of Nigerian senior national team in football (men team)?",
          answer: 'Super Eagles',
          option1: 'Flying Eagles',
          option2: 'Super Eaglet',
          option3: 'Super Eagles',
          option4: 'Super Falcons'
        }, {
          question: "Who gave Nigeria her name?",
          answer: 'Flora Shaw',
          option1: 'Queen Elizabeth',
          option2: 'Flora Shaw',
          option3: 'Sanni Abacha',
          option4: 'Abraham Lincon'
        }];
      };

      DemoQuestionsService.ctorParameters = function () {
        return [];
      };

      DemoQuestionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DemoQuestionsService);
      /***/
    },

    /***/
    "./src/app/shared/event.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/shared/event.service.ts ***!
      \*****************************************/

    /*! exports provided: EventService */

    /***/
    function srcAppSharedEventServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EventService", function () {
        return EventService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");

      var EventService = /*#__PURE__*/function () {
        function EventService(http) {
          _classCallCheck(this, EventService);

          this.http = http;
          this.noAuthHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              NoAuth: 'True'
            })
          };
          this.AuthHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Authorization', "Bearer ".concat(localStorage.getItem('token')))
          };
        }

        _createClass(EventService, [{
          key: "submitPagent",
          value: function submitPagent(form) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/submit-pagent', form);
          }
        }, {
          key: "getAllEvent",
          value: function getAllEvent() {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/get-all-event');
          }
        }, {
          key: "submitEvent",
          value: function submitEvent(event) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/submit-event', event);
          }
        }, {
          key: "createContestTant",
          value: function createContestTant(contestant) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/create-contestant', contestant);
          }
        }, {
          key: "getAllContestant",
          value: function getAllContestant(id) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/get-contestant".concat(id));
          }
        }, {
          key: "submitVote",
          value: function submitVote(votes) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/submit-vote', votes);
          }
        }, {
          key: "submitVoteForWeb",
          value: function submitVoteForWeb(votes) {
            return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/submit-vote-web', votes);
          }
        }, {
          key: "deleteContestant",
          value: function deleteContestant(id) {
            return this.http["delete"](src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/delete-contestant".concat(id));
          }
        }, {
          key: "deleteEvent",
          value: function deleteEvent(id) {
            return this.http["delete"](src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/delete-event".concat(id));
          }
        }]);

        return EventService;
      }();

      EventService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      EventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], EventService);
      /***/
    },

    /***/
    "./src/app/shared/game-service.service.ts":
    /*!************************************************!*\
      !*** ./src/app/shared/game-service.service.ts ***!
      \************************************************/

    /*! exports provided: GameServiceService */

    /***/
    function srcAppSharedGameServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameServiceService", function () {
        return GameServiceService;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var GameServiceService = /*#__PURE__*/function () {
        function GameServiceService(http, alertController, toastController, router) {
          _classCallCheck(this, GameServiceService);

          this.http = http;
          this.alertController = alertController;
          this.toastController = toastController;
          this.router = router;
          this.gameTipArray = [];
          this.slideCounter = 0;
          this.noAuthHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
              NoAuth: 'True'
            })
          };
          this.AuthHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]().set('Authorization', "Bearer ".concat(localStorage.getItem('token')))
          };
          this.getGameTip();
          localStorage.setItem('GAMELIVE', 'true');
        } //  jan 10,2019 06:00:00
        // timer
        // App Date


        _createClass(GameServiceService, [{
          key: "getAdminDate",
          value: function getAdminDate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var _this29 = this;

              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      clearInterval(this.gameTime);
                      this.loading = true;
                      this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/get-admin-date').subscribe(function (res) {
                        _this29.loading = false;
                        _this29.applicationDate = res['doc']['appdate'];
                        _this29.serverVersion = res['version']; //  console.log(this.serverVersion);

                        _this29.gameTimer(); //  setTimeout(()=> {
                        //    if(this.serverVersion > environment.versionCode){
                        //       this.presentUpdate();
                        //    }
                        //  },3000);

                      });

                    case 3:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this);
            }));
          }
        }, {
          key: "gameTimer",
          value: function gameTimer() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              var _this30 = this;

              var fake_date, appDATE, deadline;
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      fake_date = 'aug 29,2020 12:10:00';
                      appDATE = this.applicationDate;
                      deadline = new Date(appDATE).getTime();
                      this.gameTime = setInterval(function () {
                        var now = new Date().getTime();
                        var t = deadline - now;
                        _this30.timeDays = Math.floor(t / (1000 * 60 * 60 * 24)).toString();
                        _this30.timeHours = Math.floor(t % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)).toString();
                        _this30.timeMinute = Math.floor(t % (1000 * 60 * 60) / (1000 * 60)).toString();
                        _this30.timeSeconds = Math.floor(t % (1000 * 60) / 1000).toString();

                        if (t < 0) {
                          console.log('GAME IS LIVE....');
                          localStorage.setItem('GAMELIVE', 'true');
                          clearInterval(_this30.gameTime);
                          _this30.timeDays = '0';
                          _this30.timeHours = '0';
                          _this30.timeMinute = '0';
                          _this30.timeSeconds = '0';
                        } else {
                          console.log('GAME NOT LIVE....');
                          localStorage.setItem('GAMELIVE', 'false');
                        }

                        console.log('fake pass');
                      }, 1000);

                    case 4:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this);
            }));
          }
        }, {
          key: "getGameTip",
          value: function getGameTip() {
            var _this31 = this;

            this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/game-fun-fact-tips').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(3)).subscribe(function (tips) {
              _this31.gameTipArray = tips['gamestips'];
            });
          }
        }, {
          key: "sendSms",
          value: function sendSms(sms) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/send-sms', sms);
          }
        }, {
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              var toast;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      _context26.next = 2;
                      return this.toastController.create({
                        header: 'Info ',
                        message: "".concat(message),
                        position: 'middle',
                        duration: 3000
                      });

                    case 2:
                      toast = _context26.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this);
            }));
          }
        }, {
          key: "setAdminDate",
          value: function setAdminDate(date) {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/submit-admin-date".concat(date));
          }
        }, {
          key: "setYoutubeDate",
          value: function setYoutubeDate(link) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + "/submit-youtube-link", link);
          }
        }, {
          key: "getYoutubeLink",
          value: function getYoutubeLink() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/get-youtube-link');
          }
        }, {
          key: "createNewContestant",
          value: function createNewContestant(contestant) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/create-new-contestant', contestant);
          }
        }, {
          key: "setGameAmount",
          value: function setGameAmount(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/save-game-amount', data);
          }
        }, {
          key: "getGameAmount",
          value: function getGameAmount() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/get-game-amount');
          }
        }, {
          key: "savePromo",
          value: function savePromo(data) {
            return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/save-promo', data);
          }
        }, {
          key: "getPromo",
          value: function getPromo() {
            return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + '/get-promo');
          }
        }, {
          key: "presentUpdate",
          value: function presentUpdate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var alert;
              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      _context27.next = 2;
                      return this.alertController.create({
                        header: ' Update!',
                        cssClass: 'success',
                        message: "<h6>a new update is available.</h6>  <br>",
                        buttons: [{
                          text: 'update now',
                          cssClass: 'success',
                          handler: function handler(val) {
                            window.location.href = 'https://play.google.com/store/apps/details?id=ayawiesoft.swagasoft';
                          }
                        }]
                      });

                    case 2:
                      alert = _context27.sent;
                      _context27.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this);
            }));
          }
        }]);

        return GameServiceService;
      }();

      GameServiceService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      };

      GameServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
        providedIn: 'root'
      })], GameServiceService);
      /***/
    },

    /***/
    "./src/app/shared/user.service.ts":
    /*!****************************************!*\
      !*** ./src/app/shared/user.service.ts ***!
      \****************************************/

    /*! exports provided: UserService */

    /***/
    function srcAppSharedUserServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_shared_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/account.service */
      "./src/app/shared/account.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/fesm2015/http.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/fesm2015/router.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! jwt-decode */
      "./node_modules/jwt-decode/build/jwt-decode.esm.js");

      var UserService = /*#__PURE__*/function () {
        function UserService(http, accountService, router, alertController, toastController) {
          _classCallCheck(this, UserService);

          //     this.network.onDisconnect().subscribe(()=> {
          //   console.log('CONNETION LOST');
          //   this.networkDisconnet = true;
          // });
          this.http = http;
          this.accountService = accountService;
          this.router = router;
          this.alertController = alertController;
          this.toastController = toastController;
          this.networkDisconnet = false;
          this.noAuthHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              NoAuth: 'True'
            })
          };
          this.AuthHeader = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Authorization', "Bearer ".concat(localStorage.getItem('token')))
          }; //           this.network.onConnect().subscribe(()=> {
          //   setTimeout(()=> {
          //     console.log(' WE ARE BACK IN CONNECTION');
          //     this.networkDisconnet = false;
          //   });
          // });
        }

        _createClass(UserService, [{
          key: "shortToast",
          value: function shortToast(messages) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              var toast;
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      _context28.next = 2;
                      return this.toastController.create({
                        message: messages,
                        position: 'middle',
                        duration: 1000
                      });

                    case 2:
                      toast = _context28.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this);
            }));
          }
        }, {
          key: "longToast",
          value: function longToast(messages) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              var toast;
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      _context29.next = 2;
                      return this.toastController.create({
                        message: messages,
                        position: 'middle',
                        duration: 3000
                      });

                    case 2:
                      toast = _context29.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this);
            }));
          }
        }, {
          key: "generalToast",
          value: function generalToast(message, duration) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
              var toast;
              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      _context30.next = 2;
                      return this.toastController.create({
                        message: "".concat(message),
                        duration: duration
                      });

                    case 2:
                      toast = _context30.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this);
            }));
          }
        }, {
          key: "generalAlert",
          value: function generalAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
              var alert;
              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      _context31.next = 2;
                      return this.alertController.create({
                        header: 'Alert',
                        message: "".concat(message),
                        buttons: ['OK']
                      });

                    case 2:
                      alert = _context31.sent;
                      _context31.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this);
            }));
          }
        }, {
          key: "registerUser",
          value: function registerUser(user) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + '/register', user, this.noAuthHeader);
          } // password reset

        }, {
          key: "confirmNumber",
          value: function confirmNumber(number) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "/confirm-user-number".concat(number), this.noAuthHeader);
          }
        }, {
          key: "confirmOTP",
          value: function confirmOTP(otp) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "/confirm-user-otp".concat(otp), this.noAuthHeader);
          }
        }, {
          key: "postQuestion",
          value: function postQuestion(question) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "/post-question", question);
          }
        }, {
          key: "getAllQuestions",
          value: function getAllQuestions() {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + '/get-all-questions');
          }
        }, {
          key: "login",
          value: function login(credentials) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + '/login', credentials, this.noAuthHeader);
          } // Random tips on Random

        }, {
          key: "getRandomTips",
          value: function getRandomTips() {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + '/get-random-tip');
          }
        }, {
          key: "findByCategory",
          value: function findByCategory(category) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "/find-by-category".concat(category));
          }
        }, {
          key: "playByCategory",
          value: function playByCategory(category) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "/play-by-category".concat(category));
          }
        }, {
          key: "getLiveQuestionAmount",
          value: function getLiveQuestionAmount() {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + '/get-live-questions-amount');
          }
        }, {
          key: "changeQuestionStatusToFalse",
          value: function changeQuestionStatusToFalse(id) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "/change-to-false".concat(id));
          }
        }, {
          key: "changeQuestionStatusToTrue",
          value: function changeQuestionStatusToTrue(id) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "/change-to-true".concat(id));
          }
        }, {
          key: "getSingleQuestion",
          value: function getSingleQuestion(id) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "/get-single-question".concat(id));
          }
        }, {
          key: "upDateQuestion",
          value: function upDateQuestion(question) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "/update-question", question);
          }
        }, {
          key: "deleteQuestion",
          value: function deleteQuestion(id) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "/delete-question".concat(id));
          }
        }, {
          key: "getContestantById",
          value: function getContestantById(dataId) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "/get-contestant-by-id", dataId, this.noAuthHeader);
          }
        }, {
          key: "postTransaction",
          value: function postTransaction(tranx) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "/submit-transaction", tranx);
          }
        }, {
          key: "postManualTransaction",
          value: function postManualTransaction(tranx) {}
        }, {
          key: "postManualTrans",
          value: function postManualTrans(tranx) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "/submit-manual-transaction", tranx);
          }
        }, {
          key: "loadBalance",
          value: function loadBalance() {
            this.accountService.getLeaderGameSection();
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + '/load-balance');
          }
        }, {
          key: "saveUserProfile",
          value: function saveUserProfile(credentials) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + '/save-user-profile', credentials);
          }
        }, {
          key: "getUserProfile",
          value: function getUserProfile() {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + '/get-user-profile');
          }
        }, {
          key: "getRandomQuestionsForGame",
          value: function getRandomQuestionsForGame() {
            this.accountService.getLeaderGameSection();
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + '/get-random-questions-for-game');
          }
        }, {
          key: "getAllLiveQuestions",
          value: function getAllLiveQuestions() {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + '/get-all-live-questions');
          }
        }, {
          key: "resetPassword",
          value: function resetPassword(credentials) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + '/reset-password', credentials);
          }
        }, {
          key: "postQuestionRecord",
          value: function postQuestionRecord(record) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + '/post-game-record', record);
          }
        }, {
          key: "searchQuestion",
          value: function searchQuestion(words) {
            return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + '/search-question', words);
          }
        }, {
          key: "getGameRecord",
          value: function getGameRecord() {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + '/get-game-record');
          }
        }, {
          key: "deleteGameRecord",
          value: function deleteGameRecord(id) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiBaseUrl + "/delete-game-record".concat(id));
          }
        }, {
          key: "getEmail",
          value: function getEmail() {
            try {
              var payLoad = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_7__["default"])(this.getToken());
              var email = payLoad['email'];
              return email;
            } catch (error) {}
          }
        }, {
          key: "getRole",
          value: function getRole() {
            try {
              var payLoad = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_7__["default"])(this.getToken());
              var role = payLoad['role'];
              return role;
            } catch (error) {}
          }
        }, {
          key: "checkForAdmin",
          value: function checkForAdmin() {
            try {
              var payLoad = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_7__["default"])(this.getToken());
              var role = payLoad['role'];

              if (role == 'ADMIN') {
                return true;
              } else {
                return false;
              }
            } catch (error) {}
          }
        }, {
          key: "getUsername",
          value: function getUsername() {
            try {
              var payLoad = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_7__["default"])(this.getToken());
              var role = payLoad['username'];
              return role;
            } catch (error) {}
          }
        }, {
          key: "getAuthId",
          value: function getAuthId() {
            try {
              var payLoad = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_7__["default"])(this.getToken());
              var user_id = payLoad['_id'];
              return user_id;
            } catch (error) {}
          }
        }, {
          key: "setToken",
          value: function setToken(token) {
            localStorage.setItem('token', token);
          }
        }, {
          key: "deleteToken",
          value: function deleteToken() {
            window.localStorage.removeItem('token');
          }
        }, {
          key: "getToken",
          value: function getToken() {
            this.token = localStorage.getItem('token');
            return this.token;
          }
        }, {
          key: "getUserPayload",
          value: function getUserPayload() {
            var token = this.getToken();

            if (token) {
              var userPayload = atob(token.split('.')[1]);
              return JSON.parse(userPayload);
            } else {
              return null;
            }
          }
        }, {
          key: "isLogedIn",
          value: function isLogedIn() {
            var userPayload = this.getUserPayload();

            if (userPayload) {
              return userPayload.exp > Date.now() / 1000;
            } else {
              return false;
            }
          }
        }, {
          key: "logout",
          value: function logout() {
            this.deleteToken();
            this.token = '';
            this.username = '';
            this.accountBalance = '';
            localStorage.removeItem('appUser');
            this.router.navigateByUrl('/login');
          }
        }]);

        return UserService;
      }();

      UserService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: src_app_shared_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]
        }];
      };

      UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], UserService);
      /***/
    },

    /***/
    "./src/app/splash/splash.component.scss":
    /*!**********************************************!*\
      !*** ./src/app/splash/splash.component.scss ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function srcAppSplashSplashComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-slides {\n  height: 100%;\n  width: 100%;\n}\nion-slides ion-slide {\n  display: flex;\n  flex-direction: column;\n}\nion-buttons {\n  position: absolute;\n  bottom: 5%;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: flex-end;\n}\n.slide-one {\n  background: #389f2c;\n}\n.info {\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BsYXNoL3NwbGFzaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQUE7RUFDQSxXQUFBO0FBQ0Q7QUFFQztFQUNDLGFBQUE7RUFDQSxzQkFBQTtBQUFGO0FBSUE7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7QUFERDtBQUlBO0VBQ0MsbUJBQUE7QUFERDtBQUlBO0VBQ0MsY0FBQTtBQUREIiwiZmlsZSI6InNyYy9hcHAvc3BsYXNoL3NwbGFzaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xuXHQvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0aW9uLXNsaWRlIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdH1cbn1cblxuaW9uLWJ1dHRvbnMge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogNSU7XG5cdHdpZHRoOiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uc2xpZGUtb25lIHtcblx0YmFja2dyb3VuZDogIzM4OWYyYztcbn1cblxuLmluZm8ge1xuXHRtYXJnaW46IDAgYXV0bztcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/splash/splash.component.ts":
    /*!********************************************!*\
      !*** ./src/app/splash/splash.component.ts ***!
      \********************************************/

    /*! exports provided: SplashComponent */

    /***/
    function srcAppSplashSplashComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SplashComponent", function () {
        return SplashComponent;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");

      var SplashComponent = /*#__PURE__*/function () {
        function SplashComponent(modalController) {
          _classCallCheck(this, SplashComponent);

          this.modalController = modalController;
          this.slideOpts = {
            initialSlide: 1
          };
        }

        _createClass(SplashComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this32 = this;

            setTimeout(function () {
              _this32.modalController.dismiss();
            }, 30);
            this.autoSlide();
          }
        }, {
          key: "clickSlidetoNext",
          value: function clickSlidetoNext() {
            var _a;

            console.log('slide to next');
            (_a = this.mySlider) === null || _a === void 0 ? void 0 : _a.slideNext();
          }
        }, {
          key: "clickSlidePrevious",
          value: function clickSlidePrevious() {
            var _a;

            console.log('slide to previous');
            (_a = this.mySlider) === null || _a === void 0 ? void 0 : _a.slidePrev();
          }
        }, {
          key: "autoSlide",
          value: function autoSlide() {
            var _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      (_a = this.mySlider) === null || _a === void 0 ? void 0 : _a.slideNext(3500, true);

                    case 1:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this);
            }));
          }
        }]);

        return SplashComponent;
      }();

      SplashComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
        }];
      };

      SplashComponent.propDecorators = {
        mySlider: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: ['mySlider', {
            "static": false
          }]
        }]
      };
      SplashComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-splash',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./splash.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/splash/splash.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./splash.component.scss */
        "./src/app/splash/splash.component.scss"))["default"]]
      })], SplashComponent);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        // apiBaseUrl:  'http://localhost:8000/api',
        webVotingUrl: 'http://localhost:8100/',
        versionCode: 5.2,
        apiBaseUrl: ' https://i-sabi.herokuapp.com/api'
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/simon/Desktop/workspace/Isabi-mobile/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map