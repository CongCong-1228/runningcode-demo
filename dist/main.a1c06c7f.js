// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"epB2":[function(require,module,exports) {
var span = document.querySelector("#span");
var style = document.querySelector("#style");
var n = 0;
var string2 = "";
var string = "/*\u4F60\u597D\uFF0C\u6211\u53EBretblank\uFF0C\u662F\u4E00\u4E2A\u524D\u7AEF\u5C0F\u767D\u3002\n* \u63A5\u4E0B\u6765\u6211\u6F14\u793A\u4E00\u4E0B\u6211\u7684\u524D\u7AEF\u529F\u5E95\u3002\u9996\u5148\u6211\u8981\u51C6\u5907\u4E00\u4E2Adiv\uFF0C\u73B0\u5728\u6211\u6765\u628A\u8FD9\u4E2Adiv\u53D8\u6210\u4E00\u4E2A\u5706\uFF0C\n*/\n#div1 {\n    box-shadow:0 0 3px rgba(0,0,0,.5);\n    border-radius:50%;\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);\n}\n#wrapper {\n    border-radius:50%;\n    border:none;\n    \n}\n/*\n* \u6211\u4E0B\u9762\u52A0\u4E0A\u4E24\u4E2A\u5C0F\u5706\uFF0C\u4F60\u770B\u4ED4\u7EC6\u4E86\n*/\n#div1::before{\n    top:0px;\n    border-radius:50%;\n    left:50%;\n    transform:translateX(-50%);\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n\n}\n#div1::after{\n    bottom:0px;\n    left:50%;\n    transform:translateX(-50%);\n    border-radius:50%;\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n\n}\n/*\n* \u6700\u540E\u6211\u6765\u7ED9\u6211\u81EA\u5DF1\u6574\u4E2A\u80CC\u666F*/\n#span {\n    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);\n}\n\n";

var step = function step() {
    setTimeout(function () {

        if (string[n] === '\n') {
            string2 += '<br>';
        } else if (string[n] === ' ') {
            string2 += '&nbsp;';
        } else {
            string2 += string[n];
        }
        console.log(string2);
        span.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, 99999);
        span.scrollTo(0, 9999);
        if (n < string.length - 1) {
            step();
            n += 1;
        }
    }, 10);
};

step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.a1c06c7f.map