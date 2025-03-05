"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IndexIconBox = exports.IconBox = void 0;
var _react = _interopRequireDefault(require("react"));
require("./module1.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// CSS 파일 참조

var IconBox = exports.IconBox = function IconBox(_ref) {
  var imgSrc = _ref.imgSrc,
    text = _ref.text;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "Area3"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "center"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: imgSrc,
    alt: "icon"
  })), /*#__PURE__*/_react["default"].createElement("h1", {
    className: "iconcenter"
  }, text.split("\n").map(function (line, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: index
    }, line);
  })), /*#__PURE__*/_react["default"].createElement("br", null), "......................................................................");
};
var IndexIconBox = exports.IndexIconBox = function IndexIconBox(_ref2) {
  var iconData = _ref2.iconData;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "icon_box"
  }, iconData.map(function (icon) {
    return /*#__PURE__*/_react["default"].createElement(IconBox, {
      key: icon.id,
      imgSrc: icon.imgSrc,
      text: icon.text
    });
  }));
};