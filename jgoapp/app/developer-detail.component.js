"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var developer_1 = require('./developer');
var developer_service_1 = require('./developer.service');
var DeveloperDetailComponent = (function () {
    function DeveloperDetailComponent(developerService, routeParams) {
        this.developerService = developerService;
        this.routeParams = routeParams;
        this.close = new core_1.EventEmitter();
        this.navigated = false; // true if navigated here
    }
    DeveloperDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.routeParams.get('id') !== null) {
            var id = +this.routeParams.get('id');
            this.navigated = true;
            this.developerService.getDeveloper(id)
                .then(function (developer) { return _this.developer = developer; });
        }
        else {
            this.navigated = false;
            this.developer = new developer_1.Developer();
        }
    };
    DeveloperDetailComponent.prototype.save = function () {
        var _this = this;
        this.developerService
            .save(this.developer)
            .then(function (developer) {
            _this.developer = developer; // saved developer, w/ id if new
            _this.goBack(developer);
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    DeveloperDetailComponent.prototype.goBack = function (savedDeveloper) {
        if (savedDeveloper === void 0) { savedDeveloper = null; }
        this.close.emit(savedDeveloper);
        if (this.navigated) {
            window.history.back();
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', developer_1.Developer)
    ], DeveloperDetailComponent.prototype, "developer", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DeveloperDetailComponent.prototype, "close", void 0);
    DeveloperDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-developer-detail',
            templateUrl: 'app/views/developer-detail.component.html',
            styleUrls: ['app/styles/developer-detail.component.css']
        }), 
        __metadata('design:paramtypes', [developer_service_1.DeveloperService, router_deprecated_1.RouteParams])
    ], DeveloperDetailComponent);
    return DeveloperDetailComponent;
}());
exports.DeveloperDetailComponent = DeveloperDetailComponent;
//# sourceMappingURL=developer-detail.component.js.map