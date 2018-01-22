webpackJsonp([2],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendMessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objects_message__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_messageService__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SendMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SendMessagePage = (function () {
    function SendMessagePage(navCtrl, navParams, messageService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.messageService = messageService;
        this.currentLesson = navParams.get('lesson');
        this.currentUser = navParams.get('user');
    }
    SendMessagePage.prototype.ngOnInit = function () {
        console.log(JSON.stringify(this.currentLesson));
        this.getMessages();
    };
    SendMessagePage.prototype.ionViewDidLoad = function () {
    };
    SendMessagePage.prototype.getMessages = function () {
        var _this = this;
        this.messageService.getMessage().then(function (data) {
            _this.messages = data;
        }, function (error) {
            console.log(error);
        });
    };
    SendMessagePage.prototype.sendMessage = function () {
        var newMessage = new __WEBPACK_IMPORTED_MODULE_2__objects_message__["a" /* message */]();
        newMessage.text = this.msgText;
        newMessage.senderId = this.currentUser.id;
        newMessage.isOwner = true;
        newMessage.lessonId = this.currentLesson.id;
        this.msgText = '';
        this.messages.push(newMessage);
    };
    SendMessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-send-message',template:/*ion-inline-start:"C:\Users\macur\workspace\eAsistan\src\pages\send-message\send-message.html"*/'<!--\n  Generated template for the SendMessagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="dark">\n    <ion-title>Mesajlar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="body-backgrnd" padding>\n  <div class="message-area " *ngFor="let dt of messages">\n      <p class="message-right" align="right" *ngIf="dt.isOwner==true && dt.lessonId==currentLesson.id" >{{dt.text}}</p>\n      <p class="message-left" align="left" *ngIf="dt.isOwner==false && dt.lessonId==currentLesson.id" >{{dt.text}}</p>\n  </div>\n\n  <form class="msg-form"  (ngSubmit)="sendMessage()">\n      <ion-item>\n        <ion-input type="text" [(ngModel)]="msgText" name="title"></ion-input>\n      </ion-item>\n      <button ion-button type="submit" block>mesaj gönder</button>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\macur\workspace\eAsistan\src\pages\send-message\send-message.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_messageService__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_messageService__["a" /* MessageService */]) === "function" && _c || Object])
    ], SendMessagePage);
    return SendMessagePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=send-message.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/download-doc/download-doc.module": [
		282,
		1
	],
	"../pages/send-message/send-message.module": [
		283,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_messages__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageService = (function () {
    function MessageService() {
    }
    MessageService.prototype.getMessage = function () {
        return new Promise(function (resolve, reject) {
            if (__WEBPACK_IMPORTED_MODULE_1__mocks_mock_messages__["a" /* Messages */]) {
                resolve(__WEBPACK_IMPORTED_MODULE_1__mocks_mock_messages__["a" /* Messages */]);
            }
            else {
                reject(false);
            }
        });
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MessageService);
    return MessageService;
}());

//# sourceMappingURL=messageService.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__send_message_send_message__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_lessonsService__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_userService__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__download_doc_download_doc__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, userService, actionSheetCtrl, lessonsService) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.lessonsService = lessonsService;
        this.lessons = [];
    }
    HomePage.prototype.ngOnInit = function () {
        this.getUser();
        this.getLessons();
    };
    HomePage.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser().then(function (data) {
            _this.userObj = data;
        }, function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.getLessons = function () {
        var _this = this;
        this.lessonsService.getLessons()
            .subscribe(function (Lessons) { return _this.lessons = Lessons; });
    };
    HomePage.prototype.showLessonDetail = function (lesson) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Merhaba ' + this.userObj.name + " " + lesson.name + " dersi için hangi işlemi yapmak istersin ?",
            buttons: [
                {
                    text: 'Döküman Linklerine Git',
                    icon: 'cloud-download',
                    handler: function () {
                        _this.navigateToPage(1, lesson);
                        console.log('Döküman Linklerine Git');
                    }
                }, {
                    text: 'Öğretmene Soru Sor',
                    icon: 'chatbubbles',
                    handler: function () {
                        _this.navigateToPage(2, lesson);
                        console.log('Öğretmene Soru Sor');
                    }
                }, {
                    text: 'Vazgeç',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.navigateToPage = function (destType, lesson) {
        if (destType == 1) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__download_doc_download_doc__["a" /* DownloadDocPage */], { lesson: lesson, user: this.userObj });
        }
        else if (destType == 2) {
            // console.log(JSON.stringify(lesson));
            // console.log(JSON.stringify(this.userObj));
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__send_message_send_message__["a" /* SendMessagePage */], { lesson: lesson, user: this.userObj });
        }
        else {
            console.log("undefined choice");
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\macur\workspace\eAsistan\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="dark">\n    <ion-title>\n      <p class="title-message"> Mobil Asistanım</p>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="body-backgrnd">\n  <div class="sub-header">Ders Listesi</div>\n  \n  <button ion-button class="lesson" *ngFor="let lesson of lessons" (click)="showLessonDetail(lesson)" >\n    Ders Adı: {{lesson.name}}\n    <br>\n    Öğretmen Adı: {{lesson.teacherNameSurname}}\n  </button> \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\macur\workspace\eAsistan\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__services_userService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__services_lessonsService__["a" /* LessonsService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mocks_mock_lessons__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LessonsService = (function () {
    function LessonsService() {
    }
    LessonsService.prototype.getLessons = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["of"])(__WEBPACK_IMPORTED_MODULE_2__mocks_mock_lessons__["a" /* Lessons */]);
    };
    LessonsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LessonsService);
    return LessonsService;
}());

