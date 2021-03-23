(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("LSFPlugin", [], factory);
	else if(typeof exports === 'object')
		exports["LSFPlugin"] = factory();
	else
		root["LSFPlugin"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiwishlistDefaultState = exports.MultiwishlistService = exports.MultiwishlistDao = exports.MultiwishlistPlugin = void 0;
var index_1 = __webpack_require__(/*! ./src/index */ "./src/index.ts");
Object.defineProperty(exports, "MultiwishlistPlugin", { enumerable: true, get: function () { return index_1.MultiwishlistPlugin; } });
var index_2 = __webpack_require__(/*! ./src/dao/index */ "./src/dao/index.ts");
Object.defineProperty(exports, "MultiwishlistDao", { enumerable: true, get: function () { return index_2.MultiwishlistDao; } });
var index_3 = __webpack_require__(/*! ./src/service/index */ "./src/service/index.ts");
Object.defineProperty(exports, "MultiwishlistService", { enumerable: true, get: function () { return index_3.MultiwishlistService; } });
var multiwishlist_default_1 = __webpack_require__(/*! ./src/store/multiwishlist.default */ "./src/store/multiwishlist.default.ts");
Object.defineProperty(exports, "MultiwishlistDefaultState", { enumerable: true, get: function () { return multiwishlist_default_1.MultiwishlistDefaultState; } });
__exportStar(__webpack_require__(/*! ./src/types */ "./src/types/index.ts"), exports);


/***/ }),

/***/ "./src/dao/index.ts":
/*!**************************!*\
  !*** ./src/dao/index.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiwishlistDao = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var query_string_1 = __importDefault(__webpack_require__(/*! query-string */ "query-string"));
var MultiwishlistDao = /** @class */ (function () {
    function MultiwishlistDao(taskQueue) {
        this.taskQueue = taskQueue;
    }
    MultiwishlistDao.prototype.getMultiwishlists = function (customerId, withItems, storeCode, token) {
        var query = {
            withItems: withItems
        };
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/multiwishlist/' + customerId + '?' + query_string_1.default.stringify(query) + '&storeCode={{storeCode}}&token={{token}}'),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    };
    MultiwishlistDao.prototype.getMultiwishlist = function (wishlistId, storeCode, token) {
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/multiwishlist/single/' + wishlistId + '?storeCode={{storeCode}}&token={{token}}'),
            payload: {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    };
    MultiwishlistDao.prototype.createMultiwishlist = function (wishlist, storeCode, token) {
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/multiwishlist' + '?storeCode={{storeCode}}&token={{token}}'),
            payload: {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors',
                body: JSON.stringify(wishlist)
            },
            silent: true
        });
    };
    MultiwishlistDao.prototype.deleteMultiwishlist = function (wishlistId, storeCode, token) {
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/multiwishlist/' + wishlistId + '?storeCode={{storeCode}}&token={{token}}'),
            payload: {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    };
    MultiwishlistDao.prototype.addProductToWishlist = function (wishlistId, productId, storeCode, token) {
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/multiwishlist/' + wishlistId + '/add/' + productId + '?storeCode={{storeCode}}&token={{token}}'),
            payload: {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    };
    MultiwishlistDao.prototype.removeProductFromWishlist = function (itemId, storeCode, token) {
        return this.taskQueue.execute({
            url: libstorefront_1.URLTransform.getAbsoluteApiUrl('/api/vendor/multiwishlist/remove/' + itemId + '?storeCode={{storeCode}}&token={{token}}'),
            payload: {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                mode: 'cors'
            },
            silent: true
        });
    };
    MultiwishlistDao = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(libstorefront_1.TaskQueue)),
        __metadata("design:paramtypes", [libstorefront_1.TaskQueue])
    ], MultiwishlistDao);
    return MultiwishlistDao;
}());
exports.MultiwishlistDao = MultiwishlistDao;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiwishlistPlugin = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var dao_1 = __webpack_require__(/*! ./dao */ "./src/dao/index.ts");
var service_1 = __webpack_require__(/*! ./service */ "./src/service/index.ts");
var multiwishlist_reducer_1 = __webpack_require__(/*! ./store/multiwishlist.reducer */ "./src/store/multiwishlist.reducer.ts");
var multiwishlist_default_1 = __webpack_require__(/*! ./store/multiwishlist.default */ "./src/store/multiwishlist.default.ts");
/**
 * The wishlist extension provides functionality for listing and maintaining items a customer would like to
 * have, for example products intended for buying or desired as gifts.
 */
