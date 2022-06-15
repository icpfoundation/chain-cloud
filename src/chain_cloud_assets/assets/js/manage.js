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
var ManageCanister = /** @class */ (function () {
    function ManageCanister(manageActor, imageActor, canisterLogActor, identity) {
        this.manageActor = manageActor;
        this.imageActor = imageActor;
        this.canisterLogActor = canisterLogActor;
        this.identity = identity;
    }
    ManageCanister.prototype.addUser = function (name, profile) {
        return __awaiter(this, void 0, void 0, function () {
            var addUserRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.manageActor.add_user(name, profile)];
                    case 1:
                        addUserRes = _a.sent();
                        return [2 /*return*/, addUserRes];
                }
            });
        });
    };
    ManageCanister.prototype.addGroup = function (account, group) {
        return __awaiter(this, void 0, void 0, function () {
            var addGroupRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.manageActor.add_group(account, group)];
                    case 1:
                        addGroupRes = _a.sent();
                        return [2 /*return*/, addGroupRes];
                }
            });
        });
    };
    ManageCanister.prototype.visibleProject = function () {
        return __awaiter(this, void 0, void 0, function () {
            var visibleProjectRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.manageActor.visible_project()];
                    case 1:
                        visibleProjectRes = _a.sent();
                        return [2 /*return*/, visibleProjectRes];
                }
            });
        });
    };
    ManageCanister.prototype.getGroupInfo = function (account, group_id) {
        return __awaiter(this, void 0, void 0, function () {
            var getGroupInfoRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.manageActor.get_group_info(account, group_id)];
                    case 1:
                        getGroupInfoRes = _a.sent();
                        return [2 /*return*/, getGroupInfoRes];
                }
            });
        });
    };
    ManageCanister.prototype.groupImageStore = function (account, group_id, imageData) {
        return __awaiter(this, void 0, void 0, function () {
            var imageStoreRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.imageActor.group_image_store(account, group_id, imageData)];
                    case 1:
                        imageStoreRes = _a.sent();
                        return [2 /*return*/, imageStoreRes];
                }
            });
        });
    };
    ManageCanister.prototype.projectImageStore = function (account, group_id, project_id, imageData) {
        return __awaiter(this, void 0, void 0, function () {
            var imageStoreRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.imageActor.project_image_store(account, group_id, project_id, imageData)];
                    case 1:
                        imageStoreRes = _a.sent();
                        return [2 /*return*/, imageStoreRes];
                }
            });
        });
    };
    ManageCanister.prototype.getGroupImage = function (account, group_id) {
        return __awaiter(this, void 0, void 0, function () {
            var getImageRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.imageActor.get_group_image(account, group_id)];
                    case 1:
                        getImageRes = _a.sent();
                        return [2 /*return*/, getImageRes];
                }
            });
        });
    };
    ManageCanister.prototype.getProjectImage = function (account, group_id, project_id) {
        return __awaiter(this, void 0, void 0, function () {
            var getImageRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.imageActor.get_project_image(account, group_id, project_id)];
                    case 1:
                        getImageRes = _a.sent();
                        return [2 /*return*/, getImageRes];
                }
            });
        });
    };
    ManageCanister.prototype.getLog = function (account, group_id, page) {
        return __awaiter(this, void 0, void 0, function () {
            var getLogRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.canisterLogActor.get_log(account, group_id, page)];
                    case 1:
                        getLogRes = _a.sent();
                        return [2 /*return*/, getLogRes];
                }
            });
        });
    };
    ManageCanister.prototype.updateGroupBasicInformation = function (account, group_id, name, description, visibility, url) {
        return __awaiter(this, void 0, void 0, function () {
            var updateRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.manageActor.update_group_basic_information(account, group_id, name, description, visibility, url)];
                    case 1:
                        updateRes = _a.sent();
                        return [2 /*return*/, updateRes];
                }
            });
        });
    };
    ManageCanister.prototype.getCanisterStatus = function (account, group_id, project_id, canister) {
        return __awaiter(this, void 0, void 0, function () {
            var getCanisterStatusRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.manageActor.get_canister_status(account, group_id, project_id, canister)];
                    case 1:
                        getCanisterStatusRes = _a.sent();
                        return [2 /*return*/, getCanisterStatusRes];
                }
            });
        });
    };
    ManageCanister.prototype.addProject = function (account, group_id, project) {
        return __awaiter(this, void 0, void 0, function () {
            var addProjectRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.manageActor.add_project(account, group_id, project)];
                    case 1:
                        addProjectRes = _a.sent();
                        return [2 /*return*/, addProjectRes];
                }
            });
        });
    };
    ManageCanister.prototype.getProjectInfo = function (account, group_id, project_id) {
        return __awaiter(this, void 0, void 0, function () {
            var getProjectRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.manageActor.get_project_info(account, group_id, project_id)];
                    case 1:
                        getProjectRes = _a.sent();
                        return [2 /*return*/, getProjectRes];
                }
            });
        });
    };
    ManageCanister.prototype.getUserInfo = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            var getUserInfoRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.manageActor.get_user_info(account)];
                    case 1:
                        getUserInfoRes = _a.sent();
                        return [2 /*return*/, getUserInfoRes];
                }
            });
        });
    };
    ManageCanister.prototype.addGroupMember = function (account, group_id, member) {
        return __awaiter(this, void 0, void 0, function () {
            var addGroupMemberRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.manageActor.add_group_member(account, group_id, member)];
                    case 1:
                        addGroupMemberRes = _a.sent();
                        return [2 /*return*/, addGroupMemberRes];
                }
            });
        });
    };
    ManageCanister.prototype.removeGroupMember = function (account, group_id, member) {
        return __awaiter(this, void 0, void 0, function () {
            var rmGroupMemberRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.manageActor.remove_group_member(account, group_id, member)];
                    case 1:
                        rmGroupMemberRes = _a.sent();
                        return [2 /*return*/, rmGroupMemberRes];
                }
            });
        });
    };
    ManageCanister.prototype.removeGroup = function (account, group_id) {
        return __awaiter(this, void 0, void 0, function () {
            var rmGroupRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.manageActor.remove_group(account, group_id)];
                    case 1:
                        rmGroupRes = _a.sent();
                        return [2 /*return*/, rmGroupRes];
                }
            });
        });
    };
    ManageCanister.prototype.removeProject = function (account, group_id, project_id) {
        return __awaiter(this, void 0, void 0, function () {
            var rmProjectRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.manageActor.remove_project(account, group_id, project_id)];
                    case 1:
                        rmProjectRes = _a.sent();
                        return [2 /*return*/, rmProjectRes];
                }
            });
        });
    };
    ManageCanister.prototype.updateProjectBasicInformation = function (account, group_id, project_id, name, description, visibility, git, canister_cycle_floor, canisters) {
        return __awaiter(this, void 0, void 0, function () {
            var updateRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.manageActor.update_project_basic_information(account, group_id, project_id, name, description, visibility, git, canister_cycle_floor, canisters)];
                    case 1:
                        updateRes = _a.sent();
                        return [2 /*return*/, updateRes];
                }
            });
        });
    };
    ManageCanister.prototype.removeGroupImage = function (account, group_id) {
        return __awaiter(this, void 0, void 0, function () {
            var rmRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.imageActor.remove_group_image(account, group_id)];
                    case 1:
                        rmRes = _a.sent();
                        return [2 /*return*/, rmRes];
                }
            });
        });
    };
    ManageCanister.prototype.removeProjectImage = function (account, group_id, project_id) {
        return __awaiter(this, void 0, void 0, function () {
            var rmRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.imageActor.remove_project_image(account, group_id, project_id)];
                    case 1:
                        rmRes = _a.sent();
                        return [2 /*return*/, rmRes];
                }
            });
        });
    };
    return ManageCanister;
}());
exports["default"] = ManageCanister;
