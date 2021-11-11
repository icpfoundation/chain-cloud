"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var principal_1 = require("@dfinity/principal");
var CanisterStatus;
(function (CanisterStatus) {
    CanisterStatus[CanisterStatus["running"] = null] = "running";
    CanisterStatus[CanisterStatus["stopping"] = null] = "stopping";
    CanisterStatus[CanisterStatus["stopped"] = null] = "stopped";
})(CanisterStatus || (CanisterStatus = {}));
var CanisterType;
(function (CanisterType) {
    CanisterType[CanisterType["wallet"] = null] = "wallet";
    CanisterType[CanisterType["ui"] = null] = "ui";
    CanisterType[CanisterType["server"] = null] = "server";
})(CanisterType || (CanisterType = {}));
var ChainCloudCanister = /** @class */ (function () {
    function ChainCloudCanister(actor) {
        this.actor = actor;
    }
    ChainCloudCanister.prototype.getCanisterByPrinciple = function (principal) {
        return __awaiter(this, void 0, void 0, function () {
            var parsePrincipal, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parsePrincipal = principal_1.Principal.fromText(principal);
                        return [4 /*yield*/, this.actor.getCanisterByPrinciple(parsePrincipal)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ChainCloudCanister.prototype.getCanisterLastEvent = function (principal, limit) {
        return __awaiter(this, void 0, void 0, function () {
            var parsePrincipal, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parsePrincipal = principal_1.Principal.fromText(principal);
                        return [4 /*yield*/, this.actor.getCanisterLastEvent(parsePrincipal, limit)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ChainCloudCanister.prototype.commitCanister = function (commitdata) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actor.commitCanister(commitdata)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ChainCloudCanister.prototype.createEvent = function (meta) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actor.createEvent(meta)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    ChainCloudCanister.prototype.getCanisterById = function (principle, canisterId) {
        return __awaiter(this, void 0, void 0, function () {
            var parsePrinciple, parseCanisterId, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parsePrinciple = principal_1.Principal.fromText(principle);
                        parseCanisterId = principal_1.Principal.fromText(canisterId);
                        return [4 /*yield*/, this.actor.getCanisterById(parsePrinciple, parseCanisterId)];
                    case 1:
                        result = _a.sent();
                        if (Object.prototype.hasOwnProperty.call(result, 'Ok')) {
                            return [2 /*return*/, result['Ok']];
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    ChainCloudCanister.prototype.getCanisterEventByTime = function (canister, startTime) {
        return __awaiter(this, void 0, void 0, function () {
            var parseCanister, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parseCanister = principal_1.Principal.fromText(canister);
                        return [4 /*yield*/, this.actor.getCanisterEventByTime(parseCanister, startTime)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return ChainCloudCanister;
}());
exports["default"] = ChainCloudCanister;