exports.MultiwishlistPlugin = (function (libstorefront) {
    libstorefront.getIOCContainer().bind(dao_1.MultiwishlistDao).to(dao_1.MultiwishlistDao);
    libstorefront.getIOCContainer().bind(service_1.MultiwishlistService).to(service_1.MultiwishlistService);
    libstorefront.listenTo(libstorefront_1.HookType.AfterCoreModulesRegistered, function (lsf) {
        lsf.registerModule(libstorefront_1.createLibstorefrontModule('multiwishlist', multiwishlist_reducer_1.multiwishlistReducer, multiwishlist_default_1.MultiwishlistDefaultState));
    });
});


/***/ }),

/***/ "./src/service/index.ts":
/*!******************************!*\
  !*** ./src/service/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiwishlistService = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var multiwishlist_thunks_1 = __webpack_require__(/*! ../store/multiwishlist.thunks */ "./src/store/multiwishlist.thunks.ts");
var MultiwishlistService = /** @class */ (function () {
    function MultiwishlistService(store) {
        this.store = store;
    }
    /**
     * Creates a new wishlist for a customer
     * @param {Multiwishlist} wishlist
     * @param {boolean} setAsCurrent - Sets new wishlist as current
     * @returns {Promise<Multiwishlist>}
     */
    MultiwishlistService.prototype.createMultiwishlist = function (wishlist, setAsCurrent) {
        return this.store.dispatch(multiwishlist_thunks_1.MultiwishlistThunks.createWishlist({ wishlist: wishlist, setAsCurrent: setAsCurrent }));
    };
    /**
     * Returns list of wishlists for customer
     * @param {number} pageSize
     * @param {number} currentPage
     * @param {string} sortBy - Field by which sort results
     * @param {asc|desc} sortDir - Sorting direction
     */
    MultiwishlistService.prototype.getMultiwishlists = function (withItems) {
        return this.store.dispatch(multiwishlist_thunks_1.MultiwishlistThunks.getMultiwishlists(withItems));
    };
    /**
     * Returns single wishlist details
     * @param {string} wishlistId
     * @param {boolean} setAsCurrent - If true wishlist will be set as current in a state
     */
    MultiwishlistService.prototype.getSingleMultiwishlist = function (wishlistId, setAsCurrent) {
        return this.store.dispatch(multiwishlist_thunks_1.MultiwishlistThunks.getMultiwishlist({ wishlistId: wishlistId, setAsCurrent: setAsCurrent }));
    };
    /**
     * Removes existing wishlist and does state cleanup
     * @param {string} wishlistId
     */
    MultiwishlistService.prototype.deleteMultiwishlist = function (wishlistId) {
        return this.store.dispatch(multiwishlist_thunks_1.MultiwishlistThunks.deleteWishlist(wishlistId));
    };
    /**
     * Adds product to a wishlist
     * @param {Product} product
     * @returns {Multiwishlist} Mutated wishlist
     */
    MultiwishlistService.prototype.addProductToWishlist = function (product, wishlist) {
        return this.store.dispatch(multiwishlist_thunks_1.MultiwishlistThunks.addProductToWishlist(product, wishlist));
    };
    /**
     * Removes product from a wishlist
     * @param {MultiwishlistItem} item
     * @returns {Promise<void>}
     */
    MultiwishlistService.prototype.removeProductFromWishlist = function (item) {
        return this.store.dispatch(multiwishlist_thunks_1.MultiwishlistThunks.removeProductFromWishlist(item));
    };
    MultiwishlistService = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(libstorefront_1.AbstractStore)),
        __metadata("design:paramtypes", [libstorefront_1.AbstractStore])
    ], MultiwishlistService);
    return MultiwishlistService;
}());
exports.MultiwishlistService = MultiwishlistService;


/***/ }),

