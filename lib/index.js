'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    root: {
        borderRadius: 5,
        transformStyle: 'preserve-3d',
        WebkitTapHighlightColor: 'rgba(#000, 0)'
    },

    staticFallback: {
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 5,
        boxShadow: '0 2px 8px rgba(14, 21, 47, 0.25)'
    },

    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: 5,
        transition: 'all 0.2s ease-out'
    },

    shadowOnHover: {
        boxShadow: '0 45px 100px rgba(14, 21, 47, 0.4), 0 16px 40px rgba(14, 21, 47, 0.4)'
    },

    layers: {
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: 5,
        overflow: 'hidden',
        transformStyle: 'preserve-3d'
    },

    renderedLayer: {
        position: 'absolute',
        width: '104%',
        height: '104%',
        top: '-2%',
        left: '-2%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundColor: 'transparent',
        backgroundSize: 'cover',
        transition: 'all 0.1s ease-out'
    },

    shadow: {
        position: 'absolute',
        top: '5%',
        left: '5%',
        width: '90%',
        height: '90%',
        transition: 'all 0.2s ease-out',
        boxShadow: '0 8px 30px rgba(14, 21, 47, 0.6)'
    },

    shine: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 5,
        background: 'linear-gradient(135deg, rgba(255, 255, 255, .25) 0%, rgba(255, 255, 255, 0) 60%)'
    }
};

var ParallexImage = function (_React$Component) {
    _inherits(ParallexImage, _React$Component);

    function ParallexImage() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ParallexImage);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ParallexImage.__proto__ || Object.getPrototypeOf(ParallexImage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            rootElemWidth: 0,
            rootElemHeight: 0,
            isOnHover: false,
            container: {},
            shine: {},
            layers: []
        }, _this.handleMove = function (_ref2) {
            var pageX = _ref2.pageX,
                pageY = _ref2.pageY;

            var layerCount = _this.props.layers.length;
            var _this$state = _this.state,
                rootElemWidth = _this$state.rootElemWidth,
                rootElemHeight = _this$state.rootElemHeight;

            var bodyScrollTop = document.body.scrollTop || document.getElementsByTagName('html')[0].scrollTop;
            var bodyScrollLeft = document.body.scrollLeft;
            var offsets = _this.refs.root.getBoundingClientRect();
            var wMultiple = 320 / rootElemWidth;
            var offsetX = 0.52 - (pageX - offsets.left - bodyScrollLeft) / rootElemWidth; // cursor position X
            var offsetY = 0.52 - (pageY - offsets.top - bodyScrollTop) / rootElemHeight; // cursor position Y
            var dy = pageY - offsets.top - bodyScrollTop - rootElemHeight / 2; // center Y of container
            var dx = pageX - offsets.left - bodyScrollLeft - rootElemWidth / 2; // center X of container
            var yRotate = (offsetX - dx) * (0.07 * wMultiple); // rotation for container Y
            var xRotate = (dy - offsetY) * (0.1 * wMultiple); // rotation for container X

            var arad = Math.atan2(dy, dx); // angle between cursor and center of container in RAD

            var rawAngle = arad * 180 / Math.PI - 90; // convert rad to degrees
            var angle = rawAngle < 0 ? rawAngle + 360 : rawAngle;
            _this.setState({
                container: {
                    transform: 'rotateX(' + xRotate + 'deg) rotateY(' + yRotate + 'deg)' + (_this.state.isOnHover ? ' scale3d(1.07,1.07,1.07)' : '')
                },
                shine: {
                    background: 'linear-gradient(' + angle + 'deg, rgba(255, 255, 255, ' + (pageY - offsets.top - bodyScrollTop) / rootElemHeight * 0.4 + ') 0%, rgba(255, 255, 255, 0) 80%)',
                    transform: 'translateX(' + (offsetX * layerCount - 0.1) + 'px) translateY(' + (offsetY * layerCount - 0.1) + 'px)'
                },
                layers: _this.props.layers.map(function (_, idx) {
                    return {
                        transform: 'translateX(' + offsetX * (layerCount - idx) * (idx * 2.5 / wMultiple) + 'px) translateY(' + offsetY * layerCount * (idx * 2.5 / wMultiple) + 'px)'
                    };
                })
            });
        }, _this.handleTouchMove = function (evt) {
            evt.preventDefault();
            var _evt$touches$ = evt.touches[0],
                pageX = _evt$touches$.pageX,
                pageY = _evt$touches$.pageY;

            _this.handleMove({ pageX: pageX, pageY: pageY });
        }, _this.handleEnter = function () {
            _this.setState({ isOnHover: true });
        }, _this.handleLeave = function () {
            _this.setState({
                isOnHover: false,
                container: {},
                shine: {},
                layers: []
            });
        }, _this.renderShadow = function () {
            return _react2.default.createElement('div', { style: _extends({}, styles.shadow, _this.state.isOnHover ? styles.shadowOnHover : {}) });
        }, _this.renderLayers = function () {
            return _react2.default.createElement(
                'div',
                { style: styles.layers },
                _this.props.layers && _this.props.layers.map(function (imgSrc, idx) {
                    return _react2.default.createElement('div', {
                        style: _extends({
                            backgroundImage: 'url(' + imgSrc + ')'
                        }, styles.renderedLayer, _this.state.layers[idx] ? _this.state.layers[idx] : {}),
                        key: idx
                    });
                })
            );
        }, _this.renderShine = function () {
            return _react2.default.createElement('div', { style: _extends({}, styles.shine, _this.state.shine) });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ParallexImage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.props.isStatic) {
                this.setState({ // eslint-disable-line react/no-did-mount-set-state
                    // this is a legit use case. we must trigger a re-render. don't worry.
                    rootElemWidth: this.refs.root.clientWidth || this.refs.root.offsetWidth || this.refs.root.scrollWidth,
                    rootElemHeight: this.refs.root.clientHeight || this.refs.root.offsetHeight || this.refs.root.scrollHeight
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.props.isStatic) {
                return _react2.default.createElement(
                    'div',
                    {
                        style: _extends({}, styles.root, this.props.style ? this.props.style : {}),
                        className: this.props.className || ''
                    },
                    _react2.default.createElement('img', { style: styles.staticFallback, src: this.props.staticFallback })
                );
            }
            return _react2.default.createElement(
                'div',
                {
                    style: _extends({}, styles.root, {
                        transform: 'perspective(' + this.state.rootElemWidth * 3 + 'px)'
                    }, this.props.style ? this.props.style : {}),
                    onMouseMove: this.handleMove,
                    onMouseEnter: this.handleEnter,
                    onMouseLeave: this.handleLeave,
                    onTouchMove: this.handleTouchMove,
                    onTouchStart: this.handleEnter,
                    onTouchEnd: this.handleLeave,
                    className: this.props.className || '',
                    ref: 'root'
                },
                _react2.default.createElement(
                    'div',
                    { style: _extends({}, styles.container, this.state.container) },
                    this.renderShadow(),
                    this.renderLayers(),
                    this.renderShine()
                )
            );
        }
    }]);

    return ParallexImage;
}(_react2.default.Component);

ParallexImage.propTypes = {
    layers: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
    isStatic: _propTypes2.default.bool,
    staticFallback: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object
};
exports.default = ParallexImage;