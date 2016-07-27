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
var travelway_selector_component_1 = require('../../travelway/travelway-selector.component');
var traveldocumentstep2Component = (function () {
    function traveldocumentstep2Component() {
        this.isEdition = false;
        this.isTravelEdition = false;
        this.isHotelEdition = false;
    }
    traveldocumentstep2Component.prototype.ngOnInit = function () {
        this.selected = { id: 0 };
    };
    traveldocumentstep2Component.prototype.clickSaveTravelPlan = function () {
        if (this.current.travelPlan == undefined)
            this.current.travelPlan = [];
        this.current.travelPlan.push(this.selected);
        this.selected = { id: 0 };
        this.isTravelEdition = false;
        this.isHotelEdition = false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], traveldocumentstep2Component.prototype, "current", void 0);
    traveldocumentstep2Component = __decorate([
        core_1.Component({
            selector: 'travel-document-step2',
            templateUrl: 'app/Views/travel/travel-document/travel-document-step2.component.html',
            directives: [travelway_selector_component_1.travelwayselectorComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], traveldocumentstep2Component);
    return traveldocumentstep2Component;
}());
exports.traveldocumentstep2Component = traveldocumentstep2Component;