/***/ "./src/store/multiwishlist.actions.ts":
/*!********************************************!*\
  !*** ./src/store/multiwishlist.actions.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiwishlistActions = void 0;
var MultiwishlistActions;
(function (MultiwishlistActions) {
    var SN_MULTIWISHLIST = 'multiwishlist';
    MultiwishlistActions.SET_MULTIWISHLIST = SN_MULTIWISHLIST + '/SET_MULTIWISHLIST';
    MultiwishlistActions.setMultiwishlist = function (wishlists) { return ({
        type: MultiwishlistActions.SET_MULTIWISHLIST,
        payload: wishlists
    }); };
    MultiwishlistActions.SET_CURRENT = SN_MULTIWISHLIST + '/SET_CURRENT';
    MultiwishlistActions.setCurrent = function (wishlist) { return ({
        type: MultiwishlistActions.SET_CURRENT,
        payload: wishlist
    }); };
    MultiwishlistActions.DELETE_MULTIWISHLIST = SN_MULTIWISHLIST + '/DELETE';
    MultiwishlistActions.deleteMultiwishlist = function (wishlistId) { return ({
        type: MultiwishlistActions.DELETE_MULTIWISHLIST,
        payload: wishlistId
    }); };
    MultiwishlistActions.ADD_PRODUCT = SN_MULTIWISHLIST + '/ADD_PRODUCT';
    MultiwishlistActions.addProductToWishlist = function (product, wishlist) { return ({
        type: MultiwishlistActions.ADD_PRODUCT,
        payload: {
            product: product,
            wishlist: wishlist
        }
    }); };
    MultiwishlistActions.REMOVE_PRODUCT = SN_MULTIWISHLIST + '/REMOVE_PRODUCT';
    MultiwishlistActions.removeProductFromWishlist = function (product) { return ({
        type: MultiwishlistActions.REMOVE_PRODUCT,
        payload: product
    }); };
})(MultiwishlistActions = exports.MultiwishlistActions || (exports.MultiwishlistActions = {}));


/***/ }),

/***/ "./src/store/multiwishlist.default.ts":
/*!********************************************!*\
  !*** ./src/store/multiwishlist.default.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiwishlistDefaultState = void 0;
exports.MultiwishlistDefaultState = {
    items: [],
    current: null
};


/***/ }),

/***/ "./src/store/multiwishlist.reducer.ts":
/*!********************************************!*\
  !*** ./src/store/multiwishlist.reducer.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiwishlistReducer = void 0;
var multiwishlist_default_1 = __webpack_require__(/*! ./multiwishlist.default */ "./src/store/multiwishlist.default.ts");
var multiwishlist_actions_1 = __webpack_require__(/*! ./multiwishlist.actions */ "./src/store/multiwishlist.actions.ts");
var uniqBy_1 = __importDefault(__webpack_require__(/*! lodash/uniqBy */ "lodash/uniqBy"));
var multiwishlistReducer = function (state, action) {
    switch (action.type) {
        case multiwishlist_actions_1.MultiwishlistActions.SET_MULTIWISHLIST: {
            var items = action.payload.items;
            return __assign(__assign({}, state), { items: items });
        }
        case multiwishlist_actions_1.MultiwishlistActions.SET_CURRENT: {
            return __assign(__assign({}, state), { current: action.payload });
        }
        case multiwishlist_actions_1.MultiwishlistActions.DELETE_MULTIWISHLIST: {
            var lists = state.items.filter(function (_a) {
                var wishlist_id = _a.wishlist_id;
                return wishlist_id !== action.payload;
            });
            var isCurrent = state.current ? state.current.wishlist_id === action.payload : false;
            return __assign(__assign({}, state), { items: lists, current: isCurrent ? null : state.current });
        }
        case multiwishlist_actions_1.MultiwishlistActions.ADD_PRODUCT: {
            var _a = action.payload, product = _a.product, wishlist_1 = _a.wishlist;
            if (!wishlist_1.items) {
                wishlist_1.items = [];
            }
            wishlist_1.items = uniqBy_1.default(__spreadArrays(wishlist_1.items, [__assign(__assign({}, product), { product_id: String(product.id) })]), 'product_id');
            return __assign(__assign({}, state), { current: (state.current && wishlist_1.wishlist_id === state.current.wishlist_id) ? wishlist_1 : state.current, items: state.items.map(function (w) { return w.wishlist_id === wishlist_1.wishlist_id ? wishlist_1 : w; }) });
        }
        case multiwishlist_actions_1.MultiwishlistActions.REMOVE_PRODUCT: {
            var product_1 = action.payload;
            var wishlists = state.items.map(function (w) { return w.items.filter(function (_a) {
                var item_id = _a.item_id;
                return item_id !== product_1.item_id;
            }); });
            var current = state.current ? state.current.items.filter(function (_a) {
                var item_id = _a.item_id;
                return item_id !== product_1.item_id;
            }) : null;
            return __assign(__assign({}, state), { items: wishlists, current: current });
        }
        default: return state || multiwishlist_default_1.MultiwishlistDefaultState;
    }
};
exports.multiwishlistReducer = multiwishlistReducer;


