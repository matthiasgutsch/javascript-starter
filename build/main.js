"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _core = require("@nestjs/core");
var _app = require("./app.module");
function bootstrap() {
  return _bootstrap.apply(this, arguments);
}
function _bootstrap() {
  _bootstrap = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var app;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _core.NestFactory.create(_app.AppModule);
        case 2:
          app = _context.sent;
          _context.next = 5;
          return app.listen(3000);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _bootstrap.apply(this, arguments);
}
bootstrap();