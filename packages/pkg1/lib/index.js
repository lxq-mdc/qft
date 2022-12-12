"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _monorepo() {
  const data = _interopRequireDefault(require("@qft/monorepo2"));
  _monorepo = function _monorepo() {
    return data;
  };
  return data;
}
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function fun2() {
  (0, _monorepo().default)();
  console.log('I am package 1');
}
var _default = fun2;
exports.default = _default;