/***/ }),

/***/ "./src/store/multiwishlist.thunks.ts":
/*!*******************************************!*\
  !*** ./src/store/multiwishlist.thunks.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiwishlistThunks = void 0;
var libstorefront_1 = __webpack_require__(/*! @grupakmk/libstorefront */ "@grupakmk/libstorefront");
var dao_1 = __webpack_require__(/*! ../dao */ "./src/dao/index.ts");
var multiwishlist_actions_1 = __webpack_require__(/*! ./multiwishlist.actions */ "./src/store/multiwishlist.actions.ts");
var MultiwishlistThunks;
(function (MultiwishlistThunks) {
    var _this = this;
    MultiwishlistThunks.getMultiwishlists = function (withItems) { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var userState, storeCode, response, items, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    userState = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().user;
                    storeCode = libstorefront_1.StoreViewHandler.currentStoreView().general.store_code;
                    if (!userState || !userState.token) {
                        throw new Error('Cannot fetch multiwishlist for unauthorized user');
                    }
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.MultiwishlistDao).getMultiwishlists(userState.current.id, withItems, storeCode, userState.token)];
                case 1:
                    response = _a.sent();
                    if (!(response && response.code === libstorefront_1.HttpStatus.OK)) return [3 /*break*/, 3];
                    items = response.result;
                    return [4 /*yield*/, dispatch(multiwishlist_actions_1.MultiwishlistActions.setMultiwishlist({ items: items }))];
                case 2:
                    _a.sent();
                    return [2 /*return*/, items];
                case 3: throw new Error('Empty list');
                case 4: return [3 /*break*/, 6];
                case 5:
                    e_1 = _a.sent();
                    libstorefront_1.Logger.warn("Unable to fetch multiwishlists", 'multiwishlist', e_1.message);
                    return [2 /*return*/, null];
                case 6: return [2 /*return*/];
            }
        });
    }); }; };
    MultiwishlistThunks.getMultiwishlist = function (_a) {
        var wishlistId = _a.wishlistId, _b = _a.setAsCurrent, setAsCurrent = _b === void 0 ? false : _b;
        return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
            var userState, storeCode, response, wishlist, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        if (!wishlistId) {
                            throw new Error('Wishlist id is undefined');
                        }
                        userState = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().user;
                        storeCode = libstorefront_1.StoreViewHandler.currentStoreView().general.store_code;
                        if (!userState.token) {
                            throw new Error('Cannot fetch multiwishlist for unauthorized user');
                        }
                        return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.MultiwishlistDao).getMultiwishlist(wishlistId, storeCode, userState.token)];
                    case 1:
                        response = _a.sent();
                        if (!(response && response.code === libstorefront_1.HttpStatus.OK)) return [3 /*break*/, 4];
                        wishlist = response.result instanceof Array ? response.result[0] : response.result;
                        if (!setAsCurrent) return [3 /*break*/, 3];
                        return [4 /*yield*/, dispatch(multiwishlist_actions_1.MultiwishlistActions.setCurrent(wishlist))];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, wishlist];
                    case 4: throw new Error('Multiwishlist not found');
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_2 = _a.sent();
                        libstorefront_1.Logger.error('Cannot fetch multiwishlist: ', 'multiwishlist', e_2.message);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
    };
    MultiwishlistThunks.createWishlist = function (_a) {
        var wishlist = _a.wishlist, _b = _a.setAsCurrent, setAsCurrent = _b === void 0 ? false : _b;
        return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
            var userState, storeCode, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userState = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().user;
                        storeCode = libstorefront_1.StoreViewHandler.currentStoreView().general.store_code;
                        if (!userState.current || !userState.token) {
                            throw new Error('Cannot create multiwishlist for unauthorized user');
                        }
                        return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.MultiwishlistDao).createMultiwishlist(__assign(__assign({}, wishlist), { customer_id: userState.current.id }), storeCode, userState.token)];
                    case 1:
                        response = _a.sent();
                        if (!(response && response.code === libstorefront_1.HttpStatus.OK && setAsCurrent)) return [3 /*break*/, 3];
                        return [4 /*yield*/, dispatch(multiwishlist_actions_1.MultiwishlistActions.setCurrent(response.result))];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, response.result];
                }
            });
        }); };
    };
    MultiwishlistThunks.deleteWishlist = function (wishlistId) { return function (dispatch, getState) { return __awaiter(_this, void 0, void 0, function () {
        var userState, storeCode, e_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    if (!wishlistId) {
                        throw new Error('Wishlist id is undefined');
                    }
                    userState = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().user;
                    storeCode = libstorefront_1.StoreViewHandler.currentStoreView().general.store_code;
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.MultiwishlistDao).deleteMultiwishlist(wishlistId, storeCode, userState.token)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, dispatch(multiwishlist_actions_1.MultiwishlistActions.deleteMultiwishlist(wishlistId))];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    e_3 = _a.sent();
                    libstorefront_1.Logger.error('Unable to delete wishlist', 'multiwishlist', e_3.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }; };
    MultiwishlistThunks.addProductToWishlist = function (product, wishlist) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
        var userState, storeCode, response, e_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    if (!wishlist || !wishlist.hasOwnProperty('wishlist_id')) {
                        throw new Error('Wishlist is undefined');
                    }
                    if (!product || !product.hasOwnProperty('id')) {
                        throw new Error('Product is not valid');
                    }
                    userState = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().user;
                    storeCode = libstorefront_1.StoreViewHandler.currentStoreView().general.store_code;
                    if (!userState.current || !userState.token) {
                        throw new Error('Cannot create multiwishlist for unauthorized user');
                    }
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.MultiwishlistDao).addProductToWishlist(wishlist.wishlist_id, product.id, storeCode, userState.token)];
                case 1:
                    response = _a.sent();
                    if (!(response && response.code === libstorefront_1.HttpStatus.OK)) return [3 /*break*/, 3];
                    return [4 /*yield*/, dispatch(multiwishlist_actions_1.MultiwishlistActions.addProductToWishlist(product, response.result instanceof Array ? response.result[0] : response.result))];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    e_4 = _a.sent();
                    libstorefront_1.Logger.warn('Cannot add product to wishlist: ', 'multiwishlist', e_4.message);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); }; };
    MultiwishlistThunks.removeProductFromWishlist = function (product) { return function (dispatch) { return __awaiter(_this, void 0, void 0, function () {
        var userState, storeCode, response, e_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 4, , 5]);
                    if (!product || !product.hasOwnProperty('item_id')) {
                        throw new Error('Product is not valid');
                    }
                    userState = libstorefront_1.IOCContainer.get(libstorefront_1.AbstractStore).getState().user;
                    storeCode = libstorefront_1.StoreViewHandler.currentStoreView().general.store_code;
                    if (!userState.current || !userState.token) {
                        throw new Error('Cannot create multiwishlist for unauthorized user');
                    }
                    return [4 /*yield*/, libstorefront_1.IOCContainer.get(dao_1.MultiwishlistDao).removeProductFromWishlist(product.item_id, storeCode, userState.token)];
                case 1:
                    response = _a.sent();
                    if (!(response && response.code === libstorefront_1.HttpStatus.OK)) return [3 /*break*/, 3];
                    return [4 /*yield*/, dispatch(multiwishlist_actions_1.MultiwishlistActions.removeProductFromWishlist(product))];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [3 /*break*/, 5];
                case 4:
                    e_5 = _a.sent();
                    if (e_5 instanceof Error) {
                        libstorefront_1.Logger.warn('Cannot remove product from wishlist: ', 'multiwishlist', e_5.message);
                    }
                    else {
                        throw e_5;
                    }
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    }); }; };
})(MultiwishlistThunks = exports.MultiwishlistThunks || (exports.MultiwishlistThunks = {}));


/***/ }),

/***/ "./src/types/index.ts":
/*!****************************!*\
  !*** ./src/types/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "@grupakmk/libstorefront":
/*!******************************************!*\
  !*** external "@grupakmk/libstorefront" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@grupakmk/libstorefront");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ }),

/***/ "lodash/uniqBy":
/*!********************************!*\
  !*** external "lodash/uniqBy" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/uniqBy");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map