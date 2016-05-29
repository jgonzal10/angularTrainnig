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
var Developer = (function () {
    function Developer() {
    }
    return Developer;
}());
exports.Developer = Developer;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular2 trainnig';
        this.developers = DEVELOPERS;
    }
    AppComponent.prototype.onSelect = function (developer) { this.selectedDeveloper = developer; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{title}}</h1>\n    <h2>My developers</h2>\n    <ul class=\"developers\">\n      <li *ngFor=\"let developer of developers\"\n        [class.selected]=\"developer === selectedDeveloper\"\n        (click)=\"onSelect(developer)\">\n        <span class=\"badge\">{{developer.id}}</span> {{developer.name}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedDeveloper\">\n      <h2>{{selectedDeveloper.name}} details!</h2>\n      <div><label>id: </label>{{selectedDeveloper.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"selectedDeveloper.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n  ",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .developers {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .developers li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .developers li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .developers li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .developers .text {\n      position: relative;\n      top: -3px;\n    }\n    .developers .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var DEVELOPERS = [
    { "id": 10, "name": "JGO" },
    { "id": 11, "name": "M" },
    { "id": 12, "name": "N" },
    { "id": 13, "name": "B" },
    { "id": 14, "name": "Cas" },
    { "id": 15, "name": "Mta" },
    { "id": 16, "name": "RrMan" },
    { "id": 17, "name": "Dma" },
    { "id": 18, "name": "DQ" },
    { "id": 19, "name": "Ma" },
    { "id": 20, "name": "Tdo" }
];
//# sourceMappingURL=app.component.js.map