webpackHotUpdate(8,{

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var View = function (_Component) {
		(0, _inherits3.default)(View, _Component);
	
		function View(props) {
			(0, _classCallCheck3.default)(this, View);
			return (0, _possibleConstructorReturn3.default)(this, (View.__proto__ || (0, _getPrototypeOf2.default)(View)).call(this, props));
		}
	
		(0, _createClass3.default)(View, [{
			key: 'render',
			value: function render() {
				var _this2 = this;
	
				var _props = this.props,
				    totalMoney = _props.totalMoney,
				    list = _props.list,
				    select = _props.select,
				    classArr = _props.classArr;
	
				return _react2.default.createElement(
					'div',
					{ className: 'shopping' },
					_react2.default.createElement(
						'ul',
						{ className: 'list' },
						list && list.map(function (item, i) {
							return _react2.default.createElement(
								'li',
								{ key: item.id },
								_react2.default.createElement(
									'div',
									{ className: 'one' },
									_react2.default.createElement('span', { ref: 'prd' + i,
										onClick: function onClick() {
											select(i);
										},
										className: classArr[i] })
								),
								_react2.default.createElement(
									'div',
									{ className: 'two' },
									_react2.default.createElement('img', { src: item.imgUrl }),
									_react2.default.createElement(
										'div',
										{ className: 'info' },
										_react2.default.createElement(
											'p',
											null,
											item.shopName
										),
										_react2.default.createElement(
											'p',
											null,
											'$ ',
											item.price
										)
									)
								),
								_react2.default.createElement(
									'div',
									{ className: 'three' },
									_react2.default.createElement(
										'p',
										{ className: 'prdNum' },
										'x 11'
									),
									_react2.default.createElement(
										'p',
										{ className: 'operate dn' },
										_react2.default.createElement(
											'span',
											{ className: 'minus' },
											'-'
										),
										_react2.default.createElement(
											'span',
											{ className: 'num' },
											'5'
										),
										_react2.default.createElement(
											'span',
											{ className: 'add' },
											'+'
										)
									)
								)
							);
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'shopping-footer' },
						_react2.default.createElement(
							'p',
							{ onClick: function onClick() {
									_this2.props.selectAll(_this2.refs.selectAll);
								},
								className: 'all' },
							_react2.default.createElement('i', { ref: 'selectAll',
								className: this.props.selectAllClass }),
							_react2.default.createElement(
								'span',
								null,
								'\u5168\u9009'
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'other' },
							_react2.default.createElement(
								'div',
								{ className: 'total' },
								_react2.default.createElement(
									'p',
									null,
									'$ ',
									totalMoney
								),
								_react2.default.createElement(
									'p',
									null,
									'\u5408\u8BA1'
								)
							),
							_react2.default.createElement('div', { className: 'cal' })
						)
					)
				);
			}
		}]);
		return View;
	}(_react.Component);
	
	exports.default = View;

/***/ })

})
//# sourceMappingURL=8.78d048a779ed32ad3d03.hot-update.js.map