"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.symbol.description.js");

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const QuestionModal = props => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
  };
  const [responseValue, setResponseValue] = (0, _react.useState)(props.onAccept ? false : props.onRespondNumerical ? 0 : props.onRespondText ? '' : false);
  return /*#__PURE__*/_react.default.createElement(_material.Modal, {
    open: props.open,
    onClose: () => props.onClose(),
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/_react.default.createElement(_material.Box, {
    sx: style
  }, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, props.header), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    id: "modal-modal-description",
    sx: {
      mt: 2
    }
  }, props.description), props.onAccept ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    color: "success",
    sx: {
      marginTop: '1vh'
    },
    onClick: () => props.onAccept()
  }, "YES"), /*#__PURE__*/_react.default.createElement(_material.Button, {
    variant: "contained",
    color: "error",
    sx: {
      marginTop: '1vh',
      marginLeft: '1vw'
    },
    onClick: () => props.onClose()
  }, "NO")) : props.onRespondNumerical ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_material.TextField, {
    type: "number",
    value: responseValue,
    onChange: e => setResponseValue(e.target.value)
  }), /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: () => props.onRespondNumerical(responseValue)
  }, "Submit"), /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: () => props.onClose()
  }, "Close")) : props.onRespondText ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_material.TextField, {
    type: "text",
    value: responseValue,
    onChange: e => setResponseValue(e.target.value)
  }), /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: () => props.onRespondText(responseValue)
  }, "Submit"), /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: () => props.onClose()
  }, "Close")) : props.onRespondOptions ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.options.map(option => /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: () => props.onRespondOptions(option)
  }, option)), /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: () => props.onClose()
  }, "Close")) : null));
};

var _default = QuestionModal;
exports.default = _default;