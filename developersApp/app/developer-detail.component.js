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
var developer_service_1 = require('./developer.service');
var DeveloperDetailComponent = (function () {
    function DeveloperDetailComponent(developerService, routeParams) {
        this.developerService = developerService;
        this.routeParams = routeParams;
    }
    DeveloperDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.routeParams.get('id');
        this.developerService.getDeveloper(id)
            .then(function (developer) { return _this.developer = developer; });
    };
    DeveloperDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
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