"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppService = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _common = require("@nestjs/common");
var _dec, _class;
var AppService = (_dec = (0, _common.Injectable)(), _dec(_class = /*#__PURE__*/function () {
  function AppService() {
    (0, _classCallCheck2["default"])(this, AppService);
  }
  (0, _createClass2["default"])(AppService, [{
    key: "getHello",
    value: function getHello() {
      return 'Hello World!';
    }
  }]);
  return AppService;
}()) || _class);
exports.AppService = AppService;