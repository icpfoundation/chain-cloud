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
var axios_1 = require("axios");
var agent_1 = require("./agent");
var CHAIN_CLOUD_HOST = "https://chaincloud.skyipfs.com:9091";
var ChainCloudApi = /** @class */ (function () {
    function ChainCloudApi(host) {
        var _this = this;
        this.getCanisterList = function () { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get('/public/canisterlist')];
                    case 1:
                        result = _a.sent();
                        if (result) {
                            try {
                                return [2 /*return*/, result.data];
                            }
                            catch (err) {
                                return [2 /*return*/, err];
                            }
                        }
                        return [2 /*return*/, null];
                }
            });
        }); };
        this.getCanisterInfo = function (canisterid) { return __awaiter(_this, void 0, void 0, function () {
            var result, res, parseData, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get('/public/canisterinfo', {
                            params: { 'canisterid': canisterid }
                        })];
                    case 1:
                        result = _a.sent();
                        if (!result) return [3 /*break*/, 5];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, (0, agent_1.getCanisterInfo)(canisterid)];
                    case 3:
                        res = _a.sent();
                        parseData = JSON.parse(result.data.data);
                        return [2 /*return*/, {
                                subnetId: res.subnet,
                                subnetName: res.name,
                                moduleHash: res.moduleHash,
                                controller: res.controllerId,
                                canisterType: parseData.type,
                                network: parseData.network,
                                canisterId: canisterid,
                                name: parseData.name
                            }];
                    case 4:
                        err_1 = _a.sent();
                        return [2 /*return*/, err_1];
                    case 5: return [2 /*return*/, null];
                }
            });
        }); };
        this.api = axios_1["default"].create({
            baseURL: host
        });
    }
    return ChainCloudApi;
}());
var chainCloudApi = new ChainCloudApi(CHAIN_CLOUD_HOST);
exports["default"] = chainCloudApi;
