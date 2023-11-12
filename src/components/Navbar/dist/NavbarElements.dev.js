"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavMenu = exports.Bars = exports.NavLink = exports.Nav = void 0;

var _fa = require("react-icons/fa");

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-right: -24px;\n  /* Second Nav */\n  /* margin-right: 24px; */\n  /* Third Nav */\n  /* width: 100vw;\nwhite-space: nowrap; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n  color: #FFF;\n  align-items: center;\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 75%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: #FFF;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 2rem;\n  height: 100%;\n  cursor: pointer;\n  &.active {\n    color: #141E30;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: #EFAA74;\n  height: 85px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.2rem calc((220vw - 1000px) /5);\n  z-index: 12;\n \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Nav = _styledComponents["default"].nav(_templateObject());

exports.Nav = Nav;
var NavLink = (0, _styledComponents["default"])(_reactRouterDom.NavLink)(_templateObject2());
exports.NavLink = NavLink;
var Bars = (0, _styledComponents["default"])(_fa.FaBeer)(_templateObject3());
exports.Bars = Bars;

var NavMenu = _styledComponents["default"].div(_templateObject4());

exports.NavMenu = NavMenu;