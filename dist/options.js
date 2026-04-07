(function () {
  'use strict';

  function _extends$2() {
    _extends$2 =
      Object.assign ||
      function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

    return _extends$2.apply(this, arguments);
  }

  function getAugmentedNamespace(n) {
    if (n.__esModule) return n;
    var a = Object.defineProperty({}, '__esModule', { value: true });
    Object.keys(n).forEach(function (k) {
      var d = Object.getOwnPropertyDescriptor(n, k);
      Object.defineProperty(
        a,
        k,
        d.get
          ? d
          : {
              enumerable: true,
              get: function () {
                return n[k];
              },
            },
      );
    });
    return a;
  }

  var react = { exports: {} };

  var react_production_min = {};

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols$1 = Object.getOwnPropertySymbols;
  var hasOwnProperty$4 = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError(
        'Object.assign cannot be called with null or undefined',
      );
    }

    return Object(val);
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }

      // Detect buggy property enumeration order in older V8 versions.

      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
      test1[5] = 'de';
      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });
      if (order2.join('') !== '0123456789') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });
      if (
        Object.keys(Object.assign({}, test3)).join('') !==
        'abcdefghijklmnopqrst'
      ) {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  var objectAssign = shouldUseNative()
    ? Object.assign
    : function (target, source) {
        var from;
        var to = toObject(target);
        var symbols;

        for (var s = 1; s < arguments.length; s++) {
          from = Object(arguments[s]);

          for (var key in from) {
            if (hasOwnProperty$4.call(from, key)) {
              to[key] = from[key];
            }
          }

          if (getOwnPropertySymbols$1) {
            symbols = getOwnPropertySymbols$1(from);
            for (var i = 0; i < symbols.length; i++) {
              if (propIsEnumerable.call(from, symbols[i])) {
                to[symbols[i]] = from[symbols[i]];
              }
            }
          }
        }

        return to;
      };

  /** @license React v17.0.2
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var l$2 = objectAssign,
    n$2 = 60103,
    p$2 = 60106;
  react_production_min.Fragment = 60107;
  react_production_min.StrictMode = 60108;
  react_production_min.Profiler = 60114;
  var q$2 = 60109,
    r$3 = 60110,
    t$2 = 60112;
  react_production_min.Suspense = 60113;
  var u$1 = 60115,
    v$2 = 60116;
  if ('function' === typeof Symbol && Symbol.for) {
    var w$2 = Symbol.for;
    n$2 = w$2('react.element');
    p$2 = w$2('react.portal');
    react_production_min.Fragment = w$2('react.fragment');
    react_production_min.StrictMode = w$2('react.strict_mode');
    react_production_min.Profiler = w$2('react.profiler');
    q$2 = w$2('react.provider');
    r$3 = w$2('react.context');
    t$2 = w$2('react.forward_ref');
    react_production_min.Suspense = w$2('react.suspense');
    u$1 = w$2('react.memo');
    v$2 = w$2('react.lazy');
  }
  var x$2 = 'function' === typeof Symbol && Symbol.iterator;
  function y$3(a) {
    if (null === a || 'object' !== typeof a) return null;
    a = (x$2 && a[x$2]) || a['@@iterator'];
    return 'function' === typeof a ? a : null;
  }
  function z$2(a) {
    for (
      var b = 'https://reactjs.org/docs/error-decoder.html?invariant=' + a,
        c = 1;
      c < arguments.length;
      c++
    )
      b += '&args[]=' + encodeURIComponent(arguments[c]);
    return (
      'Minified React error #' +
      a +
      '; visit ' +
      b +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  var A$2 = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    B$2 = {};
  function C(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = B$2;
    this.updater = c || A$2;
  }
  C.prototype.isReactComponent = {};
  C.prototype.setState = function (a, b) {
    if ('object' !== typeof a && 'function' !== typeof a && null != a)
      throw Error(z$2(85));
    this.updater.enqueueSetState(this, a, b, 'setState');
  };
  C.prototype.forceUpdate = function (a) {
    this.updater.enqueueForceUpdate(this, a, 'forceUpdate');
  };
  function D$2() {}
  D$2.prototype = C.prototype;
  function E$2(a, b, c) {
    this.props = a;
    this.context = b;
    this.refs = B$2;
    this.updater = c || A$2;
  }
  var F$2 = (E$2.prototype = new D$2());
  F$2.constructor = E$2;
  l$2(F$2, C.prototype);
  F$2.isPureReactComponent = !0;
  var G$2 = { current: null },
    H$2 = Object.prototype.hasOwnProperty,
    I$2 = { key: !0, ref: !0, __self: !0, __source: !0 };
  function J(a, b, c) {
    var e,
      d = {},
      k = null,
      h = null;
    if (null != b)
      for (e in (void 0 !== b.ref && (h = b.ref),
      void 0 !== b.key && (k = '' + b.key),
      b))
        H$2.call(b, e) && !I$2.hasOwnProperty(e) && (d[e] = b[e]);
    var g = arguments.length - 2;
    if (1 === g) d.children = c;
    else if (1 < g) {
      for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
      d.children = f;
    }
    if (a && a.defaultProps)
      for (e in ((g = a.defaultProps), g)) void 0 === d[e] && (d[e] = g[e]);
    return {
      $$typeof: n$2,
      type: a,
      key: k,
      ref: h,
      props: d,
      _owner: G$2.current,
    };
  }
  function K$1(a, b) {
    return {
      $$typeof: n$2,
      type: a.type,
      key: b,
      ref: a.ref,
      props: a.props,
      _owner: a._owner,
    };
  }
  function L$1(a) {
    return 'object' === typeof a && null !== a && a.$$typeof === n$2;
  }
  function escape$1(a) {
    var b = { '=': '=0', ':': '=2' };
    return (
      '$' +
      a.replace(/[=:]/g, function (a) {
        return b[a];
      })
    );
  }
  var M$2 = /\/+/g;
  function N$1(a, b) {
    return 'object' === typeof a && null !== a && null != a.key
      ? escape$1('' + a.key)
      : b.toString(36);
  }
  function O$2(a, b, c, e, d) {
    var k = typeof a;
    if ('undefined' === k || 'boolean' === k) a = null;
    var h = !1;
    if (null === a) h = !0;
    else
      switch (k) {
        case 'string':
        case 'number':
          h = !0;
          break;
        case 'object':
          switch (a.$$typeof) {
            case n$2:
            case p$2:
              h = !0;
          }
      }
    if (h)
      return (
        (h = a),
        (d = d(h)),
        (a = '' === e ? '.' + N$1(h, 0) : e),
        Array.isArray(d)
          ? ((c = ''),
            null != a && (c = a.replace(M$2, '$&/') + '/'),
            O$2(d, b, c, '', function (a) {
              return a;
            }))
          : null != d &&
            (L$1(d) &&
              (d = K$1(
                d,
                c +
                  (!d.key || (h && h.key === d.key)
                    ? ''
                    : ('' + d.key).replace(M$2, '$&/') + '/') +
                  a,
              )),
            b.push(d)),
        1
      );
    h = 0;
    e = '' === e ? '.' : e + ':';
    if (Array.isArray(a))
      for (var g = 0; g < a.length; g++) {
        k = a[g];
        var f = e + N$1(k, g);
        h += O$2(k, b, c, f, d);
      }
    else if (((f = y$3(a)), 'function' === typeof f))
      for (a = f.call(a), g = 0; !(k = a.next()).done; )
        (k = k.value), (f = e + N$1(k, g++)), (h += O$2(k, b, c, f, d));
    else if ('object' === k)
      throw (
        ((b = '' + a),
        Error(
          z$2(
            31,
            '[object Object]' === b
              ? 'object with keys {' + Object.keys(a).join(', ') + '}'
              : b,
          ),
        ))
      );
    return h;
  }
  function P$2(a, b, c) {
    if (null == a) return a;
    var e = [],
      d = 0;
    O$2(a, e, '', '', function (a) {
      return b.call(c, a, d++);
    });
    return e;
  }
  function Q$1(a) {
    if (-1 === a._status) {
      var b = a._result;
      b = b();
      a._status = 0;
      a._result = b;
      b.then(
        function (b) {
          0 === a._status &&
            ((b = b.default), (a._status = 1), (a._result = b));
        },
        function (b) {
          0 === a._status && ((a._status = 2), (a._result = b));
        },
      );
    }
    if (1 === a._status) return a._result;
    throw a._result;
  }
  var R$2 = { current: null };
  function S$2() {
    var a = R$2.current;
    if (null === a) throw Error(z$2(321));
    return a;
  }
  var T$1 = {
    ReactCurrentDispatcher: R$2,
    ReactCurrentBatchConfig: { transition: 0 },
    ReactCurrentOwner: G$2,
    IsSomeRendererActing: { current: !1 },
    assign: l$2,
  };
  react_production_min.Children = {
    map: P$2,
    forEach: function (a, b, c) {
      P$2(
        a,
        function () {
          b.apply(this, arguments);
        },
        c,
      );
    },
    count: function (a) {
      var b = 0;
      P$2(a, function () {
        b++;
      });
      return b;
    },
    toArray: function (a) {
      return (
        P$2(a, function (a) {
          return a;
        }) || []
      );
    },
    only: function (a) {
      if (!L$1(a)) throw Error(z$2(143));
      return a;
    },
  };
  react_production_min.Component = C;
  react_production_min.PureComponent = E$2;
  react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T$1;
  react_production_min.cloneElement = function (a, b, c) {
    if (null === a || void 0 === a) throw Error(z$2(267, a));
    var e = l$2({}, a.props),
      d = a.key,
      k = a.ref,
      h = a._owner;
    if (null != b) {
      void 0 !== b.ref && ((k = b.ref), (h = G$2.current));
      void 0 !== b.key && (d = '' + b.key);
      if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
      for (f in b)
        H$2.call(b, f) &&
          !I$2.hasOwnProperty(f) &&
          (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
    }
    var f = arguments.length - 2;
    if (1 === f) e.children = c;
    else if (1 < f) {
      g = Array(f);
      for (var m = 0; m < f; m++) g[m] = arguments[m + 2];
      e.children = g;
    }
    return { $$typeof: n$2, type: a.type, key: d, ref: k, props: e, _owner: h };
  };
  react_production_min.createContext = function (a, b) {
    void 0 === b && (b = null);
    a = {
      $$typeof: r$3,
      _calculateChangedBits: b,
      _currentValue: a,
      _currentValue2: a,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    };
    a.Provider = { $$typeof: q$2, _context: a };
    return (a.Consumer = a);
  };
  react_production_min.createElement = J;
  react_production_min.createFactory = function (a) {
    var b = J.bind(null, a);
    b.type = a;
    return b;
  };
  react_production_min.createRef = function () {
    return { current: null };
  };
  react_production_min.forwardRef = function (a) {
    return { $$typeof: t$2, render: a };
  };
  react_production_min.isValidElement = L$1;
  react_production_min.lazy = function (a) {
    return { $$typeof: v$2, _payload: { _status: -1, _result: a }, _init: Q$1 };
  };
  react_production_min.memo = function (a, b) {
    return { $$typeof: u$1, type: a, compare: void 0 === b ? null : b };
  };
  react_production_min.useCallback = function (a, b) {
    return S$2().useCallback(a, b);
  };
  react_production_min.useContext = function (a, b) {
    return S$2().useContext(a, b);
  };
  react_production_min.useDebugValue = function () {};
  react_production_min.useEffect = function (a, b) {
    return S$2().useEffect(a, b);
  };
  react_production_min.useImperativeHandle = function (a, b, c) {
    return S$2().useImperativeHandle(a, b, c);
  };
  react_production_min.useLayoutEffect = function (a, b) {
    return S$2().useLayoutEffect(a, b);
  };
  react_production_min.useMemo = function (a, b) {
    return S$2().useMemo(a, b);
  };
  react_production_min.useReducer = function (a, b, c) {
    return S$2().useReducer(a, b, c);
  };
  react_production_min.useRef = function (a) {
    return S$2().useRef(a);
  };
  react_production_min.useState = function (a) {
    return S$2().useState(a);
  };
  react_production_min.version = '17.0.2';

  {
    react.exports = react_production_min;
  }

  var React$3 = react.exports;

  var propTypes = { exports: {} };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = ReactPropTypesSecret_1;

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function () {
    function shim(
      props,
      propName,
      componentName,
      location,
      propFullName,
      secret,
    ) {
      if (secret === ReactPropTypesSecret) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
          'Use PropTypes.checkPropTypes() to call them. ' +
          'Read more at http://fb.me/use-check-prop-types',
      );
      err.name = 'Invariant Violation';
      throw err;
    }
    shim.isRequired = shim;
    function getShim() {
      return shim;
    } // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction,
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    propTypes.exports = factoryWithThrowingShims();
  }

  var utils$1 = {};

  var interopRequireDefault = { exports: {} };

  (function (module) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule
        ? obj
        : {
            default: obj,
          };
    }

    (module.exports = _interopRequireDefault),
      (module.exports.__esModule = true),
      (module.exports['default'] = module.exports);
  })(interopRequireDefault);

  var chainPropTypes$1 = {};

  Object.defineProperty(chainPropTypes$1, '__esModule', {
    value: true,
  });
  chainPropTypes$1.default = chainPropTypes;

  function chainPropTypes(propType1, propType2) {
    {
      return function () {
        return null;
      };
    }
  }

  var deepmerge$1 = {};

  var _extends$1 = { exports: {} };

  (function (module) {
    function _extends() {
      (module.exports = _extends =
        Object.assign ||
        function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        }),
        (module.exports.__esModule = true),
        (module.exports['default'] = module.exports);
      return _extends.apply(this, arguments);
    }

    (module.exports = _extends),
      (module.exports.__esModule = true),
      (module.exports['default'] = module.exports);
  })(_extends$1);

  var _typeof$2 = { exports: {} };

  (function (module) {
    function _typeof(obj) {
      '@babel/helpers - typeof';

      return (
        ((module.exports = _typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (obj) {
                return typeof obj;
              }
            : function (obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              }),
        (module.exports.__esModule = true),
        (module.exports['default'] = module.exports)),
        _typeof(obj)
      );
    }

    (module.exports = _typeof),
      (module.exports.__esModule = true),
      (module.exports['default'] = module.exports);
  })(_typeof$2);

  var _interopRequireDefault$8 = interopRequireDefault.exports;

  Object.defineProperty(deepmerge$1, '__esModule', {
    value: true,
  });
  deepmerge$1.isPlainObject = isPlainObject;
  deepmerge$1.default = deepmerge;

  var _extends2 = _interopRequireDefault$8(_extends$1.exports);

  var _typeof2$1 = _interopRequireDefault$8(_typeof$2.exports);

  function isPlainObject(item) {
    return (
      item &&
      (0, _typeof2$1.default)(item) === 'object' &&
      item.constructor === Object
    );
  }

  function deepmerge(target, source) {
    var options =
      arguments.length > 2 && arguments[2] !== undefined
        ? arguments[2]
        : {
            clone: true,
          };
    var output = options.clone ? (0, _extends2.default)({}, target) : target;

    if (isPlainObject(target) && isPlainObject(source)) {
      Object.keys(source).forEach(function (key) {
        // Avoid prototype pollution
        if (key === '__proto__') {
          return;
        }

        if (isPlainObject(source[key]) && key in target) {
          output[key] = deepmerge(target[key], source[key], options);
        } else {
          output[key] = source[key];
        }
      });
    }

    return output;
  }

  var elementAcceptingRef$1 = {};

  var _interopRequireDefault$7 = interopRequireDefault.exports;

  Object.defineProperty(elementAcceptingRef$1, '__esModule', {
    value: true,
  });
  elementAcceptingRef$1.default = void 0;

  var _propTypes$1 = _interopRequireDefault$7(propTypes.exports);

  var _chainPropTypes$1 = _interopRequireDefault$7(chainPropTypes$1);

  function isClassComponent$1(elementType) {
    // elementType.prototype?.isReactComponent
    var _elementType$prototyp = elementType.prototype,
      prototype = _elementType$prototyp === void 0 ? {} : _elementType$prototyp;
    return Boolean(prototype.isReactComponent);
  }

  function acceptingRef(
    props,
    propName,
    componentName,
    location,
    propFullName,
  ) {
    var element = props[propName];
    var safePropName = propFullName || propName;

    if (element == null) {
      return null;
    }

    var warningHint;
    var elementType = element.type;
    /**
     * Blacklisting instead of whitelisting
     *
     * Blacklisting will miss some components, such as React.Fragment. Those will at least
     * trigger a warning in React.
     * We can't whitelist because there is no safe way to detect React.forwardRef
     * or class components. "Safe" means there's no public API.
     *
     */

    if (typeof elementType === 'function' && !isClassComponent$1(elementType)) {
      warningHint =
        'Did you accidentally use a plain function component for an element instead?';
    }

    if (warningHint !== undefined) {
      return new Error(
        'Invalid '
          .concat(location, ' `')
          .concat(safePropName, '` supplied to `')
          .concat(componentName, '`. ') +
          'Expected an element that can hold a ref. '.concat(warningHint, ' ') +
          'For more information see https://material-ui.com/r/caveat-with-refs-guide',
      );
    }

    return null;
  }

  var elementAcceptingRef = (0, _chainPropTypes$1.default)(
    _propTypes$1.default.element,
    acceptingRef,
  );
  elementAcceptingRef.isRequired = (0, _chainPropTypes$1.default)(
    _propTypes$1.default.element.isRequired,
    acceptingRef,
  );
  var _default$6 = elementAcceptingRef;
  elementAcceptingRef$1.default = _default$6;

  var elementTypeAcceptingRef$1 = {};

  var interopRequireWildcard = { exports: {} };

  (function (module) {
    var _typeof = _typeof$2.exports['default'];

    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== 'function') return null;
      var cacheBabelInterop = new WeakMap();
      var cacheNodeInterop = new WeakMap();
      return (_getRequireWildcardCache = function _getRequireWildcardCache(
        nodeInterop,
      ) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }

    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }

      if (
        obj === null ||
        (_typeof(obj) !== 'object' && typeof obj !== 'function')
      ) {
        return {
          default: obj,
        };
      }

      var cache = _getRequireWildcardCache(nodeInterop);

      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }

      var newObj = {};
      var hasPropertyDescriptor =
        Object.defineProperty && Object.getOwnPropertyDescriptor;

      for (var key in obj) {
        if (
          key !== 'default' &&
          Object.prototype.hasOwnProperty.call(obj, key)
        ) {
          var desc = hasPropertyDescriptor
            ? Object.getOwnPropertyDescriptor(obj, key)
            : null;

          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }

      newObj['default'] = obj;

      if (cache) {
        cache.set(obj, newObj);
      }

      return newObj;
    }

    (module.exports = _interopRequireWildcard),
      (module.exports.__esModule = true),
      (module.exports['default'] = module.exports);
  })(interopRequireWildcard);

  var _interopRequireDefault$6 = interopRequireDefault.exports;

  var _interopRequireWildcard$3 = interopRequireWildcard.exports;

  Object.defineProperty(elementTypeAcceptingRef$1, '__esModule', {
    value: true,
  });
  elementTypeAcceptingRef$1.default = void 0;

  var PropTypes = _interopRequireWildcard$3(propTypes.exports);

  var _chainPropTypes = _interopRequireDefault$6(chainPropTypes$1);

  function isClassComponent(elementType) {
    // elementType.prototype?.isReactComponent
    var _elementType$prototyp = elementType.prototype,
      prototype = _elementType$prototyp === void 0 ? {} : _elementType$prototyp;
    return Boolean(prototype.isReactComponent);
  }

  function elementTypeAcceptingRef(
    props,
    propName,
    componentName,
    location,
    propFullName,
  ) {
    var propValue = props[propName];
    var safePropName = propFullName || propName;

    if (propValue == null) {
      return null;
    }

    var warningHint;
    /**
     * Blacklisting instead of whitelisting
     *
     * Blacklisting will miss some components, such as React.Fragment. Those will at least
     * trigger a warning in React.
     * We can't whitelist because there is no safe way to detect React.forwardRef
     * or class components. "Safe" means there's no public API.
     *
     */

    if (typeof propValue === 'function' && !isClassComponent(propValue)) {
      warningHint =
        'Did you accidentally provide a plain function component instead?';
    }

    if (warningHint !== undefined) {
      return new Error(
        'Invalid '
          .concat(location, ' `')
          .concat(safePropName, '` supplied to `')
          .concat(componentName, '`. ') +
          'Expected an element type that can hold a ref. '.concat(
            warningHint,
            ' ',
          ) +
          'For more information see https://material-ui.com/r/caveat-with-refs-guide',
      );
    }

    return null;
  }

  var _default$5 = (0, _chainPropTypes.default)(
    PropTypes.elementType,
    elementTypeAcceptingRef,
  );

  elementTypeAcceptingRef$1.default = _default$5;

  var exactProp$1 = {};

  var defineProperty$3 = { exports: {} };

  (function (module) {
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true,
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    (module.exports = _defineProperty),
      (module.exports.__esModule = true),
      (module.exports['default'] = module.exports);
  })(defineProperty$3);

  var _interopRequireDefault$5 = interopRequireDefault.exports;

  Object.defineProperty(exactProp$1, '__esModule', {
    value: true,
  });
  exactProp$1.default = exactProp;
  exactProp$1.specialProperty = void 0;

  _interopRequireDefault$5(defineProperty$3.exports);

  _interopRequireDefault$5(_extends$1.exports);

  // This module is based on https://github.com/airbnb/prop-types-exact repository.
  // However, in order to reduce the number of dependencies and to remove some extra safe checks
  // the module was forked.
  // Only exported for test purposes.
  var specialProperty = 'exact-prop: \u200B';
  exactProp$1.specialProperty = specialProperty;

  function exactProp(propTypes) {
    {
      return propTypes;
    }
  }

  var formatMuiErrorMessage$1 = {};

  Object.defineProperty(formatMuiErrorMessage$1, '__esModule', {
    value: true,
  });
  formatMuiErrorMessage$1.default = formatMuiErrorMessage;

  /**
   * WARNING: Don't import this directly.
   * Use `MuiError` from `@material-ui/utils/macros/MuiError.macro` instead.
   * @param {number} code
   */
  function formatMuiErrorMessage(code) {
    // Apply babel-plugin-transform-template-literals in loose mode
    // loose mode is safe iff we're concatenating primitives
    // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose

    /* eslint-disable prefer-template */
    var url = 'https://material-ui.com/production-error/?code=' + code;

    for (var i = 1; i < arguments.length; i += 1) {
      // rest params over-transpile for this case
      // eslint-disable-next-line prefer-rest-params
      url += '&args[]=' + encodeURIComponent(arguments[i]);
    }

    return (
      'Minified Material-UI error #' +
      code +
      '; visit ' +
      url +
      ' for the full message.'
    );
    /* eslint-enable prefer-template */
  }

  var getDisplayName$1 = {};

  var reactIs$1 = { exports: {} };

  var reactIs_production_min = {};

  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var b$1 = 'function' === typeof Symbol && Symbol.for,
    c$1 = b$1 ? Symbol.for('react.element') : 60103,
    d$1 = b$1 ? Symbol.for('react.portal') : 60106,
    e = b$1 ? Symbol.for('react.fragment') : 60107,
    f$1 = b$1 ? Symbol.for('react.strict_mode') : 60108,
    g$1 = b$1 ? Symbol.for('react.profiler') : 60114,
    h$1 = b$1 ? Symbol.for('react.provider') : 60109,
    k$1 = b$1 ? Symbol.for('react.context') : 60110,
    l$1 = b$1 ? Symbol.for('react.async_mode') : 60111,
    m$1 = b$1 ? Symbol.for('react.concurrent_mode') : 60111,
    n$1 = b$1 ? Symbol.for('react.forward_ref') : 60112,
    p$1 = b$1 ? Symbol.for('react.suspense') : 60113,
    q$1 = b$1 ? Symbol.for('react.suspense_list') : 60120,
    r$2 = b$1 ? Symbol.for('react.memo') : 60115,
    t$1 = b$1 ? Symbol.for('react.lazy') : 60116,
    v$1 = b$1 ? Symbol.for('react.block') : 60121,
    w$1 = b$1 ? Symbol.for('react.fundamental') : 60117,
    x$1 = b$1 ? Symbol.for('react.responder') : 60118,
    y$2 = b$1 ? Symbol.for('react.scope') : 60119;
  function z$1(a) {
    if ('object' === typeof a && null !== a) {
      var u = a.$$typeof;
      switch (u) {
        case c$1:
          switch (((a = a.type), a)) {
            case l$1:
            case m$1:
            case e:
            case g$1:
            case f$1:
            case p$1:
              return a;
            default:
              switch (((a = a && a.$$typeof), a)) {
                case k$1:
                case n$1:
                case t$1:
                case r$2:
                case h$1:
                  return a;
                default:
                  return u;
              }
          }
        case d$1:
          return u;
      }
    }
  }
  function A$1(a) {
    return z$1(a) === m$1;
  }
  reactIs_production_min.AsyncMode = l$1;
  reactIs_production_min.ConcurrentMode = m$1;
  reactIs_production_min.ContextConsumer = k$1;
  reactIs_production_min.ContextProvider = h$1;
  reactIs_production_min.Element = c$1;
  reactIs_production_min.ForwardRef = n$1;
  reactIs_production_min.Fragment = e;
  reactIs_production_min.Lazy = t$1;
  reactIs_production_min.Memo = r$2;
  reactIs_production_min.Portal = d$1;
  reactIs_production_min.Profiler = g$1;
  reactIs_production_min.StrictMode = f$1;
  reactIs_production_min.Suspense = p$1;
  reactIs_production_min.isAsyncMode = function (a) {
    return A$1(a) || z$1(a) === l$1;
  };
  reactIs_production_min.isConcurrentMode = A$1;
  reactIs_production_min.isContextConsumer = function (a) {
    return z$1(a) === k$1;
  };
  reactIs_production_min.isContextProvider = function (a) {
    return z$1(a) === h$1;
  };
  reactIs_production_min.isElement = function (a) {
    return 'object' === typeof a && null !== a && a.$$typeof === c$1;
  };
  reactIs_production_min.isForwardRef = function (a) {
    return z$1(a) === n$1;
  };
  reactIs_production_min.isFragment = function (a) {
    return z$1(a) === e;
  };
  reactIs_production_min.isLazy = function (a) {
    return z$1(a) === t$1;
  };
  reactIs_production_min.isMemo = function (a) {
    return z$1(a) === r$2;
  };
  reactIs_production_min.isPortal = function (a) {
    return z$1(a) === d$1;
  };
  reactIs_production_min.isProfiler = function (a) {
    return z$1(a) === g$1;
  };
  reactIs_production_min.isStrictMode = function (a) {
    return z$1(a) === f$1;
  };
  reactIs_production_min.isSuspense = function (a) {
    return z$1(a) === p$1;
  };
  reactIs_production_min.isValidElementType = function (a) {
    return (
      'string' === typeof a ||
      'function' === typeof a ||
      a === e ||
      a === m$1 ||
      a === g$1 ||
      a === f$1 ||
      a === p$1 ||
      a === q$1 ||
      ('object' === typeof a &&
        null !== a &&
        (a.$$typeof === t$1 ||
          a.$$typeof === r$2 ||
          a.$$typeof === h$1 ||
          a.$$typeof === k$1 ||
          a.$$typeof === n$1 ||
          a.$$typeof === w$1 ||
          a.$$typeof === x$1 ||
          a.$$typeof === y$2 ||
          a.$$typeof === v$1))
    );
  };
  reactIs_production_min.typeOf = z$1;

  {
    reactIs$1.exports = reactIs_production_min;
  }

  var _interopRequireDefault$4 = interopRequireDefault.exports;

  Object.defineProperty(getDisplayName$1, '__esModule', {
    value: true,
  });
  getDisplayName$1.getFunctionName = getFunctionName;
  getDisplayName$1.default = getDisplayName;

  var _typeof2 = _interopRequireDefault$4(_typeof$2.exports);

  var _reactIs = reactIs$1.exports;

  // Simplified polyfill for IE 11 support
  // https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3
  var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;

  function getFunctionName(fn) {
    var match = ''.concat(fn).match(fnNameMatchRegex);
    var name = match && match[1];
    return name || '';
  }
  /**
   * @param {function} Component
   * @param {string} fallback
   * @returns {string | undefined}
   */

  function getFunctionComponentName(Component) {
    var fallback =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    return (
      Component.displayName ||
      Component.name ||
      getFunctionName(Component) ||
      fallback
    );
  }

  function getWrappedName(outerType, innerType, wrapperName) {
    var functionName = getFunctionComponentName(innerType);
    return (
      outerType.displayName ||
      (functionName !== ''
        ? ''.concat(wrapperName, '(').concat(functionName, ')')
        : wrapperName)
    );
  }
  /**
   * cherry-pick from
   * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
   * originally forked from recompose/getDisplayName with added IE 11 support
   *
   * @param {React.ReactType} Component
   * @returns {string | undefined}
   */

  function getDisplayName(Component) {
    if (Component == null) {
      return undefined;
    }

    if (typeof Component === 'string') {
      return Component;
    }

    if (typeof Component === 'function') {
      return getFunctionComponentName(Component, 'Component');
    }

    if ((0, _typeof2.default)(Component) === 'object') {
      switch (Component.$$typeof) {
        case _reactIs.ForwardRef:
          return getWrappedName(Component, Component.render, 'ForwardRef');

        case _reactIs.Memo:
          return getWrappedName(Component, Component.type, 'memo');

        default:
          return undefined;
      }
    }

    return undefined;
  }

  var HTMLElementType$1 = {};

  Object.defineProperty(HTMLElementType$1, '__esModule', {
    value: true,
  });
  HTMLElementType$1.default = HTMLElementType;

  function HTMLElementType(
    props,
    propName,
    componentName,
    location,
    propFullName,
  ) {
    {
      return null;
    }
  }

  var ponyfillGlobal = {};

  Object.defineProperty(ponyfillGlobal, '__esModule', {
    value: true,
  });
  ponyfillGlobal.default = void 0;

  /* eslint-disable */
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var _default$4 =
    typeof window != 'undefined' && window.Math == Math
      ? window
      : typeof self != 'undefined' && self.Math == Math
      ? self
      : Function('return this')();

  ponyfillGlobal.default = _default$4;

  var refType$1 = {};

  var _interopRequireDefault$3 = interopRequireDefault.exports;

  Object.defineProperty(refType$1, '__esModule', {
    value: true,
  });
  refType$1.default = void 0;

  var _propTypes = _interopRequireDefault$3(propTypes.exports);

  var refType = _propTypes.default.oneOfType([
    _propTypes.default.func,
    _propTypes.default.object,
  ]);

  var _default$3 = refType;
  refType$1.default = _default$3;

  /** @license Material-UI v4.11.2
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  (function (exports) {
    var _interopRequireDefault = interopRequireDefault.exports;

    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    Object.defineProperty(exports, 'chainPropTypes', {
      enumerable: true,
      get: function get() {
        return _chainPropTypes.default;
      },
    });
    Object.defineProperty(exports, 'deepmerge', {
      enumerable: true,
      get: function get() {
        return _deepmerge.default;
      },
    });
    Object.defineProperty(exports, 'elementAcceptingRef', {
      enumerable: true,
      get: function get() {
        return _elementAcceptingRef.default;
      },
    });
    Object.defineProperty(exports, 'elementTypeAcceptingRef', {
      enumerable: true,
      get: function get() {
        return _elementTypeAcceptingRef.default;
      },
    });
    Object.defineProperty(exports, 'exactProp', {
      enumerable: true,
      get: function get() {
        return _exactProp.default;
      },
    });
    Object.defineProperty(exports, 'formatMuiErrorMessage', {
      enumerable: true,
      get: function get() {
        return _formatMuiErrorMessage.default;
      },
    });
    Object.defineProperty(exports, 'getDisplayName', {
      enumerable: true,
      get: function get() {
        return _getDisplayName.default;
      },
    });
    Object.defineProperty(exports, 'HTMLElementType', {
      enumerable: true,
      get: function get() {
        return _HTMLElementType.default;
      },
    });
    Object.defineProperty(exports, 'ponyfillGlobal', {
      enumerable: true,
      get: function get() {
        return _ponyfillGlobal.default;
      },
    });
    Object.defineProperty(exports, 'refType', {
      enumerable: true,
      get: function get() {
        return _refType.default;
      },
    });

    var _chainPropTypes = _interopRequireDefault(chainPropTypes$1);

    var _deepmerge = _interopRequireDefault(deepmerge$1);

    var _elementAcceptingRef = _interopRequireDefault(elementAcceptingRef$1);

    var _elementTypeAcceptingRef = _interopRequireDefault(
      elementTypeAcceptingRef$1,
    );

    var _exactProp = _interopRequireDefault(exactProp$1);

    var _formatMuiErrorMessage = _interopRequireDefault(
      formatMuiErrorMessage$1,
    );

    var _getDisplayName = _interopRequireDefault(getDisplayName$1);

    var _HTMLElementType = _interopRequireDefault(HTMLElementType$1);

    var _ponyfillGlobal = _interopRequireDefault(ponyfillGlobal);

    var _refType = _interopRequireDefault(refType$1);
  })(utils$1);

  var hasSymbol = typeof Symbol === 'function' && Symbol.for;
  var nested = hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__';

  /**
   * This is the list of the style rule name we use as drop in replacement for the built-in
   * pseudo classes (:checked, :disabled, :focused, etc.).
   *
   * Why do they exist in the first place?
   * These classes are used at a specificity of 2.
   * It allows them to override previously definied styles as well as
   * being untouched by simple user overrides.
   */

  var pseudoClasses = [
    'checked',
    'disabled',
    'error',
    'focused',
    'focusVisible',
    'required',
    'expanded',
    'selected',
  ]; // Returns a function which generates unique class names based on counters.
  // When new generator function is created, rule counter is reset.
  // We need to reset the rule counter for SSR for each request.
  //
  // It's inspired by
  // https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js

  function createGenerateClassName() {
    var options =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _options$disableGloba = options.disableGlobal,
      disableGlobal =
        _options$disableGloba === void 0 ? false : _options$disableGloba,
      _options$productionPr = options.productionPrefix,
      productionPrefix =
        _options$productionPr === void 0 ? 'jss' : _options$productionPr,
      _options$seed = options.seed,
      seed = _options$seed === void 0 ? '' : _options$seed;
    var seedPrefix = seed === '' ? '' : ''.concat(seed, '-');
    var ruleCounter = 0;

    var getNextCounterId = function getNextCounterId() {
      ruleCounter += 1;

      return ruleCounter;
    };

    return function (rule, styleSheet) {
      var name = styleSheet.options.name; // Is a global static MUI style?

      if (
        name &&
        name.indexOf('Mui') === 0 &&
        !styleSheet.options.link &&
        !disableGlobal
      ) {
        // We can use a shorthand class name, we never use the keys to style the components.
        if (pseudoClasses.indexOf(rule.key) !== -1) {
          return 'Mui-'.concat(rule.key);
        }

        var prefix = ''.concat(seedPrefix).concat(name, '-').concat(rule.key);

        if (!styleSheet.options.theme[nested] || seed !== '') {
          return prefix;
        }

        return ''.concat(prefix, '-').concat(getNextCounterId());
      }

      {
        return ''
          .concat(seedPrefix)
          .concat(productionPrefix)
          .concat(getNextCounterId());
      }
    };
  }

  /* eslint-disable no-restricted-syntax */
  function getThemeProps(params) {
    var theme = params.theme,
      name = params.name,
      props = params.props;

    if (!theme || !theme.props || !theme.props[name]) {
      return props;
    } // Resolve default props, code borrow from React source.
    // https://github.com/facebook/react/blob/15a8f031838a553e41c0b66eb1bcf1da8448104d/packages/react/src/ReactElement.js#L221

    var defaultProps = theme.props[name];
    var propName;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }

    return props;
  }

  var _typeof$1 =
    typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
      ? function (obj) {
          return typeof obj;
        }
      : function (obj) {
          return obj &&
            typeof Symbol === 'function' &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
            ? 'symbol'
            : typeof obj;
        };

  var isBrowser$1 =
    (typeof window === 'undefined' ? 'undefined' : _typeof$1(window)) ===
      'object' &&
    (typeof document === 'undefined' ? 'undefined' : _typeof$1(document)) ===
      'object' &&
    document.nodeType === 9;

  var module = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    isBrowser: isBrowser$1,
    default: isBrowser$1,
  });

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, 'prototype', {
      writable: false,
    });
    return Constructor;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf =
      Object.setPrototypeOf ||
      function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

    return _setPrototypeOf(o, p);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    }

    return self;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  var plainObjectConstrurctor = {}.constructor;
  function cloneStyle(style) {
    if (style == null || typeof style !== 'object') return style;
    if (Array.isArray(style)) return style.map(cloneStyle);
    if (style.constructor !== plainObjectConstrurctor) return style;
    var newStyle = {};

    for (var name in style) {
      newStyle[name] = cloneStyle(style[name]);
    }

    return newStyle;
  }

  /**
   * Create a rule instance.
   */

  function createRule(name, decl, options) {
    if (name === void 0) {
      name = 'unnamed';
    }

    var jss = options.jss;
    var declCopy = cloneStyle(decl);
    var rule = jss.plugins.onCreateRule(name, declCopy, options);
    if (rule) return rule; // It is an at-rule and it has no instance.

    if (name[0] === '@');

    return null;
  }

  var join = function join(value, by) {
    var result = '';

    for (var i = 0; i < value.length; i++) {
      // Remove !important from the value, it will be readded later.
      if (value[i] === '!important') break;
      if (result) result += by;
      result += value[i];
    }

    return result;
  };
  /**
   * Converts JSS array value to a CSS string.
   *
   * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
   * `border: ['1px', '2px']` > `border: 1px, 2px;`
   * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
   * `color: ['red', !important]` > `color: red !important;`
   */

  var toCssValue = function toCssValue(value, ignoreImportant) {
    if (ignoreImportant === void 0) {
      ignoreImportant = false;
    }

    if (!Array.isArray(value)) return value;
    var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

    if (Array.isArray(value[0])) {
      for (var i = 0; i < value.length; i++) {
        if (value[i] === '!important') break;
        if (cssValue) cssValue += ', ';
        cssValue += join(value[i], ' ');
      }
    } else cssValue = join(value, ', '); // Add !important, because it was ignored.

    if (!ignoreImportant && value[value.length - 1] === '!important') {
      cssValue += ' !important';
    }

    return cssValue;
  };

  function getWhitespaceSymbols(options) {
    if (options && options.format === false) {
      return {
        linebreak: '',
        space: '',
      };
    }

    return {
      linebreak: '\n',
      space: ' ',
    };
  }

  /**
   * Indent a string.
   * http://jsperf.com/array-join-vs-for
   */

  function indentStr(str, indent) {
    var result = '';

    for (var index = 0; index < indent; index++) {
      result += '  ';
    }

    return result + str;
  }
  /**
   * Converts a Rule to CSS string.
   */

  function toCss(selector, style, options) {
    if (options === void 0) {
      options = {};
    }

    var result = '';
    if (!style) return result;
    var _options = options,
      _options$indent = _options.indent,
      indent = _options$indent === void 0 ? 0 : _options$indent;
    var fallbacks = style.fallbacks;

    if (options.format === false) {
      indent = -Infinity;
    }

    var _getWhitespaceSymbols = getWhitespaceSymbols(options),
      linebreak = _getWhitespaceSymbols.linebreak,
      space = _getWhitespaceSymbols.space;

    if (selector) indent++; // Apply fallbacks first.

    if (fallbacks) {
      // Array syntax {fallbacks: [{prop: value}]}
      if (Array.isArray(fallbacks)) {
        for (var index = 0; index < fallbacks.length; index++) {
          var fallback = fallbacks[index];

          for (var prop in fallback) {
            var value = fallback[prop];

            if (value != null) {
              if (result) result += linebreak;
              result += indentStr(
                prop + ':' + space + toCssValue(value) + ';',
                indent,
              );
            }
          }
        }
      } else {
        // Object syntax {fallbacks: {prop: value}}
        for (var _prop in fallbacks) {
          var _value = fallbacks[_prop];

          if (_value != null) {
            if (result) result += linebreak;
            result += indentStr(
              _prop + ':' + space + toCssValue(_value) + ';',
              indent,
            );
          }
        }
      }
    }

    for (var _prop2 in style) {
      var _value2 = style[_prop2];

      if (_value2 != null && _prop2 !== 'fallbacks') {
        if (result) result += linebreak;
        result += indentStr(
          _prop2 + ':' + space + toCssValue(_value2) + ';',
          indent,
        );
      }
    } // Allow empty style in this case, because properties will be added dynamically.

    if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

    if (!selector) return result;
    indent--;
    if (result) result = '' + linebreak + result + linebreak;
    return (
      indentStr('' + selector + space + '{' + result, indent) +
      indentStr('}', indent)
    );
  }

  var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
  var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;
  var escape = function (str) {
    return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
  };

  var BaseStyleRule =
    /*#__PURE__*/
    (function () {
      function BaseStyleRule(key, style, options) {
        this.type = 'style';
        this.isProcessed = false;
        var sheet = options.sheet,
          Renderer = options.Renderer;
        this.key = key;
        this.options = options;
        this.style = style;
        if (sheet) this.renderer = sheet.renderer;
        else if (Renderer) this.renderer = new Renderer();
      }
      /**
       * Get or set a style property.
       */

      var _proto = BaseStyleRule.prototype;

      _proto.prop = function prop(name, value, options) {
        // It's a getter.
        if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

        var force = options ? options.force : false;
        if (!force && this.style[name] === value) return this;
        var newValue = value;

        if (!options || options.process !== false) {
          newValue = this.options.jss.plugins.onChangeValue(value, name, this);
        }

        var isEmpty = newValue == null || newValue === false;
        var isDefined = name in this.style; // Value is empty and wasn't defined before.

        if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

        var remove = isEmpty && isDefined;
        if (remove) delete this.style[name];
        else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

        if (this.renderable && this.renderer) {
          if (remove) this.renderer.removeProperty(this.renderable, name);
          else this.renderer.setProperty(this.renderable, name, newValue);
          return this;
        }

        var sheet = this.options.sheet;

        if (sheet && sheet.attached);

        return this;
      };

      return BaseStyleRule;
    })();
  var StyleRule =
    /*#__PURE__*/
    (function (_BaseStyleRule) {
      _inheritsLoose(StyleRule, _BaseStyleRule);

      function StyleRule(key, style, options) {
        var _this;

        _this = _BaseStyleRule.call(this, key, style, options) || this;
        var selector = options.selector,
          scoped = options.scoped,
          sheet = options.sheet,
          generateId = options.generateId;

        if (selector) {
          _this.selectorText = selector;
        } else if (scoped !== false) {
          _this.id = generateId(
            _assertThisInitialized(_assertThisInitialized(_this)),
            sheet,
          );
          _this.selectorText = '.' + escape(_this.id);
        }

        return _this;
      }
      /**
       * Set selector string.
       * Attention: use this with caution. Most browsers didn't implement
       * selectorText setter, so this may result in rerendering of entire Style Sheet.
       */

      var _proto2 = StyleRule.prototype;

      /**
       * Apply rule to an element inline.
       */
      _proto2.applyTo = function applyTo(renderable) {
        var renderer = this.renderer;

        if (renderer) {
          var json = this.toJSON();

          for (var prop in json) {
            renderer.setProperty(renderable, prop, json[prop]);
          }
        }

        return this;
      };
      /**
       * Returns JSON representation of the rule.
       * Fallbacks are not supported.
       * Useful for inline styles.
       */

      _proto2.toJSON = function toJSON() {
        var json = {};

        for (var prop in this.style) {
          var value = this.style[prop];
          if (typeof value !== 'object') json[prop] = value;
          else if (Array.isArray(value)) json[prop] = toCssValue(value);
        }

        return json;
      };
      /**
       * Generates a CSS string.
       */

      _proto2.toString = function toString(options) {
        var sheet = this.options.sheet;
        var link = sheet ? sheet.options.link : false;
        var opts = link
          ? _extends$2({}, options, {
              allowEmpty: true,
            })
          : options;
        return toCss(this.selectorText, this.style, opts);
      };

      _createClass(StyleRule, [
        {
          key: 'selector',
          set: function set(selector) {
            if (selector === this.selectorText) return;
            this.selectorText = selector;
            var renderer = this.renderer,
              renderable = this.renderable;
            if (!renderable || !renderer) return;
            var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

            if (!hasChanged) {
              renderer.replaceRule(renderable, this);
            }
          },
          /**
           * Get selector string.
           */
          get: function get() {
            return this.selectorText;
          },
        },
      ]);

      return StyleRule;
    })(BaseStyleRule);
  var pluginStyleRule = {
    onCreateRule: function onCreateRule(key, style, options) {
      if (
        key[0] === '@' ||
        (options.parent && options.parent.type === 'keyframes')
      ) {
        return null;
      }

      return new StyleRule(key, style, options);
    },
  };

  var defaultToStringOptions = {
    indent: 1,
    children: true,
  };
  var atRegExp = /@([\w-]+)/;
  /**
   * Conditional rule for @media, @supports
   */

  var ConditionalRule =
    /*#__PURE__*/
    (function () {
      function ConditionalRule(key, styles, options) {
        this.type = 'conditional';
        this.isProcessed = false;
        this.key = key;
        var atMatch = key.match(atRegExp);
        this.at = atMatch ? atMatch[1] : 'unknown'; // Key might contain a unique suffix in case the `name` passed by user was duplicate.

        this.query = options.name || '@' + this.at;
        this.options = options;
        this.rules = new RuleList(
          _extends$2({}, options, {
            parent: this,
          }),
        );

        for (var name in styles) {
          this.rules.add(name, styles[name]);
        }

        this.rules.process();
      }
      /**
       * Get a rule.
       */

      var _proto = ConditionalRule.prototype;

      _proto.getRule = function getRule(name) {
        return this.rules.get(name);
      };
      /**
       * Get index of a rule.
       */

      _proto.indexOf = function indexOf(rule) {
        return this.rules.indexOf(rule);
      };
      /**
       * Create and register rule, run plugins.
       */

      _proto.addRule = function addRule(name, style, options) {
        var rule = this.rules.add(name, style, options);
        if (!rule) return null;
        this.options.jss.plugins.onProcessRule(rule);
        return rule;
      };
      /**
       * Replace rule, run plugins.
       */

      _proto.replaceRule = function replaceRule(name, style, options) {
        var newRule = this.rules.replace(name, style, options);
        if (newRule) this.options.jss.plugins.onProcessRule(newRule);
        return newRule;
      };
      /**
       * Generates a CSS string.
       */

      _proto.toString = function toString(options) {
        if (options === void 0) {
          options = defaultToStringOptions;
        }

        var _getWhitespaceSymbols = getWhitespaceSymbols(options),
          linebreak = _getWhitespaceSymbols.linebreak;

        if (options.indent == null)
          options.indent = defaultToStringOptions.indent;
        if (options.children == null)
          options.children = defaultToStringOptions.children;

        if (options.children === false) {
          return this.query + ' {}';
        }

        var children = this.rules.toString(options);
        return children
          ? this.query + ' {' + linebreak + children + linebreak + '}'
          : '';
      };

      return ConditionalRule;
    })();
  var keyRegExp = /@media|@supports\s+/;
  var pluginConditionalRule = {
    onCreateRule: function onCreateRule(key, styles, options) {
      return keyRegExp.test(key)
        ? new ConditionalRule(key, styles, options)
        : null;
    },
  };

  var defaultToStringOptions$1 = {
    indent: 1,
    children: true,
  };
  var nameRegExp = /@keyframes\s+([\w-]+)/;
  /**
   * Rule for @keyframes
   */

  var KeyframesRule =
    /*#__PURE__*/
    (function () {
      function KeyframesRule(key, frames, options) {
        this.type = 'keyframes';
        this.at = '@keyframes';
        this.isProcessed = false;
        var nameMatch = key.match(nameRegExp);

        if (nameMatch && nameMatch[1]) {
          this.name = nameMatch[1];
        } else {
          this.name = 'noname';
        }

        this.key = this.type + '-' + this.name;
        this.options = options;
        var scoped = options.scoped,
          sheet = options.sheet,
          generateId = options.generateId;
        this.id =
          scoped === false ? this.name : escape(generateId(this, sheet));
        this.rules = new RuleList(
          _extends$2({}, options, {
            parent: this,
          }),
        );

        for (var name in frames) {
          this.rules.add(
            name,
            frames[name],
            _extends$2({}, options, {
              parent: this,
            }),
          );
        }

        this.rules.process();
      }
      /**
       * Generates a CSS string.
       */

      var _proto = KeyframesRule.prototype;

      _proto.toString = function toString(options) {
        if (options === void 0) {
          options = defaultToStringOptions$1;
        }

        var _getWhitespaceSymbols = getWhitespaceSymbols(options),
          linebreak = _getWhitespaceSymbols.linebreak;

        if (options.indent == null)
          options.indent = defaultToStringOptions$1.indent;
        if (options.children == null)
          options.children = defaultToStringOptions$1.children;

        if (options.children === false) {
          return this.at + ' ' + this.id + ' {}';
        }

        var children = this.rules.toString(options);
        if (children) children = '' + linebreak + children + linebreak;
        return this.at + ' ' + this.id + ' {' + children + '}';
      };

      return KeyframesRule;
    })();
  var keyRegExp$1 = /@keyframes\s+/;
  var refRegExp$1 = /\$([\w-]+)/g;

  var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
    if (typeof val === 'string') {
      return val.replace(refRegExp$1, function (match, name) {
        if (name in keyframes) {
          return keyframes[name];
        }
        return match;
      });
    }

    return val;
  };
  /**
   * Replace the reference for a animation name.
   */

  var replaceRef = function replaceRef(style, prop, keyframes) {
    var value = style[prop];
    var refKeyframe = findReferencedKeyframe(value, keyframes);

    if (refKeyframe !== value) {
      style[prop] = refKeyframe;
    }
  };

  var pluginKeyframesRule = {
    onCreateRule: function onCreateRule(key, frames, options) {
      return typeof key === 'string' && keyRegExp$1.test(key)
        ? new KeyframesRule(key, frames, options)
        : null;
    },
    // Animation name ref replacer.
    onProcessStyle: function onProcessStyle(style, rule, sheet) {
      if (rule.type !== 'style' || !sheet) return style;
      if ('animation-name' in style)
        replaceRef(style, 'animation-name', sheet.keyframes);
      if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
      return style;
    },
    onChangeValue: function onChangeValue(val, prop, rule) {
      var sheet = rule.options.sheet;

      if (!sheet) {
        return val;
      }

      switch (prop) {
        case 'animation':
          return findReferencedKeyframe(val, sheet.keyframes);

        case 'animation-name':
          return findReferencedKeyframe(val, sheet.keyframes);

        default:
          return val;
      }
    },
  };

  var KeyframeRule =
    /*#__PURE__*/
    (function (_BaseStyleRule) {
      _inheritsLoose(KeyframeRule, _BaseStyleRule);

      function KeyframeRule() {
        return _BaseStyleRule.apply(this, arguments) || this;
      }

      var _proto = KeyframeRule.prototype;

      /**
       * Generates a CSS string.
       */
      _proto.toString = function toString(options) {
        var sheet = this.options.sheet;
        var link = sheet ? sheet.options.link : false;
        var opts = link
          ? _extends$2({}, options, {
              allowEmpty: true,
            })
          : options;
        return toCss(this.key, this.style, opts);
      };

      return KeyframeRule;
    })(BaseStyleRule);
  var pluginKeyframeRule = {
    onCreateRule: function onCreateRule(key, style, options) {
      if (options.parent && options.parent.type === 'keyframes') {
        return new KeyframeRule(key, style, options);
      }

      return null;
    },
  };

  var FontFaceRule =
    /*#__PURE__*/
    (function () {
      function FontFaceRule(key, style, options) {
        this.type = 'font-face';
        this.at = '@font-face';
        this.isProcessed = false;
        this.key = key;
        this.style = style;
        this.options = options;
      }
      /**
       * Generates a CSS string.
       */

      var _proto = FontFaceRule.prototype;

      _proto.toString = function toString(options) {
        var _getWhitespaceSymbols = getWhitespaceSymbols(options),
          linebreak = _getWhitespaceSymbols.linebreak;

        if (Array.isArray(this.style)) {
          var str = '';

          for (var index = 0; index < this.style.length; index++) {
            str += toCss(this.at, this.style[index]);
            if (this.style[index + 1]) str += linebreak;
          }

          return str;
        }

        return toCss(this.at, this.style, options);
      };

      return FontFaceRule;
    })();
  var keyRegExp$2 = /@font-face/;
  var pluginFontFaceRule = {
    onCreateRule: function onCreateRule(key, style, options) {
      return keyRegExp$2.test(key)
        ? new FontFaceRule(key, style, options)
        : null;
    },
  };

  var ViewportRule =
    /*#__PURE__*/
    (function () {
      function ViewportRule(key, style, options) {
        this.type = 'viewport';
        this.at = '@viewport';
        this.isProcessed = false;
        this.key = key;
        this.style = style;
        this.options = options;
      }
      /**
       * Generates a CSS string.
       */

      var _proto = ViewportRule.prototype;

      _proto.toString = function toString(options) {
        return toCss(this.key, this.style, options);
      };

      return ViewportRule;
    })();
  var pluginViewportRule = {
    onCreateRule: function onCreateRule(key, style, options) {
      return key === '@viewport' || key === '@-ms-viewport'
        ? new ViewportRule(key, style, options)
        : null;
    },
  };

  var SimpleRule =
    /*#__PURE__*/
    (function () {
      function SimpleRule(key, value, options) {
        this.type = 'simple';
        this.isProcessed = false;
        this.key = key;
        this.value = value;
        this.options = options;
      }
      /**
       * Generates a CSS string.
       */
      // eslint-disable-next-line no-unused-vars

      var _proto = SimpleRule.prototype;

      _proto.toString = function toString(options) {
        if (Array.isArray(this.value)) {
          var str = '';

          for (var index = 0; index < this.value.length; index++) {
            str += this.key + ' ' + this.value[index] + ';';
            if (this.value[index + 1]) str += '\n';
          }

          return str;
        }

        return this.key + ' ' + this.value + ';';
      };

      return SimpleRule;
    })();
  var keysMap = {
    '@charset': true,
    '@import': true,
    '@namespace': true,
  };
  var pluginSimpleRule = {
    onCreateRule: function onCreateRule(key, value, options) {
      return key in keysMap ? new SimpleRule(key, value, options) : null;
    },
  };

  var plugins$1 = [
    pluginStyleRule,
    pluginConditionalRule,
    pluginKeyframesRule,
    pluginKeyframeRule,
    pluginFontFaceRule,
    pluginViewportRule,
    pluginSimpleRule,
  ];

  var defaultUpdateOptions = {
    process: true,
  };
  var forceUpdateOptions = {
    force: true,
    process: true,
    /**
     * Contains rules objects and allows adding/removing etc.
     * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
     */
  };

  var RuleList =
    /*#__PURE__*/
    (function () {
      // Rules registry for access by .get() method.
      // It contains the same rule registered by name and by selector.
      // Original styles object.
      // Used to ensure correct rules order.
      function RuleList(options) {
        this.map = {};
        this.raw = {};
        this.index = [];
        this.counter = 0;
        this.options = options;
        this.classes = options.classes;
        this.keyframes = options.keyframes;
      }
      /**
       * Create and register rule.
       *
       * Will not render after Style Sheet was rendered the first time.
       */

      var _proto = RuleList.prototype;

      _proto.add = function add(name, decl, ruleOptions) {
        var _this$options = this.options,
          parent = _this$options.parent,
          sheet = _this$options.sheet,
          jss = _this$options.jss,
          Renderer = _this$options.Renderer,
          generateId = _this$options.generateId,
          scoped = _this$options.scoped;

        var options = _extends$2(
          {
            classes: this.classes,
            parent: parent,
            sheet: sheet,
            jss: jss,
            Renderer: Renderer,
            generateId: generateId,
            scoped: scoped,
            name: name,
            keyframes: this.keyframes,
            selector: undefined,
          },
          ruleOptions,
        ); // When user uses .createStyleSheet(), duplicate names are not possible, but
        // `sheet.addRule()` opens the door for any duplicate rule name. When this happens
        // we need to make the key unique within this RuleList instance scope.

        var key = name;

        if (name in this.raw) {
          key = name + '-d' + this.counter++;
        } // We need to save the original decl before creating the rule
        // because cache plugin needs to use it as a key to return a cached rule.

        this.raw[key] = decl;

        if (key in this.classes) {
          // E.g. rules inside of @media container
          options.selector = '.' + escape(this.classes[key]);
        }

        var rule = createRule(key, decl, options);
        if (!rule) return null;
        this.register(rule);
        var index =
          options.index === undefined ? this.index.length : options.index;
        this.index.splice(index, 0, rule);
        return rule;
      };
      /**
       * Replace rule.
       * Create a new rule and remove old one instead of overwriting
       * because we want to invoke onCreateRule hook to make plugins work.
       */

      _proto.replace = function replace(name, decl, ruleOptions) {
        var oldRule = this.get(name);
        var oldIndex = this.index.indexOf(oldRule);

        if (oldRule) {
          this.remove(oldRule);
        }

        var options = ruleOptions;
        if (oldIndex !== -1)
          options = _extends$2({}, ruleOptions, {
            index: oldIndex,
          });
        return this.add(name, decl, options);
      };
      /**
       * Get a rule by name or selector.
       */

      _proto.get = function get(nameOrSelector) {
        return this.map[nameOrSelector];
      };
      /**
       * Delete a rule.
       */

      _proto.remove = function remove(rule) {
        this.unregister(rule);
        delete this.raw[rule.key];
        this.index.splice(this.index.indexOf(rule), 1);
      };
      /**
       * Get index of a rule.
       */

      _proto.indexOf = function indexOf(rule) {
        return this.index.indexOf(rule);
      };
      /**
       * Run `onProcessRule()` plugins on every rule.
       */

      _proto.process = function process() {
        var plugins = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
        // we end up with very hard-to-track-down side effects.

        this.index.slice(0).forEach(plugins.onProcessRule, plugins);
      };
      /**
       * Register a rule in `.map`, `.classes` and `.keyframes` maps.
       */

      _proto.register = function register(rule) {
        this.map[rule.key] = rule;

        if (rule instanceof StyleRule) {
          this.map[rule.selector] = rule;
          if (rule.id) this.classes[rule.key] = rule.id;
        } else if (rule instanceof KeyframesRule && this.keyframes) {
          this.keyframes[rule.name] = rule.id;
        }
      };
      /**
       * Unregister a rule.
       */

      _proto.unregister = function unregister(rule) {
        delete this.map[rule.key];

        if (rule instanceof StyleRule) {
          delete this.map[rule.selector];
          delete this.classes[rule.key];
        } else if (rule instanceof KeyframesRule) {
          delete this.keyframes[rule.name];
        }
      };
      /**
       * Update the function values with a new data.
       */

      _proto.update = function update() {
        var name;
        var data;
        var options;

        if (
          typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string'
        ) {
          name = arguments.length <= 0 ? undefined : arguments[0];
          data = arguments.length <= 1 ? undefined : arguments[1];
          options = arguments.length <= 2 ? undefined : arguments[2];
        } else {
          data = arguments.length <= 0 ? undefined : arguments[0];
          options = arguments.length <= 1 ? undefined : arguments[1];
          name = null;
        }

        if (name) {
          this.updateOne(this.get(name), data, options);
        } else {
          for (var index = 0; index < this.index.length; index++) {
            this.updateOne(this.index[index], data, options);
          }
        }
      };
      /**
       * Execute plugins, update rule props.
       */

      _proto.updateOne = function updateOne(rule, data, options) {
        if (options === void 0) {
          options = defaultUpdateOptions;
        }

        var _this$options2 = this.options,
          plugins = _this$options2.jss.plugins,
          sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

        if (rule.rules instanceof RuleList) {
          rule.rules.update(data, options);
          return;
        }

        var style = rule.style;
        plugins.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

        if (options.process && style && style !== rule.style) {
          // We need to run the plugins in case new `style` relies on syntax plugins.
          plugins.onProcessStyle(rule.style, rule, sheet); // Update and add props.

          for (var prop in rule.style) {
            var nextValue = rule.style[prop];
            var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
            // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

            if (nextValue !== prevValue) {
              rule.prop(prop, nextValue, forceUpdateOptions);
            }
          } // Remove props.

          for (var _prop in style) {
            var _nextValue = rule.style[_prop];
            var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
            // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

            if (_nextValue == null && _nextValue !== _prevValue) {
              rule.prop(_prop, null, forceUpdateOptions);
            }
          }
        }
      };
      /**
       * Convert rules to a CSS string.
       */

      _proto.toString = function toString(options) {
        var str = '';
        var sheet = this.options.sheet;
        var link = sheet ? sheet.options.link : false;

        var _getWhitespaceSymbols = getWhitespaceSymbols(options),
          linebreak = _getWhitespaceSymbols.linebreak;

        for (var index = 0; index < this.index.length; index++) {
          var rule = this.index[index];
          var css = rule.toString(options); // No need to render an empty rule.

          if (!css && !link) continue;
          if (str) str += linebreak;
          str += css;
        }

        return str;
      };

      return RuleList;
    })();

  var StyleSheet =
    /*#__PURE__*/
    (function () {
      function StyleSheet(styles, options) {
        this.attached = false;
        this.deployed = false;
        this.classes = {};
        this.keyframes = {};
        this.options = _extends$2({}, options, {
          sheet: this,
          parent: this,
          classes: this.classes,
          keyframes: this.keyframes,
        });

        if (options.Renderer) {
          this.renderer = new options.Renderer(this);
        }

        this.rules = new RuleList(this.options);

        for (var name in styles) {
          this.rules.add(name, styles[name]);
        }

        this.rules.process();
      }
      /**
       * Attach renderable to the render tree.
       */

      var _proto = StyleSheet.prototype;

      _proto.attach = function attach() {
        if (this.attached) return this;
        if (this.renderer) this.renderer.attach();
        this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

        if (!this.deployed) this.deploy();
        return this;
      };
      /**
       * Remove renderable from render tree.
       */

      _proto.detach = function detach() {
        if (!this.attached) return this;
        if (this.renderer) this.renderer.detach();
        this.attached = false;
        return this;
      };
      /**
       * Add a rule to the current stylesheet.
       * Will insert a rule also after the stylesheet has been rendered first time.
       */

      _proto.addRule = function addRule(name, decl, options) {
        var queue = this.queue; // Plugins can create rules.
        // In order to preserve the right order, we need to queue all `.addRule` calls,
        // which happen after the first `rules.add()` call.

        if (this.attached && !queue) this.queue = [];
        var rule = this.rules.add(name, decl, options);
        if (!rule) return null;
        this.options.jss.plugins.onProcessRule(rule);

        if (this.attached) {
          if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
          // It will be inserted all together when .attach is called.

          if (queue) queue.push(rule);
          else {
            this.insertRule(rule);

            if (this.queue) {
              this.queue.forEach(this.insertRule, this);
              this.queue = undefined;
            }
          }
          return rule;
        } // We can't add rules to a detached style node.
        // We will redeploy the sheet once user will attach it.

        this.deployed = false;
        return rule;
      };
      /**
       * Replace a rule in the current stylesheet.
       */

      _proto.replaceRule = function replaceRule(nameOrSelector, decl, options) {
        var oldRule = this.rules.get(nameOrSelector);
        if (!oldRule) return this.addRule(nameOrSelector, decl, options);
        var newRule = this.rules.replace(nameOrSelector, decl, options);

        if (newRule) {
          this.options.jss.plugins.onProcessRule(newRule);
        }

        if (this.attached) {
          if (!this.deployed) return newRule; // Don't replace / delete rule directly if there is no stringified version yet.
          // It will be inserted all together when .attach is called.

          if (this.renderer) {
            if (!newRule) {
              this.renderer.deleteRule(oldRule);
            } else if (oldRule.renderable) {
              this.renderer.replaceRule(oldRule.renderable, newRule);
            }
          }

          return newRule;
        } // We can't replace rules to a detached style node.
        // We will redeploy the sheet once user will attach it.

        this.deployed = false;
        return newRule;
      };
      /**
       * Insert rule into the StyleSheet
       */

      _proto.insertRule = function insertRule(rule) {
        if (this.renderer) {
          this.renderer.insertRule(rule);
        }
      };
      /**
       * Create and add rules.
       * Will render also after Style Sheet was rendered the first time.
       */

      _proto.addRules = function addRules(styles, options) {
        var added = [];

        for (var name in styles) {
          var rule = this.addRule(name, styles[name], options);
          if (rule) added.push(rule);
        }

        return added;
      };
      /**
       * Get a rule by name or selector.
       */

      _proto.getRule = function getRule(nameOrSelector) {
        return this.rules.get(nameOrSelector);
      };
      /**
       * Delete a rule by name.
       * Returns `true`: if rule has been deleted from the DOM.
       */

      _proto.deleteRule = function deleteRule(name) {
        var rule = typeof name === 'object' ? name : this.rules.get(name);

        if (
          !rule || // Style sheet was created without link: true and attached, in this case we
          // won't be able to remove the CSS rule from the DOM.
          (this.attached && !rule.renderable)
        ) {
          return false;
        }

        this.rules.remove(rule);

        if (this.attached && rule.renderable && this.renderer) {
          return this.renderer.deleteRule(rule.renderable);
        }

        return true;
      };
      /**
       * Get index of a rule.
       */

      _proto.indexOf = function indexOf(rule) {
        return this.rules.indexOf(rule);
      };
      /**
       * Deploy pure CSS string to a renderable.
       */

      _proto.deploy = function deploy() {
        if (this.renderer) this.renderer.deploy();
        this.deployed = true;
        return this;
      };
      /**
       * Update the function values with a new data.
       */

      _proto.update = function update() {
        var _this$rules;

        (_this$rules = this.rules).update.apply(_this$rules, arguments);

        return this;
      };
      /**
       * Updates a single rule.
       */

      _proto.updateOne = function updateOne(rule, data, options) {
        this.rules.updateOne(rule, data, options);
        return this;
      };
      /**
       * Convert rules to a CSS string.
       */

      _proto.toString = function toString(options) {
        return this.rules.toString(options);
      };

      return StyleSheet;
    })();

  var PluginsRegistry =
    /*#__PURE__*/
    (function () {
      function PluginsRegistry() {
        this.plugins = {
          internal: [],
          external: [],
        };
        this.registry = {};
      }

      var _proto = PluginsRegistry.prototype;

      /**
       * Call `onCreateRule` hooks and return an object if returned by a hook.
       */
      _proto.onCreateRule = function onCreateRule(name, decl, options) {
        for (var i = 0; i < this.registry.onCreateRule.length; i++) {
          var rule = this.registry.onCreateRule[i](name, decl, options);
          if (rule) return rule;
        }

        return null;
      };
      /**
       * Call `onProcessRule` hooks.
       */

      _proto.onProcessRule = function onProcessRule(rule) {
        if (rule.isProcessed) return;
        var sheet = rule.options.sheet;

        for (var i = 0; i < this.registry.onProcessRule.length; i++) {
          this.registry.onProcessRule[i](rule, sheet);
        }

        if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
        rule.isProcessed = true;
      };
      /**
       * Call `onProcessStyle` hooks.
       */

      _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
        for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
          rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
        }
      };
      /**
       * Call `onProcessSheet` hooks.
       */

      _proto.onProcessSheet = function onProcessSheet(sheet) {
        for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
          this.registry.onProcessSheet[i](sheet);
        }
      };
      /**
       * Call `onUpdate` hooks.
       */

      _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
        for (var i = 0; i < this.registry.onUpdate.length; i++) {
          this.registry.onUpdate[i](data, rule, sheet, options);
        }
      };
      /**
       * Call `onChangeValue` hooks.
       */

      _proto.onChangeValue = function onChangeValue(value, prop, rule) {
        var processedValue = value;

        for (var i = 0; i < this.registry.onChangeValue.length; i++) {
          processedValue = this.registry.onChangeValue[i](
            processedValue,
            prop,
            rule,
          );
        }

        return processedValue;
      };
      /**
       * Register a plugin.
       */

      _proto.use = function use(newPlugin, options) {
        if (options === void 0) {
          options = {
            queue: 'external',
          };
        }

        var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

        if (plugins.indexOf(newPlugin) !== -1) {
          return;
        }

        plugins.push(newPlugin);
        this.registry = []
          .concat(this.plugins.external, this.plugins.internal)
          .reduce(
            function (registry, plugin) {
              for (var name in plugin) {
                if (name in registry) {
                  registry[name].push(plugin[name]);
                }
              }

              return registry;
            },
            {
              onCreateRule: [],
              onProcessRule: [],
              onProcessStyle: [],
              onProcessSheet: [],
              onChangeValue: [],
              onUpdate: [],
            },
          );
      };

      return PluginsRegistry;
    })();

  /**
   * Sheets registry to access all instances in one place.
   */

  var SheetsRegistry =
    /*#__PURE__*/
    (function () {
      function SheetsRegistry() {
        this.registry = [];
      }

      var _proto = SheetsRegistry.prototype;

      /**
       * Register a Style Sheet.
       */
      _proto.add = function add(sheet) {
        var registry = this.registry;
        var index = sheet.options.index;
        if (registry.indexOf(sheet) !== -1) return;

        if (registry.length === 0 || index >= this.index) {
          registry.push(sheet);
          return;
        } // Find a position.

        for (var i = 0; i < registry.length; i++) {
          if (registry[i].options.index > index) {
            registry.splice(i, 0, sheet);
            return;
          }
        }
      };
      /**
       * Reset the registry.
       */

      _proto.reset = function reset() {
        this.registry = [];
      };
      /**
       * Remove a Style Sheet.
       */

      _proto.remove = function remove(sheet) {
        var index = this.registry.indexOf(sheet);
        this.registry.splice(index, 1);
      };
      /**
       * Convert all attached sheets to a CSS string.
       */

      _proto.toString = function toString(_temp) {
        var _ref = _temp === void 0 ? {} : _temp,
          attached = _ref.attached,
          options = _objectWithoutPropertiesLoose(_ref, ['attached']);

        var _getWhitespaceSymbols = getWhitespaceSymbols(options),
          linebreak = _getWhitespaceSymbols.linebreak;

        var css = '';

        for (var i = 0; i < this.registry.length; i++) {
          var sheet = this.registry[i];

          if (attached != null && sheet.attached !== attached) {
            continue;
          }

          if (css) css += linebreak;
          css += sheet.toString(options);
        }

        return css;
      };

      _createClass(SheetsRegistry, [
        {
          key: 'index',

          /**
           * Current highest index number.
           */
          get: function get() {
            return this.registry.length === 0
              ? 0
              : this.registry[this.registry.length - 1].options.index;
          },
        },
      ]);

      return SheetsRegistry;
    })();

  /**
   * This is a global sheets registry. Only DomRenderer will add sheets to it.
   * On the server one should use an own SheetsRegistry instance and add the
   * sheets to it, because you need to make sure to create a new registry for
   * each request in order to not leak sheets across requests.
   */

  var sheets = new SheetsRegistry();

  /* eslint-disable */

  /**
   * Now that `globalThis` is available on most platforms
   * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis#browser_compatibility)
   * we check for `globalThis` first. `globalThis` is necessary for jss
   * to run in Agoric's secure version of JavaScript (SES). Under SES,
   * `globalThis` exists, but `window`, `self`, and `Function('return
   * this')()` are all undefined for security reasons.
   *
   * https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
   */
  var globalThis$1 =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof window !== 'undefined' && window.Math === Math
      ? window
      : typeof self !== 'undefined' && self.Math === Math
      ? self
      : Function('return this')();

  var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
  if (globalThis$1[ns] == null) globalThis$1[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
  // the current version with just one short number and use it for classes generation
  // we use a counter. Also it is more accurate, because user can manually reevaluate
  // the module.

  var moduleId = globalThis$1[ns]++;
  /**
   * Returns a function which generates unique class names based on counters.
   * When new generator function is created, rule counter is reseted.
   * We need to reset the rule counter for SSR for each request.
   */

  var createGenerateId = function createGenerateId(options) {
    if (options === void 0) {
      options = {};
    }

    var ruleCounter = 0;

    var generateId = function generateId(rule, sheet) {
      ruleCounter += 1;

      var jssId = '';
      var prefix = '';

      if (sheet) {
        if (sheet.options.classNamePrefix) {
          prefix = sheet.options.classNamePrefix;
        }

        if (sheet.options.jss.id != null) {
          jssId = String(sheet.options.jss.id);
        }
      }

      if (options.minify) {
        // Using "c" because a number can't be the first char in a class name.
        return '' + (prefix || 'c') + moduleId + jssId + ruleCounter;
      }

      return (
        prefix +
        rule.key +
        '-' +
        moduleId +
        (jssId ? '-' + jssId : '') +
        '-' +
        ruleCounter
      );
    };

    return generateId;
  };

  /**
   * Cache the value from the first time a function is called.
   */

  var memoize$1 = function memoize(fn) {
    var value;
    return function () {
      if (!value) value = fn();
      return value;
    };
  };
  /**
   * Get a style property value.
   */

  var getPropertyValue = function getPropertyValue(cssRule, prop) {
    try {
      // Support CSSTOM.
      if (cssRule.attributeStyleMap) {
        return cssRule.attributeStyleMap.get(prop);
      }

      return cssRule.style.getPropertyValue(prop);
    } catch (err) {
      // IE may throw if property is unknown.
      return '';
    }
  };
  /**
   * Set a style property.
   */

  var setProperty = function setProperty(cssRule, prop, value) {
    try {
      var cssValue = value;

      if (Array.isArray(value)) {
        cssValue = toCssValue(value, true);

        if (value[value.length - 1] === '!important') {
          cssRule.style.setProperty(prop, cssValue, 'important');
          return true;
        }
      } // Support CSSTOM.

      if (cssRule.attributeStyleMap) {
        cssRule.attributeStyleMap.set(prop, cssValue);
      } else {
        cssRule.style.setProperty(prop, cssValue);
      }
    } catch (err) {
      // IE may throw if property is unknown.
      return false;
    }

    return true;
  };
  /**
   * Remove a style property.
   */

  var removeProperty = function removeProperty(cssRule, prop) {
    try {
      // Support CSSTOM.
      if (cssRule.attributeStyleMap) {
        cssRule.attributeStyleMap.delete(prop);
      } else {
        cssRule.style.removeProperty(prop);
      }
    } catch (err) {}
  };
  /**
   * Set the selector.
   */

  var setSelector = function setSelector(cssRule, selectorText) {
    cssRule.selectorText = selectorText; // Return false if setter was not successful.
    // Currently works in chrome only.

    return cssRule.selectorText === selectorText;
  };
  /**
   * Gets the `head` element upon the first call and caches it.
   * We assume it can't be null.
   */

  var getHead = memoize$1(function () {
    return document.querySelector('head');
  });
  /**
   * Find attached sheet with an index higher than the passed one.
   */

  function findHigherSheet(registry, options) {
    for (var i = 0; i < registry.length; i++) {
      var sheet = registry[i];

      if (
        sheet.attached &&
        sheet.options.index > options.index &&
        sheet.options.insertionPoint === options.insertionPoint
      ) {
        return sheet;
      }
    }

    return null;
  }
  /**
   * Find attached sheet with the highest index.
   */

  function findHighestSheet(registry, options) {
    for (var i = registry.length - 1; i >= 0; i--) {
      var sheet = registry[i];

      if (
        sheet.attached &&
        sheet.options.insertionPoint === options.insertionPoint
      ) {
        return sheet;
      }
    }

    return null;
  }
  /**
   * Find a comment with "jss" inside.
   */

  function findCommentNode(text) {
    var head = getHead();

    for (var i = 0; i < head.childNodes.length; i++) {
      var node = head.childNodes[i];

      if (node.nodeType === 8 && node.nodeValue.trim() === text) {
        return node;
      }
    }

    return null;
  }
  /**
   * Find a node before which we can insert the sheet.
   */

  function findPrevNode(options) {
    var registry = sheets.registry;

    if (registry.length > 0) {
      // Try to insert before the next higher sheet.
      var sheet = findHigherSheet(registry, options);

      if (sheet && sheet.renderer) {
        return {
          parent: sheet.renderer.element.parentNode,
          node: sheet.renderer.element,
        };
      } // Otherwise insert after the last attached.

      sheet = findHighestSheet(registry, options);

      if (sheet && sheet.renderer) {
        return {
          parent: sheet.renderer.element.parentNode,
          node: sheet.renderer.element.nextSibling,
        };
      }
    } // Try to find a comment placeholder if registry is empty.

    var insertionPoint = options.insertionPoint;

    if (insertionPoint && typeof insertionPoint === 'string') {
      var comment = findCommentNode(insertionPoint);

      if (comment) {
        return {
          parent: comment.parentNode,
          node: comment.nextSibling,
        };
      } // If user specifies an insertion point and it can't be found in the document -
    }

    return false;
  }
  /**
   * Insert style element into the DOM.
   */

  function insertStyle(style, options) {
    var insertionPoint = options.insertionPoint;
    var nextNode = findPrevNode(options);

    if (nextNode !== false && nextNode.parent) {
      nextNode.parent.insertBefore(style, nextNode.node);
      return;
    } // Works with iframes and any node types.

    if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
      var insertionPointElement = insertionPoint;
      var parentNode = insertionPointElement.parentNode;
      if (parentNode)
        parentNode.insertBefore(style, insertionPointElement.nextSibling);
      return;
    }

    getHead().appendChild(style);
  }
  /**
   * Read jss nonce setting from the page if the user has set it.
   */

  var getNonce = memoize$1(function () {
    var node = document.querySelector('meta[property="csp-nonce"]');
    return node ? node.getAttribute('content') : null;
  });

  var _insertRule = function insertRule(container, rule, index) {
    try {
      if ('insertRule' in container) {
        container.insertRule(rule, index);
      } // Keyframes rule.
      else if ('appendRule' in container) {
        container.appendRule(rule);
      }
    } catch (err) {
      return false;
    }

    return container.cssRules[index];
  };

  var getValidRuleInsertionIndex = function getValidRuleInsertionIndex(
    container,
    index,
  ) {
    var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

    if (index === undefined || index > maxIndex) {
      // eslint-disable-next-line no-param-reassign
      return maxIndex;
    }

    return index;
  };

  var createStyle = function createStyle() {
    var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
    // insert rules after we insert the style tag.
    // It seems to kick-off the source order specificity algorithm.

    el.textContent = '\n';
    return el;
  };

  var DomRenderer =
    /*#__PURE__*/
    (function () {
      // Will be empty if link: true option is not set, because
      // it is only for use together with insertRule API.
      function DomRenderer(sheet) {
        this.getPropertyValue = getPropertyValue;
        this.setProperty = setProperty;
        this.removeProperty = removeProperty;
        this.setSelector = setSelector;
        this.hasInsertedRules = false;
        this.cssRules = [];
        // There is no sheet when the renderer is used from a standalone StyleRule.
        if (sheet) sheets.add(sheet);
        this.sheet = sheet;

        var _ref = this.sheet ? this.sheet.options : {},
          media = _ref.media,
          meta = _ref.meta,
          element = _ref.element;

        this.element = element || createStyle();
        this.element.setAttribute('data-jss', '');
        if (media) this.element.setAttribute('media', media);
        if (meta) this.element.setAttribute('data-meta', meta);
        var nonce = getNonce();
        if (nonce) this.element.setAttribute('nonce', nonce);
      }
      /**
       * Insert style element into render tree.
       */

      var _proto = DomRenderer.prototype;

      _proto.attach = function attach() {
        // In the case the element node is external and it is already in the DOM.
        if (this.element.parentNode || !this.sheet) return;
        insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
        // most browsers create a new CSSStyleSheet, except of all IEs.

        var deployed = Boolean(this.sheet && this.sheet.deployed);

        if (this.hasInsertedRules && deployed) {
          this.hasInsertedRules = false;
          this.deploy();
        }
      };
      /**
       * Remove style element from render tree.
       */

      _proto.detach = function detach() {
        if (!this.sheet) return;
        var parentNode = this.element.parentNode;
        if (parentNode) parentNode.removeChild(this.element); // In the most browsers, rules inserted using insertRule() API will be lost when style element is removed.
        // Though IE will keep them and we need a consistent behavior.

        if (this.sheet.options.link) {
          this.cssRules = [];
          this.element.textContent = '\n';
        }
      };
      /**
       * Inject CSS string into element.
       */

      _proto.deploy = function deploy() {
        var sheet = this.sheet;
        if (!sheet) return;

        if (sheet.options.link) {
          this.insertRules(sheet.rules);
          return;
        }

        this.element.textContent = '\n' + sheet.toString() + '\n';
      };
      /**
       * Insert RuleList into an element.
       */

      _proto.insertRules = function insertRules(rules, nativeParent) {
        for (var i = 0; i < rules.index.length; i++) {
          this.insertRule(rules.index[i], i, nativeParent);
        }
      };
      /**
       * Insert a rule into element.
       */

      _proto.insertRule = function insertRule(rule, index, nativeParent) {
        if (nativeParent === void 0) {
          nativeParent = this.element.sheet;
        }

        if (rule.rules) {
          var parent = rule;
          var latestNativeParent = nativeParent;

          if (rule.type === 'conditional' || rule.type === 'keyframes') {
            var _insertionIndex = getValidRuleInsertionIndex(
              nativeParent,
              index,
            ); // We need to render the container without children first.

            latestNativeParent = _insertRule(
              nativeParent,
              parent.toString({
                children: false,
              }),
              _insertionIndex,
            );

            if (latestNativeParent === false) {
              return false;
            }

            this.refCssRule(rule, _insertionIndex, latestNativeParent);
          }

          this.insertRules(parent.rules, latestNativeParent);
          return latestNativeParent;
        }

        var ruleStr = rule.toString();
        if (!ruleStr) return false;
        var insertionIndex = getValidRuleInsertionIndex(nativeParent, index);

        var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);

        if (nativeRule === false) {
          return false;
        }

        this.hasInsertedRules = true;
        this.refCssRule(rule, insertionIndex, nativeRule);
        return nativeRule;
      };

      _proto.refCssRule = function refCssRule(rule, index, cssRule) {
        rule.renderable = cssRule; // We only want to reference the top level rules, deleteRule API doesn't support removing nested rules
        // like rules inside media queries or keyframes

        if (rule.options.parent instanceof StyleSheet) {
          this.cssRules.splice(index, 0, cssRule);
        }
      };
      /**
       * Delete a rule.
       */

      _proto.deleteRule = function deleteRule(cssRule) {
        var sheet = this.element.sheet;
        var index = this.indexOf(cssRule);
        if (index === -1) return false;
        sheet.deleteRule(index);
        this.cssRules.splice(index, 1);
        return true;
      };
      /**
       * Get index of a CSS Rule.
       */

      _proto.indexOf = function indexOf(cssRule) {
        return this.cssRules.indexOf(cssRule);
      };
      /**
       * Generate a new CSS rule and replace the existing one.
       */

      _proto.replaceRule = function replaceRule(cssRule, rule) {
        var index = this.indexOf(cssRule);
        if (index === -1) return false;
        this.element.sheet.deleteRule(index);
        this.cssRules.splice(index, 1);
        return this.insertRule(rule, index);
      };
      /**
       * Get all rules elements.
       */

      _proto.getRules = function getRules() {
        return this.element.sheet.cssRules;
      };

      return DomRenderer;
    })();

  var instanceCounter = 0;

  var Jss =
    /*#__PURE__*/
    (function () {
      function Jss(options) {
        this.id = instanceCounter++;
        this.version = '10.9.0';
        this.plugins = new PluginsRegistry();
        this.options = {
          id: {
            minify: false,
          },
          createGenerateId: createGenerateId,
          Renderer: isBrowser$1 ? DomRenderer : null,
          plugins: [],
        };
        this.generateId = createGenerateId({
          minify: false,
        });

        for (var i = 0; i < plugins$1.length; i++) {
          this.plugins.use(plugins$1[i], {
            queue: 'internal',
          });
        }

        this.setup(options);
      }
      /**
       * Prepares various options, applies plugins.
       * Should not be used twice on the same instance, because there is no plugins
       * deduplication logic.
       */

      var _proto = Jss.prototype;

      _proto.setup = function setup(options) {
        if (options === void 0) {
          options = {};
        }

        if (options.createGenerateId) {
          this.options.createGenerateId = options.createGenerateId;
        }

        if (options.id) {
          this.options.id = _extends$2({}, this.options.id, options.id);
        }

        if (options.createGenerateId || options.id) {
          this.generateId = this.options.createGenerateId(this.options.id);
        }

        if (options.insertionPoint != null)
          this.options.insertionPoint = options.insertionPoint;

        if ('Renderer' in options) {
          this.options.Renderer = options.Renderer;
        } // eslint-disable-next-line prefer-spread

        if (options.plugins) this.use.apply(this, options.plugins);
        return this;
      };
      /**
       * Create a Style Sheet.
       */

      _proto.createStyleSheet = function createStyleSheet(styles, options) {
        if (options === void 0) {
          options = {};
        }

        var _options = options,
          index = _options.index;

        if (typeof index !== 'number') {
          index = sheets.index === 0 ? 0 : sheets.index + 1;
        }

        var sheet = new StyleSheet(
          styles,
          _extends$2({}, options, {
            jss: this,
            generateId: options.generateId || this.generateId,
            insertionPoint: this.options.insertionPoint,
            Renderer: this.options.Renderer,
            index: index,
          }),
        );
        this.plugins.onProcessSheet(sheet);
        return sheet;
      };
      /**
       * Detach the Style Sheet and remove it from the registry.
       */

      _proto.removeStyleSheet = function removeStyleSheet(sheet) {
        sheet.detach();
        sheets.remove(sheet);
        return this;
      };
      /**
       * Create a rule without a Style Sheet.
       * [Deprecated] will be removed in the next major version.
       */

      _proto.createRule = function createRule$1(name, style, options) {
        if (style === void 0) {
          style = {};
        }

        if (options === void 0) {
          options = {};
        }

        // Enable rule without name for inline styles.
        if (typeof name === 'object') {
          return this.createRule(undefined, name, style);
        }

        var ruleOptions = _extends$2({}, options, {
          name: name,
          jss: this,
          Renderer: this.options.Renderer,
        });

        if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
        if (!ruleOptions.classes) ruleOptions.classes = {};
        if (!ruleOptions.keyframes) ruleOptions.keyframes = {};

        var rule = createRule(name, style, ruleOptions);

        if (rule) this.plugins.onProcessRule(rule);
        return rule;
      };
      /**
       * Register plugin. Passed function will be invoked with a rule instance.
       */

      _proto.use = function use() {
        var _this = this;

        for (
          var _len = arguments.length, plugins = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          plugins[_key] = arguments[_key];
        }

        plugins.forEach(function (plugin) {
          _this.plugins.use(plugin);
        });
        return this;
      };

      return Jss;
    })();

  var createJss = function createJss(options) {
    return new Jss(options);
  };

  /**
   * Export a constant indicating if this browser has CSSTOM support.
   * https://developers.google.com/web/updates/2018/03/cssom
   */
  var hasCSSTOMSupport =
    typeof CSS === 'object' && CSS != null && 'number' in CSS;

  /**
   * Extracts a styles object with only props that contain function values.
   */
  function getDynamicStyles(styles) {
    var to = null;

    for (var key in styles) {
      var value = styles[key];
      var type = typeof value;

      if (type === 'function') {
        if (!to) to = {};
        to[key] = value;
      } else if (type === 'object' && value !== null && !Array.isArray(value)) {
        var extracted = getDynamicStyles(value);

        if (extracted) {
          if (!to) to = {};
          to[key] = extracted;
        }
      }
    }

    return to;
  }

  /**
   * A better abstraction over CSS.
   *
   * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
   * @website https://github.com/cssinjs/jss
   * @license MIT
   */
  createJss();

  var now = Date.now();
  var fnValuesNs = 'fnValues' + now;
  var fnRuleNs = 'fnStyle' + ++now;

  var functionPlugin = function functionPlugin() {
    return {
      onCreateRule: function onCreateRule(name, decl, options) {
        if (typeof decl !== 'function') return null;
        var rule = createRule(name, {}, options);
        rule[fnRuleNs] = decl;
        return rule;
      },
      onProcessStyle: function onProcessStyle(style, rule) {
        // We need to extract function values from the declaration, so that we can keep core unaware of them.
        // We need to do that only once.
        // We don't need to extract functions on each style update, since this can happen only once.
        // We don't support function values inside of function rules.
        if (fnValuesNs in rule || fnRuleNs in rule) return style;
        var fnValues = {};

        for (var prop in style) {
          var value = style[prop];
          if (typeof value !== 'function') continue;
          delete style[prop];
          fnValues[prop] = value;
        }

        rule[fnValuesNs] = fnValues;
        return style;
      },
      onUpdate: function onUpdate(data, rule, sheet, options) {
        var styleRule = rule;
        var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
        // will be returned from that function.

        if (fnRule) {
          // Empty object will remove all currently defined props
          // in case function rule returns a falsy value.
          styleRule.style = fnRule(data) || {};
        }

        var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

        if (fnValues) {
          for (var _prop in fnValues) {
            styleRule.prop(_prop, fnValues[_prop](data), options);
          }
        }
      },
    };
  };

  var functions = functionPlugin;

  var at = '@global';
  var atPrefix = '@global ';

  var GlobalContainerRule =
    /*#__PURE__*/
    (function () {
      function GlobalContainerRule(key, styles, options) {
        this.type = 'global';
        this.at = at;
        this.isProcessed = false;
        this.key = key;
        this.options = options;
        this.rules = new RuleList(
          _extends$2({}, options, {
            parent: this,
          }),
        );

        for (var selector in styles) {
          this.rules.add(selector, styles[selector]);
        }

        this.rules.process();
      }
      /**
       * Get a rule.
       */

      var _proto = GlobalContainerRule.prototype;

      _proto.getRule = function getRule(name) {
        return this.rules.get(name);
      };
      /**
       * Create and register rule, run plugins.
       */

      _proto.addRule = function addRule(name, style, options) {
        var rule = this.rules.add(name, style, options);
        if (rule) this.options.jss.plugins.onProcessRule(rule);
        return rule;
      };
      /**
       * Replace rule, run plugins.
       */

      _proto.replaceRule = function replaceRule(name, style, options) {
        var newRule = this.rules.replace(name, style, options);
        if (newRule) this.options.jss.plugins.onProcessRule(newRule);
        return newRule;
      };
      /**
       * Get index of a rule.
       */

      _proto.indexOf = function indexOf(rule) {
        return this.rules.indexOf(rule);
      };
      /**
       * Generates a CSS string.
       */

      _proto.toString = function toString(options) {
        return this.rules.toString(options);
      };

      return GlobalContainerRule;
    })();

  var GlobalPrefixedRule =
    /*#__PURE__*/
    (function () {
      function GlobalPrefixedRule(key, style, options) {
        this.type = 'global';
        this.at = at;
        this.isProcessed = false;
        this.key = key;
        this.options = options;
        var selector = key.substr(atPrefix.length);
        this.rule = options.jss.createRule(
          selector,
          style,
          _extends$2({}, options, {
            parent: this,
          }),
        );
      }

      var _proto2 = GlobalPrefixedRule.prototype;

      _proto2.toString = function toString(options) {
        return this.rule ? this.rule.toString(options) : '';
      };

      return GlobalPrefixedRule;
    })();

  var separatorRegExp$1 = /\s*,\s*/g;

  function addScope(selector, scope) {
    var parts = selector.split(separatorRegExp$1);
    var scoped = '';

    for (var i = 0; i < parts.length; i++) {
      scoped += scope + ' ' + parts[i].trim();
      if (parts[i + 1]) scoped += ', ';
    }

    return scoped;
  }

  function handleNestedGlobalContainerRule(rule, sheet) {
    var options = rule.options,
      style = rule.style;
    var rules = style ? style[at] : null;
    if (!rules) return;

    for (var name in rules) {
      sheet.addRule(
        name,
        rules[name],
        _extends$2({}, options, {
          selector: addScope(name, rule.selector),
        }),
      );
    }

    delete style[at];
  }

  function handlePrefixedGlobalRule(rule, sheet) {
    var options = rule.options,
      style = rule.style;

    for (var prop in style) {
      if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
      var selector = addScope(prop.substr(at.length), rule.selector);
      sheet.addRule(
        selector,
        style[prop],
        _extends$2({}, options, {
          selector: selector,
        }),
      );
      delete style[prop];
    }
  }
  /**
   * Convert nested rules to separate, remove them from original styles.
   */

  function jssGlobal() {
    function onCreateRule(name, styles, options) {
      if (!name) return null;

      if (name === at) {
        return new GlobalContainerRule(name, styles, options);
      }

      if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
        return new GlobalPrefixedRule(name, styles, options);
      }

      var parent = options.parent;

      if (parent) {
        if (
          parent.type === 'global' ||
          (parent.options.parent && parent.options.parent.type === 'global')
        ) {
          options.scoped = false;
        }
      }

      if (!options.selector && options.scoped === false) {
        options.selector = name;
      }

      return null;
    }

    function onProcessRule(rule, sheet) {
      if (rule.type !== 'style' || !sheet) return;
      handleNestedGlobalContainerRule(rule, sheet);
      handlePrefixedGlobalRule(rule, sheet);
    }

    return {
      onCreateRule: onCreateRule,
      onProcessRule: onProcessRule,
    };
  }

  var separatorRegExp = /\s*,\s*/g;
  var parentRegExp = /&/g;
  var refRegExp = /\$([\w-]+)/g;
  /**
   * Convert nested rules to separate, remove them from original styles.
   */

  function jssNested() {
    // Get a function to be used for $ref replacement.
    function getReplaceRef(container, sheet) {
      return function (match, key) {
        var rule = container.getRule(key) || (sheet && sheet.getRule(key));

        if (rule) {
          return rule.selector;
        }
        return key;
      };
    }

    function replaceParentRefs(nestedProp, parentProp) {
      var parentSelectors = parentProp.split(separatorRegExp);
      var nestedSelectors = nestedProp.split(separatorRegExp);
      var result = '';

      for (var i = 0; i < parentSelectors.length; i++) {
        var parent = parentSelectors[i];

        for (var j = 0; j < nestedSelectors.length; j++) {
          var nested = nestedSelectors[j];
          if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

          result +=
            nested.indexOf('&') !== -1
              ? nested.replace(parentRegExp, parent)
              : parent + ' ' + nested;
        }
      }

      return result;
    }

    function getOptions(rule, container, prevOptions) {
      // Options has been already created, now we only increase index.
      if (prevOptions)
        return _extends$2({}, prevOptions, {
          index: prevOptions.index + 1,
        });
      var nestingLevel = rule.options.nestingLevel;
      nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

      var options = _extends$2({}, rule.options, {
        nestingLevel: nestingLevel,
        index: container.indexOf(rule) + 1, // We don't need the parent name to be set options for chlid.
      });

      delete options.name;
      return options;
    }

    function onProcessStyle(style, rule, sheet) {
      if (rule.type !== 'style') return style;
      var styleRule = rule;
      var container = styleRule.options.parent;
      var options;
      var replaceRef;

      for (var prop in style) {
        var isNested = prop.indexOf('&') !== -1;
        var isNestedConditional = prop[0] === '@';
        if (!isNested && !isNestedConditional) continue;
        options = getOptions(styleRule, container, options);

        if (isNested) {
          var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
          // all nested rules within the sheet.

          if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

          selector = selector.replace(refRegExp, replaceRef);
          var name = styleRule.key + '-' + prop;

          if ('replaceRule' in container) {
            // for backward compatibility
            container.replaceRule(
              name,
              style[prop],
              _extends$2({}, options, {
                selector: selector,
              }),
            );
          } else {
            container.addRule(
              name,
              style[prop],
              _extends$2({}, options, {
                selector: selector,
              }),
            );
          }
        } else if (isNestedConditional) {
          // Place conditional right after the parent rule to ensure right ordering.
          container
            .addRule(prop, {}, options)
            .addRule(styleRule.key, style[prop], {
              selector: styleRule.selector,
            });
        }

        delete style[prop];
      }

      return style;
    }

    return {
      onProcessStyle: onProcessStyle,
    };
  }

  /* eslint-disable no-var, prefer-template */
  var uppercasePattern = /[A-Z]/g;
  var msPattern = /^ms-/;
  var cache$2 = {};

  function toHyphenLower(match) {
    return '-' + match.toLowerCase();
  }

  function hyphenateStyleName(name) {
    if (cache$2.hasOwnProperty(name)) {
      return cache$2[name];
    }

    var hName = name.replace(uppercasePattern, toHyphenLower);
    return (cache$2[name] = msPattern.test(hName) ? '-' + hName : hName);
  }

  var index_cjs = hyphenateStyleName;

  /**
   * Convert camel cased property names to dash separated.
   */

  function convertCase(style) {
    var converted = {};

    for (var prop in style) {
      var key = prop.indexOf('--') === 0 ? prop : index_cjs(prop);
      converted[key] = style[prop];
    }

    if (style.fallbacks) {
      if (Array.isArray(style.fallbacks))
        converted.fallbacks = style.fallbacks.map(convertCase);
      else converted.fallbacks = convertCase(style.fallbacks);
    }

    return converted;
  }
  /**
   * Allow camel cased property names by converting them back to dasherized.
   */

  function camelCase() {
    function onProcessStyle(style) {
      if (Array.isArray(style)) {
        // Handle rules like @font-face, which can have multiple styles in an array
        for (var index = 0; index < style.length; index++) {
          style[index] = convertCase(style[index]);
        }

        return style;
      }

      return convertCase(style);
    }

    function onChangeValue(value, prop, rule) {
      if (prop.indexOf('--') === 0) {
        return value;
      }

      var hyphenatedProp = index_cjs(prop); // There was no camel case in place

      if (prop === hyphenatedProp) return value;
      rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

      return null;
    }

    return {
      onProcessStyle: onProcessStyle,
      onChangeValue: onChangeValue,
    };
  }

  var px = hasCSSTOMSupport && CSS ? CSS.px : 'px';
  var ms = hasCSSTOMSupport && CSS ? CSS.ms : 'ms';
  var percent = hasCSSTOMSupport && CSS ? CSS.percent : '%';
  /**
   * Generated jss-plugin-default-unit CSS property units
   */

  var defaultUnits = {
    // Animation properties
    'animation-delay': ms,
    'animation-duration': ms,
    // Background properties
    'background-position': px,
    'background-position-x': px,
    'background-position-y': px,
    'background-size': px,
    // Border Properties
    border: px,
    'border-bottom': px,
    'border-bottom-left-radius': px,
    'border-bottom-right-radius': px,
    'border-bottom-width': px,
    'border-left': px,
    'border-left-width': px,
    'border-radius': px,
    'border-right': px,
    'border-right-width': px,
    'border-top': px,
    'border-top-left-radius': px,
    'border-top-right-radius': px,
    'border-top-width': px,
    'border-width': px,
    'border-block': px,
    'border-block-end': px,
    'border-block-end-width': px,
    'border-block-start': px,
    'border-block-start-width': px,
    'border-block-width': px,
    'border-inline': px,
    'border-inline-end': px,
    'border-inline-end-width': px,
    'border-inline-start': px,
    'border-inline-start-width': px,
    'border-inline-width': px,
    'border-start-start-radius': px,
    'border-start-end-radius': px,
    'border-end-start-radius': px,
    'border-end-end-radius': px,
    // Margin properties
    margin: px,
    'margin-bottom': px,
    'margin-left': px,
    'margin-right': px,
    'margin-top': px,
    'margin-block': px,
    'margin-block-end': px,
    'margin-block-start': px,
    'margin-inline': px,
    'margin-inline-end': px,
    'margin-inline-start': px,
    // Padding properties
    padding: px,
    'padding-bottom': px,
    'padding-left': px,
    'padding-right': px,
    'padding-top': px,
    'padding-block': px,
    'padding-block-end': px,
    'padding-block-start': px,
    'padding-inline': px,
    'padding-inline-end': px,
    'padding-inline-start': px,
    // Mask properties
    'mask-position-x': px,
    'mask-position-y': px,
    'mask-size': px,
    // Width and height properties
    height: px,
    width: px,
    'min-height': px,
    'max-height': px,
    'min-width': px,
    'max-width': px,
    // Position properties
    bottom: px,
    left: px,
    top: px,
    right: px,
    inset: px,
    'inset-block': px,
    'inset-block-end': px,
    'inset-block-start': px,
    'inset-inline': px,
    'inset-inline-end': px,
    'inset-inline-start': px,
    // Shadow properties
    'box-shadow': px,
    'text-shadow': px,
    // Column properties
    'column-gap': px,
    'column-rule': px,
    'column-rule-width': px,
    'column-width': px,
    // Font and text properties
    'font-size': px,
    'font-size-delta': px,
    'letter-spacing': px,
    'text-decoration-thickness': px,
    'text-indent': px,
    'text-stroke': px,
    'text-stroke-width': px,
    'word-spacing': px,
    // Motion properties
    motion: px,
    'motion-offset': px,
    // Outline properties
    outline: px,
    'outline-offset': px,
    'outline-width': px,
    // Perspective properties
    perspective: px,
    'perspective-origin-x': percent,
    'perspective-origin-y': percent,
    // Transform properties
    'transform-origin': percent,
    'transform-origin-x': percent,
    'transform-origin-y': percent,
    'transform-origin-z': percent,
    // Transition properties
    'transition-delay': ms,
    'transition-duration': ms,
    // Alignment properties
    'vertical-align': px,
    'flex-basis': px,
    // Some random properties
    'shape-margin': px,
    size: px,
    gap: px,
    // Grid properties
    grid: px,
    'grid-gap': px,
    'row-gap': px,
    'grid-row-gap': px,
    'grid-column-gap': px,
    'grid-template-rows': px,
    'grid-template-columns': px,
    'grid-auto-rows': px,
    'grid-auto-columns': px,
    // Not existing properties.
    // Used to avoid issues with jss-plugin-expand integration.
    'box-shadow-x': px,
    'box-shadow-y': px,
    'box-shadow-blur': px,
    'box-shadow-spread': px,
    'font-line-height': px,
    'text-shadow-x': px,
    'text-shadow-y': px,
    'text-shadow-blur': px,
  };

  /**
   * Clones the object and adds a camel cased property version.
   */

  function addCamelCasedVersion(obj) {
    var regExp = /(-[a-z])/g;

    var replace = function replace(str) {
      return str[1].toUpperCase();
    };

    var newObj = {};

    for (var key in obj) {
      newObj[key] = obj[key];
      newObj[key.replace(regExp, replace)] = obj[key];
    }

    return newObj;
  }

  var units = addCamelCasedVersion(defaultUnits);
  /**
   * Recursive deep style passing function
   */

  function iterate(prop, value, options) {
    if (value == null) return value;

    if (Array.isArray(value)) {
      for (var i = 0; i < value.length; i++) {
        value[i] = iterate(prop, value[i], options);
      }
    } else if (typeof value === 'object') {
      if (prop === 'fallbacks') {
        for (var innerProp in value) {
          value[innerProp] = iterate(innerProp, value[innerProp], options);
        }
      } else {
        for (var _innerProp in value) {
          value[_innerProp] = iterate(
            prop + '-' + _innerProp,
            value[_innerProp],
            options,
          );
        }
      } // eslint-disable-next-line no-restricted-globals
    } else if (typeof value === 'number' && isNaN(value) === false) {
      var unit = options[prop] || units[prop]; // Add the unit if available, except for the special case of 0px.

      if (unit && !(value === 0 && unit === px)) {
        return typeof unit === 'function'
          ? unit(value).toString()
          : '' + value + unit;
      }

      return value.toString();
    }

    return value;
  }
  /**
   * Add unit to numeric values.
   */

  function defaultUnit(options) {
    if (options === void 0) {
      options = {};
    }

    var camelCasedOptions = addCamelCasedVersion(options);

    function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;

      for (var prop in style) {
        style[prop] = iterate(prop, style[prop], camelCasedOptions);
      }

      return style;
    }

    function onChangeValue(value, prop) {
      return iterate(prop, value, camelCasedOptions);
    }

    return {
      onProcessStyle: onProcessStyle,
      onChangeValue: onChangeValue,
    };
  }

  var cssVendor_cjs = {};

  var require$$0$1 = /*@__PURE__*/ getAugmentedNamespace(module);

  var toConsumableArray = { exports: {} };

  var arrayWithoutHoles = { exports: {} };

  var arrayLikeToArray = { exports: {} };

  (function (module) {
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;

      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }

    (module.exports = _arrayLikeToArray),
      (module.exports.__esModule = true),
      (module.exports['default'] = module.exports);
  })(arrayLikeToArray);

  (function (module) {
    var arrayLikeToArray$1 = arrayLikeToArray.exports;

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) return arrayLikeToArray$1(arr);
    }

    (module.exports = _arrayWithoutHoles),
      (module.exports.__esModule = true),
      (module.exports['default'] = module.exports);
  })(arrayWithoutHoles);

  var iterableToArray = { exports: {} };

  (function (module) {
    function _iterableToArray(iter) {
      if (
        (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
        iter['@@iterator'] != null
      )
        return Array.from(iter);
    }

    (module.exports = _iterableToArray),
      (module.exports.__esModule = true),
      (module.exports['default'] = module.exports);
  })(iterableToArray);

  var unsupportedIterableToArray = { exports: {} };

  (function (module) {
    var arrayLikeToArray$1 = arrayLikeToArray.exports;

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === 'string') return arrayLikeToArray$1(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === 'Object' && o.constructor) n = o.constructor.name;
      if (n === 'Map' || n === 'Set') return Array.from(o);
      if (
        n === 'Arguments' ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
      )
        return arrayLikeToArray$1(o, minLen);
    }

    (module.exports = _unsupportedIterableToArray),
      (module.exports.__esModule = true),
      (module.exports['default'] = module.exports);
  })(unsupportedIterableToArray);

  var nonIterableSpread = { exports: {} };

  (function (module) {
    function _nonIterableSpread() {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    }

    (module.exports = _nonIterableSpread),
      (module.exports.__esModule = true),
      (module.exports['default'] = module.exports);
  })(nonIterableSpread);

  (function (module) {
    var arrayWithoutHoles$1 = arrayWithoutHoles.exports;

    var iterableToArray$1 = iterableToArray.exports;

    var unsupportedIterableToArray$1 = unsupportedIterableToArray.exports;

    var nonIterableSpread$1 = nonIterableSpread.exports;

    function _toConsumableArray(arr) {
      return (
        arrayWithoutHoles$1(arr) ||
        iterableToArray$1(arr) ||
        unsupportedIterableToArray$1(arr) ||
        nonIterableSpread$1()
      );
    }

    (module.exports = _toConsumableArray),
      (module.exports.__esModule = true),
      (module.exports['default'] = module.exports);
  })(toConsumableArray);

  Object.defineProperty(cssVendor_cjs, '__esModule', { value: true });

  function _interopDefault$1(ex) {
    return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
  }

  var isInBrowser = _interopDefault$1(require$$0$1);
  var _toConsumableArray$1 = _interopDefault$1(toConsumableArray.exports);

  // Export javascript style and css style vendor prefixes.
  var js = '';
  var css = '';
  var vendor = '';
  var browser = '';
  var isTouch = isInBrowser && 'ontouchstart' in document.documentElement; // We should not do anything if required serverside.

  if (isInBrowser) {
    // Order matters. We need to check Webkit the last one because
    // other vendors use to add Webkit prefixes to some properties
    var jsCssMap = {
      Moz: '-moz-',
      ms: '-ms-',
      O: '-o-',
      Webkit: '-webkit-',
    };

    var _document$createEleme = document.createElement('p'),
      style$1 = _document$createEleme.style;

    var testProp = 'Transform';

    for (var key in jsCssMap) {
      if (key + testProp in style$1) {
        js = key;
        css = jsCssMap[key];
        break;
      }
    } // Correctly detect the Edge browser.

    if (js === 'Webkit' && 'msHyphens' in style$1) {
      js = 'ms';
      css = jsCssMap.ms;
      browser = 'edge';
    } // Correctly detect the Safari browser.

    if (js === 'Webkit' && '-apple-trailing-word' in style$1) {
      vendor = 'apple';
    }
  }
  /**
   * Vendor prefix string for the current browser.
   *
   * @type {{js: String, css: String, vendor: String, browser: String}}
   * @api public
   */

  var prefix = {
    js: js,
    css: css,
    vendor: vendor,
    browser: browser,
    isTouch: isTouch,
  };

  /**
   * Test if a keyframe at-rule should be prefixed or not
   *
   * @param {String} vendor prefix string for the current browser.
   * @return {String}
   * @api public
   */

  function supportedKeyframes(key) {
    // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
    if (key[1] === '-') return key; // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
    // https://caniuse.com/#search=keyframes

    if (prefix.js === 'ms') return key;
    return '@' + prefix.css + 'keyframes' + key.substr(10);
  }

  // https://caniuse.com/#search=appearance

  var appearence = {
    noPrefill: ['appearance'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'appearance') return false;
      if (prefix.js === 'ms') return '-webkit-' + prop;
      return prefix.css + prop;
    },
  };

  // https://caniuse.com/#search=color-adjust

  var colorAdjust = {
    noPrefill: ['color-adjust'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'color-adjust') return false;
      if (prefix.js === 'Webkit') return prefix.css + 'print-' + prop;
      return prop;
    },
  };

  var regExp = /[-\s]+(.)?/g;
  /**
   * Replaces the letter with the capital letter
   *
   * @param {String} match
   * @param {String} c
   * @return {String}
   * @api private
   */

  function toUpper(match, c) {
    return c ? c.toUpperCase() : '';
  }
  /**
   * Convert dash separated strings to camel-cased.
   *
   * @param {String} str
   * @return {String}
   * @api private
   */

  function camelize(str) {
    return str.replace(regExp, toUpper);
  }

  /**
   * Convert dash separated strings to pascal cased.
   *
   * @param {String} str
   * @return {String}
   * @api private
   */

  function pascalize(str) {
    return camelize('-' + str);
  }

  // but we can use a longhand property instead.
  // https://caniuse.com/#search=mask

  var mask = {
    noPrefill: ['mask'],
    supportedProperty: function supportedProperty(prop, style) {
      if (!/^mask/.test(prop)) return false;

      if (prefix.js === 'Webkit') {
        var longhand = 'mask-image';

        if (camelize(longhand) in style) {
          return prop;
        }

        if (prefix.js + pascalize(longhand) in style) {
          return prefix.css + prop;
        }
      }

      return prop;
    },
  };

  // https://caniuse.com/#search=text-orientation

  var textOrientation = {
    noPrefill: ['text-orientation'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'text-orientation') return false;

      if (prefix.vendor === 'apple' && !prefix.isTouch) {
        return prefix.css + prop;
      }

      return prop;
    },
  };

  // https://caniuse.com/#search=transform

  var transform$1 = {
    noPrefill: ['transform'],
    supportedProperty: function supportedProperty(prop, style, options) {
      if (prop !== 'transform') return false;

      if (options.transform) {
        return prop;
      }

      return prefix.css + prop;
    },
  };

  // https://caniuse.com/#search=transition

  var transition = {
    noPrefill: ['transition'],
    supportedProperty: function supportedProperty(prop, style, options) {
      if (prop !== 'transition') return false;

      if (options.transition) {
        return prop;
      }

      return prefix.css + prop;
    },
  };

  // https://caniuse.com/#search=writing-mode

  var writingMode = {
    noPrefill: ['writing-mode'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'writing-mode') return false;

      if (
        prefix.js === 'Webkit' ||
        (prefix.js === 'ms' && prefix.browser !== 'edge')
      ) {
        return prefix.css + prop;
      }

      return prop;
    },
  };

  // https://caniuse.com/#search=user-select

  var userSelect = {
    noPrefill: ['user-select'],
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'user-select') return false;

      if (
        prefix.js === 'Moz' ||
        prefix.js === 'ms' ||
        prefix.vendor === 'apple'
      ) {
        return prefix.css + prop;
      }

      return prop;
    },
  };

  // https://caniuse.com/#search=multicolumn
  // https://github.com/postcss/autoprefixer/issues/491
  // https://github.com/postcss/autoprefixer/issues/177

  var breakPropsOld = {
    supportedProperty: function supportedProperty(prop, style) {
      if (!/^break-/.test(prop)) return false;

      if (prefix.js === 'Webkit') {
        var jsProp = 'WebkitColumn' + pascalize(prop);
        return jsProp in style ? prefix.css + 'column-' + prop : false;
      }

      if (prefix.js === 'Moz') {
        var _jsProp = 'page' + pascalize(prop);

        return _jsProp in style ? 'page-' + prop : false;
      }

      return false;
    },
  };

  // See https://github.com/postcss/autoprefixer/issues/324.

  var inlineLogicalOld = {
    supportedProperty: function supportedProperty(prop, style) {
      if (!/^(border|margin|padding)-inline/.test(prop)) return false;
      if (prefix.js === 'Moz') return prop;
      var newProp = prop.replace('-inline', '');
      return prefix.js + pascalize(newProp) in style
        ? prefix.css + newProp
        : false;
    },
  };

  // Camelization is required because we can't test using.
  // CSS syntax for e.g. in FF.

  var unprefixed = {
    supportedProperty: function supportedProperty(prop, style) {
      return camelize(prop) in style ? prop : false;
    },
  };

  var prefixed = {
    supportedProperty: function supportedProperty(prop, style) {
      var pascalized = pascalize(prop); // Return custom CSS variable without prefixing.

      if (prop[0] === '-') return prop; // Return already prefixed value without prefixing.

      if (prop[0] === '-' && prop[1] === '-') return prop;
      if (prefix.js + pascalized in style) return prefix.css + prop; // Try webkit fallback.

      if (prefix.js !== 'Webkit' && 'Webkit' + pascalized in style)
        return '-webkit-' + prop;
      return false;
    },
  };

  // https://caniuse.com/#search=scroll-snap

  var scrollSnap = {
    supportedProperty: function supportedProperty(prop) {
      if (prop.substring(0, 11) !== 'scroll-snap') return false;

      if (prefix.js === 'ms') {
        return '' + prefix.css + prop;
      }

      return prop;
    },
  };

  // https://caniuse.com/#search=overscroll-behavior

  var overscrollBehavior = {
    supportedProperty: function supportedProperty(prop) {
      if (prop !== 'overscroll-behavior') return false;

      if (prefix.js === 'ms') {
        return prefix.css + 'scroll-chaining';
      }

      return prop;
    },
  };

  var propMap = {
    'flex-grow': 'flex-positive',
    'flex-shrink': 'flex-negative',
    'flex-basis': 'flex-preferred-size',
    'justify-content': 'flex-pack',
    order: 'flex-order',
    'align-items': 'flex-align',
    'align-content': 'flex-line-pack', // 'align-self' is handled by 'align-self' plugin.
  }; // Support old flex spec from 2012.

  var flex2012 = {
    supportedProperty: function supportedProperty(prop, style) {
      var newProp = propMap[prop];
      if (!newProp) return false;
      return prefix.js + pascalize(newProp) in style
        ? prefix.css + newProp
        : false;
    },
  };

  var propMap$1 = {
    flex: 'box-flex',
    'flex-grow': 'box-flex',
    'flex-direction': ['box-orient', 'box-direction'],
    order: 'box-ordinal-group',
    'align-items': 'box-align',
    'flex-flow': ['box-orient', 'box-direction'],
    'justify-content': 'box-pack',
  };
  var propKeys = Object.keys(propMap$1);

  var prefixCss = function prefixCss(p) {
    return prefix.css + p;
  }; // Support old flex spec from 2009.

  var flex2009 = {
    supportedProperty: function supportedProperty(prop, style, _ref) {
      var multiple = _ref.multiple;

      if (propKeys.indexOf(prop) > -1) {
        var newProp = propMap$1[prop];

        if (!Array.isArray(newProp)) {
          return prefix.js + pascalize(newProp) in style
            ? prefix.css + newProp
            : false;
        }

        if (!multiple) return false;

        for (var i = 0; i < newProp.length; i++) {
          if (!(prefix.js + pascalize(newProp[0]) in style)) {
            return false;
          }
        }

        return newProp.map(prefixCss);
      }

      return false;
    },
  };

  // plugins = [
  //   ...plugins,
  //    breakPropsOld,
  //    inlineLogicalOld,
  //    unprefixed,
  //    prefixed,
  //    scrollSnap,
  //    flex2012,
  //    flex2009
  // ]
  // Plugins without 'noPrefill' value, going last.
  // 'flex-*' plugins should be at the bottom.
  // 'flex2009' going after 'flex2012'.
  // 'prefixed' going after 'unprefixed'

  var plugins = [
    appearence,
    colorAdjust,
    mask,
    textOrientation,
    transform$1,
    transition,
    writingMode,
    userSelect,
    breakPropsOld,
    inlineLogicalOld,
    unprefixed,
    prefixed,
    scrollSnap,
    overscrollBehavior,
    flex2012,
    flex2009,
  ];
  var propertyDetectors = plugins
    .filter(function (p) {
      return p.supportedProperty;
    })
    .map(function (p) {
      return p.supportedProperty;
    });
  var noPrefill = plugins
    .filter(function (p) {
      return p.noPrefill;
    })
    .reduce(function (a, p) {
      a.push.apply(a, _toConsumableArray$1(p.noPrefill));
      return a;
    }, []);

  var el;
  var cache = {};

  if (isInBrowser) {
    el = document.createElement('p'); // We test every property on vendor prefix requirement.
    // Once tested, result is cached. It gives us up to 70% perf boost.
    // http://jsperf.com/element-style-object-access-vs-plain-object
    //
    // Prefill cache with known css properties to reduce amount of
    // properties we need to feature test at runtime.
    // http://davidwalsh.name/vendor-prefix

    var computed = window.getComputedStyle(document.documentElement, '');

    for (var key$1 in computed) {
      // eslint-disable-next-line no-restricted-globals
      if (!isNaN(key$1)) cache[computed[key$1]] = computed[key$1];
    } // Properties that cannot be correctly detected using the
    // cache prefill method.

    noPrefill.forEach(function (x) {
      return delete cache[x];
    });
  }
  /**
   * Test if a property is supported, returns supported property with vendor
   * prefix if required. Returns `false` if not supported.
   *
   * @param {String} prop dash separated
   * @param {Object} [options]
   * @return {String|Boolean}
   * @api public
   */

  function supportedProperty(prop, options) {
    if (options === void 0) {
      options = {};
    }

    // For server-side rendering.
    if (!el) return prop; // Remove cache for benchmark tests or return property from the cache.

    if (cache[prop] != null) {
      return cache[prop];
    } // Check if 'transition' or 'transform' natively supported in browser.

    if (prop === 'transition' || prop === 'transform') {
      options[prop] = prop in el.style;
    } // Find a plugin for current prefix property.

    for (var i = 0; i < propertyDetectors.length; i++) {
      cache[prop] = propertyDetectors[i](prop, el.style, options); // Break loop, if value found.

      if (cache[prop]) break;
    } // Reset styles for current property.
    // Firefox can even throw an error for invalid properties, e.g., "0".

    try {
      el.style[prop] = '';
    } catch (err) {
      return false;
    }

    return cache[prop];
  }

  var cache$1 = {};
  var transitionProperties = {
    transition: 1,
    'transition-property': 1,
    '-webkit-transition': 1,
    '-webkit-transition-property': 1,
  };
  var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
  var el$1;
  /**
   * Returns prefixed value transition/transform if needed.
   *
   * @param {String} match
   * @param {String} p1
   * @param {String} p2
   * @return {String}
   * @api private
   */

  function prefixTransitionCallback(match, p1, p2) {
    if (p1 === 'var') return 'var';
    if (p1 === 'all') return 'all';
    if (p2 === 'all') return ', all';
    var prefixedValue = p1
      ? supportedProperty(p1)
      : ', ' + supportedProperty(p2);
    if (!prefixedValue) return p1 || p2;
    return prefixedValue;
  }

  if (isInBrowser) el$1 = document.createElement('p');
  /**
   * Returns prefixed value if needed. Returns `false` if value is not supported.
   *
   * @param {String} property
   * @param {String} value
   * @return {String|Boolean}
   * @api public
   */

  function supportedValue(property, value) {
    // For server-side rendering.
    var prefixedValue = value;
    if (!el$1 || property === 'content') return value; // It is a string or a number as a string like '1'.
    // We want only prefixable values here.
    // eslint-disable-next-line no-restricted-globals

    if (
      typeof prefixedValue !== 'string' ||
      !isNaN(parseInt(prefixedValue, 10))
    ) {
      return prefixedValue;
    } // Create cache key for current value.

    var cacheKey = property + prefixedValue; // Remove cache for benchmark tests or return value from cache.

    if (cache$1[cacheKey] != null) {
      return cache$1[cacheKey];
    } // IE can even throw an error in some cases, for e.g. style.content = 'bar'.

    try {
      // Test value as it is.
      el$1.style[property] = prefixedValue;
    } catch (err) {
      // Return false if value not supported.
      cache$1[cacheKey] = false;
      return false;
    } // If 'transition' or 'transition-property' property.

    if (transitionProperties[property]) {
      prefixedValue = prefixedValue.replace(
        transPropsRegExp,
        prefixTransitionCallback,
      );
    } else if (el$1.style[property] === '') {
      // Value with a vendor prefix.
      prefixedValue = prefix.css + prefixedValue; // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.

      if (prefixedValue === '-ms-flex') el$1.style[property] = '-ms-flexbox'; // Test prefixed value.

      el$1.style[property] = prefixedValue; // Return false if value not supported.

      if (el$1.style[property] === '') {
        cache$1[cacheKey] = false;
        return false;
      }
    } // Reset styles for current property.

    el$1.style[property] = ''; // Write current value to cache.

    cache$1[cacheKey] = prefixedValue;
    return cache$1[cacheKey];
  }

  cssVendor_cjs.prefix = prefix;
  var supportedKeyframes_1 = (cssVendor_cjs.supportedKeyframes =
    supportedKeyframes);
  var supportedProperty_1 = (cssVendor_cjs.supportedProperty =
    supportedProperty);
  var supportedValue_1 = (cssVendor_cjs.supportedValue = supportedValue);

  /**
   * Add vendor prefix to a property name when needed.
   */

  function jssVendorPrefixer() {
    function onProcessRule(rule) {
      if (rule.type === 'keyframes') {
        var atRule = rule;
        atRule.at = supportedKeyframes_1(atRule.at);
      }
    }

    function prefixStyle(style) {
      for (var prop in style) {
        var value = style[prop];

        if (prop === 'fallbacks' && Array.isArray(value)) {
          style[prop] = value.map(prefixStyle);
          continue;
        }

        var changeProp = false;
        var supportedProp = supportedProperty_1(prop);
        if (supportedProp && supportedProp !== prop) changeProp = true;
        var changeValue = false;
        var supportedValue$1 = supportedValue_1(
          supportedProp,
          toCssValue(value),
        );
        if (supportedValue$1 && supportedValue$1 !== value) changeValue = true;

        if (changeProp || changeValue) {
          if (changeProp) delete style[prop];
          style[supportedProp || prop] = supportedValue$1 || value;
        }
      }

      return style;
    }

    function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;
      return prefixStyle(style);
    }

    function onChangeValue(value, prop) {
      return supportedValue_1(prop, toCssValue(value)) || value;
    }

    return {
      onProcessRule: onProcessRule,
      onProcessStyle: onProcessStyle,
      onChangeValue: onChangeValue,
    };
  }

  /**
   * Sort props by length.
   */
  function jssPropsSort() {
    var sort = function sort(prop0, prop1) {
      if (prop0.length === prop1.length) {
        return prop0 > prop1 ? 1 : -1;
      }

      return prop0.length - prop1.length;
    };

    return {
      onProcessStyle: function onProcessStyle(style, rule) {
        if (rule.type !== 'style') return style;
        var newStyle = {};
        var props = Object.keys(style).sort(sort);

        for (var i = 0; i < props.length; i++) {
          newStyle[props[i]] = style[props[i]];
        }

        return newStyle;
      },
    };
  }

  function jssPreset() {
    return {
      plugins: [
        functions(),
        jssGlobal(),
        jssNested(),
        camelCase(),
        defaultUnit(), // Disable the vendor prefixer server-side, it does nothing.
        // This way, we can get a performance boost.
        // In the documentation, we are using `autoprefixer` to solve this problem.
        typeof window === 'undefined' ? null : jssVendorPrefixer(),
        jssPropsSort(),
      ],
    };
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function mergeClasses() {
    var options =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var baseClasses = options.baseClasses,
      newClasses = options.newClasses;
    options.Component;

    if (!newClasses) {
      return baseClasses;
    }

    var nextClasses = _extends$2({}, baseClasses);

    Object.keys(newClasses).forEach(function (key) {
      if (newClasses[key]) {
        nextClasses[key] = ''
          .concat(baseClasses[key], ' ')
          .concat(newClasses[key]);
      }
    });
    return nextClasses;
  }

  // Used https://github.com/thinkloop/multi-key-cache as inspiration
  var multiKeyStore = {
    set: function set(cache, key1, key2, value) {
      var subCache = cache.get(key1);

      if (!subCache) {
        subCache = new Map();
        cache.set(key1, subCache);
      }

      subCache.set(key2, value);
    },
    get: function get(cache, key1, key2) {
      var subCache = cache.get(key1);
      return subCache ? subCache.get(key2) : undefined;
    },
    delete: function _delete(cache, key1, key2) {
      var subCache = cache.get(key1);
      subCache.delete(key2);
    },
  };

  var ThemeContext = React$3.createContext(null);

  function useTheme$1() {
    var theme = React$3.useContext(ThemeContext);

    return theme;
  }

  var jss = createJss(jssPreset()); // Use a singleton or the provided one by the context.
  //
  // The counter-based approach doesn't tolerate any mistake.
  // It's much safer to use the same counter everywhere.

  var generateClassName = createGenerateClassName(); // Exported for test purposes

  var sheetsManager = new Map();
  var defaultOptions = {
    disableGeneration: false,
    generateClassName: generateClassName,
    jss: jss,
    sheetsCache: null,
    sheetsManager: sheetsManager,
    sheetsRegistry: null,
  };
  var StylesContext = React$3.createContext(defaultOptions);

  /* eslint-disable import/prefer-default-export */
  // Global index counter to preserve source order.
  // We create the style sheet during the creation of the component,
  // children are handled after the parents, so the order of style elements would be parent->child.
  // It is a problem though when a parent passes a className
  // which needs to override any child's styles.
  // StyleSheet of the child has a higher specificity, because of the source order.
  // So our solution is to render sheets them in the reverse order child->sheet, so
  // that parent has a higher specificity.
  var indexCounter = -1e9;
  function increment() {
    indexCounter += 1;

    return indexCounter;
  }

  function _typeof(obj) {
    '@babel/helpers - typeof';

    return (
      (_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? function (obj) {
              return typeof obj;
            }
          : function (obj) {
              return obj &&
                'function' == typeof Symbol &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj;
            }),
      _typeof(obj)
    );
  }

  // We use the same empty object to ref count the styles that don't need a theme object.
  var noopTheme = {};

  function getStylesCreator(stylesOrCreator) {
    var themingEnabled = typeof stylesOrCreator === 'function';

    return {
      create: function create(theme, name) {
        var styles;

        try {
          styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;
        } catch (err) {
          throw err;
        }

        if (!name || !theme.overrides || !theme.overrides[name]) {
          return styles;
        }

        var overrides = theme.overrides[name];

        var stylesWithOverrides = _extends$2({}, styles);

        Object.keys(overrides).forEach(function (key) {
          stylesWithOverrides[key] = utils$1.deepmerge(
            stylesWithOverrides[key],
            overrides[key],
          );
        });
        return stylesWithOverrides;
      },
      options: {},
    };
  }

  function getClasses(_ref, classes, Component) {
    var state = _ref.state,
      stylesOptions = _ref.stylesOptions;

    if (stylesOptions.disableGeneration) {
      return classes || {};
    }

    if (!state.cacheClasses) {
      state.cacheClasses = {
        // Cache for the finalized classes value.
        value: null,
        // Cache for the last used classes prop pointer.
        lastProp: null,
        // Cache for the last used rendered classes pointer.
        lastJSS: {},
      };
    } // Tracks if either the rendered classes or classes prop has changed,
    // requiring the generation of a new finalized classes object.

    var generate = false;

    if (state.classes !== state.cacheClasses.lastJSS) {
      state.cacheClasses.lastJSS = state.classes;
      generate = true;
    }

    if (classes !== state.cacheClasses.lastProp) {
      state.cacheClasses.lastProp = classes;
      generate = true;
    }

    if (generate) {
      state.cacheClasses.value = mergeClasses({
        baseClasses: state.cacheClasses.lastJSS,
        newClasses: classes,
        Component: Component,
      });
    }

    return state.cacheClasses.value;
  }

  function attach(_ref2, props) {
    var state = _ref2.state,
      theme = _ref2.theme,
      stylesOptions = _ref2.stylesOptions,
      stylesCreator = _ref2.stylesCreator,
      name = _ref2.name;

    if (stylesOptions.disableGeneration) {
      return;
    }

    var sheetManager = multiKeyStore.get(
      stylesOptions.sheetsManager,
      stylesCreator,
      theme,
    );

    if (!sheetManager) {
      sheetManager = {
        refs: 0,
        staticSheet: null,
        dynamicStyles: null,
      };
      multiKeyStore.set(
        stylesOptions.sheetsManager,
        stylesCreator,
        theme,
        sheetManager,
      );
    }

    var options = _extends$2({}, stylesCreator.options, stylesOptions, {
      theme: theme,
      flip:
        typeof stylesOptions.flip === 'boolean'
          ? stylesOptions.flip
          : theme.direction === 'rtl',
    });

    options.generateId =
      options.serverGenerateClassName || options.generateClassName;
    var sheetsRegistry = stylesOptions.sheetsRegistry;

    if (sheetManager.refs === 0) {
      var staticSheet;

      if (stylesOptions.sheetsCache) {
        staticSheet = multiKeyStore.get(
          stylesOptions.sheetsCache,
          stylesCreator,
          theme,
        );
      }

      var styles = stylesCreator.create(theme, name);

      if (!staticSheet) {
        staticSheet = stylesOptions.jss.createStyleSheet(
          styles,
          _extends$2(
            {
              link: false,
            },
            options,
          ),
        );
        staticSheet.attach();

        if (stylesOptions.sheetsCache) {
          multiKeyStore.set(
            stylesOptions.sheetsCache,
            stylesCreator,
            theme,
            staticSheet,
          );
        }
      }

      if (sheetsRegistry) {
        sheetsRegistry.add(staticSheet);
      }

      sheetManager.staticSheet = staticSheet;
      sheetManager.dynamicStyles = getDynamicStyles(styles);
    }

    if (sheetManager.dynamicStyles) {
      var dynamicSheet = stylesOptions.jss.createStyleSheet(
        sheetManager.dynamicStyles,
        _extends$2(
          {
            link: true,
          },
          options,
        ),
      );
      dynamicSheet.update(props);
      dynamicSheet.attach();
      state.dynamicSheet = dynamicSheet;
      state.classes = mergeClasses({
        baseClasses: sheetManager.staticSheet.classes,
        newClasses: dynamicSheet.classes,
      });

      if (sheetsRegistry) {
        sheetsRegistry.add(dynamicSheet);
      }
    } else {
      state.classes = sheetManager.staticSheet.classes;
    }

    sheetManager.refs += 1;
  }

  function update$1(_ref3, props) {
    var state = _ref3.state;

    if (state.dynamicSheet) {
      state.dynamicSheet.update(props);
    }
  }

  function detach(_ref4) {
    var state = _ref4.state,
      theme = _ref4.theme,
      stylesOptions = _ref4.stylesOptions,
      stylesCreator = _ref4.stylesCreator;

    if (stylesOptions.disableGeneration) {
      return;
    }

    var sheetManager = multiKeyStore.get(
      stylesOptions.sheetsManager,
      stylesCreator,
      theme,
    );
    sheetManager.refs -= 1;
    var sheetsRegistry = stylesOptions.sheetsRegistry;

    if (sheetManager.refs === 0) {
      multiKeyStore.delete(stylesOptions.sheetsManager, stylesCreator, theme);
      stylesOptions.jss.removeStyleSheet(sheetManager.staticSheet);

      if (sheetsRegistry) {
        sheetsRegistry.remove(sheetManager.staticSheet);
      }
    }

    if (state.dynamicSheet) {
      stylesOptions.jss.removeStyleSheet(state.dynamicSheet);

      if (sheetsRegistry) {
        sheetsRegistry.remove(state.dynamicSheet);
      }
    }
  }

  function useSynchronousEffect(func, values) {
    var key = React$3.useRef([]);
    var output; // Store "generation" key. Just returns a new object every time

    var currentKey = React$3.useMemo(function () {
      return {};
    }, values); // eslint-disable-line react-hooks/exhaustive-deps
    // "the first render", or "memo dropped the value"

    if (key.current !== currentKey) {
      key.current = currentKey;
      output = func();
    }

    React$3.useEffect(
      function () {
        return function () {
          if (output) {
            output();
          }
        };
      },
      [currentKey], // eslint-disable-line react-hooks/exhaustive-deps
    );
  }

  function makeStyles$1(stylesOrCreator) {
    var options =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var name = options.name,
      classNamePrefixOption = options.classNamePrefix,
      Component = options.Component,
      _options$defaultTheme = options.defaultTheme,
      defaultTheme =
        _options$defaultTheme === void 0 ? noopTheme : _options$defaultTheme,
      stylesOptions2 = _objectWithoutProperties(options, [
        'name',
        'classNamePrefix',
        'Component',
        'defaultTheme',
      ]);

    var stylesCreator = getStylesCreator(stylesOrCreator);
    var classNamePrefix = name || classNamePrefixOption || 'makeStyles';
    stylesCreator.options = {
      index: increment(),
      name: name,
      meta: classNamePrefix,
      classNamePrefix: classNamePrefix,
    };

    var useStyles = function useStyles() {
      var props =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var theme = useTheme$1() || defaultTheme;

      var stylesOptions = _extends$2(
        {},
        React$3.useContext(StylesContext),
        stylesOptions2,
      );

      var instance = React$3.useRef();
      var shouldUpdate = React$3.useRef();
      useSynchronousEffect(
        function () {
          var current = {
            name: name,
            state: {},
            stylesCreator: stylesCreator,
            stylesOptions: stylesOptions,
            theme: theme,
          };
          attach(current, props);
          shouldUpdate.current = false;
          instance.current = current;
          return function () {
            detach(current);
          };
        },
        [theme, stylesCreator],
      );
      React$3.useEffect(function () {
        if (shouldUpdate.current) {
          update$1(instance.current, props);
        }

        shouldUpdate.current = true;
      });
      var classes = getClasses(instance.current, props.classes, Component);

      return classes;
    };

    return useStyles;
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function toVal(mix) {
    var k,
      y,
      str = '';

    if (typeof mix === 'string' || typeof mix === 'number') {
      str += mix;
    } else if (typeof mix === 'object') {
      if (Array.isArray(mix)) {
        for (k = 0; k < mix.length; k++) {
          if (mix[k]) {
            if ((y = toVal(mix[k]))) {
              str && (str += ' ');
              str += y;
            }
          }
        }
      } else {
        for (k in mix) {
          if (mix[k]) {
            str && (str += ' ');
            str += k;
          }
        }
      }
    }

    return str;
  }

  function clsx() {
    var i = 0,
      tmp,
      x,
      str = '';
    while (i < arguments.length) {
      if ((tmp = arguments[i++])) {
        if ((x = toVal(tmp))) {
          str && (str += ' ');
          str += x;
        }
      }
    }
    return str;
  }

  var reactIs = reactIs$1.exports;

  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
  var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true,
  };
  var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true,
  };
  var FORWARD_REF_STATICS = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
  };
  var MEMO_STATICS = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true,
  };
  var TYPE_STATICS = {};
  TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
  TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

  function getStatics(component) {
    // React v16.11 and below
    if (reactIs.isMemo(component)) {
      return MEMO_STATICS;
    } // React v16.12 and above

    return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
  }

  var defineProperty$2 = Object.defineProperty;
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var getPrototypeOf = Object.getPrototypeOf;
  var objectPrototype = Object.prototype;
  function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
      // don't hoist over string (html) components
      if (objectPrototype) {
        var inheritedComponent = getPrototypeOf(sourceComponent);

        if (inheritedComponent && inheritedComponent !== objectPrototype) {
          hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
        }
      }

      var keys = getOwnPropertyNames(sourceComponent);

      if (getOwnPropertySymbols) {
        keys = keys.concat(getOwnPropertySymbols(sourceComponent));
      }

      var targetStatics = getStatics(targetComponent);
      var sourceStatics = getStatics(sourceComponent);

      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];

        if (
          !KNOWN_STATICS[key] &&
          !(blacklist && blacklist[key]) &&
          !(sourceStatics && sourceStatics[key]) &&
          !(targetStatics && targetStatics[key])
        ) {
          var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

          try {
            // Avoid failures from read-only properties
            defineProperty$2(targetComponent, key, descriptor);
          } catch (e) {}
        }
      }
    }

    return targetComponent;
  }

  var hoistNonReactStatics_cjs = hoistNonReactStatics;

  function omit$1(input, fields) {
    var output = {};
    Object.keys(input).forEach(function (prop) {
      if (fields.indexOf(prop) === -1) {
        output[prop] = input[prop];
      }
    });
    return output;
  } // styled-components's API removes the mapping between components and styles.
  // Using components as a low-level styling construct can be simpler.

  function styled$2(Component) {
    var componentCreator = function componentCreator(style) {
      var options =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var name = options.name,
        stylesOptions = _objectWithoutProperties(options, ['name']);

      var classNamePrefix = name;

      var stylesOrCreator =
        typeof style === 'function'
          ? function (theme) {
              return {
                root: function root(props) {
                  return style(
                    _extends$2(
                      {
                        theme: theme,
                      },
                      props,
                    ),
                  );
                },
              };
            }
          : {
              root: style,
            };
      var useStyles = makeStyles$1(
        stylesOrCreator,
        _extends$2(
          {
            Component: Component,
            name: name || Component.displayName,
            classNamePrefix: classNamePrefix,
          },
          stylesOptions,
        ),
      );
      var filterProps;

      if (style.filterProps) {
        filterProps = style.filterProps;
        delete style.filterProps;
      }
      /* eslint-disable react/forbid-foreign-prop-types */

      if (style.propTypes) {
        delete style.propTypes;
      }
      /* eslint-enable react/forbid-foreign-prop-types */

      var StyledComponent = /*#__PURE__*/ React$3.forwardRef(
        function StyledComponent(props, ref) {
          var children = props.children,
            classNameProp = props.className,
            clone = props.clone,
            ComponentProp = props.component,
            other = _objectWithoutProperties(props, [
              'children',
              'className',
              'clone',
              'component',
            ]);

          var classes = useStyles(props);
          var className = clsx(classes.root, classNameProp);
          var spread = other;

          if (filterProps) {
            spread = omit$1(spread, filterProps);
          }

          if (clone) {
            return /*#__PURE__*/ React$3.cloneElement(
              children,
              _extends$2(
                {
                  className: clsx(children.props.className, className),
                },
                spread,
              ),
            );
          }

          if (typeof children === 'function') {
            return children(
              _extends$2(
                {
                  className: className,
                },
                spread,
              ),
            );
          }

          var FinalComponent = ComponentProp || Component;
          return /*#__PURE__*/ React$3.createElement(
            FinalComponent,
            _extends$2(
              {
                ref: ref,
                className: className,
              },
              spread,
            ),
            children,
          );
        },
      );

      hoistNonReactStatics_cjs(StyledComponent, Component);
      return StyledComponent;
    };

    return componentCreator;
  }

  // It does not modify the component passed to it;
  // instead, it returns a new component, with a `classes` property.

  var withStyles$1 = function withStyles(stylesOrCreator) {
    var options =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return function (Component) {
      var defaultTheme = options.defaultTheme,
        _options$withTheme = options.withTheme,
        withTheme = _options$withTheme === void 0 ? false : _options$withTheme,
        name = options.name,
        stylesOptions = _objectWithoutProperties(options, [
          'defaultTheme',
          'withTheme',
          'name',
        ]);

      var classNamePrefix = name;

      var useStyles = makeStyles$1(
        stylesOrCreator,
        _extends$2(
          {
            defaultTheme: defaultTheme,
            Component: Component,
            name: name || Component.displayName,
            classNamePrefix: classNamePrefix,
          },
          stylesOptions,
        ),
      );
      var WithStyles = /*#__PURE__*/ React$3.forwardRef(function WithStyles(
        props,
        ref,
      ) {
        props.classes;
        var innerRef = props.innerRef,
          other = _objectWithoutProperties(props, ['classes', 'innerRef']); // The wrapper receives only user supplied props, which could be a subset of
        // the actual props Component might receive due to merging with defaultProps.
        // So copying it here would give us the same result in the wrapper as well.

        var classes = useStyles(_extends$2({}, Component.defaultProps, props));
        var theme;
        var more = other;

        if (typeof name === 'string' || withTheme) {
          // name and withTheme are invariant in the outer scope
          // eslint-disable-next-line react-hooks/rules-of-hooks
          theme = useTheme$1() || defaultTheme;

          if (name) {
            more = getThemeProps({
              theme: theme,
              name: name,
              props: other,
            });
          } // Provide the theme to the wrapped component.
          // So we don't have to use the `withTheme()` Higher-order Component.

          if (withTheme && !more.theme) {
            more.theme = theme;
          }
        }

        return /*#__PURE__*/ React$3.createElement(
          Component,
          _extends$2(
            {
              ref: innerRef || ref,
              classes: classes,
            },
            more,
          ),
        );
      });

      hoistNonReactStatics_cjs(WithStyles, Component);

      return WithStyles;
    };
  };

  var withStylesWithoutDefault = withStyles$1;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

  function createBreakpoints(breakpoints) {
    var _breakpoints$values = breakpoints.values,
      values =
        _breakpoints$values === void 0
          ? {
              xs: 0,
              sm: 600,
              md: 960,
              lg: 1280,
              xl: 1920,
            }
          : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
      other = _objectWithoutProperties(breakpoints, ['values', 'unit', 'step']);

    function up(key) {
      var value = typeof values[key] === 'number' ? values[key] : key;
      return '@media (min-width:'.concat(value).concat(unit, ')');
    }

    function down(key) {
      var endIndex = keys.indexOf(key) + 1;
      var upperbound = values[keys[endIndex]];

      if (endIndex === keys.length) {
        // xl down applies to all sizes
        return up('xs');
      }

      var value =
        typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
      return '@media (max-width:'.concat(value - step / 100).concat(unit, ')');
    }

    function between(start, end) {
      var endIndex = keys.indexOf(end);

      if (endIndex === keys.length - 1) {
        return up(start);
      }

      return (
        '@media (min-width:'
          .concat(typeof values[start] === 'number' ? values[start] : start)
          .concat(unit, ') and ') +
        '(max-width:'
          .concat(
            (endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number'
              ? values[keys[endIndex + 1]]
              : end) -
              step / 100,
          )
          .concat(unit, ')')
      );
    }

    function only(key) {
      return between(key, key);
    }

    function width(key) {
      return values[key];
    }

    return _extends$2(
      {
        keys: keys,
        values: values,
        up: up,
        down: down,
        between: between,
        only: only,
        width: width,
      },
      other,
    );
  }

  function createMixins(breakpoints, spacing, mixins) {
    var _toolbar;

    return _extends$2(
      {
        gutters: function gutters() {
          var styles =
            arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : {};
          console.warn(
            [
              'Material-UI: theme.mixins.gutters() is deprecated.',
              'You can use the source of the mixin directly:',
              "\n      paddingLeft: theme.spacing(2),\n      paddingRight: theme.spacing(2),\n      [theme.breakpoints.up('sm')]: {\n        paddingLeft: theme.spacing(3),\n        paddingRight: theme.spacing(3),\n      },\n      ",
            ].join('\n'),
          );
          return _extends$2(
            {
              paddingLeft: spacing(2),
              paddingRight: spacing(2),
            },
            styles,
            _defineProperty(
              {},
              breakpoints.up('sm'),
              _extends$2(
                {
                  paddingLeft: spacing(3),
                  paddingRight: spacing(3),
                },
                styles[breakpoints.up('sm')],
              ),
            ),
          );
        },
        toolbar:
          ((_toolbar = {
            minHeight: 56,
          }),
          _defineProperty(
            _toolbar,
            ''.concat(breakpoints.up('xs'), ' and (orientation: landscape)'),
            {
              minHeight: 48,
            },
          ),
          _defineProperty(_toolbar, breakpoints.up('sm'), {
            minHeight: 64,
          }),
          _toolbar),
      },
      mixins,
    );
  }

  var common = {
    black: '#000',
    white: '#fff',
  };

  var grey = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161',
  };

  var indigo = {
    50: '#e8eaf6',
    100: '#c5cae9',
    200: '#9fa8da',
    300: '#7986cb',
    400: '#5c6bc0',
    500: '#3f51b5',
    600: '#3949ab',
    700: '#303f9f',
    800: '#283593',
    900: '#1a237e',
    A100: '#8c9eff',
    A200: '#536dfe',
    A400: '#3d5afe',
    A700: '#304ffe',
  };

  var pink = {
    50: '#fce4ec',
    100: '#f8bbd0',
    200: '#f48fb1',
    300: '#f06292',
    400: '#ec407a',
    500: '#e91e63',
    600: '#d81b60',
    700: '#c2185b',
    800: '#ad1457',
    900: '#880e4f',
    A100: '#ff80ab',
    A200: '#ff4081',
    A400: '#f50057',
    A700: '#c51162',
  };

  var red = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000',
  };

  var orange = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00',
  };

  var blue = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff',
  };

  var green = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853',
  };

  /* eslint-disable no-use-before-define */

  /**
   * Returns a number whose value is limited to the given range.
   *
   * @param {number} value The value to be clamped
   * @param {number} min The lower boundary of the output range
   * @param {number} max The upper boundary of the output range
   * @returns {number} A number in the range [min, max]
   */
  function clamp(value) {
    var min =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var max =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    return Math.min(Math.max(min, value), max);
  }
  /**
   * Converts a color from CSS hex format to CSS rgb format.
   *
   * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
   * @returns {string} A CSS rgb color string
   */

  function hexToRgb(color) {
    color = color.substr(1);
    var re = new RegExp('.{1,'.concat(color.length >= 6 ? 2 : 1, '}'), 'g');
    var colors = color.match(re);

    if (colors && colors[0].length === 1) {
      colors = colors.map(function (n) {
        return n + n;
      });
    }

    return colors
      ? 'rgb'.concat(colors.length === 4 ? 'a' : '', '(').concat(
          colors
            .map(function (n, index) {
              return index < 3
                ? parseInt(n, 16)
                : Math.round((parseInt(n, 16) / 255) * 1000) / 1000;
            })
            .join(', '),
          ')',
        )
      : '';
  }
  /**
   * Converts a color from hsl format to rgb format.
   *
   * @param {string} color - HSL color values
   * @returns {string} rgb color values
   */

  function hslToRgb(color) {
    color = decomposeColor(color);
    var _color = color,
      values = _color.values;
    var h = values[0];
    var s = values[1] / 100;
    var l = values[2] / 100;
    var a = s * Math.min(l, 1 - l);

    var f = function f(n) {
      var k =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : (n + h / 30) % 12;
      return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    };

    var type = 'rgb';
    var rgb = [
      Math.round(f(0) * 255),
      Math.round(f(8) * 255),
      Math.round(f(4) * 255),
    ];

    if (color.type === 'hsla') {
      type += 'a';
      rgb.push(values[3]);
    }

    return recomposeColor({
      type: type,
      values: rgb,
    });
  }
  /**
   * Returns an object with the type and values of a color.
   *
   * Note: Does not support rgb % values.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {object} - A MUI color object: {type: string, values: number[]}
   */

  function decomposeColor(color) {
    // Idempotent
    if (color.type) {
      return color;
    }

    if (color.charAt(0) === '#') {
      return decomposeColor(hexToRgb(color));
    }

    var marker = color.indexOf('(');
    var type = color.substring(0, marker);

    if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
      throw new Error(utils$1.formatMuiErrorMessage(3, color));
    }

    var values = color.substring(marker + 1, color.length - 1).split(',');
    values = values.map(function (value) {
      return parseFloat(value);
    });
    return {
      type: type,
      values: values,
    };
  }
  /**
   * Converts a color object with type and values to a string.
   *
   * @param {object} color - Decomposed color
   * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
   * @param {array} color.values - [n,n,n] or [n,n,n,n]
   * @returns {string} A CSS color string
   */

  function recomposeColor(color) {
    var type = color.type;
    var values = color.values;

    if (type.indexOf('rgb') !== -1) {
      // Only convert the first 3 values to int (i.e. not alpha)
      values = values.map(function (n, i) {
        return i < 3 ? parseInt(n, 10) : n;
      });
    } else if (type.indexOf('hsl') !== -1) {
      values[1] = ''.concat(values[1], '%');
      values[2] = ''.concat(values[2], '%');
    }

    return ''.concat(type, '(').concat(values.join(', '), ')');
  }
  /**
   * Calculates the contrast ratio between two colors.
   *
   * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
   *
   * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {number} A contrast ratio value in the range 0 - 21.
   */

  function getContrastRatio(foreground, background) {
    var lumA = getLuminance(foreground);
    var lumB = getLuminance(background);
    return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
  }
  /**
   * The relative brightness of any point in a color space,
   * normalized to 0 for darkest black and 1 for lightest white.
   *
   * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @returns {number} The relative brightness of the color in the range 0 - 1
   */

  function getLuminance(color) {
    color = decomposeColor(color);
    var rgb =
      color.type === 'hsl'
        ? decomposeColor(hslToRgb(color)).values
        : color.values;
    rgb = rgb.map(function (val) {
      val /= 255; // normalized

      return val <= 0.03928
        ? val / 12.92
        : Math.pow((val + 0.055) / 1.055, 2.4);
    }); // Truncate at 3 digits

    return Number(
      (0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3),
    );
  }
  /**
   * Set the absolute transparency of a color.
   * Any existing alpha value is overwritten.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} value - value to set the alpha channel to in the range 0-1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function alpha(color, value) {
    color = decomposeColor(color);
    value = clamp(value);

    if (color.type === 'rgb' || color.type === 'hsl') {
      color.type += 'a';
    }

    color.values[3] = value;
    return recomposeColor(color);
  }
  /**
   * Darkens a color.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} coefficient - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function darken(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);

    if (color.type.indexOf('hsl') !== -1) {
      color.values[2] *= 1 - coefficient;
    } else if (color.type.indexOf('rgb') !== -1) {
      for (var i = 0; i < 3; i += 1) {
        color.values[i] *= 1 - coefficient;
      }
    }

    return recomposeColor(color);
  }
  /**
   * Lightens a color.
   *
   * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
   * @param {number} coefficient - multiplier in the range 0 - 1
   * @returns {string} A CSS color string. Hex input values are returned as rgb
   */

  function lighten(color, coefficient) {
    color = decomposeColor(color);
    coefficient = clamp(coefficient);

    if (color.type.indexOf('hsl') !== -1) {
      color.values[2] += (100 - color.values[2]) * coefficient;
    } else if (color.type.indexOf('rgb') !== -1) {
      for (var i = 0; i < 3; i += 1) {
        color.values[i] += (255 - color.values[i]) * coefficient;
      }
    }

    return recomposeColor(color);
  }

  var light = {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: 'rgba(0, 0, 0, 0.87)',
      // Secondary text.
      secondary: 'rgba(0, 0, 0, 0.54)',
      // Disabled text have even lower visual prominence.
      disabled: 'rgba(0, 0, 0, 0.38)',
      // Text hints.
      hint: 'rgba(0, 0, 0, 0.38)',
    },
    // The color used to divide different elements.
    divider: 'rgba(0, 0, 0, 0.12)',
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: common.white,
      default: grey[50],
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: 'rgba(0, 0, 0, 0.54)',
      // The color of an hovered action.
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: 'rgba(0, 0, 0, 0.26)',
      // The background color of a disabled action.
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };
  var dark = {
    text: {
      primary: common.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
      paper: grey[800],
      default: '#303030',
    },
    action: {
      active: common.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };

  function addLightOrDark(intent, direction, shade, tonalOffset) {
    var tonalOffsetLight = tonalOffset.light || tonalOffset;
    var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

    if (!intent[direction]) {
      if (intent.hasOwnProperty(shade)) {
        intent[direction] = intent[shade];
      } else if (direction === 'light') {
        intent.light = lighten(intent.main, tonalOffsetLight);
      } else if (direction === 'dark') {
        intent.dark = darken(intent.main, tonalOffsetDark);
      }
    }
  }

  function createPalette(palette) {
    var _palette$primary = palette.primary,
      primary =
        _palette$primary === void 0
          ? {
              light: indigo[300],
              main: indigo[500],
              dark: indigo[700],
            }
          : _palette$primary,
      _palette$secondary = palette.secondary,
      secondary =
        _palette$secondary === void 0
          ? {
              light: pink.A200,
              main: pink.A400,
              dark: pink.A700,
            }
          : _palette$secondary,
      _palette$error = palette.error,
      error =
        _palette$error === void 0
          ? {
              light: red[300],
              main: red[500],
              dark: red[700],
            }
          : _palette$error,
      _palette$warning = palette.warning,
      warning =
        _palette$warning === void 0
          ? {
              light: orange[300],
              main: orange[500],
              dark: orange[700],
            }
          : _palette$warning,
      _palette$info = palette.info,
      info =
        _palette$info === void 0
          ? {
              light: blue[300],
              main: blue[500],
              dark: blue[700],
            }
          : _palette$info,
      _palette$success = palette.success,
      success =
        _palette$success === void 0
          ? {
              light: green[300],
              main: green[500],
              dark: green[700],
            }
          : _palette$success,
      _palette$type = palette.type,
      type = _palette$type === void 0 ? 'light' : _palette$type,
      _palette$contrastThre = palette.contrastThreshold,
      contrastThreshold =
        _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
      _palette$tonalOffset = palette.tonalOffset,
      tonalOffset =
        _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
      other = _objectWithoutProperties(palette, [
        'primary',
        'secondary',
        'error',
        'warning',
        'info',
        'success',
        'type',
        'contrastThreshold',
        'tonalOffset',
      ]); // Use the same logic as
    // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
    // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54

    function getContrastText(background) {
      var contrastText =
        getContrastRatio(background, dark.text.primary) >= contrastThreshold
          ? dark.text.primary
          : light.text.primary;

      return contrastText;
    }

    var augmentColor = function augmentColor(color) {
      var mainShade =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
      var lightShade =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
      var darkShade =
        arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
      color = _extends$2({}, color);

      if (!color.main && color[mainShade]) {
        color.main = color[mainShade];
      }

      if (!color.main) {
        throw new Error(utils$1.formatMuiErrorMessage(4, mainShade));
      }

      if (typeof color.main !== 'string') {
        throw new Error(
          utils$1.formatMuiErrorMessage(5, JSON.stringify(color.main)),
        );
      }

      addLightOrDark(color, 'light', lightShade, tonalOffset);
      addLightOrDark(color, 'dark', darkShade, tonalOffset);

      if (!color.contrastText) {
        color.contrastText = getContrastText(color.main);
      }

      return color;
    };

    var types = {
      dark: dark,
      light: light,
    };

    var paletteOutput = utils$1.deepmerge(
      _extends$2(
        {
          // A collection of common colors.
          common: common,
          // The palette type, can be light or dark.
          type: type,
          // The colors used to represent primary interface elements for a user.
          primary: augmentColor(primary),
          // The colors used to represent secondary interface elements for a user.
          secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
          // The colors used to represent interface elements that the user should be made aware of.
          error: augmentColor(error),
          // The colors used to represent potentially dangerous actions or important messages.
          warning: augmentColor(warning),
          // The colors used to present information to the user that is neutral and not necessarily important.
          info: augmentColor(info),
          // The colors used to indicate the successful completion of an action that user triggered.
          success: augmentColor(success),
          // The grey colors.
          grey: grey,
          // Used by `getContrastText()` to maximize the contrast between
          // the background and the text.
          contrastThreshold: contrastThreshold,
          // Takes a background color and returns the text color that maximizes the contrast.
          getContrastText: getContrastText,
          // Generate a rich color object.
          augmentColor: augmentColor,
          // Used by the functions below to shift a color's luminance by approximately
          // two indexes within its tonal palette.
          // E.g., shift from Red 500 to Red 300 or Red 700.
          tonalOffset: tonalOffset,
        },
        types[type],
      ),
      other,
    );
    return paletteOutput;
  }

  function round$1(value) {
    return Math.round(value * 1e5) / 1e5;
  }

  function roundWithDeprecationWarning(value) {
    return round$1(value);
  }

  var caseAllCaps = {
    textTransform: 'uppercase',
  };
  var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
  /**
   * @see @link{https://material.io/design/typography/the-type-system.html}
   * @see @link{https://material.io/design/typography/understanding-typography.html}
   */

  function createTypography(palette, typography) {
    var _ref =
        typeof typography === 'function' ? typography(palette) : typography,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily =
        _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight =
        _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular =
        _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium =
        _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
      _ref$fontWeightBold = _ref.fontWeightBold,
      fontWeightBold =
        _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
      allVariants = _ref.allVariants,
      pxToRem2 = _ref.pxToRem,
      other = _objectWithoutProperties(_ref, [
        'fontFamily',
        'fontSize',
        'fontWeightLight',
        'fontWeightRegular',
        'fontWeightMedium',
        'fontWeightBold',
        'htmlFontSize',
        'allVariants',
        'pxToRem',
      ]);

    var coef = fontSize / 14;

    var pxToRem =
      pxToRem2 ||
      function (size) {
        return ''.concat((size / htmlFontSize) * coef, 'rem');
      };

    var buildVariant = function buildVariant(
      fontWeight,
      size,
      lineHeight,
      letterSpacing,
      casing,
    ) {
      return _extends$2(
        {
          fontFamily: fontFamily,
          fontWeight: fontWeight,
          fontSize: pxToRem(size),
          // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
          lineHeight: lineHeight,
        },
        fontFamily === defaultFontFamily
          ? {
              letterSpacing: ''.concat(round$1(letterSpacing / size), 'em'),
            }
          : {},
        casing,
        allVariants,
      );
    };

    var variants = {
      h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
      h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
      h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
      h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
      h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
      h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
      subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
      subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
      body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
      body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
      button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
      caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
      overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
    };
    return utils$1.deepmerge(
      _extends$2(
        {
          htmlFontSize: htmlFontSize,
          pxToRem: pxToRem,
          round: roundWithDeprecationWarning,
          // TODO v5: remove
          fontFamily: fontFamily,
          fontSize: fontSize,
          fontWeightLight: fontWeightLight,
          fontWeightRegular: fontWeightRegular,
          fontWeightMedium: fontWeightMedium,
          fontWeightBold: fontWeightBold,
        },
        variants,
      ),
      other,
      {
        clone: false, // No need to clone deep
      },
    );
  }

  var shadowKeyUmbraOpacity = 0.2;
  var shadowKeyPenumbraOpacity = 0.14;
  var shadowAmbientShadowOpacity = 0.12;

  function createShadow() {
    return [
      ''
        .concat(arguments.length <= 0 ? undefined : arguments[0], 'px ')
        .concat(arguments.length <= 1 ? undefined : arguments[1], 'px ')
        .concat(arguments.length <= 2 ? undefined : arguments[2], 'px ')
        .concat(
          arguments.length <= 3 ? undefined : arguments[3],
          'px rgba(0,0,0,',
        )
        .concat(shadowKeyUmbraOpacity, ')'),
      ''
        .concat(arguments.length <= 4 ? undefined : arguments[4], 'px ')
        .concat(arguments.length <= 5 ? undefined : arguments[5], 'px ')
        .concat(arguments.length <= 6 ? undefined : arguments[6], 'px ')
        .concat(
          arguments.length <= 7 ? undefined : arguments[7],
          'px rgba(0,0,0,',
        )
        .concat(shadowKeyPenumbraOpacity, ')'),
      ''
        .concat(arguments.length <= 8 ? undefined : arguments[8], 'px ')
        .concat(arguments.length <= 9 ? undefined : arguments[9], 'px ')
        .concat(arguments.length <= 10 ? undefined : arguments[10], 'px ')
        .concat(
          arguments.length <= 11 ? undefined : arguments[11],
          'px rgba(0,0,0,',
        )
        .concat(shadowAmbientShadowOpacity, ')'),
    ].join(',');
  } // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss

  var shadows$1 = [
    'none',
    createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ];

  var shape = {
    borderRadius: 4,
  };

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (
      (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
      iter['@@iterator'] != null
    )
      return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === 'Object' && o.constructor) n = o.constructor.name;
    if (n === 'Map' || n === 'Set') return Array.from(o);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _arrayLikeToArray(o, minLen);
  }

  function _nonIterableSpread() {
    throw new TypeError(
      'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }

  function _toConsumableArray(arr) {
    return (
      _arrayWithoutHoles(arr) ||
      _iterableToArray(arr) ||
      _unsupportedIterableToArray(arr) ||
      _nonIterableSpread()
    );
  }

  function merge(acc, item) {
    if (!item) {
      return acc;
    }

    return utils$1.deepmerge(acc, item, {
      clone: false, // No need to clone deep, it's way faster.
    });
  }

  // For instance with the first breakpoint xs: [xs, sm[.

  var values$1 = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  };
  var defaultBreakpoints = {
    // Sorted ASC by size. That's important.
    // It can't be configured as it's used statically for propTypes.
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: function up(key) {
      return '@media (min-width:'.concat(values$1[key], 'px)');
    },
  };
  function handleBreakpoints(props, propValue, styleFromPropValue) {
    if (Array.isArray(propValue)) {
      var themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
      return propValue.reduce(function (acc, item, index) {
        acc[themeBreakpoints.up(themeBreakpoints.keys[index])] =
          styleFromPropValue(propValue[index]);
        return acc;
      }, {});
    }

    if (_typeof(propValue) === 'object') {
      var _themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;

      return Object.keys(propValue).reduce(function (acc, breakpoint) {
        acc[_themeBreakpoints.up(breakpoint)] = styleFromPropValue(
          propValue[breakpoint],
        );
        return acc;
      }, {});
    }

    var output = styleFromPropValue(propValue);
    return output;
  }

  function getPath(obj, path) {
    if (!path || typeof path !== 'string') {
      return null;
    }

    return path.split('.').reduce(function (acc, item) {
      return acc && acc[item] ? acc[item] : null;
    }, obj);
  }

  function style(options) {
    var prop = options.prop,
      _options$cssProperty = options.cssProperty,
      cssProperty =
        _options$cssProperty === void 0 ? options.prop : _options$cssProperty,
      themeKey = options.themeKey,
      transform = options.transform;

    var fn = function fn(props) {
      if (props[prop] == null) {
        return null;
      }

      var propValue = props[prop];
      var theme = props.theme;
      var themeMapping = getPath(theme, themeKey) || {};

      var styleFromPropValue = function styleFromPropValue(propValueFinal) {
        var value;

        if (typeof themeMapping === 'function') {
          value = themeMapping(propValueFinal);
        } else if (Array.isArray(themeMapping)) {
          value = themeMapping[propValueFinal] || propValueFinal;
        } else {
          value = getPath(themeMapping, propValueFinal) || propValueFinal;

          if (transform) {
            value = transform(value);
          }
        }

        if (cssProperty === false) {
          return value;
        }

        return _defineProperty({}, cssProperty, value);
      };

      return handleBreakpoints(props, propValue, styleFromPropValue);
    };

    fn.propTypes = {};
    fn.filterProps = [prop];
    return fn;
  }

  function compose() {
    for (
      var _len = arguments.length, styles = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      styles[_key] = arguments[_key];
    }

    var fn = function fn(props) {
      return styles.reduce(function (acc, style) {
        var output = style(props);

        if (output) {
          return merge(acc, output);
        }

        return acc;
      }, {});
    }; // Alternative approach that doesn't yield any performance gain.
    // const handlers = styles.reduce((acc, style) => {
    //   style.filterProps.forEach(prop => {
    //     acc[prop] = style;
    //   });
    //   return acc;
    // }, {});
    // const fn = props => {
    //   return Object.keys(props).reduce((acc, prop) => {
    //     if (handlers[prop]) {
    //       return merge(acc, handlers[prop](props));
    //     }
    //     return acc;
    //   }, {});
    // };

    fn.propTypes = {};
    fn.filterProps = styles.reduce(function (acc, style) {
      return acc.concat(style.filterProps);
    }, []);
    return fn;
  }

  function getBorder(value) {
    if (typeof value !== 'number') {
      return value;
    }

    return ''.concat(value, 'px solid');
  }

  var border = style({
    prop: 'border',
    themeKey: 'borders',
    transform: getBorder,
  });
  var borderTop = style({
    prop: 'borderTop',
    themeKey: 'borders',
    transform: getBorder,
  });
  var borderRight = style({
    prop: 'borderRight',
    themeKey: 'borders',
    transform: getBorder,
  });
  var borderBottom = style({
    prop: 'borderBottom',
    themeKey: 'borders',
    transform: getBorder,
  });
  var borderLeft = style({
    prop: 'borderLeft',
    themeKey: 'borders',
    transform: getBorder,
  });
  var borderColor = style({
    prop: 'borderColor',
    themeKey: 'palette',
  });
  var borderRadius = style({
    prop: 'borderRadius',
    themeKey: 'shape',
  });
  var borders = compose(
    border,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    borderColor,
    borderRadius,
  );
  var borders$1 = borders;

  function omit(input, fields) {
    var output = {};
    Object.keys(input).forEach(function (prop) {
      if (fields.indexOf(prop) === -1) {
        output[prop] = input[prop];
      }
    });
    return output;
  }

  function styleFunctionSx(styleFunction) {
    var newStyleFunction = function newStyleFunction(props) {
      var output = styleFunction(props);

      if (props.css) {
        return _extends$2(
          {},
          merge(
            output,
            styleFunction(
              _extends$2(
                {
                  theme: props.theme,
                },
                props.css,
              ),
            ),
          ),
          omit(props.css, [styleFunction.filterProps]),
        );
      }

      if (props.sx) {
        return _extends$2(
          {},
          merge(
            output,
            styleFunction(
              _extends$2(
                {
                  theme: props.theme,
                },
                props.sx,
              ),
            ),
          ),
          omit(props.sx, [styleFunction.filterProps]),
        );
      }

      return output;
    };

    newStyleFunction.propTypes = {};
    newStyleFunction.filterProps = ['css', 'sx'].concat(
      _toConsumableArray(styleFunction.filterProps),
    );
    return newStyleFunction;
  }

  var displayPrint = style({
    prop: 'displayPrint',
    cssProperty: false,
    transform: function transform(value) {
      return {
        '@media print': {
          display: value,
        },
      };
    },
  });
  var displayRaw = style({
    prop: 'display',
  });
  var overflow = style({
    prop: 'overflow',
  });
  var textOverflow = style({
    prop: 'textOverflow',
  });
  var visibility = style({
    prop: 'visibility',
  });
  var whiteSpace = style({
    prop: 'whiteSpace',
  });
  var display = compose(
    displayPrint,
    displayRaw,
    overflow,
    textOverflow,
    visibility,
    whiteSpace,
  );

  var flexBasis = style({
    prop: 'flexBasis',
  });
  var flexDirection = style({
    prop: 'flexDirection',
  });
  var flexWrap = style({
    prop: 'flexWrap',
  });
  var justifyContent = style({
    prop: 'justifyContent',
  });
  var alignItems = style({
    prop: 'alignItems',
  });
  var alignContent = style({
    prop: 'alignContent',
  });
  var order = style({
    prop: 'order',
  });
  var flex = style({
    prop: 'flex',
  });
  var flexGrow = style({
    prop: 'flexGrow',
  });
  var flexShrink = style({
    prop: 'flexShrink',
  });
  var alignSelf = style({
    prop: 'alignSelf',
  });
  var justifyItems = style({
    prop: 'justifyItems',
  });
  var justifySelf = style({
    prop: 'justifySelf',
  });
  var flexbox = compose(
    flexBasis,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    alignContent,
    order,
    flex,
    flexGrow,
    flexShrink,
    alignSelf,
    justifyItems,
    justifySelf,
  );
  var flexbox$1 = flexbox;

  var gridGap = style({
    prop: 'gridGap',
  });
  var gridColumnGap = style({
    prop: 'gridColumnGap',
  });
  var gridRowGap = style({
    prop: 'gridRowGap',
  });
  var gridColumn = style({
    prop: 'gridColumn',
  });
  var gridRow = style({
    prop: 'gridRow',
  });
  var gridAutoFlow = style({
    prop: 'gridAutoFlow',
  });
  var gridAutoColumns = style({
    prop: 'gridAutoColumns',
  });
  var gridAutoRows = style({
    prop: 'gridAutoRows',
  });
  var gridTemplateColumns = style({
    prop: 'gridTemplateColumns',
  });
  var gridTemplateRows = style({
    prop: 'gridTemplateRows',
  });
  var gridTemplateAreas = style({
    prop: 'gridTemplateAreas',
  });
  var gridArea = style({
    prop: 'gridArea',
  });
  var grid = compose(
    gridGap,
    gridColumnGap,
    gridRowGap,
    gridColumn,
    gridRow,
    gridAutoFlow,
    gridAutoColumns,
    gridAutoRows,
    gridTemplateColumns,
    gridTemplateRows,
    gridTemplateAreas,
    gridArea,
  );
  var grid$1 = grid;

  var color = style({
    prop: 'color',
    themeKey: 'palette',
  });
  var bgcolor = style({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
  });
  var palette = compose(color, bgcolor);
  var palette$1 = palette;

  var position = style({
    prop: 'position',
  });
  var zIndex$1 = style({
    prop: 'zIndex',
    themeKey: 'zIndex',
  });
  var top = style({
    prop: 'top',
  });
  var right = style({
    prop: 'right',
  });
  var bottom = style({
    prop: 'bottom',
  });
  var left = style({
    prop: 'left',
  });
  var positions = compose(position, zIndex$1, top, right, bottom, left);

  var boxShadow = style({
    prop: 'boxShadow',
    themeKey: 'shadows',
  });
  var shadows = boxShadow;

  function transform(value) {
    return value <= 1 ? ''.concat(value * 100, '%') : value;
  }

  var width = style({
    prop: 'width',
    transform: transform,
  });
  var maxWidth = style({
    prop: 'maxWidth',
    transform: transform,
  });
  var minWidth = style({
    prop: 'minWidth',
    transform: transform,
  });
  var height = style({
    prop: 'height',
    transform: transform,
  });
  var maxHeight = style({
    prop: 'maxHeight',
    transform: transform,
  });
  var minHeight = style({
    prop: 'minHeight',
    transform: transform,
  });
  style({
    prop: 'size',
    cssProperty: 'width',
    transform: transform,
  });
  style({
    prop: 'size',
    cssProperty: 'height',
    transform: transform,
  });
  var boxSizing = style({
    prop: 'boxSizing',
  });
  var sizing = compose(
    width,
    maxWidth,
    minWidth,
    height,
    maxHeight,
    minHeight,
    boxSizing,
  );
  var sizing$1 = sizing;

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i =
      arr == null
        ? null
        : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
          arr['@@iterator'];

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i['return'] != null) _i['return']();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError(
      'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }

  function _slicedToArray(arr, i) {
    return (
      _arrayWithHoles(arr) ||
      _iterableToArrayLimit(arr, i) ||
      _unsupportedIterableToArray(arr, i) ||
      _nonIterableRest()
    );
  }

  function memoize(fn) {
    var cache = {};
    return function (arg) {
      if (cache[arg] === undefined) {
        cache[arg] = fn(arg);
      }

      return cache[arg];
    };
  }

  var properties = {
    m: 'margin',
    p: 'padding',
  };
  var directions = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom'],
  };
  var aliases = {
    marginX: 'mx',
    marginY: 'my',
    paddingX: 'px',
    paddingY: 'py',
  }; // memoize() impact:
  // From 300,000 ops/sec
  // To 350,000 ops/sec

  var getCssProperties = memoize(function (prop) {
    // It's not a shorthand notation.
    if (prop.length > 2) {
      if (aliases[prop]) {
        prop = aliases[prop];
      } else {
        return [prop];
      }
    }

    var _prop$split = prop.split(''),
      _prop$split2 = _slicedToArray(_prop$split, 2),
      a = _prop$split2[0],
      b = _prop$split2[1];

    var property = properties[a];
    var direction = directions[b] || '';
    return Array.isArray(direction)
      ? direction.map(function (dir) {
          return property + dir;
        })
      : [property + direction];
  });
  var spacingKeys = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
  ];
  function createUnarySpacing(theme) {
    var themeSpacing = theme.spacing || 8;

    if (typeof themeSpacing === 'number') {
      return function (abs) {
        return themeSpacing * abs;
      };
    }

    if (Array.isArray(themeSpacing)) {
      return function (abs) {
        return themeSpacing[abs];
      };
    }

    if (typeof themeSpacing === 'function') {
      return themeSpacing;
    }

    return function () {
      return undefined;
    };
  }

  function getValue$1(transformer, propValue) {
    if (typeof propValue === 'string' || propValue == null) {
      return propValue;
    }

    var abs = Math.abs(propValue);
    var transformed = transformer(abs);

    if (propValue >= 0) {
      return transformed;
    }

    if (typeof transformed === 'number') {
      return -transformed;
    }

    return '-'.concat(transformed);
  }

  function getStyleFromPropValue(cssProperties, transformer) {
    return function (propValue) {
      return cssProperties.reduce(function (acc, cssProperty) {
        acc[cssProperty] = getValue$1(transformer, propValue);
        return acc;
      }, {});
    };
  }

  function spacing(props) {
    var theme = props.theme;
    var transformer = createUnarySpacing(theme);
    return Object.keys(props)
      .map(function (prop) {
        // Using a hash computation over an array iteration could be faster, but with only 28 items,
        // it's doesn't worth the bundle size.
        if (spacingKeys.indexOf(prop) === -1) {
          return null;
        }

        var cssProperties = getCssProperties(prop);
        var styleFromPropValue = getStyleFromPropValue(
          cssProperties,
          transformer,
        );
        var propValue = props[prop];
        return handleBreakpoints(props, propValue, styleFromPropValue);
      })
      .reduce(merge, {});
  }

  spacing.propTypes = {};
  spacing.filterProps = spacingKeys;

  var fontFamily = style({
    prop: 'fontFamily',
    themeKey: 'typography',
  });
  var fontSize = style({
    prop: 'fontSize',
    themeKey: 'typography',
  });
  var fontStyle = style({
    prop: 'fontStyle',
    themeKey: 'typography',
  });
  var fontWeight = style({
    prop: 'fontWeight',
    themeKey: 'typography',
  });
  var letterSpacing = style({
    prop: 'letterSpacing',
  });
  var lineHeight = style({
    prop: 'lineHeight',
  });
  var textAlign = style({
    prop: 'textAlign',
  });
  var typography = compose(
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    letterSpacing,
    lineHeight,
    textAlign,
  );
  var typography$1 = typography;

  function createSpacing() {
    var spacingInput =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;

    // Already transformed.
    if (spacingInput.mui) {
      return spacingInput;
    } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid applied, which aligns both spacing and the overall layout.
    // Smaller components, such as icons and type, can align to a 4dp grid.
    // https://material.io/design/layout/understanding-layout.html#usage

    var transform = createUnarySpacing({
      spacing: spacingInput,
    });

    var spacing = function spacing() {
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      if (args.length === 0) {
        return transform(1);
      }

      if (args.length === 1) {
        return transform(args[0]);
      }

      return args
        .map(function (argument) {
          if (typeof argument === 'string') {
            return argument;
          }

          var output = transform(argument);
          return typeof output === 'number' ? ''.concat(output, 'px') : output;
        })
        .join(' ');
    }; // Backward compatibility, to remove in v5.

    Object.defineProperty(spacing, 'unit', {
      get: function get() {
        return spacingInput;
      },
    });
    spacing.mui = true;
    return spacing;
  }

  // Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
  // to learn the context in which each easing should be used.
  var easing = {
    // This is the most common easing curve.
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  }; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
  // to learn when use what timing

  var duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195,
  };

  function formatMs(milliseconds) {
    return ''.concat(Math.round(milliseconds), 'ms');
  }
  /**
   * @param {string|Array} props
   * @param {object} param
   * @param {string} param.prop
   * @param {number} param.duration
   * @param {string} param.easing
   * @param {number} param.delay
   */

  var transitions = {
    easing: easing,
    duration: duration,
    create: function create() {
      var props =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : ['all'];
      var options =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _options$duration = options.duration,
        durationOption =
          _options$duration === void 0 ? duration.standard : _options$duration,
        _options$easing = options.easing,
        easingOption =
          _options$easing === void 0 ? easing.easeInOut : _options$easing,
        _options$delay = options.delay,
        delay = _options$delay === void 0 ? 0 : _options$delay;
      _objectWithoutProperties(options, ['duration', 'easing', 'delay']);

      return (Array.isArray(props) ? props : [props])
        .map(function (animatedProp) {
          return ''
            .concat(animatedProp, ' ')
            .concat(
              typeof durationOption === 'string'
                ? durationOption
                : formatMs(durationOption),
              ' ',
            )
            .concat(easingOption, ' ')
            .concat(typeof delay === 'string' ? delay : formatMs(delay));
        })
        .join(',');
    },
    getAutoHeightDuration: function getAutoHeightDuration(height) {
      if (!height) {
        return 0;
      }

      var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

      return Math.round(
        (4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10,
      );
    },
  };

  // We need to centralize the zIndex definitions as they work
  // like global values in the browser.
  var zIndex = {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  };

  function createTheme() {
    var options =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _options$breakpoints = options.breakpoints,
      breakpointsInput =
        _options$breakpoints === void 0 ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
      _options$palette = options.palette,
      paletteInput = _options$palette === void 0 ? {} : _options$palette,
      spacingInput = options.spacing,
      _options$typography = options.typography,
      typographyInput =
        _options$typography === void 0 ? {} : _options$typography,
      other = _objectWithoutProperties(options, [
        'breakpoints',
        'mixins',
        'palette',
        'spacing',
        'typography',
      ]);

    var palette = createPalette(paletteInput);
    var breakpoints = createBreakpoints(breakpointsInput);
    var spacing = createSpacing(spacingInput);
    var muiTheme = utils$1.deepmerge(
      {
        breakpoints: breakpoints,
        direction: 'ltr',
        mixins: createMixins(breakpoints, spacing, mixinsInput),
        overrides: {},
        // Inject custom styles
        palette: palette,
        props: {},
        // Provide default props
        shadows: shadows$1,
        typography: createTypography(palette, typographyInput),
        spacing: spacing,
        shape: shape,
        transitions: transitions,
        zIndex: zIndex,
      },
      other,
    );

    for (
      var _len = arguments.length,
        args = new Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
      args[_key - 1] = arguments[_key];
    }

    muiTheme = args.reduce(function (acc, argument) {
      return utils$1.deepmerge(acc, argument);
    }, muiTheme);

    return muiTheme;
  }

  var defaultTheme = createTheme();
  var defaultTheme$1 = defaultTheme;

  function withStyles(stylesOrCreator, options) {
    return withStylesWithoutDefault(
      stylesOrCreator,
      _extends$2(
        {
          defaultTheme: defaultTheme$1,
        },
        options,
      ),
    );
  }

  var html = {
    WebkitFontSmoothing: 'antialiased',
    // Antialiasing.
    MozOsxFontSmoothing: 'grayscale',
    // Antialiasing.
    // Change from `box-sizing: content-box` so that `width`
    // is not affected by `padding` or `border`.
    boxSizing: 'border-box',
  };
  var body = function body(theme) {
    return _extends$2(
      {
        color: theme.palette.text.primary,
      },
      theme.typography.body2,
      {
        backgroundColor: theme.palette.background.default,
        '@media print': {
          // Save printer ink.
          backgroundColor: theme.palette.common.white,
        },
      },
    );
  };
  var styles$I = function styles(theme) {
    return {
      '@global': {
        html: html,
        '*, *::before, *::after': {
          boxSizing: 'inherit',
        },
        'strong, b': {
          fontWeight: theme.typography.fontWeightBold,
        },
        body: _extends$2(
          {
            margin: 0,
          },
          body(theme),
          {
            // Add support for document.body.requestFullScreen().
            // Other elements, if background transparent, are not supported.
            '&::backdrop': {
              backgroundColor: theme.palette.background.default,
            },
          },
        ),
      },
    };
  };
  /**
   * Kickstart an elegant, consistent, and simple baseline to build upon.
   */

  function CssBaseline(props) {
    /* eslint-disable no-unused-vars */
    var _props$children = props.children,
      children = _props$children === void 0 ? null : _props$children;
    props.classes;
    /* eslint-enable no-unused-vars */

    return /*#__PURE__*/ react.exports.createElement(
      react.exports.Fragment,
      null,
      children,
    );
  }

  var CssBaseline$1 = withStyles(styles$I, {
    name: 'MuiCssBaseline',
  })(CssBaseline);

  var reactDom = { exports: {} };

  var reactDom_production_min = {};

  var scheduler = { exports: {} };

  var scheduler_production_min = {};

  /** @license React v0.20.2
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  (function (exports) {
    var f, g, h, k;
    if (
      'object' === typeof performance &&
      'function' === typeof performance.now
    ) {
      var l = performance;
      exports.unstable_now = function () {
        return l.now();
      };
    } else {
      var p = Date,
        q = p.now();
      exports.unstable_now = function () {
        return p.now() - q;
      };
    }
    if ('undefined' === typeof window || 'function' !== typeof MessageChannel) {
      var t = null,
        u = null,
        w = function () {
          if (null !== t)
            try {
              var a = exports.unstable_now();
              t(!0, a);
              t = null;
            } catch (b) {
              throw (setTimeout(w, 0), b);
            }
        };
      f = function (a) {
        null !== t ? setTimeout(f, 0, a) : ((t = a), setTimeout(w, 0));
      };
      g = function (a, b) {
        u = setTimeout(a, b);
      };
      h = function () {
        clearTimeout(u);
      };
      exports.unstable_shouldYield = function () {
        return !1;
      };
      k = exports.unstable_forceFrameRate = function () {};
    } else {
      var x = window.setTimeout,
        y = window.clearTimeout;
      if ('undefined' !== typeof console) {
        var z = window.cancelAnimationFrame;
        'function' !== typeof window.requestAnimationFrame &&
          console.error(
            "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
          );
        'function' !== typeof z &&
          console.error(
            "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills",
          );
      }
      var A = !1,
        B = null,
        C = -1,
        D = 5,
        E = 0;
      exports.unstable_shouldYield = function () {
        return exports.unstable_now() >= E;
      };
      k = function () {};
      exports.unstable_forceFrameRate = function (a) {
        0 > a || 125 < a
          ? console.error(
              'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
            )
          : (D = 0 < a ? Math.floor(1e3 / a) : 5);
      };
      var F = new MessageChannel(),
        G = F.port2;
      F.port1.onmessage = function () {
        if (null !== B) {
          var a = exports.unstable_now();
          E = a + D;
          try {
            B(!0, a) ? G.postMessage(null) : ((A = !1), (B = null));
          } catch (b) {
            throw (G.postMessage(null), b);
          }
        } else A = !1;
      };
      f = function (a) {
        B = a;
        A || ((A = !0), G.postMessage(null));
      };
      g = function (a, b) {
        C = x(function () {
          a(exports.unstable_now());
        }, b);
      };
      h = function () {
        y(C);
        C = -1;
      };
    }
    function H(a, b) {
      var c = a.length;
      a.push(b);
      a: for (;;) {
        var d = (c - 1) >>> 1,
          e = a[d];
        if (void 0 !== e && 0 < I(e, b)) (a[d] = b), (a[c] = e), (c = d);
        else break a;
      }
    }
    function J(a) {
      a = a[0];
      return void 0 === a ? null : a;
    }
    function K(a) {
      var b = a[0];
      if (void 0 !== b) {
        var c = a.pop();
        if (c !== b) {
          a[0] = c;
          a: for (var d = 0, e = a.length; d < e; ) {
            var m = 2 * (d + 1) - 1,
              n = a[m],
              v = m + 1,
              r = a[v];
            if (void 0 !== n && 0 > I(n, c))
              void 0 !== r && 0 > I(r, n)
                ? ((a[d] = r), (a[v] = c), (d = v))
                : ((a[d] = n), (a[m] = c), (d = m));
            else if (void 0 !== r && 0 > I(r, c))
              (a[d] = r), (a[v] = c), (d = v);
            else break a;
          }
        }
        return b;
      }
      return null;
    }
    function I(a, b) {
      var c = a.sortIndex - b.sortIndex;
      return 0 !== c ? c : a.id - b.id;
    }
    var L = [],
      M = [],
      N = 1,
      O = null,
      P = 3,
      Q = !1,
      R = !1,
      S = !1;
    function T(a) {
      for (var b = J(M); null !== b; ) {
        if (null === b.callback) K(M);
        else if (b.startTime <= a)
          K(M), (b.sortIndex = b.expirationTime), H(L, b);
        else break;
        b = J(M);
      }
    }
    function U(a) {
      S = !1;
      T(a);
      if (!R)
        if (null !== J(L)) (R = !0), f(V);
        else {
          var b = J(M);
          null !== b && g(U, b.startTime - a);
        }
    }
    function V(a, b) {
      R = !1;
      S && ((S = !1), h());
      Q = !0;
      var c = P;
      try {
        T(b);
        for (
          O = J(L);
          null !== O &&
          (!(O.expirationTime > b) || (a && !exports.unstable_shouldYield()));

        ) {
          var d = O.callback;
          if ('function' === typeof d) {
            O.callback = null;
            P = O.priorityLevel;
            var e = d(O.expirationTime <= b);
            b = exports.unstable_now();
            'function' === typeof e ? (O.callback = e) : O === J(L) && K(L);
            T(b);
          } else K(L);
          O = J(L);
        }
        if (null !== O) var m = !0;
        else {
          var n = J(M);
          null !== n && g(U, n.startTime - b);
          m = !1;
        }
        return m;
      } finally {
        (O = null), (P = c), (Q = !1);
      }
    }
    var W = k;
    exports.unstable_IdlePriority = 5;
    exports.unstable_ImmediatePriority = 1;
    exports.unstable_LowPriority = 4;
    exports.unstable_NormalPriority = 3;
    exports.unstable_Profiling = null;
    exports.unstable_UserBlockingPriority = 2;
    exports.unstable_cancelCallback = function (a) {
      a.callback = null;
    };
    exports.unstable_continueExecution = function () {
      R || Q || ((R = !0), f(V));
    };
    exports.unstable_getCurrentPriorityLevel = function () {
      return P;
    };
    exports.unstable_getFirstCallbackNode = function () {
      return J(L);
    };
    exports.unstable_next = function (a) {
      switch (P) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = P;
      }
      var c = P;
      P = b;
      try {
        return a();
      } finally {
        P = c;
      }
    };
    exports.unstable_pauseExecution = function () {};
    exports.unstable_requestPaint = W;
    exports.unstable_runWithPriority = function (a, b) {
      switch (a) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          a = 3;
      }
      var c = P;
      P = a;
      try {
        return b();
      } finally {
        P = c;
      }
    };
    exports.unstable_scheduleCallback = function (a, b, c) {
      var d = exports.unstable_now();
      'object' === typeof c && null !== c
        ? ((c = c.delay), (c = 'number' === typeof c && 0 < c ? d + c : d))
        : (c = d);
      switch (a) {
        case 1:
          var e = -1;
          break;
        case 2:
          e = 250;
          break;
        case 5:
          e = 1073741823;
          break;
        case 4:
          e = 1e4;
          break;
        default:
          e = 5e3;
      }
      e = c + e;
      a = {
        id: N++,
        callback: b,
        priorityLevel: a,
        startTime: c,
        expirationTime: e,
        sortIndex: -1,
      };
      c > d
        ? ((a.sortIndex = c),
          H(M, a),
          null === J(L) && a === J(M) && (S ? h() : (S = !0), g(U, c - d)))
        : ((a.sortIndex = e), H(L, a), R || Q || ((R = !0), f(V)));
      return a;
    };
    exports.unstable_wrapCallback = function (a) {
      var b = P;
      return function () {
        var c = P;
        P = b;
        try {
          return a.apply(this, arguments);
        } finally {
          P = c;
        }
      };
    };
  })(scheduler_production_min);

  {
    scheduler.exports = scheduler_production_min;
  }

  /** @license React v17.0.2
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var aa = react.exports,
    m = objectAssign,
    r$1 = scheduler.exports;
  function y$1(a) {
    for (
      var b = 'https://reactjs.org/docs/error-decoder.html?invariant=' + a,
        c = 1;
      c < arguments.length;
      c++
    )
      b += '&args[]=' + encodeURIComponent(arguments[c]);
    return (
      'Minified React error #' +
      a +
      '; visit ' +
      b +
      ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
  }
  if (!aa) throw Error(y$1(227));
  var ba = new Set(),
    ca = {};
  function da(a, b) {
    ea(a, b);
    ea(a + 'Capture', b);
  }
  function ea(a, b) {
    ca[a] = b;
    for (a = 0; a < b.length; a++) ba.add(b[a]);
  }
  var fa = !(
      'undefined' === typeof window ||
      'undefined' === typeof window.document ||
      'undefined' === typeof window.document.createElement
    ),
    ha =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    ia = Object.prototype.hasOwnProperty,
    ja = {},
    ka = {};
  function la(a) {
    if (ia.call(ka, a)) return !0;
    if (ia.call(ja, a)) return !1;
    if (ha.test(a)) return (ka[a] = !0);
    ja[a] = !0;
    return !1;
  }
  function ma(a, b, c, d) {
    if (null !== c && 0 === c.type) return !1;
    switch (typeof b) {
      case 'function':
      case 'symbol':
        return !0;
      case 'boolean':
        if (d) return !1;
        if (null !== c) return !c.acceptsBooleans;
        a = a.toLowerCase().slice(0, 5);
        return 'data-' !== a && 'aria-' !== a;
      default:
        return !1;
    }
  }
  function na(a, b, c, d) {
    if (null === b || 'undefined' === typeof b || ma(a, b, c, d)) return !0;
    if (d) return !1;
    if (null !== c)
      switch (c.type) {
        case 3:
          return !b;
        case 4:
          return !1 === b;
        case 5:
          return isNaN(b);
        case 6:
          return isNaN(b) || 1 > b;
      }
    return !1;
  }
  function B$1(a, b, c, d, e, f, g) {
    this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
    this.attributeName = d;
    this.attributeNamespace = e;
    this.mustUseProperty = c;
    this.propertyName = a;
    this.type = b;
    this.sanitizeURL = f;
    this.removeEmptyString = g;
  }
  var D$1 = {};
  'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (a) {
      D$1[a] = new B$1(a, 0, !1, a, null, !1, !1);
    });
  [
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
  ].forEach(function (a) {
    var b = a[0];
    D$1[b] = new B$1(b, 1, !1, a[1], null, !1, !1);
  });
  ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (a) {
    D$1[a] = new B$1(a, 2, !1, a.toLowerCase(), null, !1, !1);
  });
  [
    'autoReverse',
    'externalResourcesRequired',
    'focusable',
    'preserveAlpha',
  ].forEach(function (a) {
    D$1[a] = new B$1(a, 2, !1, a, null, !1, !1);
  });
  'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (a) {
      D$1[a] = new B$1(a, 3, !1, a.toLowerCase(), null, !1, !1);
    });
  ['checked', 'multiple', 'muted', 'selected'].forEach(function (a) {
    D$1[a] = new B$1(a, 3, !0, a, null, !1, !1);
  });
  ['capture', 'download'].forEach(function (a) {
    D$1[a] = new B$1(a, 4, !1, a, null, !1, !1);
  });
  ['cols', 'rows', 'size', 'span'].forEach(function (a) {
    D$1[a] = new B$1(a, 6, !1, a, null, !1, !1);
  });
  ['rowSpan', 'start'].forEach(function (a) {
    D$1[a] = new B$1(a, 5, !1, a.toLowerCase(), null, !1, !1);
  });
  var oa = /[\-:]([a-z])/g;
  function pa(a) {
    return a[1].toUpperCase();
  }
  'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (a) {
      var b = a.replace(oa, pa);
      D$1[b] = new B$1(b, 1, !1, a, null, !1, !1);
    });
  'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (a) {
      var b = a.replace(oa, pa);
      D$1[b] = new B$1(b, 1, !1, a, 'http://www.w3.org/1999/xlink', !1, !1);
    });
  ['xml:base', 'xml:lang', 'xml:space'].forEach(function (a) {
    var b = a.replace(oa, pa);
    D$1[b] = new B$1(
      b,
      1,
      !1,
      a,
      'http://www.w3.org/XML/1998/namespace',
      !1,
      !1,
    );
  });
  ['tabIndex', 'crossOrigin'].forEach(function (a) {
    D$1[a] = new B$1(a, 1, !1, a.toLowerCase(), null, !1, !1);
  });
  D$1.xlinkHref = new B$1(
    'xlinkHref',
    1,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1,
  );
  ['src', 'href', 'action', 'formAction'].forEach(function (a) {
    D$1[a] = new B$1(a, 1, !1, a.toLowerCase(), null, !0, !0);
  });
  function qa(a, b, c, d) {
    var e = D$1.hasOwnProperty(b) ? D$1[b] : null;
    var f =
      null !== e
        ? 0 === e.type
        : d
        ? !1
        : !(2 < b.length) ||
          ('o' !== b[0] && 'O' !== b[0]) ||
          ('n' !== b[1] && 'N' !== b[1])
        ? !1
        : !0;
    f ||
      (na(b, c, e, d) && (c = null),
      d || null === e
        ? la(b) &&
          (null === c ? a.removeAttribute(b) : a.setAttribute(b, '' + c))
        : e.mustUseProperty
        ? (a[e.propertyName] = null === c ? (3 === e.type ? !1 : '') : c)
        : ((b = e.attributeName),
          (d = e.attributeNamespace),
          null === c
            ? a.removeAttribute(b)
            : ((e = e.type),
              (c = 3 === e || (4 === e && !0 === c) ? '' : '' + c),
              d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c))));
  }
  var ra = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    sa = 60103,
    ta = 60106,
    ua = 60107,
    wa = 60108,
    xa = 60114,
    ya = 60109,
    za = 60110,
    Aa = 60112,
    Ba = 60113,
    Ca = 60120,
    Da = 60115,
    Ea = 60116,
    Fa = 60121,
    Ga = 60128,
    Ha = 60129,
    Ia = 60130,
    Ja = 60131;
  if ('function' === typeof Symbol && Symbol.for) {
    var E$1 = Symbol.for;
    sa = E$1('react.element');
    ta = E$1('react.portal');
    ua = E$1('react.fragment');
    wa = E$1('react.strict_mode');
    xa = E$1('react.profiler');
    ya = E$1('react.provider');
    za = E$1('react.context');
    Aa = E$1('react.forward_ref');
    Ba = E$1('react.suspense');
    Ca = E$1('react.suspense_list');
    Da = E$1('react.memo');
    Ea = E$1('react.lazy');
    Fa = E$1('react.block');
    E$1('react.scope');
    Ga = E$1('react.opaque.id');
    Ha = E$1('react.debug_trace_mode');
    Ia = E$1('react.offscreen');
    Ja = E$1('react.legacy_hidden');
  }
  var Ka = 'function' === typeof Symbol && Symbol.iterator;
  function La(a) {
    if (null === a || 'object' !== typeof a) return null;
    a = (Ka && a[Ka]) || a['@@iterator'];
    return 'function' === typeof a ? a : null;
  }
  var Ma;
  function Na(a) {
    if (void 0 === Ma)
      try {
        throw Error();
      } catch (c) {
        var b = c.stack.trim().match(/\n( *(at )?)/);
        Ma = (b && b[1]) || '';
      }
    return '\n' + Ma + a;
  }
  var Oa = !1;
  function Pa(a, b) {
    if (!a || Oa) return '';
    Oa = !0;
    var c = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (b)
        if (
          ((b = function () {
            throw Error();
          }),
          Object.defineProperty(b.prototype, 'props', {
            set: function () {
              throw Error();
            },
          }),
          'object' === typeof Reflect && Reflect.construct)
        ) {
          try {
            Reflect.construct(b, []);
          } catch (k) {
            var d = k;
          }
          Reflect.construct(a, [], b);
        } else {
          try {
            b.call();
          } catch (k) {
            d = k;
          }
          a.call(b.prototype);
        }
      else {
        try {
          throw Error();
        } catch (k) {
          d = k;
        }
        a();
      }
    } catch (k) {
      if (k && d && 'string' === typeof k.stack) {
        for (
          var e = k.stack.split('\n'),
            f = d.stack.split('\n'),
            g = e.length - 1,
            h = f.length - 1;
          1 <= g && 0 <= h && e[g] !== f[h];

        )
          h--;
        for (; 1 <= g && 0 <= h; g--, h--)
          if (e[g] !== f[h]) {
            if (1 !== g || 1 !== h) {
              do
                if ((g--, h--, 0 > h || e[g] !== f[h]))
                  return '\n' + e[g].replace(' at new ', ' at ');
              while (1 <= g && 0 <= h);
            }
            break;
          }
      }
    } finally {
      (Oa = !1), (Error.prepareStackTrace = c);
    }
    return (a = a ? a.displayName || a.name : '') ? Na(a) : '';
  }
  function Qa(a) {
    switch (a.tag) {
      case 5:
        return Na(a.type);
      case 16:
        return Na('Lazy');
      case 13:
        return Na('Suspense');
      case 19:
        return Na('SuspenseList');
      case 0:
      case 2:
      case 15:
        return (a = Pa(a.type, !1)), a;
      case 11:
        return (a = Pa(a.type.render, !1)), a;
      case 22:
        return (a = Pa(a.type._render, !1)), a;
      case 1:
        return (a = Pa(a.type, !0)), a;
      default:
        return '';
    }
  }
  function Ra(a) {
    if (null == a) return null;
    if ('function' === typeof a) return a.displayName || a.name || null;
    if ('string' === typeof a) return a;
    switch (a) {
      case ua:
        return 'Fragment';
      case ta:
        return 'Portal';
      case xa:
        return 'Profiler';
      case wa:
        return 'StrictMode';
      case Ba:
        return 'Suspense';
      case Ca:
        return 'SuspenseList';
    }
    if ('object' === typeof a)
      switch (a.$$typeof) {
        case za:
          return (a.displayName || 'Context') + '.Consumer';
        case ya:
          return (a._context.displayName || 'Context') + '.Provider';
        case Aa:
          var b = a.render;
          b = b.displayName || b.name || '';
          return (
            a.displayName || ('' !== b ? 'ForwardRef(' + b + ')' : 'ForwardRef')
          );
        case Da:
          return Ra(a.type);
        case Fa:
          return Ra(a._render);
        case Ea:
          b = a._payload;
          a = a._init;
          try {
            return Ra(a(b));
          } catch (c) {}
      }
    return null;
  }
  function Sa(a) {
    switch (typeof a) {
      case 'boolean':
      case 'number':
      case 'object':
      case 'string':
      case 'undefined':
        return a;
      default:
        return '';
    }
  }
  function Ta(a) {
    var b = a.type;
    return (
      (a = a.nodeName) &&
      'input' === a.toLowerCase() &&
      ('checkbox' === b || 'radio' === b)
    );
  }
  function Ua(a) {
    var b = Ta(a) ? 'checked' : 'value',
      c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b),
      d = '' + a[b];
    if (
      !a.hasOwnProperty(b) &&
      'undefined' !== typeof c &&
      'function' === typeof c.get &&
      'function' === typeof c.set
    ) {
      var e = c.get,
        f = c.set;
      Object.defineProperty(a, b, {
        configurable: !0,
        get: function () {
          return e.call(this);
        },
        set: function (a) {
          d = '' + a;
          f.call(this, a);
        },
      });
      Object.defineProperty(a, b, { enumerable: c.enumerable });
      return {
        getValue: function () {
          return d;
        },
        setValue: function (a) {
          d = '' + a;
        },
        stopTracking: function () {
          a._valueTracker = null;
          delete a[b];
        },
      };
    }
  }
  function Va(a) {
    a._valueTracker || (a._valueTracker = Ua(a));
  }
  function Wa(a) {
    if (!a) return !1;
    var b = a._valueTracker;
    if (!b) return !0;
    var c = b.getValue();
    var d = '';
    a && (d = Ta(a) ? (a.checked ? 'true' : 'false') : a.value);
    a = d;
    return a !== c ? (b.setValue(a), !0) : !1;
  }
  function Xa(a) {
    a = a || ('undefined' !== typeof document ? document : void 0);
    if ('undefined' === typeof a) return null;
    try {
      return a.activeElement || a.body;
    } catch (b) {
      return a.body;
    }
  }
  function Ya(a, b) {
    var c = b.checked;
    return m({}, b, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: null != c ? c : a._wrapperState.initialChecked,
    });
  }
  function Za(a, b) {
    var c = null == b.defaultValue ? '' : b.defaultValue,
      d = null != b.checked ? b.checked : b.defaultChecked;
    c = Sa(null != b.value ? b.value : c);
    a._wrapperState = {
      initialChecked: d,
      initialValue: c,
      controlled:
        'checkbox' === b.type || 'radio' === b.type
          ? null != b.checked
          : null != b.value,
    };
  }
  function $a(a, b) {
    b = b.checked;
    null != b && qa(a, 'checked', b, !1);
  }
  function ab(a, b) {
    $a(a, b);
    var c = Sa(b.value),
      d = b.type;
    if (null != c)
      if ('number' === d) {
        if ((0 === c && '' === a.value) || a.value != c) a.value = '' + c;
      } else a.value !== '' + c && (a.value = '' + c);
    else if ('submit' === d || 'reset' === d) {
      a.removeAttribute('value');
      return;
    }
    b.hasOwnProperty('value')
      ? bb(a, b.type, c)
      : b.hasOwnProperty('defaultValue') && bb(a, b.type, Sa(b.defaultValue));
    null == b.checked &&
      null != b.defaultChecked &&
      (a.defaultChecked = !!b.defaultChecked);
  }
  function cb(a, b, c) {
    if (b.hasOwnProperty('value') || b.hasOwnProperty('defaultValue')) {
      var d = b.type;
      if (
        !(
          ('submit' !== d && 'reset' !== d) ||
          (void 0 !== b.value && null !== b.value)
        )
      )
        return;
      b = '' + a._wrapperState.initialValue;
      c || b === a.value || (a.value = b);
      a.defaultValue = b;
    }
    c = a.name;
    '' !== c && (a.name = '');
    a.defaultChecked = !!a._wrapperState.initialChecked;
    '' !== c && (a.name = c);
  }
  function bb(a, b, c) {
    if ('number' !== b || Xa(a.ownerDocument) !== a)
      null == c
        ? (a.defaultValue = '' + a._wrapperState.initialValue)
        : a.defaultValue !== '' + c && (a.defaultValue = '' + c);
  }
  function db(a) {
    var b = '';
    aa.Children.forEach(a, function (a) {
      null != a && (b += a);
    });
    return b;
  }
  function eb(a, b) {
    a = m({ children: void 0 }, b);
    if ((b = db(b.children))) a.children = b;
    return a;
  }
  function fb(a, b, c, d) {
    a = a.options;
    if (b) {
      b = {};
      for (var e = 0; e < c.length; e++) b['$' + c[e]] = !0;
      for (c = 0; c < a.length; c++)
        (e = b.hasOwnProperty('$' + a[c].value)),
          a[c].selected !== e && (a[c].selected = e),
          e && d && (a[c].defaultSelected = !0);
    } else {
      c = '' + Sa(c);
      b = null;
      for (e = 0; e < a.length; e++) {
        if (a[e].value === c) {
          a[e].selected = !0;
          d && (a[e].defaultSelected = !0);
          return;
        }
        null !== b || a[e].disabled || (b = a[e]);
      }
      null !== b && (b.selected = !0);
    }
  }
  function gb(a, b) {
    if (null != b.dangerouslySetInnerHTML) throw Error(y$1(91));
    return m({}, b, {
      value: void 0,
      defaultValue: void 0,
      children: '' + a._wrapperState.initialValue,
    });
  }
  function hb(a, b) {
    var c = b.value;
    if (null == c) {
      c = b.children;
      b = b.defaultValue;
      if (null != c) {
        if (null != b) throw Error(y$1(92));
        if (Array.isArray(c)) {
          if (!(1 >= c.length)) throw Error(y$1(93));
          c = c[0];
        }
        b = c;
      }
      null == b && (b = '');
      c = b;
    }
    a._wrapperState = { initialValue: Sa(c) };
  }
  function ib(a, b) {
    var c = Sa(b.value),
      d = Sa(b.defaultValue);
    null != c &&
      ((c = '' + c),
      c !== a.value && (a.value = c),
      null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
    null != d && (a.defaultValue = '' + d);
  }
  function jb(a) {
    var b = a.textContent;
    b === a._wrapperState.initialValue &&
      '' !== b &&
      null !== b &&
      (a.value = b);
  }
  var kb = {
    html: 'http://www.w3.org/1999/xhtml',
    mathml: 'http://www.w3.org/1998/Math/MathML',
    svg: 'http://www.w3.org/2000/svg',
  };
  function lb(a) {
    switch (a) {
      case 'svg':
        return 'http://www.w3.org/2000/svg';
      case 'math':
        return 'http://www.w3.org/1998/Math/MathML';
      default:
        return 'http://www.w3.org/1999/xhtml';
    }
  }
  function mb(a, b) {
    return null == a || 'http://www.w3.org/1999/xhtml' === a
      ? lb(b)
      : 'http://www.w3.org/2000/svg' === a && 'foreignObject' === b
      ? 'http://www.w3.org/1999/xhtml'
      : a;
  }
  var nb,
    ob = (function (a) {
      return 'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
        ? function (b, c, d, e) {
            MSApp.execUnsafeLocalFunction(function () {
              return a(b, c, d, e);
            });
          }
        : a;
    })(function (a, b) {
      if (a.namespaceURI !== kb.svg || 'innerHTML' in a) a.innerHTML = b;
      else {
        nb = nb || document.createElement('div');
        nb.innerHTML = '<svg>' + b.valueOf().toString() + '</svg>';
        for (b = nb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
        for (; b.firstChild; ) a.appendChild(b.firstChild);
      }
    });
  function pb(a, b) {
    if (b) {
      var c = a.firstChild;
      if (c && c === a.lastChild && 3 === c.nodeType) {
        c.nodeValue = b;
        return;
      }
    }
    a.textContent = b;
  }
  var qb = {
      animationIterationCount: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    rb = ['Webkit', 'ms', 'Moz', 'O'];
  Object.keys(qb).forEach(function (a) {
    rb.forEach(function (b) {
      b = b + a.charAt(0).toUpperCase() + a.substring(1);
      qb[b] = qb[a];
    });
  });
  function sb(a, b, c) {
    return null == b || 'boolean' === typeof b || '' === b
      ? ''
      : c || 'number' !== typeof b || 0 === b || (qb.hasOwnProperty(a) && qb[a])
      ? ('' + b).trim()
      : b + 'px';
  }
  function tb(a, b) {
    a = a.style;
    for (var c in b)
      if (b.hasOwnProperty(c)) {
        var d = 0 === c.indexOf('--'),
          e = sb(c, b[c], d);
        'float' === c && (c = 'cssFloat');
        d ? a.setProperty(c, e) : (a[c] = e);
      }
  }
  var ub = m(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    },
  );
  function vb(a, b) {
    if (b) {
      if (ub[a] && (null != b.children || null != b.dangerouslySetInnerHTML))
        throw Error(y$1(137, a));
      if (null != b.dangerouslySetInnerHTML) {
        if (null != b.children) throw Error(y$1(60));
        if (
          !(
            'object' === typeof b.dangerouslySetInnerHTML &&
            '__html' in b.dangerouslySetInnerHTML
          )
        )
          throw Error(y$1(61));
      }
      if (null != b.style && 'object' !== typeof b.style) throw Error(y$1(62));
    }
  }
  function wb(a, b) {
    if (-1 === a.indexOf('-')) return 'string' === typeof b.is;
    switch (a) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1;
      default:
        return !0;
    }
  }
  function xb(a) {
    a = a.target || a.srcElement || window;
    a.correspondingUseElement && (a = a.correspondingUseElement);
    return 3 === a.nodeType ? a.parentNode : a;
  }
  var yb = null,
    zb = null,
    Ab = null;
  function Bb(a) {
    if ((a = Cb(a))) {
      if ('function' !== typeof yb) throw Error(y$1(280));
      var b = a.stateNode;
      b && ((b = Db(b)), yb(a.stateNode, a.type, b));
    }
  }
  function Eb(a) {
    zb ? (Ab ? Ab.push(a) : (Ab = [a])) : (zb = a);
  }
  function Fb() {
    if (zb) {
      var a = zb,
        b = Ab;
      Ab = zb = null;
      Bb(a);
      if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
    }
  }
  function Gb(a, b) {
    return a(b);
  }
  function Hb(a, b, c, d, e) {
    return a(b, c, d, e);
  }
  function Ib() {}
  var Jb = Gb,
    Kb = !1,
    Lb = !1;
  function Mb() {
    if (null !== zb || null !== Ab) Ib(), Fb();
  }
  function Nb(a, b, c) {
    if (Lb) return a(b, c);
    Lb = !0;
    try {
      return Jb(a, b, c);
    } finally {
      (Lb = !1), Mb();
    }
  }
  function Ob(a, b) {
    var c = a.stateNode;
    if (null === c) return null;
    var d = Db(c);
    if (null === d) return null;
    c = d[b];
    a: switch (b) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        (d = !d.disabled) ||
          ((a = a.type),
          (d = !(
            'button' === a ||
            'input' === a ||
            'select' === a ||
            'textarea' === a
          )));
        a = !d;
        break a;
      default:
        a = !1;
    }
    if (a) return null;
    if (c && 'function' !== typeof c) throw Error(y$1(231, b, typeof c));
    return c;
  }
  var Pb = !1;
  if (fa)
    try {
      var Qb = {};
      Object.defineProperty(Qb, 'passive', {
        get: function () {
          Pb = !0;
        },
      });
      window.addEventListener('test', Qb, Qb);
      window.removeEventListener('test', Qb, Qb);
    } catch (a) {
      Pb = !1;
    }
  function Rb(a, b, c, d, e, f, g, h, k) {
    var l = Array.prototype.slice.call(arguments, 3);
    try {
      b.apply(c, l);
    } catch (n) {
      this.onError(n);
    }
  }
  var Sb = !1,
    Tb = null,
    Ub = !1,
    Vb = null,
    Wb = {
      onError: function (a) {
        Sb = !0;
        Tb = a;
      },
    };
  function Xb(a, b, c, d, e, f, g, h, k) {
    Sb = !1;
    Tb = null;
    Rb.apply(Wb, arguments);
  }
  function Yb(a, b, c, d, e, f, g, h, k) {
    Xb.apply(this, arguments);
    if (Sb) {
      if (Sb) {
        var l = Tb;
        Sb = !1;
        Tb = null;
      } else throw Error(y$1(198));
      Ub || ((Ub = !0), (Vb = l));
    }
  }
  function Zb(a) {
    var b = a,
      c = a;
    if (a.alternate) for (; b.return; ) b = b.return;
    else {
      a = b;
      do (b = a), 0 !== (b.flags & 1026) && (c = b.return), (a = b.return);
      while (a);
    }
    return 3 === b.tag ? c : null;
  }
  function $b(a) {
    if (13 === a.tag) {
      var b = a.memoizedState;
      null === b && ((a = a.alternate), null !== a && (b = a.memoizedState));
      if (null !== b) return b.dehydrated;
    }
    return null;
  }
  function ac(a) {
    if (Zb(a) !== a) throw Error(y$1(188));
  }
  function bc(a) {
    var b = a.alternate;
    if (!b) {
      b = Zb(a);
      if (null === b) throw Error(y$1(188));
      return b !== a ? null : a;
    }
    for (var c = a, d = b; ; ) {
      var e = c.return;
      if (null === e) break;
      var f = e.alternate;
      if (null === f) {
        d = e.return;
        if (null !== d) {
          c = d;
          continue;
        }
        break;
      }
      if (e.child === f.child) {
        for (f = e.child; f; ) {
          if (f === c) return ac(e), a;
          if (f === d) return ac(e), b;
          f = f.sibling;
        }
        throw Error(y$1(188));
      }
      if (c.return !== d.return) (c = e), (d = f);
      else {
        for (var g = !1, h = e.child; h; ) {
          if (h === c) {
            g = !0;
            c = e;
            d = f;
            break;
          }
          if (h === d) {
            g = !0;
            d = e;
            c = f;
            break;
          }
          h = h.sibling;
        }
        if (!g) {
          for (h = f.child; h; ) {
            if (h === c) {
              g = !0;
              c = f;
              d = e;
              break;
            }
            if (h === d) {
              g = !0;
              d = f;
              c = e;
              break;
            }
            h = h.sibling;
          }
          if (!g) throw Error(y$1(189));
        }
      }
      if (c.alternate !== d) throw Error(y$1(190));
    }
    if (3 !== c.tag) throw Error(y$1(188));
    return c.stateNode.current === c ? a : b;
  }
  function cc(a) {
    a = bc(a);
    if (!a) return null;
    for (var b = a; ; ) {
      if (5 === b.tag || 6 === b.tag) return b;
      if (b.child) (b.child.return = b), (b = b.child);
      else {
        if (b === a) break;
        for (; !b.sibling; ) {
          if (!b.return || b.return === a) return null;
          b = b.return;
        }
        b.sibling.return = b.return;
        b = b.sibling;
      }
    }
    return null;
  }
  function dc(a, b) {
    for (var c = a.alternate; null !== b; ) {
      if (b === a || b === c) return !0;
      b = b.return;
    }
    return !1;
  }
  var ec,
    fc,
    gc,
    hc,
    ic = !1,
    jc = [],
    kc = null,
    lc = null,
    mc = null,
    nc = new Map(),
    oc = new Map(),
    pc = [],
    qc =
      'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
        ' ',
      );
  function rc(a, b, c, d, e) {
    return {
      blockedOn: a,
      domEventName: b,
      eventSystemFlags: c | 16,
      nativeEvent: e,
      targetContainers: [d],
    };
  }
  function sc(a, b) {
    switch (a) {
      case 'focusin':
      case 'focusout':
        kc = null;
        break;
      case 'dragenter':
      case 'dragleave':
        lc = null;
        break;
      case 'mouseover':
      case 'mouseout':
        mc = null;
        break;
      case 'pointerover':
      case 'pointerout':
        nc.delete(b.pointerId);
        break;
      case 'gotpointercapture':
      case 'lostpointercapture':
        oc.delete(b.pointerId);
    }
  }
  function tc(a, b, c, d, e, f) {
    if (null === a || a.nativeEvent !== f)
      return (
        (a = rc(b, c, d, e, f)),
        null !== b && ((b = Cb(b)), null !== b && fc(b)),
        a
      );
    a.eventSystemFlags |= d;
    b = a.targetContainers;
    null !== e && -1 === b.indexOf(e) && b.push(e);
    return a;
  }
  function uc(a, b, c, d, e) {
    switch (b) {
      case 'focusin':
        return (kc = tc(kc, a, b, c, d, e)), !0;
      case 'dragenter':
        return (lc = tc(lc, a, b, c, d, e)), !0;
      case 'mouseover':
        return (mc = tc(mc, a, b, c, d, e)), !0;
      case 'pointerover':
        var f = e.pointerId;
        nc.set(f, tc(nc.get(f) || null, a, b, c, d, e));
        return !0;
      case 'gotpointercapture':
        return (
          (f = e.pointerId), oc.set(f, tc(oc.get(f) || null, a, b, c, d, e)), !0
        );
    }
    return !1;
  }
  function vc(a) {
    var b = wc(a.target);
    if (null !== b) {
      var c = Zb(b);
      if (null !== c)
        if (((b = c.tag), 13 === b)) {
          if (((b = $b(c)), null !== b)) {
            a.blockedOn = b;
            hc(a.lanePriority, function () {
              r$1.unstable_runWithPriority(a.priority, function () {
                gc(c);
              });
            });
            return;
          }
        } else if (3 === b && c.stateNode.hydrate) {
          a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
          return;
        }
    }
    a.blockedOn = null;
  }
  function xc(a) {
    if (null !== a.blockedOn) return !1;
    for (var b = a.targetContainers; 0 < b.length; ) {
      var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
      if (null !== c)
        return (b = Cb(c)), null !== b && fc(b), (a.blockedOn = c), !1;
      b.shift();
    }
    return !0;
  }
  function zc(a, b, c) {
    xc(a) && c.delete(b);
  }
  function Ac() {
    for (ic = !1; 0 < jc.length; ) {
      var a = jc[0];
      if (null !== a.blockedOn) {
        a = Cb(a.blockedOn);
        null !== a && ec(a);
        break;
      }
      for (var b = a.targetContainers; 0 < b.length; ) {
        var c = yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
        if (null !== c) {
          a.blockedOn = c;
          break;
        }
        b.shift();
      }
      null === a.blockedOn && jc.shift();
    }
    null !== kc && xc(kc) && (kc = null);
    null !== lc && xc(lc) && (lc = null);
    null !== mc && xc(mc) && (mc = null);
    nc.forEach(zc);
    oc.forEach(zc);
  }
  function Bc(a, b) {
    a.blockedOn === b &&
      ((a.blockedOn = null),
      ic ||
        ((ic = !0),
        r$1.unstable_scheduleCallback(r$1.unstable_NormalPriority, Ac)));
  }
  function Cc(a) {
    function b(b) {
      return Bc(b, a);
    }
    if (0 < jc.length) {
      Bc(jc[0], a);
      for (var c = 1; c < jc.length; c++) {
        var d = jc[c];
        d.blockedOn === a && (d.blockedOn = null);
      }
    }
    null !== kc && Bc(kc, a);
    null !== lc && Bc(lc, a);
    null !== mc && Bc(mc, a);
    nc.forEach(b);
    oc.forEach(b);
    for (c = 0; c < pc.length; c++)
      (d = pc[c]), d.blockedOn === a && (d.blockedOn = null);
    for (; 0 < pc.length && ((c = pc[0]), null === c.blockedOn); )
      vc(c), null === c.blockedOn && pc.shift();
  }
  function Dc(a, b) {
    var c = {};
    c[a.toLowerCase()] = b.toLowerCase();
    c['Webkit' + a] = 'webkit' + b;
    c['Moz' + a] = 'moz' + b;
    return c;
  }
  var Ec = {
      animationend: Dc('Animation', 'AnimationEnd'),
      animationiteration: Dc('Animation', 'AnimationIteration'),
      animationstart: Dc('Animation', 'AnimationStart'),
      transitionend: Dc('Transition', 'TransitionEnd'),
    },
    Fc = {},
    Gc = {};
  fa &&
    ((Gc = document.createElement('div').style),
    'AnimationEvent' in window ||
      (delete Ec.animationend.animation,
      delete Ec.animationiteration.animation,
      delete Ec.animationstart.animation),
    'TransitionEvent' in window || delete Ec.transitionend.transition);
  function Hc(a) {
    if (Fc[a]) return Fc[a];
    if (!Ec[a]) return a;
    var b = Ec[a],
      c;
    for (c in b) if (b.hasOwnProperty(c) && c in Gc) return (Fc[a] = b[c]);
    return a;
  }
  var Ic = Hc('animationend'),
    Jc = Hc('animationiteration'),
    Kc = Hc('animationstart'),
    Lc = Hc('transitionend'),
    Mc = new Map(),
    Nc = new Map(),
    Oc = [
      'abort',
      'abort',
      Ic,
      'animationEnd',
      Jc,
      'animationIteration',
      Kc,
      'animationStart',
      'canplay',
      'canPlay',
      'canplaythrough',
      'canPlayThrough',
      'durationchange',
      'durationChange',
      'emptied',
      'emptied',
      'encrypted',
      'encrypted',
      'ended',
      'ended',
      'error',
      'error',
      'gotpointercapture',
      'gotPointerCapture',
      'load',
      'load',
      'loadeddata',
      'loadedData',
      'loadedmetadata',
      'loadedMetadata',
      'loadstart',
      'loadStart',
      'lostpointercapture',
      'lostPointerCapture',
      'playing',
      'playing',
      'progress',
      'progress',
      'seeking',
      'seeking',
      'stalled',
      'stalled',
      'suspend',
      'suspend',
      'timeupdate',
      'timeUpdate',
      Lc,
      'transitionEnd',
      'waiting',
      'waiting',
    ];
  function Pc(a, b) {
    for (var c = 0; c < a.length; c += 2) {
      var d = a[c],
        e = a[c + 1];
      e = 'on' + (e[0].toUpperCase() + e.slice(1));
      Nc.set(d, b);
      Mc.set(d, e);
      da(e, [d]);
    }
  }
  var Qc = r$1.unstable_now;
  Qc();
  var F$1 = 8;
  function Rc(a) {
    if (0 !== (1 & a)) return (F$1 = 15), 1;
    if (0 !== (2 & a)) return (F$1 = 14), 2;
    if (0 !== (4 & a)) return (F$1 = 13), 4;
    var b = 24 & a;
    if (0 !== b) return (F$1 = 12), b;
    if (0 !== (a & 32)) return (F$1 = 11), 32;
    b = 192 & a;
    if (0 !== b) return (F$1 = 10), b;
    if (0 !== (a & 256)) return (F$1 = 9), 256;
    b = 3584 & a;
    if (0 !== b) return (F$1 = 8), b;
    if (0 !== (a & 4096)) return (F$1 = 7), 4096;
    b = 4186112 & a;
    if (0 !== b) return (F$1 = 6), b;
    b = 62914560 & a;
    if (0 !== b) return (F$1 = 5), b;
    if (a & 67108864) return (F$1 = 4), 67108864;
    if (0 !== (a & 134217728)) return (F$1 = 3), 134217728;
    b = 805306368 & a;
    if (0 !== b) return (F$1 = 2), b;
    if (0 !== (1073741824 & a)) return (F$1 = 1), 1073741824;
    F$1 = 8;
    return a;
  }
  function Sc(a) {
    switch (a) {
      case 99:
        return 15;
      case 98:
        return 10;
      case 97:
      case 96:
        return 8;
      case 95:
        return 2;
      default:
        return 0;
    }
  }
  function Tc(a) {
    switch (a) {
      case 15:
      case 14:
        return 99;
      case 13:
      case 12:
      case 11:
      case 10:
        return 98;
      case 9:
      case 8:
      case 7:
      case 6:
      case 4:
      case 5:
        return 97;
      case 3:
      case 2:
      case 1:
        return 95;
      case 0:
        return 90;
      default:
        throw Error(y$1(358, a));
    }
  }
  function Uc(a, b) {
    var c = a.pendingLanes;
    if (0 === c) return (F$1 = 0);
    var d = 0,
      e = 0,
      f = a.expiredLanes,
      g = a.suspendedLanes,
      h = a.pingedLanes;
    if (0 !== f) (d = f), (e = F$1 = 15);
    else if (((f = c & 134217727), 0 !== f)) {
      var k = f & ~g;
      0 !== k
        ? ((d = Rc(k)), (e = F$1))
        : ((h &= f), 0 !== h && ((d = Rc(h)), (e = F$1)));
    } else
      (f = c & ~g),
        0 !== f
          ? ((d = Rc(f)), (e = F$1))
          : 0 !== h && ((d = Rc(h)), (e = F$1));
    if (0 === d) return 0;
    d = 31 - Vc(d);
    d = c & (((0 > d ? 0 : 1 << d) << 1) - 1);
    if (0 !== b && b !== d && 0 === (b & g)) {
      Rc(b);
      if (e <= F$1) return b;
      F$1 = e;
    }
    b = a.entangledLanes;
    if (0 !== b)
      for (a = a.entanglements, b &= d; 0 < b; )
        (c = 31 - Vc(b)), (e = 1 << c), (d |= a[c]), (b &= ~e);
    return d;
  }
  function Wc(a) {
    a = a.pendingLanes & -1073741825;
    return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
  }
  function Xc(a, b) {
    switch (a) {
      case 15:
        return 1;
      case 14:
        return 2;
      case 12:
        return (a = Yc(24 & ~b)), 0 === a ? Xc(10, b) : a;
      case 10:
        return (a = Yc(192 & ~b)), 0 === a ? Xc(8, b) : a;
      case 8:
        return (
          (a = Yc(3584 & ~b)),
          0 === a && ((a = Yc(4186112 & ~b)), 0 === a && (a = 512)),
          a
        );
      case 2:
        return (b = Yc(805306368 & ~b)), 0 === b && (b = 268435456), b;
    }
    throw Error(y$1(358, a));
  }
  function Yc(a) {
    return a & -a;
  }
  function Zc(a) {
    for (var b = [], c = 0; 31 > c; c++) b.push(a);
    return b;
  }
  function $c(a, b, c) {
    a.pendingLanes |= b;
    var d = b - 1;
    a.suspendedLanes &= d;
    a.pingedLanes &= d;
    a = a.eventTimes;
    b = 31 - Vc(b);
    a[b] = c;
  }
  var Vc = Math.clz32 ? Math.clz32 : ad,
    bd = Math.log,
    cd = Math.LN2;
  function ad(a) {
    return 0 === a ? 32 : (31 - ((bd(a) / cd) | 0)) | 0;
  }
  var dd = r$1.unstable_UserBlockingPriority,
    ed = r$1.unstable_runWithPriority,
    fd = !0;
  function gd(a, b, c, d) {
    Kb || Ib();
    var e = hd,
      f = Kb;
    Kb = !0;
    try {
      Hb(e, a, b, c, d);
    } finally {
      (Kb = f) || Mb();
    }
  }
  function id(a, b, c, d) {
    ed(dd, hd.bind(null, a, b, c, d));
  }
  function hd(a, b, c, d) {
    if (fd) {
      var e;
      if ((e = 0 === (b & 4)) && 0 < jc.length && -1 < qc.indexOf(a))
        (a = rc(null, a, b, c, d)), jc.push(a);
      else {
        var f = yc(a, b, c, d);
        if (null === f) e && sc(a, d);
        else {
          if (e) {
            if (-1 < qc.indexOf(a)) {
              a = rc(f, a, b, c, d);
              jc.push(a);
              return;
            }
            if (uc(f, a, b, c, d)) return;
            sc(a, d);
          }
          jd(a, b, d, null, c);
        }
      }
    }
  }
  function yc(a, b, c, d) {
    var e = xb(d);
    e = wc(e);
    if (null !== e) {
      var f = Zb(e);
      if (null === f) e = null;
      else {
        var g = f.tag;
        if (13 === g) {
          e = $b(f);
          if (null !== e) return e;
          e = null;
        } else if (3 === g) {
          if (f.stateNode.hydrate)
            return 3 === f.tag ? f.stateNode.containerInfo : null;
          e = null;
        } else f !== e && (e = null);
      }
    }
    jd(a, b, d, e, c);
    return null;
  }
  var kd = null,
    ld = null,
    md = null;
  function nd() {
    if (md) return md;
    var a,
      b = ld,
      c = b.length,
      d,
      e = 'value' in kd ? kd.value : kd.textContent,
      f = e.length;
    for (a = 0; a < c && b[a] === e[a]; a++);
    var g = c - a;
    for (d = 1; d <= g && b[c - d] === e[f - d]; d++);
    return (md = e.slice(a, 1 < d ? 1 - d : void 0));
  }
  function od(a) {
    var b = a.keyCode;
    'charCode' in a
      ? ((a = a.charCode), 0 === a && 13 === b && (a = 13))
      : (a = b);
    10 === a && (a = 13);
    return 32 <= a || 13 === a ? a : 0;
  }
  function pd() {
    return !0;
  }
  function qd() {
    return !1;
  }
  function rd(a) {
    function b(b, d, e, f, g) {
      this._reactName = b;
      this._targetInst = e;
      this.type = d;
      this.nativeEvent = f;
      this.target = g;
      this.currentTarget = null;
      for (var c in a)
        a.hasOwnProperty(c) && ((b = a[c]), (this[c] = b ? b(f) : f[c]));
      this.isDefaultPrevented = (
        null != f.defaultPrevented ? f.defaultPrevented : !1 === f.returnValue
      )
        ? pd
        : qd;
      this.isPropagationStopped = qd;
      return this;
    }
    m(b.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a &&
          (a.preventDefault
            ? a.preventDefault()
            : 'unknown' !== typeof a.returnValue && (a.returnValue = !1),
          (this.isDefaultPrevented = pd));
      },
      stopPropagation: function () {
        var a = this.nativeEvent;
        a &&
          (a.stopPropagation
            ? a.stopPropagation()
            : 'unknown' !== typeof a.cancelBubble && (a.cancelBubble = !0),
          (this.isPropagationStopped = pd));
      },
      persist: function () {},
      isPersistent: pd,
    });
    return b;
  }
  var sd = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (a) {
        return a.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    td = rd(sd),
    ud = m({}, sd, { view: 0, detail: 0 }),
    vd = rd(ud),
    wd,
    xd,
    yd,
    Ad = m({}, ud, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: zd,
      button: 0,
      buttons: 0,
      relatedTarget: function (a) {
        return void 0 === a.relatedTarget
          ? a.fromElement === a.srcElement
            ? a.toElement
            : a.fromElement
          : a.relatedTarget;
      },
      movementX: function (a) {
        if ('movementX' in a) return a.movementX;
        a !== yd &&
          (yd && 'mousemove' === a.type
            ? ((wd = a.screenX - yd.screenX), (xd = a.screenY - yd.screenY))
            : (xd = wd = 0),
          (yd = a));
        return wd;
      },
      movementY: function (a) {
        return 'movementY' in a ? a.movementY : xd;
      },
    }),
    Bd = rd(Ad),
    Cd = m({}, Ad, { dataTransfer: 0 }),
    Dd = rd(Cd),
    Ed = m({}, ud, { relatedTarget: 0 }),
    Fd = rd(Ed),
    Gd = m({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Hd = rd(Gd),
    Id = m({}, sd, {
      clipboardData: function (a) {
        return 'clipboardData' in a ? a.clipboardData : window.clipboardData;
      },
    }),
    Jd = rd(Id),
    Kd = m({}, sd, { data: 0 }),
    Ld = rd(Kd),
    Md = {
      Esc: 'Escape',
      Spacebar: ' ',
      Left: 'ArrowLeft',
      Up: 'ArrowUp',
      Right: 'ArrowRight',
      Down: 'ArrowDown',
      Del: 'Delete',
      Win: 'OS',
      Menu: 'ContextMenu',
      Apps: 'ContextMenu',
      Scroll: 'ScrollLock',
      MozPrintableKey: 'Unidentified',
    },
    Nd = {
      8: 'Backspace',
      9: 'Tab',
      12: 'Clear',
      13: 'Enter',
      16: 'Shift',
      17: 'Control',
      18: 'Alt',
      19: 'Pause',
      20: 'CapsLock',
      27: 'Escape',
      32: ' ',
      33: 'PageUp',
      34: 'PageDown',
      35: 'End',
      36: 'Home',
      37: 'ArrowLeft',
      38: 'ArrowUp',
      39: 'ArrowRight',
      40: 'ArrowDown',
      45: 'Insert',
      46: 'Delete',
      112: 'F1',
      113: 'F2',
      114: 'F3',
      115: 'F4',
      116: 'F5',
      117: 'F6',
      118: 'F7',
      119: 'F8',
      120: 'F9',
      121: 'F10',
      122: 'F11',
      123: 'F12',
      144: 'NumLock',
      145: 'ScrollLock',
      224: 'Meta',
    },
    Od = {
      Alt: 'altKey',
      Control: 'ctrlKey',
      Meta: 'metaKey',
      Shift: 'shiftKey',
    };
  function Pd(a) {
    var b = this.nativeEvent;
    return b.getModifierState
      ? b.getModifierState(a)
      : (a = Od[a])
      ? !!b[a]
      : !1;
  }
  function zd() {
    return Pd;
  }
  var Qd = m({}, ud, {
      key: function (a) {
        if (a.key) {
          var b = Md[a.key] || a.key;
          if ('Unidentified' !== b) return b;
        }
        return 'keypress' === a.type
          ? ((a = od(a)), 13 === a ? 'Enter' : String.fromCharCode(a))
          : 'keydown' === a.type || 'keyup' === a.type
          ? Nd[a.keyCode] || 'Unidentified'
          : '';
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: zd,
      charCode: function (a) {
        return 'keypress' === a.type ? od(a) : 0;
      },
      keyCode: function (a) {
        return 'keydown' === a.type || 'keyup' === a.type ? a.keyCode : 0;
      },
      which: function (a) {
        return 'keypress' === a.type
          ? od(a)
          : 'keydown' === a.type || 'keyup' === a.type
          ? a.keyCode
          : 0;
      },
    }),
    Rd = rd(Qd),
    Sd = m({}, Ad, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Td = rd(Sd),
    Ud = m({}, ud, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: zd,
    }),
    Vd = rd(Ud),
    Wd = m({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Xd = rd(Wd),
    Yd = m({}, Ad, {
      deltaX: function (a) {
        return 'deltaX' in a
          ? a.deltaX
          : 'wheelDeltaX' in a
          ? -a.wheelDeltaX
          : 0;
      },
      deltaY: function (a) {
        return 'deltaY' in a
          ? a.deltaY
          : 'wheelDeltaY' in a
          ? -a.wheelDeltaY
          : 'wheelDelta' in a
          ? -a.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Zd = rd(Yd),
    $d = [9, 13, 27, 32],
    ae = fa && 'CompositionEvent' in window,
    be = null;
  fa && 'documentMode' in document && (be = document.documentMode);
  var ce = fa && 'TextEvent' in window && !be,
    de = fa && (!ae || (be && 8 < be && 11 >= be)),
    ee = String.fromCharCode(32),
    fe = !1;
  function ge(a, b) {
    switch (a) {
      case 'keyup':
        return -1 !== $d.indexOf(b.keyCode);
      case 'keydown':
        return 229 !== b.keyCode;
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0;
      default:
        return !1;
    }
  }
  function he(a) {
    a = a.detail;
    return 'object' === typeof a && 'data' in a ? a.data : null;
  }
  var ie = !1;
  function je(a, b) {
    switch (a) {
      case 'compositionend':
        return he(b);
      case 'keypress':
        if (32 !== b.which) return null;
        fe = !0;
        return ee;
      case 'textInput':
        return (a = b.data), a === ee && fe ? null : a;
      default:
        return null;
    }
  }
  function ke(a, b) {
    if (ie)
      return 'compositionend' === a || (!ae && ge(a, b))
        ? ((a = nd()), (md = ld = kd = null), (ie = !1), a)
        : null;
    switch (a) {
      case 'paste':
        return null;
      case 'keypress':
        if (!(b.ctrlKey || b.altKey || b.metaKey) || (b.ctrlKey && b.altKey)) {
          if (b.char && 1 < b.char.length) return b.char;
          if (b.which) return String.fromCharCode(b.which);
        }
        return null;
      case 'compositionend':
        return de && 'ko' !== b.locale ? null : b.data;
      default:
        return null;
    }
  }
  var le = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function me(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return 'input' === b ? !!le[a.type] : 'textarea' === b ? !0 : !1;
  }
  function ne(a, b, c, d) {
    Eb(d);
    b = oe(b, 'onChange');
    0 < b.length &&
      ((c = new td('onChange', 'change', null, c, d)),
      a.push({ event: c, listeners: b }));
  }
  var pe = null,
    qe = null;
  function re(a) {
    se(a, 0);
  }
  function te(a) {
    var b = ue(a);
    if (Wa(b)) return a;
  }
  function ve(a, b) {
    if ('change' === a) return b;
  }
  var we = !1;
  if (fa) {
    var xe;
    if (fa) {
      var ye = 'oninput' in document;
      if (!ye) {
        var ze = document.createElement('div');
        ze.setAttribute('oninput', 'return;');
        ye = 'function' === typeof ze.oninput;
      }
      xe = ye;
    } else xe = !1;
    we = xe && (!document.documentMode || 9 < document.documentMode);
  }
  function Ae() {
    pe && (pe.detachEvent('onpropertychange', Be), (qe = pe = null));
  }
  function Be(a) {
    if ('value' === a.propertyName && te(qe)) {
      var b = [];
      ne(b, qe, a, xb(a));
      a = re;
      if (Kb) a(b);
      else {
        Kb = !0;
        try {
          Gb(a, b);
        } finally {
          (Kb = !1), Mb();
        }
      }
    }
  }
  function Ce(a, b, c) {
    'focusin' === a
      ? (Ae(), (pe = b), (qe = c), pe.attachEvent('onpropertychange', Be))
      : 'focusout' === a && Ae();
  }
  function De(a) {
    if ('selectionchange' === a || 'keyup' === a || 'keydown' === a)
      return te(qe);
  }
  function Ee(a, b) {
    if ('click' === a) return te(b);
  }
  function Fe(a, b) {
    if ('input' === a || 'change' === a) return te(b);
  }
  function Ge(a, b) {
    return (a === b && (0 !== a || 1 / a === 1 / b)) || (a !== a && b !== b);
  }
  var He = 'function' === typeof Object.is ? Object.is : Ge,
    Ie = Object.prototype.hasOwnProperty;
  function Je(a, b) {
    if (He(a, b)) return !0;
    if (
      'object' !== typeof a ||
      null === a ||
      'object' !== typeof b ||
      null === b
    )
      return !1;
    var c = Object.keys(a),
      d = Object.keys(b);
    if (c.length !== d.length) return !1;
    for (d = 0; d < c.length; d++)
      if (!Ie.call(b, c[d]) || !He(a[c[d]], b[c[d]])) return !1;
    return !0;
  }
  function Ke(a) {
    for (; a && a.firstChild; ) a = a.firstChild;
    return a;
  }
  function Le(a, b) {
    var c = Ke(a);
    a = 0;
    for (var d; c; ) {
      if (3 === c.nodeType) {
        d = a + c.textContent.length;
        if (a <= b && d >= b) return { node: c, offset: b - a };
        a = d;
      }
      a: {
        for (; c; ) {
          if (c.nextSibling) {
            c = c.nextSibling;
            break a;
          }
          c = c.parentNode;
        }
        c = void 0;
      }
      c = Ke(c);
    }
  }
  function Me(a, b) {
    return a && b
      ? a === b
        ? !0
        : a && 3 === a.nodeType
        ? !1
        : b && 3 === b.nodeType
        ? Me(a, b.parentNode)
        : 'contains' in a
        ? a.contains(b)
        : a.compareDocumentPosition
        ? !!(a.compareDocumentPosition(b) & 16)
        : !1
      : !1;
  }
  function Ne() {
    for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
      try {
        var c = 'string' === typeof b.contentWindow.location.href;
      } catch (d) {
        c = !1;
      }
      if (c) a = b.contentWindow;
      else break;
      b = Xa(a.document);
    }
    return b;
  }
  function Oe(a) {
    var b = a && a.nodeName && a.nodeName.toLowerCase();
    return (
      b &&
      (('input' === b &&
        ('text' === a.type ||
          'search' === a.type ||
          'tel' === a.type ||
          'url' === a.type ||
          'password' === a.type)) ||
        'textarea' === b ||
        'true' === a.contentEditable)
    );
  }
  var Pe = fa && 'documentMode' in document && 11 >= document.documentMode,
    Qe = null,
    Re = null,
    Se = null,
    Te = !1;
  function Ue(a, b, c) {
    var d =
      c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
    Te ||
      null == Qe ||
      Qe !== Xa(d) ||
      ((d = Qe),
      'selectionStart' in d && Oe(d)
        ? (d = { start: d.selectionStart, end: d.selectionEnd })
        : ((d = (
            (d.ownerDocument && d.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (d = {
            anchorNode: d.anchorNode,
            anchorOffset: d.anchorOffset,
            focusNode: d.focusNode,
            focusOffset: d.focusOffset,
          })),
      (Se && Je(Se, d)) ||
        ((Se = d),
        (d = oe(Re, 'onSelect')),
        0 < d.length &&
          ((b = new td('onSelect', 'select', null, b, c)),
          a.push({ event: b, listeners: d }),
          (b.target = Qe))));
  }
  Pc(
    'cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange'.split(
      ' ',
    ),
    0,
  );
  Pc(
    'drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel'.split(
      ' ',
    ),
    1,
  );
  Pc(Oc, 2);
  for (
    var Ve =
        'change selectionchange textInput compositionstart compositionend compositionupdate'.split(
          ' ',
        ),
      We = 0;
    We < Ve.length;
    We++
  )
    Nc.set(Ve[We], 0);
  ea('onMouseEnter', ['mouseout', 'mouseover']);
  ea('onMouseLeave', ['mouseout', 'mouseover']);
  ea('onPointerEnter', ['pointerout', 'pointerover']);
  ea('onPointerLeave', ['pointerout', 'pointerover']);
  da(
    'onChange',
    'change click focusin focusout input keydown keyup selectionchange'.split(
      ' ',
    ),
  );
  da(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
      ' ',
    ),
  );
  da('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
  da(
    'onCompositionEnd',
    'compositionend focusout keydown keypress keyup mousedown'.split(' '),
  );
  da(
    'onCompositionStart',
    'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
  );
  da(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
  );
  var Xe =
      'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting'.split(
        ' ',
      ),
    Ye = new Set(
      'cancel close invalid load scroll toggle'.split(' ').concat(Xe),
    );
  function Ze(a, b, c) {
    var d = a.type || 'unknown-event';
    a.currentTarget = c;
    Yb(d, b, void 0, a);
    a.currentTarget = null;
  }
  function se(a, b) {
    b = 0 !== (b & 4);
    for (var c = 0; c < a.length; c++) {
      var d = a[c],
        e = d.event;
      d = d.listeners;
      a: {
        var f = void 0;
        if (b)
          for (var g = d.length - 1; 0 <= g; g--) {
            var h = d[g],
              k = h.instance,
              l = h.currentTarget;
            h = h.listener;
            if (k !== f && e.isPropagationStopped()) break a;
            Ze(e, h, l);
            f = k;
          }
        else
          for (g = 0; g < d.length; g++) {
            h = d[g];
            k = h.instance;
            l = h.currentTarget;
            h = h.listener;
            if (k !== f && e.isPropagationStopped()) break a;
            Ze(e, h, l);
            f = k;
          }
      }
    }
    if (Ub) throw ((a = Vb), (Ub = !1), (Vb = null), a);
  }
  function G$1(a, b) {
    var c = $e(b),
      d = a + '__bubble';
    c.has(d) || (af(b, a, 2, !1), c.add(d));
  }
  var bf = '_reactListening' + Math.random().toString(36).slice(2);
  function cf(a) {
    a[bf] ||
      ((a[bf] = !0),
      ba.forEach(function (b) {
        Ye.has(b) || df(b, !1, a, null);
        df(b, !0, a, null);
      }));
  }
  function df(a, b, c, d) {
    var e = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
      f = c;
    'selectionchange' === a && 9 !== c.nodeType && (f = c.ownerDocument);
    if (null !== d && !b && Ye.has(a)) {
      if ('scroll' !== a) return;
      e |= 2;
      f = d;
    }
    var g = $e(f),
      h = a + '__' + (b ? 'capture' : 'bubble');
    g.has(h) || (b && (e |= 4), af(f, a, e, b), g.add(h));
  }
  function af(a, b, c, d) {
    var e = Nc.get(b);
    switch (void 0 === e ? 2 : e) {
      case 0:
        e = gd;
        break;
      case 1:
        e = id;
        break;
      default:
        e = hd;
    }
    c = e.bind(null, b, c, a);
    e = void 0;
    !Pb ||
      ('touchstart' !== b && 'touchmove' !== b && 'wheel' !== b) ||
      (e = !0);
    d
      ? void 0 !== e
        ? a.addEventListener(b, c, { capture: !0, passive: e })
        : a.addEventListener(b, c, !0)
      : void 0 !== e
      ? a.addEventListener(b, c, { passive: e })
      : a.addEventListener(b, c, !1);
  }
  function jd(a, b, c, d, e) {
    var f = d;
    if (0 === (b & 1) && 0 === (b & 2) && null !== d)
      a: for (;;) {
        if (null === d) return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h = d.stateNode.containerInfo;
          if (h === e || (8 === h.nodeType && h.parentNode === e)) break;
          if (4 === g)
            for (g = d.return; null !== g; ) {
              var k = g.tag;
              if (3 === k || 4 === k)
                if (
                  ((k = g.stateNode.containerInfo),
                  k === e || (8 === k.nodeType && k.parentNode === e))
                )
                  return;
              g = g.return;
            }
          for (; null !== h; ) {
            g = wc(h);
            if (null === g) return;
            k = g.tag;
            if (5 === k || 6 === k) {
              d = f = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
    Nb(function () {
      var d = f,
        e = xb(c),
        g = [];
      a: {
        var h = Mc.get(a);
        if (void 0 !== h) {
          var k = td,
            x = a;
          switch (a) {
            case 'keypress':
              if (0 === od(c)) break a;
            case 'keydown':
            case 'keyup':
              k = Rd;
              break;
            case 'focusin':
              x = 'focus';
              k = Fd;
              break;
            case 'focusout':
              x = 'blur';
              k = Fd;
              break;
            case 'beforeblur':
            case 'afterblur':
              k = Fd;
              break;
            case 'click':
              if (2 === c.button) break a;
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              k = Bd;
              break;
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              k = Dd;
              break;
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              k = Vd;
              break;
            case Ic:
            case Jc:
            case Kc:
              k = Hd;
              break;
            case Lc:
              k = Xd;
              break;
            case 'scroll':
              k = vd;
              break;
            case 'wheel':
              k = Zd;
              break;
            case 'copy':
            case 'cut':
            case 'paste':
              k = Jd;
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              k = Td;
          }
          var w = 0 !== (b & 4),
            z = !w && 'scroll' === a,
            u = w ? (null !== h ? h + 'Capture' : null) : h;
          w = [];
          for (var t = d, q; null !== t; ) {
            q = t;
            var v = q.stateNode;
            5 === q.tag &&
              null !== v &&
              ((q = v),
              null !== u && ((v = Ob(t, u)), null != v && w.push(ef(t, v, q))));
            if (z) break;
            t = t.return;
          }
          0 < w.length &&
            ((h = new k(h, x, null, c, e)), g.push({ event: h, listeners: w }));
        }
      }
      if (0 === (b & 7)) {
        a: {
          h = 'mouseover' === a || 'pointerover' === a;
          k = 'mouseout' === a || 'pointerout' === a;
          if (
            h &&
            0 === (b & 16) &&
            (x = c.relatedTarget || c.fromElement) &&
            (wc(x) || x[ff])
          )
            break a;
          if (k || h) {
            h =
              e.window === e
                ? e
                : (h = e.ownerDocument)
                ? h.defaultView || h.parentWindow
                : window;
            if (k) {
              if (
                ((x = c.relatedTarget || c.toElement),
                (k = d),
                (x = x ? wc(x) : null),
                null !== x &&
                  ((z = Zb(x)), x !== z || (5 !== x.tag && 6 !== x.tag)))
              )
                x = null;
            } else (k = null), (x = d);
            if (k !== x) {
              w = Bd;
              v = 'onMouseLeave';
              u = 'onMouseEnter';
              t = 'mouse';
              if ('pointerout' === a || 'pointerover' === a)
                (w = Td),
                  (v = 'onPointerLeave'),
                  (u = 'onPointerEnter'),
                  (t = 'pointer');
              z = null == k ? h : ue(k);
              q = null == x ? h : ue(x);
              h = new w(v, t + 'leave', k, c, e);
              h.target = z;
              h.relatedTarget = q;
              v = null;
              wc(e) === d &&
                ((w = new w(u, t + 'enter', x, c, e)),
                (w.target = q),
                (w.relatedTarget = z),
                (v = w));
              z = v;
              if (k && x)
                b: {
                  w = k;
                  u = x;
                  t = 0;
                  for (q = w; q; q = gf(q)) t++;
                  q = 0;
                  for (v = u; v; v = gf(v)) q++;
                  for (; 0 < t - q; ) (w = gf(w)), t--;
                  for (; 0 < q - t; ) (u = gf(u)), q--;
                  for (; t--; ) {
                    if (w === u || (null !== u && w === u.alternate)) break b;
                    w = gf(w);
                    u = gf(u);
                  }
                  w = null;
                }
              else w = null;
              null !== k && hf(g, h, k, w, !1);
              null !== x && null !== z && hf(g, z, x, w, !0);
            }
          }
        }
        a: {
          h = d ? ue(d) : window;
          k = h.nodeName && h.nodeName.toLowerCase();
          if ('select' === k || ('input' === k && 'file' === h.type))
            var J = ve;
          else if (me(h))
            if (we) J = Fe;
            else {
              J = De;
              var K = Ce;
            }
          else
            (k = h.nodeName) &&
              'input' === k.toLowerCase() &&
              ('checkbox' === h.type || 'radio' === h.type) &&
              (J = Ee);
          if (J && (J = J(a, d))) {
            ne(g, J, c, e);
            break a;
          }
          K && K(a, h, d);
          'focusout' === a &&
            (K = h._wrapperState) &&
            K.controlled &&
            'number' === h.type &&
            bb(h, 'number', h.value);
        }
        K = d ? ue(d) : window;
        switch (a) {
          case 'focusin':
            if (me(K) || 'true' === K.contentEditable)
              (Qe = K), (Re = d), (Se = null);
            break;
          case 'focusout':
            Se = Re = Qe = null;
            break;
          case 'mousedown':
            Te = !0;
            break;
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            Te = !1;
            Ue(g, c, e);
            break;
          case 'selectionchange':
            if (Pe) break;
          case 'keydown':
          case 'keyup':
            Ue(g, c, e);
        }
        var Q;
        if (ae)
          b: {
            switch (a) {
              case 'compositionstart':
                var L = 'onCompositionStart';
                break b;
              case 'compositionend':
                L = 'onCompositionEnd';
                break b;
              case 'compositionupdate':
                L = 'onCompositionUpdate';
                break b;
            }
            L = void 0;
          }
        else
          ie
            ? ge(a, c) && (L = 'onCompositionEnd')
            : 'keydown' === a &&
              229 === c.keyCode &&
              (L = 'onCompositionStart');
        L &&
          (de &&
            'ko' !== c.locale &&
            (ie || 'onCompositionStart' !== L
              ? 'onCompositionEnd' === L && ie && (Q = nd())
              : ((kd = e),
                (ld = 'value' in kd ? kd.value : kd.textContent),
                (ie = !0))),
          (K = oe(d, L)),
          0 < K.length &&
            ((L = new Ld(L, a, null, c, e)),
            g.push({ event: L, listeners: K }),
            Q ? (L.data = Q) : ((Q = he(c)), null !== Q && (L.data = Q))));
        if ((Q = ce ? je(a, c) : ke(a, c)))
          (d = oe(d, 'onBeforeInput')),
            0 < d.length &&
              ((e = new Ld('onBeforeInput', 'beforeinput', null, c, e)),
              g.push({ event: e, listeners: d }),
              (e.data = Q));
      }
      se(g, b);
    });
  }
  function ef(a, b, c) {
    return { instance: a, listener: b, currentTarget: c };
  }
  function oe(a, b) {
    for (var c = b + 'Capture', d = []; null !== a; ) {
      var e = a,
        f = e.stateNode;
      5 === e.tag &&
        null !== f &&
        ((e = f),
        (f = Ob(a, c)),
        null != f && d.unshift(ef(a, f, e)),
        (f = Ob(a, b)),
        null != f && d.push(ef(a, f, e)));
      a = a.return;
    }
    return d;
  }
  function gf(a) {
    if (null === a) return null;
    do a = a.return;
    while (a && 5 !== a.tag);
    return a ? a : null;
  }
  function hf(a, b, c, d, e) {
    for (var f = b._reactName, g = []; null !== c && c !== d; ) {
      var h = c,
        k = h.alternate,
        l = h.stateNode;
      if (null !== k && k === d) break;
      5 === h.tag &&
        null !== l &&
        ((h = l),
        e
          ? ((k = Ob(c, f)), null != k && g.unshift(ef(c, k, h)))
          : e || ((k = Ob(c, f)), null != k && g.push(ef(c, k, h))));
      c = c.return;
    }
    0 !== g.length && a.push({ event: b, listeners: g });
  }
  function jf() {}
  var kf = null,
    lf = null;
  function mf(a, b) {
    switch (a) {
      case 'button':
      case 'input':
      case 'select':
      case 'textarea':
        return !!b.autoFocus;
    }
    return !1;
  }
  function nf(a, b) {
    return (
      'textarea' === a ||
      'option' === a ||
      'noscript' === a ||
      'string' === typeof b.children ||
      'number' === typeof b.children ||
      ('object' === typeof b.dangerouslySetInnerHTML &&
        null !== b.dangerouslySetInnerHTML &&
        null != b.dangerouslySetInnerHTML.__html)
    );
  }
  var of = 'function' === typeof setTimeout ? setTimeout : void 0,
    pf = 'function' === typeof clearTimeout ? clearTimeout : void 0;
  function qf(a) {
    1 === a.nodeType
      ? (a.textContent = '')
      : 9 === a.nodeType && ((a = a.body), null != a && (a.textContent = ''));
  }
  function rf(a) {
    for (; null != a; a = a.nextSibling) {
      var b = a.nodeType;
      if (1 === b || 3 === b) break;
    }
    return a;
  }
  function sf(a) {
    a = a.previousSibling;
    for (var b = 0; a; ) {
      if (8 === a.nodeType) {
        var c = a.data;
        if ('$' === c || '$!' === c || '$?' === c) {
          if (0 === b) return a;
          b--;
        } else '/$' === c && b++;
      }
      a = a.previousSibling;
    }
    return null;
  }
  var tf = 0;
  function uf(a) {
    return { $$typeof: Ga, toString: a, valueOf: a };
  }
  var vf = Math.random().toString(36).slice(2),
    wf = '__reactFiber$' + vf,
    xf = '__reactProps$' + vf,
    ff = '__reactContainer$' + vf,
    yf = '__reactEvents$' + vf;
  function wc(a) {
    var b = a[wf];
    if (b) return b;
    for (var c = a.parentNode; c; ) {
      if ((b = c[ff] || c[wf])) {
        c = b.alternate;
        if (null !== b.child || (null !== c && null !== c.child))
          for (a = sf(a); null !== a; ) {
            if ((c = a[wf])) return c;
            a = sf(a);
          }
        return b;
      }
      a = c;
      c = a.parentNode;
    }
    return null;
  }
  function Cb(a) {
    a = a[wf] || a[ff];
    return !a || (5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag)
      ? null
      : a;
  }
  function ue(a) {
    if (5 === a.tag || 6 === a.tag) return a.stateNode;
    throw Error(y$1(33));
  }
  function Db(a) {
    return a[xf] || null;
  }
  function $e(a) {
    var b = a[yf];
    void 0 === b && (b = a[yf] = new Set());
    return b;
  }
  var zf = [],
    Af = -1;
  function Bf(a) {
    return { current: a };
  }
  function H$1(a) {
    0 > Af || ((a.current = zf[Af]), (zf[Af] = null), Af--);
  }
  function I$1(a, b) {
    Af++;
    zf[Af] = a.current;
    a.current = b;
  }
  var Cf = {},
    M$1 = Bf(Cf),
    N = Bf(!1),
    Df = Cf;
  function Ef(a, b) {
    var c = a.type.contextTypes;
    if (!c) return Cf;
    var d = a.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
      return d.__reactInternalMemoizedMaskedChildContext;
    var e = {},
      f;
    for (f in c) e[f] = b[f];
    d &&
      ((a = a.stateNode),
      (a.__reactInternalMemoizedUnmaskedChildContext = b),
      (a.__reactInternalMemoizedMaskedChildContext = e));
    return e;
  }
  function Ff(a) {
    a = a.childContextTypes;
    return null !== a && void 0 !== a;
  }
  function Gf() {
    H$1(N);
    H$1(M$1);
  }
  function Hf(a, b, c) {
    if (M$1.current !== Cf) throw Error(y$1(168));
    I$1(M$1, b);
    I$1(N, c);
  }
  function If(a, b, c) {
    var d = a.stateNode;
    a = b.childContextTypes;
    if ('function' !== typeof d.getChildContext) return c;
    d = d.getChildContext();
    for (var e in d)
      if (!(e in a)) throw Error(y$1(108, Ra(b) || 'Unknown', e));
    return m({}, c, d);
  }
  function Jf(a) {
    a =
      ((a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext) || Cf;
    Df = M$1.current;
    I$1(M$1, a);
    I$1(N, N.current);
    return !0;
  }
  function Kf(a, b, c) {
    var d = a.stateNode;
    if (!d) throw Error(y$1(169));
    c
      ? ((a = If(a, b, Df)),
        (d.__reactInternalMemoizedMergedChildContext = a),
        H$1(N),
        H$1(M$1),
        I$1(M$1, a))
      : H$1(N);
    I$1(N, c);
  }
  var Lf = null,
    Mf = null,
    Nf = r$1.unstable_runWithPriority,
    Of = r$1.unstable_scheduleCallback,
    Pf = r$1.unstable_cancelCallback,
    Qf = r$1.unstable_shouldYield,
    Rf = r$1.unstable_requestPaint,
    Sf = r$1.unstable_now,
    Tf = r$1.unstable_getCurrentPriorityLevel,
    Uf = r$1.unstable_ImmediatePriority,
    Vf = r$1.unstable_UserBlockingPriority,
    Wf = r$1.unstable_NormalPriority,
    Xf = r$1.unstable_LowPriority,
    Yf = r$1.unstable_IdlePriority,
    Zf = {},
    $f = void 0 !== Rf ? Rf : function () {},
    ag = null,
    bg = null,
    cg = !1,
    dg = Sf(),
    O$1 =
      1e4 > dg
        ? Sf
        : function () {
            return Sf() - dg;
          };
  function eg() {
    switch (Tf()) {
      case Uf:
        return 99;
      case Vf:
        return 98;
      case Wf:
        return 97;
      case Xf:
        return 96;
      case Yf:
        return 95;
      default:
        throw Error(y$1(332));
    }
  }
  function fg(a) {
    switch (a) {
      case 99:
        return Uf;
      case 98:
        return Vf;
      case 97:
        return Wf;
      case 96:
        return Xf;
      case 95:
        return Yf;
      default:
        throw Error(y$1(332));
    }
  }
  function gg(a, b) {
    a = fg(a);
    return Nf(a, b);
  }
  function hg(a, b, c) {
    a = fg(a);
    return Of(a, b, c);
  }
  function ig() {
    if (null !== bg) {
      var a = bg;
      bg = null;
      Pf(a);
    }
    jg();
  }
  function jg() {
    if (!cg && null !== ag) {
      cg = !0;
      var a = 0;
      try {
        var b = ag;
        gg(99, function () {
          for (; a < b.length; a++) {
            var c = b[a];
            do c = c(!0);
            while (null !== c);
          }
        });
        ag = null;
      } catch (c) {
        throw (null !== ag && (ag = ag.slice(a + 1)), Of(Uf, ig), c);
      } finally {
        cg = !1;
      }
    }
  }
  var kg = ra.ReactCurrentBatchConfig;
  function lg(a, b) {
    if (a && a.defaultProps) {
      b = m({}, b);
      a = a.defaultProps;
      for (var c in a) void 0 === b[c] && (b[c] = a[c]);
      return b;
    }
    return b;
  }
  var mg = Bf(null),
    ng = null,
    og = null,
    pg = null;
  function qg() {
    pg = og = ng = null;
  }
  function rg(a) {
    var b = mg.current;
    H$1(mg);
    a.type._context._currentValue = b;
  }
  function sg(a, b) {
    for (; null !== a; ) {
      var c = a.alternate;
      if ((a.childLanes & b) === b)
        if (null === c || (c.childLanes & b) === b) break;
        else c.childLanes |= b;
      else (a.childLanes |= b), null !== c && (c.childLanes |= b);
      a = a.return;
    }
  }
  function tg(a, b) {
    ng = a;
    pg = og = null;
    a = a.dependencies;
    null !== a &&
      null !== a.firstContext &&
      (0 !== (a.lanes & b) && (ug = !0), (a.firstContext = null));
  }
  function vg(a, b) {
    if (pg !== a && !1 !== b && 0 !== b) {
      if ('number' !== typeof b || 1073741823 === b) (pg = a), (b = 1073741823);
      b = { context: a, observedBits: b, next: null };
      if (null === og) {
        if (null === ng) throw Error(y$1(308));
        og = b;
        ng.dependencies = { lanes: 0, firstContext: b, responders: null };
      } else og = og.next = b;
    }
    return a._currentValue;
  }
  var wg = !1;
  function xg(a) {
    a.updateQueue = {
      baseState: a.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null },
      effects: null,
    };
  }
  function yg(a, b) {
    a = a.updateQueue;
    b.updateQueue === a &&
      (b.updateQueue = {
        baseState: a.baseState,
        firstBaseUpdate: a.firstBaseUpdate,
        lastBaseUpdate: a.lastBaseUpdate,
        shared: a.shared,
        effects: a.effects,
      });
  }
  function zg(a, b) {
    return {
      eventTime: a,
      lane: b,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Ag(a, b) {
    a = a.updateQueue;
    if (null !== a) {
      a = a.shared;
      var c = a.pending;
      null === c ? (b.next = b) : ((b.next = c.next), (c.next = b));
      a.pending = b;
    }
  }
  function Bg(a, b) {
    var c = a.updateQueue,
      d = a.alternate;
    if (null !== d && ((d = d.updateQueue), c === d)) {
      var e = null,
        f = null;
      c = c.firstBaseUpdate;
      if (null !== c) {
        do {
          var g = {
            eventTime: c.eventTime,
            lane: c.lane,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          };
          null === f ? (e = f = g) : (f = f.next = g);
          c = c.next;
        } while (null !== c);
        null === f ? (e = f = b) : (f = f.next = b);
      } else e = f = b;
      c = {
        baseState: d.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: f,
        shared: d.shared,
        effects: d.effects,
      };
      a.updateQueue = c;
      return;
    }
    a = c.lastBaseUpdate;
    null === a ? (c.firstBaseUpdate = b) : (a.next = b);
    c.lastBaseUpdate = b;
  }
  function Cg(a, b, c, d) {
    var e = a.updateQueue;
    wg = !1;
    var f = e.firstBaseUpdate,
      g = e.lastBaseUpdate,
      h = e.shared.pending;
    if (null !== h) {
      e.shared.pending = null;
      var k = h,
        l = k.next;
      k.next = null;
      null === g ? (f = l) : (g.next = l);
      g = k;
      var n = a.alternate;
      if (null !== n) {
        n = n.updateQueue;
        var A = n.lastBaseUpdate;
        A !== g &&
          (null === A ? (n.firstBaseUpdate = l) : (A.next = l),
          (n.lastBaseUpdate = k));
      }
    }
    if (null !== f) {
      A = e.baseState;
      g = 0;
      n = l = k = null;
      do {
        h = f.lane;
        var p = f.eventTime;
        if ((d & h) === h) {
          null !== n &&
            (n = n.next =
              {
                eventTime: p,
                lane: 0,
                tag: f.tag,
                payload: f.payload,
                callback: f.callback,
                next: null,
              });
          a: {
            var C = a,
              x = f;
            h = b;
            p = c;
            switch (x.tag) {
              case 1:
                C = x.payload;
                if ('function' === typeof C) {
                  A = C.call(p, A, h);
                  break a;
                }
                A = C;
                break a;
              case 3:
                C.flags = (C.flags & -4097) | 64;
              case 0:
                C = x.payload;
                h = 'function' === typeof C ? C.call(p, A, h) : C;
                if (null === h || void 0 === h) break a;
                A = m({}, A, h);
                break a;
              case 2:
                wg = !0;
            }
          }
          null !== f.callback &&
            ((a.flags |= 32),
            (h = e.effects),
            null === h ? (e.effects = [f]) : h.push(f));
        } else
          (p = {
            eventTime: p,
            lane: h,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            null === n ? ((l = n = p), (k = A)) : (n = n.next = p),
            (g |= h);
        f = f.next;
        if (null === f)
          if (((h = e.shared.pending), null === h)) break;
          else
            (f = h.next),
              (h.next = null),
              (e.lastBaseUpdate = h),
              (e.shared.pending = null);
      } while (1);
      null === n && (k = A);
      e.baseState = k;
      e.firstBaseUpdate = l;
      e.lastBaseUpdate = n;
      Dg |= g;
      a.lanes = g;
      a.memoizedState = A;
    }
  }
  function Eg(a, b, c) {
    a = b.effects;
    b.effects = null;
    if (null !== a)
      for (b = 0; b < a.length; b++) {
        var d = a[b],
          e = d.callback;
        if (null !== e) {
          d.callback = null;
          d = c;
          if ('function' !== typeof e) throw Error(y$1(191, e));
          e.call(d);
        }
      }
  }
  var Fg = new aa.Component().refs;
  function Gg(a, b, c, d) {
    b = a.memoizedState;
    c = c(d, b);
    c = null === c || void 0 === c ? b : m({}, b, c);
    a.memoizedState = c;
    0 === a.lanes && (a.updateQueue.baseState = c);
  }
  var Kg = {
    isMounted: function (a) {
      return (a = a._reactInternals) ? Zb(a) === a : !1;
    },
    enqueueSetState: function (a, b, c) {
      a = a._reactInternals;
      var d = Hg(),
        e = Ig(a),
        f = zg(d, e);
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      Ag(a, f);
      Jg(a, e, d);
    },
    enqueueReplaceState: function (a, b, c) {
      a = a._reactInternals;
      var d = Hg(),
        e = Ig(a),
        f = zg(d, e);
      f.tag = 1;
      f.payload = b;
      void 0 !== c && null !== c && (f.callback = c);
      Ag(a, f);
      Jg(a, e, d);
    },
    enqueueForceUpdate: function (a, b) {
      a = a._reactInternals;
      var c = Hg(),
        d = Ig(a),
        e = zg(c, d);
      e.tag = 2;
      void 0 !== b && null !== b && (e.callback = b);
      Ag(a, e);
      Jg(a, d, c);
    },
  };
  function Lg(a, b, c, d, e, f, g) {
    a = a.stateNode;
    return 'function' === typeof a.shouldComponentUpdate
      ? a.shouldComponentUpdate(d, f, g)
      : b.prototype && b.prototype.isPureReactComponent
      ? !Je(c, d) || !Je(e, f)
      : !0;
  }
  function Mg(a, b, c) {
    var d = !1,
      e = Cf;
    var f = b.contextType;
    'object' === typeof f && null !== f
      ? (f = vg(f))
      : ((e = Ff(b) ? Df : M$1.current),
        (d = b.contextTypes),
        (f = (d = null !== d && void 0 !== d) ? Ef(a, e) : Cf));
    b = new b(c, f);
    a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
    b.updater = Kg;
    a.stateNode = b;
    b._reactInternals = a;
    d &&
      ((a = a.stateNode),
      (a.__reactInternalMemoizedUnmaskedChildContext = e),
      (a.__reactInternalMemoizedMaskedChildContext = f));
    return b;
  }
  function Ng(a, b, c, d) {
    a = b.state;
    'function' === typeof b.componentWillReceiveProps &&
      b.componentWillReceiveProps(c, d);
    'function' === typeof b.UNSAFE_componentWillReceiveProps &&
      b.UNSAFE_componentWillReceiveProps(c, d);
    b.state !== a && Kg.enqueueReplaceState(b, b.state, null);
  }
  function Og(a, b, c, d) {
    var e = a.stateNode;
    e.props = c;
    e.state = a.memoizedState;
    e.refs = Fg;
    xg(a);
    var f = b.contextType;
    'object' === typeof f && null !== f
      ? (e.context = vg(f))
      : ((f = Ff(b) ? Df : M$1.current), (e.context = Ef(a, f)));
    Cg(a, c, e, d);
    e.state = a.memoizedState;
    f = b.getDerivedStateFromProps;
    'function' === typeof f && (Gg(a, b, f, c), (e.state = a.memoizedState));
    'function' === typeof b.getDerivedStateFromProps ||
      'function' === typeof e.getSnapshotBeforeUpdate ||
      ('function' !== typeof e.UNSAFE_componentWillMount &&
        'function' !== typeof e.componentWillMount) ||
      ((b = e.state),
      'function' === typeof e.componentWillMount && e.componentWillMount(),
      'function' === typeof e.UNSAFE_componentWillMount &&
        e.UNSAFE_componentWillMount(),
      b !== e.state && Kg.enqueueReplaceState(e, e.state, null),
      Cg(a, c, e, d),
      (e.state = a.memoizedState));
    'function' === typeof e.componentDidMount && (a.flags |= 4);
  }
  var Pg = Array.isArray;
  function Qg(a, b, c) {
    a = c.ref;
    if (null !== a && 'function' !== typeof a && 'object' !== typeof a) {
      if (c._owner) {
        c = c._owner;
        if (c) {
          if (1 !== c.tag) throw Error(y$1(309));
          var d = c.stateNode;
        }
        if (!d) throw Error(y$1(147, a));
        var e = '' + a;
        if (
          null !== b &&
          null !== b.ref &&
          'function' === typeof b.ref &&
          b.ref._stringRef === e
        )
          return b.ref;
        b = function (a) {
          var b = d.refs;
          b === Fg && (b = d.refs = {});
          null === a ? delete b[e] : (b[e] = a);
        };
        b._stringRef = e;
        return b;
      }
      if ('string' !== typeof a) throw Error(y$1(284));
      if (!c._owner) throw Error(y$1(290, a));
    }
    return a;
  }
  function Rg(a, b) {
    if ('textarea' !== a.type)
      throw Error(
        y$1(
          31,
          '[object Object]' === Object.prototype.toString.call(b)
            ? 'object with keys {' + Object.keys(b).join(', ') + '}'
            : b,
        ),
      );
  }
  function Sg(a) {
    function b(b, c) {
      if (a) {
        var d = b.lastEffect;
        null !== d
          ? ((d.nextEffect = c), (b.lastEffect = c))
          : (b.firstEffect = b.lastEffect = c);
        c.nextEffect = null;
        c.flags = 8;
      }
    }
    function c(c, d) {
      if (!a) return null;
      for (; null !== d; ) b(c, d), (d = d.sibling);
      return null;
    }
    function d(a, b) {
      for (a = new Map(); null !== b; )
        null !== b.key ? a.set(b.key, b) : a.set(b.index, b), (b = b.sibling);
      return a;
    }
    function e(a, b) {
      a = Tg(a, b);
      a.index = 0;
      a.sibling = null;
      return a;
    }
    function f(b, c, d) {
      b.index = d;
      if (!a) return c;
      d = b.alternate;
      if (null !== d) return (d = d.index), d < c ? ((b.flags = 2), c) : d;
      b.flags = 2;
      return c;
    }
    function g(b) {
      a && null === b.alternate && (b.flags = 2);
      return b;
    }
    function h(a, b, c, d) {
      if (null === b || 6 !== b.tag)
        return (b = Ug(c, a.mode, d)), (b.return = a), b;
      b = e(b, c);
      b.return = a;
      return b;
    }
    function k(a, b, c, d) {
      if (null !== b && b.elementType === c.type)
        return (d = e(b, c.props)), (d.ref = Qg(a, b, c)), (d.return = a), d;
      d = Vg(c.type, c.key, c.props, null, a.mode, d);
      d.ref = Qg(a, b, c);
      d.return = a;
      return d;
    }
    function l(a, b, c, d) {
      if (
        null === b ||
        4 !== b.tag ||
        b.stateNode.containerInfo !== c.containerInfo ||
        b.stateNode.implementation !== c.implementation
      )
        return (b = Wg(c, a.mode, d)), (b.return = a), b;
      b = e(b, c.children || []);
      b.return = a;
      return b;
    }
    function n(a, b, c, d, f) {
      if (null === b || 7 !== b.tag)
        return (b = Xg(c, a.mode, d, f)), (b.return = a), b;
      b = e(b, c);
      b.return = a;
      return b;
    }
    function A(a, b, c) {
      if ('string' === typeof b || 'number' === typeof b)
        return (b = Ug('' + b, a.mode, c)), (b.return = a), b;
      if ('object' === typeof b && null !== b) {
        switch (b.$$typeof) {
          case sa:
            return (
              (c = Vg(b.type, b.key, b.props, null, a.mode, c)),
              (c.ref = Qg(a, null, b)),
              (c.return = a),
              c
            );
          case ta:
            return (b = Wg(b, a.mode, c)), (b.return = a), b;
        }
        if (Pg(b) || La(b))
          return (b = Xg(b, a.mode, c, null)), (b.return = a), b;
        Rg(a, b);
      }
      return null;
    }
    function p(a, b, c, d) {
      var e = null !== b ? b.key : null;
      if ('string' === typeof c || 'number' === typeof c)
        return null !== e ? null : h(a, b, '' + c, d);
      if ('object' === typeof c && null !== c) {
        switch (c.$$typeof) {
          case sa:
            return c.key === e
              ? c.type === ua
                ? n(a, b, c.props.children, d, e)
                : k(a, b, c, d)
              : null;
          case ta:
            return c.key === e ? l(a, b, c, d) : null;
        }
        if (Pg(c) || La(c)) return null !== e ? null : n(a, b, c, d, null);
        Rg(a, c);
      }
      return null;
    }
    function C(a, b, c, d, e) {
      if ('string' === typeof d || 'number' === typeof d)
        return (a = a.get(c) || null), h(b, a, '' + d, e);
      if ('object' === typeof d && null !== d) {
        switch (d.$$typeof) {
          case sa:
            return (
              (a = a.get(null === d.key ? c : d.key) || null),
              d.type === ua
                ? n(b, a, d.props.children, e, d.key)
                : k(b, a, d, e)
            );
          case ta:
            return (
              (a = a.get(null === d.key ? c : d.key) || null), l(b, a, d, e)
            );
        }
        if (Pg(d) || La(d)) return (a = a.get(c) || null), n(b, a, d, e, null);
        Rg(b, d);
      }
      return null;
    }
    function x(e, g, h, k) {
      for (
        var l = null, t = null, u = g, z = (g = 0), q = null;
        null !== u && z < h.length;
        z++
      ) {
        u.index > z ? ((q = u), (u = null)) : (q = u.sibling);
        var n = p(e, u, h[z], k);
        if (null === n) {
          null === u && (u = q);
          break;
        }
        a && u && null === n.alternate && b(e, u);
        g = f(n, g, z);
        null === t ? (l = n) : (t.sibling = n);
        t = n;
        u = q;
      }
      if (z === h.length) return c(e, u), l;
      if (null === u) {
        for (; z < h.length; z++)
          (u = A(e, h[z], k)),
            null !== u &&
              ((g = f(u, g, z)),
              null === t ? (l = u) : (t.sibling = u),
              (t = u));
        return l;
      }
      for (u = d(e, u); z < h.length; z++)
        (q = C(u, e, z, h[z], k)),
          null !== q &&
            (a && null !== q.alternate && u.delete(null === q.key ? z : q.key),
            (g = f(q, g, z)),
            null === t ? (l = q) : (t.sibling = q),
            (t = q));
      a &&
        u.forEach(function (a) {
          return b(e, a);
        });
      return l;
    }
    function w(e, g, h, k) {
      var l = La(h);
      if ('function' !== typeof l) throw Error(y$1(150));
      h = l.call(h);
      if (null == h) throw Error(y$1(151));
      for (
        var t = (l = null), u = g, z = (g = 0), q = null, n = h.next();
        null !== u && !n.done;
        z++, n = h.next()
      ) {
        u.index > z ? ((q = u), (u = null)) : (q = u.sibling);
        var w = p(e, u, n.value, k);
        if (null === w) {
          null === u && (u = q);
          break;
        }
        a && u && null === w.alternate && b(e, u);
        g = f(w, g, z);
        null === t ? (l = w) : (t.sibling = w);
        t = w;
        u = q;
      }
      if (n.done) return c(e, u), l;
      if (null === u) {
        for (; !n.done; z++, n = h.next())
          (n = A(e, n.value, k)),
            null !== n &&
              ((g = f(n, g, z)),
              null === t ? (l = n) : (t.sibling = n),
              (t = n));
        return l;
      }
      for (u = d(e, u); !n.done; z++, n = h.next())
        (n = C(u, e, z, n.value, k)),
          null !== n &&
            (a && null !== n.alternate && u.delete(null === n.key ? z : n.key),
            (g = f(n, g, z)),
            null === t ? (l = n) : (t.sibling = n),
            (t = n));
      a &&
        u.forEach(function (a) {
          return b(e, a);
        });
      return l;
    }
    return function (a, d, f, h) {
      var k =
        'object' === typeof f && null !== f && f.type === ua && null === f.key;
      k && (f = f.props.children);
      var l = 'object' === typeof f && null !== f;
      if (l)
        switch (f.$$typeof) {
          case sa:
            a: {
              l = f.key;
              for (k = d; null !== k; ) {
                if (k.key === l) {
                  switch (k.tag) {
                    case 7:
                      if (f.type === ua) {
                        c(a, k.sibling);
                        d = e(k, f.props.children);
                        d.return = a;
                        a = d;
                        break a;
                      }
                      break;
                    default:
                      if (k.elementType === f.type) {
                        c(a, k.sibling);
                        d = e(k, f.props);
                        d.ref = Qg(a, k, f);
                        d.return = a;
                        a = d;
                        break a;
                      }
                  }
                  c(a, k);
                  break;
                } else b(a, k);
                k = k.sibling;
              }
              f.type === ua
                ? ((d = Xg(f.props.children, a.mode, h, f.key)),
                  (d.return = a),
                  (a = d))
                : ((h = Vg(f.type, f.key, f.props, null, a.mode, h)),
                  (h.ref = Qg(a, d, f)),
                  (h.return = a),
                  (a = h));
            }
            return g(a);
          case ta:
            a: {
              for (k = f.key; null !== d; ) {
                if (d.key === k)
                  if (
                    4 === d.tag &&
                    d.stateNode.containerInfo === f.containerInfo &&
                    d.stateNode.implementation === f.implementation
                  ) {
                    c(a, d.sibling);
                    d = e(d, f.children || []);
                    d.return = a;
                    a = d;
                    break a;
                  } else {
                    c(a, d);
                    break;
                  }
                else b(a, d);
                d = d.sibling;
              }
              d = Wg(f, a.mode, h);
              d.return = a;
              a = d;
            }
            return g(a);
        }
      if ('string' === typeof f || 'number' === typeof f)
        return (
          (f = '' + f),
          null !== d && 6 === d.tag
            ? (c(a, d.sibling), (d = e(d, f)), (d.return = a), (a = d))
            : (c(a, d), (d = Ug(f, a.mode, h)), (d.return = a), (a = d)),
          g(a)
        );
      if (Pg(f)) return x(a, d, f, h);
      if (La(f)) return w(a, d, f, h);
      l && Rg(a, f);
      if ('undefined' === typeof f && !k)
        switch (a.tag) {
          case 1:
          case 22:
          case 0:
          case 11:
          case 15:
            throw Error(y$1(152, Ra(a.type) || 'Component'));
        }
      return c(a, d);
    };
  }
  var Yg = Sg(!0),
    Zg = Sg(!1),
    $g = {},
    ah = Bf($g),
    bh = Bf($g),
    ch = Bf($g);
  function dh(a) {
    if (a === $g) throw Error(y$1(174));
    return a;
  }
  function eh(a, b) {
    I$1(ch, b);
    I$1(bh, a);
    I$1(ah, $g);
    a = b.nodeType;
    switch (a) {
      case 9:
      case 11:
        b = (b = b.documentElement) ? b.namespaceURI : mb(null, '');
        break;
      default:
        (a = 8 === a ? b.parentNode : b),
          (b = a.namespaceURI || null),
          (a = a.tagName),
          (b = mb(b, a));
    }
    H$1(ah);
    I$1(ah, b);
  }
  function fh() {
    H$1(ah);
    H$1(bh);
    H$1(ch);
  }
  function gh(a) {
    dh(ch.current);
    var b = dh(ah.current);
    var c = mb(b, a.type);
    b !== c && (I$1(bh, a), I$1(ah, c));
  }
  function hh(a) {
    bh.current === a && (H$1(ah), H$1(bh));
  }
  var P$1 = Bf(0);
  function ih(a) {
    for (var b = a; null !== b; ) {
      if (13 === b.tag) {
        var c = b.memoizedState;
        if (
          null !== c &&
          ((c = c.dehydrated), null === c || '$?' === c.data || '$!' === c.data)
        )
          return b;
      } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
        if (0 !== (b.flags & 64)) return b;
      } else if (null !== b.child) {
        b.child.return = b;
        b = b.child;
        continue;
      }
      if (b === a) break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a) return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
    return null;
  }
  var jh = null,
    kh = null,
    lh = !1;
  function mh(a, b) {
    var c = nh(5, null, null, 0);
    c.elementType = 'DELETED';
    c.type = 'DELETED';
    c.stateNode = b;
    c.return = a;
    c.flags = 8;
    null !== a.lastEffect
      ? ((a.lastEffect.nextEffect = c), (a.lastEffect = c))
      : (a.firstEffect = a.lastEffect = c);
  }
  function oh(a, b) {
    switch (a.tag) {
      case 5:
        var c = a.type;
        b =
          1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase()
            ? null
            : b;
        return null !== b ? ((a.stateNode = b), !0) : !1;
      case 6:
        return (
          (b = '' === a.pendingProps || 3 !== b.nodeType ? null : b),
          null !== b ? ((a.stateNode = b), !0) : !1
        );
      case 13:
        return !1;
      default:
        return !1;
    }
  }
  function ph(a) {
    if (lh) {
      var b = kh;
      if (b) {
        var c = b;
        if (!oh(a, b)) {
          b = rf(c.nextSibling);
          if (!b || !oh(a, b)) {
            a.flags = (a.flags & -1025) | 2;
            lh = !1;
            jh = a;
            return;
          }
          mh(jh, c);
        }
        jh = a;
        kh = rf(b.firstChild);
      } else (a.flags = (a.flags & -1025) | 2), (lh = !1), (jh = a);
    }
  }
  function qh(a) {
    for (
      a = a.return;
      null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag;

    )
      a = a.return;
    jh = a;
  }
  function rh(a) {
    if (a !== jh) return !1;
    if (!lh) return qh(a), (lh = !0), !1;
    var b = a.type;
    if (
      5 !== a.tag ||
      ('head' !== b && 'body' !== b && !nf(b, a.memoizedProps))
    )
      for (b = kh; b; ) mh(a, b), (b = rf(b.nextSibling));
    qh(a);
    if (13 === a.tag) {
      a = a.memoizedState;
      a = null !== a ? a.dehydrated : null;
      if (!a) throw Error(y$1(317));
      a: {
        a = a.nextSibling;
        for (b = 0; a; ) {
          if (8 === a.nodeType) {
            var c = a.data;
            if ('/$' === c) {
              if (0 === b) {
                kh = rf(a.nextSibling);
                break a;
              }
              b--;
            } else ('$' !== c && '$!' !== c && '$?' !== c) || b++;
          }
          a = a.nextSibling;
        }
        kh = null;
      }
    } else kh = jh ? rf(a.stateNode.nextSibling) : null;
    return !0;
  }
  function sh() {
    kh = jh = null;
    lh = !1;
  }
  var th = [];
  function uh() {
    for (var a = 0; a < th.length; a++)
      th[a]._workInProgressVersionPrimary = null;
    th.length = 0;
  }
  var vh = ra.ReactCurrentDispatcher,
    wh = ra.ReactCurrentBatchConfig,
    xh = 0,
    R$1 = null,
    S$1 = null,
    T = null,
    yh = !1,
    zh = !1;
  function Ah() {
    throw Error(y$1(321));
  }
  function Bh(a, b) {
    if (null === b) return !1;
    for (var c = 0; c < b.length && c < a.length; c++)
      if (!He(a[c], b[c])) return !1;
    return !0;
  }
  function Ch(a, b, c, d, e, f) {
    xh = f;
    R$1 = b;
    b.memoizedState = null;
    b.updateQueue = null;
    b.lanes = 0;
    vh.current = null === a || null === a.memoizedState ? Dh : Eh;
    a = c(d, e);
    if (zh) {
      f = 0;
      do {
        zh = !1;
        if (!(25 > f)) throw Error(y$1(301));
        f += 1;
        T = S$1 = null;
        b.updateQueue = null;
        vh.current = Fh;
        a = c(d, e);
      } while (zh);
    }
    vh.current = Gh;
    b = null !== S$1 && null !== S$1.next;
    xh = 0;
    T = S$1 = R$1 = null;
    yh = !1;
    if (b) throw Error(y$1(300));
    return a;
  }
  function Hh() {
    var a = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    null === T ? (R$1.memoizedState = T = a) : (T = T.next = a);
    return T;
  }
  function Ih() {
    if (null === S$1) {
      var a = R$1.alternate;
      a = null !== a ? a.memoizedState : null;
    } else a = S$1.next;
    var b = null === T ? R$1.memoizedState : T.next;
    if (null !== b) (T = b), (S$1 = a);
    else {
      if (null === a) throw Error(y$1(310));
      S$1 = a;
      a = {
        memoizedState: S$1.memoizedState,
        baseState: S$1.baseState,
        baseQueue: S$1.baseQueue,
        queue: S$1.queue,
        next: null,
      };
      null === T ? (R$1.memoizedState = T = a) : (T = T.next = a);
    }
    return T;
  }
  function Jh(a, b) {
    return 'function' === typeof b ? b(a) : b;
  }
  function Kh(a) {
    var b = Ih(),
      c = b.queue;
    if (null === c) throw Error(y$1(311));
    c.lastRenderedReducer = a;
    var d = S$1,
      e = d.baseQueue,
      f = c.pending;
    if (null !== f) {
      if (null !== e) {
        var g = e.next;
        e.next = f.next;
        f.next = g;
      }
      d.baseQueue = e = f;
      c.pending = null;
    }
    if (null !== e) {
      e = e.next;
      d = d.baseState;
      var h = (g = f = null),
        k = e;
      do {
        var l = k.lane;
        if ((xh & l) === l)
          null !== h &&
            (h = h.next =
              {
                lane: 0,
                action: k.action,
                eagerReducer: k.eagerReducer,
                eagerState: k.eagerState,
                next: null,
              }),
            (d = k.eagerReducer === a ? k.eagerState : a(d, k.action));
        else {
          var n = {
            lane: l,
            action: k.action,
            eagerReducer: k.eagerReducer,
            eagerState: k.eagerState,
            next: null,
          };
          null === h ? ((g = h = n), (f = d)) : (h = h.next = n);
          R$1.lanes |= l;
          Dg |= l;
        }
        k = k.next;
      } while (null !== k && k !== e);
      null === h ? (f = d) : (h.next = g);
      He(d, b.memoizedState) || (ug = !0);
      b.memoizedState = d;
      b.baseState = f;
      b.baseQueue = h;
      c.lastRenderedState = d;
    }
    return [b.memoizedState, c.dispatch];
  }
  function Lh(a) {
    var b = Ih(),
      c = b.queue;
    if (null === c) throw Error(y$1(311));
    c.lastRenderedReducer = a;
    var d = c.dispatch,
      e = c.pending,
      f = b.memoizedState;
    if (null !== e) {
      c.pending = null;
      var g = (e = e.next);
      do (f = a(f, g.action)), (g = g.next);
      while (g !== e);
      He(f, b.memoizedState) || (ug = !0);
      b.memoizedState = f;
      null === b.baseQueue && (b.baseState = f);
      c.lastRenderedState = f;
    }
    return [f, d];
  }
  function Mh(a, b, c) {
    var d = b._getVersion;
    d = d(b._source);
    var e = b._workInProgressVersionPrimary;
    if (null !== e) a = e === d;
    else if (((a = a.mutableReadLanes), (a = (xh & a) === a)))
      (b._workInProgressVersionPrimary = d), th.push(b);
    if (a) return c(b._source);
    th.push(b);
    throw Error(y$1(350));
  }
  function Nh(a, b, c, d) {
    var e = U$1;
    if (null === e) throw Error(y$1(349));
    var f = b._getVersion,
      g = f(b._source),
      h = vh.current,
      k = h.useState(function () {
        return Mh(e, b, c);
      }),
      l = k[1],
      n = k[0];
    k = T;
    var A = a.memoizedState,
      p = A.refs,
      C = p.getSnapshot,
      x = A.source;
    A = A.subscribe;
    var w = R$1;
    a.memoizedState = { refs: p, source: b, subscribe: d };
    h.useEffect(
      function () {
        p.getSnapshot = c;
        p.setSnapshot = l;
        var a = f(b._source);
        if (!He(g, a)) {
          a = c(b._source);
          He(n, a) ||
            (l(a), (a = Ig(w)), (e.mutableReadLanes |= a & e.pendingLanes));
          a = e.mutableReadLanes;
          e.entangledLanes |= a;
          for (var d = e.entanglements, h = a; 0 < h; ) {
            var k = 31 - Vc(h),
              v = 1 << k;
            d[k] |= a;
            h &= ~v;
          }
        }
      },
      [c, b, d],
    );
    h.useEffect(
      function () {
        return d(b._source, function () {
          var a = p.getSnapshot,
            c = p.setSnapshot;
          try {
            c(a(b._source));
            var d = Ig(w);
            e.mutableReadLanes |= d & e.pendingLanes;
          } catch (q) {
            c(function () {
              throw q;
            });
          }
        });
      },
      [b, d],
    );
    (He(C, c) && He(x, b) && He(A, d)) ||
      ((a = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: Jh,
        lastRenderedState: n,
      }),
      (a.dispatch = l = Oh.bind(null, R$1, a)),
      (k.queue = a),
      (k.baseQueue = null),
      (n = Mh(e, b, c)),
      (k.memoizedState = k.baseState = n));
    return n;
  }
  function Ph(a, b, c) {
    var d = Ih();
    return Nh(d, a, b, c);
  }
  function Qh(a) {
    var b = Hh();
    'function' === typeof a && (a = a());
    b.memoizedState = b.baseState = a;
    a = b.queue = {
      pending: null,
      dispatch: null,
      lastRenderedReducer: Jh,
      lastRenderedState: a,
    };
    a = a.dispatch = Oh.bind(null, R$1, a);
    return [b.memoizedState, a];
  }
  function Rh(a, b, c, d) {
    a = { tag: a, create: b, destroy: c, deps: d, next: null };
    b = R$1.updateQueue;
    null === b
      ? ((b = { lastEffect: null }),
        (R$1.updateQueue = b),
        (b.lastEffect = a.next = a))
      : ((c = b.lastEffect),
        null === c
          ? (b.lastEffect = a.next = a)
          : ((d = c.next), (c.next = a), (a.next = d), (b.lastEffect = a)));
    return a;
  }
  function Sh(a) {
    var b = Hh();
    a = { current: a };
    return (b.memoizedState = a);
  }
  function Th() {
    return Ih().memoizedState;
  }
  function Uh(a, b, c, d) {
    var e = Hh();
    R$1.flags |= a;
    e.memoizedState = Rh(1 | b, c, void 0, void 0 === d ? null : d);
  }
  function Vh(a, b, c, d) {
    var e = Ih();
    d = void 0 === d ? null : d;
    var f = void 0;
    if (null !== S$1) {
      var g = S$1.memoizedState;
      f = g.destroy;
      if (null !== d && Bh(d, g.deps)) {
        Rh(b, c, f, d);
        return;
      }
    }
    R$1.flags |= a;
    e.memoizedState = Rh(1 | b, c, f, d);
  }
  function Wh(a, b) {
    return Uh(516, 4, a, b);
  }
  function Xh(a, b) {
    return Vh(516, 4, a, b);
  }
  function Yh(a, b) {
    return Vh(4, 2, a, b);
  }
  function Zh(a, b) {
    if ('function' === typeof b)
      return (
        (a = a()),
        b(a),
        function () {
          b(null);
        }
      );
    if (null !== b && void 0 !== b)
      return (
        (a = a()),
        (b.current = a),
        function () {
          b.current = null;
        }
      );
  }
  function $h(a, b, c) {
    c = null !== c && void 0 !== c ? c.concat([a]) : null;
    return Vh(4, 2, Zh.bind(null, b, a), c);
  }
  function ai() {}
  function bi(a, b) {
    var c = Ih();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Bh(b, d[1])) return d[0];
    c.memoizedState = [a, b];
    return a;
  }
  function ci(a, b) {
    var c = Ih();
    b = void 0 === b ? null : b;
    var d = c.memoizedState;
    if (null !== d && null !== b && Bh(b, d[1])) return d[0];
    a = a();
    c.memoizedState = [a, b];
    return a;
  }
  function di(a, b) {
    var c = eg();
    gg(98 > c ? 98 : c, function () {
      a(!0);
    });
    gg(97 < c ? 97 : c, function () {
      var c = wh.transition;
      wh.transition = 1;
      try {
        a(!1), b();
      } finally {
        wh.transition = c;
      }
    });
  }
  function Oh(a, b, c) {
    var d = Hg(),
      e = Ig(a),
      f = {
        lane: e,
        action: c,
        eagerReducer: null,
        eagerState: null,
        next: null,
      },
      g = b.pending;
    null === g ? (f.next = f) : ((f.next = g.next), (g.next = f));
    b.pending = f;
    g = a.alternate;
    if (a === R$1 || (null !== g && g === R$1)) zh = yh = !0;
    else {
      if (
        0 === a.lanes &&
        (null === g || 0 === g.lanes) &&
        ((g = b.lastRenderedReducer), null !== g)
      )
        try {
          var h = b.lastRenderedState,
            k = g(h, c);
          f.eagerReducer = g;
          f.eagerState = k;
          if (He(k, h)) return;
        } catch (l) {
        } finally {
        }
      Jg(a, e, d);
    }
  }
  var Gh = {
      readContext: vg,
      useCallback: Ah,
      useContext: Ah,
      useEffect: Ah,
      useImperativeHandle: Ah,
      useLayoutEffect: Ah,
      useMemo: Ah,
      useReducer: Ah,
      useRef: Ah,
      useState: Ah,
      useDebugValue: Ah,
      useDeferredValue: Ah,
      useTransition: Ah,
      useMutableSource: Ah,
      useOpaqueIdentifier: Ah,
      unstable_isNewReconciler: !1,
    },
    Dh = {
      readContext: vg,
      useCallback: function (a, b) {
        Hh().memoizedState = [a, void 0 === b ? null : b];
        return a;
      },
      useContext: vg,
      useEffect: Wh,
      useImperativeHandle: function (a, b, c) {
        c = null !== c && void 0 !== c ? c.concat([a]) : null;
        return Uh(4, 2, Zh.bind(null, b, a), c);
      },
      useLayoutEffect: function (a, b) {
        return Uh(4, 2, a, b);
      },
      useMemo: function (a, b) {
        var c = Hh();
        b = void 0 === b ? null : b;
        a = a();
        c.memoizedState = [a, b];
        return a;
      },
      useReducer: function (a, b, c) {
        var d = Hh();
        b = void 0 !== c ? c(b) : b;
        d.memoizedState = d.baseState = b;
        a = d.queue = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: a,
          lastRenderedState: b,
        };
        a = a.dispatch = Oh.bind(null, R$1, a);
        return [d.memoizedState, a];
      },
      useRef: Sh,
      useState: Qh,
      useDebugValue: ai,
      useDeferredValue: function (a) {
        var b = Qh(a),
          c = b[0],
          d = b[1];
        Wh(
          function () {
            var b = wh.transition;
            wh.transition = 1;
            try {
              d(a);
            } finally {
              wh.transition = b;
            }
          },
          [a],
        );
        return c;
      },
      useTransition: function () {
        var a = Qh(!1),
          b = a[0];
        a = di.bind(null, a[1]);
        Sh(a);
        return [a, b];
      },
      useMutableSource: function (a, b, c) {
        var d = Hh();
        d.memoizedState = {
          refs: { getSnapshot: b, setSnapshot: null },
          source: a,
          subscribe: c,
        };
        return Nh(d, a, b, c);
      },
      useOpaqueIdentifier: function () {
        if (lh) {
          var a = !1,
            b = uf(function () {
              a || ((a = !0), c('r:' + (tf++).toString(36)));
              throw Error(y$1(355));
            }),
            c = Qh(b)[1];
          0 === (R$1.mode & 2) &&
            ((R$1.flags |= 516),
            Rh(
              5,
              function () {
                c('r:' + (tf++).toString(36));
              },
              void 0,
              null,
            ));
          return b;
        }
        b = 'r:' + (tf++).toString(36);
        Qh(b);
        return b;
      },
      unstable_isNewReconciler: !1,
    },
    Eh = {
      readContext: vg,
      useCallback: bi,
      useContext: vg,
      useEffect: Xh,
      useImperativeHandle: $h,
      useLayoutEffect: Yh,
      useMemo: ci,
      useReducer: Kh,
      useRef: Th,
      useState: function () {
        return Kh(Jh);
      },
      useDebugValue: ai,
      useDeferredValue: function (a) {
        var b = Kh(Jh),
          c = b[0],
          d = b[1];
        Xh(
          function () {
            var b = wh.transition;
            wh.transition = 1;
            try {
              d(a);
            } finally {
              wh.transition = b;
            }
          },
          [a],
        );
        return c;
      },
      useTransition: function () {
        var a = Kh(Jh)[0];
        return [Th().current, a];
      },
      useMutableSource: Ph,
      useOpaqueIdentifier: function () {
        return Kh(Jh)[0];
      },
      unstable_isNewReconciler: !1,
    },
    Fh = {
      readContext: vg,
      useCallback: bi,
      useContext: vg,
      useEffect: Xh,
      useImperativeHandle: $h,
      useLayoutEffect: Yh,
      useMemo: ci,
      useReducer: Lh,
      useRef: Th,
      useState: function () {
        return Lh(Jh);
      },
      useDebugValue: ai,
      useDeferredValue: function (a) {
        var b = Lh(Jh),
          c = b[0],
          d = b[1];
        Xh(
          function () {
            var b = wh.transition;
            wh.transition = 1;
            try {
              d(a);
            } finally {
              wh.transition = b;
            }
          },
          [a],
        );
        return c;
      },
      useTransition: function () {
        var a = Lh(Jh)[0];
        return [Th().current, a];
      },
      useMutableSource: Ph,
      useOpaqueIdentifier: function () {
        return Lh(Jh)[0];
      },
      unstable_isNewReconciler: !1,
    },
    ei = ra.ReactCurrentOwner,
    ug = !1;
  function fi(a, b, c, d) {
    b.child = null === a ? Zg(b, null, c, d) : Yg(b, a.child, c, d);
  }
  function gi(a, b, c, d, e) {
    c = c.render;
    var f = b.ref;
    tg(b, e);
    d = Ch(a, b, c, d, f, e);
    if (null !== a && !ug)
      return (
        (b.updateQueue = a.updateQueue),
        (b.flags &= -517),
        (a.lanes &= ~e),
        hi(a, b, e)
      );
    b.flags |= 1;
    fi(a, b, d, e);
    return b.child;
  }
  function ii(a, b, c, d, e, f) {
    if (null === a) {
      var g = c.type;
      if (
        'function' === typeof g &&
        !ji(g) &&
        void 0 === g.defaultProps &&
        null === c.compare &&
        void 0 === c.defaultProps
      )
        return (b.tag = 15), (b.type = g), ki(a, b, g, d, e, f);
      a = Vg(c.type, null, d, b, b.mode, f);
      a.ref = b.ref;
      a.return = b;
      return (b.child = a);
    }
    g = a.child;
    if (
      0 === (e & f) &&
      ((e = g.memoizedProps),
      (c = c.compare),
      (c = null !== c ? c : Je),
      c(e, d) && a.ref === b.ref)
    )
      return hi(a, b, f);
    b.flags |= 1;
    a = Tg(g, d);
    a.ref = b.ref;
    a.return = b;
    return (b.child = a);
  }
  function ki(a, b, c, d, e, f) {
    if (null !== a && Je(a.memoizedProps, d) && a.ref === b.ref)
      if (((ug = !1), 0 !== (f & e))) 0 !== (a.flags & 16384) && (ug = !0);
      else return (b.lanes = a.lanes), hi(a, b, f);
    return li(a, b, c, d, f);
  }
  function mi(a, b, c) {
    var d = b.pendingProps,
      e = d.children,
      f = null !== a ? a.memoizedState : null;
    if ('hidden' === d.mode || 'unstable-defer-without-hiding' === d.mode)
      if (0 === (b.mode & 4)) (b.memoizedState = { baseLanes: 0 }), ni(b, c);
      else if (0 !== (c & 1073741824))
        (b.memoizedState = { baseLanes: 0 }),
          ni(b, null !== f ? f.baseLanes : c);
      else
        return (
          (a = null !== f ? f.baseLanes | c : c),
          (b.lanes = b.childLanes = 1073741824),
          (b.memoizedState = { baseLanes: a }),
          ni(b, a),
          null
        );
    else
      null !== f ? ((d = f.baseLanes | c), (b.memoizedState = null)) : (d = c),
        ni(b, d);
    fi(a, b, e, c);
    return b.child;
  }
  function oi(a, b) {
    var c = b.ref;
    if ((null === a && null !== c) || (null !== a && a.ref !== c))
      b.flags |= 128;
  }
  function li(a, b, c, d, e) {
    var f = Ff(c) ? Df : M$1.current;
    f = Ef(b, f);
    tg(b, e);
    c = Ch(a, b, c, d, f, e);
    if (null !== a && !ug)
      return (
        (b.updateQueue = a.updateQueue),
        (b.flags &= -517),
        (a.lanes &= ~e),
        hi(a, b, e)
      );
    b.flags |= 1;
    fi(a, b, c, e);
    return b.child;
  }
  function pi(a, b, c, d, e) {
    if (Ff(c)) {
      var f = !0;
      Jf(b);
    } else f = !1;
    tg(b, e);
    if (null === b.stateNode)
      null !== a &&
        ((a.alternate = null), (b.alternate = null), (b.flags |= 2)),
        Mg(b, c, d),
        Og(b, c, d, e),
        (d = !0);
    else if (null === a) {
      var g = b.stateNode,
        h = b.memoizedProps;
      g.props = h;
      var k = g.context,
        l = c.contextType;
      'object' === typeof l && null !== l
        ? (l = vg(l))
        : ((l = Ff(c) ? Df : M$1.current), (l = Ef(b, l)));
      var n = c.getDerivedStateFromProps,
        A =
          'function' === typeof n ||
          'function' === typeof g.getSnapshotBeforeUpdate;
      A ||
        ('function' !== typeof g.UNSAFE_componentWillReceiveProps &&
          'function' !== typeof g.componentWillReceiveProps) ||
        ((h !== d || k !== l) && Ng(b, g, d, l));
      wg = !1;
      var p = b.memoizedState;
      g.state = p;
      Cg(b, d, g, e);
      k = b.memoizedState;
      h !== d || p !== k || N.current || wg
        ? ('function' === typeof n && (Gg(b, c, n, d), (k = b.memoizedState)),
          (h = wg || Lg(b, c, h, d, p, k, l))
            ? (A ||
                ('function' !== typeof g.UNSAFE_componentWillMount &&
                  'function' !== typeof g.componentWillMount) ||
                ('function' === typeof g.componentWillMount &&
                  g.componentWillMount(),
                'function' === typeof g.UNSAFE_componentWillMount &&
                  g.UNSAFE_componentWillMount()),
              'function' === typeof g.componentDidMount && (b.flags |= 4))
            : ('function' === typeof g.componentDidMount && (b.flags |= 4),
              (b.memoizedProps = d),
              (b.memoizedState = k)),
          (g.props = d),
          (g.state = k),
          (g.context = l),
          (d = h))
        : ('function' === typeof g.componentDidMount && (b.flags |= 4),
          (d = !1));
    } else {
      g = b.stateNode;
      yg(a, b);
      h = b.memoizedProps;
      l = b.type === b.elementType ? h : lg(b.type, h);
      g.props = l;
      A = b.pendingProps;
      p = g.context;
      k = c.contextType;
      'object' === typeof k && null !== k
        ? (k = vg(k))
        : ((k = Ff(c) ? Df : M$1.current), (k = Ef(b, k)));
      var C = c.getDerivedStateFromProps;
      (n =
        'function' === typeof C ||
        'function' === typeof g.getSnapshotBeforeUpdate) ||
        ('function' !== typeof g.UNSAFE_componentWillReceiveProps &&
          'function' !== typeof g.componentWillReceiveProps) ||
        ((h !== A || p !== k) && Ng(b, g, d, k));
      wg = !1;
      p = b.memoizedState;
      g.state = p;
      Cg(b, d, g, e);
      var x = b.memoizedState;
      h !== A || p !== x || N.current || wg
        ? ('function' === typeof C && (Gg(b, c, C, d), (x = b.memoizedState)),
          (l = wg || Lg(b, c, l, d, p, x, k))
            ? (n ||
                ('function' !== typeof g.UNSAFE_componentWillUpdate &&
                  'function' !== typeof g.componentWillUpdate) ||
                ('function' === typeof g.componentWillUpdate &&
                  g.componentWillUpdate(d, x, k),
                'function' === typeof g.UNSAFE_componentWillUpdate &&
                  g.UNSAFE_componentWillUpdate(d, x, k)),
              'function' === typeof g.componentDidUpdate && (b.flags |= 4),
              'function' === typeof g.getSnapshotBeforeUpdate &&
                (b.flags |= 256))
            : ('function' !== typeof g.componentDidUpdate ||
                (h === a.memoizedProps && p === a.memoizedState) ||
                (b.flags |= 4),
              'function' !== typeof g.getSnapshotBeforeUpdate ||
                (h === a.memoizedProps && p === a.memoizedState) ||
                (b.flags |= 256),
              (b.memoizedProps = d),
              (b.memoizedState = x)),
          (g.props = d),
          (g.state = x),
          (g.context = k),
          (d = l))
        : ('function' !== typeof g.componentDidUpdate ||
            (h === a.memoizedProps && p === a.memoizedState) ||
            (b.flags |= 4),
          'function' !== typeof g.getSnapshotBeforeUpdate ||
            (h === a.memoizedProps && p === a.memoizedState) ||
            (b.flags |= 256),
          (d = !1));
    }
    return qi(a, b, c, d, f, e);
  }
  function qi(a, b, c, d, e, f) {
    oi(a, b);
    var g = 0 !== (b.flags & 64);
    if (!d && !g) return e && Kf(b, c, !1), hi(a, b, f);
    d = b.stateNode;
    ei.current = b;
    var h =
      g && 'function' !== typeof c.getDerivedStateFromError ? null : d.render();
    b.flags |= 1;
    null !== a && g
      ? ((b.child = Yg(b, a.child, null, f)), (b.child = Yg(b, null, h, f)))
      : fi(a, b, h, f);
    b.memoizedState = d.state;
    e && Kf(b, c, !0);
    return b.child;
  }
  function ri(a) {
    var b = a.stateNode;
    b.pendingContext
      ? Hf(a, b.pendingContext, b.pendingContext !== b.context)
      : b.context && Hf(a, b.context, !1);
    eh(a, b.containerInfo);
  }
  var si = { dehydrated: null, retryLane: 0 };
  function ti(a, b, c) {
    var d = b.pendingProps,
      e = P$1.current,
      f = !1,
      g;
    (g = 0 !== (b.flags & 64)) ||
      (g = null !== a && null === a.memoizedState ? !1 : 0 !== (e & 2));
    g
      ? ((f = !0), (b.flags &= -65))
      : (null !== a && null === a.memoizedState) ||
        void 0 === d.fallback ||
        !0 === d.unstable_avoidThisFallback ||
        (e |= 1);
    I$1(P$1, e & 1);
    if (null === a) {
      void 0 !== d.fallback && ph(b);
      a = d.children;
      e = d.fallback;
      if (f)
        return (
          (a = ui(b, a, e, c)),
          (b.child.memoizedState = { baseLanes: c }),
          (b.memoizedState = si),
          a
        );
      if ('number' === typeof d.unstable_expectedLoadTime)
        return (
          (a = ui(b, a, e, c)),
          (b.child.memoizedState = { baseLanes: c }),
          (b.memoizedState = si),
          (b.lanes = 33554432),
          a
        );
      c = vi({ mode: 'visible', children: a }, b.mode, c, null);
      c.return = b;
      return (b.child = c);
    }
    if (null !== a.memoizedState) {
      if (f)
        return (
          (d = wi(a, b, d.children, d.fallback, c)),
          (f = b.child),
          (e = a.child.memoizedState),
          (f.memoizedState =
            null === e ? { baseLanes: c } : { baseLanes: e.baseLanes | c }),
          (f.childLanes = a.childLanes & ~c),
          (b.memoizedState = si),
          d
        );
      c = xi(a, b, d.children, c);
      b.memoizedState = null;
      return c;
    }
    if (f)
      return (
        (d = wi(a, b, d.children, d.fallback, c)),
        (f = b.child),
        (e = a.child.memoizedState),
        (f.memoizedState =
          null === e ? { baseLanes: c } : { baseLanes: e.baseLanes | c }),
        (f.childLanes = a.childLanes & ~c),
        (b.memoizedState = si),
        d
      );
    c = xi(a, b, d.children, c);
    b.memoizedState = null;
    return c;
  }
  function ui(a, b, c, d) {
    var e = a.mode,
      f = a.child;
    b = { mode: 'hidden', children: b };
    0 === (e & 2) && null !== f
      ? ((f.childLanes = 0), (f.pendingProps = b))
      : (f = vi(b, e, 0, null));
    c = Xg(c, e, d, null);
    f.return = a;
    c.return = a;
    f.sibling = c;
    a.child = f;
    return c;
  }
  function xi(a, b, c, d) {
    var e = a.child;
    a = e.sibling;
    c = Tg(e, { mode: 'visible', children: c });
    0 === (b.mode & 2) && (c.lanes = d);
    c.return = b;
    c.sibling = null;
    null !== a &&
      ((a.nextEffect = null),
      (a.flags = 8),
      (b.firstEffect = b.lastEffect = a));
    return (b.child = c);
  }
  function wi(a, b, c, d, e) {
    var f = b.mode,
      g = a.child;
    a = g.sibling;
    var h = { mode: 'hidden', children: c };
    0 === (f & 2) && b.child !== g
      ? ((c = b.child),
        (c.childLanes = 0),
        (c.pendingProps = h),
        (g = c.lastEffect),
        null !== g
          ? ((b.firstEffect = c.firstEffect),
            (b.lastEffect = g),
            (g.nextEffect = null))
          : (b.firstEffect = b.lastEffect = null))
      : (c = Tg(g, h));
    null !== a ? (d = Tg(a, d)) : ((d = Xg(d, f, e, null)), (d.flags |= 2));
    d.return = b;
    c.return = b;
    c.sibling = d;
    b.child = c;
    return d;
  }
  function yi(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    sg(a.return, b);
  }
  function zi(a, b, c, d, e, f) {
    var g = a.memoizedState;
    null === g
      ? (a.memoizedState = {
          isBackwards: b,
          rendering: null,
          renderingStartTime: 0,
          last: d,
          tail: c,
          tailMode: e,
          lastEffect: f,
        })
      : ((g.isBackwards = b),
        (g.rendering = null),
        (g.renderingStartTime = 0),
        (g.last = d),
        (g.tail = c),
        (g.tailMode = e),
        (g.lastEffect = f));
  }
  function Ai(a, b, c) {
    var d = b.pendingProps,
      e = d.revealOrder,
      f = d.tail;
    fi(a, b, d.children, c);
    d = P$1.current;
    if (0 !== (d & 2)) (d = (d & 1) | 2), (b.flags |= 64);
    else {
      if (null !== a && 0 !== (a.flags & 64))
        a: for (a = b.child; null !== a; ) {
          if (13 === a.tag) null !== a.memoizedState && yi(a, c);
          else if (19 === a.tag) yi(a, c);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b) break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b) break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
      d &= 1;
    }
    I$1(P$1, d);
    if (0 === (b.mode & 2)) b.memoizedState = null;
    else
      switch (e) {
        case 'forwards':
          c = b.child;
          for (e = null; null !== c; )
            (a = c.alternate),
              null !== a && null === ih(a) && (e = c),
              (c = c.sibling);
          c = e;
          null === c
            ? ((e = b.child), (b.child = null))
            : ((e = c.sibling), (c.sibling = null));
          zi(b, !1, e, c, f, b.lastEffect);
          break;
        case 'backwards':
          c = null;
          e = b.child;
          for (b.child = null; null !== e; ) {
            a = e.alternate;
            if (null !== a && null === ih(a)) {
              b.child = e;
              break;
            }
            a = e.sibling;
            e.sibling = c;
            c = e;
            e = a;
          }
          zi(b, !0, c, null, f, b.lastEffect);
          break;
        case 'together':
          zi(b, !1, null, null, void 0, b.lastEffect);
          break;
        default:
          b.memoizedState = null;
      }
    return b.child;
  }
  function hi(a, b, c) {
    null !== a && (b.dependencies = a.dependencies);
    Dg |= b.lanes;
    if (0 !== (c & b.childLanes)) {
      if (null !== a && b.child !== a.child) throw Error(y$1(153));
      if (null !== b.child) {
        a = b.child;
        c = Tg(a, a.pendingProps);
        b.child = c;
        for (c.return = b; null !== a.sibling; )
          (a = a.sibling),
            (c = c.sibling = Tg(a, a.pendingProps)),
            (c.return = b);
        c.sibling = null;
      }
      return b.child;
    }
    return null;
  }
  var Bi, Ci, Di, Ei;
  Bi = function (a, b) {
    for (var c = b.child; null !== c; ) {
      if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
      else if (4 !== c.tag && null !== c.child) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;
      for (; null === c.sibling; ) {
        if (null === c.return || c.return === b) return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  };
  Ci = function () {};
  Di = function (a, b, c, d) {
    var e = a.memoizedProps;
    if (e !== d) {
      a = b.stateNode;
      dh(ah.current);
      var f = null;
      switch (c) {
        case 'input':
          e = Ya(a, e);
          d = Ya(a, d);
          f = [];
          break;
        case 'option':
          e = eb(a, e);
          d = eb(a, d);
          f = [];
          break;
        case 'select':
          e = m({}, e, { value: void 0 });
          d = m({}, d, { value: void 0 });
          f = [];
          break;
        case 'textarea':
          e = gb(a, e);
          d = gb(a, d);
          f = [];
          break;
        default:
          'function' !== typeof e.onClick &&
            'function' === typeof d.onClick &&
            (a.onclick = jf);
      }
      vb(c, d);
      var g;
      c = null;
      for (l in e)
        if (!d.hasOwnProperty(l) && e.hasOwnProperty(l) && null != e[l])
          if ('style' === l) {
            var h = e[l];
            for (g in h) h.hasOwnProperty(g) && (c || (c = {}), (c[g] = ''));
          } else
            'dangerouslySetInnerHTML' !== l &&
              'children' !== l &&
              'suppressContentEditableWarning' !== l &&
              'suppressHydrationWarning' !== l &&
              'autoFocus' !== l &&
              (ca.hasOwnProperty(l)
                ? f || (f = [])
                : (f = f || []).push(l, null));
      for (l in d) {
        var k = d[l];
        h = null != e ? e[l] : void 0;
        if (d.hasOwnProperty(l) && k !== h && (null != k || null != h))
          if ('style' === l)
            if (h) {
              for (g in h)
                !h.hasOwnProperty(g) ||
                  (k && k.hasOwnProperty(g)) ||
                  (c || (c = {}), (c[g] = ''));
              for (g in k)
                k.hasOwnProperty(g) &&
                  h[g] !== k[g] &&
                  (c || (c = {}), (c[g] = k[g]));
            } else c || (f || (f = []), f.push(l, c)), (c = k);
          else
            'dangerouslySetInnerHTML' === l
              ? ((k = k ? k.__html : void 0),
                (h = h ? h.__html : void 0),
                null != k && h !== k && (f = f || []).push(l, k))
              : 'children' === l
              ? ('string' !== typeof k && 'number' !== typeof k) ||
                (f = f || []).push(l, '' + k)
              : 'suppressContentEditableWarning' !== l &&
                'suppressHydrationWarning' !== l &&
                (ca.hasOwnProperty(l)
                  ? (null != k && 'onScroll' === l && G$1('scroll', a),
                    f || h === k || (f = []))
                  : 'object' === typeof k && null !== k && k.$$typeof === Ga
                  ? k.toString()
                  : (f = f || []).push(l, k));
      }
      c && (f = f || []).push('style', c);
      var l = f;
      if ((b.updateQueue = l)) b.flags |= 4;
    }
  };
  Ei = function (a, b, c, d) {
    c !== d && (b.flags |= 4);
  };
  function Fi(a, b) {
    if (!lh)
      switch (a.tailMode) {
        case 'hidden':
          b = a.tail;
          for (var c = null; null !== b; )
            null !== b.alternate && (c = b), (b = b.sibling);
          null === c ? (a.tail = null) : (c.sibling = null);
          break;
        case 'collapsed':
          c = a.tail;
          for (var d = null; null !== c; )
            null !== c.alternate && (d = c), (c = c.sibling);
          null === d
            ? b || null === a.tail
              ? (a.tail = null)
              : (a.tail.sibling = null)
            : (d.sibling = null);
      }
  }
  function Gi(a, b, c) {
    var d = b.pendingProps;
    switch (b.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null;
      case 1:
        return Ff(b.type) && Gf(), null;
      case 3:
        fh();
        H$1(N);
        H$1(M$1);
        uh();
        d = b.stateNode;
        d.pendingContext &&
          ((d.context = d.pendingContext), (d.pendingContext = null));
        if (null === a || null === a.child)
          rh(b) ? (b.flags |= 4) : d.hydrate || (b.flags |= 256);
        Ci(b);
        return null;
      case 5:
        hh(b);
        var e = dh(ch.current);
        c = b.type;
        if (null !== a && null != b.stateNode)
          Di(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 128);
        else {
          if (!d) {
            if (null === b.stateNode) throw Error(y$1(166));
            return null;
          }
          a = dh(ah.current);
          if (rh(b)) {
            d = b.stateNode;
            c = b.type;
            var f = b.memoizedProps;
            d[wf] = b;
            d[xf] = f;
            switch (c) {
              case 'dialog':
                G$1('cancel', d);
                G$1('close', d);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                G$1('load', d);
                break;
              case 'video':
              case 'audio':
                for (a = 0; a < Xe.length; a++) G$1(Xe[a], d);
                break;
              case 'source':
                G$1('error', d);
                break;
              case 'img':
              case 'image':
              case 'link':
                G$1('error', d);
                G$1('load', d);
                break;
              case 'details':
                G$1('toggle', d);
                break;
              case 'input':
                Za(d, f);
                G$1('invalid', d);
                break;
              case 'select':
                d._wrapperState = { wasMultiple: !!f.multiple };
                G$1('invalid', d);
                break;
              case 'textarea':
                hb(d, f), G$1('invalid', d);
            }
            vb(c, f);
            a = null;
            for (var g in f)
              f.hasOwnProperty(g) &&
                ((e = f[g]),
                'children' === g
                  ? 'string' === typeof e
                    ? d.textContent !== e && (a = ['children', e])
                    : 'number' === typeof e &&
                      d.textContent !== '' + e &&
                      (a = ['children', '' + e])
                  : ca.hasOwnProperty(g) &&
                    null != e &&
                    'onScroll' === g &&
                    G$1('scroll', d));
            switch (c) {
              case 'input':
                Va(d);
                cb(d, f, !0);
                break;
              case 'textarea':
                Va(d);
                jb(d);
                break;
              case 'select':
              case 'option':
                break;
              default:
                'function' === typeof f.onClick && (d.onclick = jf);
            }
            d = a;
            b.updateQueue = d;
            null !== d && (b.flags |= 4);
          } else {
            g = 9 === e.nodeType ? e : e.ownerDocument;
            a === kb.html && (a = lb(c));
            a === kb.html
              ? 'script' === c
                ? ((a = g.createElement('div')),
                  (a.innerHTML = '<script>\x3c/script>'),
                  (a = a.removeChild(a.firstChild)))
                : 'string' === typeof d.is
                ? (a = g.createElement(c, { is: d.is }))
                : ((a = g.createElement(c)),
                  'select' === c &&
                    ((g = a),
                    d.multiple
                      ? (g.multiple = !0)
                      : d.size && (g.size = d.size)))
              : (a = g.createElementNS(a, c));
            a[wf] = b;
            a[xf] = d;
            Bi(a, b, !1, !1);
            b.stateNode = a;
            g = wb(c, d);
            switch (c) {
              case 'dialog':
                G$1('cancel', a);
                G$1('close', a);
                e = d;
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                G$1('load', a);
                e = d;
                break;
              case 'video':
              case 'audio':
                for (e = 0; e < Xe.length; e++) G$1(Xe[e], a);
                e = d;
                break;
              case 'source':
                G$1('error', a);
                e = d;
                break;
              case 'img':
              case 'image':
              case 'link':
                G$1('error', a);
                G$1('load', a);
                e = d;
                break;
              case 'details':
                G$1('toggle', a);
                e = d;
                break;
              case 'input':
                Za(a, d);
                e = Ya(a, d);
                G$1('invalid', a);
                break;
              case 'option':
                e = eb(a, d);
                break;
              case 'select':
                a._wrapperState = { wasMultiple: !!d.multiple };
                e = m({}, d, { value: void 0 });
                G$1('invalid', a);
                break;
              case 'textarea':
                hb(a, d);
                e = gb(a, d);
                G$1('invalid', a);
                break;
              default:
                e = d;
            }
            vb(c, e);
            var h = e;
            for (f in h)
              if (h.hasOwnProperty(f)) {
                var k = h[f];
                'style' === f
                  ? tb(a, k)
                  : 'dangerouslySetInnerHTML' === f
                  ? ((k = k ? k.__html : void 0), null != k && ob(a, k))
                  : 'children' === f
                  ? 'string' === typeof k
                    ? ('textarea' !== c || '' !== k) && pb(a, k)
                    : 'number' === typeof k && pb(a, '' + k)
                  : 'suppressContentEditableWarning' !== f &&
                    'suppressHydrationWarning' !== f &&
                    'autoFocus' !== f &&
                    (ca.hasOwnProperty(f)
                      ? null != k && 'onScroll' === f && G$1('scroll', a)
                      : null != k && qa(a, f, k, g));
              }
            switch (c) {
              case 'input':
                Va(a);
                cb(a, d, !1);
                break;
              case 'textarea':
                Va(a);
                jb(a);
                break;
              case 'option':
                null != d.value && a.setAttribute('value', '' + Sa(d.value));
                break;
              case 'select':
                a.multiple = !!d.multiple;
                f = d.value;
                null != f
                  ? fb(a, !!d.multiple, f, !1)
                  : null != d.defaultValue &&
                    fb(a, !!d.multiple, d.defaultValue, !0);
                break;
              default:
                'function' === typeof e.onClick && (a.onclick = jf);
            }
            mf(c, d) && (b.flags |= 4);
          }
          null !== b.ref && (b.flags |= 128);
        }
        return null;
      case 6:
        if (a && null != b.stateNode) Ei(a, b, a.memoizedProps, d);
        else {
          if ('string' !== typeof d && null === b.stateNode)
            throw Error(y$1(166));
          c = dh(ch.current);
          dh(ah.current);
          rh(b)
            ? ((d = b.stateNode),
              (c = b.memoizedProps),
              (d[wf] = b),
              d.nodeValue !== c && (b.flags |= 4))
            : ((d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d)),
              (d[wf] = b),
              (b.stateNode = d));
        }
        return null;
      case 13:
        H$1(P$1);
        d = b.memoizedState;
        if (0 !== (b.flags & 64)) return (b.lanes = c), b;
        d = null !== d;
        c = !1;
        null === a
          ? void 0 !== b.memoizedProps.fallback && rh(b)
          : (c = null !== a.memoizedState);
        if (d && !c && 0 !== (b.mode & 2))
          if (
            (null === a && !0 !== b.memoizedProps.unstable_avoidThisFallback) ||
            0 !== (P$1.current & 1)
          )
            0 === V && (V = 3);
          else {
            if (0 === V || 3 === V) V = 4;
            null === U$1 ||
              (0 === (Dg & 134217727) && 0 === (Hi & 134217727)) ||
              Ii(U$1, W$1);
          }
        if (d || c) b.flags |= 4;
        return null;
      case 4:
        return fh(), Ci(b), null === a && cf(b.stateNode.containerInfo), null;
      case 10:
        return rg(b), null;
      case 17:
        return Ff(b.type) && Gf(), null;
      case 19:
        H$1(P$1);
        d = b.memoizedState;
        if (null === d) return null;
        f = 0 !== (b.flags & 64);
        g = d.rendering;
        if (null === g)
          if (f) Fi(d, !1);
          else {
            if (0 !== V || (null !== a && 0 !== (a.flags & 64)))
              for (a = b.child; null !== a; ) {
                g = ih(a);
                if (null !== g) {
                  b.flags |= 64;
                  Fi(d, !1);
                  f = g.updateQueue;
                  null !== f && ((b.updateQueue = f), (b.flags |= 4));
                  null === d.lastEffect && (b.firstEffect = null);
                  b.lastEffect = d.lastEffect;
                  d = c;
                  for (c = b.child; null !== c; )
                    (f = c),
                      (a = d),
                      (f.flags &= 2),
                      (f.nextEffect = null),
                      (f.firstEffect = null),
                      (f.lastEffect = null),
                      (g = f.alternate),
                      null === g
                        ? ((f.childLanes = 0),
                          (f.lanes = a),
                          (f.child = null),
                          (f.memoizedProps = null),
                          (f.memoizedState = null),
                          (f.updateQueue = null),
                          (f.dependencies = null),
                          (f.stateNode = null))
                        : ((f.childLanes = g.childLanes),
                          (f.lanes = g.lanes),
                          (f.child = g.child),
                          (f.memoizedProps = g.memoizedProps),
                          (f.memoizedState = g.memoizedState),
                          (f.updateQueue = g.updateQueue),
                          (f.type = g.type),
                          (a = g.dependencies),
                          (f.dependencies =
                            null === a
                              ? null
                              : {
                                  lanes: a.lanes,
                                  firstContext: a.firstContext,
                                })),
                      (c = c.sibling);
                  I$1(P$1, (P$1.current & 1) | 2);
                  return b.child;
                }
                a = a.sibling;
              }
            null !== d.tail &&
              O$1() > Ji &&
              ((b.flags |= 64), (f = !0), Fi(d, !1), (b.lanes = 33554432));
          }
        else {
          if (!f)
            if (((a = ih(g)), null !== a)) {
              if (
                ((b.flags |= 64),
                (f = !0),
                (c = a.updateQueue),
                null !== c && ((b.updateQueue = c), (b.flags |= 4)),
                Fi(d, !0),
                null === d.tail &&
                  'hidden' === d.tailMode &&
                  !g.alternate &&
                  !lh)
              )
                return (
                  (b = b.lastEffect = d.lastEffect),
                  null !== b && (b.nextEffect = null),
                  null
                );
            } else
              2 * O$1() - d.renderingStartTime > Ji &&
                1073741824 !== c &&
                ((b.flags |= 64), (f = !0), Fi(d, !1), (b.lanes = 33554432));
          d.isBackwards
            ? ((g.sibling = b.child), (b.child = g))
            : ((c = d.last),
              null !== c ? (c.sibling = g) : (b.child = g),
              (d.last = g));
        }
        return null !== d.tail
          ? ((c = d.tail),
            (d.rendering = c),
            (d.tail = c.sibling),
            (d.lastEffect = b.lastEffect),
            (d.renderingStartTime = O$1()),
            (c.sibling = null),
            (b = P$1.current),
            I$1(P$1, f ? (b & 1) | 2 : b & 1),
            c)
          : null;
      case 23:
      case 24:
        return (
          Ki(),
          null !== a &&
            (null !== a.memoizedState) !== (null !== b.memoizedState) &&
            'unstable-defer-without-hiding' !== d.mode &&
            (b.flags |= 4),
          null
        );
    }
    throw Error(y$1(156, b.tag));
  }
  function Li$1(a) {
    switch (a.tag) {
      case 1:
        Ff(a.type) && Gf();
        var b = a.flags;
        return b & 4096 ? ((a.flags = (b & -4097) | 64), a) : null;
      case 3:
        fh();
        H$1(N);
        H$1(M$1);
        uh();
        b = a.flags;
        if (0 !== (b & 64)) throw Error(y$1(285));
        a.flags = (b & -4097) | 64;
        return a;
      case 5:
        return hh(a), null;
      case 13:
        return (
          H$1(P$1),
          (b = a.flags),
          b & 4096 ? ((a.flags = (b & -4097) | 64), a) : null
        );
      case 19:
        return H$1(P$1), null;
      case 4:
        return fh(), null;
      case 10:
        return rg(a), null;
      case 23:
      case 24:
        return Ki(), null;
      default:
        return null;
    }
  }
  function Mi(a, b) {
    try {
      var c = '',
        d = b;
      do (c += Qa(d)), (d = d.return);
      while (d);
      var e = c;
    } catch (f) {
      e = '\nError generating stack: ' + f.message + '\n' + f.stack;
    }
    return { value: a, source: b, stack: e };
  }
  function Ni(a, b) {
    try {
      console.error(b.value);
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  var Oi = 'function' === typeof WeakMap ? WeakMap : Map;
  function Pi(a, b, c) {
    c = zg(-1, c);
    c.tag = 3;
    c.payload = { element: null };
    var d = b.value;
    c.callback = function () {
      Qi || ((Qi = !0), (Ri = d));
      Ni(a, b);
    };
    return c;
  }
  function Si(a, b, c) {
    c = zg(-1, c);
    c.tag = 3;
    var d = a.type.getDerivedStateFromError;
    if ('function' === typeof d) {
      var e = b.value;
      c.payload = function () {
        Ni(a, b);
        return d(e);
      };
    }
    var f = a.stateNode;
    null !== f &&
      'function' === typeof f.componentDidCatch &&
      (c.callback = function () {
        'function' !== typeof d &&
          (null === Ti ? (Ti = new Set([this])) : Ti.add(this), Ni(a, b));
        var c = b.stack;
        this.componentDidCatch(b.value, {
          componentStack: null !== c ? c : '',
        });
      });
    return c;
  }
  var Ui = 'function' === typeof WeakSet ? WeakSet : Set;
  function Vi(a) {
    var b = a.ref;
    if (null !== b)
      if ('function' === typeof b)
        try {
          b(null);
        } catch (c) {
          Wi(a, c);
        }
      else b.current = null;
  }
  function Xi(a, b) {
    switch (b.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;
      case 1:
        if (b.flags & 256 && null !== a) {
          var c = a.memoizedProps,
            d = a.memoizedState;
          a = b.stateNode;
          b = a.getSnapshotBeforeUpdate(
            b.elementType === b.type ? c : lg(b.type, c),
            d,
          );
          a.__reactInternalSnapshotBeforeUpdate = b;
        }
        return;
      case 3:
        b.flags & 256 && qf(b.stateNode.containerInfo);
        return;
      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }
    throw Error(y$1(163));
  }
  function Yi(a, b, c) {
    switch (c.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        b = c.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          a = b = b.next;
          do {
            if (3 === (a.tag & 3)) {
              var d = a.create;
              a.destroy = d();
            }
            a = a.next;
          } while (a !== b);
        }
        b = c.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          a = b = b.next;
          do {
            var e = a;
            d = e.next;
            e = e.tag;
            0 !== (e & 4) && 0 !== (e & 1) && (Zi(c, a), $i(c, a));
            a = d;
          } while (a !== b);
        }
        return;
      case 1:
        a = c.stateNode;
        c.flags & 4 &&
          (null === b
            ? a.componentDidMount()
            : ((d =
                c.elementType === c.type
                  ? b.memoizedProps
                  : lg(c.type, b.memoizedProps)),
              a.componentDidUpdate(
                d,
                b.memoizedState,
                a.__reactInternalSnapshotBeforeUpdate,
              )));
        b = c.updateQueue;
        null !== b && Eg(c, b, a);
        return;
      case 3:
        b = c.updateQueue;
        if (null !== b) {
          a = null;
          if (null !== c.child)
            switch (c.child.tag) {
              case 5:
                a = c.child.stateNode;
                break;
              case 1:
                a = c.child.stateNode;
            }
          Eg(c, b, a);
        }
        return;
      case 5:
        a = c.stateNode;
        null === b && c.flags & 4 && mf(c.type, c.memoizedProps) && a.focus();
        return;
      case 6:
        return;
      case 4:
        return;
      case 12:
        return;
      case 13:
        null === c.memoizedState &&
          ((c = c.alternate),
          null !== c &&
            ((c = c.memoizedState),
            null !== c && ((c = c.dehydrated), null !== c && Cc(c))));
        return;
      case 19:
      case 17:
      case 20:
      case 21:
      case 23:
      case 24:
        return;
    }
    throw Error(y$1(163));
  }
  function aj(a, b) {
    for (var c = a; ; ) {
      if (5 === c.tag) {
        var d = c.stateNode;
        if (b)
          (d = d.style),
            'function' === typeof d.setProperty
              ? d.setProperty('display', 'none', 'important')
              : (d.display = 'none');
        else {
          d = c.stateNode;
          var e = c.memoizedProps.style;
          e =
            void 0 !== e && null !== e && e.hasOwnProperty('display')
              ? e.display
              : null;
          d.style.display = sb('display', e);
        }
      } else if (6 === c.tag) c.stateNode.nodeValue = b ? '' : c.memoizedProps;
      else if (
        ((23 !== c.tag && 24 !== c.tag) ||
          null === c.memoizedState ||
          c === a) &&
        null !== c.child
      ) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === a) break;
      for (; null === c.sibling; ) {
        if (null === c.return || c.return === a) return;
        c = c.return;
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  }
  function bj(a, b) {
    if (Mf && 'function' === typeof Mf.onCommitFiberUnmount)
      try {
        Mf.onCommitFiberUnmount(Lf, b);
      } catch (f) {}
    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        a = b.updateQueue;
        if (null !== a && ((a = a.lastEffect), null !== a)) {
          var c = (a = a.next);
          do {
            var d = c,
              e = d.destroy;
            d = d.tag;
            if (void 0 !== e)
              if (0 !== (d & 4)) Zi(b, c);
              else {
                d = b;
                try {
                  e();
                } catch (f) {
                  Wi(d, f);
                }
              }
            c = c.next;
          } while (c !== a);
        }
        break;
      case 1:
        Vi(b);
        a = b.stateNode;
        if ('function' === typeof a.componentWillUnmount)
          try {
            (a.props = b.memoizedProps),
              (a.state = b.memoizedState),
              a.componentWillUnmount();
          } catch (f) {
            Wi(b, f);
          }
        break;
      case 5:
        Vi(b);
        break;
      case 4:
        cj(a, b);
    }
  }
  function dj(a) {
    a.alternate = null;
    a.child = null;
    a.dependencies = null;
    a.firstEffect = null;
    a.lastEffect = null;
    a.memoizedProps = null;
    a.memoizedState = null;
    a.pendingProps = null;
    a.return = null;
    a.updateQueue = null;
  }
  function ej(a) {
    return 5 === a.tag || 3 === a.tag || 4 === a.tag;
  }
  function fj(a) {
    a: {
      for (var b = a.return; null !== b; ) {
        if (ej(b)) break a;
        b = b.return;
      }
      throw Error(y$1(160));
    }
    var c = b;
    b = c.stateNode;
    switch (c.tag) {
      case 5:
        var d = !1;
        break;
      case 3:
        b = b.containerInfo;
        d = !0;
        break;
      case 4:
        b = b.containerInfo;
        d = !0;
        break;
      default:
        throw Error(y$1(161));
    }
    c.flags & 16 && (pb(b, ''), (c.flags &= -17));
    a: b: for (c = a; ; ) {
      for (; null === c.sibling; ) {
        if (null === c.return || ej(c.return)) {
          c = null;
          break a;
        }
        c = c.return;
      }
      c.sibling.return = c.return;
      for (c = c.sibling; 5 !== c.tag && 6 !== c.tag && 18 !== c.tag; ) {
        if (c.flags & 2) continue b;
        if (null === c.child || 4 === c.tag) continue b;
        else (c.child.return = c), (c = c.child);
      }
      if (!(c.flags & 2)) {
        c = c.stateNode;
        break a;
      }
    }
    d ? gj(a, c, b) : hj(a, c, b);
  }
  function gj(a, b, c) {
    var d = a.tag,
      e = 5 === d || 6 === d;
    if (e)
      (a = e ? a.stateNode : a.stateNode.instance),
        b
          ? 8 === c.nodeType
            ? c.parentNode.insertBefore(a, b)
            : c.insertBefore(a, b)
          : (8 === c.nodeType
              ? ((b = c.parentNode), b.insertBefore(a, c))
              : ((b = c), b.appendChild(a)),
            (c = c._reactRootContainer),
            (null !== c && void 0 !== c) ||
              null !== b.onclick ||
              (b.onclick = jf));
    else if (4 !== d && ((a = a.child), null !== a))
      for (gj(a, b, c), a = a.sibling; null !== a; )
        gj(a, b, c), (a = a.sibling);
  }
  function hj(a, b, c) {
    var d = a.tag,
      e = 5 === d || 6 === d;
    if (e)
      (a = e ? a.stateNode : a.stateNode.instance),
        b ? c.insertBefore(a, b) : c.appendChild(a);
    else if (4 !== d && ((a = a.child), null !== a))
      for (hj(a, b, c), a = a.sibling; null !== a; )
        hj(a, b, c), (a = a.sibling);
  }
  function cj(a, b) {
    for (var c = b, d = !1, e, f; ; ) {
      if (!d) {
        d = c.return;
        a: for (;;) {
          if (null === d) throw Error(y$1(160));
          e = d.stateNode;
          switch (d.tag) {
            case 5:
              f = !1;
              break a;
            case 3:
              e = e.containerInfo;
              f = !0;
              break a;
            case 4:
              e = e.containerInfo;
              f = !0;
              break a;
          }
          d = d.return;
        }
        d = !0;
      }
      if (5 === c.tag || 6 === c.tag) {
        a: for (var g = a, h = c, k = h; ; )
          if ((bj(g, k), null !== k.child && 4 !== k.tag))
            (k.child.return = k), (k = k.child);
          else {
            if (k === h) break a;
            for (; null === k.sibling; ) {
              if (null === k.return || k.return === h) break a;
              k = k.return;
            }
            k.sibling.return = k.return;
            k = k.sibling;
          }
        f
          ? ((g = e),
            (h = c.stateNode),
            8 === g.nodeType ? g.parentNode.removeChild(h) : g.removeChild(h))
          : e.removeChild(c.stateNode);
      } else if (4 === c.tag) {
        if (null !== c.child) {
          e = c.stateNode.containerInfo;
          f = !0;
          c.child.return = c;
          c = c.child;
          continue;
        }
      } else if ((bj(a, c), null !== c.child)) {
        c.child.return = c;
        c = c.child;
        continue;
      }
      if (c === b) break;
      for (; null === c.sibling; ) {
        if (null === c.return || c.return === b) return;
        c = c.return;
        4 === c.tag && (d = !1);
      }
      c.sibling.return = c.return;
      c = c.sibling;
    }
  }
  function ij(a, b) {
    switch (b.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        var c = b.updateQueue;
        c = null !== c ? c.lastEffect : null;
        if (null !== c) {
          var d = (c = c.next);
          do
            3 === (d.tag & 3) &&
              ((a = d.destroy), (d.destroy = void 0), void 0 !== a && a()),
              (d = d.next);
          while (d !== c);
        }
        return;
      case 1:
        return;
      case 5:
        c = b.stateNode;
        if (null != c) {
          d = b.memoizedProps;
          var e = null !== a ? a.memoizedProps : d;
          a = b.type;
          var f = b.updateQueue;
          b.updateQueue = null;
          if (null !== f) {
            c[xf] = d;
            'input' === a && 'radio' === d.type && null != d.name && $a(c, d);
            wb(a, e);
            b = wb(a, d);
            for (e = 0; e < f.length; e += 2) {
              var g = f[e],
                h = f[e + 1];
              'style' === g
                ? tb(c, h)
                : 'dangerouslySetInnerHTML' === g
                ? ob(c, h)
                : 'children' === g
                ? pb(c, h)
                : qa(c, g, h, b);
            }
            switch (a) {
              case 'input':
                ab(c, d);
                break;
              case 'textarea':
                ib(c, d);
                break;
              case 'select':
                (a = c._wrapperState.wasMultiple),
                  (c._wrapperState.wasMultiple = !!d.multiple),
                  (f = d.value),
                  null != f
                    ? fb(c, !!d.multiple, f, !1)
                    : a !== !!d.multiple &&
                      (null != d.defaultValue
                        ? fb(c, !!d.multiple, d.defaultValue, !0)
                        : fb(c, !!d.multiple, d.multiple ? [] : '', !1));
            }
          }
        }
        return;
      case 6:
        if (null === b.stateNode) throw Error(y$1(162));
        b.stateNode.nodeValue = b.memoizedProps;
        return;
      case 3:
        c = b.stateNode;
        c.hydrate && ((c.hydrate = !1), Cc(c.containerInfo));
        return;
      case 12:
        return;
      case 13:
        null !== b.memoizedState && ((jj = O$1()), aj(b.child, !0));
        kj(b);
        return;
      case 19:
        kj(b);
        return;
      case 17:
        return;
      case 23:
      case 24:
        aj(b, null !== b.memoizedState);
        return;
    }
    throw Error(y$1(163));
  }
  function kj(a) {
    var b = a.updateQueue;
    if (null !== b) {
      a.updateQueue = null;
      var c = a.stateNode;
      null === c && (c = a.stateNode = new Ui());
      b.forEach(function (b) {
        var d = lj.bind(null, a, b);
        c.has(b) || (c.add(b), b.then(d, d));
      });
    }
  }
  function mj(a, b) {
    return null !== a &&
      ((a = a.memoizedState), null === a || null !== a.dehydrated)
      ? ((b = b.memoizedState), null !== b && null === b.dehydrated)
      : !1;
  }
  var nj = Math.ceil,
    oj = ra.ReactCurrentDispatcher,
    pj = ra.ReactCurrentOwner,
    X$1 = 0,
    U$1 = null,
    Y = null,
    W$1 = 0,
    qj = 0,
    rj = Bf(0),
    V = 0,
    sj = null,
    tj = 0,
    Dg = 0,
    Hi = 0,
    uj = 0,
    vj = null,
    jj = 0,
    Ji = Infinity;
  function wj() {
    Ji = O$1() + 500;
  }
  var Z$1 = null,
    Qi = !1,
    Ri = null,
    Ti = null,
    xj = !1,
    yj = null,
    zj = 90,
    Aj = [],
    Bj = [],
    Cj = null,
    Dj = 0,
    Ej = null,
    Fj = -1,
    Gj = 0,
    Hj = 0,
    Ij = null,
    Jj = !1;
  function Hg() {
    return 0 !== (X$1 & 48) ? O$1() : -1 !== Fj ? Fj : (Fj = O$1());
  }
  function Ig(a) {
    a = a.mode;
    if (0 === (a & 2)) return 1;
    if (0 === (a & 4)) return 99 === eg() ? 1 : 2;
    0 === Gj && (Gj = tj);
    if (0 !== kg.transition) {
      0 !== Hj && (Hj = null !== vj ? vj.pendingLanes : 0);
      a = Gj;
      var b = 4186112 & ~Hj;
      b &= -b;
      0 === b && ((a = 4186112 & ~a), (b = a & -a), 0 === b && (b = 8192));
      return b;
    }
    a = eg();
    0 !== (X$1 & 4) && 98 === a
      ? (a = Xc(12, Gj))
      : ((a = Sc(a)), (a = Xc(a, Gj)));
    return a;
  }
  function Jg(a, b, c) {
    if (50 < Dj) throw ((Dj = 0), (Ej = null), Error(y$1(185)));
    a = Kj(a, b);
    if (null === a) return null;
    $c(a, b, c);
    a === U$1 && ((Hi |= b), 4 === V && Ii(a, W$1));
    var d = eg();
    1 === b
      ? 0 !== (X$1 & 8) && 0 === (X$1 & 48)
        ? Lj(a)
        : (Mj(a, c), 0 === X$1 && (wj(), ig()))
      : (0 === (X$1 & 4) ||
          (98 !== d && 99 !== d) ||
          (null === Cj ? (Cj = new Set([a])) : Cj.add(a)),
        Mj(a, c));
    vj = a;
  }
  function Kj(a, b) {
    a.lanes |= b;
    var c = a.alternate;
    null !== c && (c.lanes |= b);
    c = a;
    for (a = a.return; null !== a; )
      (a.childLanes |= b),
        (c = a.alternate),
        null !== c && (c.childLanes |= b),
        (c = a),
        (a = a.return);
    return 3 === c.tag ? c.stateNode : null;
  }
  function Mj(a, b) {
    for (
      var c = a.callbackNode,
        d = a.suspendedLanes,
        e = a.pingedLanes,
        f = a.expirationTimes,
        g = a.pendingLanes;
      0 < g;

    ) {
      var h = 31 - Vc(g),
        k = 1 << h,
        l = f[h];
      if (-1 === l) {
        if (0 === (k & d) || 0 !== (k & e)) {
          l = b;
          Rc(k);
          var n = F$1;
          f[h] = 10 <= n ? l + 250 : 6 <= n ? l + 5e3 : -1;
        }
      } else l <= b && (a.expiredLanes |= k);
      g &= ~k;
    }
    d = Uc(a, a === U$1 ? W$1 : 0);
    b = F$1;
    if (0 === d)
      null !== c &&
        (c !== Zf && Pf(c), (a.callbackNode = null), (a.callbackPriority = 0));
    else {
      if (null !== c) {
        if (a.callbackPriority === b) return;
        c !== Zf && Pf(c);
      }
      15 === b
        ? ((c = Lj.bind(null, a)),
          null === ag ? ((ag = [c]), (bg = Of(Uf, jg))) : ag.push(c),
          (c = Zf))
        : 14 === b
        ? (c = hg(99, Lj.bind(null, a)))
        : ((c = Tc(b)), (c = hg(c, Nj.bind(null, a))));
      a.callbackPriority = b;
      a.callbackNode = c;
    }
  }
  function Nj(a) {
    Fj = -1;
    Hj = Gj = 0;
    if (0 !== (X$1 & 48)) throw Error(y$1(327));
    var b = a.callbackNode;
    if (Oj() && a.callbackNode !== b) return null;
    var c = Uc(a, a === U$1 ? W$1 : 0);
    if (0 === c) return null;
    var d = c;
    var e = X$1;
    X$1 |= 16;
    var f = Pj();
    if (U$1 !== a || W$1 !== d) wj(), Qj(a, d);
    do
      try {
        Rj();
        break;
      } catch (h) {
        Sj(a, h);
      }
    while (1);
    qg();
    oj.current = f;
    X$1 = e;
    null !== Y ? (d = 0) : ((U$1 = null), (W$1 = 0), (d = V));
    if (0 !== (tj & Hi)) Qj(a, 0);
    else if (0 !== d) {
      2 === d &&
        ((X$1 |= 64),
        a.hydrate && ((a.hydrate = !1), qf(a.containerInfo)),
        (c = Wc(a)),
        0 !== c && (d = Tj(a, c)));
      if (1 === d) throw ((b = sj), Qj(a, 0), Ii(a, c), Mj(a, O$1()), b);
      a.finishedWork = a.current.alternate;
      a.finishedLanes = c;
      switch (d) {
        case 0:
        case 1:
          throw Error(y$1(345));
        case 2:
          Uj(a);
          break;
        case 3:
          Ii(a, c);
          if ((c & 62914560) === c && ((d = jj + 500 - O$1()), 10 < d)) {
            if (0 !== Uc(a, 0)) break;
            e = a.suspendedLanes;
            if ((e & c) !== c) {
              Hg();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = of(Uj.bind(null, a), d);
            break;
          }
          Uj(a);
          break;
        case 4:
          Ii(a, c);
          if ((c & 4186112) === c) break;
          d = a.eventTimes;
          for (e = -1; 0 < c; ) {
            var g = 31 - Vc(c);
            f = 1 << g;
            g = d[g];
            g > e && (e = g);
            c &= ~f;
          }
          c = e;
          c = O$1() - c;
          c =
            (120 > c
              ? 120
              : 480 > c
              ? 480
              : 1080 > c
              ? 1080
              : 1920 > c
              ? 1920
              : 3e3 > c
              ? 3e3
              : 4320 > c
              ? 4320
              : 1960 * nj(c / 1960)) - c;
          if (10 < c) {
            a.timeoutHandle = of(Uj.bind(null, a), c);
            break;
          }
          Uj(a);
          break;
        case 5:
          Uj(a);
          break;
        default:
          throw Error(y$1(329));
      }
    }
    Mj(a, O$1());
    return a.callbackNode === b ? Nj.bind(null, a) : null;
  }
  function Ii(a, b) {
    b &= ~uj;
    b &= ~Hi;
    a.suspendedLanes |= b;
    a.pingedLanes &= ~b;
    for (a = a.expirationTimes; 0 < b; ) {
      var c = 31 - Vc(b),
        d = 1 << c;
      a[c] = -1;
      b &= ~d;
    }
  }
  function Lj(a) {
    if (0 !== (X$1 & 48)) throw Error(y$1(327));
    Oj();
    if (a === U$1 && 0 !== (a.expiredLanes & W$1)) {
      var b = W$1;
      var c = Tj(a, b);
      0 !== (tj & Hi) && ((b = Uc(a, b)), (c = Tj(a, b)));
    } else (b = Uc(a, 0)), (c = Tj(a, b));
    0 !== a.tag &&
      2 === c &&
      ((X$1 |= 64),
      a.hydrate && ((a.hydrate = !1), qf(a.containerInfo)),
      (b = Wc(a)),
      0 !== b && (c = Tj(a, b)));
    if (1 === c) throw ((c = sj), Qj(a, 0), Ii(a, b), Mj(a, O$1()), c);
    a.finishedWork = a.current.alternate;
    a.finishedLanes = b;
    Uj(a);
    Mj(a, O$1());
    return null;
  }
  function Vj() {
    if (null !== Cj) {
      var a = Cj;
      Cj = null;
      a.forEach(function (a) {
        a.expiredLanes |= 24 & a.pendingLanes;
        Mj(a, O$1());
      });
    }
    ig();
  }
  function Wj(a, b) {
    var c = X$1;
    X$1 |= 1;
    try {
      return a(b);
    } finally {
      (X$1 = c), 0 === X$1 && (wj(), ig());
    }
  }
  function Xj(a, b) {
    var c = X$1;
    X$1 &= -2;
    X$1 |= 8;
    try {
      return a(b);
    } finally {
      (X$1 = c), 0 === X$1 && (wj(), ig());
    }
  }
  function ni(a, b) {
    I$1(rj, qj);
    qj |= b;
    tj |= b;
  }
  function Ki() {
    qj = rj.current;
    H$1(rj);
  }
  function Qj(a, b) {
    a.finishedWork = null;
    a.finishedLanes = 0;
    var c = a.timeoutHandle;
    -1 !== c && ((a.timeoutHandle = -1), pf(c));
    if (null !== Y)
      for (c = Y.return; null !== c; ) {
        var d = c;
        switch (d.tag) {
          case 1:
            d = d.type.childContextTypes;
            null !== d && void 0 !== d && Gf();
            break;
          case 3:
            fh();
            H$1(N);
            H$1(M$1);
            uh();
            break;
          case 5:
            hh(d);
            break;
          case 4:
            fh();
            break;
          case 13:
            H$1(P$1);
            break;
          case 19:
            H$1(P$1);
            break;
          case 10:
            rg(d);
            break;
          case 23:
          case 24:
            Ki();
        }
        c = c.return;
      }
    U$1 = a;
    Y = Tg(a.current, null);
    W$1 = qj = tj = b;
    V = 0;
    sj = null;
    uj = Hi = Dg = 0;
  }
  function Sj(a, b) {
    do {
      var c = Y;
      try {
        qg();
        vh.current = Gh;
        if (yh) {
          for (var d = R$1.memoizedState; null !== d; ) {
            var e = d.queue;
            null !== e && (e.pending = null);
            d = d.next;
          }
          yh = !1;
        }
        xh = 0;
        T = S$1 = R$1 = null;
        zh = !1;
        pj.current = null;
        if (null === c || null === c.return) {
          V = 1;
          sj = b;
          Y = null;
          break;
        }
        a: {
          var f = a,
            g = c.return,
            h = c,
            k = b;
          b = W$1;
          h.flags |= 2048;
          h.firstEffect = h.lastEffect = null;
          if (
            null !== k &&
            'object' === typeof k &&
            'function' === typeof k.then
          ) {
            var l = k;
            if (0 === (h.mode & 2)) {
              var n = h.alternate;
              n
                ? ((h.updateQueue = n.updateQueue),
                  (h.memoizedState = n.memoizedState),
                  (h.lanes = n.lanes))
                : ((h.updateQueue = null), (h.memoizedState = null));
            }
            var A = 0 !== (P$1.current & 1),
              p = g;
            do {
              var C;
              if ((C = 13 === p.tag)) {
                var x = p.memoizedState;
                if (null !== x) C = null !== x.dehydrated ? !0 : !1;
                else {
                  var w = p.memoizedProps;
                  C =
                    void 0 === w.fallback
                      ? !1
                      : !0 !== w.unstable_avoidThisFallback
                      ? !0
                      : A
                      ? !1
                      : !0;
                }
              }
              if (C) {
                var z = p.updateQueue;
                if (null === z) {
                  var u = new Set();
                  u.add(l);
                  p.updateQueue = u;
                } else z.add(l);
                if (0 === (p.mode & 2)) {
                  p.flags |= 64;
                  h.flags |= 16384;
                  h.flags &= -2981;
                  if (1 === h.tag)
                    if (null === h.alternate) h.tag = 17;
                    else {
                      var t = zg(-1, 1);
                      t.tag = 2;
                      Ag(h, t);
                    }
                  h.lanes |= 1;
                  break a;
                }
                k = void 0;
                h = b;
                var q = f.pingCache;
                null === q
                  ? ((q = f.pingCache = new Oi()), (k = new Set()), q.set(l, k))
                  : ((k = q.get(l)),
                    void 0 === k && ((k = new Set()), q.set(l, k)));
                if (!k.has(h)) {
                  k.add(h);
                  var v = Yj.bind(null, f, l, h);
                  l.then(v, v);
                }
                p.flags |= 4096;
                p.lanes = b;
                break a;
              }
              p = p.return;
            } while (null !== p);
            k = Error(
              (Ra(h.type) || 'A React component') +
                ' suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.',
            );
          }
          5 !== V && (V = 2);
          k = Mi(k, h);
          p = g;
          do {
            switch (p.tag) {
              case 3:
                f = k;
                p.flags |= 4096;
                b &= -b;
                p.lanes |= b;
                var J = Pi(p, f, b);
                Bg(p, J);
                break a;
              case 1:
                f = k;
                var K = p.type,
                  Q = p.stateNode;
                if (
                  0 === (p.flags & 64) &&
                  ('function' === typeof K.getDerivedStateFromError ||
                    (null !== Q &&
                      'function' === typeof Q.componentDidCatch &&
                      (null === Ti || !Ti.has(Q))))
                ) {
                  p.flags |= 4096;
                  b &= -b;
                  p.lanes |= b;
                  var L = Si(p, f, b);
                  Bg(p, L);
                  break a;
                }
            }
            p = p.return;
          } while (null !== p);
        }
        Zj(c);
      } catch (va) {
        b = va;
        Y === c && null !== c && (Y = c = c.return);
        continue;
      }
      break;
    } while (1);
  }
  function Pj() {
    var a = oj.current;
    oj.current = Gh;
    return null === a ? Gh : a;
  }
  function Tj(a, b) {
    var c = X$1;
    X$1 |= 16;
    var d = Pj();
    (U$1 === a && W$1 === b) || Qj(a, b);
    do
      try {
        ak();
        break;
      } catch (e) {
        Sj(a, e);
      }
    while (1);
    qg();
    X$1 = c;
    oj.current = d;
    if (null !== Y) throw Error(y$1(261));
    U$1 = null;
    W$1 = 0;
    return V;
  }
  function ak() {
    for (; null !== Y; ) bk(Y);
  }
  function Rj() {
    for (; null !== Y && !Qf(); ) bk(Y);
  }
  function bk(a) {
    var b = ck(a.alternate, a, qj);
    a.memoizedProps = a.pendingProps;
    null === b ? Zj(a) : (Y = b);
    pj.current = null;
  }
  function Zj(a) {
    var b = a;
    do {
      var c = b.alternate;
      a = b.return;
      if (0 === (b.flags & 2048)) {
        c = Gi(c, b, qj);
        if (null !== c) {
          Y = c;
          return;
        }
        c = b;
        if (
          (24 !== c.tag && 23 !== c.tag) ||
          null === c.memoizedState ||
          0 !== (qj & 1073741824) ||
          0 === (c.mode & 4)
        ) {
          for (var d = 0, e = c.child; null !== e; )
            (d |= e.lanes | e.childLanes), (e = e.sibling);
          c.childLanes = d;
        }
        null !== a &&
          0 === (a.flags & 2048) &&
          (null === a.firstEffect && (a.firstEffect = b.firstEffect),
          null !== b.lastEffect &&
            (null !== a.lastEffect && (a.lastEffect.nextEffect = b.firstEffect),
            (a.lastEffect = b.lastEffect)),
          1 < b.flags &&
            (null !== a.lastEffect
              ? (a.lastEffect.nextEffect = b)
              : (a.firstEffect = b),
            (a.lastEffect = b)));
      } else {
        c = Li$1(b);
        if (null !== c) {
          c.flags &= 2047;
          Y = c;
          return;
        }
        null !== a &&
          ((a.firstEffect = a.lastEffect = null), (a.flags |= 2048));
      }
      b = b.sibling;
      if (null !== b) {
        Y = b;
        return;
      }
      Y = b = a;
    } while (null !== b);
    0 === V && (V = 5);
  }
  function Uj(a) {
    var b = eg();
    gg(99, dk.bind(null, a, b));
    return null;
  }
  function dk(a, b) {
    do Oj();
    while (null !== yj);
    if (0 !== (X$1 & 48)) throw Error(y$1(327));
    var c = a.finishedWork;
    if (null === c) return null;
    a.finishedWork = null;
    a.finishedLanes = 0;
    if (c === a.current) throw Error(y$1(177));
    a.callbackNode = null;
    var d = c.lanes | c.childLanes,
      e = d,
      f = a.pendingLanes & ~e;
    a.pendingLanes = e;
    a.suspendedLanes = 0;
    a.pingedLanes = 0;
    a.expiredLanes &= e;
    a.mutableReadLanes &= e;
    a.entangledLanes &= e;
    e = a.entanglements;
    for (var g = a.eventTimes, h = a.expirationTimes; 0 < f; ) {
      var k = 31 - Vc(f),
        l = 1 << k;
      e[k] = 0;
      g[k] = -1;
      h[k] = -1;
      f &= ~l;
    }
    null !== Cj && 0 === (d & 24) && Cj.has(a) && Cj.delete(a);
    a === U$1 && ((Y = U$1 = null), (W$1 = 0));
    1 < c.flags
      ? null !== c.lastEffect
        ? ((c.lastEffect.nextEffect = c), (d = c.firstEffect))
        : (d = c)
      : (d = c.firstEffect);
    if (null !== d) {
      e = X$1;
      X$1 |= 32;
      pj.current = null;
      kf = fd;
      g = Ne();
      if (Oe(g)) {
        if ('selectionStart' in g)
          h = { start: g.selectionStart, end: g.selectionEnd };
        else
          a: if (
            ((h = ((h = g.ownerDocument) && h.defaultView) || window),
            (l = h.getSelection && h.getSelection()) && 0 !== l.rangeCount)
          ) {
            h = l.anchorNode;
            f = l.anchorOffset;
            k = l.focusNode;
            l = l.focusOffset;
            try {
              h.nodeType, k.nodeType;
            } catch (va) {
              h = null;
              break a;
            }
            var n = 0,
              A = -1,
              p = -1,
              C = 0,
              x = 0,
              w = g,
              z = null;
            b: for (;;) {
              for (var u; ; ) {
                w !== h || (0 !== f && 3 !== w.nodeType) || (A = n + f);
                w !== k || (0 !== l && 3 !== w.nodeType) || (p = n + l);
                3 === w.nodeType && (n += w.nodeValue.length);
                if (null === (u = w.firstChild)) break;
                z = w;
                w = u;
              }
              for (;;) {
                if (w === g) break b;
                z === h && ++C === f && (A = n);
                z === k && ++x === l && (p = n);
                if (null !== (u = w.nextSibling)) break;
                w = z;
                z = w.parentNode;
              }
              w = u;
            }
            h = -1 === A || -1 === p ? null : { start: A, end: p };
          } else h = null;
        h = h || { start: 0, end: 0 };
      } else h = null;
      lf = { focusedElem: g, selectionRange: h };
      fd = !1;
      Ij = null;
      Jj = !1;
      Z$1 = d;
      do
        try {
          ek();
        } catch (va) {
          if (null === Z$1) throw Error(y$1(330));
          Wi(Z$1, va);
          Z$1 = Z$1.nextEffect;
        }
      while (null !== Z$1);
      Ij = null;
      Z$1 = d;
      do
        try {
          for (g = a; null !== Z$1; ) {
            var t = Z$1.flags;
            t & 16 && pb(Z$1.stateNode, '');
            if (t & 128) {
              var q = Z$1.alternate;
              if (null !== q) {
                var v = q.ref;
                null !== v &&
                  ('function' === typeof v ? v(null) : (v.current = null));
              }
            }
            switch (t & 1038) {
              case 2:
                fj(Z$1);
                Z$1.flags &= -3;
                break;
              case 6:
                fj(Z$1);
                Z$1.flags &= -3;
                ij(Z$1.alternate, Z$1);
                break;
              case 1024:
                Z$1.flags &= -1025;
                break;
              case 1028:
                Z$1.flags &= -1025;
                ij(Z$1.alternate, Z$1);
                break;
              case 4:
                ij(Z$1.alternate, Z$1);
                break;
              case 8:
                h = Z$1;
                cj(g, h);
                var J = h.alternate;
                dj(h);
                null !== J && dj(J);
            }
            Z$1 = Z$1.nextEffect;
          }
        } catch (va) {
          if (null === Z$1) throw Error(y$1(330));
          Wi(Z$1, va);
          Z$1 = Z$1.nextEffect;
        }
      while (null !== Z$1);
      v = lf;
      q = Ne();
      t = v.focusedElem;
      g = v.selectionRange;
      if (
        q !== t &&
        t &&
        t.ownerDocument &&
        Me(t.ownerDocument.documentElement, t)
      ) {
        null !== g &&
          Oe(t) &&
          ((q = g.start),
          (v = g.end),
          void 0 === v && (v = q),
          'selectionStart' in t
            ? ((t.selectionStart = q),
              (t.selectionEnd = Math.min(v, t.value.length)))
            : ((v =
                ((q = t.ownerDocument || document) && q.defaultView) || window),
              v.getSelection &&
                ((v = v.getSelection()),
                (h = t.textContent.length),
                (J = Math.min(g.start, h)),
                (g = void 0 === g.end ? J : Math.min(g.end, h)),
                !v.extend && J > g && ((h = g), (g = J), (J = h)),
                (h = Le(t, J)),
                (f = Le(t, g)),
                h &&
                  f &&
                  (1 !== v.rangeCount ||
                    v.anchorNode !== h.node ||
                    v.anchorOffset !== h.offset ||
                    v.focusNode !== f.node ||
                    v.focusOffset !== f.offset) &&
                  ((q = q.createRange()),
                  q.setStart(h.node, h.offset),
                  v.removeAllRanges(),
                  J > g
                    ? (v.addRange(q), v.extend(f.node, f.offset))
                    : (q.setEnd(f.node, f.offset), v.addRange(q))))));
        q = [];
        for (v = t; (v = v.parentNode); )
          1 === v.nodeType &&
            q.push({ element: v, left: v.scrollLeft, top: v.scrollTop });
        'function' === typeof t.focus && t.focus();
        for (t = 0; t < q.length; t++)
          (v = q[t]),
            (v.element.scrollLeft = v.left),
            (v.element.scrollTop = v.top);
      }
      fd = !!kf;
      lf = kf = null;
      a.current = c;
      Z$1 = d;
      do
        try {
          for (t = a; null !== Z$1; ) {
            var K = Z$1.flags;
            K & 36 && Yi(t, Z$1.alternate, Z$1);
            if (K & 128) {
              q = void 0;
              var Q = Z$1.ref;
              if (null !== Q) {
                var L = Z$1.stateNode;
                switch (Z$1.tag) {
                  case 5:
                    q = L;
                    break;
                  default:
                    q = L;
                }
                'function' === typeof Q ? Q(q) : (Q.current = q);
              }
            }
            Z$1 = Z$1.nextEffect;
          }
        } catch (va) {
          if (null === Z$1) throw Error(y$1(330));
          Wi(Z$1, va);
          Z$1 = Z$1.nextEffect;
        }
      while (null !== Z$1);
      Z$1 = null;
      $f();
      X$1 = e;
    } else a.current = c;
    if (xj) (xj = !1), (yj = a), (zj = b);
    else
      for (Z$1 = d; null !== Z$1; )
        (b = Z$1.nextEffect),
          (Z$1.nextEffect = null),
          Z$1.flags & 8 &&
            ((K = Z$1), (K.sibling = null), (K.stateNode = null)),
          (Z$1 = b);
    d = a.pendingLanes;
    0 === d && (Ti = null);
    1 === d ? (a === Ej ? Dj++ : ((Dj = 0), (Ej = a))) : (Dj = 0);
    c = c.stateNode;
    if (Mf && 'function' === typeof Mf.onCommitFiberRoot)
      try {
        Mf.onCommitFiberRoot(Lf, c, void 0, 64 === (c.current.flags & 64));
      } catch (va) {}
    Mj(a, O$1());
    if (Qi) throw ((Qi = !1), (a = Ri), (Ri = null), a);
    if (0 !== (X$1 & 8)) return null;
    ig();
    return null;
  }
  function ek() {
    for (; null !== Z$1; ) {
      var a = Z$1.alternate;
      Jj ||
        null === Ij ||
        (0 !== (Z$1.flags & 8)
          ? dc(Z$1, Ij) && (Jj = !0)
          : 13 === Z$1.tag && mj(a, Z$1) && dc(Z$1, Ij) && (Jj = !0));
      var b = Z$1.flags;
      0 !== (b & 256) && Xi(a, Z$1);
      0 === (b & 512) ||
        xj ||
        ((xj = !0),
        hg(97, function () {
          Oj();
          return null;
        }));
      Z$1 = Z$1.nextEffect;
    }
  }
  function Oj() {
    if (90 !== zj) {
      var a = 97 < zj ? 97 : zj;
      zj = 90;
      return gg(a, fk);
    }
    return !1;
  }
  function $i(a, b) {
    Aj.push(b, a);
    xj ||
      ((xj = !0),
      hg(97, function () {
        Oj();
        return null;
      }));
  }
  function Zi(a, b) {
    Bj.push(b, a);
    xj ||
      ((xj = !0),
      hg(97, function () {
        Oj();
        return null;
      }));
  }
  function fk() {
    if (null === yj) return !1;
    var a = yj;
    yj = null;
    if (0 !== (X$1 & 48)) throw Error(y$1(331));
    var b = X$1;
    X$1 |= 32;
    var c = Bj;
    Bj = [];
    for (var d = 0; d < c.length; d += 2) {
      var e = c[d],
        f = c[d + 1],
        g = e.destroy;
      e.destroy = void 0;
      if ('function' === typeof g)
        try {
          g();
        } catch (k) {
          if (null === f) throw Error(y$1(330));
          Wi(f, k);
        }
    }
    c = Aj;
    Aj = [];
    for (d = 0; d < c.length; d += 2) {
      e = c[d];
      f = c[d + 1];
      try {
        var h = e.create;
        e.destroy = h();
      } catch (k) {
        if (null === f) throw Error(y$1(330));
        Wi(f, k);
      }
    }
    for (h = a.current.firstEffect; null !== h; )
      (a = h.nextEffect),
        (h.nextEffect = null),
        h.flags & 8 && ((h.sibling = null), (h.stateNode = null)),
        (h = a);
    X$1 = b;
    ig();
    return !0;
  }
  function gk(a, b, c) {
    b = Mi(c, b);
    b = Pi(a, b, 1);
    Ag(a, b);
    b = Hg();
    a = Kj(a, 1);
    null !== a && ($c(a, 1, b), Mj(a, b));
  }
  function Wi(a, b) {
    if (3 === a.tag) gk(a, a, b);
    else
      for (var c = a.return; null !== c; ) {
        if (3 === c.tag) {
          gk(c, a, b);
          break;
        } else if (1 === c.tag) {
          var d = c.stateNode;
          if (
            'function' === typeof c.type.getDerivedStateFromError ||
            ('function' === typeof d.componentDidCatch &&
              (null === Ti || !Ti.has(d)))
          ) {
            a = Mi(b, a);
            var e = Si(c, a, 1);
            Ag(c, e);
            e = Hg();
            c = Kj(c, 1);
            if (null !== c) $c(c, 1, e), Mj(c, e);
            else if (
              'function' === typeof d.componentDidCatch &&
              (null === Ti || !Ti.has(d))
            )
              try {
                d.componentDidCatch(b, a);
              } catch (f) {}
            break;
          }
        }
        c = c.return;
      }
  }
  function Yj(a, b, c) {
    var d = a.pingCache;
    null !== d && d.delete(b);
    b = Hg();
    a.pingedLanes |= a.suspendedLanes & c;
    U$1 === a &&
      (W$1 & c) === c &&
      (4 === V || (3 === V && (W$1 & 62914560) === W$1 && 500 > O$1() - jj)
        ? Qj(a, 0)
        : (uj |= c));
    Mj(a, b);
  }
  function lj(a, b) {
    var c = a.stateNode;
    null !== c && c.delete(b);
    b = 0;
    0 === b &&
      ((b = a.mode),
      0 === (b & 2)
        ? (b = 1)
        : 0 === (b & 4)
        ? (b = 99 === eg() ? 1 : 2)
        : (0 === Gj && (Gj = tj),
          (b = Yc(62914560 & ~Gj)),
          0 === b && (b = 4194304)));
    c = Hg();
    a = Kj(a, b);
    null !== a && ($c(a, b, c), Mj(a, c));
  }
  var ck;
  ck = function (a, b, c) {
    var d = b.lanes;
    if (null !== a)
      if (a.memoizedProps !== b.pendingProps || N.current) ug = !0;
      else if (0 !== (c & d)) ug = 0 !== (a.flags & 16384) ? !0 : !1;
      else {
        ug = !1;
        switch (b.tag) {
          case 3:
            ri(b);
            sh();
            break;
          case 5:
            gh(b);
            break;
          case 1:
            Ff(b.type) && Jf(b);
            break;
          case 4:
            eh(b, b.stateNode.containerInfo);
            break;
          case 10:
            d = b.memoizedProps.value;
            var e = b.type._context;
            I$1(mg, e._currentValue);
            e._currentValue = d;
            break;
          case 13:
            if (null !== b.memoizedState) {
              if (0 !== (c & b.child.childLanes)) return ti(a, b, c);
              I$1(P$1, P$1.current & 1);
              b = hi(a, b, c);
              return null !== b ? b.sibling : null;
            }
            I$1(P$1, P$1.current & 1);
            break;
          case 19:
            d = 0 !== (c & b.childLanes);
            if (0 !== (a.flags & 64)) {
              if (d) return Ai(a, b, c);
              b.flags |= 64;
            }
            e = b.memoizedState;
            null !== e &&
              ((e.rendering = null), (e.tail = null), (e.lastEffect = null));
            I$1(P$1, P$1.current);
            if (d) break;
            else return null;
          case 23:
          case 24:
            return (b.lanes = 0), mi(a, b, c);
        }
        return hi(a, b, c);
      }
    else ug = !1;
    b.lanes = 0;
    switch (b.tag) {
      case 2:
        d = b.type;
        null !== a &&
          ((a.alternate = null), (b.alternate = null), (b.flags |= 2));
        a = b.pendingProps;
        e = Ef(b, M$1.current);
        tg(b, c);
        e = Ch(null, b, d, a, e, c);
        b.flags |= 1;
        if (
          'object' === typeof e &&
          null !== e &&
          'function' === typeof e.render &&
          void 0 === e.$$typeof
        ) {
          b.tag = 1;
          b.memoizedState = null;
          b.updateQueue = null;
          if (Ff(d)) {
            var f = !0;
            Jf(b);
          } else f = !1;
          b.memoizedState =
            null !== e.state && void 0 !== e.state ? e.state : null;
          xg(b);
          var g = d.getDerivedStateFromProps;
          'function' === typeof g && Gg(b, d, g, a);
          e.updater = Kg;
          b.stateNode = e;
          e._reactInternals = b;
          Og(b, d, a, c);
          b = qi(null, b, d, !0, f, c);
        } else (b.tag = 0), fi(null, b, e, c), (b = b.child);
        return b;
      case 16:
        e = b.elementType;
        a: {
          null !== a &&
            ((a.alternate = null), (b.alternate = null), (b.flags |= 2));
          a = b.pendingProps;
          f = e._init;
          e = f(e._payload);
          b.type = e;
          f = b.tag = hk(e);
          a = lg(e, a);
          switch (f) {
            case 0:
              b = li(null, b, e, a, c);
              break a;
            case 1:
              b = pi(null, b, e, a, c);
              break a;
            case 11:
              b = gi(null, b, e, a, c);
              break a;
            case 14:
              b = ii(null, b, e, lg(e.type, a), d, c);
              break a;
          }
          throw Error(y$1(306, e, ''));
        }
        return b;
      case 0:
        return (
          (d = b.type),
          (e = b.pendingProps),
          (e = b.elementType === d ? e : lg(d, e)),
          li(a, b, d, e, c)
        );
      case 1:
        return (
          (d = b.type),
          (e = b.pendingProps),
          (e = b.elementType === d ? e : lg(d, e)),
          pi(a, b, d, e, c)
        );
      case 3:
        ri(b);
        d = b.updateQueue;
        if (null === a || null === d) throw Error(y$1(282));
        d = b.pendingProps;
        e = b.memoizedState;
        e = null !== e ? e.element : null;
        yg(a, b);
        Cg(b, d, null, c);
        d = b.memoizedState.element;
        if (d === e) sh(), (b = hi(a, b, c));
        else {
          e = b.stateNode;
          if ((f = e.hydrate))
            (kh = rf(b.stateNode.containerInfo.firstChild)),
              (jh = b),
              (f = lh = !0);
          if (f) {
            a = e.mutableSourceEagerHydrationData;
            if (null != a)
              for (e = 0; e < a.length; e += 2)
                (f = a[e]),
                  (f._workInProgressVersionPrimary = a[e + 1]),
                  th.push(f);
            c = Zg(b, null, d, c);
            for (b.child = c; c; )
              (c.flags = (c.flags & -3) | 1024), (c = c.sibling);
          } else fi(a, b, d, c), sh();
          b = b.child;
        }
        return b;
      case 5:
        return (
          gh(b),
          null === a && ph(b),
          (d = b.type),
          (e = b.pendingProps),
          (f = null !== a ? a.memoizedProps : null),
          (g = e.children),
          nf(d, e) ? (g = null) : null !== f && nf(d, f) && (b.flags |= 16),
          oi(a, b),
          fi(a, b, g, c),
          b.child
        );
      case 6:
        return null === a && ph(b), null;
      case 13:
        return ti(a, b, c);
      case 4:
        return (
          eh(b, b.stateNode.containerInfo),
          (d = b.pendingProps),
          null === a ? (b.child = Yg(b, null, d, c)) : fi(a, b, d, c),
          b.child
        );
      case 11:
        return (
          (d = b.type),
          (e = b.pendingProps),
          (e = b.elementType === d ? e : lg(d, e)),
          gi(a, b, d, e, c)
        );
      case 7:
        return fi(a, b, b.pendingProps, c), b.child;
      case 8:
        return fi(a, b, b.pendingProps.children, c), b.child;
      case 12:
        return fi(a, b, b.pendingProps.children, c), b.child;
      case 10:
        a: {
          d = b.type._context;
          e = b.pendingProps;
          g = b.memoizedProps;
          f = e.value;
          var h = b.type._context;
          I$1(mg, h._currentValue);
          h._currentValue = f;
          if (null !== g)
            if (
              ((h = g.value),
              (f = He(h, f)
                ? 0
                : ('function' === typeof d._calculateChangedBits
                    ? d._calculateChangedBits(h, f)
                    : 1073741823) | 0),
              0 === f)
            ) {
              if (g.children === e.children && !N.current) {
                b = hi(a, b, c);
                break a;
              }
            } else
              for (h = b.child, null !== h && (h.return = b); null !== h; ) {
                var k = h.dependencies;
                if (null !== k) {
                  g = h.child;
                  for (var l = k.firstContext; null !== l; ) {
                    if (l.context === d && 0 !== (l.observedBits & f)) {
                      1 === h.tag &&
                        ((l = zg(-1, c & -c)), (l.tag = 2), Ag(h, l));
                      h.lanes |= c;
                      l = h.alternate;
                      null !== l && (l.lanes |= c);
                      sg(h.return, c);
                      k.lanes |= c;
                      break;
                    }
                    l = l.next;
                  }
                } else
                  g =
                    10 === h.tag
                      ? h.type === b.type
                        ? null
                        : h.child
                      : h.child;
                if (null !== g) g.return = h;
                else
                  for (g = h; null !== g; ) {
                    if (g === b) {
                      g = null;
                      break;
                    }
                    h = g.sibling;
                    if (null !== h) {
                      h.return = g.return;
                      g = h;
                      break;
                    }
                    g = g.return;
                  }
                h = g;
              }
          fi(a, b, e.children, c);
          b = b.child;
        }
        return b;
      case 9:
        return (
          (e = b.type),
          (f = b.pendingProps),
          (d = f.children),
          tg(b, c),
          (e = vg(e, f.unstable_observedBits)),
          (d = d(e)),
          (b.flags |= 1),
          fi(a, b, d, c),
          b.child
        );
      case 14:
        return (
          (e = b.type),
          (f = lg(e, b.pendingProps)),
          (f = lg(e.type, f)),
          ii(a, b, e, f, d, c)
        );
      case 15:
        return ki(a, b, b.type, b.pendingProps, d, c);
      case 17:
        return (
          (d = b.type),
          (e = b.pendingProps),
          (e = b.elementType === d ? e : lg(d, e)),
          null !== a &&
            ((a.alternate = null), (b.alternate = null), (b.flags |= 2)),
          (b.tag = 1),
          Ff(d) ? ((a = !0), Jf(b)) : (a = !1),
          tg(b, c),
          Mg(b, d, e),
          Og(b, d, e, c),
          qi(null, b, d, !0, a, c)
        );
      case 19:
        return Ai(a, b, c);
      case 23:
        return mi(a, b, c);
      case 24:
        return mi(a, b, c);
    }
    throw Error(y$1(156, b.tag));
  };
  function ik(a, b, c, d) {
    this.tag = a;
    this.key = c;
    this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null;
    this.index = 0;
    this.ref = null;
    this.pendingProps = b;
    this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null;
    this.mode = d;
    this.flags = 0;
    this.lastEffect = this.firstEffect = this.nextEffect = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function nh(a, b, c, d) {
    return new ik(a, b, c, d);
  }
  function ji(a) {
    a = a.prototype;
    return !(!a || !a.isReactComponent);
  }
  function hk(a) {
    if ('function' === typeof a) return ji(a) ? 1 : 0;
    if (void 0 !== a && null !== a) {
      a = a.$$typeof;
      if (a === Aa) return 11;
      if (a === Da) return 14;
    }
    return 2;
  }
  function Tg(a, b) {
    var c = a.alternate;
    null === c
      ? ((c = nh(a.tag, b, a.key, a.mode)),
        (c.elementType = a.elementType),
        (c.type = a.type),
        (c.stateNode = a.stateNode),
        (c.alternate = a),
        (a.alternate = c))
      : ((c.pendingProps = b),
        (c.type = a.type),
        (c.flags = 0),
        (c.nextEffect = null),
        (c.firstEffect = null),
        (c.lastEffect = null));
    c.childLanes = a.childLanes;
    c.lanes = a.lanes;
    c.child = a.child;
    c.memoizedProps = a.memoizedProps;
    c.memoizedState = a.memoizedState;
    c.updateQueue = a.updateQueue;
    b = a.dependencies;
    c.dependencies =
      null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
    c.sibling = a.sibling;
    c.index = a.index;
    c.ref = a.ref;
    return c;
  }
  function Vg(a, b, c, d, e, f) {
    var g = 2;
    d = a;
    if ('function' === typeof a) ji(a) && (g = 1);
    else if ('string' === typeof a) g = 5;
    else
      a: switch (a) {
        case ua:
          return Xg(c.children, e, f, b);
        case Ha:
          g = 8;
          e |= 16;
          break;
        case wa:
          g = 8;
          e |= 1;
          break;
        case xa:
          return (
            (a = nh(12, c, b, e | 8)),
            (a.elementType = xa),
            (a.type = xa),
            (a.lanes = f),
            a
          );
        case Ba:
          return (
            (a = nh(13, c, b, e)),
            (a.type = Ba),
            (a.elementType = Ba),
            (a.lanes = f),
            a
          );
        case Ca:
          return (a = nh(19, c, b, e)), (a.elementType = Ca), (a.lanes = f), a;
        case Ia:
          return vi(c, e, f, b);
        case Ja:
          return (a = nh(24, c, b, e)), (a.elementType = Ja), (a.lanes = f), a;
        default:
          if ('object' === typeof a && null !== a)
            switch (a.$$typeof) {
              case ya:
                g = 10;
                break a;
              case za:
                g = 9;
                break a;
              case Aa:
                g = 11;
                break a;
              case Da:
                g = 14;
                break a;
              case Ea:
                g = 16;
                d = null;
                break a;
              case Fa:
                g = 22;
                break a;
            }
          throw Error(y$1(130, null == a ? a : typeof a, ''));
      }
    b = nh(g, c, b, e);
    b.elementType = a;
    b.type = d;
    b.lanes = f;
    return b;
  }
  function Xg(a, b, c, d) {
    a = nh(7, a, d, b);
    a.lanes = c;
    return a;
  }
  function vi(a, b, c, d) {
    a = nh(23, a, d, b);
    a.elementType = Ia;
    a.lanes = c;
    return a;
  }
  function Ug(a, b, c) {
    a = nh(6, a, null, b);
    a.lanes = c;
    return a;
  }
  function Wg(a, b, c) {
    b = nh(4, null !== a.children ? a.children : [], a.key, b);
    b.lanes = c;
    b.stateNode = {
      containerInfo: a.containerInfo,
      pendingChildren: null,
      implementation: a.implementation,
    };
    return b;
  }
  function jk(a, b, c) {
    this.tag = b;
    this.containerInfo = a;
    this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null;
    this.timeoutHandle = -1;
    this.pendingContext = this.context = null;
    this.hydrate = c;
    this.callbackNode = null;
    this.callbackPriority = 0;
    this.eventTimes = Zc(0);
    this.expirationTimes = Zc(-1);
    this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0;
    this.entanglements = Zc(0);
    this.mutableSourceEagerHydrationData = null;
  }
  function kk(a, b, c) {
    var d =
      3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
    return {
      $$typeof: ta,
      key: null == d ? null : '' + d,
      children: a,
      containerInfo: b,
      implementation: c,
    };
  }
  function lk(a, b, c, d) {
    var e = b.current,
      f = Hg(),
      g = Ig(e);
    a: if (c) {
      c = c._reactInternals;
      b: {
        if (Zb(c) !== c || 1 !== c.tag) throw Error(y$1(170));
        var h = c;
        do {
          switch (h.tag) {
            case 3:
              h = h.stateNode.context;
              break b;
            case 1:
              if (Ff(h.type)) {
                h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h = h.return;
        } while (null !== h);
        throw Error(y$1(171));
      }
      if (1 === c.tag) {
        var k = c.type;
        if (Ff(k)) {
          c = If(c, k, h);
          break a;
        }
      }
      c = h;
    } else c = Cf;
    null === b.context ? (b.context = c) : (b.pendingContext = c);
    b = zg(f, g);
    b.payload = { element: a };
    d = void 0 === d ? null : d;
    null !== d && (b.callback = d);
    Ag(e, b);
    Jg(e, g, f);
    return g;
  }
  function mk(a) {
    a = a.current;
    if (!a.child) return null;
    switch (a.child.tag) {
      case 5:
        return a.child.stateNode;
      default:
        return a.child.stateNode;
    }
  }
  function nk(a, b) {
    a = a.memoizedState;
    if (null !== a && null !== a.dehydrated) {
      var c = a.retryLane;
      a.retryLane = 0 !== c && c < b ? c : b;
    }
  }
  function ok(a, b) {
    nk(a, b);
    (a = a.alternate) && nk(a, b);
  }
  function pk() {
    return null;
  }
  function qk(a, b, c) {
    var d =
      (null != c &&
        null != c.hydrationOptions &&
        c.hydrationOptions.mutableSources) ||
      null;
    c = new jk(a, b, null != c && !0 === c.hydrate);
    b = nh(3, null, null, 2 === b ? 7 : 1 === b ? 3 : 0);
    c.current = b;
    b.stateNode = c;
    xg(b);
    a[ff] = c.current;
    cf(8 === a.nodeType ? a.parentNode : a);
    if (d)
      for (a = 0; a < d.length; a++) {
        b = d[a];
        var e = b._getVersion;
        e = e(b._source);
        null == c.mutableSourceEagerHydrationData
          ? (c.mutableSourceEagerHydrationData = [b, e])
          : c.mutableSourceEagerHydrationData.push(b, e);
      }
    this._internalRoot = c;
  }
  qk.prototype.render = function (a) {
    lk(a, this._internalRoot, null, null);
  };
  qk.prototype.unmount = function () {
    var a = this._internalRoot,
      b = a.containerInfo;
    lk(null, a, null, function () {
      b[ff] = null;
    });
  };
  function rk(a) {
    return !(
      !a ||
      (1 !== a.nodeType &&
        9 !== a.nodeType &&
        11 !== a.nodeType &&
        (8 !== a.nodeType || ' react-mount-point-unstable ' !== a.nodeValue))
    );
  }
  function sk(a, b) {
    b ||
      ((b = a ? (9 === a.nodeType ? a.documentElement : a.firstChild) : null),
      (b = !(!b || 1 !== b.nodeType || !b.hasAttribute('data-reactroot'))));
    if (!b) for (var c; (c = a.lastChild); ) a.removeChild(c);
    return new qk(a, 0, b ? { hydrate: !0 } : void 0);
  }
  function tk(a, b, c, d, e) {
    var f = c._reactRootContainer;
    if (f) {
      var g = f._internalRoot;
      if ('function' === typeof e) {
        var h = e;
        e = function () {
          var a = mk(g);
          h.call(a);
        };
      }
      lk(b, g, a, e);
    } else {
      f = c._reactRootContainer = sk(c, d);
      g = f._internalRoot;
      if ('function' === typeof e) {
        var k = e;
        e = function () {
          var a = mk(g);
          k.call(a);
        };
      }
      Xj(function () {
        lk(b, g, a, e);
      });
    }
    return mk(g);
  }
  ec = function (a) {
    if (13 === a.tag) {
      var b = Hg();
      Jg(a, 4, b);
      ok(a, 4);
    }
  };
  fc = function (a) {
    if (13 === a.tag) {
      var b = Hg();
      Jg(a, 67108864, b);
      ok(a, 67108864);
    }
  };
  gc = function (a) {
    if (13 === a.tag) {
      var b = Hg(),
        c = Ig(a);
      Jg(a, c, b);
      ok(a, c);
    }
  };
  hc = function (a, b) {
    return b();
  };
  yb = function (a, b, c) {
    switch (b) {
      case 'input':
        ab(a, c);
        b = c.name;
        if ('radio' === c.type && null != b) {
          for (c = a; c.parentNode; ) c = c.parentNode;
          c = c.querySelectorAll(
            'input[name=' + JSON.stringify('' + b) + '][type="radio"]',
          );
          for (b = 0; b < c.length; b++) {
            var d = c[b];
            if (d !== a && d.form === a.form) {
              var e = Db(d);
              if (!e) throw Error(y$1(90));
              Wa(d);
              ab(d, e);
            }
          }
        }
        break;
      case 'textarea':
        ib(a, c);
        break;
      case 'select':
        (b = c.value), null != b && fb(a, !!c.multiple, b, !1);
    }
  };
  Gb = Wj;
  Hb = function (a, b, c, d, e) {
    var f = X$1;
    X$1 |= 4;
    try {
      return gg(98, a.bind(null, b, c, d, e));
    } finally {
      (X$1 = f), 0 === X$1 && (wj(), ig());
    }
  };
  Ib = function () {
    0 === (X$1 & 49) && (Vj(), Oj());
  };
  Jb = function (a, b) {
    var c = X$1;
    X$1 |= 2;
    try {
      return a(b);
    } finally {
      (X$1 = c), 0 === X$1 && (wj(), ig());
    }
  };
  function uk(a, b) {
    var c =
      2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
    if (!rk(b)) throw Error(y$1(200));
    return kk(a, b, null, c);
  }
  var vk = { Events: [Cb, ue, Db, Eb, Fb, Oj, { current: !1 }] },
    wk = {
      findFiberByHostInstance: wc,
      bundleType: 0,
      version: '17.0.2',
      rendererPackageName: 'react-dom',
    };
  var xk = {
    bundleType: wk.bundleType,
    version: wk.version,
    rendererPackageName: wk.rendererPackageName,
    rendererConfig: wk.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ra.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (a) {
      a = cc(a);
      return null === a ? null : a.stateNode;
    },
    findFiberByHostInstance: wk.findFiberByHostInstance || pk,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
  };
  if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
    var yk = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!yk.isDisabled && yk.supportsFiber)
      try {
        (Lf = yk.inject(xk)), (Mf = yk);
      } catch (a) {}
  }
  reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
    vk;
  reactDom_production_min.createPortal = uk;
  reactDom_production_min.findDOMNode = function (a) {
    if (null == a) return null;
    if (1 === a.nodeType) return a;
    var b = a._reactInternals;
    if (void 0 === b) {
      if ('function' === typeof a.render) throw Error(y$1(188));
      throw Error(y$1(268, Object.keys(a)));
    }
    a = cc(b);
    a = null === a ? null : a.stateNode;
    return a;
  };
  reactDom_production_min.flushSync = function (a, b) {
    var c = X$1;
    if (0 !== (c & 48)) return a(b);
    X$1 |= 1;
    try {
      if (a) return gg(99, a.bind(null, b));
    } finally {
      (X$1 = c), ig();
    }
  };
  reactDom_production_min.hydrate = function (a, b, c) {
    if (!rk(b)) throw Error(y$1(200));
    return tk(null, a, b, !0, c);
  };
  reactDom_production_min.render = function (a, b, c) {
    if (!rk(b)) throw Error(y$1(200));
    return tk(null, a, b, !1, c);
  };
  reactDom_production_min.unmountComponentAtNode = function (a) {
    if (!rk(a)) throw Error(y$1(40));
    return a._reactRootContainer
      ? (Xj(function () {
          tk(null, null, a, !1, function () {
            a._reactRootContainer = null;
            a[ff] = null;
          });
        }),
        !0)
      : !1;
  };
  reactDom_production_min.unstable_batchedUpdates = Wj;
  reactDom_production_min.unstable_createPortal = function (a, b) {
    return uk(
      a,
      b,
      2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
    );
  };
  reactDom_production_min.unstable_renderSubtreeIntoContainer = function (
    a,
    b,
    c,
    d,
  ) {
    if (!rk(c)) throw Error(y$1(200));
    if (null == a || void 0 === a._reactInternals) throw Error(y$1(38));
    return tk(a, b, c, !1, d);
  };
  reactDom_production_min.version = '17.0.2';

  function checkDCE() {
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
    ) {
      return;
    }
    try {
      // Verify that the code above has been dead code eliminated (DCE'd).
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      // DevTools shouldn't crash React, no matter what.
      // We should still report in case we break this code.
      console.error(err);
    }
  }

  {
    // DCE check should happen before ReactDOM bundle executes so that
    // DevTools can report bad minification during injection.
    checkDCE();
    reactDom.exports = reactDom_production_min;
  }

  var ReactDOM = reactDom.exports;

  function makeStyles(stylesOrCreator) {
    var options =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return makeStyles$1(
      stylesOrCreator,
      _extends$2(
        {
          defaultTheme: defaultTheme$1,
        },
        options,
      ),
    );
  }

  var styled = function styled(Component) {
    var componentCreator = styled$2(Component);
    return function (style, options) {
      return componentCreator(
        style,
        _extends$2(
          {
            defaultTheme: defaultTheme$1,
          },
          options,
        ),
      );
    };
  };

  var styled$1 = styled;

  function useTheme() {
    var theme = useTheme$1() || defaultTheme$1;

    return theme;
  }

  // It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
  //
  // A strict capitalization should uppercase the first letter of each word a the sentence.
  // We only handle the first word.
  function capitalize(string) {
    if (typeof string !== 'string') {
      throw new Error(utils$1.formatMuiErrorMessage(7));
    }

    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  /**
   * Safe chained function
   *
   * Will only create a new function if needed,
   * otherwise will pass back existing functions or null.
   *
   * @param {function} functions to chain
   * @returns {function|null}
   */
  function createChainedFunction() {
    for (
      var _len = arguments.length, funcs = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      funcs[_key] = arguments[_key];
    }

    return funcs.reduce(
      function (acc, func) {
        if (func == null) {
          return acc;
        }

        return function chainedFunction() {
          for (
            var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
            _key2 < _len2;
            _key2++
          ) {
            args[_key2] = arguments[_key2];
          }

          acc.apply(this, args);
          func.apply(this, args);
        };
      },
      function () {},
    );
  }

  var styles$H = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        userSelect: 'none',
        width: '1em',
        height: '1em',
        display: 'inline-block',
        fill: 'currentColor',
        flexShrink: 0,
        fontSize: theme.typography.pxToRem(24),
        transition: theme.transitions.create('fill', {
          duration: theme.transitions.duration.shorter,
        }),
      },

      /* Styles applied to the root element if `color="primary"`. */
      colorPrimary: {
        color: theme.palette.primary.main,
      },

      /* Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {
        color: theme.palette.secondary.main,
      },

      /* Styles applied to the root element if `color="action"`. */
      colorAction: {
        color: theme.palette.action.active,
      },

      /* Styles applied to the root element if `color="error"`. */
      colorError: {
        color: theme.palette.error.main,
      },

      /* Styles applied to the root element if `color="disabled"`. */
      colorDisabled: {
        color: theme.palette.action.disabled,
      },

      /* Styles applied to the root element if `fontSize="inherit"`. */
      fontSizeInherit: {
        fontSize: 'inherit',
      },

      /* Styles applied to the root element if `fontSize="small"`. */
      fontSizeSmall: {
        fontSize: theme.typography.pxToRem(20),
      },

      /* Styles applied to the root element if `fontSize="large"`. */
      fontSizeLarge: {
        fontSize: theme.typography.pxToRem(35),
      },
    };
  };
  var SvgIcon = /*#__PURE__*/ react.exports.forwardRef(function SvgIcon(
    props,
    ref,
  ) {
    var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'inherit' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'svg' : _props$component,
      _props$fontSize = props.fontSize,
      fontSize = _props$fontSize === void 0 ? 'medium' : _props$fontSize,
      htmlColor = props.htmlColor,
      titleAccess = props.titleAccess,
      _props$viewBox = props.viewBox,
      viewBox = _props$viewBox === void 0 ? '0 0 24 24' : _props$viewBox,
      other = _objectWithoutProperties(props, [
        'children',
        'classes',
        'className',
        'color',
        'component',
        'fontSize',
        'htmlColor',
        'titleAccess',
        'viewBox',
      ]);

    return /*#__PURE__*/ react.exports.createElement(
      Component,
      _extends$2(
        {
          className: clsx(
            classes.root,
            className,
            color !== 'inherit' && classes['color'.concat(capitalize(color))],
            fontSize !== 'default' &&
              fontSize !== 'medium' &&
              classes['fontSize'.concat(capitalize(fontSize))],
          ),
          focusable: 'false',
          viewBox: viewBox,
          color: htmlColor,
          'aria-hidden': titleAccess ? undefined : true,
          role: titleAccess ? 'img' : undefined,
          ref: ref,
        },
        other,
      ),
      children,
      titleAccess
        ? /*#__PURE__*/ react.exports.createElement('title', null, titleAccess)
        : null,
    );
  });
  SvgIcon.muiName = 'SvgIcon';
  var SvgIcon$1 = withStyles(styles$H, {
    name: 'MuiSvgIcon',
  })(SvgIcon);

  /**
   * Private module reserved for @material-ui/x packages.
   */

  function createSvgIcon$1(path, displayName) {
    var Component = function Component(props, ref) {
      return /*#__PURE__*/ React$3.createElement(
        SvgIcon$1,
        _extends$2(
          {
            ref: ref,
          },
          props,
        ),
        path,
      );
    };

    Component.muiName = SvgIcon$1.muiName;
    return /*#__PURE__*/ React$3.memo(
      /*#__PURE__*/ React$3.forwardRef(Component),
    );
  }

  // Corresponds to 10 frames at 60 Hz.
  // A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
  function debounce$1(func) {
    var wait =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 166;
    var timeout;

    function debounced() {
      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key];
      }

      // eslint-disable-next-line consistent-this
      var that = this;

      var later = function later() {
        func.apply(that, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    }

    debounced.clear = function () {
      clearTimeout(timeout);
    };

    return debounced;
  }

  function deprecatedPropType(validator, reason) {
    {
      return function () {
        return null;
      };
    }
  }

  function isMuiElement(element, muiNames) {
    return (
      /*#__PURE__*/ react.exports.isValidElement(element) &&
      muiNames.indexOf(element.type.muiName) !== -1
    );
  }

  function ownerDocument(node) {
    return (node && node.ownerDocument) || document;
  }

  function ownerWindow(node) {
    var doc = ownerDocument(node);
    return doc.defaultView || window;
  }

  function requirePropFactory(componentNameInError) {
    {
      return function () {
        return null;
      };
    }
  }

  // TODO v5: consider to make it private
  function setRef(ref, value) {
    if (typeof ref === 'function') {
      ref(value);
    } else if (ref) {
      ref.current = value;
    }
  }

  function unsupportedProp(
    props,
    propName,
    componentName,
    location,
    propFullName,
  ) {
    {
      return null;
    }
  }

  /* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */
  function useControlled(_ref) {
    var controlled = _ref.controlled,
      defaultProp = _ref.default;
    _ref.name;
    _ref.state;

    var _React$useRef = react.exports.useRef(controlled !== undefined),
      isControlled = _React$useRef.current;

    var _React$useState = react.exports.useState(defaultProp),
      valueState = _React$useState[0],
      setValue = _React$useState[1];

    var value = isControlled ? controlled : valueState;

    var setValueIfUncontrolled = react.exports.useCallback(function (newValue) {
      if (!isControlled) {
        setValue(newValue);
      }
    }, []);
    return [value, setValueIfUncontrolled];
  }

  var useEnhancedEffect$6 =
    typeof window !== 'undefined'
      ? react.exports.useLayoutEffect
      : react.exports.useEffect;
  /**
   * https://github.com/facebook/react/issues/14099#issuecomment-440013892
   *
   * @param {function} fn
   */

  function useEventCallback(fn) {
    var ref = react.exports.useRef(fn);
    useEnhancedEffect$6(function () {
      ref.current = fn;
    });
    return react.exports.useCallback(function () {
      return ref.current.apply(void 0, arguments);
    }, []);
  }

  function useForkRef(refA, refB) {
    /**
     * This will create a new function if the ref props change and are defined.
     * This means react will call the old forkRef with `null` and the new forkRef
     * with the ref. Cleanup naturally emerges from this behavior
     */
    return react.exports.useMemo(
      function () {
        if (refA == null && refB == null) {
          return null;
        }

        return function (refValue) {
          setRef(refA, refValue);
          setRef(refB, refValue);
        };
      },
      [refA, refB],
    );
  }

  /**
   * Private module reserved for @material-ui/x packages.
   */

  function useId(idOverride) {
    var _React$useState = react.exports.useState(idOverride),
      defaultId = _React$useState[0],
      setDefaultId = _React$useState[1];

    var id = idOverride || defaultId;
    react.exports.useEffect(
      function () {
        if (defaultId == null) {
          // Fallback to this default id when possible.
          // Use the random value for client-side rendering only.
          // We can't use it server-side.
          setDefaultId('mui-'.concat(Math.round(Math.random() * 1e5)));
        }
      },
      [defaultId],
    );
    return id;
  }

  // based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesWhitelist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true,
  };
  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} node
   * @return {boolean}
   */

  function focusTriggersKeyboardModality(node) {
    var type = node.type,
      tagName = node.tagName;

    if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !node.readOnly) {
      return true;
    }

    if (node.isContentEditable) {
      return true;
    }

    return false;
  }
  /**
   * Keep track of our keyboard modality state with `hadKeyboardEvent`.
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * @param {KeyboardEvent} event
   */

  function handleKeyDown(event) {
    if (event.metaKey || event.altKey || event.ctrlKey) {
      return;
    }

    hadKeyboardEvent = true;
  }
  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   */

  function handlePointerDown() {
    hadKeyboardEvent = false;
  }

  function handleVisibilityChange() {
    if (this.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }
    }
  }

  function prepare(doc) {
    doc.addEventListener('keydown', handleKeyDown, true);
    doc.addEventListener('mousedown', handlePointerDown, true);
    doc.addEventListener('pointerdown', handlePointerDown, true);
    doc.addEventListener('touchstart', handlePointerDown, true);
    doc.addEventListener('visibilitychange', handleVisibilityChange, true);
  }

  function isFocusVisible(event) {
    var target = event.target;

    try {
      return target.matches(':focus-visible');
    } catch (error) {} // browsers not implementing :focus-visible will throw a SyntaxError
    // we use our own heuristic for those browsers
    // rethrow might be better if it's not the expected error but do we really
    // want to crash if focus-visible malfunctioned?
    // no need for validFocusTarget check. the user does that by attaching it to
    // focusable events only

    return hadKeyboardEvent || focusTriggersKeyboardModality(target);
  }
  /**
   * Should be called if a blur event is fired on a focus-visible element
   */

  function handleBlurVisible() {
    // To detect a tab/window switch, we look for a blur event followed
    // rapidly by a visibility change.
    // If we don't see a visibility change within 100ms, it's probably a
    // regular focus change.
    hadFocusVisibleRecently = true;
    window.clearTimeout(hadFocusVisibleRecentlyTimeout);
    hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
      hadFocusVisibleRecently = false;
    }, 100);
  }

  function useIsFocusVisible() {
    var ref = react.exports.useCallback(function (instance) {
      var node = reactDom.exports.findDOMNode(instance);

      if (node != null) {
        prepare(node.ownerDocument);
      }
    }, []);

    return {
      isFocusVisible: isFocusVisible,
      onBlurVisible: handleBlurVisible,
      ref: ref,
    };
  }

  var utils = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    capitalize: capitalize,
    createChainedFunction: createChainedFunction,
    createSvgIcon: createSvgIcon$1,
    debounce: debounce$1,
    deprecatedPropType: deprecatedPropType,
    isMuiElement: isMuiElement,
    ownerDocument: ownerDocument,
    ownerWindow: ownerWindow,
    requirePropFactory: requirePropFactory,
    setRef: setRef,
    unsupportedProp: unsupportedProp,
    useControlled: useControlled,
    useEventCallback: useEventCallback,
    useForkRef: useForkRef,
    unstable_useId: useId,
    useIsFocusVisible: useIsFocusVisible,
  });

  var config = {
    disabled: false,
  };

  var TransitionGroupContext = React$3.createContext(null);

  var UNMOUNTED = 'unmounted';
  var EXITED = 'exited';
  var ENTERING = 'entering';
  var ENTERED = 'entered';
  var EXITING = 'exiting';
  /**
   * The Transition component lets you describe a transition from one component
   * state to another _over time_ with a simple declarative API. Most commonly
   * it's used to animate the mounting and unmounting of a component, but can also
   * be used to describe in-place transition states as well.
   *
   * ---
   *
   * **Note**: `Transition` is a platform-agnostic base component. If you're using
   * transitions in CSS, you'll probably want to use
   * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
   * instead. It inherits all the features of `Transition`, but contains
   * additional features necessary to play nice with CSS transitions (hence the
   * name of the component).
   *
   * ---
   *
   * By default the `Transition` component does not alter the behavior of the
   * component it renders, it only tracks "enter" and "exit" states for the
   * components. It's up to you to give meaning and effect to those states. For
   * example we can add styles to a component when it enters or exits:
   *
   * ```jsx
   * import { Transition } from 'react-transition-group';
   *
   * const duration = 300;
   *
   * const defaultStyle = {
   *   transition: `opacity ${duration}ms ease-in-out`,
   *   opacity: 0,
   * }
   *
   * const transitionStyles = {
   *   entering: { opacity: 1 },
   *   entered:  { opacity: 1 },
   *   exiting:  { opacity: 0 },
   *   exited:  { opacity: 0 },
   * };
   *
   * const Fade = ({ in: inProp }) => (
   *   <Transition in={inProp} timeout={duration}>
   *     {state => (
   *       <div style={{
   *         ...defaultStyle,
   *         ...transitionStyles[state]
   *       }}>
   *         I'm a fade Transition!
   *       </div>
   *     )}
   *   </Transition>
   * );
   * ```
   *
   * There are 4 main states a Transition can be in:
   *  - `'entering'`
   *  - `'entered'`
   *  - `'exiting'`
   *  - `'exited'`
   *
   * Transition state is toggled via the `in` prop. When `true` the component
   * begins the "Enter" stage. During this stage, the component will shift from
   * its current transition state, to `'entering'` for the duration of the
   * transition and then to the `'entered'` stage once it's complete. Let's take
   * the following example (we'll use the
   * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
   *
   * ```jsx
   * function App() {
   *   const [inProp, setInProp] = useState(false);
   *   return (
   *     <div>
   *       <Transition in={inProp} timeout={500}>
   *         {state => (
   *           // ...
   *         )}
   *       </Transition>
   *       <button onClick={() => setInProp(true)}>
   *         Click to Enter
   *       </button>
   *     </div>
   *   );
   * }
   * ```
   *
   * When the button is clicked the component will shift to the `'entering'` state
   * and stay there for 500ms (the value of `timeout`) before it finally switches
   * to `'entered'`.
   *
   * When `in` is `false` the same thing happens except the state moves from
   * `'exiting'` to `'exited'`.
   */

  var Transition = /*#__PURE__*/ (function (_React$Component) {
    _inheritsLoose(Transition, _React$Component);

    function Transition(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;
      var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

      var appear =
        parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
      var initialStatus;
      _this.appearStatus = null;

      if (props.in) {
        if (appear) {
          initialStatus = EXITED;
          _this.appearStatus = ENTERING;
        } else {
          initialStatus = ENTERED;
        }
      } else {
        if (props.unmountOnExit || props.mountOnEnter) {
          initialStatus = UNMOUNTED;
        } else {
          initialStatus = EXITED;
        }
      }

      _this.state = {
        status: initialStatus,
      };
      _this.nextCallback = null;
      return _this;
    }

    Transition.getDerivedStateFromProps = function getDerivedStateFromProps(
      _ref,
      prevState,
    ) {
      var nextIn = _ref.in;

      if (nextIn && prevState.status === UNMOUNTED) {
        return {
          status: EXITED,
        };
      }

      return null;
    }; // getSnapshotBeforeUpdate(prevProps) {
    //   let nextStatus = null
    //   if (prevProps !== this.props) {
    //     const { status } = this.state
    //     if (this.props.in) {
    //       if (status !== ENTERING && status !== ENTERED) {
    //         nextStatus = ENTERING
    //       }
    //     } else {
    //       if (status === ENTERING || status === ENTERED) {
    //         nextStatus = EXITING
    //       }
    //     }
    //   }
    //   return { nextStatus }
    // }

    var _proto = Transition.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.updateStatus(true, this.appearStatus);
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var nextStatus = null;

      if (prevProps !== this.props) {
        var status = this.state.status;

        if (this.props.in) {
          if (status !== ENTERING && status !== ENTERED) {
            nextStatus = ENTERING;
          }
        } else {
          if (status === ENTERING || status === ENTERED) {
            nextStatus = EXITING;
          }
        }
      }

      this.updateStatus(false, nextStatus);
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.cancelNextCallback();
    };

    _proto.getTimeouts = function getTimeouts() {
      var timeout = this.props.timeout;
      var exit, enter, appear;
      exit = enter = appear = timeout;

      if (timeout != null && typeof timeout !== 'number') {
        exit = timeout.exit;
        enter = timeout.enter; // TODO: remove fallback for next major

        appear = timeout.appear !== undefined ? timeout.appear : enter;
      }

      return {
        exit: exit,
        enter: enter,
        appear: appear,
      };
    };

    _proto.updateStatus = function updateStatus(mounting, nextStatus) {
      if (mounting === void 0) {
        mounting = false;
      }

      if (nextStatus !== null) {
        // nextStatus will always be ENTERING or EXITING.
        this.cancelNextCallback();

        if (nextStatus === ENTERING) {
          this.performEnter(mounting);
        } else {
          this.performExit();
        }
      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
        this.setState({
          status: UNMOUNTED,
        });
      }
    };

    _proto.performEnter = function performEnter(mounting) {
      var _this2 = this;

      var enter = this.props.enter;
      var appearing = this.context ? this.context.isMounting : mounting;

      var _ref2 = this.props.nodeRef
          ? [appearing]
          : [ReactDOM.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

      var timeouts = this.getTimeouts();
      var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
      // if we are mounting and running this it means appear _must_ be set

      if ((!mounting && !enter) || config.disabled) {
        this.safeSetState(
          {
            status: ENTERED,
          },
          function () {
            _this2.props.onEntered(maybeNode);
          },
        );
        return;
      }

      this.props.onEnter(maybeNode, maybeAppearing);
      this.safeSetState(
        {
          status: ENTERING,
        },
        function () {
          _this2.props.onEntering(maybeNode, maybeAppearing);

          _this2.onTransitionEnd(enterTimeout, function () {
            _this2.safeSetState(
              {
                status: ENTERED,
              },
              function () {
                _this2.props.onEntered(maybeNode, maybeAppearing);
              },
            );
          });
        },
      );
    };

    _proto.performExit = function performExit() {
      var _this3 = this;

      var exit = this.props.exit;
      var timeouts = this.getTimeouts();
      var maybeNode = this.props.nodeRef
        ? undefined
        : ReactDOM.findDOMNode(this); // no exit animation skip right to EXITED

      if (!exit || config.disabled) {
        this.safeSetState(
          {
            status: EXITED,
          },
          function () {
            _this3.props.onExited(maybeNode);
          },
        );
        return;
      }

      this.props.onExit(maybeNode);
      this.safeSetState(
        {
          status: EXITING,
        },
        function () {
          _this3.props.onExiting(maybeNode);

          _this3.onTransitionEnd(timeouts.exit, function () {
            _this3.safeSetState(
              {
                status: EXITED,
              },
              function () {
                _this3.props.onExited(maybeNode);
              },
            );
          });
        },
      );
    };

    _proto.cancelNextCallback = function cancelNextCallback() {
      if (this.nextCallback !== null) {
        this.nextCallback.cancel();
        this.nextCallback = null;
      }
    };

    _proto.safeSetState = function safeSetState(nextState, callback) {
      // This shouldn't be necessary, but there are weird race conditions with
      // setState callbacks and unmounting in testing, so always make sure that
      // we can cancel any pending setState callbacks after we unmount.
      callback = this.setNextCallback(callback);
      this.setState(nextState, callback);
    };

    _proto.setNextCallback = function setNextCallback(callback) {
      var _this4 = this;

      var active = true;

      this.nextCallback = function (event) {
        if (active) {
          active = false;
          _this4.nextCallback = null;
          callback(event);
        }
      };

      this.nextCallback.cancel = function () {
        active = false;
      };

      return this.nextCallback;
    };

    _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
      this.setNextCallback(handler);
      var node = this.props.nodeRef
        ? this.props.nodeRef.current
        : ReactDOM.findDOMNode(this);
      var doesNotHaveTimeoutOrListener =
        timeout == null && !this.props.addEndListener;

      if (!node || doesNotHaveTimeoutOrListener) {
        setTimeout(this.nextCallback, 0);
        return;
      }

      if (this.props.addEndListener) {
        var _ref3 = this.props.nodeRef
            ? [this.nextCallback]
            : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

        this.props.addEndListener(maybeNode, maybeNextCallback);
      }

      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    };

    _proto.render = function render() {
      var status = this.state.status;

      if (status === UNMOUNTED) {
        return null;
      }

      var _this$props = this.props,
        children = _this$props.children;
      _this$props.in;
      _this$props.mountOnEnter;
      _this$props.unmountOnExit;
      _this$props.appear;
      _this$props.enter;
      _this$props.exit;
      _this$props.timeout;
      _this$props.addEndListener;
      _this$props.onEnter;
      _this$props.onEntering;
      _this$props.onEntered;
      _this$props.onExit;
      _this$props.onExiting;
      _this$props.onExited;
      _this$props.nodeRef;
      var childProps = _objectWithoutPropertiesLoose(_this$props, [
        'children',
        'in',
        'mountOnEnter',
        'unmountOnExit',
        'appear',
        'enter',
        'exit',
        'timeout',
        'addEndListener',
        'onEnter',
        'onEntering',
        'onEntered',
        'onExit',
        'onExiting',
        'onExited',
        'nodeRef',
      ]);

      return (
        /*#__PURE__*/
        // allows for nested Transitions
        React$3.createElement(
          TransitionGroupContext.Provider,
          {
            value: null,
          },
          typeof children === 'function'
            ? children(status, childProps)
            : React$3.cloneElement(React$3.Children.only(children), childProps),
        )
      );
    };

    return Transition;
  })(React$3.Component);

  Transition.contextType = TransitionGroupContext;
  Transition.propTypes = {}; // Name the function so it is clearer in the documentation

  function noop$1() {}

  Transition.defaultProps = {
    in: false,
    mountOnEnter: false,
    unmountOnExit: false,
    appear: false,
    enter: true,
    exit: true,
    onEnter: noop$1,
    onEntering: noop$1,
    onEntered: noop$1,
    onExit: noop$1,
    onExiting: noop$1,
    onExited: noop$1,
  };
  Transition.UNMOUNTED = UNMOUNTED;
  Transition.EXITED = EXITED;
  Transition.ENTERING = ENTERING;
  Transition.ENTERED = ENTERED;
  Transition.EXITING = EXITING;
  var Transition$1 = Transition;

  /**
   * Given `this.props.children`, return an object mapping key to child.
   *
   * @param {*} children `this.props.children`
   * @return {object} Mapping of key to child
   */

  function getChildMapping(children, mapFn) {
    var mapper = function mapper(child) {
      return mapFn && react.exports.isValidElement(child)
        ? mapFn(child)
        : child;
    };

    var result = Object.create(null);
    if (children)
      react.exports.Children.map(children, function (c) {
        return c;
      }).forEach(function (child) {
        // run the map function here instead so that the key is the computed one
        result[child.key] = mapper(child);
      });
    return result;
  }
  /**
   * When you're adding or removing children some may be added or removed in the
   * same render pass. We want to show *both* since we want to simultaneously
   * animate elements in and out. This function takes a previous set of keys
   * and a new set of keys and merges them with its best guess of the correct
   * ordering. In the future we may expose some of the utilities in
   * ReactMultiChild to make this easy, but for now React itself does not
   * directly have this concept of the union of prevChildren and nextChildren
   * so we implement it here.
   *
   * @param {object} prev prev children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @param {object} next next children as returned from
   * `ReactTransitionChildMapping.getChildMapping()`.
   * @return {object} a key set that contains all keys in `prev` and all keys
   * in `next` in a reasonable order.
   */

  function mergeChildMappings(prev, next) {
    prev = prev || {};
    next = next || {};

    function getValueForKey(key) {
      return key in next ? next[key] : prev[key];
    } // For each key of `next`, the list of keys to insert before that key in
    // the combined list

    var nextKeysPending = Object.create(null);
    var pendingKeys = [];

    for (var prevKey in prev) {
      if (prevKey in next) {
        if (pendingKeys.length) {
          nextKeysPending[prevKey] = pendingKeys;
          pendingKeys = [];
        }
      } else {
        pendingKeys.push(prevKey);
      }
    }

    var i;
    var childMapping = {};

    for (var nextKey in next) {
      if (nextKeysPending[nextKey]) {
        for (i = 0; i < nextKeysPending[nextKey].length; i++) {
          var pendingNextKey = nextKeysPending[nextKey][i];
          childMapping[nextKeysPending[nextKey][i]] =
            getValueForKey(pendingNextKey);
        }
      }

      childMapping[nextKey] = getValueForKey(nextKey);
    } // Finally, add the keys which didn't appear before any key in `next`

    for (i = 0; i < pendingKeys.length; i++) {
      childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
    }

    return childMapping;
  }

  function getProp(child, prop, props) {
    return props[prop] != null ? props[prop] : child.props[prop];
  }

  function getInitialChildMapping(props, onExited) {
    return getChildMapping(props.children, function (child) {
      return react.exports.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        appear: getProp(child, 'appear', props),
        enter: getProp(child, 'enter', props),
        exit: getProp(child, 'exit', props),
      });
    });
  }
  function getNextChildMapping(nextProps, prevChildMapping, onExited) {
    var nextChildMapping = getChildMapping(nextProps.children);
    var children = mergeChildMappings(prevChildMapping, nextChildMapping);
    Object.keys(children).forEach(function (key) {
      var child = children[key];
      if (!react.exports.isValidElement(child)) return;
      var hasPrev = key in prevChildMapping;
      var hasNext = key in nextChildMapping;
      var prevChild = prevChildMapping[key];
      var isLeaving =
        react.exports.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

      if (hasNext && (!hasPrev || isLeaving)) {
        // console.log('entering', key)
        children[key] = react.exports.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: true,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps),
        });
      } else if (!hasNext && hasPrev && !isLeaving) {
        // item is old (exiting)
        // console.log('leaving', key)
        children[key] = react.exports.cloneElement(child, {
          in: false,
        });
      } else if (
        hasNext &&
        hasPrev &&
        react.exports.isValidElement(prevChild)
      ) {
        // item hasn't changed transition states
        // copy over the last transition props;
        // console.log('unchanged', key)
        children[key] = react.exports.cloneElement(child, {
          onExited: onExited.bind(null, child),
          in: prevChild.props.in,
          exit: getProp(child, 'exit', nextProps),
          enter: getProp(child, 'enter', nextProps),
        });
      }
    });
    return children;
  }

  var values =
    Object.values ||
    function (obj) {
      return Object.keys(obj).map(function (k) {
        return obj[k];
      });
    };

  var defaultProps = {
    component: 'div',
    childFactory: function childFactory(child) {
      return child;
    },
  };
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

  var TransitionGroup = /*#__PURE__*/ (function (_React$Component) {
    _inheritsLoose(TransitionGroup, _React$Component);

    function TransitionGroup(props, context) {
      var _this;

      _this = _React$Component.call(this, props, context) || this;

      var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear

      _this.state = {
        contextValue: {
          isMounting: true,
        },
        handleExited: handleExited,
        firstRender: true,
      };
      return _this;
    }

    var _proto = TransitionGroup.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.mounted = true;
      this.setState({
        contextValue: {
          isMounting: false,
        },
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.mounted = false;
    };

    TransitionGroup.getDerivedStateFromProps =
      function getDerivedStateFromProps(nextProps, _ref) {
        var prevChildMapping = _ref.children,
          handleExited = _ref.handleExited,
          firstRender = _ref.firstRender;
        return {
          children: firstRender
            ? getInitialChildMapping(nextProps, handleExited)
            : getNextChildMapping(nextProps, prevChildMapping, handleExited),
          firstRender: false,
        };
      }; // node is `undefined` when user provided `nodeRef` prop

    _proto.handleExited = function handleExited(child, node) {
      var currentChildMapping = getChildMapping(this.props.children);
      if (child.key in currentChildMapping) return;

      if (child.props.onExited) {
        child.props.onExited(node);
      }

      if (this.mounted) {
        this.setState(function (state) {
          var children = _extends$2({}, state.children);

          delete children[child.key];
          return {
            children: children,
          };
        });
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, [
          'component',
          'childFactory',
        ]);

      var contextValue = this.state.contextValue;
      var children = values(this.state.children).map(childFactory);
      delete props.appear;
      delete props.enter;
      delete props.exit;

      if (Component === null) {
        return /*#__PURE__*/ React$3.createElement(
          TransitionGroupContext.Provider,
          {
            value: contextValue,
          },
          children,
        );
      }

      return /*#__PURE__*/ React$3.createElement(
        TransitionGroupContext.Provider,
        {
          value: contextValue,
        },
        /*#__PURE__*/ React$3.createElement(Component, props, children),
      );
    };

    return TransitionGroup;
  })(React$3.Component);

  TransitionGroup.propTypes = {};
  TransitionGroup.defaultProps = defaultProps;
  var TransitionGroup$1 = TransitionGroup;

  var reflow = function reflow(node) {
    return node.scrollTop;
  };
  function getTransitionProps(props, options) {
    var timeout = props.timeout,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style;
    return {
      duration:
        style.transitionDuration || typeof timeout === 'number'
          ? timeout
          : timeout[options.mode] || 0,
      delay: style.transitionDelay,
    };
  }

  var styles$G = function styles(theme) {
    var elevations = {};
    theme.shadows.forEach(function (shadow, index) {
      elevations['elevation'.concat(index)] = {
        boxShadow: shadow,
      };
    });
    return _extends$2(
      {
        /* Styles applied to the root element. */
        root: {
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          transition: theme.transitions.create('box-shadow'),
        },

        /* Styles applied to the root element if `square={false}`. */
        rounded: {
          borderRadius: theme.shape.borderRadius,
        },

        /* Styles applied to the root element if `variant="outlined"`. */
        outlined: {
          border: '1px solid '.concat(theme.palette.divider),
        },
      },
      elevations,
    );
  };
  var Paper = /*#__PURE__*/ react.exports.forwardRef(function Paper(
    props,
    ref,
  ) {
    var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$square = props.square,
      square = _props$square === void 0 ? false : _props$square,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 1 : _props$elevation,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'elevation' : _props$variant,
      other = _objectWithoutProperties(props, [
        'classes',
        'className',
        'component',
        'square',
        'elevation',
        'variant',
      ]);

    return /*#__PURE__*/ react.exports.createElement(
      Component,
      _extends$2(
        {
          className: clsx(
            classes.root,
            className,
            variant === 'outlined'
              ? classes.outlined
              : classes['elevation'.concat(elevation)],
            !square && classes.rounded,
          ),
          ref: ref,
        },
        other,
      ),
    );
  });
  var Paper$1 = withStyles(styles$G, {
    name: 'MuiPaper',
  })(Paper);

  var useEnhancedEffect$5 =
    typeof window === 'undefined'
      ? react.exports.useEffect
      : react.exports.useLayoutEffect;
  /**
   * @ignore - internal component.
   */

  function Ripple(props) {
    var classes = props.classes,
      _props$pulsate = props.pulsate,
      pulsate = _props$pulsate === void 0 ? false : _props$pulsate,
      rippleX = props.rippleX,
      rippleY = props.rippleY,
      rippleSize = props.rippleSize,
      inProp = props.in,
      _props$onExited = props.onExited,
      onExited = _props$onExited === void 0 ? function () {} : _props$onExited,
      timeout = props.timeout;

    var _React$useState = react.exports.useState(false),
      leaving = _React$useState[0],
      setLeaving = _React$useState[1];

    var rippleClassName = clsx(
      classes.ripple,
      classes.rippleVisible,
      pulsate && classes.ripplePulsate,
    );
    var rippleStyles = {
      width: rippleSize,
      height: rippleSize,
      top: -(rippleSize / 2) + rippleY,
      left: -(rippleSize / 2) + rippleX,
    };
    var childClassName = clsx(
      classes.child,
      leaving && classes.childLeaving,
      pulsate && classes.childPulsate,
    );
    var handleExited = useEventCallback(onExited); // Ripple is used for user feedback (e.g. click or press) so we want to apply styles with the highest priority

    useEnhancedEffect$5(
      function () {
        if (!inProp) {
          // react-transition-group#onExit
          setLeaving(true); // react-transition-group#onExited

          var timeoutId = setTimeout(handleExited, timeout);
          return function () {
            clearTimeout(timeoutId);
          };
        }

        return undefined;
      },
      [handleExited, inProp, timeout],
    );
    return /*#__PURE__*/ react.exports.createElement(
      'span',
      {
        className: rippleClassName,
        style: rippleStyles,
      },
      /*#__PURE__*/ react.exports.createElement('span', {
        className: childClassName,
      }),
    );
  }

  var DURATION = 550;
  var DELAY_RIPPLE = 80;
  var styles$F = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        overflow: 'hidden',
        pointerEvents: 'none',
        position: 'absolute',
        zIndex: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: 'inherit',
      },

      /* Styles applied to the internal `Ripple` components `ripple` class. */
      ripple: {
        opacity: 0,
        position: 'absolute',
      },

      /* Styles applied to the internal `Ripple` components `rippleVisible` class. */
      rippleVisible: {
        opacity: 0.3,
        transform: 'scale(1)',
        animation: '$enter '
          .concat(DURATION, 'ms ')
          .concat(theme.transitions.easing.easeInOut),
      },

      /* Styles applied to the internal `Ripple` components `ripplePulsate` class. */
      ripplePulsate: {
        animationDuration: ''.concat(theme.transitions.duration.shorter, 'ms'),
      },

      /* Styles applied to the internal `Ripple` components `child` class. */
      child: {
        opacity: 1,
        display: 'block',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: 'currentColor',
      },

      /* Styles applied to the internal `Ripple` components `childLeaving` class. */
      childLeaving: {
        opacity: 0,
        animation: '$exit '
          .concat(DURATION, 'ms ')
          .concat(theme.transitions.easing.easeInOut),
      },

      /* Styles applied to the internal `Ripple` components `childPulsate` class. */
      childPulsate: {
        position: 'absolute',
        left: 0,
        top: 0,
        animation: '$pulsate 2500ms '.concat(
          theme.transitions.easing.easeInOut,
          ' 200ms infinite',
        ),
      },
      '@keyframes enter': {
        '0%': {
          transform: 'scale(0)',
          opacity: 0.1,
        },
        '100%': {
          transform: 'scale(1)',
          opacity: 0.3,
        },
      },
      '@keyframes exit': {
        '0%': {
          opacity: 1,
        },
        '100%': {
          opacity: 0,
        },
      },
      '@keyframes pulsate': {
        '0%': {
          transform: 'scale(1)',
        },
        '50%': {
          transform: 'scale(0.92)',
        },
        '100%': {
          transform: 'scale(1)',
        },
      },
    };
  };
  /**
   * @ignore - internal component.
   *
   * TODO v5: Make private
   */

  var TouchRipple = /*#__PURE__*/ react.exports.forwardRef(function TouchRipple(
    props,
    ref,
  ) {
    var _props$center = props.center,
      centerProp = _props$center === void 0 ? false : _props$center,
      classes = props.classes,
      className = props.className,
      other = _objectWithoutProperties(props, [
        'center',
        'classes',
        'className',
      ]);

    var _React$useState = react.exports.useState([]),
      ripples = _React$useState[0],
      setRipples = _React$useState[1];

    var nextKey = react.exports.useRef(0);
    var rippleCallback = react.exports.useRef(null);
    react.exports.useEffect(
      function () {
        if (rippleCallback.current) {
          rippleCallback.current();
          rippleCallback.current = null;
        }
      },
      [ripples],
    ); // Used to filter out mouse emulated events on mobile.

    var ignoringMouseDown = react.exports.useRef(false); // We use a timer in order to only show the ripples for touch "click" like events.
    // We don't want to display the ripple for touch scroll events.

    var startTimer = react.exports.useRef(null); // This is the hook called once the previous timeout is ready.

    var startTimerCommit = react.exports.useRef(null);
    var container = react.exports.useRef(null);
    react.exports.useEffect(function () {
      return function () {
        clearTimeout(startTimer.current);
      };
    }, []);
    var startCommit = react.exports.useCallback(
      function (params) {
        var pulsate = params.pulsate,
          rippleX = params.rippleX,
          rippleY = params.rippleY,
          rippleSize = params.rippleSize,
          cb = params.cb;
        setRipples(function (oldRipples) {
          return [].concat(_toConsumableArray(oldRipples), [
            /*#__PURE__*/ react.exports.createElement(Ripple, {
              key: nextKey.current,
              classes: classes,
              timeout: DURATION,
              pulsate: pulsate,
              rippleX: rippleX,
              rippleY: rippleY,
              rippleSize: rippleSize,
            }),
          ]);
        });
        nextKey.current += 1;
        rippleCallback.current = cb;
      },
      [classes],
    );
    var start = react.exports.useCallback(
      function () {
        var event =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : {};
        var options =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        var cb = arguments.length > 2 ? arguments[2] : undefined;
        var _options$pulsate = options.pulsate,
          pulsate = _options$pulsate === void 0 ? false : _options$pulsate,
          _options$center = options.center,
          center =
            _options$center === void 0
              ? centerProp || options.pulsate
              : _options$center,
          _options$fakeElement = options.fakeElement,
          fakeElement =
            _options$fakeElement === void 0 ? false : _options$fakeElement;

        if (event.type === 'mousedown' && ignoringMouseDown.current) {
          ignoringMouseDown.current = false;
          return;
        }

        if (event.type === 'touchstart') {
          ignoringMouseDown.current = true;
        }

        var element = fakeElement ? null : container.current;
        var rect = element
          ? element.getBoundingClientRect()
          : {
              width: 0,
              height: 0,
              left: 0,
              top: 0,
            }; // Get the size of the ripple

        var rippleX;
        var rippleY;
        var rippleSize;

        if (
          center ||
          (event.clientX === 0 && event.clientY === 0) ||
          (!event.clientX && !event.touches)
        ) {
          rippleX = Math.round(rect.width / 2);
          rippleY = Math.round(rect.height / 2);
        } else {
          var _ref = event.touches ? event.touches[0] : event,
            clientX = _ref.clientX,
            clientY = _ref.clientY;

          rippleX = Math.round(clientX - rect.left);
          rippleY = Math.round(clientY - rect.top);
        }

        if (center) {
          rippleSize = Math.sqrt(
            (2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3,
          ); // For some reason the animation is broken on Mobile Chrome if the size if even.

          if (rippleSize % 2 === 0) {
            rippleSize += 1;
          }
        } else {
          var sizeX =
            Math.max(
              Math.abs((element ? element.clientWidth : 0) - rippleX),
              rippleX,
            ) *
              2 +
            2;
          var sizeY =
            Math.max(
              Math.abs((element ? element.clientHeight : 0) - rippleY),
              rippleY,
            ) *
              2 +
            2;
          rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
        } // Touche devices

        if (event.touches) {
          // check that this isn't another touchstart due to multitouch
          // otherwise we will only clear a single timer when unmounting while two
          // are running
          if (startTimerCommit.current === null) {
            // Prepare the ripple effect.
            startTimerCommit.current = function () {
              startCommit({
                pulsate: pulsate,
                rippleX: rippleX,
                rippleY: rippleY,
                rippleSize: rippleSize,
                cb: cb,
              });
            }; // Delay the execution of the ripple effect.

            startTimer.current = setTimeout(function () {
              if (startTimerCommit.current) {
                startTimerCommit.current();
                startTimerCommit.current = null;
              }
            }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
          }
        } else {
          startCommit({
            pulsate: pulsate,
            rippleX: rippleX,
            rippleY: rippleY,
            rippleSize: rippleSize,
            cb: cb,
          });
        }
      },
      [centerProp, startCommit],
    );
    var pulsate = react.exports.useCallback(
      function () {
        start(
          {},
          {
            pulsate: true,
          },
        );
      },
      [start],
    );
    var stop = react.exports.useCallback(function (event, cb) {
      clearTimeout(startTimer.current); // The touch interaction occurs too quickly.
      // We still want to show ripple effect.

      if (event.type === 'touchend' && startTimerCommit.current) {
        event.persist();
        startTimerCommit.current();
        startTimerCommit.current = null;
        startTimer.current = setTimeout(function () {
          stop(event, cb);
        });
        return;
      }

      startTimerCommit.current = null;
      setRipples(function (oldRipples) {
        if (oldRipples.length > 0) {
          return oldRipples.slice(1);
        }

        return oldRipples;
      });
      rippleCallback.current = cb;
    }, []);
    react.exports.useImperativeHandle(
      ref,
      function () {
        return {
          pulsate: pulsate,
          start: start,
          stop: stop,
        };
      },
      [pulsate, start, stop],
    );
    return /*#__PURE__*/ react.exports.createElement(
      'span',
      _extends$2(
        {
          className: clsx(classes.root, className),
          ref: container,
        },
        other,
      ),
      /*#__PURE__*/ react.exports.createElement(
        TransitionGroup$1,
        {
          component: null,
          exit: true,
        },
        ripples,
      ),
    );
  });
  var TouchRipple$1 = withStyles(styles$F, {
    flip: false,
    name: 'MuiTouchRipple',
  })(/*#__PURE__*/ react.exports.memo(TouchRipple));

  var styles$E = {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      WebkitTapHighlightColor: 'transparent',
      backgroundColor: 'transparent',
      // Reset default value
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      border: 0,
      margin: 0,
      // Remove the margin in Safari
      borderRadius: 0,
      padding: 0,
      // Remove the padding in Firefox
      cursor: 'pointer',
      userSelect: 'none',
      verticalAlign: 'middle',
      '-moz-appearance': 'none',
      // Reset
      '-webkit-appearance': 'none',
      // Reset
      textDecoration: 'none',
      // So we take precedent over the style of a native <a /> element.
      color: 'inherit',
      '&::-moz-focus-inner': {
        borderStyle: 'none', // Remove Firefox dotted outline.
      },
      '&$disabled': {
        pointerEvents: 'none',
        // Disable link interactions
        cursor: 'default',
      },
      '@media print': {
        colorAdjust: 'exact',
      },
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Pseudo-class applied to the root element if keyboard focused. */
    focusVisible: {},
  };
  /**
   * `ButtonBase` contains as few styles as possible.
   * It aims to be a simple building block for creating a button.
   * It contains a load of style reset and some focus/ripple logic.
   */

  var ButtonBase = /*#__PURE__*/ react.exports.forwardRef(function ButtonBase(
    props,
    ref,
  ) {
    var action = props.action,
      buttonRefProp = props.buttonRef,
      _props$centerRipple = props.centerRipple,
      centerRipple =
        _props$centerRipple === void 0 ? false : _props$centerRipple,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableRipple = props.disableRipple,
      disableRipple =
        _props$disableRipple === void 0 ? false : _props$disableRipple,
      _props$disableTouchRi = props.disableTouchRipple,
      disableTouchRipple =
        _props$disableTouchRi === void 0 ? false : _props$disableTouchRi,
      _props$focusRipple = props.focusRipple,
      focusRipple = _props$focusRipple === void 0 ? false : _props$focusRipple,
      focusVisibleClassName = props.focusVisibleClassName,
      onBlur = props.onBlur,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onFocusVisible = props.onFocusVisible,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      onMouseDown = props.onMouseDown,
      onMouseLeave = props.onMouseLeave,
      onMouseUp = props.onMouseUp,
      onTouchEnd = props.onTouchEnd,
      onTouchMove = props.onTouchMove,
      onTouchStart = props.onTouchStart,
      onDragLeave = props.onDragLeave,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      TouchRippleProps = props.TouchRippleProps,
      _props$type = props.type,
      type = _props$type === void 0 ? 'button' : _props$type,
      other = _objectWithoutProperties(props, [
        'action',
        'buttonRef',
        'centerRipple',
        'children',
        'classes',
        'className',
        'component',
        'disabled',
        'disableRipple',
        'disableTouchRipple',
        'focusRipple',
        'focusVisibleClassName',
        'onBlur',
        'onClick',
        'onFocus',
        'onFocusVisible',
        'onKeyDown',
        'onKeyUp',
        'onMouseDown',
        'onMouseLeave',
        'onMouseUp',
        'onTouchEnd',
        'onTouchMove',
        'onTouchStart',
        'onDragLeave',
        'tabIndex',
        'TouchRippleProps',
        'type',
      ]);

    var buttonRef = react.exports.useRef(null);

    function getButtonNode() {
      // #StrictMode ready
      return reactDom.exports.findDOMNode(buttonRef.current);
    }

    var rippleRef = react.exports.useRef(null);

    var _React$useState = react.exports.useState(false),
      focusVisible = _React$useState[0],
      setFocusVisible = _React$useState[1];

    if (disabled && focusVisible) {
      setFocusVisible(false);
    }

    var _useIsFocusVisible = useIsFocusVisible(),
      isFocusVisible = _useIsFocusVisible.isFocusVisible,
      onBlurVisible = _useIsFocusVisible.onBlurVisible,
      focusVisibleRef = _useIsFocusVisible.ref;

    react.exports.useImperativeHandle(
      action,
      function () {
        return {
          focusVisible: function focusVisible() {
            setFocusVisible(true);
            buttonRef.current.focus();
          },
        };
      },
      [],
    );
    react.exports.useEffect(
      function () {
        if (focusVisible && focusRipple && !disableRipple) {
          rippleRef.current.pulsate();
        }
      },
      [disableRipple, focusRipple, focusVisible],
    );

    function useRippleHandler(rippleAction, eventCallback) {
      var skipRippleAction =
        arguments.length > 2 && arguments[2] !== undefined
          ? arguments[2]
          : disableTouchRipple;
      return useEventCallback(function (event) {
        if (eventCallback) {
          eventCallback(event);
        }

        var ignore = skipRippleAction;

        if (!ignore && rippleRef.current) {
          rippleRef.current[rippleAction](event);
        }

        return true;
      });
    }

    var handleMouseDown = useRippleHandler('start', onMouseDown);
    var handleDragLeave = useRippleHandler('stop', onDragLeave);
    var handleMouseUp = useRippleHandler('stop', onMouseUp);
    var handleMouseLeave = useRippleHandler('stop', function (event) {
      if (focusVisible) {
        event.preventDefault();
      }

      if (onMouseLeave) {
        onMouseLeave(event);
      }
    });
    var handleTouchStart = useRippleHandler('start', onTouchStart);
    var handleTouchEnd = useRippleHandler('stop', onTouchEnd);
    var handleTouchMove = useRippleHandler('stop', onTouchMove);
    var handleBlur = useRippleHandler(
      'stop',
      function (event) {
        if (focusVisible) {
          onBlurVisible(event);
          setFocusVisible(false);
        }

        if (onBlur) {
          onBlur(event);
        }
      },
      false,
    );
    var handleFocus = useEventCallback(function (event) {
      // Fix for https://github.com/facebook/react/issues/7769
      if (!buttonRef.current) {
        buttonRef.current = event.currentTarget;
      }

      if (isFocusVisible(event)) {
        setFocusVisible(true);

        if (onFocusVisible) {
          onFocusVisible(event);
        }
      }

      if (onFocus) {
        onFocus(event);
      }
    });

    var isNonNativeButton = function isNonNativeButton() {
      var button = getButtonNode();
      return (
        component &&
        component !== 'button' &&
        !(button.tagName === 'A' && button.href)
      );
    };
    /**
     * IE 11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
     */

    var keydownRef = react.exports.useRef(false);
    var handleKeyDown = useEventCallback(function (event) {
      // Check if key is already down to avoid repeats being counted as multiple activations
      if (
        focusRipple &&
        !keydownRef.current &&
        focusVisible &&
        rippleRef.current &&
        event.key === ' '
      ) {
        keydownRef.current = true;
        event.persist();
        rippleRef.current.stop(event, function () {
          rippleRef.current.start(event);
        });
      }

      if (
        event.target === event.currentTarget &&
        isNonNativeButton() &&
        event.key === ' '
      ) {
        event.preventDefault();
      }

      if (onKeyDown) {
        onKeyDown(event);
      } // Keyboard accessibility for non interactive elements

      if (
        event.target === event.currentTarget &&
        isNonNativeButton() &&
        event.key === 'Enter' &&
        !disabled
      ) {
        event.preventDefault();

        if (onClick) {
          onClick(event);
        }
      }
    });
    var handleKeyUp = useEventCallback(function (event) {
      // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
      // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
      if (
        focusRipple &&
        event.key === ' ' &&
        rippleRef.current &&
        focusVisible &&
        !event.defaultPrevented
      ) {
        keydownRef.current = false;
        event.persist();
        rippleRef.current.stop(event, function () {
          rippleRef.current.pulsate(event);
        });
      }

      if (onKeyUp) {
        onKeyUp(event);
      } // Keyboard accessibility for non interactive elements

      if (
        onClick &&
        event.target === event.currentTarget &&
        isNonNativeButton() &&
        event.key === ' ' &&
        !event.defaultPrevented
      ) {
        onClick(event);
      }
    });
    var ComponentProp = component;

    if (ComponentProp === 'button' && other.href) {
      ComponentProp = 'a';
    }

    var buttonProps = {};

    if (ComponentProp === 'button') {
      buttonProps.type = type;
      buttonProps.disabled = disabled;
    } else {
      if (ComponentProp !== 'a' || !other.href) {
        buttonProps.role = 'button';
      }

      buttonProps['aria-disabled'] = disabled;
    }

    var handleUserRef = useForkRef(buttonRefProp, ref);
    var handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
    var handleRef = useForkRef(handleUserRef, handleOwnRef);

    var _React$useState2 = react.exports.useState(false),
      mountedState = _React$useState2[0],
      setMountedState = _React$useState2[1];

    react.exports.useEffect(function () {
      setMountedState(true);
    }, []);
    var enableTouchRipple = mountedState && !disableRipple && !disabled;

    return /*#__PURE__*/ react.exports.createElement(
      ComponentProp,
      _extends$2(
        {
          className: clsx(
            classes.root,
            className,
            focusVisible && [classes.focusVisible, focusVisibleClassName],
            disabled && classes.disabled,
          ),
          onBlur: handleBlur,
          onClick: onClick,
          onFocus: handleFocus,
          onKeyDown: handleKeyDown,
          onKeyUp: handleKeyUp,
          onMouseDown: handleMouseDown,
          onMouseLeave: handleMouseLeave,
          onMouseUp: handleMouseUp,
          onDragLeave: handleDragLeave,
          onTouchEnd: handleTouchEnd,
          onTouchMove: handleTouchMove,
          onTouchStart: handleTouchStart,
          ref: handleRef,
          tabIndex: disabled ? -1 : tabIndex,
        },
        buttonProps,
        other,
      ),
      children,
      enableTouchRipple
        ? /*#__PURE__*/

          /* TouchRipple is only needed client-side, x2 boost on the server. */
          react.exports.createElement(
            TouchRipple$1,
            _extends$2(
              {
                ref: rippleRef,
                center: centerRipple,
              },
              TouchRippleProps,
            ),
          )
        : null,
    );
  });
  var ButtonBase$1 = withStyles(styles$E, {
    name: 'MuiButtonBase',
  })(ButtonBase);

  var styles$D = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        textAlign: 'center',
        flex: '0 0 auto',
        fontSize: theme.typography.pxToRem(24),
        padding: 12,
        borderRadius: '50%',
        overflow: 'visible',
        // Explicitly set the default value to solve a bug on IE 11.
        color: theme.palette.action.active,
        transition: theme.transitions.create('background-color', {
          duration: theme.transitions.duration.shortest,
        }),
        '&:hover': {
          backgroundColor: alpha(
            theme.palette.action.active,
            theme.palette.action.hoverOpacity,
          ),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
        '&$disabled': {
          backgroundColor: 'transparent',
          color: theme.palette.action.disabled,
        },
      },

      /* Styles applied to the root element if `edge="start"`. */
      edgeStart: {
        marginLeft: -12,
        '$sizeSmall&': {
          marginLeft: -3,
        },
      },

      /* Styles applied to the root element if `edge="end"`. */
      edgeEnd: {
        marginRight: -12,
        '$sizeSmall&': {
          marginRight: -3,
        },
      },

      /* Styles applied to the root element if `color="inherit"`. */
      colorInherit: {
        color: 'inherit',
      },

      /* Styles applied to the root element if `color="primary"`. */
      colorPrimary: {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.hoverOpacity,
          ),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },

      /* Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: alpha(
            theme.palette.secondary.main,
            theme.palette.action.hoverOpacity,
          ),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },

      /* Pseudo-class applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if `size="small"`. */
      sizeSmall: {
        padding: 3,
        fontSize: theme.typography.pxToRem(18),
      },

      /* Styles applied to the children container element. */
      label: {
        width: '100%',
        display: 'flex',
        alignItems: 'inherit',
        justifyContent: 'inherit',
      },
    };
  };
  /**
   * Refer to the [Icons](/components/icons/) section of the documentation
   * regarding the available icon options.
   */

  var IconButton = /*#__PURE__*/ react.exports.forwardRef(function IconButton(
    props,
    ref,
  ) {
    var _props$edge = props.edge,
      edge = _props$edge === void 0 ? false : _props$edge,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple =
        _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      other = _objectWithoutProperties(props, [
        'edge',
        'children',
        'classes',
        'className',
        'color',
        'disabled',
        'disableFocusRipple',
        'size',
      ]);

    return /*#__PURE__*/ react.exports.createElement(
      ButtonBase$1,
      _extends$2(
        {
          className: clsx(
            classes.root,
            className,
            color !== 'default' && classes['color'.concat(capitalize(color))],
            disabled && classes.disabled,
            size === 'small' && classes['size'.concat(capitalize(size))],
            {
              start: classes.edgeStart,
              end: classes.edgeEnd,
            }[edge],
          ),
          centerRipple: true,
          focusRipple: !disableFocusRipple,
          disabled: disabled,
          ref: ref,
        },
        other,
      ),
      /*#__PURE__*/ react.exports.createElement(
        'span',
        {
          className: classes.label,
        },
        children,
      ),
    );
  });
  var IconButton$1 = withStyles(styles$D, {
    name: 'MuiIconButton',
  })(IconButton);

  var styles$C = function styles(theme) {
    var backgroundColorDefault =
      theme.palette.type === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[900];
    return {
      /* Styles applied to the root element. */
      root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        boxSizing: 'border-box',
        // Prevent padding issue with the Modal and fixed positioned AppBar.
        zIndex: theme.zIndex.appBar,
        flexShrink: 0,
      },

      /* Styles applied to the root element if `position="fixed"`. */
      positionFixed: {
        position: 'fixed',
        top: 0,
        left: 'auto',
        right: 0,
        '@media print': {
          // Prevent the app bar to be visible on each printed page.
          position: 'absolute',
        },
      },

      /* Styles applied to the root element if `position="absolute"`. */
      positionAbsolute: {
        position: 'absolute',
        top: 0,
        left: 'auto',
        right: 0,
      },

      /* Styles applied to the root element if `position="sticky"`. */
      positionSticky: {
        // ⚠️ sticky is not supported by IE 11.
        position: 'sticky',
        top: 0,
        left: 'auto',
        right: 0,
      },

      /* Styles applied to the root element if `position="static"`. */
      positionStatic: {
        position: 'static',
      },

      /* Styles applied to the root element if `position="relative"`. */
      positionRelative: {
        position: 'relative',
      },

      /* Styles applied to the root element if `color="default"`. */
      colorDefault: {
        backgroundColor: backgroundColorDefault,
        color: theme.palette.getContrastText(backgroundColorDefault),
      },

      /* Styles applied to the root element if `color="primary"`. */
      colorPrimary: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
      },

      /* Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
      },

      /* Styles applied to the root element if `color="inherit"`. */
      colorInherit: {
        color: 'inherit',
      },

      /* Styles applied to the root element if `color="transparent"`. */
      colorTransparent: {
        backgroundColor: 'transparent',
        color: 'inherit',
      },
    };
  };
  var AppBar = /*#__PURE__*/ react.exports.forwardRef(function AppBar(
    props,
    ref,
  ) {
    var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$position = props.position,
      position = _props$position === void 0 ? 'fixed' : _props$position,
      other = _objectWithoutProperties(props, [
        'classes',
        'className',
        'color',
        'position',
      ]);

    return /*#__PURE__*/ react.exports.createElement(
      Paper$1,
      _extends$2(
        {
          square: true,
          component: 'header',
          elevation: 4,
          className: clsx(
            classes.root,
            classes['position'.concat(capitalize(position))],
            classes['color'.concat(capitalize(color))],
            className,
            position === 'fixed' && 'mui-fixed',
          ),
          ref: ref,
        },
        other,
      ),
    );
  });
  var AppBar$1 = withStyles(styles$C, {
    name: 'MuiAppBar',
  })(AppBar);

  var styles$B = {
    entering: {
      opacity: 1,
    },
    entered: {
      opacity: 1,
    },
  };
  var defaultTimeout = {
    enter: duration.enteringScreen,
    exit: duration.leavingScreen,
  };
  /**
   * The Fade transition is used by the [Modal](/components/modal/) component.
   * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
   */

  var Fade = /*#__PURE__*/ react.exports.forwardRef(function Fade(props, ref) {
    var children = props.children,
      _props$disableStrictM = props.disableStrictModeCompat,
      disableStrictModeCompat =
        _props$disableStrictM === void 0 ? false : _props$disableStrictM,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      style = props.style,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent =
        _props$TransitionComp === void 0 ? Transition$1 : _props$TransitionComp,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? defaultTimeout : _props$timeout,
      other = _objectWithoutProperties(props, [
        'children',
        'disableStrictModeCompat',
        'in',
        'onEnter',
        'onEntered',
        'onEntering',
        'onExit',
        'onExited',
        'onExiting',
        'style',
        'TransitionComponent',
        'timeout',
      ]);

    var theme = useTheme();
    var enableStrictModeCompat =
      theme.unstable_strictMode && !disableStrictModeCompat;
    var nodeRef = react.exports.useRef(null);
    var foreignRef = useForkRef(children.ref, ref);
    var handleRef = useForkRef(
      enableStrictModeCompat ? nodeRef : undefined,
      foreignRef,
    );

    var normalizedTransitionCallback = function normalizedTransitionCallback(
      callback,
    ) {
      return function (nodeOrAppearing, maybeAppearing) {
        if (callback) {
          var _ref = enableStrictModeCompat
              ? [nodeRef.current, nodeOrAppearing]
              : [nodeOrAppearing, maybeAppearing],
            _ref2 = _slicedToArray(_ref, 2),
            node = _ref2[0],
            isAppearing = _ref2[1]; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.

          if (isAppearing === undefined) {
            callback(node);
          } else {
            callback(node, isAppearing);
          }
        }
      };
    };

    var handleEntering = normalizedTransitionCallback(onEntering);
    var handleEnter = normalizedTransitionCallback(function (
      node,
      isAppearing,
    ) {
      reflow(node); // So the animation always start from the start.

      var transitionProps = getTransitionProps(
        {
          style: style,
          timeout: timeout,
        },
        {
          mode: 'enter',
        },
      );
      node.style.webkitTransition = theme.transitions.create(
        'opacity',
        transitionProps,
      );
      node.style.transition = theme.transitions.create(
        'opacity',
        transitionProps,
      );

      if (onEnter) {
        onEnter(node, isAppearing);
      }
    });
    var handleEntered = normalizedTransitionCallback(onEntered);
    var handleExiting = normalizedTransitionCallback(onExiting);
    var handleExit = normalizedTransitionCallback(function (node) {
      var transitionProps = getTransitionProps(
        {
          style: style,
          timeout: timeout,
        },
        {
          mode: 'exit',
        },
      );
      node.style.webkitTransition = theme.transitions.create(
        'opacity',
        transitionProps,
      );
      node.style.transition = theme.transitions.create(
        'opacity',
        transitionProps,
      );

      if (onExit) {
        onExit(node);
      }
    });
    var handleExited = normalizedTransitionCallback(onExited);
    return /*#__PURE__*/ react.exports.createElement(
      TransitionComponent,
      _extends$2(
        {
          appear: true,
          in: inProp,
          nodeRef: enableStrictModeCompat ? nodeRef : undefined,
          onEnter: handleEnter,
          onEntered: handleEntered,
          onEntering: handleEntering,
          onExit: handleExit,
          onExited: handleExited,
          onExiting: handleExiting,
          timeout: timeout,
        },
        other,
      ),
      function (state, childProps) {
        return /*#__PURE__*/ react.exports.cloneElement(
          children,
          _extends$2(
            {
              style: _extends$2(
                {
                  opacity: 0,
                  visibility:
                    state === 'exited' && !inProp ? 'hidden' : undefined,
                },
                styles$B[state],
                style,
                children.props.style,
              ),
              ref: handleRef,
            },
            childProps,
          ),
        );
      },
    );
  });

  var styles$A = {
    /* Styles applied to the root element. */
    root: {
      // Improve scrollable dialog support.
      zIndex: -1,
      position: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      WebkitTapHighlightColor: 'transparent',
    },

    /* Styles applied to the root element if `invisible={true}`. */
    invisible: {
      backgroundColor: 'transparent',
    },
  };
  var Backdrop = /*#__PURE__*/ react.exports.forwardRef(function Backdrop(
    props,
    ref,
  ) {
    var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$invisible = props.invisible,
      invisible = _props$invisible === void 0 ? false : _props$invisible,
      open = props.open,
      transitionDuration = props.transitionDuration,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent =
        _props$TransitionComp === void 0 ? Fade : _props$TransitionComp,
      other = _objectWithoutProperties(props, [
        'children',
        'classes',
        'className',
        'invisible',
        'open',
        'transitionDuration',
        'TransitionComponent',
      ]);

    return /*#__PURE__*/ react.exports.createElement(
      TransitionComponent,
      _extends$2(
        {
          in: open,
          timeout: transitionDuration,
        },
        other,
      ),
      /*#__PURE__*/ react.exports.createElement(
        'div',
        {
          className: clsx(
            classes.root,
            className,
            invisible && classes.invisible,
          ),
          'aria-hidden': true,
          ref: ref,
        },
        children,
      ),
    );
  });
  var Backdrop$1 = withStyles(styles$A, {
    name: 'MuiBackdrop',
  })(Backdrop);

  var styleFunction = styleFunctionSx(
    compose(
      borders$1,
      display,
      flexbox$1,
      grid$1,
      positions,
      palette$1,
      shadows,
      sizing$1,
      spacing,
      typography$1,
    ),
  );
  /**
   * @ignore - do not document.
   */

  var Box = styled$1('div')(styleFunction, {
    name: 'MuiBox',
  });
  var Box$1 = Box;

  var styles$z = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        margin: 0,
      },

      /* Styles applied to the root element if `variant="body2"`. */
      body2: theme.typography.body2,

      /* Styles applied to the root element if `variant="body1"`. */
      body1: theme.typography.body1,

      /* Styles applied to the root element if `variant="caption"`. */
      caption: theme.typography.caption,

      /* Styles applied to the root element if `variant="button"`. */
      button: theme.typography.button,

      /* Styles applied to the root element if `variant="h1"`. */
      h1: theme.typography.h1,

      /* Styles applied to the root element if `variant="h2"`. */
      h2: theme.typography.h2,

      /* Styles applied to the root element if `variant="h3"`. */
      h3: theme.typography.h3,

      /* Styles applied to the root element if `variant="h4"`. */
      h4: theme.typography.h4,

      /* Styles applied to the root element if `variant="h5"`. */
      h5: theme.typography.h5,

      /* Styles applied to the root element if `variant="h6"`. */
      h6: theme.typography.h6,

      /* Styles applied to the root element if `variant="subtitle1"`. */
      subtitle1: theme.typography.subtitle1,

      /* Styles applied to the root element if `variant="subtitle2"`. */
      subtitle2: theme.typography.subtitle2,

      /* Styles applied to the root element if `variant="overline"`. */
      overline: theme.typography.overline,

      /* Styles applied to the root element if `variant="srOnly"`. Only accessible to screen readers. */
      srOnly: {
        position: 'absolute',
        height: 1,
        width: 1,
        overflow: 'hidden',
      },

      /* Styles applied to the root element if `align="left"`. */
      alignLeft: {
        textAlign: 'left',
      },

      /* Styles applied to the root element if `align="center"`. */
      alignCenter: {
        textAlign: 'center',
      },

      /* Styles applied to the root element if `align="right"`. */
      alignRight: {
        textAlign: 'right',
      },

      /* Styles applied to the root element if `align="justify"`. */
      alignJustify: {
        textAlign: 'justify',
      },

      /* Styles applied to the root element if `nowrap={true}`. */
      noWrap: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },

      /* Styles applied to the root element if `gutterBottom={true}`. */
      gutterBottom: {
        marginBottom: '0.35em',
      },

      /* Styles applied to the root element if `paragraph={true}`. */
      paragraph: {
        marginBottom: 16,
      },

      /* Styles applied to the root element if `color="inherit"`. */
      colorInherit: {
        color: 'inherit',
      },

      /* Styles applied to the root element if `color="primary"`. */
      colorPrimary: {
        color: theme.palette.primary.main,
      },

      /* Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {
        color: theme.palette.secondary.main,
      },

      /* Styles applied to the root element if `color="textPrimary"`. */
      colorTextPrimary: {
        color: theme.palette.text.primary,
      },

      /* Styles applied to the root element if `color="textSecondary"`. */
      colorTextSecondary: {
        color: theme.palette.text.secondary,
      },

      /* Styles applied to the root element if `color="error"`. */
      colorError: {
        color: theme.palette.error.main,
      },

      /* Styles applied to the root element if `display="inline"`. */
      displayInline: {
        display: 'inline',
      },

      /* Styles applied to the root element if `display="block"`. */
      displayBlock: {
        display: 'block',
      },
    };
  };
  var defaultVariantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
  };
  var Typography = /*#__PURE__*/ react.exports.forwardRef(function Typography(
    props,
    ref,
  ) {
    var _props$align = props.align,
      align = _props$align === void 0 ? 'inherit' : _props$align,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'initial' : _props$color,
      component = props.component,
      _props$display = props.display,
      display = _props$display === void 0 ? 'initial' : _props$display,
      _props$gutterBottom = props.gutterBottom,
      gutterBottom =
        _props$gutterBottom === void 0 ? false : _props$gutterBottom,
      _props$noWrap = props.noWrap,
      noWrap = _props$noWrap === void 0 ? false : _props$noWrap,
      _props$paragraph = props.paragraph,
      paragraph = _props$paragraph === void 0 ? false : _props$paragraph,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'body1' : _props$variant,
      _props$variantMapping = props.variantMapping,
      variantMapping =
        _props$variantMapping === void 0
          ? defaultVariantMapping
          : _props$variantMapping,
      other = _objectWithoutProperties(props, [
        'align',
        'classes',
        'className',
        'color',
        'component',
        'display',
        'gutterBottom',
        'noWrap',
        'paragraph',
        'variant',
        'variantMapping',
      ]);

    var Component =
      component ||
      (paragraph
        ? 'p'
        : variantMapping[variant] || defaultVariantMapping[variant]) ||
      'span';
    return /*#__PURE__*/ react.exports.createElement(
      Component,
      _extends$2(
        {
          className: clsx(
            classes.root,
            className,
            variant !== 'inherit' && classes[variant],
            color !== 'initial' && classes['color'.concat(capitalize(color))],
            noWrap && classes.noWrap,
            gutterBottom && classes.gutterBottom,
            paragraph && classes.paragraph,
            align !== 'inherit' && classes['align'.concat(capitalize(align))],
            display !== 'initial' &&
              classes['display'.concat(capitalize(display))],
          ),
          ref: ref,
        },
        other,
      ),
    );
  });
  var Typography$1 = withStyles(styles$z, {
    name: 'MuiTypography',
  })(Typography);

  var styles$y = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: _extends$2({}, theme.typography.button, {
        boxSizing: 'border-box',
        minWidth: 64,
        padding: '6px 16px',
        borderRadius: theme.shape.borderRadius,
        color: theme.palette.text.primary,
        transition: theme.transitions.create(
          ['background-color', 'box-shadow', 'border'],
          {
            duration: theme.transitions.duration.short,
          },
        ),
        '&:hover': {
          textDecoration: 'none',
          backgroundColor: alpha(
            theme.palette.text.primary,
            theme.palette.action.hoverOpacity,
          ),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
          '&$disabled': {
            backgroundColor: 'transparent',
          },
        },
        '&$disabled': {
          color: theme.palette.action.disabled,
        },
      }),

      /* Styles applied to the span element that wraps the children. */
      label: {
        width: '100%',
        // Ensure the correct width for iOS Safari
        display: 'inherit',
        alignItems: 'inherit',
        justifyContent: 'inherit',
      },

      /* Styles applied to the root element if `variant="text"`. */
      text: {
        padding: '6px 8px',
      },

      /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
      textPrimary: {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.hoverOpacity,
          ),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },

      /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
      textSecondary: {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: alpha(
            theme.palette.secondary.main,
            theme.palette.action.hoverOpacity,
          ),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },

      /* Styles applied to the root element if `variant="outlined"`. */
      outlined: {
        padding: '5px 15px',
        border: '1px solid '.concat(
          theme.palette.type === 'light'
            ? 'rgba(0, 0, 0, 0.23)'
            : 'rgba(255, 255, 255, 0.23)',
        ),
        '&$disabled': {
          border: '1px solid '.concat(theme.palette.action.disabledBackground),
        },
      },

      /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
      outlinedPrimary: {
        color: theme.palette.primary.main,
        border: '1px solid '.concat(alpha(theme.palette.primary.main, 0.5)),
        '&:hover': {
          border: '1px solid '.concat(theme.palette.primary.main),
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.hoverOpacity,
          ),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },

      /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
      outlinedSecondary: {
        color: theme.palette.secondary.main,
        border: '1px solid '.concat(alpha(theme.palette.secondary.main, 0.5)),
        '&:hover': {
          border: '1px solid '.concat(theme.palette.secondary.main),
          backgroundColor: alpha(
            theme.palette.secondary.main,
            theme.palette.action.hoverOpacity,
          ),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
        '&$disabled': {
          border: '1px solid '.concat(theme.palette.action.disabled),
        },
      },

      /* Styles applied to the root element if `variant="contained"`. */
      contained: {
        color: theme.palette.getContrastText(theme.palette.grey[300]),
        backgroundColor: theme.palette.grey[300],
        boxShadow: theme.shadows[2],
        '&:hover': {
          backgroundColor: theme.palette.grey.A100,
          boxShadow: theme.shadows[4],
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            boxShadow: theme.shadows[2],
            backgroundColor: theme.palette.grey[300],
          },
          '&$disabled': {
            backgroundColor: theme.palette.action.disabledBackground,
          },
        },
        '&$focusVisible': {
          boxShadow: theme.shadows[6],
        },
        '&:active': {
          boxShadow: theme.shadows[8],
        },
        '&$disabled': {
          color: theme.palette.action.disabled,
          boxShadow: theme.shadows[0],
          backgroundColor: theme.palette.action.disabledBackground,
        },
      },

      /* Styles applied to the root element if `variant="contained"` and `color="primary"`. */
      containedPrimary: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.primary.dark,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette.primary.main,
          },
        },
      },

      /* Styles applied to the root element if `variant="contained"` and `color="secondary"`. */
      containedSecondary: {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: theme.palette.secondary.dark,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: theme.palette.secondary.main,
          },
        },
      },

      /* Styles applied to the root element if `disableElevation={true}`. */
      disableElevation: {
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
        '&$focusVisible': {
          boxShadow: 'none',
        },
        '&:active': {
          boxShadow: 'none',
        },
        '&$disabled': {
          boxShadow: 'none',
        },
      },

      /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
      focusVisible: {},

      /* Pseudo-class applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if `color="inherit"`. */
      colorInherit: {
        color: 'inherit',
        borderColor: 'currentColor',
      },

      /* Styles applied to the root element if `size="small"` and `variant="text"`. */
      textSizeSmall: {
        padding: '4px 5px',
        fontSize: theme.typography.pxToRem(13),
      },

      /* Styles applied to the root element if `size="large"` and `variant="text"`. */
      textSizeLarge: {
        padding: '8px 11px',
        fontSize: theme.typography.pxToRem(15),
      },

      /* Styles applied to the root element if `size="small"` and `variant="outlined"`. */
      outlinedSizeSmall: {
        padding: '3px 9px',
        fontSize: theme.typography.pxToRem(13),
      },

      /* Styles applied to the root element if `size="large"` and `variant="outlined"`. */
      outlinedSizeLarge: {
        padding: '7px 21px',
        fontSize: theme.typography.pxToRem(15),
      },

      /* Styles applied to the root element if `size="small"` and `variant="contained"`. */
      containedSizeSmall: {
        padding: '4px 10px',
        fontSize: theme.typography.pxToRem(13),
      },

      /* Styles applied to the root element if `size="large"` and `variant="contained"`. */
      containedSizeLarge: {
        padding: '8px 22px',
        fontSize: theme.typography.pxToRem(15),
      },

      /* Styles applied to the root element if `size="small"`. */
      sizeSmall: {},

      /* Styles applied to the root element if `size="large"`. */
      sizeLarge: {},

      /* Styles applied to the root element if `fullWidth={true}`. */
      fullWidth: {
        width: '100%',
      },

      /* Styles applied to the startIcon element if supplied. */
      startIcon: {
        display: 'inherit',
        marginRight: 8,
        marginLeft: -4,
        '&$iconSizeSmall': {
          marginLeft: -2,
        },
      },

      /* Styles applied to the endIcon element if supplied. */
      endIcon: {
        display: 'inherit',
        marginRight: -4,
        marginLeft: 8,
        '&$iconSizeSmall': {
          marginRight: -2,
        },
      },

      /* Styles applied to the icon element if supplied and `size="small"`. */
      iconSizeSmall: {
        '& > *:first-child': {
          fontSize: 18,
        },
      },

      /* Styles applied to the icon element if supplied and `size="medium"`. */
      iconSizeMedium: {
        '& > *:first-child': {
          fontSize: 20,
        },
      },

      /* Styles applied to the icon element if supplied and `size="large"`. */
      iconSizeLarge: {
        '& > *:first-child': {
          fontSize: 22,
        },
      },
    };
  };
  var Button = /*#__PURE__*/ react.exports.forwardRef(function Button(
    props,
    ref,
  ) {
    var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableElevati = props.disableElevation,
      disableElevation =
        _props$disableElevati === void 0 ? false : _props$disableElevati,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple =
        _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      endIconProp = props.endIcon,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      startIconProp = props.startIcon,
      _props$type = props.type,
      type = _props$type === void 0 ? 'button' : _props$type,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'text' : _props$variant,
      other = _objectWithoutProperties(props, [
        'children',
        'classes',
        'className',
        'color',
        'component',
        'disabled',
        'disableElevation',
        'disableFocusRipple',
        'endIcon',
        'focusVisibleClassName',
        'fullWidth',
        'size',
        'startIcon',
        'type',
        'variant',
      ]);

    var startIcon =
      startIconProp &&
      /*#__PURE__*/ react.exports.createElement(
        'span',
        {
          className: clsx(
            classes.startIcon,
            classes['iconSize'.concat(capitalize(size))],
          ),
        },
        startIconProp,
      );
    var endIcon =
      endIconProp &&
      /*#__PURE__*/ react.exports.createElement(
        'span',
        {
          className: clsx(
            classes.endIcon,
            classes['iconSize'.concat(capitalize(size))],
          ),
        },
        endIconProp,
      );
    return /*#__PURE__*/ react.exports.createElement(
      ButtonBase$1,
      _extends$2(
        {
          className: clsx(
            classes.root,
            classes[variant],
            className,
            color === 'inherit'
              ? classes.colorInherit
              : color !== 'default' &&
                  classes[''.concat(variant).concat(capitalize(color))],
            size !== 'medium' && [
              classes[''.concat(variant, 'Size').concat(capitalize(size))],
              classes['size'.concat(capitalize(size))],
            ],
            disableElevation && classes.disableElevation,
            disabled && classes.disabled,
            fullWidth && classes.fullWidth,
          ),
          component: component,
          disabled: disabled,
          focusRipple: !disableFocusRipple,
          focusVisibleClassName: clsx(
            classes.focusVisible,
            focusVisibleClassName,
          ),
          ref: ref,
          type: type,
        },
        other,
      ),
      /*#__PURE__*/ react.exports.createElement(
        'span',
        {
          className: classes.label,
        },
        startIcon,
        children,
        endIcon,
      ),
    );
  });
  var Button$1 = withStyles(styles$y, {
    name: 'MuiButton',
  })(Button);

  var styles$x = {
    /* Styles applied to the root element. */
    root: {
      overflow: 'hidden',
    },
  };
  var Card = /*#__PURE__*/ react.exports.forwardRef(function Card(props, ref) {
    var classes = props.classes,
      className = props.className,
      _props$raised = props.raised,
      raised = _props$raised === void 0 ? false : _props$raised,
      other = _objectWithoutProperties(props, [
        'classes',
        'className',
        'raised',
      ]);

    return /*#__PURE__*/ react.exports.createElement(
      Paper$1,
      _extends$2(
        {
          className: clsx(classes.root, className),
          elevation: raised ? 8 : 1,
          ref: ref,
        },
        other,
      ),
    );
  });
  var Card$1 = withStyles(styles$x, {
    name: 'MuiCard',
  })(Card);

  var styles$w = {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      alignItems: 'center',
      padding: 8,
    },

    /* Styles applied to the root element if `disableSpacing={false}`. */
    spacing: {
      '& > :not(:first-child)': {
        marginLeft: 8,
      },
    },
  };
  var CardActions = /*#__PURE__*/ react.exports.forwardRef(function CardActions(
    props,
    ref,
  ) {
    var _props$disableSpacing = props.disableSpacing,
      disableSpacing =
        _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      classes = props.classes,
      className = props.className,
      other = _objectWithoutProperties(props, [
        'disableSpacing',
        'classes',
        'className',
      ]);

    return /*#__PURE__*/ react.exports.createElement(
      'div',
      _extends$2(
        {
          className: clsx(
            classes.root,
            className,
            !disableSpacing && classes.spacing,
          ),
          ref: ref,
        },
        other,
      ),
    );
  });
  var CardActions$1 = withStyles(styles$w, {
    name: 'MuiCardActions',
  })(CardActions);

  var styles$v = {
    /* Styles applied to the root element. */
    root: {
      padding: 16,
      '&:last-child': {
        paddingBottom: 24,
      },
    },
  };
  var CardContent = /*#__PURE__*/ react.exports.forwardRef(function CardContent(
    props,
    ref,
  ) {
    var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      other = _objectWithoutProperties(props, [
        'classes',
        'className',
        'component',
      ]);

    return /*#__PURE__*/ react.exports.createElement(
      Component,
      _extends$2(
        {
          className: clsx(classes.root, className),
          ref: ref,
        },
        other,
      ),
    );
  });
  var CardContent$1 = withStyles(styles$v, {
    name: 'MuiCardContent',
  })(CardContent);

  var styles$u = {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      alignItems: 'center',
      padding: 16,
    },

    /* Styles applied to the avatar element. */
    avatar: {
      flex: '0 0 auto',
      marginRight: 16,
    },

    /* Styles applied to the action element. */
    action: {
      flex: '0 0 auto',
      alignSelf: 'flex-start',
      marginTop: -8,
      marginRight: -8,
    },

    /* Styles applied to the content wrapper element. */
    content: {
      flex: '1 1 auto',
    },

    /* Styles applied to the title Typography element. */
    title: {},

    /* Styles applied to the subheader Typography element. */
    subheader: {},
  };
  var CardHeader = /*#__PURE__*/ react.exports.forwardRef(function CardHeader(
    props,
    ref,
  ) {
    var action = props.action,
      avatar = props.avatar,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disableTypogra = props.disableTypography,
      disableTypography =
        _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      subheaderProp = props.subheader,
      subheaderTypographyProps = props.subheaderTypographyProps,
      titleProp = props.title,
      titleTypographyProps = props.titleTypographyProps,
      other = _objectWithoutProperties(props, [
        'action',
        'avatar',
        'classes',
        'className',
        'component',
        'disableTypography',
        'subheader',
        'subheaderTypographyProps',
        'title',
        'titleTypographyProps',
      ]);

    var title = titleProp;

    if (title != null && title.type !== Typography$1 && !disableTypography) {
      title = /*#__PURE__*/ react.exports.createElement(
        Typography$1,
        _extends$2(
          {
            variant: avatar ? 'body2' : 'h5',
            className: classes.title,
            component: 'span',
            display: 'block',
          },
          titleTypographyProps,
        ),
        title,
      );
    }

    var subheader = subheaderProp;

    if (
      subheader != null &&
      subheader.type !== Typography$1 &&
      !disableTypography
    ) {
      subheader = /*#__PURE__*/ react.exports.createElement(
        Typography$1,
        _extends$2(
          {
            variant: avatar ? 'body2' : 'body1',
            className: classes.subheader,
            color: 'textSecondary',
            component: 'span',
            display: 'block',
          },
          subheaderTypographyProps,
        ),
        subheader,
      );
    }

    return /*#__PURE__*/ react.exports.createElement(
      Component,
      _extends$2(
        {
          className: clsx(classes.root, className),
          ref: ref,
        },
        other,
      ),
      avatar &&
        /*#__PURE__*/ react.exports.createElement(
          'div',
          {
            className: classes.avatar,
          },
          avatar,
        ),
      /*#__PURE__*/ react.exports.createElement(
        'div',
        {
          className: classes.content,
        },
        title,
        subheader,
      ),
      action &&
        /*#__PURE__*/ react.exports.createElement(
          'div',
          {
            className: classes.action,
          },
          action,
        ),
    );
  });
  var CardHeader$1 = withStyles(styles$u, {
    name: 'MuiCardHeader',
  })(CardHeader);

  /**
   * @ignore - internal component.
   */

  var FormControlContext = react.exports.createContext();

  function useFormControl$1() {
    return react.exports.useContext(FormControlContext);
  }

  function useFormControl() {
    return react.exports.useContext(FormControlContext);
  }

  var styles$t = {
    root: {
      padding: 9,
    },
    checked: {},
    disabled: {},
    input: {
      cursor: 'inherit',
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      margin: 0,
      padding: 0,
      zIndex: 1,
    },
  };
  /**
   * @ignore - internal component.
   */

  var SwitchBase = /*#__PURE__*/ react.exports.forwardRef(function SwitchBase(
    props,
    ref,
  ) {
    var autoFocus = props.autoFocus,
      checkedProp = props.checked,
      checkedIcon = props.checkedIcon,
      classes = props.classes,
      className = props.className,
      defaultChecked = props.defaultChecked,
      disabledProp = props.disabled,
      icon = props.icon,
      id = props.id,
      inputProps = props.inputProps,
      inputRef = props.inputRef,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      readOnly = props.readOnly,
      required = props.required,
      tabIndex = props.tabIndex,
      type = props.type,
      value = props.value,
      other = _objectWithoutProperties(props, [
        'autoFocus',
        'checked',
        'checkedIcon',
        'classes',
        'className',
        'defaultChecked',
        'disabled',
        'icon',
        'id',
        'inputProps',
        'inputRef',
        'name',
        'onBlur',
        'onChange',
        'onFocus',
        'readOnly',
        'required',
        'tabIndex',
        'type',
        'value',
      ]);

    var _useControlled = useControlled({
        controlled: checkedProp,
        default: Boolean(defaultChecked),
        name: 'SwitchBase',
        state: 'checked',
      }),
      _useControlled2 = _slicedToArray(_useControlled, 2),
      checked = _useControlled2[0],
      setCheckedState = _useControlled2[1];

    var muiFormControl = useFormControl();

    var handleFocus = function handleFocus(event) {
      if (onFocus) {
        onFocus(event);
      }

      if (muiFormControl && muiFormControl.onFocus) {
        muiFormControl.onFocus(event);
      }
    };

    var handleBlur = function handleBlur(event) {
      if (onBlur) {
        onBlur(event);
      }

      if (muiFormControl && muiFormControl.onBlur) {
        muiFormControl.onBlur(event);
      }
    };

    var handleInputChange = function handleInputChange(event) {
      var newChecked = event.target.checked;
      setCheckedState(newChecked);

      if (onChange) {
        // TODO v5: remove the second argument.
        onChange(event, newChecked);
      }
    };

    var disabled = disabledProp;

    if (muiFormControl) {
      if (typeof disabled === 'undefined') {
        disabled = muiFormControl.disabled;
      }
    }

    var hasLabelFor = type === 'checkbox' || type === 'radio';
    return /*#__PURE__*/ react.exports.createElement(
      IconButton$1,
      _extends$2(
        {
          component: 'span',
          className: clsx(
            classes.root,
            className,
            checked && classes.checked,
            disabled && classes.disabled,
          ),
          disabled: disabled,
          tabIndex: null,
          role: undefined,
          onFocus: handleFocus,
          onBlur: handleBlur,
          ref: ref,
        },
        other,
      ),
      /*#__PURE__*/ react.exports.createElement(
        'input',
        _extends$2(
          {
            autoFocus: autoFocus,
            checked: checkedProp,
            defaultChecked: defaultChecked,
            className: classes.input,
            disabled: disabled,
            id: hasLabelFor && id,
            name: name,
            onChange: handleInputChange,
            readOnly: readOnly,
            ref: inputRef,
            required: required,
            tabIndex: tabIndex,
            type: type,
            value: value,
          },
          inputProps,
        ),
      ),
      checked ? checkedIcon : icon,
    );
  }); // NB: If changed, please update Checkbox, Switch and Radio
  var SwitchBase$1 = withStyles(styles$t, {
    name: 'PrivateSwitchBase',
  })(SwitchBase);

  /**
   * @ignore - internal component.
   */

  var CheckBoxOutlineBlankIcon = createSvgIcon$1(
    /*#__PURE__*/ react.exports.createElement('path', {
      d: 'M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
    }),
  );

  /**
   * @ignore - internal component.
   */

  var CheckBoxIcon = createSvgIcon$1(
    /*#__PURE__*/ react.exports.createElement('path', {
      d: 'M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
    }),
  );

  /**
   * @ignore - internal component.
   */

  var IndeterminateCheckBoxIcon = createSvgIcon$1(
    /*#__PURE__*/ react.exports.createElement('path', {
      d: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z',
    }),
  );

  var styles$s = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        color: theme.palette.text.secondary,
      },

      /* Pseudo-class applied to the root element if `checked={true}`. */
      checked: {},

      /* Pseudo-class applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Pseudo-class applied to the root element if `indeterminate={true}`. */
      indeterminate: {},

      /* Styles applied to the root element if `color="primary"`. */
      colorPrimary: {
        '&$checked': {
          color: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: alpha(
              theme.palette.primary.main,
              theme.palette.action.hoverOpacity,
            ),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: 'transparent',
            },
          },
        },
        '&$disabled': {
          color: theme.palette.action.disabled,
        },
      },

      /* Styles applied to the root element if `color="secondary"`. */
      colorSecondary: {
        '&$checked': {
          color: theme.palette.secondary.main,
          '&:hover': {
            backgroundColor: alpha(
              theme.palette.secondary.main,
              theme.palette.action.hoverOpacity,
            ),
            // Reset on touch devices, it doesn't add specificity
            '@media (hover: none)': {
              backgroundColor: 'transparent',
            },
          },
        },
        '&$disabled': {
          color: theme.palette.action.disabled,
        },
      },
    };
  };
  var defaultCheckedIcon = /*#__PURE__*/ react.exports.createElement(
    CheckBoxIcon,
    null,
  );
  var defaultIcon = /*#__PURE__*/ react.exports.createElement(
    CheckBoxOutlineBlankIcon,
    null,
  );
  var defaultIndeterminateIcon = /*#__PURE__*/ react.exports.createElement(
    IndeterminateCheckBoxIcon,
    null,
  );
  var Checkbox = /*#__PURE__*/ react.exports.forwardRef(function Checkbox(
    props,
    ref,
  ) {
    var _props$checkedIcon = props.checkedIcon,
      checkedIcon =
        _props$checkedIcon === void 0 ? defaultCheckedIcon : _props$checkedIcon,
      classes = props.classes,
      _props$color = props.color,
      color = _props$color === void 0 ? 'secondary' : _props$color,
      _props$icon = props.icon,
      iconProp = _props$icon === void 0 ? defaultIcon : _props$icon,
      _props$indeterminate = props.indeterminate,
      indeterminate =
        _props$indeterminate === void 0 ? false : _props$indeterminate,
      _props$indeterminateI = props.indeterminateIcon,
      indeterminateIconProp =
        _props$indeterminateI === void 0
          ? defaultIndeterminateIcon
          : _props$indeterminateI,
      inputProps = props.inputProps,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      other = _objectWithoutProperties(props, [
        'checkedIcon',
        'classes',
        'color',
        'icon',
        'indeterminate',
        'indeterminateIcon',
        'inputProps',
        'size',
      ]);

    var icon = indeterminate ? indeterminateIconProp : iconProp;
    var indeterminateIcon = indeterminate ? indeterminateIconProp : checkedIcon;
    return /*#__PURE__*/ react.exports.createElement(
      SwitchBase$1,
      _extends$2(
        {
          type: 'checkbox',
          classes: {
            root: clsx(
              classes.root,
              classes['color'.concat(capitalize(color))],
              indeterminate && classes.indeterminate,
            ),
            checked: classes.checked,
            disabled: classes.disabled,
          },
          color: color,
          inputProps: _extends$2(
            {
              'data-indeterminate': indeterminate,
            },
            inputProps,
          ),
          icon: /*#__PURE__*/ react.exports.cloneElement(icon, {
            fontSize:
              icon.props.fontSize === undefined && size === 'small'
                ? size
                : icon.props.fontSize,
          }),
          checkedIcon: /*#__PURE__*/ react.exports.cloneElement(
            indeterminateIcon,
            {
              fontSize:
                indeterminateIcon.props.fontSize === undefined &&
                size === 'small'
                  ? size
                  : indeterminateIcon.props.fontSize,
            },
          ),
          ref: ref,
        },
        other,
      ),
    );
  });
  var Checkbox$1 = withStyles(styles$s, {
    name: 'MuiCheckbox',
  })(Checkbox);

  var styles$r = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: _defineProperty(
        {
          width: '100%',
          marginLeft: 'auto',
          boxSizing: 'border-box',
          marginRight: 'auto',
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
          display: 'block',
        },
        theme.breakpoints.up('sm'),
        {
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3),
        },
      ),

      /* Styles applied to the root element if `disableGutters={true}`. */
      disableGutters: {
        paddingLeft: 0,
        paddingRight: 0,
      },

      /* Styles applied to the root element if `fixed={true}`. */
      fixed: Object.keys(theme.breakpoints.values).reduce(function (
        acc,
        breakpoint,
      ) {
        var value = theme.breakpoints.values[breakpoint];

        if (value !== 0) {
          acc[theme.breakpoints.up(breakpoint)] = {
            maxWidth: value,
          };
        }

        return acc;
      },
      {}),

      /* Styles applied to the root element if `maxWidth="xs"`. */
      maxWidthXs: _defineProperty({}, theme.breakpoints.up('xs'), {
        maxWidth: Math.max(theme.breakpoints.values.xs, 444),
      }),

      /* Styles applied to the root element if `maxWidth="sm"`. */
      maxWidthSm: _defineProperty({}, theme.breakpoints.up('sm'), {
        maxWidth: theme.breakpoints.values.sm,
      }),

      /* Styles applied to the root element if `maxWidth="md"`. */
      maxWidthMd: _defineProperty({}, theme.breakpoints.up('md'), {
        maxWidth: theme.breakpoints.values.md,
      }),

      /* Styles applied to the root element if `maxWidth="lg"`. */
      maxWidthLg: _defineProperty({}, theme.breakpoints.up('lg'), {
        maxWidth: theme.breakpoints.values.lg,
      }),

      /* Styles applied to the root element if `maxWidth="xl"`. */
      maxWidthXl: _defineProperty({}, theme.breakpoints.up('xl'), {
        maxWidth: theme.breakpoints.values.xl,
      }),
    };
  };
  var Container = /*#__PURE__*/ react.exports.forwardRef(function Container(
    props,
    ref,
  ) {
    var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters =
        _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$fixed = props.fixed,
      fixed = _props$fixed === void 0 ? false : _props$fixed,
      _props$maxWidth = props.maxWidth,
      maxWidth = _props$maxWidth === void 0 ? 'lg' : _props$maxWidth,
      other = _objectWithoutProperties(props, [
        'classes',
        'className',
        'component',
        'disableGutters',
        'fixed',
        'maxWidth',
      ]);

    return /*#__PURE__*/ react.exports.createElement(
      Component,
      _extends$2(
        {
          className: clsx(
            classes.root,
            className,
            fixed && classes.fixed,
            disableGutters && classes.disableGutters,
            maxWidth !== false &&
              classes['maxWidth'.concat(capitalize(String(maxWidth)))],
          ),
          ref: ref,
        },
        other,
      ),
    );
  });
  var Container$1 = withStyles(styles$r, {
    name: 'MuiContainer',
  })(Container);

  function getContainer$1(container) {
    container = typeof container === 'function' ? container() : container; // #StrictMode ready

    return reactDom.exports.findDOMNode(container);
  }

  var useEnhancedEffect$4 =
    typeof window !== 'undefined'
      ? react.exports.useLayoutEffect
      : react.exports.useEffect;
  /**
   * Portals provide a first-class way to render children into a DOM node
   * that exists outside the DOM hierarchy of the parent component.
   */

  var Portal = /*#__PURE__*/ react.exports.forwardRef(function Portal(
    props,
    ref,
  ) {
    var children = props.children,
      container = props.container,
      _props$disablePortal = props.disablePortal,
      disablePortal =
        _props$disablePortal === void 0 ? false : _props$disablePortal,
      onRendered = props.onRendered;

    var _React$useState = react.exports.useState(null),
      mountNode = _React$useState[0],
      setMountNode = _React$useState[1];

    var handleRef = useForkRef(
      /*#__PURE__*/ react.exports.isValidElement(children)
        ? children.ref
        : null,
      ref,
    );
    useEnhancedEffect$4(
      function () {
        if (!disablePortal) {
          setMountNode(getContainer$1(container) || document.body);
        }
      },
      [container, disablePortal],
    );
    useEnhancedEffect$4(
      function () {
        if (mountNode && !disablePortal) {
          setRef(ref, mountNode);
          return function () {
            setRef(ref, null);
          };
        }

        return undefined;
      },
      [ref, mountNode, disablePortal],
    );
    useEnhancedEffect$4(
      function () {
        if (onRendered && (mountNode || disablePortal)) {
          onRendered();
        }
      },
      [onRendered, mountNode, disablePortal],
    );

    if (disablePortal) {
      if (/*#__PURE__*/ react.exports.isValidElement(children)) {
        return /*#__PURE__*/ react.exports.cloneElement(children, {
          ref: handleRef,
        });
      }

      return children;
    }

    return mountNode
      ? /*#__PURE__*/ reactDom.exports.createPortal(children, mountNode)
      : mountNode;
  });

  // A change of the browser zoom change the scrollbar size.
  // Credit https://github.com/twbs/bootstrap/blob/3ffe3a5d82f6f561b82ff78d82b32a7d14aed558/js/src/modal.js#L512-L519
  function getScrollbarSize() {
    var scrollDiv = document.createElement('div');
    scrollDiv.style.width = '99px';
    scrollDiv.style.height = '99px';
    scrollDiv.style.position = 'absolute';
    scrollDiv.style.top = '-9999px';
    scrollDiv.style.overflow = 'scroll';
    document.body.appendChild(scrollDiv);
    var scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarSize;
  }

  function isOverflowing(container) {
    var doc = ownerDocument(container);

    if (doc.body === container) {
      return ownerWindow(doc).innerWidth > doc.documentElement.clientWidth;
    }

    return container.scrollHeight > container.clientHeight;
  }

  function ariaHidden(node, show) {
    if (show) {
      node.setAttribute('aria-hidden', 'true');
    } else {
      node.removeAttribute('aria-hidden');
    }
  }

  function getPaddingRight(node) {
    return parseInt(window.getComputedStyle(node)['padding-right'], 10) || 0;
  }

  function ariaHiddenSiblings(container, mountNode, currentNode) {
    var nodesToExclude =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var show = arguments.length > 4 ? arguments[4] : undefined;
    var blacklist = [mountNode, currentNode].concat(
      _toConsumableArray(nodesToExclude),
    );
    var blacklistTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE'];
    [].forEach.call(container.children, function (node) {
      if (
        node.nodeType === 1 &&
        blacklist.indexOf(node) === -1 &&
        blacklistTagNames.indexOf(node.tagName) === -1
      ) {
        ariaHidden(node, show);
      }
    });
  }

  function findIndexOf(containerInfo, callback) {
    var idx = -1;
    containerInfo.some(function (item, index) {
      if (callback(item)) {
        idx = index;
        return true;
      }

      return false;
    });
    return idx;
  }

  function handleContainer(containerInfo, props) {
    var restoreStyle = [];
    var restorePaddings = [];
    var container = containerInfo.container;
    var fixedNodes;

    if (!props.disableScrollLock) {
      if (isOverflowing(container)) {
        // Compute the size before applying overflow hidden to avoid any scroll jumps.
        var scrollbarSize = getScrollbarSize();
        restoreStyle.push({
          value: container.style.paddingRight,
          key: 'padding-right',
          el: container,
        }); // Use computed style, here to get the real padding to add our scrollbar width.

        container.style['padding-right'] = ''.concat(
          getPaddingRight(container) + scrollbarSize,
          'px',
        ); // .mui-fixed is a global helper.

        fixedNodes = ownerDocument(container).querySelectorAll('.mui-fixed');
        [].forEach.call(fixedNodes, function (node) {
          restorePaddings.push(node.style.paddingRight);
          node.style.paddingRight = ''.concat(
            getPaddingRight(node) + scrollbarSize,
            'px',
          );
        });
      } // Improve Gatsby support
      // https://css-tricks.com/snippets/css/force-vertical-scrollbar/

      var parent = container.parentElement;
      var scrollContainer =
        parent.nodeName === 'HTML' &&
        window.getComputedStyle(parent)['overflow-y'] === 'scroll'
          ? parent
          : container; // Block the scroll even if no scrollbar is visible to account for mobile keyboard
      // screensize shrink.

      restoreStyle.push({
        value: scrollContainer.style.overflow,
        key: 'overflow',
        el: scrollContainer,
      });
      scrollContainer.style.overflow = 'hidden';
    }

    var restore = function restore() {
      if (fixedNodes) {
        [].forEach.call(fixedNodes, function (node, i) {
          if (restorePaddings[i]) {
            node.style.paddingRight = restorePaddings[i];
          } else {
            node.style.removeProperty('padding-right');
          }
        });
      }

      restoreStyle.forEach(function (_ref) {
        var value = _ref.value,
          el = _ref.el,
          key = _ref.key;

        if (value) {
          el.style.setProperty(key, value);
        } else {
          el.style.removeProperty(key);
        }
      });
    };

    return restore;
  }

  function getHiddenSiblings(container) {
    var hiddenSiblings = [];
    [].forEach.call(container.children, function (node) {
      if (node.getAttribute && node.getAttribute('aria-hidden') === 'true') {
        hiddenSiblings.push(node);
      }
    });
    return hiddenSiblings;
  }
  /**
   * @ignore - do not document.
   *
   * Proper state management for containers and the modals in those containers.
   * Simplified, but inspired by react-overlay's ModalManager class.
   * Used by the Modal to ensure proper styling of containers.
   */

  var ModalManager = /*#__PURE__*/ (function () {
    function ModalManager() {
      _classCallCheck(this, ModalManager);

      // this.modals[modalIndex] = modal
      this.modals = []; // this.containers[containerIndex] = {
      //   modals: [],
      //   container,
      //   restore: null,
      // }

      this.containers = [];
    }

    _createClass(ModalManager, [
      {
        key: 'add',
        value: function add(modal, container) {
          var modalIndex = this.modals.indexOf(modal);

          if (modalIndex !== -1) {
            return modalIndex;
          }

          modalIndex = this.modals.length;
          this.modals.push(modal); // If the modal we are adding is already in the DOM.

          if (modal.modalRef) {
            ariaHidden(modal.modalRef, false);
          }

          var hiddenSiblingNodes = getHiddenSiblings(container);
          ariaHiddenSiblings(
            container,
            modal.mountNode,
            modal.modalRef,
            hiddenSiblingNodes,
            true,
          );
          var containerIndex = findIndexOf(this.containers, function (item) {
            return item.container === container;
          });

          if (containerIndex !== -1) {
            this.containers[containerIndex].modals.push(modal);
            return modalIndex;
          }

          this.containers.push({
            modals: [modal],
            container: container,
            restore: null,
            hiddenSiblingNodes: hiddenSiblingNodes,
          });
          return modalIndex;
        },
      },
      {
        key: 'mount',
        value: function mount(modal, props) {
          var containerIndex = findIndexOf(this.containers, function (item) {
            return item.modals.indexOf(modal) !== -1;
          });
          var containerInfo = this.containers[containerIndex];

          if (!containerInfo.restore) {
            containerInfo.restore = handleContainer(containerInfo, props);
          }
        },
      },
      {
        key: 'remove',
        value: function remove(modal) {
          var modalIndex = this.modals.indexOf(modal);

          if (modalIndex === -1) {
            return modalIndex;
          }

          var containerIndex = findIndexOf(this.containers, function (item) {
            return item.modals.indexOf(modal) !== -1;
          });
          var containerInfo = this.containers[containerIndex];
          containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
          this.modals.splice(modalIndex, 1); // If that was the last modal in a container, clean up the container.

          if (containerInfo.modals.length === 0) {
            // The modal might be closed before it had the chance to be mounted in the DOM.
            if (containerInfo.restore) {
              containerInfo.restore();
            }

            if (modal.modalRef) {
              // In case the modal wasn't in the DOM yet.
              ariaHidden(modal.modalRef, true);
            }

            ariaHiddenSiblings(
              containerInfo.container,
              modal.mountNode,
              modal.modalRef,
              containerInfo.hiddenSiblingNodes,
              false,
            );
            this.containers.splice(containerIndex, 1);
          } else {
            // Otherwise make sure the next top modal is visible to a screen reader.
            var nextTop = containerInfo.modals[containerInfo.modals.length - 1]; // as soon as a modal is adding its modalRef is undefined. it can't set
            // aria-hidden because the dom element doesn't exist either
            // when modal was unmounted before modalRef gets null

            if (nextTop.modalRef) {
              ariaHidden(nextTop.modalRef, false);
            }
          }

          return modalIndex;
        },
      },
      {
        key: 'isTopModal',
        value: function isTopModal(modal) {
          return (
            this.modals.length > 0 &&
            this.modals[this.modals.length - 1] === modal
          );
        },
      },
    ]);

    return ModalManager;
  })();

  /* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex, camelcase */
  /**
   * Utility component that locks focus inside the component.
   */

  function Unstable_TrapFocus(props) {
    var children = props.children,
      _props$disableAutoFoc = props.disableAutoFocus,
      disableAutoFocus =
        _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$disableEnforce = props.disableEnforceFocus,
      disableEnforceFocus =
        _props$disableEnforce === void 0 ? false : _props$disableEnforce,
      _props$disableRestore = props.disableRestoreFocus,
      disableRestoreFocus =
        _props$disableRestore === void 0 ? false : _props$disableRestore,
      getDoc = props.getDoc,
      isEnabled = props.isEnabled,
      open = props.open;
    var ignoreNextEnforceFocus = react.exports.useRef();
    var sentinelStart = react.exports.useRef(null);
    var sentinelEnd = react.exports.useRef(null);
    var nodeToRestore = react.exports.useRef();
    var rootRef = react.exports.useRef(null); // can be removed once we drop support for non ref forwarding class components

    var handleOwnRef = react.exports.useCallback(function (instance) {
      // #StrictMode ready
      rootRef.current = reactDom.exports.findDOMNode(instance);
    }, []);
    var handleRef = useForkRef(children.ref, handleOwnRef);
    var prevOpenRef = react.exports.useRef();
    react.exports.useEffect(
      function () {
        prevOpenRef.current = open;
      },
      [open],
    );

    if (!prevOpenRef.current && open && typeof window !== 'undefined') {
      // WARNING: Potentially unsafe in concurrent mode.
      // The way the read on `nodeToRestore` is setup could make this actually safe.
      // Say we render `open={false}` -> `open={true}` but never commit.
      // We have now written a state that wasn't committed. But no committed effect
      // will read this wrong value. We only read from `nodeToRestore` in effects
      // that were committed on `open={true}`
      // WARNING: Prevents the instance from being garbage collected. Should only
      // hold a weak ref.
      nodeToRestore.current = getDoc().activeElement;
    }

    react.exports.useEffect(
      function () {
        if (!open) {
          return;
        }

        var doc = ownerDocument(rootRef.current); // We might render an empty child.

        if (
          !disableAutoFocus &&
          rootRef.current &&
          !rootRef.current.contains(doc.activeElement)
        ) {
          if (!rootRef.current.hasAttribute('tabIndex')) {
            rootRef.current.setAttribute('tabIndex', -1);
          }

          rootRef.current.focus();
        }

        var contain = function contain() {
          var rootElement = rootRef.current; // Cleanup functions are executed lazily in React 17.
          // Contain can be called between the component being unmounted and its cleanup function being run.

          if (rootElement === null) {
            return;
          }

          if (
            !doc.hasFocus() ||
            disableEnforceFocus ||
            !isEnabled() ||
            ignoreNextEnforceFocus.current
          ) {
            ignoreNextEnforceFocus.current = false;
            return;
          }

          if (rootRef.current && !rootRef.current.contains(doc.activeElement)) {
            rootRef.current.focus();
          }
        };

        var loopFocus = function loopFocus(event) {
          // 9 = Tab
          if (disableEnforceFocus || !isEnabled() || event.keyCode !== 9) {
            return;
          } // Make sure the next tab starts from the right place.

          if (doc.activeElement === rootRef.current) {
            // We need to ignore the next contain as
            // it will try to move the focus back to the rootRef element.
            ignoreNextEnforceFocus.current = true;

            if (event.shiftKey) {
              sentinelEnd.current.focus();
            } else {
              sentinelStart.current.focus();
            }
          }
        };

        doc.addEventListener('focus', contain, true);
        doc.addEventListener('keydown', loopFocus, true); // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area
        // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
        //
        // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
        // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.

        var interval = setInterval(function () {
          contain();
        }, 50);
        return function () {
          clearInterval(interval);
          doc.removeEventListener('focus', contain, true);
          doc.removeEventListener('keydown', loopFocus, true); // restoreLastFocus()

          if (!disableRestoreFocus) {
            // In IE 11 it is possible for document.activeElement to be null resulting
            // in nodeToRestore.current being null.
            // Not all elements in IE 11 have a focus method.
            // Once IE 11 support is dropped the focus() call can be unconditional.
            if (nodeToRestore.current && nodeToRestore.current.focus) {
              nodeToRestore.current.focus();
            }

            nodeToRestore.current = null;
          }
        };
      },
      [
        disableAutoFocus,
        disableEnforceFocus,
        disableRestoreFocus,
        isEnabled,
        open,
      ],
    );
    return /*#__PURE__*/ react.exports.createElement(
      react.exports.Fragment,
      null,
      /*#__PURE__*/ react.exports.createElement('div', {
        tabIndex: 0,
        ref: sentinelStart,
        'data-test': 'sentinelStart',
      }),
      /*#__PURE__*/ react.exports.cloneElement(children, {
        ref: handleRef,
      }),
      /*#__PURE__*/ react.exports.createElement('div', {
        tabIndex: 0,
        ref: sentinelEnd,
        'data-test': 'sentinelEnd',
      }),
    );
  }

  var styles$q = {
    /* Styles applied to the root element. */
    root: {
      zIndex: -1,
      position: 'fixed',
      right: 0,
      bottom: 0,
      top: 0,
      left: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      WebkitTapHighlightColor: 'transparent',
    },

    /* Styles applied to the root element if `invisible={true}`. */
    invisible: {
      backgroundColor: 'transparent',
    },
  };
  /**
   * @ignore - internal component.
   */

  var SimpleBackdrop = /*#__PURE__*/ react.exports.forwardRef(
    function SimpleBackdrop(props, ref) {
      var _props$invisible = props.invisible,
        invisible = _props$invisible === void 0 ? false : _props$invisible,
        open = props.open,
        other = _objectWithoutProperties(props, ['invisible', 'open']);

      return open
        ? /*#__PURE__*/ react.exports.createElement(
            'div',
            _extends$2(
              {
                'aria-hidden': true,
                ref: ref,
              },
              other,
              {
                style: _extends$2(
                  {},
                  styles$q.root,
                  invisible ? styles$q.invisible : {},
                  other.style,
                ),
              },
            ),
          )
        : null;
    },
  );

  function getContainer(container) {
    container = typeof container === 'function' ? container() : container;
    return reactDom.exports.findDOMNode(container);
  }

  function getHasTransition(props) {
    return props.children ? props.children.props.hasOwnProperty('in') : false;
  } // A modal manager used to track and manage the state of open Modals.
  // Modals don't open on the server so this won't conflict with concurrent requests.

  var defaultManager = new ModalManager();
  var styles$p = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        position: 'fixed',
        zIndex: theme.zIndex.modal,
        right: 0,
        bottom: 0,
        top: 0,
        left: 0,
      },

      /* Styles applied to the root element if the `Modal` has exited. */
      hidden: {
        visibility: 'hidden',
      },
    };
  };
  /**
   * Modal is a lower-level construct that is leveraged by the following components:
   *
   * - [Dialog](/api/dialog/)
   * - [Drawer](/api/drawer/)
   * - [Menu](/api/menu/)
   * - [Popover](/api/popover/)
   *
   * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
   * rather than directly using Modal.
   *
   * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
   */

  var Modal = /*#__PURE__*/ react.exports.forwardRef(function Modal(
    inProps,
    ref,
  ) {
    var theme = useTheme$1();
    var props = getThemeProps({
      name: 'MuiModal',
      props: _extends$2({}, inProps),
      theme: theme,
    });

    var _props$BackdropCompon = props.BackdropComponent,
      BackdropComponent =
        _props$BackdropCompon === void 0
          ? SimpleBackdrop
          : _props$BackdropCompon,
      BackdropProps = props.BackdropProps,
      children = props.children,
      _props$closeAfterTran = props.closeAfterTransition,
      closeAfterTransition =
        _props$closeAfterTran === void 0 ? false : _props$closeAfterTran,
      container = props.container,
      _props$disableAutoFoc = props.disableAutoFocus,
      disableAutoFocus =
        _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$disableBackdro = props.disableBackdropClick,
      disableBackdropClick =
        _props$disableBackdro === void 0 ? false : _props$disableBackdro,
      _props$disableEnforce = props.disableEnforceFocus,
      disableEnforceFocus =
        _props$disableEnforce === void 0 ? false : _props$disableEnforce,
      _props$disableEscapeK = props.disableEscapeKeyDown,
      disableEscapeKeyDown =
        _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
      _props$disablePortal = props.disablePortal,
      disablePortal =
        _props$disablePortal === void 0 ? false : _props$disablePortal,
      _props$disableRestore = props.disableRestoreFocus,
      disableRestoreFocus =
        _props$disableRestore === void 0 ? false : _props$disableRestore,
      _props$disableScrollL = props.disableScrollLock,
      disableScrollLock =
        _props$disableScrollL === void 0 ? false : _props$disableScrollL,
      _props$hideBackdrop = props.hideBackdrop,
      hideBackdrop =
        _props$hideBackdrop === void 0 ? false : _props$hideBackdrop,
      _props$keepMounted = props.keepMounted,
      keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted,
      _props$manager = props.manager,
      manager = _props$manager === void 0 ? defaultManager : _props$manager,
      onBackdropClick = props.onBackdropClick,
      onClose = props.onClose,
      onEscapeKeyDown = props.onEscapeKeyDown,
      onRendered = props.onRendered,
      open = props.open,
      other = _objectWithoutProperties(props, [
        'BackdropComponent',
        'BackdropProps',
        'children',
        'closeAfterTransition',
        'container',
        'disableAutoFocus',
        'disableBackdropClick',
        'disableEnforceFocus',
        'disableEscapeKeyDown',
        'disablePortal',
        'disableRestoreFocus',
        'disableScrollLock',
        'hideBackdrop',
        'keepMounted',
        'manager',
        'onBackdropClick',
        'onClose',
        'onEscapeKeyDown',
        'onRendered',
        'open',
      ]);

    var _React$useState = react.exports.useState(true),
      exited = _React$useState[0],
      setExited = _React$useState[1];

    var modal = react.exports.useRef({});
    var mountNodeRef = react.exports.useRef(null);
    var modalRef = react.exports.useRef(null);
    var handleRef = useForkRef(modalRef, ref);
    var hasTransition = getHasTransition(props);

    var getDoc = function getDoc() {
      return ownerDocument(mountNodeRef.current);
    };

    var getModal = function getModal() {
      modal.current.modalRef = modalRef.current;
      modal.current.mountNode = mountNodeRef.current;
      return modal.current;
    };

    var handleMounted = function handleMounted() {
      manager.mount(getModal(), {
        disableScrollLock: disableScrollLock,
      }); // Fix a bug on Chrome where the scroll isn't initially 0.

      modalRef.current.scrollTop = 0;
    };

    var handleOpen = useEventCallback(function () {
      var resolvedContainer = getContainer(container) || getDoc().body;
      manager.add(getModal(), resolvedContainer); // The element was already mounted.

      if (modalRef.current) {
        handleMounted();
      }
    });
    var isTopModal = react.exports.useCallback(
      function () {
        return manager.isTopModal(getModal());
      },
      [manager],
    );
    var handlePortalRef = useEventCallback(function (node) {
      mountNodeRef.current = node;

      if (!node) {
        return;
      }

      if (onRendered) {
        onRendered();
      }

      if (open && isTopModal()) {
        handleMounted();
      } else {
        ariaHidden(modalRef.current, true);
      }
    });
    var handleClose = react.exports.useCallback(
      function () {
        manager.remove(getModal());
      },
      [manager],
    );
    react.exports.useEffect(
      function () {
        return function () {
          handleClose();
        };
      },
      [handleClose],
    );
    react.exports.useEffect(
      function () {
        if (open) {
          handleOpen();
        } else if (!hasTransition || !closeAfterTransition) {
          handleClose();
        }
      },
      [open, handleClose, hasTransition, closeAfterTransition, handleOpen],
    );

    if (!keepMounted && !open && (!hasTransition || exited)) {
      return null;
    }

    var handleEnter = function handleEnter() {
      setExited(false);
    };

    var handleExited = function handleExited() {
      setExited(true);

      if (closeAfterTransition) {
        handleClose();
      }
    };

    var handleBackdropClick = function handleBackdropClick(event) {
      if (event.target !== event.currentTarget) {
        return;
      }

      if (onBackdropClick) {
        onBackdropClick(event);
      }

      if (!disableBackdropClick && onClose) {
        onClose(event, 'backdropClick');
      }
    };

    var handleKeyDown = function handleKeyDown(event) {
      // The handler doesn't take event.defaultPrevented into account:
      //
      // event.preventDefault() is meant to stop default behaviours like
      // clicking a checkbox to check it, hitting a button to submit a form,
      // and hitting left arrow to move the cursor in a text input etc.
      // Only special HTML elements have these default behaviors.
      if (event.key !== 'Escape' || !isTopModal()) {
        return;
      }

      if (onEscapeKeyDown) {
        onEscapeKeyDown(event);
      }

      if (!disableEscapeKeyDown) {
        // Swallow the event, in case someone is listening for the escape key on the body.
        event.stopPropagation();

        if (onClose) {
          onClose(event, 'escapeKeyDown');
        }
      }
    };

    var inlineStyle = styles$p(
      theme || {
        zIndex: zIndex,
      },
    );
    var childProps = {};

    if (children.props.tabIndex === undefined) {
      childProps.tabIndex = children.props.tabIndex || '-1';
    } // It's a Transition like component

    if (hasTransition) {
      childProps.onEnter = createChainedFunction(
        handleEnter,
        children.props.onEnter,
      );
      childProps.onExited = createChainedFunction(
        handleExited,
        children.props.onExited,
      );
    }

    return /*#__PURE__*/ react.exports.createElement(
      Portal,
      {
        ref: handlePortalRef,
        container: container,
        disablePortal: disablePortal,
      },
      /*#__PURE__*/ react.exports.createElement(
        'div',
        _extends$2(
          {
            ref: handleRef,
            onKeyDown: handleKeyDown,
            role: 'presentation',
          },
          other,
          {
            style: _extends$2(
              {},
              inlineStyle.root,
              !open && exited ? inlineStyle.hidden : {},
              other.style,
            ),
          },
        ),
        hideBackdrop
          ? null
          : /*#__PURE__*/ react.exports.createElement(
              BackdropComponent,
              _extends$2(
                {
                  open: open,
                  onClick: handleBackdropClick,
                },
                BackdropProps,
              ),
            ),
        /*#__PURE__*/ react.exports.createElement(
          Unstable_TrapFocus,
          {
            disableEnforceFocus: disableEnforceFocus,
            disableAutoFocus: disableAutoFocus,
            disableRestoreFocus: disableRestoreFocus,
            getDoc: getDoc,
            isEnabled: isTopModal,
            open: open,
          },
          /*#__PURE__*/ react.exports.cloneElement(children, childProps),
        ),
      ),
    );
  });

  var styles$o = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        '@media print': {
          // Use !important to override the Modal inline-style.
          position: 'absolute !important',
        },
      },

      /* Styles applied to the container element if `scroll="paper"`. */
      scrollPaper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },

      /* Styles applied to the container element if `scroll="body"`. */
      scrollBody: {
        overflowY: 'auto',
        overflowX: 'hidden',
        textAlign: 'center',
        '&:after': {
          content: '""',
          display: 'inline-block',
          verticalAlign: 'middle',
          height: '100%',
          width: '0',
        },
      },

      /* Styles applied to the container element. */
      container: {
        height: '100%',
        '@media print': {
          height: 'auto',
        },
        // We disable the focus ring for mouse, touch and keyboard users.
        outline: 0,
      },

      /* Styles applied to the `Paper` component. */
      paper: {
        margin: 32,
        position: 'relative',
        overflowY: 'auto',
        // Fix IE 11 issue, to remove at some point.
        '@media print': {
          overflowY: 'visible',
          boxShadow: 'none',
        },
      },

      /* Styles applied to the `Paper` component if `scroll="paper"`. */
      paperScrollPaper: {
        display: 'flex',
        flexDirection: 'column',
        maxHeight: 'calc(100% - 64px)',
      },

      /* Styles applied to the `Paper` component if `scroll="body"`. */
      paperScrollBody: {
        display: 'inline-block',
        verticalAlign: 'middle',
        textAlign: 'left', // 'initial' doesn't work on IE 11
      },

      /* Styles applied to the `Paper` component if `maxWidth=false`. */
      paperWidthFalse: {
        maxWidth: 'calc(100% - 64px)',
      },

      /* Styles applied to the `Paper` component if `maxWidth="xs"`. */
      paperWidthXs: {
        maxWidth: Math.max(theme.breakpoints.values.xs, 444),
        '&$paperScrollBody': _defineProperty(
          {},
          theme.breakpoints.down(
            Math.max(theme.breakpoints.values.xs, 444) + 32 * 2,
          ),
          {
            maxWidth: 'calc(100% - 64px)',
          },
        ),
      },

      /* Styles applied to the `Paper` component if `maxWidth="sm"`. */
      paperWidthSm: {
        maxWidth: theme.breakpoints.values.sm,
        '&$paperScrollBody': _defineProperty(
          {},
          theme.breakpoints.down(theme.breakpoints.values.sm + 32 * 2),
          {
            maxWidth: 'calc(100% - 64px)',
          },
        ),
      },

      /* Styles applied to the `Paper` component if `maxWidth="md"`. */
      paperWidthMd: {
        maxWidth: theme.breakpoints.values.md,
        '&$paperScrollBody': _defineProperty(
          {},
          theme.breakpoints.down(theme.breakpoints.values.md + 32 * 2),
          {
            maxWidth: 'calc(100% - 64px)',
          },
        ),
      },

      /* Styles applied to the `Paper` component if `maxWidth="lg"`. */
      paperWidthLg: {
        maxWidth: theme.breakpoints.values.lg,
        '&$paperScrollBody': _defineProperty(
          {},
          theme.breakpoints.down(theme.breakpoints.values.lg + 32 * 2),
          {
            maxWidth: 'calc(100% - 64px)',
          },
        ),
      },

      /* Styles applied to the `Paper` component if `maxWidth="xl"`. */
      paperWidthXl: {
        maxWidth: theme.breakpoints.values.xl,
        '&$paperScrollBody': _defineProperty(
          {},
          theme.breakpoints.down(theme.breakpoints.values.xl + 32 * 2),
          {
            maxWidth: 'calc(100% - 64px)',
          },
        ),
      },

      /* Styles applied to the `Paper` component if `fullWidth={true}`. */
      paperFullWidth: {
        width: 'calc(100% - 64px)',
      },

      /* Styles applied to the `Paper` component if `fullScreen={true}`. */
      paperFullScreen: {
        margin: 0,
        width: '100%',
        maxWidth: '100%',
        height: '100%',
        maxHeight: 'none',
        borderRadius: 0,
        '&$paperScrollBody': {
          margin: 0,
          maxWidth: '100%',
        },
      },
    };
  };
  var defaultTransitionDuration = {
    enter: duration.enteringScreen,
    exit: duration.leavingScreen,
  };
  /**
   * Dialogs are overlaid modal paper based components with a backdrop.
   */

  var Dialog = /*#__PURE__*/ react.exports.forwardRef(function Dialog(
    props,
    ref,
  ) {
    var BackdropProps = props.BackdropProps,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableBackdro = props.disableBackdropClick,
      disableBackdropClick =
        _props$disableBackdro === void 0 ? false : _props$disableBackdro,
      _props$disableEscapeK = props.disableEscapeKeyDown,
      disableEscapeKeyDown =
        _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
      _props$fullScreen = props.fullScreen,
      fullScreen = _props$fullScreen === void 0 ? false : _props$fullScreen,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$maxWidth = props.maxWidth,
      maxWidth = _props$maxWidth === void 0 ? 'sm' : _props$maxWidth,
      onBackdropClick = props.onBackdropClick,
      onClose = props.onClose,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onEscapeKeyDown = props.onEscapeKeyDown,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      open = props.open,
      _props$PaperComponent = props.PaperComponent,
      PaperComponent =
        _props$PaperComponent === void 0 ? Paper$1 : _props$PaperComponent,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      _props$scroll = props.scroll,
      scroll = _props$scroll === void 0 ? 'paper' : _props$scroll,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent =
        _props$TransitionComp === void 0 ? Fade : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDuration =
        _props$transitionDura === void 0
          ? defaultTransitionDuration
          : _props$transitionDura,
      TransitionProps = props.TransitionProps,
      ariaDescribedby = props['aria-describedby'],
      ariaLabelledby = props['aria-labelledby'],
      other = _objectWithoutProperties(props, [
        'BackdropProps',
        'children',
        'classes',
        'className',
        'disableBackdropClick',
        'disableEscapeKeyDown',
        'fullScreen',
        'fullWidth',
        'maxWidth',
        'onBackdropClick',
        'onClose',
        'onEnter',
        'onEntered',
        'onEntering',
        'onEscapeKeyDown',
        'onExit',
        'onExited',
        'onExiting',
        'open',
        'PaperComponent',
        'PaperProps',
        'scroll',
        'TransitionComponent',
        'transitionDuration',
        'TransitionProps',
        'aria-describedby',
        'aria-labelledby',
      ]);

    var mouseDownTarget = react.exports.useRef();

    var handleMouseDown = function handleMouseDown(event) {
      mouseDownTarget.current = event.target;
    };

    var handleBackdropClick = function handleBackdropClick(event) {
      // Ignore the events not coming from the "backdrop"
      // We don't want to close the dialog when clicking the dialog content.
      if (event.target !== event.currentTarget) {
        return;
      } // Make sure the event starts and ends on the same DOM element.

      if (event.target !== mouseDownTarget.current) {
        return;
      }

      mouseDownTarget.current = null;

      if (onBackdropClick) {
        onBackdropClick(event);
      }

      if (!disableBackdropClick && onClose) {
        onClose(event, 'backdropClick');
      }
    };

    return /*#__PURE__*/ react.exports.createElement(
      Modal,
      _extends$2(
        {
          className: clsx(classes.root, className),
          BackdropComponent: Backdrop$1,
          BackdropProps: _extends$2(
            {
              transitionDuration: transitionDuration,
            },
            BackdropProps,
          ),
          closeAfterTransition: true,
        },
        disableBackdropClick
          ? {
              disableBackdropClick: disableBackdropClick,
            }
          : {},
        {
          disableEscapeKeyDown: disableEscapeKeyDown,
          onEscapeKeyDown: onEscapeKeyDown,
          onClose: onClose,
          open: open,
          ref: ref,
        },
        other,
      ),
      /*#__PURE__*/ react.exports.createElement(
        TransitionComponent,
        _extends$2(
          {
            appear: true,
            in: open,
            timeout: transitionDuration,
            onEnter: onEnter,
            onEntering: onEntering,
            onEntered: onEntered,
            onExit: onExit,
            onExiting: onExiting,
            onExited: onExited,
            role: 'none presentation',
          },
          TransitionProps,
        ),
        /*#__PURE__*/ react.exports.createElement(
          'div',
          {
            className: clsx(
              classes.container,
              classes['scroll'.concat(capitalize(scroll))],
            ),
            onMouseUp: handleBackdropClick,
            onMouseDown: handleMouseDown,
          },
          /*#__PURE__*/ react.exports.createElement(
            PaperComponent,
            _extends$2(
              {
                elevation: 24,
                role: 'dialog',
                'aria-describedby': ariaDescribedby,
                'aria-labelledby': ariaLabelledby,
              },
              PaperProps,
              {
                className: clsx(
                  classes.paper,
                  classes['paperScroll'.concat(capitalize(scroll))],
                  classes['paperWidth'.concat(capitalize(String(maxWidth)))],
                  PaperProps.className,
                  fullScreen && classes.paperFullScreen,
                  fullWidth && classes.paperFullWidth,
                ),
              },
            ),
            children,
          ),
        ),
      ),
    );
  });
  var Dialog$1 = withStyles(styles$o, {
    name: 'MuiDialog',
  })(Dialog);

  var styles$n = {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      alignItems: 'center',
      padding: 8,
      justifyContent: 'flex-end',
      flex: '0 0 auto',
    },

    /* Styles applied to the root element if `disableSpacing={false}`. */
    spacing: {
      '& > :not(:first-child)': {
        marginLeft: 8,
      },
    },
  };
  var DialogActions = /*#__PURE__*/ react.exports.forwardRef(
    function DialogActions(props, ref) {
      var _props$disableSpacing = props.disableSpacing,
        disableSpacing =
          _props$disableSpacing === void 0 ? false : _props$disableSpacing,
        classes = props.classes,
        className = props.className,
        other = _objectWithoutProperties(props, [
          'disableSpacing',
          'classes',
          'className',
        ]);

      return /*#__PURE__*/ react.exports.createElement(
        'div',
        _extends$2(
          {
            className: clsx(
              classes.root,
              className,
              !disableSpacing && classes.spacing,
            ),
            ref: ref,
          },
          other,
        ),
      );
    },
  );
  var DialogActions$1 = withStyles(styles$n, {
    name: 'MuiDialogActions',
  })(DialogActions);

  var styles$m = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        flex: '1 1 auto',
        WebkitOverflowScrolling: 'touch',
        // Add iOS momentum scrolling.
        overflowY: 'auto',
        padding: '8px 24px',
        '&:first-child': {
          // dialog without title
          paddingTop: 20,
        },
      },

      /* Styles applied to the root element if `dividers={true}`. */
      dividers: {
        padding: '16px 24px',
        borderTop: '1px solid '.concat(theme.palette.divider),
        borderBottom: '1px solid '.concat(theme.palette.divider),
      },
    };
  };
  var DialogContent = /*#__PURE__*/ react.exports.forwardRef(
    function DialogContent(props, ref) {
      var classes = props.classes,
        className = props.className,
        _props$dividers = props.dividers,
        dividers = _props$dividers === void 0 ? false : _props$dividers,
        other = _objectWithoutProperties(props, [
          'classes',
          'className',
          'dividers',
        ]);

      return /*#__PURE__*/ react.exports.createElement(
        'div',
        _extends$2(
          {
            className: clsx(
              classes.root,
              className,
              dividers && classes.dividers,
            ),
            ref: ref,
          },
          other,
        ),
      );
    },
  );
  var DialogContent$1 = withStyles(styles$m, {
    name: 'MuiDialogContent',
  })(DialogContent);

  var styles$l = {
    /* Styles applied to the root element. */
    root: {
      margin: 0,
      padding: '16px 24px',
      flex: '0 0 auto',
    },
  };
  var DialogTitle = /*#__PURE__*/ react.exports.forwardRef(function DialogTitle(
    props,
    ref,
  ) {
    var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableTypogra = props.disableTypography,
      disableTypography =
        _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      other = _objectWithoutProperties(props, [
        'children',
        'classes',
        'className',
        'disableTypography',
      ]);

    return /*#__PURE__*/ react.exports.createElement(
      'div',
      _extends$2(
        {
          className: clsx(classes.root, className),
          ref: ref,
        },
        other,
      ),
      disableTypography
        ? children
        : /*#__PURE__*/ react.exports.createElement(
            Typography$1,
            {
              component: 'h2',
              variant: 'h6',
            },
            children,
          ),
    );
  });
  var DialogTitle$1 = withStyles(styles$l, {
    name: 'MuiDialogTitle',
  })(DialogTitle);

  var styles$k = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        height: 1,
        margin: 0,
        // Reset browser default style.
        border: 'none',
        flexShrink: 0,
        backgroundColor: theme.palette.divider,
      },

      /* Styles applied to the root element if `absolute={true}`. */
      absolute: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
      },

      /* Styles applied to the root element if `variant="inset"`. */
      inset: {
        marginLeft: 72,
      },

      /* Styles applied to the root element if `light={true}`. */
      light: {
        backgroundColor: alpha(theme.palette.divider, 0.08),
      },

      /* Styles applied to the root element if `variant="middle"`. */
      middle: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
      },

      /* Styles applied to the root element if `orientation="vertical"`. */
      vertical: {
        height: '100%',
        width: 1,
      },

      /* Styles applied to the root element if `flexItem={true}`. */
      flexItem: {
        alignSelf: 'stretch',
        height: 'auto',
      },
    };
  };
  var Divider = /*#__PURE__*/ react.exports.forwardRef(function Divider(
    props,
    ref,
  ) {
    var _props$absolute = props.absolute,
      absolute = _props$absolute === void 0 ? false : _props$absolute,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'hr' : _props$component,
      _props$flexItem = props.flexItem,
      flexItem = _props$flexItem === void 0 ? false : _props$flexItem,
      _props$light = props.light,
      light = _props$light === void 0 ? false : _props$light,
      _props$orientation = props.orientation,
      orientation =
        _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      _props$role = props.role,
      role =
        _props$role === void 0
          ? Component !== 'hr'
            ? 'separator'
            : undefined
          : _props$role,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'fullWidth' : _props$variant,
      other = _objectWithoutProperties(props, [
        'absolute',
        'classes',
        'className',
        'component',
        'flexItem',
        'light',
        'orientation',
        'role',
        'variant',
      ]);

    return /*#__PURE__*/ react.exports.createElement(
      Component,
      _extends$2(
        {
          className: clsx(
            classes.root,
            className,
            variant !== 'fullWidth' && classes[variant],
            absolute && classes.absolute,
            flexItem && classes.flexItem,
            light && classes.light,
            orientation === 'vertical' && classes.vertical,
          ),
          role: role,
          ref: ref,
        },
        other,
      ),
    );
  });
  var Divider$1 = withStyles(styles$k, {
    name: 'MuiDivider',
  })(Divider);

  function formControlState(_ref) {
    var props = _ref.props,
      states = _ref.states,
      muiFormControl = _ref.muiFormControl;
    return states.reduce(function (acc, state) {
      acc[state] = props[state];

      if (muiFormControl) {
        if (typeof props[state] === 'undefined') {
          acc[state] = muiFormControl[state];
        }
      }

      return acc;
    }, {});
  }

  function getStyleValue(computedStyle, property) {
    return parseInt(computedStyle[property], 10) || 0;
  }

  var useEnhancedEffect$3 =
    typeof window !== 'undefined'
      ? react.exports.useLayoutEffect
      : react.exports.useEffect;
  var styles$j = {
    /* Styles applied to the shadow textarea element. */
    shadow: {
      // Visibility needed to hide the extra text area on iPads
      visibility: 'hidden',
      // Remove from the content flow
      position: 'absolute',
      // Ignore the scrollbar width
      overflow: 'hidden',
      height: 0,
      top: 0,
      left: 0,
      // Create a new layer, increase the isolation of the computed values
      transform: 'translateZ(0)',
    },
  };
  var TextareaAutosize = /*#__PURE__*/ react.exports.forwardRef(
    function TextareaAutosize(props, ref) {
      var onChange = props.onChange,
        rows = props.rows,
        rowsMax = props.rowsMax,
        rowsMinProp = props.rowsMin,
        maxRowsProp = props.maxRows,
        _props$minRows = props.minRows,
        minRowsProp = _props$minRows === void 0 ? 1 : _props$minRows,
        style = props.style,
        value = props.value,
        other = _objectWithoutProperties(props, [
          'onChange',
          'rows',
          'rowsMax',
          'rowsMin',
          'maxRows',
          'minRows',
          'style',
          'value',
        ]);

      var maxRows = maxRowsProp || rowsMax;
      var minRows = rows || rowsMinProp || minRowsProp;

      var _React$useRef = react.exports.useRef(value != null),
        isControlled = _React$useRef.current;

      var inputRef = react.exports.useRef(null);
      var handleRef = useForkRef(ref, inputRef);
      var shadowRef = react.exports.useRef(null);
      var renders = react.exports.useRef(0);

      var _React$useState = react.exports.useState({}),
        state = _React$useState[0],
        setState = _React$useState[1];

      var syncHeight = react.exports.useCallback(
        function () {
          var input = inputRef.current;
          var computedStyle = window.getComputedStyle(input);
          var inputShallow = shadowRef.current;
          inputShallow.style.width = computedStyle.width;
          inputShallow.value = input.value || props.placeholder || 'x';

          if (inputShallow.value.slice(-1) === '\n') {
            // Certain fonts which overflow the line height will cause the textarea
            // to report a different scrollHeight depending on whether the last line
            // is empty. Make it non-empty to avoid this issue.
            inputShallow.value += ' ';
          }

          var boxSizing = computedStyle['box-sizing'];
          var padding =
            getStyleValue(computedStyle, 'padding-bottom') +
            getStyleValue(computedStyle, 'padding-top');
          var border =
            getStyleValue(computedStyle, 'border-bottom-width') +
            getStyleValue(computedStyle, 'border-top-width'); // The height of the inner content

          var innerHeight = inputShallow.scrollHeight - padding; // Measure height of a textarea with a single row

          inputShallow.value = 'x';
          var singleRowHeight = inputShallow.scrollHeight - padding; // The height of the outer content

          var outerHeight = innerHeight;

          if (minRows) {
            outerHeight = Math.max(
              Number(minRows) * singleRowHeight,
              outerHeight,
            );
          }

          if (maxRows) {
            outerHeight = Math.min(
              Number(maxRows) * singleRowHeight,
              outerHeight,
            );
          }

          outerHeight = Math.max(outerHeight, singleRowHeight); // Take the box sizing into account for applying this value as a style.

          var outerHeightStyle =
            outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
          var overflow = Math.abs(outerHeight - innerHeight) <= 1;
          setState(function (prevState) {
            // Need a large enough difference to update the height.
            // This prevents infinite rendering loop.
            if (
              renders.current < 20 &&
              ((outerHeightStyle > 0 &&
                Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) >
                  1) ||
                prevState.overflow !== overflow)
            ) {
              renders.current += 1;
              return {
                overflow: overflow,
                outerHeightStyle: outerHeightStyle,
              };
            }

            return prevState;
          });
        },
        [maxRows, minRows, props.placeholder],
      );
      react.exports.useEffect(
        function () {
          var handleResize = debounce$1(function () {
            renders.current = 0;
            syncHeight();
          });
          window.addEventListener('resize', handleResize);
          return function () {
            handleResize.clear();
            window.removeEventListener('resize', handleResize);
          };
        },
        [syncHeight],
      );
      useEnhancedEffect$3(function () {
        syncHeight();
      });
      react.exports.useEffect(
        function () {
          renders.current = 0;
        },
        [value],
      );

      var handleChange = function handleChange(event) {
        renders.current = 0;

        if (!isControlled) {
          syncHeight();
        }

        if (onChange) {
          onChange(event);
        }
      };

      return /*#__PURE__*/ react.exports.createElement(
        react.exports.Fragment,
        null,
        /*#__PURE__*/ react.exports.createElement(
          'textarea',
          _extends$2(
            {
              value: value,
              onChange: handleChange,
              ref: handleRef, // Apply the rows prop to get a "correct" first SSR paint
              rows: minRows,
              style: _extends$2(
                {
                  height: state.outerHeightStyle,
                  // Need a large enough difference to allow scrolling.
                  // This prevents infinite rendering loop.
                  overflow: state.overflow ? 'hidden' : null,
                },
                style,
              ),
            },
            other,
          ),
        ),
        /*#__PURE__*/ react.exports.createElement('textarea', {
          'aria-hidden': true,
          className: props.className,
          readOnly: true,
          ref: shadowRef,
          tabIndex: -1,
          style: _extends$2({}, styles$j.shadow, style),
        }),
      );
    },
  );

  // Supports determination of isControlled().
  // Controlled input accepts its current value as a prop.
  //
  // @see https://facebook.github.io/react/docs/forms.html#controlled-components
  // @param value
  // @returns {boolean} true if string (including '') or number (including zero)
  function hasValue(value) {
    return value != null && !(Array.isArray(value) && value.length === 0);
  } // Determine if field is empty or filled.
  // Response determines if label is presented above field or as placeholder.
  //
  // @param obj
  // @param SSR
  // @returns {boolean} False when not present or empty string.
  //                    True when any number or string with length.

  function isFilled(obj) {
    var SSR =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return (
      obj &&
      ((hasValue(obj.value) && obj.value !== '') ||
        (SSR && hasValue(obj.defaultValue) && obj.defaultValue !== ''))
    );
  } // Determine if an Input is adorned on start.
  // It's corresponding to the left with LTR.
  //
  // @param obj
  // @returns {boolean} False when no adornments.
  //                    True when adorned at the start.

  function isAdornedStart(obj) {
    return obj.startAdornment;
  }

  var styles$i = function styles(theme) {
    var light = theme.palette.type === 'light';
    var placeholder = {
      color: 'currentColor',
      opacity: light ? 0.42 : 0.5,
      transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.shorter,
      }),
    };
    var placeholderHidden = {
      opacity: '0 !important',
    };
    var placeholderVisible = {
      opacity: light ? 0.42 : 0.5,
    };
    return {
      '@global': {
        '@keyframes mui-auto-fill': {},
        '@keyframes mui-auto-fill-cancel': {},
      },

      /* Styles applied to the root element. */
      root: _extends$2({}, theme.typography.body1, {
        color: theme.palette.text.primary,
        lineHeight: '1.1876em',
        // Reset (19px), match the native input line-height
        boxSizing: 'border-box',
        // Prevent padding issue with fullWidth.
        position: 'relative',
        cursor: 'text',
        display: 'inline-flex',
        alignItems: 'center',
        '&$disabled': {
          color: theme.palette.text.disabled,
          cursor: 'default',
        },
      }),

      /* Styles applied to the root element if the component is a descendant of `FormControl`. */
      formControl: {},

      /* Styles applied to the root element if the component is focused. */
      focused: {},

      /* Styles applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if `startAdornment` is provided. */
      adornedStart: {},

      /* Styles applied to the root element if `endAdornment` is provided. */
      adornedEnd: {},

      /* Pseudo-class applied to the root element if `error={true}`. */
      error: {},

      /* Styles applied to the `input` element if `margin="dense"`. */
      marginDense: {},

      /* Styles applied to the root element if `multiline={true}`. */
      multiline: {
        padding: ''.concat(8 - 2, 'px 0 ').concat(8 - 1, 'px'),
        '&$marginDense': {
          paddingTop: 4 - 1,
        },
      },

      /* Styles applied to the root element if the color is secondary. */
      colorSecondary: {},

      /* Styles applied to the root element if `fullWidth={true}`. */
      fullWidth: {
        width: '100%',
      },

      /* Styles applied to the `input` element. */
      input: {
        font: 'inherit',
        letterSpacing: 'inherit',
        color: 'currentColor',
        padding: ''.concat(8 - 2, 'px 0 ').concat(8 - 1, 'px'),
        border: 0,
        boxSizing: 'content-box',
        background: 'none',
        height: '1.1876em',
        // Reset (19px), match the native input line-height
        margin: 0,
        // Reset for Safari
        WebkitTapHighlightColor: 'transparent',
        display: 'block',
        // Make the flex item shrink with Firefox
        minWidth: 0,
        width: '100%',
        // Fix IE 11 width issue
        animationName: 'mui-auto-fill-cancel',
        animationDuration: '10ms',
        '&::-webkit-input-placeholder': placeholder,
        '&::-moz-placeholder': placeholder,
        // Firefox 19+
        '&:-ms-input-placeholder': placeholder,
        // IE 11
        '&::-ms-input-placeholder': placeholder,
        // Edge
        '&:focus': {
          outline: 0,
        },
        // Reset Firefox invalid required input style
        '&:invalid': {
          boxShadow: 'none',
        },
        '&::-webkit-search-decoration': {
          // Remove the padding when type=search.
          '-webkit-appearance': 'none',
        },
        // Show and hide the placeholder logic
        'label[data-shrink=false] + $formControl &': {
          '&::-webkit-input-placeholder': placeholderHidden,
          '&::-moz-placeholder': placeholderHidden,
          // Firefox 19+
          '&:-ms-input-placeholder': placeholderHidden,
          // IE 11
          '&::-ms-input-placeholder': placeholderHidden,
          // Edge
          '&:focus::-webkit-input-placeholder': placeholderVisible,
          '&:focus::-moz-placeholder': placeholderVisible,
          // Firefox 19+
          '&:focus:-ms-input-placeholder': placeholderVisible,
          // IE 11
          '&:focus::-ms-input-placeholder': placeholderVisible, // Edge
        },
        '&$disabled': {
          opacity: 1, // Reset iOS opacity
        },
        '&:-webkit-autofill': {
          animationDuration: '5000s',
          animationName: 'mui-auto-fill',
        },
      },

      /* Styles applied to the `input` element if `margin="dense"`. */
      inputMarginDense: {
        paddingTop: 4 - 1,
      },

      /* Styles applied to the `input` element if `multiline={true}`. */
      inputMultiline: {
        height: 'auto',
        resize: 'none',
        padding: 0,
      },

      /* Styles applied to the `input` element if `type="search"`. */
      inputTypeSearch: {
        // Improve type search style.
        '-moz-appearance': 'textfield',
        '-webkit-appearance': 'textfield',
      },

      /* Styles applied to the `input` element if `startAdornment` is provided. */
      inputAdornedStart: {},

      /* Styles applied to the `input` element if `endAdornment` is provided. */
      inputAdornedEnd: {},

      /* Styles applied to the `input` element if `hiddenLabel={true}`. */
      inputHiddenLabel: {},
    };
  };
  var useEnhancedEffect$2 =
    typeof window === 'undefined'
      ? react.exports.useEffect
      : react.exports.useLayoutEffect;
  /**
   * `InputBase` contains as few styles as possible.
   * It aims to be a simple building block for creating an input.
   * It contains a load of style reset and some state logic.
   */

  var InputBase = /*#__PURE__*/ react.exports.forwardRef(function InputBase(
    props,
    ref,
  ) {
    var ariaDescribedby = props['aria-describedby'],
      autoComplete = props.autoComplete,
      autoFocus = props.autoFocus,
      classes = props.classes,
      className = props.className;
    props.color;
    var defaultValue = props.defaultValue,
      disabled = props.disabled,
      endAdornment = props.endAdornment;
    props.error;
    var _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      id = props.id,
      _props$inputComponent = props.inputComponent,
      inputComponent =
        _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$inputProps = props.inputProps,
      inputPropsProp = _props$inputProps === void 0 ? {} : _props$inputProps,
      inputRefProp = props.inputRef;
    props.margin;
    var _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      placeholder = props.placeholder,
      readOnly = props.readOnly,
      renderSuffix = props.renderSuffix,
      rows = props.rows,
      rowsMax = props.rowsMax,
      rowsMin = props.rowsMin,
      maxRows = props.maxRows,
      minRows = props.minRows,
      startAdornment = props.startAdornment,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      valueProp = props.value,
      other = _objectWithoutProperties(props, [
        'aria-describedby',
        'autoComplete',
        'autoFocus',
        'classes',
        'className',
        'color',
        'defaultValue',
        'disabled',
        'endAdornment',
        'error',
        'fullWidth',
        'id',
        'inputComponent',
        'inputProps',
        'inputRef',
        'margin',
        'multiline',
        'name',
        'onBlur',
        'onChange',
        'onClick',
        'onFocus',
        'onKeyDown',
        'onKeyUp',
        'placeholder',
        'readOnly',
        'renderSuffix',
        'rows',
        'rowsMax',
        'rowsMin',
        'maxRows',
        'minRows',
        'startAdornment',
        'type',
        'value',
      ]);

    var value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;

    var _React$useRef = react.exports.useRef(value != null),
      isControlled = _React$useRef.current;

    var inputRef = react.exports.useRef();
    var handleInputRefWarning = react.exports.useCallback(function (
      instance,
    ) {},
    []);
    var handleInputPropsRefProp = useForkRef(
      inputPropsProp.ref,
      handleInputRefWarning,
    );
    var handleInputRefProp = useForkRef(inputRefProp, handleInputPropsRefProp);
    var handleInputRef = useForkRef(inputRef, handleInputRefProp);

    var _React$useState = react.exports.useState(false),
      focused = _React$useState[0],
      setFocused = _React$useState[1];

    var muiFormControl = useFormControl$1();

    var fcs = formControlState({
      props: props,
      muiFormControl: muiFormControl,
      states: [
        'color',
        'disabled',
        'error',
        'hiddenLabel',
        'margin',
        'required',
        'filled',
      ],
    });
    fcs.focused = muiFormControl ? muiFormControl.focused : focused; // The blur won't fire when the disabled state is set on a focused input.
    // We need to book keep the focused state manually.

    react.exports.useEffect(
      function () {
        if (!muiFormControl && disabled && focused) {
          setFocused(false);

          if (onBlur) {
            onBlur();
          }
        }
      },
      [muiFormControl, disabled, focused, onBlur],
    );
    var onFilled = muiFormControl && muiFormControl.onFilled;
    var onEmpty = muiFormControl && muiFormControl.onEmpty;
    var checkDirty = react.exports.useCallback(
      function (obj) {
        if (isFilled(obj)) {
          if (onFilled) {
            onFilled();
          }
        } else if (onEmpty) {
          onEmpty();
        }
      },
      [onFilled, onEmpty],
    );
    useEnhancedEffect$2(
      function () {
        if (isControlled) {
          checkDirty({
            value: value,
          });
        }
      },
      [value, checkDirty, isControlled],
    );

    var handleFocus = function handleFocus(event) {
      // Fix a bug with IE 11 where the focus/blur events are triggered
      // while the input is disabled.
      if (fcs.disabled) {
        event.stopPropagation();
        return;
      }

      if (onFocus) {
        onFocus(event);
      }

      if (inputPropsProp.onFocus) {
        inputPropsProp.onFocus(event);
      }

      if (muiFormControl && muiFormControl.onFocus) {
        muiFormControl.onFocus(event);
      } else {
        setFocused(true);
      }
    };

    var handleBlur = function handleBlur(event) {
      if (onBlur) {
        onBlur(event);
      }

      if (inputPropsProp.onBlur) {
        inputPropsProp.onBlur(event);
      }

      if (muiFormControl && muiFormControl.onBlur) {
        muiFormControl.onBlur(event);
      } else {
        setFocused(false);
      }
    };

    var handleChange = function handleChange(event) {
      if (!isControlled) {
        var element = event.target || inputRef.current;

        if (element == null) {
          throw new Error(utils$1.formatMuiErrorMessage(1));
        }

        checkDirty({
          value: element.value,
        });
      }

      for (
        var _len = arguments.length,
          args = new Array(_len > 1 ? _len - 1 : 0),
          _key = 1;
        _key < _len;
        _key++
      ) {
        args[_key - 1] = arguments[_key];
      }

      if (inputPropsProp.onChange) {
        inputPropsProp.onChange.apply(inputPropsProp, [event].concat(args));
      } // Perform in the willUpdate

      if (onChange) {
        onChange.apply(void 0, [event].concat(args));
      }
    }; // Check the input state on mount, in case it was filled by the user
    // or auto filled by the browser before the hydration (for SSR).

    react.exports.useEffect(function () {
      checkDirty(inputRef.current);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    var handleClick = function handleClick(event) {
      if (inputRef.current && event.currentTarget === event.target) {
        inputRef.current.focus();
      }

      if (onClick) {
        onClick(event);
      }
    };

    var InputComponent = inputComponent;

    var inputProps = _extends$2({}, inputPropsProp, {
      ref: handleInputRef,
    });

    if (typeof InputComponent !== 'string') {
      inputProps = _extends$2(
        {
          // Rename ref to inputRef as we don't know the
          // provided `inputComponent` structure.
          inputRef: handleInputRef,
          type: type,
        },
        inputProps,
        {
          ref: null,
        },
      );
    } else if (multiline) {
      if (rows && !maxRows && !minRows && !rowsMax && !rowsMin) {
        InputComponent = 'textarea';
      } else {
        inputProps = _extends$2(
          {
            minRows: rows || minRows,
            rowsMax: rowsMax,
            maxRows: maxRows,
          },
          inputProps,
        );
        InputComponent = TextareaAutosize;
      }
    } else {
      inputProps = _extends$2(
        {
          type: type,
        },
        inputProps,
      );
    }

    var handleAutoFill = function handleAutoFill(event) {
      // Provide a fake value as Chrome might not let you access it for security reasons.
      checkDirty(
        event.animationName === 'mui-auto-fill-cancel'
          ? inputRef.current
          : {
              value: 'x',
            },
      );
    };

    react.exports.useEffect(
      function () {
        if (muiFormControl) {
          muiFormControl.setAdornedStart(Boolean(startAdornment));
        }
      },
      [muiFormControl, startAdornment],
    );
    return /*#__PURE__*/ react.exports.createElement(
      'div',
      _extends$2(
        {
          className: clsx(
            classes.root,
            classes['color'.concat(capitalize(fcs.color || 'primary'))],
            className,
            fcs.disabled && classes.disabled,
            fcs.error && classes.error,
            fullWidth && classes.fullWidth,
            fcs.focused && classes.focused,
            muiFormControl && classes.formControl,
            multiline && classes.multiline,
            startAdornment && classes.adornedStart,
            endAdornment && classes.adornedEnd,
            fcs.margin === 'dense' && classes.marginDense,
          ),
          onClick: handleClick,
          ref: ref,
        },
        other,
      ),
      startAdornment,
      /*#__PURE__*/ react.exports.createElement(
        FormControlContext.Provider,
        {
          value: null,
        },
        /*#__PURE__*/ react.exports.createElement(
          InputComponent,
          _extends$2(
            {
              'aria-invalid': fcs.error,
              'aria-describedby': ariaDescribedby,
              autoComplete: autoComplete,
              autoFocus: autoFocus,
              defaultValue: defaultValue,
              disabled: fcs.disabled,
              id: id,
              onAnimationStart: handleAutoFill,
              name: name,
              placeholder: placeholder,
              readOnly: readOnly,
              required: fcs.required,
              rows: rows,
              value: value,
              onKeyDown: onKeyDown,
              onKeyUp: onKeyUp,
            },
            inputProps,
            {
              className: clsx(
                classes.input,
                inputPropsProp.className,
                fcs.disabled && classes.disabled,
                multiline && classes.inputMultiline,
                fcs.hiddenLabel && classes.inputHiddenLabel,
                startAdornment && classes.inputAdornedStart,
                endAdornment && classes.inputAdornedEnd,
                type === 'search' && classes.inputTypeSearch,
                fcs.margin === 'dense' && classes.inputMarginDense,
              ),
              onBlur: handleBlur,
              onChange: handleChange,
              onFocus: handleFocus,
            },
          ),
        ),
      ),
      endAdornment,
      renderSuffix
        ? renderSuffix(
            _extends$2({}, fcs, {
              startAdornment: startAdornment,
            }),
          )
        : null,
    );
  });
  var InputBase$1 = withStyles(styles$i, {
    name: 'MuiInputBase',
  })(InputBase);

  var styles$h = function styles(theme) {
    var light = theme.palette.type === 'light';
    var bottomLineColor = light
      ? 'rgba(0, 0, 0, 0.42)'
      : 'rgba(255, 255, 255, 0.7)';
    var backgroundColor = light
      ? 'rgba(0, 0, 0, 0.09)'
      : 'rgba(255, 255, 255, 0.09)';
    return {
      /* Styles applied to the root element. */
      root: {
        position: 'relative',
        backgroundColor: backgroundColor,
        borderTopLeftRadius: theme.shape.borderRadius,
        borderTopRightRadius: theme.shape.borderRadius,
        transition: theme.transitions.create('background-color', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut,
        }),
        '&:hover': {
          backgroundColor: light
            ? 'rgba(0, 0, 0, 0.13)'
            : 'rgba(255, 255, 255, 0.13)',
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: backgroundColor,
          },
        },
        '&$focused': {
          backgroundColor: light
            ? 'rgba(0, 0, 0, 0.09)'
            : 'rgba(255, 255, 255, 0.09)',
        },
        '&$disabled': {
          backgroundColor: light
            ? 'rgba(0, 0, 0, 0.12)'
            : 'rgba(255, 255, 255, 0.12)',
        },
      },

      /* Styles applied to the root element if color secondary. */
      colorSecondary: {
        '&$underline:after': {
          borderBottomColor: theme.palette.secondary.main,
        },
      },

      /* Styles applied to the root element if `disableUnderline={false}`. */
      underline: {
        '&:after': {
          borderBottom: '2px solid '.concat(theme.palette.primary.main),
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: 'absolute',
          right: 0,
          transform: 'scaleX(0)',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut,
          }),
          pointerEvents: 'none', // Transparent to the hover style.
        },
        '&$focused:after': {
          transform: 'scaleX(1)',
        },
        '&$error:after': {
          borderBottomColor: theme.palette.error.main,
          transform: 'scaleX(1)', // error is always underlined in red
        },
        '&:before': {
          borderBottom: '1px solid '.concat(bottomLineColor),
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: 'absolute',
          right: 0,
          transition: theme.transitions.create('border-bottom-color', {
            duration: theme.transitions.duration.shorter,
          }),
          pointerEvents: 'none', // Transparent to the hover style.
        },
        '&:hover:before': {
          borderBottom: '1px solid '.concat(theme.palette.text.primary),
        },
        '&$disabled:before': {
          borderBottomStyle: 'dotted',
        },
      },

      /* Pseudo-class applied to the root element if the component is focused. */
      focused: {},

      /* Pseudo-class applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if `startAdornment` is provided. */
      adornedStart: {
        paddingLeft: 12,
      },

      /* Styles applied to the root element if `endAdornment` is provided. */
      adornedEnd: {
        paddingRight: 12,
      },

      /* Pseudo-class applied to the root element if `error={true}`. */
      error: {},

      /* Styles applied to the `input` element if `margin="dense"`. */
      marginDense: {},

      /* Styles applied to the root element if `multiline={true}`. */
      multiline: {
        padding: '27px 12px 10px',
        '&$marginDense': {
          paddingTop: 23,
          paddingBottom: 6,
        },
      },

      /* Styles applied to the `input` element. */
      input: {
        padding: '27px 12px 10px',
        '&:-webkit-autofill': {
          WebkitBoxShadow:
            theme.palette.type === 'light' ? null : '0 0 0 100px #266798 inset',
          WebkitTextFillColor: theme.palette.type === 'light' ? null : '#fff',
          caretColor: theme.palette.type === 'light' ? null : '#fff',
          borderTopLeftRadius: 'inherit',
          borderTopRightRadius: 'inherit',
        },
      },

      /* Styles applied to the `input` element if `margin="dense"`. */
      inputMarginDense: {
        paddingTop: 23,
        paddingBottom: 6,
      },

      /* Styles applied to the `input` if in `<FormControl hiddenLabel />`. */
      inputHiddenLabel: {
        paddingTop: 18,
        paddingBottom: 19,
        '&$inputMarginDense': {
          paddingTop: 10,
          paddingBottom: 11,
        },
      },

      /* Styles applied to the `input` element if `multiline={true}`. */
      inputMultiline: {
        padding: 0,
      },

      /* Styles applied to the `input` element if `startAdornment` is provided. */
      inputAdornedStart: {
        paddingLeft: 0,
      },

      /* Styles applied to the `input` element if `endAdornment` is provided. */
      inputAdornedEnd: {
        paddingRight: 0,
      },
    };
  };
  var FilledInput = /*#__PURE__*/ react.exports.forwardRef(function FilledInput(
    props,
    ref,
  ) {
    var disableUnderline = props.disableUnderline,
      classes = props.classes,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$inputComponent = props.inputComponent,
      inputComponent =
        _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      other = _objectWithoutProperties(props, [
        'disableUnderline',
        'classes',
        'fullWidth',
        'inputComponent',
        'multiline',
        'type',
      ]);

    return /*#__PURE__*/ react.exports.createElement(
      InputBase$1,
      _extends$2(
        {
          classes: _extends$2({}, classes, {
            root: clsx(classes.root, !disableUnderline && classes.underline),
            underline: null,
          }),
          fullWidth: fullWidth,
          inputComponent: inputComponent,
          multiline: multiline,
          ref: ref,
          type: type,
        },
        other,
      ),
    );
  });
  FilledInput.muiName = 'Input';
  var FilledInput$1 = withStyles(styles$h, {
    name: 'MuiFilledInput',
  })(FilledInput);

  var styles$g = {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      flexDirection: 'column',
      position: 'relative',
      // Reset fieldset default style.
      minWidth: 0,
      padding: 0,
      margin: 0,
      border: 0,
      verticalAlign: 'top', // Fix alignment issue on Safari.
    },

    /* Styles applied to the root element if `margin="normal"`. */
    marginNormal: {
      marginTop: 16,
      marginBottom: 8,
    },

    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      marginTop: 8,
      marginBottom: 4,
    },

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%',
    },
  };
  /**
   * Provides context such as filled/focused/error/required for form inputs.
   * Relying on the context provides high flexibility and ensures that the state always stays
   * consistent across the children of the `FormControl`.
   * This context is used by the following components:
   *
   *  - FormLabel
   *  - FormHelperText
   *  - Input
   *  - InputLabel
   *
   * You can find one composition example below and more going to [the demos](/components/text-fields/#components).
   *
   * ```jsx
   * <FormControl>
   *   <InputLabel htmlFor="my-input">Email address</InputLabel>
   *   <Input id="my-input" aria-describedby="my-helper-text" />
   *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
   * </FormControl>
   * ```
   *
   * ⚠️Only one input can be used within a FormControl.
   */

  var FormControl = /*#__PURE__*/ react.exports.forwardRef(function FormControl(
    props,
    ref,
  ) {
    var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      visuallyFocused = props.focused,
      _props$hiddenLabel = props.hiddenLabel,
      hiddenLabel = _props$hiddenLabel === void 0 ? false : _props$hiddenLabel,
      _props$margin = props.margin,
      margin = _props$margin === void 0 ? 'none' : _props$margin,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      size = props.size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = _objectWithoutProperties(props, [
        'children',
        'classes',
        'className',
        'color',
        'component',
        'disabled',
        'error',
        'fullWidth',
        'focused',
        'hiddenLabel',
        'margin',
        'required',
        'size',
        'variant',
      ]);

    var _React$useState = react.exports.useState(function () {
        // We need to iterate through the children and find the Input in order
        // to fully support server-side rendering.
        var initialAdornedStart = false;

        if (children) {
          react.exports.Children.forEach(children, function (child) {
            if (!isMuiElement(child, ['Input', 'Select'])) {
              return;
            }

            var input = isMuiElement(child, ['Select'])
              ? child.props.input
              : child;

            if (input && isAdornedStart(input.props)) {
              initialAdornedStart = true;
            }
          });
        }

        return initialAdornedStart;
      }),
      adornedStart = _React$useState[0],
      setAdornedStart = _React$useState[1];

    var _React$useState2 = react.exports.useState(function () {
        // We need to iterate through the children and find the Input in order
        // to fully support server-side rendering.
        var initialFilled = false;

        if (children) {
          react.exports.Children.forEach(children, function (child) {
            if (!isMuiElement(child, ['Input', 'Select'])) {
              return;
            }

            if (isFilled(child.props, true)) {
              initialFilled = true;
            }
          });
        }

        return initialFilled;
      }),
      filled = _React$useState2[0],
      setFilled = _React$useState2[1];

    var _React$useState3 = react.exports.useState(false),
      _focused = _React$useState3[0],
      setFocused = _React$useState3[1];

    var focused = visuallyFocused !== undefined ? visuallyFocused : _focused;

    if (disabled && focused) {
      setFocused(false);
    }

    var registerEffect;

    var onFilled = react.exports.useCallback(function () {
      setFilled(true);
    }, []);
    var onEmpty = react.exports.useCallback(function () {
      setFilled(false);
    }, []);
    var childContext = {
      adornedStart: adornedStart,
      setAdornedStart: setAdornedStart,
      color: color,
      disabled: disabled,
      error: error,
      filled: filled,
      focused: focused,
      fullWidth: fullWidth,
      hiddenLabel: hiddenLabel,
      margin: (size === 'small' ? 'dense' : undefined) || margin,
      onBlur: function onBlur() {
        setFocused(false);
      },
      onEmpty: onEmpty,
      onFilled: onFilled,
      onFocus: function onFocus() {
        setFocused(true);
      },
      registerEffect: registerEffect,
      required: required,
      variant: variant,
    };
    return /*#__PURE__*/ react.exports.createElement(
      FormControlContext.Provider,
      {
        value: childContext,
      },
      /*#__PURE__*/ react.exports.createElement(
        Component,
        _extends$2(
          {
            className: clsx(
              classes.root,
              className,
              margin !== 'none' && classes['margin'.concat(capitalize(margin))],
              fullWidth && classes.fullWidth,
            ),
            ref: ref,
          },
          other,
        ),
        children,
      ),
    );
  });
  var FormControl$1 = withStyles(styles$g, {
    name: 'MuiFormControl',
  })(FormControl);

  var styles$f = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        // For correct alignment with the text.
        verticalAlign: 'middle',
        WebkitTapHighlightColor: 'transparent',
        marginLeft: -11,
        marginRight: 16,
        // used for row presentation of radio/checkbox
        '&$disabled': {
          cursor: 'default',
        },
      },

      /* Styles applied to the root element if `labelPlacement="start"`. */
      labelPlacementStart: {
        flexDirection: 'row-reverse',
        marginLeft: 16,
        // used for row presentation of radio/checkbox
        marginRight: -11,
      },

      /* Styles applied to the root element if `labelPlacement="top"`. */
      labelPlacementTop: {
        flexDirection: 'column-reverse',
        marginLeft: 16,
      },

      /* Styles applied to the root element if `labelPlacement="bottom"`. */
      labelPlacementBottom: {
        flexDirection: 'column',
        marginLeft: 16,
      },

      /* Pseudo-class applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the label's Typography component. */
      label: {
        '&$disabled': {
          color: theme.palette.text.disabled,
        },
      },
    };
  };
  /**
   * Drop in replacement of the `Radio`, `Switch` and `Checkbox` component.
   * Use this component if you want to display an extra label.
   */

  var FormControlLabel = /*#__PURE__*/ react.exports.forwardRef(
    function FormControlLabel(props, ref) {
      props.checked;
      var classes = props.classes,
        className = props.className,
        control = props.control,
        disabledProp = props.disabled;
      props.inputRef;
      var label = props.label,
        _props$labelPlacement = props.labelPlacement,
        labelPlacement =
          _props$labelPlacement === void 0 ? 'end' : _props$labelPlacement;
      props.name;
      props.onChange;
      props.value;
      var other = _objectWithoutProperties(props, [
        'checked',
        'classes',
        'className',
        'control',
        'disabled',
        'inputRef',
        'label',
        'labelPlacement',
        'name',
        'onChange',
        'value',
      ]);

      var muiFormControl = useFormControl();
      var disabled = disabledProp;

      if (
        typeof disabled === 'undefined' &&
        typeof control.props.disabled !== 'undefined'
      ) {
        disabled = control.props.disabled;
      }

      if (typeof disabled === 'undefined' && muiFormControl) {
        disabled = muiFormControl.disabled;
      }

      var controlProps = {
        disabled: disabled,
      };
      ['checked', 'name', 'onChange', 'value', 'inputRef'].forEach(function (
        key,
      ) {
        if (
          typeof control.props[key] === 'undefined' &&
          typeof props[key] !== 'undefined'
        ) {
          controlProps[key] = props[key];
        }
      });
      return /*#__PURE__*/ react.exports.createElement(
        'label',
        _extends$2(
          {
            className: clsx(
              classes.root,
              className,
              labelPlacement !== 'end' &&
                classes['labelPlacement'.concat(capitalize(labelPlacement))],
              disabled && classes.disabled,
            ),
            ref: ref,
          },
          other,
        ),
        /*#__PURE__*/ react.exports.cloneElement(control, controlProps),
        /*#__PURE__*/ react.exports.createElement(
          Typography$1,
          {
            component: 'span',
            className: clsx(classes.label, disabled && classes.disabled),
          },
          label,
        ),
      );
    },
  );
  var FormControlLabel$1 = withStyles(styles$f, {
    name: 'MuiFormControlLabel',
  })(FormControlLabel);

  var styles$e = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: _extends$2(
        {
          color: theme.palette.text.secondary,
        },
        theme.typography.caption,
        {
          textAlign: 'left',
          marginTop: 3,
          margin: 0,
          '&$disabled': {
            color: theme.palette.text.disabled,
          },
          '&$error': {
            color: theme.palette.error.main,
          },
        },
      ),

      /* Pseudo-class applied to the root element if `error={true}`. */
      error: {},

      /* Pseudo-class applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if `margin="dense"`. */
      marginDense: {
        marginTop: 4,
      },

      /* Styles applied to the root element if `variant="filled"` or `variant="outlined"`. */
      contained: {
        marginLeft: 14,
        marginRight: 14,
      },

      /* Pseudo-class applied to the root element if `focused={true}`. */
      focused: {},

      /* Pseudo-class applied to the root element if `filled={true}`. */
      filled: {},

      /* Pseudo-class applied to the root element if `required={true}`. */
      required: {},
    };
  };
  var FormHelperText = /*#__PURE__*/ react.exports.forwardRef(
    function FormHelperText(props, ref) {
      var children = props.children,
        classes = props.classes,
        className = props.className,
        _props$component = props.component,
        Component = _props$component === void 0 ? 'p' : _props$component;
      props.disabled;
      props.error;
      props.filled;
      props.focused;
      props.margin;
      props.required;
      props.variant;
      var other = _objectWithoutProperties(props, [
        'children',
        'classes',
        'className',
        'component',
        'disabled',
        'error',
        'filled',
        'focused',
        'margin',
        'required',
        'variant',
      ]);

      var muiFormControl = useFormControl();
      var fcs = formControlState({
        props: props,
        muiFormControl: muiFormControl,
        states: [
          'variant',
          'margin',
          'disabled',
          'error',
          'filled',
          'focused',
          'required',
        ],
      });
      return /*#__PURE__*/ react.exports.createElement(
        Component,
        _extends$2(
          {
            className: clsx(
              classes.root,
              (fcs.variant === 'filled' || fcs.variant === 'outlined') &&
                classes.contained,
              className,
              fcs.disabled && classes.disabled,
              fcs.error && classes.error,
              fcs.filled && classes.filled,
              fcs.focused && classes.focused,
              fcs.required && classes.required,
              fcs.margin === 'dense' && classes.marginDense,
            ),
            ref: ref,
          },
          other,
        ),
        children === ' '
          ? /*#__PURE__*/
            // eslint-disable-next-line react/no-danger
            react.exports.createElement('span', {
              dangerouslySetInnerHTML: {
                __html: '&#8203;',
              },
            })
          : children,
      );
    },
  );
  var FormHelperText$1 = withStyles(styles$e, {
    name: 'MuiFormHelperText',
  })(FormHelperText);

  var styles$d = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: _extends$2(
        {
          color: theme.palette.text.secondary,
        },
        theme.typography.body1,
        {
          lineHeight: 1,
          padding: 0,
          '&$focused': {
            color: theme.palette.primary.main,
          },
          '&$disabled': {
            color: theme.palette.text.disabled,
          },
          '&$error': {
            color: theme.palette.error.main,
          },
        },
      ),

      /* Styles applied to the root element if the color is secondary. */
      colorSecondary: {
        '&$focused': {
          color: theme.palette.secondary.main,
        },
      },

      /* Pseudo-class applied to the root element if `focused={true}`. */
      focused: {},

      /* Pseudo-class applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Pseudo-class applied to the root element if `error={true}`. */
      error: {},

      /* Pseudo-class applied to the root element if `filled={true}`. */
      filled: {},

      /* Pseudo-class applied to the root element if `required={true}`. */
      required: {},

      /* Styles applied to the asterisk element. */
      asterisk: {
        '&$error': {
          color: theme.palette.error.main,
        },
      },
    };
  };
  var FormLabel = /*#__PURE__*/ react.exports.forwardRef(function FormLabel(
    props,
    ref,
  ) {
    var children = props.children,
      classes = props.classes,
      className = props.className;
    props.color;
    var _props$component = props.component,
      Component = _props$component === void 0 ? 'label' : _props$component;
    props.disabled;
    props.error;
    props.filled;
    props.focused;
    props.required;
    var other = _objectWithoutProperties(props, [
      'children',
      'classes',
      'className',
      'color',
      'component',
      'disabled',
      'error',
      'filled',
      'focused',
      'required',
    ]);

    var muiFormControl = useFormControl();
    var fcs = formControlState({
      props: props,
      muiFormControl: muiFormControl,
      states: ['color', 'required', 'focused', 'disabled', 'error', 'filled'],
    });
    return /*#__PURE__*/ react.exports.createElement(
      Component,
      _extends$2(
        {
          className: clsx(
            classes.root,
            classes['color'.concat(capitalize(fcs.color || 'primary'))],
            className,
            fcs.disabled && classes.disabled,
            fcs.error && classes.error,
            fcs.filled && classes.filled,
            fcs.focused && classes.focused,
            fcs.required && classes.required,
          ),
          ref: ref,
        },
        other,
      ),
      children,
      fcs.required &&
        /*#__PURE__*/ react.exports.createElement(
          'span',
          {
            'aria-hidden': true,
            className: clsx(classes.asterisk, fcs.error && classes.error),
          },
          '\u2009',
          '*',
        ),
    );
  });
  var FormLabel$1 = withStyles(styles$d, {
    name: 'MuiFormLabel',
  })(FormLabel);

  function getScale(value) {
    return 'scale('.concat(value, ', ').concat(Math.pow(value, 2), ')');
  }

  var styles$c = {
    entering: {
      opacity: 1,
      transform: getScale(1),
    },
    entered: {
      opacity: 1,
      transform: 'none',
    },
  };
  /**
   * The Grow transition is used by the [Tooltip](/components/tooltips/) and
   * [Popover](/components/popover/) components.
   * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
   */

  var Grow = /*#__PURE__*/ react.exports.forwardRef(function Grow(props, ref) {
    var children = props.children,
      _props$disableStrictM = props.disableStrictModeCompat,
      disableStrictModeCompat =
        _props$disableStrictM === void 0 ? false : _props$disableStrictM,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      style = props.style,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? 'auto' : _props$timeout,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent =
        _props$TransitionComp === void 0 ? Transition$1 : _props$TransitionComp,
      other = _objectWithoutProperties(props, [
        'children',
        'disableStrictModeCompat',
        'in',
        'onEnter',
        'onEntered',
        'onEntering',
        'onExit',
        'onExited',
        'onExiting',
        'style',
        'timeout',
        'TransitionComponent',
      ]);

    var timer = react.exports.useRef();
    var autoTimeout = react.exports.useRef();
    var theme = useTheme();
    var enableStrictModeCompat =
      theme.unstable_strictMode && !disableStrictModeCompat;
    var nodeRef = react.exports.useRef(null);
    var foreignRef = useForkRef(children.ref, ref);
    var handleRef = useForkRef(
      enableStrictModeCompat ? nodeRef : undefined,
      foreignRef,
    );

    var normalizedTransitionCallback = function normalizedTransitionCallback(
      callback,
    ) {
      return function (nodeOrAppearing, maybeAppearing) {
        if (callback) {
          var _ref = enableStrictModeCompat
              ? [nodeRef.current, nodeOrAppearing]
              : [nodeOrAppearing, maybeAppearing],
            _ref2 = _slicedToArray(_ref, 2),
            node = _ref2[0],
            isAppearing = _ref2[1]; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.

          if (isAppearing === undefined) {
            callback(node);
          } else {
            callback(node, isAppearing);
          }
        }
      };
    };

    var handleEntering = normalizedTransitionCallback(onEntering);
    var handleEnter = normalizedTransitionCallback(function (
      node,
      isAppearing,
    ) {
      reflow(node); // So the animation always start from the start.

      var _getTransitionProps = getTransitionProps(
          {
            style: style,
            timeout: timeout,
          },
          {
            mode: 'enter',
          },
        ),
        transitionDuration = _getTransitionProps.duration,
        delay = _getTransitionProps.delay;

      var duration;

      if (timeout === 'auto') {
        duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
        autoTimeout.current = duration;
      } else {
        duration = transitionDuration;
      }

      node.style.transition = [
        theme.transitions.create('opacity', {
          duration: duration,
          delay: delay,
        }),
        theme.transitions.create('transform', {
          duration: duration * 0.666,
          delay: delay,
        }),
      ].join(',');

      if (onEnter) {
        onEnter(node, isAppearing);
      }
    });
    var handleEntered = normalizedTransitionCallback(onEntered);
    var handleExiting = normalizedTransitionCallback(onExiting);
    var handleExit = normalizedTransitionCallback(function (node) {
      var _getTransitionProps2 = getTransitionProps(
          {
            style: style,
            timeout: timeout,
          },
          {
            mode: 'exit',
          },
        ),
        transitionDuration = _getTransitionProps2.duration,
        delay = _getTransitionProps2.delay;

      var duration;

      if (timeout === 'auto') {
        duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
        autoTimeout.current = duration;
      } else {
        duration = transitionDuration;
      }

      node.style.transition = [
        theme.transitions.create('opacity', {
          duration: duration,
          delay: delay,
        }),
        theme.transitions.create('transform', {
          duration: duration * 0.666,
          delay: delay || duration * 0.333,
        }),
      ].join(',');
      node.style.opacity = '0';
      node.style.transform = getScale(0.75);

      if (onExit) {
        onExit(node);
      }
    });
    var handleExited = normalizedTransitionCallback(onExited);

    var addEndListener = function addEndListener(nodeOrNext, maybeNext) {
      var next = enableStrictModeCompat ? nodeOrNext : maybeNext;

      if (timeout === 'auto') {
        timer.current = setTimeout(next, autoTimeout.current || 0);
      }
    };

    react.exports.useEffect(function () {
      return function () {
        clearTimeout(timer.current);
      };
    }, []);
    return /*#__PURE__*/ react.exports.createElement(
      TransitionComponent,
      _extends$2(
        {
          appear: true,
          in: inProp,
          nodeRef: enableStrictModeCompat ? nodeRef : undefined,
          onEnter: handleEnter,
          onEntered: handleEntered,
          onEntering: handleEntering,
          onExit: handleExit,
          onExited: handleExited,
          onExiting: handleExiting,
          addEndListener: addEndListener,
          timeout: timeout === 'auto' ? null : timeout,
        },
        other,
      ),
      function (state, childProps) {
        return /*#__PURE__*/ react.exports.cloneElement(
          children,
          _extends$2(
            {
              style: _extends$2(
                {
                  opacity: 0,
                  transform: getScale(0.75),
                  visibility:
                    state === 'exited' && !inProp ? 'hidden' : undefined,
                },
                styles$c[state],
                style,
                children.props.style,
              ),
              ref: handleRef,
            },
            childProps,
          ),
        );
      },
    );
  });
  Grow.muiSupportAuto = true;

  var styles$b = function styles(theme) {
    var light = theme.palette.type === 'light';
    var bottomLineColor = light
      ? 'rgba(0, 0, 0, 0.42)'
      : 'rgba(255, 255, 255, 0.7)';
    return {
      /* Styles applied to the root element. */
      root: {
        position: 'relative',
      },

      /* Styles applied to the root element if the component is a descendant of `FormControl`. */
      formControl: {
        'label + &': {
          marginTop: 16,
        },
      },

      /* Styles applied to the root element if the component is focused. */
      focused: {},

      /* Styles applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if color secondary. */
      colorSecondary: {
        '&$underline:after': {
          borderBottomColor: theme.palette.secondary.main,
        },
      },

      /* Styles applied to the root element if `disableUnderline={false}`. */
      underline: {
        '&:after': {
          borderBottom: '2px solid '.concat(theme.palette.primary.main),
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: 'absolute',
          right: 0,
          transform: 'scaleX(0)',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut,
          }),
          pointerEvents: 'none', // Transparent to the hover style.
        },
        '&$focused:after': {
          transform: 'scaleX(1)',
        },
        '&$error:after': {
          borderBottomColor: theme.palette.error.main,
          transform: 'scaleX(1)', // error is always underlined in red
        },
        '&:before': {
          borderBottom: '1px solid '.concat(bottomLineColor),
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: 'absolute',
          right: 0,
          transition: theme.transitions.create('border-bottom-color', {
            duration: theme.transitions.duration.shorter,
          }),
          pointerEvents: 'none', // Transparent to the hover style.
        },
        '&:hover:not($disabled):before': {
          borderBottom: '2px solid '.concat(theme.palette.text.primary),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            borderBottom: '1px solid '.concat(bottomLineColor),
          },
        },
        '&$disabled:before': {
          borderBottomStyle: 'dotted',
        },
      },

      /* Pseudo-class applied to the root element if `error={true}`. */
      error: {},

      /* Styles applied to the `input` element if `margin="dense"`. */
      marginDense: {},

      /* Styles applied to the root element if `multiline={true}`. */
      multiline: {},

      /* Styles applied to the root element if `fullWidth={true}`. */
      fullWidth: {},

      /* Styles applied to the `input` element. */
      input: {},

      /* Styles applied to the `input` element if `margin="dense"`. */
      inputMarginDense: {},

      /* Styles applied to the `input` element if `multiline={true}`. */
      inputMultiline: {},

      /* Styles applied to the `input` element if `type="search"`. */
      inputTypeSearch: {},
    };
  };
  var Input = /*#__PURE__*/ react.exports.forwardRef(function Input(
    props,
    ref,
  ) {
    var disableUnderline = props.disableUnderline,
      classes = props.classes,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$inputComponent = props.inputComponent,
      inputComponent =
        _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      other = _objectWithoutProperties(props, [
        'disableUnderline',
        'classes',
        'fullWidth',
        'inputComponent',
        'multiline',
        'type',
      ]);

    return /*#__PURE__*/ react.exports.createElement(
      InputBase$1,
      _extends$2(
        {
          classes: _extends$2({}, classes, {
            root: clsx(classes.root, !disableUnderline && classes.underline),
            underline: null,
          }),
          fullWidth: fullWidth,
          inputComponent: inputComponent,
          multiline: multiline,
          ref: ref,
          type: type,
        },
        other,
      ),
    );
  });
  Input.muiName = 'Input';
  var Input$1 = withStyles(styles$b, {
    name: 'MuiInput',
  })(Input);

  var styles$a = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        display: 'block',
        transformOrigin: 'top left',
      },

      /* Pseudo-class applied to the root element if `focused={true}`. */
      focused: {},

      /* Pseudo-class applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Pseudo-class applied to the root element if `error={true}`. */
      error: {},

      /* Pseudo-class applied to the root element if `required={true}`. */
      required: {},

      /* Pseudo-class applied to the asterisk element. */
      asterisk: {},

      /* Styles applied to the root element if the component is a descendant of `FormControl`. */
      formControl: {
        position: 'absolute',
        left: 0,
        top: 0,
        // slight alteration to spec spacing to match visual spec result
        transform: 'translate(0, 24px) scale(1)',
      },

      /* Styles applied to the root element if `margin="dense"`. */
      marginDense: {
        // Compensation for the `Input.inputDense` style.
        transform: 'translate(0, 21px) scale(1)',
      },

      /* Styles applied to the `input` element if `shrink={true}`. */
      shrink: {
        transform: 'translate(0, 1.5px) scale(0.75)',
        transformOrigin: 'top left',
      },

      /* Styles applied to the `input` element if `disableAnimation={false}`. */
      animated: {
        transition: theme.transitions.create(['color', 'transform'], {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut,
        }),
      },

      /* Styles applied to the root element if `variant="filled"`. */
      filled: {
        // Chrome's autofill feature gives the input field a yellow background.
        // Since the input field is behind the label in the HTML tree,
        // the input field is drawn last and hides the label with an opaque background color.
        // zIndex: 1 will raise the label above opaque background-colors of input.
        zIndex: 1,
        pointerEvents: 'none',
        transform: 'translate(12px, 20px) scale(1)',
        '&$marginDense': {
          transform: 'translate(12px, 17px) scale(1)',
        },
        '&$shrink': {
          transform: 'translate(12px, 10px) scale(0.75)',
          '&$marginDense': {
            transform: 'translate(12px, 7px) scale(0.75)',
          },
        },
      },

      /* Styles applied to the root element if `variant="outlined"`. */
      outlined: {
        // see comment above on filled.zIndex
        zIndex: 1,
        pointerEvents: 'none',
        transform: 'translate(14px, 20px) scale(1)',
        '&$marginDense': {
          transform: 'translate(14px, 12px) scale(1)',
        },
        '&$shrink': {
          transform: 'translate(14px, -6px) scale(0.75)',
        },
      },
    };
  };
  var InputLabel = /*#__PURE__*/ react.exports.forwardRef(function InputLabel(
    props,
    ref,
  ) {
    var classes = props.classes,
      className = props.className,
      _props$disableAnimati = props.disableAnimation,
      disableAnimation =
        _props$disableAnimati === void 0 ? false : _props$disableAnimati;
    props.margin;
    var shrinkProp = props.shrink;
    props.variant;
    var other = _objectWithoutProperties(props, [
      'classes',
      'className',
      'disableAnimation',
      'margin',
      'shrink',
      'variant',
    ]);

    var muiFormControl = useFormControl();
    var shrink = shrinkProp;

    if (typeof shrink === 'undefined' && muiFormControl) {
      shrink =
        muiFormControl.filled ||
        muiFormControl.focused ||
        muiFormControl.adornedStart;
    }

    var fcs = formControlState({
      props: props,
      muiFormControl: muiFormControl,
      states: ['margin', 'variant'],
    });
    return /*#__PURE__*/ react.exports.createElement(
      FormLabel$1,
      _extends$2(
        {
          'data-shrink': shrink,
          className: clsx(
            classes.root,
            className,
            muiFormControl && classes.formControl,
            !disableAnimation && classes.animated,
            shrink && classes.shrink,
            fcs.margin === 'dense' && classes.marginDense,
            {
              filled: classes.filled,
              outlined: classes.outlined,
            }[fcs.variant],
          ),
          classes: {
            focused: classes.focused,
            disabled: classes.disabled,
            error: classes.error,
            required: classes.required,
            asterisk: classes.asterisk,
          },
          ref: ref,
        },
        other,
      ),
    );
  });
  var InputLabel$1 = withStyles(styles$a, {
    name: 'MuiInputLabel',
  })(InputLabel);

  /**
   * @ignore - internal component.
   */

  var ListContext = react.exports.createContext({});

  var styles$9 = {
    /* Styles applied to the root element. */
    root: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      position: 'relative',
    },

    /* Styles applied to the root element if `disablePadding={false}`. */
    padding: {
      paddingTop: 8,
      paddingBottom: 8,
    },

    /* Styles applied to the root element if dense. */
    dense: {},

    /* Styles applied to the root element if a `subheader` is provided. */
    subheader: {
      paddingTop: 0,
    },
  };
  var List = /*#__PURE__*/ react.exports.forwardRef(function List(props, ref) {
    var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'ul' : _props$component,
      _props$dense = props.dense,
      dense = _props$dense === void 0 ? false : _props$dense,
      _props$disablePadding = props.disablePadding,
      disablePadding =
        _props$disablePadding === void 0 ? false : _props$disablePadding,
      subheader = props.subheader,
      other = _objectWithoutProperties(props, [
        'children',
        'classes',
        'className',
        'component',
        'dense',
        'disablePadding',
        'subheader',
      ]);

    var context = react.exports.useMemo(
      function () {
        return {
          dense: dense,
        };
      },
      [dense],
    );
    return /*#__PURE__*/ react.exports.createElement(
      ListContext.Provider,
      {
        value: context,
      },
      /*#__PURE__*/ react.exports.createElement(
        Component,
        _extends$2(
          {
            className: clsx(
              classes.root,
              className,
              dense && classes.dense,
              !disablePadding && classes.padding,
              subheader && classes.subheader,
            ),
            ref: ref,
          },
          other,
        ),
        subheader,
        children,
      ),
    );
  });
  var List$1 = withStyles(styles$9, {
    name: 'MuiList',
  })(List);

  function getOffsetTop(rect, vertical) {
    var offset = 0;

    if (typeof vertical === 'number') {
      offset = vertical;
    } else if (vertical === 'center') {
      offset = rect.height / 2;
    } else if (vertical === 'bottom') {
      offset = rect.height;
    }

    return offset;
  }
  function getOffsetLeft(rect, horizontal) {
    var offset = 0;

    if (typeof horizontal === 'number') {
      offset = horizontal;
    } else if (horizontal === 'center') {
      offset = rect.width / 2;
    } else if (horizontal === 'right') {
      offset = rect.width;
    }

    return offset;
  }

  function getTransformOriginValue(transformOrigin) {
    return [transformOrigin.horizontal, transformOrigin.vertical]
      .map(function (n) {
        return typeof n === 'number' ? ''.concat(n, 'px') : n;
      })
      .join(' ');
  } // Sum the scrollTop between two elements.

  function getScrollParent$1(parent, child) {
    var element = child;
    var scrollTop = 0;

    while (element && element !== parent) {
      element = element.parentElement;
      scrollTop += element.scrollTop;
    }

    return scrollTop;
  }

  function getAnchorEl$1(anchorEl) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
  }

  var styles$8 = {
    /* Styles applied to the root element. */
    root: {},

    /* Styles applied to the `Paper` component. */
    paper: {
      position: 'absolute',
      overflowY: 'auto',
      overflowX: 'hidden',
      // So we see the popover when it's empty.
      // It's most likely on issue on userland.
      minWidth: 16,
      minHeight: 16,
      maxWidth: 'calc(100% - 32px)',
      maxHeight: 'calc(100% - 32px)',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
    },
  };
  var Popover = /*#__PURE__*/ react.exports.forwardRef(function Popover(
    props,
    ref,
  ) {
    var action = props.action,
      anchorEl = props.anchorEl,
      _props$anchorOrigin = props.anchorOrigin,
      anchorOrigin =
        _props$anchorOrigin === void 0
          ? {
              vertical: 'top',
              horizontal: 'left',
            }
          : _props$anchorOrigin,
      anchorPosition = props.anchorPosition,
      _props$anchorReferenc = props.anchorReference,
      anchorReference =
        _props$anchorReferenc === void 0 ? 'anchorEl' : _props$anchorReferenc,
      children = props.children,
      classes = props.classes,
      className = props.className,
      containerProp = props.container,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 8 : _props$elevation,
      getContentAnchorEl = props.getContentAnchorEl,
      _props$marginThreshol = props.marginThreshold,
      marginThreshold =
        _props$marginThreshol === void 0 ? 16 : _props$marginThreshol,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      open = props.open,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      _props$transformOrigi = props.transformOrigin,
      transformOrigin =
        _props$transformOrigi === void 0
          ? {
              vertical: 'top',
              horizontal: 'left',
            }
          : _props$transformOrigi,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent =
        _props$TransitionComp === void 0 ? Grow : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDurationProp =
        _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
      _props$TransitionProp = props.TransitionProps,
      TransitionProps =
        _props$TransitionProp === void 0 ? {} : _props$TransitionProp,
      other = _objectWithoutProperties(props, [
        'action',
        'anchorEl',
        'anchorOrigin',
        'anchorPosition',
        'anchorReference',
        'children',
        'classes',
        'className',
        'container',
        'elevation',
        'getContentAnchorEl',
        'marginThreshold',
        'onEnter',
        'onEntered',
        'onEntering',
        'onExit',
        'onExited',
        'onExiting',
        'open',
        'PaperProps',
        'transformOrigin',
        'TransitionComponent',
        'transitionDuration',
        'TransitionProps',
      ]);

    var paperRef = react.exports.useRef(); // Returns the top/left offset of the position
    // to attach to on the anchor element (or body if none is provided)

    var getAnchorOffset = react.exports.useCallback(
      function (contentAnchorOffset) {
        if (anchorReference === 'anchorPosition') {
          return anchorPosition;
        }

        var resolvedAnchorEl = getAnchorEl$1(anchorEl); // If an anchor element wasn't provided, just use the parent body element of this Popover

        var anchorElement =
          resolvedAnchorEl && resolvedAnchorEl.nodeType === 1
            ? resolvedAnchorEl
            : ownerDocument(paperRef.current).body;
        var anchorRect = anchorElement.getBoundingClientRect();

        var anchorVertical =
          contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';
        return {
          top: anchorRect.top + getOffsetTop(anchorRect, anchorVertical),
          left:
            anchorRect.left +
            getOffsetLeft(anchorRect, anchorOrigin.horizontal),
        };
      },
      [
        anchorEl,
        anchorOrigin.horizontal,
        anchorOrigin.vertical,
        anchorPosition,
        anchorReference,
      ],
    ); // Returns the vertical offset of inner content to anchor the transform on if provided

    var getContentAnchorOffset = react.exports.useCallback(
      function (element) {
        var contentAnchorOffset = 0;

        if (getContentAnchorEl && anchorReference === 'anchorEl') {
          var contentAnchorEl = getContentAnchorEl(element);

          if (contentAnchorEl && element.contains(contentAnchorEl)) {
            var scrollTop = getScrollParent$1(element, contentAnchorEl);
            contentAnchorOffset =
              contentAnchorEl.offsetTop +
                contentAnchorEl.clientHeight / 2 -
                scrollTop || 0;
          } // != the default value
        }

        return contentAnchorOffset;
      },
      [anchorOrigin.vertical, anchorReference, getContentAnchorEl],
    ); // Return the base transform origin using the element
    // and taking the content anchor offset into account if in use

    var getTransformOrigin = react.exports.useCallback(
      function (elemRect) {
        var contentAnchorOffset =
          arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return {
          vertical:
            getOffsetTop(elemRect, transformOrigin.vertical) +
            contentAnchorOffset,
          horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal),
        };
      },
      [transformOrigin.horizontal, transformOrigin.vertical],
    );
    var getPositioningStyle = react.exports.useCallback(
      function (element) {
        // Check if the parent has requested anchoring on an inner content node
        var contentAnchorOffset = getContentAnchorOffset(element);
        var elemRect = {
          width: element.offsetWidth,
          height: element.offsetHeight,
        }; // Get the transform origin point on the element itself

        var elemTransformOrigin = getTransformOrigin(
          elemRect,
          contentAnchorOffset,
        );

        if (anchorReference === 'none') {
          return {
            top: null,
            left: null,
            transformOrigin: getTransformOriginValue(elemTransformOrigin),
          };
        } // Get the offset of of the anchoring element

        var anchorOffset = getAnchorOffset(contentAnchorOffset); // Calculate element positioning

        var top = anchorOffset.top - elemTransformOrigin.vertical;
        var left = anchorOffset.left - elemTransformOrigin.horizontal;
        var bottom = top + elemRect.height;
        var right = left + elemRect.width; // Use the parent window of the anchorEl if provided

        var containerWindow = ownerWindow(getAnchorEl$1(anchorEl)); // Window thresholds taking required margin into account

        var heightThreshold = containerWindow.innerHeight - marginThreshold;
        var widthThreshold = containerWindow.innerWidth - marginThreshold; // Check if the vertical axis needs shifting

        if (top < marginThreshold) {
          var diff = top - marginThreshold;
          top -= diff;
          elemTransformOrigin.vertical += diff;
        } else if (bottom > heightThreshold) {
          var _diff = bottom - heightThreshold;

          top -= _diff;
          elemTransformOrigin.vertical += _diff;
        }

        if (left < marginThreshold) {
          var _diff2 = left - marginThreshold;

          left -= _diff2;
          elemTransformOrigin.horizontal += _diff2;
        } else if (right > widthThreshold) {
          var _diff3 = right - widthThreshold;

          left -= _diff3;
          elemTransformOrigin.horizontal += _diff3;
        }

        return {
          top: ''.concat(Math.round(top), 'px'),
          left: ''.concat(Math.round(left), 'px'),
          transformOrigin: getTransformOriginValue(elemTransformOrigin),
        };
      },
      [
        anchorEl,
        anchorReference,
        getAnchorOffset,
        getContentAnchorOffset,
        getTransformOrigin,
        marginThreshold,
      ],
    );
    var setPositioningStyles = react.exports.useCallback(
      function () {
        var element = paperRef.current;

        if (!element) {
          return;
        }

        var positioning = getPositioningStyle(element);

        if (positioning.top !== null) {
          element.style.top = positioning.top;
        }

        if (positioning.left !== null) {
          element.style.left = positioning.left;
        }

        element.style.transformOrigin = positioning.transformOrigin;
      },
      [getPositioningStyle],
    );

    var handleEntering = function handleEntering(element, isAppearing) {
      if (onEntering) {
        onEntering(element, isAppearing);
      }

      setPositioningStyles();
    };

    var handlePaperRef = react.exports.useCallback(function (instance) {
      // #StrictMode ready
      paperRef.current = reactDom.exports.findDOMNode(instance);
    }, []);
    react.exports.useEffect(function () {
      if (open) {
        setPositioningStyles();
      }
    });
    react.exports.useImperativeHandle(
      action,
      function () {
        return open
          ? {
              updatePosition: function updatePosition() {
                setPositioningStyles();
              },
            }
          : null;
      },
      [open, setPositioningStyles],
    );
    react.exports.useEffect(
      function () {
        if (!open) {
          return undefined;
        }

        var handleResize = debounce$1(function () {
          setPositioningStyles();
        });
        window.addEventListener('resize', handleResize);
        return function () {
          handleResize.clear();
          window.removeEventListener('resize', handleResize);
        };
      },
      [open, setPositioningStyles],
    );
    var transitionDuration = transitionDurationProp;

    if (
      transitionDurationProp === 'auto' &&
      !TransitionComponent.muiSupportAuto
    ) {
      transitionDuration = undefined;
    } // If the container prop is provided, use that
    // If the anchorEl prop is provided, use its parent body element as the container
    // If neither are provided let the Modal take care of choosing the container

    var container =
      containerProp ||
      (anchorEl ? ownerDocument(getAnchorEl$1(anchorEl)).body : undefined);
    return /*#__PURE__*/ react.exports.createElement(
      Modal,
      _extends$2(
        {
          container: container,
          open: open,
          ref: ref,
          BackdropProps: {
            invisible: true,
          },
          className: clsx(classes.root, className),
        },
        other,
      ),
      /*#__PURE__*/ react.exports.createElement(
        TransitionComponent,
        _extends$2(
          {
            appear: true,
            in: open,
            onEnter: onEnter,
            onEntered: onEntered,
            onExit: onExit,
            onExited: onExited,
            onExiting: onExiting,
            timeout: transitionDuration,
          },
          TransitionProps,
          {
            onEntering: createChainedFunction(
              handleEntering,
              TransitionProps.onEntering,
            ),
          },
        ),
        /*#__PURE__*/ react.exports.createElement(
          Paper$1,
          _extends$2(
            {
              elevation: elevation,
              ref: handlePaperRef,
            },
            PaperProps,
            {
              className: clsx(classes.paper, PaperProps.className),
            },
          ),
          children,
        ),
      ),
    );
  });
  var Popover$1 = withStyles(styles$8, {
    name: 'MuiPopover',
  })(Popover);

  function nextItem(list, item, disableListWrap) {
    if (list === item) {
      return list.firstChild;
    }

    if (item && item.nextElementSibling) {
      return item.nextElementSibling;
    }

    return disableListWrap ? null : list.firstChild;
  }

  function previousItem(list, item, disableListWrap) {
    if (list === item) {
      return disableListWrap ? list.firstChild : list.lastChild;
    }

    if (item && item.previousElementSibling) {
      return item.previousElementSibling;
    }

    return disableListWrap ? null : list.lastChild;
  }

  function textCriteriaMatches(nextFocus, textCriteria) {
    if (textCriteria === undefined) {
      return true;
    }

    var text = nextFocus.innerText;

    if (text === undefined) {
      // jsdom doesn't support innerText
      text = nextFocus.textContent;
    }

    text = text.trim().toLowerCase();

    if (text.length === 0) {
      return false;
    }

    if (textCriteria.repeating) {
      return text[0] === textCriteria.keys[0];
    }

    return text.indexOf(textCriteria.keys.join('')) === 0;
  }

  function moveFocus(
    list,
    currentFocus,
    disableListWrap,
    disabledItemsFocusable,
    traversalFunction,
    textCriteria,
  ) {
    var wrappedOnce = false;
    var nextFocus = traversalFunction(
      list,
      currentFocus,
      currentFocus ? disableListWrap : false,
    );

    while (nextFocus) {
      // Prevent infinite loop.
      if (nextFocus === list.firstChild) {
        if (wrappedOnce) {
          return;
        }

        wrappedOnce = true;
      } // Same logic as useAutocomplete.js

      var nextFocusDisabled = disabledItemsFocusable
        ? false
        : nextFocus.disabled ||
          nextFocus.getAttribute('aria-disabled') === 'true';

      if (
        !nextFocus.hasAttribute('tabindex') ||
        !textCriteriaMatches(nextFocus, textCriteria) ||
        nextFocusDisabled
      ) {
        // Move to the next element.
        nextFocus = traversalFunction(list, nextFocus, disableListWrap);
      } else {
        nextFocus.focus();
        return;
      }
    }
  }

  var useEnhancedEffect$1 =
    typeof window === 'undefined'
      ? react.exports.useEffect
      : react.exports.useLayoutEffect;
  /**
   * A permanently displayed menu following https://www.w3.org/TR/wai-aria-practices/#menubutton.
   * It's exposed to help customization of the [`Menu`](/api/menu/) component. If you
   * use it separately you need to move focus into the component manually. Once
   * the focus is placed inside the component it is fully keyboard accessible.
   */

  var MenuList = /*#__PURE__*/ react.exports.forwardRef(function MenuList(
    props,
    ref,
  ) {
    var actions = props.actions,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      _props$autoFocusItem = props.autoFocusItem,
      autoFocusItem =
        _props$autoFocusItem === void 0 ? false : _props$autoFocusItem,
      children = props.children,
      className = props.className,
      _props$disabledItemsF = props.disabledItemsFocusable,
      disabledItemsFocusable =
        _props$disabledItemsF === void 0 ? false : _props$disabledItemsF,
      _props$disableListWra = props.disableListWrap,
      disableListWrap =
        _props$disableListWra === void 0 ? false : _props$disableListWra,
      onKeyDown = props.onKeyDown,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'selectedMenu' : _props$variant,
      other = _objectWithoutProperties(props, [
        'actions',
        'autoFocus',
        'autoFocusItem',
        'children',
        'className',
        'disabledItemsFocusable',
        'disableListWrap',
        'onKeyDown',
        'variant',
      ]);

    var listRef = react.exports.useRef(null);
    var textCriteriaRef = react.exports.useRef({
      keys: [],
      repeating: true,
      previousKeyMatched: true,
      lastTime: null,
    });
    useEnhancedEffect$1(
      function () {
        if (autoFocus) {
          listRef.current.focus();
        }
      },
      [autoFocus],
    );
    react.exports.useImperativeHandle(
      actions,
      function () {
        return {
          adjustStyleForScrollbar: function adjustStyleForScrollbar(
            containerElement,
            theme,
          ) {
            // Let's ignore that piece of logic if users are already overriding the width
            // of the menu.
            var noExplicitWidth = !listRef.current.style.width;

            if (
              containerElement.clientHeight < listRef.current.clientHeight &&
              noExplicitWidth
            ) {
              var scrollbarSize = ''.concat(getScrollbarSize(), 'px');
              listRef.current.style[
                theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'
              ] = scrollbarSize;
              listRef.current.style.width = 'calc(100% + '.concat(
                scrollbarSize,
                ')',
              );
            }

            return listRef.current;
          },
        };
      },
      [],
    );

    var handleKeyDown = function handleKeyDown(event) {
      var list = listRef.current;
      var key = event.key;
      /**
       * @type {Element} - will always be defined since we are in a keydown handler
       * attached to an element. A keydown event is either dispatched to the activeElement
       * or document.body or document.documentElement. Only the first case will
       * trigger this specific handler.
       */

      var currentFocus = ownerDocument(list).activeElement;

      if (key === 'ArrowDown') {
        // Prevent scroll of the page
        event.preventDefault();
        moveFocus(
          list,
          currentFocus,
          disableListWrap,
          disabledItemsFocusable,
          nextItem,
        );
      } else if (key === 'ArrowUp') {
        event.preventDefault();
        moveFocus(
          list,
          currentFocus,
          disableListWrap,
          disabledItemsFocusable,
          previousItem,
        );
      } else if (key === 'Home') {
        event.preventDefault();
        moveFocus(
          list,
          null,
          disableListWrap,
          disabledItemsFocusable,
          nextItem,
        );
      } else if (key === 'End') {
        event.preventDefault();
        moveFocus(
          list,
          null,
          disableListWrap,
          disabledItemsFocusable,
          previousItem,
        );
      } else if (key.length === 1) {
        var criteria = textCriteriaRef.current;
        var lowerKey = key.toLowerCase();
        var currTime = performance.now();

        if (criteria.keys.length > 0) {
          // Reset
          if (currTime - criteria.lastTime > 500) {
            criteria.keys = [];
            criteria.repeating = true;
            criteria.previousKeyMatched = true;
          } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
            criteria.repeating = false;
          }
        }

        criteria.lastTime = currTime;
        criteria.keys.push(lowerKey);
        var keepFocusOnCurrent =
          currentFocus &&
          !criteria.repeating &&
          textCriteriaMatches(currentFocus, criteria);

        if (
          criteria.previousKeyMatched &&
          (keepFocusOnCurrent ||
            moveFocus(
              list,
              currentFocus,
              false,
              disabledItemsFocusable,
              nextItem,
              criteria,
            ))
        ) {
          event.preventDefault();
        } else {
          criteria.previousKeyMatched = false;
        }
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    };

    var handleOwnRef = react.exports.useCallback(function (instance) {
      // #StrictMode ready
      listRef.current = reactDom.exports.findDOMNode(instance);
    }, []);
    var handleRef = useForkRef(handleOwnRef, ref);
    /**
     * the index of the item should receive focus
     * in a `variant="selectedMenu"` it's the first `selected` item
     * otherwise it's the very first item.
     */

    var activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
    // to check if there is a `selected` item. We're looking for the last `selected`
    // item and use the first valid item as a fallback

    react.exports.Children.forEach(children, function (child, index) {
      if (!(/*#__PURE__*/ react.exports.isValidElement(child))) {
        return;
      }

      if (!child.props.disabled) {
        if (variant === 'selectedMenu' && child.props.selected) {
          activeItemIndex = index;
        } else if (activeItemIndex === -1) {
          activeItemIndex = index;
        }
      }
    });
    var items = react.exports.Children.map(children, function (child, index) {
      if (index === activeItemIndex) {
        var newChildProps = {};

        if (autoFocusItem) {
          newChildProps.autoFocus = true;
        }

        if (child.props.tabIndex === undefined && variant === 'selectedMenu') {
          newChildProps.tabIndex = 0;
        }

        return /*#__PURE__*/ react.exports.cloneElement(child, newChildProps);
      }

      return child;
    });
    return /*#__PURE__*/ react.exports.createElement(
      List$1,
      _extends$2(
        {
          role: 'menu',
          ref: handleRef,
          className: className,
          onKeyDown: handleKeyDown,
          tabIndex: autoFocus ? 0 : -1,
        },
        other,
      ),
      items,
    );
  });

  var RTL_ORIGIN = {
    vertical: 'top',
    horizontal: 'right',
  };
  var LTR_ORIGIN = {
    vertical: 'top',
    horizontal: 'left',
  };
  var styles$7 = {
    /* Styles applied to the `Paper` component. */
    paper: {
      // specZ: The maximum height of a simple menu should be one or more rows less than the view
      // height. This ensures a tapable area outside of the simple menu with which to dismiss
      // the menu.
      maxHeight: 'calc(100% - 96px)',
      // Add iOS momentum scrolling.
      WebkitOverflowScrolling: 'touch',
    },

    /* Styles applied to the `List` component via `MenuList`. */
    list: {
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
    },
  };
  var Menu = /*#__PURE__*/ react.exports.forwardRef(function Menu(props, ref) {
    var _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? true : _props$autoFocus,
      children = props.children,
      classes = props.classes,
      _props$disableAutoFoc = props.disableAutoFocusItem,
      disableAutoFocusItem =
        _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$MenuListProps = props.MenuListProps,
      MenuListProps =
        _props$MenuListProps === void 0 ? {} : _props$MenuListProps,
      onClose = props.onClose,
      onEnteringProp = props.onEntering,
      open = props.open,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      PopoverClasses = props.PopoverClasses,
      _props$transitionDura = props.transitionDuration,
      transitionDuration =
        _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
      _props$TransitionProp = props.TransitionProps;
    _props$TransitionProp =
      _props$TransitionProp === void 0 ? {} : _props$TransitionProp;

    var onEntering = _props$TransitionProp.onEntering,
      TransitionProps = _objectWithoutProperties(_props$TransitionProp, [
        'onEntering',
      ]),
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'selectedMenu' : _props$variant,
      other = _objectWithoutProperties(props, [
        'autoFocus',
        'children',
        'classes',
        'disableAutoFocusItem',
        'MenuListProps',
        'onClose',
        'onEntering',
        'open',
        'PaperProps',
        'PopoverClasses',
        'transitionDuration',
        'TransitionProps',
        'variant',
      ]);

    var theme = useTheme();
    var autoFocusItem = autoFocus && !disableAutoFocusItem && open;
    var menuListActionsRef = react.exports.useRef(null);
    var contentAnchorRef = react.exports.useRef(null);

    var getContentAnchorEl = function getContentAnchorEl() {
      return contentAnchorRef.current;
    };

    var handleEntering = function handleEntering(element, isAppearing) {
      if (menuListActionsRef.current) {
        menuListActionsRef.current.adjustStyleForScrollbar(element, theme);
      }

      if (onEnteringProp) {
        onEnteringProp(element, isAppearing);
      }

      if (onEntering) {
        onEntering(element, isAppearing);
      }
    };

    var handleListKeyDown = function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();

        if (onClose) {
          onClose(event, 'tabKeyDown');
        }
      }
    };
    /**
     * the index of the item should receive focus
     * in a `variant="selectedMenu"` it's the first `selected` item
     * otherwise it's the very first item.
     */

    var activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
    // to check if there is a `selected` item. We're looking for the last `selected`
    // item and use the first valid item as a fallback

    react.exports.Children.map(children, function (child, index) {
      if (!(/*#__PURE__*/ react.exports.isValidElement(child))) {
        return;
      }

      if (!child.props.disabled) {
        if (variant !== 'menu' && child.props.selected) {
          activeItemIndex = index;
        } else if (activeItemIndex === -1) {
          activeItemIndex = index;
        }
      }
    });
    var items = react.exports.Children.map(children, function (child, index) {
      if (index === activeItemIndex) {
        return /*#__PURE__*/ react.exports.cloneElement(child, {
          ref: function ref(instance) {
            // #StrictMode ready
            contentAnchorRef.current = reactDom.exports.findDOMNode(instance);
            setRef(child.ref, instance);
          },
        });
      }

      return child;
    });
    return /*#__PURE__*/ react.exports.createElement(
      Popover$1,
      _extends$2(
        {
          getContentAnchorEl: getContentAnchorEl,
          classes: PopoverClasses,
          onClose: onClose,
          TransitionProps: _extends$2(
            {
              onEntering: handleEntering,
            },
            TransitionProps,
          ),
          anchorOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
          transformOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
          PaperProps: _extends$2({}, PaperProps, {
            classes: _extends$2({}, PaperProps.classes, {
              root: classes.paper,
            }),
          }),
          open: open,
          ref: ref,
          transitionDuration: transitionDuration,
        },
        other,
      ),
      /*#__PURE__*/ react.exports.createElement(
        MenuList,
        _extends$2(
          {
            onKeyDown: handleListKeyDown,
            actions: menuListActionsRef,
            autoFocus:
              autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
            autoFocusItem: autoFocusItem,
            variant: variant,
          },
          MenuListProps,
          {
            className: clsx(classes.list, MenuListProps.className),
          },
        ),
        items,
      ),
    );
  });
  var Menu$1 = withStyles(styles$7, {
    name: 'MuiMenu',
  })(Menu);

  /**
   * @ignore - internal component.
   */

  var NativeSelectInput = /*#__PURE__*/ react.exports.forwardRef(
    function NativeSelectInput(props, ref) {
      var classes = props.classes,
        className = props.className,
        disabled = props.disabled,
        IconComponent = props.IconComponent,
        inputRef = props.inputRef,
        _props$variant = props.variant,
        variant = _props$variant === void 0 ? 'standard' : _props$variant,
        other = _objectWithoutProperties(props, [
          'classes',
          'className',
          'disabled',
          'IconComponent',
          'inputRef',
          'variant',
        ]);

      return /*#__PURE__*/ react.exports.createElement(
        react.exports.Fragment,
        null,
        /*#__PURE__*/ react.exports.createElement(
          'select',
          _extends$2(
            {
              className: clsx(
                classes.root, // TODO v5: merge root and select
                classes.select,
                classes[variant],
                className,
                disabled && classes.disabled,
              ),
              disabled: disabled,
              ref: inputRef || ref,
            },
            other,
          ),
        ),
        props.multiple
          ? null
          : /*#__PURE__*/ react.exports.createElement(IconComponent, {
              className: clsx(
                classes.icon,
                classes['icon'.concat(capitalize(variant))],
                disabled && classes.disabled,
              ),
            }),
      );
    },
  );

  /**
   * @ignore - internal component.
   */

  var ArrowDropDownIcon = createSvgIcon$1(
    /*#__PURE__*/ react.exports.createElement('path', {
      d: 'M7 10l5 5 5-5z',
    }),
  );

  var styles$6 = function styles(theme) {
    return {
      /* Styles applied to the select component `root` class. */
      root: {},

      /* Styles applied to the select component `select` class. */
      select: {
        '-moz-appearance': 'none',
        // Reset
        '-webkit-appearance': 'none',
        // Reset
        // When interacting quickly, the text can end up selected.
        // Native select can't be selected either.
        userSelect: 'none',
        borderRadius: 0,
        // Reset
        minWidth: 16,
        // So it doesn't collapse.
        cursor: 'pointer',
        '&:focus': {
          // Show that it's not an text input
          backgroundColor:
            theme.palette.type === 'light'
              ? 'rgba(0, 0, 0, 0.05)'
              : 'rgba(255, 255, 255, 0.05)',
          borderRadius: 0, // Reset Chrome style
        },
        // Remove IE 11 arrow
        '&::-ms-expand': {
          display: 'none',
        },
        '&$disabled': {
          cursor: 'default',
        },
        '&[multiple]': {
          height: 'auto',
        },
        '&:not([multiple]) option, &:not([multiple]) optgroup': {
          backgroundColor: theme.palette.background.paper,
        },
        '&&': {
          paddingRight: 24,
        },
      },

      /* Styles applied to the select component if `variant="filled"`. */
      filled: {
        '&&': {
          paddingRight: 32,
        },
      },

      /* Styles applied to the select component if `variant="outlined"`. */
      outlined: {
        borderRadius: theme.shape.borderRadius,
        '&&': {
          paddingRight: 32,
        },
      },

      /* Styles applied to the select component `selectMenu` class. */
      selectMenu: {
        height: 'auto',
        // Resets for multpile select with chips
        minHeight: '1.1876em',
        // Required for select\text-field height consistency
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
      },

      /* Pseudo-class applied to the select component `disabled` class. */
      disabled: {},

      /* Styles applied to the icon component. */
      icon: {
        // We use a position absolute over a flexbox in order to forward the pointer events
        // to the input and to support wrapping tags..
        position: 'absolute',
        right: 0,
        top: 'calc(50% - 12px)',
        // Center vertically
        pointerEvents: 'none',
        // Don't block pointer events on the select under the icon.
        color: theme.palette.action.active,
        '&$disabled': {
          color: theme.palette.action.disabled,
        },
      },

      /* Styles applied to the icon component if the popup is open. */
      iconOpen: {
        transform: 'rotate(180deg)',
      },

      /* Styles applied to the icon component if `variant="filled"`. */
      iconFilled: {
        right: 7,
      },

      /* Styles applied to the icon component if `variant="outlined"`. */
      iconOutlined: {
        right: 7,
      },

      /* Styles applied to the underlying native input component. */
      nativeInput: {
        bottom: 0,
        left: 0,
        position: 'absolute',
        opacity: 0,
        pointerEvents: 'none',
        width: '100%',
      },
    };
  };
  var defaultInput = /*#__PURE__*/ react.exports.createElement(Input$1, null);
  /**
   * An alternative to `<Select native />` with a much smaller bundle size footprint.
   */

  var NativeSelect = /*#__PURE__*/ react.exports.forwardRef(
    function NativeSelect(props, ref) {
      var children = props.children,
        classes = props.classes,
        _props$IconComponent = props.IconComponent,
        IconComponent =
          _props$IconComponent === void 0
            ? ArrowDropDownIcon
            : _props$IconComponent,
        _props$input = props.input,
        input = _props$input === void 0 ? defaultInput : _props$input,
        inputProps = props.inputProps;
      props.variant;
      var other = _objectWithoutProperties(props, [
        'children',
        'classes',
        'IconComponent',
        'input',
        'inputProps',
        'variant',
      ]);

      var muiFormControl = useFormControl();
      var fcs = formControlState({
        props: props,
        muiFormControl: muiFormControl,
        states: ['variant'],
      });
      return /*#__PURE__*/ react.exports.cloneElement(
        input,
        _extends$2(
          {
            // Most of the logic is implemented in `NativeSelectInput`.
            // The `Select` component is a simple API wrapper to expose something better to play with.
            inputComponent: NativeSelectInput,
            inputProps: _extends$2(
              {
                children: children,
                classes: classes,
                IconComponent: IconComponent,
                variant: fcs.variant,
                type: undefined,
              },
              inputProps,
              input ? input.props.inputProps : {},
            ),
            ref: ref,
          },
          other,
        ),
      );
    },
  );
  NativeSelect.muiName = 'Select';
  withStyles(styles$6, {
    name: 'MuiNativeSelect',
  })(NativeSelect);

  var styles$5 = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        top: -5,
        left: 0,
        margin: 0,
        padding: '0 8px',
        pointerEvents: 'none',
        borderRadius: 'inherit',
        borderStyle: 'solid',
        borderWidth: 1,
        overflow: 'hidden',
      },

      /* Styles applied to the legend element when `labelWidth` is provided. */
      legend: {
        textAlign: 'left',
        padding: 0,
        lineHeight: '11px',
        // sync with `height` in `legend` styles
        transition: theme.transitions.create('width', {
          duration: 150,
          easing: theme.transitions.easing.easeOut,
        }),
      },

      /* Styles applied to the legend element. */
      legendLabelled: {
        display: 'block',
        width: 'auto',
        textAlign: 'left',
        padding: 0,
        height: 11,
        // sync with `lineHeight` in `legend` styles
        fontSize: '0.75em',
        visibility: 'hidden',
        maxWidth: 0.01,
        transition: theme.transitions.create('max-width', {
          duration: 50,
          easing: theme.transitions.easing.easeOut,
        }),
        '& > span': {
          paddingLeft: 5,
          paddingRight: 5,
          display: 'inline-block',
        },
      },

      /* Styles applied to the legend element is notched. */
      legendNotched: {
        maxWidth: 1000,
        transition: theme.transitions.create('max-width', {
          duration: 100,
          easing: theme.transitions.easing.easeOut,
          delay: 50,
        }),
      },
    };
  };
  /**
   * @ignore - internal component.
   */

  var NotchedOutline = /*#__PURE__*/ react.exports.forwardRef(
    function NotchedOutline(props, ref) {
      props.children;
      var classes = props.classes,
        className = props.className,
        label = props.label,
        labelWidthProp = props.labelWidth,
        notched = props.notched,
        style = props.style,
        other = _objectWithoutProperties(props, [
          'children',
          'classes',
          'className',
          'label',
          'labelWidth',
          'notched',
          'style',
        ]);

      var theme = useTheme();
      var align = theme.direction === 'rtl' ? 'right' : 'left';

      if (label !== undefined) {
        return /*#__PURE__*/ react.exports.createElement(
          'fieldset',
          _extends$2(
            {
              'aria-hidden': true,
              className: clsx(classes.root, className),
              ref: ref,
              style: style,
            },
            other,
          ),
          /*#__PURE__*/ react.exports.createElement(
            'legend',
            {
              className: clsx(
                classes.legendLabelled,
                notched && classes.legendNotched,
              ),
            },
            label
              ? /*#__PURE__*/ react.exports.createElement('span', null, label)
              : /*#__PURE__*/ react.exports.createElement('span', {
                  dangerouslySetInnerHTML: {
                    __html: '&#8203;',
                  },
                }),
          ),
        );
      }

      var labelWidth = labelWidthProp > 0 ? labelWidthProp * 0.75 + 8 : 0.01;
      return /*#__PURE__*/ react.exports.createElement(
        'fieldset',
        _extends$2(
          {
            'aria-hidden': true,
            style: _extends$2(
              _defineProperty({}, 'padding'.concat(capitalize(align)), 8),
              style,
            ),
            className: clsx(classes.root, className),
            ref: ref,
          },
          other,
        ),
        /*#__PURE__*/ react.exports.createElement(
          'legend',
          {
            className: classes.legend,
            style: {
              // IE 11: fieldset with legend does not render
              // a border radius. This maintains consistency
              // by always having a legend rendered
              width: notched ? labelWidth : 0.01,
            },
          },
          /*#__PURE__*/ react.exports.createElement('span', {
            dangerouslySetInnerHTML: {
              __html: '&#8203;',
            },
          }),
        ),
      );
    },
  );
  var NotchedOutline$1 = withStyles(styles$5, {
    name: 'PrivateNotchedOutline',
  })(NotchedOutline);

  var styles$4 = function styles(theme) {
    var borderColor =
      theme.palette.type === 'light'
        ? 'rgba(0, 0, 0, 0.23)'
        : 'rgba(255, 255, 255, 0.23)';
    return {
      /* Styles applied to the root element. */
      root: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        '&:hover $notchedOutline': {
          borderColor: theme.palette.text.primary,
        },
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          '&:hover $notchedOutline': {
            borderColor: borderColor,
          },
        },
        '&$focused $notchedOutline': {
          borderColor: theme.palette.primary.main,
          borderWidth: 2,
        },
        '&$error $notchedOutline': {
          borderColor: theme.palette.error.main,
        },
        '&$disabled $notchedOutline': {
          borderColor: theme.palette.action.disabled,
        },
      },

      /* Styles applied to the root element if the color is secondary. */
      colorSecondary: {
        '&$focused $notchedOutline': {
          borderColor: theme.palette.secondary.main,
        },
      },

      /* Styles applied to the root element if the component is focused. */
      focused: {},

      /* Styles applied to the root element if `disabled={true}`. */
      disabled: {},

      /* Styles applied to the root element if `startAdornment` is provided. */
      adornedStart: {
        paddingLeft: 14,
      },

      /* Styles applied to the root element if `endAdornment` is provided. */
      adornedEnd: {
        paddingRight: 14,
      },

      /* Pseudo-class applied to the root element if `error={true}`. */
      error: {},

      /* Styles applied to the `input` element if `margin="dense"`. */
      marginDense: {},

      /* Styles applied to the root element if `multiline={true}`. */
      multiline: {
        padding: '18.5px 14px',
        '&$marginDense': {
          paddingTop: 10.5,
          paddingBottom: 10.5,
        },
      },

      /* Styles applied to the `NotchedOutline` element. */
      notchedOutline: {
        borderColor: borderColor,
      },

      /* Styles applied to the `input` element. */
      input: {
        padding: '18.5px 14px',
        '&:-webkit-autofill': {
          WebkitBoxShadow:
            theme.palette.type === 'light' ? null : '0 0 0 100px #266798 inset',
          WebkitTextFillColor: theme.palette.type === 'light' ? null : '#fff',
          caretColor: theme.palette.type === 'light' ? null : '#fff',
          borderRadius: 'inherit',
        },
      },

      /* Styles applied to the `input` element if `margin="dense"`. */
      inputMarginDense: {
        paddingTop: 10.5,
        paddingBottom: 10.5,
      },

      /* Styles applied to the `input` element if `multiline={true}`. */
      inputMultiline: {
        padding: 0,
      },

      /* Styles applied to the `input` element if `startAdornment` is provided. */
      inputAdornedStart: {
        paddingLeft: 0,
      },

      /* Styles applied to the `input` element if `endAdornment` is provided. */
      inputAdornedEnd: {
        paddingRight: 0,
      },
    };
  };
  var OutlinedInput = /*#__PURE__*/ react.exports.forwardRef(
    function OutlinedInput(props, ref) {
      var classes = props.classes,
        _props$fullWidth = props.fullWidth,
        fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
        _props$inputComponent = props.inputComponent,
        inputComponent =
          _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
        label = props.label,
        _props$labelWidth = props.labelWidth,
        labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth,
        _props$multiline = props.multiline,
        multiline = _props$multiline === void 0 ? false : _props$multiline,
        notched = props.notched,
        _props$type = props.type,
        type = _props$type === void 0 ? 'text' : _props$type,
        other = _objectWithoutProperties(props, [
          'classes',
          'fullWidth',
          'inputComponent',
          'label',
          'labelWidth',
          'multiline',
          'notched',
          'type',
        ]);

      return /*#__PURE__*/ react.exports.createElement(
        InputBase$1,
        _extends$2(
          {
            renderSuffix: function renderSuffix(state) {
              return /*#__PURE__*/ react.exports.createElement(
                NotchedOutline$1,
                {
                  className: classes.notchedOutline,
                  label: label,
                  labelWidth: labelWidth,
                  notched:
                    typeof notched !== 'undefined'
                      ? notched
                      : Boolean(
                          state.startAdornment || state.filled || state.focused,
                        ),
                },
              );
            },
            classes: _extends$2({}, classes, {
              root: clsx(classes.root, classes.underline),
              notchedOutline: null,
            }),
            fullWidth: fullWidth,
            inputComponent: inputComponent,
            multiline: multiline,
            ref: ref,
            type: type,
          },
          other,
        ),
      );
    },
  );
  OutlinedInput.muiName = 'Input';
  var OutlinedInput$1 = withStyles(styles$4, {
    name: 'MuiOutlinedInput',
  })(OutlinedInput);

  /**!
   * @fileOverview Kickass library to create and place poppers near their reference elements.
   * @version 1.16.1-lts
   * @license
   * Copyright (c) 2016 Federico Zivolo and contributors
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   */
  var isBrowser =
    typeof window !== 'undefined' &&
    typeof document !== 'undefined' &&
    typeof navigator !== 'undefined';

  var timeoutDuration = (function () {
    var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
    for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
      if (
        isBrowser &&
        navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0
      ) {
        return 1;
      }
    }
    return 0;
  })();

  function microtaskDebounce(fn) {
    var called = false;
    return function () {
      if (called) {
        return;
      }
      called = true;
      window.Promise.resolve().then(function () {
        called = false;
        fn();
      });
    };
  }

  function taskDebounce(fn) {
    var scheduled = false;
    return function () {
      if (!scheduled) {
        scheduled = true;
        setTimeout(function () {
          scheduled = false;
          fn();
        }, timeoutDuration);
      }
    };
  }

  var supportsMicroTasks = isBrowser && window.Promise;

  /**
   * Create a debounced version of a method, that's asynchronously deferred
   * but called in the minimum time possible.
   *
   * @method
   * @memberof Popper.Utils
   * @argument {Function} fn
   * @returns {Function}
   */
  var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

  /**
   * Check if the given variable is a function
   * @method
   * @memberof Popper.Utils
   * @argument {Any} functionToCheck - variable to check
   * @returns {Boolean} answer to: is a function?
   */
  function isFunction$1(functionToCheck) {
    var getType = {};
    return (
      functionToCheck &&
      getType.toString.call(functionToCheck) === '[object Function]'
    );
  }

  /**
   * Get CSS computed property of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Eement} element
   * @argument {String} property
   */
  function getStyleComputedProperty(element, property) {
    if (element.nodeType !== 1) {
      return [];
    }
    // NOTE: 1 DOM access here
    var window = element.ownerDocument.defaultView;
    var css = window.getComputedStyle(element, null);
    return property ? css[property] : css;
  }

  /**
   * Returns the parentNode or the host of the element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} parent
   */
  function getParentNode(element) {
    if (element.nodeName === 'HTML') {
      return element;
    }
    return element.parentNode || element.host;
  }

  /**
   * Returns the scrolling parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} scroll parent
   */
  function getScrollParent(element) {
    // Return body, `getScroll` will take care to get the correct `scrollTop` from it
    if (!element) {
      return document.body;
    }

    switch (element.nodeName) {
      case 'HTML':
      case 'BODY':
        return element.ownerDocument.body;
      case '#document':
        return element.body;
    }

    // Firefox want us to check `-x` and `-y` variations as well

    var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      return element;
    }

    return getScrollParent(getParentNode(element));
  }

  /**
   * Returns the reference node of the reference object, or the reference object itself.
   * @method
   * @memberof Popper.Utils
   * @param {Element|Object} reference - the reference element (the popper will be relative to this)
   * @returns {Element} parent
   */
  function getReferenceNode(reference) {
    return reference && reference.referenceNode
      ? reference.referenceNode
      : reference;
  }

  var isIE11 =
    isBrowser && !!(window.MSInputMethodContext && document.documentMode);
  var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

  /**
   * Determines if the browser is Internet Explorer
   * @method
   * @memberof Popper.Utils
   * @param {Number} version to check
   * @returns {Boolean} isIE
   */
  function isIE(version) {
    if (version === 11) {
      return isIE11;
    }
    if (version === 10) {
      return isIE10;
    }
    return isIE11 || isIE10;
  }

  /**
   * Returns the offset parent of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} offset parent
   */
  function getOffsetParent(element) {
    if (!element) {
      return document.documentElement;
    }

    var noOffsetParent = isIE(10) ? document.body : null;

    // NOTE: 1 DOM access here
    var offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    while (offsetParent === noOffsetParent && element.nextElementSibling) {
      offsetParent = (element = element.nextElementSibling).offsetParent;
    }

    var nodeName = offsetParent && offsetParent.nodeName;

    if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
      return element
        ? element.ownerDocument.documentElement
        : document.documentElement;
    }

    // .offsetParent will return the closest TH, TD or TABLE in case
    // no offsetParent is present, I hate this job...
    if (
      ['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 &&
      getStyleComputedProperty(offsetParent, 'position') === 'static'
    ) {
      return getOffsetParent(offsetParent);
    }

    return offsetParent;
  }

  function isOffsetContainer(element) {
    var nodeName = element.nodeName;

    if (nodeName === 'BODY') {
      return false;
    }
    return (
      nodeName === 'HTML' ||
      getOffsetParent(element.firstElementChild) === element
    );
  }

  /**
   * Finds the root node (document, shadowDOM root) of the given element
   * @method
   * @memberof Popper.Utils
   * @argument {Element} node
   * @returns {Element} root node
   */
  function getRoot(node) {
    if (node.parentNode !== null) {
      return getRoot(node.parentNode);
    }

    return node;
  }

  /**
   * Finds the offset parent common to the two provided nodes
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element1
   * @argument {Element} element2
   * @returns {Element} common offset parent
   */
  function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
      return document.documentElement;
    }

    // Here we make sure to give as "start" the element that comes first in the DOM
    var order =
      element1.compareDocumentPosition(element2) &
      Node.DOCUMENT_POSITION_FOLLOWING;
    var start = order ? element1 : element2;
    var end = order ? element2 : element1;

    // Get common ancestor container
    var range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;

    // Both nodes are inside #document

    if (
      (element1 !== commonAncestorContainer &&
        element2 !== commonAncestorContainer) ||
      start.contains(end)
    ) {
      if (isOffsetContainer(commonAncestorContainer)) {
        return commonAncestorContainer;
      }

      return getOffsetParent(commonAncestorContainer);
    }

    // one of the nodes is inside shadowDOM, find which one
    var element1root = getRoot(element1);
    if (element1root.host) {
      return findCommonOffsetParent(element1root.host, element2);
    } else {
      return findCommonOffsetParent(element1, getRoot(element2).host);
    }
  }

  /**
   * Gets the scroll value of the given element in the given side (top and left)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {String} side `top` or `left`
   * @returns {number} amount of scrolled pixels
   */
  function getScroll(element) {
    var side =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

    var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    var nodeName = element.nodeName;

    if (nodeName === 'BODY' || nodeName === 'HTML') {
      var html = element.ownerDocument.documentElement;
      var scrollingElement = element.ownerDocument.scrollingElement || html;
      return scrollingElement[upperSide];
    }

    return element[upperSide];
  }

  /*
   * Sum or subtract the element scroll values (left and top) from a given rect object
   * @method
   * @memberof Popper.Utils
   * @param {Object} rect - Rect object you want to change
   * @param {HTMLElement} element - The element from the function reads the scroll values
   * @param {Boolean} subtract - set to true if you want to subtract the scroll values
   * @return {Object} rect - The modifier rect object
   */
  function includeScroll(rect, element) {
    var subtract =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var scrollTop = getScroll(element, 'top');
    var scrollLeft = getScroll(element, 'left');
    var modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
  }

  /*
   * Helper to detect borders of a given element
   * @method
   * @memberof Popper.Utils
   * @param {CSSStyleDeclaration} styles
   * Result of `getStyleComputedProperty` on the given element
   * @param {String} axis - `x` or `y`
   * @return {number} borders - The borders size of the given axis
   */

  function getBordersSize(styles, axis) {
    var sideA = axis === 'x' ? 'Left' : 'Top';
    var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

    return (
      parseFloat(styles['border' + sideA + 'Width']) +
      parseFloat(styles['border' + sideB + 'Width'])
    );
  }

  function getSize(axis, body, html, computedStyle) {
    return Math.max(
      body['offset' + axis],
      body['scroll' + axis],
      html['client' + axis],
      html['offset' + axis],
      html['scroll' + axis],
      isIE(10)
        ? parseInt(html['offset' + axis]) +
            parseInt(
              computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')],
            ) +
            parseInt(
              computedStyle[
                'margin' + (axis === 'Height' ? 'Bottom' : 'Right')
              ],
            )
        : 0,
    );
  }

  function getWindowSizes(document) {
    var body = document.body;
    var html = document.documentElement;
    var computedStyle = isIE(10) && getComputedStyle(html);

    return {
      height: getSize('Height', body, html, computedStyle),
      width: getSize('Width', body, html, computedStyle),
    };
  }

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  };

  var createClass = (function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();

  var defineProperty$1 = function (obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    } else {
      obj[key] = value;
    }

    return obj;
  };

  var _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  /**
   * Given element offsets, generate an output similar to getBoundingClientRect
   * @method
   * @memberof Popper.Utils
   * @argument {Object} offsets
   * @returns {Object} ClientRect like output
   */
  function getClientRect(offsets) {
    return _extends({}, offsets, {
      right: offsets.left + offsets.width,
      bottom: offsets.top + offsets.height,
    });
  }

  /**
   * Get bounding client rect of given element
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} element
   * @return {Object} client rect
   */
  function getBoundingClientRect(element) {
    var rect = {};

    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
      if (isIE(10)) {
        rect = element.getBoundingClientRect();
        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        rect.top += scrollTop;
        rect.left += scrollLeft;
        rect.bottom += scrollTop;
        rect.right += scrollLeft;
      } else {
        rect = element.getBoundingClientRect();
      }
    } catch (e) {}

    var result = {
      left: rect.left,
      top: rect.top,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top,
    };

    // subtract scrollbar size from sizes
    var sizes =
      element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
    var width = sizes.width || element.clientWidth || result.width;
    var height = sizes.height || element.clientHeight || result.height;

    var horizScrollbar = element.offsetWidth - width;
    var vertScrollbar = element.offsetHeight - height;

    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
      var styles = getStyleComputedProperty(element);
      horizScrollbar -= getBordersSize(styles, 'x');
      vertScrollbar -= getBordersSize(styles, 'y');

      result.width -= horizScrollbar;
      result.height -= vertScrollbar;
    }

    return getClientRect(result);
  }

  function getOffsetRectRelativeToArbitraryNode(children, parent) {
    var fixedPosition =
      arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var isIE10 = isIE(10);
    var isHTML = parent.nodeName === 'HTML';
    var childrenRect = getBoundingClientRect(children);
    var parentRect = getBoundingClientRect(parent);
    var scrollParent = getScrollParent(children);

    var styles = getStyleComputedProperty(parent);
    var borderTopWidth = parseFloat(styles.borderTopWidth);
    var borderLeftWidth = parseFloat(styles.borderLeftWidth);

    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
      parentRect.top = Math.max(parentRect.top, 0);
      parentRect.left = Math.max(parentRect.left, 0);
    }
    var offsets = getClientRect({
      top: childrenRect.top - parentRect.top - borderTopWidth,
      left: childrenRect.left - parentRect.left - borderLeftWidth,
      width: childrenRect.width,
      height: childrenRect.height,
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;

    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
      var marginTop = parseFloat(styles.marginTop);
      var marginLeft = parseFloat(styles.marginLeft);

      offsets.top -= borderTopWidth - marginTop;
      offsets.bottom -= borderTopWidth - marginTop;
      offsets.left -= borderLeftWidth - marginLeft;
      offsets.right -= borderLeftWidth - marginLeft;

      // Attach marginTop and marginLeft because in some circumstances we may need them
      offsets.marginTop = marginTop;
      offsets.marginLeft = marginLeft;
    }

    if (
      isIE10 && !fixedPosition
        ? parent.contains(scrollParent)
        : parent === scrollParent && scrollParent.nodeName !== 'BODY'
    ) {
      offsets = includeScroll(offsets, parent);
    }

    return offsets;
  }

  function getViewportOffsetRectRelativeToArtbitraryNode(element) {
    var excludeScroll =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var html = element.ownerDocument.documentElement;
    var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var width = Math.max(html.clientWidth, window.innerWidth || 0);
    var height = Math.max(html.clientHeight, window.innerHeight || 0);

    var scrollTop = !excludeScroll ? getScroll(html) : 0;
    var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

    var offset = {
      top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
      left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
      width: width,
      height: height,
    };

    return getClientRect(offset);
  }

  /**
   * Check if the given element is fixed or is inside a fixed parent
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @argument {Element} customContainer
   * @returns {Boolean} answer to "isFixed?"
   */
  function isFixed(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
      return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
      return true;
    }
    var parentNode = getParentNode(element);
    if (!parentNode) {
      return false;
    }
    return isFixed(parentNode);
  }

  /**
   * Finds the first parent of an element that has a transformed property defined
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Element} first transformed parent or documentElement
   */

  function getFixedPositionOffsetParent(element) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element || !element.parentElement || isIE()) {
      return document.documentElement;
    }
    var el = element.parentElement;
    while (el && getStyleComputedProperty(el, 'transform') === 'none') {
      el = el.parentElement;
    }
    return el || document.documentElement;
  }

  /**
   * Computed the boundaries limits and return them
   * @method
   * @memberof Popper.Utils
   * @param {HTMLElement} popper
   * @param {HTMLElement} reference
   * @param {number} padding
   * @param {HTMLElement} boundariesElement - Element used to define the boundaries
   * @param {Boolean} fixedPosition - Is in fixed position mode
   * @returns {Object} Coordinates of the boundaries
   */
  function getBoundaries(popper, reference, padding, boundariesElement) {
    var fixedPosition =
      arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    // NOTE: 1 DOM access here

    var boundaries = { top: 0, left: 0 };
    var offsetParent = fixedPosition
      ? getFixedPositionOffsetParent(popper)
      : findCommonOffsetParent(popper, getReferenceNode(reference));

    // Handle viewport case
    if (boundariesElement === 'viewport') {
      boundaries = getViewportOffsetRectRelativeToArtbitraryNode(
        offsetParent,
        fixedPosition,
      );
    } else {
      // Handle other cases based on DOM element used as boundaries
      var boundariesNode = void 0;
      if (boundariesElement === 'scrollParent') {
        boundariesNode = getScrollParent(getParentNode(reference));
        if (boundariesNode.nodeName === 'BODY') {
          boundariesNode = popper.ownerDocument.documentElement;
        }
      } else if (boundariesElement === 'window') {
        boundariesNode = popper.ownerDocument.documentElement;
      } else {
        boundariesNode = boundariesElement;
      }

      var offsets = getOffsetRectRelativeToArbitraryNode(
        boundariesNode,
        offsetParent,
        fixedPosition,
      );

      // In case of HTML, we need a different computation
      if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
        var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

        boundaries.top += offsets.top - offsets.marginTop;
        boundaries.bottom = height + offsets.top;
        boundaries.left += offsets.left - offsets.marginLeft;
        boundaries.right = width + offsets.left;
      } else {
        // for all the other DOM elements, this one is good
        boundaries = offsets;
      }
    }

    // Add paddings
    padding = padding || 0;
    var isPaddingNumber = typeof padding === 'number';
    boundaries.left += isPaddingNumber ? padding : padding.left || 0;
    boundaries.top += isPaddingNumber ? padding : padding.top || 0;
    boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
    boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

    return boundaries;
  }

  function getArea(_ref) {
    var width = _ref.width,
      height = _ref.height;

    return width * height;
  }

  /**
   * Utility used to transform the `auto` placement to the placement with more
   * available space.
   * @method
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeAutoPlacement(
    placement,
    refRect,
    popper,
    reference,
    boundariesElement,
  ) {
    var padding =
      arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

    if (placement.indexOf('auto') === -1) {
      return placement;
    }

    var boundaries = getBoundaries(
      popper,
      reference,
      padding,
      boundariesElement,
    );

    var rects = {
      top: {
        width: boundaries.width,
        height: refRect.top - boundaries.top,
      },
      right: {
        width: boundaries.right - refRect.right,
        height: boundaries.height,
      },
      bottom: {
        width: boundaries.width,
        height: boundaries.bottom - refRect.bottom,
      },
      left: {
        width: refRect.left - boundaries.left,
        height: boundaries.height,
      },
    };

    var sortedAreas = Object.keys(rects)
      .map(function (key) {
        return _extends(
          {
            key: key,
          },
          rects[key],
          {
            area: getArea(rects[key]),
          },
        );
      })
      .sort(function (a, b) {
        return b.area - a.area;
      });

    var filteredAreas = sortedAreas.filter(function (_ref2) {
      var width = _ref2.width,
        height = _ref2.height;
      return width >= popper.clientWidth && height >= popper.clientHeight;
    });

    var computedPlacement =
      filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

    var variation = placement.split('-')[1];

    return computedPlacement + (variation ? '-' + variation : '');
  }

  /**
   * Get offsets to the reference element
   * @method
   * @memberof Popper.Utils
   * @param {Object} state
   * @param {Element} popper - the popper element
   * @param {Element} reference - the reference element (the popper will be relative to this)
   * @param {Element} fixedPosition - is in fixed position mode
   * @returns {Object} An object containing the offsets which will be applied to the popper
   */
  function getReferenceOffsets(state, popper, reference) {
    var fixedPosition =
      arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    var commonOffsetParent = fixedPosition
      ? getFixedPositionOffsetParent(popper)
      : findCommonOffsetParent(popper, getReferenceNode(reference));
    return getOffsetRectRelativeToArbitraryNode(
      reference,
      commonOffsetParent,
      fixedPosition,
    );
  }

  /**
   * Get the outer sizes of the given element (offset size + margins)
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element
   * @returns {Object} object containing width and height properties
   */
  function getOuterSizes(element) {
    var window = element.ownerDocument.defaultView;
    var styles = window.getComputedStyle(element);
    var x =
      parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    var y =
      parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    var result = {
      width: element.offsetWidth + y,
      height: element.offsetHeight + x,
    };
    return result;
  }

  /**
   * Get the opposite placement of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement
   * @returns {String} flipped placement
   */
  function getOppositePlacement(placement) {
    var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash[matched];
    });
  }

  /**
   * Get offsets to the popper
   * @method
   * @memberof Popper.Utils
   * @param {Object} position - CSS position the Popper will get applied
   * @param {HTMLElement} popper - the popper element
   * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
   * @param {String} placement - one of the valid placement options
   * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
   */
  function getPopperOffsets(popper, referenceOffsets, placement) {
    placement = placement.split('-')[0];

    // Get popper node sizes
    var popperRect = getOuterSizes(popper);

    // Add position, width and height to our offsets object
    var popperOffsets = {
      width: popperRect.width,
      height: popperRect.height,
    };

    // depending by the popper placement we have to compute its offsets slightly differently
    var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    var mainSide = isHoriz ? 'top' : 'left';
    var secondarySide = isHoriz ? 'left' : 'top';
    var measurement = isHoriz ? 'height' : 'width';
    var secondaryMeasurement = !isHoriz ? 'height' : 'width';

    popperOffsets[mainSide] =
      referenceOffsets[mainSide] +
      referenceOffsets[measurement] / 2 -
      popperRect[measurement] / 2;
    if (placement === secondarySide) {
      popperOffsets[secondarySide] =
        referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
    } else {
      popperOffsets[secondarySide] =
        referenceOffsets[getOppositePlacement(secondarySide)];
    }

    return popperOffsets;
  }

  /**
   * Mimics the `find` method of Array
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function find(arr, check) {
    // use native find if supported
    if (Array.prototype.find) {
      return arr.find(check);
    }

    // use `filter` to obtain the same behavior of `find`
    return arr.filter(check)[0];
  }

  /**
   * Return the index of the matching object
   * @method
   * @memberof Popper.Utils
   * @argument {Array} arr
   * @argument prop
   * @argument value
   * @returns index or -1
   */
  function findIndex(arr, prop, value) {
    // use native findIndex if supported
    if (Array.prototype.findIndex) {
      return arr.findIndex(function (cur) {
        return cur[prop] === value;
      });
    }

    // use `find` + `indexOf` if `findIndex` isn't supported
    var match = find(arr, function (obj) {
      return obj[prop] === value;
    });
    return arr.indexOf(match);
  }

  /**
   * Loop trough the list of modifiers and run them in order,
   * each of them will then edit the data object.
   * @method
   * @memberof Popper.Utils
   * @param {dataObject} data
   * @param {Array} modifiers
   * @param {String} ends - Optional modifier name used as stopper
   * @returns {dataObject}
   */
  function runModifiers(modifiers, data, ends) {
    var modifiersToRun =
      ends === undefined
        ? modifiers
        : modifiers.slice(0, findIndex(modifiers, 'name', ends));

    modifiersToRun.forEach(function (modifier) {
      if (modifier['function']) {
        // eslint-disable-line dot-notation
        console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
      }
      var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
      if (modifier.enabled && isFunction$1(fn)) {
        // Add properties to offsets to make them a complete clientRect object
        // we do this before each modifier to make sure the previous one doesn't
        // mess with these values
        data.offsets.popper = getClientRect(data.offsets.popper);
        data.offsets.reference = getClientRect(data.offsets.reference);

        data = fn(data, modifier);
      }
    });

    return data;
  }

  /**
   * Updates the position of the popper, computing the new offsets and applying
   * the new style.<br />
   * Prefer `scheduleUpdate` over `update` because of performance reasons.
   * @method
   * @memberof Popper
   */
  function update() {
    // if popper is destroyed, don't perform any further update
    if (this.state.isDestroyed) {
      return;
    }

    var data = {
      instance: this,
      styles: {},
      arrowStyles: {},
      attributes: {},
      flipped: false,
      offsets: {},
    };

    // compute reference element offsets
    data.offsets.reference = getReferenceOffsets(
      this.state,
      this.popper,
      this.reference,
      this.options.positionFixed,
    );

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    data.placement = computeAutoPlacement(
      this.options.placement,
      data.offsets.reference,
      this.popper,
      this.reference,
      this.options.modifiers.flip.boundariesElement,
      this.options.modifiers.flip.padding,
    );

    // store the computed placement inside `originalPlacement`
    data.originalPlacement = data.placement;

    data.positionFixed = this.options.positionFixed;

    // compute the popper offsets
    data.offsets.popper = getPopperOffsets(
      this.popper,
      data.offsets.reference,
      data.placement,
    );

    data.offsets.popper.position = this.options.positionFixed
      ? 'fixed'
      : 'absolute';

    // run the modifiers
    data = runModifiers(this.modifiers, data);

    // the first `update` will call `onCreate` callback
    // the other ones will call `onUpdate` callback
    if (!this.state.isCreated) {
      this.state.isCreated = true;
      this.options.onCreate(data);
    } else {
      this.options.onUpdate(data);
    }
  }

  /**
   * Helper used to know if the given modifier is enabled.
   * @method
   * @memberof Popper.Utils
   * @returns {Boolean}
   */
  function isModifierEnabled(modifiers, modifierName) {
    return modifiers.some(function (_ref) {
      var name = _ref.name,
        enabled = _ref.enabled;
      return enabled && name === modifierName;
    });
  }

  /**
   * Get the prefixed supported property name
   * @method
   * @memberof Popper.Utils
   * @argument {String} property (camelCase)
   * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
   */
  function getSupportedPropertyName(property) {
    var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
    var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

    for (var i = 0; i < prefixes.length; i++) {
      var prefix = prefixes[i];
      var toCheck = prefix ? '' + prefix + upperProp : property;
      if (typeof document.body.style[toCheck] !== 'undefined') {
        return toCheck;
      }
    }
    return null;
  }

  /**
   * Destroys the popper.
   * @method
   * @memberof Popper
   */
  function destroy() {
    this.state.isDestroyed = true;

    // touch DOM only if `applyStyle` modifier is enabled
    if (isModifierEnabled(this.modifiers, 'applyStyle')) {
      this.popper.removeAttribute('x-placement');
      this.popper.style.position = '';
      this.popper.style.top = '';
      this.popper.style.left = '';
      this.popper.style.right = '';
      this.popper.style.bottom = '';
      this.popper.style.willChange = '';
      this.popper.style[getSupportedPropertyName('transform')] = '';
    }

    this.disableEventListeners();

    // remove the popper if user explicitly asked for the deletion on destroy
    // do not use `remove` because IE11 doesn't support it
    if (this.options.removeOnDestroy) {
      this.popper.parentNode.removeChild(this.popper);
    }
    return this;
  }

  /**
   * Get the window associated with the element
   * @argument {Element} element
   * @returns {Window}
   */
  function getWindow(element) {
    var ownerDocument = element.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView : window;
  }

  function attachToScrollParents(scrollParent, event, callback, scrollParents) {
    var isBody = scrollParent.nodeName === 'BODY';
    var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
    target.addEventListener(event, callback, { passive: true });

    if (!isBody) {
      attachToScrollParents(
        getScrollParent(target.parentNode),
        event,
        callback,
        scrollParents,
      );
    }
    scrollParents.push(target);
  }

  /**
   * Setup needed event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function setupEventListeners(reference, options, state, updateBound) {
    // Resize event listener on window
    state.updateBound = updateBound;
    getWindow(reference).addEventListener('resize', state.updateBound, {
      passive: true,
    });

    // Scroll event listener on scroll parents
    var scrollElement = getScrollParent(reference);
    attachToScrollParents(
      scrollElement,
      'scroll',
      state.updateBound,
      state.scrollParents,
    );
    state.scrollElement = scrollElement;
    state.eventsEnabled = true;

    return state;
  }

  /**
   * It will add resize/scroll events and start recalculating
   * position of the popper element when they are triggered.
   * @method
   * @memberof Popper
   */
  function enableEventListeners() {
    if (!this.state.eventsEnabled) {
      this.state = setupEventListeners(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate,
      );
    }
  }

  /**
   * Remove event listeners used to update the popper position
   * @method
   * @memberof Popper.Utils
   * @private
   */
  function removeEventListeners(reference, state) {
    // Remove resize event listener on window
    getWindow(reference).removeEventListener('resize', state.updateBound);

    // Remove scroll event listener on scroll parents
    state.scrollParents.forEach(function (target) {
      target.removeEventListener('scroll', state.updateBound);
    });

    // Reset state
    state.updateBound = null;
    state.scrollParents = [];
    state.scrollElement = null;
    state.eventsEnabled = false;
    return state;
  }

  /**
   * It will remove resize/scroll events and won't recalculate popper position
   * when they are triggered. It also won't trigger `onUpdate` callback anymore,
   * unless you call `update` method manually.
   * @method
   * @memberof Popper
   */
  function disableEventListeners() {
    if (this.state.eventsEnabled) {
      cancelAnimationFrame(this.scheduleUpdate);
      this.state = removeEventListeners(this.reference, this.state);
    }
  }

  /**
   * Tells if a given input is a number
   * @method
   * @memberof Popper.Utils
   * @param {*} input to check
   * @return {Boolean}
   */
  function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
  }

  /**
   * Set the style to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the style to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setStyles(element, styles) {
    Object.keys(styles).forEach(function (prop) {
      var unit = '';
      // add unit if the value is numeric and is one of the following
      if (
        ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !==
          -1 &&
        isNumeric(styles[prop])
      ) {
        unit = 'px';
      }
      element.style[prop] = styles[prop] + unit;
    });
  }

  /**
   * Set the attributes to the given popper
   * @method
   * @memberof Popper.Utils
   * @argument {Element} element - Element to apply the attributes to
   * @argument {Object} styles
   * Object with a list of properties and values which will be applied to the element
   */
  function setAttributes(element, attributes) {
    Object.keys(attributes).forEach(function (prop) {
      var value = attributes[prop];
      if (value !== false) {
        element.setAttribute(prop, attributes[prop]);
      } else {
        element.removeAttribute(prop);
      }
    });
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} data.styles - List of style properties - values to apply to popper element
   * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The same data object
   */
  function applyStyle(data) {
    // any property present in `data.styles` will be applied to the popper,
    // in this way we can make the 3rd party modifiers add custom styles to it
    // Be aware, modifiers could override the properties defined in the previous
    // lines of this modifier!
    setStyles(data.instance.popper, data.styles);

    // any property present in `data.attributes` will be applied to the popper,
    // they will be set as HTML attributes of the element
    setAttributes(data.instance.popper, data.attributes);

    // if arrowElement is defined and arrowStyles has some properties
    if (data.arrowElement && Object.keys(data.arrowStyles).length) {
      setStyles(data.arrowElement, data.arrowStyles);
    }

    return data;
  }

  /**
   * Set the x-placement attribute before everything else because it could be used
   * to add margins to the popper margins needs to be calculated to get the
   * correct popper offsets.
   * @method
   * @memberof Popper.modifiers
   * @param {HTMLElement} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper
   * @param {Object} options - Popper.js options
   */
  function applyStyleOnLoad(
    reference,
    popper,
    options,
    modifierOptions,
    state,
  ) {
    // compute reference element offsets
    var referenceOffsets = getReferenceOffsets(
      state,
      popper,
      reference,
      options.positionFixed,
    );

    // compute auto placement, store placement inside the data object,
    // modifiers will be able to edit `placement` if needed
    // and refer to originalPlacement to know the original value
    var placement = computeAutoPlacement(
      options.placement,
      referenceOffsets,
      popper,
      reference,
      options.modifiers.flip.boundariesElement,
      options.modifiers.flip.padding,
    );

    popper.setAttribute('x-placement', placement);

    // Apply `position` to popper before anything else because
    // without the position applied we can't guarantee correct computations
    setStyles(popper, {
      position: options.positionFixed ? 'fixed' : 'absolute',
    });

    return options;
  }

  /**
   * @function
   * @memberof Popper.Utils
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Boolean} shouldRound - If the offsets should be rounded at all
   * @returns {Object} The popper's position offsets rounded
   *
   * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
   * good as it can be within reason.
   * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
   *
   * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
   * as well on High DPI screens).
   *
   * Firefox prefers no rounding for positioning and does not have blurriness on
   * high DPI screens.
   *
   * Only horizontal placement and left/right values need to be considered.
   */
  function getRoundedOffsets(data, shouldRound) {
    var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
    var round = Math.round,
      floor = Math.floor;

    var noRound = function noRound(v) {
      return v;
    };

    var referenceWidth = round(reference.width);
    var popperWidth = round(popper.width);

    var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
    var isVariation = data.placement.indexOf('-') !== -1;
    var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
    var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

    var horizontalToInteger = !shouldRound
      ? noRound
      : isVertical || isVariation || sameWidthParity
      ? round
      : floor;
    var verticalToInteger = !shouldRound ? noRound : round;

    return {
      left: horizontalToInteger(
        bothOddWidth && !isVariation && shouldRound
          ? popper.left - 1
          : popper.left,
      ),
      top: verticalToInteger(popper.top),
      bottom: verticalToInteger(popper.bottom),
      right: horizontalToInteger(popper.right),
    };
  }

  var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function computeStyle(data, options) {
    var x = options.x,
      y = options.y;
    var popper = data.offsets.popper;

    // Remove this legacy support in Popper.js v2

    var legacyGpuAccelerationOption = find(
      data.instance.modifiers,
      function (modifier) {
        return modifier.name === 'applyStyle';
      },
    ).gpuAcceleration;
    if (legacyGpuAccelerationOption !== undefined) {
      console.warn(
        'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!',
      );
    }
    var gpuAcceleration =
      legacyGpuAccelerationOption !== undefined
        ? legacyGpuAccelerationOption
        : options.gpuAcceleration;

    var offsetParent = getOffsetParent(data.instance.popper);
    var offsetParentRect = getBoundingClientRect(offsetParent);

    // Styles
    var styles = {
      position: popper.position,
    };

    var offsets = getRoundedOffsets(
      data,
      window.devicePixelRatio < 2 || !isFirefox,
    );

    var sideA = x === 'bottom' ? 'top' : 'bottom';
    var sideB = y === 'right' ? 'left' : 'right';

    // if gpuAcceleration is set to `true` and transform is supported,
    //  we use `translate3d` to apply the position to the popper we
    // automatically use the supported prefixed version if needed
    var prefixedProperty = getSupportedPropertyName('transform');

    // now, let's make a step back and look at this code closely (wtf?)
    // If the content of the popper grows once it's been positioned, it
    // may happen that the popper gets misplaced because of the new content
    // overflowing its reference element
    // To avoid this problem, we provide two options (x and y), which allow
    // the consumer to define the offset origin.
    // If we position a popper on top of a reference element, we can set
    // `x` to `top` to make the popper grow towards its top instead of
    // its bottom.
    var left = void 0,
      top = void 0;
    if (sideA === 'bottom') {
      // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
      // and not the bottom of the html element
      if (offsetParent.nodeName === 'HTML') {
        top = -offsetParent.clientHeight + offsets.bottom;
      } else {
        top = -offsetParentRect.height + offsets.bottom;
      }
    } else {
      top = offsets.top;
    }
    if (sideB === 'right') {
      if (offsetParent.nodeName === 'HTML') {
        left = -offsetParent.clientWidth + offsets.right;
      } else {
        left = -offsetParentRect.width + offsets.right;
      }
    } else {
      left = offsets.left;
    }
    if (gpuAcceleration && prefixedProperty) {
      styles[prefixedProperty] =
        'translate3d(' + left + 'px, ' + top + 'px, 0)';
      styles[sideA] = 0;
      styles[sideB] = 0;
      styles.willChange = 'transform';
    } else {
      // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
      var invertTop = sideA === 'bottom' ? -1 : 1;
      var invertLeft = sideB === 'right' ? -1 : 1;
      styles[sideA] = top * invertTop;
      styles[sideB] = left * invertLeft;
      styles.willChange = sideA + ', ' + sideB;
    }

    // Attributes
    var attributes = {
      'x-placement': data.placement,
    };

    // Update `data` attributes, styles and arrowStyles
    data.attributes = _extends({}, attributes, data.attributes);
    data.styles = _extends({}, styles, data.styles);
    data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

    return data;
  }

  /**
   * Helper used to know if the given modifier depends from another one.<br />
   * It checks if the needed modifier is listed and enabled.
   * @method
   * @memberof Popper.Utils
   * @param {Array} modifiers - list of modifiers
   * @param {String} requestingName - name of requesting modifier
   * @param {String} requestedName - name of requested modifier
   * @returns {Boolean}
   */
  function isModifierRequired(modifiers, requestingName, requestedName) {
    var requesting = find(modifiers, function (_ref) {
      var name = _ref.name;
      return name === requestingName;
    });

    var isRequired =
      !!requesting &&
      modifiers.some(function (modifier) {
        return (
          modifier.name === requestedName &&
          modifier.enabled &&
          modifier.order < requesting.order
        );
      });

    if (!isRequired) {
      var _requesting = '`' + requestingName + '`';
      var requested = '`' + requestedName + '`';
      console.warn(
        requested +
          ' modifier is required by ' +
          _requesting +
          ' modifier in order to work, be sure to include it before ' +
          _requesting +
          '!',
      );
    }
    return isRequired;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function arrow(data, options) {
    var _data$offsets$arrow;

    // arrow depends on keepTogether in order to work
    if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
      return data;
    }

    var arrowElement = options.element;

    // if arrowElement is a string, suppose it's a CSS selector
    if (typeof arrowElement === 'string') {
      arrowElement = data.instance.popper.querySelector(arrowElement);

      // if arrowElement is not found, don't run the modifier
      if (!arrowElement) {
        return data;
      }
    } else {
      // if the arrowElement isn't a query selector we must check that the
      // provided DOM node is child of its popper node
      if (!data.instance.popper.contains(arrowElement)) {
        console.warn(
          'WARNING: `arrow.element` must be child of its popper element!',
        );
        return data;
      }
    }

    var placement = data.placement.split('-')[0];
    var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

    var isVertical = ['left', 'right'].indexOf(placement) !== -1;

    var len = isVertical ? 'height' : 'width';
    var sideCapitalized = isVertical ? 'Top' : 'Left';
    var side = sideCapitalized.toLowerCase();
    var altSide = isVertical ? 'left' : 'top';
    var opSide = isVertical ? 'bottom' : 'right';
    var arrowElementSize = getOuterSizes(arrowElement)[len];

    //
    // extends keepTogether behavior making sure the popper and its
    // reference have enough pixels in conjunction
    //

    // top/left side
    if (reference[opSide] - arrowElementSize < popper[side]) {
      data.offsets.popper[side] -=
        popper[side] - (reference[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (reference[side] + arrowElementSize > popper[opSide]) {
      data.offsets.popper[side] +=
        reference[side] + arrowElementSize - popper[opSide];
    }
    data.offsets.popper = getClientRect(data.offsets.popper);

    // compute center of the popper
    var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

    // Compute the sideValue using the updated popper offsets
    // take popper margin in account because we don't have this info available
    var css = getStyleComputedProperty(data.instance.popper);
    var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
    var popperBorderSide = parseFloat(
      css['border' + sideCapitalized + 'Width'],
    );
    var sideValue =
      center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

    // prevent arrowElement from being placed not contiguously to its popper
    sideValue = Math.max(
      Math.min(popper[len] - arrowElementSize, sideValue),
      0,
    );

    data.arrowElement = arrowElement;
    data.offsets.arrow =
      ((_data$offsets$arrow = {}),
      defineProperty$1(_data$offsets$arrow, side, Math.round(sideValue)),
      defineProperty$1(_data$offsets$arrow, altSide, ''),
      _data$offsets$arrow);

    return data;
  }

  /**
   * Get the opposite placement variation of the given one
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement variation
   * @returns {String} flipped placement variation
   */
  function getOppositeVariation(variation) {
    if (variation === 'end') {
      return 'start';
    } else if (variation === 'start') {
      return 'end';
    }
    return variation;
  }

  /**
   * List of accepted placements to use as values of the `placement` option.<br />
   * Valid placements are:
   * - `auto`
   * - `top`
   * - `right`
   * - `bottom`
   * - `left`
   *
   * Each placement can have a variation from this list:
   * - `-start`
   * - `-end`
   *
   * Variations are interpreted easily if you think of them as the left to right
   * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
   * is right.<br />
   * Vertically (`left` and `right`), `start` is top and `end` is bottom.
   *
   * Some valid examples are:
   * - `top-end` (on top of reference, right aligned)
   * - `right-start` (on right of reference, top aligned)
   * - `bottom` (on bottom, centered)
   * - `auto-end` (on the side with more space available, alignment depends by placement)
   *
   * @static
   * @type {Array}
   * @enum {String}
   * @readonly
   * @method placements
   * @memberof Popper
   */
  var placements = [
    'auto-start',
    'auto',
    'auto-end',
    'top-start',
    'top',
    'top-end',
    'right-start',
    'right',
    'right-end',
    'bottom-end',
    'bottom',
    'bottom-start',
    'left-end',
    'left',
    'left-start',
  ];

  // Get rid of `auto` `auto-start` and `auto-end`
  var validPlacements = placements.slice(3);

  /**
   * Given an initial placement, returns all the subsequent placements
   * clockwise (or counter-clockwise).
   *
   * @method
   * @memberof Popper.Utils
   * @argument {String} placement - A valid placement (it accepts variations)
   * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
   * @returns {Array} placements including their variations
   */
  function clockwise(placement) {
    var counter =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var index = validPlacements.indexOf(placement);
    var arr = validPlacements
      .slice(index + 1)
      .concat(validPlacements.slice(0, index));
    return counter ? arr.reverse() : arr;
  }

  var BEHAVIORS = {
    FLIP: 'flip',
    CLOCKWISE: 'clockwise',
    COUNTERCLOCKWISE: 'counterclockwise',
  };

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function flip(data, options) {
    // if `inner` modifier is enabled, we can't use the `flip` modifier
    if (isModifierEnabled(data.instance.modifiers, 'inner')) {
      return data;
    }

    if (data.flipped && data.placement === data.originalPlacement) {
      // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
      return data;
    }

    var boundaries = getBoundaries(
      data.instance.popper,
      data.instance.reference,
      options.padding,
      options.boundariesElement,
      data.positionFixed,
    );

    var placement = data.placement.split('-')[0];
    var placementOpposite = getOppositePlacement(placement);
    var variation = data.placement.split('-')[1] || '';

    var flipOrder = [];

    switch (options.behavior) {
      case BEHAVIORS.FLIP:
        flipOrder = [placement, placementOpposite];
        break;
      case BEHAVIORS.CLOCKWISE:
        flipOrder = clockwise(placement);
        break;
      case BEHAVIORS.COUNTERCLOCKWISE:
        flipOrder = clockwise(placement, true);
        break;
      default:
        flipOrder = options.behavior;
    }

    flipOrder.forEach(function (step, index) {
      if (placement !== step || flipOrder.length === index + 1) {
        return data;
      }

      placement = data.placement.split('-')[0];
      placementOpposite = getOppositePlacement(placement);

      var popperOffsets = data.offsets.popper;
      var refOffsets = data.offsets.reference;

      // using floor because the reference offsets may contain decimals we are not going to consider here
      var floor = Math.floor;
      var overlapsRef =
        (placement === 'left' &&
          floor(popperOffsets.right) > floor(refOffsets.left)) ||
        (placement === 'right' &&
          floor(popperOffsets.left) < floor(refOffsets.right)) ||
        (placement === 'top' &&
          floor(popperOffsets.bottom) > floor(refOffsets.top)) ||
        (placement === 'bottom' &&
          floor(popperOffsets.top) < floor(refOffsets.bottom));

      var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
      var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
      var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
      var overflowsBottom =
        floor(popperOffsets.bottom) > floor(boundaries.bottom);

      var overflowsBoundaries =
        (placement === 'left' && overflowsLeft) ||
        (placement === 'right' && overflowsRight) ||
        (placement === 'top' && overflowsTop) ||
        (placement === 'bottom' && overflowsBottom);

      // flip the variation if required
      var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

      // flips variation if reference element overflows boundaries
      var flippedVariationByRef =
        !!options.flipVariations &&
        ((isVertical && variation === 'start' && overflowsLeft) ||
          (isVertical && variation === 'end' && overflowsRight) ||
          (!isVertical && variation === 'start' && overflowsTop) ||
          (!isVertical && variation === 'end' && overflowsBottom));

      // flips variation if popper content overflows boundaries
      var flippedVariationByContent =
        !!options.flipVariationsByContent &&
        ((isVertical && variation === 'start' && overflowsRight) ||
          (isVertical && variation === 'end' && overflowsLeft) ||
          (!isVertical && variation === 'start' && overflowsBottom) ||
          (!isVertical && variation === 'end' && overflowsTop));

      var flippedVariation = flippedVariationByRef || flippedVariationByContent;

      if (overlapsRef || overflowsBoundaries || flippedVariation) {
        // this boolean to detect any flip loop
        data.flipped = true;

        if (overlapsRef || overflowsBoundaries) {
          placement = flipOrder[index + 1];
        }

        if (flippedVariation) {
          variation = getOppositeVariation(variation);
        }

        data.placement = placement + (variation ? '-' + variation : '');

        // this object contains `position`, we want to preserve it along with
        // any additional property we may add in the future
        data.offsets.popper = _extends(
          {},
          data.offsets.popper,
          getPopperOffsets(
            data.instance.popper,
            data.offsets.reference,
            data.placement,
          ),
        );

        data = runModifiers(data.instance.modifiers, data, 'flip');
      }
    });
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function keepTogether(data) {
    var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

    var placement = data.placement.split('-')[0];
    var floor = Math.floor;
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var side = isVertical ? 'right' : 'bottom';
    var opSide = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    if (popper[side] < floor(reference[opSide])) {
      data.offsets.popper[opSide] =
        floor(reference[opSide]) - popper[measurement];
    }
    if (popper[opSide] > floor(reference[side])) {
      data.offsets.popper[opSide] = floor(reference[side]);
    }

    return data;
  }

  /**
   * Converts a string containing value + unit into a px value number
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} str - Value + unit string
   * @argument {String} measurement - `height` or `width`
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @returns {Number|String}
   * Value in pixels, or original string if no values were extracted
   */
  function toValue(str, measurement, popperOffsets, referenceOffsets) {
    // separate value from unit
    var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
    var value = +split[1];
    var unit = split[2];

    // If it's not a number it's an operator, I guess
    if (!value) {
      return str;
    }

    if (unit.indexOf('%') === 0) {
      var element = void 0;
      switch (unit) {
        case '%p':
          element = popperOffsets;
          break;
        case '%':
        case '%r':
        default:
          element = referenceOffsets;
      }

      var rect = getClientRect(element);
      return (rect[measurement] / 100) * value;
    } else if (unit === 'vh' || unit === 'vw') {
      // if is a vh or vw, we calculate the size based on the viewport
      var size = void 0;
      if (unit === 'vh') {
        size = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0,
        );
      } else {
        size = Math.max(
          document.documentElement.clientWidth,
          window.innerWidth || 0,
        );
      }
      return (size / 100) * value;
    } else {
      // if is an explicit pixel unit, we get rid of the unit and keep the value
      // if is an implicit unit, it's px, and we return just the value
      return value;
    }
  }

  /**
   * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
   * @function
   * @memberof {modifiers~offset}
   * @private
   * @argument {String} offset
   * @argument {Object} popperOffsets
   * @argument {Object} referenceOffsets
   * @argument {String} basePlacement
   * @returns {Array} a two cells array with x and y offsets in numbers
   */
  function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
    var offsets = [0, 0];

    // Use height if placement is left or right and index is 0 otherwise use width
    // in this way the first offset will use an axis and the second one
    // will use the other one
    var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

    // Split the offset string to obtain a list of values and operands
    // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
    var fragments = offset.split(/(\+|\-)/).map(function (frag) {
      return frag.trim();
    });

    // Detect if the offset string contains a pair of values or a single one
    // they could be separated by comma or space
    var divider = fragments.indexOf(
      find(fragments, function (frag) {
        return frag.search(/,|\s/) !== -1;
      }),
    );

    if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
      console.warn(
        'Offsets separated by white space(s) are deprecated, use a comma (,) instead.',
      );
    }

    // If divider is found, we divide the list of values and operands to divide
    // them by ofset X and Y.
    var splitRegex = /\s*,\s*|\s+/;
    var ops =
      divider !== -1
        ? [
            fragments
              .slice(0, divider)
              .concat([fragments[divider].split(splitRegex)[0]]),
            [fragments[divider].split(splitRegex)[1]].concat(
              fragments.slice(divider + 1),
            ),
          ]
        : [fragments];

    // Convert the values with units to absolute pixels to allow our computations
    ops = ops.map(function (op, index) {
      // Most of the units rely on the orientation of the popper
      var measurement = (index === 1 ? !useHeight : useHeight)
        ? 'height'
        : 'width';
      var mergeWithPrevious = false;
      return (
        op
          // This aggregates any `+` or `-` sign that aren't considered operators
          // e.g.: 10 + +5 => [10, +, +5]
          .reduce(function (a, b) {
            if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
              a[a.length - 1] = b;
              mergeWithPrevious = true;
              return a;
            } else if (mergeWithPrevious) {
              a[a.length - 1] += b;
              mergeWithPrevious = false;
              return a;
            } else {
              return a.concat(b);
            }
          }, [])
          // Here we convert the string values into number values (in px)
          .map(function (str) {
            return toValue(str, measurement, popperOffsets, referenceOffsets);
          })
      );
    });

    // Loop trough the offsets arrays and execute the operations
    ops.forEach(function (op, index) {
      op.forEach(function (frag, index2) {
        if (isNumeric(frag)) {
          offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
        }
      });
    });
    return offsets;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @argument {Number|String} options.offset=0
   * The offset value as described in the modifier description
   * @returns {Object} The data object, properly modified
   */
  function offset(data, _ref) {
    var offset = _ref.offset;
    var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

    var basePlacement = placement.split('-')[0];

    var offsets = void 0;
    if (isNumeric(+offset)) {
      offsets = [+offset, 0];
    } else {
      offsets = parseOffset(offset, popper, reference, basePlacement);
    }

    if (basePlacement === 'left') {
      popper.top += offsets[0];
      popper.left -= offsets[1];
    } else if (basePlacement === 'right') {
      popper.top += offsets[0];
      popper.left += offsets[1];
    } else if (basePlacement === 'top') {
      popper.left += offsets[0];
      popper.top -= offsets[1];
    } else if (basePlacement === 'bottom') {
      popper.left += offsets[0];
      popper.top += offsets[1];
    }

    data.popper = popper;
    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function preventOverflow(data, options) {
    var boundariesElement =
      options.boundariesElement || getOffsetParent(data.instance.popper);

    // If offsetParent is the reference element, we really want to
    // go one step up and use the next offsetParent as reference to
    // avoid to make this modifier completely useless and look like broken
    if (data.instance.reference === boundariesElement) {
      boundariesElement = getOffsetParent(boundariesElement);
    }

    // NOTE: DOM access here
    // resets the popper's position so that the document size can be calculated excluding
    // the size of the popper element itself
    var transformProp = getSupportedPropertyName('transform');
    var popperStyles = data.instance.popper.style; // assignment to help minification
    var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

    popperStyles.top = '';
    popperStyles.left = '';
    popperStyles[transformProp] = '';

    var boundaries = getBoundaries(
      data.instance.popper,
      data.instance.reference,
      options.padding,
      boundariesElement,
      data.positionFixed,
    );

    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    popperStyles.top = top;
    popperStyles.left = left;
    popperStyles[transformProp] = transform;

    options.boundaries = boundaries;

    var order = options.priority;
    var popper = data.offsets.popper;

    var check = {
      primary: function primary(placement) {
        var value = popper[placement];
        if (
          popper[placement] < boundaries[placement] &&
          !options.escapeWithReference
        ) {
          value = Math.max(popper[placement], boundaries[placement]);
        }
        return defineProperty$1({}, placement, value);
      },
      secondary: function secondary(placement) {
        var mainSide = placement === 'right' ? 'left' : 'top';
        var value = popper[mainSide];
        if (
          popper[placement] > boundaries[placement] &&
          !options.escapeWithReference
        ) {
          value = Math.min(
            popper[mainSide],
            boundaries[placement] -
              (placement === 'right' ? popper.width : popper.height),
          );
        }
        return defineProperty$1({}, mainSide, value);
      },
    };

    order.forEach(function (placement) {
      var side =
        ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
      popper = _extends({}, popper, check[side](placement));
    });

    data.offsets.popper = popper;

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function shift(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var shiftvariation = placement.split('-')[1];

    // if shift shiftvariation is specified, run the modifier
    if (shiftvariation) {
      var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

      var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
      var side = isVertical ? 'left' : 'top';
      var measurement = isVertical ? 'width' : 'height';

      var shiftOffsets = {
        start: defineProperty$1({}, side, reference[side]),
        end: defineProperty$1(
          {},
          side,
          reference[side] + reference[measurement] - popper[measurement],
        ),
      };

      data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by update method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function hide(data) {
    if (
      !isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')
    ) {
      return data;
    }

    var refRect = data.offsets.reference;
    var bound = find(data.instance.modifiers, function (modifier) {
      return modifier.name === 'preventOverflow';
    }).boundaries;

    if (
      refRect.bottom < bound.top ||
      refRect.left > bound.right ||
      refRect.top > bound.bottom ||
      refRect.right < bound.left
    ) {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === true) {
        return data;
      }

      data.hide = true;
      data.attributes['x-out-of-boundaries'] = '';
    } else {
      // Avoid unnecessary DOM access if visibility hasn't changed
      if (data.hide === false) {
        return data;
      }

      data.hide = false;
      data.attributes['x-out-of-boundaries'] = false;
    }

    return data;
  }

  /**
   * @function
   * @memberof Modifiers
   * @argument {Object} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {Object} The data object, properly modified
   */
  function inner(data) {
    var placement = data.placement;
    var basePlacement = placement.split('-')[0];
    var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

    var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

    var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

    popper[isHoriz ? 'left' : 'top'] =
      reference[basePlacement] -
      (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

    data.placement = getOppositePlacement(placement);
    data.offsets.popper = getClientRect(popper);

    return data;
  }

  /**
   * Modifier function, each modifier can have a function of this type assigned
   * to its `fn` property.<br />
   * These functions will be called on each update, this means that you must
   * make sure they are performant enough to avoid performance bottlenecks.
   *
   * @function ModifierFn
   * @argument {dataObject} data - The data object generated by `update` method
   * @argument {Object} options - Modifiers configuration and options
   * @returns {dataObject} The data object, properly modified
   */

  /**
   * Modifiers are plugins used to alter the behavior of your poppers.<br />
   * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
   * needed by the library.
   *
   * Usually you don't want to override the `order`, `fn` and `onLoad` props.
   * All the other properties are configurations that could be tweaked.
   * @namespace modifiers
   */
  var modifiers = {
    /**
     * Modifier used to shift the popper on the start or end of its reference
     * element.<br />
     * It will read the variation of the `placement` property.<br />
     * It can be one either `-end` or `-start`.
     * @memberof modifiers
     * @inner
     */
    shift: {
      /** @prop {number} order=100 - Index used to define the order of execution */
      order: 100,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: shift,
    },

    /**
     * The `offset` modifier can shift your popper on both its axis.
     *
     * It accepts the following units:
     * - `px` or unit-less, interpreted as pixels
     * - `%` or `%r`, percentage relative to the length of the reference element
     * - `%p`, percentage relative to the length of the popper element
     * - `vw`, CSS viewport width unit
     * - `vh`, CSS viewport height unit
     *
     * For length is intended the main axis relative to the placement of the popper.<br />
     * This means that if the placement is `top` or `bottom`, the length will be the
     * `width`. In case of `left` or `right`, it will be the `height`.
     *
     * You can provide a single value (as `Number` or `String`), or a pair of values
     * as `String` divided by a comma or one (or more) white spaces.<br />
     * The latter is a deprecated method because it leads to confusion and will be
     * removed in v2.<br />
     * Additionally, it accepts additions and subtractions between different units.
     * Note that multiplications and divisions aren't supported.
     *
     * Valid examples are:
     * ```
     * 10
     * '10%'
     * '10, 10'
     * '10%, 10'
     * '10 + 10%'
     * '10 - 5vh + 3%'
     * '-10px + 5vh, 5px - 6%'
     * ```
     * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
     * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
     * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
     *
     * @memberof modifiers
     * @inner
     */
    offset: {
      /** @prop {number} order=200 - Index used to define the order of execution */
      order: 200,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: offset,
      /** @prop {Number|String} offset=0
       * The offset value as described in the modifier description
       */
      offset: 0,
    },

    /**
     * Modifier used to prevent the popper from being positioned outside the boundary.
     *
     * A scenario exists where the reference itself is not within the boundaries.<br />
     * We can say it has "escaped the boundaries" — or just "escaped".<br />
     * In this case we need to decide whether the popper should either:
     *
     * - detach from the reference and remain "trapped" in the boundaries, or
     * - if it should ignore the boundary and "escape with its reference"
     *
     * When `escapeWithReference` is set to`true` and reference is completely
     * outside its boundaries, the popper will overflow (or completely leave)
     * the boundaries in order to remain attached to the edge of the reference.
     *
     * @memberof modifiers
     * @inner
     */
    preventOverflow: {
      /** @prop {number} order=300 - Index used to define the order of execution */
      order: 300,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: preventOverflow,
      /**
       * @prop {Array} [priority=['left','right','top','bottom']]
       * Popper will try to prevent overflow following these priorities by default,
       * then, it could overflow on the left and on top of the `boundariesElement`
       */
      priority: ['left', 'right', 'top', 'bottom'],
      /**
       * @prop {number} padding=5
       * Amount of pixel used to define a minimum distance between the boundaries
       * and the popper. This makes sure the popper always has a little padding
       * between the edges of its container
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='scrollParent'
       * Boundaries used by the modifier. Can be `scrollParent`, `window`,
       * `viewport` or any DOM element.
       */
      boundariesElement: 'scrollParent',
    },

    /**
     * Modifier used to make sure the reference and its popper stay near each other
     * without leaving any gap between the two. Especially useful when the arrow is
     * enabled and you want to ensure that it points to its reference element.
     * It cares only about the first axis. You can still have poppers with margin
     * between the popper and its reference element.
     * @memberof modifiers
     * @inner
     */
    keepTogether: {
      /** @prop {number} order=400 - Index used to define the order of execution */
      order: 400,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: keepTogether,
    },

    /**
     * This modifier is used to move the `arrowElement` of the popper to make
     * sure it is positioned between the reference element and its popper element.
     * It will read the outer size of the `arrowElement` node to detect how many
     * pixels of conjunction are needed.
     *
     * It has no effect if no `arrowElement` is provided.
     * @memberof modifiers
     * @inner
     */
    arrow: {
      /** @prop {number} order=500 - Index used to define the order of execution */
      order: 500,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: arrow,
      /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
      element: '[x-arrow]',
    },

    /**
     * Modifier used to flip the popper's placement when it starts to overlap its
     * reference element.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     *
     * **NOTE:** this modifier will interrupt the current update cycle and will
     * restart it if it detects the need to flip the placement.
     * @memberof modifiers
     * @inner
     */
    flip: {
      /** @prop {number} order=600 - Index used to define the order of execution */
      order: 600,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: flip,
      /**
       * @prop {String|Array} behavior='flip'
       * The behavior used to change the popper's placement. It can be one of
       * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
       * placements (with optional variations)
       */
      behavior: 'flip',
      /**
       * @prop {number} padding=5
       * The popper will flip if it hits the edges of the `boundariesElement`
       */
      padding: 5,
      /**
       * @prop {String|HTMLElement} boundariesElement='viewport'
       * The element which will define the boundaries of the popper position.
       * The popper will never be placed outside of the defined boundaries
       * (except if `keepTogether` is enabled)
       */
      boundariesElement: 'viewport',
      /**
       * @prop {Boolean} flipVariations=false
       * The popper will switch placement variation between `-start` and `-end` when
       * the reference element overlaps its boundaries.
       *
       * The original placement should have a set variation.
       */
      flipVariations: false,
      /**
       * @prop {Boolean} flipVariationsByContent=false
       * The popper will switch placement variation between `-start` and `-end` when
       * the popper element overlaps its reference boundaries.
       *
       * The original placement should have a set variation.
       */
      flipVariationsByContent: false,
    },

    /**
     * Modifier used to make the popper flow toward the inner of the reference element.
     * By default, when this modifier is disabled, the popper will be placed outside
     * the reference element.
     * @memberof modifiers
     * @inner
     */
    inner: {
      /** @prop {number} order=700 - Index used to define the order of execution */
      order: 700,
      /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
      enabled: false,
      /** @prop {ModifierFn} */
      fn: inner,
    },

    /**
     * Modifier used to hide the popper when its reference element is outside of the
     * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
     * be used to hide with a CSS selector the popper when its reference is
     * out of boundaries.
     *
     * Requires the `preventOverflow` modifier before it in order to work.
     * @memberof modifiers
     * @inner
     */
    hide: {
      /** @prop {number} order=800 - Index used to define the order of execution */
      order: 800,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: hide,
    },

    /**
     * Computes the style that will be applied to the popper element to gets
     * properly positioned.
     *
     * Note that this modifier will not touch the DOM, it just prepares the styles
     * so that `applyStyle` modifier can apply it. This separation is useful
     * in case you need to replace `applyStyle` with a custom implementation.
     *
     * This modifier has `850` as `order` value to maintain backward compatibility
     * with previous versions of Popper.js. Expect the modifiers ordering method
     * to change in future major versions of the library.
     *
     * @memberof modifiers
     * @inner
     */
    computeStyle: {
      /** @prop {number} order=850 - Index used to define the order of execution */
      order: 850,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: computeStyle,
      /**
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: true,
      /**
       * @prop {string} [x='bottom']
       * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
       * Change this if your popper should grow in a direction different from `bottom`
       */
      x: 'bottom',
      /**
       * @prop {string} [x='left']
       * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
       * Change this if your popper should grow in a direction different from `right`
       */
      y: 'right',
    },

    /**
     * Applies the computed styles to the popper element.
     *
     * All the DOM manipulations are limited to this modifier. This is useful in case
     * you want to integrate Popper.js inside a framework or view library and you
     * want to delegate all the DOM manipulations to it.
     *
     * Note that if you disable this modifier, you must make sure the popper element
     * has its position set to `absolute` before Popper.js can do its work!
     *
     * Just disable this modifier and define your own to achieve the desired effect.
     *
     * @memberof modifiers
     * @inner
     */
    applyStyle: {
      /** @prop {number} order=900 - Index used to define the order of execution */
      order: 900,
      /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
      enabled: true,
      /** @prop {ModifierFn} */
      fn: applyStyle,
      /** @prop {Function} */
      onLoad: applyStyleOnLoad,
      /**
       * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
       * @prop {Boolean} gpuAcceleration=true
       * If true, it uses the CSS 3D transformation to position the popper.
       * Otherwise, it will use the `top` and `left` properties
       */
      gpuAcceleration: undefined,
    },
  };

  /**
   * The `dataObject` is an object containing all the information used by Popper.js.
   * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
   * @name dataObject
   * @property {Object} data.instance The Popper.js instance
   * @property {String} data.placement Placement applied to popper
   * @property {String} data.originalPlacement Placement originally defined on init
   * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
   * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
   * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
   * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
   * @property {Object} data.boundaries Offsets of the popper boundaries
   * @property {Object} data.offsets The measurements of popper, reference and arrow elements
   * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
   * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
   */

  /**
   * Default options provided to Popper.js constructor.<br />
   * These can be overridden using the `options` argument of Popper.js.<br />
   * To override an option, simply pass an object with the same
   * structure of the `options` object, as the 3rd argument. For example:
   * ```
   * new Popper(ref, pop, {
   *   modifiers: {
   *     preventOverflow: { enabled: false }
   *   }
   * })
   * ```
   * @type {Object}
   * @static
   * @memberof Popper
   */
  var Defaults = {
    /**
     * Popper's placement.
     * @prop {Popper.placements} placement='bottom'
     */
    placement: 'bottom',

    /**
     * Set this to true if you want popper to position it self in 'fixed' mode
     * @prop {Boolean} positionFixed=false
     */
    positionFixed: false,

    /**
     * Whether events (resize, scroll) are initially enabled.
     * @prop {Boolean} eventsEnabled=true
     */
    eventsEnabled: true,

    /**
     * Set to true if you want to automatically remove the popper when
     * you call the `destroy` method.
     * @prop {Boolean} removeOnDestroy=false
     */
    removeOnDestroy: false,

    /**
     * Callback called when the popper is created.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onCreate}
     */
    onCreate: function onCreate() {},

    /**
     * Callback called when the popper is updated. This callback is not called
     * on the initialization/creation of the popper, but only on subsequent
     * updates.<br />
     * By default, it is set to no-op.<br />
     * Access Popper.js instance with `data.instance`.
     * @prop {onUpdate}
     */
    onUpdate: function onUpdate() {},

    /**
     * List of modifiers used to modify the offsets before they are applied to the popper.
     * They provide most of the functionalities of Popper.js.
     * @prop {modifiers}
     */
    modifiers: modifiers,
  };

  /**
   * @callback onCreate
   * @param {dataObject} data
   */

  /**
   * @callback onUpdate
   * @param {dataObject} data
   */

  // Utils
  // Methods
  var Popper$1 = (function () {
    /**
     * Creates a new Popper.js instance.
     * @class Popper
     * @param {Element|referenceObject} reference - The reference element used to position the popper
     * @param {Element} popper - The HTML / XML element used as the popper
     * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
     * @return {Object} instance - The generated Popper.js instance
     */
    function Popper(reference, popper) {
      var _this = this;

      var options =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      classCallCheck(this, Popper);

      this.scheduleUpdate = function () {
        return requestAnimationFrame(_this.update);
      };

      // make update() debounced, so that it only runs at most once-per-tick
      this.update = debounce(this.update.bind(this));

      // with {} we create a new object with the options inside it
      this.options = _extends({}, Popper.Defaults, options);

      // init state
      this.state = {
        isDestroyed: false,
        isCreated: false,
        scrollParents: [],
      };

      // get reference and popper elements (allow jQuery wrappers)
      this.reference = reference && reference.jquery ? reference[0] : reference;
      this.popper = popper && popper.jquery ? popper[0] : popper;

      // Deep merge modifiers options
      this.options.modifiers = {};
      Object.keys(
        _extends({}, Popper.Defaults.modifiers, options.modifiers),
      ).forEach(function (name) {
        _this.options.modifiers[name] = _extends(
          {},
          Popper.Defaults.modifiers[name] || {},
          options.modifiers ? options.modifiers[name] : {},
        );
      });

      // Refactoring modifiers' list (Object => Array)
      this.modifiers = Object.keys(this.options.modifiers)
        .map(function (name) {
          return _extends(
            {
              name: name,
            },
            _this.options.modifiers[name],
          );
        })
        // sort the modifiers by order
        .sort(function (a, b) {
          return a.order - b.order;
        });

      // modifiers have the ability to execute arbitrary code when Popper.js get inited
      // such code is executed in the same order of its modifier
      // they could add new properties to their options configuration
      // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
      this.modifiers.forEach(function (modifierOptions) {
        if (modifierOptions.enabled && isFunction$1(modifierOptions.onLoad)) {
          modifierOptions.onLoad(
            _this.reference,
            _this.popper,
            _this.options,
            modifierOptions,
            _this.state,
          );
        }
      });

      // fire the first update to position the popper in the right place
      this.update();

      var eventsEnabled = this.options.eventsEnabled;
      if (eventsEnabled) {
        // setup event listeners, they will take care of update the position in specific situations
        this.enableEventListeners();
      }

      this.state.eventsEnabled = eventsEnabled;
    }

    // We can't use class properties because they don't get listed in the
    // class prototype and break stuff like Sinon stubs

    createClass(Popper, [
      {
        key: 'update',
        value: function update$$1() {
          return update.call(this);
        },
      },
      {
        key: 'destroy',
        value: function destroy$$1() {
          return destroy.call(this);
        },
      },
      {
        key: 'enableEventListeners',
        value: function enableEventListeners$$1() {
          return enableEventListeners.call(this);
        },
      },
      {
        key: 'disableEventListeners',
        value: function disableEventListeners$$1() {
          return disableEventListeners.call(this);
        },

        /**
         * Schedules an update. It will run on the next UI update available.
         * @method scheduleUpdate
         * @memberof Popper
         */

        /**
         * Collection of utilities useful when writing custom modifiers.
         * Starting from version 1.7, this method is available only if you
         * include `popper-utils.js` before `popper.js`.
         *
         * **DEPRECATION**: This way to access PopperUtils is deprecated
         * and will be removed in v2! Use the PopperUtils module directly instead.
         * Due to the high instability of the methods contained in Utils, we can't
         * guarantee them to follow semver. Use them at your own risk!
         * @static
         * @private
         * @type {Object}
         * @deprecated since version 1.8
         * @member Utils
         * @memberof Popper
         */
      },
    ]);
    return Popper;
  })();

  /**
   * The `referenceObject` is an object that provides an interface compatible with Popper.js
   * and lets you use it as replacement of a real DOM node.<br />
   * You can use this method to position a popper relatively to a set of coordinates
   * in case you don't have a DOM node to use as reference.
   *
   * ```
   * new Popper(referenceObject, popperNode);
   * ```
   *
   * NB: This feature isn't supported in Internet Explorer 10.
   * @name referenceObject
   * @property {Function} data.getBoundingClientRect
   * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
   * @property {number} data.clientWidth
   * An ES6 getter that will return the width of the virtual reference element.
   * @property {number} data.clientHeight
   * An ES6 getter that will return the height of the virtual reference element.
   */

  Popper$1.Utils = (
    typeof window !== 'undefined' ? window : global
  ).PopperUtils;
  Popper$1.placements = placements;
  Popper$1.Defaults = Defaults;

  var PopperJs = Popper$1;

  function flipPlacement(placement, theme) {
    var direction = (theme && theme.direction) || 'ltr';

    if (direction === 'ltr') {
      return placement;
    }

    switch (placement) {
      case 'bottom-end':
        return 'bottom-start';

      case 'bottom-start':
        return 'bottom-end';

      case 'top-end':
        return 'top-start';

      case 'top-start':
        return 'top-end';

      default:
        return placement;
    }
  }

  function getAnchorEl(anchorEl) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
  }

  var useEnhancedEffect =
    typeof window !== 'undefined'
      ? react.exports.useLayoutEffect
      : react.exports.useEffect;
  var defaultPopperOptions = {};
  /**
   * Poppers rely on the 3rd party library [Popper.js](https://popper.js.org/docs/v1/) for positioning.
   */

  var Popper = /*#__PURE__*/ react.exports.forwardRef(function Popper(
    props,
    ref,
  ) {
    var anchorEl = props.anchorEl,
      children = props.children,
      container = props.container,
      _props$disablePortal = props.disablePortal,
      disablePortal =
        _props$disablePortal === void 0 ? false : _props$disablePortal,
      _props$keepMounted = props.keepMounted,
      keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted,
      modifiers = props.modifiers,
      open = props.open,
      _props$placement = props.placement,
      initialPlacement =
        _props$placement === void 0 ? 'bottom' : _props$placement,
      _props$popperOptions = props.popperOptions,
      popperOptions =
        _props$popperOptions === void 0
          ? defaultPopperOptions
          : _props$popperOptions,
      popperRefProp = props.popperRef,
      style = props.style,
      _props$transition = props.transition,
      transition = _props$transition === void 0 ? false : _props$transition,
      other = _objectWithoutProperties(props, [
        'anchorEl',
        'children',
        'container',
        'disablePortal',
        'keepMounted',
        'modifiers',
        'open',
        'placement',
        'popperOptions',
        'popperRef',
        'style',
        'transition',
      ]);

    var tooltipRef = react.exports.useRef(null);
    var ownRef = useForkRef(tooltipRef, ref);
    var popperRef = react.exports.useRef(null);
    var handlePopperRef = useForkRef(popperRef, popperRefProp);
    var handlePopperRefRef = react.exports.useRef(handlePopperRef);
    useEnhancedEffect(
      function () {
        handlePopperRefRef.current = handlePopperRef;
      },
      [handlePopperRef],
    );
    react.exports.useImperativeHandle(
      popperRefProp,
      function () {
        return popperRef.current;
      },
      [],
    );

    var _React$useState = react.exports.useState(true),
      exited = _React$useState[0],
      setExited = _React$useState[1];

    var theme = useTheme$1();
    var rtlPlacement = flipPlacement(initialPlacement, theme);
    /**
     * placement initialized from prop but can change during lifetime if modifiers.flip.
     * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
     */

    var _React$useState2 = react.exports.useState(rtlPlacement),
      placement = _React$useState2[0],
      setPlacement = _React$useState2[1];

    react.exports.useEffect(function () {
      if (popperRef.current) {
        popperRef.current.update();
      }
    });
    var handleOpen = react.exports.useCallback(
      function () {
        if (!tooltipRef.current || !anchorEl || !open) {
          return;
        }

        if (popperRef.current) {
          popperRef.current.destroy();
          handlePopperRefRef.current(null);
        }

        var handlePopperUpdate = function handlePopperUpdate(data) {
          setPlacement(data.placement);
        };

        getAnchorEl(anchorEl);

        var popper = new PopperJs(
          getAnchorEl(anchorEl),
          tooltipRef.current,
          _extends$2(
            {
              placement: rtlPlacement,
            },
            popperOptions,
            {
              modifiers: _extends$2(
                {},
                disablePortal
                  ? {}
                  : {
                      // It's using scrollParent by default, we can use the viewport when using a portal.
                      preventOverflow: {
                        boundariesElement: 'window',
                      },
                    },
                modifiers,
                popperOptions.modifiers,
              ),
              // We could have been using a custom modifier like react-popper is doing.
              // But it seems this is the best public API for this use case.
              onCreate: createChainedFunction(
                handlePopperUpdate,
                popperOptions.onCreate,
              ),
              onUpdate: createChainedFunction(
                handlePopperUpdate,
                popperOptions.onUpdate,
              ),
            },
          ),
        );
        handlePopperRefRef.current(popper);
      },
      [anchorEl, disablePortal, modifiers, open, rtlPlacement, popperOptions],
    );
    var handleRef = react.exports.useCallback(
      function (node) {
        setRef(ownRef, node);
        handleOpen();
      },
      [ownRef, handleOpen],
    );

    var handleEnter = function handleEnter() {
      setExited(false);
    };

    var handleClose = function handleClose() {
      if (!popperRef.current) {
        return;
      }

      popperRef.current.destroy();
      handlePopperRefRef.current(null);
    };

    var handleExited = function handleExited() {
      setExited(true);
      handleClose();
    };

    react.exports.useEffect(function () {
      return function () {
        handleClose();
      };
    }, []);
    react.exports.useEffect(
      function () {
        if (!open && !transition) {
          // Otherwise handleExited will call this.
          handleClose();
        }
      },
      [open, transition],
    );

    if (!keepMounted && !open && (!transition || exited)) {
      return null;
    }

    var childProps = {
      placement: placement,
    };

    if (transition) {
      childProps.TransitionProps = {
        in: open,
        onEnter: handleEnter,
        onExited: handleExited,
      };
    }

    return /*#__PURE__*/ react.exports.createElement(
      Portal,
      {
        disablePortal: disablePortal,
        container: container,
      },
      /*#__PURE__*/ react.exports.createElement(
        'div',
        _extends$2(
          {
            ref: handleRef,
            role: 'tooltip',
          },
          other,
          {
            style: _extends$2(
              {
                // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
                position: 'fixed',
                // Fix Popper.js display issue
                top: 0,
                left: 0,
                display: !open && keepMounted && !transition ? 'none' : null,
              },
              style,
            ),
          },
        ),
        typeof children === 'function' ? children(childProps) : children,
      ),
    );
  });

  function areEqualValues(a, b) {
    if (_typeof(b) === 'object' && b !== null) {
      return a === b;
    }

    return String(a) === String(b);
  }

  function isEmpty(display) {
    return display == null || (typeof display === 'string' && !display.trim());
  }
  /**
   * @ignore - internal component.
   */

  var SelectInput = /*#__PURE__*/ react.exports.forwardRef(function SelectInput(
    props,
    ref,
  ) {
    var ariaLabel = props['aria-label'],
      autoFocus = props.autoFocus,
      autoWidth = props.autoWidth,
      children = props.children,
      classes = props.classes,
      className = props.className,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      displayEmpty = props.displayEmpty,
      IconComponent = props.IconComponent,
      inputRefProp = props.inputRef,
      labelId = props.labelId,
      _props$MenuProps = props.MenuProps,
      MenuProps = _props$MenuProps === void 0 ? {} : _props$MenuProps,
      multiple = props.multiple,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onClose = props.onClose,
      onFocus = props.onFocus,
      onOpen = props.onOpen,
      openProp = props.open,
      readOnly = props.readOnly,
      renderValue = props.renderValue,
      _props$SelectDisplayP = props.SelectDisplayProps,
      SelectDisplayProps =
        _props$SelectDisplayP === void 0 ? {} : _props$SelectDisplayP,
      tabIndexProp = props.tabIndex;
    props.type;
    var valueProp = props.value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = _objectWithoutProperties(props, [
        'aria-label',
        'autoFocus',
        'autoWidth',
        'children',
        'classes',
        'className',
        'defaultValue',
        'disabled',
        'displayEmpty',
        'IconComponent',
        'inputRef',
        'labelId',
        'MenuProps',
        'multiple',
        'name',
        'onBlur',
        'onChange',
        'onClose',
        'onFocus',
        'onOpen',
        'open',
        'readOnly',
        'renderValue',
        'SelectDisplayProps',
        'tabIndex',
        'type',
        'value',
        'variant',
      ]);

    var _useControlled = useControlled({
        controlled: valueProp,
        default: defaultValue,
        name: 'Select',
      }),
      _useControlled2 = _slicedToArray(_useControlled, 2),
      value = _useControlled2[0],
      setValue = _useControlled2[1];

    var inputRef = react.exports.useRef(null);

    var _React$useState = react.exports.useState(null),
      displayNode = _React$useState[0],
      setDisplayNode = _React$useState[1];

    var _React$useRef = react.exports.useRef(openProp != null),
      isOpenControlled = _React$useRef.current;

    var _React$useState2 = react.exports.useState(),
      menuMinWidthState = _React$useState2[0],
      setMenuMinWidthState = _React$useState2[1];

    var _React$useState3 = react.exports.useState(false),
      openState = _React$useState3[0],
      setOpenState = _React$useState3[1];

    var handleRef = useForkRef(ref, inputRefProp);
    react.exports.useImperativeHandle(
      handleRef,
      function () {
        return {
          focus: function focus() {
            displayNode.focus();
          },
          node: inputRef.current,
          value: value,
        };
      },
      [displayNode, value],
    );
    react.exports.useEffect(
      function () {
        if (autoFocus && displayNode) {
          displayNode.focus();
        }
      },
      [autoFocus, displayNode],
    );
    react.exports.useEffect(
      function () {
        if (displayNode) {
          var label = ownerDocument(displayNode).getElementById(labelId);

          if (label) {
            var handler = function handler() {
              if (getSelection().isCollapsed) {
                displayNode.focus();
              }
            };

            label.addEventListener('click', handler);
            return function () {
              label.removeEventListener('click', handler);
            };
          }
        }

        return undefined;
      },
      [labelId, displayNode],
    );

    var update = function update(open, event) {
      if (open) {
        if (onOpen) {
          onOpen(event);
        }
      } else if (onClose) {
        onClose(event);
      }

      if (!isOpenControlled) {
        setMenuMinWidthState(autoWidth ? null : displayNode.clientWidth);
        setOpenState(open);
      }
    };

    var handleMouseDown = function handleMouseDown(event) {
      // Ignore everything but left-click
      if (event.button !== 0) {
        return;
      } // Hijack the default focus behavior.

      event.preventDefault();
      displayNode.focus();
      update(true, event);
    };

    var handleClose = function handleClose(event) {
      update(false, event);
    };

    var childrenArray = react.exports.Children.toArray(children); // Support autofill.

    var handleChange = function handleChange(event) {
      var index = childrenArray
        .map(function (child) {
          return child.props.value;
        })
        .indexOf(event.target.value);

      if (index === -1) {
        return;
      }

      var child = childrenArray[index];
      setValue(child.props.value);

      if (onChange) {
        onChange(event, child);
      }
    };

    var handleItemClick = function handleItemClick(child) {
      return function (event) {
        if (!multiple) {
          update(false, event);
        }

        var newValue;

        if (multiple) {
          newValue = Array.isArray(value) ? value.slice() : [];
          var itemIndex = value.indexOf(child.props.value);

          if (itemIndex === -1) {
            newValue.push(child.props.value);
          } else {
            newValue.splice(itemIndex, 1);
          }
        } else {
          newValue = child.props.value;
        }

        if (child.props.onClick) {
          child.props.onClick(event);
        }

        if (value === newValue) {
          return;
        }

        setValue(newValue);

        if (onChange) {
          event.persist(); // Preact support, target is read only property on a native event.

          Object.defineProperty(event, 'target', {
            writable: true,
            value: {
              value: newValue,
              name: name,
            },
          });
          onChange(event, child);
        }
      };
    };

    var handleKeyDown = function handleKeyDown(event) {
      if (!readOnly) {
        var validKeys = [
          ' ',
          'ArrowUp',
          'ArrowDown', // The native select doesn't respond to enter on MacOS, but it's recommended by
          // https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html
          'Enter',
        ];

        if (validKeys.indexOf(event.key) !== -1) {
          event.preventDefault();
          update(true, event);
        }
      }
    };

    var open =
      displayNode !== null && (isOpenControlled ? openProp : openState);

    var handleBlur = function handleBlur(event) {
      // if open event.stopImmediatePropagation
      if (!open && onBlur) {
        event.persist(); // Preact support, target is read only property on a native event.

        Object.defineProperty(event, 'target', {
          writable: true,
          value: {
            value: value,
            name: name,
          },
        });
        onBlur(event);
      }
    };

    delete other['aria-invalid'];
    var display;
    var displaySingle;
    var displayMultiple = [];
    var computeDisplay = false;

    if (
      isFilled({
        value: value,
      }) ||
      displayEmpty
    ) {
      if (renderValue) {
        display = renderValue(value);
      } else {
        computeDisplay = true;
      }
    }

    var items = childrenArray.map(function (child) {
      if (!(/*#__PURE__*/ react.exports.isValidElement(child))) {
        return null;
      }

      var selected;

      if (multiple) {
        if (!Array.isArray(value)) {
          throw new Error(utils$1.formatMuiErrorMessage(2));
        }

        selected = value.some(function (v) {
          return areEqualValues(v, child.props.value);
        });

        if (selected && computeDisplay) {
          displayMultiple.push(child.props.children);
        }
      } else {
        selected = areEqualValues(value, child.props.value);

        if (selected && computeDisplay) {
          displaySingle = child.props.children;
        }
      }

      return /*#__PURE__*/ react.exports.cloneElement(child, {
        'aria-selected': selected ? 'true' : undefined,
        onClick: handleItemClick(child),
        onKeyUp: function onKeyUp(event) {
          if (event.key === ' ') {
            // otherwise our MenuItems dispatches a click event
            // it's not behavior of the native <option> and causes
            // the select to close immediately since we open on space keydown
            event.preventDefault();
          }

          if (child.props.onKeyUp) {
            child.props.onKeyUp(event);
          }
        },
        role: 'option',
        selected: selected,
        value: undefined,
        // The value is most likely not a valid HTML attribute.
        'data-value': child.props.value, // Instead, we provide it as a data attribute.
      });
    });

    if (computeDisplay) {
      display = multiple ? displayMultiple.join(', ') : displaySingle;
    } // Avoid performing a layout computation in the render method.

    var menuMinWidth = menuMinWidthState;

    if (!autoWidth && isOpenControlled && displayNode) {
      menuMinWidth = displayNode.clientWidth;
    }

    var tabIndex;

    if (typeof tabIndexProp !== 'undefined') {
      tabIndex = tabIndexProp;
    } else {
      tabIndex = disabled ? null : 0;
    }

    var buttonId =
      SelectDisplayProps.id ||
      (name ? 'mui-component-select-'.concat(name) : undefined);
    return /*#__PURE__*/ react.exports.createElement(
      react.exports.Fragment,
      null,
      /*#__PURE__*/ react.exports.createElement(
        'div',
        _extends$2(
          {
            className: clsx(
              classes.root, // TODO v5: merge root and select
              classes.select,
              classes.selectMenu,
              classes[variant],
              className,
              disabled && classes.disabled,
            ),
            ref: setDisplayNode,
            tabIndex: tabIndex,
            role: 'button',
            'aria-disabled': disabled ? 'true' : undefined,
            'aria-expanded': open ? 'true' : undefined,
            'aria-haspopup': 'listbox',
            'aria-label': ariaLabel,
            'aria-labelledby':
              [labelId, buttonId].filter(Boolean).join(' ') || undefined,
            onKeyDown: handleKeyDown,
            onMouseDown: disabled || readOnly ? null : handleMouseDown,
            onBlur: handleBlur,
            onFocus: onFocus,
          },
          SelectDisplayProps,
          {
            // The id is required for proper a11y
            id: buttonId,
          },
        ),
        isEmpty(display)
          ? /*#__PURE__*/
            // eslint-disable-next-line react/no-danger
            react.exports.createElement('span', {
              dangerouslySetInnerHTML: {
                __html: '&#8203;',
              },
            })
          : display,
      ),
      /*#__PURE__*/ react.exports.createElement(
        'input',
        _extends$2(
          {
            value: Array.isArray(value) ? value.join(',') : value,
            name: name,
            ref: inputRef,
            'aria-hidden': true,
            onChange: handleChange,
            tabIndex: -1,
            className: classes.nativeInput,
            autoFocus: autoFocus,
          },
          other,
        ),
      ),
      /*#__PURE__*/ react.exports.createElement(IconComponent, {
        className: clsx(
          classes.icon,
          classes['icon'.concat(capitalize(variant))],
          open && classes.iconOpen,
          disabled && classes.disabled,
        ),
      }),
      /*#__PURE__*/ react.exports.createElement(
        Menu$1,
        _extends$2(
          {
            id: 'menu-'.concat(name || ''),
            anchorEl: displayNode,
            open: open,
            onClose: handleClose,
          },
          MenuProps,
          {
            MenuListProps: _extends$2(
              {
                'aria-labelledby': labelId,
                role: 'listbox',
                disableListWrap: true,
              },
              MenuProps.MenuListProps,
            ),
            PaperProps: _extends$2({}, MenuProps.PaperProps, {
              style: _extends$2(
                {
                  minWidth: menuMinWidth,
                },
                MenuProps.PaperProps != null
                  ? MenuProps.PaperProps.style
                  : null,
              ),
            }),
          },
        ),
        items,
      ),
    );
  });

  var styles$3 = styles$6;

  var _ref = /*#__PURE__*/ react.exports.createElement(Input$1, null);

  var _ref2 = /*#__PURE__*/ react.exports.createElement(FilledInput$1, null);

  var Select = /*#__PURE__*/ react.exports.forwardRef(function Select(
    props,
    ref,
  ) {
    var _props$autoWidth = props.autoWidth,
      autoWidth = _props$autoWidth === void 0 ? false : _props$autoWidth,
      children = props.children,
      classes = props.classes,
      _props$displayEmpty = props.displayEmpty,
      displayEmpty =
        _props$displayEmpty === void 0 ? false : _props$displayEmpty,
      _props$IconComponent = props.IconComponent,
      IconComponent =
        _props$IconComponent === void 0
          ? ArrowDropDownIcon
          : _props$IconComponent,
      id = props.id,
      input = props.input,
      inputProps = props.inputProps,
      label = props.label,
      labelId = props.labelId,
      _props$labelWidth = props.labelWidth,
      labelWidth = _props$labelWidth === void 0 ? 0 : _props$labelWidth,
      MenuProps = props.MenuProps,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? false : _props$multiple,
      _props$native = props.native,
      native = _props$native === void 0 ? false : _props$native,
      onClose = props.onClose,
      onOpen = props.onOpen,
      open = props.open,
      renderValue = props.renderValue,
      SelectDisplayProps = props.SelectDisplayProps,
      _props$variant = props.variant,
      variantProps = _props$variant === void 0 ? 'standard' : _props$variant,
      other = _objectWithoutProperties(props, [
        'autoWidth',
        'children',
        'classes',
        'displayEmpty',
        'IconComponent',
        'id',
        'input',
        'inputProps',
        'label',
        'labelId',
        'labelWidth',
        'MenuProps',
        'multiple',
        'native',
        'onClose',
        'onOpen',
        'open',
        'renderValue',
        'SelectDisplayProps',
        'variant',
      ]);

    var inputComponent = native ? NativeSelectInput : SelectInput;
    var muiFormControl = useFormControl();
    var fcs = formControlState({
      props: props,
      muiFormControl: muiFormControl,
      states: ['variant'],
    });
    var variant = fcs.variant || variantProps;
    var InputComponent =
      input ||
      {
        standard: _ref,
        outlined: /*#__PURE__*/ react.exports.createElement(OutlinedInput$1, {
          label: label,
          labelWidth: labelWidth,
        }),
        filled: _ref2,
      }[variant];
    return /*#__PURE__*/ react.exports.cloneElement(
      InputComponent,
      _extends$2(
        {
          // Most of the logic is implemented in `SelectInput`.
          // The `Select` component is a simple API wrapper to expose something better to play with.
          inputComponent: inputComponent,
          inputProps: _extends$2(
            {
              children: children,
              IconComponent: IconComponent,
              variant: variant,
              type: undefined,
              // We render a select. We can ignore the type provided by the `Input`.
              multiple: multiple,
            },
            native
              ? {
                  id: id,
                }
              : {
                  autoWidth: autoWidth,
                  displayEmpty: displayEmpty,
                  labelId: labelId,
                  MenuProps: MenuProps,
                  onClose: onClose,
                  onOpen: onOpen,
                  open: open,
                  renderValue: renderValue,
                  SelectDisplayProps: _extends$2(
                    {
                      id: id,
                    },
                    SelectDisplayProps,
                  ),
                },
            inputProps,
            {
              classes: inputProps
                ? mergeClasses({
                    baseClasses: classes,
                    newClasses: inputProps.classes,
                    Component: Select,
                  })
                : classes,
            },
            input ? input.props.inputProps : {},
          ),
          ref: ref,
        },
        other,
      ),
    );
  });
  Select.muiName = 'Select';
  var Select$1 = withStyles(styles$3, {
    name: 'MuiSelect',
  })(Select);

  var styles$2 = function styles(theme) {
    return {
      /* Styles applied to the root element. */
      root: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
      },

      /* Styles applied to the root element if `disableGutters={false}`. */
      gutters: _defineProperty(
        {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
        },
        theme.breakpoints.up('sm'),
        {
          paddingLeft: theme.spacing(3),
          paddingRight: theme.spacing(3),
        },
      ),

      /* Styles applied to the root element if `variant="regular"`. */
      regular: theme.mixins.toolbar,

      /* Styles applied to the root element if `variant="dense"`. */
      dense: {
        minHeight: 48,
      },
    };
  };
  var Toolbar = /*#__PURE__*/ react.exports.forwardRef(function Toolbar(
    props,
    ref,
  ) {
    var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters =
        _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'regular' : _props$variant,
      other = _objectWithoutProperties(props, [
        'classes',
        'className',
        'component',
        'disableGutters',
        'variant',
      ]);

    return /*#__PURE__*/ react.exports.createElement(
      Component,
      _extends$2(
        {
          className: clsx(
            classes.root,
            classes[variant],
            className,
            !disableGutters && classes.gutters,
          ),
          ref: ref,
        },
        other,
      ),
    );
  });
  var Toolbar$1 = withStyles(styles$2, {
    name: 'MuiToolbar',
  })(Toolbar);

  var variantComponent = {
    standard: Input$1,
    filled: FilledInput$1,
    outlined: OutlinedInput$1,
  };
  var styles$1 = {
    /* Styles applied to the root element. */
    root: {},
  };
  /**
   * The `TextField` is a convenience wrapper for the most common cases (80%).
   * It cannot be all things to all people, otherwise the API would grow out of control.
   *
   * ## Advanced Configuration
   *
   * It's important to understand that the text field is a simple abstraction
   * on top of the following components:
   *
   * - [FormControl](/api/form-control/)
   * - [InputLabel](/api/input-label/)
   * - [FilledInput](/api/filled-input/)
   * - [OutlinedInput](/api/outlined-input/)
   * - [Input](/api/input/)
   * - [FormHelperText](/api/form-helper-text/)
   *
   * If you wish to alter the props applied to the `input` element, you can do so as follows:
   *
   * ```jsx
   * const inputProps = {
   *   step: 300,
   * };
   *
   * return <TextField id="time" type="time" inputProps={inputProps} />;
   * ```
   *
   * For advanced cases, please look at the source of TextField by clicking on the
   * "Edit this page" button above. Consider either:
   *
   * - using the upper case props for passing values directly to the components
   * - using the underlying components directly as shown in the demos
   */

  var TextField = /*#__PURE__*/ react.exports.forwardRef(function TextField(
    props,
    ref,
  ) {
    var autoComplete = props.autoComplete,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      defaultValue = props.defaultValue,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      FormHelperTextProps = props.FormHelperTextProps,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      helperText = props.helperText,
      hiddenLabel = props.hiddenLabel,
      id = props.id,
      InputLabelProps = props.InputLabelProps,
      inputProps = props.inputProps,
      InputProps = props.InputProps,
      inputRef = props.inputRef,
      label = props.label,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      placeholder = props.placeholder,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      rows = props.rows,
      rowsMax = props.rowsMax,
      maxRows = props.maxRows,
      minRows = props.minRows,
      _props$select = props.select,
      select = _props$select === void 0 ? false : _props$select,
      SelectProps = props.SelectProps,
      type = props.type,
      value = props.value,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = _objectWithoutProperties(props, [
        'autoComplete',
        'autoFocus',
        'children',
        'classes',
        'className',
        'color',
        'defaultValue',
        'disabled',
        'error',
        'FormHelperTextProps',
        'fullWidth',
        'helperText',
        'hiddenLabel',
        'id',
        'InputLabelProps',
        'inputProps',
        'InputProps',
        'inputRef',
        'label',
        'multiline',
        'name',
        'onBlur',
        'onChange',
        'onFocus',
        'placeholder',
        'required',
        'rows',
        'rowsMax',
        'maxRows',
        'minRows',
        'select',
        'SelectProps',
        'type',
        'value',
        'variant',
      ]);

    var InputMore = {};

    if (variant === 'outlined') {
      if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
        InputMore.notched = InputLabelProps.shrink;
      }

      if (label) {
        var _InputLabelProps$requ;

        var displayRequired =
          (_InputLabelProps$requ =
            InputLabelProps === null || InputLabelProps === void 0
              ? void 0
              : InputLabelProps.required) !== null &&
          _InputLabelProps$requ !== void 0
            ? _InputLabelProps$requ
            : required;
        InputMore.label = /*#__PURE__*/ react.exports.createElement(
          react.exports.Fragment,
          null,
          label,
          displayRequired && '\xA0*',
        );
      }
    }

    if (select) {
      // unset defaults from textbox inputs
      if (!SelectProps || !SelectProps.native) {
        InputMore.id = undefined;
      }

      InputMore['aria-describedby'] = undefined;
    }

    var helperTextId =
      helperText && id ? ''.concat(id, '-helper-text') : undefined;
    var inputLabelId = label && id ? ''.concat(id, '-label') : undefined;
    var InputComponent = variantComponent[variant];
    var InputElement = /*#__PURE__*/ react.exports.createElement(
      InputComponent,
      _extends$2(
        {
          'aria-describedby': helperTextId,
          autoComplete: autoComplete,
          autoFocus: autoFocus,
          defaultValue: defaultValue,
          fullWidth: fullWidth,
          multiline: multiline,
          name: name,
          rows: rows,
          rowsMax: rowsMax,
          maxRows: maxRows,
          minRows: minRows,
          type: type,
          value: value,
          id: id,
          inputRef: inputRef,
          onBlur: onBlur,
          onChange: onChange,
          onFocus: onFocus,
          placeholder: placeholder,
          inputProps: inputProps,
        },
        InputMore,
        InputProps,
      ),
    );
    return /*#__PURE__*/ react.exports.createElement(
      FormControl$1,
      _extends$2(
        {
          className: clsx(classes.root, className),
          disabled: disabled,
          error: error,
          fullWidth: fullWidth,
          hiddenLabel: hiddenLabel,
          ref: ref,
          required: required,
          color: color,
          variant: variant,
        },
        other,
      ),
      label &&
        /*#__PURE__*/ react.exports.createElement(
          InputLabel$1,
          _extends$2(
            {
              htmlFor: id,
              id: inputLabelId,
            },
            InputLabelProps,
          ),
          label,
        ),
      select
        ? /*#__PURE__*/ react.exports.createElement(
            Select$1,
            _extends$2(
              {
                'aria-describedby': helperTextId,
                id: id,
                labelId: inputLabelId,
                value: value,
                input: InputElement,
              },
              SelectProps,
            ),
            children,
          )
        : InputElement,
      helperText &&
        /*#__PURE__*/ react.exports.createElement(
          FormHelperText$1,
          _extends$2(
            {
              id: helperTextId,
            },
            FormHelperTextProps,
          ),
          helperText,
        ),
    );
  });
  var TextField$1 = withStyles(styles$1, {
    name: 'MuiTextField',
  })(TextField);

  function round(value) {
    return Math.round(value * 1e5) / 1e5;
  }

  function arrowGenerator() {
    return {
      '&[x-placement*="bottom"] $arrow': {
        top: 0,
        left: 0,
        marginTop: '-0.71em',
        marginLeft: 4,
        marginRight: 4,
        '&::before': {
          transformOrigin: '0 100%',
        },
      },
      '&[x-placement*="top"] $arrow': {
        bottom: 0,
        left: 0,
        marginBottom: '-0.71em',
        marginLeft: 4,
        marginRight: 4,
        '&::before': {
          transformOrigin: '100% 0',
        },
      },
      '&[x-placement*="right"] $arrow': {
        left: 0,
        marginLeft: '-0.71em',
        height: '1em',
        width: '0.71em',
        marginTop: 4,
        marginBottom: 4,
        '&::before': {
          transformOrigin: '100% 100%',
        },
      },
      '&[x-placement*="left"] $arrow': {
        right: 0,
        marginRight: '-0.71em',
        height: '1em',
        width: '0.71em',
        marginTop: 4,
        marginBottom: 4,
        '&::before': {
          transformOrigin: '0 0',
        },
      },
    };
  }

  var styles = function styles(theme) {
    return {
      /* Styles applied to the Popper component. */
      popper: {
        zIndex: theme.zIndex.tooltip,
        pointerEvents: 'none', // disable jss-rtl plugin
      },

      /* Styles applied to the Popper component if `interactive={true}`. */
      popperInteractive: {
        pointerEvents: 'auto',
      },

      /* Styles applied to the Popper component if `arrow={true}`. */
      popperArrow: arrowGenerator(),

      /* Styles applied to the tooltip (label wrapper) element. */
      tooltip: {
        backgroundColor: alpha(theme.palette.grey[700], 0.9),
        borderRadius: theme.shape.borderRadius,
        color: theme.palette.common.white,
        fontFamily: theme.typography.fontFamily,
        padding: '4px 8px',
        fontSize: theme.typography.pxToRem(10),
        lineHeight: ''.concat(round(14 / 10), 'em'),
        maxWidth: 300,
        wordWrap: 'break-word',
        fontWeight: theme.typography.fontWeightMedium,
      },

      /* Styles applied to the tooltip (label wrapper) element if `arrow={true}`. */
      tooltipArrow: {
        position: 'relative',
        margin: '0',
      },

      /* Styles applied to the arrow element. */
      arrow: {
        overflow: 'hidden',
        position: 'absolute',
        width: '1em',
        height: '0.71em',
        /* = width / sqrt(2) = (length of the hypotenuse) */
        boxSizing: 'border-box',
        color: alpha(theme.palette.grey[700], 0.9),
        '&::before': {
          content: '""',
          margin: 'auto',
          display: 'block',
          width: '100%',
          height: '100%',
          backgroundColor: 'currentColor',
          transform: 'rotate(45deg)',
        },
      },

      /* Styles applied to the tooltip (label wrapper) element if the tooltip is opened by touch. */
      touch: {
        padding: '8px 16px',
        fontSize: theme.typography.pxToRem(14),
        lineHeight: ''.concat(round(16 / 14), 'em'),
        fontWeight: theme.typography.fontWeightRegular,
      },

      /* Styles applied to the tooltip (label wrapper) element if `placement` contains "left". */
      tooltipPlacementLeft: _defineProperty(
        {
          transformOrigin: 'right center',
          margin: '0 24px ',
        },
        theme.breakpoints.up('sm'),
        {
          margin: '0 14px',
        },
      ),

      /* Styles applied to the tooltip (label wrapper) element if `placement` contains "right". */
      tooltipPlacementRight: _defineProperty(
        {
          transformOrigin: 'left center',
          margin: '0 24px',
        },
        theme.breakpoints.up('sm'),
        {
          margin: '0 14px',
        },
      ),

      /* Styles applied to the tooltip (label wrapper) element if `placement` contains "top". */
      tooltipPlacementTop: _defineProperty(
        {
          transformOrigin: 'center bottom',
          margin: '24px 0',
        },
        theme.breakpoints.up('sm'),
        {
          margin: '14px 0',
        },
      ),

      /* Styles applied to the tooltip (label wrapper) element if `placement` contains "bottom". */
      tooltipPlacementBottom: _defineProperty(
        {
          transformOrigin: 'center top',
          margin: '24px 0',
        },
        theme.breakpoints.up('sm'),
        {
          margin: '14px 0',
        },
      ),
    };
  };
  var hystersisOpen = false;
  var hystersisTimer = null;
  var Tooltip = /*#__PURE__*/ react.exports.forwardRef(function Tooltip(
    props,
    ref,
  ) {
    var _props$arrow = props.arrow,
      arrow = _props$arrow === void 0 ? false : _props$arrow,
      children = props.children,
      classes = props.classes,
      _props$disableFocusLi = props.disableFocusListener,
      disableFocusListener =
        _props$disableFocusLi === void 0 ? false : _props$disableFocusLi,
      _props$disableHoverLi = props.disableHoverListener,
      disableHoverListener =
        _props$disableHoverLi === void 0 ? false : _props$disableHoverLi,
      _props$disableTouchLi = props.disableTouchListener,
      disableTouchListener =
        _props$disableTouchLi === void 0 ? false : _props$disableTouchLi,
      _props$enterDelay = props.enterDelay,
      enterDelay = _props$enterDelay === void 0 ? 100 : _props$enterDelay,
      _props$enterNextDelay = props.enterNextDelay,
      enterNextDelay =
        _props$enterNextDelay === void 0 ? 0 : _props$enterNextDelay,
      _props$enterTouchDela = props.enterTouchDelay,
      enterTouchDelay =
        _props$enterTouchDela === void 0 ? 700 : _props$enterTouchDela,
      idProp = props.id,
      _props$interactive = props.interactive,
      interactive = _props$interactive === void 0 ? false : _props$interactive,
      _props$leaveDelay = props.leaveDelay,
      leaveDelay = _props$leaveDelay === void 0 ? 0 : _props$leaveDelay,
      _props$leaveTouchDela = props.leaveTouchDelay,
      leaveTouchDelay =
        _props$leaveTouchDela === void 0 ? 1500 : _props$leaveTouchDela,
      onClose = props.onClose,
      onOpen = props.onOpen,
      openProp = props.open,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'bottom' : _props$placement,
      _props$PopperComponen = props.PopperComponent,
      PopperComponent =
        _props$PopperComponen === void 0 ? Popper : _props$PopperComponen,
      PopperProps = props.PopperProps,
      title = props.title,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent =
        _props$TransitionComp === void 0 ? Grow : _props$TransitionComp,
      TransitionProps = props.TransitionProps,
      other = _objectWithoutProperties(props, [
        'arrow',
        'children',
        'classes',
        'disableFocusListener',
        'disableHoverListener',
        'disableTouchListener',
        'enterDelay',
        'enterNextDelay',
        'enterTouchDelay',
        'id',
        'interactive',
        'leaveDelay',
        'leaveTouchDelay',
        'onClose',
        'onOpen',
        'open',
        'placement',
        'PopperComponent',
        'PopperProps',
        'title',
        'TransitionComponent',
        'TransitionProps',
      ]);

    var theme = useTheme();

    var _React$useState = react.exports.useState(),
      childNode = _React$useState[0],
      setChildNode = _React$useState[1];

    var _React$useState2 = react.exports.useState(null),
      arrowRef = _React$useState2[0],
      setArrowRef = _React$useState2[1];

    var ignoreNonTouchEvents = react.exports.useRef(false);
    var closeTimer = react.exports.useRef();
    var enterTimer = react.exports.useRef();
    var leaveTimer = react.exports.useRef();
    var touchTimer = react.exports.useRef();

    var _useControlled = useControlled({
        controlled: openProp,
        default: false,
        name: 'Tooltip',
        state: 'open',
      }),
      _useControlled2 = _slicedToArray(_useControlled, 2),
      openState = _useControlled2[0],
      setOpenState = _useControlled2[1];

    var open = openState;

    var id = useId(idProp);
    react.exports.useEffect(function () {
      return function () {
        clearTimeout(closeTimer.current);
        clearTimeout(enterTimer.current);
        clearTimeout(leaveTimer.current);
        clearTimeout(touchTimer.current);
      };
    }, []);

    var handleOpen = function handleOpen(event) {
      clearTimeout(hystersisTimer);
      hystersisOpen = true; // The mouseover event will trigger for every nested element in the tooltip.
      // We can skip rerendering when the tooltip is already open.
      // We are using the mouseover event instead of the mouseenter event to fix a hide/show issue.

      setOpenState(true);

      if (onOpen) {
        onOpen(event);
      }
    };

    var handleEnter = function handleEnter() {
      var forward =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : true;
      return function (event) {
        var childrenProps = children.props;

        if (
          event.type === 'mouseover' &&
          childrenProps.onMouseOver &&
          forward
        ) {
          childrenProps.onMouseOver(event);
        }

        if (ignoreNonTouchEvents.current && event.type !== 'touchstart') {
          return;
        } // Remove the title ahead of time.
        // We don't want to wait for the next render commit.
        // We would risk displaying two tooltips at the same time (native + this one).

        if (childNode) {
          childNode.removeAttribute('title');
        }

        clearTimeout(enterTimer.current);
        clearTimeout(leaveTimer.current);

        if (enterDelay || (hystersisOpen && enterNextDelay)) {
          event.persist();
          enterTimer.current = setTimeout(
            function () {
              handleOpen(event);
            },
            hystersisOpen ? enterNextDelay : enterDelay,
          );
        } else {
          handleOpen(event);
        }
      };
    };

    var _useIsFocusVisible = useIsFocusVisible(),
      isFocusVisible = _useIsFocusVisible.isFocusVisible,
      onBlurVisible = _useIsFocusVisible.onBlurVisible,
      focusVisibleRef = _useIsFocusVisible.ref;

    var _React$useState3 = react.exports.useState(false),
      childIsFocusVisible = _React$useState3[0],
      setChildIsFocusVisible = _React$useState3[1];

    var handleBlur = function handleBlur() {
      if (childIsFocusVisible) {
        setChildIsFocusVisible(false);
        onBlurVisible();
      }
    };

    var handleFocus = function handleFocus() {
      var forward =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : true;
      return function (event) {
        // Workaround for https://github.com/facebook/react/issues/7769
        // The autoFocus of React might trigger the event before the componentDidMount.
        // We need to account for this eventuality.
        if (!childNode) {
          setChildNode(event.currentTarget);
        }

        if (isFocusVisible(event)) {
          setChildIsFocusVisible(true);
          handleEnter()(event);
        }

        var childrenProps = children.props;

        if (childrenProps.onFocus && forward) {
          childrenProps.onFocus(event);
        }
      };
    };

    var handleClose = function handleClose(event) {
      clearTimeout(hystersisTimer);
      hystersisTimer = setTimeout(function () {
        hystersisOpen = false;
      }, 800 + leaveDelay);
      setOpenState(false);

      if (onClose) {
        onClose(event);
      }

      clearTimeout(closeTimer.current);
      closeTimer.current = setTimeout(function () {
        ignoreNonTouchEvents.current = false;
      }, theme.transitions.duration.shortest);
    };

    var handleLeave = function handleLeave() {
      var forward =
        arguments.length > 0 && arguments[0] !== undefined
          ? arguments[0]
          : true;
      return function (event) {
        var childrenProps = children.props;

        if (event.type === 'blur') {
          if (childrenProps.onBlur && forward) {
            childrenProps.onBlur(event);
          }

          handleBlur();
        }

        if (
          event.type === 'mouseleave' &&
          childrenProps.onMouseLeave &&
          event.currentTarget === childNode
        ) {
          childrenProps.onMouseLeave(event);
        }

        clearTimeout(enterTimer.current);
        clearTimeout(leaveTimer.current);
        event.persist();
        leaveTimer.current = setTimeout(function () {
          handleClose(event);
        }, leaveDelay);
      };
    };

    var detectTouchStart = function detectTouchStart(event) {
      ignoreNonTouchEvents.current = true;
      var childrenProps = children.props;

      if (childrenProps.onTouchStart) {
        childrenProps.onTouchStart(event);
      }
    };

    var handleTouchStart = function handleTouchStart(event) {
      detectTouchStart(event);
      clearTimeout(leaveTimer.current);
      clearTimeout(closeTimer.current);
      clearTimeout(touchTimer.current);
      event.persist();
      touchTimer.current = setTimeout(function () {
        handleEnter()(event);
      }, enterTouchDelay);
    };

    var handleTouchEnd = function handleTouchEnd(event) {
      if (children.props.onTouchEnd) {
        children.props.onTouchEnd(event);
      }

      clearTimeout(touchTimer.current);
      clearTimeout(leaveTimer.current);
      event.persist();
      leaveTimer.current = setTimeout(function () {
        handleClose(event);
      }, leaveTouchDelay);
    };

    var handleUseRef = useForkRef(setChildNode, ref);
    var handleFocusRef = useForkRef(focusVisibleRef, handleUseRef); // can be removed once we drop support for non ref forwarding class components

    var handleOwnRef = react.exports.useCallback(
      function (instance) {
        // #StrictMode ready
        setRef(handleFocusRef, reactDom.exports.findDOMNode(instance));
      },
      [handleFocusRef],
    );
    var handleRef = useForkRef(children.ref, handleOwnRef); // There is no point in displaying an empty tooltip.

    if (title === '') {
      open = false;
    } // For accessibility and SEO concerns, we render the title to the DOM node when
    // the tooltip is hidden. However, we have made a tradeoff when
    // `disableHoverListener` is set. This title logic is disabled.
    // It's allowing us to keep the implementation size minimal.
    // We are open to change the tradeoff.

    var shouldShowNativeTitle = !open && !disableHoverListener;

    var childrenProps = _extends$2(
      {
        'aria-describedby': open ? id : null,
        title:
          shouldShowNativeTitle && typeof title === 'string' ? title : null,
      },
      other,
      children.props,
      {
        className: clsx(other.className, children.props.className),
        onTouchStart: detectTouchStart,
        ref: handleRef,
      },
    );

    var interactiveWrapperListeners = {};

    if (!disableTouchListener) {
      childrenProps.onTouchStart = handleTouchStart;
      childrenProps.onTouchEnd = handleTouchEnd;
    }

    if (!disableHoverListener) {
      childrenProps.onMouseOver = handleEnter();
      childrenProps.onMouseLeave = handleLeave();

      if (interactive) {
        interactiveWrapperListeners.onMouseOver = handleEnter(false);
        interactiveWrapperListeners.onMouseLeave = handleLeave(false);
      }
    }

    if (!disableFocusListener) {
      childrenProps.onFocus = handleFocus();
      childrenProps.onBlur = handleLeave();

      if (interactive) {
        interactiveWrapperListeners.onFocus = handleFocus(false);
        interactiveWrapperListeners.onBlur = handleLeave(false);
      }
    }

    var mergedPopperProps = react.exports.useMemo(
      function () {
        return utils$1.deepmerge(
          {
            popperOptions: {
              modifiers: {
                arrow: {
                  enabled: Boolean(arrowRef),
                  element: arrowRef,
                },
              },
            },
          },
          PopperProps,
        );
      },
      [arrowRef, PopperProps],
    );
    return /*#__PURE__*/ react.exports.createElement(
      react.exports.Fragment,
      null,
      /*#__PURE__*/ react.exports.cloneElement(children, childrenProps),
      /*#__PURE__*/ react.exports.createElement(
        PopperComponent,
        _extends$2(
          {
            className: clsx(
              classes.popper,
              interactive && classes.popperInteractive,
              arrow && classes.popperArrow,
            ),
            placement: placement,
            anchorEl: childNode,
            open: childNode ? open : false,
            id: childrenProps['aria-describedby'],
            transition: true,
          },
          interactiveWrapperListeners,
          mergedPopperProps,
        ),
        function (_ref) {
          var placementInner = _ref.placement,
            TransitionPropsInner = _ref.TransitionProps;
          return /*#__PURE__*/ react.exports.createElement(
            TransitionComponent,
            _extends$2(
              {
                timeout: theme.transitions.duration.shorter,
              },
              TransitionPropsInner,
              TransitionProps,
            ),
            /*#__PURE__*/ react.exports.createElement(
              'div',
              {
                className: clsx(
                  classes.tooltip,
                  classes[
                    'tooltipPlacement'.concat(
                      capitalize(placementInner.split('-')[0]),
                    )
                  ],
                  ignoreNonTouchEvents.current && classes.touch,
                  arrow && classes.tooltipArrow,
                ),
              },
              title,
              arrow
                ? /*#__PURE__*/ react.exports.createElement('span', {
                    className: classes.arrow,
                    ref: setArrowRef,
                  })
                : null,
            ),
          );
        },
      ),
    );
  });
  var Tooltip$1 = withStyles(styles, {
    name: 'MuiTooltip',
    flip: false,
  })(Tooltip);

  const useStyles$5 = makeStyles(() => ({
    ul: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
    },
    li: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
    },
  }));
  const Ul = ({ children, className }) => {
    const classes = useStyles$5();
    return React$3.createElement(
      'ul',
      { className: `${classes.ul} ${className ? className : ''}` },
      children,
    );
  };
  const Li = ({ children, className }) => {
    const classes = useStyles$5();
    return React$3.createElement(
      'li',
      { className: `${classes.li} ${className ? className : ''}` },
      children,
    );
  };

  function n(n) {
    for (
      var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), e = 1;
      e < r;
      e++
    )
      t[e - 1] = arguments[e];
    throw Error(
      '[Immer] minified error nr: ' +
        n +
        (t.length
          ? ' ' +
            t
              .map(function (n) {
                return "'" + n + "'";
              })
              .join(',')
          : '') +
        '. Find the full error at: https://bit.ly/3cXEKWf',
    );
  }
  function r(n) {
    return !!n && !!n[Q];
  }
  function t(n) {
    return (
      !!n &&
      ((function (n) {
        if (!n || 'object' != typeof n) return !1;
        var r = Object.getPrototypeOf(n);
        if (null === r) return !0;
        var t = Object.hasOwnProperty.call(r, 'constructor') && r.constructor;
        return (
          t === Object ||
          ('function' == typeof t && Function.toString.call(t) === Z)
        );
      })(n) ||
        Array.isArray(n) ||
        !!n[L] ||
        !!n.constructor[L] ||
        s(n) ||
        v(n))
    );
  }
  function i(n, r, t) {
    void 0 === t && (t = !1),
      0 === o(n)
        ? (t ? Object.keys : nn)(n).forEach(function (e) {
            (t && 'symbol' == typeof e) || r(e, n[e], n);
          })
        : n.forEach(function (t, e) {
            return r(e, t, n);
          });
  }
  function o(n) {
    var r = n[Q];
    return r
      ? r.i > 3
        ? r.i - 4
        : r.i
      : Array.isArray(n)
      ? 1
      : s(n)
      ? 2
      : v(n)
      ? 3
      : 0;
  }
  function u(n, r) {
    return 2 === o(n) ? n.has(r) : Object.prototype.hasOwnProperty.call(n, r);
  }
  function a(n, r) {
    return 2 === o(n) ? n.get(r) : n[r];
  }
  function f(n, r, t) {
    var e = o(n);
    2 === e ? n.set(r, t) : 3 === e ? (n.delete(r), n.add(t)) : (n[r] = t);
  }
  function c(n, r) {
    return n === r ? 0 !== n || 1 / n == 1 / r : n != n && r != r;
  }
  function s(n) {
    return X && n instanceof Map;
  }
  function v(n) {
    return q && n instanceof Set;
  }
  function p(n) {
    return n.o || n.t;
  }
  function l(n) {
    if (Array.isArray(n)) return Array.prototype.slice.call(n);
    var r = rn(n);
    delete r[Q];
    for (var t = nn(r), e = 0; e < t.length; e++) {
      var i = t[e],
        o = r[i];
      !1 === o.writable && ((o.writable = !0), (o.configurable = !0)),
        (o.get || o.set) &&
          (r[i] = {
            configurable: !0,
            writable: !0,
            enumerable: o.enumerable,
            value: n[i],
          });
    }
    return Object.create(Object.getPrototypeOf(n), r);
  }
  function d(n, e) {
    return (
      void 0 === e && (e = !1),
      y(n) || r(n) || !t(n)
        ? n
        : (o(n) > 1 && (n.set = n.add = n.clear = n.delete = h),
          Object.freeze(n),
          e &&
            i(
              n,
              function (n, r) {
                return d(r, !0);
              },
              !0,
            ),
          n)
    );
  }
  function h() {
    n(2);
  }
  function y(n) {
    return null == n || 'object' != typeof n || Object.isFrozen(n);
  }
  function b(r) {
    var t = tn[r];
    return t || n(18, r), t;
  }
  function _() {
    return U;
  }
  function j(n, r) {
    r && (b('Patches'), (n.u = []), (n.s = []), (n.v = r));
  }
  function O(n) {
    g(n), n.p.forEach(S), (n.p = null);
  }
  function g(n) {
    n === U && (U = n.l);
  }
  function w(n) {
    return (U = { p: [], l: U, h: n, m: !0, _: 0 });
  }
  function S(n) {
    var r = n[Q];
    0 === r.i || 1 === r.i ? r.j() : (r.O = !0);
  }
  function P(r, e) {
    e._ = e.p.length;
    var i = e.p[0],
      o = void 0 !== r && r !== i;
    return (
      e.h.g || b('ES5').S(e, r, o),
      o
        ? (i[Q].P && (O(e), n(4)),
          t(r) && ((r = M(e, r)), e.l || x(e, r)),
          e.u && b('Patches').M(i[Q].t, r, e.u, e.s))
        : (r = M(e, i, [])),
      O(e),
      e.u && e.v(e.u, e.s),
      r !== H ? r : void 0
    );
  }
  function M(n, r, t) {
    if (y(r)) return r;
    var e = r[Q];
    if (!e)
      return (
        i(
          r,
          function (i, o) {
            return A(n, e, r, i, o, t);
          },
          !0,
        ),
        r
      );
    if (e.A !== n) return r;
    if (!e.P) return x(n, e.t, !0), e.t;
    if (!e.I) {
      (e.I = !0), e.A._--;
      var o = 4 === e.i || 5 === e.i ? (e.o = l(e.k)) : e.o;
      i(3 === e.i ? new Set(o) : o, function (r, i) {
        return A(n, e, o, r, i, t);
      }),
        x(n, o, !1),
        t && n.u && b('Patches').R(e, t, n.u, n.s);
    }
    return e.o;
  }
  function A(e, i, o, a, c, s) {
    if (r(c)) {
      var v = M(e, c, s && i && 3 !== i.i && !u(i.D, a) ? s.concat(a) : void 0);
      if ((f(o, a, v), !r(v))) return;
      e.m = !1;
    }
    if (t(c) && !y(c)) {
      if (!e.h.F && e._ < 1) return;
      M(e, c), (i && i.A.l) || x(e, c);
    }
  }
  function x(n, r, t) {
    void 0 === t && (t = !1), n.h.F && n.m && d(r, t);
  }
  function z(n, r) {
    var t = n[Q];
    return (t ? p(t) : n)[r];
  }
  function I(n, r) {
    if (r in n)
      for (var t = Object.getPrototypeOf(n); t; ) {
        var e = Object.getOwnPropertyDescriptor(t, r);
        if (e) return e;
        t = Object.getPrototypeOf(t);
      }
  }
  function k(n) {
    n.P || ((n.P = !0), n.l && k(n.l));
  }
  function E(n) {
    n.o || (n.o = l(n.t));
  }
  function R(n, r, t) {
    var e = s(r)
      ? b('MapSet').N(r, t)
      : v(r)
      ? b('MapSet').T(r, t)
      : n.g
      ? (function (n, r) {
          var t = Array.isArray(n),
            e = {
              i: t ? 1 : 0,
              A: r ? r.A : _(),
              P: !1,
              I: !1,
              D: {},
              l: r,
              t: n,
              k: null,
              o: null,
              j: null,
              C: !1,
            },
            i = e,
            o = en;
          t && ((i = [e]), (o = on));
          var u = Proxy.revocable(i, o),
            a = u.revoke,
            f = u.proxy;
          return (e.k = f), (e.j = a), f;
        })(r, t)
      : b('ES5').J(r, t);
    return (t ? t.A : _()).p.push(e), e;
  }
  function D(e) {
    return (
      r(e) || n(22, e),
      (function n(r) {
        if (!t(r)) return r;
        var e,
          u = r[Q],
          c = o(r);
        if (u) {
          if (!u.P && (u.i < 4 || !b('ES5').K(u))) return u.t;
          (u.I = !0), (e = F(r, c)), (u.I = !1);
        } else e = F(r, c);
        return (
          i(e, function (r, t) {
            (u && a(u.t, r) === t) || f(e, r, n(t));
          }),
          3 === c ? new Set(e) : e
        );
      })(e)
    );
  }
  function F(n, r) {
    switch (r) {
      case 2:
        return new Map(n);
      case 3:
        return Array.from(n);
    }
    return l(n);
  }
  function K(n) {
    return n;
  }
  var G,
    U,
    W = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
    X = 'undefined' != typeof Map,
    q = 'undefined' != typeof Set,
    B =
      'undefined' != typeof Proxy &&
      void 0 !== Proxy.revocable &&
      'undefined' != typeof Reflect,
    H = W ? Symbol.for('immer-nothing') : (((G = {})['immer-nothing'] = !0), G),
    L = W ? Symbol.for('immer-draftable') : '__$immer_draftable',
    Q = W ? Symbol.for('immer-state') : '__$immer_state',
    Z = '' + Object.prototype.constructor,
    nn =
      'undefined' != typeof Reflect && Reflect.ownKeys
        ? Reflect.ownKeys
        : void 0 !== Object.getOwnPropertySymbols
        ? function (n) {
            return Object.getOwnPropertyNames(n).concat(
              Object.getOwnPropertySymbols(n),
            );
          }
        : Object.getOwnPropertyNames,
    rn =
      Object.getOwnPropertyDescriptors ||
      function (n) {
        var r = {};
        return (
          nn(n).forEach(function (t) {
            r[t] = Object.getOwnPropertyDescriptor(n, t);
          }),
          r
        );
      },
    tn = {},
    en = {
      get: function (n, r) {
        if (r === Q) return n;
        var e = p(n);
        if (!u(e, r))
          return (function (n, r, t) {
            var e,
              i = I(r, t);
            return i
              ? 'value' in i
                ? i.value
                : null === (e = i.get) || void 0 === e
                ? void 0
                : e.call(n.k)
              : void 0;
          })(n, e, r);
        var i = e[r];
        return n.I || !t(i)
          ? i
          : i === z(n.t, r)
          ? (E(n), (n.o[r] = R(n.A.h, i, n)))
          : i;
      },
      has: function (n, r) {
        return r in p(n);
      },
      ownKeys: function (n) {
        return Reflect.ownKeys(p(n));
      },
      set: function (n, r, t) {
        var e = I(p(n), r);
        if (null == e ? void 0 : e.set) return e.set.call(n.k, t), !0;
        if (!n.P) {
          var i = z(p(n), r),
            o = null == i ? void 0 : i[Q];
          if (o && o.t === t) return (n.o[r] = t), (n.D[r] = !1), !0;
          if (c(t, i) && (void 0 !== t || u(n.t, r))) return !0;
          E(n), k(n);
        }
        return (
          (n.o[r] === t &&
            'number' != typeof t &&
            (void 0 !== t || r in n.o)) ||
          ((n.o[r] = t), (n.D[r] = !0), !0)
        );
      },
      deleteProperty: function (n, r) {
        return (
          void 0 !== z(n.t, r) || r in n.t
            ? ((n.D[r] = !1), E(n), k(n))
            : delete n.D[r],
          n.o && delete n.o[r],
          !0
        );
      },
      getOwnPropertyDescriptor: function (n, r) {
        var t = p(n),
          e = Reflect.getOwnPropertyDescriptor(t, r);
        return e
          ? {
              writable: !0,
              configurable: 1 !== n.i || 'length' !== r,
              enumerable: e.enumerable,
              value: t[r],
            }
          : e;
      },
      defineProperty: function () {
        n(11);
      },
      getPrototypeOf: function (n) {
        return Object.getPrototypeOf(n.t);
      },
      setPrototypeOf: function () {
        n(12);
      },
    },
    on = {};
  i(en, function (n, r) {
    on[n] = function () {
      return (arguments[0] = arguments[0][0]), r.apply(this, arguments);
    };
  }),
    (on.deleteProperty = function (r, t) {
      return on.set.call(this, r, t, void 0);
    }),
    (on.set = function (r, t, e) {
      return en.set.call(this, r[0], t, e, r[0]);
    });
  var un = (function () {
      function e(r) {
        var e = this;
        (this.g = B),
          (this.F = !0),
          (this.produce = function (r, i, o) {
            if ('function' == typeof r && 'function' != typeof i) {
              var u = i;
              i = r;
              var a = e;
              return function (n) {
                var r = this;
                void 0 === n && (n = u);
                for (
                  var t = arguments.length, e = Array(t > 1 ? t - 1 : 0), o = 1;
                  o < t;
                  o++
                )
                  e[o - 1] = arguments[o];
                return a.produce(n, function (n) {
                  var t;
                  return (t = i).call.apply(t, [r, n].concat(e));
                });
              };
            }
            var f;
            if (
              ('function' != typeof i && n(6),
              void 0 !== o && 'function' != typeof o && n(7),
              t(r))
            ) {
              var c = w(e),
                s = R(e, r, void 0),
                v = !0;
              try {
                (f = i(s)), (v = !1);
              } finally {
                v ? O(c) : g(c);
              }
              return 'undefined' != typeof Promise && f instanceof Promise
                ? f.then(
                    function (n) {
                      return j(c, o), P(n, c);
                    },
                    function (n) {
                      throw (O(c), n);
                    },
                  )
                : (j(c, o), P(f, c));
            }
            if (!r || 'object' != typeof r) {
              if (
                (void 0 === (f = i(r)) && (f = r),
                f === H && (f = void 0),
                e.F && d(f, !0),
                o)
              ) {
                var p = [],
                  l = [];
                b('Patches').M(r, f, p, l), o(p, l);
              }
              return f;
            }
            n(21, r);
          }),
          (this.produceWithPatches = function (n, r) {
            if ('function' == typeof n)
              return function (r) {
                for (
                  var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), o = 1;
                  o < t;
                  o++
                )
                  i[o - 1] = arguments[o];
                return e.produceWithPatches(r, function (r) {
                  return n.apply(void 0, [r].concat(i));
                });
              };
            var t,
              i,
              o = e.produce(n, r, function (n, r) {
                (t = n), (i = r);
              });
            return 'undefined' != typeof Promise && o instanceof Promise
              ? o.then(function (n) {
                  return [n, t, i];
                })
              : [o, t, i];
          }),
          'boolean' == typeof (null == r ? void 0 : r.useProxies) &&
            this.setUseProxies(r.useProxies),
          'boolean' == typeof (null == r ? void 0 : r.autoFreeze) &&
            this.setAutoFreeze(r.autoFreeze);
      }
      var i = e.prototype;
      return (
        (i.createDraft = function (e) {
          t(e) || n(8), r(e) && (e = D(e));
          var i = w(this),
            o = R(this, e, void 0);
          return (o[Q].C = !0), g(i), o;
        }),
        (i.finishDraft = function (r, t) {
          var e = r && r[Q];
          var i = e.A;
          return j(i, t), P(void 0, i);
        }),
        (i.setAutoFreeze = function (n) {
          this.F = n;
        }),
        (i.setUseProxies = function (r) {
          r && !B && n(20), (this.g = r);
        }),
        (i.applyPatches = function (n, t) {
          var e;
          for (e = t.length - 1; e >= 0; e--) {
            var i = t[e];
            if (0 === i.path.length && 'replace' === i.op) {
              n = i.value;
              break;
            }
          }
          e > -1 && (t = t.slice(e + 1));
          var o = b('Patches').$;
          return r(n)
            ? o(n, t)
            : this.produce(n, function (n) {
                return o(n, t);
              });
        }),
        e
      );
    })(),
    an = new un(),
    fn = an.produce;
  an.produceWithPatches.bind(an);
  an.setAutoFreeze.bind(an);
  an.setUseProxies.bind(an);
  an.applyPatches.bind(an);
  an.createDraft.bind(an);
  an.finishDraft.bind(an);
  var produce = fn;

  class UnreachableCaseError extends Error {
    constructor(value) {
      super(`Unreachable case: ${value}`);
    }
  }

  function computeNextRepoId(repoList) {
    const maxId = repoList.repos.reduce(
      (memo, repo) => Math.max(repo.id, memo),
      0,
    );
    return maxId + 1;
  }
  function computeNextRuleId(repo) {
    const maxId = repo.rules.reduce((memo, rule) => Math.max(rule.id, memo), 0);
    return maxId + 1;
  }
  function getRepoIndexOrThrow(state, repoId) {
    const repoIndex = state.repos.findIndex((repo) => repo.id === repoId);
    if (repoIndex < 0) {
      throw new Error(`No repo for ${repoId}`);
    }
    return repoIndex;
  }
  function getRepoOrThrow(state, repoId) {
    const repoIndex = getRepoIndexOrThrow(state, repoId);
    return state.repos[repoIndex];
  }
  function getRuleIndexOrThrow(state, ruleId) {
    const ruleIndex = state.rules.findIndex((rule) => rule.id === ruleId);
    if (ruleIndex < 0) {
      throw new Error(`No rule for ${ruleId}`);
    }
    return ruleIndex;
  }
  function getRuleOrThrow(state, ruleId) {
    const ruleIndex = getRuleIndexOrThrow(state, ruleId);
    return state.rules[ruleIndex];
  }
  function addRepo(state, name, autogenerated) {
    K(state.repos).push({
      id: computeNextRepoId(state),
      name,
      rules: [],
      autogenerated,
    });
  }
  function repoUpdateName(state, repoId, newName) {
    const repo = getRepoOrThrow(state, repoId);
    K(repo).name = newName;
  }
  function repoUpdateAutogenerated(state, repoId, autogenerated) {
    const repo = getRepoOrThrow(state, repoId);
    K(repo).autogenerated = autogenerated;
  }
  function deleteRepo(state, repoId) {
    const repoIndex = getRepoIndexOrThrow(state, repoId);
    K(state.repos).splice(repoIndex, 1);
  }
  function addRule(state, repoId, regex, hide) {
    const repo = getRepoOrThrow(state, repoId);
    K(repo.rules).push({
      id: computeNextRuleId(repo),
      regex,
      hide,
    });
  }
  function deleteRule(state, repoId, ruleId) {
    const repo = getRepoOrThrow(state, repoId);
    const ruleIndex = getRuleIndexOrThrow(repo, ruleId);
    K(repo.rules).splice(ruleIndex, 1);
  }
  function updateRule(state, repoId, ruleId, newRegex, newHide) {
    const repo = getRepoOrThrow(state, repoId);
    const rule = getRuleOrThrow(repo, ruleId);
    K(rule).regex = newRegex;
    K(rule).hide = newHide;
  }
  const reducer = produce((draft, action) => {
    switch (action.kind) {
      case 'ADD_REPO':
        addRepo(draft, action.name, true);
        break;
      case 'UPDATE_REPO_NAME':
        repoUpdateName(draft, action.repoId, action.newName);
        break;
      case 'DELETE_REPO':
        deleteRepo(draft, action.repoId);
        break;
      case 'ADD_RULE':
        addRule(draft, action.repoId, action.regex, action.hide);
        break;
      case 'DELETE_RULE':
        deleteRule(draft, action.repoId, action.ruleId);
        break;
      case 'UPDATE_RULE':
        updateRule(
          draft,
          action.repoId,
          action.ruleId,
          action.newRegex,
          action.newHide,
        );
        break;
      case 'UPDATE_AUTOGENERATED':
        repoUpdateAutogenerated(draft, action.repoId, action.autogenerated);
        break;
      default:
        throw new UnreachableCaseError(action);
    }
    return draft;
  });

  var Add = {};

  var createSvgIcon = {};

  var require$$0 = /*@__PURE__*/ getAugmentedNamespace(utils);

  (function (exports) {
    Object.defineProperty(exports, '__esModule', {
      value: true,
    });
    Object.defineProperty(exports, 'default', {
      enumerable: true,
      get: function get() {
        return _utils.createSvgIcon;
      },
    });

    var _utils = require$$0;
  })(createSvgIcon);

  var _interopRequireDefault$2 = interopRequireDefault.exports;

  var _interopRequireWildcard$2 = interopRequireWildcard.exports;

  Object.defineProperty(Add, '__esModule', {
    value: true,
  });
  var default_1$2 = (Add.default = void 0);

  var React$2 = _interopRequireWildcard$2(react.exports);

  var _createSvgIcon$2 = _interopRequireDefault$2(createSvgIcon);

  var _default$2 = (0, _createSvgIcon$2.default)(
    /*#__PURE__*/ React$2.createElement('path', {
      d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z',
    }),
    'Add',
  );

  default_1$2 = Add.default = _default$2;

  var Create = {};

  var _interopRequireDefault$1 = interopRequireDefault.exports;

  var _interopRequireWildcard$1 = interopRequireWildcard.exports;

  Object.defineProperty(Create, '__esModule', {
    value: true,
  });
  var default_1$1 = (Create.default = void 0);

  var React$1 = _interopRequireWildcard$1(react.exports);

  var _createSvgIcon$1 = _interopRequireDefault$1(createSvgIcon);

  var _default$1 = (0, _createSvgIcon$1.default)(
    /*#__PURE__*/ React$1.createElement('path', {
      d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
    }),
    'Create',
  );

  default_1$1 = Create.default = _default$1;

  var Delete = {};

  var _interopRequireDefault = interopRequireDefault.exports;

  var _interopRequireWildcard = interopRequireWildcard.exports;

  Object.defineProperty(Delete, '__esModule', {
    value: true,
  });
  var default_1 = (Delete.default = void 0);

  var React = _interopRequireWildcard(react.exports);

  var _createSvgIcon = _interopRequireDefault(createSvgIcon);

  var _default = (0, _createSvgIcon.default)(
    /*#__PURE__*/ React.createElement('path', {
      d: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z',
    }),
    'Delete',
  );

  default_1 = Delete.default = _default;

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */
  function identity(value) {
    return value;
  }

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);
      case 1:
        return func.call(thisArg, args[0]);
      case 2:
        return func.call(thisArg, args[0], args[1]);
      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$3 = Math.max;

  /**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */
  function overRest(func, start, transform) {
    start = nativeMax$3(start === undefined ? func.length - 1 : start, 0);
    return function () {
      var args = arguments,
        index = -1,
        length = nativeMax$3(args.length - start, 0),
        array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return apply(func, this, otherArgs);
    };
  }

  /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */
  function constant(value) {
    return function () {
      return value;
    };
  }

  /** Detect free variable `global` from Node.js. */
  var freeGlobal =
    typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf =
    typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Built-in value references. */
  var Symbol$1 = root.Symbol;

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$4.toString;

  /** Built-in value references. */
  var symToStringTag$1 = Symbol$1 ? Symbol$1.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty$3.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString$1.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }
    return result;
  }

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto$3.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value)
      ? getRawTag(value)
      : objectToString(value);
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return (
      tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag
    );
  }

  /** Used to detect overreaching core-js shims. */
  var coreJsData = root['__core-js_shared__'];

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function () {
    var uid = /[^.]+$/.exec(
      (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || '',
    );
    return uid ? 'Symbol(src)_1.' + uid : '';
  })();

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  /** Used for built-in method references. */
  var funcProto$1 = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {}
      try {
        return func + '';
      } catch (e) {}
    }
    return '';
  }

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp(
    '^' +
      funcToString
        .call(hasOwnProperty$2)
        .replace(reRegExpChar, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?',
        ) +
      '$',
  );

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  var defineProperty = (function () {
    try {
      var func = getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  })();

  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var baseSetToString = !defineProperty
    ? identity
    : function (func, string) {
        return defineProperty(func, 'toString', {
          configurable: true,
          enumerable: false,
          value: constant(string),
          writable: true,
        });
      };

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
    HOT_SPAN = 16;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeNow = Date.now;

  /**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */
  function shortOut(func) {
    var count = 0,
      lastCalled = 0;

    return function () {
      var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(undefined, arguments);
    };
  }

  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var setToString = shortOut(baseSetToString);

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + '');
  }

  /* Built-in method references that are verified to be native. */
  var WeakMap$1 = getNative(root, 'WeakMap');

  /** Used to store function metadata. */
  var metaMap = WeakMap$1 && new WeakMap$1();

  /**
   * The base implementation of `setData` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to associate metadata with.
   * @param {*} data The metadata.
   * @returns {Function} Returns `func`.
   */
  var baseSetData = !metaMap
    ? identity
    : function (func, data) {
        metaMap.set(func, data);
        return func;
      };

  /** Built-in value references. */
  var objectCreate = Object.create;

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate = (function () {
    function object() {}
    return function (proto) {
      if (!isObject(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object();
      object.prototype = undefined;
      return result;
    };
  })();

  /**
   * Creates a function that produces an instance of `Ctor` regardless of
   * whether it was invoked as part of a `new` expression or by `call` or `apply`.
   *
   * @private
   * @param {Function} Ctor The constructor to wrap.
   * @returns {Function} Returns the new wrapped function.
   */
  function createCtor(Ctor) {
    return function () {
      // Use a `switch` statement to work with class constructors. See
      // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
      // for more details.
      var args = arguments;
      switch (args.length) {
        case 0:
          return new Ctor();
        case 1:
          return new Ctor(args[0]);
        case 2:
          return new Ctor(args[0], args[1]);
        case 3:
          return new Ctor(args[0], args[1], args[2]);
        case 4:
          return new Ctor(args[0], args[1], args[2], args[3]);
        case 5:
          return new Ctor(args[0], args[1], args[2], args[3], args[4]);
        case 6:
          return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
        case 7:
          return new Ctor(
            args[0],
            args[1],
            args[2],
            args[3],
            args[4],
            args[5],
            args[6],
          );
      }
      var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

      // Mimic the constructor's `return` behavior.
      // See https://es5.github.io/#x13.2.2 for more details.
      return isObject(result) ? result : thisBinding;
    };
  }

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG$6 = 1;

  /**
   * Creates a function that wraps `func` to invoke it with the optional `this`
   * binding of `thisArg`.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @returns {Function} Returns the new wrapped function.
   */
  function createBind(func, bitmask, thisArg) {
    var isBind = bitmask & WRAP_BIND_FLAG$6,
      Ctor = createCtor(func);

    function wrapper() {
      var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
      return fn.apply(isBind ? thisArg : this, arguments);
    }
    return wrapper;
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$2 = Math.max;

  /**
   * Creates an array that is the composition of partially applied arguments,
   * placeholders, and provided arguments into a single array of arguments.
   *
   * @private
   * @param {Array} args The provided arguments.
   * @param {Array} partials The arguments to prepend to those provided.
   * @param {Array} holders The `partials` placeholder indexes.
   * @params {boolean} [isCurried] Specify composing for a curried function.
   * @returns {Array} Returns the new array of composed arguments.
   */
  function composeArgs(args, partials, holders, isCurried) {
    var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax$2(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

    while (++leftIndex < leftLength) {
      result[leftIndex] = partials[leftIndex];
    }
    while (++argsIndex < holdersLength) {
      if (isUncurried || argsIndex < argsLength) {
        result[holders[argsIndex]] = args[argsIndex];
      }
    }
    while (rangeLength--) {
      result[leftIndex++] = args[argsIndex++];
    }
    return result;
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$1 = Math.max;

  /**
   * This function is like `composeArgs` except that the arguments composition
   * is tailored for `_.partialRight`.
   *
   * @private
   * @param {Array} args The provided arguments.
   * @param {Array} partials The arguments to append to those provided.
   * @param {Array} holders The `partials` placeholder indexes.
   * @params {boolean} [isCurried] Specify composing for a curried function.
   * @returns {Array} Returns the new array of composed arguments.
   */
  function composeArgsRight(args, partials, holders, isCurried) {
    var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax$1(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

    while (++argsIndex < rangeLength) {
      result[argsIndex] = args[argsIndex];
    }
    var offset = argsIndex;
    while (++rightIndex < rightLength) {
      result[offset + rightIndex] = partials[rightIndex];
    }
    while (++holdersIndex < holdersLength) {
      if (isUncurried || argsIndex < argsLength) {
        result[offset + holders[holdersIndex]] = args[argsIndex++];
      }
    }
    return result;
  }

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
      result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }
    return result;
  }

  /**
   * The function whose prototype chain sequence wrappers inherit from.
   *
   * @private
   */
  function baseLodash() {
    // No operation performed.
  }

  /** Used as references for the maximum length and index of an array. */
  var MAX_ARRAY_LENGTH = 4294967295;

  /**
   * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
   *
   * @private
   * @constructor
   * @param {*} value The value to wrap.
   */
  function LazyWrapper(value) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__dir__ = 1;
    this.__filtered__ = false;
    this.__iteratees__ = [];
    this.__takeCount__ = MAX_ARRAY_LENGTH;
    this.__views__ = [];
  }

  // Ensure `LazyWrapper` is an instance of `baseLodash`.
  LazyWrapper.prototype = baseCreate(baseLodash.prototype);
  LazyWrapper.prototype.constructor = LazyWrapper;

  /**
   * This method returns `undefined`.
   *
   * @static
   * @memberOf _
   * @since 2.3.0
   * @category Util
   * @example
   *
   * _.times(2, _.noop);
   * // => [undefined, undefined]
   */
  function noop() {
    // No operation performed.
  }

  /**
   * Gets metadata for `func`.
   *
   * @private
   * @param {Function} func The function to query.
   * @returns {*} Returns the metadata for `func`.
   */
  var getData = !metaMap
    ? noop
    : function (func) {
        return metaMap.get(func);
      };

  /** Used to lookup unminified function names. */
  var realNames = {};

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

  /**
   * Gets the name of `func`.
   *
   * @private
   * @param {Function} func The function to query.
   * @returns {string} Returns the function name.
   */
  function getFuncName(func) {
    var result = func.name + '',
      array = realNames[result],
      length = hasOwnProperty$1.call(realNames, result) ? array.length : 0;

    while (length--) {
      var data = array[length],
        otherFunc = data.func;
      if (otherFunc == null || otherFunc == func) {
        return data.name;
      }
    }
    return result;
  }

  /**
   * The base constructor for creating `lodash` wrapper objects.
   *
   * @private
   * @param {*} value The value to wrap.
   * @param {boolean} [chainAll] Enable explicit method chain sequences.
   */
  function LodashWrapper(value, chainAll) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__chain__ = !!chainAll;
    this.__index__ = 0;
    this.__values__ = undefined;
  }

  LodashWrapper.prototype = baseCreate(baseLodash.prototype);
  LodashWrapper.prototype.constructor = LodashWrapper;

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
      length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  /**
   * Creates a clone of `wrapper`.
   *
   * @private
   * @param {Object} wrapper The wrapper to clone.
   * @returns {Object} Returns the cloned wrapper.
   */
  function wrapperClone(wrapper) {
    if (wrapper instanceof LazyWrapper) {
      return wrapper.clone();
    }
    var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
    result.__actions__ = copyArray(wrapper.__actions__);
    result.__index__ = wrapper.__index__;
    result.__values__ = wrapper.__values__;
    return result;
  }

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Creates a `lodash` object which wraps `value` to enable implicit method
   * chain sequences. Methods that operate on and return arrays, collections,
   * and functions can be chained together. Methods that retrieve a single value
   * or may return a primitive value will automatically end the chain sequence
   * and return the unwrapped value. Otherwise, the value must be unwrapped
   * with `_#value`.
   *
   * Explicit chain sequences, which must be unwrapped with `_#value`, may be
   * enabled using `_.chain`.
   *
   * The execution of chained methods is lazy, that is, it's deferred until
   * `_#value` is implicitly or explicitly called.
   *
   * Lazy evaluation allows several methods to support shortcut fusion.
   * Shortcut fusion is an optimization to merge iteratee calls; this avoids
   * the creation of intermediate arrays and can greatly reduce the number of
   * iteratee executions. Sections of a chain sequence qualify for shortcut
   * fusion if the section is applied to an array and iteratees accept only
   * one argument. The heuristic for whether a section qualifies for shortcut
   * fusion is subject to change.
   *
   * Chaining is supported in custom builds as long as the `_#value` method is
   * directly or indirectly included in the build.
   *
   * In addition to lodash methods, wrappers have `Array` and `String` methods.
   *
   * The wrapper `Array` methods are:
   * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
   *
   * The wrapper `String` methods are:
   * `replace` and `split`
   *
   * The wrapper methods that support shortcut fusion are:
   * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
   * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
   * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
   *
   * The chainable wrapper methods are:
   * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
   * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
   * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
   * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
   * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
   * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
   * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
   * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
   * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
   * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
   * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
   * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
   * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
   * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
   * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
   * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
   * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
   * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
   * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
   * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
   * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
   * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
   * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
   * `zipObject`, `zipObjectDeep`, and `zipWith`
   *
   * The wrapper methods that are **not** chainable by default are:
   * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
   * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
   * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
   * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
   * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
   * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
   * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
   * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
   * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
   * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
   * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
   * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
   * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
   * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
   * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
   * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
   * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
   * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
   * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
   * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
   * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
   * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
   * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
   * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
   * `upperFirst`, `value`, and `words`
   *
   * @name _
   * @constructor
   * @category Seq
   * @param {*} value The value to wrap in a `lodash` instance.
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * var wrapped = _([1, 2, 3]);
   *
   * // Returns an unwrapped value.
   * wrapped.reduce(_.add);
   * // => 6
   *
   * // Returns a wrapped value.
   * var squares = wrapped.map(square);
   *
   * _.isArray(squares);
   * // => false
   *
   * _.isArray(squares.value());
   * // => true
   */
  function lodash(value) {
    if (
      isObjectLike(value) &&
      !isArray(value) &&
      !(value instanceof LazyWrapper)
    ) {
      if (value instanceof LodashWrapper) {
        return value;
      }
      if (hasOwnProperty.call(value, '__wrapped__')) {
        return wrapperClone(value);
      }
    }
    return new LodashWrapper(value);
  }

  // Ensure wrappers are instances of `baseLodash`.
  lodash.prototype = baseLodash.prototype;
  lodash.prototype.constructor = lodash;

  /**
   * Checks if `func` has a lazy counterpart.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
   *  else `false`.
   */
  function isLaziable(func) {
    var funcName = getFuncName(func),
      other = lodash[funcName];

    if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
      return false;
    }
    if (func === other) {
      return true;
    }
    var data = getData(other);
    return !!data && func === data[0];
  }

  /**
   * Sets metadata for `func`.
   *
   * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
   * period of time, it will trip its breaker and transition to an identity
   * function to avoid garbage collection pauses in V8. See
   * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
   * for more details.
   *
   * @private
   * @param {Function} func The function to associate metadata with.
   * @param {*} data The metadata.
   * @returns {Function} Returns `func`.
   */
  var setData = shortOut(baseSetData);

  /** Used to match wrap detail comments. */
  var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

  /**
   * Extracts wrapper details from the `source` body comment.
   *
   * @private
   * @param {string} source The source to inspect.
   * @returns {Array} Returns the wrapper details.
   */
  function getWrapDetails(source) {
    var match = source.match(reWrapDetails);
    return match ? match[1].split(reSplitDetails) : [];
  }

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

  /**
   * Inserts wrapper `details` in a comment at the top of the `source` body.
   *
   * @private
   * @param {string} source The source to modify.
   * @returns {Array} details The details to insert.
   * @returns {string} Returns the modified source.
   */
  function insertWrapDetails(source, details) {
    var length = details.length;
    if (!length) {
      return source;
    }
    var lastIndex = length - 1;
    details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
    details = details.join(length > 2 ? ', ' : ' ');
    return source.replace(
      reWrapComment,
      '{\n/* [wrapped with ' + details + '] */\n',
    );
  }

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
      length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }
    return array;
  }

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

    while (fromRight ? index-- : ++index < length) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
      length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    return value === value
      ? strictIndexOf(array, value, fromIndex)
      : baseFindIndex(array, baseIsNaN, fromIndex);
  }

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
  }

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG$5 = 1,
    WRAP_BIND_KEY_FLAG$4 = 2,
    WRAP_CURRY_FLAG$4 = 8,
    WRAP_CURRY_RIGHT_FLAG$2 = 16,
    WRAP_PARTIAL_FLAG$3 = 32,
    WRAP_PARTIAL_RIGHT_FLAG$2 = 64,
    WRAP_ARY_FLAG$2 = 128,
    WRAP_REARG_FLAG$1 = 256,
    WRAP_FLIP_FLAG$1 = 512;

  /** Used to associate wrap methods with their bit flags. */
  var wrapFlags = [
    ['ary', WRAP_ARY_FLAG$2],
    ['bind', WRAP_BIND_FLAG$5],
    ['bindKey', WRAP_BIND_KEY_FLAG$4],
    ['curry', WRAP_CURRY_FLAG$4],
    ['curryRight', WRAP_CURRY_RIGHT_FLAG$2],
    ['flip', WRAP_FLIP_FLAG$1],
    ['partial', WRAP_PARTIAL_FLAG$3],
    ['partialRight', WRAP_PARTIAL_RIGHT_FLAG$2],
    ['rearg', WRAP_REARG_FLAG$1],
  ];

  /**
   * Updates wrapper `details` based on `bitmask` flags.
   *
   * @private
   * @returns {Array} details The details to modify.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @returns {Array} Returns `details`.
   */
  function updateWrapDetails(details, bitmask) {
    arrayEach(wrapFlags, function (pair) {
      var value = '_.' + pair[0];
      if (bitmask & pair[1] && !arrayIncludes(details, value)) {
        details.push(value);
      }
    });
    return details.sort();
  }

  /**
   * Sets the `toString` method of `wrapper` to mimic the source of `reference`
   * with wrapper details in a comment at the top of the source body.
   *
   * @private
   * @param {Function} wrapper The function to modify.
   * @param {Function} reference The reference function.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @returns {Function} Returns `wrapper`.
   */
  function setWrapToString(wrapper, reference, bitmask) {
    var source = reference + '';
    return setToString(
      wrapper,
      insertWrapDetails(
        source,
        updateWrapDetails(getWrapDetails(source), bitmask),
      ),
    );
  }

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG$4 = 1,
    WRAP_BIND_KEY_FLAG$3 = 2,
    WRAP_CURRY_BOUND_FLAG$1 = 4,
    WRAP_CURRY_FLAG$3 = 8,
    WRAP_PARTIAL_FLAG$2 = 32,
    WRAP_PARTIAL_RIGHT_FLAG$1 = 64;

  /**
   * Creates a function that wraps `func` to continue currying.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @param {Function} wrapFunc The function to create the `func` wrapper.
   * @param {*} placeholder The placeholder value.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {Array} [partials] The arguments to prepend to those provided to
   *  the new function.
   * @param {Array} [holders] The `partials` placeholder indexes.
   * @param {Array} [argPos] The argument positions of the new function.
   * @param {number} [ary] The arity cap of `func`.
   * @param {number} [arity] The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */
  function createRecurry(
    func,
    bitmask,
    wrapFunc,
    placeholder,
    thisArg,
    partials,
    holders,
    argPos,
    ary,
    arity,
  ) {
    var isCurry = bitmask & WRAP_CURRY_FLAG$3,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

    bitmask |= isCurry ? WRAP_PARTIAL_FLAG$2 : WRAP_PARTIAL_RIGHT_FLAG$1;
    bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG$1 : WRAP_PARTIAL_FLAG$2);

    if (!(bitmask & WRAP_CURRY_BOUND_FLAG$1)) {
      bitmask &= ~(WRAP_BIND_FLAG$4 | WRAP_BIND_KEY_FLAG$3);
    }
    var newData = [
      func,
      bitmask,
      thisArg,
      newPartials,
      newHolders,
      newPartialsRight,
      newHoldersRight,
      argPos,
      ary,
      arity,
    ];

    var result = wrapFunc.apply(undefined, newData);
    if (isLaziable(func)) {
      setData(result, newData);
    }
    result.placeholder = placeholder;
    return setWrapToString(result, func, bitmask);
  }

  /**
   * Gets the argument placeholder value for `func`.
   *
   * @private
   * @param {Function} func The function to inspect.
   * @returns {*} Returns the placeholder value.
   */
  function getHolder(func) {
    var object = func;
    return object.placeholder;
  }

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;

    return (
      !!length &&
      (type == 'number' || (type != 'symbol' && reIsUint.test(value))) &&
      value > -1 &&
      value % 1 == 0 &&
      value < length
    );
  }

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMin$1 = Math.min;

  /**
   * Reorder `array` according to the specified indexes where the element at
   * the first index is assigned as the first element, the element at
   * the second index is assigned as the second element, and so on.
   *
   * @private
   * @param {Array} array The array to reorder.
   * @param {Array} indexes The arranged array indexes.
   * @returns {Array} Returns `array`.
   */
  function reorder(array, indexes) {
    var arrLength = array.length,
      length = nativeMin$1(indexes.length, arrLength),
      oldArray = copyArray(array);

    while (length--) {
      var index = indexes[length];
      array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
    }
    return array;
  }

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER$1 = '__lodash_placeholder__';

  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
  function replaceHolders(array, placeholder) {
    var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

    while (++index < length) {
      var value = array[index];
      if (value === placeholder || value === PLACEHOLDER$1) {
        array[index] = PLACEHOLDER$1;
        result[resIndex++] = index;
      }
    }
    return result;
  }

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG$3 = 1,
    WRAP_BIND_KEY_FLAG$2 = 2,
    WRAP_CURRY_FLAG$2 = 8,
    WRAP_CURRY_RIGHT_FLAG$1 = 16,
    WRAP_ARY_FLAG$1 = 128,
    WRAP_FLIP_FLAG = 512;

  /**
   * Creates a function that wraps `func` to invoke it with optional `this`
   * binding of `thisArg`, partial application, and currying.
   *
   * @private
   * @param {Function|string} func The function or method name to wrap.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {Array} [partials] The arguments to prepend to those provided to
   *  the new function.
   * @param {Array} [holders] The `partials` placeholder indexes.
   * @param {Array} [partialsRight] The arguments to append to those provided
   *  to the new function.
   * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
   * @param {Array} [argPos] The argument positions of the new function.
   * @param {number} [ary] The arity cap of `func`.
   * @param {number} [arity] The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */
  function createHybrid(
    func,
    bitmask,
    thisArg,
    partials,
    holders,
    partialsRight,
    holdersRight,
    argPos,
    ary,
    arity,
  ) {
    var isAry = bitmask & WRAP_ARY_FLAG$1,
      isBind = bitmask & WRAP_BIND_FLAG$3,
      isBindKey = bitmask & WRAP_BIND_KEY_FLAG$2,
      isCurried = bitmask & (WRAP_CURRY_FLAG$2 | WRAP_CURRY_RIGHT_FLAG$1),
      isFlip = bitmask & WRAP_FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor(func);

    function wrapper() {
      var length = arguments.length,
        args = Array(length),
        index = length;

      while (index--) {
        args[index] = arguments[index];
      }
      if (isCurried) {
        var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
      }
      if (partials) {
        args = composeArgs(args, partials, holders, isCurried);
      }
      if (partialsRight) {
        args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
      }
      length -= holdersCount;
      if (isCurried && length < arity) {
        var newHolders = replaceHolders(args, placeholder);
        return createRecurry(
          func,
          bitmask,
          createHybrid,
          wrapper.placeholder,
          thisArg,
          args,
          newHolders,
          argPos,
          ary,
          arity - length,
        );
      }
      var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

      length = args.length;
      if (argPos) {
        args = reorder(args, argPos);
      } else if (isFlip && length > 1) {
        args.reverse();
      }
      if (isAry && ary < length) {
        args.length = ary;
      }
      if (this && this !== root && this instanceof wrapper) {
        fn = Ctor || createCtor(fn);
      }
      return fn.apply(thisBinding, args);
    }
    return wrapper;
  }

  /**
   * Creates a function that wraps `func` to enable currying.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @param {number} arity The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */
  function createCurry(func, bitmask, arity) {
    var Ctor = createCtor(func);

    function wrapper() {
      var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

      while (index--) {
        args[index] = arguments[index];
      }
      var holders =
        length < 3 &&
        args[0] !== placeholder &&
        args[length - 1] !== placeholder
          ? []
          : replaceHolders(args, placeholder);

      length -= holders.length;
      if (length < arity) {
        return createRecurry(
          func,
          bitmask,
          createHybrid,
          wrapper.placeholder,
          undefined,
          args,
          holders,
          undefined,
          undefined,
          arity - length,
        );
      }
      var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
      return apply(fn, this, args);
    }
    return wrapper;
  }

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG$2 = 1;

  /**
   * Creates a function that wraps `func` to invoke it with the `this` binding
   * of `thisArg` and `partials` prepended to the arguments it receives.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} partials The arguments to prepend to those provided to
   *  the new function.
   * @returns {Function} Returns the new wrapped function.
   */
  function createPartial(func, bitmask, thisArg, partials) {
    var isBind = bitmask & WRAP_BIND_FLAG$2,
      Ctor = createCtor(func);

    function wrapper() {
      var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = this && this !== root && this instanceof wrapper ? Ctor : func;

      while (++leftIndex < leftLength) {
        args[leftIndex] = partials[leftIndex];
      }
      while (argsLength--) {
        args[leftIndex++] = arguments[++argsIndex];
      }
      return apply(fn, isBind ? thisArg : this, args);
    }
    return wrapper;
  }

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG$1 = 1,
    WRAP_BIND_KEY_FLAG$1 = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG$1 = 8,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMin = Math.min;

  /**
   * Merges the function metadata of `source` into `data`.
   *
   * Merging metadata reduces the number of wrappers used to invoke a function.
   * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
   * may be applied regardless of execution order. Methods like `_.ary` and
   * `_.rearg` modify function arguments, making the order in which they are
   * executed important, preventing the merging of metadata. However, we make
   * an exception for a safe combined case where curried functions have `_.ary`
   * and or `_.rearg` applied.
   *
   * @private
   * @param {Array} data The destination metadata.
   * @param {Array} source The source metadata.
   * @returns {Array} Returns `data`.
   */
  function mergeData(data, source) {
    var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon =
        newBitmask < (WRAP_BIND_FLAG$1 | WRAP_BIND_KEY_FLAG$1 | WRAP_ARY_FLAG);

    var isCombo =
      (srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG$1) ||
      (srcBitmask == WRAP_ARY_FLAG &&
        bitmask == WRAP_REARG_FLAG &&
        data[7].length <= source[8]) ||
      (srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) &&
        source[7].length <= source[8] &&
        bitmask == WRAP_CURRY_FLAG$1);

    // Exit early if metadata can't be merged.
    if (!(isCommon || isCombo)) {
      return data;
    }
    // Use source `thisArg` if available.
    if (srcBitmask & WRAP_BIND_FLAG$1) {
      data[2] = source[2];
      // Set when currying a bound function.
      newBitmask |= bitmask & WRAP_BIND_FLAG$1 ? 0 : WRAP_CURRY_BOUND_FLAG;
    }
    // Compose partial arguments.
    var value = source[3];
    if (value) {
      var partials = data[3];
      data[3] = partials ? composeArgs(partials, value, source[4]) : value;
      data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
    }
    // Compose partial right arguments.
    value = source[5];
    if (value) {
      partials = data[5];
      data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
      data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
    }
    // Use source `argPos` if available.
    value = source[7];
    if (value) {
      data[7] = value;
    }
    // Use source `ary` if it's smaller.
    if (srcBitmask & WRAP_ARY_FLAG) {
      data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
    }
    // Use source `arity` if one is not provided.
    if (data[9] == null) {
      data[9] = source[9];
    }
    // Use source `func` and merge bitmasks.
    data[0] = source[0];
    data[1] = newBitmask;

    return data;
  }

  /** Used to match a single whitespace character. */
  var reWhitespace = /\s/;

  /**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
   * character of `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the index of the last non-whitespace character.
   */
  function trimmedEndIndex(string) {
    var index = string.length;

    while (index-- && reWhitespace.test(string.charAt(index))) {}
    return index;
  }

  /** Used to match leading whitespace. */
  var reTrimStart = /^\s+/;

  /**
   * The base implementation of `_.trim`.
   *
   * @private
   * @param {string} string The string to trim.
   * @returns {string} Returns the trimmed string.
   */
  function baseTrim(string) {
    return string
      ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
      : string;
  }

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return (
      typeof value == 'symbol' ||
      (isObjectLike(value) && baseGetTag(value) == symbolTag)
    );
  }

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value)
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : reIsBadHex.test(value)
      ? NAN
      : +value;
  }

  /** Used as references for various `Number` constants. */
  var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e308;

  /**
   * Converts `value` to a finite number.
   *
   * @static
   * @memberOf _
   * @since 4.12.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted number.
   * @example
   *
   * _.toFinite(3.2);
   * // => 3.2
   *
   * _.toFinite(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toFinite(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toFinite('3.2');
   * // => 3.2
   */
  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
      var sign = value < 0 ? -1 : 1;
      return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
  }

  /**
   * Converts `value` to an integer.
   *
   * **Note:** This method is loosely based on
   * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.toInteger(3.2);
   * // => 3
   *
   * _.toInteger(Number.MIN_VALUE);
   * // => 0
   *
   * _.toInteger(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toInteger('3.2');
   * // => 3
   */
  function toInteger(value) {
    var result = toFinite(value),
      remainder = result % 1;

    return result === result ? (remainder ? result - remainder : result) : 0;
  }

  /** Error message constants. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /** Used to compose bitmasks for function metadata. */
  var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG$1 = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;

  /**
   * Creates a function that either curries or invokes `func` with optional
   * `this` binding and partially applied arguments.
   *
   * @private
   * @param {Function|string} func The function or method name to wrap.
   * @param {number} bitmask The bitmask flags.
   *    1 - `_.bind`
   *    2 - `_.bindKey`
   *    4 - `_.curry` or `_.curryRight` of a bound function
   *    8 - `_.curry`
   *   16 - `_.curryRight`
   *   32 - `_.partial`
   *   64 - `_.partialRight`
   *  128 - `_.rearg`
   *  256 - `_.ary`
   *  512 - `_.flip`
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {Array} [partials] The arguments to be partially applied.
   * @param {Array} [holders] The `partials` placeholder indexes.
   * @param {Array} [argPos] The argument positions of the new function.
   * @param {number} [ary] The arity cap of `func`.
   * @param {number} [arity] The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */
  function createWrap(
    func,
    bitmask,
    thisArg,
    partials,
    holders,
    argPos,
    ary,
    arity,
  ) {
    var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
    if (!isBindKey && typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    var length = partials ? partials.length : 0;
    if (!length) {
      bitmask &= ~(WRAP_PARTIAL_FLAG$1 | WRAP_PARTIAL_RIGHT_FLAG);
      partials = holders = undefined;
    }
    ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
    arity = arity === undefined ? arity : toInteger(arity);
    length -= holders ? holders.length : 0;

    if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
      var partialsRight = partials,
        holdersRight = holders;

      partials = holders = undefined;
    }
    var data = isBindKey ? undefined : getData(func);

    var newData = [
      func,
      bitmask,
      thisArg,
      partials,
      holders,
      partialsRight,
      holdersRight,
      argPos,
      ary,
      arity,
    ];

    if (data) {
      mergeData(newData, data);
    }
    func = newData[0];
    bitmask = newData[1];
    thisArg = newData[2];
    partials = newData[3];
    holders = newData[4];
    arity = newData[9] =
      newData[9] === undefined
        ? isBindKey
          ? 0
          : func.length
        : nativeMax(newData[9] - length, 0);

    if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
      bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
    }
    if (!bitmask || bitmask == WRAP_BIND_FLAG) {
      var result = createBind(func, bitmask, thisArg);
    } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
      result = createCurry(func, bitmask, arity);
    } else if (
      (bitmask == WRAP_PARTIAL_FLAG$1 ||
        bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG$1)) &&
      !holders.length
    ) {
      result = createPartial(func, bitmask, thisArg, partials);
    } else {
      result = createHybrid.apply(undefined, newData);
    }
    var setter = data ? baseSetData : setData;
    return setWrapToString(setter(result, newData), func, bitmask);
  }

  /** Used to compose bitmasks for function metadata. */
  var WRAP_PARTIAL_FLAG = 32;

  /**
   * Creates a function that invokes `func` with `partials` prepended to the
   * arguments it receives. This method is like `_.bind` except it does **not**
   * alter the `this` binding.
   *
   * The `_.partial.placeholder` value, which defaults to `_` in monolithic
   * builds, may be used as a placeholder for partially applied arguments.
   *
   * **Note:** This method doesn't set the "length" property of partially
   * applied functions.
   *
   * @static
   * @memberOf _
   * @since 0.2.0
   * @category Function
   * @param {Function} func The function to partially apply arguments to.
   * @param {...*} [partials] The arguments to be partially applied.
   * @returns {Function} Returns the new partially applied function.
   * @example
   *
   * function greet(greeting, name) {
   *   return greeting + ' ' + name;
   * }
   *
   * var sayHelloTo = _.partial(greet, 'hello');
   * sayHelloTo('fred');
   * // => 'hello fred'
   *
   * // Partially applied with placeholders.
   * var greetFred = _.partial(greet, _, 'fred');
   * greetFred('hi');
   * // => 'hi fred'
   */
  var partial = baseRest(function (func, partials) {
    var holders = replaceHolders(partials, getHolder(partial));
    return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
  });

  // Assign default placeholders.
  partial.placeholder = {};

  var partial$1 = partial;

  const ConfirmDialog = ({ open, title, message, okLabel, onOk, onCancel }) => {
    const handleClose = (_, reason) => {
      if (reason !== 'backdropClick') {
        onCancel();
      }
    };
    return React$3.createElement(
      Dialog$1,
      {
        onClose: handleClose,
        open: open,
        'aria-labelledby': 'confirm-dialog-title',
      },
      React$3.createElement(
        DialogTitle$1,
        { id: 'confirm-dialog-title' },
        title,
      ),
      React$3.createElement(
        DialogContent$1,
        null,
        React$3.createElement(Typography$1, null, message),
      ),
      React$3.createElement(
        DialogActions$1,
        null,
        React$3.createElement(Button$1, { onClick: onCancel }, 'Cancel'),
        React$3.createElement(
          Button$1,
          { color: 'primary', onClick: onOk },
          okLabel,
        ),
      ),
    );
  };

  function isNameValid(name) {
    // name must be in the following format: username/repository_name
    return /^[^\/]+\/[^\/]+$/.test(name);
  }
  const RepoDialog = (props) => {
    const [name, setName] = React$3.useState('');
    const [submitAttempted, setSubmitAttempted] = React$3.useState(false);
    React$3.useEffect(() => {
      if (props.open) {
        setName(props.kind === 'update' ? props.initialName : '');
        setSubmitAttempted(false);
      }
    }, [props.open]);
    const title =
      props.kind === 'create' ? 'Add repository' : 'Update repository';
    const submitBtnLabel = props.kind === 'create' ? 'Create' : 'Update';
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
    const handleClose = (_, reason) => {
      if (reason !== 'backdropClick') {
        props.onCancel();
      }
    };
    const handleSubmit = () => {
      if (isNameValid(name)) {
        props.onSubmit(name);
      }
      setSubmitAttempted(true);
    };
    return React$3.createElement(
      Dialog$1,
      {
        onClose: handleClose,
        open: props.open,
        'aria-labelledby': 'repo-dialog-title',
      },
      React$3.createElement(DialogTitle$1, { id: 'repo-dialog-title' }, title),
      React$3.createElement(
        DialogContent$1,
        null,
        React$3.createElement(
          FormControl$1,
          null,
          React$3.createElement(TextField$1, {
            id: 'rule-regex',
            required: true,
            error: !isNameValid(name) && submitAttempted,
            label: 'Repository name',
            placeholder: 'foo/bar',
            value: name,
            onChange: handleNameChange,
            fullWidth: true,
            autoFocus: true,
          }),
          React$3.createElement(
            FormHelperText$1,
            null,
            'This is the name of your github repository in the following format',
            React$3.createElement(
              'code',
              null,
              ' <username>/<repository name>',
            ),
          ),
        ),
      ),
      React$3.createElement(
        DialogActions$1,
        null,
        React$3.createElement(Button$1, { onClick: props.onCancel }, 'Cancel'),
        React$3.createElement(
          Button$1,
          { color: 'primary', onClick: handleSubmit },
          submitBtnLabel,
        ),
      ),
    );
  };

  const useStyles$4 = makeStyles((theme) => ({
    vbox: {
      display: 'grid',
      gridGap: theme.spacing(2),
    },
  }));
  const RuleDialog = (props) => {
    const [regex, setRegex] = React$3.useState('');
    const [hide, setHide] = React$3.useState(false);
    const [submitAttempted, setSubmitAttempted] = React$3.useState(false);
    React$3.useEffect(() => {
      if (props.open) {
        setRegex(props.kind === 'update' ? props.initialRegex : '');
        setHide(props.kind === 'update' ? props.initialHide : false);
        setSubmitAttempted(false);
      }
    }, [props.open]);
    const classes = useStyles$4();
    const title = props.kind === 'create' ? 'Add rule' : 'Update rule';
    const submitBtnLabel = props.kind === 'create' ? 'Create' : 'Update';
    const handleRegexChange = (event) => {
      setRegex(event.target.value);
    };
    const handleHideChange = (event) => {
      setHide(event.target.checked);
    };
    const handleClose = (_, reason) => {
      if (reason !== 'backdropClick') {
        props.onCancel();
      }
    };
    const handleSubmit = () => {
      if (regex.length > 0) {
        props.onSubmit(regex, hide);
      }
      setSubmitAttempted(true);
    };
    return React$3.createElement(
      Dialog$1,
      {
        onClose: handleClose,
        open: props.open,
        'aria-labelledby': 'rule-dialog-title',
      },
      React$3.createElement(DialogTitle$1, { id: 'rule-dialog-title' }, title),
      React$3.createElement(
        DialogContent$1,
        null,
        React$3.createElement(
          'div',
          { className: classes.vbox },
          React$3.createElement(
            FormControl$1,
            null,
            React$3.createElement(TextField$1, {
              id: 'rule-regex',
              required: true,
              error: regex === '' && submitAttempted,
              label: 'Regex',
              placeholder: '^.*\\.snap$',
              value: regex,
              onChange: handleRegexChange,
              fullWidth: true,
              autoFocus: true,
            }),
            React$3.createElement(
              FormHelperText$1,
              null,
              'The files matched by this regular expression will be approved automatically',
            ),
          ),
          React$3.createElement(
            FormControl$1,
            null,
            React$3.createElement(FormControlLabel$1, {
              label: 'Hide',
              control: React$3.createElement(Checkbox$1, {
                checked: hide,
                onChange: handleHideChange,
              }),
            }),
            React$3.createElement(
              FormHelperText$1,
              null,
              'Select this option to also hide the files matched by the regular expression',
            ),
          ),
        ),
      ),
      React$3.createElement(
        DialogActions$1,
        null,
        React$3.createElement(Button$1, { onClick: props.onCancel }, 'Cancel'),
        React$3.createElement(
          Button$1,
          { color: 'primary', onClick: handleSubmit },
          submitBtnLabel,
        ),
      ),
    );
  };

  const useStyles$3 = makeStyles((theme) => ({
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    rule: {
      display: 'grid',
      gridTemplateColumns: 'auto auto',
      gridGap: theme.spacing(2),
      alignItems: 'center',
    },
    regex: {
      padding: theme.spacing(0.5),
      border: `2px solid ${theme.palette.secondary.main}`,
      borderRadius: 4,
      backgroundColor: theme.palette.background.default,
      color: theme.palette.secondary.main,
    },
    toolbar: {
      display: 'grid',
      gridAutoFlow: 'column',
    },
  }));
  const Rule = ({ rule, onDeleteRule, onUpdateRule }) => {
    const [showEditDialog, setShowEditDialog] = React$3.useState(false);
    const [showConfirmDeleteDialog, setShowConfirmDeleteDialog] =
      React$3.useState(false);
    const classes = useStyles$3();
    const onEdit = () => {
      setShowEditDialog(true);
    };
    const onCancel = () => {
      setShowEditDialog(false);
    };
    const onSubmit = (newRegex, newHide) => {
      setShowEditDialog(false);
      onUpdateRule(newRegex, newHide);
    };
    const onOpenConfirmDeleteDialog = () => {
      setShowConfirmDeleteDialog(true);
    };
    const onCancelDelete = () => {
      setShowConfirmDeleteDialog(false);
    };
    const onConfirmDelete = () => {
      setShowConfirmDeleteDialog(false);
      onDeleteRule();
    };
    return React$3.createElement(
      'div',
      { className: classes.container },
      React$3.createElement(
        'div',
        { className: classes.rule },
        React$3.createElement(
          Typography$1,
          null,
          React$3.createElement(
            'code',
            { className: classes.regex },
            rule.regex,
          ),
        ),
        rule.hide &&
          React$3.createElement(
            Typography$1,
            null,
            React$3.createElement('em', null, 'Hidden'),
          ),
      ),
      React$3.createElement(
        'div',
        { className: classes.toolbar },
        React$3.createElement(
          IconButton$1,
          { 'aria-label': 'Edit rule', onClick: onEdit },
          React$3.createElement(default_1$1, { fontSize: 'small' }),
        ),
        React$3.createElement(
          IconButton$1,
          { 'aria-label': 'Delete rule', onClick: onOpenConfirmDeleteDialog },
          React$3.createElement(default_1, { fontSize: 'small' }),
        ),
      ),
      React$3.createElement(RuleDialog, {
        kind: 'update',
        initialRegex: rule.regex,
        initialHide: rule.hide,
        open: showEditDialog,
        onCancel: onCancel,
        onSubmit: onSubmit,
      }),
      React$3.createElement(ConfirmDialog, {
        open: showConfirmDeleteDialog,
        title: 'Delete rule?',
        message: 'This action cannot be undone',
        okLabel: 'Delete',
        onCancel: onCancelDelete,
        onOk: onConfirmDelete,
      }),
    );
  };

  const useStyles$2 = makeStyles((theme) => ({
    message: {
      display: 'grid',
      gridGap: theme.spacing(2),
      justifyItems: 'center',
      padding: theme.spacing(4),
    },
  }));
  const Repo = ({
    repo,
    onDelete,
    onEditName,
    onAddRule,
    onUpdateRule,
    onDeleteRule,
    onUpdateAutogenerated,
  }) => {
    const classes = useStyles$2();
    const [showRuleDialog, setShowRuleDialog] = React$3.useState(false);
    const [showRepoDialog, setShowRepoDialog] = React$3.useState(false);
    const [showConfirmDeleteDialog, setShowConfirmDeleteDialog] =
      React$3.useState(false);
    const onShowCreateRuleDialog = () => {
      setShowRuleDialog(true);
    };
    const onCancelCreateRule = () => {
      setShowRuleDialog(false);
    };
    const onCreateRule = (regex, hide) => {
      setShowRuleDialog(false);
      onAddRule(regex, hide);
    };
    const onShowEditRepoDialog = () => {
      setShowRepoDialog(true);
    };
    const onCancelEditRepo = () => {
      setShowRepoDialog(false);
    };
    const onUpdateRepo = (name) => {
      setShowRepoDialog(false);
      onEditName(name);
    };
    const onOpenConfirmDeleteDialog = () => {
      setShowConfirmDeleteDialog(true);
    };
    const onCancelDelete = () => {
      setShowConfirmDeleteDialog(false);
    };
    const onConfirmDelete = () => {
      setShowConfirmDeleteDialog(false);
      onDelete();
    };
    const onToggleAutogenerated = (event) => {
      onUpdateAutogenerated(event.target.checked);
    };
    return React$3.createElement(
      React$3.Fragment,
      null,
      React$3.createElement(
        Card$1,
        { variant: 'outlined' },
        React$3.createElement(CardHeader$1, {
          title: repo.name || 'Unnamed',
          action: React$3.createElement(
            CardActions$1,
            null,
            React$3.createElement(
              Tooltip$1,
              { title: 'Add rule' },
              React$3.createElement(
                IconButton$1,
                { onClick: onShowCreateRuleDialog, 'aria-label': 'Add rule' },
                React$3.createElement(default_1$2, null),
              ),
            ),
            React$3.createElement(
              Tooltip$1,
              { title: 'Edit repository name' },
              React$3.createElement(
                IconButton$1,
                {
                  onClick: onShowEditRepoDialog,
                  'aria-label': 'Edit repository name',
                },
                React$3.createElement(default_1$1, null),
              ),
            ),
            React$3.createElement(
              Tooltip$1,
              { title: 'Delete repository' },
              React$3.createElement(
                IconButton$1,
                {
                  onClick: onOpenConfirmDeleteDialog,
                  'aria-label': 'Delete repository',
                },
                React$3.createElement(default_1, null),
              ),
            ),
          ),
        }),
        React$3.createElement(Divider$1, { variant: 'middle' }),
        React$3.createElement(
          CardContent$1,
          null,
          repo.rules.length === 0 &&
            React$3.createElement(
              'div',
              { className: classes.message },
              React$3.createElement(
                Typography$1,
                null,
                'Add a rule to start marking as viewed files automatically in this repository',
              ),
              React$3.createElement(
                Button$1,
                {
                  variant: 'contained',
                  color: 'secondary',
                  onClick: onShowCreateRuleDialog,
                },
                'Add rule',
              ),
            ),
          repo.rules.length > 0 &&
            React$3.createElement(
              Ul,
              null,
              repo.rules.map((rule) => {
                return React$3.createElement(
                  Li,
                  { key: rule.id },
                  React$3.createElement(Rule, {
                    key: rule.id,
                    rule: rule,
                    onUpdateRule: partial$1(onUpdateRule, rule.id),
                    onDeleteRule: partial$1(onDeleteRule, rule.id),
                  }),
                );
              }),
            ),
        ),
        React$3.createElement(Divider$1, { variant: 'middle' }),
        React$3.createElement(
          CardContent$1,
          null,
          React$3.createElement(
            FormControl$1,
            null,
            React$3.createElement(FormControlLabel$1, {
              label: 'Auto approve auto-generated files',
              control: React$3.createElement(Checkbox$1, {
                checked: repo.autogenerated,
                onChange: onToggleAutogenerated,
              }),
            }),
            React$3.createElement(
              FormHelperText$1,
              null,
              'Depending on your settings, GitHub can recognise autogenerated files. When this option is enabled, those files will be auto approved.',
            ),
          ),
        ),
      ),
      React$3.createElement(RuleDialog, {
        kind: 'create',
        onCancel: onCancelCreateRule,
        onSubmit: onCreateRule,
        open: showRuleDialog,
      }),
      React$3.createElement(RepoDialog, {
        kind: 'update',
        initialName: repo.name,
        onCancel: onCancelEditRepo,
        onSubmit: onUpdateRepo,
        open: showRepoDialog,
      }),
      React$3.createElement(ConfirmDialog, {
        open: showConfirmDeleteDialog,
        title: 'Delete repository?',
        message: 'This action cannot be undone',
        okLabel: 'Delete',
        onCancel: onCancelDelete,
        onOk: onConfirmDelete,
      }),
    );
  };

  function createReducer(onChange) {
    return (state, action) => {
      const nextState = reducer(state, action);
      onChange(nextState);
      return nextState;
    };
  }
  const useStyles$1 = makeStyles((theme) => ({
    vbox: {
      display: 'grid',
      gridRowGap: theme.spacing(2),
    },
    message: {
      display: 'flex',
      flexDirection: 'column',
      justifyItems: 'center',
      alignItems: 'center',
      padding: theme.spacing(4),
    },
  }));
  const RepoList = ({ extensionId, initialRepoList, onChange }) => {
    const [state, dispatch] = react.exports.useReducer(
      createReducer(onChange),
      initialRepoList,
    );
    const [showRepoDialog, setShowRepoDialog] = react.exports.useState(false);
    const classes = useStyles$1();
    const onShowCreateRepoDialog = () => {
      setShowRepoDialog(true);
    };
    const onCancelCreateRepo = () => {
      setShowRepoDialog(false);
    };
    const onCreateRepo = (name) => {
      setShowRepoDialog(false);
      dispatch({ kind: 'ADD_REPO', name });
    };
    const addRepoBtn = React$3.createElement(
      Button$1,
      {
        variant: 'contained',
        color: 'primary',
        onClick: onShowCreateRepoDialog,
      },
      'Add repository',
    );
    return React$3.createElement(
      'div',
      null,
      state.repos.length > 0 &&
        React$3.createElement(
          'div',
          { className: classes.vbox },
          React$3.createElement(
            Ul,
            { className: classes.vbox },
            state.repos.map((repo) => {
              const onDelete = () => {
                dispatch({ kind: 'DELETE_REPO', repoId: repo.id });
              };
              const onEditName = (newName) => {
                dispatch({
                  kind: 'UPDATE_REPO_NAME',
                  repoId: repo.id,
                  newName,
                });
              };
              const onAddRule = (regex, hide) => {
                dispatch({ kind: 'ADD_RULE', repoId: repo.id, regex, hide });
              };
              const onUpdateRule = (ruleId, newRegex, newHide) => {
                dispatch({
                  kind: 'UPDATE_RULE',
                  repoId: repo.id,
                  ruleId,
                  newRegex,
                  newHide,
                });
              };
              const onDeleteRule = (ruleId) => {
                dispatch({
                  kind: 'DELETE_RULE',
                  repoId: repo.id,
                  ruleId,
                });
              };
              const onUpdateAutogenerated = (autogenerated) => {
                dispatch({
                  kind: 'UPDATE_AUTOGENERATED',
                  repoId: repo.id,
                  autogenerated,
                });
              };
              return React$3.createElement(
                Li,
                { key: repo.id },
                React$3.createElement(Repo, {
                  key: repo.id,
                  repo: repo,
                  onDelete: onDelete,
                  onEditName: onEditName,
                  onAddRule: onAddRule,
                  onUpdateRule: onUpdateRule,
                  onDeleteRule: onDeleteRule,
                  onUpdateAutogenerated: onUpdateAutogenerated,
                }),
              );
            }),
          ),
          React$3.createElement('div', null, addRepoBtn),
        ),
      state.repos.length === 0 &&
        React$3.createElement(
          'div',
          { className: classes.message },
          React$3.createElement(
            Typography$1,
            { gutterBottom: true },
            'Thanks for installing',
            ' ',
            React$3.createElement(
              'a',
              {
                target: '_blank',
                rel: 'noreferrer',
                href: `https://chrome.google.com/webstore/detail/${extensionId}`,
              },
              'this extension',
            ),
            '.',
          ),
          React$3.createElement(
            Typography$1,
            { gutterBottom: true },
            'Speed up your code reviews by adding your first GitHub repository.',
          ),
          React$3.createElement(Box$1, { p: 2 }, addRepoBtn),
        ),
      React$3.createElement(RepoDialog, {
        kind: 'create',
        open: showRepoDialog,
        onCancel: onCancelCreateRepo,
        onSubmit: onCreateRepo,
      }),
    );
  };

  const useStyles = makeStyles(() => ({
    title: {
      flexGrow: 1,
    },
  }));
  const Main = ({ onChange, initialRepoList }) => {
    const classes = useStyles();
    return React$3.createElement(
      React$3.Fragment,
      null,
      React$3.createElement(
        AppBar$1,
        { position: 'static' },
        React$3.createElement(
          Toolbar$1,
          null,
          React$3.createElement(
            Typography$1,
            { className: classes.title, variant: 'h6' },
            'Autoviewed options',
          ),
          React$3.createElement(
            Button$1,
            {
              href: 'https://github.com/Luismahou/autoviewed#introduction',
              target: '_blank',
              rel: 'noreferrer',
              color: 'inherit',
            },
            'I need help',
          ),
        ),
      ),
      React$3.createElement(Box$1, { p: 1 }),
      React$3.createElement(
        Container$1,
        null,
        React$3.createElement(RepoList, {
          extensionId: chrome.runtime.id,
          onChange: onChange,
          initialRepoList: initialRepoList,
        }),
      ),
    );
  };

  chrome.storage.sync.get(['db'], (result) => {
    const initialRepoList = 'db' in result ? result.db : { repos: [] };
    const onChange = (repoList) => {
      chrome.storage.sync.set({ db: repoList });
    };
    const App = () =>
      React$3.createElement(
        React$3.Fragment,
        null,
        React$3.createElement(CssBaseline$1, null),
        React$3.createElement(Main, {
          onChange: onChange,
          initialRepoList: initialRepoList,
        }),
      );
    ReactDOM.render(
      React$3.createElement(App, null),
      document.getElementById('app'),
    );
  });
})();
//# sourceMappingURL=options.js.map
