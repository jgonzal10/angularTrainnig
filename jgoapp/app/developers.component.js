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
var DevelopersComponent = (function () {
    function DevelopersComponent(router, developerService) {
        this.router = router;
        this.developerService = developerService;
    }
    DevelopersComponent.prototype.getDevelopers = function () {
        var _this = this;
        this.developerService.getDevelopers().then(function (developers) { return _this.developers = developers; });
    };
    DevelopersComponent.prototype.ngOnInit = function () {
        this.getDevelopers();
    };
    DevelopersComponent.prototype.onSelect = function (developer) { this.selectedDeveloper = developer; };
    DevelopersComponent.prototype.gotoDetail = function () {
        this.router.navigate(['DeveloperDetail', { id: this.selectedDeveloper.id }]);
    };
    DevelopersComponent = __decorate([
        core_1.Component({
            selector: 'my-developers',
            templateUrl: 'app/views/developers.component.html',
            styleUrls: ['app/styles/developers.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, developer_service_1.DeveloperService])
    ], DevelopersComponent);
    return DevelopersComponent;
}());
exports.DevelopersComponent = DevelopersComponent;
//# sourceMappingURL=developers.component.js.map