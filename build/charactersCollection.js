"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftInx, rightInx) {
        return this.data[leftInx].toLowerCase() > this.data[rightInx].toLowerCase();
    };
    CharactersCollection.prototype.swap = function (leftInx, rightInx) {
        var characters = this.data.split("");
        var leftHand = characters[leftInx];
        characters[leftInx] = characters[rightInx];
        characters[rightInx] = leftHand;
        this.data = characters.join("");
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
