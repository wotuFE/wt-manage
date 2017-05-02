webpackJsonp([8], {

    /***/
    414:
    /***/
    (function(module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, "__esModule", {value: true});

        var _view = __webpack_require__(415);

        var _view2 = _interopRequireDefault(_view);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule
                ? obj
                : {
                    default: obj
                };
        }

        exports.default = _view2.default;

        /***/
    }),

    /***/
    415:
    /***/
    (function(module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, "__esModule", {value: true});

        var _getPrototypeOf = __webpack_require__(311);

        var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

        var _classCallCheck2 = __webpack_require__(316);

        var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

        var _createClass2 = __webpack_require__(317);

        var _createClass3 = _interopRequireDefault(_createClass2);

        var _possibleConstructorReturn2 = __webpack_require__(321);

        var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

        var _inherits2 = __webpack_require__(355);

        var _inherits3 = _interopRequireDefault(_inherits2);

        var _react = __webpack_require__(24);

        var _react2 = _interopRequireDefault(_react);

        var _reactDom = __webpack_require__(59);

        var _reactDom2 = _interopRequireDefault(_reactDom);

        __webpack_require__(416);

        var _reactRouter = __webpack_require__(228);

        var _Dialog = __webpack_require__(419);

        var _Dialog2 = _interopRequireDefault(_Dialog);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule
                ? obj
                : {
                    default: obj
                };
        }

        var Header = function(_React$Component) {
            (0, _inherits3.default)(Header, _React$Component);

            function Header(props) {
                (0, _classCallCheck3.default)(this, Header);
                return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));
            }(0, _createClass3.default)(Header, [
                {
                    key: 'render',
                    value: function render() {
                        var title = this.props.title;

                        return _react2.default.createElement('div', null, _react2.default.createElement('div', {
                            className: 'nav'
                        }, _react2.default.createElement(_reactRouter.Link, {
                            to: '/'
                        }, _react2.default.createElement('i', null)), _react2.default.createElement('span', null, title), _react2.default.createElement('span', {
                            onClick: this.props.edit,
                            className: 'edit'
                        }, this.props.editText)));
                    }
                }
            ]);
            return Header;
        }(_react2.default.Component);

        exports.default = Header;

        /***/
    }),

    /***/
    416:
    /***/
    (function(module, exports, __webpack_require__) {

        // style-loader: Adds some css to the DOM by adding a <style> tag

        // load the styles
        var content = __webpack_require__(417);
        if (typeof content === 'string')
            content = [
                [module.id, content, '']
            ];

        // add the styles to the DOM
        var update = __webpack_require__(387)(content, {});
        if (content.locals)
            module.exports = content.locals;

        // Hot Module Replacement
        if (true) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept(417, function() {
                    var newContent = __webpack_require__(417);
                    if (typeof newContent === 'string')
                        newContent = [
                            [module.id, newContent, '']
                        ];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function() {
                update();
            });
        }

        /***/
    }),

    /***/
    417:
    /***/
    (function(module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(386)();
        // imports

        // module
        exports.push([
            module.id, ".nav{position:relative;height:1.2rem;box-shadow:0 2px 0 rgba(0,0,0,.17);line-height:1.2rem;color:#999;font-size:.4rem;display:-ms-flexbox;display:flex}.nav a{width:100px}.nav span.edit{-ms-flex-positive:1;flex-grow:1;display:none;-ms-flex-pack:end;justify-content:flex-end;padding-right:.266666rem}.nav i{position:absolute;width:.666666rem;height:.666666rem;background:url(" + __webpack_require__(418) + ") no-repeat;background-size:100% 100%;left:.266666rem;top:50%;margin-top:-.373333rem}",
            "", {
                "version": 3,
                "sources": ["/Users/huruqing/work/store/src/components/Header/src/components/Header/Header.scss"],
                "names": [],
                "mappings": "AAAA,KACI,kBAAkB,cAEJ,mCACyB,mBACpB,WACR,gBACM,oBACjB,YAAa,CARjB,OAUQ,WAAY,CAVpB,eAaQ,oBAAA,YAAY,aACC,kBACb,yBAAyB,wBACC,CAhBlC,OAmBQ,kBAAkB,iBACA,kBACC,mDACiC,0BAC1B,gBACT,QACT,sBACgB,CAC3B",
                "file": "Header.scss",
                "sourcesContent": [".nav {\n    position: relative;\n//  padding-left: 1.026666rem;\n    height: 1.2rem;\n    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.17);\n    line-height: 1.2rem;\n    color: #999;\n    font-size: 0.4rem;\n    display: flex;\n    a {\n        width: 100px;\n    }\n    span.edit {\n        flex-grow: 1;\n        display: none;\n        justify-content: flex-end;\n        padding-right: 0.266666rem;\n    }\n    i {\n        position: absolute;\n        width: 0.666666rem;\n        height: 0.666666rem;\n        background: url(../../images/icon-home.png)no-repeat;\n        background-size: 100% 100%;\n        left: 0.266666rem;\n        top: 50%;\n        margin-top: -0.373333rem;\n    }\n}"],
                "sourceRoot": ""
            }
        ]);

        // exports

        /***/
    }),

    /***/
    418:
    /***/
    (function(module, exports) {

        module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmODdmNDNkYi02NjY1LWUzNGEtOTc1Yi00OTRiNjA1MzYzZWYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDI1MTFEOTY2Njc3MTFFNTkyOTQ4OTEzNzFFMDhBRjUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDI1MTFEOTU2Njc3MTFFNTkyOTQ4OTEzNzFFMDhBRjUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjY4MGYxYmY1LWUxYmUtNDY0Zi05ZmM2LTVlZWM3YzU2ZDMyZSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpmODdmNDNkYi02NjY1LWUzNGEtOTc1Yi00OTRiNjA1MzYzZWYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6Z4+cfAAACgElEQVR42ryXX2hOcRjHz/FuRlayhVqtFBfuTOFC82/Kv1xIKUV2o9mlP1dmSWR3uCNRu7EbEqIsTO1CK6RFmeUlJt4sWy1imrw+j77T6XTO7D2/c96nPr3n/T2/5/l93/f5/Tt+savKc7D5cBJ2QQ5uwDEoJE3oOwhaCndhUaj9A2yGgSRJZyQU0wC9ATFfhFm9fA3lErQSemABjEMrLBQtarNSPlTfTAU1wn2ogW+wBS7Cb3FJbeabp76NWQlqgm6YC2OwSaUJW698Y+rbrdhUBdmvvgNzYEQD9E3Rv099RhRjsVvTErQDbsFs+KyBnk0jzvpsUIzF3lQuJ0G74SrMhE+wHp6XUOYXivmoHNeUM5GgZrgClfAe1sCrBKvSYtbCO6hQzuZSBR2ATu2+eSV867CjW+w65copd+t0BR2EC7aLa7c1MUOeuw0p14Byn4dD/xN0FM4poF/1L3jpWUE5+zXGWY0ZKegUdOj5KWyEYS99G1buJ/reobH/CaqGM9AeOBwPw3cvO7PcRwJToV0aqu20f83DkoigUdgZsxu7mE3u61Ab4cvbPzQIxQhnTaCEadrpGDGmYdAEbVfpfFGpZWk2KwNB9frs1FiT4/7VErXsf8EDPddmOI96NFZJR4efoaBimjfGzKzCIdZO/b3aNoJml7MulaRsglbBPZ1LUbYPVsPjcglqkhibB5fhjdoXw375tpVTUPAS1hJqWw4rINH7leuk/hHRNu6SMOmyd/lnfZeS1cGe0E2xSq/OcXvJZJtd6m/Dz9Dbbl0SQXl95nTljLOXMfdou+4ug0dTxOZLKZmtjjb4GuOf0PvW8QjfCfkmYmJHlTtyBf4RYABe0YopALdNgAAAAABJRU5ErkJggg=="

        /***/
    }),

    /***/
    419:
    /***/
    (function(module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, "__esModule", {value: true});

        var _getPrototypeOf = __webpack_require__(311);

        var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

        var _classCallCheck2 = __webpack_require__(316);

        var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

        var _createClass2 = __webpack_require__(317);

        var _createClass3 = _interopRequireDefault(_createClass2);

        var _possibleConstructorReturn2 = __webpack_require__(321);

        var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

        var _inherits2 = __webpack_require__(355);

        var _inherits3 = _interopRequireDefault(_inherits2);

        var _react = __webpack_require__(24);

        var _react2 = _interopRequireDefault(_react);

        __webpack_require__(420);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule
                ? obj
                : {
                    default: obj
                };
        }

        var Dialog = function(_Component) {
            (0, _inherits3.default)(Dialog, _Component);

            function Dialog(props) {
                (0, _classCallCheck3.default)(this, Dialog);

                var _this = (0, _possibleConstructorReturn3.default)(this, (Dialog.__proto__ || (0, _getPrototypeOf2.default)(Dialog)).call(this, props));

                _this.sure = _this.sure.bind(_this);
                _this.cancel = _this.cancel.bind(_this);
                return _this;
            }(0, _createClass3.default)(Dialog, [
                {
                    key: 'sure',
                    value: function sure() {
                        this.setState({show: false});
                        this.props.sure();
                    }
                }, {
                    key: 'cancel',
                    value: function cancel() {
                        this.setState({show: true});
                        this.props.cancel();
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        var msg = this.props.msg;

                        return _react2.default.createElement('div', null, _react2.default.createElement('div', {
                            className: 'dialog'
                        }, _react2.default.createElement('h5', null, ' \u6E29\u99A8\u63D0\u793A '), _react2.default.createElement('div', {
                            className: 'content'
                        }, msg || '你想说什么?'), _react2.default.createElement('div', {
                            className: 'confirm'
                        }, _react2.default.createElement('span', {
                            onClick: this.cancel
                        }, '\u53D6\u6D88'), _react2.default.createElement('span', {
                            onClick: this.sure
                        }, '\u786E\u8BA4'))), _react2.default.createElement('div', {className: 'layout'}));
                    }
                }
            ]);
            return Dialog;
        }(_react.Component);

        exports.default = Dialog;

        /***/
    }),

    /***/
    420:
    /***/
    (function(module, exports, __webpack_require__) {

        // style-loader: Adds some css to the DOM by adding a <style> tag

        // load the styles
        var content = __webpack_require__(421);
        if (typeof content === 'string')
            content = [
                [module.id, content, '']
            ];

        // add the styles to the DOM
        var update = __webpack_require__(387)(content, {});
        if (content.locals)
            module.exports = content.locals;

        // Hot Module Replacement
        if (true) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept(421, function() {
                    var newContent = __webpack_require__(421);
                    if (typeof newContent === 'string')
                        newContent = [
                            [module.id, newContent, '']
                        ];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function() {
                update();
            });
        }

        /***/
    }),

    /***/
    421:
    /***/
    (function(module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(386)();
        // imports

        // module
        exports.push([
            module.id,
            ".layout{opacity:.6;background-color:#000;z-index:100;position:fixed;height:100%;width:100%;top:0;left:0}.dialog{position:absolute;z-index:101;height:2.666666rem;width:5.333333rem;left:2.333333rem;top:4rem;background:#fff}.dialog h5{padding-left:.266666rem;height:.8rem;line-height:.8rem;font-size:.426666rem;border-bottom:1px solid #999}.dialog .content{line-height:1.066666rem;padding:0 .266666rem}.dialog .confirm{padding-right:.4rem;text-align:right}.dialog .confirm span{width:1.066666rem;height:.533333rem;color:orange;font-size:.373333rem;margin-left:.266666rem}",
            "", {
                "version": 3,
                "sources": ["/Users/huruqing/work/store/src/components/Dialog/src/components/Dialog/index.scss"],
                "names": [],
                "mappings": "AAAA,QACI,WAAW,sBACc,YACb,eACG,YACH,WACD,MACH,MACC,CACZ,QAGG,kBAAkB,YACN,mBACO,kBACD,iBACD,SACR,eACO,CAPpB,WASQ,wBAAyB,aACX,kBACK,qBACG,4BACU,CAbxC,iBAgBQ,wBAAwB,oBACF,CAjB9B,iBAoBQ,oBAAqB,gBACJ,CArBzB,sBAuBY,kBAAkB,kBACC,aACN,qBACS,sBACE,CAC3B",
                "file": "index.scss",
                "sourcesContent": [".layout {\n    opacity: .6;\n    background-color: #000000;\n    z-index: 100;\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    top: 0px;\n    left: 0px;\n}\n\n.dialog {\n    position: absolute;\n    z-index: 101;\n    height: 2.666666rem;\n    width: 5.333333rem;\n    left: 2.333333rem;\n    top: 4rem;\n    background: #fff;\n    h5 {\n        padding-left: 0.266666rem;\n        height: 0.8rem;\n        line-height: 0.8rem;\n        font-size: 0.426666rem;\n        border-bottom: 1px solid #999999;\n    }\n    .content {\n        line-height: 1.066666rem;\n        padding: 0 0.266666rem;\n    }\n    .confirm {\n        padding-right: 0.4rem;\n        text-align: right;\n        span {\n            width: 1.066666rem;\n            height: 0.533333rem;\n            color: orange;\n            font-size: 0.373333rem;\n            margin-left: 0.266666rem;\n        }\n    }\n}"],
                "sourceRoot": ""
            }
        ]);

        // exports

        /***/
    }),

    /***/
    422:
    /***/
    (function(module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, "__esModule", {value: true});
        exports.post = exports.get = undefined;

        var _axios = __webpack_require__(423);

        var _axios2 = _interopRequireDefault(_axios);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule
                ? obj
                : {
                    default: obj
                };
        }

        var get = exports.get = function get(url) {
            var params = arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {};
            var suc = arguments[2];
            var msg = arguments.length > 3 && arguments[3] !== undefined
                ? arguments[3]
                : '请求失败';

            var options = {
                url: url,
                params: params
            };
            (0, _axios2.default)(url, options).then(function(res) {
                suc(res.data);
            }).catch(function(e) {
                console.log(e);
                // alert(url + msg);
            });
        };
        var post = exports.post = function post(url, params, suc, msg) {
            _axios2.default.post(url, params).then(function(res) {
                suc(res.data);
            }).catch(function(e) {
                console.log(e);
                // alert(url + msg);
            });
        };

        /***/
    }),

    /***/
    423:
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__(424);

        /***/
    }),

    /***/
    424:
    /***/
    (function(module, exports, __webpack_require__) {

        'use strict';

        var utils = __webpack_require__(425);
        var bind = __webpack_require__(430);
        var Axios = __webpack_require__(431);
        var defaults = __webpack_require__(432);

        /**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
        function createInstance(defaultConfig) {
            var context = new Axios(defaultConfig);
            var instance = bind(Axios.prototype.request, context);

            // Copy axios.prototype to instance
            utils.extend(instance, Axios.prototype, context);

            // Copy context to instance
            utils.extend(instance, context);

            return instance;
        }

        // Create the default instance to be exported
        var axios = createInstance(defaults);

        // Expose Axios class to allow class inheritance
        axios.Axios = Axios;

        // Factory for creating new instances
        axios.create = function create(instanceConfig) {
            return createInstance(utils.merge(defaults, instanceConfig));
        };

        // Expose Cancel & CancelToken
        axios.Cancel = __webpack_require__(449);
        axios.CancelToken = __webpack_require__(450);
        axios.isCancel = __webpack_require__(446);

        // Expose all/spread
        axios.all = function all(promises) {
            return Promise.all(promises);
        };
        axios.spread = __webpack_require__(451);

        module.exports = axios;

        // Allow use of default import syntax in TypeScript
        module.exports.default = axios;

        /***/
    }),

    /***/
    425:
    /***/
    (function(module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */
        (function(Buffer) {
            'use strict';

            var bind = __webpack_require__(430);

            /*global toString:true*/

            // utils is a library of generic helper functions non-specific to axios

            var toString = Object.prototype.toString;

            /**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
            function isArray(val) {
                return toString.call(val) === '[object Array]';
            }

            /**
	 * Determine if a value is a Node Buffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Node Buffer, otherwise false
	 */
            function isBuffer(val) {
                return ((typeof Buffer !== 'undefined') && (Buffer.isBuffer) && (Buffer.isBuffer(val)));
            }

            /**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
            function isArrayBuffer(val) {
                return toString.call(val) === '[object ArrayBuffer]';
            }

            /**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
            function isFormData(val) {
                return (typeof FormData !== 'undefined') && (val instanceof FormData);
            }

            /**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
            function isArrayBufferView(val) {
                var result;
                if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
                    result = ArrayBuffer.isView(val);
                } else {
                    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
                }
                return result;
            }

            /**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
            function isString(val) {
                return typeof val === 'string';
            }

            /**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
            function isNumber(val) {
                return typeof val === 'number';
            }

            /**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
            function isUndefined(val) {
                return typeof val === 'undefined';
            }

            /**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
            function isObject(val) {
                return val !== null && typeof val === 'object';
            }

            /**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
            function isDate(val) {
                return toString.call(val) === '[object Date]';
            }

            /**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
            function isFile(val) {
                return toString.call(val) === '[object File]';
            }

            /**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
            function isBlob(val) {
                return toString.call(val) === '[object Blob]';
            }

            /**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
            function isFunction(val) {
                return toString.call(val) === '[object Function]';
            }

            /**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
            function isStream(val) {
                return isObject(val) && isFunction(val.pipe);
            }

            /**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
            function isURLSearchParams(val) {
                return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
            }

            /**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
            function trim(str) {
                return str.replace(/^\s*/, '').replace(/\s*$/, '');
            }

            /**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  navigator.product -> 'ReactNative'
	 */
            function isStandardBrowserEnv() {
                if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
                    return false;
                }
                return (typeof window !== 'undefined' && typeof document !== 'undefined');
            }

            /**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
            function forEach(obj, fn) {
                // Don't bother if no value provided
                if (obj === null || typeof obj === 'undefined') {
                    return;
                }

                // Force an array if not already something iterable
                if (typeof obj !== 'object' && !isArray(obj)) {
                    /*eslint no-param-reassign:0*/
                    obj = [obj];
                }

                if (isArray(obj)) {
                    // Iterate over array values
                    for (var i = 0, l = obj.length; i < l; i++) {
                        fn.call(null, obj[i], i, obj);
                    }
                } else {
                    // Iterate over object keys
                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key)) {
                            fn.call(null, obj[key], key, obj);
                        }
                    }
                }
            }

            /**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
            function merge(/* obj1, obj2, obj3, ... */) {
                var result = {};
                function assignValue(val, key) {
                    if (typeof result[key] === 'object' && typeof val === 'object') {
                        result[key] = merge(result[key], val);
                    } else {
                        result[key] = val;
                    }
                }

                for (var i = 0, l = arguments.length; i < l; i++) {
                    forEach(arguments[i], assignValue);
                }
                return result;
            }

            /**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
            function extend(a, b, thisArg) {
                forEach(b, function assignValue(val, key) {
                    if (thisArg && typeof val === 'function') {
                        a[key] = bind(val, thisArg);
                    } else {
                        a[key] = val;
                    }
                });
                return a;
            }

            module.exports = {
                isArray: isArray,
                isArrayBuffer: isArrayBuffer,
                isBuffer: isBuffer,
                isFormData: isFormData,
                isArrayBufferView: isArrayBufferView,
                isString: isString,
                isNumber: isNumber,
                isObject: isObject,
                isUndefined: isUndefined,
                isDate: isDate,
                isFile: isFile,
                isBlob: isBlob,
                isFunction: isFunction,
                isStream: isStream,
                isURLSearchParams: isURLSearchParams,
                isStandardBrowserEnv: isStandardBrowserEnv,
                forEach: forEach,
                merge: merge,
                extend: extend,
                trim: trim
            };

            /* WEBPACK VAR INJECTION */
        }.call(exports, __webpack_require__(426).Buffer))

        /***/
    }),

    /***/
    426:
    /***/
    (function(module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */
        (function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
            /* eslint-disable no-proto */

            'use strict'

            var base64 = __webpack_require__(427)
            var ieee754 = __webpack_require__(428)
            var isArray = __webpack_require__(429)

            exports.Buffer = Buffer
            exports.SlowBuffer = SlowBuffer
            exports.INSPECT_MAX_BYTES = 50

            /**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
            Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
                ? global.TYPED_ARRAY_SUPPORT
                : typedArraySupport()

            /*
	 * Export kMaxLength after typed array support is determined.
	 */
            exports.kMaxLength = kMaxLength()

            function typedArraySupport() {
                try {
                    var arr = new Uint8Array(1)
                    arr.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function() {
                            return 42
                        }
                    }
                    return arr.foo() === 42 && // typed array instances can be augmented
                    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
                    arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
                } catch (e) {
                    return false
                }
            }

            function kMaxLength() {
                return Buffer.TYPED_ARRAY_SUPPORT
                    ? 0x7fffffff
                    : 0x3fffffff
            }

            function createBuffer(that, length) {
                if (kMaxLength() < length) {
                    throw new RangeError('Invalid typed array length')
                }
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    // Return an augmented `Uint8Array` instance, for best performance
                    that = new Uint8Array(length)
                    that.__proto__ = Buffer.prototype
                } else {
                    // Fallback: Return an object instance of the Buffer class
                    if (that === null) {
                        that = new Buffer(length)
                    }
                    that.length = length
                }

                return that
            }

            /**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

            function Buffer(arg, encodingOrOffset, length) {
                if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
                    return new Buffer(arg, encodingOrOffset, length)
                }

                // Common case.
                if (typeof arg === 'number') {
                    if (typeof encodingOrOffset === 'string') {
                        throw new Error('If encoding is specified then the first argument must be a string')
                    }
                    return allocUnsafe(this, arg)
                }
                return from(this, arg, encodingOrOffset, length)
            }

            Buffer.poolSize = 8192 // not used by this implementation

            // TODO: Legacy, not needed anymore. Remove in next major version.
            Buffer._augment = function(arr) {
                arr.__proto__ = Buffer.prototype
                return arr
            }
            function from(that, value, encodingOrOffset, length) {
                if (typeof value === 'number') {
                    throw new TypeError('"value" argument must not be a number')
                }

                if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
                    return fromArrayBuffer(that, value, encodingOrOffset, length)
                }

                if (typeof value === 'string') {
                    return fromString(that, value, encodingOrOffset)
                }

                return fromObject(that, value)
            }

            /**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
            Buffer.from = function(value, encodingOrOffset, length) {
                return from(null, value, encodingOrOffset, length)
            }

            if (Buffer.TYPED_ARRAY_SUPPORT) {
                Buffer.prototype.__proto__ = Uint8Array.prototype
                Buffer.__proto__ = Uint8Array
                if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
                    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
                    Object.defineProperty(Buffer, Symbol.species, {
                        value: null,
                        configurable: true
                    })
                }
            }

            function assertSize(size) {
                if (typeof size !== 'number') {
                    throw new TypeError('"size" argument must be a number')
                } else if (size < 0) {
                    throw new RangeError('"size" argument must not be negative')
                }
            }

            function alloc(that, size, fill, encoding) {
                assertSize(size)
                if (size <= 0) {
                    return createBuffer(that, size)
                }
                if (fill !== undefined) {
                    // Only pay attention to encoding if it's a string. This
                    // prevents accidentally sending in a number that would
                    // be interpretted as a start offset.
                    return typeof encoding === 'string'
                        ? createBuffer(that, size).fill(fill, encoding)
                        : createBuffer(that, size).fill(fill)
                }
                return createBuffer(that, size)
            }

            /**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
            Buffer.alloc = function(size, fill, encoding) {
                return alloc(null, size, fill, encoding)
            }

            function allocUnsafe(that, size) {
                assertSize(size)
                that = createBuffer(that, size < 0
                    ? 0
                    : checked(size) | 0)
                if (!Buffer.TYPED_ARRAY_SUPPORT) {
                    for (var i = 0; i < size; ++i) {
                        that[i] = 0
                    }
                }
                return that
            }

            /**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
            Buffer.allocUnsafe = function(size) {
                return allocUnsafe(null, size)
            }
            /**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
            Buffer.allocUnsafeSlow = function(size) {
                return allocUnsafe(null, size)
            }

            function fromString(that, string, encoding) {
                if (typeof encoding !== 'string' || encoding === '') {
                    encoding = 'utf8'
                }

                if (!Buffer.isEncoding(encoding)) {
                    throw new TypeError('"encoding" must be a valid string encoding')
                }

                var length = byteLength(string, encoding) | 0
                that = createBuffer(that, length)

                var actual = that.write(string, encoding)

                if (actual !== length) {
                    // Writing a hex string, for example, that contains invalid characters will
                    // cause everything after the first invalid character to be ignored. (e.g.
                    // 'abxxcd' will be treated as 'ab')
                    that = that.slice(0, actual)
                }

                return that
            }

            function fromArrayLike(that, array) {
                var length = array.length < 0
                    ? 0
                    : checked(array.length) | 0
                that = createBuffer(that, length)
                for (var i = 0; i < length; i += 1) {
                    that[i] = array[i] & 255
                }
                return that
            }

            function fromArrayBuffer(that, array, byteOffset, length) {
                array.byteLength // this throws if `array` is not a valid ArrayBuffer

                if (byteOffset < 0 || array.byteLength < byteOffset) {
                    throw new RangeError('\'offset\' is out of bounds')
                }

                if (array.byteLength < byteOffset + (length || 0)) {
                    throw new RangeError('\'length\' is out of bounds')
                }

                if (byteOffset === undefined && length === undefined) {
                    array = new Uint8Array(array)
                } else if (length === undefined) {
                    array = new Uint8Array(array, byteOffset)
                } else {
                    array = new Uint8Array(array, byteOffset, length)
                }

                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    // Return an augmented `Uint8Array` instance, for best performance
                    that = array
                    that.__proto__ = Buffer.prototype
                } else {
                    // Fallback: Return an object instance of the Buffer class
                    that = fromArrayLike(that, array)
                }
                return that
            }

            function fromObject(that, obj) {
                if (Buffer.isBuffer(obj)) {
                    var len = checked(obj.length) | 0
                    that = createBuffer(that, len)

                    if (that.length === 0) {
                        return that
                    }

                    obj.copy(that, 0, 0, len)
                    return that
                }

                if (obj) {
                    if ((typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
                        if (typeof obj.length !== 'number' || isnan(obj.length)) {
                            return createBuffer(that, 0)
                        }
                        return fromArrayLike(that, obj)
                    }

                    if (obj.type === 'Buffer' && isArray(obj.data)) {
                        return fromArrayLike(that, obj.data)
                    }
                }

                throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
            }

            function checked(length) {
                // Note: cannot use `length < kMaxLength()` here because that fails when
                // length is NaN (which is otherwise coerced to zero.)
                if (length >= kMaxLength()) {
                    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                        'size: 0x' + kMaxLength().toString(16) + ' bytes')
                }
                return length | 0
            }

            function SlowBuffer(length) {
                if (+ length != length) { // eslint-disable-line eqeqeq
                    length = 0
                }
                return Buffer.alloc(+ length)
            }

            Buffer.isBuffer = function isBuffer(b) {
                return !!(b != null && b._isBuffer)
            }

            Buffer.compare = function compare(a, b) {
                if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
                    throw new TypeError('Arguments must be Buffers')
                }

                if (a === b)
                    return 0

                var x = a.length
                var y = b.length

                for (var i = 0, len = Math.min(x, y); i < len; ++i) {
                    if (a[i] !== b[i]) {
                        x = a[i]
                        y = b[i]
                        break
                    }
                }

                if (x < y)
                    return -1
                if (y < x)
                    return 1
                return 0
            }

            Buffer.isEncoding = function isEncoding(encoding) {
                switch (String(encoding).toLowerCase()) {
                    case 'hex':
                    case 'utf8':
                    case 'utf-8':
                    case 'ascii':
                    case 'latin1':
                    case 'binary':
                    case 'base64':
                    case 'ucs2':
                    case 'ucs-2':
                    case 'utf16le':
                    case 'utf-16le':
                        return true
                    default:
                        return false
                }
            }

            Buffer.concat = function concat(list, length) {
                if (!isArray(list)) {
                    throw new TypeError('"list" argument must be an Array of Buffers')
                }

                if (list.length === 0) {
                    return Buffer.alloc(0)
                }

                var i
                if (length === undefined) {
                    length = 0
                    for (i = 0; i < list.length; ++i) {
                        length += list[i].length
                    }
                }

                var buffer = Buffer.allocUnsafe(length)
                var pos = 0
                for (i = 0; i < list.length; ++i) {
                    var buf = list[i]
                    if (!Buffer.isBuffer(buf)) {
                        throw new TypeError('"list" argument must be an Array of Buffers')
                    }
                    buf.copy(buffer, pos)
                    pos += buf.length
                }
                return buffer
            }

            function byteLength(string, encoding) {
                if (Buffer.isBuffer(string)) {
                    return string.length
                }
                if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
                    return string.byteLength
                }
                if (typeof string !== 'string') {
                    string = '' + string
                }

                var len = string.length
                if (len === 0)
                    return 0

                    // Use a for loop to avoid recursion
                var loweredCase = false
                for (;;) {
                    switch (encoding) {
                        case 'ascii':
                        case 'latin1':
                        case 'binary':
                            return len
                        case 'utf8':
                        case 'utf-8':
                        case undefined:
                            return utf8ToBytes(string).length
                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le':
                            return len * 2
                        case 'hex':
                            return len >>> 1
                        case 'base64':
                            return base64ToBytes(string).length
                        default:
                            if (loweredCase)
                                return utf8ToBytes(string).length // assume utf8
                            encoding = ('' + encoding).toLowerCase()loweredCase = true
                    }
                }
            }
            Buffer.byteLength = byteLength

            function slowToString(encoding, start, end) {
                var loweredCase = false

                // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
                // property of a typed array.

                // This behaves neither like String nor Uint8Array in that we set start/end
                // to their upper/lower bounds if the value passed is out of range.
                // undefined is handled specially as per ECMA-262 6th Edition,
                // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
                if (start === undefined || start < 0) {
                    start = 0
                }
                // Return early if start > this.length. Done here to prevent potential uint32
                // coercion fail below.
                if (start > this.length) {
                    return ''
                }

                if (end === undefined || end > this.length) {
                    end = this.length
                }

                if (end <= 0) {
                    return ''
                }

                // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
                end >>>= 0
                start >>>= 0

                if (end <= start) {
                    return ''
                }

                if (!encoding)
                    encoding = 'utf8'

                while (true) {
                    switch (encoding) {
                        case 'hex':
                            return hexSlice(this, start, end)

                        case 'utf8':
                        case 'utf-8':
                            return utf8Slice(this, start, end)

                        case 'ascii':
                            return asciiSlice(this, start, end)

                        case 'latin1':
                        case 'binary':
                            return latin1Slice(this, start, end)

                        case 'base64':
                            return base64Slice(this, start, end)

                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le':
                            return utf16leSlice(this, start, end)

                        default:
                            if (loweredCase)
                                throw new TypeError('Unknown encoding: ' + encoding)
                            encoding = (encoding + '').toLowerCase()loweredCase = true
                    }
                }
            }

            // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
            // Buffer instances.
            Buffer.prototype._isBuffer = true

            function swap(b, n, m) {
                var i = b[n]
                b[n] = b[m]
                b[m] = i
            }

            Buffer.prototype.swap16 = function swap16() {
                var len = this.length
                if (len % 2 !== 0) {
                    throw new RangeError('Buffer size must be a multiple of 16-bits')
                }
                for (var i = 0; i < len; i += 2) {
                    swap(this, i, i + 1)
                }
                return this
            }

            Buffer.prototype.swap32 = function swap32() {
                var len = this.length
                if (len % 4 !== 0) {
                    throw new RangeError('Buffer size must be a multiple of 32-bits')
                }
                for (var i = 0; i < len; i += 4) {
                    swap(this, i, i + 3)
                    swap(this, i + 1, i + 2)
                }
                return this
            }

            Buffer.prototype.swap64 = function swap64() {
                var len = this.length
                if (len % 8 !== 0) {
                    throw new RangeError('Buffer size must be a multiple of 64-bits')
                }
                for (var i = 0; i < len; i += 8) {
                    swap(this, i, i + 7)
                    swap(this, i + 1, i + 6)
                    swap(this, i + 2, i + 5)
                    swap(this, i + 3, i + 4)
                }
                return this
            }

            Buffer.prototype.toString = function toString() {
                var length = this.length | 0
                if (length === 0)
                    return ''
                if (arguments.length === 0)
                    return utf8Slice(this, 0, length)
                return slowToString.apply(this, arguments)
            }

            Buffer.prototype.equals = function equals(b) {
                if (!Buffer.isBuffer(b))
                    throw new TypeError('Argument must be a Buffer')
                if (this === b)
                    return true
                return Buffer.compare(this, b) === 0
            }

            Buffer.prototype.inspect = function inspect() {
                var str = ''
                var max = exports.INSPECT_MAX_BYTES
                if (this.length > 0) {
                    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
                    if (this.length > max)
                        str += ' ... '
                }
                return '<Buffer ' + str + '>'
            }

            Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
                if (!Buffer.isBuffer(target)) {
                    throw new TypeError('Argument must be a Buffer')
                }

                if (start === undefined) {
                    start = 0
                }
                if (end === undefined) {
                    end = target
                        ? target.length
                        : 0
                }
                if (thisStart === undefined) {
                    thisStart = 0
                }
                if (thisEnd === undefined) {
                    thisEnd = this.length
                }

                if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
                    throw new RangeError('out of range index')
                }

                if (thisStart >= thisEnd && start >= end) {
                    return 0
                }
                if (thisStart >= thisEnd) {
                    return -1
                }
                if (start >= end) {
                    return 1
                }

                start >>>= 0
                end >>>= 0
                thisStart >>>= 0
                thisEnd >>>= 0

                if (this === target)
                    return 0

                var x = thisEnd - thisStart
                var y = end - start
                var len = Math.min(x, y)

                var thisCopy = this.slice(thisStart, thisEnd)
                var targetCopy = target.slice(start, end)

                for (var i = 0; i < len; ++i) {
                    if (thisCopy[i] !== targetCopy[i]) {
                        x = thisCopy[i]
                        y = targetCopy[i]
                        break
                    }
                }

                if (x < y)
                    return -1
                if (y < x)
                    return 1
                return 0
            }

            // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
            // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
            //
            // Arguments:
            // - buffer - a Buffer to search
            // - val - a string, Buffer, or number
            // - byteOffset - an index into `buffer`; will be clamped to an int32
            // - encoding - an optional encoding, relevant is val is a string
            // - dir - true for indexOf, false for lastIndexOf
            function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
                // Empty buffer means no match
                if (buffer.length === 0)
                    return -1

                    // Normalize byteOffset
                if (typeof byteOffset === 'string') {
                    encoding = byteOffset
                    byteOffset = 0
                } else if (byteOffset > 0x7fffffff) {
                    byteOffset = 0x7fffffff
                } else if (byteOffset < -0 x80000000) {
                    byteOffset = -0 x80000000
                }
                byteOffset = +byteOffset // Coerce to Number.
                if (isNaN(byteOffset)) {
                    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
                    byteOffset = dir
                        ? 0
                        : (buffer.length - 1)
                }

                // Normalize byteOffset: negative offsets start from the end of the buffer
                if (byteOffset < 0)
                    byteOffset = buffer.length + byteOffset
                if (byteOffset >= buffer.length) {
                    if (dir)
                        return -1
                    else
                        byteOffset = buffer.length - 1
                } else if (byteOffset < 0) {
                    if (dir)
                        byteOffset = 0
                    else
                        return -1
                }

                // Normalize val
                if (typeof val === 'string') {
                    val = Buffer.from(val, encoding)
                }

                // Finally, search either indexOf (if dir is true) or lastIndexOf
                if (Buffer.isBuffer(val)) {
                    // Special case: looking for empty string/buffer always fails
                    if (val.length === 0) {
                        return -1
                    }
                    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
                } else if (typeof val === 'number') {
                    val = val & 0xFF // Search for a byte value [0-255]
                    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
                        if (dir) {
                            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
                        }
                    }
                    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
                }

                throw new TypeError('val must be string, number or Buffer')
            }

            function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
                var indexSize = 1
                var arrLength = arr.length
                var valLength = val.length

                if (encoding !== undefined) {
                    encoding = String(encoding).toLowerCase()
                    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
                        if (arr.length < 2 || val.length < 2) {
                            return -1
                        }
                        indexSize = 2
                        arrLength /= 2
                        valLength /= 2
                        byteOffset /= 2
                    }
                }

                function read(buf, i) {
                    if (indexSize === 1) {
                        return buf[i]
                    } else {
                        return buf.readUInt16BE(i * indexSize)
                    }
                }

                var i
                if (dir) {
                    var foundIndex = -1
                    for (i = byteOffset; i < arrLength; i++) {
                        if (read(arr, i) === read(val, foundIndex === -1
                            ? 0
                            : i - foundIndex)) {
                            if (foundIndex === -1)
                                foundIndex = i
                            if (i - foundIndex + 1 === valLength)
                                return foundIndex * indexSize
                        } else {
                            if (foundIndex !== -1)
                                i -= i - foundIndex
                            foundIndex = -1
                        }
                    }
                } else {
                    if (byteOffset + valLength > arrLength)
                        byteOffset = arrLength - valLength
                    for (i = byteOffset; i >= 0; i--) {
                        var found = true
                        for (var j = 0; j < valLength; j++) {
                            if (read(arr, i + j) !== read(val, j)) {
                                found = false
                                break
                            }
                        }
                        if (found)
                            return i
                    }
                }

                return -1
            }

            Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
                return this.indexOf(val, byteOffset, encoding) !== -1
            }

            Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
            }

            Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
                return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
            }

            function hexWrite(buf, string, offset, length) {
                offset = Number(offset) || 0
                var remaining = buf.length - offset
                if (!length) {
                    length = remaining
                } else {
                    length = Number(length)
                    if (length > remaining) {
                        length = remaining
                    }
                }

                // must be an even number of digits
                var strLen = string.length
                if (strLen % 2 !== 0)
                    throw new TypeError('Invalid hex string')

                if (length > strLen / 2) {
                    length = strLen / 2
                }
                for (var i = 0; i < length; ++i) {
                    var parsed = parseInt(string.substr(i * 2, 2), 16)
                    if (isNaN(parsed))
                        return i
                    buf[offset + i] = parsed
                }
                return i
            }

            function utf8Write(buf, string, offset, length) {
                return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
            }

            function asciiWrite(buf, string, offset, length) {
                return blitBuffer(asciiToBytes(string), buf, offset, length)
            }

            function latin1Write(buf, string, offset, length) {
                return asciiWrite(buf, string, offset, length)
            }

            function base64Write(buf, string, offset, length) {
                return blitBuffer(base64ToBytes(string), buf, offset, length)
            }

            function ucs2Write(buf, string, offset, length) {
                return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
            }

            Buffer.prototype.write = function write(string, offset, length, encoding) {
                // Buffer#write(string)
                if (offset === undefined) {
                    encoding = 'utf8'
                    length = this.length
                    offset = 0
                    // Buffer#write(string, encoding)
                } else if (length === undefined && typeof offset === 'string') {
                    encoding = offset
                    length = this.length
                    offset = 0
                    // Buffer#write(string, offset[, length][, encoding])
                } else if (isFinite(offset)) {
                    offset = offset | 0
                    if (isFinite(length)) {
                        length = length | 0
                        if (encoding === undefined)
                            encoding = 'utf8'
                    } else {
                        encoding = length
                        length = undefined
                    }
                    // legacy write(string, encoding, offset, length) - remove in v0.13
                } else {
                    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported')
                }

                var remaining = this.length - offset
                if (length === undefined || length > remaining)
                    length = remaining

                if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
                    throw new RangeError('Attempt to write outside buffer bounds')
                }

                if (!encoding)
                    encoding = 'utf8'

                var loweredCase = false
                for (;;) {
                    switch (encoding) {
                        case 'hex':
                            return hexWrite(this, string, offset, length)

                        case 'utf8':
                        case 'utf-8':
                            return utf8Write(this, string, offset, length)

                        case 'ascii':
                            return asciiWrite(this, string, offset, length)

                        case 'latin1':
                        case 'binary':
                            return latin1Write(this, string, offset, length)

                        case 'base64':
                            // Warning: maxLength not taken into account in base64Write
                            return base64Write(this, string, offset, length)

                        case 'ucs2':
                        case 'ucs-2':
                        case 'utf16le':
                        case 'utf-16le':
                            return ucs2Write(this, string, offset, length)

                        default:
                            if (loweredCase)
                                throw new TypeError('Unknown encoding: ' + encoding)
                            encoding = ('' + encoding).toLowerCase()loweredCase = true
                    }
                }
            }

            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: 'Buffer',
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }

            function base64Slice(buf, start, end) {
                if (start === 0 && end === buf.length) {
                    return base64.fromByteArray(buf)
                } else {
                    return base64.fromByteArray(buf.slice(start, end))
                }
            }

            function utf8Slice(buf, start, end) {
                end = Math.min(buf.length, end)
                var res = []

                var i = start
                while (i < end) {
                    var firstByte = buf[i]
                    var codePoint = null
                    var bytesPerSequence = (firstByte > 0xEF)
                        ? 4
                        : (firstByte > 0xDF)
                            ? 3
                            : (firstByte > 0xBF)
                                ? 2
                                : 1

                    if (i + bytesPerSequence <= end) {
                        var secondByte,
                            thirdByte,
                            fourthByte,
                            tempCodePoint

                        switch (bytesPerSequence) {
                            case 1:
                                if (firstByte < 0x80) {
                                    codePoint = firstByte
                                }
                                break
                            case 2:
                                secondByte = buf[i + 1]
                                if ((secondByte & 0xC0) === 0x80) {
                                    tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
                                    if (tempCodePoint > 0x7F) {
                                        codePoint = tempCodePoint
                                    }
                                }
                                break
                            case 3:
                                secondByte = buf[i + 1]
                                thirdByte = buf[i + 2]
                                if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                                    tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
                                    if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                                        codePoint = tempCodePoint
                                    }
                                }
                                break
                            case 4:
                                secondByte = buf[i + 1]
                                thirdByte = buf[i + 2]
                                fourthByte = buf[i + 3]
                                if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                                    tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
                                    if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                                        codePoint = tempCodePoint
                                    }
                                }
                        }
                    }

                    if (codePoint === null) {
                        // we did not generate a valid codePoint so insert a
                        // replacement char (U+FFFD) and advance only 1 byte
                        codePoint = 0xFFFD
                        bytesPerSequence = 1
                    } else if (codePoint > 0xFFFF) {
                        // encode to utf16 (surrogate pair dance)
                        codePoint -= 0x10000
                        res.push(codePoint >>> 10 & 0x3FF | 0xD800)
                        codePoint = 0xDC00 | codePoint & 0x3FF
                    }

                    res.push(codePoint)
                    i += bytesPerSequence
                }

                return decodeCodePointsArray(res)
            }

            // Based on http://stackoverflow.com/a/22747272/680742, the browser with
            // the lowest limit is Chrome, with 0x10000 args.
            // We go 1 magnitude less, for safety
            var MAX_ARGUMENTS_LENGTH = 0x1000

            function decodeCodePointsArray(codePoints) {
                var len = codePoints.length
                if (len <= MAX_ARGUMENTS_LENGTH) {
                    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
                }

                // Decode in chunks to avoid "call stack size exceeded".
                var res = ''
                var i = 0
                while (i < len) {
                    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH))
                }
                return res
            }

            function asciiSlice(buf, start, end) {
                var ret = ''
                end = Math.min(buf.length, end)

                for (var i = start; i < end; ++i) {
                    ret += String.fromCharCode(buf[i] & 0x7F)
                }
                return ret
            }

            function latin1Slice(buf, start, end) {
                var ret = ''
                end = Math.min(buf.length, end)

                for (var i = start; i < end; ++i) {
                    ret += String.fromCharCode(buf[i])
                }
                return ret
            }

            function hexSlice(buf, start, end) {
                var len = buf.length

                if (!start || start < 0)
                    start = 0
                if (!end || end < 0 || end > len)
                    end = len

                var out = ''
                for (var i = start; i < end; ++i) {
                    out += toHex(buf[i])
                }
                return out
            }

            function utf16leSlice(buf, start, end) {
                var bytes = buf.slice(start, end)
                var res = ''
                for (var i = 0; i < bytes.length; i += 2) {
                    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
                }
                return res
            }

            Buffer.prototype.slice = function slice(start, end) {
                var len = this.length
                start = ~~start
                end = end === undefined
                    ? len
                    : ~~ end

                if (start < 0) {
                    start += len
                    if (start < 0)
                        start = 0
                } else if (start > len) {
                    start = len
                }

                if (end < 0) {
                    end += len
                    if (end < 0)
                        end = 0
                } else if (end > len) {
                    end = len
                }

                if (end < start)
                    end = start

                var newBuf
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    newBuf = this.subarray(start, end)
                    newBuf.__proto__ = Buffer.prototype
                } else {
                    var sliceLen = end - start
                    newBuf = new Buffer(sliceLen, undefined)
                    for (var i = 0; i < sliceLen; ++i) {
                        newBuf[i] = this[i + start]
                    }
                }

                return newBuf
            }

            /*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
            function checkOffset(offset, ext, length) {
                if ((offset % 1) !== 0 || offset < 0)
                    throw new RangeError('offset is not uint')
                if (offset + ext > length)
                    throw new RangeError('Trying to access beyond buffer length')
            }

            Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
                offset = offset | 0
                byteLength = byteLength | 0
                if (!noAssert)
                    checkOffset(offset, byteLength, this.length)

                var val = this[offset]
                var mul = 1
                var i = 0
                while (++i < byteLength && (mul *= 0x100)) {
                    val += this[offset + i] * mul
                }

                return val
            }

            Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
                offset = offset | 0
                byteLength = byteLength | 0
                if (!noAssert) {
                    checkOffset(offset, byteLength, this.length)
                }

                var val = this[offset + --byteLength]
                var mul = 1
                while (byteLength > 0 && (mul *= 0x100)) {
                    val += this[offset + --byteLength] * mul
                }

                return val
            }

            Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
                if (!noAssert)
                    checkOffset(offset, 1, this.length)
                return this[offset]
            }

            Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
                if (!noAssert)
                    checkOffset(offset, 2, this.length)
                return this[offset] | (this[offset + 1] << 8)
            }

            Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
                if (!noAssert)
                    checkOffset(offset, 2, this.length)
                return (this[offset] << 8) | this[offset + 1]
            }

            Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
                if (!noAssert)
                    checkOffset(offset, 4, this.length)

                return ((this[offset]) | (this[offset + 1] << 8) | (this[offset + 2] << 16)) + (this[offset + 3] * 0x1000000)
            }

            Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
                if (!noAssert)
                    checkOffset(offset, 4, this.length)

                return (this[offset] * 0x1000000) + ((this[offset + 1] << 16) | (this[offset + 2] << 8) | this[offset + 3])
            }

            Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
                offset = offset | 0
                byteLength = byteLength | 0
                if (!noAssert)
                    checkOffset(offset, byteLength, this.length)

                var val = this[offset]
                var mul = 1
                var i = 0
                while (++i < byteLength && (mul *= 0x100)) {
                    val += this[offset + i] * mul
                }
                mul *= 0x80

                if (val >= mul)
                    val -= Math.pow(2, 8 * byteLength)

                return val
            }

            Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
                offset = offset | 0
                byteLength = byteLength | 0
                if (!noAssert)
                    checkOffset(offset, byteLength, this.length)

                var i = byteLength
                var mul = 1
                var val = this[offset + --i]
                while (i > 0 && (mul *= 0x100)) {
                    val += this[offset + --i] * mul
                }
                mul *= 0x80

                if (val >= mul)
                    val -= Math.pow(2, 8 * byteLength)

                return val
            }

            Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
                if (!noAssert)
                    checkOffset(offset, 1, this.length)
                if (!(this[offset] & 0x80))
                    return (this[offset])
                return ((0xff - this[offset] + 1) * -1)
            }

            Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
                if (!noAssert)
                    checkOffset(offset, 2, this.length)
                var val = this[offset] | (this[offset + 1] << 8)
                return (val & 0x8000)
                    ? val | 0xFFFF0000
                    : val
            }

            Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
                if (!noAssert)
                    checkOffset(offset, 2, this.length)
                var val = this[offset + 1] | (this[offset] << 8)
                return (val & 0x8000)
                    ? val | 0xFFFF0000
                    : val
            }

            Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
                if (!noAssert)
                    checkOffset(offset, 4, this.length)

                return (this[offset]) | (this[offset + 1] << 8) | (this[offset + 2] << 16) | (this[offset + 3] << 24)
            }

            Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
                if (!noAssert)
                    checkOffset(offset, 4, this.length)

                return (this[offset] << 24) | (this[offset + 1] << 16) | (this[offset + 2] << 8) | (this[offset + 3])
            }

            Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
                if (!noAssert)
                    checkOffset(offset, 4, this.length)
                return ieee754.read(this, offset, true, 23, 4)
            }

            Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
                if (!noAssert)
                    checkOffset(offset, 4, this.length)
                return ieee754.read(this, offset, false, 23, 4)
            }

            Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
                if (!noAssert)
                    checkOffset(offset, 8, this.length)
                return ieee754.read(this, offset, true, 52, 8)
            }

            Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
                if (!noAssert)
                    checkOffset(offset, 8, this.length)
                return ieee754.read(this, offset, false, 52, 8)
            }

            function checkInt(buf, value, offset, ext, max, min) {
                if (!Buffer.isBuffer(buf))
                    throw new TypeError('"buffer" argument must be a Buffer instance')
                if (value > max || value < min)
                    throw new RangeError('"value" argument is out of bounds')
                if (offset + ext > buf.length)
                    throw new RangeError('Index out of range')
            }

            Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
                value = +value
                offset = offset | 0
                byteLength = byteLength | 0
                if (!noAssert) {
                    var maxBytes = Math.pow(2, 8 * byteLength) - 1
                    checkInt(this, value, offset, byteLength, maxBytes, 0)
                }

                var mul = 1
                var i = 0
                this[offset] = value & 0xFF
                while (++i < byteLength && (mul *= 0x100)) {
                    this[offset + i] = (value / mul) & 0xFF
                }

                return offset + byteLength
            }

            Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
                value = +value
                offset = offset | 0
                byteLength = byteLength | 0
                if (!noAssert) {
                    var maxBytes = Math.pow(2, 8 * byteLength) - 1
                    checkInt(this, value, offset, byteLength, maxBytes, 0)
                }

                var i = byteLength - 1
                var mul = 1
                this[offset + i] = value & 0xFF
                while (--i >= 0 && (mul *= 0x100)) {
                    this[offset + i] = (value / mul) & 0xFF
                }

                return offset + byteLength
            }

            Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
                value = +value
                offset = offset | 0
                if (!noAssert)
                    checkInt(this, value, offset, 1, 0xff, 0)
                if (!Buffer.TYPED_ARRAY_SUPPORT)
                    value = Math.floor(value)
                this[offset] = (value & 0xff)
                return offset + 1
            }

            function objectWriteUInt16(buf, value, offset, littleEndian) {
                if (value < 0)
                    value = 0xffff + value + 1
                for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
                    buf[offset + i] = (value & (0xff << (8 * (littleEndian
                        ? i
                        : 1 - i)))) >>> (littleEndian
                        ? i
                        : 1 - i) * 8
                }
            }

            Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
                value = +value
                offset = offset | 0
                if (!noAssert)
                    checkInt(this, value, offset, 2, 0xffff, 0)
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = (value & 0xff)
                    this[offset + 1] = (value >>> 8)
                } else {
                    objectWriteUInt16(this, value, offset, true)
                }
                return offset + 2
            }

            Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
                value = +value
                offset = offset | 0
                if (!noAssert)
                    checkInt(this, value, offset, 2, 0xffff, 0)
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = (value >>> 8)
                    this[offset + 1] = (value & 0xff)
                } else {
                    objectWriteUInt16(this, value, offset, false)
                }
                return offset + 2
            }

            function objectWriteUInt32(buf, value, offset, littleEndian) {
                if (value < 0)
                    value = 0xffffffff + value + 1
                for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
                    buf[offset + i] = (value >>> (littleEndian
                        ? i
                        : 3 - i) * 8) & 0xff
                }
            }

            Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
                value = +value
                offset = offset | 0
                if (!noAssert)
                    checkInt(this, value, offset, 4, 0xffffffff, 0)
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset + 3] = (value >>> 24)
                    this[offset + 2] = (value >>> 16)
                    this[offset + 1] = (value >>> 8)
                    this[offset] = (value & 0xff)
                } else {
                    objectWriteUInt32(this, value, offset, true)
                }
                return offset + 4
            }

            Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
                value = +value
                offset = offset | 0
                if (!noAssert)
                    checkInt(this, value, offset, 4, 0xffffffff, 0)
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = (value >>> 24)
                    this[offset + 1] = (value >>> 16)
                    this[offset + 2] = (value >>> 8)
                    this[offset + 3] = (value & 0xff)
                } else {
                    objectWriteUInt32(this, value, offset, false)
                }
                return offset + 4
            }

            Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
                value = +value
                offset = offset | 0
                if (!noAssert) {
                    var limit = Math.pow(2, 8 * byteLength - 1)

                    checkInt(this, value, offset, byteLength, limit - 1, -limit)
                }

                var i = 0
                var mul = 1
                var sub = 0
                this[offset] = value & 0xFF
                while (++i < byteLength && (mul *= 0x100)) {
                    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
                        sub = 1
                    }
                    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
                }

                return offset + byteLength
            }

            Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
                value = +value
                offset = offset | 0
                if (!noAssert) {
                    var limit = Math.pow(2, 8 * byteLength - 1)

                    checkInt(this, value, offset, byteLength, limit - 1, -limit)
                }

                var i = byteLength - 1
                var mul = 1
                var sub = 0
                this[offset + i] = value & 0xFF
                while (--i >= 0 && (mul *= 0x100)) {
                    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
                        sub = 1
                    }
                    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
                }

                return offset + byteLength
            }

            Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
                value = +value
                offset = offset | 0
                if (!noAssert)
                    checkInt(this, value, offset, 1, 0x7f, -0 x80)
                if (!Buffer.TYPED_ARRAY_SUPPORT)
                    value = Math.floor(value)
                if (value < 0)
                    value = 0xff + value + 1
                this[offset] = (value & 0xff)
                return offset + 1
            }

            Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
                value = +value
                offset = offset | 0
                if (!noAssert)
                    checkInt(this, value, offset, 2, 0x7fff, -0 x8000)
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = (value & 0xff)
                    this[offset + 1] = (value >>> 8)
                } else {
                    objectWriteUInt16(this, value, offset, true)
                }
                return offset + 2
            }

            Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
                value = +value
                offset = offset | 0
                if (!noAssert)
                    checkInt(this, value, offset, 2, 0x7fff, -0 x8000)
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = (value >>> 8)
                    this[offset + 1] = (value & 0xff)
                } else {
                    objectWriteUInt16(this, value, offset, false)
                }
                return offset + 2
            }

            Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
                value = +value
                offset = offset | 0
                if (!noAssert)
                    checkInt(this, value, offset, 4, 0x7fffffff, -0 x80000000)
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = (value & 0xff)
                    this[offset + 1] = (value >>> 8)
                    this[offset + 2] = (value >>> 16)
                    this[offset + 3] = (value >>> 24)
                } else {
                    objectWriteUInt32(this, value, offset, true)
                }
                return offset + 4
            }

            Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
                value = +value
                offset = offset | 0
                if (!noAssert)
                    checkInt(this, value, offset, 4, 0x7fffffff, -0 x80000000)
                if (value < 0)
                    value = 0xffffffff + value + 1
                if (Buffer.TYPED_ARRAY_SUPPORT) {
                    this[offset] = (value >>> 24)
                    this[offset + 1] = (value >>> 16)
                    this[offset + 2] = (value >>> 8)
                    this[offset + 3] = (value & 0xff)
                } else {
                    objectWriteUInt32(this, value, offset, false)
                }
                return offset + 4
            }

            function checkIEEE754(buf, value, offset, ext, max, min) {
                if (offset + ext > buf.length)
                    throw new RangeError('Index out of range')
                if (offset < 0)
                    throw new RangeError('Index out of range')
            }

            function writeFloat(buf, value, offset, littleEndian, noAssert) {
                if (!noAssert) {
                    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e + 38, -3.4028234663852886e + 38)
                }
                ieee754.write(buf, value, offset, littleEndian, 23, 4)
                return offset + 4
            }

            Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
                return writeFloat(this, value, offset, true, noAssert)
            }

            Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
                return writeFloat(this, value, offset, false, noAssert)
            }

            function writeDouble(buf, value, offset, littleEndian, noAssert) {
                if (!noAssert) {
                    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E + 308, -1.7976931348623157E + 308)
                }
                ieee754.write(buf, value, offset, littleEndian, 52, 8)
                return offset + 8
            }

            Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
                return writeDouble(this, value, offset, true, noAssert)
            }

            Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
                return writeDouble(this, value, offset, false, noAssert)
            }

            // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
            Buffer.prototype.copy = function copy(target, targetStart, start, end) {
                if (!start)
                    start = 0
                if (!end && end !== 0)
                    end = this.length
                if (targetStart >= target.length)
                    targetStart = target.length
                if (!targetStart)
                    targetStart = 0
                if (end > 0 && end < start)
                    end = start

                    // Copy 0 bytes; we're done
                if (end === start)
                    return 0
                if (target.length === 0 || this.length === 0)
                    return 0

                    // Fatal error conditions
                if (targetStart < 0) {
                    throw new RangeError('targetStart out of bounds')
                }
                if (start < 0 || start >= this.length)
                    throw new RangeError('sourceStart out of bounds')
                if (end < 0)
                    throw new RangeError('sourceEnd out of bounds')

                    // Are we oob?
                if (end > this.length)
                    end = this.length
                if (target.length - targetStart < end - start) {
                    end = target.length - targetStart + start
                }

                var len = end - start
                var i

                if (this === target && start < targetStart && targetStart < end) {
                    // descending copy from end
                    for (i = len - 1; i >= 0; --i) {
                        target[i + targetStart] = this[i + start]
                    }
                } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
                    // ascending copy from start
                    for (i = 0; i < len; ++i) {
                        target[i + targetStart] = this[i + start]
                    }
                } else {
                    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart)
                }

                return len
            }

            // Usage:
            //    buffer.fill(number[, offset[, end]])
            //    buffer.fill(buffer[, offset[, end]])
            //    buffer.fill(string[, offset[, end]][, encoding])
            Buffer.prototype.fill = function fill(val, start, end, encoding) {
                // Handle string cases:
                if (typeof val === 'string') {
                    if (typeof start === 'string') {
                        encoding = start
                        start = 0
                        end = this.length
                    } else if (typeof end === 'string') {
                        encoding = end
                        end = this.length
                    }
                    if (val.length === 1) {
                        var code = val.charCodeAt(0)
                        if (code < 256) {
                            val = code
                        }
                    }
                    if (encoding !== undefined && typeof encoding !== 'string') {
                        throw new TypeError('encoding must be a string')
                    }
                    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
                        throw new TypeError('Unknown encoding: ' + encoding)
                    }
                } else if (typeof val === 'number') {
                    val = val & 255
                }

                // Invalid ranges are not set to a default, so can range check early.
                if (start < 0 || this.length < start || this.length < end) {
                    throw new RangeError('Out of range index')
                }

                if (end <= start) {
                    return this
                }

                start = start >>> 0
                end = end === undefined
                    ? this.length
                    : end >>> 0

                if (!val)
                    val = 0

                var i
                if (typeof val === 'number') {
                    for (i = start; i < end; ++i) {
                        this[i] = val
                    }
                } else {
                    var bytes = Buffer.isBuffer(val)
                        ? val
                        : utf8ToBytes(new Buffer(val, encoding).toString())
                    var len = bytes.length
                    for (i = 0; i < end - start; ++i) {
                        this[i + start] = bytes[i % len]
                    }
                }

                return this
            }

            // HELPER FUNCTIONS
            // ================

            var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

            function base64clean(str) {
                // Node strips out invalid characters like \n and \t from the string, base64-js does not
                str = stringtrim(str).replace(INVALID_BASE64_RE, '')
                // Node converts strings with length < 2 to ''
                if (str.length < 2)
                    return ''
                    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
                while (str.length % 4 !== 0) {
                    str = str + '='
                }
                return str
            }

            function stringtrim(str) {
                if (str.trim)
                    return str.trim()
                return str.replace(/^\s+|\s+$/g, '')
            }

            function toHex(n) {
                if (n < 16)
                    return '0' + n.toString(16)
                return n.toString(16)
            }

            function utf8ToBytes(string, units) {
                units = units || Infinity
                var codePoint
                var length = string.length
                var leadSurrogate = null
                var bytes = []

                for (var i = 0; i < length; ++i) {
                    codePoint = string.charCodeAt(i)

                    // is surrogate component
                    if (codePoint > 0xD7FF && codePoint < 0xE000) {
                        // last char was a lead
                        if (!leadSurrogate) {
                            // no lead yet
                            if (codePoint > 0xDBFF) {
                                // unexpected trail
                                if ((units -= 3) > -1)
                                    bytes.push(0xEF, 0xBF, 0xBD)
                                continue
                            } else if (i + 1 === length) {
                                // unpaired lead
                                if ((units -= 3) > -1)
                                    bytes.push(0xEF, 0xBF, 0xBD)
                                continue
                            }

                            // valid lead
                            leadSurrogate = codePoint

                            continue
                        }

                        // 2 leads in a row
                        if (codePoint < 0xDC00) {
                            if ((units -= 3) > -1)
                                bytes.push(0xEF, 0xBF, 0xBD)
                            leadSurrogate = codePoint
                            continue
                        }

                        // valid surrogate pair
                        codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
                    } else if (leadSurrogate) {
                        // valid bmp char, but last char was a lead
                        if ((units -= 3) > -1)
                            bytes.push(0xEF, 0xBF, 0xBD)
                    }

                    leadSurrogate = null

                    // encode utf8
                    if (codePoint < 0x80) {
                        if ((units -= 1) < 0)
                            break
                        bytes.push(codePoint)
                    } else if (codePoint < 0x800) {
                        if ((units -= 2) < 0)
                            break
                        bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80)
                    } else if (codePoint < 0x10000) {
                        if ((units -= 3) < 0)
                            break
                        bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80)
                    } else if (codePoint < 0x110000) {
                        if ((units -= 4) < 0)
                            break
                        bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80)
                    } else {
                        throw new Error('Invalid code point')
                    }
                }

                return bytes
            }

            function asciiToBytes(str) {
                var byteArray = []
                for (var i = 0; i < str.length; ++i) {
                    // Node's code seems to be doing this and not & 0x7F..
                    byteArray.push(str.charCodeAt(i) & 0xFF)
                }
                return byteArray
            }

            function utf16leToBytes(str, units) {
                var c,
                    hi,
                    lo
                var byteArray = []
                for (var i = 0; i < str.length; ++i) {
                    if ((units -= 2) < 0)
                        break

                    c = str.charCodeAt(i)
                    hi = c >> 8
                    lo = c % 256
                    byteArray.push(lo)
                    byteArray.push(hi)
                }

                return byteArray
            }

            function base64ToBytes(str) {
                return base64.toByteArray(base64clean(str))
            }

            function blitBuffer(src, dst, offset, length) {
                for (var i = 0; i < length; ++i) {
                    if ((i + offset >= dst.length) || (i >= src.length))
                        break
                    dst[i + offset] = src[i]
                }
                return i
            }

            function isnan(val) {
                return val !== val // eslint-disable-line no-self-compare
            }

            /* WEBPACK VAR INJECTION */
        }.call(exports, (function() {
            return this;
        }())))

        /***/
    }),

    /***/
    427:
    /***/
    (function(module, exports) {

        'use strict'

        exports.byteLength = byteLength
        exports.toByteArray = toByteArray
        exports.fromByteArray = fromByteArray

        var lookup = []
        var revLookup = []
        var Arr = typeof Uint8Array !== 'undefined'
            ? Uint8Array
            : Array

        var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
        for (var i = 0, len = code.length; i < len; ++i) {
            lookup[i] = code[i]
            revLookup[code.charCodeAt(i)] = i
        }

        revLookup['-'.charCodeAt(0)] = 62
        revLookup['_'.charCodeAt(0)] = 63

        function placeHoldersCount(b64) {
            var len = b64.length
            if (len % 4 > 0) {
                throw new Error('Invalid string. Length must be a multiple of 4')
            }

            // the number of equal signs (place holders)
            // if there are two placeholders, than the two characters before it
            // represent one byte
            // if there is only one, then the three characters before it represent 2 bytes
            // this is just a cheap hack to not do indexOf twice
            return b64[len - 2] === '='
                ? 2
                : b64[len - 1] === '='
                    ? 1
                    : 0
        }

        function byteLength(b64) {
            // base64 is 4/3 + up to two characters of the original data
            return b64.length * 3 / 4 - placeHoldersCount(b64)
        }

        function toByteArray(b64) {
            var i,
                j,
                l,
                tmp,
                placeHolders,
                arr
            var len = b64.length
            placeHolders = placeHoldersCount(b64)

            arr = new Arr(len * 3 / 4 - placeHolders)

            // if there are placeholders, only get up to the last complete 4 chars
            l = placeHolders > 0
                ? len - 4
                : len

            var L = 0

            for (i = 0, j = 0; i < l; i += 4, j += 3) {
                tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
                arr[L++] = (tmp >> 16) & 0xFF
                arr[L++] = (tmp >> 8) & 0xFF
                arr[L++] = tmp & 0xFF
            }

            if (placeHolders === 2) {
                tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
                arr[L++] = tmp & 0xFF
            } else if (placeHolders === 1) {
                tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
                arr[L++] = (tmp >> 8) & 0xFF
                arr[L++] = tmp & 0xFF
            }

            return arr
        }

        function tripletToBase64(num) {
            return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
        }

        function encodeChunk(uint8, start, end) {
            var tmp
            var output = []
            for (var i = start; i < end; i += 3) {
                tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
                output.push(tripletToBase64(tmp))
            }
            return output.join('')
        }

        function fromByteArray(uint8) {
            var tmp
            var len = uint8.length
            var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
            var output = ''
            var parts = []
            var maxChunkLength = 16383 // must be multiple of 3

            // go through the array every three bytes, we'll deal with trailing stuff later
            for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
                parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2
                    ? len2
                    : (i + maxChunkLength)))
            }

            // pad the end with zeros, but make sure to not forget the extra bytes
            if (extraBytes === 1) {
                tmp = uint8[len - 1]
                output += lookup[tmp >> 2]
                output += lookup[(tmp << 4) & 0x3F]
                output += '=='
            } else if (extraBytes === 2) {
                tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
                output += lookup[tmp >> 10]
                output += lookup[(tmp >> 4) & 0x3F]
                output += lookup[(tmp << 2) & 0x3F]
                output += '='
            }

            parts.push(output)

            return parts.join('')
        }

        /***/
    }),

    /***/
    428:
    /***/
    (function(module, exports) {

        exports.read = function(buffer, offset, isLE, mLen, nBytes) {
            var e,
                m
            var eLen = nBytes * 8 - mLen - 1
            var eMax = (1 << eLen) - 1
            var eBias = eMax >> 1
            var nBits = -7
            var i = isLE
                ? (nBytes - 1)
                : 0
            var d = isLE
                ? -1
                : 1
            var s = buffer[offset + i]

            i += d

            e = s & ((1 << (-nBits)) - 1)
            s >>= (-nBits)
            nBits += eLen
            for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

            m = e & ((1 << (-nBits)) - 1)
            e >>= (-nBits)
            nBits += mLen
            for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

            if (e === 0) {
                e = 1 - eBias
            } else if (e === eMax) {
                return m
                    ? NaN
                    : ((s
                        ? -1
                        : 1) * Infinity)
            } else {
                m = m + Math.pow(2, mLen)
                e = e - eBias
            }
            return (s
                ? -1
                : 1) * m * Math.pow(2, e - mLen)
        }

        exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
            var e,
                m,
                c
            var eLen = nBytes * 8 - mLen - 1
            var eMax = (1 << eLen) - 1
            var eBias = eMax >> 1
            var rt = (mLen === 23
                ? Math.pow(2, -24) - Math.pow(2, -77)
                : 0)
            var i = isLE
                ? 0
                : (nBytes - 1)
            var d = isLE
                ? 1
                : -1
            var s = value < 0 || (value === 0 && 1 / value < 0)
                ? 1
                : 0

            value = Math.abs(value)

            if (isNaN(value) || value === Infinity) {
                m = isNaN(value)
                    ? 1
                    : 0
                e = eMax
            } else {
                e = Math.floor(Math.log(value) / Math.LN2)
                if (value * (c = Math.pow(2, -e)) < 1) {
                    e-- c *= 2
                }
                if (e + eBias >= 1) {
                    value += rt / c
                } else {
                    value += rt * Math.pow(2, 1 - eBias)
                }
                if (value * c >= 2) {
                    e++ c /= 2
                }

                if (e + eBias >= eMax) {
                    m = 0
                    e = eMax
                } else if (e + eBias >= 1) {
                    m = (value * c - 1) * Math.pow(2, mLen)
                    e = e + eBias
                } else {
                    m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
                    e = 0
                }
            }

            for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

            e = (e << mLen) | m
            eLen += mLen
            for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

            buffer[offset + i - d] |= s * 128
        }

        /***/
    }),

    /***/
    429:
    /***/
    (function(module, exports) {

        var toString = {}.toString;

        module.exports = Array.isArray || function(arr) {
            return toString.call(arr) == '[object Array]';
        };

        /***/
    }),

    /***/
    430:
    /***/
    (function(module, exports) {

        'use strict';

        module.exports = function bind(fn, thisArg) {
            return function wrap() {
                var args = new Array(arguments.length);
                for (var i = 0; i < args.length; i++) {
                    args[i] = arguments[i];
                }
                return fn.apply(thisArg, args);
            };
        };

        /***/
    }),

    /***/
    431:
    /***/
    (function(module, exports, __webpack_require__) {

        'use strict';

        var defaults = __webpack_require__(432);
        var utils = __webpack_require__(425);
        var InterceptorManager = __webpack_require__(443);
        var dispatchRequest = __webpack_require__(444);
        var isAbsoluteURL = __webpack_require__(447);
        var combineURLs = __webpack_require__(448);

        /**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
        function Axios(instanceConfig) {
            this.defaults = instanceConfig;
            this.interceptors = {
                request: new InterceptorManager(),
                response: new InterceptorManager()
            };
        }

        /**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
        Axios.prototype.request = function request(config) {
            /*eslint no-param-reassign:0*/
            // Allow for axios('example/url'[, config]) a la fetch API
            if (typeof config === 'string') {
                config = utils.merge({
                    url: arguments[0]
                }, arguments[1]);
            }

            config = utils.merge(defaults, this.defaults, {
                method: 'get'
            }, config);

            // Support baseURL config
            if (config.baseURL && !isAbsoluteURL(config.url)) {
                config.url = combineURLs(config.baseURL, config.url);
            }

            // Hook up interceptors middleware
            var chain = [dispatchRequest, undefined];
            var promise = Promise.resolve(config);

            this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
                chain.unshift(interceptor.fulfilled, interceptor.rejected);
            });

            this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
                chain.push(interceptor.fulfilled, interceptor.rejected);
            });

            while (chain.length) {
                promise = promise.then(chain.shift(), chain.shift());
            }

            return promise;
        };

        // Provide aliases for supported request methods
        utils.forEach([
            'delete', 'get', 'head', 'options'
        ], function forEachMethodNoData(method) {
            /*eslint func-names:0*/
            Axios.prototype[method] = function(url, config) {
                return this.request(utils.merge(config || {}, {
                    method: method,
                    url: url
                }));
            };
        });

        utils.forEach([
            'post', 'put', 'patch'
        ], function forEachMethodWithData(method) {
            /*eslint func-names:0*/
            Axios.prototype[method] = function(url, data, config) {
                return this.request(utils.merge(config || {}, {
                    method: method,
                    url: url,
                    data: data
                }));
            };
        });

        module.exports = Axios;

        /***/
    }),

    /***/
    432:
    /***/
    (function(module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */
        (function(process) {
            'use strict';

            var utils = __webpack_require__(425);
            var normalizeHeaderName = __webpack_require__(433);

            var DEFAULT_CONTENT_TYPE = {
                'Content-Type': 'application/x-www-form-urlencoded'
            };

            function setContentTypeIfUnset(headers, value) {
                if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
                    headers['Content-Type'] = value;
                }
            }

            function getDefaultAdapter() {
                var adapter;
                if (typeof XMLHttpRequest !== 'undefined') {
                    // For browsers use XHR adapter
                    adapter = __webpack_require__(434);
                } else if (typeof process !== 'undefined') {
                    // For node use HTTP adapter
                    adapter = __webpack_require__(434);
                }
                return adapter;
            }

            var defaults = {
                adapter: getDefaultAdapter(),

                transformRequest: [function transformRequest(data, headers) {
                        normalizeHeaderName(headers, 'Content-Type');
                        if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
                            return data;
                        }
                        if (utils.isArrayBufferView(data)) {
                            return data.buffer;
                        }
                        if (utils.isURLSearchParams(data)) {
                            setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
                            return data.toString();
                        }
                        if (utils.isObject(data)) {
                            setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
                            return JSON.stringify(data);
                        }
                        return data;
                    }
                ],

                transformResponse: [function transformResponse(data) {
                        /*eslint no-param-reassign:0*/
                        if (typeof data === 'string') {
                            try {
                                data = JSON.parse(data);
                            } catch (e) {/* Ignore */
                            }
                        }
                        return data;
                    }
                ],

                timeout: 0,

                xsrfCookieName: 'XSRF-TOKEN',
                xsrfHeaderName: 'X-XSRF-TOKEN',

                maxContentLength: -1,

                validateStatus: function validateStatus(status) {
                    return status >= 200 && status < 300;
                }
            };

            defaults.headers = {
                common: {
                    'Accept': 'application/json, text/plain, */*'
                }
            };

            utils.forEach([
                'delete', 'get', 'head'
            ], function forEachMethodNoData(method) {
                defaults.headers[method] = {};
            });

            utils.forEach([
                'post', 'put', 'patch'
            ], function forEachMethodWithData(method) {
                defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
            });

            module.exports = defaults;

            /* WEBPACK VAR INJECTION */
        }.call(exports, __webpack_require__(50)))

        /***/
    }),

    /***/
    433:
    /***/
    (function(module, exports, __webpack_require__) {

        'use strict';

        var utils = __webpack_require__(425);

        module.exports = function normalizeHeaderName(headers, normalizedName) {
            utils.forEach(headers, function processHeader(value, name) {
                if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
                    headers[normalizedName] = value;
                    delete headers[name];
                }
            });
        };

        /***/
    }),

    /***/
    434:
    /***/
    (function(module, exports, __webpack_require__) {

        'use strict';

        var utils = __webpack_require__(425);
        var settle = __webpack_require__(435);
        var buildURL = __webpack_require__(438);
        var parseHeaders = __webpack_require__(439);
        var isURLSameOrigin = __webpack_require__(440);
        var createError = __webpack_require__(436);
        var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(441);

        module.exports = function xhrAdapter(config) {
            return new Promise(function dispatchXhrRequest(resolve, reject) {
                var requestData = config.data;
                var requestHeaders = config.headers;

                if (utils.isFormData(requestData)) {
                    delete requestHeaders['Content-Type']; // Let the browser set it
                }

                var request = new XMLHttpRequest();
                var loadEvent = 'onreadystatechange';
                var xDomain = false;

                // For IE 8/9 CORS support
                // Only supports POST and GET calls and doesn't returns the response headers.
                // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
                if (("development") !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
                    request = new window.XDomainRequest();
                    loadEvent = 'onload';
                    xDomain = true;
                    request.onprogress = function handleProgress() {};
                    request.ontimeout = function handleTimeout() {};
                }

                // HTTP basic authentication
                if (config.auth) {
                    var username = config.auth.username || '';
                    var password = config.auth.password || '';
                    requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
                }

                request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

                // Set the request timeout in MS
                request.timeout = config.timeout;

                // Listen for ready state
                request[loadEvent] = function handleLoad() {
                    if (!request || (request.readyState !== 4 && !xDomain)) {
                        return;
                    }

                    // The request errored out and we didn't get a response, this will be
                    // handled by onerror instead
                    // With one exception: request that using file: protocol, most browsers
                    // will return status as 0 even though it's a successful request
                    if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                        return;
                    }

                    // Prepare the response
                    var responseHeaders = 'getAllResponseHeaders' in request
                        ? parseHeaders(request.getAllResponseHeaders())
                        : null;
                    var responseData = !config.responseType || config.responseType === 'text'
                        ? request.responseText
                        : request.response;
                    var response = {
                        data: responseData,
                        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
                        status: request.status === 1223
                            ? 204
                            : request.status,
                        statusText: request.status === 1223
                            ? 'No Content'
                            : request.statusText,
                        headers: responseHeaders,
                        config: config,
                        request: request
                    };

                    settle(resolve, reject, response);

                    // Clean up request
                    request = null;
                };

                // Handle low level network errors
                request.onerror = function handleError() {
                    // Real errors are hidden from us by the browser
                    // onerror should only fire if it's a network error
                    reject(createError('Network Error', config));

                    // Clean up request
                    request = null;
                };

                // Handle timeout
                request.ontimeout = function handleTimeout() {
                    reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

                    // Clean up request
                    request = null;
                };

                // Add xsrf header
                // This is only done if running in a standard browser environment.
                // Specifically not if we're in a web worker, or react-native.
                if (utils.isStandardBrowserEnv()) {
                    var cookies = __webpack_require__(442);

                    // Add xsrf header
                    var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName
                        ? cookies.read(config.xsrfCookieName)
                        : undefined;

                    if (xsrfValue) {
                        requestHeaders[config.xsrfHeaderName] = xsrfValue;
                    }
                }

                // Add headers to the request
                if ('setRequestHeader' in request) {
                    utils.forEach(requestHeaders, function setRequestHeader(val, key) {
                        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
                            // Remove Content-Type if data is undefined
                            delete requestHeaders[key];
                        } else {
                            // Otherwise add header to the request
                            request.setRequestHeader(key, val);
                        }
                    });
                }

                // Add withCredentials to request if needed
                if (config.withCredentials) {
                    request.withCredentials = true;
                }

                // Add responseType to request if needed
                if (config.responseType) {
                    try {
                        request.responseType = config.responseType;
                    } catch (e) {
                        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
                        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
                        if (config.responseType !== 'json') {
                            throw e;
                        }
                    }
                }

                // Handle progress if needed
                if (typeof config.onDownloadProgress === 'function') {
                    request.addEventListener('progress', config.onDownloadProgress);
                }

                // Not all browsers support upload events
                if (typeof config.onUploadProgress === 'function' && request.upload) {
                    request.upload.addEventListener('progress', config.onUploadProgress);
                }

                if (config.cancelToken) {
                    // Handle cancellation
                    config.cancelToken.promise.then(function onCanceled(cancel) {
                        if (!request) {
                            return;
                        }

                        request.abort();
                        reject(cancel);
                        // Clean up request
                        request = null;
                    });
                }

                if (requestData === undefined) {
                    requestData = null;
                }

                // Send the request
                request.send(requestData);
            });
        };

        /***/
    }),

    /***/
    435:
    /***/
    (function(module, exports, __webpack_require__) {

        'use strict';

        var createError = __webpack_require__(436);

        /**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
        module.exports = function settle(resolve, reject, response) {
            var validateStatus = response.config.validateStatus;
            // Note: status is not exposed by XDomainRequest
            if (!response.status || !validateStatus || validateStatus(response.status)) {
                resolve(response);
            } else {
                reject(createError('Request failed with status code ' + response.status, response.config, null, response));
            }
        };

        /***/
    }),

    /***/
    436:
    /***/
    (function(module, exports, __webpack_require__) {

        'use strict';

        var enhanceError = __webpack_require__(437);

        /**
	 * Create an Error with the specified message, config, error code, and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
        module.exports = function createError(message, config, code, response) {
            var error = new Error(message);
            return enhanceError(error, config, code, response);
        };

        /***/
    }),

    /***/
    437:
    /***/
    (function(module, exports) {

        'use strict';

        /**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
        module.exports = function enhanceError(error, config, code, response) {
            error.config = config;
            if (code) {
                error.code = code;
            }
            error.response = response;
            return error;
        };

        /***/
    }),

    /***/
    438:
    /***/
    (function(module, exports, __webpack_require__) {

        'use strict';

        var utils = __webpack_require__(425);

        function encode(val) {
            return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
        }

        /**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
        module.exports = function buildURL(url, params, paramsSerializer) {
            /*eslint no-param-reassign:0*/
            if (!params) {
                return url;
            }

            var serializedParams;
            if (paramsSerializer) {
                serializedParams = paramsSerializer(params);
            } else if (utils.isURLSearchParams(params)) {
                serializedParams = params.toString();
            } else {
                var parts = [];

                utils.forEach(params, function serialize(val, key) {
                    if (val === null || typeof val === 'undefined') {
                        return;
                    }

                    if (utils.isArray(val)) {
                        key = key + '[]';
                    }

                    if (!utils.isArray(val)) {
                        val = [val];
                    }

                    utils.forEach(val, function parseValue(v) {
                        if (utils.isDate(v)) {
                            v = v.toISOString();
                        } else if (utils.isObject(v)) {
                            v = JSON.stringify(v);
                        }
                        parts.push(encode(key) + '=' + encode(v));
                    });
                });

                serializedParams = parts.join('&');
            }

            if (serializedParams) {
                url += (url.indexOf('?') === -1
                    ? '?'
                    : '&') + serializedParams;
            }

            return url;
        };

        /***/
    }),

    /***/
    439:
    /***/
    (function(module, exports, __webpack_require__) {

        'use strict';

        var utils = __webpack_require__(425);

        /**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
        module.exports = function parseHeaders(headers) {
            var parsed = {};
            var key;
            var val;
            var i;

            if (!headers) {
                return parsed;
            }

            utils.forEach(headers.split('\n'), function parser(line) {
                i = line.indexOf(':');
                key = utils.trim(line.substr(0, i)).toLowerCase();
                val = utils.trim(line.substr(i + 1));

                if (key) {
                    parsed[key] = parsed[key]
                        ? parsed[key] + ', ' + val
                        : val;
                }
            });

            return parsed;
        };

        /***/
    }),

    /***/
    440:
    /***/
    (function(module, exports, __webpack_require__) {

        'use strict';

        var utils = __webpack_require__(425);

        module.exports = (utils.isStandardBrowserEnv()
            ?

            // Standard browser envs have full support of the APIs needed to test
            // whether the request URL is of the same origin as current location.
            (function standardBrowserEnv() {
                var msie = /(msie|trident)/i.test(navigator.userAgent);
                var urlParsingNode = document.createElement('a');
                var originURL;

                /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
                function resolveURL(url) {
                    var href = url;

                    if (msie) {
                        // IE needs attribute set twice to normalize properties
                        urlParsingNode.setAttribute('href', href);
                        href = urlParsingNode.href;
                    }

                    urlParsingNode.setAttribute('href', href);

                    // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
                    return {
                        href: urlParsingNode.href,
                        protocol: urlParsingNode.protocol
                            ? urlParsingNode.protocol.replace(/:$/, '')
                            : '',
                        host: urlParsingNode.host,
                        search: urlParsingNode.search
                            ? urlParsingNode.search.replace(/^\?/, '')
                            : '',
                        hash: urlParsingNode.hash
                            ? urlParsingNode.hash.replace(/^#/, '')
                            : '',
                        hostname: urlParsingNode.hostname,
                        port: urlParsingNode.port,
                        pathname: (urlParsingNode.pathname.charAt(0) === '/')
                            ? urlParsingNode.pathname
                            : '/' + urlParsingNode.pathname
                    };
                }

                originURL = resolveURL(window.location.href);

                /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
                return function isURLSameOrigin(requestURL) {
                    var parsed = (utils.isString(requestURL))
                        ? resolveURL(requestURL)
                        : requestURL;
                    return (parsed.protocol === originURL.protocol && parsed.host === originURL.host);
                };
            })()
            :

            // Non standard browser envs (web workers, react-native) lack needed support.
            (function nonStandardBrowserEnv() {
                return function isURLSameOrigin() {
                    return true;
                };
            })());

        /***/
    }),

    /***/
    441:
    /***/
    (function(module, exports) {

        'use strict';

        // btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

        function E() {
            this.message = 'String contains an invalid character';
        }
        E.prototype = new Error;
        E.prototype.code = 5;
        E.prototype.name = 'InvalidCharacterError';

        function btoa(input) {
            var str = String(input);
            var output = '';
            for (
            // initialize result and counter
            var block,
            charCode,
            idx = 0,
            map = chars;
            // if the next str index does not exist:
            //   change the mapping table to "="
            //   check if d has no fractional digits
            str.charAt(idx | 0) || (map = '=', idx % 1);
            // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
            output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
                charCode = str.charCodeAt(idx += 3 / 4);
                if (charCode > 0xFF) {
                    throw new E();
                }
                block = block << 8 | charCode;
            }
            return output;
        }

        module.exports = btoa;

        /***/
    }),

    /***/
    442:
    /***/
    (function(module, exports, __webpack_require__) {

        'use strict';

        var utils = __webpack_require__(425);

        module.exports = (utils.isStandardBrowserEnv()
            ?

            // Standard browser envs support document.cookie
            (function standardBrowserEnv() {
                return {
                    write: function write(name, value, expires, path, domain, secure) {
                        var cookie = [];
                        cookie.push(name + '=' + encodeURIComponent(value));

                        if (utils.isNumber(expires)) {
                            cookie.push('expires=' + new Date(expires).toGMTString());
                        }

                        if (utils.isString(path)) {
                            cookie.push('path=' + path);
                        }

                        if (utils.isString(domain)) {
                            cookie.push('domain=' + domain);
                        }

                        if (secure === true) {
                            cookie.push('secure');
                        }

                        document.cookie = cookie.join('; ');
                    },

                    read: function read(name) {
                        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
                        return (match
                            ? decodeURIComponent(match[3])
                            : null);
                    },

                    remove: function remove(name) {
                        this.write(name, '', Date.now() - 86400000);
                    }
                };
            })()
            :

            // Non standard browser env (web workers, react-native) lack needed support.
            (function nonStandardBrowserEnv() {
                return {
                    write: function write() {},
                    read: function read() {
                        return null;
                    },
                    remove: function remove() {}
                };
            })());

        /***/
    }),

    /***/
    443:
    /***/
    (function(module, exports, __webpack_require__) {

        'use strict';

        var utils = __webpack_require__(425);

        function InterceptorManager() {
            this.handlers = [];
        }

        /**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
        InterceptorManager.prototype.use = function use(fulfilled, rejected) {
            this.handlers.push({fulfilled: fulfilled, rejected: rejected});
            return this.handlers.length - 1;
        };

        /**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
        InterceptorManager.prototype.eject = function eject(id) {
            if (this.handlers[id]) {
                this.handlers[id] = null;
            }
        };

        /**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
        InterceptorManager.prototype.forEach = function forEach(fn) {
            utils.forEach(this.handlers, function forEachHandler(h) {
                if (h !== null) {
                    fn(h);
                }
            });
        };

        module.exports = InterceptorManager;

        /***/
    }),

    /***/
    444:
    /***/
    (function(module, exports, __webpack_require__) {

        'use strict';

        var utils = __webpack_require__(425);
        var transformData = __webpack_require__(445);
        var isCancel = __webpack_require__(446);
        var defaults = __webpack_require__(432);

        /**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
        function throwIfCancellationRequested(config) {
            if (config.cancelToken) {
                config.cancelToken.throwIfRequested();
            }
        }

        /**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
        module.exports = function dispatchRequest(config) {
            throwIfCancellationRequested(config);

            // Ensure headers exist
            config.headers = config.headers || {};

            // Transform request data
            config.data = transformData(config.data, config.headers, config.transformRequest);

            // Flatten headers
            config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});

            utils.forEach([
                'delete',
                'get',
                'head',
                'post',
                'put',
                'patch',
                'common'
            ], function cleanHeaderConfig(method) {
                delete config.headers[method];
            });

            var adapter = config.adapter || defaults.adapter;

            return adapter(config).then(function onAdapterResolution(response) {
                throwIfCancellationRequested(config);

                // Transform response data
                response.data = transformData(response.data, response.headers, config.transformResponse);

                return response;
            }, function onAdapterRejection(reason) {
                if (!isCancel(reason)) {
                    throwIfCancellationRequested(config);

                    // Transform response data
                    if (reason && reason.response) {
                        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
                    }
                }

                return Promise.reject(reason);
            });
        };

        /***/
    }),

    /***/
    445:
    /***/
    (function(module, exports, __webpack_require__) {

        'use strict';

        var utils = __webpack_require__(425);

        /**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
        module.exports = function transformData(data, headers, fns) {
            /*eslint no-param-reassign:0*/
            utils.forEach(fns, function transform(fn) {
                data = fn(data, headers);
            });

            return data;
        };

        /***/
    }),

    /***/
    446:
    /***/
    (function(module, exports) {

        'use strict';

        module.exports = function isCancel(value) {
            return !!(value && value.__CANCEL__);
        };

        /***/
    }),

    /***/
    447:
    /***/
    (function(module, exports) {

        'use strict';

        /**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
        module.exports = function isAbsoluteURL(url) {
            // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
            // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
            // by any combination of letters, digits, plus, period, or hyphen.
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
        };

        /***/
    }),

    /***/
    448:
    /***/
    (function(module, exports) {

        'use strict';

        /**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
        module.exports = function combineURLs(baseURL, relativeURL) {
            return relativeURL
                ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
                : baseURL;
        };

        /***/
    }),

    /***/
    449:
    /***/
    (function(module, exports) {

        'use strict';

        /**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
        function Cancel(message) {
            this.message = message;
        }

        Cancel.prototype.toString = function toString() {
            return 'Cancel' + (this.message
                ? ': ' + this.message
                : '');
        };

        Cancel.prototype.__CANCEL__ = true;

        module.exports = Cancel;

        /***/
    }),

    /***/
    450:
    /***/
    (function(module, exports, __webpack_require__) {

        'use strict';

        var Cancel = __webpack_require__(449);

        /**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
        function CancelToken(executor) {
            if (typeof executor !== 'function') {
                throw new TypeError('executor must be a function.');
            }

            var resolvePromise;
            this.promise = new Promise(function promiseExecutor(resolve) {
                resolvePromise = resolve;
            });

            var token = this;
            executor(function cancel(message) {
                if (token.reason) {
                    // Cancellation has already been requested
                    return;
                }

                token.reason = new Cancel(message);
                resolvePromise(token.reason);
            });
        }

        /**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
        CancelToken.prototype.throwIfRequested = function throwIfRequested() {
            if (this.reason) {
                throw this.reason;
            }
        };

        /**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
        CancelToken.source = function source() {
            var cancel;
            var token = new CancelToken(function executor(c) {
                cancel = c;
            });
            return {token: token, cancel: cancel};
        };

        module.exports = CancelToken;

        /***/
    }),

    /***/
    451:
    /***/
    (function(module, exports) {

        'use strict';

        /**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
        module.exports = function spread(callback) {
            return function wrap(arr) {
                return callback.apply(null, arr);
            };
        };

        /***/
    }),

    /***/
    452:
    /***/
    (function(module, exports) {

        'use strict';

        Object.defineProperty(exports, "__esModule", {value: true});
        var baseUrl = exports.baseUrl = 'http://127.0.0.1:7777/store';

        /***/
    }),

    /***/
    499:
    /***/
    (function(module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, "__esModule", {value: true});

        var _extends2 = __webpack_require__(287);

        var _extends3 = _interopRequireDefault(_extends2);

        var _getPrototypeOf = __webpack_require__(311);

        var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

        var _classCallCheck2 = __webpack_require__(316);

        var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

        var _createClass2 = __webpack_require__(317);

        var _createClass3 = _interopRequireDefault(_createClass2);

        var _possibleConstructorReturn2 = __webpack_require__(321);

        var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

        var _inherits2 = __webpack_require__(355);

        var _inherits3 = _interopRequireDefault(_inherits2);

        var _react = __webpack_require__(24);

        var _react2 = _interopRequireDefault(_react);

        var _Header = __webpack_require__(414);

        var _Header2 = _interopRequireDefault(_Header);

        var _index = __webpack_require__(500);

        var _index2 = _interopRequireDefault(_index);

        var _reactRedux = __webpack_require__(363);

        var _reactRouter = __webpack_require__(228);

        var _client = __webpack_require__(422);

        var _config = __webpack_require__(452);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule
                ? obj
                : {
                    default: obj
                };
        }

        var Container = function(_Component) {
            (0, _inherits3.default)(Container, _Component);

            function Container(props) {
                (0, _classCallCheck3.default)(this, Container);

                var _this = (0, _possibleConstructorReturn3.default)(this, (Container.__proto__ || (0, _getPrototypeOf2.default)(Container)).call(this, props));

                _this.state = {
                    list: null,
                    totalMoney: 0,
                    editText: '编辑',
                    // 控制单选
                    classArr: [],
                    // 控制全选
                    selectAllClass: 'icon select'
                };
                _this.select = _this.select.bind(_this);
                _this.selectAll = _this.selectAll.bind(_this);
                return _this;
            }(0, _createClass3.default)(Container, [
                {
                    key: 'componentDidMount',
                    value: function componentDidMount() {
                        var _this2 = this;

                        var url = _config.baseUrl + '/getShoppingCarList';
                        (0, _client.get)(url, null, function(res) {
                            var list = res.list;

                            var classArr = [];
                            list.forEach(function(item) {
                                classArr.push('icon select');
                            });
                            var totalMoney = _this2.getTotal(list, classArr);
                            _this2.setState((0, _extends3.default)({}, _this2.state, {
                                list: res.list,
                                classArr: classArr,
                                totalMoney: totalMoney
                            }));
                        });
                    }
                }, {
                    key: 'edit',
                    value: function edit() {
                        alert('edit');
                    }

                    // 选择

                }, {
                    key: 'select',
                    value: function select(i) {
                        var classArr = this.state.classArr;
                        classArr[i] = classArr[i].match('select')
                            ? 'icon'
                            : 'icon select';
                        var selectLen = classArr.filter(function(item) {
                            return item.match('select');
                        }).length;
                        this.state.selectAllClass = selectLen === classArr.length
                            ? 'icon select'
                            : 'icon';
                        var totalMoney = this.getTotal(this.state.list, classArr);
                        this.setState((0, _extends3.default)({}, this.state, {
                            classArr: classArr,
                            totalMoney: totalMoney,
                            selectAllClass: this.state.selectAllClass
                        }));
                    }

                    // 合计

                }, {
                    key: 'getTotal',
                    value: function getTotal(list, classArr) {
                        var totalMone = 0;
                        classArr.forEach(function(item, i) {
                            if (item.match('select')) {
                                var _list$i = list[i],
                                    price = _list$i.price,
                                    prdNum = _list$i.prdNum;

                                totalMone += price * prdNum;
                            }
                        });
                        return totalMone;
                    }

                    // 全选

                }, {
                    key: 'selectAll',
                    value: function selectAll(ele) {
                        var classArr = this.state.classArr;
                        var className = this.state.selectAllClass;
                        if (className.match('select')) {
                            className = 'icon';
                            classArr = classArr.map(function(item) {
                                return 'icon';
                            });
                        } else {
                            className = 'icon select';
                            classArr = classArr.map(function(item) {
                                return 'icon select';
                            });
                        }
                        var totalMoney = this.getTotal(this.state.list, classArr);
                        this.setState((0, _extends3.default)({}, this.state, {
                            classArr: classArr,
                            totalMoney: totalMoney,
                            selectAllClass: className
                        }));
                    }
                }, {
                    key: 'render',
                    value: function render() {
                        return _react2.default.createElement('div', null, _react2.default.createElement(_Header2.default, {
                            edit: this.edit,
                            title: '\u8D2D\u7269\u8F66',
                            editText: this.state.editText
                        }), _react2.default.createElement(_index2.default, {
                            list: this.state.list,
                            select: this.select,
                            selectAllClass: this.state.selectAllClass,
                            selectAll: this.selectAll,
                            classArr: this.state.classArr,
                            totalMoney: this.state.totalMoney.toFixed(2)
                        }));
                    }
                }
            ]);
            return Container;
        }(_react.Component);

        var stateToProps = function stateToProps(state) {
            return {};
        };
        var dispatchToProps = {};
        exports.default = (0, _reactRedux.connect)(stateToProps, dispatchToProps)(Container);

        /***/
    }),

    /***/
    500:
    /***/
    (function(module, exports, __webpack_require__) {

        'use strict';

        Object.defineProperty(exports, "__esModule", {value: true});

        var _getPrototypeOf = __webpack_require__(311);

        var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

        var _classCallCheck2 = __webpack_require__(316);

        var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

        var _createClass2 = __webpack_require__(317);

        var _createClass3 = _interopRequireDefault(_createClass2);

        var _possibleConstructorReturn2 = __webpack_require__(321);

        var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

        var _inherits2 = __webpack_require__(355);

        var _inherits3 = _interopRequireDefault(_inherits2);

        var _react = __webpack_require__(24);

        var _react2 = _interopRequireDefault(_react);

        __webpack_require__(501);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule
                ? obj
                : {
                    default: obj
                };
        }

        var View = function(_Component) {
            (0, _inherits3.default)(View, _Component);

            function View(props) {
                (0, _classCallCheck3.default)(this, View);
                return (0, _possibleConstructorReturn3.default)(this, (View.__proto__ || (0, _getPrototypeOf2.default)(View)).call(this, props));
            }(0, _createClass3.default)(View, [
                {
                    key: 'render',
                    value: function render() {
                        var _this2 = this;

                        var _props = this.props,
                            totalMoney = _props.totalMoney,
                            list = _props.list,
                            select = _props.select,
                            classNameArr = _props.classNameArr;

                        return _react2.default.createElement('div', {
                            className: 'shopping edit'
                        }, _react2.default.createElement('ul', {
                            className: 'list'
                        }, _react2.default.createElement('li', {
                            className: 'edit'
                        }, _react2.default.createElement('div', {
                            className: 'one'
                        }, _react2.default.createElement('span', {className: 'icon select'})), _react2.default.createElement('div', {
                            className: 'two'
                        }, _react2.default.createElement('img', {src: __webpack_require__(504)})), _react2.default.createElement('div', {
                            className: 'info'
                        }, _react2.default.createElement('p', null, '\u9752\u6912\u56DE\u9505\u8089'), _react2.default.createElement('p', null, '$ 35 ')), _react2.default.createElement('div', {
                            className: 'three'
                        }, _react2.default.createElement('p', {
                            className: 'prdNum'
                        }, 'x 11'), _react2.default.createElement('p', {
                            className: 'operate dn'
                        }, _react2.default.createElement('span', {
                            className: 'minus'
                        }, '-'), _react2.default.createElement('span', {
                            className: 'num'
                        }, '5'), _react2.default.createElement('span', {
                            className: 'add'
                        }, '+')))), _react2.default.createElement('li', null, _react2.default.createElement('div', {
                            className: 'one'
                        }, _react2.default.createElement('span', {className: 'icon select'})), _react2.default.createElement('div', {
                            className: 'two'
                        }, _react2.default.createElement('img', {src: __webpack_require__(504)})), _react2.default.createElement('div', {
                            className: 'info'
                        }, _react2.default.createElement('p', null, '\u9752\u6912\u56DE\u9505\u8089'), _react2.default.createElement('p', null, '$ 35 ')), _react2.default.createElement('div', {
                            className: 'three'
                        }, 'x 11'))), _react2.default.createElement('div', {
                            className: 'shopping-footer'
                        }, _react2.default.createElement('p', {
                            onClick: function onClick() {
                                _this2.props.selectAll(_this2.refs.selectAll);
                            },
                            className: 'all'
                        }, _react2.default.createElement('i', {
                            ref: 'selectAll',
                            className: this.props.selectAllclassName
                        }), _react2.default.createElement('span', null, '\u5168\u9009')), _react2.default.createElement('div', {
                            className: 'other'
                        }, _react2.default.createElement('div', {
                            className: 'total'
                        }, _react2.default.createElement('p', null, '$ ', totalMoney), _react2.default.createElement('p', null, '\u5408\u8BA1')), _react2.default.createElement('div', {className: 'cal'}))));
                    }
                }
            ]);
            return View;
        }(_react.Component);

        exports.default = View;

        /***/
    }),

    /***/
    501:
    /***/
    (function(module, exports, __webpack_require__) {

        // style-loader: Adds some css to the DOM by adding a <style> tag

        // load the styles
        var content = __webpack_require__(502);
        if (typeof content === 'string')
            content = [
                [module.id, content, '']
            ];

        // add the styles to the DOM
        var update = __webpack_require__(387)(content, {});
        if (content.locals)
            module.exports = content.locals;

        // Hot Module Replacement
        if (true) {
            // When the styles change, update the <style> tags
            if (!content.locals) {
                module.hot.accept(502, function() {
                    var newContent = __webpack_require__(502);
                    if (typeof newContent === 'string')
                        newContent = [
                            [module.id, newContent, '']
                        ];
                    update(newContent);
                });
            }
            // When the module is disposed, remove the <style> tags
            module.hot.dispose(function() {
                update();
            });
        }

        /***/
    }),

    /***/
    502:
    /***/
    (function(module, exports, __webpack_require__) {

        exports = module.exports = __webpack_require__(386)();
        // imports

        // module
        exports.push([
            module.id, "@charset \"UTF-8\";body{background:#f5f5f5}.nav{background:#fff;border-bottom:1px solid}.nav span.edit,.shopping .icon{display:-ms-inline-flexbox;display:inline-flex}.shopping .icon{width:33px;height:33px;border:1px solid #999;background-size:80% 80%;border-radius:50%}.shopping .select{background:#6bb600 url(" + __webpack_require__(503) + ") no-repeat 50%}.shopping .list li{position:relative;height:1.6rem;border-bottom:1px solid #dadada;background:#fff;display:-ms-flexbox;display:flex;padding:0 .266666rem;-ms-flex-align:center;align-items:center}.shopping .list li .one,.shopping .list li .three{position:absolute}.shopping .list li .one{left:.266666rem}.shopping .list li .two{margin-left:50px;display:-ms-flexbox;display:flex}.shopping .list li .two img{width:1.066666rem;height:1.066666rem}.shopping .list li .info{margin-left:.266666rem;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;font-size:21px}.shopping .list li .info p{line-height:1.5}.shopping .list li .three{right:.266666rem}.shopping .list li .three .operate{display:block}.shopping .list li .three .operate .add,.shopping .list li .three .operate .minus{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:#ff9000;width:35px;height:35px;border:1px solid;box-sizing:content-box;border-radius:50%}.shopping .list li .three .operate .num{margin:0 10px}.shopping .shopping-footer{position:fixed;bottom:0;width:100%;height:.96rem;background:#fff;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.shopping .shopping-footer .all{margin-left:.266666rem}.shopping .shopping-footer .all span{margin-left:.133333rem;position:relative;top:-.066666rem}.shopping .shopping-footer .other{display:-ms-flexbox;display:flex;height:100%}.shopping .shopping-footer .other .total{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;font-size:.36rem;margin-right:.266666rem;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.shopping .shopping-footer .other .cal:after{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background:#ff7007;color:#fff;content:\"\\53BB\\7ED3\\7B97\";width:100%;height:100%;font-size:.32rem;width:2.026666rem}.shopping.edit .icon{background-color:#f44336}.shopping.edit .three .prdNum{display:none}.shopping.edit .three .operate{display:block}.shopping.edit .cal:after{content:\"\\5220\\9664\"!important;background:#f44336!important}.shopping.edit .total{display:none!important}",
            "", {
                "version": 3,
                "sources": ["/Users/huruqing/work/store/src/routes/ShoppingCar/components/src/routes/ShoppingCar/components/index.scss"],
                "names": [],
                "mappings": "AAYA,iBAZA,KACI,kBAAmB,CACtB,KAGG,gBAAgB,uBACQ,CAI3B,+BAFO,2BAAA,mBAAoB,CAI5B,gBAGQ,WAAW,YACC,sBACU,wBACE,iBACN,CAP1B,kBAUQ,8DAAuE,CAV/E,mBAcY,kBAAkB,cACJ,gCACkB,gBAChB,oBAChB,aAAa,qBACS,sBACtB,kBAAmB,CApB/B,kDAuBgB,iBAAkB,CAvBlC,wBA0BgB,eAAiB,CA1BjC,wBA6BgB,iBAAiB,oBACjB,YAAa,CA9B7B,4BAgCoB,kBAAkB,kBACC,CAjCvC,yBAqCgB,uBAAwB,oBACxB,aAAa,0BACb,sBAAsB,qBACtB,uBAAuB,cACR,CAzC/B,2BA2CoB,eAAgB,CA3CpC,0BA+CgB,gBAAkB,CA/ClC,mCAiDoB,aAAc,CAjDlC,kFAmDwB,2BAAA,oBAAoB,qBACpB,uBAAuB,sBACvB,mBAAmB,cACL,WACH,YACC,iBACK,uBACM,iBACL,CA3D1C,wCA8DwB,aAAc,CA9DtC,2BAqEQ,eAAe,SACN,WACE,cACI,gBACC,oBAChB,aAAa,sBACb,8BAA8B,sBAC9B,kBAAmB,CA5E3B,gCA8EY,sBAAwB,CA9EpC,qCAgFgB,uBAAwB,kBACN,eACD,CAlFjC,kCAsFY,oBAAA,aAAa,WACD,CAvFxB,yCAyFgB,oBAAA,aAAa,0BACb,sBAAsB,iBACJ,wBACO,sBACzB,mBAAmB,qBACnB,sBAAuB,CA9FvC,6CAkGoB,2BAAA,oBAAoB,sBACpB,mBAAmB,qBACnB,uBAAuB,mBAEJ,WACR,0BACF,WACE,YACC,iBACM,iBACA,CACrB,qBAST,wBAAyB,CAFjC,8BAMY,YAAa,CANzB,+BASY,aAAc,CAT1B,0BAcY,+BAAiB,4BACY,CAfzC,sBAmBQ,sBAAuB,CAC1B",
                "file": "index.scss",
                "sourcesContent": ["body {\n    background: #F5F5F5;\n}\n\n.nav {\n    background: #fff;\n    border-bottom: 1px solid;\n    span.edit {\n        display: inline-flex;\n    }\n}\n\n.shopping {\n    .icon {\n        display: inline-flex;\n        width: 33px;\n        height: 33px;\n        border: 1px solid #999;\n        background-size: 80% 80%;\n        border-radius: 50%;\n    }\n    .select {\n        background: #6bb600 url(../../../images/icon-chose.png)no-repeat center;\n    }\n    .list {\n        li {\n            position: relative;\n            height: 1.6rem;\n            border-bottom: 1px solid #DADADA;\n            background: #fff;\n            display: flex;\n            padding: 0 0.266666rem;\n            align-items: center;\n            .one,\n            .three {\n                position: absolute;\n            }\n            .one {\n                left: 0.266666rem;\n            }\n            .two {\n                margin-left: 50px;\n                display: flex;\n                img {\n                    width: 1.066666rem;\n                    height: 1.066666rem;\n                }\n            }\n            .info {\n                margin-left: 0.266666rem;\n                display: flex;\n                flex-direction: column;\n                justify-content: center;\n                font-size: 21px;\n                p {\n                    line-height: 1.5;\n                }\n            }\n            .three {\n                right: 0.266666rem;\n                .operate {\n                    display: block;\n                    .add,.minus {\n                        display: inline-flex;\n                        justify-content: center;\n                        align-items: center;\n                        color: #ff9000;\n                        width: 35px;\n                        height: 35px;\n                        border: 1px solid;\n                        box-sizing: content-box;\n                        border-radius: 50%;\n                    }\n                    .num {\n                        margin: 0 10px;\n                    }\n                }\n            }\n        }\n    }\n    .shopping-footer {\n        position: fixed;\n        bottom: 0;\n        width: 100%;\n        height: 0.96rem;\n        background: #fff;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        .all {\n            margin-left: 0.266666rem;\n            span {\n                margin-left: 0.133333rem;\n                position: relative;\n                top: -0.066666rem;\n            }\n        }\n        .other {\n            display: flex;\n            height: 100%;\n            .total {\n                display: flex;\n                flex-direction: column;\n                font-size: 0.36rem;\n                margin-right: 0.266666rem;\n                align-items: center;\n                justify-content: center;\n            }\n            .cal {\n                &:after {\n                    display: inline-flex;\n                    align-items: center;\n                    justify-content: center;\n                    height: 100%;\n                    background: #ff7007;\n                    color: #fff;\n                    content: '去结算';\n                    width: 100%;\n                    height: 100%;\n                    font-size: 0.32rem;\n                    width: 2.026666rem;\n                }\n            }\n        }\n    }\n}\n\n// 编辑状态\n.shopping.edit {\n    .icon {\n        background-color: #F44336;\n    }\n    .three {\n        .prdNum {\n            display: none;\n        }\n        .operate {\n            display: block;\n        }\n    }\n    .cal {\n        &:after {\n            content: '删除'!important;\n            background: #F44336!important;\n        }\n    }\n    .total {\n        display: none!important;\n    }\n}"],
                "sourceRoot": ""
            }
        ]);

        // exports

        /***/
    }),

    /***/
    503:
    /***/
    (function(module, exports) {

        module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAARCAYAAADDjbwNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiMTVmMmQ0ZS03ZTM1LWFlNGMtOWVmMS1kYmY3MjliNDA0OWQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDlFNEU1RjM3NkREMTFFNTk4NTdBREJDMDAyMjVGMjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDlFNEU1RjI3NkREMTFFNTk4NTdBREJDMDAyMjVGMjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmIxNWYyZDRlLTdlMzUtYWU0Yy05ZWYxLWRiZjcyOWI0MDQ5ZCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpiMTVmMmQ0ZS03ZTM1LWFlNGMtOWVmMS1kYmY3MjliNDA0OWQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz70n89ZAAAApElEQVR42mL4//8/Aw1xHhA/BGI1FgbagTwgngBl69DSJ/+gOAMkRhdLaGERVkuQLbIBYi5aWQKzKBAquZsCy/BaArNIFYif/YcAciwjaAly0KmTaRlRlqAnBg0SLSPaEmypjljLSLIEV/ImZBnJluDLR7gsI8sSQhkW3bIyci0hpmRAtuw/uZYQWwTBLCPbEhBmBNtGGKiDi3oGhrXk1hkAAQYAsf3THC+IFzIAAAAASUVORK5CYII="

        /***/
    }),

    /***/
    504:
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "e696647aea0c77ac4da3368ad304d17a.png";

        /***/
    }),

    /***/
    505:
    /***/
    (function(module, exports) {

        'use strict';

        Object.defineProperty(exports, "__esModule", {value: true});
        // action creator

        var initState = {
            moduleName: 'shoppingCar'
        };

        exports.default = function() {
            var state = arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : initState;

            return state;
        };

        /***/
    })

});
//# sourceMappingURL=4a2c33fdfa82dcadb84a.js.map

//# sourceMappingURL=4a2c33fdfa82dcadb84a.js.map
