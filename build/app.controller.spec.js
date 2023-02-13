"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _testing = require("@nestjs/testing");
var _app = require("./app.controller");
var _app2 = require("./app.service");
describe('AppController', function () {
  var app;
  beforeAll( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _testing.Test.createTestingModule({
            controllers: [_app.AppController],
            providers: [_app2.AppService]
          }).compile();
        case 2:
          app = _context.sent;
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));
  describe('getHello', function () {
    it('should return "Hello World!"', function () {
      var appController = app.get(_app.AppController);
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});