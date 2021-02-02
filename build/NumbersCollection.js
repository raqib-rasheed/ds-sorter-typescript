"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
var NumbersCollection = /** @class */ (function () {
    function NumbersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(NumbersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    NumbersCollection.prototype.compare = function (leftInx, rightInx) {
        return this.data[leftInx] > this.data[rightInx];
    };
    NumbersCollection.prototype.swap = function (leftInx, rightInx) {
        var leftHand = this.data[leftInx];
        this.data[leftInx] = this.data[rightInx];
        this.data[rightInx] = leftHand;
    };
    return NumbersCollection;
}());
exports.NumbersCollection = NumbersCollection;
