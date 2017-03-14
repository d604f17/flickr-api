'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Flickr = function () {
    function Flickr(options) {
        _classCallCheck(this, Flickr);

        this.api_key = options.api_key;
        this.format = options.format;
        this.url = 'https://api.flickr.com/services/rest' || options.url;
    }

    _createClass(Flickr, [{
        key: 'query',
        value: function query(method, parameters) {
            var query = _qs2.default.stringify(Object.assign({
                api_key: this.api_key,
                method: 'flickr.' + method,
                format: this.format
            }, parameters));

            return (0, _requestPromise2.default)(this.url + '?' + query);
        }
    }]);

    return Flickr;
}();

exports.default = Flickr;
//# sourceMappingURL=main.js.map