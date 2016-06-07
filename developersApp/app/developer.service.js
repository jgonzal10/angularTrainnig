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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/add/operator/toPromise');
var DeveloperService = (function () {
    function DeveloperService(http) {
        this.http = http;
        //private developersUrl = 'http://api.androidhive.info/contacts/';
        this.developersUrl = 'http://201.24.26.23/wsrest/api/Seguranca/ConsultaModulos';
    }
    DeveloperService.prototype.getDevelopers = function () {
        return this.http.get(this.developersUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    // See the "Take it slow" appendix
    DeveloperService.prototype.getDevelopersSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(DEVELOPERS); }, 2000);
        } // 2 seconds
         // 2 seconds
        );
    };
    DeveloperService.prototype.getDeveloper = function (id) {
        return this.getDevelopers()
            .then(function (developers) { return developers.filter(function (developer) { return developer.id === id; })[0]; });
    };
    DeveloperService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    // Add new Developer
    DeveloperService.prototype.post = function (developer) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.developersUrl, JSON.stringify(developer), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    // Update existing Developer
    DeveloperService.prototype.put = function (developer) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.developersUrl + "/" + developer.id;
        return this.http
            .put(url, JSON.stringify(developer), { headers: headers })
            .toPromise()
            .then(function () { return developer; })
            .catch(this.handleError);
    };
    DeveloperService.prototype.delete = function (developer) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.developersUrl + "/" + developer.id;
        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    };
    //saving the developer
    DeveloperService.prototype.save = function (developer) {
        if (developer.id) {
            return this.put(developer);
        }
        return this.post(developer);
    };
    DeveloperService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DeveloperService);
    return DeveloperService;
}());
exports.DeveloperService = DeveloperService;
//# sourceMappingURL=developer.service.js.map