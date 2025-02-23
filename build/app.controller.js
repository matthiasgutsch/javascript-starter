"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppController = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _applyDecoratedDescriptor2 = _interopRequireDefault(require("@babel/runtime/helpers/applyDecoratedDescriptor"));
var _common = require("@nestjs/common");
var _app = require("./app.service");
var _dec, _dec2, _dec3, _class, _class2;
var AppController = (_dec = (0, _common.Controller)(), _dec2 = (0, _common.Dependencies)(_app.AppService), _dec3 = (0, _common.Get)(), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function () {
  function AppController(appService) {
    (0, _classCallCheck2["default"])(this, AppController);
    this.appService = appService;
  }
  (0, _createClass2["default"])(AppController, [{
    key: "getHello",
    value: function getHello() {
      return this.appService.getHello();
    }
  }]);
  return AppController;
}(), ((0, _applyDecoratedDescriptor2["default"])(_class2.prototype, "getHello", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "getHello"), _class2.prototype)), _class2)) || _class) || _class);
exports.AppController = AppController;