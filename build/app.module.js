"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppModule = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _common = require("@nestjs/common");
var _app = require("./app.controller");
var _app2 = require("./app.service");
var _dec, _class;
var AppModule = (_dec = (0, _common.Module)({
  imports: [],
  controllers: [_app.AppController],
  providers: [_app2.AppService]
}), _dec(_class = /*#__PURE__*/(0, _createClass2["default"])(function AppModule() {
  (0, _classCallCheck2["default"])(this, AppModule);
})) || _class);
exports.AppModule = AppModule;