//# sourceMappingURL=lessonsService.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mocks_mock_user__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.getUser = function () {
        return new Promise(function (resolve, reject) {
            if (__WEBPACK_IMPORTED_MODULE_1__mocks_mock_user__["a" /* USER */]) {
                resolve(__WEBPACK_IMPORTED_MODULE_1__mocks_mock_user__["a" /* USER */]);
            }
            else {
                reject(false);
            }
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=userService.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(224);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_download_doc_download_doc__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_send_message_send_message__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_userService__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_lessonsService__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_docDownloadService__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_messageService__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_download_doc_download_doc__["a" /* DownloadDocPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_send_message_send_message__["a" /* SendMessagePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/download-doc/download-doc.module#DownloadDocPageModule', name: 'DownloadDocPage', segment: 'download-doc', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/send-message/send-message.module#SendMessagePageModule', name: 'SendMessagePage', segment: 'send-message', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_download_doc_download_doc__["a" /* DownloadDocPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_send_message_send_message__["a" /* SendMessagePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__services_userService__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_10__services_lessonsService__["a" /* LessonsService */],
                __WEBPACK_IMPORTED_MODULE_11__services_docDownloadService__["a" /* docDownloadService */],
                __WEBPACK_IMPORTED_MODULE_12__services_messageService__["a" /* MessageService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return message; });
var message = (function () {
    function message() {
    }
    return message;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Messages; });
var Messages = [
    {
        text: "Merhaba Hocam.",
        senderId: 1,
        isOwner: true,
        lessonId: 2
    }, {
        text: "Merhaba ali.",
        senderId: 2,
        isOwner: false,
        lessonId: 2
    }, {
        text: "Müsaitseniz birşey sorabilir miyim?",
        senderId: 1,
        isOwner: true,
        lessonId: 2
    }, {
        text: "Günaydın Hocam.",
        senderId: 1,
        isOwner: true,
        lessonId: 1
    }, {
        text: "Günaydın ali.",
        senderId: 1,
        isOwner: false,
        lessonId: 1
    }, {
        text: "Sınav notumu öğrenebilir miyim?.",
        senderId: 1,
        isOwner: true,
        lessonId: 1
    }, {
        text: "70 aldın sınavdan.",
        senderId: 1,
        isOwner: false,
        lessonId: 1
    }, {
        text: "Teşekkürler hocam..",
        senderId: 1,
        isOwner: true,
        lessonId: 1
    }, {
        text: "Merhaba ali. Son ödevin elime ulaşmadı. En kısa sürede göndermelisin.",
        senderId: 3,
        isOwner: false,
        lessonId: 3
    }, {
        text: "Merhaba Hocam.",
        senderId: 1,
        isOwner: true,
        lessonId: 4
    }, {
        text: "Merhaba ali.",
        senderId: 4,
        isOwner: false,
        lessonId: 4
    }, {
        text: "Müsaitseniz birşey sorabilir miyim?",
        senderId: 4,
        isOwner: true,
        lessonId: 4
    }, {
        text: "Merhaba Hocam.",
        senderId: 1,
        isOwner: true,
        lessonId: 5
    }, {
        text: "Merhaba Ali ödev notun 80.",
        senderId: 6,
        isOwner: false,
        lessonId: 6
    }, {
        text: "Merhaba Hocam,teşekkürler.",
        senderId: 1,
        isOwner: true,
        lessonId: 6
    }, {
        text: "Günaydın Hocam.",
        senderId: 1,
        isOwner: true,
        lessonId: 7
    }, {
        text: "Günaydın ali.",
        senderId: 7,
        isOwner: false,
        lessonId: 7
    }, {
        text: "Sınav konuları hakkında bilgi alabilir miyim?.",
        senderId: 1,
        isOwner: true,
        lessonId: 7
    }, {
        text: "Uygulama içerisinde paylaşılan konulardan sorumusunuz.",
        senderId: 7,
        isOwner: false,
        lessonId: 7
    }, {
        text: "Merhaba Hocam.",
        senderId: 1,
        isOwner: true,
        lessonId: 8
    }, {
        text: "Merhaba Ali.",
        senderId: 8,
        isOwner: false,
        lessonId: 8
    }, {
        text: "Son ünitenin soruları ve çözümleri uygulamada bulunmamakta. Nereden ulaşabiliriz.",
        senderId: 1,
        isOwner: true,
        lessonId: 8
    }, {
        text: "Şuan uygulamaya yüklüyorum. Ortalama 5 dakika sonra erişilebilir olur.",
        senderId: 8,
        isOwner: false,
        lessonId: 8
    }
];
//# sourceMappingURL=mock-messages.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\macur\workspace\eAsistan\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\macur\workspace\eAsistan\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Lessons; });
var Lessons = [
    { id: 1, name: 'Matematik', teacherId: 1, teacherNameSurname: 'Ahmet Akın', credit: 3,
        notesLink: [{ description: '1.Ders Notları', url: 'https://ionicframework.com/' },
            { description: '2.Ders Notları', url: 'https://ionicframework.com/' },
            { description: '3.Ders Notları', url: 'https://ionicframework.com/' }],
        questionsLink: [{ description: '1.Ünite Soruları', url: 'https://ionicframework.com/' },
            { description: '1.Ünite Soruları', url: 'https://ionicframework.com/' }] },
    { id: 2, name: 'Türkçe', teacherId: 2, teacherNameSurname: 'Veli As', credit: 3,
        notesLink: [{ description: '1.Ders Notları', url: 'https://ionicframework.com/' },
            { description: '2.Ders Notları', url: 'https://ionicframework.com/' },
            { description: '3.Ders Notları', url: 'https://ionicframework.com/' }],
        questionsLink: [{ description: '1.Ünite Soruları', url: 'https://ionicframework.com/' },
            { description: '1.Ünite Soruları', url: 'https://ionicframework.com/' }] },
    { id: 3, name: 'Tarih', teacherId: 3, teacherNameSurname: 'Selin Kurt', credit: 2,
        notesLink: [{ description: '1.Ders Notları', url: 'https://ionicframework.com/' },
            { description: '2.Ders Notları', url: 'https://ionicframework.com/' },
            { description: '3.Ders Notları', url: 'https://ionicframework.com/' }],
        questionsLink: [{ description: '1.Ünite Soruları', url: 'https://ionicframework.com/' },
            { description: '1.Ünite Soruları', url: 'https://ionicframework.com/' }] },
    { id: 4, name: 'Yabancı Dil', teacherId: 4, teacherNameSurname: 'Kemal Batı', credit: 3,
        notesLink: [{ description: '1.Ders Notları', url: 'https://ionicframework.com/' },
            { description: '2.Ders Notları', url: 'https://ionicframework.com/' },
            { description: '3.Ders Notları', url: 'https://ionicframework.com/' }],
        questionsLink: [{ description: '1.Ünite Soruları', url: 'https://ionicframework.com/' },
            { description: '1.Ünite Soruları', url: 'https://ionicframework.com/' }] },
    { id: 5, name: 'Fizik', teacherId: 5, teacherNameSurname: 'Leman Su', credit: 2,
        notesLink: [{ description: '1.Ders Notları', url: 'https://ionicframework.com/' },
            { description: '2.Ders Notları', url: 'https://ionicframework.com/' },
            { description: '3.Ders Notları', url: 'https://ionicframework.com/' }],
        questionsLink: [{ description: '1.Ünite Soruları', url: 'https://ionicframework.com/' },
            { description: '1.Ünite Soruları', url: 'https://ionicframework.com/' }] },
    { id: 6, name: 'Kimya', teacherId: 6, teacherNameSurname: 'Aylin Uslu', credit: 3,
        notesLink: [{ description: '1.Ders Notları', url: 'https://ionicframework.com/' },
            { description: '2.Ders Notları', url: 'https://ionicframework.com/' },
            { description: '3.Ders Notları', url: 'https://ionicframework.com/' }],
        questionsLink: [{ description: '1.Ünite Soruları', url: 'https://ionicframework.com/' },
            { description: '1.Ünite Soruları', url: 'https://ionicframework.com/' }] },
    { id: 7, name: 'Biyoloji', teacherId: 7, teacherNameSurname: 'Uğur Mat', credit: 3,
        notesLink: [{ description: '1.Ders Notları', url: 'https://ionicframework.com/' },
            { description: '2.Ders Notları', url: 'https://ionicframework.com/' },
            { description: '3.Ders Notları', url: 'https://ionicframework.com/' }],
        questionsLink: [{ description: '1.Ünite Soruları', url: 'https://ionicframework.com/' },
            { description: '1.Ünite Soruları', url: 'https://ionicframework.com/' }] },
    { id: 8, name: 'Yabancı Dil', teacherId: 8, teacherNameSurname: 'Kerem Işık', credit: 3,
        notesLink: [{ description: '1.Ders Notları', url: 'https://ionicframework.com/' },
            { description: '2.Ders Notları', url: 'https://ionicframework.com/' },
            { description: '3.Ders Notları', url: 'https://ionicframework.com/' }],
        questionsLink: [{ description: '1.Ünite Soruları', url: 'https://ionicframework.com/' },
            { description: '1.Ünite Soruları', url: 'https://ionicframework.com/' }] },
];
//# sourceMappingURL=mock-lessons.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER; });
var USER = {
    id: 123,
    name: 'Ali',
    surname: 'Yılmaz',
    age: 11,
    class: 7,
    specialField: ''
};
//# sourceMappingURL=mock-user.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return docDownloadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var docDownloadService = (function () {
    function docDownloadService() {
    }
    docDownloadService.prototype.downloadDoc = function (url) {
        return new Promise(function (resolve, reject) {
            if (url) {
                resolve(true);
            }
            else {
                reject(false);
            }
        });
    };
    docDownloadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], docDownloadService);
    return docDownloadService;
}());

//# sourceMappingURL=docDownloadService.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadDocPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DownloadDocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DownloadDocPage = (function () {
    function DownloadDocPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.currentLesson = navParams.get('lesson');
        this.currentUser = navParams.get('user');
    }
    DownloadDocPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DownloadDocPage');
        console.log(JSON.stringify(this.currentLesson));
        console.log('ionViewDidLoad DownloadDocPage');
        console.log(JSON.stringify(this.currentUser));
    };
    DownloadDocPage.prototype.clickedItem = function () {
        alert("cliked");
    };
    DownloadDocPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-download-doc',template:/*ion-inline-start:"C:\Users\macur\workspace\eAsistan\src\pages\download-doc\download-doc.html"*/'\n<!--\n  Generated template for the DownloadDocPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    \n  <ion-navbar color="dark">\n    <ion-title>Merhaba {{currentUser.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="body-backgrnd">\n\n    <ion-slides>\n        <ion-slide>\n            <p class="info-text">{{currentLesson.name}} dersi için ders notlarının bulunduğu linklerini \n                aşağıda görebilirsin.<p>\n\n                  <ion-list >\n                      <ion-list-header>\n                          Dökümanları indirebilmek için yandaki ikonlara tıklayın.\n                        </ion-list-header>\n                      <ion-item *ngFor="let dt of currentLesson.notesLink" (click)="downloadDoc(dt.url);" >\n                          <ion-icon name="book"></ion-icon>  \n                          {{dt.description}}\n                          <ion-icon style="position: absolute; right:5%; zoom:2.0;" name="code-download"></ion-icon>\n                        </ion-item>\n                </ion-list>\n            <p class="nav-text">Soru ve örneklerinin bulunduğu linkleri görmek için sağa kaydır.</p>\n        </ion-slide>\n        <ion-slide>\n            <p class="info-text">{{currentLesson.name}} dersi için örnek soru ve çözümlerinin bulunduğu linklerini \n                aşağıda görebilirsin.<p>\n                  <ion-list >\n                      <ion-list-header>\n                          Dökümanları indirebilmek için yandaki ikonlara tıklayın.\n                        </ion-list-header>\n                      <ion-item *ngFor="let dt of currentLesson.questionsLink" (click)="downloadDoc();" >\n                          <ion-icon name="help"></ion-icon>  \n                          {{dt.description}}\n                          <ion-icon style="position: absolute; right:5%; zoom:2.0;" name="code-download"></ion-icon>\n                        </ion-item>\n                </ion-list>\n            <p class="nav-text">Ders notlarının bulunduğu linkleri görmek için sola kaydır.</p>\n        </ion-slide>\n      </ion-slides>\n\n\n\n    </ion-content>\n'/*ion-inline-end:"C:\Users\macur\workspace\eAsistan\src\pages\download-doc\download-doc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DownloadDocPage);
    return DownloadDocPage;
}());

//# sourceMappingURL=download-doc.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map